---
sidebar_position: 2
---

# Cross-chain Infrastructure

This document provides a detailed overview of Dodao's cross-chain infrastructure, explaining how different protocols are integrated and utilized within the platform.

## Overview

Dodao implements a multi-protocol approach to cross-chain communication, leveraging several leading protocols to ensure reliable and secure cross-chain operations. This approach provides:

- Protocol redundancy and fallback options
- Chain-specific optimizations
- Maximum network coverage
- Enhanced security through protocol diversity

## Protocol Integrations

### Axelar General Message Passing (GMP)

Axelar GMP enables secure cross-chain communication through:

```solidity
interface IAxelarGMP {
    function sendMessage(
        string calldata destinationChain,
        string calldata destinationAddress,
        bytes calldata payload
    ) external payable;
    
    function executeMessage(
        bytes calldata sourceChain,
        bytes calldata sourceAddress,
        bytes calldata payload
    ) external;
}
```

Key Features:
- Proof-of-stake security model
- Gas-efficient message passing
- Native token transfers
- Composable cross-chain calls

Implementation:
```solidity
contract AxelarFacet {
    // Axelar gateway contract
    IAxelarGateway public gateway;
    
    // Gas service for paying execution fees
    IAxelarGasService public gasService;
    
    function sendCrossChainMessage(
        string calldata destinationChain,
        string calldata destinationAddress,
        bytes calldata payload
    ) external payable {
        // Pay for gas on destination chain
        gasService.payNativeGasForContractCall{value: msg.value}(
            address(this),
            destinationChain,
            destinationAddress,
            payload,
            msg.sender
        );
        
        // Send the message
        gateway.callContract(
            destinationChain,
            destinationAddress,
            payload
        );
    }
}
```

### Hyperlane

Hyperlane provides modular interchain communication through:

```solidity
interface IHyperlane {
    function dispatchMessage(
        uint32 destinationDomain,
        bytes32 recipientAddress,
        bytes calldata messageBody
    ) external returns (bytes32);
    
    function handle(
        uint32 origin,
        bytes32 sender,
        bytes calldata message
    ) external;
}
```

Key Features:
- Modular security model
- Customizable validation
- Optimistic message passing
- ISM (Interchain Security Module) flexibility

Implementation:
```solidity
contract HyperlaneFacet is IMessageRecipient {
    // Hyperlane mailbox contract
    IMailbox public mailbox;
    
    // ISM for message verification
    IInterchainSecurityModule public ism;
    
    function sendMessage(
        uint32 destinationDomain,
        bytes32 recipient,
        bytes calldata message
    ) external payable {
        // Send message through Hyperlane mailbox
        mailbox.dispatch{value: msg.value}(
            destinationDomain,
            recipient,
            message
        );
    }
    
    function handle(
        uint32 origin,
        bytes32 sender,
        bytes calldata message
    ) external {
        require(msg.sender == address(mailbox), "Only mailbox");
        // Process the received message
        _processMessage(origin, sender, message);
    }
}
```

### LayerZero

LayerZero enables omnichain interoperability through:

```solidity
interface ILayerZero {
    function send(
        uint16 _dstChainId,
        bytes calldata _destination,
        bytes calldata _payload,
        address payable _refundAddress,
        address _zroPaymentAddress,
        bytes calldata _adapterParams
    ) external payable;
    
    function lzReceive(
        uint16 _srcChainId,
        bytes calldata _srcAddress,
        uint64 _nonce,
        bytes calldata _payload
    ) external;
}
```

Key Features:
- Ultra-light nodes
- Configurable oracle and relayer services
- Cross-chain messaging with proof validation
- Native message passing

Implementation:
```solidity
contract LayerZeroFacet is ILayerZeroReceiver {
    // LayerZero endpoint contract
    ILayerZeroEndpoint public endpoint;
    
    function sendMessage(
        uint16 dstChainId,
        bytes calldata destination,
        bytes calldata payload
    ) external payable {
        // Get the fee for sending message
        (uint256 messageFee,) = endpoint.estimateFees(
            dstChainId,
            address(this),
            payload,
            false,
            bytes("")
        );
        
        require(msg.value >= messageFee, "Insufficient fee");
        
        // Send the message
        endpoint.send{value: msg.value}(
            dstChainId,
            destination,
            payload,
            payable(msg.sender),
            address(0x0),
            bytes("")
        );
    }
    
    function lzReceive(
        uint16 srcChainId,
        bytes calldata srcAddress,
        uint64 nonce,
        bytes calldata payload
    ) external override {
        require(msg.sender == address(endpoint), "Invalid endpoint");
        // Process the received message
        _processMessage(srcChainId, srcAddress, payload);
    }
}
```

### Wormhole

Wormhole provides cross-chain messaging through:

```solidity
interface IWormhole {
    function publishMessage(
        uint32 nonce,
        bytes memory payload,
        uint8 consistencyLevel
    ) external payable returns (uint64 sequence);
    
    function parseAndVerifyVM(
        bytes calldata encodedVM
    ) external view returns (
        IWormhole.VM memory vm,
        bool valid,
        string memory reason
    );
}
```

Key Features:
- Guardian network security
- VAA (Verified Action Approval) system
- Token bridge integration
- Cross-chain NFT transfers

Implementation:
```solidity
contract WormholeFacet {
    // Wormhole core bridge contract
    IWormhole public wormhole;
    
    function sendMessage(
        bytes memory payload,
        uint8 consistencyLevel
    ) external payable returns (uint64) {
        // Send message through Wormhole
        return wormhole.publishMessage{value: msg.value}(
            0, // nonce
            payload,
            consistencyLevel
        );
    }
    
    function receiveMessage(
        bytes memory encodedVM
    ) external {
        // Verify and parse the VAA
        (IWormhole.VM memory vm, bool valid, string memory reason) = 
            wormhole.parseAndVerifyVM(encodedVM);
            
        require(valid, reason);
        
        // Process the verified message
        _processMessage(vm.payload);
    }
}
```

## Protocol Selection Strategy

Dodao implements a smart protocol selection strategy that considers:

1. **Cost Optimization**
   - Gas fees on source/destination chains
   - Protocol-specific fees
   - Message size optimization

2. **Speed Requirements**
   - Time-sensitive operations
   - Confirmation requirements
   - Chain finality considerations

3. **Security Considerations**
   - Value being transferred
   - Operation criticality
   - Protocol security guarantees

4. **Network Support**
   - Chain availability per protocol
   - Protocol stability on chains
   - Network congestion

## Message Processing and Verification

### Message Structure

```solidity
struct CrossChainMessage {
    uint256 messageType;    // Type of cross-chain operation
    bytes32 messageId;      // Unique message identifier
    address sender;         // Original message sender
    bytes payload;          // Message payload
    uint256 timestamp;      // Message timestamp
}
```

### Verification Process

1. **Source Verification**
   - Validate source chain
   - Verify sender credentials
   - Check message format

2. **Content Validation**
   - Payload integrity check
   - Parameter validation
   - State precondition verification

3. **Execution Authorization**
   - Permission verification
   - Resource availability check
   - Rate limiting enforcement

## Error Handling and Recovery

### Error Types

1. **Protocol Errors**
   - Message delivery failures
   - Timeout issues
   - Network congestion

2. **Validation Errors**
   - Invalid message format
   - Failed security checks
   - State inconsistencies

3. **Execution Errors**
   - Insufficient resources
   - State conflicts
   - Business logic failures

### Recovery Mechanisms

1. **Message Retry**
   ```solidity
   function retryMessage(
       bytes32 messageId,
       uint8 protocol,
       bytes calldata message
   ) external {
       require(failedMessages[messageId], "Message not failed");
       // Attempt to resend through specified protocol
       _sendMessageWithProtocol(protocol, message);
   }
   ```

2. **Protocol Fallback**
   ```solidity
   function executeWithFallback(
       bytes32 messageId,
       uint8[] calldata protocolPriority
   ) external {
       for (uint i = 0; i < protocolPriority.length; i++) {
           try _executeWithProtocol(protocolPriority[i], messageId) {
               return;
           } catch {
               continue;
           }
       }
       revert("All protocols failed");
   }
   ```

## Protocol Optimization

The platform now implements an intelligent protocol selection system that optimizes cross-chain operations based on multiple factors:

1. **Dynamic Protocol Selection**
   - Real-time gas cost analysis across protocols
   - Success rate tracking and optimization
   - Chain-specific protocol performance metrics
   - Message size efficiency calculations

2. **Cost Optimization**
   - Automated fee calculation and optimization
   - Historical gas cost analysis
   - Protocol-specific cost tracking
   - Dynamic fee adjustment based on network conditions

3. **Performance Analytics**
   - Protocol success rate monitoring
   - Message delivery time tracking
   - Chain-specific latency analysis
   - Protocol reliability metrics

## Future Improvements

1. **Security Enhancements**
   - Multi-protocol verification
   - Enhanced error recovery
   - Improved monitoring
   - Advanced threat detection

2. **Feature Expansion**
   - Additional protocol support
   - Enhanced message types
   - Improved state synchronization
   - Cross-chain NFT standards

## Resources

- [Axelar Documentation](https://docs.axelar.dev/)
- [Hyperlane Documentation](https://docs.hyperlane.xyz/)
- [LayerZero Documentation](https://layerzero.network/developers)
- [Wormhole Documentation](https://docs.wormhole.com/wormhole/)

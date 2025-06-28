---
sidebar_position: 1
---

# Developer Overview

![Strength in Partnership](../img/banners-new/Strength%20in%20Partnership.png)

**Build on Dodao.**

Remember when building decentralized applications meant choosing between different blockchains, wrestling with incompatible protocols, and spending months on infrastructure instead of innovation? Those days are over.

Dodao provides the foundation you've been waiting for: a battle-tested, cross-chain marketplace with Diamond pattern upgradability, four integrated bridge protocols, and APIs that actually make sense. We've solved the hard problems so you can focus on what matters – building amazing experiences for users.

Whether you're creating the next breakthrough DeFi protocol, launching an innovative NFT marketplace, or building tools that don't exist yet, Dodao gives you the infrastructure to make it happen. No more reinventing the wheel. No more choosing between networks. Just pure creative freedom backed by enterprise-grade technology.

This is your platform to build the future of work.

## Why build on Dodao?

Most blockchain platforms force you to choose between innovation and infrastructure. You either spend months building basic functionality from scratch, or you accept the limitations of existing solutions. Dodao eliminates this false choice by providing enterprise-grade infrastructure that grows with your vision.

### 💎 Diamond pattern architecture
Forget the days of deploying new contracts every time you need to add features. Our Diamond pattern implementation lets you upgrade functionality without breaking existing integrations or losing state. Build once, evolve forever.

### 🌐 Cross-chain by design
Why limit your application to one blockchain when users exist everywhere? Our native multi-protocol support means your app works on Ethereum, Polygon, Moonbeam, and beyond – without you having to become an expert in bridge protocols.

### 🔒 Battle-tested security
Security isn't an afterthought here. Multi-signature governance, economic incentives, and comprehensive protection mechanisms are built into the foundation. Focus on your application logic while we handle the security infrastructure.

### 📚 Complete documentation
No more guessing how things work or reverse-engineering from incomplete examples. Every function, every parameter, every integration pattern is documented with working code examples and real-world use cases.

## Platform architecture

**Engineering excellence that empowers your innovation.** We've spent months solving the hard problems so you can focus on what matters – building amazing experiences that change how people work.

### 🏗️ Smart contract system

**Architecture that grows with your ambitions.** While other platforms force you to choose between flexibility and stability, our Diamond pattern gives you both. Build once, evolve forever.

**Diamond pattern (EIP-2535) - the foundation of limitless growth:**
- Modular facet system for functionality isolation (clean separation that prevents conflicts)
- Upgradeable without migration or state loss (your users never lose their data or history)
- Gas-efficient proxy pattern implementation (optimization that saves money on every transaction)
- Backward compatibility guaranteed (your integrations never break, even as we evolve)

**Core facets - specialized tools for every need:**
- **TaskFacet** - Task lifecycle management (from creation to completion, automated and reliable)
- **PaymentFacet** - Multi-token escrow system (secure payments that work with any token)
- **UserFacet** - Account and reputation management (portable identity across all chains)
- **AuditFacet** - Dispute resolution system (fair conflict resolution that builds trust)
- **CrossChainFacet** - Multi-protocol bridge integration (seamless multi-chain operations)

*Each facet is a specialized tool designed to solve specific problems perfectly.*

### 🔗 Cross-chain infrastructure

**Freedom from blockchain limitations.** Why should your users be trapped on one network when opportunities exist everywhere? Our multi-protocol approach gives you access to every major blockchain ecosystem.

**Integrated protocols - redundancy that guarantees reliability:**
- **Axelar** - Secure cross-chain communication (proof-of-stake security with validator networks)
- **LayerZero** - Omnichain infrastructure (ultra-light nodes for efficient messaging)
- **Hyperlane** - Modular interoperability (customizable security models for your needs)
- **Wormhole** - Battle-tested messaging (billions in value secured across ecosystems)

**Protocol selection - intelligence that optimizes every transaction:**
- Automatic routing optimization (always find the fastest, cheapest path)
- Cost and speed analysis (real-time comparison across all available routes)
- Fallback mechanisms (redundancy that ensures transactions never fail)
- Real-time health monitoring (proactive detection and avoidance of network issues)

*Your users get the best possible experience while you get the reliability of multiple backup systems.*

### 🪙 Token economics

**Multi-token support:**
- Native tokens (ETH, MATIC, DEV)
- ERC-20 standard tokens
- Cross-chain stablecoins (USDC, USDT)
- NFTs (ERC-721, ERC-1155)

**Economic mechanisms:**
- Smart contract escrow
- Automated fee distribution
- Stake-based security
- Reputation-based incentives

## Development stack

**Tools that amplify your productivity.** We've curated the best technologies and integrated them seamlessly, so you can build faster without sacrificing quality or security.

### 🛠️ Core technologies

**Smart contracts - battle-tested foundations for your innovation:**
- **Solidity 0.8+** - Latest language features (cutting-edge capabilities with proven stability)
- **Diamond pattern** - Modular architecture (build complex systems that stay maintainable)
- **OpenZeppelin** - Security libraries (industry-standard security that's been battle-tested)
- **Hardhat** - Development framework (professional tooling that accelerates development)

**Cross-chain - seamless multi-network development:**
- **Axelar SDK** - Cross-chain messaging (secure communication across any blockchain)
- **LayerZero SDK** - Omnichain development (build once, deploy everywhere)
- **Hyperlane SDK** - Custom security models (tailor security to your specific needs)
- **Wormhole SDK** - Multi-chain transfers (move value efficiently across ecosystems)

**Frontend integration - user experiences that just work:**
- **Web3.js / Ethers.js** - Blockchain interaction (reliable connection to any network)
- **WalletConnect** - Multi-wallet support (let users choose their preferred wallet)
- **IPFS** - Decentralized storage (permanent, censorship-resistant file storage)
- **The Graph** - Data indexing (fast, reliable access to blockchain data)

*Every tool in our stack was chosen for reliability, performance, and developer experience.*

### 📡 Web3 integration architecture

**Direct contract interaction:**
- Real-time blockchain data queries
- Smart contract event listening
- Cross-chain bridge coordination
- On-chain reputation tracking

**Flutter web3dart integration:**
- Custom web3dart library for contract calls
- MetaMask and WalletConnect support
- Direct blockchain state queries
- Real-time event monitoring

**No backend dependencies:**
- Pure on-chain data access
- Decentralized storage via IPFS
- Direct wallet interactions
- Client-side transaction signing

## Integration options

### 🔌 Smart contract integration

**Direct contract calls:**
```solidity
// Example: Create task programmatically
interface IDodaoTasks {
    function createTask(
        string memory title,
        string memory description,
        uint256 payment,
        address paymentToken,
        uint256 deadline
    ) external payable returns (uint256 taskId);
}
```

**Diamond proxy interaction:**
```solidity
// Access specific facet functionality
IDiamondCut diamondCut = IDiamondCut(DODAO_DIAMOND);
ITaskFacet taskFacet = ITaskFacet(DODAO_DIAMOND);
```

### 🌐 Frontend integration

**Web3 connection:**
```javascript
// Connect to Dodao contracts
import { ethers } from 'ethers';
import DodaoABI from './abi/Dodao.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const dodao = new ethers.Contract(DODAO_ADDRESS, DodaoABI, provider);

// Create task
const tx = await dodao.createTask(
  "Build React component",
  "Responsive dashboard component with TypeScript",
  ethers.utils.parseEther("1.0"),
  ETH_ADDRESS,
  Math.floor(Date.now() / 1000) + 86400 * 7 // 1 week
);
```

**Cross-chain operations:**
```javascript
// Cross-chain task creation
import { AxelarGateway } from '@axelar-network/axelar-sdk';

const gateway = new AxelarGateway(provider);
await gateway.callContract(
  'polygon',
  DODAO_POLYGON_ADDRESS,
  payload
);
```

### 📱 Mobile integration

**React Native:**
```javascript
import { WalletConnect } from '@walletconnect/react-native';
import { DodaoSDK } from '@dodao/sdk';

const dodao = new DodaoSDK({
  provider: walletConnect,
  network: 'moonbase-alpha'
});

const tasks = await dodao.getTasks({
  category: 'development',
  minPayment: '0.1'
});
```

## Development workflows

**From idea to production in minutes, not months.** Our streamlined workflows eliminate the complexity that usually slows down blockchain development, letting you focus on building features that matter.

### 🚀 Quick start

**Go from zero to working integration faster than you thought possible.** We've eliminated the usual blockchain development friction with templates, examples, and tools that just work.

**1. Environment setup (one command to rule them all):**
```bash
# Clone starter template
git clone https://github.com/devopsdao/dodao-integration-template
cd dodao-integration-template

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Add your RPC URLs and contract addresses
```

**2. Basic integration (powerful functionality in just a few lines):**
```javascript
// Initialize Dodao SDK
import { Dodao } from '@dodao/sdk';

const dodao = new Dodao({
  network: 'moonbase-alpha',
  provider: window.ethereum
});

// Get available tasks
const tasks = await dodao.tasks.getAll();

// Create new task
const task = await dodao.tasks.create({
  title: "Smart contract audit",
  description: "Security review of DeFi protocol",
  payment: "5.0",
  token: "ETH",
  deadline: "2024-01-15"
});
```

**3. Advanced features (enterprise capabilities with simple APIs):**
```javascript
// Cross-chain task creation
const crossChainTask = await dodao.tasks.createCrossChain({
  sourceChain: 'polygon',
  targetChain: 'moonbeam',
  task: taskData
});

// Monitor task status
dodao.tasks.on('statusUpdate', (taskId, status) => {
  console.log(`Task ${taskId} status: ${status}`);
});
```

*Complex blockchain operations become as simple as calling a function.*

### 🔧 Testing and deployment

**Local development:**
```bash
# Start local blockchain
npx hardhat node

# Deploy contracts
npx hardhat deploy --network localhost

# Run tests
npx hardhat test
```

**Testnet deployment:**
```bash
# Deploy to Moonbase Alpha
npx hardhat deploy --network moonbase

# Verify contracts
npx hardhat verify --network moonbase DEPLOYED_ADDRESS
```

## Flutter Web3 Integration

**Direct blockchain integration with Flutter.** Our custom web3dart library provides seamless smart contract interaction without intermediary APIs or backends, giving you true decentralized application development.

### 📦 Flutter Dependencies

**Add web3dart to your Flutter project.** Get started with direct blockchain integration using our custom web3dart library.

```yaml
# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  web3dart: ^2.7.3
  flutter_web3: ^2.1.12
  walletconnect_dart: ^0.0.11
  http: ^1.1.0
```

### 🔧 Web3 Service Configuration

**Direct contract interaction setup.** Configure your Flutter app to interact directly with Dodao smart contracts across multiple chains.

```dart
import 'package:web3dart/web3dart.dart';
import 'package:http/http.dart';

class DodaoService {
  final Web3Client _client;
  final String _contractAddress;
  final int _chainId;
  Credentials? _credentials;
  
  DodaoService({
    required String rpcUrl,
    required String contractAddress,
    required int chainId,
  }) : _client = Web3Client(rpcUrl, Client()),
       _contractAddress = contractAddress,
       _chainId = chainId;
  
  // Network configurations
  static const networks = {
    'moonbase-alpha': {
      'rpcUrl': 'https://rpc.api.moonbase.moonbeam.network',
      'chainId': 1287,
      'contractAddress': '0x742d35Cc6634C0532925a3b8D4C9db96590c6C87',
    },
    'moonbeam': {
      'rpcUrl': 'https://rpc.api.moonbeam.network',
      'chainId': 1284,
      'contractAddress': '0x...',
    },
  };
}
```

*Direct blockchain access with no intermediary services or APIs.*

### 📋 Core Contract Methods

**Task management:**
```dart
// Get task details
Future<Task> getTask(BigInt taskId) async {
  final contract = _getContract();
  final function = contract.function('getTask');
  final result = await _client.call(
    contract: contract,
    function: function,
    params: [taskId],
  );
  return Task.fromContractResult(result.first);
}

// Create task
Future<String> createTask({
  required String title,
  required String description,
  required BigInt reward,
  required DateTime deadline,
}) async {
  final contract = _getContract();
  final function = contract.function('createTask');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [title, description, reward, 
                BigInt.from(deadline.millisecondsSinceEpoch ~/ 1000)],
  );
  return await _client.sendTransaction(_credentials!, transaction, chainId: _chainId);
}

// Apply for task
Future<String> applyForTask(BigInt taskId) async {
  final contract = _getContract();
  final function = contract.function('applyForTask');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [taskId],
  );
  return await _client.sendTransaction(_credentials!, transaction, chainId: _chainId);
}
```

**Account management:**
```dart
// Get account details
Future<Account> getAccount(EthereumAddress address) async {
  final contract = _getContract();
  final function = contract.function('getAccount');
  final result = await _client.call(
    contract: contract,
    function: function,
    params: [address],
  );
  return Account.fromContractResult(result.first);
}

// Update profile
Future<String> updateProfile(String profileHash) async {
  final contract = _getContract();
  final function = contract.function('updateProfile');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [profileHash],
  );
  return await _client.sendTransaction(_credentials!, transaction, chainId: _chainId);
}
```

**Cross-chain operations:**
```dart
// Bridge payment across chains
Future<String> bridgePayment({
  required BigInt taskId,
  required int targetChainId,
  required String bridgeProtocol,
}) async {
  final contract = _getContract();
  final function = contract.function('bridgePayment');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [taskId, BigInt.from(targetChainId), bridgeProtocol],
  );
  return await _client.sendTransaction(_credentials!, transaction, chainId: _chainId);
}
```

## Advanced integration

### 🤖 Automated workflows

**GitHub integration:**
```javascript
// Automatic task creation from GitHub issues
const githubWebhook = async (req, res) => {
  const { action, issue } = req.body;
  
  if (action === 'opened' && issue.labels.includes('bounty')) {
    await dodao.tasks.create({
      title: issue.title,
      description: issue.body,
      githubUrl: issue.html_url,
      payment: extractBountyAmount(issue.body),
      verification: {
        type: 'github',
        repository: issue.repository.full_name,
        issueNumber: issue.number
      }
    });
  }
};
```

**Oracle verification:**
```javascript
// Custom verification logic
const customVerification = {
  type: 'custom',
  verifier: async (taskId, submission) => {
    // Custom verification logic
    const isValid = await verifySubmission(submission);
    return {
      valid: isValid,
      score: calculateQualityScore(submission),
      feedback: generateFeedback(submission)
    };
  }
};

await dodao.tasks.create({
  ...taskData,
  verification: customVerification
});
```

### 🔗 Cross-chain automation

**Multi-chain task distribution:**
```javascript
// Distribute task across multiple chains
const multiChainTask = await dodao.tasks.createMultiChain({
  chains: ['moonbeam', 'polygon', 'scroll'],
  task: taskData,
  distribution: 'round-robin' // or 'cost-optimized'
});
```

**Automated arbitrage:**
```javascript
// Monitor cross-chain opportunities
dodao.on('crossChainOpportunity', async (opportunity) => {
  if (opportunity.profit > threshold) {
    await dodao.arbitrage.execute(opportunity);
  }
});
```

## Security considerations

**Protection that scales with your success.** Security isn't just about preventing attacks – it's about building user trust and ensuring your application can handle real-world usage without compromising safety.

### 🔒 Best practices

**Security as a foundation, not an afterthought.** These practices aren't just recommendations – they're the difference between applications that thrive and those that become cautionary tales.

**Smart contract security (protecting user funds and data):**
- Always use latest SDK versions (security improvements and bug fixes)
- Validate all user inputs (prevent injection and manipulation attacks)
- Implement proper access controls (ensure only authorized actions are possible)
- Use multi-signature for critical operations (distribute risk and prevent single points of failure)

**Cross-chain security (maintaining trust across networks):**
- Verify message authenticity (ensure cross-chain messages haven't been tampered with)
- Implement timeout mechanisms (prevent stuck transactions and resource locks)
- Use multiple protocol validation (redundancy that catches edge cases)
- Monitor for unusual activity (early detection of potential security issues)

**API security (protecting your application and users):**
- Implement rate limiting (prevent abuse and ensure fair access)
- Use secure authentication (protect user accounts and sensitive operations)
- Validate all parameters (prevent injection attacks and data corruption)
- Log security events (maintain audit trails for compliance and debugging)

*Security is an investment in your application's future and your users' trust.*

### 🛡️ Common pitfalls

**Learn from others' mistakes before they become your own.** These aren't just technical issues – they're the difference between professional applications and amateur projects.

**Avoid these mistakes that compromise security and user experience:**
- Hardcoding contract addresses (breaks when contracts upgrade or networks change)
- Ignoring network-specific configurations (causes failures in production environments)
- Insufficient error handling (creates poor user experiences and potential security holes)
- Missing event listeners for state changes (leads to inconsistent UI and missed opportunities)

*Professional development means anticipating problems before they happen.*

## Resources and support

### 📚 Documentation

- **[Smart Contracts](/docs/developers/smart-contracts)** - Complete contract reference
- **[API Reference](/docs/developers/api-reference)** - Full API documentation
- **[Cross-chain Guide](/docs/developers/cross-chain)** - Multi-chain integration
- **[Security Guide](/docs/features/security)** - Security best practices

### 🛠️ Development tools

**Code repositories:**
- [Main contracts](https://github.com/devopsdao/devopsdao)
- [SDK source](https://github.com/devopsdao/dodao-sdk)
- [Integration examples](https://github.com/devopsdao/examples)
- [Documentation](https://github.com/devopsdao/docs)

**Testing tools:**
- Hardhat configuration templates
- Test suite examples
- Mock contract deployments
- Cross-chain testing utilities

### 🤝 Community support

- **[Discord](https://discord.gg/qJwsv45QTd)** - Developer community
- **[GitHub Discussions](https://github.com/devopsdao/devopsdao/discussions)** - Technical questions
- **[Telegram](https://t.me/dodao_group)** - Real-time support
- **Developer calls** - Weekly technical discussions

### 🏆 Bounties and grants

**Development opportunities:**
- Integration bounties
- SDK improvements
- Documentation contributions
- Security research

**Grant programs:**
- Ecosystem development grants
- Research funding
- Community tool development
- Educational content creation

---

**Ready to build?** [Explore smart contracts →](/docs/developers/smart-contracts)

*Join our developer community and help shape the future of decentralized work!*

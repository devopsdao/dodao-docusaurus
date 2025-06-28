---
sidebar_position: 3
---

# Web3 Integration Guide

![Strength in Partnership](../img/banners-new/Strength%20in%20Partnership.png)

**Complete Web3 integration documentation.**

Building integrations shouldn't feel like archaeology. You shouldn't have to reverse-engineer undocumented smart contract interfaces, guess at function parameters, or wonder why your transactions are failing. Great Web3 integrations tell a story – they guide you from your first contract call to production deployment with confidence.

Dodao's smart contracts are designed for developers who want to build, not debug. Every function is documented with real examples, every error response explains what went wrong and how to fix it, and every contract method does exactly what you'd expect. Whether you're building a simple task widget or a complex multi-chain application, our contracts provide the foundation you need to succeed.

This isn't just documentation – it's your roadmap to Web3 integration success.

## Integration Overview

**Your gateway to the decentralized work ecosystem.** These aren't just smart contract calls – they're your connection to a global network of opportunities, talent, and innovation. Every transaction you make contributes to building a fairer, more transparent future of work.

### 🌐 Network Configuration

**Start building on testnet, deploy with confidence on mainnet.** Our testnet environment gives you everything you need to experiment, learn, and perfect your integration before going live with real users and real money.

**Supported Networks:**
```dart
// Moonbase Alpha (Testnet)
const moonbaseAlpha = NetworkConfig(
  chainId: 1287,
  name: 'Moonbase Alpha',
  rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
  explorerUrl: 'https://moonbase.moonscan.io',
  contractAddress: '0x742d35Cc6634C0532925a3b8D4C9db96590c6C87',
  isTestnet: true,
);

// Moonbeam (Mainnet)
const moonbeam = NetworkConfig(
  chainId: 1284,
  name: 'Moonbeam',
  rpcUrl: 'https://rpc.api.moonbeam.network',
  explorerUrl: 'https://moonscan.io',
  contractAddress: '0x...',
  isTestnet: false,
);
```

*Test fearlessly, deploy confidently. Your integration journey starts here.*

### 🔑 Wallet Integration

**Security that doesn't get in your way.** Connect with MetaMask or WalletConnect for true Web3 integration where users control their own identity and transactions.

**MetaMask Integration:**
```dart
import 'package:web3dart/web3dart.dart';
import 'package:flutter_web3/flutter_web3.dart';

class WalletService {
  Web3Client? _client;
  String? _userAddress;
  
  Future<bool> connectMetaMask() async {
    if (ethereum != null) {
      try {
        // Request account access
        final accounts = await ethereum!.requestAccount();
        if (accounts.isNotEmpty) {
          _userAddress = accounts.first;
          _client = Web3Client.custom(ethereum!);
          return true;
        }
      } catch (e) {
        print('MetaMask connection failed: $e');
      }
    }
    return false;
  }
  
  Future<String?> signMessage(String message) async {
    if (_userAddress != null) {
      return await ethereum!.personalSign(
        message: message,
        address: _userAddress!,
      );
    }
    return null;
  }
}
```

**WalletConnect Integration:**
```dart
import 'package:walletconnect_dart/walletconnect_dart.dart';

class WalletConnectService {
  WalletConnect? _connector;
  
  Future<bool> connect() async {
    _connector = WalletConnect(
      bridge: 'https://bridge.walletconnect.org',
      clientMeta: const PeerMeta(
        name: 'Dodao',
        description: 'Decentralized Work Platform',
        url: 'https://dodao.dev',
        icons: ['https://dodao.dev/logo.png'],
      ),
    );
    
    if (!_connector!.connected) {
      final session = await _connector!.createSession(
        chainId: 1287,
        onDisplayUri: (uri) {
          // Show QR code with URI
          showQRCode(uri);
        },
      );
      return session.accounts.isNotEmpty;
    }
    return true;
  }
}
```

*Your choice of wallet reflects your integration philosophy – seamless user experience with true decentralization.*

### 📊 Contract Interface

**Consistency you can count on.** Every contract interaction follows the same patterns, making your integration code cleaner and more predictable. When transactions fail, you get actionable information to fix them quickly.

**Diamond Contract Structure:**
```dart
class DodaoContract {
  static const String abi = '''[
    {
      "inputs": [
        {"name": "title", "type": "string"},
        {"name": "description", "type": "string"},
        {"name": "reward", "type": "uint256"},
        {"name": "deadline", "type": "uint256"}
      ],
      "name": "createTask",
      "outputs": [{"name": "taskId", "type": "uint256"}],
      "type": "function"
    },
    {
      "inputs": [{"name": "taskId", "type": "uint256"}],
      "name": "getTask",
      "outputs": [{
        "components": [
          {"name": "taskId", "type": "uint256"},
          {"name": "title", "type": "string"},
          {"name": "description", "type": "string"},
          {"name": "customer", "type": "address"},
          {"name": "performer", "type": "address"},
          {"name": "auditor", "type": "address"},
          {"name": "reward", "type": "uint256"},
          {"name": "deadline", "type": "uint256"},
          {"name": "state", "type": "string"}
        ],
        "name": "task",
        "type": "tuple"
      }],
      "type": "function"
    }
  ]''';
}
```

*Predictable interfaces mean faster development and fewer debugging sessions.*

## Smart Contract Integration

### 📋 Task Management

#### Create Task
```dart
Future<String> createTask({
  required String title,
  required String description,
  required BigInt reward,
  required DateTime deadline,
  required String tokenAddress,
}) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('createTask');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [
      title,
      description,
      reward,
      BigInt.from(deadline.millisecondsSinceEpoch ~/ 1000),
      EthereumAddress.fromHex(tokenAddress),
    ],
    value: tokenAddress == '0x0000000000000000000000000000000000000000' 
        ? EtherAmount.inWei(reward) 
        : EtherAmount.zero(),
  );
  
  final result = await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
  
  return result;
}
```

#### Get Task Details
```dart
Future<Task> getTask(BigInt taskId) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('getTask');
  final result = await _client.call(
    contract: contract,
    function: function,
    params: [taskId],
  );
  
  return Task.fromContractResult(result.first);
}

class Task {
  final BigInt taskId;
  final String title;
  final String description;
  final EthereumAddress customer;
  final EthereumAddress? performer;
  final EthereumAddress? auditor;
  final BigInt reward;
  final DateTime deadline;
  final String state;
  
  Task({
    required this.taskId,
    required this.title,
    required this.description,
    required this.customer,
    this.performer,
    this.auditor,
    required this.reward,
    required this.deadline,
    required this.state,
  });
  
  factory Task.fromContractResult(List<dynamic> result) {
    return Task(
      taskId: result[0] as BigInt,
      title: result[1] as String,
      description: result[2] as String,
      customer: result[3] as EthereumAddress,
      performer: result[4] != EthereumAddress.fromHex('0x0000000000000000000000000000000000000000') 
          ? result[4] as EthereumAddress 
          : null,
      auditor: result[5] != EthereumAddress.fromHex('0x0000000000000000000000000000000000000000') 
          ? result[5] as EthereumAddress 
          : null,
      reward: result[6] as BigInt,
      deadline: DateTime.fromMillisecondsSinceEpoch((result[7] as BigInt).toInt() * 1000),
      state: result[8] as String,
    );
  }
}
```

#### Apply for Task
```dart
Future<String> applyForTask(BigInt taskId) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('applyForTask');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [taskId],
  );
  
  return await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
}
```

#### Select Performer
```dart
Future<String> selectPerformer({
  required BigInt taskId,
  required EthereumAddress performer,
}) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('selectPerformer');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [taskId, performer],
  );
  
  return await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
}
```

#### Submit Work
```dart
Future<String> submitWork({
  required BigInt taskId,
  required String deliverableHash,
}) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('submitWork');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [taskId, deliverableHash],
  );
  
  return await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
}
```

#### Approve Work
```dart
Future<String> approveWork({
  required BigInt taskId,
  required int rating,
}) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('approveWork');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [taskId, BigInt.from(rating)],
  );
  
  return await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
}
```

### 👤 Account Management

#### Get Account Details
```dart
Future<Account> getAccount(EthereumAddress address) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('getAccount');
  final result = await _client.call(
    contract: contract,
    function: function,
    params: [address],
  );
  
  return Account.fromContractResult(result.first);
}

class Account {
  final EthereumAddress address;
  final BigInt reputation;
  final BigInt completedTasks;
  final BigInt totalEarnings;
  final bool isAuditor;
  final bool isGovernor;
  final DateTime joinDate;
  
  Account({
    required this.address,
    required this.reputation,
    required this.completedTasks,
    required this.totalEarnings,
    required this.isAuditor,
    required this.isGovernor,
    required this.joinDate,
  });
  
  factory Account.fromContractResult(List<dynamic> result) {
    return Account(
      address: result[0] as EthereumAddress,
      reputation: result[1] as BigInt,
      completedTasks: result[2] as BigInt,
      totalEarnings: result[3] as BigInt,
      isAuditor: result[4] as bool,
      isGovernor: result[5] as bool,
      joinDate: DateTime.fromMillisecondsSinceEpoch((result[6] as BigInt).toInt() * 1000),
    );
  }
}
```

#### Update Profile
```dart
Future<String> updateProfile({
  required String profileHash,
}) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('updateProfile');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [profileHash],
  );
  
  return await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
}
```

### 💰 Token Operations

#### Get Supported Tokens
```dart
Future<List<Token>> getSupportedTokens() async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('getSupportedTokens');
  final result = await _client.call(
    contract: contract,
    function: function,
    params: [],
  );
  
  return (result.first as List).map((token) => Token.fromContractResult(token)).toList();
}

class Token {
  final EthereumAddress address;
  final String symbol;
  final String name;
  final int decimals;
  final bool isActive;
  
  Token({
    required this.address,
    required this.symbol,
    required this.name,
    required this.decimals,
    required this.isActive,
  });
  
  factory Token.fromContractResult(List<dynamic> result) {
    return Token(
      address: result[0] as EthereumAddress,
      symbol: result[1] as String,
      name: result[2] as String,
      decimals: (result[3] as BigInt).toInt(),
      isActive: result[4] as bool,
    );
  }
}
```

#### Approve Token Spending
```dart
Future<String> approveTokenSpending({
  required EthereumAddress tokenAddress,
  required BigInt amount,
}) async {
  // ERC20 token contract
  final tokenContract = DeployedContract(
    ContractAbi.fromJson(erc20Abi, 'ERC20'),
    tokenAddress,
  );
  
  final function = tokenContract.function('approve');
  final transaction = Transaction.callContract(
    contract: tokenContract,
    function: function,
    parameters: [EthereumAddress.fromHex(contractAddress), amount],
  );
  
  return await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
}
```

### 🌐 Cross-Chain Operations

#### Bridge Payment
```dart
Future<String> bridgePayment({
  required BigInt taskId,
  required int targetChainId,
  required String bridgeProtocol, // 'axelar', 'hyperlane', 'wormhole', 'layerzero'
}) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('bridgePayment');
  final transaction = Transaction.callContract(
    contract: contract,
    function: function,
    parameters: [
      taskId,
      BigInt.from(targetChainId),
      bridgeProtocol,
    ],
  );
  
  return await _client.sendTransaction(
    _credentials,
    transaction,
    chainId: chainId,
  );
}
```

#### Get Bridge Fee Estimate
```dart
Future<BigInt> getBridgeFeeEstimate({
  required int targetChainId,
  required BigInt amount,
  required String bridgeProtocol,
}) async {
  final contract = DeployedContract(
    ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
    EthereumAddress.fromHex(contractAddress),
  );
  
  final function = contract.function('getBridgeFeeEstimate');
  final result = await _client.call(
    contract: contract,
    function: function,
    params: [BigInt.from(targetChainId), amount, bridgeProtocol],
  );
  
  return result.first as BigInt;
}
```

## Event Listening

### 📡 Contract Events

**Listen to Task Events:**
```dart
class EventListener {
  StreamSubscription? _taskCreatedSubscription;
  StreamSubscription? _taskCompletedSubscription;
  
  void startListening() {
    final contract = DeployedContract(
      ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
      EthereumAddress.fromHex(contractAddress),
    );
    
    // Listen to TaskCreated events
    final taskCreatedEvent = contract.event('TaskCreated');
    _taskCreatedSubscription = _client
        .events(FilterOptions.events(contract: contract, event: taskCreatedEvent))
        .listen((event) {
      final taskId = event.topics![1];
      final customer = event.topics![2];
      print('New task created: $taskId by $customer');
    });
    
    // Listen to TaskCompleted events
    final taskCompletedEvent = contract.event('TaskCompleted');
    _taskCompletedSubscription = _client
        .events(FilterOptions.events(contract: contract, event: taskCompletedEvent))
        .listen((event) {
      final taskId = event.topics![1];
      final performer = event.topics![2];
      print('Task completed: $taskId by $performer');
    });
  }
  
  void stopListening() {
    _taskCreatedSubscription?.cancel();
    _taskCompletedSubscription?.cancel();
  }
}
```

**Event Types:**
```dart
enum DodaoEventType {
  taskCreated,
  taskAssigned,
  taskCompleted,
  taskDisputed,
  paymentReleased,
  accountCreated,
  reputationUpdated,
  crossChainTransfer,
}
```

## Error Handling

### 🚨 Common Errors

**Transaction Error Handling:**
```dart
class TransactionError {
  final String code;
  final String message;
  final Map<String, dynamic>? details;
  
  TransactionError({
    required this.code,
    required this.message,
    this.details,
  });
}

Future<String> safeContractCall(Future<String> Function() contractCall) async {
  try {
    return await contractCall();
  } on RPCError catch (e) {
    switch (e.errorCode) {
      case -32000:
        throw TransactionError(
          code: 'INSUFFICIENT_FUNDS',
          message: 'Insufficient funds for gas and value',
        );
      case -32603:
        throw TransactionError(
          code: 'EXECUTION_REVERTED',
          message: 'Transaction reverted: ${e.message}',
        );
      default:
        throw TransactionError(
          code: 'RPC_ERROR',
          message: e.message,
        );
    }
  } catch (e) {
    throw TransactionError(
      code: 'UNKNOWN_ERROR',
      message: e.toString(),
    );
  }
}
```

**Common Error Codes:**
| Code | Description | Solution |
|------|-------------|----------|
| `INSUFFICIENT_FUNDS` | Not enough ETH for gas | Add more ETH to wallet |
| `EXECUTION_REVERTED` | Contract call failed | Check function parameters |
| `TASK_NOT_FOUND` | Task doesn't exist | Verify task ID |
| `UNAUTHORIZED` | Not authorized for action | Check wallet permissions |
| `INVALID_STATE` | Task in wrong state | Check task status |
| `TOKEN_NOT_SUPPORTED` | Token not accepted | Use supported token |

## Testing

### 🧪 Testnet Integration

**Test Configuration:**
```dart
class TestConfig {
  static const String testnetRpc = 'https://rpc.api.moonbase.moonbeam.network';
  static const String testnetContract = '0x742d35Cc6634C0532925a3b8D4C9db96590c6C87';
  static const int testnetChainId = 1287;
  
  static Web3Client getTestClient() {
    return Web3Client(testnetRpc, Client());
  }
}
```

**Mock Data for Testing:**
```dart
class MockData {
  static Task createMockTask() {
    return Task(
      taskId: BigInt.from(123),
      title: 'Test Task',
      description: 'This is a test task',
      customer: EthereumAddress.fromHex('0x742d35Cc6634C0532925a3b8D4C9db96590c6C87'),
      reward: EtherAmount.fromUnitAndValue(EtherUnit.ether, 1).getInWei,
      deadline: DateTime.now().add(Duration(days: 7)),
      state: 'open',
    );
  }
}
```

### 🔧 Integration Testing

**Unit Tests:**
```dart
import 'package:test/test.dart';

void main() {
  group('Dodao Contract Integration', () {
    late DodaoService service;
    
    setUp(() {
      service = DodaoService(
        rpcUrl: TestConfig.testnetRpc,
        contractAddress: TestConfig.testnetContract,
        chainId: TestConfig.testnetChainId,
      );
    });
    
    test('should create task successfully', () async {
      final taskId = await service.createTask(
        title: 'Test Task',
        description: 'Test Description',
        reward: EtherAmount.fromUnitAndValue(EtherUnit.ether, 1).getInWei,
        deadline: DateTime.now().add(Duration(days: 7)),
        tokenAddress: '0x0000000000000000000000000000000000000000',
      );
      
      expect(taskId, isNotEmpty);
    });
    
    test('should get task details', () async {
      final task = await service.getTask(BigInt.from(123));
      expect(task.taskId, equals(BigInt.from(123)));
    });
  });
}
```

## Flutter Integration Examples

### 📱 Complete Flutter Service

**DodaoService Class:**
```dart
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
  
  Future<void> connectWallet() async {
    final walletService = WalletService();
    final connected = await walletService.connectMetaMask();
    if (connected) {
      _credentials = walletService.credentials;
    }
  }
  
  Future<List<Task>> getAllTasks() async {
    final contract = _getContract();
    final function = contract.function('getAllTasks');
    final result = await _client.call(
      contract: contract,
      function: function,
      params: [],
    );
    
    return (result.first as List)
        .map((taskData) => Task.fromContractResult(taskData))
        .toList();
  }
  
  DeployedContract _getContract() {
    return DeployedContract(
      ContractAbi.fromJson(DodaoContract.abi, 'Dodao'),
      EthereumAddress.fromHex(_contractAddress),
    );
  }
}
```

**Flutter Widget Example:**
```dart
class TaskListWidget extends StatefulWidget {
  @override
  _TaskListWidgetState createState() => _TaskListWidgetState();
}

class _TaskListWidgetState extends State<TaskListWidget> {
  final DodaoService _dodaoService = DodaoService(
    rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
    contractAddress: '0x742d35Cc6634C0532925a3b8D4C9db96590c6C87',
    chainId: 1287,
  );
  
  List<Task> _tasks = [];
  bool _loading = true;
  
  @override
  void initState() {
    super.initState();
    _loadTasks();
  }
  
  Future<void> _loadTasks() async {
    try {
      final tasks = await _dodaoService.getAllTasks();
      setState(() {
        _tasks = tasks;
        _loading = false;
      });
    } catch (e) {
      setState(() {
        _loading = false;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to load tasks: $e')),
      );
    }
  }
  
  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return Center(child: CircularProgressIndicator());
    }
    
    return ListView.builder(
      itemCount: _tasks.length,
      itemBuilder: (context, index) {
        final task = _tasks[index];
        return TaskCard(
          task: task,
          onApply: () => _applyForTask(task.taskId),
        );
      },
    );
  }
  
  Future<void> _applyForTask(BigInt taskId) async {
    try {
      await _dodaoService.connectWallet();
      final txHash = await _dodaoService.applyForTask(taskId);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Application submitted: $txHash')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to apply: $e')),
      );
    }
  }
}
```

## Resources

### 📚 Additional Documentation

- **[Developer Overview](/docs/developers/overview)** - Platform integration guide
- **[Smart Contracts](/docs/developers/smart-contracts)** - Contract reference
- **[Cross-chain Guide](/docs/developers/cross-chain)** - Multi-chain development
- **[Security Guide](/docs/features/security)** - Security best practices

### 🛠️ Development Tools

- [web3dart Documentation](https://pub.dev/packages/web3dart)
- [Flutter Web3 Plugin](https://pub.dev/packages/flutter_web3)
- [WalletConnect Dart](https://pub.dev/packages/walletconnect_dart)
- [Contract ABI Generator](https://github.com/devopsdao/abi-generator)

### 🤝 Support

- **[Discord](https://discord.gg/qJwsv45QTd)** - Developer community
- **[GitHub](https://github.com/devopsdao/devopsdao)** - Issues and discussions
- **Email**: developers@dodao.dev
- **Documentation**: [docs.dodao.dev](https://docs.dodao.dev)

---

**Ready to integrate?** [Get started with Web3 →](https://dodao.dev/developers)

*Build amazing applications with Dodao's smart contracts and Flutter integration!*

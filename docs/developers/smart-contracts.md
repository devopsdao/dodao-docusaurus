---
sidebar_position: 2
---

# Smart Contracts

![Strength in Partnership](../img/banners-new/Strength%20in%20Partnership.png)

**Diamond pattern architecture.**

What if smart contracts didn't have to be immutable monuments to past decisions? What if you could build systems that evolve, improve, and adapt without losing their security guarantees or forcing users through painful migrations?

The Diamond pattern represents a breakthrough in smart contract architecture – and Dodao pushes it to its limits. We've built a living, breathing system that can grow and adapt while maintaining the security and transparency that makes blockchain technology revolutionary. Our modular facet system isn't just technically elegant; it's a new paradigm for how decentralized applications should be built.

This isn't just code – it's the foundation for the next generation of blockchain applications that can evolve with their communities instead of being trapped by their initial implementations.

## Architecture overview

Traditional smart contracts are like buildings carved from stone – once deployed, they're permanent monuments to the decisions made at construction time. The Diamond pattern changes this paradigm entirely, creating living systems that can evolve while maintaining their security guarantees.

### 💎 Diamond pattern (EIP-2535)

Think of our Diamond as a modular skyscraper where you can renovate individual floors without affecting the rest of the building. Each facet handles specific functionality, and the diamond proxy routes calls to the appropriate facet. This isn't just technical elegance – it's practical evolution.

**Core benefits:**
- Unlimited contract size through facets – no more 24KB contract size limits
- Upgradeable without state migration – improve functionality without losing data
- Gas-efficient proxy pattern – optimized for real-world usage costs
- Modular functionality isolation – bugs in one area don't affect others

**Diamond structure:**
```
Diamond Proxy
├── DiamondCutFacet (upgrades)
├── DiamondLoupeFacet (introspection)
├── TaskCreateFacet (task creation)
├── TaskDataFacet (task queries & management)
├── AccountFacet (user accounts & reputation)
├── TokenFacet (ERC-1155 tokens)
├── TokenDataFacet (token metadata & queries)
├── InterchainFacet (cross-chain configuration)
├── AxelarFacet (Axelar protocol integration)
├── LayerzeroFacet (LayerZero protocol integration)
├── HyperlaneFacet (Hyperlane protocol integration)
├── WormholeFacet (Wormhole protocol integration)
├── WitnetFacet (Oracle integration)
├── QuestboardFacet (user activity tracking)
└── TaskStatsFacet (platform analytics)
```

This modular approach means we can add new features, fix bugs, and optimize gas usage without forcing users through painful migrations or losing their transaction history. It's the difference between renovating your house and having to move to a new one every time you want to upgrade.

### 🏗️ Contract addresses

**Moonbase Alpha (Chain ID: 1287):**
```
Diamond Proxy: 0x[MOONBASE_DIAMOND_ADDRESS]
TaskFacet: 0x[MOONBASE_TASK_FACET]
PaymentFacet: 0x[MOONBASE_PAYMENT_FACET]
UserFacet: 0x[MOONBASE_USER_FACET]
AuditFacet: 0x[MOONBASE_AUDIT_FACET]
CrossChainFacet: 0x[MOONBASE_CROSSCHAIN_FACET]
```

**Polygon Mumbai (Chain ID: 80001):**
```
Diamond Proxy: 0x[MUMBAI_DIAMOND_ADDRESS]
TaskFacet: 0x[MUMBAI_TASK_FACET]
PaymentFacet: 0x[MUMBAI_PAYMENT_FACET]
UserFacet: 0x[MUMBAI_USER_FACET]
AuditFacet: 0x[MUMBAI_AUDIT_FACET]
CrossChainFacet: 0x[MUMBAI_CROSSCHAIN_FACET]
```

**Scroll Sepolia (Chain ID: 534351):**
```
Diamond Proxy: 0x[SCROLL_DIAMOND_ADDRESS]
TaskFacet: 0x[SCROLL_TASK_FACET]
PaymentFacet: 0x[SCROLL_PAYMENT_FACET]
UserFacet: 0x[SCROLL_USER_FACET]
AuditFacet: 0x[SCROLL_AUDIT_FACET]
CrossChainFacet: 0x[SCROLL_CROSSCHAIN_FACET]
```

## Core data structures

**The building blocks of trust and transparency.** Every data structure in our smart contracts is designed with a simple principle: make it impossible for anyone to cheat, manipulate, or hide information. These aren't just technical specifications – they're the foundation of a fair work ecosystem.

### 📋 Task structure

**The complete lifecycle of work, captured in code.** Every task is a story – from initial creation to final completion. Our Task structure captures every detail that matters for transparency, accountability, and fair resolution of disputes.

```solidity
struct Task {
    string nanoId;                  // Unique identifier for the task
    uint256 createTime;             // Task creation timestamp
    string taskType;                // "private", "public", or "hackaton"
    string title;                   // Task title
    string description;             // Detailed task description
    string repository;              // GitHub repository URL
    string[] tags;                  // Skill tags for categorization
    uint256[] tagsNFT;             // NFT token IDs for tags
    
    // Multi-token payment system
    address[] tokenContracts;       // Array of token contract addresses
    uint256[][] tokenIds;           // Token IDs for each contract
    uint256[][] tokenAmounts;       // Token amounts for each ID
    
    // Task state management
    string taskState;               // Current task state (string-based)
    string auditState;              // Current audit state
    uint256 performerRating;        // Rating given to performer (1-5)
    uint256 customerRating;         // Rating given to customer (1-5)
    
    // Participant addresses
    address payable contractOwner;  // Task creator (customer)
    address payable participant;    // Selected performer
    address auditInitiator;         // Who initiated the audit
    address auditor;                // Selected auditor
    address[] participants;         // All applicants
    address[] funders;              // Additional funders
    address[] auditors;             // All audit applicants
    
    // Communication system
    Message[] messages;             // All task messages
    address contractParent;         // Parent Diamond contract
}

// Task states (string constants)
string constant TASK_STATE_NEW = "new";
string constant TASK_STATE_AGREED = "agreed";
string constant TASK_STATE_PROGRESS = "progress";
string constant TASK_STATE_REVIEW = "review";
string constant TASK_STATE_AUDIT = "audit";
string constant TASK_STATE_COMPLETED = "completed";
string constant TASK_STATE_CANCELED = "canceled";

// Task types
string constant TASK_TYPE_PRIVATE = "private";
string constant TASK_TYPE_PUBLIC = "public";
string constant TASK_TYPE_HACKATON = "hackaton";

// Audit states
string constant TASK_AUDIT_STATE_REQUESTED = "requested";
string constant TASK_AUDIT_STATE_PERFORMING = "performing";
string constant TASK_AUDIT_STATE_FINISHED = "finished";
```

*Every field serves a purpose: accountability, transparency, and fair resolution. Nothing is hidden, everything is verifiable.*

### 👤 Account structure

**Your professional identity, permanently recorded.** Traditional platforms own your reputation and can delete it at will. In Dodao, your professional identity belongs to you – it's stored on the blockchain where no one can take it away or manipulate it.

```solidity
struct Account {
    address accountOwner;               // Account owner address
    string identity;                    // User identity/nickname
    string about;                       // User description/bio
    
    // Task participation tracking
    address[] ownerTasks;               // Tasks created as customer
    address[] participantTasks;         // Tasks applied to as performer
    address[] auditParticipantTasks;    // Tasks applied to as auditor
    address[] agreedTasks;              // Tasks agreed to as performer
    address[] auditAgreedTasks;         // Audit tasks agreed to
    address[] completedTasks;           // Tasks completed as performer
    address[] auditCompletedTasks;      // Audit tasks completed
    
    // Rating system
    uint256[] customerRatings;          // Ratings received as customer
    uint256[] performerRatings;         // Ratings received as performer
    
    // Additional task tracking
    address[] customerAgreedTasks;      // Tasks agreed to as customer
    address[] performerAuditedTasks;    // Tasks audited as performer
    address[] customerAuditedTasks;     // Tasks audited as customer
    address[] customerCompletedTasks;   // Tasks completed as customer
    
    // Token balance tracking
    string[] spentTokenNames;           // Names of tokens spent
    mapping(string => uint256) spentTokenBalances;   // Amounts spent per token
    string[] earnedTokenNames;          // Names of tokens earned
    mapping(string => uint256) earnedTokenBalances;  // Amounts earned per token
}

// Message structure for task communication
struct Message {
    uint256 id;                         // Message ID
    string text;                        // Message content
    uint256 timestamp;                  // Message timestamp
    address sender;                     // Message sender
    string taskState;                   // Task state when sent
    uint256 replyTo;                    // ID of message being replied to
}
```

*Your achievements, earnings, and reputation are yours forever. No platform can delete your professional history or manipulate your ratings.*

### 💰 Payment structure

**Financial security through mathematical certainty.** Every payment is protected by smart contract logic that cannot be corrupted, bribed, or influenced. Your money is safe because mathematics makes it safe.

```solidity
struct Payment {
    uint256 taskId;
    address customer;
    address performer;
    
    uint256 amount;
    address token;
    
    PaymentStatus status;
    uint256 lockedAt;
    uint256 releasedAt;
    
    uint256 platformFee;
    uint256 auditorFee;
}

enum PaymentStatus {
    Locked,         // 0 - Escrowed (protected and waiting)
    Released,       // 1 - Paid to performer (work rewarded)
    Refunded,       // 2 - Returned to customer (fair resolution)
    Disputed        // 3 - Under audit (justice in progress)
}
```

*Every payment state is transparent and immutable. No hidden fees, no surprise deductions, no arbitrary holds.*

## TaskCreateFacet interface

### 📝 Task creation

```solidity
interface ITaskCreateFacet {
    /**
     * @dev Create a new task contract
     * @param _sender Task creator address
     * @param taskData Complete task data structure
     * @return taskContractAddress Address of created task contract
     */
    function createTaskContract(
        address payable _sender,
        TaskData calldata taskData
    ) external payable returns (address taskContractAddress);
}

struct TaskData {
    string nanoId;                  // Unique task identifier
    string taskType;                // Task type: "private", "public", "hackaton"
    string title;                   // Task title
    string description;             // Task description
    string repository;              // GitHub repository URL
    string[] tags;                  // Skill tags
    address[] tokenContracts;       // Payment token contracts
    uint256[][] tokenIds;           // Token IDs for each contract
    uint256[][] tokenAmounts;       // Token amounts for each ID
}
```

### 🔄 Task lifecycle (TaskContract interface)

```solidity
interface ITaskContract {
    /**
     * @dev Apply to participate in task
     * @param _sender Applicant address
     * @param _message Application message
     * @param _replyTo Message ID being replied to (0 for new)
     */
    function taskParticipate(
        address _sender,
        string memory _message,
        uint256 _replyTo
    ) external;
    
    /**
     * @dev Apply to audit task
     * @param _sender Auditor address
     * @param _message Application message
     * @param _replyTo Message ID being replied to
     */
    function taskAuditParticipate(
        address _sender,
        string memory _message,
        uint256 _replyTo
    ) external;
    
    /**
     * @dev Change task state
     * @param _sender State changer address
     * @param _participant Participant address (for assignments)
     * @param _state New task state
     * @param _message State change message
     * @param _replyTo Message ID being replied to
     * @param _rating Rating (1-5, when completing)
     */
    function taskStateChange(
        address _sender,
        address payable _participant,
        string memory _state,
        string memory _message,
        uint256 _replyTo,
        uint256 _rating
    ) external;
    
    /**
     * @dev Submit audit decision
     * @param _sender Auditor address
     * @param _favour Decision: "customer" or "performer"
     * @param _message Decision reasoning
     * @param _replyTo Message ID being replied to
     * @param rating Rating for the decision
     */
    function taskAuditDecision(
        address _sender,
        string memory _favour,
        string memory _message,
        uint256 _replyTo,
        uint256 rating
    ) external;
    
    /**
     * @dev Send message in task
     * @param _sender Message sender
     * @param _message Message content
     * @param _replyTo Message ID being replied to
     */
    function sendMessage(
        address _sender,
        string memory _message,
        uint256 _replyTo
    ) external;
    
    /**
     * @dev Withdraw funds and rate counterpart
     * @param _sender Withdrawer address
     * @param _addressToSend Recipient address
     * @param _chain Target chain for withdrawal
     * @param rating Rating for counterpart (1-5)
     */
    function withdrawAndRate(
        address _sender,
        address payable _addressToSend,
        string memory _chain,
        uint256 rating
    ) external payable;
}
```

### 📊 TaskDataFacet queries

```solidity
interface ITaskDataFacet {
    /**
     * @dev Get all task contracts
     * @return taskContracts Array of task contract addresses
     */
    function getTaskContracts() external view returns (address[] memory taskContracts);
    
    /**
     * @dev Get tasks by state
     * @param _taskState Task state filter
     * @return taskContracts Array of task contract addresses
     */
    function getTaskContractsByState(string calldata _taskState) 
        external view returns (address[] memory taskContracts);
    
    /**
     * @dev Get tasks by audit state
     * @param _taskAuditState Audit state filter
     * @return taskContracts Array of task contract addresses
     */
    function getTaskContractsByAuditState(string calldata _taskAuditState) 
        external view returns (address[] memory taskContracts);
    
    /**
     * @dev Get tasks with pagination and time filter
     * @param _taskState Task state filter
     * @param offset Pagination offset
     * @param limit Results limit
     * @param fromTimestamp Minimum timestamp filter
     * @return taskContracts Array of task contract addresses
     */
    function getTaskContractsByStateLimit(
        string calldata _taskState,
        uint256 offset,
        uint256 limit,
        uint256 fromTimestamp
    ) external view returns (address[] memory taskContracts);
    
    /**
     * @dev Get tasks created by customer
     * @param contractOwner Customer address
     * @return taskContracts Array of task contract addresses
     */
    function getTaskContractsCustomer(address contractOwner) 
        external view returns (address[] memory taskContracts);
    
    /**
     * @dev Get tasks where user is performer
     * @param participant Performer address
     * @return taskContracts Array of task contract addresses
     */
    function getTaskContractsPerformer(address participant) 
        external view returns (address[] memory taskContracts);
    
    /**
     * @dev Get tasks where user is auditor
     * @param participant Auditor address
     * @return taskContracts Array of task contract addresses
     */
    function getTaskContractsAuditor(address participant) 
        external view returns (address[] memory taskContracts);
    
    /**
     * @dev Get detailed task data with token balances
     * @param taskContracts Array of task contract addresses
     * @return tasks Array of TaskWithBalance structs
     */
    function getTasksData(address[] calldata taskContracts) 
        external view returns (TaskWithBalance[] memory tasks);
}

struct TaskWithBalance {
    Task task;                      // Complete task data
    string[][] tokenNames;          // Token names for each contract
    uint256[][] tokenBalances;      // Current token balances
}
```

## AccountFacet interface

### 👤 Account management

```solidity
interface IAccountFacet {
    /**
     * @dev Add account data (profile information)
     * @param _sender Account owner address
     * @param identity User identity/nickname
     * @param about User description/bio
     */
    function addAccountData(
        address _sender,
        string calldata identity,
        string calldata about
    ) external;
    
    /**
     * @dev Add account to blacklist (Governor NFT required)
     * @param accountAddress Account to blacklist
     */
    function addAccountToBlacklist(address accountAddress) external;
    
    /**
     * @dev Remove account from blacklist (Governor NFT required)
     * @param accountAddress Account to remove from blacklist
     */
    function removeAccountFromBlacklist(address accountAddress) external;
}
```

### 📊 Task tracking functions

```solidity
interface IAccountTaskTracking {
    /**
     * @dev Add participant task (called by task contracts)
     * @param _sender Participant address
     * @param taskAddress Task contract address
     */
    function addParticipantTask(address _sender, address taskAddress) external;
    
    /**
     * @dev Add audit participant task
     * @param _sender Auditor address
     * @param taskAddress Task contract address
     */
    function addAuditParticipantTask(address _sender, address taskAddress) external;
    
    /**
     * @dev Add agreed task for performer
     * @param _sender Performer address
     * @param taskAddress Task contract address
     */
    function addPerformerAgreedTask(address _sender, address taskAddress) external;
    
    /**
     * @dev Add agreed task for customer
     * @param _sender Customer address
     * @param taskAddress Task contract address
     */
    function addCustomerAgreedTask(address _sender, address taskAddress) external;
    
    /**
     * @dev Add audit agreed task
     * @param _sender Auditor address
     * @param taskAddress Task contract address
     */
    function addAuditAgreedTask(address _sender, address taskAddress) external;
    
    /**
     * @dev Add completed task (both performer and customer)
     * @param _performer Performer address
     * @param _customer Customer address
     * @param taskAddress Task contract address
     */
    function addCompletedTask(
        address _performer,
        address _customer,
        address taskAddress
    ) external;
    
    /**
     * @dev Add audit completed task
     * @param _sender Auditor address
     * @param taskAddress Task contract address
     */
    function addAuditCompletedTask(address _sender, address taskAddress) external;
}
```

### ⭐ Rating system

```solidity
interface IAccountRating {
    /**
     * @dev Add performer rating
     * @param _account Account being rated
     * @param taskAddress Task contract address
     * @param rating Rating value (1-5)
     */
    function addPerformerRating(
        address _account,
        address taskAddress,
        uint256 rating
    ) external;
    
    /**
     * @dev Add customer rating
     * @param _account Account being rated
     * @param taskAddress Task contract address
     * @param rating Rating value (1-5)
     */
    function addCustomerRating(
        address _account,
        address taskAddress,
        uint256 rating
    ) external;
}
```

### 💰 Token balance tracking

```solidity
interface IAccountTokenTracking {
    /**
     * @dev Add tokens spent by performer
     * @param performer Performer address
     * @param tokenNames Array of token names
     * @param tokenBalances Array of token amounts
     */
    function addPerformerSpentTokens(
        address performer,
        string[] memory tokenNames,
        uint256[] memory tokenBalances
    ) external;
    
    /**
     * @dev Add tokens earned by performer
     * @param performer Performer address
     * @param tokenNames Array of token names
     * @param tokenBalances Array of token amounts
     */
    function addPerformerEarnedTokens(
        address performer,
        string[] memory tokenNames,
        uint256[] memory tokenBalances
    ) external;
    
    /**
     * @dev Add tokens spent by customer
     * @param customer Customer address
     * @param tokenNames Array of token names
     * @param tokenBalances Array of token amounts
     */
    function addCustomerSpentTokens(
        address customer,
        string[] memory tokenNames,
        uint256[] memory tokenBalances
    ) external;
    
    /**
     * @dev Add tokens earned by customer
     * @param customer Customer address
     * @param tokenNames Array of token names
     * @param tokenBalances Array of token amounts
     */
    function addCustomerEarnedTokens(
        address customer,
        string[] memory tokenNames,
        uint256[] memory tokenBalances
    ) external;
}
```

## TokenFacet interface

### 🪙 ERC-1155 token management

```solidity
interface ITokenFacet {
    /**
     * @dev Create new token type
     * @param _uri Token metadata URI
     * @param _name Token name
     * @param _isNF Whether token is non-fungible
     * @return _type Created token type ID
     */
    function create(
        string calldata _uri,
        string calldata _name,
        bool _isNF
    ) external returns (uint256 _type);
    
    /**
     * @dev Mint non-fungible tokens
     * @param _type Token type ID
     * @param _to Array of recipient addresses
     */
    function mintNonFungible(
        uint256 _type,
        address[] calldata _to
    ) external;
    
    /**
     * @dev Mint non-fungible tokens by name
     * @param _name Token name
     * @param _to Array of recipient addresses
     */
    function mintNonFungibleByName(
        string calldata _name,
        address[] calldata _to
    ) external;
    
    /**
     * @dev Mint fungible tokens
     * @param _id Token ID
     * @param _to Array of recipient addresses
     * @param _quantities Array of quantities to mint
     */
    function mintFungible(
        uint256 _id,
        address[] calldata _to,
        uint256[] calldata _quantities
    ) external;
    
    /**
     * @dev Mint fungible tokens by name
     * @param _name Token name
     * @param _to Array of recipient addresses
     * @param _quantities Array of quantities to mint
     */
    function mintFungibleByName(
        string calldata _name,
        address[] calldata _to,
        uint256[] calldata _quantities
    ) external;
    
    /**
     * @dev Set token URI
     * @param _uri New URI
     * @param _id Token ID
     */
    function setURI(string calldata _uri, uint256 _id) external;
    
    /**
     * @dev Set token URI by name
     * @param _uri New URI
     * @param _name Token name
     */
    function setURIOfName(string calldata _uri, string calldata _name) external;
}
```

### 📊 TokenDataFacet queries

```solidity
interface ITokenDataFacet {
    /**
     * @dev Get token URI
     * @param id_ Token ID
     * @return Token URI
     */
    function uri(uint256 id_) external view returns (string memory);
    
    /**
     * @dev Get token name
     * @param _id Token ID
     * @return Token name
     */
    function getTokenName(uint256 _id) external view returns (string memory);
    
    /**
     * @dev Get token names for multiple IDs
     * @param _ids Array of token IDs
     * @return Array of token names
     */
    function getTokenNames(uint256[] calldata _ids) external view returns (string[] memory);
    
    /**
     * @dev Get token base type from name
     * @param _name Token name
     * @return Token base type ID
     */
    function getTokenBaseType(string calldata _name) external view returns (uint256);
    
    /**
     * @dev Get tokens owned by address
     * @param _owner Owner address
     * @return Array of token IDs
     */
    function getTokenIds(address _owner) external view returns (uint256[] memory);
    
    /**
     * @dev Get token names owned by address
     * @param _owner Owner address
     * @return Array of token names
     */
    function getTokenNames(address _owner) external view returns (string[] memory);
    
    /**
     * @dev Get all created token names
     * @return Array of all token names
     */
    function getCreatedTokenNames() external view returns (string[] memory);
    
    /**
     * @dev Get balance by token name
     * @param account_ Account address
     * @param name_ Token name
     * @return Token balance
     */
    function balanceOfName(address account_, string calldata name_) external view returns (uint256);
    
    /**
     * @dev Check if token exists by name
     * @param name_ Token name
     * @return Whether token exists
     */
    function existsName(string calldata name_) external view returns (bool);
    
    /**
     * @dev Get total supply by name
     * @param name_ Token name
     * @return Total supply
     */
    function totalSupplyOfName(string calldata name_) external view returns (uint256);
}
```

## UserFacet interface

### 👤 Profile management

```solidity
interface IUserFacet {
    /**
     * @dev Update user profile
     * @param profile IPFS hash of profile data
     * @param skills Array of skill tags
     */
    function updateProfile(
        string memory profile,
        string[] memory skills
    ) external;
    
    /**
     * @dev Get user profile
     * @param user User address
     * @return userProfile User struct
     */
    function getUser(address user) 
        external view returns (User memory userProfile);
    
    /**
     * @dev Get user reputation
     * @param user User address
     * @return reputation Reputation score
     */
    function getUserReputation(address user) 
        external view returns (uint256 reputation);
}
```

### 🏆 NFT achievements

```solidity
interface IAchievementNFT {
    /**
     * @dev Mint achievement NFT
     * @param to Recipient address
     * @param achievementType Type of achievement
     * @param metadata NFT metadata URI
     * @return tokenId Minted token ID
     */
    function mintAchievement(
        address to,
        uint256 achievementType,
        string memory metadata
    ) external returns (uint256 tokenId);
    
    /**
     * @dev Get user's NFTs
     * @param user User address
     * @return tokenIds Array of owned token IDs
     */
    function getUserNFTs(address user) 
        external view returns (uint256[] memory tokenIds);
    
    /**
     * @dev Check if user has specific achievement
     * @param user User address
     * @param achievementType Achievement type
     * @return hasAchievement Achievement status
     */
    function hasAchievement(
        address user,
        uint256 achievementType
    ) external view returns (bool hasAchievement);
}
```

## AuditFacet interface

### ⚖️ Dispute resolution

```solidity
interface IAuditFacet {
    /**
     * @dev Initiate dispute
     * @param taskId Task ID
     * @param reason Dispute reason
     * @param evidence Evidence IPFS hash
     * @return disputeId Generated dispute ID
     */
    function initiateDispute(
        uint256 taskId,
        string memory reason,
        string memory evidence
    ) external returns (uint256 disputeId);
    
    /**
     * @dev Apply to audit dispute
     * @param disputeId Dispute ID
     */
    function applyForAudit(uint256 disputeId) external;
    
    /**
     * @dev Select auditor for dispute
     * @param disputeId Dispute ID
     * @param auditor Selected auditor
     */
    function selectAuditor(
        uint256 disputeId,
        address auditor
    ) external;
    
    /**
     * @dev Submit audit decision
     * @param disputeId Dispute ID
     * @param decision Audit decision
     * @param reasoning Decision reasoning
     */
    function submitAuditDecision(
        uint256 disputeId,
        AuditDecision decision,
        string memory reasoning
    ) external;
}

enum AuditDecision {
    FavorCustomer,      // 0 - Refund customer
    FavorPerformer,     // 1 - Pay performer
    PartialRefund,      // 2 - Split payment
    RequireMoreInfo     // 3 - Need more evidence
}
```

### 🔍 Audit queries

```solidity
interface IAuditQueries {
    /**
     * @dev Get dispute details
     * @param disputeId Dispute ID
     * @return dispute Dispute struct
     */
    function getDispute(uint256 disputeId) 
        external view returns (Dispute memory dispute);
    
    /**
     * @dev Get active disputes for auditor
     * @param auditor Auditor address
     * @return disputes Array of dispute IDs
     */
    function getAuditorDisputes(address auditor) 
        external view returns (uint256[] memory disputes);
    
    /**
     * @dev Check if user can audit
     * @param user User address
     * @return canAudit Audit eligibility
     */
    function canUserAudit(address user) 
        external view returns (bool canAudit);
}
```

## WitnetFacet interface

### 🔮 Oracle integration

**GitHub repository verification through Witnet oracles.** The WitnetFacet integrates with Witnet decentralized oracles to automatically verify GitHub pull request merges, enabling trustless task completion verification.

```solidity
interface IWitnetFacet {
    /**
     * @dev Post oracle request for task verification
     * @param taskAddress Task contract address to verify
     * @return _queryId Oracle query ID
     */
    function postRequest(address taskAddress) external payable returns (uint256 _queryId);
    
    /**
     * @dev Post oracle request with custom arguments
     * @param taskAddress Task contract address
     * @param _args Custom oracle request arguments
     * @return _queryId Oracle query ID
     */
    function postRequestTest(
        address taskAddress,
        LibWitnetFacet.Args memory _args
    ) external payable returns (uint256 _queryId);
    
    /**
     * @dev Check if oracle result is available
     * @param taskAddress Task contract address
     * @return available Whether result is ready
     */
    function checkResultAvailability(address taskAddress) external view returns (bool available);
    
    /**
     * @dev Get last oracle query data
     * @param taskAddress Task contract address
     * @return query Witnet query data
     */
    function getLastWitnetQuery(address taskAddress) external view returns (Witnet.Query memory query);
    
    /**
     * @dev Get last oracle result
     * @param taskAddress Task contract address
     * @return result Oracle result data
     */
    function getLastResult(address taskAddress) external view returns (LibWitnetFacet.Result memory result);
    
    /**
     * @dev Save successful verification result and complete task
     * @param taskAddress Task contract address
     */
    function saveSuccessfulResult(address taskAddress) external;
    
    /**
     * @dev Update oracle SLA configuration
     * @param slaHash New SLA hash
     */
    function updateRadonSLA(bytes32 slaHash) external;
}

struct Args {
    string subpath;     // GitHub repository path
    string title;       // Task title for verification
}

struct Result {
    bool failed;        // Whether oracle request failed
    bool pendingMerge;  // Whether PR is pending merge
    string status;      // Current PR status ("closed", "open", etc.)
}
```

## QuestboardFacet interface

### 📊 User activity tracking

**Real-time user engagement metrics.** The QuestboardFacet tracks user activity patterns, providing insights into daily engagement and task completion rates across different time periods.

```solidity
interface IQuestboardFacet {
    // Current activity counters
    function getParticipantTasksCount(address account) external view returns (uint256);
    function getAuditParticipantTasksCount(address account) external view returns (uint256);
    function getAgreedTasksCount(address account) external view returns (uint256);
    function getAuditAgreedTasksCount(address account) external view returns (uint256);
    function getCompletedTasksCount(address account) external view returns (uint256);
    function getAuditCompletedTasksCount(address account) external view returns (uint256);
    function getCustomerRatingsCount(address account) external view returns (uint256);
    function getPerformerRatingsCount(address account) external view returns (uint256);
    function getCustomerAgreedTasksCount(address account) external view returns (uint256);
    function getPerformerAuditedTasksCount(address account) external view returns (uint256);
    function getCustomerAuditedTasksCount(address account) external view returns (uint256);
    function getCustomerCompletedTasksCount(address account) external view returns (uint256);
    
    // Token balance queries
    function getSpentTokenBalance(address account, string memory tokenName) external view returns (uint256);
    function getEarnedTokenBalance(address account, string memory tokenName) external view returns (uint256);
    
    // Daily activity tracking (last 7 days)
    function getCustomerCreatedTasksCountToday(address account) external view returns (uint256);
    function getParticipantTasksCountToday(address account) external view returns (uint256);
    function getAuditParticipantTasksCountToday(address account) external view returns (uint256);
    function getAgreedTasksCountToday(address account) external view returns (uint256);
    function getAuditAgreedTasksCountToday(address account) external view returns (uint256);
    function getCompletedTasksCountToday(address account) external view returns (uint256);
    function getAuditCompletedTasksCountToday(address account) external view returns (uint256);
    function getCustomerAgreedTasksCountToday(address account) external view returns (uint256);
    function getPerformerAuditedTasksCountToday(address account) external view returns (uint256);
    function getCustomerAuditedTasksCountToday(address account) external view returns (uint256);
    function getCustomerCompletedTasksCountToday(address account) external view returns (uint256);
}
```

## TaskStatsFacet interface

### 📈 Platform analytics

**Comprehensive platform metrics and insights.** The TaskStatsFacet provides detailed analytics about platform usage, including task completion rates, popular tags, token usage patterns, and user engagement statistics.

```solidity
interface ITaskStatsFacet {
    /**
     * @dev Get comprehensive task statistics with timestamps
     * @param offset Pagination offset
     * @param limit Results limit
     * @return stats Complete platform statistics
     */
    function getTaskStatsWithTimestamps(
        uint256 offset,
        uint256 limit
    ) external view returns (TaskStatsWithTimestamps memory stats);
}

struct TaskStatsWithTimestamps {
    // Task state counters
    uint256 countNew;
    uint256 countAgreed;
    uint256 countProgress;
    uint256 countReview;
    uint256 countCompleted;
    uint256 countCanceled;
    
    // Task type counters
    uint256 countPrivate;
    uint256 countPublic;
    uint256 countHackaton;
    
    // Performance metrics
    uint256 avgTaskDuration;        // Average completion time
    uint256 avgPerformerRating;     // Average performer rating
    uint256 avgCustomerRating;      // Average customer rating
    
    // Popular content
    string[] topTags;               // Most used skill tags
    uint256[] topTagCounts;         // Usage counts for tags
    string[] topTokenNames;         // Most used token names
    uint256[] topTokenBalances;     // Token usage amounts
    uint256[] topETHBalances;       // ETH balances in tasks
    uint256[] topETHAmounts;        // ETH amounts in tasks
    
    // Temporal data
    uint256[] createTimestamps;     // Task creation timestamps
}
```

## CrossChainFacet interface

### 🌐 Cross-chain operations

```solidity
interface ICrossChainFacet {
    /**
     * @dev Create cross-chain task
     * @param targetChain Target chain ID
     * @param taskData Encoded task data
     * @param bridgeProtocol Bridge protocol to use
     */
    function createCrossChainTask(
        uint16 targetChain,
        bytes memory taskData,
        BridgeProtocol bridgeProtocol
    ) external payable;
    
    /**
     * @dev Handle cross-chain message
     * @param sourceChain Source chain ID
     * @param message Encoded message
     */
    function handleCrossChainMessage(
        uint16 sourceChain,
        bytes memory message
    ) external;
    
    /**
     * @dev Bridge payment cross-chain
     * @param taskId Task ID
     * @param targetChain Target chain
     * @param recipient Recipient address
     * @param amount Amount to bridge
     * @param token Token address
     */
    function bridgePayment(
        uint256 taskId,
        uint16 targetChain,
        address recipient,
        uint256 amount,
        address token
    ) external;
}

enum BridgeProtocol {
    Axelar,         // 0
    LayerZero,      // 1
    Hyperlane,      // 2
    Wormhole        // 3
}
```

### 🔗 Protocol integration

```solidity
interface IProtocolIntegration {
    /**
     * @dev Send message via Axelar
     * @param targetChain Target chain
     * @param payload Message payload
     */
    function sendAxelarMessage(
        string memory targetChain,
        bytes memory payload
    ) external payable;
    
    /**
     * @dev Send message via LayerZero
     * @param targetChain Target chain ID
     * @param payload Message payload
     */
    function sendLayerZeroMessage(
        uint16 targetChain,
        bytes memory payload
    ) external payable;
    
    /**
     * @dev Send message via Hyperlane
     * @param targetChain Target chain ID
     * @param payload Message payload
     */
    function sendHyperlaneMessage(
        uint32 targetChain,
        bytes memory payload
    ) external payable;
    
    /**
     * @dev Send message via Wormhole
     * @param targetChain Target chain ID
     * @param payload Message payload
     */
    function sendWormholeMessage(
        uint16 targetChain,
        bytes memory payload
    ) external payable;
}
```

## Events

### 📡 Task events

```solidity
// Task lifecycle events
event TaskCreated(
    uint256 indexed taskId,
    address indexed customer,
    uint256 payment,
    address paymentToken
);

event TaskApplicationSubmitted(
    uint256 indexed taskId,
    address indexed performer,
    string proposal
);

event PerformerSelected(
    uint256 indexed taskId,
    address indexed performer
);

event TaskStarted(
    uint256 indexed taskId,
    uint256 startedAt
);

event WorkSubmitted(
    uint256 indexed taskId,
    string[] deliverables
);

event TaskCompleted(
    uint256 indexed taskId,
    uint256 customerRating,
    uint256 performerRating
);

event TaskCancelled(
    uint256 indexed taskId,
    string reason
);
```

### 💰 Payment events

```solidity
// Payment events
event PaymentLocked(
    uint256 indexed taskId,
    uint256 amount,
    address token
);

event PaymentReleased(
    uint256 indexed taskId,
    address indexed performer,
    uint256 amount
);

event PaymentRefunded(
    uint256 indexed taskId,
    address indexed customer,
    uint256 amount
);

event PlatformFeeCollected(
    uint256 indexed taskId,
    uint256 fee
);
```

### ⚖️ Audit events

```solidity
// Dispute events
event DisputeInitiated(
    uint256 indexed disputeId,
    uint256 indexed taskId,
    address indexed initiator
);

event AuditorSelected(
    uint256 indexed disputeId,
    address indexed auditor
);

event AuditDecisionSubmitted(
    uint256 indexed disputeId,
    AuditDecision decision,
    string reasoning
);

event DisputeResolved(
    uint256 indexed disputeId,
    AuditDecision finalDecision
);
```

### 🌐 Cross-chain events

```solidity
// Cross-chain events
event CrossChainTaskCreated(
    uint256 indexed taskId,
    uint16 targetChain,
    BridgeProtocol protocol
);

event CrossChainMessageSent(
    uint16 indexed targetChain,
    bytes32 messageId,
    BridgeProtocol protocol
);

event CrossChainMessageReceived(
    uint16 indexed sourceChain,
    bytes32 messageId,
    bytes payload
);

event PaymentBridged(
    uint256 indexed taskId,
    uint16 targetChain,
    uint256 amount,
    address token
);
```

## Error handling

### 🚨 Custom errors

```solidity
// Task errors
error TaskNotFound(uint256 taskId);
error TaskNotOpen(uint256 taskId);
error TaskNotAssigned(uint256 taskId);
error TaskAlreadyCompleted(uint256 taskId);
error UnauthorizedTaskAccess(uint256 taskId, address user);
error InvalidTaskStatus(uint256 taskId, TaskStatus current, TaskStatus required);
error TaskDeadlineExceeded(uint256 taskId, uint256 deadline);

// Payment errors
error InsufficientPayment(uint256 required, uint256 provided);
error PaymentAlreadyLocked(uint256 taskId);
error PaymentNotLocked(uint256 taskId);
error UnsupportedToken(address token);
error PaymentTransferFailed(address token, address to, uint256 amount);

// User errors
error UserNotFound(address user);
error UnauthorizedUser(address user);
error InvalidUserProfile(string profile);
error InsufficientReputation(address user, uint256 required, uint256 current);

// Audit errors
error DisputeNotFound(uint256 disputeId);
error NotEligibleAuditor(address user);
error DisputeAlreadyResolved(uint256 disputeId);
error InvalidAuditDecision(AuditDecision decision);

// Cross-chain errors
error UnsupportedChain(uint16 chainId);
error InvalidBridgeProtocol(BridgeProtocol protocol);
error CrossChainMessageFailed(bytes32 messageId);
error InsufficientBridgeFee(uint256 required, uint256 provided);
```

## Gas optimization

### ⛽ Efficient patterns

**Batch operations:**
```solidity
/**
 * @dev Batch create multiple tasks
 * @param taskData Array of task data
 * @return taskIds Array of created task IDs
 */
function batchCreateTasks(
    TaskData[] memory taskData
) external payable returns (uint256[] memory taskIds) {
    taskIds = new uint256[](taskData.length);
    
    for (uint256 i = 0; i < taskData.length; i++) {
        taskIds[i] = _createTask(taskData[i]);
    }
}

/**
 * @dev Batch approve multiple tasks
 * @param taskIds Array of task IDs
 * @param ratings Array of ratings
 */
function batchApproveTasks(
    uint256[] memory taskIds,
    uint256[] memory ratings
) external {
    require(taskIds.length == ratings.length, "Array length mismatch");
    
    for (uint256 i = 0; i < taskIds.length; i++) {
        _approveTask(taskIds[i], ratings[i]);
    }
}
```

**Storage optimization:**
```solidity
// Pack multiple values into single storage slot
struct PackedTaskData {
    uint128 payment;        // 16 bytes
    uint64 deadline;        // 8 bytes
    uint32 createdAt;       // 4 bytes
    TaskStatus status;      // 1 byte
    bool disputed;          // 1 byte
    // Total: 32 bytes (1 storage slot)
}
```

## Security considerations

### 🔒 Access control

```solidity
// Role-based access control
modifier onlyCustomer(uint256 taskId) {
    require(tasks[taskId].customer == msg.sender, "Not task customer");
    _;
}

modifier onlyPerformer(uint256 taskId) {
    require(tasks[taskId].performer == msg.sender, "Not task performer");
    _;
}

modifier onlyAuditor(uint256 disputeId) {
    require(disputes[disputeId].auditor == msg.sender, "Not dispute auditor");
    require(users[msg.sender].isAuditor, "Not authorized auditor");
    _;
}

modifier onlyGovernor() {
    require(users[msg.sender].isGovernor, "Not authorized governor");
    _;
}
```

### 🛡️ Reentrancy protection

```solidity
// ReentrancyGuard implementation
uint256 private constant _NOT_ENTERED = 1;
uint256 private constant _ENTERED = 2;
uint256 private _status;

modifier nonReentrant() {
    require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
    _status = _ENTERED;
    _;
    _status = _NOT_ENTERED;
}

// Protected payment functions
function releasePayment(uint256 taskId) external nonReentrant {
    // Payment logic
}

function refundPayment(uint256 taskId) external nonReentrant {
    // Refund logic
}
```

## Deployment and verification

### 🚀 Deployment scripts

```javascript
// Hardhat deployment script
const { ethers } = require("hardhat");

async function main() {
    // Deploy Diamond
    const Diamond = await ethers.getContractFactory("Diamond");
    const diamond = await Diamond.deploy();
    await diamond.deployed();
    
    // Deploy facets
    const TaskFacet = await ethers.getContractFactory("TaskFacet");
    const taskFacet = await TaskFacet.deploy();
    await taskFacet.deployed();
    
    // Add facets to diamond
    const diamondCut = await ethers.getContractAt("IDiamondCut", diamond.address);
    await diamondCut.diamondCut([{
        facetAddress: taskFacet.address,
        action: 0, // Add
        functionSelectors: getSelectors(taskFacet)
    }], ethers.constants.AddressZero, "0x");
    
    console.log("Diamond deployed to:", diamond.address);
    console.log("TaskFacet deployed to:", taskFacet.address);
}
```

### ✅ Contract verification

```bash
# Verify on Etherscan-compatible explorers
npx hardhat verify --network moonbase DIAMOND_ADDRESS

# Verify facets
npx hardhat verify --network moonbase TASK_FACET_ADDRESS
npx hardhat verify --network moonbase PAYMENT_FACET_ADDRESS
```

## Testing

### 🧪 Test examples

```javascript
// Task creation test
describe("Task Creation", function() {
    it("Should create task with correct parameters", async function() {
        const taskData = {
            title: "Test Task",
            description: "Test Description",
            tags: ["solidity", "testing"],
            payment: ethers.utils.parseEther("1.0"),
            paymentToken: ethers.constants.AddressZero,
            deadline: Math.floor(Date.now() / 1000) + 86400
        };
        
        const tx = await dodao.createTask(
            taskData.title,
            taskData.description,
            taskData.tags,
            taskData.payment,
            taskData.paymentToken,
            taskData.deadline,
            { value: taskData.payment }
        );
        
        const receipt = await tx.wait();
        const event = receipt.events.find(e => e.event === "TaskCreated");
        
        expect(event.args.customer).to.equal(customer.address);
        expect(event.args.payment).to.equal(taskData.payment);
    });
});
```

## Resources

### 📚 Additional documentation

- **[Developer Overview](/docs/developers/overview)** - Platform integration guide
- **[API Reference](/docs/developers/api-reference)** - Complete API documentation
- **[Cross-chain Guide](/docs/developers/cross-chain)** - Multi-chain development
- **[Security Guide](/docs/features/security)** - Security best practices

### 🛠️ Development tools

- [Contract source code](https://github.com/devopsdao/devopsdao)
- [ABI files and interfaces](https://github.com/devopsdao/dodao-sdk)
- [Hardhat configuration](https://github.com/devopsdao/examples)
- [Test suites](https://github.com/devopsdao/devopsdao/tree/main/test)

---

**Ready to integrate?** [Explore API reference →](/docs/developers/api-reference)

*Build the future of decentralized work with Dodao's smart contracts!*

dodao-tokenomics.md

# Tokenomics Draft

<<<<<<< HEAD
<!-- ![Dodao Tokenomics Banner](./img/dodao-tokenomics-banner.png) -->
*The image banner should display a visual representation of the Dodao tokenomics, including the token distribution, utility, and ecosystem.*

## Abstract

This document describes the tokenomics of Dodao.dev (originally Devopsdao), a decentralized and permissionless marketplace for finding and hiring tech talents and designers. Dodao.dev aims to provide an easy way to implement Tasks and Projects using the power of smart contracts.

Dodao.dev started with the crypto and blockchain developer community in mind. However, as we approach the launch of our dApp, we realize the potential to expand our platform to all tech talents and designers. This document takes a deep dive into how the Dodao.dev marketplace and smart contracts work.

## Specification

The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

We set some keywords to make Dodao.dev internals clear and visible for both users and developers. These keywords always start with a capital letter.
* Task - A Task which specifies Customer requirements that must be implemented by a Performer. It consists of Type, Title, Description, Tags, Value, and Repository URL.
 - Task Type - Can be Private, Public, or Hackathon.
 - Task Title - A string that makes a Task easy to distinguish between other Tasks. It is also used for pull request creation on GitHub.
 - Task Description - A text that defines the Task requirements for the Performer.
 - Task Tags - Text and NFT tags that allow grouping and searching on the Tasks list.
* Customer - The person who created a Task is a Customer.
* Performer - The person selected to implement the Task is a Performer.
* Auditor - The person selected to settle the Task in favor of the Customer or Performer is an Auditor.
* Tags - Text or NFT tags used to distinguish a Task.
* Audit - A process of settling the Task result.

## Marketplace on Dodao.dev

The Dodao.dev is a Task marketplace. Users are categorized into two main groups: "Customers" and "Performers". Performers include developers, designers, and other professionals who work on and complete Tasks. Some Performers can become Auditors based on their skills, domain knowledge, and contribution to the DAO.

## Assets

Dodao.dev assets are divided into two categories:
1. Non-Fungible Tokens (NFTs)
2. Fungible Tokens

These assets can be used independently or in combination. NFTs have multiple use cases, with user profiles being the most important. Users mint their profile NFTs using the Dodao token, and these NFTs accumulate the users' activities on the platform, such as:
=======
Authors: T!, R
Last Update: 15.01.2023
Document Status: WIP; Final: NO

## Abstract

This document describes the tokenomics of Dodao.dev (originally Devopsdao), which aims to provide an easy way to implement Tasks and Projects using the power of smart contracts.

Dodao.dev is a decentralized and permissionless marketplace for finding and hiring tech talents and designers. 

We started building Dodao.dev with the crypto and blockchain developer community in mind. However, as we approach a near launch-ready version of our dApp, we are thinking, "Why not for all tech talents and designers?" Let's take a deeper dive into how the marketplace and smart contracts work.

## Specification

The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

We set some keywords to make Dodao.dev internals clear and visible for both users and developers. These keywords always start with a capital letter.
* Task - A Task which specifies Customer requirements that must be implemented by a Performer. It consists of Type, Title, Description, Tags, Value, and Repository URL.
 - Task Type - Can be Private, Public, or Hackathon.
 - Task Title - A string that makes a Task easy to distinguish between other Tasks. It is also used for pull request creation on GitHub.
 - Task Description - A text that defines the Task requirements for the Performer.
 - Task Tags - Text and NFT tags that allow grouping and searching on the Tasks list.
* Customer - The person who created a Task is a Customer.
* Performer - The person selected to implement the Task is a Performer.
* Auditor - The person selected to settle the Task in favor of the Customer or Performer is an Auditor.
* Tags - Text or NFT tags used to distinguish a Task.
* Audit - A process of settling the Task result.

## Marketplace on Dodao.dev

The marketplace is the central place of our dApp where almost everything happens. Users of the dApp are generally categorized into two main groups: "Customers" and "Performers". Performers are developers, designers, etc., users performing and completing Tasks. Some of the Performers can become Auditors depending on their level of skills, depth of domain knowledge, and contribution to the DAO.

## Assets

Dodao.dev assets are categorized into two categories:
a. NFT (non-fungible)
b. Token (fungible)

These two main assets will be used either alone or in combination. NFTs will have multiple use cases. The first and most important use case of an NFT is the user's profile. Users will mint their profile NFTs paying with the Dodao token. Users' profile NFTs will accumulate the users' activities on the platform. Some of the metrics are:
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7
- Tasks added to the marketplace
- Tasks completed successfully (based on time, quality, and cost)
- Technical skills
- Number of clients worked for

<<<<<<< HEAD
*We are working on expanding this concept and will provide updates in the future.*
=======
*We are working on this in more depth and will provide updates at a later stage.
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

## Dodao Token (Fungible)

<<<<<<< HEAD
The Dodao token ($DODAO) is the primary utility token of the platform. It has the following use cases:
- Accepted as payment for Tasks on the Tanssi Appchain, along with stablecoins
- Used for paying and collecting fees
- Required for buying skill tags and NFTs
- Needed for paying Audit fees
- Used for minting NFTs on the Tanssi Appchain
=======
The Dodao.dev token ($DODAO) will be accepted as payment for Tasks on the Tanssi Appchain. Stablecoins can also be used as payment methods on Tanssi. On other chains, the chain's native token, bridged $DODAO token, and stablecoins will be accepted as payment for Tasks.

Fees will be paid and collected in the Dodao token or stablecoins. The $DODAO token will be needed to buy skill Tags, NFTs, and pay for Audits.

For minting NFTs on the Tanssi Appchain, the $DODAO token will be used. On other chains, the chain's native token, bridged $DODAO token, and stablecoins will be accepted for minting NFTs.

The "Dodao" $DODAO Token will be necessary for minting various user NFTs.
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

On other chains, users can pay for Tasks and mint NFTs using the chain's native token, bridged $DODAO tokens, or stablecoins.
## NFTs (non-fungible)

NFTs (EIP-1155) will have various use cases on Dodao.dev:

Customer NFT: Required for users to add Tasks to the marketplace. This NFT ensures that only genuine customers can create and list tasks on the platform.

Performer NFT: Essential for users to participate in Tasks. Performers must hold this NFT to apply for and work on available tasks, ensuring a level of commitment and accountability.

Team NFTs: Needed for users who want to work in closed groups. These NFTs facilitate collaboration and help maintain privacy for teams working on specific projects.

Brand NFTs: Required for users to promote their brand on the platform. Brand NFTs allow companies or individuals to showcase their brand identity and attract potential customers or collaborators.

Sprint NFTs: Necessary for users to create one or multiple sprints. These NFTs help organize and manage tasks within a specific timeframe, promoting efficient project management.

Skill tag NFTs: Users can mint these NFTs to showcase their skills or highlight the skills required for a particular task. By displaying skill tag NFTs, users can effectively communicate their expertise or the specific skill sets needed for a project, enhancing the overall marketplace experience and facilitating better matches between Customers and Performers.

## Task tags and NFT tags

<<<<<<< HEAD
1. Customers can create Tasks with text tags and pre-minted NFT tags (e.g., JavaScript, Design, Web3). If a Customer doesn't have the required NFT tags, they can mint them for a fee or buy them from the Market.

2. Performers applying to a Task with NFT tags must own at least the same amount of the NFT tags. Owning more NFT tags allows Performers to boost their participation.

3. Upon completing a Task, Performers receive all the NFT tags assigned to the Task. They can keep or sell these skill tags on the Market.

4. If a Performer abandons a Task, their pledged NFT tags are added to the Task, boosting its visibility on the marketplace.

# Audits

Both Customers and Performers can initiate Audits to settle issues, mediate, or clarify misunderstandings related to the work done. Audits have a pre-set timeline and deadline, and they are final. Storing relevant information in the "chat box" of each Task is encouraged, as it can be useful during an Audit.

## When can users initiate an Audit?

- Customers can apply for an Audit when a Task is in the "Agreed", "Progress", or "Review" stage.
- Performers can apply for an Audit only when a Task is in the "Review" stage.

A 2.5% Audit fee is paid by topping up the Task contract during the application.

When a Task is sent for Audit, it becomes available for Auditors to apply. The Audit initiator can then select the Auditor, who must own an Auditor NFT to qualify. Auditor NFTs are earned and cannot be bought in the marketplace.

The selected Auditor carefully reviews the Task and asks the Performer to send their work. The Auditor must analyze if the work matches the Task requirements and make a decision within 48 hours to either set the Task to a Completed stage or return it to the New stage for a new Performer selection.

If the work does not match the Task requirements, the Auditor can ask the Performer to send corrections if they believe the work can be improved within the Audit period.

The Auditor's role is to effectively and economically resolve issues between the Customer and Performer, for which they receive a 2.5% Audit fee.

*At this stage, we are discussing "Task Audits" and not security audits, which will be explored in more depth later.*
=======
1. Each Task can be created with a number of text tags assigned to it along with its title and description.

When a Customer assigns a common tag that is also available as a pre-minted NFT tags collection (for example, Javascript, Design, or Web3), the user is able to attach one to their Task. This option is available by clicking on the assigned tag and selecting a count of NFT tags to be attached to the Task. If a Customer does not have any NFT tags from the collection, they are able to mint it for a fee or buy it from a Market (to be defined separately).

When the Task is created, the NFT tags assigned to the Task are transferred from the Customer's wallet to the Task contract address.

2. When a Performer applies to a Task with NFT tags, they must own at least the same amount of the NFT tags of the particular collection. If a Performer owns more NFT tags than was assigned to a Task, they can boost their participation by using more NFT tags, so they will be shown higher, and a power bar (and probably tag count) will be shown on their NFT tag badge. When a Performer applies to the Task, the NFT tags in the specified amount are transferred from the Performer's wallet to the Task contract address.

3. When a Performer completes the Task, they receive all NFT tags assigned to the Task, both the Customer's and their own. They are free to keep them or sell them on the Market. These NFT tags mentioned in this specific case are skill tags. Skill tags can be bought in the marketplace by customers, but skill tags cannot be transferred from wallet to wallet. Performers can only earn skill tags by completing tasks.

4. When a Performer abandons a Task, the NFT tags they have pledged for the Task will be added to the Task, and the Task will be boosted on the marketplace to be picked up by other developers. The Customer can simultaneously decide to cancel the Task after a 48-hour period has passed, and other developers are given the chance to participate in the Task.

# Audits

Both the Customer and Performer can initiate an Audit. Audits are used for settling an issue, mediation, and clarification if there are any misunderstandings or unclear topics between the Customer and the Performer about the work done. Audits have a pre-set timeline and deadline, and audits will be finally settled. Storing specific relevant information in the "chat box" of each task is encouraged as it proves to be useful when a task is in audit.

## When can users initiate an Audit?

* When a Task is in the "Agreed", "Progress", or "Review" stage, the Customer can apply for an Audit.
* When a Task is in the "Review" stage, a Performer can apply for an Audit. Performers cannot apply for an audit prior to the "Review" stage.

A 2.5% Audit fee is paid by topping up the Task contract during the application. 

When a Task is sent to Audit, it is available for Auditors to apply for it. Then, the Initiator of the Audit can select the Auditor. The Performer must own an Auditor NFT to qualify. Auditor NFTs are earned and cannot be bought in the marketplace. How to earn an Auditor NFT and the requirements will be shared with the community at later stages. We may also want the community to decide what makes a good auditor, and we may then define the requirements for how to become an auditor together with our community.

When an Auditor is selected, they carefully review the Task and ask the Performer to send them their work. The Auditor must analyze if the work matches the Task requirements and, within 48 hours, make their decision to either set the Task to a Completed stage or return it to the New stage for a new Performer selection.

When the work does not match the Task requirements, the Auditor, based on their professional expertise, has the right to ask the Performer to send their corrections if they believe it is minor and the work can be improved within the Audit period.

The Auditor's role is to effectively and economically resolve the issue raised between the Customer and Performer, for which they get a 2.5% Audit fee.

*At this stage, we talk about "Task Audits" and not security Audits. Security Audits are a separate area we are going to explore in more depth later.
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

## Task Marketplace: Present and Future

<<<<<<< HEAD
Currently, users can add Tasks to the marketplace, which include skill tags and project identifiers to group Tasks belonging to a certain feature, user story, or backlog item. Tasks can also be grouped into sprints.

As of now, users can add Tasks to the marketplace and get simple jobs done. Future releases will enable adding complete projects based on time and material, as well as hiring freelancers for longer professional engagements based on time spent on the project.

For each transaction, Dodao collects a 4% service fee, which is transferred to the DAO treasury.
=======
As you may have noticed on Dodao.dev, users add Tasks to the marketplace. Tasks include skill Tags and could also include project identifiers to group Tasks that belong to a certain group, for example, a feature. Features could be a part of a user story, and user stories could be backlog items. On the other hand, Tasks can then be grouped into sprints.

Today, users can add Tasks to the marketplace and get simple jobs done.
With future releases, it will be possible to add complete projects based on time and material.
In the near future, it will also be possible for Customers to hire freelancers for a longer professional engagement based on time spent on the project.

In each of these transactions, Dodao collects a 4% service fee, which is transferred to the DAO treasury. A very substantial portion of these service fees will be converted into Bitcoin at certain cycles.
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

## NFT Marketplace

<<<<<<< HEAD
NFT tags can be sold and purchased on the Dodao.dev NFT marketplace using the Dodao token or stablecoins. If a user chooses to use stablecoins, they will be directly exchanged for the Dodao base token via an Automated Market Maker (AMM). Dodao.dev NFTs will also be tradable on OpenSea and other external marketplaces.
=======
NFT tags can be sold and purchased on the Dodao.dev NFT marketplace for the Dodao.dev token or stablecoins. If the user chooses to use stablecoins, these will be directly exchanged for the Dodao.dev base token via an AMM. Dodao.dev NFTs will also be tradable on OpenSea and other external marketplaces.
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

## Service Fees

<<<<<<< HEAD
Service fees are due in the following situations:
- When a user adds a Task to the marketplace (4% service fee)
- When a user requests an Audit (2.5% service fee)
- When a user books professional services (0% service fee, to be explained as Dodao.dev evolves)

The service fee is withdrawn when the Task is settled and payment is made.
=======
* When a user adds a Task to the marketplace, the 4% service fee is added to the smart contract.
* When a user requests an Audit, the 2.5% service fee is added to the smart contract.
At the end, when the Task is settled, the payment is made, and the service fee is withdrawn.
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

## Service Fee Allocation

<<<<<<< HEAD
The collected service fees are sent to the treasury, which stores them for the token launch liquidity pool.

## Task Payments and Service Fees

Tasks have a USDT value and are paid in USDT. Service fees are also collected in USDT. The treasury will use the collected USDT to burn them for the Dodao token.

**ADDED: Governance and DAO Structure**

Dodao.dev will be governed by a Decentralized Autonomous Organization (DAO) to ensure transparency, community involvement, and decentralized decision-making. The DAO will consist of token holders, who can participate in voting and proposing changes to the platform.

The DAO will have the following responsibilities:
- Determining the allocation of treasury funds
- Deciding on platform upgrades and new feature implementations
- Setting and adjusting service fees and token economics
- Resolving disputes and making decisions in case of deadlocks

The voting power of each member will be proportional to the number of Dodao tokens they hold. A minimum quorum and a majority vote will be required for proposals to be implemented.
=======
It goes to the treasury, which stores it for the token launch liquidity pool.


>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

**ADDED: Staking and Rewards**

<<<<<<< HEAD
To incentivize long-term commitment and participation in the Dodao ecosystem, a staking program will be introduced. Users can stake their Dodao tokens to earn rewards and gain additional benefits, such as:
- Increased voting power in the DAO governance
- Reduced service fees for Tasks and Audits
- Priority access to new features and opportunities
- Higher visibility for Performers in the marketplace

The staking rewards will be generated from a portion of the service fees collected and will be distributed proportionally to the users' staked amount and staking duration.

**ADDED: Token Distribution**

The initial token distribution will be as follows:
- 50% to the community (airdrop, rewards, staking)
- 20% to the team and advisors (vested over 2 years)
- 15% to the treasury (for liquidity, development, and partnerships)
- 10% to early investors and strategic partners
- 5% for bounties and marketing initiatives

The token distribution aims to ensure a fair and balanced allocation, with a significant portion reserved for the community to encourage participation and decentralization.

**ADDED: Roadmap and Future Developments**

The Dodao.dev team has an ambitious roadmap to enhance the platform and expand its offerings. Some of the planned developments include:
- Integration of additional blockchains and cross-chain functionality
- Implementation of a reputation system for Customers, Performers, and Auditors
- Introduction of a decentralized dispute resolution mechanism
- Launch of a learning and certification program for Performers
- Partnerships with leading companies and organizations in the blockchain industry

As the platform grows and evolves, the team will continue to gather feedback from the community and adapt the roadmap to meet the needs and expectations of the users.
=======
No, all Tasks have a USDT value, and Tasks are paid in USDT.

Service fees are collected in USDT as well.

USDT will be used by the treasury to burn them for Dodao token.
>>>>>>> 9bf46bb8b118ae3ef2a114345b64d4abdd2489e7

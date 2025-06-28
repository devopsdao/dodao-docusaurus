# Dodao Tokenomics

## Abstract

This document describes the tokenomics of Dodao.dev (originally Devopsdao), a decentralized and permissionless marketplace for finding and hiring tech talents and designers. Dodao.dev aims to provide an easy way to implement Tasks and Projects using the power of smart contracts.

We started with the crypto and blockchain developer community in mind. However, as we approach the launch of our dApp, we realize the potential to expand our platform to all tech talents and designers. This document takes a deep dive into how the Dodao.dev marketplace and smart contracts work.

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
- Tasks added to the marketplace
- Tasks completed successfully (based on time, quality, and cost)
- Technical skills
- Number of clients worked for

## Dodao Token (Fungible)

The Dodao token ($DODAO) is the primary utility token of the platform. It has the following use cases:
- Accepted as payment for Tasks on the Tanssi Appchain, along with stablecoins
- Used for paying and collecting fees
- Required for buying skill tags and NFTs
- Needed for paying Audit fees
- Used for minting NFTs on the Tanssi Appchain

On other chains, users can pay for Tasks and mint NFTs using the chain's native token, bridged $DODAO tokens, or stablecoins.

## NFTs (non-fungible)

NFTs (EIP-1155) will have various use cases on Dodao.dev:

- Customer NFT: Required for users to add Tasks to the marketplace
- Performer NFT: Essential for users to participate in Tasks
- Team NFTs: Needed for users who want to work in closed groups
- Brand NFTs: Required for users to promote their brand on the platform
- Sprint NFTs: Necessary for users to create one or multiple sprints
- Skill tag NFTs: Users can mint these NFTs to showcase their skills or highlight required skills for tasks

## Task tags and NFT tags

1. Customers can create Tasks with text tags and pre-minted NFT tags (e.g., JavaScript, Design, Web3). If a Customer doesn't have the required NFT tags, they can mint them for a fee or buy them from the Market.

2. Performers applying to a Task with NFT tags must own at least the same amount of the NFT tags. Owning more NFT tags allows Performers to boost their participation.

3. Upon completing a Task, Performers receive all the NFT tags assigned to the Task. They can keep or sell these skill tags on the Market.

4. If a Performer abandons a Task, their pledged NFT tags are added to the Task, boosting its visibility on the marketplace.

## Audits

Both Customers and Performers can initiate Audits to settle issues, mediate, or clarify misunderstandings related to the work done. Audits have a pre-set timeline and deadline, and they are final. Storing relevant information in the "chat box" of each Task is encouraged, as it can be useful during an Audit.

### When can users initiate an Audit?

- Customers can apply for an Audit when a Task is in the "Agreed", "Progress", or "Review" stage.
- Performers can apply for an Audit only when a Task is in the "Review" stage.

A 2.5% Audit fee is paid by topping up the Task contract during the application.

When a Task is sent for Audit, it becomes available for Auditors to apply. The Audit initiator can then select the Auditor, who must own an Auditor NFT to qualify. Auditor NFTs are earned and cannot be bought in the marketplace.

The selected Auditor carefully reviews the Task and asks the Performer to send their work. The Auditor must analyze if the work matches the Task requirements and make a decision within 48 hours to either set the Task to a Completed stage or return it to the New stage for a new Performer selection.

If the work does not match the Task requirements, the Auditor can ask the Performer to send corrections if they believe the work can be improved within the Audit period.

The Auditor's role is to effectively and economically resolve issues between the Customer and Performer, for which they receive a 2.5% Audit fee.

*At this stage, we are discussing "Task Audits" and not security audits, which will be explored in more depth later.*

## Task Marketplace: Present and Future

Currently, users can add Tasks to the marketplace, which include skill tags and project identifiers to group Tasks belonging to a certain feature, user story, or backlog item. Tasks can also be grouped into sprints.

As of now, users can add Tasks to the marketplace and get simple jobs done. Future releases will enable adding complete projects based on time and material, as well as hiring freelancers for longer professional engagements based on time spent on the project.

For each transaction, Dodao collects a 4% service fee, which is transferred to the DAO treasury.

## NFT Marketplace

NFT tags can be sold and purchased on the Dodao.dev NFT marketplace using the Dodao token or stablecoins. If a user chooses to use stablecoins, they will be directly exchanged for the Dodao base token via an Automated Market Maker (AMM). Dodao.dev NFTs will also be tradable on OpenSea and other external marketplaces.

## Service Fees

Service fees are due in the following situations:
- When a user adds a Task to the marketplace (4% service fee)
- When a user requests an Audit (2.5% service fee)
- When a user books professional services (0% service fee, to be explained as Dodao.dev evolves)

The service fee is withdrawn when the Task is settled and payment is made.

## Service Fee Allocation

The collected service fees are sent to the treasury, which stores them for the token launch liquidity pool.

## Task Payments and Service Fees

Tasks have a USDT value and are paid in USDT. Service fees are also collected in USDT. The treasury will use the collected USDT to burn them for the Dodao token.

## Governance and DAO Structure

Dodao.dev will be governed by a Decentralized Autonomous Organization (DAO) to ensure transparency, community involvement, and decentralized decision-making. The DAO will consist of token holders, who can participate in voting and proposing changes to the platform.

The DAO will have the following responsibilities:
- Determining the allocation of treasury funds
- Deciding on platform upgrades and new feature implementations
- Setting and adjusting service fees and token economics
- Resolving disputes and making decisions in case of deadlocks

The voting power of each member will be proportional to the number of Dodao tokens they hold. A minimum quorum and a majority vote will be required for proposals to be implemented.

## Staking and Rewards

To incentivize long-term commitment and participation in the Dodao ecosystem, a staking program will be introduced. Users can stake their Dodao tokens to earn rewards and gain additional benefits, such as:
- Increased voting power in the DAO governance
- Reduced service fees for Tasks and Audits
- Priority access to new features and opportunities
- Higher visibility for Performers in the marketplace

The staking rewards will be generated from a portion of the service fees collected and will be distributed proportionally to the users' staked amount and staking duration.

## Token Distribution

The initial token distribution will be as follows:
- 50% to the community (airdrop, rewards, staking)
- 20% to the team and advisors (vested over 2 years)
- 15% to the treasury (for liquidity, development, and partnerships)
- 10% to early investors and strategic partners
- 5% for bounties and marketing initiatives

The token distribution aims to ensure a fair and balanced allocation, with a significant portion reserved for the community to encourage participation and decentralization.

## Roadmap and Future Developments

The Dodao.dev team has an ambitious roadmap to enhance the platform and expand its offerings. Some of the planned developments include:
- Integration of additional blockchains and cross-chain functionality
- Implementation of a reputation system for Customers, Performers, and Auditors
- Introduction of a decentralized dispute resolution mechanism
- Launch of a learning and certification program for Performers
- Partnerships with leading companies and organizations in the blockchain industry

As the platform grows and evolves, the team will continue to gather feedback from the community and adapt the roadmap to meet the needs and expectations of the users.

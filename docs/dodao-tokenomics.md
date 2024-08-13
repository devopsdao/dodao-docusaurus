dodao-tokenomics.md

# Tokenomics Draft

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
- Tasks added to the marketplace
- Tasks completed successfully (based on time, quality, and cost)
- Technical skills
- Number of clients worked for

*We are working on this in more depth and will provide updates at a later stage.

## Token (fungible)

The Dodao.dev token ($DODAO) will be accepted as payment for Tasks on the Tanssi Appchain. Stablecoins can also be used as payment methods on Tanssi. On other chains, the chain's native token, bridged $DODAO token, and stablecoins will be accepted as payment for Tasks.

Fees will be paid and collected in the Dodao token or stablecoins. The $DODAO token will be needed to buy skill Tags, NFTs, and pay for Audits.

For minting NFTs on the Tanssi Appchain, the $DODAO token will be used. On other chains, the chain's native token, bridged $DODAO token, and stablecoins will be accepted for minting NFTs.

The "Dodao" $DODAO Token will be necessary for minting various user NFTs.

## NFTs (non-fungible)

NFTs (EIP-1155) will have various use cases on Dodao.dev:

Customer NFT: Required for users to add Tasks to the marketplace. This NFT ensures that only genuine customers can create and list tasks on the platform.

Performer NFT: Essential for users to participate in Tasks. Performers must hold this NFT to apply for and work on available tasks, ensuring a level of commitment and accountability.

Team NFTs: Needed for users who want to work in closed groups. These NFTs facilitate collaboration and help maintain privacy for teams working on specific projects.

Brand NFTs: Required for users to promote their brand on the platform. Brand NFTs allow companies or individuals to showcase their brand identity and attract potential customers or collaborators.

Sprint NFTs: Necessary for users to create one or multiple sprints. These NFTs help organize and manage tasks within a specific timeframe, promoting efficient project management.

Skill tag NFTs: Users can mint these NFTs to showcase their skills or highlight the skills required for a particular task. By displaying skill tag NFTs, users can effectively communicate their expertise or the specific skill sets needed for a project, enhancing the overall marketplace experience and facilitating better matches between Customers and Performers.

## Task tags and NFT tags

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

# Task marketplace, the now and the future

As you may have noticed on Dodao.dev, users add Tasks to the marketplace. Tasks include skill Tags and could also include project identifiers to group Tasks that belong to a certain group, for example, a feature. Features could be a part of a user story, and user stories could be backlog items. On the other hand, Tasks can then be grouped into sprints.

Today, users can add Tasks to the marketplace and get simple jobs done.
With future releases, it will be possible to add complete projects based on time and material.
In the near future, it will also be possible for Customers to hire freelancers for a longer professional engagement based on time spent on the project.

In each of these transactions, Dodao collects a 4% service fee, which is transferred to the DAO treasury. A very substantial portion of these service fees will be converted into Bitcoin at certain cycles.

# NFT marketplace

NFT tags can be sold and purchased on the Dodao.dev NFT marketplace for the Dodao.dev token or stablecoins. If the user chooses to use stablecoins, these will be directly exchanged for the Dodao.dev base token via an AMM. Dodao.dev NFTs will also be tradable on OpenSea and other external marketplaces.

# When are service fees due?

* When a user adds a Task to the marketplace, the 4% service fee is added to the smart contract.
* When a user requests an Audit, the 2.5% service fee is added to the smart contract.
At the end, when the Task is settled, the payment is made, and the service fee is withdrawn.

# What happens with the service fee?

It goes to the treasury, which stores it for the token launch liquidity pool.



# Are Tasks paid in Dodao token?

No, all Tasks have a USDT value, and Tasks are paid in USDT.

Service fees are collected in USDT as well.

USDT will be used by the treasury to burn them for Dodao token.
# Tokenomics draft


Authors: T!, R
Last update: 15.01.2023
Document Status: WIP; final: NO

# Abstract

This document describes tokenomics of Dodao.dev (originally Devopsdao), which aims to provide an easy way to implement Tasks and Projects using the power of smart contracts.

Simply Dodao.dev is a decentralised and permissionless marketplace for finding and hiring tech talents and designers. 

We have started building Dodao.dev with the crypto and blockchain developer commmunity in our minds, but coming close to a near launch ready version of our dApp we are thinking of "why not for all tech talents and designers?" why should we limit us folks? Let's do a deeper dive into how the marketplace and smart contracts work.

# Specification

The keywords “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY” and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.

We set some keywords to make dodao.dev internals clear and visible for both user and developer, such keywords are always start with capital letter.
* Task - a Task which specififies Customer requirements which must be implemented by Performer, it consists of Type, Title, Desciption, Tags, Value and Repository URL
- Task Type - can be Private, Public or Hackaton
- Task Title - a string which makes a Task easy to distinguish between other Tasks, is also used for pull request creation on Github
- Task Description - a text which defines the Task requirements for the Performer
- Task Tags - text and NFT tags which allow groupping and search on the Tasks list
* Customer - the person who created a Task is a Customer
* Performer - the person selected to implement the Task is a Performer
* Auditor - the person selected to settle the Task in favor of Customer or Performer is an Auditor
* Tags - text or NFT tags used to destinguish a Task
* Audit - a process of settling the Task result


## Marketplace on dodao.dev

The marketplace is the central place of our dApp where almost everything happens. Users of the dApp are generally catgorized in two main groups "Customers" and "Performers", Performers are developers, designers, etc. users perfoming Tasks and completing Tasks. Some of the Performers can become Auditors depending on their level of skills, depth of domain knowledge and contribution to the DAO.

## Assets

dodao.dev assets are categorized in two categories:

a. NFT (non-fungible)
b. Token (fungible)

These two main assets will be used either alone or in combination. NFTs will have multiple use cases. First and most important use case of a NFT is the user's profile; Users will mint their profile NFTs paying with Dodao token. Users' profile NFTs will be accumulating the users activity on the platform, some of the metrics are:

- Tasks added to marketplace
- Tasks completed successfully (based on time, quality and cost)
- Technical skills
- Number of clients worked for

*we are working on this in more depth and will provide updates at a later stage.

## Token (fungible)

dodao.dev token can be used as gas(GSN), this depends on user's choice. Fees will be paid and collected in Dodao token. Token will be needed to buy skill Tags, NFTs and pay for Audits.

## NFTs (non-fungible)

NFTs(EIP-1155) will have various use cases on Dodao.dev

* user profiles are soulbound NFTs(eip-5192)
* Task and skill tags are NFTs
* every completed Task is a NFT
* project pages are NFTs


## Task tags and NFTs tags

1. Each Task can be created with a number of text tags assigned to it along its title and description.

When a Customer assigns a common tag which is also available as preminted NFT tags collection (for example Javascript, Design or Web3), user is able to attach one to his Task. Such option is available by clicking on the assigned tag and selecting a count of NFT tags to be attached to the Task, if a Customer does not have any NFT tags from the collection he is able to mint it for a fee, or buy from a Market (to be defined separately).

When the Task is created, the NFT tags assigned to the Task are transferred from Customer wallet to the Task contract address.

2. When a Performer applies to the Task with NFT tags he must own at least the same amount of the NFT tags of the particular collection. If a Performer owns more NFT tags than was assigned to a Task he can boost his participation by using more NFT tags so he will be shown higher and a power bar (and probably tag count) will be shown on his NFT tag badge. When Performer applies to the Task, the NFT tags in the specified amount are transferred from Performers wallet to the Task contract address.

3. When Performer completes the Task he receives all NFT tags assigned to the Task, both Customers' and his own. He is free to keep it or sell on the Market. These NFT tags mentioned in this specific case are skill tags. Skill tags can be bought in the marketplace by customers, skill tags can not be transferred from wallet to wallet. Performers can only earn skill tags by completing tasks.

4. When a Performer abandons a Task the NFT tags he has pledged for the Task will be added to the Task and the Task will be boosted on the marketplace to be picked up by other developers. The Customer at the same time can decide to cancel the Task after a 48 hours peiod has passed and other developers are given the chance to participate in the Task.

# Audits

Both the Customer and Performer can initiate an Audit; Audits are used for settling an issue, mediation and clarification if there are any misunderstandings or unclear topics between the Customer and the Performer about the work done. Audits have a pre-set timeline and deadline, audits will be finally settled. Storing specific relevant information in the "chat box" of each task is encouraged as it proves to be useful when a task is in audit.

## When can users initate an Audit?

* When a Task is in "Agreed", "Progress", "Review" stage Customer can apply for an Audit.
* When a Task is in a "Review" stage a Performer can apply for an Audit. Performers can not apply for an audit prior to "review" stage.

2.5 % Audit fee is paid by topping up the Task contract during the application. 

When a Task is sent to Audit, it is available for Auditors to apply for it, then the Initiator of the Audit can select the Auditor. The Performer must own a Auditor NFT to qualify. Auditor NFTs are earned and can not be bought in the marketplace. How to earn an auditor NFT and the requirements will be shared with the community at later stages. Maybe we may also want the community to decide what makes a good auditor and we may then define the requirements how to become an auditor together with our community.

When an Auditor is selected he carefully reviews the Task and asks the Performer to send him his work, the Auditor must analyze if the work matches the Tasks requirements and within 48 hours make his decision either to: set the Task to a Completed stage, or return it back to the New stage for a new Performer selection.

When the work does not match the Task requirements, Auditor based on on his professional expertise has a right to ask the Performer to send his corrections if he believes that it is minor and the work can be improved within the Audit period.

Auditor role is to effectively and economically resolve the issue raised between the Customer and Performer, for which he gets 2.5% Audit fee.

*this stage we talk about "Task Audits" and not security Audits; security Audits are a seperate area we are going to explore in more depth later.

# Task marketplace, the now and the future

As you may have noticed on Dodao.dev users add Tasks to the marketplace, Tasks include skill Tags and could also include project identifiers to group Tasks that belong in a certain group, for example a feature and features could be a part of a user story and user stories could be backlog items. On the other hand Tasks can then be grouped into sprints.

Today users can add Tasks to marketplace and get simple jobs done.
With future releases it will be possible to add complete projects based on time and material.
In the near future it will also be possible that Customers hire freelancers for a longer professional engagement based on time spent on the project.

In every of these transactions, Dodao collects a 4% service fee. Which is transferred to the DAO treasury. A very substantial portion of these service fees will be converted into Bitcoin at certain cycles.

# NFT marketplace

NFT tags can be sold and purchased on dodao.dev NFT marketplace for dodao.dev token or stablecoins. If the user chooses to use stablecoins, then these will be directly exchanged to dodao.dev base token via an AMM. Dodao.dev NFTs will be also tradable on Opensea and other external marketplaces.

# When are service fees due?

* when a user adds a Task to the marketplace, the 4% service fee is added to the smart contract.
* when a user requests for an Audit, the 2.5% service fee is added to the smart contract.
* when a user books any of the professional services, the 0% service fee is added to the smart contract (professional services will be explained at later stages as dodao.dev evolves throughout time and new features are added accordig to our roadmap)

At the end when the Task is settled the payment is made and the service fee is withdrawn.

# What happens with the service fee?

It goes to the treasury which stores it for the token launch liquidity pool.

# Token?

"Dodao" $DODAO Token will be needed to mint user NFTs, such as 

* Customer NFT (users need to have this NFT to add Tasks to the marketplace)
* Performer NFT (users need to have this NFT to participate in Tasks)
* team NFTs (users need to have this NFT if they want to work in closed groups)
* brand NFTs (users need to have this NFT to promote their brand)
* sprint NFTs (users need to have this NFT to create a sprint or multiple sprints)

Dodao Token will be needed to mint Skill tag NFTs.

Dodao Token will be needed to participate in coding classes on our learning hub

Dodao Token will be rewarded to students who complete coding courses on our learning hub. Students can then use these Dodao Token as they wish.

# Are Tasks paid in Dodao token?

No, all Tasks have a USDT value and Tasks are paid in USDT.

Service fees are collected in USDT as well.

USDT will be used by the treasury to burn them for Dodao token.








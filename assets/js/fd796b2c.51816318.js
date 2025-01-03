"use strict";(self.webpackChunkdodao_docusaurus_3=self.webpackChunkdodao_docusaurus_3||[]).push([[4548],{5839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(4848),s=n(8453);const o={},i="EIP-2535 Diamond Smart Contract",r={id:"smart-contract",title:"EIP-2535 Diamond Smart Contract",description:"TLDR;",source:"@site/docs/smart-contract.md",sourceDirName:".",slug:"/smart-contract",permalink:"/dodao-docusaurus/docs/smart-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/devopsdao/dodao-docusaurus/tree/main/docs/smart-contract.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Cross-chain Infrastructure",permalink:"/dodao-docusaurus/docs/technical/cross-chain-infrastructure"},next:{title:"diamond-hld-diagram",permalink:"/dodao-docusaurus/docs/diamond-hld-diagram"}},c={},d=[{value:"Motivation to Use Diamonds",id:"motivation-to-use-diamonds",level:2},{value:"Basics of the Approach",id:"basics-of-the-approach",level:2},{value:"How the Dodao Diamond Looks Like",id:"how-the-dodao-diamond-looks-like",level:2},{value:"Task and User Account Facets:",id:"task-and-user-account-facets",level:3},{value:"Token Facets:",id:"token-facets",level:3},{value:"Connected Contracts Facets:",id:"connected-contracts-facets",level:3},{value:"Witnet Oracle Facets:",id:"witnet-oracle-facets",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"eip-2535-diamond-smart-contract",children:"EIP-2535 Diamond Smart Contract"}),"\n",(0,a.jsx)(t.p,{children:"TLDR;"}),"\n",(0,a.jsx)(t.p,{children:"This article describes how useful the Diamonds standard was to implement Dodao Task management, mint ERC-1155 tokens, connect Diamonds between multiple EVM chains, and call the GitHub Web2 API."}),"\n",(0,a.jsx)(t.h2,{id:"motivation-to-use-diamonds",children:"Motivation to Use Diamonds"}),"\n",(0,a.jsxs)(t.p,{children:["When starting to develop ",(0,a.jsx)(t.a,{href:"https://dodao.dev",children:"Dodao.dev"}),", we used the ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2535",children:"EIP-2535 Diamond standard"})," to create manageable and upgradable smart contracts."]}),"\n",(0,a.jsxs)(t.p,{children:["The Diamonds EIP gives you the idea of Diamonds itself and the technology behind it. It is a great booster to get familiar with in-depth Solidity features such as ",(0,a.jsx)(t.code,{children:"DELEGATECALL"}),", which is used to redirect function calls from the main Diamond contract to its Facets, and storage structs on which Diamond Storage is based."]}),"\n",(0,a.jsxs)(t.p,{children:["A Diamond consists of a diamond facade contract and its facets.\nDiamonds rely on the feature of ",(0,a.jsx)(t.code,{children:"DELEGATECALL"}),", which executes the remote smart contract's code in the caller smart contract's storage context."]}),"\n",(0,a.jsx)(t.p,{children:"A -> Diamond -> Facet (delegatecall) msg.sender = A (updates happen on Diamond's storage)"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://blog.cryptostars.is/solidity-call-and-delegatecall-function-17b483a3c538",children:"More.."})}),"\n",(0,a.jsxs)(t.p,{children:["The facade Diamond is usually generic and ",(0,a.jsx)(t.code,{children:"DELEGATECALL"}),"s into its facets for implementation-specific function calls."]}),"\n",(0,a.jsx)(t.p,{children:"Diamond storage relies on Solidity structs that contain sets of state variables that are easy to read and write. A struct can be defined with state variables and then used in a particular position in contract storage. The position can be determined by a hash of a unique string."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://dev.to/mudgen/how-diamond-storage-works-90e",children:"More.."})}),"\n",(0,a.jsx)(t.h2,{id:"basics-of-the-approach",children:"Basics of the Approach"}),"\n",(0,a.jsxs)(t.p,{children:["The Dodao smart contract is based on the ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/assets/eip-2535/reference/EIP2535-Diamonds-Reference-Implementation.zip",children:"EIP-2535 Diamond-1 reference implementation"}),", which provides a Diamond facade, Diamond init used for facet deployment and upgrades, a DiamondCut facet used for adding and removing facet functions from the Diamond, an OwnerShip facet which maintains contract ownership, and a Louper facet which allows Diamond inspection. The ",(0,a.jsx)(t.strong,{children:"Diamond-1 reference implementation"})," is the generic, not very optimized Diamond implementation that is easy to understand. There are also Diamond-2 and Diamond-3 implementations that ",(0,a.jsx)(t.a,{href:"https://github.com/mudgen/diamond",children:"optimize Diamond Cuts and Louper functions for different use cases"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The Diamond reference implementation deploy scripts and tests are written for ",(0,a.jsx)(t.strong,{children:"Hardhat"}),". We have modified it to include project-specific facets and added functions for facet add, upgrade, and removal, and exposed it as Hardhat tasks to be used from the CLI. To minimize facet size in order to fit into the ",(0,a.jsx)(t.a,{href:"https://ethereum.org/en/developers/tutorials/downsizing-contracts-to-fight-the-contract-size-limit/",children:"24KB EVM limitation"}),", I have implemented facet library linking and deployment. There is a great ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/hardhat-contract-sizer",children:"hardhat-contract-sizer"})," plugin that allows monitoring your facet sizes."]}),"\n",(0,a.jsxs)(t.p,{children:["Additionally, we have added functions to ",(0,a.jsx)(t.a,{href:"https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan#using-programmatically",children:"programmatically verify deployed contracts"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The Louper facet allows inspecting Diamonds programmatically both on and off-chain. There is a great project louper.dev which allows Diamond inspection from your web browser."}),"\n",(0,a.jsxs)(t.p,{children:["The Diamonds standard allows for ",(0,a.jsx)(t.strong,{children:"flexible smart contract development"})," by keeping the main Diamond facade contract as a single entry point address and allowing the deployment of required facets when they are ready."]}),"\n",(0,a.jsx)(t.h2,{id:"how-the-dodao-diamond-looks-like",children:"How the Dodao Diamond Looks Like"}),"\n",(0,a.jsx)(t.p,{children:"Dodao.dev is a decentralized and permissionless task marketplace for tech talents and art creators, and relies on several facet and library groups implementing its on-chain functionality, which is constantly being developed and upgraded while keeping the simple and maintainable code structure."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Smart Contract Architecture",src:n(1346).A+"",width:"4092",height:"732"})}),"\n",(0,a.jsx)(t.h3,{id:"task-and-user-account-facets",children:"Task and User Account Facets:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TaskCreateFacet.sol"})," - creates non-upgradable Task contracts, which are not linked to the Diamond directly, use their own storage, and use ",(0,a.jsx)(t.code,{children:"CALL"}),"s to push necessary data back to the main Diamond."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TaskDataFacet.sol"})," - contains functions that read Tasks data from the Task contracts created by ",(0,a.jsx)(t.code,{children:"TaskCreateFacet"}),". It also manages the Task contracts blacklist."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LibTasks.sol"})," and ",(0,a.jsx)(t.strong,{children:"LibTasksAudit.sol"})," - provide underlying functions for the above facets."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LibChat.sol"})," - provides in-Task chat functions."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"AccountsFacet.sol"})," - manages user accounts. It is being called by Task contracts when a user participates in or completes the Task. It also manages the Accounts blacklist."]}),"\n",(0,a.jsx)(t.h3,{id:"token-facets",children:"Token Facets:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TokenFacet.sol"})," - creates ERC-1155 compatible fungible and non-fungible (NFT) tokens. Its implementation is based on the Enjin reference implementation rewritten to use Diamond storage and some project-specific functions and features added."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LibTokens.sol"})," - provides underlying functions for the ",(0,a.jsx)(t.code,{children:"TokenFacet"})," facet."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TokenDataFacet.sol"})," - contains more project-specific functions. Again, with Diamonds, you can easily distribute necessary functions between several facets to maintain the 24KB EVM limitation."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LibTokenData.sol"})," - provides underlying functions for the ",(0,a.jsx)(t.code,{children:"TokenDataFacet"})," facet."]}),"\n",(0,a.jsx)(t.p,{children:"The only drawback of using a Diamond for ERC-1155 tokens is that only one token ticker (name) can be set for a single contract address. It can be mitigated by creating several Diamonds sharing the same facets."}),"\n",(0,a.jsx)(t.h3,{id:"connected-contracts-facets",children:"Connected Contracts Facets:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"InterchainFacet.sol"})," - implements the ",(0,a.jsx)(t.a,{href:"https://moonbeam.network/blog/cross-chain-smart-contracts/",children:"Moonbeam Connected Contracts"})," concept by enabling connection with Axelar/Hyperlane/LayerZero and Wormhole omnichain protocols. The Diamond concept of a facade contract and Diamond Storage for protocol-specific configuration simplified the implementation of the idea to connect contracts between different chains a lot. It is always much easier to know that there is a single static contract address on every chain to be called, which enables better maintainability and security."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LibTokenData.sol"})," - provides underlying functions for the ",(0,a.jsx)(t.code,{children:"Interchain"})," facet."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LibUtils.sol"})," - provides some generic functions to be reused by multiple facets."]}),"\n",(0,a.jsx)(t.h3,{id:"witnet-oracle-facets",children:"Witnet Oracle Facets:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"WitnetFacet.sol"})," - implements the connection with ",(0,a.jsx)(t.a,{href:"https://docs.witnet.io/",children:"Witnet oracles"})," to query GitHub repository data used to automatically sign Task reviews."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LibWitnetRequest.sol"})," - provides underlying functions for the ",(0,a.jsx)(t.code,{children:"WitnetFacet"})," facet."]}),"\n",(0,a.jsxs)(t.p,{children:["Feel free to clone, fork, reuse, or contribute to the ",(0,a.jsx)(t.a,{href:"https://github.com/devopsdao/devopsdao-smart-contract-diamond",children:"Dodao smart contract diamond"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"All the facets use and share several Diamond storages and an AppStorage (it is not recommended to mix Diamond storage and contract storage because of the way Solidity stores data in structs). Diamond storage allows great flexibility in storing and accessing data, as the data at a certain pointer can be accessed from every facet linked to the Diamond."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1346:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/dodao-smart-contract-arch-mermaid-b7bb44ab88bb4ac7e970b5ac1cb09816.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
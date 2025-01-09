"use strict";(self.webpackChunkdodao_docusaurus_3=self.webpackChunkdodao_docusaurus_3||[]).push([[479],{9443:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(4848),t=s(8453);const l={},r="Current Development Status",c={id:"current-status",title:"Current Development Status",description:"This document provides an overview of the technical details and current development status of the Dodao.dev platform.",source:"@site/docs/current-status.md",sourceDirName:".",slug:"/current-status",permalink:"/docs/current-status",draft:!1,unlisted:!1,editUrl:"https://github.com/devopsdao/dodao-docusaurus/tree/main/docs/current-status.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How Dodao dApp Works",permalink:"/docs/how-dodao-works"},next:{title:"User Guides",permalink:"/docs/category/user-guides"}},a={},d=[{value:"Definitions",id:"definitions",level:2},{value:"Smart Contract Status",id:"smart-contract-status",level:2},{value:"Task and User Account Facets",id:"task-and-user-account-facets",level:3},{value:"Token Facets",id:"token-facets",level:3},{value:"Connected Contracts Facets",id:"connected-contracts-facets",level:3},{value:"Witnet Oracle Facets",id:"witnet-oracle-facets",level:3},{value:"Application Status",id:"application-status",level:2},{value:"Core Functionality",id:"core-functionality",level:3},{value:"UI/UX Improvements",id:"uiux-improvements",level:3},{value:"Completed",id:"completed",level:4},{value:"In Progress",id:"in-progress",level:4},{value:"Planned Features",id:"planned-features",level:2}];function o(n){const e={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"current-development-status",children:"Current Development Status"}),"\n",(0,i.jsx)(e.p,{children:"This document provides an overview of the technical details and current development status of the Dodao.dev platform."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Smart Contract Architecture",src:s(6614).A+"",width:"4092",height:"732"})}),"\n",(0,i.jsx)(e.h2,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsx)(e.p,{children:"We use the following terms to describe development status:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Implementation"}),": Feature or component is developed to a certain state"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Started Implementation"}),": Development has begun but is not yet completed"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Refactoring"}),": Previous implementation has been significantly changed or improved"]}),"\n",(0,i.jsx)(e.li,{children:"If a feature is not mentioned, development has not yet started"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"For mainnet launch readiness:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[ready]"}),": Generally ready, only minor changes may be required"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[mvp]"}),": Provides basic functionality, needs more development and testing"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[dev]"}),": Under development, has some functionality but not ready for testing"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[mock]"}),": Mocked-up contract, development has not yet started"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"smart-contract-status",children:"Smart Contract Status"}),"\n",(0,i.jsx)(e.h3,{id:"task-and-user-account-facets",children:"Task and User Account Facets"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"TaskCreateFacet.sol"})," [ready]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Creates non-upgradable Task contracts using factory pattern"}),"\n",(0,i.jsx)(e.li,{children:"Contracts use their own storage and push data back to main diamond via CALL"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"TaskDataFacet.sol"})," [ready]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Reads Tasks data from Task contracts"}),"\n",(0,i.jsx)(e.li,{children:"Manages Task contracts blacklist"}),"\n",(0,i.jsx)(e.li,{children:"Enables batch Task loading"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LibTasks.sol"})," [ready] and ",(0,i.jsx)(e.strong,{children:"LibTasksAudit.sol"})," [ready]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Provide underlying functions for Task facets"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LibChat.sol"})," [ready]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Provides in-Task chat functions"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"AccountsFacet.sol"})," [mvp]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Manages user accounts"}),"\n",(0,i.jsx)(e.li,{children:"Handles Task participation and completion"}),"\n",(0,i.jsx)(e.li,{children:"Manages Accounts blacklist"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"token-facets",children:"Token Facets"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"TokenFacet.sol"})," [mvp]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Creates ERC-1155 compatible tokens (fungible and NFT)"}),"\n",(0,i.jsx)(e.li,{children:"Based on Enjin reference implementation"}),"\n",(0,i.jsx)(e.li,{children:"Adapted for Diamond storage"}),"\n",(0,i.jsx)(e.li,{children:"Ready for complex token functionality"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LibTokens.sol"})," [ready]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Provides core ERC-1155 functions"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"TokenDataFacet.sol"})," [mvp] and ",(0,i.jsx)(e.strong,{children:"LibTokenData.sol"})," [mvp]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Handle project-specific token functions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"connected-contracts-facets",children:"Connected Contracts Facets"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"ProtocolOptimizerFacet.sol"})," [ready]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Implements dynamic protocol selection"}),"\n",(0,i.jsx)(e.li,{children:"Provides automated fee optimization"}),"\n",(0,i.jsx)(e.li,{children:"Tracks protocol performance metrics"}),"\n",(0,i.jsx)(e.li,{children:"Enables intelligent cross-chain routing"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"InterchainFacet.sol"})," [mvp]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Implements protocol-specific functions for:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Axelar"}),"\n",(0,i.jsx)(e.li,{children:"Hyperlane"}),"\n",(0,i.jsx)(e.li,{children:"LayerZero"}),"\n",(0,i.jsx)(e.li,{children:"Wormhole"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Enhanced with performance analytics"}),"\n",(0,i.jsx)(e.li,{children:"Integrated with protocol optimizer"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"TasksInterchainFacet.sol"})," [mvp]"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Enables cross-chain Task contract interactions"}),"\n",(0,i.jsx)(e.li,{children:"Optimized message routing"}),"\n",(0,i.jsx)(e.li,{children:"Protocol-aware fee management"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Protocol-specific facets [mvp]:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"AxelarFacet.sol"}),"\n",(0,i.jsx)(e.li,{children:"HyperlaneFacet.sol"}),"\n",(0,i.jsx)(e.li,{children:"LayerzeroFacet.sol"}),"\n",(0,i.jsx)(e.li,{children:"WormholeFacet.sol"}),"\n",(0,i.jsx)(e.li,{children:"Each integrated with protocol optimization"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"witnet-oracle-facets",children:"Witnet Oracle Facets"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"WitnetFacet.sol"})," [dev]","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Connects with Witnet oracles"}),"\n",(0,i.jsx)(e.li,{children:"Queries GitHub repository data"}),"\n",(0,i.jsx)(e.li,{children:"Enables automatic Task review signing"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"application-status",children:"Application Status"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Roadmap",src:s(2887).A+"",width:"1200",height:"670"})}),"\n",(0,i.jsx)(e.h3,{id:"core-functionality",children:"Core Functionality"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u2705 Batch data loading using accessor contract"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Task contract event monitoring system"}),"\n",(0,i.jsx)(e.li,{children:"\ud83d\udea7 Dashboard data analysis functions"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Refactored for Connected contracts"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Improved wallet connection UX"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 MetaMask web integration"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 WalletConnect 1.0 support"}),"\n",(0,i.jsx)(e.li,{children:"\ud83d\udea7 NFT-based user roles"}),"\n",(0,i.jsx)(e.li,{children:"\ud83d\udea7 NFT tags functionality"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Cross-platform builds (Web, Android, Linux)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"uiux-improvements",children:"UI/UX Improvements"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Design Update",src:s(3695).A+"",width:"1200",height:"670"})}),"\n",(0,i.jsx)(e.h4,{id:"completed",children:"Completed"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u2705 New UI design implementation"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Material Design principles"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Advanced search functionality"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Task details and chat"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Auditor page"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Loading skeletons"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Task participant list"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 Tags manager widget"}),"\n",(0,i.jsx)(e.li,{children:"\u2705 GitHub repository integration"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"in-progress",children:"In Progress"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud83d\udea7 Accounts page"}),"\n",(0,i.jsx)(e.li,{children:"\ud83d\udea7 NFT manager widget"}),"\n",(0,i.jsx)(e.li,{children:"\ud83d\udea7 Lottie animations"}),"\n",(0,i.jsx)(e.li,{children:"\ud83d\udea7 Connected contracts UI"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"planned-features",children:"Planned Features"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Cross-chain Functionality"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Complete Connected contracts implementation"}),"\n",(0,i.jsx)(e.li,{children:"Enhanced cross-chain message passing"}),"\n",(0,i.jsx)(e.li,{children:"Multi-chain asset management"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"NFT System"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Role-based permissions"}),"\n",(0,i.jsx)(e.li,{children:"Enhanced tag system"}),"\n",(0,i.jsx)(e.li,{children:"Token economics"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Platform Enhancements"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Analytics dashboard"}),"\n",(0,i.jsx)(e.li,{children:"Dispute resolution system"}),"\n",(0,i.jsx)(e.li,{children:"Project management integrations"}),"\n",(0,i.jsx)(e.li,{children:"iOS app development"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Developer Experience"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Improved documentation"}),"\n",(0,i.jsx)(e.li,{children:"SDK development"}),"\n",(0,i.jsx)(e.li,{children:"API enhancements"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"Note:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Diamond storage contains Tasks, Accounts lists, Token, Connected contracts configuration, and aggregated data"}),"\n",(0,i.jsx)(e.li,{children:"Task contract storage contains the Task data"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},3695:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/dodao-design-update-2bc93e030f7f0862f7102f198062dd6f.png"},2887:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/dodao-roadmap-74e73ab1c0ca55dde1fd5439c7b46578.png"},6614:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/dodao-smart-contract-arch-mermaid-b7bb44ab88bb4ac7e970b5ac1cb09816.png"},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(6540);const t={},l=i.createContext(t);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);
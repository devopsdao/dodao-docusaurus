"use strict";(self.webpackChunkdodao_docusaurus_3=self.webpackChunkdodao_docusaurus_3||[]).push([[900],{9728:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=e(4848),c=e(8453);const o={},d=void 0,s={id:"diamond-hld-diagram",title:"diamond-hld-diagram",description:"Diamond HLD diagram",source:"@site/docs/diamond-hld-diagram.md",sourceDirName:".",slug:"/diamond-hld-diagram",permalink:"/docs/diamond-hld-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/devopsdao/dodao-docusaurus/tree/main/docs/diamond-hld-diagram.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"EIP-2535 Diamond Smart Contract",permalink:"/docs/smart-contract"},next:{title:"Dodao's Approach to Security and Trust",permalink:"/docs/security-and-trust"}},r={},i=[{value:"Diamond HLD diagram",id:"diamond-hld-diagram",level:3}];function m(a){const t={code:"code",h3:"h3",pre:"pre",...(0,c.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"diamond-hld-diagram",children:"Diamond HLD diagram"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-mermaid",children:"graph LR\ndiamond[main Diamond facet] -- create immutable Task contract --\x3e TaskCreateFacet[TaskCreateFacet] --\x3e TaskContract\ndiamond -- access immutable Task contract data <--\x3e TaskDataFacet[TaskDataFacet] <--\x3e TaskContract\ndiamond -- access accounts data <--\x3e AccountsFacet[AccountsFacet]\ndiamond -- access and manage token data <--\x3e TokenFacet[TokenFacet, TokenDataFacet]\nTaskContract[immutable Task contract] -- send the accounts data --\x3e AccountsFacet[AccountsFacet]\nTaskCreateFacet -- check the token balances for access privileges <--\x3e TokenFacet\nTaskDataFacet -- check the token balances for access privileges <--\x3e TokenFacet\nConnectedContracts{Connected contracts protocol} -- create Task contracts from other chains <--\x3e diamond <--\x3e TasksInterchainFacet[TasksInterchainFacet, InterchainFacet] --\x3e TaskCreateFacet\nConnectedContracts -- access Task contracts from other chains <--\x3e diamond <--\x3e TasksInterchainFacet <--\x3e TaskContract\ndiamond --\x3e diamondStorage[(Diamond Storage)]\nTaskContract --\x3e taskContractStorage[(Task contract Storage)]\napp((Dodao dApp)) -- get contracts list, get Task, Account, Token data, update Token data <--\x3e diamond\napp -- update Task contract <--\x3e TaskContract\napp --\x3e ConnectedContracts\n"})})]})}function u(a={}){const{wrapper:t}={...(0,c.R)(),...a.components};return t?(0,n.jsx)(t,{...a,children:(0,n.jsx)(m,{...a})}):m(a)}},8453:(a,t,e)=>{e.d(t,{R:()=>d,x:()=>s});var n=e(6540);const c={},o=n.createContext(c);function d(a){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function s(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(c):a.components||c:d(a.components),n.createElement(o.Provider,{value:t},a.children)}}}]);
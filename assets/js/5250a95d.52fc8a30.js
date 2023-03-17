"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(a),p=r,f=u["".concat(d,".").concat(p)]||u[p]||l[p]||o;return a?n.createElement(f,c(c({ref:t},m),{},{components:a})):n.createElement(f,c({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={},c=void 0,s={unversionedId:"diamond-hld-diagram",id:"diamond-hld-diagram",title:"diamond-hld-diagram",description:"Diamond HLD diagram",source:"@site/docs/diamond-hld-diagram.md",sourceDirName:".",slug:"/diamond-hld-diagram",permalink:"/docs/diamond-hld-diagram",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/diamond-hld-diagram.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"current development status",permalink:"/docs/current-status"},next:{title:"dodao.dev EIP-2535 Diamond smart contract",permalink:"/docs/diamonds-usage"}},d={},i=[{value:"Diamond HLD diagram",id:"diamond-hld-diagram",level:3}],m={toc:i},u="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"diamond-hld-diagram"},"Diamond HLD diagram"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR\ndiamond[main Diamond facet] -- create immutable Task contract --\x3e TaskCreateFacet[TaskCreateFacet] --\x3e TaskContract\ndiamond -- access immutable Task contract data <--\x3e TaskDataFacet[TaskDataFacet] <--\x3e TaskContract\ndiamond -- access accounts data <--\x3e AccountsFacet[AccountsFacet]\ndiamond -- access and manage token data <--\x3e TokenFacet[TokenFacet, TokenDataFacet]\nTaskContract[immutable Task contract] -- send the accounts data --\x3e AccountsFacet[AccountsFacet]\nTaskCreateFacet -- check the token balances for access privileges <--\x3e TokenFacet\nTaskDataFacet -- check the token balances for access privileges <--\x3e TokenFacet\nConnectedContracts{Connected contracts protocol} -- create Task contracts from other chains <--\x3e diamond <--\x3e TasksInterchainFacet[TasksInterchainFacet, InterchainFacet] --\x3e TaskCreateFacet\nConnectedContracts -- access Task contracts from other chains <--\x3e diamond <--\x3e TasksInterchainFacet <--\x3e TaskContract\ndiamond --\x3e diamondStorage[(Diamond Storage)]\nTaskContract --\x3e taskContractStorage[(Task contract Storage)]\napp((Dodao dApp)) -- get contracts list, get Task, Account, Token data, update Token data <--\x3e diamond\napp -- update Task contract <--\x3e TaskContract\napp --\x3e ConnectedContracts\n")))}l.isMDXComponent=!0}}]);
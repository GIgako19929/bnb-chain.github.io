"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70267:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Storage Layout",sidebar_position:2},i="Storage Layout",l={unversionedId:"zkbnb/zkbnb-storageLayout",id:"zkbnb/zkbnb-storageLayout",isDocsHomePage:!1,title:"Storage Layout",description:"In this document, we discuss the storage layout for zkBNB, both in a Database as well as in the form of Tree structure.",source:"@site/docs/zkbnb/zkbnb-storageLayout.md",sourceDirName:"zkbnb",slug:"/zkbnb/zkbnb-storageLayout",permalink:"/docs/zkbnb/zkbnb-storageLayout",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/zkbnb/zkbnb-storageLayout.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Storage Layout",sidebar_position:2}},c=[{value:"RDB Layout",id:"rdb-layout",children:[{value:"Database Table Layout",id:"database-table-layout",children:[],level:3}],level:2},{value:"Tree",id:"tree",children:[],level:2},{value:"Account Tree",id:"account-tree",children:[],level:2},{value:"Account Asset Tree",id:"account-asset-tree",children:[],level:2},{value:"Nft Tree",id:"nft-tree",children:[],level:2},{value:"Physical Storage",id:"physical-storage",children:[],level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-layout"},"Storage Layout"),(0,r.kt)("p",null,"In this document, we discuss the storage layout for zkBNB, both in a Database as well as in the form of Tree structure. "),(0,r.kt)("h2",{id:"rdb-layout"},"RDB Layout"),(0,r.kt)("p",null,"The storage layout of the data in a RDB is illustrated in the following figure."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Layout",src:n(24679).Z})),(0,r.kt)("h3",{id:"database-table-layout"},"Database Table Layout"),(0,r.kt)("p",null,"In the database, the following tables will be responsible for storing different information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Account"),": record account related information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Account History"),": record the historical change information of the account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Asset"),": record Asset related information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Block Witness"),": record the information about the generated Witness"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"L1 Rollup Tx"),": record transaction information from L1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"L1 Synced Block"),": record block information from L1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compressed Block"),": record other information of L2 block"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Block"),": record L2 block information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pool Tx"),": record pending and executed but not packed Tx messages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"L2 NFT"),": record NFT related information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"L2 NFT History"),": record the historical status change information of NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Priority Request"),": record Priority Request information from L1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proof"),": record the Proof information generated by the circuit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sys Config"),": store system variables"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tx"),": record transaction information on L2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tx Detail"),": record detailed transaction information on L2")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"L2Block",src:n(77947).Z})),(0,r.kt)("h2",{id:"tree"},"Tree"),(0,r.kt)("p",null,"There are 4 types of trees in the system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Account Tree"),(0,r.kt)("li",{parentName:"ul"},"Account Asset Tree"),(0,r.kt)("li",{parentName:"ul"},"Nft Tree")),(0,r.kt)("h2",{id:"account-tree"},"Account Tree"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountNameHash"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nonce"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CollectionNonce"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountAssetTree.Root()")," of each Account will be calculated as a hash and written into the tree corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountID"),".\nUsed to record and save account status under each block height."),(0,r.kt)("h2",{id:"account-asset-tree"},"Account Asset Tree"),(0,r.kt)("p",null,"Each Account will maintain an Asset tree, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LpAmount"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"OfferCanceledOrFinalized")," of each Asset will be calculated as a hash and written into the tree corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetID"),"."),(0,r.kt)("h2",{id:"nft-tree"},"Nft Tree"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatorAccountIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerAccountIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NftContentHash"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NftL1Address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NftL1TokenId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatorTreasuryRate"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"CollectionId")," of each nft resource will be calculated as a hash and written into the tree corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"NftIndex"),".\nUsed to record and save nft status under each block height."),(0,r.kt)("h2",{id:"physical-storage"},"Physical Storage"),(0,r.kt)("p",null,"The Tree in ",(0,r.kt)("inlineCode",{parentName:"p"},"zkBNB")," uses the Sparse Merkle Tree (SMT) structure. In order to optimize the storage space as much as possible, we have implemented a SMT library, compressing the four-layer tree structure into one layer, reducing the depth of the tree and achieving a higher level. storage space usage."),(0,r.kt)("p",null,"Find More: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/zkBNB-smt/blob/master/docs/design.md"},"https://github.com/bnb-chain/zkBNB-smt/blob/master/docs/design.md")))}u.isMDXComponent=!0},77947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/L2Block-fcb0a32a8ab2ca5e5e4fbc7200c99553.png"},24679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storage_layout-23db6a5bb55f85f1ee2463f437a06f6d.png"}}]);
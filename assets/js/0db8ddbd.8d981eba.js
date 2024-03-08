"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={},o="Staking",l={unversionedId:"bcfusion/developers/staking",id:"bcfusion/developers/staking",title:"Staking",description:"This guide provides an overview of the key operations of staking, including creating validators,",source:"@site/docs/bcfusion/developers/staking.md",sourceDirName:"bcfusion/developers",slug:"/bcfusion/developers/staking",permalink:"/docs/bcfusion/developers/staking",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/developers/staking.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Validator Creation Guide",permalink:"/docs/bcfusion/validators/creation"},next:{title:"Governance",permalink:"/docs/bcfusion/developers/gov"}},s={},d=[{value:"Contract",id:"contract",level:2},{value:"Creating a Validator",id:"creating-a-validator",level:2},{value:"Editing Validator Information",id:"editing-validator-information",level:2},{value:"Edit Consensus Address",id:"edit-consensus-address",level:3},{value:"Edit Commission Rate",id:"edit-commission-rate",level:3},{value:"Edit Description",id:"edit-description",level:3},{value:"Edit Vote Address",id:"edit-vote-address",level:3},{value:"Delegation Operations",id:"delegation-operations",level:2},{value:"Delegate",id:"delegate",level:3},{value:"Undelegate",id:"undelegate",level:3},{value:"Redelegate",id:"redelegate",level:3},{value:"Claim",id:"claim",level:2},{value:"Contract ABI",id:"contract-abi",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"staking"},"Staking"),(0,i.kt)("p",null,"This guide provides an overview of the key operations of staking, including creating validators,\nediting validator information, and performing delegation operations.\nFor the general introduction of staking, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/bcfusion/validators/staking"},"Staking Mechanism"),"."),(0,i.kt)("h2",{id:"contract"},"Contract"),(0,i.kt)("p",null,"The BSC staking mainly uses the smart contracts ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub")," for validator management and delegation management."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StakeHub"),": Manages validator creations, user delegations, and executs penalty for validator slash.\n(Address: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000002002"),")")),(0,i.kt)("h2",{id:"creating-a-validator"},"Creating a Validator"),(0,i.kt)("p",null,"To create a validator, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"createValidator")," function with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function createValidator(\n    address consensusAddress,\n    bytes calldata voteAddress,\n    bytes calldata blsProof,\n    Commission calldata commission,\n    Description calldata description\n) external payable\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consensusAddress"),": The consensus address of the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voteAddress"),": The vote address of the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blsProof"),": The BLS signature as proof of the vote address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commission"),": The commission structure, including rate, maxRate, and maxChangeRate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": The description of the validator, including moniker, identity, website, and details.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Creating a validator requires locking 1 BNB, and the transaction must be sent with a sufficient BNB amount to\ncover this lock amount plus any self-delegation, in total 2001BNB."),(0,i.kt)("h2",{id:"editing-validator-information"},"Editing Validator Information"),(0,i.kt)("h3",{id:"edit-consensus-address"},"Edit Consensus Address"),(0,i.kt)("p",null,"To change the consensus address of a validator, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"editConsensusAddress")," function with the following paramters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function editConsensusAddress(address newConsensusAddress) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newConsensusAddress"),": The new consensus address of the validator.")),(0,i.kt)("h3",{id:"edit-commission-rate"},"Edit Commission Rate"),(0,i.kt)("p",null,"To update the commission rate of a validator, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"editCommissionRate")," function with the following paramters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function editCommissionRate(uint64 newCommissionRate) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newCommissionRate"),": The new commission structure, including rate, maxRate, and maxChangeRate.")),(0,i.kt)("h3",{id:"edit-description"},"Edit Description"),(0,i.kt)("p",null,"To update the description of a validator, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"editDescription")," function with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function editDescription(Description memory newDescription) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newDescription"),": The new description of the validator, including moniker, identity, website, and details.")),(0,i.kt)("h3",{id:"edit-vote-address"},"Edit Vote Address"),(0,i.kt)("p",null,"To change the vote address of a validator, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"editVoteAddress")," function with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function editVoteAddress(bytes calldata newVoteAddress, bytes calldata blsProof) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newVoteAddress"),": The new vote address of the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blsProof"),": The BLS signature as proof of the vote address.")),(0,i.kt)("h2",{id:"delegation-operations"},"Delegation Operations"),(0,i.kt)("h3",{id:"delegate"},"Delegate"),(0,i.kt)("p",null,"To delegate BNB to a validator, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"delegate")," function with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function delegate(address operatorAddress, bool delegateVotePower) external payable\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator address of the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateVotePower"),": The flag to indicate whether the delegator would like to delegate his/her voting power\nto the validator for governance.")),(0,i.kt)("h3",{id:"undelegate"},"Undelegate"),(0,i.kt)("p",null,"To undelegate BNB from a validator, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"undelegate")," function with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function undelegate(address operatorAddress, uint256 shares) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator address of the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shares"),": The amount of shares to undelegate from the validator.")),(0,i.kt)("h3",{id:"redelegate"},"Redelegate"),(0,i.kt)("p",null,"To redelegate BNB from one validator to another, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"redelegate")," function with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function redelegate(address srcValidator, address dstValidator, uint256 shares, bool delegateVotePower) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"srcValidator"),": The operator address of the source validator to redelegate from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dstValidator"),": The operator address of the destination validator to redelegate to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateVotePower"),": The flag to indicate whether the delegator would like to delegate his/her voting power\nto the destination validator for governance.")),(0,i.kt)("h2",{id:"claim"},"Claim"),(0,i.kt)("p",null,"To claim undelegated BNB after the unbonding period, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"claim")," function for a single request or ",(0,i.kt)("inlineCode",{parentName:"p"},"claimBatch")," for\nmultiple requests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function claim(address operatorAddress, uint256 requestNumber) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator address of the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestNumber"),": The number of unbonding requests to claim from. ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," means claiming from all unbonding requests.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimBatch(address[] calldata operatorAddresses, uint256[] calldata requestNumbers) external\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator addresses of the validatores."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestNumber"),": The numbers of unbonding requests to claim from the validators.")),(0,i.kt)("h2",{id:"contract-abi"},"Contract ABI"),(0,i.kt)("p",null,"For the full interfaces of ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub"),", please refer\nto ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/bc-fusion/abi/stakehub.abi"},"the ABI file"),"."))}c.isMDXComponent=!0}}]);
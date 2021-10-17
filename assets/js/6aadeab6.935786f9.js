"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[8405],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9401:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:4},l={unversionedId:"tokenization/tezos",id:"tokenization/tezos",isDocsHomePage:!1,title:"Tezos",description:"What gives our users the assurance that their items belong to them and won't change without their consent is their eventual tokenization in the blockchain.",source:"@site/docs/tokenization/tezos.md",sourceDirName:"tokenization",slug:"/tokenization/tezos",permalink:"/platform-docs/docs/tokenization/tezos",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/tokenization/tezos.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Instance",permalink:"/platform-docs/docs/tokenization/instance"},next:{title:"Overview",permalink:"/platform-docs/docs/commands/commands"}},c=[{value:"Benefits of the blockchain",id:"benefits-of-the-blockchain",children:[]},{value:"Navigating the blockchain",id:"navigating-the-blockchain",children:[]},{value:"Locating an Item",id:"locating-an-item",children:[]},{value:"Locating an Instance",id:"locating-an-instance",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What gives our users the assurance that their items belong to them and won't change without their consent is their eventual tokenization in the blockchain.\nA key feature of the platform's tokenization services is tokenization in the Tezos Blockchain. When you run the platform, you also run a Tezos Sandbox on your machine.\nWith only a few keystrokes, you will be able to visualize items and instances directly in the blockchain."),(0,o.kt)("h2",{id:"benefits-of-the-blockchain"},"Benefits of the blockchain"),(0,o.kt)("p",null,"The reason why storing items and instances in the blockchain is so powerful is that there is no central authority governing it. Even though we own the items and instances we create, storing them in the blockchain can only be done by calling a smart contract, and each operation is validated by that network of nodes, verifying that no one is trying to tamper with them, including us."),(0,o.kt)("p",null,"The blockchain also keeps a complete history of all operations it validated, which could be considered as an audit trail. The history of operations is held by all the nodes in the network, so no one can rewrite the history."),(0,o.kt)("p",null,"To keep it simple, once an item or instance is created in the blockchain, it's stored there forever, proving its ownership and set of characteristics forever."),(0,o.kt)("h2",{id:"navigating-the-blockchain"},"Navigating the blockchain"),(0,o.kt)("p",null,"To prove that our items and instances are stored on the Tezos Blockchain, we're going to use a Tezos block explorer. We can't just rely on our database as it could have bogus information."),(0,o.kt)("p",null,"The platform comes with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blockwatch-cc/tzindex"},"TzIndex")," built-in and it's running on port 8002 by default. Let's verify this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:8002/explorer/status\n{"mode":"sync","status":"synced","blocks":8527,"indexed":8527,"progress":1}\n')),(0,o.kt)("p",null,"We can see here that a node is running and it has already validated a number of blocks."),(0,o.kt)("h2",{id:"locating-an-item"},"Locating an Item"),(0,o.kt)("p",null,"To locate an item in the blockchain, we need 2 pieces of information:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The automatically assigned ",(0,o.kt)("inlineCode",{parentName:"li"},"item_id"),". Let's say we want to see item with id ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,o.kt)("li",{parentName:"ol"},"The address of the smart contract. This is stored under the ",(0,o.kt)("inlineCode",{parentName:"li"},"tezos_contract_address")," field. Let's say the address is ",(0,o.kt)("inlineCode",{parentName:"li"},"KT1KLYjHw7WXNAzS4LzKcktkGDz1kK3fFZh3"),".")),(0,o.kt)("p",null,"The way we designed our smart contracts, there is a list of all items stored in a list called a ",(0,o.kt)("inlineCode",{parentName:"p"},"bigmap"),". To find our bigmap's id, we can simply inspect our contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},' $ curl localhost:8002/explorer/contract/KT1KLYjHw7WXNAzS4LzKcktkGDz1kK3fFZh3\n\n{"address":"KT1KLYjHw7WXNAzS4LzKcktkGDz1kK3fFZh3","creator":"tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb","delegate":"","storage_size":2195,"storage_paid":2195,"first_seen":3,"last_seen":6819,"first_seen_time":"2021-10-17T14:35:25Z","last_seen_time":"2021-10-17T18:25:45Z","n_ops":2,"n_ops_failed":0,"bigmaps":{"instances":4,"items":5},"iface_hash":"4364d205","code_hash":"26383467","call_stats":{"add_item":1,"assign_item":1,"freeze_item":0,"transfer_instance":0,"update_instance":0,"update_item":0},"features":[],"interfaces":[]}\n')),(0,o.kt)("p",null,"We can see that the id of our ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," bigmap is ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,o.kt)("p",null,"Each key in our bigmap is an ",(0,o.kt)("inlineCode",{parentName:"p"},"item_id"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"item_id")," ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," would be located at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8002/explorer/bigmap/<bigmap_id>/<item_id>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:8002/explorer/bigmap/5/1\n\n{"key":"1","key_hash":"expru2dKqDfZG8hu4wNGkiyunvq2hdSKuVYtcKta7BWP6Q18oNxKjS","value":{"available_quantity":"9","data":{"level": "rare"},"frozen":true,"item_id":"1","name":"green family car","total_quantity":"10"}}\n')),(0,o.kt)("p",null,"This is it! We can see our item fully described in the blockchain."),(0,o.kt)("h2",{id:"locating-an-instance"},"Locating an Instance"),(0,o.kt)("p",null,"Similarily, to locate an instance we need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The original ",(0,o.kt)("inlineCode",{parentName:"li"},"item_id"),", with id ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ol"},"The automatically assigned ",(0,o.kt)("inlineCode",{parentName:"li"},"instance_number"),". Let's say it's also ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,o.kt)("li",{parentName:"ol"},"The contract number, it's stored under ",(0,o.kt)("inlineCode",{parentName:"li"},"tezos_contract_address")," field in the instance.")),(0,o.kt)("p",null,"Note that items and instances are co-located, so the contract address will always be the same between an instance and its item."),(0,o.kt)("p",null,"Looking at the contract, we can see that the bigmap id for ",(0,o.kt)("inlineCode",{parentName:"p"},"instances")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,o.kt)("p",null,"Let's list the keys in the ",(0,o.kt)("inlineCode",{parentName:"p"},"instances")," bigmap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:8002/explorer/bigmap/4/keys\n[{"key":{"instance_number":"1","item_id":"1"},"key_hash":"exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA"}]\n')),(0,o.kt)("p",null,"We can see that our item with ",(0,o.kt)("inlineCode",{parentName:"p"},"instance_number")," ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," is under the key ",(0,o.kt)("inlineCode",{parentName:"p"},"exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA"),"."),(0,o.kt)("p",null,"So we can find our instance under ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8002/explorer/bigmap/4/<key>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$  % curl localhost:8002/explorer/bigmap/4/exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA\n{"key":{"instance_number":"1","item_id":"1"},"key_hash":"exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA","value":{"data":{},"user_id":"Mr 2"}}\n')),(0,o.kt)("p",null,"And that's it. Our instance is fully described in the blockchain."),(0,o.kt)("p",null,"We can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"instances")," bigmap uses composite keys, composed of the ",(0,o.kt)("inlineCode",{parentName:"p"},"item_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"instance_number"),". The bigmap has to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"hash")," of this composite key to index the bigmap, hence the additional step."))}d.isMDXComponent=!0}}]);
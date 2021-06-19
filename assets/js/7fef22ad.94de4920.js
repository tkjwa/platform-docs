(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[758],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7358:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},l={unversionedId:"tutorial/mint-inventory-item",id:"tutorial/mint-inventory-item",isDocsHomePage:!1,title:"Mint an inventory item",description:"We have previously minted an item, but we haven't yet minted the item assigned to the user.",source:"@site/docs/tutorial/mint-inventory-item.md",sourceDirName:"tutorial",slug:"/tutorial/mint-inventory-item",permalink:"/platform-docs/docs/tutorial/mint-inventory-item",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/tutorial/mint-inventory-item.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Assign an item",permalink:"/platform-docs/docs/tutorial/assign-an-item"},next:{title:"API Reference",permalink:"/platform-docs/docs/reference"}},p=[{value:"Create inventory",id:"create-inventory",children:[]},{value:"Mint inventory item",id:"mint-inventory-item",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We have previously minted an item, but we haven't yet minted the item assigned to the user.\nIf we have an item with a ",(0,r.kt)("inlineCode",{parentName:"p"},"total quantity")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),", that means that we can create ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," copies of that item and assign them to up to ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," users."),(0,r.kt)("p",null,"Let's now move this inventory item to the blockchain which will constitute a proof that the user possesses it. It's like a proof showing that the NFT is owned by the user."),(0,r.kt)("h2",{id:"create-inventory"},"Create inventory"),(0,r.kt)("p",null,"We have created an implicit inventory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"item-store")," when we created the user, but this concept doesn't yet exist in the blockchain.\nIn fact, we're going to create a new blockchain inventory first and assign it to that user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'http://localhost:8000/api/tokenization-service/inventory' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    # The user id is the alpha numeric unique Id returned when the user was created. It looks like \"GvzrcnkBKbvuvgx_4Nrt\"\n    \"user_id\": \"<user id>\"\n}'\n")),(0,r.kt)("p",null,"Which returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "user_id" : "<user id>"\n}\n')),(0,r.kt)("p",null,"Let's verify that the user has an inventory assigned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8000/api/item-store/user/<user id>'\n")),(0,r.kt)("p",null,"Which returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "user_id": 1,\n    // looks like a Tezos Smart Contract address: KT1LwdiBVySJhWDyDuVWcywcM2VS8qw6aQFj\n    "inventory_address": "<inventory KT1 address>"\n}\n')),(0,r.kt)("p",null,"Yes, we can see that this user now has an ",(0,r.kt)("inlineCode",{parentName:"p"},"inventory_address")," added to the document as ",(0,r.kt)("inlineCode",{parentName:"p"},"KT1xxx")," field.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"KT1")," string actually reprents a Tezos smart contract address. Indeed, each inventory is a Tezos smart contract.\nWhy does this matter to the user? If the user doesn't care about the blockchain, they may not need to know about the smart contract.\nBut if they're a bit more tech savvy and want to verify their inventory themselves, they can get presented with the address and can look for the item in the blockchain themselves."),(0,r.kt)("p",null,"Let's tokenize the inventory item and verify this."),(0,r.kt)("h2",{id:"mint-inventory-item"},"Mint inventory item"),(0,r.kt)("p",null,"Let's now mint this inventory item."),(0,r.kt)("p",null,"For that, all we need to do is to call the relevant endpoint with the inventory item id. Remember that our id is random and can look like: ",(0,r.kt)("inlineCode",{parentName:"p"},"efzvcnkBKbvuvgx_ptpb"),".\nIt was assigned when we created the inventory item."),(0,r.kt)("p",null,"If we look at the content of this inventory item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8000/api/item-store/inventory/<inventory item id>'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "item_id": <item id>,\n    "user_id": "<user id>",\n    "instance_number": 1,\n    "data": {\n        "attribute": "platinum"\n    }\n}\n')),(0,r.kt)("p",null,"We can see that instance ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," of item ",(0,r.kt)("inlineCode",{parentName:"p"},"<item id>")," belongs to user ",(0,r.kt)("inlineCode",{parentName:"p"},"<user id>"),". The tokenization service can assign the item to the right smart contract in the blockchain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --location --request PUT 'http://localhost:8000/api/tokenization-service/inventory/<inventory item id>'\n")),(0,r.kt)("p",null,"Which returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "item_id": <item id>,\n    "instance_number": 1,\n    "inventory_address": "<inventory KT1 address>"\n}\n')),(0,r.kt)("p",null,"Wow, our item instance is now the user's inventory smart contract. As a tech savvy user, let's verify. "),(0,r.kt)("p",null,"For that, we will use the community-platform's built-in Tezos explorer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl http://localhost:8002/explorer/contract/<inventory KT1 address>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "address": "<inventory KT1 address>",\n  "manager": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",\n  "delegate": "",\n  "height": 3733,\n  "fee": 0.003615,\n  "gas_limit": 27046,\n  "gas_used": 26946,\n  "gas_price": 0.13416,\n  "storage_limit": 933,\n  "storage_size": 676,\n  "storage_paid": 676,\n  "is_funded": false,\n  "is_vesting": false,\n  "is_spendable": false,\n  "is_delegatable": false,\n  "is_delegated": false,\n  "first_in": 0,\n  "first_out": 0,\n  "last_in": 0,\n  "last_out": 0,\n  "first_seen": 3733,\n  "last_seen": 3818,\n  "delegated_since": 0,\n  "first_in_time": "0001-01-01T00:00:00Z",\n  "first_out_time": "0001-01-01T00:00:00Z",\n  "last_in_time": "0001-01-01T00:00:00Z",\n  "last_out_time": "0001-01-01T00:00:00Z",\n  "first_seen_time": "2021-05-16T02:34:35Z",\n  "last_seen_time": "2021-05-16T02:41:40Z",\n  "delegated_since_time": "0001-01-01T00:00:00Z",\n  "n_ops": 1,\n  "n_ops_failed": 0,\n  "n_tx": 1,\n  "n_delegation": 0,\n  "n_origination": 0,\n  "token_gen_min": 0,\n  "token_gen_max": 0,\n  "bigmap_ids": [\n    <bigmap id>\n  ],\n  "op_l": 3,\n  "op_p": 0,\n  "op_i": 0,\n  "iface_hash": "f5cba41c",\n  "call_stats": [\n    1,\n    0\n  ]\n}\n')),(0,r.kt)("p",null,"That's a lot of information. We're now deep inside the blockchain and lots of information won't make sense, but we can still find our item from there."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"bigmap_ids")," field has value ",(0,r.kt)("inlineCode",{parentName:"p"},"<bigmap id>"),".\nthis means that this smart contract has a storage of type ",(0,r.kt)("inlineCode",{parentName:"p"},"bigmap")," and that its id is ",(0,r.kt)("inlineCode",{parentName:"p"},"<bigmap id>"),". We can browse this storage with this url:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8002/explorer/bigmap/<bigmap id>\n")),(0,r.kt)("p",null,"which returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contract": "<inventory KT1 address>",\n  "bigmap_id": <bigmap id>,\n  "n_updates": 1,\n  "n_keys": 1,\n  "alloc_height": 3733,\n  "alloc_block": "BKpVN5tytX3mpAdEr8z4bsz5PhuKnKRzmTWKaGAWsFYbBsKgEKD",\n  "alloc_time": "2021-05-16T02:34:35Z",\n  "update_height": 3818,\n  "update_block": "BMB5q21dA7nZBaNFTAEoxPkpSn9W4CPzSEESfiPwasuhseSU7Kt",\n  "update_time": "2021-05-16T02:41:40Z",\n  "type": {\n    "key_type": "nat",\n    "value_type": {\n      "0@map": {\n        "0": "nat",\n        "1@map": {\n          "0": "string",\n          "1": "string"\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"We can see that it has 1 key (",(0,r.kt)("inlineCode",{parentName:"p"},"n_keys"),")."),(0,r.kt)("p",null,"Let's list the keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8002/explorer/bigmap/<bigmap id>/keys\n")),(0,r.kt)("p",null,"And now, let's see what's in key 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8002/explorer/bigmap/<bigmap id>/1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "<item id>",\n  "key_hash": "expru2dKqDfZG8hu4wNGkiyunvq2hdSKuVYtcKta7BWP6Q18oNxKjS",\n  "key_binary": "1",\n  "value": {\n    "0@map": {\n      "1": {\n        "attribute": "platinum"\n      }\n    }\n  },\n  "meta": {\n    "contract": "<inventory bigmap address>",\n    "bigmap_id": <bigmap id>,\n    "time": "2021-05-16T02:41:40Z",\n    "height": 3818,\n    "block": "BMB5q21dA7nZBaNFTAEoxPkpSn9W4CPzSEESfiPwasuhseSU7Kt",\n    "is_replaced": false,\n    "is_removed": false\n  }\n}\n')),(0,r.kt)("p",null,"That's our legendary goose! We have verified that the smart contract had stored item id ",(0,r.kt)("inlineCode",{parentName:"p"},"<item id>")," (",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is the item id), with instance ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", and it has the most recent attribute, ",(0,r.kt)("inlineCode",{parentName:"p"},"platinum"),"."),(0,r.kt)("p",null,"We're golden!"))}d.isMDXComponent=!0}}]);
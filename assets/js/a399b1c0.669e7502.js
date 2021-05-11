(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[639],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3324:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={sidebar_position:2},l={unversionedId:"tutorial/create-an-item",id:"tutorial/create-an-item",isDocsHomePage:!1,title:"Create a new item",description:"Note: to follow this tutorial, simply copy/paste the curl requests, or use the Postman collection located here",source:"@site/docs/tutorial/create-an-item.md",sourceDirName:"tutorial",slug:"/tutorial/create-an-item",permalink:"/platform-docs/docs/tutorial/create-an-item",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/tutorial/create-an-item.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/platform-docs/docs/tutorial/getting-started"},next:{title:"Item Store",permalink:"/platform-docs/docs/services-api/item-store"}},s=[{value:"Retrieve item",id:"retrieve-item",children:[]},{value:"Update item.",id:"update-item",children:[]},{value:"Purpose of the item store",id:"purpose-of-the-item-store",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: to follow this tutorial, simply copy/paste the ",(0,o.kt)("inlineCode",{parentName:"em"},"curl")," requests, or use the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/jwa-lab/item-store/blob/main/postman_collection/JWA%20Platform%20-%20Item%20Store.postman_collection.json"},"Postman collection located here"))),(0,o.kt)("p",null,"Let's start by creating an item in the platform. An item can be used in your video games. For instance,\nif you're a farmer raising poultry, you may hope to one day find a golden goose. A golden goose is a very rare and desirable animal,\nso we'll only create 10 of them. We'll start by adding the golden goose to the ",(0,o.kt)("inlineCode",{parentName:"p"},"item-store"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'% curl --location --request POST \'http://localhost:8000/item-store/item\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "Golden Goose",\n    "data": {\n        "level": "rare",\n        "type": "goose",\n        "attribute": "gold"\n    },\n    "total_quantity": 10,\n    "available_quantity": 10\n}\'\n')),(0,o.kt)("p",null,"Which will return a new ",(0,o.kt)("inlineCode",{parentName:"p"},"item_id"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"item_id":1}\n')),(0,o.kt)("h2",{id:"retrieve-item"},"Retrieve item"),(0,o.kt)("p",null,"We have now created our first item in the platform. Let's retrieve it to see what it looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"% curl --location --request GET 'http://localhost:8000/item-store/item/1'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Golden Goose",\n    "data": {\n        "level": "rare",\n        "type": "goose",\n        "attribute": "gold"\n    },\n    "total_quantity": 10,\n    "available_quantity": 10,\n    "item_id": 1\n}\n')),(0,o.kt)("p",null,"Notice that when we created the item, we didn't specify an item id.\nWhen the item was created, an id was automatically generated for us.\nThe fact that the ",(0,o.kt)("inlineCode",{parentName:"p"},"item_id")," is an integer and that it monotonically increases will be important later, let's keep that in mind.\nWhen we retrieve the item, the ",(0,o.kt)("inlineCode",{parentName:"p"},"item_id")," is now part of the item."),(0,o.kt)("h2",{id:"update-item"},"Update item."),(0,o.kt)("p",null,"Let's assume that we made a mistake when we created the item. A Golden Goose is actually more than rare, it's legendary and there can only be one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'% curl --location --request PUT \'http://localhost:8000/item-store/item/1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "Golden Goose",\n    "data": {\n        "level": "legendary",\n        "type": "goose",\n        "attribute": "gold"\n    },\n    "total_quantity": 1,\n    "available_quantity": 1,\n    "item_id": 1\n}\'\n')),(0,o.kt)("p",null,"Which returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"item_id"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"item_id":1}\n')),(0,o.kt)("p",null,"Let's retrieve the item again to verify that it was updated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8000/item-store/item/1'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Golden Goose",\n    "data": {\n        "level": "legendary",\n        "type": "goose",\n        "attribute": "gold"\n    },\n    "total_quantity": 1,\n    "available_quantity": 1,\n    "item_id": 1\n}\n')),(0,o.kt)("p",null,"Awesome! We can now create, get and update items."),(0,o.kt)("h2",{id:"purpose-of-the-item-store"},"Purpose of the item store"),(0,o.kt)("p",null,"As you noticed, creating, updating or retrieving an item only takes a few milliseconds.\nThe reasons is that the item store is a fast storage based on ",(0,o.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"ElasticSearch"),". ElastichSearch will allow us\nto index a great number of documents and make them easily searchable."),(0,o.kt)("p",null,"We haven't created our NFT yet, for now, the item only exists in the platform, not on the blockchain."),(0,o.kt)("p",null,"Let's now move our item to the blockchain."))}p.isMDXComponent=!0}}]);
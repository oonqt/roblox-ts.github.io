(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{134:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/roblox-ts-256-87091e1f34fdfaa0a2ac1a7666b607e1.png"},80:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(88)),i={id:"introduction",title:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"roblox-ts should not be used in production until v1.0",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/roblox-ts/roblox-ts.github.io/blob/master/docs/introduction.md",version:"current",sidebar:"docs",next:{title:"Quick Start",permalink:"/docs/quick-start"}},c=[{value:"What is roblox-ts?",id:"what-is-roblox-ts",children:[]},{value:"Why should you use roblox-ts?",id:"why-should-you-use-roblox-ts",children:[]},{value:"Why should you <em>not</em> use roblox-ts?",id:"why-should-you-not-use-roblox-ts",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("strong",{parentName:"p"},"roblox-ts should not be used in production until v1.0")))),Object(a.b)("center",null,Object(a.b)("img",{src:o(134).default})),Object(a.b)("h2",{id:"what-is-roblox-ts"},"What is roblox-ts?"),Object(a.b)("p",null,"In short, roblox-ts is a way to use the tooling and ecosystem surrounding TypeScript for Roblox development. This includes intellisense, IDE extensions, linters, code formatters, and more! It allows you to write TypeScript code that is then compiled into Luau code for use inside of Roblox."),Object(a.b)("p",null,"roblox-ts works with both ",Object(a.b)("strong",{parentName:"p"},"TypeScript")," files (",Object(a.b)("inlineCode",{parentName:"p"},".ts"),") ",Object(a.b)("em",{parentName:"p"},"and")," ",Object(a.b)("strong",{parentName:"p"},"Lua"),"/",Object(a.b)("strong",{parentName:"p"},"Luau")," files (",Object(a.b)("inlineCode",{parentName:"p"},".lua"),") which are paired with TypeScript type definition files (",Object(a.b)("inlineCode",{parentName:"p"},".d.ts"),")."),Object(a.b)("p",null,"Typings for the Roblox API are partially handwritten and partially automatically generated from the Roblox API dump and Developer Hub documentation."),Object(a.b)("h2",{id:"why-should-you-use-roblox-ts"},"Why should you use roblox-ts?"),Object(a.b)("p",null,"roblox-ts is great for managing large scale projects. Static types and intellisense allow you and your IDE to understand what your code is doing on a deeper level without having to mentally track what's going on. TypeScript's typing system allows you to clearly describe what each function expects as inputs and gives back as an output."),Object(a.b)("p",null,"roblox-ts, TypeScript, and most of the related tooling is open source! This means you can hack it, tweak it, and customize it to your liking. roblox-ts supports ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/roblox-ts/roblox-ts/discussions/categories/transformers"}),"TypeScript transformer plugins")," which allow you to modify the behavior of the compiler itself! You can also write your own ESLint plugins to enforce certain rules on your code."),Object(a.b)("h2",{id:"why-should-you-not-use-roblox-ts"},"Why should you ",Object(a.b)("em",{parentName:"h2"},"not")," use roblox-ts?"),Object(a.b)("p",null,"The biggest downside to using roblox-ts is debugging. When you use the Roblox Studio debugger (or when you encounter an error), you will see the compiled Luau code instead of TypeScript code. While we actively work to make the compiled Luau code as readable as possible, this does still introduce a bit of complexity. Usually, it's pretty easy to mentally map your compiled Luau code to your TypeScript code."),Object(a.b)("p",null,"The silver lining here is that most of your bugs should be logical bugs anyway!"))}u.isMDXComponent=!0},88:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return o?r.a.createElement(m,s(s({ref:t},l),{},{components:o})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);
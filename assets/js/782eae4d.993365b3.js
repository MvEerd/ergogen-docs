"use strict";(self.webpackChunkergogen_docs=self.webpackChunkergogen_docs||[]).push([[674],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9435:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:3},l="Metadata",s={unversionedId:"metadata",id:"metadata",isDocsHomePage:!1,title:"Metadata",description:"The meta top level key can contain arbitrary metadata documenting the keyboard in question.",source:"@site/docs/metadata.md",sourceDirName:".",slug:"/metadata",permalink:"/metadata",editUrl:"https://github.com/ergogen/ergogen-docs/edit/main/docs/metadata.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Preprocessing",permalink:"/preprocessing"},next:{title:"Units",permalink:"/units"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," top level key can contain arbitrary metadata documenting the keyboard in question.\nThe only fields Ergogen interprets and uses from it are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"engine")),": A ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver")," declaration in the usual form ",(0,o.kt)("inlineCode",{parentName:"p"},"[major].[minor].[patch]")," (so, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"3.1.4"),"), stating which Ergogen version the config is supposed to work with. The semver check is then performed for ",(0,o.kt)("em",{parentName:"p"},"compatibility"),", not exact equality, so and ",(0,o.kt)("inlineCode",{parentName:"p"},"engine")," value of ",(0,o.kt)("inlineCode",{parentName:"p"},"3.1.4"),' means "at least ',(0,o.kt)("inlineCode",{parentName:"p"},"3.1.4"),", up to (and excluding) ",(0,o.kt)("inlineCode",{parentName:"p"},"4.0.0"),'". It is possible that you config would work even on an older or newer engine, but Ergogen will give you an error until you update either your config proper or the ',(0,o.kt)("inlineCode",{parentName:"p"},"engine")," field to match the current environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"version")),": Not to be confused with ",(0,o.kt)("inlineCode",{parentName:"p"},"engine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," is just a piece of string metadata Ergogen embeds in the KiCAD PCBs it generates.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author")),": Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"version"),", only for the author field of the KiCAD PCB metadata."))),(0,o.kt)("p",null,"Otherwise, feel free to dump anything here from e-mail addresses and GitHub links to your Nan's favorite pie recipe. Ergogen won't complain - only it won't use those fields either."))}m.isMDXComponent=!0}}]);
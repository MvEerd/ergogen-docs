"use strict";(self.webpackChunkergogen_docs=self.webpackChunkergogen_docs||[]).push([[408],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,u=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:4},s="Points",p={unversionedId:"points",id:"points",isDocsHomePage:!1,title:"Points",description:"A point in this context refers to a 2D point [x,y] with a rotation/orientation r added in.",source:"@site/docs/points.md",sourceDirName:".",slug:"/points",permalink:"/ergogen-docs/points",editUrl:"https://github.com/mveerd/ergogen-docs/edit/main/website/docs/points.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Units",permalink:"/ergogen-docs/units"},next:{title:"Outlines",permalink:"/ergogen-docs/outlines"}},d=[{value:"<code>zones</code>",id:"zones",children:[{value:"<code>anchor</code>",id:"anchor",children:[]},{value:"<code>columns</code>",id:"columns",children:[]},{value:"<code>rows</code>",id:"rows",children:[]},{value:"<code>keys</code>",id:"keys",children:[]}]},{value:"<code>mirror</code>",id:"mirror",children:[]}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"points"},"Points"),(0,o.kt)("p",null,"A point in this context refers to a 2D point ",(0,o.kt)("inlineCode",{parentName:"p"},"[x,y]")," with a rotation/orientation ",(0,o.kt)("inlineCode",{parentName:"p"},"r")," added in.\nThese can be thought of as the middle points of the keycaps in a resulting keyboard layout, with an additional handling of the angle of the keycap."),(0,o.kt)("p",null,'What makes this generator "ergo" is the implicit focus on the column-stagger.\nOf course we could simulate the traditional row-stagger by defining everything with a 90 degree rotation, but that\'s really not the goal here.\nSince we\'re focusing on column-stagger, keys are laid out in columns, and a collection of columns is called a "zone".\nFor example, we can define multiple, independent zones to make it easy to differentiate between the keywell and the thumb fan/cluster.'),(0,o.kt)("p",null,"Points can be described as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"points:\n    zones:\n        my_zone_name:\n            anchor:\n                ref: <point reference>\n                orient: num # default = 0\n                shift: [x, y] # default = [0, 0]\n                rotate: num # default = 0\n                affect: string containing any of x, y, or r # default = xyr\n            columns:\n                column_name: <column def>\n                ...\n            rows:\n                row_name: <row-level key def>\n                ...\n            key: <zone-level key def>\n        ...\n")),(0,o.kt)("h2",{id:"zones"},(0,o.kt)("inlineCode",{parentName:"h2"},"zones")),(0,o.kt)("p",null,"We start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"zones")," clause, under which we can define the individual, named zones."),(0,o.kt)("h3",{id:"anchor"},(0,o.kt)("inlineCode",{parentName:"h3"},"anchor")),(0,o.kt)("p",null,"Anchors are used to, well, anchor the zone to something.  "),(0,o.kt)("h4",{id:"ref"},(0,o.kt)("inlineCode",{parentName:"h4"},"ref")),(0,o.kt)("p",null,"An anchor has ",(0,o.kt)("inlineCode",{parentName:"p"},"[0, 0]")," origin with a 0 degree orientation by default, but it can be changed to any other pre-existing point using ",(0,o.kt)("inlineCode",{parentName:"p"},"ref"),". ",(0,o.kt)("em",{parentName:"p"},"(Consequently, the first zone can't use a ref, because there isn't any yet.)"),"  "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," field can also be an array of references, in which case their average is used -- mostly useful for anchoring to the center, by averaging a key and its mirror; see later.\nThis initial position can then be changed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"orient"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"shift"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate")," options.\n",(0,o.kt)("inlineCode",{parentName:"p"},"shift")," adds extra translation, while the difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"orient")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate")," is whether they add their rotation before or after the translation."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Anywhere an anchor can be specified, a list of anchors is also valid.\nIt would be meaningless, though, if each subsequent anchor would override the previous one, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"affect")," clause helps to affect only certain dimensions of the anchor.\nIt can be declared using a string containing any of ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"r"),", which stand for the x and y coordinates and the rotation of the anchor, respectively."))),(0,o.kt)("h3",{id:"columns"},(0,o.kt)("inlineCode",{parentName:"h3"},"columns")),(0,o.kt)("p",null,"Once we know ",(0,o.kt)("em",{parentName:"p"},"where")," to start, we can describe the ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," of our layout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"columns:\n    column_name:\n      stagger: num # default = 0\n      spread: num # default = 19\n      rotate: num # default = 0\n      origin: [x, y] # relative to center of column's first key, default = [0, 0]\n      rows:\n        row_name: <key-specific key def>\n        ...\n      key: <column-level key def>\n    ...\n")),(0,o.kt)("h4",{id:"stagger"},(0,o.kt)("inlineCode",{parentName:"h4"},"stagger")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stagger")," means an extra vertical shift to the starting point of the whole column compared to the previous one (initially 0, cumulative afterwards).\nThe layout of the column then proceeds according to the appropriate key declarations (more on this in a minute)."),(0,o.kt)("h4",{id:"spread"},(0,o.kt)("inlineCode",{parentName:"h4"},"spread")),(0,o.kt)("p",null,"Once the column has been laid out, ",(0,o.kt)("inlineCode",{parentName:"p"},"spread")," (the horizontal space between this column and the next) is applied, and an optional (cumulative) rotation is added around the ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate")," is specified.\nWe repeat this until the end of the column definitions, then move on to the next zone."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Regarding lower level layout, rows appear both in zones and columns, and keys can be defined in five (!) different places. So what gives?\nDon't worry, all this is there just so that we can keep repetition to a minimum.\nWe could safely remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," options from zones, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," option from column definitions, without losing any of the functionality.\nBut we'd have to repeat ourselves a lot more."),(0,o.kt)("h3",{id:"rows"},(0,o.kt)("inlineCode",{parentName:"h3"},"rows")),(0,o.kt)("p",null,"Let's start with rows.\n",(0,o.kt)("inlineCode",{parentName:"p"},"zone.rows")," can give an overall picture about how many rows we'll have, and set key-related options on a per-row basis.\nBut what if we want to extend this initial picture with some column-specific details? (More on \"extension\" in a bit.)\nFor example, we want an outer pinky column where padding is tighter than it is for the others.\nThat's where ",(0,o.kt)("inlineCode",{parentName:"p"},"column.rows"),' can help, specifying a row "extension" for just that column.'),(0,o.kt)("p",null,"And what if we want to ",(0,o.kt)("strong",{parentName:"p"},"override")," the zone-level declarations in a certain column?\nFor example, we don't just want to modify a row's attributes for a given column, but actually override the amount of rows there are.\nLike an outer pinky column with just two keys instead of the regular three.\nThat's where ",(0,o.kt)("inlineCode",{parentName:"p"},"column.row_overrides")," can help, specifying a row-level override that disregards the zone-level defaults.\nEasy."),(0,o.kt)("h3",{id:"keys"},(0,o.kt)("inlineCode",{parentName:"h3"},"keys")),(0,o.kt)("p",null,"Now for the trickier part: keys.\nThere are five ways to set key-related options (again, to minimize the need for repetition):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"at the global-level (affecting all zones)"),(0,o.kt)("li",{parentName:"ol"},"at the zone-level"),(0,o.kt)("li",{parentName:"ol"},"at the column-level"),(0,o.kt)("li",{parentName:"ol"},"at the row-level"),(0,o.kt)("li",{parentName:"ol"},"at the key-level")),(0,o.kt)("p",null,'These "extend" each other in this order so by the time we reach a specific key, every level had an opportunity to modify something.'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that unlike the overriding for rows, key-related extension is additive."))),(0,o.kt)("p",null,"For example, let's suppose that a key-related attribute is already defined at the column-level.\nWhen we later encounter a key-level extension for this key that specifies a few things but not this exact key, its value will stay the same instead of disappearing."),(0,o.kt)("p",null,'When there is a "collision", simple values (like booleans, numbers, or strings) replace the old ones, while composites (arrays or objects) apply this same extension recursively, element-wise.\nSo when ',(0,o.kt)("inlineCode",{parentName:"p"},"key = 1")," is extended by ",(0,o.kt)("inlineCode",{parentName:"p"},"key = 2"),", the result is ",(0,o.kt)("inlineCode",{parentName:"p"},"key = 2"),".\nBut if ",(0,o.kt)("inlineCode",{parentName:"p"},"key = {a: 1}")," is extended by ",(0,o.kt)("inlineCode",{parentName:"p"},"key = {b: 2}"),", the result is ",(0,o.kt)("inlineCode",{parentName:"p"},"key = {a: 1, b: 2}"),"."),(0,o.kt)("p",null,"Lastly, while there are a few key-specific attributes that have special meaning in the context of points (listed below), any key with any data can be specified here.\nThis can be useful for storing arbitrary meta-info about the keys, or just configuring later stages with key-level parameters.\nSo, for example, when the outline phase specifies ",(0,o.kt)("inlineCode",{parentName:"p"},"bind")," as a key-level parameter (see below), it means that it can be specified just like any other key-level attribute."),(0,o.kt)("p",null,'Now for the "official" key-level attributes:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: name_override # default = a concatenation of zone, column, and row\nshift: [x, y] # default = [0, 0]\nrotate: num # default = 0\npadding: num # default = 19\nskip: boolean # default = false\nasym: left | right | both # default = both\nmirror: <arbitrary key-level data>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name")," is the unique identifier of this specific key.\nIt defaults to a ",(0,o.kt)("inlineCode",{parentName:"p"},"<row>_<column>")," format, but can be overridden if necessary.\n",(0,o.kt)("inlineCode",{parentName:"p"},"shift")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate")," declare an extra, key-level translation or rotation, respectively.\nThen we leave ",(0,o.kt)("inlineCode",{parentName:"p"},"padding")," amount of vertical space before moving on to the next key in the column.\n",(0,o.kt)("inlineCode",{parentName:"p"},"skip"),' signals that the point is just a "helper" and should not be included in the output.\nThis can happen when a ',(0,o.kt)("em",{parentName:"p"},"real"),' point is more easily calculable through a "stepping stone", but then we don\'t actually want the stepping stone to be a key itself.\nFinally, ',(0,o.kt)("inlineCode",{parentName:"p"},"asym")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mirror")," relate to mirroring, which we'll cover in a second."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"zones")," was only a single key within the ",(0,o.kt)("inlineCode",{parentName:"p"},"points")," section, it's reasonable to expect something more.\nIndeed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"points:\n    zones: <what we talked about so far...>\n    key: <global key def>\n    rotate: num # default = 0\n    mirror:\n        axis: num # default = 0\n        ref: <point reference> # and other anchor-level settings\n        distance: num # default = 0\n")),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate")," can apply a global angle to all the points, which can simulate the inter-half angle of one-piece boards."),(0,o.kt)("h2",{id:"mirror"},(0,o.kt)("inlineCode",{parentName:"h2"},"mirror")),(0,o.kt)("p",null,"Then comes the mirroring step, where the generator automatically copies and mirrors each point.\nIf there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"axis")," set within the ",(0,o.kt)("inlineCode",{parentName:"p"},"mirror")," key, points will be mirrored according to that.\nIf not, the axis will be calculated so that there will be exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"distance")," mms between the ",(0,o.kt)("inlineCode",{parentName:"p"},"ref"),"erenced point and its duplicate."),(0,o.kt)("p",null,"Now if our design is symmetric, we're done.\nOtherwise, we need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"asym")," key-level attribute to indicate which side the key should appear on.\nIf it's set as ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),", mirroring will simply skip this key.\nIf it's ",(0,o.kt)("inlineCode",{parentName:"p"},"right"),', mirroring will "move" the point instead of copying it.\nThe default ',(0,o.kt)("inlineCode",{parentName:"p"},"both")," assumes symmetry."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("em",{parentName:"p"},"key-level")," ",(0,o.kt)("inlineCode",{parentName:"p"},"mirror")," key (not to be confused with the global ",(0,o.kt)("inlineCode",{parentName:"p"},"mirror")," setting we just discussed above), we can set additional data for the mirrored version of the key.\nIt will use the same extension mechanism as it did for the 5 levels before."),(0,o.kt)("p",null,"And this concludes point definitions.\nThis should be generic enough to describe any ergo layout, yet easy enough so that you'll appreciate not having to work in raw CAD."))}h.isMDXComponent=!0}}]);
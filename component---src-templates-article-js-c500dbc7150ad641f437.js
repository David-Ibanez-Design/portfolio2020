(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8Cdb":function(e,t,a){e.exports={scrollTop:"scroll-top-module--scrollTop--1ll2r",fadeIn:"scroll-top-module--fadeIn--2qWac"}},"A2+M":function(e,t,a){var n=a("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,a){var n=a("Ijbi"),r=a("EbDI"),l=a("ZhPi"),c=a("Bnag");e.exports=function(e){return n(e)||r(e)||l(e)||c()}},SXlS:function(e,t,a){e.exports={articleContainer:"article-overview-module--articleContainer--2wf5m",articleInnerContainer:"article-overview-module--articleInnerContainer--NS8I0",articleIntroduction:"article-overview-module--articleIntroduction--ujCzJ",articleSunnary:"article-overview-module--articleSunnary--1t7Ob"}},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},VRlk:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return G}));var n=a("rePB"),r=a("q1tI"),l=a.n(r),c=a("jNNy"),i=a("9eSz"),o=a.n(i),s=a("dkXr"),u=a("Zuex"),m=a.n(u),d=function(e){var t=e.title,a=e.tags,n=e.imgArticle,r=e.coverTitle;return l.a.createElement("div",{className:m.a.header},l.a.createElement("div",{className:m.a.tagList},l.a.createElement(s.a,{tags:a})),l.a.createElement("div",{className:m.a.title},l.a.createElement("h1",null,t)),l.a.createElement("div",{className:m.a.cover},l.a.createElement(o.a,{fluid:n,title:r,alt:t})))},f=a("A2+M"),g=a("7ljp"),p=a("Wbzz"),v=a("3qgK"),E=a.n(v),h=function(e){var t=e.containerType,a=e.containerWidth,n=e.name,r=e.className,c=e.captions;return l.a.createElement(l.a.Fragment,null,"full"!==t?l.a.createElement("div",{className:E.a["contained"+a]+" "+(r||"")},l.a.createElement("div",{className:E.a.imageWrapper},l.a.createElement(o.a,{fluid:n.fluid,alt:"Image for the end of article test"})),c?l.a.createElement("figcaption",{className:E.a.caption},c):null):n.length>1?l.a.createElement("div",{className:E.a.fullBleedContainer},l.a.createElement("div",{className:E.a.fullBleed+" "+r},l.a.createElement("div",{className:E.a["fullBleedInner"+n.length]+" "+E.a["contained"+a]+" imageWrapper"},n.map((function(e,t){return l.a.createElement(o.a,{className:E.a["col"+n.length],key:t,fluid:e.fluid,alt:"Image for the end of article"})})))),c?l.a.createElement("figcaption",{className:E.a.caption},c):null):l.a.createElement("div",{className:E.a.fullBleedContainer},l.a.createElement("div",{className:E.a.fullBleed+" "+r},l.a.createElement("div",{className:E.a["contained"+a]+" "+(r||"")+" "+E.a.imageWrapper},l.a.createElement(o.a,{fluid:n.fluid,alt:"Image for the end of article"}))),c?l.a.createElement("figcaption",{className:E.a.caption},c):null))};h.defaultProps={containerWidth:"Md",containerType:"contained"};var w=h,y=a("IdFE"),b=a("Z5cx"),C=a("8Cdb"),O=a.n(C),x=function(){var e="undefined"!=typeof window,t=Object(r.useState)(!1),a=t[0],n=t[1];return e&&window.addEventListener("scroll",(function(){!a&&window.pageYOffset>400?n(!0):a&&window.pageYOffset<=400&&n(!1)})),l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{"data-tip":!0,"data-for":"backToTop",className:O.a.scrollTop,onClick:e?function(){window.scrollTo({top:0,behavior:"smooth"})}:null,style:{height:40,display:a?"block":"none"}}),l.a.createElement(b.a,{targetId:"backToTop",place:"left",effect:"solid"},"Scroll to the top"))},N=a("zLVn"),j=function(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("circle",{cx:"16",cy:"16",r:"16",fill:"#FFD4D0",fillRule:"nonzero"}),l.a.createElement("path",{fill:"#5C0000",d:"M19.3333333,8.26666667 C20.4379028,8.26666667 21.3333333,9.16209717 21.3333333,10.2666667 C21.3333333,11.1373055 20.777017,11.8780096 20.000465,12.1526984 L20,13.6 C20,15.3925031 19.2517955,16.5212121 17.4779264,16.5969203 L17.3333333,16.6 L15.3333333,16.6 C14.2682127,16.6 13.3975594,17.4326133 13.3367285,18.4824848 L13.3333333,18.6 L13.3337983,19.0473016 C14.1103503,19.3219904 14.6666667,20.0626945 14.6666667,20.9333333 C14.6666667,22.0379028 13.7712362,22.9333333 12.6666667,22.9333333 C11.5620972,22.9333333 10.6666667,22.0379028 10.6666667,20.9333333 C10.6666667,20.0626945 11.222983,19.3219904 11.999535,19.0473016 L11.999535,12.1526984 C11.222983,11.8780096 10.6666667,11.1373055 10.6666667,10.2666667 C10.6666667,9.16209717 11.5620972,8.26666667 12.6666667,8.26666667 C13.7712362,8.26666667 14.6666667,9.16209717 14.6666667,10.2666667 C14.6666667,11.1373055 14.1103503,11.8780096 13.3337983,12.1526984 L13.3331898,15.933197 C13.8543561,15.5416901 14.4940158,15.299397 15.1887403,15.2697463 L15.3333333,15.2666667 L17.3333333,15.2666667 C18.3984539,15.2666667 18.6024406,14.7673867 18.6632715,13.7175152 L18.6666667,13.6 L18.6652067,12.1523462 C17.8891745,11.8773768 17.3333333,11.1369335 17.3333333,10.2666667 C17.3333333,9.16209717 18.2287638,8.26666667 19.3333333,8.26666667 Z M12.6666667,20.2666667 C12.2984768,20.2666667 12,20.5651435 12,20.9333333 C12,21.3015232 12.2984768,21.6 12.6666667,21.6 C13.0348565,21.6 13.3333333,21.3015232 13.3333333,20.9333333 C13.3333333,20.5651435 13.0348565,20.2666667 12.6666667,20.2666667 Z M12.6666667,9.6 C12.2984768,9.6 12,9.89847683 12,10.2666667 C12,10.6348565 12.2984768,10.9333333 12.6666667,10.9333333 C13.0348565,10.9333333 13.3333333,10.6348565 13.3333333,10.2666667 C13.3333333,9.89847683 13.0348565,9.6 12.6666667,9.6 Z M19.3333333,9.6 C18.9651435,9.6 18.6666667,9.89847683 18.6666667,10.2666667 C18.6666667,10.6348565 18.9651435,10.9333333 19.3333333,10.9333333 C19.7015232,10.9333333 20,10.6348565 20,10.2666667 C20,9.89847683 19.7015232,9.6 19.3333333,9.6 Z"})))},I=function(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("g",{fill:"none"},l.a.createElement("circle",{cx:"16",cy:"16",r:"16",fill:"#C7E2FF"}),l.a.createElement("polygon",{fill:"#0057C2",points:"17.52 10.647 17.2 9 10 9 10 23 11.6 23 11.6 17.235 16.08 17.235 16.4 18.882 22 18.882 22 10.647"})))},S=function(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("circle",{cx:"16",cy:"16",r:"16",fill:"#B3FFD6",fillRule:"nonzero"}),l.a.createElement("polygon",{fill:"#007566",points:"21.065 10 19.659 11.361 13.992 16.614 12.341 15.14 10.874 13.78 8 16.444 9.468 17.805 12.525 20.639 13.931 22 15.399 20.639 22.532 14.025 24 12.665"})))},P=a("SXlS"),A=a.n(P),L=function(e){e.type;var t=Object(N.a)(e,["type"]),a={};return t.children.length?a=t.children.reduce((function(e,t,a){return e[""+t.props.mdxType]=t.props.children,e}),{}):a.Sunnary=t.children.props.children,l.a.createElement("div",{className:A.a.articleContainer},l.a.createElement("div",{className:A.a.articleInnerContainer},l.a.createElement("div",{className:A.a.articleIntroduction},a.Sunnary?a.Sunnary:null),a.Problems&&a.Goals&&a.Outcomes?l.a.createElement("div",{className:A.a.articleSunnary},l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("h3",null,"Problems"),a.Problems?a.Problems:null),l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement("h3",null,"Goals"),a.Goals?a.Goals:null),l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement("h3",null,"Outcomes"),a.Outcomes?a.Outcomes:null)):null))},k={Img:o.a,Link:p.Link,Images:w,ArticleOverview:L},R=l.a.createRef(),T=function(e){var t=e.body,a=e.imagesObj;return l.a.createElement("div",{className:E.a.container},l.a.createElement("article",{ref:R},l.a.createElement(g.MDXProvider,{components:k},l.a.createElement(f.MDXRenderer,{style:E.a,images:a},t)),l.a.createElement(x,null)))},B=a("wMK4"),D=a.n(B),M=function(e){e.className;return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("rect",{width:"32",height:"32"}),l.a.createElement("polygon",{fill:"#101426",points:"29.816 12.615 11.338 12.591 16 7.952 14.159 6.125 6.345 13.879 14.179 21.653 16.016 19.831 11.341 15.179 29.819 15.203",transform:"rotate(135 18.082 13.889)"}),l.a.createElement("polygon",{fill:"#101426",points:"13.009 11.432 3.628 11.42 5.995 9.046 5.061 8.111 1.094 12.079 5.071 16.056 6.003 15.124 3.63 12.744 13.011 12.756",transform:"rotate(135 7.052 12.084)"}),l.a.createElement("polygon",{fill:"#101426",points:"27.111 23.333 17.73 23.321 20.097 20.947 19.162 20.013 15.195 23.98 19.173 27.957 20.105 27.025 17.732 24.645 27.113 24.657",transform:"rotate(135 21.154 23.985)"})))},X=a("zS87"),F=a("Crm8"),W=function(e){var t=e.articles,a=Object(F.a)(),n="undefined"!=typeof window,c=function(){return n?window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth:null};var i,u,m,d=(i=Object(r.useState)(c()),u=i[0],m=i[1],Object(r.useEffect)((function(){var e=function(){m(c())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),u),f=t[0].node.frontmatter,g=f.title,p=f.tags,v=f.suggestedArt,E=f.coverHomepage;return l.a.createElement("div",{className:D.a.container},l.a.createElement("div",{className:D.a.innerContainer},l.a.createElement("h2",{className:D.a.title},l.a.createElement(M,null),a.suggestedArt.next)),l.a.createElement("div",{className:D.a.bannerContainer},l.a.createElement("div",{className:D.a.bannerBg},l.a.createElement(X.a,{className:D.a.innerContainer+" "+D.a.nextArtContainer,to:"/"+t[0].node.parent.relativeDirectory},l.a.createElement("div",{className:D.a.imageContainer},l.a.createElement("div",{className:D.a.innerImage,"data-tip":!0,"data-for":"viewProject"},l.a.createElement("div",{className:D.a.image},l.a.createElement(o.a,{fluid:n?function(e){return e>1035?v.childImageSharp.fluid:E.childImageSharp.fluid}(d):null,alt:g})),l.a.createElement(b.a,{targetId:"viewProject",effect:"float",hidePointer:"hidePointer","data-offset":"{'top': 0}"},a.suggestedArt.viewCaseStudy),l.a.createElement("div",{className:D.a.shadow}))),l.a.createElement("div",{className:D.a.textContainer},l.a.createElement("div",{className:D.a.innerText},l.a.createElement("div",{className:D.a.tags},l.a.createElement(s.a,{tags:p})),l.a.createElement("h2",{className:D.a.artTitle},l.a.createElement("span",null,g)),l.a.createElement("div",{className:D.a.more},l.a.createElement("p",null,a.suggestedArt.viewCaseStudy),l.a.createElement("div",{className:D.a.iconArrow},l.a.createElement("div",{className:D.a.iconArrowRect}),l.a.createElement("div",{className:D.a.iconArrowHead})))))))))},z=a("dLvh"),Z=a.n(z),q=a("I/Ru");function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var G="1178627924";t.default=function(e){var t=e.data,a=t.articleContent,r=a.body,i=a.frontmatter,o=i.title,s=i.tags,u=i.coverArticle,m=i.imagesMd,f=i.imagesLg,g=i.imagesXl,p=i.imagesXXl,v=[],E=l.a.useContext(q.b).localizedPath;v.push({node:t.suggestedArticles});var h=[];function w(e,t){var a=e&&e.reduce((function(e,t,a){return e[""+t.name]=e[""+toString(t.name)]||function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t.childImageSharp),e}),{});return h[t]=a,h}return w(m,"md"),w(f,"lg"),w(g,"xl"),w(p,"xxl"),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:o,path:E,description:o,contentType:"article",keywords:s}),l.a.createElement("div",{className:Z.a.container},l.a.createElement(d,{title:o,tags:s,imgArticle:u.childImageSharp.fluid}),l.a.createElement("div",{className:Z.a.content},l.a.createElement(T,{body:r,imagesObj:h})),l.a.createElement(W,{articles:v})))}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},X8hv:function(e,t,a){var n=a("sXyB"),r=a("RIqP"),l=a("lSNA"),c=a("8OQS");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s=a("q1tI"),u=a("7ljp").mdx,m=a("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,a=e.children,l=c(e,["scope","children"]),i=m(t),d=s.useMemo((function(){if(!a)return null;var e=o({React:s,mdx:u},i),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(r(t),[""+a])).apply(void 0,[{}].concat(r(l)))}),[a,t]);return s.createElement(d,o({},l))}},ZhPi:function(e,t,a){var n=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},Zuex:function(e,t,a){e.exports={header:"article-heading-module--header--12F7k",tagList:"article-heading-module--tagList--31sEl",title:"article-heading-module--title--11w_l",cover:"article-heading-module--cover--3t0Ya"}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},dLvh:function(e,t,a){e.exports={container:"article-module--container--6vedR",articleImageContained:"article-module--articleImageContained--2MXVi"}},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},sXyB:function(e,t,a){var n=a("SksO"),r=a("b48C");function l(t,a,c){return r()?e.exports=l=Reflect.construct:e.exports=l=function(e,t,a){var r=[null];r.push.apply(r,t);var l=new(Function.bind.apply(e,r));return a&&n(l,a.prototype),l},l.apply(null,arguments)}e.exports=l},wMK4:function(e,t,a){e.exports={animatedBackground:"suggested-articles-module--animatedBackground--3iESX",container:"suggested-articles-module--container--3ooCd",innerContainer:"suggested-articles-module--innerContainer--Awoah",title:"suggested-articles-module--title--3Dquo",bannerContainer:"suggested-articles-module--bannerContainer--1yfNN",bannerBg:"suggested-articles-module--bannerBg--1hAl5",nextArtContainer:"suggested-articles-module--nextArtContainer--1EGvR",shadow:"suggested-articles-module--shadow--2Ftqp",imageContainer:"suggested-articles-module--imageContainer--1kQtb",more:"suggested-articles-module--more--3fZ0F",iconArrowRect:"suggested-articles-module--iconArrowRect--g-VTo",iconArrowHead:"suggested-articles-module--iconArrowHead--1YCxR",artTitle:"suggested-articles-module--artTitle--f32ek",innerImage:"suggested-articles-module--innerImage--2IAvo",image:"suggested-articles-module--image--3uOhp",textContainer:"suggested-articles-module--textContainer--1H-T7",innerText:"suggested-articles-module--innerText--2N1dZ",tags:"suggested-articles-module--tags--3jWnC",iconArrow:"suggested-articles-module--iconArrow--2i9O0"}}}]);
//# sourceMappingURL=component---src-templates-article-js-c500dbc7150ad641f437.js.map
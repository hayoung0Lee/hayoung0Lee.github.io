_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"2VHb":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n("rePB"),c=n("q1tI");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={cursteps:[]},s=function(e,t){switch(t.type){case"setSteps":return a(a({},e),{},{cursteps:t.payload});case"resetSteps":return a(a({},e),{},{cursteps:[]});default:return e}},u=Object(c.createContext)(null)},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8xiB":function(e,t,n){e.exports={layout:"layout_layout__172XM",main:"layout_main__cDeiH",tutorialMain:"layout_tutorialMain__t4UO3",footer:"layout_footer__1yDE1"}},Ea3V:function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},"bDs+":function(e,t,n){e.exports={link:"link_link__1FJ-q",active:"link_active__wRSXS"}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),p=f.href,d=f.as,b=e.children,j=e.replace,h=e.shallow,O=e.scroll,v=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var y=o.Children.only(b),m=y&&"object"===typeof y&&y.ref,_=(0,s.useIntersection)({rootMargin:"200px"}),g=r(_,2),x=g[0],w=g[1],P=o.default.useCallback((function(e){x(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,x]);(0,o.useEffect)((function(){var e=w&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof v?v:n&&n.locale,c=u[p+"%"+d+(r?"%"+r:"")];e&&!c&&l(n,p,d,{locale:r})}),[d,p,w,v,t,n]);var E={ref:P,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}))}(e,n,p,d,j,h,O,v)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof v?v:n&&n.locale,k=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,N,n&&n.locales,n&&n.domainLocales);E.href=k||(0,a.addBasePath)((0,a.addLocale)(d,N,n&&n.defaultLocale))}return o.default.cloneElement(y,E)};t.default=f},hUgY:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),c=n("nKUr"),o=(n("Ea3V"),n("q1tI")),a=n("8xiB"),i=n.n(a),s=n("uEY5"),u=n.n(s),l=n("YFqc"),f=n.n(l),p=n("bDs+"),d=n.n(p),b=n("20a2"),j=function(e){var t=e.href,n=e.route,r=Object(b.useRouter)(),o=/^\/[\w,]+/,a=t===(r.asPath.match(o)?r.asPath.match(o)[0]:"/");return Object(c.jsx)(f.a,{href:t,children:Object(c.jsx)("a",{className:"".concat(d.a.link," text-center ").concat(a?d.a.active:""),children:n})})},h=function(){return Object(c.jsxs)("header",{className:u.a.header,children:[Object(c.jsx)("h1",{className:"".concat(u.a.logo," text-center"),children:Object(c.jsx)(f.a,{href:"/",children:"Hayoung"})}),Object(c.jsx)("nav",{className:u.a.nav,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(j,{href:"/",route:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(j,{href:"/tutorials",route:"Tutorials"})}),Object(c.jsx)("li",{children:Object(c.jsx)(j,{href:"/leetcode",route:"Leetcode"})})]})})]})},O=n("2VHb"),v=function(e){var t=e.children,n=Object(o.useContext)(O.a)[0].cursteps;return console.log(n),Object(c.jsxs)("div",{className:i.a.layout,children:[Object(c.jsx)(h,{}),(null===n||void 0===n?void 0:n.length)>0?Object(c.jsxs)("main",{className:"".concat(i.a.main," ").concat(i.a.tutorialMain),children:[Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:null===n||void 0===n?void 0:n.slice(1).map((function(e,t){return Object(c.jsx)("li",{className:"listStyle",children:Object(c.jsx)(f.a,{href:"/tutorials/".concat(n[0],"/").concat(e.slice(0,-3)),children:Object(c.jsx)("a",{className:"linkStyle",children:e})})},t)}))})}),Object(c.jsx)("section",{children:t})]}):Object(c.jsx)("main",{className:i.a.main,children:t}),Object(c.jsx)("footer",{className:i.a.footer,children:"footer"})]})};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(o.useReducer)(O.c,O.b),a=r[0],i=r[1],s=Object(b.useRouter)();return Object(o.useEffect)((function(){var e=function(e,t){t.shallow;e.match(/^\/tutorials\/.+/)||i({type:"resetSteps"})};return s.events.on("routeChangeComplete",e),function(){s.events.off("routeChangeComplete",e)}}),[]),Object(c.jsx)(O.a.Provider,{value:[a,i],children:Object(c.jsx)(v,{children:Object(c.jsx)(t,m({},n))})})}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},uEY5:function(e,t,n){e.exports={header:"header_header__2VGIb",logo:"header_logo__2HTnu",nav:"header_nav__3Y0Z6"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[d,f]};var c=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[[0,0,1,2]]]);
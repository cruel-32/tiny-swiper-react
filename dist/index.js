!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.tsr=r(require("react")):e.tsr=r(e.React)}(window,(function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(r,t){r.exports=e},function(e,r,t){(e.exports=t(2)(!1)).push([e.i,".mrswiper--visible {\n  overflow: hidden;\n  position: relative; }\n\n.mrswiper__wrapper--display-flex {\n  display: flex;\n  flex-basis: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10; }\n\n.mrswiper__wrapper--moving {\n  transition: left 0.2s ease; }\n\n.mrswiper__wrapper--align-top {\n  align-items: flex-start; }\n\n.mrswiper__wrapper--align-center {\n  align-items: center; }\n\n.mrswiper__wrapper--align-bot {\n  align-items: flex-end; }\n\n.mrswiper__item {\n  width: 100%; }\n\n.mrswiper__btn {\n  position: absolute;\n  top: 50%;\n  z-index: 10; }\n  .mrswiper__btn--dir-left {\n    left: 10px; }\n  .mrswiper__btn--dir-right {\n    right: 10px; }\n\n.mrswiper__indicator-wrap {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  z-index: 11; }\n  .mrswiper__indicator-wrap--pos-top {\n    top: 0.75rem; }\n  .mrswiper__indicator-wrap--pos-bot {\n    bottom: 0.75rem; }\n\n.mrswiper__indicator {\n  overflow: hidden;\n  width: 0.75rem;\n  height: 0.75rem;\n  background-color: gray;\n  border: none;\n  border-radius: 0.75rem;\n  margin: 0 0.25rem;\n  line-height: 5rem; }\n  .mrswiper__indicator--active {\n    background-color: black; }\n\n.mrswiper__director {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  background: none;\n  border: none;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 11; }\n  .mrswiper__director--dir-left {\n    left: -0.5rem;\n    border-top: 0.75rem solid transparent;\n    border-bottom: 0.75rem solid transparent;\n    border-right: 0.75rem solid gray;\n    border-left: 0.75rem solid transparent; }\n  .mrswiper__director--dir-right {\n    right: -0.5rem;\n    border-top: 0.75rem solid transparent;\n    border-bottom: 0.75rem solid transparent;\n    border-left: 0.75rem solid gray;\n    border-right: 0.75rem solid transparent; }\n",""])},function(e,r,t){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=function(e,r){var t=e[1]||"",n=e[3];if(!n)return t;if(r&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[t].concat(o).concat([i]).join("\n")}var a;return[t].join("\n")}(r,e);return r[2]?"@media "+r[2]+"{"+t+"}":t})).join("")},r.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),r.push(a))}},r}},function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return t}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.r(r);var i=t(0),o=t.n(i);t(1);t.d(r,"SwiperItem",(function(){return s})),t.d(r,"MiniReactSwiper",(function(){return l}));var a="/Users/cruel32/Desktop/develop/tiny-swiper-react/src/tiny-swiper-react/index.js";const s=e=>{const r=e.children,t=e.width;return o.a.createElement("div",{className:"mrswiper__item",style:{width:t},__source:{fileName:a,lineNumber:8},__self:void 0},r)},l=e=>{const r=e.items,t=e.before,l=e.after,c=e.children,u=e.useIndicator,p=e.indicatorClass,d=e.useDirector,f=e.directorLeftClass,m=e.directorRightClass,_=Object(i.useRef)(null),b=Object(i.useRef)(null),w=c||r,h=n(Object(i.useState)(0),2),g=h[0],v=h[1],y=n(Object(i.useState)(0),2),x=y[0],N=y[1],j=n(Object(i.useState)(0),2),O=j[0],S=j[1],E=n(Object(i.useState)(0),2),k=E[0],R=E[1],T=n(Object(i.useState)(!1),2),M=T[0],C=T[1],P=n(Object(i.useState)(0),2),z=P[0],I=P[1];Object(i.useEffect)(()=>{v(_.current?_.current.offsetWidth:0),N(b.current?b.current.offsetHeight:0),R(b.current?-O*g:0)},[w,O,g,z]);const U=()=>{C(!0),t&&t({index:O-1})},A=()=>{O<0?S(w.length-1):O>=w.length&&S(0)},L=e=>{const r=O%w.length,t=e%w.length;M||r===t||(U(),S(e))},X=()=>{I(0),U()};return o.a.createElement("div",{className:"mrswiper mrswiper--visible",ref:_,style:{height:x+"px"},__source:{fileName:a,lineNumber:98},__self:void 0},o.a.createElement("div",{className:"mrswiper__wrapper mrswiper__wrapper--display-flex mrswiper__wrapper--align-top ".concat(M?"mrswiper__wrapper--moving":""," "),style:{left:k-g+"px",width:g*(w.length+2)},ref:b,onTransitionEnd:e=>{C(!1),A(),l&&l({index:O-1})},onTouchStart:e=>{(e=>I(e.touches[0].clientX))(e)},onTouchMove:e=>{(e=>{const r=e.changedTouches[0].clientX-z;r&&k+r&&R(-O*g+r)})(e)},onTouchEnd:e=>{(e=>{const r=z-e.changedTouches[0].clientX;r<0&&g/3<Math.abs(r)?L(O-1):r>0&&g/3<r?L(O+1):X()})(e)},__source:{fileName:a,lineNumber:99},__self:void 0},o.a.createElement(s,{key:-1,width:g,__source:{fileName:a,lineNumber:107},__self:void 0},w[w.length-1]),w.map((e,r)=>o.a.createElement(s,{key:r,width:g,__source:{fileName:a,lineNumber:110},__self:void 0},e)),o.a.createElement(s,{key:w.length,width:g,__source:{fileName:a,lineNumber:113},__self:void 0},w[0])),u&&o.a.createElement("div",{className:"mrswiper__indicator-wrap mrswiper__indicator-wrap--pos-bot "+p,__source:{fileName:a,lineNumber:118},__self:void 0},w.map((e,r)=>o.a.createElement("button",{className:"mrswiper__indicator "+(r===(O>=w.length?0:O<0?w.length-1:O)?"mrswiper__indicator--active":""),onClick:()=>{L(r)},key:r,__source:{fileName:a,lineNumber:122},__self:void 0},r))),d&&o.a.createElement(i.Fragment,{__source:{fileName:a,lineNumber:135},__self:void 0},o.a.createElement("button",{onClick:()=>{L(O-1)},className:"mrswiper__director mrswiper__director--dir-left "+f,__source:{fileName:a,lineNumber:136},__self:void 0},"left"),o.a.createElement("button",{onClick:()=>{L(O+1)},className:"mrswiper__director mrswiper__director--dir-right "+m,__source:{fileName:a,lineNumber:137},__self:void 0},"right")))}}])}));
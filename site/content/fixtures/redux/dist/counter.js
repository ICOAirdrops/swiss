!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function t(){}var n={},r=[],o=[];function i(e,t){for(var n in t)e[n]=t[n];return e}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];function s(e){!e._dirty&&(e._dirty=!0)&&1==c.push(e)&&u(l)}function l(){var e,t=c;for(c=[];e=t.pop();)e._dirty&&T(e)}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===a.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,u):e.removeEventListener(t,h,u),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var c=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function h(e){return this._listeners[e.type](e)}var b=[],m=0,y=!1,_=!1;function g(){for(var e;e=b.pop();)e.componentDidMount&&e.componentDidMount()}function w(e,t,n,r,o,i){m++||(y=null!=o&&void 0!==o.ownerSVGElement,_=null!=e&&!("__preactattr_"in e));var u=function e(t,n,r,o,i){var u=t,a=y;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(u=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(u,t),C(t,!0))),u.__preactattr_=!0,u;var c,s,l=n.nodeName;if("function"==typeof l)return function(e,t,n,r){for(var o=e&&e._component,i=o,u=e,a=o&&e._componentConstructor===t.nodeName,c=a,s=p(t);o&&!c&&(o=o._parentComponent);)c=o.constructor===t.nodeName;return o&&c&&(!r||o._component)?(O(o,s,3,n,r),e=o.base):(i&&!a&&(j(i),e=u=null),o=x(t.nodeName,s,n),e&&!o.nextBase&&(o.nextBase=e,u=null),O(o,s,1,n,r),e=o.base,u&&e!==u&&(u._component=null,C(u,!1))),e}(t,n,r,o);if(y="svg"===l||"foreignObject"!==l&&y,l=String(l),(!t||!f(t,l))&&(c=l,(s=y?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,u=s,t)){for(;t.firstChild;)u.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(u,t),C(t,!0)}var h=u.firstChild,b=u.__preactattr_,m=n.children;if(null==b){b=u.__preactattr_={};for(var g=u.attributes,w=g.length;w--;)b[g[w].name]=g[w].value}return!_&&m&&1===m.length&&"string"==typeof m[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=m[0]&&(h.nodeValue=m[0]):(m&&m.length||null!=h)&&function(t,n,r,o,i){var u,a,c,s,l,p,v,h,b=t.childNodes,m=[],y={},_=0,g=0,w=b.length,E=0,k=n?n.length:0;if(0!==w)for(var x=0;x<w;x++){var N=b[x],O=N.__preactattr_,T=k&&O?N._component?N._component.__key:O.key:null;null!=T?(_++,y[T]=N):(O||(void 0!==N.splitText?!i||N.nodeValue.trim():i))&&(m[E++]=N)}if(0!==k)for(var x=0;x<k;x++){l=null;var T=(s=n[x]).key;if(null!=T)_&&void 0!==y[T]&&(l=y[T],y[T]=void 0,_--);else if(!l&&g<E)for(u=g;u<E;u++)if(void 0!==m[u]&&(p=a=m[u],h=i,"string"==typeof(v=s)||"number"==typeof v?void 0!==p.splitText:"string"==typeof v.nodeName?!p._componentConstructor&&f(p,v.nodeName):h||p._componentConstructor===v.nodeName)){l=a,m[u]=void 0,u===E-1&&E--,u===g&&g++;break}l=e(l,s,r,o),c=b[x],l&&l!==t&&l!==c&&(null==c?t.appendChild(l):l===c.nextSibling?d(c):t.insertBefore(l,c))}if(_)for(var x in y)void 0!==y[x]&&C(y[x],!1);for(;g<=E;)void 0!==(l=m[E--])&&C(l,!1)}(u,m,r,o,_||null!=b.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=void 0,y);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],y)}(u,n.attributes,b),y=a,u}(e,t,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--m||(_=!1,i||g()),u}function C(e,t){var n=e._component;n?j(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),E(e))}function E(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}var k={};function x(e,t,n){var r,o=k[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),P.call(r,t,n)):((r=new P(t,n)).constructor=e,r.render=N),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function N(e,t,n){return this.constructor(e,n)}function O(e,t,r,o,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==r&&(1!==r&&!1===n.syncComponentUpdates&&e.base?s(e):T(e,1,i)),e.__ref&&e.__ref(e))}function T(e,t,n,r){if(!e._disable){var o,u,a,c=e.props,s=e.state,l=e.context,f=e.prevProps||c,d=e.prevState||s,v=e.prevContext||l,h=e.base,y=e.nextBase,_=h||y,E=e._component,k=!1;if(h&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,s,l)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(c,s,l),e.props=c,e.state=s,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){o=e.render(c,s,l),e.getChildContext&&(l=i(i({},l),e.getChildContext()));var N,P,S=o&&o.nodeName;if("function"==typeof S){var A=p(o);(u=E)&&u.constructor===S&&A.key==u.__key?O(u,A,1,l,!1):(N=u,e._component=u=x(S,A,l),u.nextBase=u.nextBase||y,u._parentComponent=e,O(u,A,0,l,!1),T(u,1,n,!0)),P=u.base}else a=_,(N=E)&&(a=e._component=null),(_||1===t)&&(a&&(a._component=null),P=w(a,o,l,n||!h,_&&_.parentNode,!0));if(_&&P!==_&&u!==E){var R=_.parentNode;R&&P!==R&&(R.replaceChild(P,_),N||(_._component=null,C(_,!1)))}if(N&&j(N),e.base=P,P&&!r){for(var U=e,L=e;L=L._parentComponent;)(U=L).base=P;P._component=U,P._componentConstructor=U.constructor}}if(!h||n?b.unshift(e):k||e.componentDidUpdate&&e.componentDidUpdate(f,d,v),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);m||r||g()}}function j(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?j(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),function(e){var t=e.constructor.name;(k[t]||(k[t]=[])).push(e)}(e),E(t)),e.__ref&&e.__ref(null)}function P(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}i(P.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),T(this,2)},render:function(){}});var S={},A=JSON.stringify;var R=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+","+e[n];return(S[t]||(S[t]=function(e){for(var t,n,r,o,i,u=0,a="return ",c="",s="",l=0,f="",p="",d="",v=0,h=function e(){r?9===u?(l++&&(a+=","),a+="h("+(s||A(c)),u=0):13===u||0===u&&"..."===c?(0===u?(d||(d=")",f=f?"Object.assign("+f:"Object.assign({}"),f+=p+","+s,p=""):o&&(f+=f?","+(p?"":"{"):"{",p="}",f+=A(o)+":",f+=s||(i||c)&&A(c)||"true",o=""),i=!1):0===u&&(u=13,o=c,c=s="",e(),u=0):(s||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))&&(l++&&(a+=","),a+=s||A(c)),c=s=""},b=0;b<e.length;b++){b>0&&(r||h(),s="$["+b+"]",h());for(var m=0;m<e[b].length;m++){if(n=e[b].charCodeAt(m),r){if(39===n||34===n){if(v===n){v=0;continue}if(0===v){v=n;continue}}if(0===v)switch(n){case 62:h(),47!==u&&(a+=f?","+f+p+d:",null"),t&&(a+=")"),r=0,f="",u=1;continue;case 61:u=13,i=!0,o=c,c="";continue;case 47:t||(t=!0,9!==u||c.trim()||(c=s="",u=47));continue;case 9:case 10:case 13:case 32:h(),u=0;continue}}else if(60===n){h(),r=1,d=p=f="",t=i=!1,u=9;continue}c+=e[b].charAt(m)}}return h(),Function("h","$",a)}(e)))(this,arguments)}.bind(function(e,n){var i,u,a,c,s=arguments,l=o;for(c=arguments.length;c-- >2;)r.push(s[c]);for(n&&null!=n.children&&(r.length||r.push(n.children),delete n.children);r.length;)if((u=r.pop())&&void 0!==u.pop)for(c=u.length;c--;)r.push(u[c]);else"boolean"==typeof u&&(u=null),(a="function"!=typeof e)&&(null==u?u="":"number"==typeof u?u=String(u):"string"!=typeof u&&(a=!1)),a&&i?l[l.length-1]+=u:l===o?l=[u]:l.push(u),i=a;var f=new t;return f.nodeName=e,f.children=l,f.attributes=null==n?void 0:n,f.key=null==n?void 0:n.key,f});function U(e,t){e.innerHTML=t}var L=Array.isArray;function M(e){return"function"==typeof e}function I(e){return void 0===e}function B(e,t){void 0===t&&(t=null),e=e||"s";var n=t?e+"-"+t:e;return function(e){return function(e){return e&&/.-./.test(e)}(e)&&!self.customElements.get(e)}(n)?n:B(n,function(e){void 0===e&&(e="");var t=++D;return""+e+t}())}function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.filter(Boolean).reduceRight(function(e,t){return t(e)},e)}}var W=M(self.CustomEvent)&&self.CustomEvent||function(e,t){void 0===t&&(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t),n};var D=0;var H,V=(H={enumerable:!1,configurable:!0,writeable:!1},function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(function(n){for(var r in n){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,e(o,H))}}),t}),q="connected",z="dis"+q;var F=null,Y=[],K=[],G=function e(t){return typeof t==typeof e?t():t},J=function(e){return function(t){var n={i:0,stack:[]};t[e]=n,t.before.push(function(){n.i=0})}},Q=0,X=function(){return"_$"+Q++},Z=function(e){var t=F,n=t[e],r=t.update,o=n.i,i=n.stack;return n.i++,{i:o,stack:i,update:r,unknown:o===i.length}},ee=function(e){var t=ne(n);return te(K,t),n.reset=function(){for(var e in te(t.reset,t),t)/^_\$/.test(e)&&t[e].stack.splice(0)},n;function n(){var n=F;F=t;var r=t._,o=t.before,i=t.after,u=t.external;try{var a;do{r.$=r._=!1,te(o,t),a=e.apply(r.c=this,r.a=arguments),te(i,t),u.length&&te(u.splice(0),a)}while(r._);return a}finally{r.$=!0,F=n}}},te=function(e,t){for(var n=e.length,r=0;r<n;)e[r++](t)},ne=function(e){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?e.apply(t.c,t.a):t._=!0}}};function re(e,t){return e!==this[t]}var oe,ie,ue=X();try{oe=cancelAnimationFrame,ie=requestAnimationFrame}catch(e){oe=clearTimeout,ie=setTimeout}var ae=function(e,t,n,r,o,i,u){var a={always:e,cb:o,check:t,clean:null,inputs:n,raf:r,t:0,update:t,fn:function(){ce(i[u],a.cb())}};return a},ce=function(e,t){e.t=0,e.clean=t};K.push(function(e){var t=[],n={i:0,stack:t},r=function(e,t,n,r){n&&r?oe(r):t&&t(),ce(e,null)};e[ue]=n,e.before.push(function(){n.i=0}),e.reset.push(function(){n.i=0;for(var e=t.length,o=0;o<e;o++){var i=t[o],u=i.check,a=i.clean,c=i.raf,s=i.t;u&&r(i,a,c,s)}}),e.after.push(function(){for(var e=t.length,n=0;n<e;n++){var o=t[n],i=o.check,u=o.clean,a=o.fn,c=o.raf,s=o.t,l=o.update;i&&l&&(o.update=!1,r(o,u,c,s),c?o.t=ie(a):a())}})});var se=function e(t){return function(n,r){var o,i,u=Z(ue),a=u.i,c=u.stack,s=u.unknown,l=r||Y;if(s){var f=l===Y,p=f||!t||"function"!=typeof l;f||!t||"function"!=typeof l?c.push(ae(f,p,l,t,n,c,a)):(F.external.push(function(e){return r(n,e)}),c.push(ae(f,f,Y,t,e,c,a)))}else{var d=c[a],v=d.check,h=d.always,b=d.inputs;v&&(h||(i=l,(o=b).length!==i.length||o.some(re,i)))&&(d.cb=n,d.inputs=l,d.update=!0)}}}(!0),le=X();K.push(J(le));var fe=function(e){var t=Z(le),n=t.i,r=t.stack;if(t.unknown){var o={current:null};r.push(o),o.current=G(e)}return r[n]},pe=X();K.push(J(pe));var de=X();K.push(J(de));var ve=function(e){return function(e,t){var n=Z(de),r=n.i,o=n.stack,i=n.unknown,u=n.update;if(i){var a=[null,function(n){t=e(t,n),a[0]=t,u()}];o.push(a),a[0]=G(t)}return o[r]}(function(e,t){return t},e)},he=new WeakMap,be=X();K.push(J(be));var me=function(e){var t={value:e,provide:_e};return he.set(t,[]),t},ye=function(e){var t=Z(be),n=t.i,r=t.stack,o=t.unknown,i=t.update;return o&&(he.get(e).push(i),r.push(e)),r[n].value};function _e(e){if(this.value!==e){this.value=e;for(var t=he.get(this),n=t.length,r=0;r<n;r++)t[r]()}}var ge={current:null};function we(e){return function(t){var n=e(t),r=t.component,o=ee(function(){ge.current=n;var e=r.call(n,n);return n.render(e)});return n.requestUpdate=o,n}}function Ce(e){return function(t){var n,r=e(t),o=t.observedAttributes;return n=Object.getPrototypeOf(r),o.forEach(function(e){e in n||Object.defineProperty(n,function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}(e),{configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),r}}var Ee="connectedCallback",ke="dis"+Ee,xe="attributeChangedCallback",Ne="adoptedCallback",Oe="observedAttributes";function Te(e){var t={handleEvent:je,onconnected:Pe,ondisconnected:Se,$:e,_:null};ge.current.addEventListener(q,t,!1),ge.current.addEventListener(z,t,!1)}function je(e){this["on"+e.type]()}function Pe(){Se.call(this),this._=this.$()}function Se(){var e=this._;this._=null,e&&e()}function Ae(){return ge.current}var Re,Ue=Object.prototype.hasOwnProperty;function Le(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}var Me=new WeakMap;function Ie(e){var t=Ae(),n=ye(Me.get(t)||Re),r=n.getState,o=ve(e(r())),i=o[0],u=o[1],a=fe(i);return function(e,t){void 0===t&&(t=[]);var n=[e];t&&n.push(t.length?t:Te),se.apply(null,n)}(function(){n.subscribe(function(){var t=e(r());(function(e,t){if(Le(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Ue.call(t,n[o])||!Le(e[n[o]],t[n[o]]))return!1;return!0})(t,a.current)||(a.current=t,u(t))})}),i}function Be(e){var t=Ae(),n=ye(Me.get(t)||Re).dispatch;return function(){return n(e.apply(void 0,arguments))}}var $e=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),We=function(){return Math.random().toString(36).substring(7).split("").join(".")},De={INIT:"@@redux/INIT"+We(),REPLACE:"@@redux/REPLACE"+We(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+We()}};function He(){var e,t,n=(e=['\n    <div class="box level">\n      <div class="level-item">\n        <button class="button" onclick="','">-</button>\n      </div>\n      <div class="level-item">\n        <h1 class="title">','</h1>\n      </div>\n      <div class="level-item">\n        <button class="button" onclick="','">+</button>\n      </div>\n    </div>\n  '],t||(t=e.slice(0)),e.raw=t,e);return He=function(){return n},n}var Ve,qe,ze={decrement:function(){return{type:"DECREMENT"}},increment:function(){return{type:"INCREMENT"}}};Ve=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,u=n,a=[],c=a,s=!1;function l(){c===a&&(c=a.slice())}function f(){if(s)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function p(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(s)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return l(),c.push(e),function(){if(t){if(s)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,l();var n=c.indexOf(e);c.splice(n,1)}}}function d(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(s)throw new Error("Reducers may not dispatch actions.");try{s=!0,u=i(u,e)}finally{s=!1}for(var t=a=c,n=0;n<t.length;n++)(0,t[n])();return e}return d({type:De.INIT}),(o={dispatch:d,subscribe:p,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,d({type:De.REPLACE})}})[$e]=function(){var e,t=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(f())}return n(),{unsubscribe:t(n)}}})[$e]=function(){return this},e},o}(function(e,t){switch(void 0===e&&(e=0),t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}),Re=Re||me(Ve),function(e,t,n,r){var o;if(M(e)&&(r=n,n=t,t=e,e=void 0),!M(n)&&I(r)&&(r=n,n=void 0),L(r)&&((o={})[Oe]=r,r=o),e=(r=r||{}).name=B(e||r.name),!I(n)&&!M(n))throw new Error("Expected the enhancer to be a function.");n=$(n,we,Ce);var i,u,a=function(e,t){function n(){var r=this;return this instanceof n?t.call(this,function(){return"undefined"!=typeof Reflect?Reflect.construct(e,[],r.constructor):e.call(r)}):new n}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n}((i=r&&r.extends)?document.createElement(i).constructor:HTMLElement,function(e){var o=V({},r,{component:t});return function(e,t){return function n(r,o){if(!I(o))return o(n)(r);var i,u=e();return V(u,{render:function(e){return u.renderer(u.renderRoot,e,i),i=e,e},renderer:U,connectedCallback:function(){u.requestUpdate(),u.dispatchEvent(new W(q))},disconnectedCallback:function(){u.dispatchEvent(new W(z))},attributeChangedCallback:function(e,t,n){u.shouldUpdate(t,n)&&u.requestUpdate()},requestUpdate:function(){var e=t.call(u,u);return u.render(e)},shouldUpdate:function(e,t){return e!==t},get renderRoot(){return u.shadowRoot||u._shadowRoot||u}})}}(e,t)(o,n)});u=a.prototype,[Ee,ke,xe,Ne].forEach(function(e){u[e]=function(){this.hasOwnProperty(e)&&this[e].apply(this,arguments)}});var c=r[Oe]=r[Oe]||[];a[Oe]=c,function(e,t,n){e&&self.customElements.define(e,t,n)}(e,a,r)}("s-counter",function(){var e=Ie(function(e){return e}),t=Be(ze.increment),n=Be(ze.decrement);return R(He(),function(){return n()},e,function(){return t()})},$((void 0===(qe=function(e,t){!function(e,t,n){w(n,e,{},!1,t,!1)}(e,t,t.firstElementChild)})&&(qe=U),function(e){return function(){var t=e.apply(void 0,arguments),n=[function(e,t,n){return qe(e,t,n)},function(e,t,n){return qe(t,e,n)},function(e,t,n){return qe(n,t,e)},function(e,t,n){return qe(e,function(){return t},n)}];return t.renderer=function e(r,o,i,u){var a;void 0===u&&(u=0),t.renderer=n[u];try{a=t.renderer(r,o,i)}catch(t){if((u+=1)<n.length)return e(r,o,i,u)}return a||""},t}})))});
//# sourceMappingURL=counter.js.map
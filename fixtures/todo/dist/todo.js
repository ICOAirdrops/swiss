!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var t=function(){var e="object"!=typeof document,t=function(r){if(!("raw"in r)||r.propertyIsEnumerable("raw")||!Object.isFrozen(r.raw)||/Firefox\/(\d+)/.test((document.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var o={};t=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)}}else e=!0;return n(r)};return n;function n(n){return e?n:t(n)}}();var n=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,i=r.length;o<i;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),r=Array.isArray,o=n.prototype.nodeType,i=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),i=o("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;i.innerHTML="<table>"+e+"</table>",a=i.querySelectorAll(u)}else i.innerHTML=e,a=i.childNodes;return r(n,a),n};return function(e,i){return("svg"===i?function(e){var n=o(t),i=o("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,i.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),a={};try{a.Map=Map}catch(e){a.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var i=r(o);return i&&(t.splice(e,1),n.splice(e,1)),i},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,i){return n[r(o)?e:t.push(o)-1]=i,this}};function r(n){return-1<(e=t.indexOf(n))}}}var u=a.Map,c=function(e,t,n,r,o,i){if(o-r<2)t.insertBefore(e(n[r],1),i);else{for(var a=t.ownerDocument.createDocumentFragment();r<o;)a.appendChild(e(n[r++],1));t.insertBefore(a,i)}},l=function(e,t){return e==t},f=function(e){return e},s=function(e,t,n,r,o,i,a){var u=i-o;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=o;c<n&&l<i&&a(e[c],r[l]);)c++,l++;if(l===i)return t;t=c+1}return-1},d=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},h=function(e,t,n,r,o){if(o-r<2)t.removeChild(e(n[r],-1));else{var i=t.ownerDocument.createRange();i.setStartBefore(e(n[r],-1)),i.setEndAfter(e(n[o-1],-1)),i.deleteContents()}},p=function(e,t,n){for(var r=1,o=t;r<o;){var i=(r+o)/2>>>0;n<e[i]?o=i:r=i+1}return r},v=function(e,t,n,r,o,i,a,l,f,s,d,v,g){!function(e,t,n,r,o,i,a,l,f){for(var s=new u,d=e.length,p=a,v=0;v<d;)switch(e[v++]){case 0:o++,p++;break;case 1:s.set(r[o],1),c(t,n,r,o++,o,p<l?t(i[p],0):f);break;case-1:p++}for(v=0;v<d;)switch(e[v++]){case 0:a++;break;case-1:s.has(i[a])?a++:h(t,n,i,a++,a)}}(function(e,t,n,r,o,i,a){var u,c,l,f,s,d,h,p=n+i,v=[];e:for(u=0;u<=p;u++){if(u>50)return null;for(h=u-1,s=u?v[u-1]:[0,0],d=v[u]=[],c=-u;c<=u;c+=2){for(l=(f=c===-u||c!==u&&s[h+c-1]<s[h+c+1]?s[h+c+1]:s[h+c-1]+1)-c;f<i&&l<n&&a(r[o+f],e[t+l]);)f++,l++;if(f===i&&l===n)break e;d[u+c]=f}}var g=Array(u/2+p/2),m=g.length-1;for(u=v.length-1;u>=0;u--){for(;f>0&&l>0&&a(r[o+f-1],e[t+l-1]);)g[m--]=0,f--,l--;if(!u)break;h=u-1,s=u?v[u-1]:[0,0],(c=f-l)==-u||c!==u&&s[h+c-1]<s[h+c+1]?(l--,g[m--]=1):(f--,g[m--]=-1)}return g}(n,r,i,a,l,s,v)||function(e,t,n,r,o,i,a,c){var l=0,f=r<c?r:c,s=Array(f++),d=Array(f);d[0]=-1;for(var h=1;h<f;h++)d[h]=a;for(var v=new u,g=i;g<a;g++)v.set(o[g],g);for(var m=t;m<n;m++){var b=v.get(e[m]);null!=b&&-1<(l=p(d,f,b))&&(d[l]=b,s[l]={newi:m,oldi:b,prev:s[l-1]})}for(l=--f,--a;d[l]>a;)--l;f=c+r-l;var w=Array(f),y=s[l];for(--n;y;){for(var N=y,x=N.newi,C=N.oldi;n>x;)w[--f]=1,--n;for(;a>C;)w[--f]=-1,--a;w[--f]=0,--n,--a,y=y.prev}for(;n>=t;)w[--f]=1,--n;for(;a>=i;)w[--f]=-1,--a;return w}(n,r,o,i,a,l,f,s),e,t,n,r,a,l,d,g)},g=function(e,t,n,r){r||(r={});for(var o=r.compare||l,i=r.node||f,a=null==r.before?null:i(r.before,0),u=t.length,p=u,g=0,m=n.length,b=0;g<p&&b<m&&o(t[g],n[b]);)g++,b++;for(;g<p&&b<m&&o(t[p-1],n[m-1]);)p--,m--;var w=g===p,y=b===m;if(w&&y)return n;if(w&&b<m)return c(i,e,n,b,m,d(i,t,g,u,a)),n;if(y&&g<p)return h(i,e,t,g,p),n;var N=p-g,x=m-b,C=-1;if(N<x){if(-1<(C=s(n,b,m,t,g,p,o)))return c(i,e,n,b,C,i(t[g],0)),c(i,e,n,C+N,m,d(i,t,p,u,a)),n}else if(x<N&&-1<(C=s(t,g,p,n,b,m,o)))return h(i,e,t,g,C),h(i,e,t,C+x,p),n;return N<2||x<2?(c(i,e,n,b,m,i(t[g],0)),h(i,e,t,g,p),n):N===x&&function(e,t,n,r,o,i){for(;r<o&&i(n[r],e[t-1]);)r++,t--;return 0===t}(n,m,t,g,p,o)?(c(i,e,n,b,m,d(i,t,p,u,a)),n):(v(i,e,n,b,m,x,t,g,p,N,u,o,a),n)},m={};try{m.WeakMap=WeakMap}catch(e){m.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=i.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(a,this)}function a(e){this.set(e[0],e[1])}}(Math.random(),Object)}var b,w=m.WeakMap,y=function(e,t,n,r,o){var i="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(i?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],i=o.length,a=0;n&&a<i;a++)r.appendChild(e(o[a],n));return r}:i?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),N="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},x="-"+Math.random().toFixed(6)+"%";"content"in(b=document.createElement("template"))&&(b.innerHTML='<p tabindex="'+x+'"></p>',b.content.childNodes[0].getAttribute("tabindex")==x)||(x="_dt: "+x.slice(1,-1)+";");var C="\x3c!--"+x+"--\x3e",k=8,E=1,A=3,T=/^(?:style|textarea)$/i,_=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var M=" \\f\\n\\r\\t",j="[ "+M+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",O="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",$="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",L=new RegExp(O+j+$+"+)([ "+M+"]*/?>)","g"),R=new RegExp(O+j+$+"*)([ "+M+"]*/>)","g"),S=new RegExp("("+j+"\\s*=\\s*)(['\"]?)"+C+"\\2","gi");function D(e,t,n,r){return"<"+t+n.replace(S,F)+r}function F(e,t,n){return t+(n||'"')+x+(n||'"')}function H(e,t,n){return _.test(t)?e:"<"+t+n+"></"+t+">"}function P(e,t,n,r){return{name:r,node:t,path:n,type:e}}function W(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function z(e,t,n,r){for(var o=new u,i=e.attributes,a=[],c=a.slice.call(i,0),l=c.length,f=0;f<l;){var s=c[f++];if(s.value===x){var d=s.name;if(!o.has(d)){var h=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),p=i[h]||i[h.toLowerCase()];o.set(d,p),t.push(P("attr",p,r,h))}a.push(s)}}for(l=a.length,f=0;f<l;){var v=a[f++];/^id$/i.test(v.name)?e.removeAttribute(v.name):e.removeAttributeNode(v)}var g=e.nodeName;if(/^script$/i.test(g)){var m=document.createElement(g);for(l=i.length,f=0;f<l;)m.setAttributeNode(i[f++].cloneNode(!0));m.textContent=e.textContent,e.parentNode.replaceChild(m,e)}}var B=new w,V=new w;function Z(e,t){var n=function(e){return e.join(C).replace(R,H).replace(L,D)}(t),r=e.transform;r&&(n=r(n));var o=i(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===N.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var i=t.childNodes,a=i.length,u=0;u<a;){var c=i[u];switch(c.nodeType){case E:var l=o.concat(u);z(c,n,r,l),e(c,n,r,l);break;case k:c.textContent===x&&(r.shift(),n.push(T.test(t.nodeName)?P("text",t,o):P("any",c,o.concat(u))));break;case A:T.test(t.nodeName)&&N.call(c.textContent)===C&&(r.shift(),n.push(P("text",t,o)))}u++}}(o,a,t.slice(0),[]);var u={content:o,updates:function(n){for(var r=[],o=a.length,i=0;i<o;){var u=a[i++],c=W(n,u.path);switch(u.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,u.name,u.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,i=e-1,a=1;if(o!==i)throw new Error(i+" values instead of "+o+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return B.set(t,u),u}function G(e){return function(t){var n=V.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=B.get(t)||Z(e,t),r=y.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return V.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var U=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var i,a;return function(u){var c,l,f,s;switch(typeof u){case"object":if(u){if("object"===i){if(!o&&a!==u)for(l in a)l in u||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,u)f="number"!=typeof(s=u[l])||e.test(l)?s:s+"px",!o&&/^--/.test(l)?c.setProperty(l,f):c[l]=f;i="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(a=c):a=u;break}default:a!=u&&(i="string",a=u,o?r.value=u||"":r.cssText=u||"")}}}}(),q=function(e,t){return e.nodeType===o?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},I=/^(?:form|list)$/i,J=[].slice,K=function(e,t){return e.ownerDocument.createTextNode(t)};function Q(e){return this.type=e,G(this)}function X(e){return e(this)}Q.prototype={attribute:function(e,t,n){var r="ownerSVGElement"in e;switch(!0){case"on"===t.slice(0,2):return function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t);case"style"===t:return U(e,n,r);case"ref"===t:return function(e){return function(t){t.current=e}}(e);case"data"===t:case"props"===t:case!r&&t in e&&!I.test(t):return function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(e[t]=r,null==r&&e.removeAttribute(t)))}}(e,t);default:return function(e,t){var n,r=!1;return function(o){n!==o&&(n=o,t.value!==o&&(null==o?(r&&(r=!1,e.removeAttributeNode(t)),t.value=o):(t.value=o,r||(r=!0,e.setAttributeNode(t)))))}}(e,n.cloneNode(!0))}},any:function(e,t){var n,o={node:q,before:e},a="ownerSVGElement"in e?"svg":"html",u=!1;return function c(l){switch(typeof l){case"string":case"number":case"boolean":u?n!==l&&(n=l,t[0].textContent=l):(u=!0,n=l,t=g(e.parentNode,t,[K(e,l)],o));break;case"function":c(l(e));break;case"object":case"undefined":if(null==l){u=!1,t=g(e.parentNode,t,[],o);break}default:if(u=!1,n=l,r(l))if(0===l.length)t.length&&(t=g(e.parentNode,t,[],o));else switch(typeof l[0]){case"string":case"number":case"boolean":c(String(l));break;case"function":c(l.map(X,e));break;case"object":r(l[0])&&(l=l.concat.apply([],l));default:t=g(e.parentNode,t,l,o)}else!function(e){return"ELEMENT_NODE"in e}(l)?"text"in l?c(String(l.text)):"any"in l?c(l.any):"html"in l?t=g(e.parentNode,t,J.call(i([].concat(l.html).join(""),a).childNodes),o):"length"in l&&c(J.call(l)):t=g(e.parentNode,t,11===l.nodeType?J.call(l.childNodes):[l],o)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(J.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var Y=new WeakMap,ee=0,te=null;var ne=function(e){return function(){var n=function(e){for(var n=arguments.length,r=[t(e)],o=1;o<n;)r.push(arguments[o++]);return r}.apply(null,arguments);return te?{nodeType:0,valueOf:valueOf,$:e,_:n}:new Q(e).apply(null,n)}}("html");function re(e){return e.nodeType===o?e.valueOf(!0):e}function oe(e){te.template&&(te.length=0,te.stack.splice(0)),te.template=e}function ie(e){var t=e.$,r=e._,o=te,i=o.i,a=o.length,u=o.stack;if(te.i++,i<a){var c=u[i],l=c.tagger,f=c.wire;return l.apply(null,ae(r,1)),f}var s=new Q(t),d={tagger:s,wire:null};return te.length=u.push(d),d.wire=function(e){var t=e.childNodes,r=t.length;return 1===r?t[0]:r?new n(t):e}(s.apply(null,ae(r,1))),d.wire}function ae(e,t){for(var n=0,o=e.length;n<o;n++){var i=e[n];i&&(0===i.nodeType?e[n]=ie(i):r(i)&&(e[n]=ae(i,0)))}return e}var ue,ce,le=null,fe=[],se=function e(t){return typeof t==typeof e?t():t},de=function(e){return function(t){var n={i:0,stack:[]};t[e]=n,t.before.push(function(){n.i=0})}},he=0,pe=function(){return"_$"+he++},ve=function(e){var t=me(n);return ge(fe,t),n.reset=function(){for(var e in ge(t.reset,t),t)/^_\$/.test(e)&&t[e].stack.splice(0)},n;function n(){var n=le;le=t;var r=t._,o=t.before,i=t.after,a=t.external;try{var u;do{r.$=r._=!1,ge(o,t),u=e.apply(r.c=this,r.a=arguments),ge(i,t),a.length&&ge(a.splice(0),u)}while(r._);return u}finally{r.$=!0,le=n}}},ge=function(e,t){for(var n=e.length,r=0;r<n;)e[r++](t)},me=function(e){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?e.apply(t.c,t.a):t._=!0}}},be=pe();try{ue=cancelAnimationFrame,ce=requestAnimationFrame}catch(e){ue=clearTimeout,ce=setTimeout}var we=function(e,t){e.t=0,e.clean=t};fe.push(function(e){var t=[],n={i:0,stack:t};e[be]=n;var r=function(){n.i=0;for(var e=t.length,r=0;r<e;r++){var o=t[r],i=o.check,a=o.clean,u=o.raf,c=o.t;i&&(u&&c?ue(c):a&&a(),we(t[r],null))}};e.reset.push(r),e.before.push(r),e.after.push(function(){for(var e=t.length,n=0;n<e;n++){var r=t[n],o=r.fn,i=r.raf;r.update&&(t[n].update=!1,i?t[n].t=ce(o):o())}})});var ye=pe();fe.push(de(ye));var Ne=pe();fe.push(de(Ne));var xe=pe();fe.push(de(xe));var Ce=function(e,t){var n=function(e){var t=le,n=t[e],r=t.update,o=n.i,i=n.stack;return n.i++,{i:o,stack:i,update:r,unknown:o===i.length}}(xe),r=n.i,o=n.stack,i=n.unknown,a=n.update;i&&o.push([se(t),function(n){t=e(t,n),u[0]=t,a()}]);var u=o[r];return u},ke=function(e){return Ce(function(e,t){return t},e)},Ee=pe();fe.push(de(Ee));var Ae=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.filter(Boolean).reduceRight(function(e,t){return t(e)},e)}},Te=function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})};var _e,Me=(_e={enumerable:!1,configurable:!0,writeable:!1},function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(function(n){for(var r in n){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,e(o,_e))}}),t});function je(e,t){if(void 0===t&&(t={}),"CustomEvent"in window&&"function"==typeof window.CustomEvent)return new window.CustomEvent(e,t);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t),n}var Oe="connected",$e="dis"+Oe;function Le(e,t){e.innerHTML=t()}function Re(){var e,t,n=(e=['\n          <a href="#" onclick="','">\n            Check this out '," ","\n          </a>"],t||(t=e.slice(0)),e.raw=t,e);return Re=function(){return n},n}var Se,De,Fe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n,r){return"function"!=typeof n&&void 0===r&&(r=n,n=void 0),function(e,t,n){var r,o=(r=n&&n.extends)?document.createElement(r).constructor:HTMLElement;function i(){if(void 0!==t){if("function"!=typeof t)throw new Error("Expected the enhancer to be a function.");var r=t;t=void 0;var a=r(i)(n);return function(){u.set(this,ve(function(){var t=e.call(this,this);return this.render.call(this,t)}.bind(this)))}.call(a),t=r,a}return this instanceof i?"undefined"!=typeof Reflect?Reflect.construct(o,[],this.constructor):o.call(this):new i}var a=i.prototype=Object.create(o.prototype);a.constructor=i,i.observedAttributes=n&&n.observedAttributes||[],i.observedAttributes.forEach(function(e){e in a||Object.defineProperty(a,Te(e),{configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})});var u=new WeakMap,c=!1;function l(){u.get(this).call(this)}return Me(a,{connectedCallback:function(){l.call(this),this.dispatchEvent(new je(Oe))},disconnectedCallback:function(){this.dispatchEvent(new je($e))},attributeChangedCallback:function(e,t,n){this.shouldUpdate(t,n)&&l.call(this)},shouldUpdate:function(e,t){return e!==t},renderer:function(e,t){e.innerHTML=t()},render:function(e){if(c)throw new Error("Render loop.");try{c=!0,this.renderer(this.renderRoot,function(){return e})}finally{c=!1}return e},get renderRoot(){return this.shadowRoot||this._shadowRoot||this}}),i}(e,Ae.apply(void 0,[n].concat(t)),r)}}((void 0===(Se=function(e,t){var n=function(e,t){var n,r,o=te;(te=Y.get(e)||(n=e,r={i:0,length:0,stack:[],template:null},Y.set(n,r),r)).i=0;var i=t.call(this),a=null;if(i.nodeType===ee){var u=i._[0],c=ie(i),l=te,f=l.i;f<te.length&&(te.length=f,te.stack.splice(f)),te.template!==u&&(oe(u),a=re(c))}else oe(null),a=re(i);return te=o,a}.call(this,e,t);return null!==n&&function(e,t){e.textContent="",e.appendChild(t)}(e,n),e})&&(Se=Le),function(e){return function(){var t=e.apply(void 0,arguments);return t.renderer=Se,t}}));customElements.define("todo-app",Fe(function(e){var t=ke(0),n=t[0],r=t[1];return function(t){return Promise.resolve().then(function(){setTimeout(function(){t(ne(Re(),function(){return r(n+1)},n,e.value))},1e3)})}},function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Rendering while constructing your middleware is not allowed. Other middleware would not be applied to this render.")},o={render:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return r=Ae.apply(void 0,i)(n.render.bind(n)),n.render=r,n}}}(function(e){return function(t){return function(n){console.log(e,n),console.log(1,"logger");var r=t(n);return console.log(2,"logger"),r}}},function(e){var t=e.render;return function(e){return function(n){return"function"==typeof n?n(t,De):e(n)}}}),{observedAttributes:["value"]}))});

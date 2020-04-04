!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){t.exports=React},function(t,e,n){t.exports=n(11)()},,function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}},function(t,e,n){var r=n(14);t.exports=h,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",l=e&&e.delimiter||"/";null!=(n=o.exec(t));){var f=n[0],p=n[1],h=n.index;if(c+=t.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=t[a],v=n[2],m=n[3],y=n[4],g=n[5],w=n[6],b=n[7];c&&(r.push(c),c="");var x=null!=v&&null!=d&&d!==v,E="+"===w||"*"===w,P="?"===w||"*"===w,O=n[2]||l,C=y||g;r.push({name:m||i++,prefix:v||"",delimiter:O,optional:P,repeat:E,partial:x,asterisk:!!b,pattern:C?s(C):b?".*":"[^"+u(O)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",f(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!n[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";e.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(n.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(n)),e)}function h(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(h(t[o],e,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),e)}(t,e,n):function(t,e,n){return p(i(t,n),e,n)}(t,e,n)}},function(t,e,n){"use strict";t.exports=n(15)},function(t,e,n){"use strict";(function(e){var n="__global_unique_id__";t.exports=function(){return e[n]=(e[n]||0)+1}}).call(this,n(13))},function(t,e,n){"use strict";var r=n(5),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(d){var o=h(n);o&&o!==d&&t(e,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=u(e),v=u(n),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(n,y);try{s(e,y,g)}catch(t){}}}}return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(9),i=n(10);o.render(r.createElement(i.Hello,{compiler:"TypeScriptBBy",framework:"Reasdfct"}),document.getElementById("example"))},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(16);function i(){return r.createElement("h2",null,"Home")}function a(){return r.createElement("h2",null,"About")}function c(){var t=o.useRouteMatch();return r.createElement("div",null,r.createElement("h2",null,"Topics"),r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{to:t.url+"/components"},"Components")),r.createElement("li",null,r.createElement(o.Link,{to:t.url+"/props-v-state"},"Props v. State"))),r.createElement(o.Switch,null,r.createElement(o.Route,{path:t.path+"/:topicId"},r.createElement(u,null)),r.createElement(o.Route,{path:t.path},r.createElement("h3",null,"Please select a topic."))))}function u(){var t=o.useParams().topicId;return r.createElement("h3",null,"Requested topic ID: ",t)}e.Hello=function(t){return r.createElement("div",null,r.createElement("h1",null,"Hello from ",t.compiler," and ",t.framework,"!"),r.createElement(o.BrowserRouter,null,r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{to:"/"},"Home")),r.createElement("li",null,r.createElement(o.Link,{to:"/about"},"About")),r.createElement("li",null,r.createElement(o.Link,{to:"/topics"},"Topics"))),r.createElement(o.Switch,null,r.createElement(o.Route,{path:"/about"},r.createElement(a,null)),r.createElement(o.Route,{path:"/topics"},r.createElement(c,null)),r.createElement(o.Route,{path:"/"},r.createElement(i,null))))))}},function(t,e,n){"use strict";var r=n(12);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,w=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function E(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case f:case p:case a:case u:case c:case d:return t;default:switch(t=t&&t.$$typeof){case l:case h:case y:case m:case s:return t;default:return e}}case i:return e}}}function P(t){return E(t)===p}e.AsyncMode=f,e.ConcurrentMode=p,e.ContextConsumer=l,e.ContextProvider=s,e.Element=o,e.ForwardRef=h,e.Fragment=a,e.Lazy=y,e.Memo=m,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=d,e.isAsyncMode=function(t){return P(t)||E(t)===f},e.isConcurrentMode=P,e.isContextConsumer=function(t){return E(t)===l},e.isContextProvider=function(t){return E(t)===s},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return E(t)===h},e.isFragment=function(t){return E(t)===a},e.isLazy=function(t){return E(t)===y},e.isMemo=function(t){return E(t)===m},e.isPortal=function(t){return E(t)===i},e.isProfiler=function(t){return E(t)===u},e.isStrictMode=function(t){return E(t)===c},e.isSuspense=function(t){return E(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===p||t===u||t===c||t===d||t===v||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===s||t.$$typeof===l||t.$$typeof===h||t.$$typeof===w||t.$$typeof===b||t.$$typeof===x||t.$$typeof===g)},e.typeOf=E},function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.r(e),n.d(e,"MemoryRouter",(function(){return K})),n.d(e,"Prompt",(function(){return J})),n.d(e,"Redirect",(function(){return X})),n.d(e,"Route",(function(){return nt})),n.d(e,"Router",(function(){return q})),n.d(e,"StaticRouter",(function(){return ut})),n.d(e,"Switch",(function(){return st})),n.d(e,"__RouterContext",(function(){return V})),n.d(e,"generatePath",(function(){return Q})),n.d(e,"matchPath",(function(){return et})),n.d(e,"useHistory",(function(){return pt})),n.d(e,"useLocation",(function(){return ht})),n.d(e,"useParams",(function(){return dt})),n.d(e,"useRouteMatch",(function(){return vt})),n.d(e,"withRouter",(function(){return lt})),n.d(e,"BrowserRouter",(function(){return mt})),n.d(e,"HashRouter",(function(){return yt})),n.d(e,"Link",(function(){return Pt})),n.d(e,"NavLink",(function(){return Rt}));var o=n(0),i=n.n(o),a=n(1),c=n.n(a);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t){return"/"===t.charAt(0)}function l(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var f=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],o=e&&e.split("/")||[],i=t&&s(t),a=e&&s(e),c=i||a;if(t&&s(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var f=0,p=o.length;p>=0;p--){var h=o[p];"."===h?l(o,p):".."===h?(l(o,p),f++):f&&(l(o,p),f--)}if(!c)for(;f--;f)o.unshift("..");!c||""===o[0]||o[0]&&s(o[0])||o.unshift("");var d=o.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d};function p(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var h=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"==typeof e||"object"==typeof n){var r=p(e),o=p(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1};var d=function(t,e){if(!t)throw new Error("Invariant failed")};function v(t){return"/"===t.charAt(0)?t:"/"+t}function m(t){return"/"===t.charAt(0)?t.substr(1):t}function y(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function g(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function w(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function b(t,e,n,r){var o;"string"==typeof t?(o=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(o=u({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=f(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function x(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var E=!("undefined"==typeof window||!window.document||!window.document.createElement);function P(t,e){e(window.confirm(t))}function O(){try{return window.history.state||{}}catch(t){return{}}}function C(t){void 0===t&&(t={}),E||d(!1);var e,n=window.history,r=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,c=void 0!==a&&a,s=i.getUserConfirmation,l=void 0===s?P:s,f=i.keyLength,p=void 0===f?6:f,h=t.basename?g(v(t.basename)):"";function m(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return h&&(i=y(i,h)),b(i,r,n)}function C(){return Math.random().toString(36).substr(2,p)}var R=x();function S(t){u(B,t),B.length=n.length,R.notifyListeners(B.location,B.action)}function k(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||_(m(t.state))}function T(){_(m(O()))}var A=!1;function _(t){if(A)A=!1,S();else{R.confirmTransitionTo(t,"POP",l,(function(e){e?S({action:"POP",location:t}):function(t){var e=B.location,n=M.indexOf(e.key);-1===n&&(n=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(A=!0,$(o))}(t)}))}}var L=m(O()),M=[L.key];function j(t){return h+w(t)}function $(t){n.go(t)}var U=0;function H(t){1===(U+=t)&&1===t?(window.addEventListener("popstate",k),o&&window.addEventListener("hashchange",T)):0===U&&(window.removeEventListener("popstate",k),o&&window.removeEventListener("hashchange",T))}var I=!1;var B={length:n.length,action:"POP",location:L,createHref:j,push:function(t,e){var o=b(t,e,C(),B.location);R.confirmTransitionTo(o,"PUSH",l,(function(t){if(t){var e=j(o),i=o.key,a=o.state;if(r)if(n.pushState({key:i,state:a},null,e),c)window.location.href=e;else{var u=M.indexOf(B.location.key),s=M.slice(0,u+1);s.push(o.key),M=s,S({action:"PUSH",location:o})}else window.location.href=e}}))},replace:function(t,e){var o=b(t,e,C(),B.location);R.confirmTransitionTo(o,"REPLACE",l,(function(t){if(t){var e=j(o),i=o.key,a=o.state;if(r)if(n.replaceState({key:i,state:a},null,e),c)window.location.replace(e);else{var u=M.indexOf(B.location.key);-1!==u&&(M[u]=o.key),S({action:"REPLACE",location:o})}else window.location.replace(e)}}))},go:$,goBack:function(){$(-1)},goForward:function(){$(1)},block:function(t){void 0===t&&(t=!1);var e=R.setPrompt(t);return I||(H(1),I=!0),function(){return I&&(I=!1,H(-1)),e()}},listen:function(t){var e=R.appendListener(t);return H(1),function(){H(-1),e()}}};return B}var R={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+m(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:m,decodePath:v},slash:{encodePath:v,decodePath:v}};function S(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function k(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function T(t){window.location.replace(S(window.location.href)+"#"+t)}function A(t){void 0===t&&(t={}),E||d(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),r=n.getUserConfirmation,o=void 0===r?P:r,i=n.hashType,a=void 0===i?"slash":i,c=t.basename?g(v(t.basename)):"",s=R[a],l=s.encodePath,f=s.decodePath;function p(){var t=f(k());return c&&(t=y(t,c)),b(t)}var h=x();function m(t){u(B,t),B.length=e.length,h.notifyListeners(B.location,B.action)}var O=!1,C=null;function A(){var t,e,n=k(),r=l(n);if(n!==r)T(r);else{var i=p(),a=B.location;if(!O&&(e=i,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(C===w(i))return;C=null,function(t){if(O)O=!1,m();else{h.confirmTransitionTo(t,"POP",o,(function(e){e?m({action:"POP",location:t}):function(t){var e=B.location,n=j.lastIndexOf(w(e));-1===n&&(n=0);var r=j.lastIndexOf(w(t));-1===r&&(r=0);var o=n-r;o&&(O=!0,$(o))}(t)}))}}(i)}}var _=k(),L=l(_);_!==L&&T(L);var M=p(),j=[w(M)];function $(t){e.go(t)}var U=0;function H(t){1===(U+=t)&&1===t?window.addEventListener("hashchange",A):0===U&&window.removeEventListener("hashchange",A)}var I=!1;var B={length:e.length,action:"POP",location:M,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=S(window.location.href)),n+"#"+l(c+w(t))},push:function(t,e){var n=b(t,void 0,void 0,B.location);h.confirmTransitionTo(n,"PUSH",o,(function(t){if(t){var e=w(n),r=l(c+e);if(k()!==r){C=e,function(t){window.location.hash=t}(r);var o=j.lastIndexOf(w(B.location)),i=j.slice(0,o+1);i.push(e),j=i,m({action:"PUSH",location:n})}else m()}}))},replace:function(t,e){var n=b(t,void 0,void 0,B.location);h.confirmTransitionTo(n,"REPLACE",o,(function(t){if(t){var e=w(n),r=l(c+e);k()!==r&&(C=e,T(r));var o=j.indexOf(w(B.location));-1!==o&&(j[o]=e),m({action:"REPLACE",location:n})}}))},go:$,goBack:function(){$(-1)},goForward:function(){$(1)},block:function(t){void 0===t&&(t=!1);var e=h.setPrompt(t);return I||(H(1),I=!0),function(){return I&&(I=!1,H(-1)),e()}},listen:function(t){var e=h.appendListener(t);return H(1),function(){H(-1),e()}}};return B}function _(t,e,n){return Math.min(Math.max(t,e),n)}function L(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,o=void 0===r?["/"]:r,i=e.initialIndex,a=void 0===i?0:i,c=e.keyLength,s=void 0===c?6:c,l=x();function f(t){u(y,t),y.length=y.entries.length,l.notifyListeners(y.location,y.action)}function p(){return Math.random().toString(36).substr(2,s)}var h=_(a,0,o.length-1),d=o.map((function(t){return b(t,void 0,"string"==typeof t?p():t.key||p())})),v=w;function m(t){var e=_(y.index+t,0,y.entries.length-1),r=y.entries[e];l.confirmTransitionTo(r,"POP",n,(function(t){t?f({action:"POP",location:r,index:e}):f()}))}var y={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(t,e){var r=b(t,e,p(),y.location);l.confirmTransitionTo(r,"PUSH",n,(function(t){if(t){var e=y.index+1,n=y.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),f({action:"PUSH",location:r,index:e,entries:n})}}))},replace:function(t,e){var r=b(t,e,p(),y.location);l.confirmTransitionTo(r,"REPLACE",n,(function(t){t&&(y.entries[y.index]=r,f({action:"REPLACE",location:r}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(t){var e=y.index+t;return e>=0&&e<y.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return y}var M=n(3),j=n.n(M),$=n(6),U=n.n($);function H(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var I=i.a.createContext||function(t,e){var n,r,i="__create-react-context-"+U()()+"__",a=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=H(e.props.value),e}j()(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[i]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):1073741823,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(o.Component);a.childContextTypes=((n={})[i]=c.a.object.isRequired,n);var u=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}j()(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return u.contextTypes=((r={})[i]=c.a.object,r),{Provider:a,Consumer:u}},B=n(4),N=n.n(B);n(5);function F(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var D=n(7),W=n.n(D),V=function(t){var e=I();return e.displayName=t,e}("Router"),q=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}r(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i.a.createElement(V.Provider,{children:this.props.children||null,value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}})},e}(i.a.Component);var K=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=L(e.props),e}return r(e,t),e.prototype.render=function(){return i.a.createElement(q,{history:this.history,children:this.props.children})},e}(i.a.Component);var z=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(i.a.Component);function J(t){var e=t.message,n=t.when,r=void 0===n||n;return i.a.createElement(V.Consumer,null,(function(t){if(t||d(!1),!r||t.staticContext)return null;var n=t.history.block;return i.a.createElement(z,{onMount:function(t){t.release=n(e)},onUpdate:function(t,r){r.message!==e&&(t.release(),t.release=n(e))},onUnmount:function(t){t.release()},message:e})}))}var G={},Y=0;function Q(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(G[t])return G[t];var e=N.a.compile(t);return Y<1e4&&(G[t]=e,Y++),e}(t)(e,{pretty:!0})}function X(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return i.a.createElement(V.Consumer,null,(function(t){t||d(!1);var r=t.history,a=t.staticContext,c=o?r.push:r.replace,s=b(e?"string"==typeof n?Q(n,e.params):u({},n,{pathname:Q(n.pathname,e.params)}):n);return a?(c(s),null):i.a.createElement(z,{onMount:function(){c(s)},onUpdate:function(t,e){var n,r,o=b(e.to);n=o,r=u({},s,{key:o.key}),n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash&&n.key===r.key&&h(n.state,r.state)||c(s)},to:n})}))}var Z={},tt=0;function et(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=Z[n]||(Z[n]={});if(r[t])return r[t];var o=[],i={regexp:N()(t,o,e),keys:o};return tt<1e4&&(r[t]=i,tt++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],f=u.slice(1),p=t===l;return i&&!p?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:p,params:a.reduce((function(t,e,n){return t[e.name]=f[n],t}),{})}}),null)}var nt=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(V.Consumer,null,(function(e){e||d(!1);var n=t.props.location||e.location,r=u({},e,{location:n,match:t.props.computedMatch?t.props.computedMatch:t.props.path?et(n.pathname,t.props):e.match}),o=t.props,a=o.children,c=o.component,s=o.render;return Array.isArray(a)&&0===a.length&&(a=null),i.a.createElement(V.Provider,{value:r},r.match?a?"function"==typeof a?a(r):a:c?i.a.createElement(c,r):s?s(r):null:"function"==typeof a?a(r):null)}))},e}(i.a.Component);function rt(t){return"/"===t.charAt(0)?t:"/"+t}function ot(t,e){if(!t)return e;var n=rt(t);return 0!==e.pathname.indexOf(n)?e:u({},e,{pathname:e.pathname.substr(n.length)})}function it(t){return"string"==typeof t?t:w(t)}function at(t){return function(){d(!1)}}function ct(){}var ut=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return e.navigateTo(t,"PUSH")},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE")},e.handleListen=function(){return ct},e.handleBlock=function(){return ct},e}r(e,t);var n=e.prototype;return n.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context,a=void 0===i?{}:i;a.action=e,a.location=function(t,e){return t?u({},e,{pathname:rt(t)+e.pathname}):e}(o,b(t)),a.url=it(a.location)},n.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,r=t.context,o=void 0===r?{}:r,a=t.location,c=void 0===a?"/":a,s=F(t,["basename","context","location"]),l={createHref:function(t){return rt(n+it(t))},action:"POP",location:ot(n,b(c)),push:this.handlePush,replace:this.handleReplace,go:at(),goBack:at(),goForward:at(),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(q,u({},s,{history:l,staticContext:o}))},e}(i.a.Component);var st=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(V.Consumer,null,(function(e){e||d(!1);var n,r,o=t.props.location||e.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?et(o.pathname,u({},t.props,{path:a})):e.match}})),r?i.a.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i.a.Component);function lt(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(e){var n=e.wrappedComponentRef,r=F(e,["wrappedComponentRef"]);return i.a.createElement(V.Consumer,null,(function(e){return e||d(!1),i.a.createElement(t,u({},r,e,{ref:n}))}))};return n.displayName=e,n.WrappedComponent=t,W()(n,t)}var ft=i.a.useContext;function pt(){return ft(V).history}function ht(){return ft(V).location}function dt(){var t=ft(V).match;return t?t.params:{}}function vt(t){return t?et(ht().pathname,t):ft(V).match}var mt=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=C(e.props),e}return r(e,t),e.prototype.render=function(){return i.a.createElement(q,{history:this.history,children:this.props.children})},e}(i.a.Component);var yt=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=A(e.props),e}return r(e,t),e.prototype.render=function(){return i.a.createElement(q,{history:this.history,children:this.props.children})},e}(i.a.Component);var gt=function(t,e){return"function"==typeof t?t(e):t},wt=function(t,e){return"string"==typeof t?b(t,null,null,e):t},bt=function(t){return t},xt=i.a.forwardRef;void 0===xt&&(xt=bt);var Et=xt((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,a=F(t,["innerRef","navigate","onClick"]),c=a.target,s=u({},a,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=bt!==xt&&e||n,i.a.createElement("a",s)}));var Pt=xt((function(t,e){var n=t.component,r=void 0===n?Et:n,o=t.replace,a=t.to,c=t.innerRef,s=F(t,["component","replace","to","innerRef"]);return i.a.createElement(V.Consumer,null,(function(t){t||d(!1);var n=t.history,l=wt(gt(a,t.location),t.location),f=l?n.createHref(l):"",p=u({},s,{href:f,navigate:function(){var e=gt(a,t.location);(o?n.replace:n.push)(e)}});return bt!==xt?p.ref=e||c:p.innerRef=c,i.a.createElement(r,p)}))})),Ot=function(t){return t},Ct=i.a.forwardRef;void 0===Ct&&(Ct=Ot);var Rt=Ct((function(t,e){var n=t["aria-current"],r=void 0===n?"page":n,o=t.activeClassName,a=void 0===o?"active":o,c=t.activeStyle,s=t.className,l=t.exact,f=t.isActive,p=t.location,h=t.strict,v=t.style,m=t.to,y=t.innerRef,g=F(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return i.a.createElement(V.Consumer,null,(function(t){t||d(!1);var n=p||t.location,o=wt(gt(m,n),n),w=o.pathname,b=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=b?et(n.pathname,{path:b,exact:l,strict:h}):null,E=!!(f?f(x,n):x),P=E?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(s,a):s,O=E?u({},v,{},c):v,C=u({"aria-current":E&&r||null,className:P,style:O,to:o},g);return Ot!==Ct?C.ref=e||y:C.innerRef=y,i.a.createElement(Pt,C)}))}))}]);
//# sourceMappingURL=main.js.map
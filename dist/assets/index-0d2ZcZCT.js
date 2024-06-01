const __vite__fileDeps=["assets/Home-Dh2U522b.js","assets/Error-3xo88CJ_.js","assets/ProductView-yKtt56-s.js","assets/index-CUds_l8L.js","assets/Team-CCJXmClZ.js","assets/team-CvM0zWHw.js","assets/ProductDetail-B3fRFfHu.js","assets/card-LvmN36X9.js","assets/utils-CHtjtCvc.js","assets/index-CgkWmmfS.js","assets/validation-CMFxILfB.js","assets/SellerSignUp-DU1WNa4S.js","assets/SignUpForm-DQSHLr_T.js","assets/CustomerSignUp-CtCBRaQO.js","assets/Login-C7z3N885.js","assets/MyPage-BHUPON8h.js","assets/UpdateProduct-B6NoxilX.js","assets/SellerProductForm-D8H5NgWp.js","assets/CreateProduct-Wy38mdiP.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Yh=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var I=(t,e,n)=>(Yh(t,e,"read from private field"),n?n.call(t):e.get(t)),ne=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},K=(t,e,n,r)=>(Yh(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var Pl=(t,e,n,r)=>({set _(i){K(t,e,i,n)},get _(){return I(t,e,r)}}),Xe=(t,e,n)=>(Yh(t,e,"access private method"),n);function gk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gw={exports:{}},Lc={},yw={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),yk=Symbol.for("react.portal"),vk=Symbol.for("react.fragment"),_k=Symbol.for("react.strict_mode"),wk=Symbol.for("react.profiler"),Ek=Symbol.for("react.provider"),Tk=Symbol.for("react.context"),Ik=Symbol.for("react.forward_ref"),Sk=Symbol.for("react.suspense"),Ak=Symbol.for("react.memo"),kk=Symbol.for("react.lazy"),Cy=Symbol.iterator;function Rk(t){return t===null||typeof t!="object"?null:(t=Cy&&t[Cy]||t["@@iterator"],typeof t=="function"?t:null)}var vw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_w=Object.assign,ww={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=ww,this.updater=n||vw}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ew(){}Ew.prototype=Xs.prototype;function Qp(t,e,n){this.props=t,this.context=e,this.refs=ww,this.updater=n||vw}var Yp=Qp.prototype=new Ew;Yp.constructor=Qp;_w(Yp,Xs.prototype);Yp.isPureReactComponent=!0;var by=Array.isArray,Tw=Object.prototype.hasOwnProperty,Xp={current:null},Iw={key:!0,ref:!0,__self:!0,__source:!0};function Sw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tw.call(e,r)&&!Iw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ka,type:t,key:s,ref:o,props:i,_owner:Xp.current}}function Pk(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function Ck(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xy=/\/+/g;function Xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ck(""+t.key):e.toString(36)}function pu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case yk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xh(o,0):r,by(i)?(n="",t!=null&&(n=t.replace(xy,"$&/")+"/"),pu(i,e,n,"",function(u){return u})):i!=null&&(Jp(i)&&(i=Pk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",by(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Xh(s,a);o+=pu(s,e,n,l,i)}else if(l=Rk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Xh(s,a++),o+=pu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cl(t,e,n){if(t==null)return t;var r=[],i=0;return pu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},mu={transition:null},xk={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:mu,ReactCurrentOwner:Xp};X.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!Jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Xs;X.Fragment=vk;X.Profiler=wk;X.PureComponent=Qp;X.StrictMode=_k;X.Suspense=Sk;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xk;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_w({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tw.call(e,l)&&!Iw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ka,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:Tk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ek,_context:t},t.Consumer=t};X.createElement=Sw;X.createFactory=function(t){var e=Sw.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:Ik,render:t}};X.isValidElement=Jp;X.lazy=function(t){return{$$typeof:kk,_payload:{_status:-1,_result:t},_init:bk}};X.memo=function(t,e){return{$$typeof:Ak,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=mu.transition;mu.transition={};try{t()}finally{mu.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return yt.current.useCallback(t,e)};X.useContext=function(t){return yt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};X.useEffect=function(t,e){return yt.current.useEffect(t,e)};X.useId=function(){return yt.current.useId()};X.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return yt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};X.useRef=function(t){return yt.current.useRef(t)};X.useState=function(t){return yt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return yt.current.useTransition()};X.version="18.2.0";yw.exports=X;var P=yw.exports;const Ga=Dc(P),Ok=gk({__proto__:null,default:Ga},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nk=P,Dk=Symbol.for("react.element"),Lk=Symbol.for("react.fragment"),Mk=Object.prototype.hasOwnProperty,Vk=Nk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fk={key:!0,ref:!0,__self:!0,__source:!0};function Aw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Mk.call(e,r)&&!Fk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Dk,type:t,key:s,ref:o,props:i,_owner:Vk.current}}Lc.Fragment=Lk;Lc.jsx=Aw;Lc.jsxs=Aw;gw.exports=Lc;var L=gw.exports,ed={},kw={exports:{}},Nt={},Rw={exports:{}},Pw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,W){var G=D.length;D.push(W);e:for(;0<G;){var Ae=G-1>>>1,Me=D[Ae];if(0<i(Me,W))D[Ae]=W,D[G]=Me,G=Ae;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var W=D[0],G=D.pop();if(G!==W){D[0]=G;e:for(var Ae=0,Me=D.length,kl=Me>>>1;Ae<kl;){var Jr=2*(Ae+1)-1,Qh=D[Jr],Zr=Jr+1,Rl=D[Zr];if(0>i(Qh,G))Zr<Me&&0>i(Rl,Qh)?(D[Ae]=Rl,D[Zr]=G,Ae=Zr):(D[Ae]=Qh,D[Jr]=G,Ae=Jr);else if(Zr<Me&&0>i(Rl,G))D[Ae]=Rl,D[Zr]=G,Ae=Zr;else break e}}return W}function i(D,W){var G=D.sortIndex-W.sortIndex;return G!==0?G:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,v=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=D)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function w(D){if(y=!1,g(D),!v)if(n(l)!==null)v=!0,Kh(E);else{var W=n(u);W!==null&&Gh(w,W.startTime-D)}}function E(D,W){v=!1,y&&(y=!1,m(b),b=-1),p=!0;var G=f;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||D&&!Ht());){var Ae=h.callback;if(typeof Ae=="function"){h.callback=null,f=h.priorityLevel;var Me=Ae(h.expirationTime<=W);W=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&r(l),g(W)}else r(l);h=n(l)}if(h!==null)var kl=!0;else{var Jr=n(u);Jr!==null&&Gh(w,Jr.startTime-W),kl=!1}return kl}finally{h=null,f=G,p=!1}}var k=!1,R=null,b=-1,F=5,j=-1;function Ht(){return!(t.unstable_now()-j<F)}function uo(){if(R!==null){var D=t.unstable_now();j=D;var W=!0;try{W=R(!0,D)}finally{W?co():(k=!1,R=null)}}else k=!1}var co;if(typeof d=="function")co=function(){d(uo)};else if(typeof MessageChannel<"u"){var Py=new MessageChannel,mk=Py.port2;Py.port1.onmessage=uo,co=function(){mk.postMessage(null)}}else co=function(){_(uo,0)};function Kh(D){R=D,k||(k=!0,co())}function Gh(D,W){b=_(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Kh(E))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var G=f;f=W;try{return D()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=f;f=D;try{return W()}finally{f=G}},t.unstable_scheduleCallback=function(D,W,G){var Ae=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Ae+G:Ae):G=Ae,D){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=G+Me,D={id:c++,callback:W,priorityLevel:D,startTime:G,expirationTime:Me,sortIndex:-1},G>Ae?(D.sortIndex=G,e(u,D),n(l)===null&&D===n(u)&&(y?(m(b),b=-1):y=!0,Gh(w,G-Ae))):(D.sortIndex=Me,e(l,D),v||p||(v=!0,Kh(E))),D},t.unstable_shouldYield=Ht,t.unstable_wrapCallback=function(D){var W=f;return function(){var G=f;f=W;try{return D.apply(this,arguments)}finally{f=G}}}})(Pw);Rw.exports=Pw;var Uk=Rw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=P,xt=Uk;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bw=new Set,ea={};function Li(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(ea[t]=e,t=0;t<e.length;t++)bw.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,$k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oy={},Ny={};function jk(t){return td.call(Ny,t)?!0:td.call(Oy,t)?!1:$k.test(t)?Ny[t]=!0:(Oy[t]=!0,!1)}function zk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bk(t,e,n,r){if(e===null||typeof e>"u"||zk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zp=/[\-:]([a-z])/g;function em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zp,em);Qe[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zp,em);Qe[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zp,em);Qe[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tm(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bk(e,n,i,r)&&(n=null),r||i===null?jk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),Ow=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),id=Symbol.for("react.suspense_list"),im=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Nw=Symbol.for("react.offscreen"),Dy=Symbol.iterator;function ho(t){return t===null||typeof t!="object"?null:(t=Dy&&t[Dy]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Jh;function So(t){if(Jh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jh=e&&e[1]||""}return`
`+Jh+t}var Zh=!1;function ef(t,e){if(!t||Zh)return"";Zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function qk(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=ef(t.type,!1),t;case 11:return t=ef(t.type.render,!1),t;case 1:return t=ef(t.type,!0),t;default:return""}}function sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case nd:return"Profiler";case nm:return"StrictMode";case rd:return"Suspense";case id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ow:return(t.displayName||"Context")+".Consumer";case xw:return(t._context.displayName||"Context")+".Provider";case rm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case im:return e=t.displayName||null,e!==null?e:sd(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return sd(t(e))}catch{}}return null}function Hk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===nm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wk(t){var e=Dw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xl(t){t._valueTracker||(t._valueTracker=Wk(t))}function Lw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Dw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function od(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ly(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mw(t,e){e=e.checked,e!=null&&tm(t,"checked",e,!1)}function ad(t,e){Mw(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&ld(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function My(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ld(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Ao(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Vw(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ol,Uw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ol=Ol||document.createElement("div"),Ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kk=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){Kk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function $w(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function jw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$w(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Gk=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hd(t,e){if(e){if(Gk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function sm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,ds=null,ps=null;function Uy(t){if(t=Xa(t)){if(typeof pd!="function")throw Error(A(280));var e=t.stateNode;e&&(e=$c(e),pd(t.stateNode,t.type,e))}}function zw(t){ds?ps?ps.push(t):ps=[t]:ds=t}function Bw(){if(ds){var t=ds,e=ps;if(ps=ds=null,Uy(t),e)for(t=0;t<e.length;t++)Uy(e[t])}}function qw(t,e){return t(e)}function Hw(){}var tf=!1;function Ww(t,e,n){if(tf)return t(e,n);tf=!0;try{return qw(t,e,n)}finally{tf=!1,(ds!==null||ps!==null)&&(Hw(),Bw())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var r=$c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var md=!1;if(jn)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){md=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{md=!1}function Qk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vo=!1,Fu=null,Uu=!1,gd=null,Yk={onError:function(t){Vo=!0,Fu=t}};function Xk(t,e,n,r,i,s,o,a,l){Vo=!1,Fu=null,Qk.apply(Yk,arguments)}function Jk(t,e,n,r,i,s,o,a,l){if(Xk.apply(this,arguments),Vo){if(Vo){var u=Fu;Vo=!1,Fu=null}else throw Error(A(198));Uu||(Uu=!0,gd=u)}}function Mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $y(t){if(Mi(t)!==t)throw Error(A(188))}function Zk(t){var e=t.alternate;if(!e){if(e=Mi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $y(i),t;if(s===r)return $y(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function Gw(t){return t=Zk(t),t!==null?Qw(t):null}function Qw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qw(t);if(e!==null)return e;t=t.sibling}return null}var Yw=xt.unstable_scheduleCallback,jy=xt.unstable_cancelCallback,eR=xt.unstable_shouldYield,tR=xt.unstable_requestPaint,ke=xt.unstable_now,nR=xt.unstable_getCurrentPriorityLevel,om=xt.unstable_ImmediatePriority,Xw=xt.unstable_UserBlockingPriority,$u=xt.unstable_NormalPriority,rR=xt.unstable_LowPriority,Jw=xt.unstable_IdlePriority,Mc=null,wn=null;function iR(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:aR,sR=Math.log,oR=Math.LN2;function aR(t){return t>>>=0,t===0?32:31-(sR(t)/oR|0)|0}var Nl=64,Dl=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ko(a):(s&=o,s!==0&&(r=ko(s)))}else o=n&~i,o!==0?r=ko(o):s!==0&&(r=ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function lR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=lR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zw(){var t=Nl;return Nl<<=1,!(Nl&4194240)&&(Nl=64),t}function nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function cR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function e1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t1,lm,n1,r1,i1,vd=!1,Ll=[],Ir=null,Sr=null,Ar=null,ra=new Map,ia=new Map,or=[],hR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zy(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function po(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&lm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fR(t,e,n,r,i){switch(e){case"focusin":return Ir=po(Ir,t,e,n,r,i),!0;case"dragenter":return Sr=po(Sr,t,e,n,r,i),!0;case"mouseover":return Ar=po(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ra.set(s,po(ra.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ia.set(s,po(ia.get(s)||null,t,e,n,r,i)),!0}return!1}function s1(t){var e=ri(t.target);if(e!==null){var n=Mi(e);if(n!==null){if(e=n.tag,e===13){if(e=Kw(n),e!==null){t.blockedOn=e,i1(t.priority,function(){n1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return e=Xa(n),e!==null&&lm(e),t.blockedOn=n,!1;e.shift()}return!0}function By(t,e,n){gu(t)&&n.delete(e)}function dR(){vd=!1,Ir!==null&&gu(Ir)&&(Ir=null),Sr!==null&&gu(Sr)&&(Sr=null),Ar!==null&&gu(Ar)&&(Ar=null),ra.forEach(By),ia.forEach(By)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,vd||(vd=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,dR)))}function sa(t){function e(i){return mo(i,t)}if(0<Ll.length){mo(Ll[0],t);for(var n=1;n<Ll.length;n++){var r=Ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&mo(Ir,t),Sr!==null&&mo(Sr,t),Ar!==null&&mo(Ar,t),ra.forEach(e),ia.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)s1(n),n.blockedOn===null&&or.shift()}var ms=Jn.ReactCurrentBatchConfig,zu=!0;function pR(t,e,n,r){var i=re,s=ms.transition;ms.transition=null;try{re=1,um(t,e,n,r)}finally{re=i,ms.transition=s}}function mR(t,e,n,r){var i=re,s=ms.transition;ms.transition=null;try{re=4,um(t,e,n,r)}finally{re=i,ms.transition=s}}function um(t,e,n,r){if(zu){var i=_d(t,e,n,r);if(i===null)df(t,e,r,Bu,n),zy(t,r);else if(fR(i,t,e,n,r))r.stopPropagation();else if(zy(t,r),e&4&&-1<hR.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&t1(s),s=_d(t,e,n,r),s===null&&df(t,e,r,Bu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else df(t,e,r,null,n)}}var Bu=null;function _d(t,e,n,r){if(Bu=null,t=sm(r),t=ri(t),t!==null)if(e=Mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bu=t,null}function o1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nR()){case om:return 1;case Xw:return 4;case $u:case rR:return 16;case Jw:return 536870912;default:return 16}default:return 16}}var vr=null,cm=null,yu=null;function a1(){if(yu)return yu;var t,e=cm,n=e.length,r,i="value"in vr?vr.value:vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yu=i.slice(t,1<r?1-r:void 0)}function vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function qy(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:qy,this.isPropagationStopped=qy,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hm=Dt(Js),Ya=ye({},Js,{view:0,detail:0}),gR=Dt(Ya),rf,sf,go,Vc=ye({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(rf=t.screenX-go.screenX,sf=t.screenY-go.screenY):sf=rf=0,go=t),rf)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),Hy=Dt(Vc),yR=ye({},Vc,{dataTransfer:0}),vR=Dt(yR),_R=ye({},Ya,{relatedTarget:0}),of=Dt(_R),wR=ye({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),ER=Dt(wR),TR=ye({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IR=Dt(TR),SR=ye({},Js,{data:0}),Wy=Dt(SR),AR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RR[t])?!!e[t]:!1}function fm(){return PR}var CR=ye({},Ya,{key:function(t){if(t.key){var e=AR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fm,charCode:function(t){return t.type==="keypress"?vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bR=Dt(CR),xR=ye({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ky=Dt(xR),OR=ye({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fm}),NR=Dt(OR),DR=ye({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),LR=Dt(DR),MR=ye({},Vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VR=Dt(MR),FR=[9,13,27,32],dm=jn&&"CompositionEvent"in window,Fo=null;jn&&"documentMode"in document&&(Fo=document.documentMode);var UR=jn&&"TextEvent"in window&&!Fo,l1=jn&&(!dm||Fo&&8<Fo&&11>=Fo),Gy=" ",Qy=!1;function u1(t,e){switch(t){case"keyup":return FR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function $R(t,e){switch(t){case"compositionend":return c1(e);case"keypress":return e.which!==32?null:(Qy=!0,Gy);case"textInput":return t=e.data,t===Gy&&Qy?null:t;default:return null}}function jR(t,e){if(Xi)return t==="compositionend"||!dm&&u1(t,e)?(t=a1(),yu=cm=vr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l1&&e.locale!=="ko"?null:e.data;default:return null}}var zR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zR[t.type]:e==="textarea"}function h1(t,e,n,r){zw(r),e=qu(e,"onChange"),0<e.length&&(n=new hm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Uo=null,oa=null;function BR(t){T1(t,0)}function Fc(t){var e=es(t);if(Lw(e))return t}function qR(t,e){if(t==="change")return e}var f1=!1;if(jn){var af;if(jn){var lf="oninput"in document;if(!lf){var Xy=document.createElement("div");Xy.setAttribute("oninput","return;"),lf=typeof Xy.oninput=="function"}af=lf}else af=!1;f1=af&&(!document.documentMode||9<document.documentMode)}function Jy(){Uo&&(Uo.detachEvent("onpropertychange",d1),oa=Uo=null)}function d1(t){if(t.propertyName==="value"&&Fc(oa)){var e=[];h1(e,oa,t,sm(t)),Ww(BR,e)}}function HR(t,e,n){t==="focusin"?(Jy(),Uo=e,oa=n,Uo.attachEvent("onpropertychange",d1)):t==="focusout"&&Jy()}function WR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(oa)}function KR(t,e){if(t==="click")return Fc(e)}function GR(t,e){if(t==="input"||t==="change")return Fc(e)}function QR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:QR;function aa(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!td.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Zy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ev(t,e){var n=Zy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zy(n)}}function p1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m1(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YR(t){var e=m1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p1(n.ownerDocument.documentElement,n)){if(r!==null&&pm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ev(n,s);var o=ev(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XR=jn&&"documentMode"in document&&11>=document.documentMode,Ji=null,wd=null,$o=null,Ed=!1;function tv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ed||Ji==null||Ji!==Vu(r)||(r=Ji,"selectionStart"in r&&pm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&aa($o,r)||($o=r,r=qu(wd,"onSelect"),0<r.length&&(e=new hm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},uf={},g1={};jn&&(g1=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Uc(t){if(uf[t])return uf[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g1)return uf[t]=e[n];return t}var y1=Uc("animationend"),v1=Uc("animationiteration"),_1=Uc("animationstart"),w1=Uc("transitionend"),E1=new Map,nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){E1.set(t,e),Li(e,[t])}for(var cf=0;cf<nv.length;cf++){var hf=nv[cf],JR=hf.toLowerCase(),ZR=hf[0].toUpperCase()+hf.slice(1);Br(JR,"on"+ZR)}Br(y1,"onAnimationEnd");Br(v1,"onAnimationIteration");Br(_1,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(w1,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jk(r,e,void 0,t),t.currentTarget=null}function T1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;rv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;rv(i,a,u),s=l}}}if(Uu)throw t=gd,Uu=!1,gd=null,t}function ae(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var r=t+"__bubble";n.has(r)||(I1(e,t,2,!1),n.add(r))}function ff(t,e,n){var r=0;e&&(r|=4),I1(n,t,r,e)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[Fl]){t[Fl]=!0,bw.forEach(function(n){n!=="selectionchange"&&(eP.has(n)||ff(n,!1,t),ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fl]||(e[Fl]=!0,ff("selectionchange",!1,e))}}function I1(t,e,n,r){switch(o1(e)){case 1:var i=pR;break;case 4:i=mR;break;default:i=um}n=i.bind(null,e,n,t),i=void 0,!md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function df(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ww(function(){var u=s,c=sm(n),h=[];e:{var f=E1.get(t);if(f!==void 0){var p=hm,v=t;switch(t){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":p=bR;break;case"focusin":v="focus",p=of;break;case"focusout":v="blur",p=of;break;case"beforeblur":case"afterblur":p=of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=vR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=NR;break;case y1:case v1:case _1:p=ER;break;case w1:p=LR;break;case"scroll":p=gR;break;case"wheel":p=VR;break;case"copy":case"cut":case"paste":p=IR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ky}var y=(e&4)!==0,_=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=na(d,m),w!=null&&y.push(ua(d,w,g)))),_)break;d=d.return}0<y.length&&(f=new p(f,v,null,n,c),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==dd&&(v=n.relatedTarget||n.fromElement)&&(ri(v)||v[zn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?ri(v):null,v!==null&&(_=Mi(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=Hy,w="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ky,w="onPointerLeave",m="onPointerEnter",d="pointer"),_=p==null?f:es(p),g=v==null?f:es(v),f=new y(w,d+"leave",p,n,c),f.target=_,f.relatedTarget=g,w=null,ri(c)===u&&(y=new y(m,d+"enter",v,n,c),y.target=g,y.relatedTarget=_,w=y),_=w,p&&v)t:{for(y=p,m=v,d=0,g=y;g;g=qi(g))d++;for(g=0,w=m;w;w=qi(w))g++;for(;0<d-g;)y=qi(y),d--;for(;0<g-d;)m=qi(m),g--;for(;d--;){if(y===m||m!==null&&y===m.alternate)break t;y=qi(y),m=qi(m)}y=null}else y=null;p!==null&&iv(h,f,p,y,!1),v!==null&&_!==null&&iv(h,_,v,y,!0)}}e:{if(f=u?es(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=qR;else if(Yy(f))if(f1)E=GR;else{E=WR;var k=HR}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=KR);if(E&&(E=E(t,u))){h1(h,E,n,c);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ld(f,"number",f.value)}switch(k=u?es(u):window,t){case"focusin":(Yy(k)||k.contentEditable==="true")&&(Ji=k,wd=u,$o=null);break;case"focusout":$o=wd=Ji=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,tv(h,n,c);break;case"selectionchange":if(XR)break;case"keydown":case"keyup":tv(h,n,c)}var R;if(dm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Xi?u1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(l1&&n.locale!=="ko"&&(Xi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Xi&&(R=a1()):(vr=c,cm="value"in vr?vr.value:vr.textContent,Xi=!0)),k=qu(u,b),0<k.length&&(b=new Wy(b,t,null,n,c),h.push({event:b,listeners:k}),R?b.data=R:(R=c1(n),R!==null&&(b.data=R)))),(R=UR?$R(t,n):jR(t,n))&&(u=qu(u,"onBeforeInput"),0<u.length&&(c=new Wy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}T1(h,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=na(t,n),s!=null&&r.unshift(ua(t,s,i)),s=na(t,e),s!=null&&r.push(ua(t,s,i))),t=t.return}return r}function qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function iv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=na(n,s),l!=null&&o.unshift(ua(n,l,a))):i||(l=na(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tP=/\r\n?/g,nP=/\u0000|\uFFFD/g;function sv(t){return(typeof t=="string"?t:""+t).replace(tP,`
`).replace(nP,"")}function Ul(t,e,n){if(e=sv(e),sv(t)!==e&&n)throw Error(A(425))}function Hu(){}var Td=null,Id=null;function Sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,rP=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,iP=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(t){return ov.resolve(null).then(t).catch(sP)}:Ad;function sP(t){setTimeout(function(){throw t})}function pf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sa(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function av(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),dn="__reactFiber$"+Zs,ca="__reactProps$"+Zs,zn="__reactContainer$"+Zs,kd="__reactEvents$"+Zs,oP="__reactListeners$"+Zs,aP="__reactHandles$"+Zs;function ri(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=av(t);t!==null;){if(n=t[dn])return n;t=av(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[dn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function $c(t){return t[ca]||null}var Rd=[],ts=-1;function qr(t){return{current:t}}function he(t){0>ts||(t.current=Rd[ts],Rd[ts]=null,ts--)}function se(t,e){ts++,Rd[ts]=t.current,t.current=e}var Lr={},ot=qr(Lr),It=qr(!1),wi=Lr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function Wu(){he(It),he(ot)}function lv(t,e,n){if(ot.current!==Lr)throw Error(A(168));se(ot,e),se(It,n)}function S1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,Hk(t)||"Unknown",i));return ye({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,wi=ot.current,se(ot,t),se(It,It.current),!0}function uv(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=S1(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,he(It),he(ot),se(ot,t)):he(It),se(It,n)}var xn=null,jc=!1,mf=!1;function A1(t){xn===null?xn=[t]:xn.push(t)}function lP(t){jc=!0,A1(t)}function Hr(){if(!mf&&xn!==null){mf=!0;var t=0,e=re;try{var n=xn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,jc=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),Yw(om,Hr),i}finally{re=e,mf=!1}}return null}var ns=[],rs=0,Gu=null,Qu=0,Vt=[],Ft=0,Ei=null,On=1,Nn="";function ei(t,e){ns[rs++]=Qu,ns[rs++]=Gu,Gu=t,Qu=e}function k1(t,e,n){Vt[Ft++]=On,Vt[Ft++]=Nn,Vt[Ft++]=Ei,Ei=t;var r=On;t=Nn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-Zt(e)+i|n<<i|r,Nn=s+t}else On=1<<s|n<<i|r,Nn=t}function mm(t){t.return!==null&&(ei(t,1),k1(t,1,0))}function gm(t){for(;t===Gu;)Gu=ns[--rs],ns[rs]=null,Qu=ns[--rs],ns[rs]=null;for(;t===Ei;)Ei=Vt[--Ft],Vt[Ft]=null,Nn=Vt[--Ft],Vt[Ft]=null,On=Vt[--Ft],Vt[Ft]=null}var bt=null,Pt=null,de=!1,Xt=null;function R1(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Pt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ei!==null?{id:On,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Pt=null,!0):!1;default:return!1}}function Pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cd(t){if(de){var e=Pt;if(e){var n=e;if(!cv(t,e)){if(Pd(t))throw Error(A(418));e=kr(n.nextSibling);var r=bt;e&&cv(t,e)?R1(r,n):(t.flags=t.flags&-4097|2,de=!1,bt=t)}}else{if(Pd(t))throw Error(A(418));t.flags=t.flags&-4097|2,de=!1,bt=t}}}function hv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function $l(t){if(t!==bt)return!1;if(!de)return hv(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sd(t.type,t.memoizedProps)),e&&(e=Pt)){if(Pd(t))throw P1(),Error(A(418));for(;e;)R1(t,e),e=kr(e.nextSibling)}if(hv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=bt?kr(t.stateNode.nextSibling):null;return!0}function P1(){for(var t=Pt;t;)t=kr(t.nextSibling)}function Ms(){Pt=bt=null,de=!1}function ym(t){Xt===null?Xt=[t]:Xt.push(t)}var uP=Jn.ReactCurrentBatchConfig;function Kt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Yu=qr(null),Xu=null,is=null,vm=null;function _m(){vm=is=Xu=null}function wm(t){var e=Yu.current;he(Yu),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){Xu=t,vm=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(vm!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(Xu===null)throw Error(A(308));is=t,Xu.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var ii=null;function Em(t){ii===null?ii=[t]:ii.push(t)}function C1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Em(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,Em(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function _u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,am(t,n)}}function fv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=ye({},h,f);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ii|=o,t.lanes=o,t.memoizedState=h}}function dv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var x1=new Cw.Component().refs;function xd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Cr(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(en(e,t,i,r),_u(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Cr(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(en(e,t,i,r),_u(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Cr(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,r),e!==null&&(en(e,t,r,n),_u(e,t,r))}};function pv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,r)||!aa(i,s):!0}function O1(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=St(e)?wi:ot.current,r=e.contextTypes,s=(r=r!=null)?Ls(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=x1,Tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=St(e)?wi:ot.current,i.context=Ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zc.enqueueReplaceState(i,i.state,null),Ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===x1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gv(t){var e=t._init;return e(t._payload)}function N1(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=br(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,w){return d===null||d.tag!==6?(d=Tf(g,m.mode,w),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,w){var E=g.type;return E===Yi?c(m,d,g.props.children,w,g.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&gv(E)===d.type)?(w=i(d,g.props),w.ref=yo(m,d,g),w.return=m,w):(w=Au(g.type,g.key,g.props,null,m.mode,w),w.ref=yo(m,d,g),w.return=m,w)}function u(m,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=If(g,m.mode,w),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,w,E){return d===null||d.tag!==7?(d=gi(g,m.mode,w,E),d.return=m,d):(d=i(d,g),d.return=m,d)}function h(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Tf(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case bl:return g=Au(d.type,d.key,d.props,null,m.mode,g),g.ref=yo(m,null,d),g.return=m,g;case Qi:return d=If(d,m.mode,g),d.return=m,d;case ir:var w=d._init;return h(m,w(d._payload),g)}if(Ao(d)||ho(d))return d=gi(d,m.mode,g,null),d.return=m,d;jl(m,d)}return null}function f(m,d,g,w){var E=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(m,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bl:return g.key===E?l(m,d,g,w):null;case Qi:return g.key===E?u(m,d,g,w):null;case ir:return E=g._init,f(m,d,E(g._payload),w)}if(Ao(g)||ho(g))return E!==null?null:c(m,d,g,w,null);jl(m,g)}return null}function p(m,d,g,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(d,m,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bl:return m=m.get(w.key===null?g:w.key)||null,l(d,m,w,E);case Qi:return m=m.get(w.key===null?g:w.key)||null,u(d,m,w,E);case ir:var k=w._init;return p(m,d,g,k(w._payload),E)}if(Ao(w)||ho(w))return m=m.get(g)||null,c(d,m,w,E,null);jl(d,w)}return null}function v(m,d,g,w){for(var E=null,k=null,R=d,b=d=0,F=null;R!==null&&b<g.length;b++){R.index>b?(F=R,R=null):F=R.sibling;var j=f(m,R,g[b],w);if(j===null){R===null&&(R=F);break}t&&R&&j.alternate===null&&e(m,R),d=s(j,d,b),k===null?E=j:k.sibling=j,k=j,R=F}if(b===g.length)return n(m,R),de&&ei(m,b),E;if(R===null){for(;b<g.length;b++)R=h(m,g[b],w),R!==null&&(d=s(R,d,b),k===null?E=R:k.sibling=R,k=R);return de&&ei(m,b),E}for(R=r(m,R);b<g.length;b++)F=p(R,m,b,g[b],w),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?b:F.key),d=s(F,d,b),k===null?E=F:k.sibling=F,k=F);return t&&R.forEach(function(Ht){return e(m,Ht)}),de&&ei(m,b),E}function y(m,d,g,w){var E=ho(g);if(typeof E!="function")throw Error(A(150));if(g=E.call(g),g==null)throw Error(A(151));for(var k=E=null,R=d,b=d=0,F=null,j=g.next();R!==null&&!j.done;b++,j=g.next()){R.index>b?(F=R,R=null):F=R.sibling;var Ht=f(m,R,j.value,w);if(Ht===null){R===null&&(R=F);break}t&&R&&Ht.alternate===null&&e(m,R),d=s(Ht,d,b),k===null?E=Ht:k.sibling=Ht,k=Ht,R=F}if(j.done)return n(m,R),de&&ei(m,b),E;if(R===null){for(;!j.done;b++,j=g.next())j=h(m,j.value,w),j!==null&&(d=s(j,d,b),k===null?E=j:k.sibling=j,k=j);return de&&ei(m,b),E}for(R=r(m,R);!j.done;b++,j=g.next())j=p(R,m,b,j.value,w),j!==null&&(t&&j.alternate!==null&&R.delete(j.key===null?b:j.key),d=s(j,d,b),k===null?E=j:k.sibling=j,k=j);return t&&R.forEach(function(uo){return e(m,uo)}),de&&ei(m,b),E}function _(m,d,g,w){if(typeof g=="object"&&g!==null&&g.type===Yi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bl:e:{for(var E=g.key,k=d;k!==null;){if(k.key===E){if(E=g.type,E===Yi){if(k.tag===7){n(m,k.sibling),d=i(k,g.props.children),d.return=m,m=d;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&gv(E)===k.type){n(m,k.sibling),d=i(k,g.props),d.ref=yo(m,k,g),d.return=m,m=d;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Yi?(d=gi(g.props.children,m.mode,w,g.key),d.return=m,m=d):(w=Au(g.type,g.key,g.props,null,m.mode,w),w.ref=yo(m,d,g),w.return=m,m=w)}return o(m);case Qi:e:{for(k=g.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=If(g,m.mode,w),d.return=m,m=d}return o(m);case ir:return k=g._init,_(m,d,k(g._payload),w)}if(Ao(g))return v(m,d,g,w);if(ho(g))return y(m,d,g,w);jl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=Tf(g,m.mode,w),d.return=m,m=d),o(m)):n(m,d)}return _}var Vs=N1(!0),D1=N1(!1),Ja={},En=qr(Ja),ha=qr(Ja),fa=qr(Ja);function si(t){if(t===Ja)throw Error(A(174));return t}function Im(t,e){switch(se(fa,e),se(ha,t),se(En,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cd(e,t)}he(En),se(En,e)}function Fs(){he(En),he(ha),he(fa)}function L1(t){si(fa.current);var e=si(En.current),n=cd(e,t.type);e!==n&&(se(ha,t),se(En,n))}function Sm(t){ha.current===t&&(he(En),he(ha))}var me=qr(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gf=[];function Am(){for(var t=0;t<gf.length;t++)gf[t]._workInProgressVersionPrimary=null;gf.length=0}var wu=Jn.ReactCurrentDispatcher,yf=Jn.ReactCurrentBatchConfig,Ti=0,ge=null,xe=null,Fe=null,ec=!1,jo=!1,da=0,cP=0;function Je(){throw Error(A(321))}function km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Rm(t,e,n,r,i,s){if(Ti=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=t===null||t.memoizedState===null?pP:mP,t=n(r,i),jo){s=0;do{if(jo=!1,da=0,25<=s)throw Error(A(301));s+=1,Fe=xe=null,e.updateQueue=null,wu.current=gP,t=n(r,i)}while(jo)}if(wu.current=tc,e=xe!==null&&xe.next!==null,Ti=0,Fe=xe=ge=null,ec=!1,e)throw Error(A(300));return t}function Pm(){var t=da!==0;return da=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function qt(){if(xe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Fe===null?ge.memoizedState:Fe.next;if(e!==null)Fe=e,xe=t;else{if(t===null)throw Error(A(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function pa(t,e){return typeof e=="function"?e(t):e}function vf(t){var e=qt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ti&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=c,Ii|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _f(t){var e=qt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function M1(){}function V1(t,e){var n=ge,r=qt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Cm($1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,ma(9,U1.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(A(349));Ti&30||F1(n,e,i)}return i}function F1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U1(t,e,n,r){e.value=n,e.getSnapshot=r,j1(e)&&z1(t)}function $1(t,e,n){return n(function(){j1(e)&&z1(t)})}function j1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function z1(t){var e=Bn(t,1);e!==null&&en(e,t,1,-1)}function yv(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=dP.bind(null,ge,t),[e.memoizedState,t]}function ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function B1(){return qt().memoizedState}function Eu(t,e,n,r){var i=un();ge.flags|=t,i.memoizedState=ma(1|e,n,void 0,r===void 0?null:r)}function Bc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&km(r,o.deps)){i.memoizedState=ma(e,n,s,r);return}}ge.flags|=t,i.memoizedState=ma(1|e,n,s,r)}function vv(t,e){return Eu(8390656,8,t,e)}function Cm(t,e){return Bc(2048,8,t,e)}function q1(t,e){return Bc(4,2,t,e)}function H1(t,e){return Bc(4,4,t,e)}function W1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K1(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,W1.bind(null,e,t),n)}function bm(){}function G1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&km(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Q1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&km(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Y1(t,e,n){return Ti&21?(tn(n,e)||(n=Zw(),ge.lanes|=n,Ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function hP(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=yf.transition;yf.transition={};try{t(!1),e()}finally{re=n,yf.transition=r}}function X1(){return qt().memoizedState}function fP(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},J1(t))Z1(e,n);else if(n=C1(t,e,n,r),n!==null){var i=mt();en(n,t,r,i),eE(n,e,r)}}function dP(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(J1(t))Z1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,Em(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=C1(t,e,i,r),n!==null&&(i=mt(),en(n,t,r,i),eE(n,e,r))}}function J1(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function Z1(t,e){jo=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,am(t,n)}}var tc={readContext:Bt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},pP={readContext:Bt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:vv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4194308,4,W1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Eu(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fP.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:yv,useDebugValue:bm,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=yv(!1),e=t[0];return t=hP.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=un();if(de){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ue===null)throw Error(A(349));Ti&30||F1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vv($1.bind(null,r,s,t),[t]),r.flags|=2048,ma(9,U1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=un(),e=Ue.identifierPrefix;if(de){var n=Nn,r=On;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mP={readContext:Bt,useCallback:G1,useContext:Bt,useEffect:Cm,useImperativeHandle:K1,useInsertionEffect:q1,useLayoutEffect:H1,useMemo:Q1,useReducer:vf,useRef:B1,useState:function(){return vf(pa)},useDebugValue:bm,useDeferredValue:function(t){var e=qt();return Y1(e,xe.memoizedState,t)},useTransition:function(){var t=vf(pa)[0],e=qt().memoizedState;return[t,e]},useMutableSource:M1,useSyncExternalStore:V1,useId:X1,unstable_isNewReconciler:!1},gP={readContext:Bt,useCallback:G1,useContext:Bt,useEffect:Cm,useImperativeHandle:K1,useInsertionEffect:q1,useLayoutEffect:H1,useMemo:Q1,useReducer:_f,useRef:B1,useState:function(){return _f(pa)},useDebugValue:bm,useDeferredValue:function(t){var e=qt();return xe===null?e.memoizedState=t:Y1(e,xe.memoizedState,t)},useTransition:function(){var t=_f(pa)[0],e=qt().memoizedState;return[t,e]},useMutableSource:M1,useSyncExternalStore:V1,useId:X1,unstable_isNewReconciler:!1};function Us(t,e){try{var n="",r=e;do n+=qk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yP=typeof WeakMap=="function"?WeakMap:Map;function tE(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rc||(rc=!0,Bd=r),Nd(t,e)},n}function nE(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _v(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xP.bind(null,t,e,n),e.then(t,t))}function wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ev(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var vP=Jn.ReactCurrentOwner,Tt=!1;function ht(t,e,n,r){e.child=t===null?D1(e,null,n,r):Vs(e,t.child,n,r)}function Tv(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=Rm(t,e,n,r,s,i),n=Pm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(de&&n&&mm(e),e.flags|=1,ht(t,e,r,i),e.child)}function Iv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rE(t,e,s,r,i)):(t=Au(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function rE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(aa(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Dd(t,e,n,r,i)}function iE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(os,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(os,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(os,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(os,Rt),Rt|=r;return ht(t,e,i,n),e.child}function sE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dd(t,e,n,r,i){var s=St(n)?wi:ot.current;return s=Ls(e,s),gs(e,i),n=Rm(t,e,n,r,s,i),r=Pm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(de&&r&&mm(e),e.flags|=1,ht(t,e,n,i),e.child)}function Sv(t,e,n,r,i){if(St(n)){var s=!0;Ku(e)}else s=!1;if(gs(e,i),e.stateNode===null)Tu(t,e),O1(e,n,r),Od(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=St(n)?wi:ot.current,u=Ls(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&mv(e,o,r,u),sr=!1;var f=e.memoizedState;o.state=f,Ju(e,r,o,i),l=e.memoizedState,a!==r||f!==l||It.current||sr?(typeof c=="function"&&(xd(e,n,c,r),l=e.memoizedState),(a=sr||pv(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,b1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=St(n)?wi:ot.current,l=Ls(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&mv(e,o,r,l),sr=!1,f=e.memoizedState,o.state=f,Ju(e,r,o,i);var v=e.memoizedState;a!==h||f!==v||It.current||sr?(typeof p=="function"&&(xd(e,n,p,r),v=e.memoizedState),(u=sr||pv(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ld(t,e,n,r,s,i)}function Ld(t,e,n,r,i,s){sE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&uv(e,n,!1),qn(t,e,s);r=e.stateNode,vP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&uv(e,n,!0),e.child}function oE(t){var e=t.stateNode;e.pendingContext?lv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lv(t,e.context,!1),Im(t,e.containerInfo)}function Av(t,e,n,r,i){return Ms(),ym(i),e.flags|=256,ht(t,e,n,r),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function aE(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(me,i&1),t===null)return Cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wc(o,r,0,null),t=gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vd(n),e.memoizedState=Md,t):xm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _P(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=br(a,s):(s=gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Md,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xm(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zl(t,e,n,r){return r!==null&&ym(r),Vs(e,t.child,null,n),t=xm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _P(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wf(Error(A(422))),zl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wc({mode:"visible",children:r.children},i,0,null),s=gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Vd(o),e.memoizedState=Md,s);if(!(e.mode&1))return zl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=wf(s,r,void 0),zl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),en(r,t,i,-1))}return Vm(),r=wf(Error(A(421))),zl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=kr(i.nextSibling),bt=e,de=!0,Xt=null,t!==null&&(Vt[Ft++]=On,Vt[Ft++]=Nn,Vt[Ft++]=Ei,On=t.id,Nn=t.overflow,Ei=e),e=xm(e,r.children),e.flags|=4096,e)}function kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bd(t.return,e,n)}function Ef(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function lE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,n,e);else if(t.tag===19)kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ef(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ef(e,!0,n,null,s);break;case"together":Ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wP(t,e,n){switch(e.tag){case 3:oE(e),Ms();break;case 5:L1(e);break;case 1:St(e.type)&&Ku(e);break;case 4:Im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?aE(t,e,n):(se(me,me.current&1),t=qn(t,e,n),t!==null?t.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return lE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,iE(t,e,n)}return qn(t,e,n)}var uE,Fd,cE,hE;uE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fd=function(){};cE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(En.current);var s=null;switch(n){case"input":i=od(t,i),r=od(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=ud(t,i),r=ud(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hu)}hd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hE=function(t,e,n,r){n!==r&&(e.flags|=4)};function vo(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function EP(t,e,n){var r=e.pendingProps;switch(gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return St(e.type)&&Wu(),Ze(e),null;case 3:return r=e.stateNode,Fs(),he(It),he(ot),Am(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Wd(Xt),Xt=null))),Fd(t,e),Ze(e),null;case 5:Sm(e);var i=si(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)cE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Ze(e),null}if(t=si(En.current),$l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[ca]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Ro.length;i++)ae(Ro[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Ly(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Vy(r,s),ae("invalid",r)}hd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":xl(r),My(r,s,!0);break;case"textarea":xl(r),Fy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[ca]=r,uE(t,e,!1,!1),e.stateNode=t;e:{switch(o=fd(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ro.length;i++)ae(Ro[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":Ly(t,r),i=od(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ae("invalid",t);break;case"textarea":Vy(t,r),i=ud(t,r),ae("invalid",t);break;default:i=r}hd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Uw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",t):l!=null&&tm(t,s,l,o))}switch(n){case"input":xl(t),My(t,r,!1);break;case"textarea":xl(t),Fy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)hE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=si(fa.current),si(En.current),$l(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:Ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return Ze(e),null;case 13:if(he(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Pt!==null&&e.mode&1&&!(e.flags&128))P1(),Ms(),e.flags|=98560,s=!1;else if(s=$l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[dn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Xt!==null&&(Wd(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Oe===0&&(Oe=3):Vm())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Fs(),Fd(t,e),t===null&&la(e.stateNode.containerInfo),Ze(e),null;case 10:return wm(e.type._context),Ze(e),null;case 17:return St(e.type)&&Wu(),Ze(e),null;case 19:if(he(me),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vo(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zu(t),o!==null){for(e.flags|=128,vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>$s&&(e.flags|=128,r=!0,vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Ze(e),null}else 2*ke()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,r=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=me.current,se(me,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return Mm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function TP(t,e){switch(gm(e),e.tag){case 1:return St(e.type)&&Wu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),he(It),he(ot),Am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sm(e),null;case 13:if(he(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(me),null;case 4:return Fs(),null;case 10:return wm(e.type._context),null;case 22:case 23:return Mm(),null;case 24:return null;default:return null}}var Bl=!1,nt=!1,IP=typeof WeakSet=="function"?WeakSet:Set,N=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Ud(t,e,n){try{n()}catch(r){we(t,e,r)}}var Rv=!1;function SP(t,e){if(Td=zu,t=m1(),pm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:t,selectionRange:n},zu=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,_=v.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Kt(e.type,y),_);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){we(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=Rv,Rv=!1,v}function zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ud(e,n,s)}i=i.next}while(i!==r)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fE(t){var e=t.alternate;e!==null&&(t.alternate=null,fE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[ca],delete e[kd],delete e[oP],delete e[aP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dE(t){return t.tag===5||t.tag===3||t.tag===4}function Pv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hu));else if(r!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}var ze=null,Yt=!1;function er(t,e,n){for(n=n.child;n!==null;)pE(t,e,n),n=n.sibling}function pE(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:nt||ss(n,e);case 6:var r=ze,i=Yt;ze=null,er(t,e,n),ze=r,Yt=i,ze!==null&&(Yt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Yt?(t=ze,n=n.stateNode,t.nodeType===8?pf(t.parentNode,n):t.nodeType===1&&pf(t,n),sa(t)):pf(ze,n.stateNode));break;case 4:r=ze,i=Yt,ze=n.stateNode.containerInfo,Yt=!0,er(t,e,n),ze=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!nt&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,er(t,e,n),nt=r):er(t,e,n);break;default:er(t,e,n)}}function Cv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new IP),e.forEach(function(r){var i=NP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,Yt=!1;break e;case 3:ze=a.stateNode.containerInfo,Yt=!0;break e;case 4:ze=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(ze===null)throw Error(A(160));pE(s,o,i),ze=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mE(e,t),e=e.sibling}function mE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),ln(t),r&4){try{zo(3,t,t.return),qc(3,t)}catch(y){we(t,t.return,y)}try{zo(5,t,t.return)}catch(y){we(t,t.return,y)}}break;case 1:Wt(e,t),ln(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(Wt(e,t),ln(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{ta(i,"")}catch(y){we(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mw(i,s),fd(a,o);var u=fd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?jw(i,h):c==="dangerouslySetInnerHTML"?Uw(i,h):c==="children"?ta(i,h):tm(i,c,h,u)}switch(a){case"input":ad(i,s);break;case"textarea":Vw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?fs(i,!!s.multiple,s.defaultValue,!0):fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ca]=s}catch(y){we(t,t.return,y)}}break;case 6:if(Wt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){we(t,t.return,y)}}break;case 3:if(Wt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(y){we(t,t.return,y)}break;case 4:Wt(e,t),ln(t);break;case 13:Wt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dm=ke())),r&4&&Cv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(u=nt)||c,Wt(e,t),nt=u):Wt(e,t),ln(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(f=N,p=f.child,f.tag){case 0:case 11:case 14:case 15:zo(4,f,f.return);break;case 1:ss(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){we(r,n,y)}}break;case 5:ss(f,f.return);break;case 22:if(f.memoizedState!==null){xv(h);continue}}p!==null?(p.return=f,N=p):xv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$w("display",o))}catch(y){we(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){we(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wt(e,t),ln(t),r&4&&Cv(t);break;case 21:break;default:Wt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dE(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var s=Pv(t);zd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pv(t);jd(t,a,o);break;default:throw Error(A(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AP(t,e,n){N=t,gE(t)}function gE(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=Bl;var u=nt;if(Bl=o,(nt=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Ov(i):l!==null?(l.return=o,N=l):Ov(i);for(;s!==null;)N=s,gE(s),s=s.sibling;N=i,Bl=a,nt=u}bv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):bv(t)}}function bv(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&sa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}nt||e.flags&512&&$d(e)}catch(f){we(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function xv(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Ov(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{$d(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{$d(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var kP=Math.ceil,nc=Jn.ReactCurrentDispatcher,Om=Jn.ReactCurrentOwner,jt=Jn.ReactCurrentBatchConfig,ee=0,Ue=null,Ce=null,We=0,Rt=0,os=qr(0),Oe=0,ga=null,Ii=0,Hc=0,Nm=0,Bo=null,wt=null,Dm=0,$s=1/0,bn=null,rc=!1,Bd=null,Pr=null,ql=!1,_r=null,ic=0,qo=0,qd=null,Iu=-1,Su=0;function mt(){return ee&6?ke():Iu!==-1?Iu:Iu=ke()}function Cr(t){return t.mode&1?ee&2&&We!==0?We&-We:uP.transition!==null?(Su===0&&(Su=Zw()),Su):(t=re,t!==0||(t=window.event,t=t===void 0?16:o1(t.type)),t):1}function en(t,e,n,r){if(50<qo)throw qo=0,qd=null,Error(A(185));Qa(t,n,r),(!(ee&2)||t!==Ue)&&(t===Ue&&(!(ee&2)&&(Hc|=n),Oe===4&&ar(t,We)),At(t,r),n===1&&ee===0&&!(e.mode&1)&&($s=ke()+500,jc&&Hr()))}function At(t,e){var n=t.callbackNode;uR(t,e);var r=ju(t,t===Ue?We:0);if(r===0)n!==null&&jy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jy(n),e===1)t.tag===0?lP(Nv.bind(null,t)):A1(Nv.bind(null,t)),iP(function(){!(ee&6)&&Hr()}),n=null;else{switch(e1(r)){case 1:n=om;break;case 4:n=Xw;break;case 16:n=$u;break;case 536870912:n=Jw;break;default:n=$u}n=SE(n,yE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yE(t,e){if(Iu=-1,Su=0,ee&6)throw Error(A(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=ju(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sc(t,r);else{e=r;var i=ee;ee|=2;var s=_E();(Ue!==t||We!==e)&&(bn=null,$s=ke()+500,mi(t,e));do try{CP();break}catch(a){vE(t,a)}while(!0);_m(),nc.current=s,ee=i,Ce!==null?e=0:(Ue=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=yd(t),i!==0&&(r=i,e=Hd(t,i))),e===1)throw n=ga,mi(t,0),ar(t,r),At(t,ke()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!RP(i)&&(e=sc(t,r),e===2&&(s=yd(t),s!==0&&(r=s,e=Hd(t,s))),e===1))throw n=ga,mi(t,0),ar(t,r),At(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:ti(t,wt,bn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=Dm+500-ke(),10<e)){if(ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ad(ti.bind(null,t,wt,bn),e);break}ti(t,wt,bn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kP(r/1960))-r,10<r){t.timeoutHandle=Ad(ti.bind(null,t,wt,bn),r);break}ti(t,wt,bn);break;case 5:ti(t,wt,bn);break;default:throw Error(A(329))}}}return At(t,ke()),t.callbackNode===n?yE.bind(null,t):null}function Hd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(mi(t,e).flags|=256),t=sc(t,e),t!==2&&(e=wt,wt=n,e!==null&&Wd(e)),t}function Wd(t){wt===null?wt=t:wt.push.apply(wt,t)}function RP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Nm,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function Nv(t){if(ee&6)throw Error(A(327));ys();var e=ju(t,0);if(!(e&1))return At(t,ke()),null;var n=sc(t,e);if(t.tag!==0&&n===2){var r=yd(t);r!==0&&(e=r,n=Hd(t,r))}if(n===1)throw n=ga,mi(t,0),ar(t,e),At(t,ke()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,wt,bn),At(t,ke()),null}function Lm(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&($s=ke()+500,jc&&Hr())}}function Si(t){_r!==null&&_r.tag===0&&!(ee&6)&&ys();var e=ee;ee|=1;var n=jt.transition,r=re;try{if(jt.transition=null,re=1,t)return t()}finally{re=r,jt.transition=n,ee=e,!(ee&6)&&Hr()}}function Mm(){Rt=os.current,he(os)}function mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rP(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wu();break;case 3:Fs(),he(It),he(ot),Am();break;case 5:Sm(r);break;case 4:Fs();break;case 13:he(me);break;case 19:he(me);break;case 10:wm(r.type._context);break;case 22:case 23:Mm()}n=n.return}if(Ue=t,Ce=t=br(t.current,null),We=Rt=e,Oe=0,ga=null,Nm=Hc=Ii=0,wt=Bo=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function vE(t,e){do{var n=Ce;try{if(_m(),wu.current=tc,ec){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ec=!1}if(Ti=0,Fe=xe=ge=null,jo=!1,da=0,Om.current=null,n===null||n.return===null){Oe=1,ga=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=wv(o);if(p!==null){p.flags&=-257,Ev(p,o,a,s,e),p.mode&1&&_v(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){_v(s,u,e),Vm();break e}l=Error(A(426))}}else if(de&&a.mode&1){var _=wv(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ev(_,o,a,s,e),ym(Us(l,a));break e}}s=l=Us(l,a),Oe!==4&&(Oe=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=tE(s,l,e);fv(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pr===null||!Pr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=nE(s,a,e);fv(s,w);break e}}s=s.return}while(s!==null)}EE(n)}catch(E){e=E,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function _E(){var t=nc.current;return nc.current=tc,t===null?tc:t}function Vm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||!(Ii&268435455)&&!(Hc&268435455)||ar(Ue,We)}function sc(t,e){var n=ee;ee|=2;var r=_E();(Ue!==t||We!==e)&&(bn=null,mi(t,e));do try{PP();break}catch(i){vE(t,i)}while(!0);if(_m(),ee=n,nc.current=r,Ce!==null)throw Error(A(261));return Ue=null,We=0,Oe}function PP(){for(;Ce!==null;)wE(Ce)}function CP(){for(;Ce!==null&&!eR();)wE(Ce)}function wE(t){var e=IE(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?EE(t):Ce=e,Om.current=null}function EE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TP(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ce=null;return}}else if(n=EP(n,e,Rt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Oe===0&&(Oe=5)}function ti(t,e,n){var r=re,i=jt.transition;try{jt.transition=null,re=1,bP(t,e,n,r)}finally{jt.transition=i,re=r}return null}function bP(t,e,n,r){do ys();while(_r!==null);if(ee&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cR(t,s),t===Ue&&(Ce=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ql||(ql=!0,SE($u,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=re;re=1;var a=ee;ee|=4,Om.current=null,SP(t,n),mE(n,t),YR(Id),zu=!!Td,Id=Td=null,t.current=n,AP(n),tR(),ee=a,re=o,jt.transition=s}else t.current=n;if(ql&&(ql=!1,_r=t,ic=i),s=t.pendingLanes,s===0&&(Pr=null),iR(n.stateNode),At(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rc)throw rc=!1,t=Bd,Bd=null,t;return ic&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===qd?qo++:(qo=0,qd=t):qo=0,Hr(),null}function ys(){if(_r!==null){var t=e1(ic),e=jt.transition,n=re;try{if(jt.transition=null,re=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,ic=0,ee&6)throw Error(A(331));var i=ee;for(ee|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:zo(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var f=c.sibling,p=c.return;if(fE(c),c===u){N=null;break}if(f!==null){f.return=p,N=f;break}N=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qc(9,a)}}catch(E){we(a,a.return,E)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(ee=i,Hr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{re=n,jt.transition=e}}return!1}function Dv(t,e,n){e=Us(n,e),e=tE(t,e,1),t=Rr(t,e,1),e=mt(),t!==null&&(Qa(t,1,e),At(t,e))}function we(t,e,n){if(t.tag===3)Dv(t,t,n);else for(;e!==null;){if(e.tag===3){Dv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=Us(n,t),t=nE(e,t,1),e=Rr(e,t,1),t=mt(),e!==null&&(Qa(e,1,t),At(e,t));break}}e=e.return}}function xP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>ke()-Dm?mi(t,0):Nm|=n),At(t,e)}function TE(t,e){e===0&&(t.mode&1?(e=Dl,Dl<<=1,!(Dl&130023424)&&(Dl=4194304)):e=1);var n=mt();t=Bn(t,e),t!==null&&(Qa(t,e,n),At(t,n))}function OP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TE(t,n)}function NP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),TE(t,n)}var IE;IE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,wP(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,de&&e.flags&1048576&&k1(e,Qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tu(t,e),t=e.pendingProps;var i=Ls(e,ot.current);gs(e,n),i=Rm(null,e,r,t,i,n);var s=Pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,Ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tm(e),i.updater=zc,e.stateNode=i,i._reactInternals=e,Od(e,r,t,n),e=Ld(null,e,r,!0,s,n)):(e.tag=0,de&&s&&mm(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LP(r),t=Kt(r,t),i){case 0:e=Dd(null,e,r,t,n);break e;case 1:e=Sv(null,e,r,t,n);break e;case 11:e=Tv(null,e,r,t,n);break e;case 14:e=Iv(null,e,r,Kt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Dd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Sv(t,e,r,i,n);case 3:e:{if(oE(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,b1(t,e),Ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Us(Error(A(423)),e),e=Av(t,e,r,n,i);break e}else if(r!==i){i=Us(Error(A(424)),e),e=Av(t,e,r,n,i);break e}else for(Pt=kr(e.stateNode.containerInfo.firstChild),bt=e,de=!0,Xt=null,n=D1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),r===i){e=qn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return L1(e),t===null&&Cd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sd(r,i)?o=null:s!==null&&Sd(r,s)&&(e.flags|=32),sE(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Cd(e),null;case 13:return aE(t,e,n);case 4:return Im(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vs(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Tv(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(Yu,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!It.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Fn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=Bt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),Iv(t,e,r,i,n);case 15:return rE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Tu(t,e),e.tag=1,St(r)?(t=!0,Ku(e)):t=!1,gs(e,n),O1(e,r,i),Od(e,r,i,n),Ld(null,e,r,!0,t,n);case 19:return lE(t,e,n);case 22:return iE(t,e,n)}throw Error(A(156,e.tag))};function SE(t,e){return Yw(t,e)}function DP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new DP(t,e,n,r)}function Fm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LP(t){if(typeof t=="function")return Fm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rm)return 11;if(t===im)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Au(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return gi(n.children,i,s,e);case nm:o=8,i|=8;break;case nd:return t=$t(12,n,e,i|2),t.elementType=nd,t.lanes=s,t;case rd:return t=$t(13,n,e,i),t.elementType=rd,t.lanes=s,t;case id:return t=$t(19,n,e,i),t.elementType=id,t.lanes=s,t;case Nw:return Wc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xw:o=10;break e;case Ow:o=9;break e;case rm:o=11;break e;case im:o=14;break e;case ir:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gi(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Wc(t,e,n,r){return t=$t(22,t,r,e),t.elementType=Nw,t.lanes=n,t.stateNode={isHidden:!1},t}function Tf(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function If(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nf(0),this.expirationTimes=nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Um(t,e,n,r,i,s,o,a,l){return t=new MP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tm(s),t}function VP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function AE(t){if(!t)return Lr;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(St(n))return S1(t,n,e)}return e}function kE(t,e,n,r,i,s,o,a,l){return t=Um(n,r,!0,t,i,s,o,a,l),t.context=AE(null),n=t.current,r=mt(),i=Cr(n),s=Fn(r,i),s.callback=e??null,Rr(n,s,i),t.current.lanes=i,Qa(t,i,r),At(t,r),t}function Kc(t,e,n,r){var i=e.current,s=mt(),o=Cr(i);return n=AE(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(i,e,o),t!==null&&(en(t,i,o,s),_u(t,i,o)),o}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $m(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function FP(){return null}var RE=typeof reportError=="function"?reportError:function(t){console.error(t)};function jm(t){this._internalRoot=t}Gc.prototype.render=jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Kc(t,e,null,null)};Gc.prototype.unmount=jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Si(function(){Kc(null,t,null,null)}),e[zn]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=r1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&s1(t)}};function zm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function UP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=oc(o);s.call(u)}}var o=kE(e,r,t,0,null,!1,!1,"",Mv);return t._reactRootContainer=o,t[zn]=o.current,la(t.nodeType===8?t.parentNode:t),Si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=oc(l);a.call(u)}}var l=Um(t,0,!1,null,null,!1,!1,"",Mv);return t._reactRootContainer=l,t[zn]=l.current,la(t.nodeType===8?t.parentNode:t),Si(function(){Kc(e,l,n,r)}),l}function Yc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=oc(o);a.call(l)}}Kc(e,o,t,i)}else o=UP(n,e,t,i,r);return oc(o)}t1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(am(e,n|1),At(e,ke()),!(ee&6)&&($s=ke()+500,Hr()))}break;case 13:Si(function(){var r=Bn(t,1);if(r!==null){var i=mt();en(r,t,1,i)}}),$m(t,1)}};lm=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=mt();en(e,t,134217728,n)}$m(t,134217728)}};n1=function(t){if(t.tag===13){var e=Cr(t),n=Bn(t,e);if(n!==null){var r=mt();en(n,t,e,r)}$m(t,e)}};r1=function(){return re};i1=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};pd=function(t,e,n){switch(e){case"input":if(ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$c(r);if(!i)throw Error(A(90));Lw(r),ad(r,i)}}}break;case"textarea":Vw(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};qw=Lm;Hw=Si;var $P={usingClientEntryPoint:!1,Events:[Xa,es,$c,zw,Bw,Lm]},_o={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jP={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gw(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||FP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Mc=Hl.inject(jP),wn=Hl}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$P;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zm(e))throw Error(A(200));return VP(t,e,null,n)};Nt.createRoot=function(t,e){if(!zm(t))throw Error(A(299));var n=!1,r="",i=RE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Um(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,la(t.nodeType===8?t.parentNode:t),new jm(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Gw(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Si(t)};Nt.hydrate=function(t,e,n){if(!Qc(e))throw Error(A(200));return Yc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!zm(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=RE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kE(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,la(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Gc(e)};Nt.render=function(t,e,n){if(!Qc(e))throw Error(A(200));return Yc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!Qc(t))throw Error(A(40));return t._reactRootContainer?(Si(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Lm;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Yc(t,e,n,!1,r)};Nt.version="18.2.0-next-9e3b772b8-20220608";function PE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PE)}catch(t){console.error(t)}}PE(),kw.exports=Nt;var CE=kw.exports;const _3=Dc(CE);var Vv=CE;ed.createRoot=Vv.createRoot,ed.hydrateRoot=Vv.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ya.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const Fv="popstate";function zP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Kd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xE(i)}return qP(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BP(){return Math.random().toString(36).substr(2,8)}function Uv(t,e){return{usr:t.state,key:t.key,idx:e}}function Kd(t,e,n,r){return n===void 0&&(n=null),ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?eo(e):e,{state:n,key:e&&e.key||r||BP()})}function xE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function qP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ya({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=wr.Pop;let _=c(),m=_==null?null:_-u;u=_,l&&l({action:a,location:y.location,delta:m})}function f(_,m){a=wr.Push;let d=Kd(y.location,_,m);n&&n(d,_),u=c()+1;let g=Uv(d,u),w=y.createHref(d);try{o.pushState(g,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function p(_,m){a=wr.Replace;let d=Kd(y.location,_,m);n&&n(d,_),u=c();let g=Uv(d,u),w=y.createHref(d);o.replaceState(g,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function v(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:xE(_);return d=d.replace(/ $/,"%20"),Ne(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let y={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fv,h),l=_,()=>{i.removeEventListener(Fv,h),l=null}},createHref(_){return e(i,_)},createURL:v,encodeLocation(_){let m=v(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(_){return o.go(_)}};return y}var $v;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($v||($v={}));function HP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?eo(e):e,i=DE(r.pathname||"/",n);if(i==null)return null;let s=OE(t);WP(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=iC(i);o=tC(s[a],l)}return o}function OE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yi([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),OE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ZP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of NE(s.path))i(s,o,l)}),e}function NE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function WP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KP=/^:[\w-]+$/,GP=3,QP=2,YP=1,XP=10,JP=-2,jv=t=>t==="*";function ZP(t,e){let n=t.split("/"),r=n.length;return n.some(jv)&&(r+=JP),e&&(r+=QP),n.filter(i=>!jv(i)).reduce((i,s)=>i+(KP.test(s)?GP:s===""?YP:XP),r)}function eC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:yi([i,c.pathname]),pathnameBase:cC(yi([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=yi([i,c.pathnameBase]))}return s}function nC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let y=a[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return p&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function DE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function sC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?eo(t):t;return{pathname:n?n.startsWith("/")?n:oC(n,e):e,search:hC(r),hash:fC(i)}}function oC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lC(t,e){let n=aC(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=eo(t):(i=ya({},t),Ne(!i.pathname||!i.pathname.includes("?"),Sf("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Sf("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Sf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=sC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const yi=t=>t.join("/").replace(/\/\/+/g,"/"),cC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function dC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LE=["post","put","patch","delete"];new Set(LE);const pC=["get",...LE];new Set(pC);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}const Bm=P.createContext(null),mC=P.createContext(null),Xc=P.createContext(null),Jc=P.createContext(null),Wr=P.createContext({outlet:null,matches:[],isDataRoute:!1}),ME=P.createContext(null);function Zc(){return P.useContext(Jc)!=null}function qm(){return Zc()||Ne(!1),P.useContext(Jc).location}function VE(t){P.useContext(Xc).static||P.useLayoutEffect(t)}function FE(){let{isDataRoute:t}=P.useContext(Wr);return t?bC():gC()}function gC(){Zc()||Ne(!1);let t=P.useContext(Bm),{basename:e,future:n,navigator:r}=P.useContext(Xc),{matches:i}=P.useContext(Wr),{pathname:s}=qm(),o=JSON.stringify(lC(i,n.v7_relativeSplatPath)),a=P.useRef(!1);return VE(()=>{a.current=!0}),P.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=uC(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:yi([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}const yC=P.createContext(null);function vC(t){let e=P.useContext(Wr).outlet;return e&&P.createElement(yC.Provider,{value:t},e)}function w3(){let{matches:t}=P.useContext(Wr),e=t[t.length-1];return e?e.params:{}}function _C(t,e){return wC(t,e)}function wC(t,e,n,r){Zc()||Ne(!1);let{navigator:i}=P.useContext(Xc),{matches:s}=P.useContext(Wr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=qm(),c;if(e){var h;let _=typeof e=="string"?eo(e):e;l==="/"||(h=_.pathname)!=null&&h.startsWith(l)||Ne(!1),c=_}else c=u;let f=c.pathname||"/",p=f;if(l!=="/"){let _=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let v=HP(t,{pathname:p}),y=AC(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:yi([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:yi([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&y?P.createElement(Jc.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:wr.Pop}},y):y}function EC(){let t=CC(),e=dC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,null)}const TC=P.createElement(EC,null);class IC extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(Wr.Provider,{value:this.props.routeContext},P.createElement(ME.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SC(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(Bm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Wr.Provider,{value:e},r)}function AC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||Ne(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:f,errors:p}=n,v=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,f)=>{let p,v=!1,y=null,_=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||TC,l&&(u<0&&f===0?(xC("route-fallback",!1),v=!0,_=null):u===f&&(v=!0,_=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),d=()=>{let g;return p?g=y:v?g=_:h.route.Component?g=P.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,P.createElement(SC,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?P.createElement(IC,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var UE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(UE||{}),ac=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ac||{});function kC(t){let e=P.useContext(Bm);return e||Ne(!1),e}function RC(t){let e=P.useContext(mC);return e||Ne(!1),e}function PC(t){let e=P.useContext(Wr);return e||Ne(!1),e}function $E(t){let e=PC(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function CC(){var t;let e=P.useContext(ME),n=RC(ac.UseRouteError),r=$E(ac.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bC(){let{router:t}=kC(UE.UseNavigateStable),e=$E(ac.UseNavigateStable),n=P.useRef(!1);return VE(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,va({fromRouteId:e},s)))},[t,e])}const zv={};function xC(t,e,n){!e&&!zv[t]&&(zv[t]=!0)}function jE(t){return vC(t.context)}function _t(t){Ne(!1)}function OC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1,future:a}=t;Zc()&&Ne(!1);let l=e.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:s,static:o,future:va({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=eo(r));let{pathname:c="/",search:h="",hash:f="",state:p=null,key:v="default"}=r,y=P.useMemo(()=>{let _=DE(c,l);return _==null?null:{location:{pathname:_,search:h,hash:f,state:p,key:v},navigationType:i}},[l,c,h,f,p,v,i]);return y==null?null:P.createElement(Xc.Provider,{value:u},P.createElement(Jc.Provider,{children:n,value:y}))}function NC(t){let{children:e,location:n}=t;return _C(Gd(e),n)}new Promise(()=>{});function Gd(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,Gd(r.props.children,s));return}r.type!==_t&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const DC="6";try{window.__reactRouterVersion=DC}catch{}const LC="startTransition",Bv=Ok[LC];function MC(t){let{basename:e,children:n,future:r,window:i}=t,s=P.useRef();s.current==null&&(s.current=zP({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(h=>{u&&Bv?Bv(()=>l(h)):l(h)},[l,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.createElement(OC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var qv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qv||(qv={}));var Hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hv||(Hv={}));const VC="modulepreload",FC=function(t){return"/"+t},Wv={},an=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=FC(l),l in Wv)return;Wv[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(!!r)for(let p=s.length-1;p>=0;p--){const v=s[p];if(v.href===l&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":VC,u||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((p,v)=>{f.addEventListener("load",p),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var eh=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},th=typeof window>"u"||"Deno"in globalThis;function Gt(){}function UC(t,e){return typeof t=="function"?t(e):t}function $C(t){return typeof t=="number"&&t>=0&&t!==1/0}function jC(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Kv(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=t;if(o){if(r){if(e.queryHash!==Hm(o,e.options))return!1}else if(!wa(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||i&&i!==e.state.fetchStatus||s&&!s(e))}function Gv(t,e){const{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(_a(e.options.mutationKey)!==_a(s))return!1}else if(!wa(e.options.mutationKey,s))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function Hm(t,e){return((e==null?void 0:e.queryKeyHashFn)||_a)(t)}function _a(t){return JSON.stringify(t,(e,n)=>Qd(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function wa(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!wa(t[n],e[n])):!1}function zE(t,e){if(t===e)return t;const n=Qv(t)&&Qv(e);if(n||Qd(t)&&Qd(e)){const r=n?t:Object.keys(t),i=r.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let u=0;u<o;u++){const c=n?u:s[u];(!n&&r.includes(c)||n)&&t[c]===void 0&&e[c]===void 0?(a[c]=void 0,l++):(a[c]=zE(t[c],e[c]),a[c]===t[c]&&t[c]!==void 0&&l++)}return i===o&&l===i?t:a}return e}function E3(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function Qv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Qd(t){if(!Yv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Yv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Yv(t){return Object.prototype.toString.call(t)==="[object Object]"}function zC(t){return new Promise(e=>{setTimeout(e,t)})}function BC(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?zE(t,e):e}function qC(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function HC(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var Wm=Symbol(),hi,dr,As,lw,WC=(lw=class extends eh{constructor(){super();ne(this,hi,void 0);ne(this,dr,void 0);ne(this,As,void 0);K(this,As,e=>{if(!th&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){I(this,dr)||this.setEventListener(I(this,As))}onUnsubscribe(){var e;this.hasListeners()||((e=I(this,dr))==null||e.call(this),K(this,dr,void 0))}setEventListener(e){var n;K(this,As,e),(n=I(this,dr))==null||n.call(this),K(this,dr,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){I(this,hi)!==e&&(K(this,hi,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof I(this,hi)=="boolean"?I(this,hi):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},hi=new WeakMap,dr=new WeakMap,As=new WeakMap,lw),BE=new WC,ks,pr,Rs,uw,KC=(uw=class extends eh{constructor(){super();ne(this,ks,!0);ne(this,pr,void 0);ne(this,Rs,void 0);K(this,Rs,e=>{if(!th&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){I(this,pr)||this.setEventListener(I(this,Rs))}onUnsubscribe(){var e;this.hasListeners()||((e=I(this,pr))==null||e.call(this),K(this,pr,void 0))}setEventListener(e){var n;K(this,Rs,e),(n=I(this,pr))==null||n.call(this),K(this,pr,e(this.setOnline.bind(this)))}setOnline(e){I(this,ks)!==e&&(K(this,ks,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return I(this,ks)}},ks=new WeakMap,pr=new WeakMap,Rs=new WeakMap,uw),lc=new KC;function GC(t){return Math.min(1e3*2**t,3e4)}function qE(t){return(t??"online")==="online"?lc.isOnline():!0}var HE=class{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Af(t){return t instanceof HE}function WE(t){let e=!1,n=0,r=!1,i,s,o;const a=new Promise((m,d)=>{s=m,o=d}),l=m=>{var d;r||(v(new HE(m)),(d=t.abort)==null||d.call(t))},u=()=>{e=!0},c=()=>{e=!1},h=()=>BE.isFocused()&&(t.networkMode==="always"||lc.isOnline())&&t.canRun(),f=()=>qE(t.networkMode)&&t.canRun(),p=m=>{var d;r||(r=!0,(d=t.onSuccess)==null||d.call(t,m),i==null||i(),s(m))},v=m=>{var d;r||(r=!0,(d=t.onError)==null||d.call(t,m),i==null||i(),o(m))},y=()=>new Promise(m=>{var d;i=g=>{(r||h())&&m(g)},(d=t.onPause)==null||d.call(t)}).then(()=>{var m;i=void 0,r||(m=t.onContinue)==null||m.call(t)}),_=()=>{if(r)return;let m;try{m=t.fn()}catch(d){m=Promise.reject(d)}Promise.resolve(m).then(p).catch(d=>{var R;if(r)return;const g=t.retry??(th?0:3),w=t.retryDelay??GC,E=typeof w=="function"?w(n,d):w,k=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,d);if(e||!k){v(d);return}n++,(R=t.onFail)==null||R.call(t,n,d),zC(E).then(()=>h()?void 0:y()).then(()=>{e?v(d):_()})})};return{promise:a,cancel:l,continue:()=>(i==null||i(),a),cancelRetry:u,continueRetry:c,canStart:f,start:()=>(f()?_():y().then(_),a)}}function QC(){let t=[],e=0,n=f=>{f()},r=f=>{f()},i=f=>setTimeout(f,0);const s=f=>{i=f},o=f=>{let p;e++;try{p=f()}finally{e--,e||u()}return p},a=f=>{e?t.push(f):i(()=>{n(f)})},l=f=>(...p)=>{a(()=>{f(...p)})},u=()=>{const f=t;t=[],f.length&&i(()=>{r(()=>{f.forEach(p=>{n(p)})})})};return{batch:o,batchCalls:l,schedule:a,setNotifyFunction:f=>{n=f},setBatchNotifyFunction:f=>{r=f},setScheduler:s}}var ft=QC(),fi,cw,KE=(cw=class{constructor(){ne(this,fi,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),$C(this.gcTime)&&K(this,fi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(th?1/0:5*60*1e3))}clearGcTimeout(){I(this,fi)&&(clearTimeout(I(this,fi)),K(this,fi,void 0))}},fi=new WeakMap,cw),Ps,Cs,Mt,ut,Ha,di,Qt,Cn,hw,YC=(hw=class extends KE{constructor(n){super();ne(this,Qt);ne(this,Ps,void 0);ne(this,Cs,void 0);ne(this,Mt,void 0);ne(this,ut,void 0);ne(this,Ha,void 0);ne(this,di,void 0);K(this,di,!1),K(this,Ha,n.defaultOptions),this.setOptions(n.options),this.observers=[],K(this,Mt,n.cache),this.queryKey=n.queryKey,this.queryHash=n.queryHash,K(this,Ps,n.state||JC(this.options)),this.state=I(this,Ps),this.scheduleGc()}get meta(){return this.options.meta}setOptions(n){this.options={...I(this,Ha),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&I(this,Mt).remove(this)}setData(n,r){const i=BC(this.state.data,n,this.options);return Xe(this,Qt,Cn).call(this,{data:i,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),i}setState(n,r){Xe(this,Qt,Cn).call(this,{type:"setState",state:n,setStateOptions:r})}cancel(n){var i,s;const r=(i=I(this,ut))==null?void 0:i.promise;return(s=I(this,ut))==null||s.cancel(n),r?r.then(Gt).catch(Gt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(I(this,Ps))}isActive(){return this.observers.some(n=>n.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(n=0){return this.state.isInvalidated||this.state.data===void 0||!jC(this.state.dataUpdatedAt,n)}onFocus(){var r;const n=this.observers.find(i=>i.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(r=I(this,ut))==null||r.continue()}onOnline(){var r;const n=this.observers.find(i=>i.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(r=I(this,ut))==null||r.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),I(this,Mt).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(r=>r!==n),this.observers.length||(I(this,ut)&&(I(this,di)?I(this,ut).cancel({revert:!0}):I(this,ut).cancelRetry()),this.scheduleGc()),I(this,Mt).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Xe(this,Qt,Cn).call(this,{type:"invalidate"})}fetch(n,r){var c,h,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(I(this,ut))return I(this,ut).continueRetry(),I(this,ut).promise}if(n&&this.setOptions(n),!this.options.queryFn){const p=this.observers.find(v=>v.options.queryFn);p&&this.setOptions(p.options)}const i=new AbortController,s={queryKey:this.queryKey,meta:this.meta},o=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(K(this,di,!0),i.signal)})};o(s);const a=()=>!this.options.queryFn||this.options.queryFn===Wm?Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)):(K(this,di,!1),this.options.persister?this.options.persister(this.options.queryFn,s,this):this.options.queryFn(s)),l={fetchOptions:r,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:a};o(l),(c=this.options.behavior)==null||c.onFetch(l,this),K(this,Cs,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=l.fetchOptions)==null?void 0:h.meta))&&Xe(this,Qt,Cn).call(this,{type:"fetch",meta:(f=l.fetchOptions)==null?void 0:f.meta});const u=p=>{var v,y,_,m;Af(p)&&p.silent||Xe(this,Qt,Cn).call(this,{type:"error",error:p}),Af(p)||((y=(v=I(this,Mt).config).onError)==null||y.call(v,p,this),(m=(_=I(this,Mt).config).onSettled)==null||m.call(_,this.state.data,p,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return K(this,ut,WE({fn:l.fetchFn,abort:i.abort.bind(i),onSuccess:p=>{var v,y,_,m;if(p===void 0){u(new Error(`${this.queryHash} data is undefined`));return}this.setData(p),(y=(v=I(this,Mt).config).onSuccess)==null||y.call(v,p,this),(m=(_=I(this,Mt).config).onSettled)==null||m.call(_,p,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(p,v)=>{Xe(this,Qt,Cn).call(this,{type:"failed",failureCount:p,error:v})},onPause:()=>{Xe(this,Qt,Cn).call(this,{type:"pause"})},onContinue:()=>{Xe(this,Qt,Cn).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),I(this,ut).start()}},Ps=new WeakMap,Cs=new WeakMap,Mt=new WeakMap,ut=new WeakMap,Ha=new WeakMap,di=new WeakMap,Qt=new WeakSet,Cn=function(n){const r=i=>{switch(n.type){case"failed":return{...i,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...XC(i.data,this.options),fetchMeta:n.meta??null};case"success":return{...i,data:n.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=n.error;return Af(s)&&s.revert&&I(this,Cs)?{...I(this,Cs),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...n.state}}};this.state=r(this.state),ft.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),I(this,Mt).notify({query:this,type:"updated",action:n})})},hw);function XC(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:qE(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function JC(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var cn,fw,ZC=(fw=class extends eh{constructor(e={}){super();ne(this,cn,void 0);this.config=e,K(this,cn,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??Hm(i,n);let o=this.get(s);return o||(o=new YC({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){I(this,cn).has(e.queryHash)||(I(this,cn).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=I(this,cn).get(e.queryHash);n&&(e.destroy(),n===e&&I(this,cn).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){ft.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return I(this,cn).get(e)}getAll(){return[...I(this,cn).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Kv(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Kv(e,r)):n}notify(e){ft.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){ft.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){ft.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},cn=new WeakMap,fw),hn,ct,pi,fn,rr,dw,e2=(dw=class extends KE{constructor(n){super();ne(this,fn);ne(this,hn,void 0);ne(this,ct,void 0);ne(this,pi,void 0);this.mutationId=n.mutationId,K(this,ct,n.mutationCache),K(this,hn,[]),this.state=n.state||t2(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){I(this,hn).includes(n)||(I(this,hn).push(n),this.clearGcTimeout(),I(this,ct).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){K(this,hn,I(this,hn).filter(r=>r!==n)),this.scheduleGc(),I(this,ct).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){I(this,hn).length||(this.state.status==="pending"?this.scheduleGc():I(this,ct).remove(this))}continue(){var n;return((n=I(this,pi))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var s,o,a,l,u,c,h,f,p,v,y,_,m,d,g,w,E,k,R,b;K(this,pi,WE({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(F,j)=>{Xe(this,fn,rr).call(this,{type:"failed",failureCount:F,error:j})},onPause:()=>{Xe(this,fn,rr).call(this,{type:"pause"})},onContinue:()=>{Xe(this,fn,rr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>I(this,ct).canRun(this)}));const r=this.state.status==="pending",i=!I(this,pi).canStart();try{if(!r){Xe(this,fn,rr).call(this,{type:"pending",variables:n,isPaused:i}),await((o=(s=I(this,ct).config).onMutate)==null?void 0:o.call(s,n,this));const j=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,n));j!==this.state.context&&Xe(this,fn,rr).call(this,{type:"pending",context:j,variables:n,isPaused:i})}const F=await I(this,pi).start();return await((c=(u=I(this,ct).config).onSuccess)==null?void 0:c.call(u,F,n,this.state.context,this)),await((f=(h=this.options).onSuccess)==null?void 0:f.call(h,F,n,this.state.context)),await((v=(p=I(this,ct).config).onSettled)==null?void 0:v.call(p,F,null,this.state.variables,this.state.context,this)),await((_=(y=this.options).onSettled)==null?void 0:_.call(y,F,null,n,this.state.context)),Xe(this,fn,rr).call(this,{type:"success",data:F}),F}catch(F){try{throw await((d=(m=I(this,ct).config).onError)==null?void 0:d.call(m,F,n,this.state.context,this)),await((w=(g=this.options).onError)==null?void 0:w.call(g,F,n,this.state.context)),await((k=(E=I(this,ct).config).onSettled)==null?void 0:k.call(E,void 0,F,this.state.variables,this.state.context,this)),await((b=(R=this.options).onSettled)==null?void 0:b.call(R,void 0,F,n,this.state.context)),F}finally{Xe(this,fn,rr).call(this,{type:"error",error:F})}}finally{I(this,ct).runNext(this)}}},hn=new WeakMap,ct=new WeakMap,pi=new WeakMap,fn=new WeakSet,rr=function(n){const r=i=>{switch(n.type){case"failed":return{...i,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...i,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:n.error,failureCount:i.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=r(this.state),ft.batch(()=>{I(this,hn).forEach(i=>{i.onMutationUpdate(n)}),I(this,ct).notify({mutation:this,type:"updated",action:n})})},dw);function t2(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var kt,Wa,pw,n2=(pw=class extends eh{constructor(e={}){super();ne(this,kt,void 0);ne(this,Wa,void 0);this.config=e,K(this,kt,new Map),K(this,Wa,Date.now())}build(e,n,r){const i=new e2({mutationCache:this,mutationId:++Pl(this,Wa)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){const n=Wl(e),r=I(this,kt).get(n)??[];r.push(e),I(this,kt).set(n,r),this.notify({type:"added",mutation:e})}remove(e){var r;const n=Wl(e);if(I(this,kt).has(n)){const i=(r=I(this,kt).get(n))==null?void 0:r.filter(s=>s!==e);i&&(i.length===0?I(this,kt).delete(n):I(this,kt).set(n,i))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const n=(r=I(this,kt).get(Wl(e)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===e}runNext(e){var r;const n=(r=I(this,kt).get(Wl(e)))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){ft.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...I(this,kt).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Gv(n,r))}findAll(e={}){return this.getAll().filter(n=>Gv(e,n))}notify(e){ft.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return ft.batch(()=>Promise.all(e.map(n=>n.continue().catch(Gt))))}},kt=new WeakMap,Wa=new WeakMap,pw);function Wl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function r2(t){return{onFetch:(e,n)=>{const r=async()=>{var v,y,_,m,d;const i=e.options,s=(_=(y=(v=e.fetchOptions)==null?void 0:v.meta)==null?void 0:y.fetchMore)==null?void 0:_.direction,o=((m=e.state.data)==null?void 0:m.pages)||[],a=((d=e.state.data)==null?void 0:d.pageParams)||[],l={pages:[],pageParams:[]};let u=!1;const c=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},h=e.options.queryFn&&e.options.queryFn!==Wm?e.options.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`)),f=async(g,w,E)=>{if(u)return Promise.reject();if(w==null&&g.pages.length)return Promise.resolve(g);const k={queryKey:e.queryKey,pageParam:w,direction:E?"backward":"forward",meta:e.options.meta};c(k);const R=await h(k),{maxPages:b}=e.options,F=E?HC:qC;return{pages:F(g.pages,R,b),pageParams:F(g.pageParams,w,b)}};let p;if(s&&o.length){const g=s==="backward",w=g?i2:Xv,E={pages:o,pageParams:a},k=w(i,E);p=await f(E,k,g)}else{p=await f(l,a[0]??i.initialPageParam);const g=t??o.length;for(let w=1;w<g;w++){const E=Xv(i,p);p=await f(p,E)}}return p};e.options.persister?e.fetchFn=()=>{var i,s;return(s=(i=e.options).persister)==null?void 0:s.call(i,r,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=r}}}function Xv(t,{pages:e,pageParams:n}){const r=e.length-1;return t.getNextPageParam(e[r],e,n[r],n)}function i2(t,{pages:e,pageParams:n}){var r;return(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n)}var _e,mr,gr,bs,xs,yr,Os,Ns,mw,s2=(mw=class{constructor(t={}){ne(this,_e,void 0);ne(this,mr,void 0);ne(this,gr,void 0);ne(this,bs,void 0);ne(this,xs,void 0);ne(this,yr,void 0);ne(this,Os,void 0);ne(this,Ns,void 0);K(this,_e,t.queryCache||new ZC),K(this,mr,t.mutationCache||new n2),K(this,gr,t.defaultOptions||{}),K(this,bs,new Map),K(this,xs,new Map),K(this,yr,0)}mount(){Pl(this,yr)._++,I(this,yr)===1&&(K(this,Os,BE.subscribe(async t=>{t&&(await this.resumePausedMutations(),I(this,_e).onFocus())})),K(this,Ns,lc.subscribe(async t=>{t&&(await this.resumePausedMutations(),I(this,_e).onOnline())})))}unmount(){var t,e;Pl(this,yr)._--,I(this,yr)===0&&((t=I(this,Os))==null||t.call(this),K(this,Os,void 0),(e=I(this,Ns))==null||e.call(this),K(this,Ns,void 0))}isFetching(t){return I(this,_e).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return I(this,mr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=I(this,_e).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),r=I(this,_e).build(this,n);return t.revalidateIfStale&&r.isStaleByTime(n.staleTime)&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return I(this,_e).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=I(this,_e).get(r.queryHash),s=i==null?void 0:i.state.data,o=UC(e,s);if(o!==void 0)return I(this,_e).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return ft.batch(()=>I(this,_e).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=I(this,_e).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=I(this,_e);ft.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=I(this,_e),r={type:"active",...t};return ft.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=ft.batch(()=>I(this,_e).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(Gt).catch(Gt)}invalidateQueries(t={},e={}){return ft.batch(()=>{if(I(this,_e).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=ft.batch(()=>I(this,_e).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(Gt)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(Gt)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=I(this,_e).build(this,e);return n.isStaleByTime(e.staleTime)?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Gt).catch(Gt)}fetchInfiniteQuery(t){return t.behavior=r2(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Gt).catch(Gt)}resumePausedMutations(){return lc.isOnline()?I(this,mr).resumePausedMutations():Promise.resolve()}getQueryCache(){return I(this,_e)}getMutationCache(){return I(this,mr)}getDefaultOptions(){return I(this,gr)}setDefaultOptions(t){K(this,gr,t)}setQueryDefaults(t,e){I(this,bs).set(_a(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...I(this,bs).values()];let n={};return e.forEach(r=>{wa(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){I(this,xs).set(_a(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...I(this,xs).values()];let n={};return e.forEach(r=>{wa(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...I(this,gr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Hm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Wm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...I(this,gr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){I(this,_e).clear(),I(this,mr).clear()}},_e=new WeakMap,mr=new WeakMap,gr=new WeakMap,bs=new WeakMap,xs=new WeakMap,yr=new WeakMap,Os=new WeakMap,Ns=new WeakMap,mw),GE=P.createContext(void 0),S3=t=>{const e=P.useContext(GE);if(t)return t;if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},o2=({client:t,children:e})=>(P.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),L.jsx(GE.Provider,{value:t,children:e})),a2=function(){return null},Jv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},l2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},YE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(QE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new u2;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c2=function(t){const e=QE(t);return YE.encodeByteArray(e,!0)},uc=function(t){return c2(t).replace(/\./g,"")},XE=function(t){try{return YE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=()=>h2().__FIREBASE_DEFAULTS__,d2=()=>{if(typeof process>"u"||typeof Jv>"u")return;const t=Jv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},p2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&XE(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return f2()||d2()||p2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JE=t=>{var e,n;return(n=(e=nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZE=t=>{const e=JE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eT=()=>{var t;return(t=nh())===null||t===void 0?void 0:t.config},tT=t=>{var e;return(e=nh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function y2(){var t;const e=(t=nh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function v2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w2(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function E2(){return!y2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T2(){try{return typeof indexedDB=="object"}catch{return!1}}function I2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=S2,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?A2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,a,r)}}function A2(t,e){return t.replace(k2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const k2=/\{\$([^}]+)}/g;function R2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zv(s)&&Zv(o)){if(!cc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function P2(t,e){const n=new C2(t,e);return n.subscribe.bind(n)}class C2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");b2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kf),i.error===void 0&&(i.error=kf),i.complete===void 0&&(i.complete=kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new m2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N2(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:O2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function O2(t){return t===ni?void 0:t}function N2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new x2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const L2={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},M2=J.INFO,V2={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},F2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=V2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Km{constructor(e){this.name=e,this._logLevel=M2,this._logHandler=F2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const U2=(t,e)=>e.some(n=>t instanceof n);let e_,t_;function $2(){return e_||(e_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j2(){return t_||(t_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,Yd=new WeakMap,iT=new WeakMap,Rf=new WeakMap,Gm=new WeakMap;function z2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rT.set(n,t)}).catch(()=>{}),Gm.set(e,t),e}function B2(t){if(Yd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q2(t){Xd=t(Xd)}function H2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pf(this),e,...n);return iT.set(r,e.sort?e.sort():[e]),xr(r)}:j2().includes(t)?function(...e){return t.apply(Pf(this),e),xr(rT.get(this))}:function(...e){return xr(t.apply(Pf(this),e))}}function W2(t){return typeof t=="function"?H2(t):(t instanceof IDBTransaction&&B2(t),U2(t,$2())?new Proxy(t,Xd):t)}function xr(t){if(t instanceof IDBRequest)return z2(t);if(Rf.has(t))return Rf.get(t);const e=W2(t);return e!==t&&(Rf.set(t,e),Gm.set(e,t)),e}const Pf=t=>Gm.get(t);function K2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const G2=["get","getKey","getAll","getAllKeys","count"],Q2=["put","add","delete","clear"],Cf=new Map;function n_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cf.get(e))return Cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Q2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||G2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cf.set(e,s),s}q2(t=>({...t,get:(e,n,r)=>n_(e,n)||t.get(e,n,r),has:(e,n)=>!!n_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function X2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",r_="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Km("@firebase/app"),J2="@firebase/app-compat",Z2="@firebase/analytics-compat",eb="@firebase/analytics",tb="@firebase/app-check-compat",nb="@firebase/app-check",rb="@firebase/auth",ib="@firebase/auth-compat",sb="@firebase/database",ob="@firebase/database-compat",ab="@firebase/functions",lb="@firebase/functions-compat",ub="@firebase/installations",cb="@firebase/installations-compat",hb="@firebase/messaging",fb="@firebase/messaging-compat",db="@firebase/performance",pb="@firebase/performance-compat",mb="@firebase/remote-config",gb="@firebase/remote-config-compat",yb="@firebase/storage",vb="@firebase/storage-compat",_b="@firebase/firestore",wb="@firebase/firestore-compat",Eb="firebase",Tb="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="[DEFAULT]",Ib={[Jd]:"fire-core",[J2]:"fire-core-compat",[eb]:"fire-analytics",[Z2]:"fire-analytics-compat",[nb]:"fire-app-check",[tb]:"fire-app-check-compat",[rb]:"fire-auth",[ib]:"fire-auth-compat",[sb]:"fire-rtdb",[ob]:"fire-rtdb-compat",[ab]:"fire-fn",[lb]:"fire-fn-compat",[ub]:"fire-iid",[cb]:"fire-iid-compat",[hb]:"fire-fcm",[fb]:"fire-fcm-compat",[db]:"fire-perf",[pb]:"fire-perf-compat",[mb]:"fire-rc",[gb]:"fire-rc-compat",[yb]:"fire-gcs",[vb]:"fire-gcs-compat",[_b]:"fire-fst",[wb]:"fire-fst-compat","fire-js":"fire-js",[Eb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map,Sb=new Map,ep=new Map;function i_(t,e){try{t.container.addComponent(e)}catch(n){Ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(ep.has(e))return Ai.debug(`There were multiple attempts to register component ${e}.`),!1;ep.set(e,t);for(const n of hc.values())i_(n,t);for(const n of Sb.values())i_(n,t);return!0}function rh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new Za("app","Firebase",Ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=Tb;function sT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=eT()),!n)throw Or.create("no-options");const s=hc.get(i);if(s){if(cc(n,s.options)&&cc(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new D2(i);for(const l of ep.values())o.addComponent(l);const a=new kb(n,r,o);return hc.set(i,a),a}function Qm(t=Zd){const e=hc.get(t);if(!e&&t===Zd&&eT())return sT();if(!e)throw Or.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let i=(r=Ib[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ai.warn(a.join(" "));return}ki(new Mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="firebase-heartbeat-database",Pb=1,Ea="firebase-heartbeat-store";let bf=null;function oT(){return bf||(bf=K2(Rb,Pb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),bf}async function Cb(t){try{const n=(await oT()).transaction(Ea),r=await n.objectStore(Ea).get(aT(t));return await n.done,r}catch(e){if(e instanceof Pn)Ai.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ai.warn(n.message)}}}async function s_(t,e){try{const r=(await oT()).transaction(Ea,"readwrite");await r.objectStore(Ea).put(e,aT(t)),await r.done}catch(n){if(n instanceof Pn)Ai.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ai.warn(r.message)}}}function aT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=1024,xb=30*24*60*60*1e3;class Ob{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Db(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=o_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=o_(),{heartbeatsToSend:r,unsentEntries:i}=Nb(this._heartbeatsCache.heartbeats),s=uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function o_(){return new Date().toISOString().substring(0,10)}function Nb(t,e=bb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),a_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),a_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T2()?I2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function a_(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){ki(new Mr("platform-logger",e=>new Y2(e),"PRIVATE")),ki(new Mr("heartbeat",e=>new Ob(e),"PRIVATE")),Tn(Jd,r_,t),Tn(Jd,r_,"esm2017"),Tn("fire-js","")}Lb("");var Mb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,Ym=Ym||{},B=Mb||self;function ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function tl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Vb(t){return Object.prototype.hasOwnProperty.call(t,xf)&&t[xf]||(t[xf]=++Fb)}var xf="closure_uid_"+(1e9*Math.random()>>>0),Fb=0;function Ub(t,e,n){return t.call.apply(t.bind,arguments)}function $b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=Ub:it=$b,it.apply(null,arguments)}function Kl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Kr(){this.s=this.s,this.o=this.o}var jb=0;Kr.prototype.s=!1;Kr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),jb!=0)&&Vb(this)};Kr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Xm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function l_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ih(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var zb=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};B.addEventListener("test",n,e),B.removeEventListener("test",n,e)}catch{}return t}();function Ta(t){return/^[\s\xa0]*$/.test(t)}function sh(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return sh().indexOf(t)!=-1}function Jm(t){return Jm[" "](t),t}Jm[" "]=function(){};function Bb(t,e){var n=Lx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var qb=pn("Opera"),js=pn("Trident")||pn("MSIE"),uT=pn("Edge"),tp=uT||js,cT=pn("Gecko")&&!(sh().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),Hb=sh().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function hT(){var t=B.document;return t?t.documentMode:void 0}var np;e:{var Of="",Nf=function(){var t=sh();if(cT)return/rv:([^\);]+)(\)|;)/.exec(t);if(uT)return/Edge\/([\d\.]+)/.exec(t);if(js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Hb)return/WebKit\/(\S+)/.exec(t);if(qb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nf&&(Of=Nf?Nf[1]:""),js){var Df=hT();if(Df!=null&&Df>parseFloat(Of)){np=String(Df);break e}}np=Of}var rp;if(B.document&&js){var u_=hT();rp=u_||parseInt(np,10)||void 0}else rp=void 0;var Wb=rp;function Ia(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cT){e:{try{Jm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Kb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ia.$.h.call(this)}}je(Ia,st);var Kb={2:"touch",3:"pen",4:"mouse"};Ia.prototype.h=function(){Ia.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nl="closure_listenable_"+(1e6*Math.random()|0),Gb=0;function Qb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Gb,this.fa=this.ia=!1}function oh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Zm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Yb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function fT(t){const e={};for(const n in t)e[n]=t[n];return e}const c_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<c_.length;s++)n=c_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ah(t){this.src=t,this.g={},this.h=0}ah.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Qb(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function ip(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=lT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(oh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var eg="closure_lm_"+(1e6*Math.random()|0),Lf={};function pT(t,e,n,r,i){if(r&&r.once)return gT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pT(t,e[s],n,r,i);return null}return n=rg(n),t&&t[nl]?t.O(e,n,tl(r)?!!r.capture:!!r,i):mT(t,e,n,!1,r,i)}function mT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=tl(i)?!!i.capture:!!i,a=ng(t);if(a||(t[eg]=a=new ah(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Xb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)zb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Xb(){function t(n){return e.call(t.src,t.listener,n)}const e=Jb;return t}function gT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gT(t,e[s],n,r,i);return null}return n=rg(n),t&&t[nl]?t.P(e,n,tl(r)?!!r.capture:!!r,i):mT(t,e,n,!0,r,i)}function yT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)yT(t,e[s],n,r,i);else r=tl(r)?!!r.capture:!!r,n=rg(n),t&&t[nl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sp(s,n,r,i),-1<n&&(oh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ng(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sp(e,n,r,i)),(n=-1<t?e[t]:null)&&tg(n))}function tg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[nl])ip(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ng(e))?(ip(n,t),n.h==0&&(n.src=null,e[eg]=null)):oh(t)}}}function vT(t){return t in Lf?Lf[t]:Lf[t]="on"+t}function Jb(t,e){if(t.fa)t=!0;else{e=new Ia(e,this);var n=t.listener,r=t.la||t.src;t.ia&&tg(t),t=n.call(r,e)}return t}function ng(t){return t=t[eg],t instanceof ah?t:null}var Mf="__closure_events_fn_"+(1e9*Math.random()>>>0);function rg(t){return typeof t=="function"?t:(t[Mf]||(t[Mf]=function(e){return t.handleEvent(e)}),t[Mf])}function $e(){Kr.call(this),this.i=new ah(this),this.S=this,this.J=null}je($e,Kr);$e.prototype[nl]=!0;$e.prototype.removeEventListener=function(t,e,n,r){yT(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(r,t),dT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Gl(o,r,!0,e)&&i}if(o=e.g=t,i=Gl(o,r,!0,e)&&i,i=Gl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Gl(o,r,!1,e)&&i}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oh(n[r]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Gl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ip(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ig=B.JSON.stringify;class Zb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ex(){var t=sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tx{constructor(){this.h=this.g=null}add(e,n){const r=_T.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _T=new Zb(()=>new nx,t=>t.reset());class nx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rx(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ix(t){B.setTimeout(()=>{throw t},0)}let Sa,Aa=!1,sg=new tx,wT=()=>{const t=B.Promise.resolve(void 0);Sa=()=>{t.then(sx)}};var sx=()=>{for(var t;t=ex();){try{t.h.call(t.g)}catch(n){ix(n)}var e=_T;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Aa=!1};function lh(t,e){$e.call(this),this.h=t||1,this.g=e||B,this.j=it(this.qb,this),this.l=Date.now()}je(lh,$e);C=lh.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(og(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function og(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}C.N=function(){lh.$.N.call(this),og(this),delete this.g};function ag(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function ET(t){t.g=ag(()=>{t.g=null,t.i&&(t.i=!1,ET(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ox extends Kr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ET(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ka(t){Kr.call(this),this.h=t,this.g={}}je(ka,Kr);var h_=[];function TT(t,e,n,r){Array.isArray(n)||(n&&(h_[0]=n.toString()),n=h_);for(var i=0;i<n.length;i++){var s=pT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function IT(t){Zm(t.g,function(e,n){this.g.hasOwnProperty(n)&&tg(e)},t),t.g={}}ka.prototype.N=function(){ka.$.N.call(this),IT(this)};ka.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function uh(){this.g=!0}uh.prototype.Ea=function(){this.g=!1};function ax(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function lx(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function as(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cx(t,n)+(r?" "+r:"")})}function ux(t,e){t.info(function(){return"TIMEOUT: "+e})}uh.prototype.info=function(){};function cx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ig(n)}catch{return e}}var Fi={},f_=null;function ch(){return f_=f_||new $e}Fi.Ta="serverreachability";function ST(t){st.call(this,Fi.Ta,t)}je(ST,st);function Ra(t){const e=ch();Ke(e,new ST(e))}Fi.STAT_EVENT="statevent";function AT(t,e){st.call(this,Fi.STAT_EVENT,t),this.stat=e}je(AT,st);function dt(t){const e=ch();Ke(e,new AT(e,t))}Fi.Ua="timingevent";function kT(t,e){st.call(this,Fi.Ua,t),this.size=e}je(kT,st);function rl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},RT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lg(){}lg.prototype.h=null;function d_(t){return t.h||(t.h=t.i())}function PT(){}var il={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ug(){st.call(this,"d")}je(ug,st);function cg(){st.call(this,"c")}je(cg,st);var op;function fh(){}je(fh,lg);fh.prototype.g=function(){return new XMLHttpRequest};fh.prototype.i=function(){return{}};op=new fh;function sl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ka(this),this.P=hx,t=tp?125:void 0,this.V=new lh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new CT}function CT(){this.i=null,this.g="",this.h=!1}var hx=45e3,bT={},ap={};C=sl.prototype;C.setTimeout=function(t){this.P=t};function lp(t,e,n){t.L=1,t.A=ph(Hn(e)),t.u=n,t.S=!0,xT(t,null)}function xT(t,e){t.G=Date.now(),ol(t),t.B=Hn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),UT(n.i,"t",r),t.o=0,n=t.l.J,t.h=new CT,t.g=oI(t.l,n?e:null,!t.u),0<t.O&&(t.M=new ox(it(t.Pa,t,t.g),t.O)),TT(t.U,t.g,"readystatechange",t.nb),e=t.I?fT(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ra(),ax(t.j,t.v,t.B,t.m,t.W,t.u)}C.nb=function(t){t=t.target;const e=this.M;e&&gn(t)==3?e.l():this.Pa(t)};C.Pa=function(t){try{if(t==this.g)e:{const c=gn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||tp||this.g&&(this.h.h||this.g.ja()||y_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ra(3):Ra(2)),dh(this);var n=this.g.da();this.ca=n;t:if(OT(this)){var r=y_(this.g);t="";var i=r.length,s=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oi(this),Ho(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,lx(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ta(a)){var u=a;break t}}u=null}if(n=u)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,up(this,n);else{this.i=!1,this.s=3,dt(12),oi(this),Ho(this);break e}}this.S?(NT(this,c,o),tp&&this.i&&c==3&&(TT(this.U,this.V,"tick",this.mb),this.V.start())):(as(this.j,this.m,o,null),up(this,o)),c==4&&oi(this),this.i&&!this.J&&(c==4?nI(this.l,this):(this.i=!1,ol(this)))}else Ox(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),oi(this),Ho(this)}}}catch{}finally{}};function OT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function NT(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=fx(t,n),i==ap){e==4&&(t.s=4,dt(14),r=!1),as(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bT){t.s=4,dt(15),as(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else as(t.j,t.m,i,null),up(t,i);OT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),gg(e),e.M=!0,dt(11))):(as(t.j,t.m,n,"[Invalid Chunked Response]"),oi(t),Ho(t))}C.mb=function(){if(this.g){var t=gn(this.g),e=this.g.ja();this.o<e.length&&(dh(this),NT(this,t,e),this.i&&t!=4&&ol(this))}};function fx(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ap:(n=Number(e.substring(n,r)),isNaN(n)?bT:(r+=1,r+n>e.length?ap:(e=e.slice(r,r+n),t.o=r+n,e)))}C.cancel=function(){this.J=!0,oi(this)};function ol(t){t.Y=Date.now()+t.P,DT(t,t.P)}function DT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=rl(it(t.lb,t),e)}function dh(t){t.C&&(B.clearTimeout(t.C),t.C=null)}C.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(ux(this.j,this.B),this.L!=2&&(Ra(),dt(17)),oi(this),this.s=2,Ho(this)):DT(this,this.Y-t)};function Ho(t){t.l.H==0||t.J||nI(t.l,t)}function oi(t){dh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,og(t.V),IT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function up(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cp(n.i,t))){if(!t.K&&cp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)pc(n),yh(n);else break e;mg(n),dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=rl(it(n.ib,n),6e3));if(1>=zT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ai(n,11)}else if((t.K||n.g==t)&&pc(n),!Ta(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(hg(s,s.h),s.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,ue(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=sI(r,r.J?r.pa:null,r.Y),o.K){BT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(dh(a),ol(a)),r.g=o}else eI(r);0<n.j.length&&vh(n)}else u[0]!="stop"&&u[0]!="close"||ai(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ai(n,7):pg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ra(4)}catch{}}function dx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ih(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function px(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function LT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=px(t),r=dx(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var MT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vi){this.h=t.h,fc(this,t.j),this.s=t.s,this.g=t.g,dc(this,t.m),this.l=t.l;var e=t.i,n=new Pa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),p_(this,n),this.o=t.o}else t&&(e=String(t).match(MT))?(this.h=!1,fc(this,e[1]||"",!0),this.s=bo(e[2]||""),this.g=bo(e[3]||"",!0),dc(this,e[4]),this.l=bo(e[5]||"",!0),p_(this,e[6]||"",!0),this.o=bo(e[7]||"")):(this.h=!1,this.i=new Pa(null,this.h))}vi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xo(e,m_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xo(e,m_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xo(n,n.charAt(0)=="/"?vx:yx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xo(n,wx)),t.join("")};function Hn(t){return new vi(t)}function fc(t,e,n){t.j=n?bo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function p_(t,e,n){e instanceof Pa?(t.i=e,Ex(t.i,t.h)):(n||(e=xo(e,_x)),t.i=new Pa(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function ph(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var m_=/[#\/\?@]/g,yx=/[#\?:]/g,vx=/[#\?]/g,_x=/[#\?@]/g,wx=/#/g;function Pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gr(t){t.g||(t.g=new Map,t.h=0,t.i&&mx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=Pa.prototype;C.add=function(t,e){Gr(this),this.i=null,t=to(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function VT(t,e){Gr(t),e=to(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function FT(t,e){return Gr(t),e=to(t,e),t.g.has(e)}C.forEach=function(t,e){Gr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};C.ta=function(){Gr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};C.Z=function(t){Gr(this);let e=[];if(typeof t=="string")FT(this,t)&&(e=e.concat(this.g.get(to(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return Gr(this),this.i=null,t=to(this,t),FT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function UT(t,e,n){VT(t,e),0<n.length&&(t.i=null,t.g.set(to(t,e),Xm(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function to(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ex(t,e){e&&!t.j&&(Gr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(VT(this,r),UT(this,i,n))},t)),t.j=e}var Tx=class{constructor(t,e){this.g=t,this.map=e}};function $T(t){this.l=t||Ix,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ix=10;function jT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zT(t){return t.h?1:t.g?t.g.size:0}function cp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hg(t,e){t.g?t.g.add(e):t.h=e}function BT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$T.prototype.cancel=function(){if(this.i=qT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Xm(t.i)}var Sx=class{stringify(t){return B.JSON.stringify(t,void 0)}parse(t){return B.JSON.parse(t,void 0)}};function Ax(){this.g=new Sx}function kx(t,e,n){const r=n||"";try{LT(t,function(i,s){let o=i;tl(i)&&(o=ig(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rx(t,e){const n=new uh;if(B.Image){const r=new Image;r.onload=Kl(Ql,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Kl(Ql,n,r,"TestLoadImage: error",!1,e),r.onabort=Kl(Ql,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Kl(Ql,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ql(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function al(t){this.l=t.ec||null,this.j=t.ob||!1}je(al,lg);al.prototype.g=function(){return new mh(this.l,this.j)};al.prototype.i=function(t){return function(){return t}}({});function mh(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=fg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(mh,$e);var fg=0;C=mh.prototype;C.open=function(t,e){if(this.readyState!=fg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ca(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||B).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ll(this)),this.readyState=fg};C.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ca(this)),this.g&&(this.readyState=3,Ca(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function HT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}C.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ll(this):Ca(this),this.readyState==3&&HT(this)}};C.Za=function(t){this.g&&(this.response=this.responseText=t,ll(this))};C.Ya=function(t){this.g&&(this.response=t,ll(this))};C.ka=function(){this.g&&ll(this)};function ll(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ca(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ca(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Px=B.JSON.parse;function Te(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=WT,this.L=this.M=!1}je(Te,$e);var WT="",Cx=/^https?$/i,bx=["POST","PUT"];C=Te.prototype;C.Oa=function(t){this.M=t};C.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():op.g(),this.C=this.u?d_(this.u):d_(op),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){g_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=lT(bx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{QT(this),0<this.B&&((this.L=xx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=ag(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){g_(this,s)}};function xx(t){return js&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.ua=function(){typeof Ym<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function g_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,KT(t),gh(t)}function KT(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),gh(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gh(this,!0)),Te.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?GT(this):this.kb())};C.kb=function(){GT(this)};function GT(t){if(t.h&&typeof Ym<"u"&&(!t.C[1]||gn(t)!=4||t.da()!=2)){if(t.v&&gn(t)==4)ag(t.La,0,t);else if(Ke(t,"readystatechange"),gn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(MT)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!Cx.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var s=2<gn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",KT(t)}}finally{gh(t)}}}}function gh(t,e){if(t.g){QT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function QT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}C.isActive=function(){return!!this.g};function gn(t){return t.g?t.g.readyState:0}C.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Px(e)}};function y_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case WT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ox(t){const e={};t=(t.g&&2<=gn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ta(t[r]))continue;var n=rx(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}Yb(e,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function YT(t){let e="";return Zm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function dg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=YT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function XT(t){this.Ga=0,this.j=[],this.l=new uh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=wo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=wo("baseRetryDelayMs",5e3,t),this.hb=wo("retryDelaySeedMs",1e4,t),this.eb=wo("forwardChannelMaxRetries",2,t),this.xa=wo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $T(t&&t.concurrentRequestLimit),this.Ja=new Ax,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=XT.prototype;C.ra=8;C.H=1;function pg(t){if(JT(t),t.H==3){var e=t.W++,n=Hn(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),ul(t,n),e=new sl(t,t.l,e),e.L=2,e.A=ph(Hn(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&B.Image&&(new Image().src=e.A,n=!0),n||(e.g=oI(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ol(e)}iI(t)}function yh(t){t.g&&(gg(t),t.g.cancel(),t.g=null)}function JT(t){yh(t),t.u&&(B.clearTimeout(t.u),t.u=null),pc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function vh(t){if(!jT(t.i)&&!t.m){t.m=!0;var e=t.Na;Sa||wT(),Aa||(Sa(),Aa=!0),sg.add(e,t),t.C=0}}function Nx(t,e){return zT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=rl(it(t.Na,t,e),rI(t,t.C)),t.C++,!0)}C.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new sl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=fT(s),dT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ZT(this,i,e),n=Hn(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),ul(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(YT(s)))+"&"+e:this.o&&dg(n,this.o,s)),hg(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,lp(i,n,null)):lp(i,n,e),this.H=2}}else this.H==3&&(t?v_(this,t):this.j.length==0||jT(this.i)||v_(this))};function v_(t,e){var n;e?n=e.m:n=t.W++;const r=Hn(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),ul(t,r),t.o&&t.s&&dg(r,t.o,t.s),n=new sl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ZT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),hg(t.i,n),lp(n,r,e)}function ul(t,e){t.na&&Zm(t.na,function(n,r){ue(e,r,n)}),t.h&&LT({},function(n,r){ue(e,r,n)})}function ZT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?it(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{kx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function eI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Sa||wT(),Aa||(Sa(),Aa=!0),sg.add(e,t),t.A=0}}function mg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=rl(it(t.Ma,t),rI(t,t.A)),t.A++,!0)}C.Ma=function(){if(this.u=null,tI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=rl(it(this.jb,this),t)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),yh(this),tI(this))};function gg(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function tI(t){t.g=new sl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Hn(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),ul(t,e),t.o&&t.s&&dg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ph(Hn(e)),n.u=null,n.S=!0,xT(n,t)}C.ib=function(){this.v!=null&&(this.v=null,yh(this),mg(this),dt(19))};function pc(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function nI(t,e){var n=null;if(t.g==e){pc(t),gg(t),t.g=null;var r=2}else if(cp(t.i,e))n=e.F,BT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=ch(),Ke(r,new kT(r,n)),vh(t)}else eI(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&Nx(t,e)||r==2&&mg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ai(t,5);break;case 4:ai(t,10);break;case 3:ai(t,6);break;default:ai(t,2)}}}function rI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ai(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=it(t.pb,t);n||(n=new vi("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||fc(n,"https"),ph(n)),Rx(n.toString(),r)}else dt(2);t.H=0,t.h&&t.h.za(e),iI(t),JT(t)}C.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function iI(t){if(t.H=0,t.ma=[],t.h){const e=qT(t.i);(e.length!=0||t.j.length!=0)&&(l_(t.ma,e),l_(t.ma,t.j),t.i.i.length=0,Xm(t.j),t.j.length=0),t.h.ya()}}function sI(t,e,n){var r=n instanceof vi?Hn(n):new vi(n);if(r.g!="")e&&(r.g=e+"."+r.g),dc(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new vi(null);r&&fc(s,r),e&&(s.g=e),i&&dc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),ul(t,r),r}function oI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Te(new al({ob:n})):new Te(t.va),e.Oa(t.J),e}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function aI(){}C=aI.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function mc(){if(js&&!(10<=Number(Wb)))throw Error("Environmental error: no available transport.")}mc.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){$e.call(this),this.g=new XT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ta(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ta(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new no(this)}je(Ot,$e);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sI(t,null,t.Y),vh(t)};Ot.prototype.close=function(){pg(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ig(t),t=n);e.j.push(new Tx(e.fb++,t)),e.H==3&&vh(e)};Ot.prototype.N=function(){this.g.h=null,delete this.j,pg(this.g),delete this.g,Ot.$.N.call(this)};function lI(t){ug.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(lI,ug);function uI(){cg.call(this),this.status=1}je(uI,cg);function no(t){this.g=t}je(no,aI);no.prototype.Ba=function(){Ke(this.g,"a")};no.prototype.Aa=function(t){Ke(this.g,new lI(t))};no.prototype.za=function(t){Ke(this.g,new uI)};no.prototype.ya=function(){Ke(this.g,"b")};function Dx(){this.blockSize=-1}function nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(nn,Dx);nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Vf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Vf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Vf(this,r),i=0;break}}this.h=i,this.i+=e};nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Lx={};function yg(t){return-128<=t&&128>t?Bb(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function yn(t){if(isNaN(t)||!isFinite(t))return vs;if(0>t)return qe(yn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=hp;return new ie(e,0)}function cI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qe(cI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yn(Math.pow(e,8)),r=vs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=yn(Math.pow(e,s)),r=r.R(s).add(yn(o))):(r=r.R(n),r=r.add(yn(o)))}return r}var hp=4294967296,vs=yg(0),fp=yg(1),__=yg(16777216);C=ie.prototype;C.ea=function(){if(Ut(this))return-qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:hp+r)*e,e*=hp}return t};C.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dn(this))return"0";if(Ut(this))return"-"+qe(this).toString(t);for(var e=yn(Math.pow(t,6)),n=this,r="";;){var i=yc(n,e).g;n=gc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};C.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}C.X=function(t){return t=gc(this,t),Ut(t)?-1:Dn(t)?0:1};function qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(fp)}C.abs=function(){return Ut(this)?qe(this):this};C.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function gc(t,e){return t.add(qe(e))}C.R=function(t){if(Dn(this)||Dn(t))return vs;if(Ut(this))return Ut(t)?qe(this).R(qe(t)):qe(qe(this).R(t));if(Ut(t))return qe(this.R(qe(t)));if(0>this.X(__)&&0>t.X(__))return yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Yl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Yl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Yl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Yl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function Yl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Eo(t,e){this.g=t,this.h=e}function yc(t,e){if(Dn(e))throw Error("division by zero");if(Dn(t))return new Eo(vs,vs);if(Ut(t))return e=yc(qe(t),e),new Eo(qe(e.g),qe(e.h));if(Ut(e))return e=yc(t,qe(e)),new Eo(qe(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fp,r=e;0>=r.X(t);)n=w_(n),r=w_(r);var i=Hi(n,1),s=Hi(r,1);for(r=Hi(r,2),n=Hi(n,2);!Dn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Hi(r,1),n=Hi(n,1)}return e=gc(t,i.R(e)),new Eo(i,e)}for(i=vs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yn(n),o=s.R(e);Ut(o)||0<o.X(t);)n-=r,s=yn(n),o=s.R(e);Dn(s)&&(s=fp),i=i.add(s),t=gc(t,o)}return new Eo(i,t)}C.gb=function(t){return yc(this,t).h};C.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};C.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};C.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function w_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function Hi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}mc.prototype.createWebChannel=mc.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;hh.NO_ERROR=0;hh.TIMEOUT=8;hh.HTTP_ERROR=6;RT.COMPLETE="complete";PT.EventType=il;il.OPEN="a";il.CLOSE="b";il.ERROR="c";il.MESSAGE="d";$e.prototype.listen=$e.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;nn.prototype.digest=nn.prototype.l;nn.prototype.reset=nn.prototype.reset;nn.prototype.update=nn.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=yn;ie.fromString=cI;var Mx=function(){return new mc},Vx=function(){return ch()},Ff=hh,Fx=RT,Ux=Fi,E_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$x=al,Xl=PT,jx=Te,zx=nn,_s=ie;const T_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new Km("@firebase/firestore");function To(){return Ri.logLevel}function M(t,...e){if(Ri.logLevel<=J.DEBUG){const n=e.map(vg);Ri.debug(`Firestore (${ro}): ${t}`,...n)}}function Wn(t,...e){if(Ri.logLevel<=J.ERROR){const n=e.map(vg);Ri.error(`Firestore (${ro}): ${t}`,...n)}}function zs(t,...e){if(Ri.logLevel<=J.WARN){const n=e.map(vg);Ri.warn(`Firestore (${ro}): ${t}`,...n)}}function vg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function oe(t,e){t||z()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class qx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hx{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new hI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new tt(e)}}class Wx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Kx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Wx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new Gx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Yx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new De(0,0))}static max(){return new q(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ba?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends ba{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const Xx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ba{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return Xx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ce.fromString(e))}static fromName(e){return new U(ce.fromString(e).popFirst(5))}static empty(){return new U(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ce(e.slice()))}}function Jx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Vr(i,U.empty(),e)}function Zx(t){return new Vr(t.readTime,t.key,-1)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(q.min(),U.empty(),-1)}static max(){return new Vr(q.max(),U.empty(),-1)}}function eO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==tO)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function rO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_g.oe=-1;function _h(t){return t==null}function vc(t){return t===0&&1/t==-1/0}function iO(t){return typeof t=="number"&&Number.isInteger(t)&&!vc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jl(this.root,e,this.comparator,!0)}}class Jl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(e){return new S_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class S_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Ge(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pI("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const sO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(oe(!!t),typeof t=="string"){let e=0;const n=sO.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pi(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Eg(t){const e=t.mapValue.fields.__previous_value__;return wg(e)?Eg(e):e}function xa(t){const e=Fr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wg(t)?4:aO(t)?9007199254740991:10:z()}function Rn(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xa(t).isEqual(xa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fr(i.timestampValue),a=Fr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pi(i.bytesValue).isEqual(Pi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),a=Pe(s.doubleValue);return o===a?vc(o)===vc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(I_(o)!==I_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Rn(o[l],a[l])))return!1;return!0}(t,e);default:return z()}}function Na(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Ci(t),r=Ci(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Pe(s.integerValue||s.doubleValue),l=Pe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return A_(t.timestampValue,e.timestampValue);case 4:return A_(xa(t),xa(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Pi(s),l=Pi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=te(a[u],l[u]);if(c!==0)return c}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=te(Pe(s.latitude),Pe(o.latitude));return a!==0?a:te(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=qs(a[u],l[u]);if(c)return c}return te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Zl.mapValue&&o===Zl.mapValue)return 0;if(s===Zl.mapValue)return 1;if(o===Zl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=te(l[h],c[h]);if(f!==0)return f;const p=qs(a[l[h]],u[c[h]]);if(p!==0)return p}return te(l.length,c.length)}(t.mapValue,e.mapValue);default:throw z()}}function A_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Fr(t),r=Fr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Hs(t){return dp(t)}function dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return U.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dp(n.fields[o])}`;return i+"}"}(t.mapValue):z()}function k_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pp(t){return!!t&&"integerValue"in t}function Tg(t){return!!t&&"arrayValue"in t}function R_(t){return!!t&&"nullValue"in t}function P_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ku(t){return!!t&&"mapValue"in t}function Wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ku(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ku(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ku(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(Wo(this.value))}}function mI(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new He([n]);if(ku(r)){const s=mI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,q.min(),q.min(),q.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,q.min(),q.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,q.min(),q.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.position=e,this.inclusive=n}}function C_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function b_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n="asc"){this.field=e,this.dir=n}}function lO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{}class be extends gI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cO(e,n,r):n==="array-contains"?new dO(e,r):n==="in"?new pO(e,r):n==="not-in"?new mO(e,r):n==="array-contains-any"?new gO(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hO(e,r):new fO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qs(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends gI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return yI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yI(t){return t.op==="and"}function vI(t){return uO(t)&&yI(t)}function uO(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function mp(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(vI(t))return t.filters.map(e=>mp(e)).join(",");{const e=t.filters.map(n=>mp(n)).join(",");return`${t.op}(${e})`}}function _I(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_I(o,i.filters[a]),!0):!1}(t,e):void z()}function wI(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(wI).join(" ,")+"}"}(t):"Filter"}class cO extends be{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class hO extends be{constructor(e,n){super(e,"in",n),this.keys=EI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fO extends be{constructor(e,n){super(e,"not-in",n),this.keys=EI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function EI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class dO extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tg(n)&&Na(n.arrayValue,this.value)}}class pO extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Na(this.value.arrayValue,n)}}class mO extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Na(this.value.arrayValue,n)}}class gO extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Na(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function x_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yO(t,e,n,r,i,s,o)}function Ig(t){const e=H(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.ue=n}return e.ue}function Sg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_I(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!b_(t.startAt,e.startAt)&&b_(t.endAt,e.endAt)}function gp(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vO(t,e,n,r,i,s,o,a){return new io(t,e,n,r,i,s,o,a)}function Ag(t){return new io(t)}function O_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TI(t){return t.collectionGroup!==null}function Ko(t){const e=H(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(He.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Da(s,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new Da(He.keyField(),r))}return e.ce}function In(t){const e=H(t);return e.le||(e.le=_O(e,Ko(t))),e.le}function _O(t,e){if(t.limitType==="F")return x_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Da(i.field,s)});const n=t.endAt?new _c(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _c(t.startAt.position,t.startAt.inclusive):null;return x_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yp(t,e){const n=t.filters.concat([e]);return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vp(t,e,n){return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wh(t,e){return Sg(In(t),In(e))&&t.limitType===e.limitType}function II(t){return`${Ig(In(t))}|lt:${t.limitType}`}function Wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wI(i)).join(", ")}]`),_h(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Hs(i)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function Eh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ko(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=C_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ko(r),i)||r.endAt&&!function(o,a,l){const u=C_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ko(r),i))}(t,e)}function wO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SI(t){return(e,n)=>{let r=!1;for(const i of Ko(t)){const s=EO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EO(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?qs(l,u):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=new ve(U.comparator);function Kn(){return TO}const AI=new ve(U.comparator);function Oo(...t){let e=AI;for(const n of t)e=e.insert(n.key,n);return e}function kI(t){let e=AI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return Go()}function RI(){return Go()}function Go(){return new so(t=>t.toString(),(t,e)=>t.isEqual(e))}const IO=new ve(U.comparator),SO=new Ge(U.comparator);function Y(...t){let e=SO;for(const n of t)e=e.add(n);return e}const AO=new Ge(te);function kO(){return AO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function CI(t){return{integerValue:""+t}}function RO(t,e){return iO(e)?CI(e):PI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this._=void 0}}function PO(t,e,n){return t instanceof wc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wg(s)&&(s=Eg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof La?xI(t,e):t instanceof Ma?OI(t,e):function(i,s){const o=bI(i,s),a=N_(o)+N_(i.Pe);return pp(o)&&pp(i.Pe)?CI(a):PI(i.serializer,a)}(t,e)}function CO(t,e,n){return t instanceof La?xI(t,e):t instanceof Ma?OI(t,e):n}function bI(t,e){return t instanceof Ec?function(r){return pp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wc extends Th{}class La extends Th{constructor(e){super(),this.elements=e}}function xI(t,e){const n=NI(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ma extends Th{constructor(e){super(),this.elements=e}}function OI(t,e){let n=NI(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Ec extends Th{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function N_(t){return Pe(t.integerValue||t.doubleValue)}function NI(t){return Tg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof La&&i instanceof La||r instanceof Ma&&i instanceof Ma?Bs(r.elements,i.elements,Rn):r instanceof Ec&&i instanceof Ec?Rn(r.Pe,i.Pe):r instanceof wc&&i instanceof wc}(t.transform,e.transform)}class xO{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ih{}function DI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kg(t.key,zt.none()):new fl(t.key,t.data,zt.none());{const n=t.data,r=Et.empty();let i=new Ge(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qr(t.key,r,new Ct(i.toArray()),zt.none())}}function OO(t,e,n){t instanceof fl?function(i,s,o){const a=i.value.clone(),l=L_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(i,s,o){if(!Ru(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=L_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(LI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qo(t,e,n,r){return t instanceof fl?function(s,o,a,l){if(!Ru(s.precondition,o))return a;const u=s.value.clone(),c=M_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(s,o,a,l){if(!Ru(s.precondition,o))return a;const u=M_(s.fieldTransforms,l,o),c=o.data;return c.setAll(LI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ru(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function NO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bI(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function D_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bs(r,i,(s,o)=>bO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fl extends Ih{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qr extends Ih{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function L_(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CO(o,a,n[i]))}return r}function M_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PO(s,o,e))}return r}class kg extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DO extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&OO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=DI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>D_(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>D_(n,r))}}class Rg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=function(){return IO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Rg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,Z;function FO(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function MI(t){if(t===void 0)return Wn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Re.OK:return T.OK;case Re.CANCELLED:return T.CANCELLED;case Re.UNKNOWN:return T.UNKNOWN;case Re.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Re.INTERNAL:return T.INTERNAL;case Re.UNAVAILABLE:return T.UNAVAILABLE;case Re.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Re.NOT_FOUND:return T.NOT_FOUND;case Re.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Re.ABORTED:return T.ABORTED;case Re.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Re.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(Z=Re||(Re={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=new _s([4294967295,4294967295],0);function V_(t){const e=UO().encode(t),n=new zx;return n.update(e),new Uint8Array(n.digest())}function F_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _s([n,r],0),new _s([i,s],0)]}class Pg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new No(`Invalid padding: ${n}`);if(r<0)throw new No(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new No(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new No(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_s.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(_s.fromNumber(r)));return i.compare($O)===1&&(i=new _s([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=V_(e),[r,i]=F_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=V_(e),[r,i]=F_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class No extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sh(q.min(),i,new ve(te),Kn(),Y())}}class dl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dl(r,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class VI{constructor(e,n){this.targetId=e,this.me=n}}class FI{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class U_{constructor(){this.fe=0,this.ge=j_(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Y(),n=Y(),r=Y();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new dl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=j_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=$_(),this.Qe=new ve(te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(gp(s))if(r===0){const o=new U(s.path);this.Ue(n,o,rt.newNoDocument(o,q.min()))}else oe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Pi(r).toUint8Array()}catch(l){if(l instanceof pI)return zs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Pg(o,i,s)}catch(l){return zs(l instanceof No?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&gp(a.target)){const l=new U(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,rt.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Y();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Sh(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=$_(),this.Qe=new ve(te),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new U_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new U_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $_(){return new ve(U.comparator)}function j_(){return new ve(U.comparator)}const zO={asc:"ASCENDING",desc:"DESCENDING"},BO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qO={and:"AND",or:"OR"};class HO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _p(t,e){return t.useProto3Json||_h(e)?e:{value:e}}function Tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WO(t,e){return Tc(t,e.toTimestamp())}function Sn(t){return oe(!!t),q.fromTimestamp(function(n){const r=Fr(n);return new De(r.seconds,r.nanos)}(t))}function Cg(t,e){return wp(t,e).canonicalString()}function wp(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $I(t){const e=ce.fromString(t);return oe(HI(e)),e}function Ep(t,e){return Cg(t.databaseId,e.path)}function Uf(t,e){const n=$I(e);if(n.get(1)!==t.databaseId.projectId)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(zI(n))}function jI(t,e){return Cg(t.databaseId,e)}function KO(t){const e=$I(t);return e.length===4?ce.emptyPath():zI(e)}function Tp(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zI(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function z_(t,e,n){return{name:Ep(t,e),fields:n.value.mapValue.fields}}function GO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(oe(c===void 0||typeof c=="string"),at.fromBase64String(c||"")):(oe(c===void 0||c instanceof Buffer||c instanceof Uint8Array),at.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:MI(u.code);return new O(c,u.message||"")}(o);n=new FI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uf(t,r.document.name),s=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):q.min(),a=new Et({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Pu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uf(t,r.document),s=r.readTime?Sn(r.readTime):q.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uf(t,r.document),s=r.removedTargetIds||[];n=new Pu([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VO(i,s),a=r.targetId;n=new VI(a,o)}}return n}function QO(t,e){let n;if(e instanceof fl)n={update:z_(t,e.key,e.value)};else if(e instanceof kg)n={delete:Ep(t,e.key)};else if(e instanceof Qr)n={update:z_(t,e.key,e.data),updateMask:iN(e.fieldMask)};else{if(!(e instanceof DO))return z();n={verify:Ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof wc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof La)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ec)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:WO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:z()}(t,e.precondition)),n}function YO(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Sn(i.updateTime):Sn(s);return o.isEqual(q.min())&&(o=Sn(s)),new xO(o,i.transformResults||[])}(n,e))):[]}function XO(t,e){return{documents:[jI(t,e.path)]}}function JO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jI(t,i);const s=function(u){if(u.length!==0)return qI(rn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(f){return{field:Ki(f.field),direction:tN(f.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=_p(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function ZO(t){let e=KO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=BI(h);return f instanceof rn&&vI(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new Da(Gi(v.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,_h(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new _c(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new _c(p,f)}(n.endAt)),vO(e,i,o,s,a,"F",l,u)}function eN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gi(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gi(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gi(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gi(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return be.create(Gi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>BI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function tN(t){return zO[t]}function nN(t){return BO[t]}function rN(t){return qO[t]}function Ki(t){return{fieldPath:t.canonicalString()}}function Gi(t){return He.fromServerFormat(t.fieldPath)}function qI(t){return t instanceof be?function(n){if(n.op==="=="){if(P_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NAN"}};if(R_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(P_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NAN"}};if(R_(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(n.field),op:nN(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>qI(i));return r.length===1?r[0]:{compositeFilter:{op:rN(n.op),filters:r}}}(t):z()}function iN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r,i,s=q.min(),o=q.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.ut=e}}function oN(t){const e=ZO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.on=new lN}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Vr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class lN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ws(0)}static Nn(){return new Ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.changes=new so(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qo(r.mutation,i,Ct.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Kn();const o=Go(),a=function(){return Go()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Qr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Qo(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new cN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Go();let i=new ve((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ct.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=RI();c.forEach(f=>{if(!s.has(f)){const p=DI(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(li());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:kI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=Oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,l=>{const u=function(h,f){return new io(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,rt.newInvalidDocument(c)))});let a=Oo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Qo(c.mutation,u,Ct.empty(),De.now()),Eh(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Sn(i.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:oN(i.bundledQuery),readTime:Sn(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.overlays=new ve(U.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=li(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=li(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MO(n,r));let s=this.lr.get(n);s===void 0&&(s=Y(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.hr=new Ge(Ve.Pr),this.Ir=new Ge(Ve.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ve(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new U(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new U(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=Y();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return U.comparator(e.key,n.key)||te(e.gr,n.gr)}static Tr(e,n){return te(e.gr,n.gr)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ge(Ve.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ve(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(te);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new U(s),0);let a=new Ge(te);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ve(n,0),i=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.Cr=e,this.docs=function(){return new ve(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||eO(Zx(c),r)<=0||(i.has(c.key)||Eh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){z()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gN(this)}getSize(e){return S.resolve(this.size)}}class gN extends uN{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.persistence=e,this.Fr=new so(n=>Ig(n),Sg),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Mr=0,this.Or=new bg,this.targetCount=0,this.Nr=Ws.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.Lr={},this.overlays={},this.Br=new _g(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new yN(this),this.indexManager=new aN,this.remoteDocumentCache=function(i){return new mN(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new sN(n),this.Kr=new fN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new pN(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new _N(this.Br.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return S.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class _N extends nO{constructor(e){super(),this.currentSequenceNumber=e}}class xg{constructor(e){this.persistence=e,this.Gr=new bg,this.zr=null}static jr(e){return new xg(e)}get Hr(){if(this.zr)return this.zr;throw z()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const i=U.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Og(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return E2()?8:rO(Ye())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new wN;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(To()<=J.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(To()<=J.DEBUG&&M("QueryEngine","Query:",Wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(To()<=J.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):S.resolve())}zi(e,n){if(O_(n))return S.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vp(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,vp(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return O_(n)||i.isEqual(q.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?S.resolve(null):(To()<=J.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wi(n)),this.Xi(e,o,n,Jx(i,-1)).next(a=>a))})}Yi(e,n){let r=new Ge(SI(e));return n.forEach((i,s)=>{Eh(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return To()<=J.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Wi(n)),this.Gi.getDocumentsMatchingQuery(e,n,Vr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ve(te),this.ns=new so(s=>Ig(s),Sg),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hN(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function IN(t,e,n,r){return new TN(t,e,n,r)}async function WI(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function SN(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let p=S.resolve();return f.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(y=>{const _=u.docVersions.get(v);oe(_!==null),y.version.compareTo(_)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Y();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function KI(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function AN(t,e){const n=H(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(at.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,_,m){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Kn(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(kN(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(q.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function kN(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function RN(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PN(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Ip(t,e,n){const r=H(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hl(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function B_(t,e,n){const r=H(t);let i=q.min(),s=Y();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=H(l),f=h.ns.get(c);return f!==void 0?S.resolve(h.ts.get(f)):h.qr.getTargetData(u,c)}(r,o,In(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:Y())).next(a=>(CN(r,wO(e),a),{documents:a,ls:s})))}function CN(t,e,n){let r=t.rs.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class q_{constructor(){this.activeTargetIds=kO()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bN{constructor(){this.eo=new q_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new q_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=null;function $f(){return eu===null?eu=function(){return 268435456+Math.round(2147483648*Math.random())}():eu++,"0x"+eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class DN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${i}/databases/${s}`,this.So=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get bo(){return!1}Do(n,r,i,s,o){const a=$f(),l=this.Co(n,r.toUriEncodedString());M("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(u,s,o),this.Fo(n,l,u,i).then(c=>(M("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw zs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Mo(n,r,i,s,o,a){return this.Do(n,r,i,s,o)}vo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Co(n,r){const i=ON[n];return`${this.yo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,i){const s=$f();return new Promise((o,a)=>{const l=new jx;l.setWithCredentials(!0),l.listenOnce(Fx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ff.NO_ERROR:const c=l.getResponseJson();M(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ff.TIMEOUT:M(et,`RPC '${e}' ${s} timed out`),a(new O(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ff.HTTP_ERROR:const h=l.getStatus();if(M(et,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const v=function(_){const m=_.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(p.status);a(new O(v,p.message))}else a(new O(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{M(et,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);M(et,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}xo(e,n,r){const i=$f(),s=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Mx(),a=Vx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new $x({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");M(et,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,p=!1;const v=new NN({co:_=>{p?M(et,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(f||(M(et,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),M(et,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},lo:()=>h.close()}),y=(_,m,d)=>{_.listen(m,g=>{try{d(g)}catch(w){setTimeout(()=>{throw w},0)}})};return y(h,Xl.EventType.OPEN,()=>{p||(M(et,`RPC '${e}' stream ${i} transport opened.`),v.Vo())}),y(h,Xl.EventType.CLOSE,()=>{p||(p=!0,M(et,`RPC '${e}' stream ${i} transport closed`),v.fo())}),y(h,Xl.EventType.ERROR,_=>{p||(p=!0,zs(et,`RPC '${e}' stream ${i} transport errored:`,_),v.fo(new O(T.UNAVAILABLE,"The operation could not be completed")))}),y(h,Xl.EventType.MESSAGE,_=>{var m;if(!p){const d=_.data[0];oe(!!d);const g=d,w=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(w){M(et,`RPC '${e}' stream ${i} received error:`,w);const E=w.status;let k=function(F){const j=Re[F];if(j!==void 0)return MI(j)}(E),R=w.message;k===void 0&&(k=T.INTERNAL,R="Unknown error status: "+E+" with message "+w.message),p=!0,v.fo(new O(k,R)),h.close()}else M(et,`RPC '${e}' stream ${i} received:`,d),v.po(d)}}),y(a,Ux.STAT_EVENT,_=>{_.stat===E_.PROXY?M(et,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===E_.NOPROXY&&M(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.mo()},0),v}}function jf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){return new HO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Wo=r,this.Go=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new GI(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.zo===n&&this.a_(r,i)},r=>{e(()=>{const i=new O(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(i)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.u_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LN extends QI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=GO(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Sn(o.readTime):q.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Tp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=gp(l)?{documents:XO(s,l)}:{query:JO(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=UI(s,o.resumeToken);const u=_p(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=Tc(s,o.snapshotVersion.toTimestamp());const u=_p(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=eN(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Tp(this.serializer),n.removeTarget=e,this.r_(n)}}class MN extends QI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=YO(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.d_(r,n)}return oe(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Tp(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QO(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Do(e,wp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(T.UNKNOWN,s.toString())})}Mo(e,n,r,i,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,wp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(T.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class FN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Wn(n),this.y_=!1):M("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.ro(o=>{r.enqueueAndForget(async()=>{$i(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=H(l);u.M_.add(4),await pl(u),u.N_.set("Unknown"),u.M_.delete(4),await kh(u)}(this))})}),this.N_=new FN(r,i)}}async function kh(t){if($i(t))for(const e of t.x_)await e(!0)}async function pl(t){for(const e of t.x_)await e(!1)}function YI(t,e){const n=H(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Mg(n)?Lg(n):oo(n).Zo()&&Dg(n,e))}function Ng(t,e){const n=H(t),r=oo(n);n.F_.delete(e),r.Zo()&&XI(n,e),n.F_.size===0&&(r.Zo()?r.t_():$i(n)&&n.N_.set("Unknown"))}function Dg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oo(t).h_(e)}function XI(t,e){t.L_.xe(e),oo(t).P_(e)}function Lg(t){t.L_=new jO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),oo(t).start(),t.N_.w_()}function Mg(t){return $i(t)&&!oo(t).Yo()&&t.F_.size>0}function $i(t){return H(t).M_.size===0}function JI(t){t.L_=void 0}async function $N(t){t.N_.set("Online")}async function jN(t){t.F_.forEach((e,n)=>{Dg(t,e)})}async function zN(t,e){JI(t),Mg(t)?(t.N_.D_(e),Lg(t)):t.N_.set("Unknown")}async function BN(t,e,n){if(t.N_.set("Online"),e instanceof FI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof Pu?t.L_.Ke(e):e instanceof VI?t.L_.He(e):t.L_.We(e),!n.isEqual(q.min()))try{const r=await KI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.F_.get(u);c&&s.F_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.F_.get(l);if(!c)return;s.F_.set(l,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),XI(s,l);const h=new Er(c.target,l,u,c.sequenceNumber);Dg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!hl(e))throw e;t.M_.add(1),await pl(t),t.N_.set("Offline"),n||(n=()=>KI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await kh(t)})}function ZI(t,e){return e().catch(n=>Ic(t,n,e))}async function Rh(t){const e=H(t),n=Ur(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;qN(e);)try{const i=await RN(e.localStore,r);if(i===null){e.v_.length===0&&n.t_();break}r=i.batchId,HN(e,i)}catch(i){await Ic(e,i)}eS(e)&&tS(e)}function qN(t){return $i(t)&&t.v_.length<10}function HN(t,e){t.v_.push(e);const n=Ur(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function eS(t){return $i(t)&&!Ur(t).Yo()&&t.v_.length>0}function tS(t){Ur(t).start()}async function WN(t){Ur(t).R_()}async function KN(t){const e=Ur(t);for(const n of t.v_)e.E_(n.mutations)}async function GN(t,e,n){const r=t.v_.shift(),i=Rg.from(r,e,n);await ZI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Rh(t)}async function QN(t,e){e&&Ur(t).T_&&await async function(r,i){if(function(o){return FO(o)&&o!==T.ABORTED}(i.code)){const s=r.v_.shift();Ur(r).e_(),await ZI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Rh(r)}}(t,e),eS(t)&&tS(t)}async function W_(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=$i(n);n.M_.add(3),await pl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await kh(n)}async function YN(t,e){const n=H(t);e?(n.M_.delete(2),await kh(n)):e||(n.M_.add(2),await pl(n),n.N_.set("Unknown"))}function oo(t){return t.B_||(t.B_=function(n,r,i){const s=H(n);return s.m_(),new LN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:$N.bind(null,t),Io:jN.bind(null,t),Eo:zN.bind(null,t),l_:BN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),Mg(t)?Lg(t):t.N_.set("Unknown")):(await t.B_.stop(),JI(t))})),t.B_}function Ur(t){return t.k_||(t.k_=function(n,r,i){const s=H(n);return s.m_(),new MN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:WN.bind(null,t),Eo:QN.bind(null,t),A_:KN.bind(null,t),d_:GN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await Rh(t)):(await t.k_.stop(),t.v_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Vg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fg(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),hl(t))return new O(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.q_=new ve(U.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):z():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ks(e,n,ws.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class JN{constructor(){this.queries=new so(e=>II(e),wh),this.onlineState="Unknown",this.z_=new Set}}async function nS(t,e){const n=H(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new XN,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Fg(o,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Ug(n)}async function rS(t,e){const n=H(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZN(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Ug(n)}function eD(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Ug(t){t.z_.forEach(e=>{e.next()})}var Sp,G_;(G_=Sp||(Sp={})).J_="default",G_.Cache="cache";class iS{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Sp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.key=e}}class oS{constructor(e){this.key=e}}class tD{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Y(),this.mutatedKeys=Y(),this.Ia=SI(e),this.Ta=new ws(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new K_,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),p=Eh(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?v!==y&&(r.track({type:3,doc:p}),_=!0):this.Ra(f,p)||(r.track({type:2,doc:p}),_=!0,(l&&this.Ia(p,l)>0||u&&this.Ia(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),_=!0):f&&!p&&(r.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((c,h)=>function(p,v){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return y(p)-y(v)}(c.type,h.type)||this.Ia(c.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Ks(this.query,e.Ta,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new K_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Y(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new oS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new sS(r))}),n}pa(e){this.la=e.ls,this.Pa=Y();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ks.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class nD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rD{constructor(e){this.key=e,this.wa=!1}}class iD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new so(a=>II(a),wh),this.Da=new Map,this.Ca=new Set,this.va=new ve(U.comparator),this.Fa=new Map,this.Ma=new bg,this.xa={},this.Oa=new Map,this.Na=Ws.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function sD(t,e,n=!0){const r=fS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await aS(r,e,n,!0),i}async function oD(t,e){const n=fS(t);await aS(n,e,!0,!1)}async function aS(t,e,n,r){const i=await PN(t.localStore,In(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await aD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&YI(t.remoteStore,i),a}async function aD(t,e,n,r,i){t.Ba=(h,f,p)=>async function(y,_,m,d){let g=_.view.da(m);g.Zi&&(g=await B_(y.localStore,_.query,!1).then(({documents:R})=>_.view.da(R,g)));const w=d&&d.targetChanges.get(_.targetId),E=d&&d.targetMismatches.get(_.targetId)!=null,k=_.view.applyChanges(g,y.isPrimaryClient,w,E);return Y_(y,_.targetId,k.fa),k.snapshot}(t,h,f,p);const s=await B_(t.localStore,e,!0),o=new tD(e,s.ls),a=o.da(s.documents),l=dl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Y_(t,n,u.fa);const c=new nD(e,n,o);return t.ba.set(e,c),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function lD(t,e,n){const r=H(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!wh(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ip(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ng(r.remoteStore,i.targetId),Ap(r,i.targetId)}).catch(cl)):(Ap(r,i.targetId),await Ip(r.localStore,i.targetId,!0))}async function uD(t,e){const n=H(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ng(n.remoteStore,r.targetId))}async function cD(t,e,n){const r=yD(t);try{const i=await function(o,a){const l=H(o),u=De.now(),c=a.reduce((p,v)=>p.add(v.key),Y());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=Kn(),y=Y();return l.ss.getEntries(p,c).next(_=>{v=_,v.forEach((m,d)=>{d.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(_=>{h=_;const m=[];for(const d of a){const g=NO(d,h.get(d.key).overlayedDocument);g!=null&&m.push(new Qr(d.key,g,mI(g.value.mapValue),zt.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(_=>{f=_;const m=_.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(p,_.batchId,m)})}).then(()=>({batchId:f.batchId,changes:kI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ve(te)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ml(r,i.changes),await Rh(r.remoteStore)}catch(i){const s=Fg(i,"Failed to persist write");n.reject(s)}}async function lS(t,e){const n=H(t);try{const r=await AN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?oe(o.wa):i.removedDocuments.size>0&&(oe(o.wa),o.wa=!1))}),await ml(n,r,e)}catch(r){await cl(r)}}function Q_(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.U_)f.j_(a)&&(u=!0)}),u&&Ug(l)}(r.eventManager,e),i.length&&r.Sa.l_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hD(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ve(U.comparator);o=o.insert(s,rt.newNoDocument(s,q.min()));const a=Y().add(s),l=new Sh(q.min(),new Map,new ve(te),o,a);await lS(r,l),r.va=r.va.remove(s),r.Fa.delete(e),$g(r)}else await Ip(r.localStore,e,!1).then(()=>Ap(r,e,n)).catch(cl)}async function fD(t,e){const n=H(t),r=e.batch.batchId;try{const i=await SN(n.localStore,e);cS(n,r,null),uS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ml(n,i)}catch(i){await cl(i)}}async function dD(t,e,n){const r=H(t);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(oe(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);cS(r,e,n),uS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ml(r,i)}catch(i){await cl(i)}}function uS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function cS(t,e,n){const r=H(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||hS(t,r)})}function hS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Ng(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),$g(t))}function Y_(t,e,n){for(const r of n)r instanceof sS?(t.Ma.addReference(r.key,e),pD(t,r)):r instanceof oS?(M("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||hS(t,r.key)):z()}function pD(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(M("SyncEngine","New document in limbo: "+n),t.Ca.add(r),$g(t))}function $g(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new U(ce.fromString(e)),r=t.Na.next();t.Fa.set(r,new rD(n)),t.va=t.va.insert(n,r),YI(t.remoteStore,new Er(In(Ag(n.path)),r,"TargetPurposeLimboResolution",_g.oe))}}async function ml(t,e,n){const r=H(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Og.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Sa.l_(i),await async function(l,u){const c=H(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(u,f=>S.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>S.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!hl(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=c.ts.get(f),v=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(f,y)}}}(r.localStore,s))}async function mD(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await WI(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new O(T.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ml(n,r._s)}}function gD(t,e){const n=H(t),r=n.Fa.get(e);if(r&&r.wa)return Y().add(r.key);{let i=Y();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function fS(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hD.bind(null,e),e.Sa.l_=ZN.bind(null,e.eventManager),e.Sa.ka=eD.bind(null,e.eventManager),e}function yD(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dD.bind(null,e),e}class X_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IN(this.persistence,new EN,e.initialUser,this.serializer)}createPersistence(e){return new vN(xg.jr,this.serializer)}createSharedClientState(e){return new bN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Q_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mD.bind(null,this.syncEngine),await YN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JN}()}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),r=function(s){return new DN(s)}(e.databaseInfo);return function(s,o,a,l){return new VN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new UN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Q_(this.syncEngine,n,0),function(){return H_.D()?new H_:new xN}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new iD(i,s,o,a,l,u);return c&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=H(r);M("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await pl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=fI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zf(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ED(t);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>W_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>W_(e.remoteStore,i)),t._onlineComponents=e}function wD(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ED(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await zf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!wD(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await zf(t,new X_)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await zf(t,new X_);return t._offlineComponents}async function pS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await J_(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await J_(t,new vD))),t._onlineComponents}function TD(t){return pS(t).then(e=>e.syncEngine)}async function mS(t){const e=await pS(t),n=e.eventManager;return n.onListen=sD.bind(null,e.syncEngine),n.onUnlisten=lD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uD.bind(null,e.syncEngine),n}function ID(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new dS({next:f=>{o.enqueueAndForget(()=>rS(s,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new O(T.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new O(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new iS(Ag(a.path),c,{includeMetadataChanges:!0,ra:!0});return nS(s,h)}(await mS(t),t.asyncQueue,e,n,r)),r.promise}function SD(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new dS({next:f=>{o.enqueueAndForget(()=>rS(s,h)),f.fromCache&&l.source==="server"?u.reject(new O(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new iS(a,c,{includeMetadataChanges:!0,ra:!0});return nS(s,h)}(await mS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t,e,n){if(!n)throw new O(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AD(t,e,n,r){if(e===!0&&r===!0)throw new O(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function e0(t){if(!U.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function t0(t){if(U.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ph(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ph(t);throw new O(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ch{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bx;switch(r.type){case"firstParty":return new Kx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Z_.get(n);r&&(M("ComponentProvider","Removing Datastore"),Z_.delete(n),r.terminate())}(this),Promise.resolve()}}function kD(t,e,n,r={}){var i;const s=(t=sn(t,Ch))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=tt.MOCK_USER;else{a=nT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(u)}t._authCredentials=new qx(new hI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ji(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Nr extends ji{constructor(e,n,r){super(e,n,Ag(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new U(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function RD(t,e,...n){if(t=pe(t),yS("collection","path",e),t instanceof Ch){const r=ce.fromString(e,...n);return t0(r),new Nr(t,null,r)}{if(!(t instanceof gt||t instanceof Nr))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return t0(r),new Nr(t.firestore,null,r)}}function jg(t,e,...n){if(t=pe(t),arguments.length===1&&(e=fI.newId()),yS("doc","path",e),t instanceof Ch){const r=ce.fromString(e,...n);return e0(r),new gt(t,null,new U(r))}{if(!(t instanceof gt||t instanceof Nr))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return e0(r),new gt(t.firestore,t instanceof Nr?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new GI(this,"async_queue_retry"),this.hu=()=>{const n=jf();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=jf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=jf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Un;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!hl(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Vg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class zi extends Ch{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new PD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vS(this),this._firestoreClient.terminate()}}function CD(t,e){const n=typeof t=="object"?t:Qm(),r=typeof t=="string"?t:e||"(default)",i=rh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ZE("firestore");s&&kD(i,...s)}return i}function zg(t){return t._firestoreClient||vS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new oO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,gS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new _D(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gs(at.fromBase64String(e))}catch(n){throw new O(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=/^__.*__$/;class xD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fl(e,this.data,n,this.fieldTransforms)}}class _S{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Hg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Hg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Sc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(wS(this.fu)&&bD.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class OD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ah(e)}Fu(e,n,r,i=!1){return new Hg({fu:e,methodName:n,vu:r,path:He.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xh(t){const e=t._freezeSettings(),n=Ah(t._databaseId);return new OD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ES(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Wg("Data must be an object, but it was:",o,r);const a=TS(r,o);let l,u;if(s.merge)l=new Ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=kp(e,h,n);if(!o.contains(f))throw new O(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);SS(c,f)||c.push(f)}l=new Ct(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new xD(new Et(a),l,u)}class Oh extends Bg{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oh}}function ND(t,e,n,r){const i=t.Fu(1,e,n);Wg("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();Ui(r,(l,u)=>{const c=Kg(e,l,n);u=pe(u);const h=i.Su(c);if(u instanceof Oh)s.push(c);else{const f=gl(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new Ct(s);return new _S(o,a,i.fieldTransforms)}function DD(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[kp(e,r,n)],l=[i];if(s.length%2!=0)throw new O(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(kp(e,s[f])),l.push(s[f+1]);const u=[],c=Et.empty();for(let f=a.length-1;f>=0;--f)if(!SS(u,a[f])){const p=a[f];let v=l[f];v=pe(v);const y=o.Su(p);if(v instanceof Oh)u.push(p);else{const _=gl(v,y);_!=null&&(u.push(p),c.set(p,_))}}const h=new Ct(u);return new _S(c,h,o.fieldTransforms)}function LD(t,e,n,r=!1){return gl(n,t.Fu(r?4:3,e))}function gl(t,e){if(IS(t=pe(t)))return Wg("Unsupported field value:",e,t),TS(t,e);if(t instanceof Bg)return function(r,i){if(!wS(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=gl(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:Tc(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tc(i.serializer,s)}}if(r instanceof qg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gs)return{bytesValue:UI(i.serializer,r._byteString)};if(r instanceof gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Cg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ph(r)}`)}(t,e)}function TS(t,e){const n={};return dI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=gl(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function IS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof qg||t instanceof Gs||t instanceof gt||t instanceof Bg)}function Wg(t,e,n){if(!IS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ph(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function kp(t,e,n){if((e=pe(e))instanceof bh)return e._internalPath;if(typeof e=="string")return Kg(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const MD=new RegExp("[~\\*/\\[\\]]");function Kg(t,e,n){if(e.search(MD)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bh(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(T.INVALID_ARGUMENT,a+t+l)}function SS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VD extends AS{data(){return super.data()}}function Nh(t,e){return typeof e=="string"?Kg(t,e):e instanceof bh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gg{}class kS extends Gg{}function P3(t,e,...n){let r=[];e instanceof Gg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Qg).length,a=s.filter(l=>l instanceof Dh).length;if(o>1||o>0&&a>0)throw new O(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Dh extends kS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dh(e,n,r)}_apply(e){const n=this._parse(e);return RS(e._query,n),new ji(e.firestore,e.converter,yp(e._query,n))}_parse(e){const n=xh(e.firestore);return function(s,o,a,l,u,c,h){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new O(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){i0(h,c);const p=[];for(const v of h)p.push(r0(l,s,v));f={arrayValue:{values:p}}}else f=r0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||i0(h,c),f=LD(a,o,h,c==="in"||c==="not-in");return be.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function C3(t,e,n){const r=e,i=Nh("where",t);return Dh._create(i,r,n)}class Qg extends Gg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)RS(o,l),o=yp(o,l)}(e._query,n),new ji(e.firestore,e.converter,yp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yg extends kS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new O(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Da(s,o)}(e._query,this._field,this._direction);return new ji(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new io(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function b3(t,e="asc"){const n=e,r=Nh("orderBy",t);return Yg._create(r,n)}function r0(t,e,n){if(typeof(n=pe(n))=="string"){if(n==="")throw new O(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!TI(e)&&n.indexOf("/")!==-1)throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!U.isDocumentKey(r))throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return k_(t,new U(r))}if(n instanceof gt)return k_(t,n._key);throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ph(n)}.`)}function i0(t,e){if(!Array.isArray(t)||t.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class UD{convertValue(e,n="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new qg(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Eg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xa(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);oe(HI(r));const i=new Oa(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CS extends AS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Cu extends CS{data(e={}){return super.data(e)}}class $D{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Do(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new Do(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Do(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Do(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:jD(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){t=sn(t,gt);const e=sn(t.firestore,zi);return ID(zg(e),t._key).then(n=>qD(e,t,n))}class bS extends UD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function x3(t){t=sn(t,ji);const e=sn(t.firestore,zi),n=zg(e),r=new bS(e);return FD(t._query),SD(n,t._query).then(i=>new $D(e,r,t,i))}function BD(t,e,n){t=sn(t,gt);const r=sn(t.firestore,zi),i=PS(t.converter,e,n);return Lh(r,[ES(xh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function O3(t,e,n,...r){t=sn(t,gt);const i=sn(t.firestore,zi),s=xh(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof bh?DD(s,"updateDoc",t._key,e,n,r):ND(s,"updateDoc",t._key,e),Lh(i,[o.toMutation(t._key,zt.exists(!0))])}function N3(t){return Lh(sn(t.firestore,zi),[new kg(t._key,zt.none())])}function D3(t,e){const n=sn(t.firestore,zi),r=jg(t),i=PS(t.converter,e);return Lh(n,[ES(xh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Lh(t,e){return function(r,i){const s=new Un;return r.asyncQueue.enqueueAndForget(async()=>cD(await TD(r),i,s)),s.promise}(zg(t),e)}function qD(t,e,n){const r=n.docs.get(e._key),i=new bS(t);return new CS(t,i,e._key,r,new Do(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ro=i})(Vi),ki(new Mr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zi(new Hx(r.getProvider("auth-internal")),new Qx(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new O(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Tn(T_,"4.6.1",e),Tn(T_,"4.6.1","esm2017")})();var HD={VITE_API_KEY:"AIzaSyCRT1fpOGMiFV6mx6cSI4qCBXY6rPUJ37s",VITE_AUTH_DOMAIN:"uniform-test-74ed1.firebaseapp.com",VITE_PROJECT_ID:"uniform-test-74ed1",VITE_STORAGE_BUCKET:"uniform-test-74ed1.appspot.com",VITE_MESSAGING_SENDER_ID:"705320031525",VITE_APP_ID:"1:705320031525:web:9ac7c5efd2826292ad36cc",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const s0=t=>{let e;const n=new Set,r=(c,h)=>{const f=typeof c=="function"?c(e):c;if(!Object.is(f,e)){const p=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(v=>v(e,p))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(HD?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(r,i,l);return l},WD=t=>t?s0(t):s0;var xS={exports:{}},OS={},NS={exports:{}},DS={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=P;function KD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GD=typeof Object.is=="function"?Object.is:KD,QD=Qs.useState,YD=Qs.useEffect,XD=Qs.useLayoutEffect,JD=Qs.useDebugValue;function ZD(t,e){var n=e(),r=QD({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return XD(function(){i.value=n,i.getSnapshot=e,Bf(i)&&s({inst:i})},[t,n,e]),YD(function(){return Bf(i)&&s({inst:i}),t(function(){Bf(i)&&s({inst:i})})},[t]),JD(n),n}function Bf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!GD(t,n)}catch{return!0}}function eL(t,e){return e()}var tL=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?eL:ZD;DS.useSyncExternalStore=Qs.useSyncExternalStore!==void 0?Qs.useSyncExternalStore:tL;NS.exports=DS;var nL=NS.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh=P,rL=nL;function iL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sL=typeof Object.is=="function"?Object.is:iL,oL=rL.useSyncExternalStore,aL=Mh.useRef,lL=Mh.useEffect,uL=Mh.useMemo,cL=Mh.useDebugValue;OS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=aL(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=uL(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return h=v}return h=p}if(v=h,sL(c,p))return v;var y=r(p);return i!==void 0&&i(v,y)?v:(c=p,h=y)}var u=!1,c,h,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=oL(t,s[0],s[1]);return lL(function(){o.hasValue=!0,o.value=a},[a]),cL(a),a};xS.exports=OS;var hL=xS.exports;const fL=Dc(hL);var LS={VITE_API_KEY:"AIzaSyCRT1fpOGMiFV6mx6cSI4qCBXY6rPUJ37s",VITE_AUTH_DOMAIN:"uniform-test-74ed1.firebaseapp.com",VITE_PROJECT_ID:"uniform-test-74ed1",VITE_STORAGE_BUCKET:"uniform-test-74ed1.appspot.com",VITE_MESSAGING_SENDER_ID:"705320031525",VITE_APP_ID:"1:705320031525:web:9ac7c5efd2826292ad36cc",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:dL}=Ga,{useSyncExternalStoreWithSelector:pL}=fL;let o0=!1;const mL=t=>t;function gL(t,e=mL,n){(LS?"production":void 0)!=="production"&&n&&!o0&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),o0=!0);const r=pL(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return dL(r),r}const a0=t=>{(LS?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?WD(t):t,n=(r,i)=>gL(e,r,i);return Object.assign(n,e),n},MS=t=>t?a0(t):a0;var bu={VITE_API_KEY:"AIzaSyCRT1fpOGMiFV6mx6cSI4qCBXY6rPUJ37s",VITE_AUTH_DOMAIN:"uniform-test-74ed1.firebaseapp.com",VITE_PROJECT_ID:"uniform-test-74ed1",VITE_STORAGE_BUCKET:"uniform-test-74ed1.appspot.com",VITE_MESSAGING_SENDER_ID:"705320031525",VITE_APP_ID:"1:705320031525:web:9ac7c5efd2826292ad36cc",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Rp=new Map,tu=t=>{const e=Rp.get(t);return e?Object.fromEntries(Object.entries(e.stores).map(([n,r])=>[n,r.getState()])):{}},yL=(t,e,n)=>{if(t===void 0)return{type:"untracked",connection:e.connect(n)};const r=Rp.get(n.name);if(r)return{type:"tracked",store:t,...r};const i={connection:e.connect(n),stores:{}};return Rp.set(n.name,i),{type:"tracked",store:t,...i}},vL=(t,e={})=>(n,r,i)=>{const{enabled:s,anonymousActionType:o,store:a,...l}=e;let u;try{u=(s??(bu?"production":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!u)return(bu?"production":void 0)!=="production"&&s&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),t(n,r,i);const{connection:c,...h}=yL(a,u,l);let f=!0;i.setState=(y,_,m)=>{const d=n(y,_);if(!f)return d;const g=m===void 0?{type:o||"anonymous"}:typeof m=="string"?{type:m}:m;return a===void 0?(c==null||c.send(g,r()),d):(c==null||c.send({...g,type:`${a}/${g.type}`},{...tu(l.name),[a]:i.getState()}),d)};const p=(...y)=>{const _=f;f=!1,n(...y),f=_},v=t(i.setState,r,i);if(h.type==="untracked"?c==null||c.init(v):(h.stores[h.store]=i,c==null||c.init(Object.fromEntries(Object.entries(h.stores).map(([y,_])=>[y,y===h.store?v:_.getState()])))),i.dispatchFromDevtools&&typeof i.dispatch=="function"){let y=!1;const _=i.dispatch;i.dispatch=(...m)=>{(bu?"production":void 0)!=="production"&&m[0].type==="__setState"&&!y&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),y=!0),_(...m)}}return c.subscribe(y=>{var _;switch(y.type){case"ACTION":if(typeof y.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return qf(y.payload,m=>{if(m.type==="__setState"){if(a===void 0){p(m.state);return}Object.keys(m.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const d=m.state[a];if(d==null)return;JSON.stringify(i.getState())!==JSON.stringify(d)&&p(d);return}i.dispatchFromDevtools&&typeof i.dispatch=="function"&&i.dispatch(m)});case"DISPATCH":switch(y.payload.type){case"RESET":return p(v),a===void 0?c==null?void 0:c.init(i.getState()):c==null?void 0:c.init(tu(l.name));case"COMMIT":if(a===void 0){c==null||c.init(i.getState());return}return c==null?void 0:c.init(tu(l.name));case"ROLLBACK":return qf(y.state,m=>{if(a===void 0){p(m),c==null||c.init(i.getState());return}p(m[a]),c==null||c.init(tu(l.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return qf(y.state,m=>{if(a===void 0){p(m);return}JSON.stringify(i.getState())!==JSON.stringify(m[a])&&p(m[a])});case"IMPORT_STATE":{const{nextLiftedState:m}=y.payload,d=(_=m.computedStates.slice(-1)[0])==null?void 0:_.state;if(!d)return;p(a===void 0?d:d[a]),c==null||c.send(null,m);return}case"PAUSE_RECORDING":return f=!f}return}}),v},VS=vL,qf=(t,e)=>{let n;try{n=JSON.parse(t)}catch(r){console.error("[zustand devtools middleware] Could not parse the received json",r)}n!==void 0&&e(n)};function Xg(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const Va=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Va(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Va(r)(n)}}}},_L=(t,e)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,m)=>({...m,..._}),...e},o=!1;const a=new Set,l=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(..._)},r,i);const c=Va(s.serialize),h=()=>{const _=s.partialize({...r()});let m;const d=c({state:_,version:s.version}).then(g=>u.setItem(s.name,g)).catch(g=>{m=g});if(m)throw m;return d},f=i.setState;i.setState=(_,m)=>{f(_,m),h()};const p=t((..._)=>{n(..._),h()},r,i);let v;const y=()=>{var _;if(!u)return;o=!1,a.forEach(d=>d(r()));const m=((_=s.onRehydrateStorage)==null?void 0:_.call(s,r()))||void 0;return Va(u.getItem.bind(u))(s.name).then(d=>{if(d)return s.deserialize(d)}).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==s.version){if(s.migrate)return s.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var g;return v=s.merge(d,(g=r())!=null?g:p),n(v,!0),h()}).then(()=>{m==null||m(v,void 0),o=!0,l.forEach(d=>d(v))}).catch(d=>{m==null||m(void 0,d)})};return i.persist={setOptions:_=>{s={...s,..._},_.getStorage&&(u=_.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},y(),v||p},wL=(t,e)=>(n,r,i)=>{let s={storage:Xg(()=>localStorage),partialize:y=>y,version:0,merge:(y,_)=>({..._,...y}),...e},o=!1;const a=new Set,l=new Set;let u=s.storage;if(!u)return t((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...y)},r,i);const c=()=>{const y=s.partialize({...r()});return u.setItem(s.name,{state:y,version:s.version})},h=i.setState;i.setState=(y,_)=>{h(y,_),c()};const f=t((...y)=>{n(...y),c()},r,i);i.getInitialState=()=>f;let p;const v=()=>{var y,_;if(!u)return;o=!1,a.forEach(d=>{var g;return d((g=r())!=null?g:f)});const m=((_=s.onRehydrateStorage)==null?void 0:_.call(s,(y=r())!=null?y:f))||void 0;return Va(u.getItem.bind(u))(s.name).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==s.version){if(s.migrate)return s.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var g;return p=s.merge(d,(g=r())!=null?g:f),n(p,!0),c()}).then(()=>{m==null||m(p,void 0),p=r(),o=!0,l.forEach(d=>d(p))}).catch(d=>{m==null||m(void 0,d)})};return i.persist={setOptions:y=>{s={...s,...y},y.storage&&(u=y.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>o,onHydrate:y=>(a.add(y),()=>{a.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},s.skipHydration||v(),p||f},EL=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((bu?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),_L(t,e)):wL(t,e),FS=EL;var TL="firebase",IL="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(TL,IL,"app");var l0=function(){return l0=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l0.apply(this,arguments)};function Jg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function L3(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function US(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SL=US,$S=new Za("auth","Firebase",US());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Km("@firebase/auth");function AL(t,...e){Ac.logLevel<=J.WARN&&Ac.warn(`Auth (${Vi}): ${t}`,...e)}function xu(t,...e){Ac.logLevel<=J.ERROR&&Ac.error(`Auth (${Vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw Zg(t,...e)}function An(t,...e){return Zg(t,...e)}function jS(t,e,n){const r=Object.assign(Object.assign({},SL()),{[e]:n});return new Za("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return jS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $S.create(t,...e)}function $(t,e,...n){if(!t)throw Zg(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xu(e),new Error(e)}function Gn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kL(){return u0()==="http:"||u0()==="https:"}function u0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kL()||v2()||"connection"in navigator)?navigator.onLine:!0}function PL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=g2()||_2()}get(){return RL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL=new yl(3e4,6e4);function Yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,r,i={}){return BS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=el(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zS.fetch()(qS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function BS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CL),e);try{const i=new OL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jS(t,c,u);on(t,c)}}catch(i){if(i instanceof Pn)throw i;on(t,"network-request-failed",{message:String(i)})}}async function vl(t,e,n,r,i={}){const s=await Xr(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ey(t.config,i):`${t.config.apiScheme}://${i}`}function xL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),bL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}function c0(t){return t!==void 0&&t.enterprise!==void 0}class NL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function DL(t,e){return Xr(t,"GET","/v2/recaptchaConfig",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LL(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function HS(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ML(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=ty(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(Hf(i.auth_time)),issuedAtTime:Yo(Hf(i.iat)),expirationTime:Yo(Hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hf(t){return Number(t)*1e3}function ty(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const i=XE(n);return i?JSON.parse(i):(xu("Failed to decode base64 JWT payload"),null)}catch(i){return xu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h0(t){const e=ty(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&VL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fa(t,HS(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WS(s.providerUserInfo):[],a=$L(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cp(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function UL(t){const e=pe(t);await kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $L(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WS(t){return t.map(e=>{var{providerId:n}=e,r=Jg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jL(t,e){const n=await BS(t,{},async()=>{const r=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zL(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=h0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Es;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ML(this,e)}reload(){return UL(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await kc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Fa(this,LL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:E,providerData:k,stsTokenManager:R}=n;$(g&&R,e,"internal-error");const b=Es.fromJSON(this.name,R);$(typeof g=="string",e,"internal-error"),tr(h,e.name),tr(f,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof E=="boolean",e,"internal-error"),tr(p,e.name),tr(v,e.name),tr(y,e.name),tr(_,e.name),tr(m,e.name),tr(d,e.name);const F=new Mn({uid:g,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:E,photoURL:v,phoneNumber:p,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:d});return k&&Array.isArray(k)&&(F.providerData=k.map(j=>Object.assign({},j))),_&&(F._redirectEventId=_),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Es;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await kc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?WS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Es;a.updateFromIdToken(r);const l=new Mn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=new Map;function Vn(t){Gn(t instanceof Function,"Expected a class definition");let e=f0.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,f0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KS.type="NONE";const d0=KS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ou(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ou("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Vn(d0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vn(d0);const o=Ou(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Mn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JS(e))return"Blackberry";if(ZS(e))return"Webos";if(ny(e))return"Safari";if((e.includes("chrome/")||QS(e))&&!e.includes("edge/"))return"Chrome";if(XS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GS(t=Ye()){return/firefox\//i.test(t)}function ny(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QS(t=Ye()){return/crios\//i.test(t)}function YS(t=Ye()){return/iemobile/i.test(t)}function XS(t=Ye()){return/android/i.test(t)}function JS(t=Ye()){return/blackberry/i.test(t)}function ZS(t=Ye()){return/webos/i.test(t)}function Vh(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BL(t=Ye()){var e;return Vh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qL(){return w2()&&document.documentMode===10}function eA(t=Ye()){return Vh(t)||XS(t)||ZS(t)||JS(t)||/windows phone/i.test(t)||YS(t)}function HL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e=[]){let n;switch(t){case"Browser":n=p0(Ye());break;case"Worker":n=`${p0(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Yr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=6;class QL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m0(this),this.idTokenSubscription=new m0(this),this.beforeStateQueue=new WL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$S,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await HS(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject($n(this));const n=e?pe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KL(this),n=new QL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Za("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bi(t){return pe(t)}class m0{constructor(e){this.auth=e,this.observer=null,this.addObserver=P2(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XL(t){Fh=t}function nA(t){return Fh.loadJS(t)}function JL(){return Fh.recaptchaEnterpriseScript}function ZL(){return Fh.gapiScript}function eM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tM="recaptcha-enterprise",nM="NO_RECAPTCHA";class rM{constructor(e){this.type=tM,this.auth=Bi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{DL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new NL(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;c0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(nM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&c0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=JL();l.length!==0&&(l+=a),nA(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function g0(t,e,n,r=!1){const i=new rM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await g0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await g0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t,e){const n=rh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cc(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function sM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oM(t,e,n){const r=Bi(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rA(e),{host:o,port:a}=aM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lM()}function rA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aM(t){const e=rA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:y0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:y0(o)}}}function y0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function uM(t,e){return Xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(t,e){return vl(t,"POST","/v1/accounts:signInWithPassword",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(t,e){return vl(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}async function fM(t,e){return vl(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends ry{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,n,"signInWithPassword",cM);case"emailLink":return hM(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,r,"signUpPassword",uM);case"emailLink":return fM(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return vl(t,"POST","/v1/accounts:signInWithIdp",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM="http://localhost";class bi extends ry{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:dM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=el(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mM(t){const e=Po(Co(t)).link,n=e?Po(Co(e)).deep_link_id:null,r=Po(Co(t)).deep_link_id;return(r?Po(Co(r)).link:null)||r||n||e||t}class iy{constructor(e){var n,r,i,s,o,a;const l=Po(Co(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=pM((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mM(e);try{return new iy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.providerId=ao.PROVIDER_ID}static credential(e,n){return Ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=iy.parseLink(n);return $(r,"argument-error"),Ua._fromEmailAndCode(e,r.code,r.tenantId)}}ao.PROVIDER_ID="password";ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends iA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends _l{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends _l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends _l{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends _l{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(t,e){return vl(t,"POST","/v1/accounts:signUp",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=v0(r);return new xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=v0(r);return new xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function v0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rc(e,n,r,i)}}function sA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(t,s,e,r):s})}async function yM(t,e,n=!1){const r=await Fa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vM(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject($n(r));const i="reauthenticate";try{const s=await Fa(t,sA(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=ty(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e,n=!1){if(mn(t.app))return Promise.reject($n(t));const r="signIn",i=await sA(t,r,e),s=await xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _M(t,e){return oA(Bi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t){const e=Bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function M3(t,e,n){if(mn(t.app))return Promise.reject($n(t));const r=Bi(t),o=await bp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&aA(t),l}),a=await xi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function V3(t,e,n){return mn(t.app)?Promise.reject($n(t)):_M(pe(t),ao.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aA(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(t,e){return pe(t).setPersistence(e)}function wM(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function EM(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function U3(t){return pe(t).signOut()}const Pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(){const t=Ye();return ny(t)||Vh(t)}const IM=1e3,SM=10;class uA extends lA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TM()&&HL(),this.fallbackToPolling=eA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uA.type="LOCAL";const AM=uA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA extends lA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cA.type="SESSION";const hA=cA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await kM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=sy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function PM(t){kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function CM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xM(){return fA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="firebaseLocalStorageDb",OM=1,Cc="firebaseLocalStorage",pA="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $h(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function NM(){const t=indexedDB.deleteDatabase(dA);return new wl(t).toPromise()}function xp(){const t=indexedDB.open(dA,OM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:pA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await NM(),e(await xp()))})})}async function _0(t,e,n){const r=$h(t,!0).put({[pA]:e,value:n});return new wl(r).toPromise()}async function DM(t,e){const n=$h(t,!1).get(e),r=await new wl(n).toPromise();return r===void 0?null:r.value}function w0(t,e){const n=$h(t,!0).delete(e);return new wl(n).toPromise()}const LM=800,MM=3;class mA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uh._getInstance(xM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CM(),!this.activeServiceWorker)return;this.sender=new RM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xp();return await _0(e,Pc,"1"),await w0(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$h(i,!1).getAll();return new wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mA.type="LOCAL";const VM=mA;new yl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(t,e){return e?Vn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends ry{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UM(t){return oA(t.auth,new oy(t),t.bypassAuthState)}function $M(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),vM(n,new oy(t),t.bypassAuthState)}async function jM(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),yM(n,new oy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UM;case"linkViaPopup":case"linkViaRedirect":return jM;case"reauthViaPopup":case"reauthViaRedirect":return $M;default:on(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=new yl(2e3,1e4);class ls extends gA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=sy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zM.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM="pendingRedirect",Nu=new Map;class qM extends gA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const r=await HM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HM(t,e){const n=GM(e),r=KM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WM(t,e){Nu.set(t._key(),e)}function KM(t){return Vn(t._redirectPersistence)}function GM(t){return Ou(BM,t.config.apiKey,t.name)}async function QM(t,e,n=!1){if(mn(t.app))return Promise.reject($n(t));const r=Bi(t),i=FM(r,e),o=await new qM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=10*60*1e3;class XM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YM&&this.cachedEventUids.clear(),this.cachedEventUids.has(E0(e))}saveEventToCache(e){this.cachedEventUids.add(E0(e)),this.lastProcessedEventTime=Date.now()}}function E0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZM(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tV=/^https?/;async function nV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZM(t);for(const n of e)try{if(rV(n))return}catch{}on(t,"unauthorized-domain")}function rV(t){const e=Pp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tV.test(n))return!1;if(eV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=new yl(3e4,6e4);function T0(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sV(t){return new Promise((e,n)=>{var r,i,s;function o(){T0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T0(),n(An(t,"network-request-failed"))},timeout:iV.get()})}if(!((i=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kn().gapi)===null||s===void 0)&&s.load)o();else{const a=eM("iframefcb");return kn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},nA(`${ZL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Du=null,e})}let Du=null;function oV(t){return Du=Du||sV(t),Du}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV=new yl(5e3,15e3),lV="__/auth/iframe",uV="emulator/auth/iframe",cV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fV(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ey(e,uV):`https://${t.config.authDomain}/${lV}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},i=hV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${el(r).slice(1)}`}async function dV(t){const e=await oV(t),n=kn().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:fV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=kn().setTimeout(()=>{s(o)},aV.get());function l(){kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mV=500,gV=600,yV="_blank",vV="http://localhost";class I0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _V(t,e,n,r=mV,i=gV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pV),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ye().toLowerCase();n&&(a=QS(u)?yV:n),GS(u)&&(e=e||vV,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(BL(u)&&a!=="_self")return wV(e||"",a),new I0(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new I0(h)}function wV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV="__/auth/handler",TV="emulator/auth/handler",IV=encodeURIComponent("fac");async function S0(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:i};if(e instanceof iA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",R2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof _l){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${IV}=${encodeURIComponent(l)}`:"";return`${SV(t)}?${el(a).slice(1)}${u}`}function SV({config:t}){return t.emulator?ey(t,TV):`https://${t.authDomain}/${EV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="webStorageSupport";class AV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hA,this._completeRedirectFn=QM,this._overrideRedirectResult=WM}async _openPopup(e,n,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await S0(e,n,r,Pp(),i);return _V(e,o,sy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await S0(e,n,r,Pp(),i);return PM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dV(e),r=new XM(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wf,{type:Wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wf];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eA()||ny()||Vh()}}const kV=AV;var A0="@firebase/auth",k0="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CV(t){ki(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tA(t)},u=new YL(r,i,s,l);return sM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ki(new Mr("auth-internal",e=>{const n=Bi(e.getProvider("auth").getImmediate());return(r=>new RV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(A0,k0,PV(t)),Tn(A0,k0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV=5*60,xV=tT("authIdTokenMaxAge")||bV;let R0=null;const OV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xV)return;const i=n==null?void 0:n.token;R0!==i&&(R0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NV(t=Qm()){const e=rh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iM(t,{popupRedirectResolver:kV,persistence:[VM,AM,hA]}),r=tT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=OV(s.toString());EM(n,o,()=>o(n.currentUser)),wM(n,a=>o(a))}}const i=JE("auth");return i&&oM(n,`http://${i}`),n}function DV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CV("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="firebasestorage.googleapis.com",_A="storageBucket",LV=2*60*1e3,MV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Pn{constructor(e,n,r=0){super(Kf(e),`Firebase Storage: ${n} (${Kf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Kf(t){return"storage/"+t}function ay(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Ie.UNKNOWN,t)}function VV(t){return new Se(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FV(t){return new Se(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Ie.UNAUTHENTICATED,t)}function $V(){return new Se(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jV(t){return new Se(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zV(){return new Se(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BV(){return new Se(Ie.CANCELED,"User canceled the upload/download.")}function qV(t){return new Se(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function HV(t){return new Se(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WV(){return new Se(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_A+"' property when initializing the app?")}function KV(){return new Se(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GV(){return new Se(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QV(t){return new Se(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Op(t){return new Se(Ie.INVALID_ARGUMENT,t)}function wA(){return new Se(Ie.APP_DELETED,"The Firebase app was deleted.")}function YV(t){return new Se(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xo(t,e){return new Se(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Io(t){throw new Se(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(r.path==="")return r;throw HV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},y=n===vA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const E=g[w],k=E.regex.exec(e);if(k){const R=k[E.indices.bucket];let b=k[E.indices.path];b||(b=""),r=new pt(R,b),E.postModify(r);break}}if(r==null)throw qV(e);return r}}class XV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function f(){s&&clearTimeout(s)}function p(_,...m){if(u){f();return}if(_){f(),c.call(null,_,...m);return}if(l()||o){f(),c.call(null,_,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let v=!1;function y(_){v||(v=!0,f(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function ZV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t){return t!==void 0}function t4(t){return typeof t=="object"&&!Array.isArray(t)}function ly(t){return typeof t=="string"||t instanceof String}function P0(t){return uy()&&t instanceof Blob}function uy(){return typeof Blob<"u"}function Np(t,e,n,r){if(r<e)throw Op(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Op(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function EA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_i||(_i={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,n,r,i,s,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ru(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_i.NO_ERROR,l=s.getStatus();if(!a||n4(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===_i.ABORT;r(!1,new ru(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ru(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());e4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ay();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?wA():BV();o(l)}else{const l=zV();o(l)}};this.canceled_?n(!1,new ru(!1,null,!0)):this.backoffId_=JV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ru{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function i4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function s4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function o4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function a4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function l4(t,e,n,r,i,s,o=!0){const a=EA(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return o4(u,e),i4(u,n),s4(u,s),a4(u,r),new r4(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function c4(...t){const e=u4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(uy())return new Blob(t);throw new Se(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function h4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f4(t){if(typeof atob>"u")throw QV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gf{constructor(e,n){this.data=e,this.contentType=n||null}}function d4(t,e){switch(t){case vn.RAW:return new Gf(TA(e));case vn.BASE64:case vn.BASE64URL:return new Gf(IA(t,e));case vn.DATA_URL:return new Gf(m4(e),g4(e))}throw ay()}function TA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function p4(t){let e;try{e=decodeURIComponent(t)}catch{throw Xo(vn.DATA_URL,"Malformed data URL.")}return TA(e)}function IA(t,e){switch(t){case vn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Xo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Xo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=f4(e)}catch(i){throw i.message.includes("polyfill")?i:Xo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class SA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xo(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=y4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function m4(t){const e=new SA(t);return e.base64?IA(vn.BASE64,e.rest):p4(e.rest)}function g4(t){return new SA(t).contentType}function y4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){let r=0,i="";P0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(P0(this.data_)){const r=this.data_,i=h4(r,e,n);return i===null?null:new fr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(uy()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(c4.apply(null,n))}else{const n=e.map(o=>ly(o)?d4(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new fr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){let e;try{e=JSON.parse(t)}catch{return null}return t4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t,e){return e}class lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||w4}}let iu=null;function E4(t){return!ly(t)||t.length<2?t:AA(t)}function kA(){if(iu)return iu;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(s,o){return E4(o)}const n=new lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new lt("size");return i.xform=r,t.push(i),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),iu=t,iu}function T4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function I4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return T4(r,t),r}function RA(t,e,n){const r=cy(e);return r===null?null:I4(t,r,n)}function S4(t,e,n,r){const i=cy(e);if(i===null||!ly(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),p=El(f,n,r),v=EA({alt:"media",token:u});return p+v})[0]}function A4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="prefixes",b0="items";function k4(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[C0])for(const i of n[C0]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new pt(e,s));r.prefixes.push(o)}if(n[b0])for(const i of n[b0]){const s=t._makeStorageReference(new pt(e,i.name));r.items.push(s)}return r}function R4(t,e,n){const r=cy(n);return r===null?null:k4(t,e,r)}class jh{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){if(!t)throw ay()}function P4(t,e){function n(r,i){const s=RA(t,i,e);return hy(s!==null),s}return n}function C4(t,e){function n(r,i){const s=R4(t,e,i);return hy(s!==null),s}return n}function b4(t,e){function n(r,i){const s=RA(t,i,e);return hy(s!==null),S4(s,i,t.host,t._protocol)}return n}function fy(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=$V():i=UV():n.getStatus()===402?i=FV(t.bucket):n.getStatus()===403?i=jV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function PA(t){const e=fy(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=VV(t.path)),s.serverResponse=i.serverResponse,s}return n}function x4(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=El(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new jh(a,l,C4(t,e.bucket),u);return c.urlParams=s,c.errorHandler=fy(e),c}function O4(t,e,n){const r=e.fullServerUrl(),i=El(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new jh(i,s,b4(t,n),o);return a.errorHandler=PA(e),a}function N4(t,e){const n=e.fullServerUrl(),r=El(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new jh(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=PA(e),a}function D4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function L4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=D4(null,e)),r}function M4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let w=0;w<2;w++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=L4(e,r,i),c=A4(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=fr.getBlob(h,r,f);if(p===null)throw KV();const v={name:u.fullPath},y=El(s,t.host,t._protocol),_="POST",m=t.maxUploadRetryTime,d=new jh(y,_,P4(t,n),m);return d.urlParams=v,d.headers=o,d.body=p.uploadData(),d.errorHandler=fy(e),d}class V4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class F4 extends V4{initXhr(){this.xhr_.responseType="text"}}function zh(){return new F4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oi(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AA(this._location.path)}get storage(){return this._service}get parent(){const e=v4(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new Oi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YV(e)}}function U4(t,e,n){t._throwIfRoot("uploadBytes");const r=M4(t.storage,t._location,kA(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,zh).then(i=>({metadata:i,ref:t}))}function $4(t){const e={prefixes:[],items:[]};return CA(t,e).then(()=>e)}async function CA(t,e,n){const i=await j4(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await CA(t,e,i.nextPageToken)}function j4(t,e){e!=null&&typeof e.maxResults=="number"&&Np("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=x4(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,zh)}function z4(t){t._throwIfRoot("getDownloadURL");const e=O4(t.storage,t._location,kA());return t.storage.makeRequestWithTokens(e,zh).then(n=>{if(n===null)throw GV();return n})}function B4(t){t._throwIfRoot("deleteObject");const e=N4(t.storage,t._location);return t.storage.makeRequestWithTokens(e,zh)}function q4(t,e){const n=_4(t._location.path,e),r=new pt(t._location.bucket,n);return new Oi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H4(t){return/^[A-Za-z]+:\/\//.test(t)}function W4(t,e){return new Oi(t,e)}function bA(t,e){if(t instanceof dy){const n=t;if(n._bucket==null)throw WV();const r=new Oi(n,n._bucket);return e!=null?bA(r,e):r}else return e!==void 0?q4(t,e):t}function K4(t,e){if(e&&H4(e)){if(t instanceof dy)return W4(t,e);throw Op("To use ref(service, url), the first argument must be a Storage instance.")}else return bA(t,e)}function x0(t,e){const n=e==null?void 0:e[_A];return n==null?null:pt.makeFromBucketSpec(n,t)}function G4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nT(i,t.app.options.projectId))}class dy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LV,this._maxUploadRetryTime=MV,this._requests=new Set,i!=null?this._bucket=pt.makeFromBucketSpec(i,this._host):this._bucket=x0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=x0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new XV(wA());{const o=l4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const O0="@firebase/storage",N0="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="storage";function $3(t,e,n){return t=pe(t),U4(t,e,n)}function j3(t){return t=pe(t),$4(t)}function z3(t){return t=pe(t),z4(t)}function B3(t){return t=pe(t),B4(t)}function q3(t,e){return t=pe(t),K4(t,e)}function Q4(t=Qm(),e){t=pe(t);const r=rh(t,xA).getImmediate({identifier:e}),i=ZE("storage");return i&&Y4(r,...i),r}function Y4(t,e,n,r={}){G4(t,e,n,r)}function X4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new dy(n,r,i,e,Vi)}function J4(){ki(new Mr(xA,X4,"PUBLIC").setMultipleInstances(!0)),Tn(O0,N0,""),Tn(O0,N0,"esm2017")}J4();const Z4={apiKey:"AIzaSyCRT1fpOGMiFV6mx6cSI4qCBXY6rPUJ37s",authDomain:"uniform-test-74ed1.firebaseapp.com",projectId:"uniform-test-74ed1",storageBucket:"uniform-test-74ed1.appspot.com",messagingSenderId:"705320031525",appId:"1:705320031525:web:9ac7c5efd2826292ad36cc"},py=sT(Z4),OA=NV(py),NA=CD(py),H3=Q4(py),D0=async t=>{var n;const e=(n=OA.currentUser)==null?void 0:n.uid;if(e){const r=jg(RD(NA,"carts"),e);await BD(r,{items:t})}else console.log("cartToFirebase error")},Dp=MS()(FS(VS((t,e)=>({cart:[],cartLength:()=>e().cart.length,setCart:n=>t({cart:[n]}),addCart:n=>{const{cart:r}=e();if(r.includes(n))console.log("카트에 상품이 이미 있습니다.");else{const i=[...r,n];t({cart:i}),D0(i)}},removeCart:n=>{const{cart:r}=e(),i=r.filter(s=>s!==n);t({cart:i}),D0(i)}})),{name:"cartStorage",storage:Xg(()=>sessionStorage)})),eF=()=>{P.useEffect(()=>{const t=OA.onAuthStateChanged(async e=>{if(e){const n=e.uid,r=jg(NA,"carts",n),i=await zD(r);if(i.exists()){const s=i.data();s&&s.items?Dp.setState({cart:s.items}):console.log("카드에 아이템 없음")}else console.log("cartFromFireStore ERROR")}else Dp.setState({cart:[]})});return()=>t()},[])},tF=()=>L.jsx("div",{className:"h-20"});function L0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L0(Object(n),!0).forEach(function(r){Le(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function bc(t){"@babel/helpers - typeof";return bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bc(t)}function nF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rF(t,e,n){return e&&M0(t.prototype,e),n&&M0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Le(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function my(t,e){return sF(t)||aF(t,e)||DA(t,e)||uF()}function Tl(t){return iF(t)||oF(t)||DA(t)||lF()}function iF(t){if(Array.isArray(t))return Lp(t)}function sF(t){if(Array.isArray(t))return t}function oF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function aF(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function DA(t,e){if(t){if(typeof t=="string")return Lp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lp(t,e)}}function Lp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function lF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var V0=function(){},gy={},LA={},MA=null,VA={mark:V0,measure:V0};try{typeof window<"u"&&(gy=window),typeof document<"u"&&(LA=document),typeof MutationObserver<"u"&&(MA=MutationObserver),typeof performance<"u"&&(VA=performance)}catch{}var cF=gy.navigator||{},F0=cF.userAgent,U0=F0===void 0?"":F0,$r=gy,fe=LA,$0=MA,su=VA;$r.document;var Zn=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",FA=~U0.indexOf("MSIE")||~U0.indexOf("Trident/"),ou,au,lu,uu,cu,Qn="___FONT_AWESOME___",Mp=16,UA="fa",$A="svg-inline--fa",Ni="data-fa-i2svg",Vp="data-fa-pseudo-element",hF="data-fa-pseudo-element-pending",yy="data-prefix",vy="data-icon",j0="fontawesome-i2svg",fF="async",dF=["HTML","HEAD","STYLE","SCRIPT"],jA=function(){try{return!0}catch{return!1}}(),le="classic",Ee="sharp",_y=[le,Ee];function Il(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[le]}})}var $a=Il((ou={},Le(ou,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Le(ou,Ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ou)),ja=Il((au={},Le(au,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Le(au,Ee,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),au)),za=Il((lu={},Le(lu,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Le(lu,Ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),lu)),pF=Il((uu={},Le(uu,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Le(uu,Ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),uu)),mF=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,zA="fa-layers-text",gF=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yF=Il((cu={},Le(cu,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Le(cu,Ee,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),cu)),BA=[1,2,3,4,5,6,7,8,9,10],vF=BA.concat([11,12,13,14,15,16,17,18,19,20]),_F=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ui={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ba=new Set;Object.keys(ja[le]).map(Ba.add.bind(Ba));Object.keys(ja[Ee]).map(Ba.add.bind(Ba));var wF=[].concat(_y,Tl(Ba),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ui.GROUP,ui.SWAP_OPACITY,ui.PRIMARY,ui.SECONDARY]).concat(BA.map(function(t){return"".concat(t,"x")})).concat(vF.map(function(t){return"w-".concat(t)})),Jo=$r.FontAwesomeConfig||{};function EF(t){var e=fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function TF(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(fe&&typeof fe.querySelector=="function"){var IF=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];IF.forEach(function(t){var e=my(t,2),n=e[0],r=e[1],i=TF(EF(n));i!=null&&(Jo[r]=i)})}var qA={styleDefault:"solid",familyDefault:"classic",cssPrefix:UA,replacementClass:$A,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jo.familyPrefix&&(Jo.cssPrefix=Jo.familyPrefix);var Ys=x(x({},qA),Jo);Ys.autoReplaceSvg||(Ys.observeMutations=!1);var V={};Object.keys(qA).forEach(function(t){Object.defineProperty(V,t,{enumerable:!0,set:function(n){Ys[t]=n,Zo.forEach(function(r){return r(V)})},get:function(){return Ys[t]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(e){Ys.cssPrefix=e,Zo.forEach(function(n){return n(V)})},get:function(){return Ys.cssPrefix}});$r.FontAwesomeConfig=V;var Zo=[];function SF(t){return Zo.push(t),function(){Zo.splice(Zo.indexOf(t),1)}}var nr=Mp,_n={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function AF(t){if(!(!t||!Zn)){var e=fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return fe.head.insertBefore(e,r),t}}var kF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qa(){for(var t=12,e="";t-- >0;)e+=kF[Math.random()*62|0];return e}function lo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function wy(t){return t.classList?lo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function HA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function RF(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(HA(t[n]),'" ')},"").trim()}function Bh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ey(t){return t.size!==_n.size||t.x!==_n.x||t.y!==_n.y||t.rotate!==_n.rotate||t.flipX||t.flipY}function PF(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function CF(t){var e=t.transform,n=t.width,r=n===void 0?Mp:n,i=t.height,s=i===void 0?Mp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&FA?l+="translate(".concat(e.x/nr-r/2,"em, ").concat(e.y/nr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/nr,"em), calc(-50% + ").concat(e.y/nr,"em)) "):l+="translate(".concat(e.x/nr,"em, ").concat(e.y/nr,"em) "),l+="scale(".concat(e.size/nr*(e.flipX?-1:1),", ").concat(e.size/nr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var bF=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function WA(){var t=UA,e=$A,n=V.cssPrefix,r=V.replacementClass,i=bF;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var z0=!1;function Qf(){V.autoAddCss&&!z0&&(AF(WA()),z0=!0)}var xF={mixout:function(){return{dom:{css:WA,insertCss:Qf}}},hooks:function(){return{beforeDOMElementCreation:function(){Qf()},beforeI2svg:function(){Qf()}}}},Yn=$r||{};Yn[Qn]||(Yn[Qn]={});Yn[Qn].styles||(Yn[Qn].styles={});Yn[Qn].hooks||(Yn[Qn].hooks={});Yn[Qn].shims||(Yn[Qn].shims=[]);var Jt=Yn[Qn],KA=[],OF=function t(){fe.removeEventListener("DOMContentLoaded",t),xc=1,KA.map(function(e){return e()})},xc=!1;Zn&&(xc=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),xc||fe.addEventListener("DOMContentLoaded",OF));function NF(t){Zn&&(xc?setTimeout(t,0):KA.push(t))}function Sl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?HA(t):"<".concat(e," ").concat(RF(r),">").concat(s.map(Sl).join(""),"</").concat(e,">")}function B0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var DF=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Yf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?DF(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function LF(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Fp(t){var e=LF(t);return e.length===1?e[0].toString(16):null}function MF(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function q0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Up(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=q0(e);typeof Jt.hooks.addPack=="function"&&!i?Jt.hooks.addPack(t,q0(e)):Jt.styles[t]=x(x({},Jt.styles[t]||{}),s),t==="fas"&&Up("fa",e)}var hu,fu,du,us=Jt.styles,VF=Jt.shims,FF=(hu={},Le(hu,le,Object.values(za[le])),Le(hu,Ee,Object.values(za[Ee])),hu),Ty=null,GA={},QA={},YA={},XA={},JA={},UF=(fu={},Le(fu,le,Object.keys($a[le])),Le(fu,Ee,Object.keys($a[Ee])),fu);function $F(t){return~wF.indexOf(t)}function jF(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!$F(i)?i:null}var ZA=function(){var e=function(s){return Yf(us,function(o,a,l){return o[l]=Yf(a,s,{}),o},{})};GA=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),QA=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),JA=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in us||V.autoFetchSvg,r=Yf(VF,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});YA=r.names,XA=r.unicodes,Ty=qh(V.styleDefault,{family:V.familyDefault})};SF(function(t){Ty=qh(t.styleDefault,{family:V.familyDefault})});ZA();function Iy(t,e){return(GA[t]||{})[e]}function zF(t,e){return(QA[t]||{})[e]}function ci(t,e){return(JA[t]||{})[e]}function ek(t){return YA[t]||{prefix:null,iconName:null}}function BF(t){var e=XA[t],n=Iy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function jr(){return Ty}var Sy=function(){return{prefix:null,iconName:null,rest:[]}};function qh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?le:n,i=$a[r][t],s=ja[r][t]||ja[r][i],o=t in Jt.styles?t:null;return s||o||null}var H0=(du={},Le(du,le,Object.keys(za[le])),Le(du,Ee,Object.keys(za[Ee])),du);function Hh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Le(e,le,"".concat(V.cssPrefix,"-").concat(le)),Le(e,Ee,"".concat(V.cssPrefix,"-").concat(Ee)),e),o=null,a=le;(t.includes(s[le])||t.some(function(u){return H0[le].includes(u)}))&&(a=le),(t.includes(s[Ee])||t.some(function(u){return H0[Ee].includes(u)}))&&(a=Ee);var l=t.reduce(function(u,c){var h=jF(V.cssPrefix,c);if(us[c]?(c=FF[a].includes(c)?pF[a][c]:c,o=c,u.prefix=c):UF[a].indexOf(c)>-1?(o=c,u.prefix=qh(c,{family:a})):h?u.iconName=h:c!==V.replacementClass&&c!==s[le]&&c!==s[Ee]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?ek(u.iconName):{},p=ci(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!us.far&&us.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},Sy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ee&&(us.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=ci(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=jr()||"fas"),l}var qF=function(){function t(){nF(this,t),this.definitions={}}return rF(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=x(x({},n.definitions[a]||{}),o[a]),Up(a,o[a]);var l=za[le][a];l&&Up(l,o[a]),ZA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),W0=[],cs={},Ss={},HF=Object.keys(Ss);function WF(t,e){var n=e.mixoutsTo;return W0=t,cs={},Object.keys(Ss).forEach(function(r){HF.indexOf(r)===-1&&delete Ss[r]}),W0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),bc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){cs[o]||(cs[o]=[]),cs[o].push(s[o])})}r.provides&&r.provides(Ss)}),n}function $p(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=cs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=cs[t]||[];i.forEach(function(s){s.apply(null,n)})}function Xn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ss[t]?Ss[t].apply(null,e):void 0}function jp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||jr();if(e)return e=ci(n,e)||e,B0(tk.definitions,n,e)||B0(Jt.styles,n,e)}var tk=new qF,KF=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Di("noAuto")},GF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(Di("beforeI2svg",e),Xn("pseudoElements2svg",e),Xn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,NF(function(){YF({autoReplaceSvgRoot:n}),Di("watch",e)})}},QF={icon:function(e){if(e===null)return null;if(bc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ci(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=qh(e[0]);return{prefix:r,iconName:ci(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(V.cssPrefix,"-"))>-1||e.match(mF))){var i=Hh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||jr(),iconName:ci(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=jr();return{prefix:s,iconName:ci(s,e)||e}}}},Lt={noAuto:KF,config:V,dom:GF,parse:QF,library:tk,findIconDefinition:jp,toHtml:Sl},YF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(Jt.styles).length>0||V.autoFetchSvg)&&Zn&&V.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function Wh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Sl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Zn){var r=fe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function XF(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Ey(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Bh(x(x({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function JF(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function Ay(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,p=f===void 0?!1:f,v=r.found?r:n,y=v.width,_=v.height,m=i==="fak",d=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(F){return h.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(h.classes).join(" "),g={children:[],attributes:x(x({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(_)})},w=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/_*16*.0625,"em")}:{};p&&(g.attributes[Ni]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||qa())},children:[l]}),delete g.attributes.title);var E=x(x({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:x(x({},w),h.styles)}),k=r.found&&n.found?Xn("generateAbstractMask",E)||{children:[],attributes:{}}:Xn("generateAbstractIcon",E)||{children:[],attributes:{}},R=k.children,b=k.attributes;return E.children=R,E.attributes=b,a?JF(E):XF(E)}function K0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=x(x(x({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ni]="");var c=x({},o.styles);Ey(i)&&(c.transform=CF({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=Bh(c);h.length>0&&(u.style=h);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function ZF(t){var e=t.content,n=t.title,r=t.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Bh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xf=Jt.styles;function zp(t){var e=t[0],n=t[1],r=t.slice(4),i=my(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(ui.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(ui.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(ui.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var eU={found:!1,width:512,height:512};function tU(t,e){!jA&&!V.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Bp(t,e){var n=e;return e==="fa"&&V.styleDefault!==null&&(e=jr()),new Promise(function(r,i){if(Xn("missingIconAbstract"),n==="fa"){var s=ek(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xf[e]&&Xf[e][t]){var o=Xf[e][t];return r(zp(o))}tU(t,e),r(x(x({},eU),{},{icon:V.showMissingIcons&&t?Xn("missingIconAbstract")||{}:{}}))})}var G0=function(){},qp=V.measurePerformance&&su&&su.mark&&su.measure?su:{mark:G0,measure:G0},Lo='FA "6.5.2"',nU=function(e){return qp.mark("".concat(Lo," ").concat(e," begins")),function(){return nk(e)}},nk=function(e){qp.mark("".concat(Lo," ").concat(e," ends")),qp.measure("".concat(Lo," ").concat(e),"".concat(Lo," ").concat(e," begins"),"".concat(Lo," ").concat(e," ends"))},ky={begin:nU,end:nk},Lu=function(){};function Q0(t){var e=t.getAttribute?t.getAttribute(Ni):null;return typeof e=="string"}function rU(t){var e=t.getAttribute?t.getAttribute(yy):null,n=t.getAttribute?t.getAttribute(vy):null;return e&&n}function iU(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(V.replacementClass)}function sU(){if(V.autoReplaceSvg===!0)return Mu.replace;var t=Mu[V.autoReplaceSvg];return t||Mu.replace}function oU(t){return fe.createElementNS("http://www.w3.org/2000/svg",t)}function aU(t){return fe.createElement(t)}function rk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?oU:aU:n;if(typeof t=="string")return fe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(rk(o,{ceFn:r}))}),i}function lU(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Mu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(rk(i),n)}),n.getAttribute(Ni)===null&&V.keepOriginalSource){var r=fe.createComment(lU(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~wy(n).indexOf(V.replacementClass))return Mu.replace(e);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Sl(a)}).join(`
`);n.setAttribute(Ni,""),n.innerHTML=o}};function Y0(t){t()}function ik(t,e){var n=typeof e=="function"?e:Lu;if(t.length===0)n();else{var r=Y0;V.mutateApproach===fF&&(r=$r.requestAnimationFrame||Y0),r(function(){var i=sU(),s=ky.begin("mutate");t.map(i),s(),n()})}}var Ry=!1;function sk(){Ry=!0}function Hp(){Ry=!1}var Oc=null;function X0(t){if($0&&V.observeMutations){var e=t.treeCallback,n=e===void 0?Lu:e,r=t.nodeCallback,i=r===void 0?Lu:r,s=t.pseudoElementsCallback,o=s===void 0?Lu:s,a=t.observeMutationsRoot,l=a===void 0?fe:a;Oc=new $0(function(u){if(!Ry){var c=jr();lo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Q0(h.addedNodes[0])&&(V.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&V.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Q0(h.target)&&~_F.indexOf(h.attributeName))if(h.attributeName==="class"&&rU(h.target)){var f=Hh(wy(h.target)),p=f.prefix,v=f.iconName;h.target.setAttribute(yy,p||c),v&&h.target.setAttribute(vy,v)}else iU(h.target)&&i(h.target)})}}),Zn&&Oc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uU(){Oc&&Oc.disconnect()}function cU(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function hU(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Hh(wy(t));return i.prefix||(i.prefix=jr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=zF(i.prefix,t.innerText)||Iy(i.prefix,Fp(t.innerText))),!i.iconName&&V.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function fU(t){var e=lo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||qa()):(e["aria-hidden"]="true",e.focusable="false")),e}function dU(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_n,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hU(t),r=n.iconName,i=n.prefix,s=n.rest,o=fU(t),a=$p("parseNodeAttributes",{},t),l=e.styleParser?cU(t):[];return x({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:_n,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var pU=Jt.styles;function ok(t){var e=V.autoReplaceSvg==="nest"?J0(t,{styleParser:!1}):J0(t);return~e.extra.classes.indexOf(zA)?Xn("generateLayersText",t,e):Xn("generateSvgReplacementMutation",t,e)}var zr=new Set;_y.map(function(t){zr.add("fa-".concat(t))});Object.keys($a[le]).map(zr.add.bind(zr));Object.keys($a[Ee]).map(zr.add.bind(zr));zr=Tl(zr);function Z0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();var n=fe.documentElement.classList,r=function(h){return n.add("".concat(j0,"-").concat(h))},i=function(h){return n.remove("".concat(j0,"-").concat(h))},s=V.autoFetchSvg?zr:_y.map(function(c){return"fa-".concat(c)}).concat(Object.keys(pU));s.includes("fa")||s.push("fa");var o=[".".concat(zA,":not([").concat(Ni,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Ni,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=lo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ky.begin("onTree"),u=a.reduce(function(c,h){try{var f=ok(h);f&&c.push(f)}catch(p){jA||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(f){ik(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),h(f)})})}function mU(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ok(t).then(function(n){n&&ik([n],e)})}function gU(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:jp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:jp(i||{})),t(r,x(x({},n),{},{mask:i}))}}var yU=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_n:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,f=h===void 0?null:h,p=n.titleId,v=p===void 0?null:p,y=n.classes,_=y===void 0?[]:y,m=n.attributes,d=m===void 0?{}:m,g=n.styles,w=g===void 0?{}:g;if(e){var E=e.prefix,k=e.iconName,R=e.icon;return Wh(x({type:"icon"},e),function(){return Di("beforeDOMElementCreation",{iconDefinition:e,params:n}),V.autoA11y&&(f?d["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(v||qa()):(d["aria-hidden"]="true",d.focusable="false")),Ay({icons:{main:zp(R),mask:l?zp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:k,transform:x(x({},_n),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:d,styles:w,classes:_}})})}},vU={mixout:function(){return{icon:gU(yU)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Z0,n.nodeCallback=mU,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,o=s===void 0?function(){}:s;return Z0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,v){Promise.all([Bp(i,a),c.iconName?Bp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var _=my(y,2),m=_[0],d=_[1];p([n,Ay({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Bh(a);l.length>0&&(i.style=l);var u;return Ey(o)&&(u=Xn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},_U={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Wh({type:"layer"},function(){Di("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Tl(s)).join(" ")},children:o}]})}}}},wU={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return Wh({type:"counter",content:n},function(){return Di("beforeDOMElementCreation",{content:n,params:r}),ZF({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Tl(a))}})})}}}},EU={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?_n:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return Wh({type:"text",content:n},function(){return Di("beforeDOMElementCreation",{content:n,params:r}),K0({content:n,transform:x(x({},_n),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Tl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(FA){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,K0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},TU=new RegExp('"',"ug"),ew=[1105920,1112319];function IU(t){var e=t.replace(TU,""),n=MF(e,0),r=n>=ew[0]&&n<=ew[1],i=e.length===2?e[0]===e[1]:!1;return{value:Fp(i?e[0]:e),isSecondary:r||i}}function tw(t,e){var n="".concat(hF).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=lo(t.children),o=s.filter(function(R){return R.getAttribute(Vp)===e})[0],a=$r.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(gF),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Ee:le,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ja[f][l[2].toLowerCase()]:yF[f][u],v=IU(h),y=v.value,_=v.isSecondary,m=l[0].startsWith("FontAwesome"),d=Iy(p,y),g=d;if(m){var w=BF(y);w.iconName&&w.prefix&&(d=w.iconName,p=w.prefix)}if(d&&!_&&(!o||o.getAttribute(yy)!==p||o.getAttribute(vy)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var E=dU(),k=E.extra;k.attributes[Vp]=e,Bp(d,p).then(function(R){var b=Ay(x(x({},E),{},{icons:{main:R,mask:Sy()},prefix:p,iconName:g,extra:k,watchable:!0})),F=fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=b.map(function(j){return Sl(j)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function SU(t){return Promise.all([tw(t,"::before"),tw(t,"::after")])}function AU(t){return t.parentNode!==document.head&&!~dF.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function nw(t){if(Zn)return new Promise(function(e,n){var r=lo(t.querySelectorAll("*")).filter(AU).map(SU),i=ky.begin("searchPseudoElements");sk(),Promise.all(r).then(function(){i(),Hp(),e()}).catch(function(){i(),Hp(),n()})})}var kU={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=nw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;V.searchPseudoElements&&nw(i)}}},rw=!1,RU={mixout:function(){return{dom:{unwatch:function(){sk(),rw=!0}}}},hooks:function(){return{bootstrap:function(){X0($p("mutationObserverCallbacks",{}))},noAuto:function(){uU()},watch:function(n){var r=n.observeMutationsRoot;rw?Hp():X0($p("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},iw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},PU={mixout:function(){return{parse:{transform:function(n){return iw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=iw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:x({},p.outer),children:[{tag:"g",attributes:x({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),p.path)}]}]}}}},Jf={x:0,y:0,width:"100%",height:"100%"};function sw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function CU(t){return t.tag==="g"?t.children:[t]}var bU={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Hh(i.split(" ").map(function(o){return o.trim()})):Sy();return s.prefix||(s.prefix=jr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,f=o.icon,p=PF({transform:l,containerWidth:h,iconWidth:u}),v={tag:"rect",attributes:x(x({},Jf),{},{fill:"white"})},y=c.children?{children:c.children.map(sw)}:{},_={tag:"g",attributes:x({},p.inner),children:[sw(x({tag:c.tag,attributes:x(x({},c.attributes),p.path)},y))]},m={tag:"g",attributes:x({},p.outer),children:[_]},d="mask-".concat(a||qa()),g="clip-".concat(a||qa()),w={tag:"mask",attributes:x(x({},Jf),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:CU(f)},w]};return r.push(E,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Jf)}),{children:r,attributes:i}}}},xU={provides:function(e){var n=!1;$r.matchMedia&&(n=$r.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:x(x({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},OU={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},NU=[xF,vU,_U,wU,EU,kU,RU,PU,bU,xU,OU];WF(NU,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Wp=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var DU=Lt.icon;Lt.layer;Lt.text;Lt.counter;var ak={exports:{}},LU="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",MU=LU,VU=MU;function lk(){}function uk(){}uk.resetWarningCache=lk;var FU=function(){function t(r,i,s,o,a,l){if(l!==VU){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:uk,resetWarningCache:lk};return n.PropTypes=n,n};ak.exports=FU();var UU=ak.exports;const Q=Dc(UU);function ow(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Tr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ow(Object(n),!0).forEach(function(r){hs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ow(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nc(t){"@babel/helpers - typeof";return Nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nc(t)}function hs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $U(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jU(t,e){if(t==null)return{};var n=$U(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Kp(t){return zU(t)||BU(t)||qU(t)||HU()}function zU(t){if(Array.isArray(t))return Gp(t)}function BU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qU(t,e){if(t){if(typeof t=="string")return Gp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gp(t,e)}}function Gp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function HU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WU(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,f=t.fixedWidth,p=t.inverse,v=t.border,y=t.listItem,_=t.flip,m=t.size,d=t.rotation,g=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":p,"fa-border":v,"fa-li":y,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},hs(e,"fa-".concat(m),typeof m<"u"&&m!==null),hs(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),hs(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),hs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(E){return w[E]?E:null}).filter(function(E){return E})}function KU(t){return t=t-0,t===t}function ck(t){return KU(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var GU=["style"];function QU(t){return t.charAt(0).toUpperCase()+t.slice(1)}function YU(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ck(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[QU(i)]=s:e[i]=s,e},{})}function hk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return hk(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=YU(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[ck(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=jU(n,GU);return i.attrs.style=Tr(Tr({},i.attrs.style),o),t.apply(void 0,[e.tag,Tr(Tr({},i.attrs),a)].concat(Kp(r)))}var fk=!1;try{fk=!0}catch{}function XU(){if(!fk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function aw(t){if(t&&Nc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wp.icon)return Wp.icon(t);if(t===null)return null;if(t&&Nc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?hs({},t,e):{}}var Al=Ga.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=aw(n),c=Zf("classes",[].concat(Kp(WU(t)),Kp(s.split(" ")))),h=Zf("transform",typeof t.transform=="string"?Wp.transform(t.transform):t.transform),f=Zf("mask",aw(r)),p=DU(u,Tr(Tr(Tr(Tr({},c),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return XU("Could not find icon",u),null;var v=p.abstract,y={ref:e};return Object.keys(t).forEach(function(_){Al.defaultProps.hasOwnProperty(_)||(y[_]=t[_])}),JU(v[0],y)});Al.displayName="FontAwesomeIcon";Al.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};Al.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var JU=hk.bind(null,Ga.createElement),W3={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]},K3={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},G3={prefix:"fas",iconName:"circle-up",icon:[512,512,[61467,"arrow-alt-circle-up"],"f35b","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4l107.1-99.9c3.8-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5l107.1 99.9c4.5 4.2 7.1 10.1 7.1 16.3c0 12.3-10 22.3-22.3 22.3H304v96c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V256H150.3C138 256 128 246 128 233.7c0-6.2 2.6-12.1 7.1-16.3z"]},ZU={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},e3=ZU,Q3={prefix:"fas",iconName:"circle-down",icon:[512,512,[61466,"arrow-alt-circle-down"],"f358","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"]};const dk=MS()(FS(VS(t=>({user:{email:"",name:"",nickname:"",uid:"",isSeller:!1},setUser:e=>t({user:e})})),{name:"userStorage",storage:Xg(()=>sessionStorage)})),pk=()=>{const t=FE(),{user:e}=dk(),{cartLength:n}=Dp();return L.jsxs("div",{className:"flex justify-between items-center w-full h-20 px-3 my-3 relative",children:[L.jsx("div",{className:"flex-1"}),L.jsx("div",{className:"flex-2 flex justify-center items-center",children:L.jsx("p",{className:"my-auto cursor-pointer font-bold text-2xl align-center",onClick:()=>t("/"),children:"Uniform-ExtraTime"})}),L.jsx("div",{className:"flex-1 flex justify-end items-center cursor-pointer relative",children:e.email&&L.jsxs("div",{className:"flex flex-col items-center ml-3",children:[L.jsx(Al,{icon:e3}),L.jsx("span",{className:"absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-1.5 py-0.5 rounded-full",children:n()})]})})]})},t3=()=>{const t=FE(),e=qm(),{user:n}=dk(),[r,i]=P.useState(e.pathname);P.useEffect(()=>{i(e.pathname)},[e.pathname]);const s=a=>{if(a==="/sell"&&!n.isSeller){alert("판매자만 접근 가능"),t("/login");return}if(a==="/mypage"&&!n.uid){alert("로그인 해주세요!"),t("/login");return}t(a)},o=a=>r===a?"border-b-4 border-black":"";return L.jsxs("div",{className:"flex mb-5",children:[L.jsx("div",{className:`cursor-pointer flex-1 text-center ${o("/")}`,onClick:()=>s("/"),children:L.jsx("h1",{className:"text-2xl",children:"HOME"})}),L.jsx("div",{className:`cursor-pointer flex-1 text-center ${o("/team")}`,onClick:()=>s("/team"),children:L.jsx("h1",{className:"text-2xl",children:"TEAM"})}),L.jsx("div",{className:`cursor-pointer flex-1 text-center ${o("/sell")}`,onClick:()=>s("/sell"),children:L.jsx("h1",{className:"text-2xl",children:"SELL"})}),L.jsx("div",{className:`cursor-pointer flex-1 text-center ${o("/mypage")}`,onClick:()=>s("/mypage"),children:L.jsx("h1",{className:"text-2xl",children:"MYPAGE"})})]})},n3=()=>L.jsxs("div",{className:"container mx-auto my-0 md:w-1/2 w-full h-screen",children:[L.jsx(pk,{}),L.jsx(t3,{}),L.jsx(jE,{}),L.jsx(tF,{})]}),r3=()=>L.jsxs("div",{className:"container mx-auto my-0 w-1/2 h-screen",children:[L.jsx(pk,{}),L.jsx(jE,{})]}),i3=()=>L.jsx("div",{children:L.jsx("p",{children:"로딩중..."})}),s3=P.lazy(()=>an(()=>import("./Home-Dh2U522b.js"),__vite__mapDeps([0,1,2,3]))),o3=P.lazy(()=>an(()=>import("./Team-CCJXmClZ.js"),__vite__mapDeps([4,5,2,3]))),a3=P.lazy(()=>an(()=>import("./ProductDetail-B3fRFfHu.js"),__vite__mapDeps([6,7,8,9,10,1]))),l3=P.lazy(()=>an(()=>import("./SignUp-Dapld9hD.js"),[])),u3=P.lazy(()=>an(()=>import("./SellerSignUp-DU1WNa4S.js"),__vite__mapDeps([11,12,10,8]))),c3=P.lazy(()=>an(()=>import("./CustomerSignUp-CtCBRaQO.js"),__vite__mapDeps([13,12,10,8]))),h3=P.lazy(()=>an(()=>import("./Login-C7z3N885.js"),__vite__mapDeps([14,10,8]))),f3=P.lazy(()=>an(()=>import("./Sell-DGPps_jP.js"),[])),d3=P.lazy(()=>an(()=>import("./MyPage-BHUPON8h.js"),__vite__mapDeps([15,3,7,8]))),p3=P.lazy(()=>an(()=>import("./UpdateProduct-B6NoxilX.js"),__vite__mapDeps([16,17,10,8,7,9,5]))),m3=P.lazy(()=>an(()=>import("./CreateProduct-Wy38mdiP.js"),__vite__mapDeps([18,17,10,8,7,9,5]))),g3=new s2,y3=()=>(eF(),L.jsxs(o2,{client:g3,children:[L.jsx(P.Suspense,{fallback:L.jsx(i3,{}),children:L.jsxs(NC,{children:[L.jsxs(_t,{element:L.jsx(n3,{}),children:[L.jsx(_t,{path:"/",element:L.jsx(s3,{})}),L.jsx(_t,{path:"/:productId",element:L.jsx(a3,{})}),L.jsx(_t,{path:"/team",element:L.jsx(o3,{})}),L.jsx(_t,{path:"/sell",element:L.jsx(f3,{})}),L.jsx(_t,{path:"/sell/createProduct",element:L.jsx(m3,{})}),L.jsx(_t,{path:"/sell/updateProduct/:productId",element:L.jsx(p3,{})}),L.jsx(_t,{path:"/mypage",element:L.jsx(d3,{})})]}),L.jsxs(_t,{element:L.jsx(r3,{}),children:[L.jsx(_t,{path:"/signup",element:L.jsx(l3,{})}),L.jsx(_t,{path:"/signup/seller",element:L.jsx(u3,{})}),L.jsx(_t,{path:"/signup/customer",element:L.jsx(c3,{})}),L.jsx(_t,{path:"/login",element:L.jsx(h3,{})})]})]})}),L.jsx(a2,{initialIsOpen:!1})]}));ed.createRoot(document.getElementById("root")).render(L.jsx(Ga.StrictMode,{children:L.jsx(MC,{children:L.jsx(y3,{})})}));export{Ok as $,XC as A,BC as B,ft as C,M3 as D,F3 as E,Al as F,hA as G,OA as H,U3 as I,BD as J,V3 as K,i3 as L,q3 as M,H3 as N,j3 as O,B3 as P,N3 as Q,K3 as R,eh as S,$3 as T,z3 as U,CE as V,_3 as W,Jg as X,L3 as Y,l0 as _,Q3 as a,S3 as b,RD as c,NA as d,dk as e,G3 as f,x3 as g,Dp as h,W3 as i,L as j,jg as k,zD as l,D3 as m,O3 as n,b3 as o,w3 as p,P3 as q,P as r,E3 as s,Gt as t,FE as u,th as v,C3 as w,$C as x,jC as y,BE as z};

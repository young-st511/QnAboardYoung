(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var O={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),HC=Symbol.for("react.portal"),WC=Symbol.for("react.fragment"),KC=Symbol.for("react.strict_mode"),qC=Symbol.for("react.profiler"),GC=Symbol.for("react.provider"),QC=Symbol.for("react.context"),XC=Symbol.for("react.forward_ref"),YC=Symbol.for("react.suspense"),JC=Symbol.for("react.memo"),ZC=Symbol.for("react.lazy"),Gm=Symbol.iterator;function e_(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var t0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n0=Object.assign,r0={};function hs(t,e,n){this.props=t,this.context=e,this.refs=r0,this.updater=n||t0}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i0(){}i0.prototype=hs.prototype;function yf(t,e,n){this.props=t,this.context=e,this.refs=r0,this.updater=n||t0}var vf=yf.prototype=new i0;vf.constructor=yf;n0(vf,hs.prototype);vf.isPureReactComponent=!0;var Qm=Array.isArray,s0=Object.prototype.hasOwnProperty,wf={current:null},o0={key:!0,ref:!0,__self:!0,__source:!0};function a0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s0.call(e,r)&&!o0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ho,type:t,key:s,ref:o,props:i,_owner:wf.current}}function t_(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function n_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xm=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n_(""+t.key):e.toString(36)}function Xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case HC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bc(o,0):r,Qm(i)?(n="",t!=null&&(n=t.replace(Xm,"$&/")+"/"),Xa(i,e,n,"",function(l){return l})):i!=null&&(Ef(i)&&(i=t_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qm(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+bc(s,a);o+=Xa(s,e,n,u,i)}else if(u=e_(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+bc(s,a++),o+=Xa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],i=0;return Xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function r_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Ya={transition:null},i_={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:wf};ee.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=hs;ee.Fragment=WC;ee.Profiler=qC;ee.PureComponent=yf;ee.StrictMode=KC;ee.Suspense=YC;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=n0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)s0.call(e,u)&&!o0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Ho,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:QC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GC,_context:t},t.Consumer=t};ee.createElement=a0;ee.createFactory=function(t){var e=a0.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:XC,render:t}};ee.isValidElement=Ef;ee.lazy=function(t){return{$$typeof:ZC,_payload:{_status:-1,_result:t},_init:r_}};ee.memo=function(t,e){return{$$typeof:JC,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return It.current.useCallback(t,e)};ee.useContext=function(t){return It.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return It.current.useDeferredValue(t)};ee.useEffect=function(t,e){return It.current.useEffect(t,e)};ee.useId=function(){return It.current.useId()};ee.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return It.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};ee.useRef=function(t){return It.current.useRef(t)};ee.useState=function(t){return It.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return It.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(O);const C=zC(O.exports);var $h={},Sf={exports:{}},Vt={},u0={exports:{}},l0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var H=N.length;N.push(z);e:for(;0<H;){var me=H-1>>>1,P=N[me];if(0<i(P,z))N[me]=z,N[H]=P,H=me;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],H=N.pop();if(H!==z){N[0]=H;e:for(var me=0,P=N.length,$=P>>>1;me<$;){var b=2*(me+1)-1,W=N[b],E=b+1,te=N[E];if(0>i(W,H))E<P&&0>i(te,W)?(N[me]=te,N[E]=H,me=E):(N[me]=W,N[b]=H,me=b);else if(E<P&&0>i(te,H))N[me]=te,N[E]=H,me=E;else break e}}return z}function i(N,z){var H=N.sortIndex-z.sortIndex;return H!==0?H:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var z=n(l);z!==null;){if(z.callback===null)r(l);else if(z.startTime<=N)r(l),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(l)}}function S(N){if(v=!1,y(N),!g)if(n(u)!==null)g=!0,En(T);else{var z=n(l);z!==null&&yt(S,z.startTime-N)}}function T(N,z){g=!1,v&&(v=!1,m(_),_=-1),p=!0;var H=d;try{for(y(z),h=n(u);h!==null&&(!(h.expirationTime>z)||N&&!ie());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var P=me(h.expirationTime<=z);z=t.unstable_now(),typeof P=="function"?h.callback=P:h===n(u)&&r(u),y(z)}else r(u);h=n(u)}if(h!==null)var $=!0;else{var b=n(l);b!==null&&yt(S,b.startTime-z),$=!1}return $}finally{h=null,d=H,p=!1}}var D=!1,I=null,_=-1,U=5,B=-1;function ie(){return!(t.unstable_now()-B<U)}function pe(){if(I!==null){var N=t.unstable_now();B=N;var z=!0;try{z=I(!0,N)}finally{z?Ie():(D=!1,I=null)}}else D=!1}var Ie;if(typeof f=="function")Ie=function(){f(pe)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,ze=Oe.port2;Oe.port1.onmessage=pe,Ie=function(){ze.postMessage(null)}}else Ie=function(){w(pe,0)};function En(N){I=N,D||(D=!0,Ie())}function yt(N,z){_=w(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,En(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var H=d;d=z;try{return N()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=d;d=N;try{return z()}finally{d=H}},t.unstable_scheduleCallback=function(N,z,H){var me=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?me+H:me):H=me,N){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=H+P,N={id:c++,callback:z,priorityLevel:N,startTime:H,expirationTime:P,sortIndex:-1},H>me?(N.sortIndex=H,e(l,N),n(u)===null&&N===n(l)&&(v?(m(_),_=-1):v=!0,yt(S,H-me))):(N.sortIndex=P,e(u,N),g||p||(g=!0,En(T))),N},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(N){var z=d;return function(){var H=d;d=z;try{return N.apply(this,arguments)}finally{d=H}}}})(l0);(function(t){t.exports=l0})(u0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=O.exports,Ft=u0.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h0=new Set,oo={};function ui(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(oo[t]=e,t=0;t<e.length;t++)h0.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,s_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ym={},Jm={};function o_(t){return bh.call(Jm,t)?!0:bh.call(Ym,t)?!1:s_.test(t)?Jm[t]=!0:(Ym[t]=!0,!1)}function a_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u_(t,e,n,r){if(e===null||typeof e>"u"||a_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,_f);st[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,_f);st[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,_f);st[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function If(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u_(e,n,i,r)&&(n=null),r||i===null?o_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),yi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Lh=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),Fh=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),p0=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Lc;function $s(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Mc=!1;function Fc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function l_(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Uh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case yi:return"Portal";case Lh:return"Profiler";case kf:return"StrictMode";case Mh:return"Suspense";case Fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f0:return(t.displayName||"Context")+".Consumer";case d0:return(t._context.displayName||"Context")+".Provider";case Tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:Uh(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return Uh(t(e))}catch{}}return null}function c_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uh(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function m0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h_(t){var e=m0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=h_(t))}function g0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=m0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bh(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function y0(t,e){e=e.checked,e!=null&&If(t,"checked",e,!1)}function Vh(t,e){y0(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jh(t,e.type,n):e.hasOwnProperty("defaultValue")&&jh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jh(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bs=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(bs(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function v0(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,E0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d_=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){d_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function S0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function C0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=S0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var f_=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wh(t,e){if(e){if(f_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,Oi=null,$i=null;function ig(t){if(t=qo(t)){if(typeof Gh!="function")throw Error(x(280));var e=t.stateNode;e&&(e=_l(e),Gh(t.stateNode,t.type,e))}}function _0(t){Oi?$i?$i.push(t):$i=[t]:Oi=t}function I0(){if(Oi){var t=Oi,e=$i;if($i=Oi=null,ig(t),e)for(t=0;t<e.length;t++)ig(e[t])}}function k0(t,e){return t(e)}function T0(){}var Uc=!1;function x0(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return k0(t,e,n)}finally{Uc=!1,(Oi!==null||$i!==null)&&(T0(),I0())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var r=_l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Qh=!1;if(Pn)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Qh=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Qh=!1}function p_(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Ws=!1,vu=null,wu=!1,Xh=null,m_={onError:function(t){Ws=!0,vu=t}};function g_(t,e,n,r,i,s,o,a,u){Ws=!1,vu=null,p_.apply(m_,arguments)}function y_(t,e,n,r,i,s,o,a,u){if(g_.apply(this,arguments),Ws){if(Ws){var l=vu;Ws=!1,vu=null}else throw Error(x(198));wu||(wu=!0,Xh=l)}}function li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sg(t){if(li(t)!==t)throw Error(x(188))}function v_(t){var e=t.alternate;if(!e){if(e=li(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sg(i),t;if(s===r)return sg(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function N0(t){return t=v_(t),t!==null?D0(t):null}function D0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D0(t);if(e!==null)return e;t=t.sibling}return null}var R0=Ft.unstable_scheduleCallback,og=Ft.unstable_cancelCallback,w_=Ft.unstable_shouldYield,E_=Ft.unstable_requestPaint,Pe=Ft.unstable_now,S_=Ft.unstable_getCurrentPriorityLevel,Nf=Ft.unstable_ImmediatePriority,P0=Ft.unstable_UserBlockingPriority,Eu=Ft.unstable_NormalPriority,C_=Ft.unstable_LowPriority,O0=Ft.unstable_IdlePriority,wl=null,fn=null;function __(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:T_,I_=Math.log,k_=Math.LN2;function T_(t){return t>>>=0,t===0?32:31-(I_(t)/k_|0)|0}var Aa=64,Na=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ls(a):(s&=o,s!==0&&(r=Ls(s)))}else o=n&~i,o!==0?r=Ls(o):s!==0&&(r=Ls(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function x_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=x_(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $0(){var t=Aa;return Aa<<=1,(Aa&4194240)===0&&(Aa=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function N_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function b0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var L0,Rf,M0,F0,U0,Jh=!1,Da=[],rr=null,ir=null,sr=null,lo=new Map,co=new Map,Qn=[],D_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qo(e),e!==null&&Rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function R_(t,e,n,r,i){switch(e){case"focusin":return rr=xs(rr,t,e,n,r,i),!0;case"dragenter":return ir=xs(ir,t,e,n,r,i),!0;case"mouseover":return sr=xs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return lo.set(s,xs(lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,xs(co.get(s)||null,t,e,n,r,i)),!0}return!1}function B0(t){var e=Or(t.target);if(e!==null){var n=li(e);if(n!==null){if(e=n.tag,e===13){if(e=A0(n),e!==null){t.blockedOn=e,U0(t.priority,function(){M0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return e=qo(n),e!==null&&Rf(e),t.blockedOn=n,!1;e.shift()}return!0}function ug(t,e,n){Ja(t)&&n.delete(e)}function P_(){Jh=!1,rr!==null&&Ja(rr)&&(rr=null),ir!==null&&Ja(ir)&&(ir=null),sr!==null&&Ja(sr)&&(sr=null),lo.forEach(ug),co.forEach(ug)}function As(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,P_)))}function ho(t){function e(i){return As(i,t)}if(0<Da.length){As(Da[0],t);for(var n=1;n<Da.length;n++){var r=Da[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&As(rr,t),ir!==null&&As(ir,t),sr!==null&&As(sr,t),lo.forEach(e),co.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&Qn.shift()}var bi=jn.ReactCurrentBatchConfig,Cu=!0;function O_(t,e,n,r){var i=he,s=bi.transition;bi.transition=null;try{he=1,Pf(t,e,n,r)}finally{he=i,bi.transition=s}}function $_(t,e,n,r){var i=he,s=bi.transition;bi.transition=null;try{he=4,Pf(t,e,n,r)}finally{he=i,bi.transition=s}}function Pf(t,e,n,r){if(Cu){var i=Zh(t,e,n,r);if(i===null)Xc(t,e,r,_u,n),ag(t,r);else if(R_(i,t,e,n,r))r.stopPropagation();else if(ag(t,r),e&4&&-1<D_.indexOf(t)){for(;i!==null;){var s=qo(i);if(s!==null&&L0(s),s=Zh(t,e,n,r),s===null&&Xc(t,e,r,_u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xc(t,e,r,null,n)}}var _u=null;function Zh(t,e,n,r){if(_u=null,t=Af(r),t=Or(t),t!==null)if(e=li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _u=t,null}function V0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S_()){case Nf:return 1;case P0:return 4;case Eu:case C_:return 16;case O0:return 536870912;default:return 16}default:return 16}}var tr=null,Of=null,Za=null;function j0(){if(Za)return Za;var t,e=Of,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Za=i.slice(t,1<r?1-r:void 0)}function eu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function lg(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:lg,this.isPropagationStopped=lg,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=jt(ds),Ko=xe({},ds,{view:0,detail:0}),b_=jt(Ko),Vc,jc,Ns,El=xe({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Vc=t.screenX-Ns.screenX,jc=t.screenY-Ns.screenY):jc=Vc=0,Ns=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),cg=jt(El),L_=xe({},El,{dataTransfer:0}),M_=jt(L_),F_=xe({},Ko,{relatedTarget:0}),zc=jt(F_),U_=xe({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),B_=jt(U_),V_=xe({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j_=jt(V_),z_=xe({},ds,{data:0}),hg=jt(z_),H_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K_[t])?!!e[t]:!1}function bf(){return q_}var G_=xe({},Ko,{key:function(t){if(t.key){var e=H_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q_=jt(G_),X_=xe({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=jt(X_),Y_=xe({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),J_=jt(Y_),Z_=xe({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),eI=jt(Z_),tI=xe({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nI=jt(tI),rI=[9,13,27,32],Lf=Pn&&"CompositionEvent"in window,Ks=null;Pn&&"documentMode"in document&&(Ks=document.documentMode);var iI=Pn&&"TextEvent"in window&&!Ks,z0=Pn&&(!Lf||Ks&&8<Ks&&11>=Ks),fg=String.fromCharCode(32),pg=!1;function H0(t,e){switch(t){case"keyup":return rI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wi=!1;function sI(t,e){switch(t){case"compositionend":return W0(e);case"keypress":return e.which!==32?null:(pg=!0,fg);case"textInput":return t=e.data,t===fg&&pg?null:t;default:return null}}function oI(t,e){if(wi)return t==="compositionend"||!Lf&&H0(t,e)?(t=j0(),Za=Of=tr=null,wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z0&&e.locale!=="ko"?null:e.data;default:return null}}var aI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aI[t.type]:e==="textarea"}function K0(t,e,n,r){_0(r),e=Iu(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qs=null,fo=null;function uI(t){r1(t,0)}function Sl(t){var e=Ci(t);if(g0(e))return t}function lI(t,e){if(t==="change")return e}var q0=!1;if(Pn){var Hc;if(Pn){var Wc="oninput"in document;if(!Wc){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Wc=typeof gg.oninput=="function"}Hc=Wc}else Hc=!1;q0=Hc&&(!document.documentMode||9<document.documentMode)}function yg(){qs&&(qs.detachEvent("onpropertychange",G0),fo=qs=null)}function G0(t){if(t.propertyName==="value"&&Sl(fo)){var e=[];K0(e,fo,t,Af(t)),x0(uI,e)}}function cI(t,e,n){t==="focusin"?(yg(),qs=e,fo=n,qs.attachEvent("onpropertychange",G0)):t==="focusout"&&yg()}function hI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(fo)}function dI(t,e){if(t==="click")return Sl(e)}function fI(t,e){if(t==="input"||t==="change")return Sl(e)}function pI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:pI;function po(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bh.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function vg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wg(t,e){var n=vg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vg(n)}}function Q0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Q0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X0(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mI(t){var e=X0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Q0(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wg(n,s);var o=wg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gI=Pn&&"documentMode"in document&&11>=document.documentMode,Ei=null,ed=null,Gs=null,td=!1;function Eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Ei==null||Ei!==yu(r)||(r=Ei,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&po(Gs,r)||(Gs=r,r=Iu(ed,"onSelect"),0<r.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ei)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Kc={},Y0={};Pn&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function Cl(t){if(Kc[t])return Kc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return Kc[t]=e[n];return t}var J0=Cl("animationend"),Z0=Cl("animationiteration"),e1=Cl("animationstart"),t1=Cl("transitionend"),n1=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){n1.set(t,e),ui(e,[t])}for(var qc=0;qc<Sg.length;qc++){var Gc=Sg[qc],yI=Gc.toLowerCase(),vI=Gc[0].toUpperCase()+Gc.slice(1);_r(yI,"on"+vI)}_r(J0,"onAnimationEnd");_r(Z0,"onAnimationIteration");_r(e1,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(t1,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function Cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y_(r,e,void 0,t),t.currentTarget=null}function r1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Cg(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Cg(i,a,l),s=u}}}if(wu)throw t=Xh,wu=!1,Xh=null,t}function ve(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var r=t+"__bubble";n.has(r)||(i1(e,t,2,!1),n.add(r))}function Qc(t,e,n){var r=0;e&&(r|=4),i1(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Oa]){t[Oa]=!0,h0.forEach(function(n){n!=="selectionchange"&&(wI.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Qc("selectionchange",!1,e))}}function i1(t,e,n,r){switch(V0(e)){case 1:var i=O_;break;case 4:i=$_;break;default:i=Pf}n=i.bind(null,e,n,t),i=void 0,!Qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}x0(function(){var l=s,c=Af(n),h=[];e:{var d=n1.get(t);if(d!==void 0){var p=$f,g=t;switch(t){case"keypress":if(eu(n)===0)break e;case"keydown":case"keyup":p=Q_;break;case"focusin":g="focus",p=zc;break;case"focusout":g="blur",p=zc;break;case"beforeblur":case"afterblur":p=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=M_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=J_;break;case J0:case Z0:case e1:p=B_;break;case t1:p=eI;break;case"scroll":p=b_;break;case"wheel":p=nI;break;case"copy":case"cut":case"paste":p=j_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dg}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,y;f!==null;){y=f;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=uo(f,m),S!=null&&v.push(go(f,S,y)))),w)break;f=f.return}0<v.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==qh&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[On]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=l,g=g?Or(g):null,g!==null&&(w=li(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=l),p!==g)){if(v=cg,S="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=dg,S="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:Ci(p),y=g==null?d:Ci(g),d=new v(S,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,S=null,Or(c)===l&&(v=new v(m,f+"enter",g,n,c),v.target=y,v.relatedTarget=w,S=v),w=S,p&&g)t:{for(v=p,m=g,f=0,y=v;y;y=mi(y))f++;for(y=0,S=m;S;S=mi(S))y++;for(;0<f-y;)v=mi(v),f--;for(;0<y-f;)m=mi(m),y--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=mi(v),m=mi(m)}v=null}else v=null;p!==null&&_g(h,d,p,v,!1),g!==null&&w!==null&&_g(h,w,g,v,!0)}}e:{if(d=l?Ci(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=lI;else if(mg(d))if(q0)T=fI;else{T=hI;var D=cI}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=dI);if(T&&(T=T(t,l))){K0(h,T,n,c);break e}D&&D(t,d,l),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&jh(d,"number",d.value)}switch(D=l?Ci(l):window,t){case"focusin":(mg(D)||D.contentEditable==="true")&&(Ei=D,ed=l,Gs=null);break;case"focusout":Gs=ed=Ei=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Eg(h,n,c);break;case"selectionchange":if(gI)break;case"keydown":case"keyup":Eg(h,n,c)}var I;if(Lf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else wi?H0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(z0&&n.locale!=="ko"&&(wi||_!=="onCompositionStart"?_==="onCompositionEnd"&&wi&&(I=j0()):(tr=c,Of="value"in tr?tr.value:tr.textContent,wi=!0)),D=Iu(l,_),0<D.length&&(_=new hg(_,t,null,n,c),h.push({event:_,listeners:D}),I?_.data=I:(I=W0(n),I!==null&&(_.data=I)))),(I=iI?sI(t,n):oI(t,n))&&(l=Iu(l,"onBeforeInput"),0<l.length&&(c=new hg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=I))}r1(h,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=uo(t,n),s!=null&&r.unshift(go(t,s,i)),s=uo(t,e),s!=null&&r.push(go(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _g(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=uo(n,s),u!=null&&o.unshift(go(n,u,a))):i||(u=uo(n,s),u!=null&&o.push(go(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EI=/\r\n?/g,SI=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(EI,`
`).replace(SI,"")}function $a(t,e,n){if(e=Ig(e),Ig(t)!==e&&n)throw Error(x(425))}function ku(){}var nd=null,rd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,CI=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,_I=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(II)}:sd;function II(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),dn="__reactFiber$"+fs,yo="__reactProps$"+fs,On="__reactContainer$"+fs,od="__reactEvents$"+fs,kI="__reactListeners$"+fs,TI="__reactHandles$"+fs;function Or(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[dn])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[dn]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function _l(t){return t[yo]||null}var ad=[],_i=-1;function Ir(t){return{current:t}}function Ee(t){0>_i||(t.current=ad[_i],ad[_i]=null,_i--)}function ge(t,e){_i++,ad[_i]=t.current,t.current=e}var yr={},mt=Ir(yr),Rt=Ir(!1),qr=yr;function Ki(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function Tu(){Ee(Rt),Ee(mt)}function xg(t,e,n){if(mt.current!==yr)throw Error(x(168));ge(mt,e),ge(Rt,n)}function s1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,c_(t)||"Unknown",i));return xe({},n,r)}function xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,qr=mt.current,ge(mt,t),ge(Rt,Rt.current),!0}function Ag(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=s1(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Rt),Ee(mt),ge(mt,t)):Ee(Rt),ge(Rt,n)}var Cn=null,Il=!1,Jc=!1;function o1(t){Cn===null?Cn=[t]:Cn.push(t)}function xI(t){Il=!0,o1(t)}function kr(){if(!Jc&&Cn!==null){Jc=!0;var t=0,e=he;try{var n=Cn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,Il=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),R0(Nf,kr),i}finally{he=e,Jc=!1}}return null}var Ii=[],ki=0,Au=null,Nu=0,Ht=[],Wt=0,Gr=null,In=1,kn="";function Nr(t,e){Ii[ki++]=Nu,Ii[ki++]=Au,Au=t,Nu=e}function a1(t,e,n){Ht[Wt++]=In,Ht[Wt++]=kn,Ht[Wt++]=Gr,Gr=t;var r=In;t=kn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-on(e)+i|n<<i|r,kn=s+t}else In=1<<s|n<<i|r,kn=t}function Ff(t){t.return!==null&&(Nr(t,1),a1(t,1,0))}function Uf(t){for(;t===Au;)Au=Ii[--ki],Ii[ki]=null,Nu=Ii[--ki],Ii[ki]=null;for(;t===Gr;)Gr=Ht[--Wt],Ht[Wt]=null,kn=Ht[--Wt],Ht[Wt]=null,In=Ht[--Wt],Ht[Wt]=null}var Mt=null,Lt=null,Ce=!1,rn=null;function u1(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ng(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:In,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Lt=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(Ce){var e=Lt;if(e){var n=e;if(!Ng(t,e)){if(ud(t))throw Error(x(418));e=or(n.nextSibling);var r=Mt;e&&Ng(t,e)?u1(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Mt=t)}}else{if(ud(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ce=!1,Mt=t}}}function Dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function ba(t){if(t!==Mt)return!1;if(!Ce)return Dg(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Lt)){if(ud(t))throw l1(),Error(x(418));for(;e;)u1(t,e),e=or(e.nextSibling)}if(Dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Mt?or(t.stateNode.nextSibling):null;return!0}function l1(){for(var t=Lt;t;)t=or(t.nextSibling)}function qi(){Lt=Mt=null,Ce=!1}function Bf(t){rn===null?rn=[t]:rn.push(t)}var AI=jn.ReactCurrentBatchConfig;function tn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Du=Ir(null),Ru=null,Ti=null,Vf=null;function jf(){Vf=Ti=Ru=null}function zf(t){var e=Du.current;Ee(Du),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Li(t,e){Ru=t,Vf=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Dt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(Vf!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(Ru===null)throw Error(x(308));Ti=t,Ru.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var $r=null;function Hf(t){$r===null?$r=[t]:$r.push(t)}function c1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hf(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(re&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Hf(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function tu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Df(t,n)}}function Rg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pu(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=xe({},h,d);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=h}}function Pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var d1=new c0.Component().refs;function hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=lr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(an(e,t,i,r),tu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=lr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(an(e,t,i,r),tu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=lr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(an(e,t,r,n),tu(e,t,r))}};function Og(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function f1(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=Pt(e)?qr:mt.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=d1,Wf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=Pt(e)?qr:mt.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),Pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===d1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bg(t){var e=t._init;return e(t._payload)}function p1(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=cr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,S){return f===null||f.tag!==6?(f=sh(y,m.mode,S),f.return=m,f):(f=i(f,y),f.return=m,f)}function u(m,f,y,S){var T=y.type;return T===vi?c(m,f,y.props.children,S,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qn&&bg(T)===f.type)?(S=i(f,y.props),S.ref=Ds(m,f,y),S.return=m,S):(S=au(y.type,y.key,y.props,null,m.mode,S),S.ref=Ds(m,f,y),S.return=m,S)}function l(m,f,y,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=oh(y,m.mode,S),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,S,T){return f===null||f.tag!==7?(f=jr(y,m.mode,S,T),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sh(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ka:return y=au(f.type,f.key,f.props,null,m.mode,y),y.ref=Ds(m,null,f),y.return=m,y;case yi:return f=oh(f,m.mode,y),f.return=m,f;case qn:var S=f._init;return h(m,S(f._payload),y)}if(bs(f)||ks(f))return f=jr(f,m.mode,y,null),f.return=m,f;La(m,f)}return null}function d(m,f,y,S){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ka:return y.key===T?u(m,f,y,S):null;case yi:return y.key===T?l(m,f,y,S):null;case qn:return T=y._init,d(m,f,T(y._payload),S)}if(bs(y)||ks(y))return T!==null?null:c(m,f,y,S,null);La(m,y)}return null}function p(m,f,y,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,a(f,m,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ka:return m=m.get(S.key===null?y:S.key)||null,u(f,m,S,T);case yi:return m=m.get(S.key===null?y:S.key)||null,l(f,m,S,T);case qn:var D=S._init;return p(m,f,y,D(S._payload),T)}if(bs(S)||ks(S))return m=m.get(y)||null,c(f,m,S,T,null);La(f,S)}return null}function g(m,f,y,S){for(var T=null,D=null,I=f,_=f=0,U=null;I!==null&&_<y.length;_++){I.index>_?(U=I,I=null):U=I.sibling;var B=d(m,I,y[_],S);if(B===null){I===null&&(I=U);break}t&&I&&B.alternate===null&&e(m,I),f=s(B,f,_),D===null?T=B:D.sibling=B,D=B,I=U}if(_===y.length)return n(m,I),Ce&&Nr(m,_),T;if(I===null){for(;_<y.length;_++)I=h(m,y[_],S),I!==null&&(f=s(I,f,_),D===null?T=I:D.sibling=I,D=I);return Ce&&Nr(m,_),T}for(I=r(m,I);_<y.length;_++)U=p(I,m,_,y[_],S),U!==null&&(t&&U.alternate!==null&&I.delete(U.key===null?_:U.key),f=s(U,f,_),D===null?T=U:D.sibling=U,D=U);return t&&I.forEach(function(ie){return e(m,ie)}),Ce&&Nr(m,_),T}function v(m,f,y,S){var T=ks(y);if(typeof T!="function")throw Error(x(150));if(y=T.call(y),y==null)throw Error(x(151));for(var D=T=null,I=f,_=f=0,U=null,B=y.next();I!==null&&!B.done;_++,B=y.next()){I.index>_?(U=I,I=null):U=I.sibling;var ie=d(m,I,B.value,S);if(ie===null){I===null&&(I=U);break}t&&I&&ie.alternate===null&&e(m,I),f=s(ie,f,_),D===null?T=ie:D.sibling=ie,D=ie,I=U}if(B.done)return n(m,I),Ce&&Nr(m,_),T;if(I===null){for(;!B.done;_++,B=y.next())B=h(m,B.value,S),B!==null&&(f=s(B,f,_),D===null?T=B:D.sibling=B,D=B);return Ce&&Nr(m,_),T}for(I=r(m,I);!B.done;_++,B=y.next())B=p(I,m,_,B.value,S),B!==null&&(t&&B.alternate!==null&&I.delete(B.key===null?_:B.key),f=s(B,f,_),D===null?T=B:D.sibling=B,D=B);return t&&I.forEach(function(pe){return e(m,pe)}),Ce&&Nr(m,_),T}function w(m,f,y,S){if(typeof y=="object"&&y!==null&&y.type===vi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ka:e:{for(var T=y.key,D=f;D!==null;){if(D.key===T){if(T=y.type,T===vi){if(D.tag===7){n(m,D.sibling),f=i(D,y.props.children),f.return=m,m=f;break e}}else if(D.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qn&&bg(T)===D.type){n(m,D.sibling),f=i(D,y.props),f.ref=Ds(m,D,y),f.return=m,m=f;break e}n(m,D);break}else e(m,D);D=D.sibling}y.type===vi?(f=jr(y.props.children,m.mode,S,y.key),f.return=m,m=f):(S=au(y.type,y.key,y.props,null,m.mode,S),S.ref=Ds(m,f,y),S.return=m,m=S)}return o(m);case yi:e:{for(D=y.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=oh(y,m.mode,S),f.return=m,m=f}return o(m);case qn:return D=y._init,w(m,f,D(y._payload),S)}if(bs(y))return g(m,f,y,S);if(ks(y))return v(m,f,y,S);La(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=sh(y,m.mode,S),f.return=m,m=f),o(m)):n(m,f)}return w}var Gi=p1(!0),m1=p1(!1),Go={},pn=Ir(Go),vo=Ir(Go),wo=Ir(Go);function br(t){if(t===Go)throw Error(x(174));return t}function Kf(t,e){switch(ge(wo,e),ge(vo,t),ge(pn,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hh(e,t)}Ee(pn),ge(pn,e)}function Qi(){Ee(pn),Ee(vo),Ee(wo)}function g1(t){br(wo.current);var e=br(pn.current),n=Hh(e,t.type);e!==n&&(ge(vo,t),ge(pn,n))}function qf(t){vo.current===t&&(Ee(pn),Ee(vo))}var ke=Ir(0);function Ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function Gf(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var nu=jn.ReactCurrentDispatcher,eh=jn.ReactCurrentBatchConfig,Qr=0,Te=null,Fe=null,We=null,$u=!1,Qs=!1,Eo=0,NI=0;function lt(){throw Error(x(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Xf(t,e,n,r,i,s){if(Qr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nu.current=t===null||t.memoizedState===null?OI:$I,t=n(r,i),Qs){s=0;do{if(Qs=!1,Eo=0,25<=s)throw Error(x(301));s+=1,We=Fe=null,e.updateQueue=null,nu.current=bI,t=n(r,i)}while(Qs)}if(nu.current=bu,e=Fe!==null&&Fe.next!==null,Qr=0,We=Fe=Te=null,$u=!1,e)throw Error(x(300));return t}function Yf(){var t=Eo!==0;return Eo=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Te.memoizedState=We=t:We=We.next=t,We}function Xt(){if(Fe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=We===null?Te.memoizedState:We.next;if(e!==null)We=e,Fe=t;else{if(t===null)throw Error(x(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Te.memoizedState=We=t:We=We.next=t}return We}function So(t,e){return typeof e=="function"?e(t):e}function th(t){var e=Xt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Qr&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Te.lanes|=c,Xr|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,ln(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function y1(){}function v1(t,e){var n=Te,r=Xt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Jf(S1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Co(9,E1.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(x(349));(Qr&30)!==0||w1(n,e,i)}return i}function w1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function E1(t,e,n,r){e.value=n,e.getSnapshot=r,C1(e)&&_1(t)}function S1(t,e,n){return n(function(){C1(e)&&_1(t)})}function C1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function _1(t){var e=$n(t,1);e!==null&&an(e,t,1,-1)}function Lg(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=PI.bind(null,Te,t),[e.memoizedState,t]}function Co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I1(){return Xt().memoizedState}function ru(t,e,n,r){var i=hn();Te.flags|=t,i.memoizedState=Co(1|e,n,void 0,r===void 0?null:r)}function Tl(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Qf(r,o.deps)){i.memoizedState=Co(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Co(1|e,n,s,r)}function Mg(t,e){return ru(8390656,8,t,e)}function Jf(t,e){return Tl(2048,8,t,e)}function k1(t,e){return Tl(4,2,t,e)}function T1(t,e){return Tl(4,4,t,e)}function x1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A1(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4,4,x1.bind(null,e,t),n)}function Zf(){}function N1(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function D1(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function R1(t,e,n){return(Qr&21)===0?(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n):(ln(n,e)||(n=$0(),Te.lanes|=n,Xr|=n,t.baseState=!0),e)}function DI(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=eh.transition;eh.transition={};try{t(!1),e()}finally{he=n,eh.transition=r}}function P1(){return Xt().memoizedState}function RI(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},O1(t))$1(e,n);else if(n=c1(t,e,n,r),n!==null){var i=_t();an(n,t,r,i),b1(n,e,r)}}function PI(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(O1(t))$1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var u=e.interleaved;u===null?(i.next=i,Hf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=c1(t,e,i,r),n!==null&&(i=_t(),an(n,t,r,i),b1(n,e,r))}}function O1(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function $1(t,e){Qs=$u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Df(t,n)}}var bu={readContext:Qt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},OI={readContext:Qt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ru(4194308,4,x1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return ru(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RI.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:Lg,useDebugValue:Zf,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=Lg(!1),e=t[0];return t=DI.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=hn();if(Ce){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ke===null)throw Error(x(349));(Qr&30)!==0||w1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mg(S1.bind(null,r,s,t),[t]),r.flags|=2048,Co(9,E1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Ke.identifierPrefix;if(Ce){var n=kn,r=In;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$I={readContext:Qt,useCallback:N1,useContext:Qt,useEffect:Jf,useImperativeHandle:A1,useInsertionEffect:k1,useLayoutEffect:T1,useMemo:D1,useReducer:th,useRef:I1,useState:function(){return th(So)},useDebugValue:Zf,useDeferredValue:function(t){var e=Xt();return R1(e,Fe.memoizedState,t)},useTransition:function(){var t=th(So)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:y1,useSyncExternalStore:v1,useId:P1,unstable_isNewReconciler:!1},bI={readContext:Qt,useCallback:N1,useContext:Qt,useEffect:Jf,useImperativeHandle:A1,useInsertionEffect:k1,useLayoutEffect:T1,useMemo:D1,useReducer:nh,useRef:I1,useState:function(){return nh(So)},useDebugValue:Zf,useDeferredValue:function(t){var e=Xt();return Fe===null?e.memoizedState=t:R1(e,Fe.memoizedState,t)},useTransition:function(){var t=nh(So)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:y1,useSyncExternalStore:v1,useId:P1,unstable_isNewReconciler:!1};function Xi(t,e){try{var n="",r=e;do n+=l_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LI=typeof WeakMap=="function"?WeakMap:Map;function L1(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,_d=r),fd(t,e)},n}function M1(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=XI.bind(null,t,e,n),e.then(t,t))}function Ug(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var MI=jn.ReactCurrentOwner,Dt=!1;function vt(t,e,n,r){e.child=t===null?m1(e,null,n,r):Gi(e,t.child,n,r)}function Vg(t,e,n,r,i){n=n.render;var s=e.ref;return Li(e,i),r=Xf(t,e,n,r,s,i),n=Yf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Ce&&n&&Ff(e),e.flags|=1,vt(t,e,r,i),e.child)}function jg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F1(t,e,s,r,i)):(t=au(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return bn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function F1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Dt=!0);else return e.lanes=t.lanes,bn(t,e,i)}return pd(t,e,n,r,i)}function U1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ai,bt),bt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ai,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ai,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ai,bt),bt|=r;return vt(t,e,i,n),e.child}function B1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,i){var s=Pt(n)?qr:mt.current;return s=Ki(e,s),Li(e,i),n=Xf(t,e,n,r,s,i),r=Yf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Ce&&r&&Ff(e),e.flags|=1,vt(t,e,n,i),e.child)}function zg(t,e,n,r,i){if(Pt(n)){var s=!0;xu(e)}else s=!1;if(Li(e,i),e.stateNode===null)iu(t,e),f1(e,n,r),dd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Qt(l):(l=Pt(n)?qr:mt.current,l=Ki(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&$g(e,o,r,l),Gn=!1;var d=e.memoizedState;o.state=d,Pu(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Rt.current||Gn?(typeof c=="function"&&(hd(e,n,c,r),u=e.memoizedState),(a=Gn||Og(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,h1(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:tn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qt(u):(u=Pt(n)?qr:mt.current,u=Ki(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&$g(e,o,r,u),Gn=!1,d=e.memoizedState,o.state=d,Pu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Rt.current||Gn?(typeof p=="function"&&(hd(e,n,p,r),g=e.memoizedState),(l=Gn||Og(e,n,l,r,d,g,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,n,r,s,i)}function md(t,e,n,r,i,s){B1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ag(e,n,!1),bn(t,e,s);r=e.stateNode,MI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&Ag(e,n,!0),e.child}function V1(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),Kf(t,e.containerInfo)}function Hg(t,e,n,r,i){return qi(),Bf(i),e.flags|=256,vt(t,e,n,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function j1(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(ke,i&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=gd,t):ep(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return FI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gd,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ep(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,r){return r!==null&&Bf(r),Gi(e,t.child,null,n),t=ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rh(Error(x(422))),Ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nl({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Gi(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=gd,s);if((e.mode&1)===0)return Ma(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=rh(s,r,void 0),Ma(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),an(r,t,i,-1))}return op(),r=rh(Error(x(421))),Ma(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=or(i.nextSibling),Mt=e,Ce=!0,rn=null,t!==null&&(Ht[Wt++]=In,Ht[Wt++]=kn,Ht[Wt++]=Gr,In=t.id,kn=t.overflow,Gr=e),e=ep(e,r.children),e.flags|=4096,e)}function Wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cd(t.return,e,n)}function ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function z1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,n,e);else if(t.tag===19)Wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(ke,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ih(e,!0,n,null,s);break;case"together":ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function iu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UI(t,e,n){switch(e.tag){case 3:V1(e),qi();break;case 5:g1(e);break;case 1:Pt(e.type)&&xu(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Du,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?j1(t,e,n):(ge(ke,ke.current&1),t=bn(t,e,n),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return z1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,U1(t,e,n)}return bn(t,e,n)}var H1,vd,W1,K1;H1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};W1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(pn.current);var s=null;switch(n){case"input":i=Bh(t,i),r=Bh(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=zh(t,i),r=zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ku)}Wh(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(oo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(oo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ve("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};K1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rs(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BI(t,e,n){var r=e.pendingProps;switch(Uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Pt(e.type)&&Tu(),ct(e),null;case 3:return r=e.stateNode,Qi(),Ee(Rt),Ee(mt),Gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,rn!==null&&(Td(rn),rn=null))),vd(t,e),ct(e),null;case 5:qf(e);var i=br(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)W1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ct(e),null}if(t=br(pn.current),ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[yo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Ms.length;i++)ve(Ms[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":eg(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":ng(r,s),ve("invalid",r)}Wh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$a(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$a(r.textContent,a,t),i=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ta(r),tg(r,s,!0);break;case"textarea":Ta(r),rg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ku)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[yo]=r,H1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ms.length;i++)ve(Ms[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":eg(t,r),i=Bh(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),ve("invalid",t);break;case"textarea":ng(t,r),i=zh(t,r),ve("invalid",t);break;default:i=r}Wh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?C0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&E0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ao(t,u):typeof u=="number"&&ao(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&If(t,s,u,o))}switch(n){case"input":Ta(t),tg(t,r,!1);break;case"textarea":Ta(t),rg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)K1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=br(wo.current),br(pn.current),ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:$a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return ct(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Lt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)l1(),qi(),e.flags|=98560,s=!1;else if(s=ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[dn]=e}else qi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else rn!==null&&(Td(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ke.current&1)!==0?Ue===0&&(Ue=3):op())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Qi(),vd(t,e),t===null&&mo(e.stateNode.containerInfo),ct(e),null;case 10:return zf(e.type._context),ct(e),null;case 17:return Pt(e.type)&&Tu(),ct(e),null;case 19:if(Ee(ke),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Rs(s,!1);else{if(Ue!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ou(t),o!==null){for(e.flags|=128,Rs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Yi&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ct(e),null}else 2*Pe()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return sp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(bt&1073741824)!==0&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function VI(t,e){switch(Uf(e),e.tag){case 1:return Pt(e.type)&&Tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),Ee(Rt),Ee(mt),Gf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return Qi(),null;case 10:return zf(e.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var Fa=!1,dt=!1,jI=typeof WeakSet=="function"?WeakSet:Set,L=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function wd(t,e,n){try{n()}catch(r){De(t,e,r)}}var Kg=!1;function zI(t,e){if(nd=Cu,t=X0(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Cu=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:tn(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(S){De(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return g=Kg,Kg=!1,g}function Xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wd(e,n,s)}i=i.next}while(i!==r)}}function xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q1(t){var e=t.alternate;e!==null&&(t.alternate=null,q1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[yo],delete e[od],delete e[kI],delete e[TI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G1(t){return t.tag===5||t.tag===3||t.tag===4}function qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ku));else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}var Ze=null,nn=!1;function Wn(t,e,n){for(n=n.child;n!==null;)Q1(t,e,n),n=n.sibling}function Q1(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:dt||xi(n,e);case 6:var r=Ze,i=nn;Ze=null,Wn(t,e,n),Ze=r,nn=i,Ze!==null&&(nn?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(nn?(t=Ze,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),ho(t)):Yc(Ze,n.stateNode));break;case 4:r=Ze,i=nn,Ze=n.stateNode.containerInfo,nn=!0,Wn(t,e,n),Ze=r,nn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&wd(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!dt&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Wn(t,e,n),dt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jI),e.forEach(function(r){var i=JI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ze=a.stateNode,nn=!1;break e;case 3:Ze=a.stateNode.containerInfo,nn=!0;break e;case 4:Ze=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(Ze===null)throw Error(x(160));Q1(s,o,i),Ze=null,nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){De(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X1(e,t),e=e.sibling}function X1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),cn(t),r&4){try{Xs(3,t,t.return),xl(3,t)}catch(v){De(t,t.return,v)}try{Xs(5,t,t.return)}catch(v){De(t,t.return,v)}}break;case 1:en(e,t),cn(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if(en(e,t),cn(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{ao(i,"")}catch(v){De(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&y0(i,s),Kh(a,o);var l=Kh(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?C0(i,h):c==="dangerouslySetInnerHTML"?E0(i,h):c==="children"?ao(i,h):If(i,c,h,l)}switch(a){case"input":Vh(i,s);break;case"textarea":v0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Pi(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[yo]=s}catch(v){De(t,t.return,v)}}break;case 6:if(en(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){De(t,t.return,v)}}break;case 3:if(en(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(v){De(t,t.return,v)}break;case 4:en(e,t),cn(t);break;case 13:en(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rp=Pe())),r&4&&Gg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(l=dt)||c,en(e,t),dt=l):en(e,t),cn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&(t.mode&1)!==0)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,p=d.child,d.tag){case 0:case 11:case 14:case 15:Xs(4,d,d.return);break;case 1:xi(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){De(r,n,v)}}break;case 5:xi(d,d.return);break;case 22:if(d.memoizedState!==null){Xg(h);continue}}p!==null?(p.return=d,L=p):Xg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=S0("display",o))}catch(v){De(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){De(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:en(e,t),cn(t),r&4&&Gg(t);break;case 21:break;default:en(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G1(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ao(i,""),r.flags&=-33);var s=qg(t);Cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qg(t);Sd(t,a,o);break;default:throw Error(x(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HI(t,e,n){L=t,Y1(t)}function Y1(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fa;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||dt;a=Fa;var l=dt;if(Fa=o,(dt=u)&&!l)for(L=i;L!==null;)o=L,u=o.child,o.tag===22&&o.memoizedState!==null?Yg(i):u!==null?(u.return=o,L=u):Yg(i);for(;s!==null;)L=s,Y1(s),s=s.sibling;L=i,Fa=a,dt=l}Qg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,L=s):Qg(t)}}function Qg(t){for(;L!==null;){var e=L;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:dt||xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}dt||e.flags&512&&Ed(e)}catch(d){De(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Xg(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Yg(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xl(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Ed(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Ed(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var WI=Math.ceil,Lu=jn.ReactCurrentDispatcher,tp=jn.ReactCurrentOwner,qt=jn.ReactCurrentBatchConfig,re=0,Ke=null,Le=null,nt=0,bt=0,Ai=Ir(0),Ue=0,_o=null,Xr=0,Al=0,np=0,Ys=null,At=null,rp=0,Yi=1/0,Sn=null,Mu=!1,_d=null,ur=null,Ua=!1,nr=null,Fu=0,Js=0,Id=null,su=-1,ou=0;function _t(){return(re&6)!==0?Pe():su!==-1?su:su=Pe()}function lr(t){return(t.mode&1)===0?1:(re&2)!==0&&nt!==0?nt&-nt:AI.transition!==null?(ou===0&&(ou=$0()),ou):(t=he,t!==0||(t=window.event,t=t===void 0?16:V0(t.type)),t)}function an(t,e,n,r){if(50<Js)throw Js=0,Id=null,Error(x(185));Wo(t,n,r),((re&2)===0||t!==Ke)&&(t===Ke&&((re&2)===0&&(Al|=n),Ue===4&&Xn(t,nt)),Ot(t,r),n===1&&re===0&&(e.mode&1)===0&&(Yi=Pe()+500,Il&&kr()))}function Ot(t,e){var n=t.callbackNode;A_(t,e);var r=Su(t,t===Ke?nt:0);if(r===0)n!==null&&og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&og(n),e===1)t.tag===0?xI(Jg.bind(null,t)):o1(Jg.bind(null,t)),_I(function(){(re&6)===0&&kr()}),n=null;else{switch(b0(r)){case 1:n=Nf;break;case 4:n=P0;break;case 16:n=Eu;break;case 536870912:n=O0;break;default:n=Eu}n=sw(n,J1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J1(t,e){if(su=-1,ou=0,(re&6)!==0)throw Error(x(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=Su(t,t===Ke?nt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Uu(t,r);else{e=r;var i=re;re|=2;var s=ew();(Ke!==t||nt!==e)&&(Sn=null,Yi=Pe()+500,Vr(t,e));do try{GI();break}catch(a){Z1(t,a)}while(1);jf(),Lu.current=s,re=i,Le!==null?e=0:(Ke=null,nt=0,e=Ue)}if(e!==0){if(e===2&&(i=Yh(t),i!==0&&(r=i,e=kd(t,i))),e===1)throw n=_o,Vr(t,0),Xn(t,r),Ot(t,Pe()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!KI(i)&&(e=Uu(t,r),e===2&&(s=Yh(t),s!==0&&(r=s,e=kd(t,s))),e===1))throw n=_o,Vr(t,0),Xn(t,r),Ot(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Dr(t,At,Sn);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=rp+500-Pe(),10<e)){if(Su(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sd(Dr.bind(null,t,At,Sn),e);break}Dr(t,At,Sn);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WI(r/1960))-r,10<r){t.timeoutHandle=sd(Dr.bind(null,t,At,Sn),r);break}Dr(t,At,Sn);break;case 5:Dr(t,At,Sn);break;default:throw Error(x(329))}}}return Ot(t,Pe()),t.callbackNode===n?J1.bind(null,t):null}function kd(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Uu(t,e),t!==2&&(e=At,At=n,e!==null&&Td(e)),t}function Td(t){At===null?At=t:At.push.apply(At,t)}function KI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~np,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Jg(t){if((re&6)!==0)throw Error(x(327));Mi();var e=Su(t,0);if((e&1)===0)return Ot(t,Pe()),null;var n=Uu(t,e);if(t.tag!==0&&n===2){var r=Yh(t);r!==0&&(e=r,n=kd(t,r))}if(n===1)throw n=_o,Vr(t,0),Xn(t,e),Ot(t,Pe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,At,Sn),Ot(t,Pe()),null}function ip(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Yi=Pe()+500,Il&&kr())}}function Yr(t){nr!==null&&nr.tag===0&&(re&6)===0&&Mi();var e=re;re|=1;var n=qt.transition,r=he;try{if(qt.transition=null,he=1,t)return t()}finally{he=r,qt.transition=n,re=e,(re&6)===0&&kr()}}function sp(){bt=Ai.current,Ee(Ai)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CI(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tu();break;case 3:Qi(),Ee(Rt),Ee(mt),Gf();break;case 5:qf(r);break;case 4:Qi();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:zf(r.type._context);break;case 22:case 23:sp()}n=n.return}if(Ke=t,Le=t=cr(t.current,null),nt=bt=e,Ue=0,_o=null,np=Al=Xr=0,At=Ys=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function Z1(t,e){do{var n=Le;try{if(jf(),nu.current=bu,$u){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$u=!1}if(Qr=0,We=Fe=Te=null,Qs=!1,Eo=0,tp.current=null,n===null||n.return===null){Ue=1,_o=e,Le=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=nt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ug(o);if(p!==null){p.flags&=-257,Bg(p,o,a,s,e),p.mode&1&&Fg(s,l,e),e=p,u=l;var g=e.updateQueue;if(g===null){var v=new Set;v.add(u),e.updateQueue=v}else g.add(u);break e}else{if((e&1)===0){Fg(s,l,e),op();break e}u=Error(x(426))}}else if(Ce&&a.mode&1){var w=Ug(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Bg(w,o,a,s,e),Bf(Xi(u,a));break e}}s=u=Xi(u,a),Ue!==4&&(Ue=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=L1(s,u,e);Rg(s,m);break e;case 1:a=u;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ur===null||!ur.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=M1(s,a,e);Rg(s,S);break e}}s=s.return}while(s!==null)}nw(n)}catch(T){e=T,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function ew(){var t=Lu.current;return Lu.current=bu,t===null?bu:t}function op(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ke===null||(Xr&268435455)===0&&(Al&268435455)===0||Xn(Ke,nt)}function Uu(t,e){var n=re;re|=2;var r=ew();(Ke!==t||nt!==e)&&(Sn=null,Vr(t,e));do try{qI();break}catch(i){Z1(t,i)}while(1);if(jf(),re=n,Lu.current=r,Le!==null)throw Error(x(261));return Ke=null,nt=0,Ue}function qI(){for(;Le!==null;)tw(Le)}function GI(){for(;Le!==null&&!w_();)tw(Le)}function tw(t){var e=iw(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?nw(t):Le=e,tp.current=null}function nw(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=BI(n,e,bt),n!==null){Le=n;return}}else{if(n=VI(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function Dr(t,e,n){var r=he,i=qt.transition;try{qt.transition=null,he=1,QI(t,e,n,r)}finally{qt.transition=i,he=r}return null}function QI(t,e,n,r){do Mi();while(nr!==null);if((re&6)!==0)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(N_(t,s),t===Ke&&(Le=Ke=null,nt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ua||(Ua=!0,sw(Eu,function(){return Mi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=qt.transition,qt.transition=null;var o=he;he=1;var a=re;re|=4,tp.current=null,zI(t,n),X1(n,t),mI(rd),Cu=!!nd,rd=nd=null,t.current=n,HI(n),E_(),re=a,he=o,qt.transition=s}else t.current=n;if(Ua&&(Ua=!1,nr=t,Fu=i),s=t.pendingLanes,s===0&&(ur=null),__(n.stateNode),Ot(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mu)throw Mu=!1,t=_d,_d=null,t;return(Fu&1)!==0&&t.tag!==0&&Mi(),s=t.pendingLanes,(s&1)!==0?t===Id?Js++:(Js=0,Id=t):Js=0,kr(),null}function Mi(){if(nr!==null){var t=b0(Fu),e=qt.transition,n=he;try{if(qt.transition=null,he=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Fu=0,(re&6)!==0)throw Error(x(331));var i=re;for(re|=4,L=t.current;L!==null;){var s=L,o=s.child;if((L.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(L=l;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Xs(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,p=c.return;if(q1(c),c===l){L=null;break}if(d!==null){d.return=p,L=d;break}L=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Xs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,L=y;else e:for(o=f;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(T){De(a,a.return,T)}if(a===o){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(re=i,kr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{he=n,qt.transition=e}}return!1}function Zg(t,e,n){e=Xi(n,e),e=L1(t,e,1),t=ar(t,e,1),e=_t(),t!==null&&(Wo(t,1,e),Ot(t,e))}function De(t,e,n){if(t.tag===3)Zg(t,t,n);else for(;e!==null;){if(e.tag===3){Zg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=Xi(n,t),t=M1(e,t,1),e=ar(e,t,1),t=_t(),e!==null&&(Wo(e,1,t),Ot(e,t));break}}e=e.return}}function XI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(nt&n)===n&&(Ue===4||Ue===3&&(nt&130023424)===nt&&500>Pe()-rp?Vr(t,0):np|=n),Ot(t,e)}function rw(t,e){e===0&&((t.mode&1)===0?e=1:(e=Na,Na<<=1,(Na&130023424)===0&&(Na=4194304)));var n=_t();t=$n(t,e),t!==null&&(Wo(t,e,n),Ot(t,n))}function YI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rw(t,n)}function JI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),rw(t,n)}var iw;iw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Dt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Dt=!1,UI(t,e,n);Dt=(t.flags&131072)!==0}else Dt=!1,Ce&&(e.flags&1048576)!==0&&a1(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;iu(t,e),t=e.pendingProps;var i=Ki(e,mt.current);Li(e,n),i=Xf(null,e,r,t,i,n);var s=Yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wf(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,dd(e,r,t,n),e=md(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&Ff(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(iu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ek(r),t=tn(r,t),i){case 0:e=pd(null,e,r,t,n);break e;case 1:e=zg(null,e,r,t,n);break e;case 11:e=Vg(null,e,r,t,n);break e;case 14:e=jg(null,e,r,tn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),zg(t,e,r,i,n);case 3:e:{if(V1(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,h1(t,e),Pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(x(423)),e),e=Hg(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(x(424)),e),e=Hg(t,e,r,n,i);break e}else for(Lt=or(e.stateNode.containerInfo.firstChild),Mt=e,Ce=!0,rn=null,n=m1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=bn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return g1(e),t===null&&ld(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,id(r,i)?o=null:s!==null&&id(r,s)&&(e.flags|=32),B1(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&ld(e),null;case 13:return j1(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Vg(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Du,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Rt.current){e=bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),cd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Li(e,n),i=Qt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),jg(t,e,r,i,n);case 15:return F1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),iu(t,e),e.tag=1,Pt(r)?(t=!0,xu(e)):t=!1,Li(e,n),f1(e,r,i),dd(e,r,i,n),md(null,e,r,!0,t,n);case 19:return z1(t,e,n);case 22:return U1(t,e,n)}throw Error(x(156,e.tag))};function sw(t,e){return R0(t,e)}function ZI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new ZI(t,e,n,r)}function ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ek(t){if(typeof t=="function")return ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tf)return 11;if(t===xf)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function au(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return jr(n.children,i,s,e);case kf:o=8,i|=8;break;case Lh:return t=Kt(12,n,e,i|2),t.elementType=Lh,t.lanes=s,t;case Mh:return t=Kt(13,n,e,i),t.elementType=Mh,t.lanes=s,t;case Fh:return t=Kt(19,n,e,i),t.elementType=Fh,t.lanes=s,t;case p0:return Nl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d0:o=10;break e;case f0:o=9;break e;case Tf:o=11;break e;case xf:o=14;break e;case qn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Nl(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=p0,t.lanes=n,t.stateNode={isHidden:!1},t}function sh(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function oh(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(t,e,n,r,i,s,o,a,u){return t=new tk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wf(s),t}function nk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ow(t){if(!t)return yr;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Pt(n))return s1(t,n,e)}return e}function aw(t,e,n,r,i,s,o,a,u){return t=up(n,r,!0,t,i,s,o,a,u),t.context=ow(null),n=t.current,r=_t(),i=lr(n),s=Dn(r,i),s.callback=e!=null?e:null,ar(n,s,i),t.current.lanes=i,Wo(t,i,r),Ot(t,r),t}function Dl(t,e,n,r){var i=e.current,s=_t(),o=lr(i);return n=ow(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(an(t,i,o,s),tu(t,i,o)),o}function Bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lp(t,e){ey(t,e),(t=t.alternate)&&ey(t,e)}function rk(){return null}var uw=typeof reportError=="function"?reportError:function(t){console.error(t)};function cp(t){this._internalRoot=t}Rl.prototype.render=cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Dl(t,e,null,null)};Rl.prototype.unmount=cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){Dl(null,t,null,null)}),e[On]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=F0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&B0(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ty(){}function ik(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Bu(o);s.call(l)}}var o=aw(e,r,t,0,null,!1,!1,"",ty);return t._reactRootContainer=o,t[On]=o.current,mo(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Bu(u);a.call(l)}}var u=up(t,0,!1,null,null,!1,!1,"",ty);return t._reactRootContainer=u,t[On]=u.current,mo(t.nodeType===8?t.parentNode:t),Yr(function(){Dl(e,u,n,r)}),u}function Ol(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Bu(o);a.call(u)}}Dl(e,o,t,i)}else o=ik(n,e,t,i,r);return Bu(o)}L0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ls(e.pendingLanes);n!==0&&(Df(e,n|1),Ot(e,Pe()),(re&6)===0&&(Yi=Pe()+500,kr()))}break;case 13:Yr(function(){var r=$n(t,1);if(r!==null){var i=_t();an(r,t,1,i)}}),lp(t,1)}};Rf=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=_t();an(e,t,134217728,n)}lp(t,134217728)}};M0=function(t){if(t.tag===13){var e=lr(t),n=$n(t,e);if(n!==null){var r=_t();an(n,t,e,r)}lp(t,e)}};F0=function(){return he};U0=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Gh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_l(r);if(!i)throw Error(x(90));g0(r),Vh(r,i)}}}break;case"textarea":v0(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};k0=ip;T0=Yr;var sk={usingClientEntryPoint:!1,Events:[qo,Ci,_l,_0,I0,ip]},Ps={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ok={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||rk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{wl=Ba.inject(ok),fn=Ba}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sk;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(x(200));return nk(t,e,null,n)};Vt.createRoot=function(t,e){if(!hp(t))throw Error(x(299));var n=!1,r="",i=uw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,r,i),t[On]=e.current,mo(t.nodeType===8?t.parentNode:t),new cp(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=N0(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return Yr(t)};Vt.hydrate=function(t,e,n){if(!Pl(e))throw Error(x(200));return Ol(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aw(e,null,t,1,n!=null?n:null,i,!1,s,o),t[On]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rl(e)};Vt.render=function(t,e,n){if(!Pl(e))throw Error(x(200));return Ol(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(x(40));return t._reactRootContainer?(Yr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};Vt.unstable_batchedUpdates=ip;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Ol(t,e,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Vt})(Sf);var ny=Sf.exports;$h.createRoot=ny.createRoot,$h.hydrateRoot=ny.hydrateRoot;var $l={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,dp=Qe?Symbol.for("react.element"):60103,fp=Qe?Symbol.for("react.portal"):60106,bl=Qe?Symbol.for("react.fragment"):60107,Ll=Qe?Symbol.for("react.strict_mode"):60108,Ml=Qe?Symbol.for("react.profiler"):60114,Fl=Qe?Symbol.for("react.provider"):60109,Ul=Qe?Symbol.for("react.context"):60110,pp=Qe?Symbol.for("react.async_mode"):60111,Bl=Qe?Symbol.for("react.concurrent_mode"):60111,Vl=Qe?Symbol.for("react.forward_ref"):60112,jl=Qe?Symbol.for("react.suspense"):60113,ak=Qe?Symbol.for("react.suspense_list"):60120,zl=Qe?Symbol.for("react.memo"):60115,Hl=Qe?Symbol.for("react.lazy"):60116,uk=Qe?Symbol.for("react.block"):60121,lk=Qe?Symbol.for("react.fundamental"):60117,ck=Qe?Symbol.for("react.responder"):60118,hk=Qe?Symbol.for("react.scope"):60119;function zt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case dp:switch(t=t.type,t){case pp:case Bl:case bl:case Ml:case Ll:case jl:return t;default:switch(t=t&&t.$$typeof,t){case Ul:case Vl:case Hl:case zl:case Fl:return t;default:return e}}case fp:return e}}}function lw(t){return zt(t)===Bl}de.AsyncMode=pp;de.ConcurrentMode=Bl;de.ContextConsumer=Ul;de.ContextProvider=Fl;de.Element=dp;de.ForwardRef=Vl;de.Fragment=bl;de.Lazy=Hl;de.Memo=zl;de.Portal=fp;de.Profiler=Ml;de.StrictMode=Ll;de.Suspense=jl;de.isAsyncMode=function(t){return lw(t)||zt(t)===pp};de.isConcurrentMode=lw;de.isContextConsumer=function(t){return zt(t)===Ul};de.isContextProvider=function(t){return zt(t)===Fl};de.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===dp};de.isForwardRef=function(t){return zt(t)===Vl};de.isFragment=function(t){return zt(t)===bl};de.isLazy=function(t){return zt(t)===Hl};de.isMemo=function(t){return zt(t)===zl};de.isPortal=function(t){return zt(t)===fp};de.isProfiler=function(t){return zt(t)===Ml};de.isStrictMode=function(t){return zt(t)===Ll};de.isSuspense=function(t){return zt(t)===jl};de.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===bl||t===Bl||t===Ml||t===Ll||t===jl||t===ak||typeof t=="object"&&t!==null&&(t.$$typeof===Hl||t.$$typeof===zl||t.$$typeof===Fl||t.$$typeof===Ul||t.$$typeof===Vl||t.$$typeof===lk||t.$$typeof===ck||t.$$typeof===hk||t.$$typeof===uk)};de.typeOf=zt;(function(t){t.exports=de})($l);function dk(t){function e(P,$,b,W,E){for(var te=0,R=0,Ne=0,ae=0,ce,Y,Xe=0,Tt=0,se,ut=se=ce=0,ue=0,Ye=0,_s=0,Je=0,_a=b.length,Is=_a-1,Zt,G="",Re="",Oc="",$c="",Hn;ue<_a;){if(Y=b.charCodeAt(ue),ue===Is&&R+ae+Ne+te!==0&&(R!==0&&(Y=R===47?10:47),ae=Ne=te=0,_a++,Is++),R+ae+Ne+te===0){if(ue===Is&&(0<Ye&&(G=G.replace(d,"")),0<G.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:G+=b.charAt(ue)}Y=59}switch(Y){case 123:for(G=G.trim(),ce=G.charCodeAt(0),se=1,Je=++ue;ue<_a;){switch(Y=b.charCodeAt(ue)){case 123:se++;break;case 125:se--;break;case 47:switch(Y=b.charCodeAt(ue+1)){case 42:case 47:e:{for(ut=ue+1;ut<Is;++ut)switch(b.charCodeAt(ut)){case 47:if(Y===42&&b.charCodeAt(ut-1)===42&&ue+2!==ut){ue=ut+1;break e}break;case 10:if(Y===47){ue=ut+1;break e}}ue=ut}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;ue++<Is&&b.charCodeAt(ue)!==Y;);}if(se===0)break;ue++}switch(se=b.substring(Je,ue),ce===0&&(ce=(G=G.replace(h,"").trim()).charCodeAt(0)),ce){case 64:switch(0<Ye&&(G=G.replace(d,"")),Y=G.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Ye=$;break;default:Ye=En}if(se=e($,Ye,se,Y,E+1),Je=se.length,0<N&&(Ye=n(En,G,_s),Hn=a(3,se,Ye,$,Ie,pe,Je,Y,E,W),G=Ye.join(""),Hn!==void 0&&(Je=(se=Hn.trim()).length)===0&&(Y=0,se="")),0<Je)switch(Y){case 115:G=G.replace(D,o);case 100:case 109:case 45:se=G+"{"+se+"}";break;case 107:G=G.replace(f,"$1 $2"),se=G+"{"+se+"}",se=ze===1||ze===2&&s("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=G+se,W===112&&(se=(Re+=se,""))}else se="";break;default:se=e($,n($,G,_s),se,W,E+1)}Oc+=se,se=_s=Ye=ut=ce=0,G="",Y=b.charCodeAt(++ue);break;case 125:case 59:if(G=(0<Ye?G.replace(d,""):G).trim(),1<(Je=G.length))switch(ut===0&&(ce=G.charCodeAt(0),ce===45||96<ce&&123>ce)&&(Je=(G=G.replace(" ",":")).length),0<N&&(Hn=a(1,G,$,P,Ie,pe,Re.length,W,E,W))!==void 0&&(Je=(G=Hn.trim()).length)===0&&(G="\0\0"),ce=G.charCodeAt(0),Y=G.charCodeAt(1),ce){case 0:break;case 64:if(Y===105||Y===99){$c+=G+b.charAt(ue);break}default:G.charCodeAt(Je-1)!==58&&(Re+=i(G,ce,Y,G.charCodeAt(2)))}_s=Ye=ut=ce=0,G="",Y=b.charCodeAt(++ue)}}switch(Y){case 13:case 10:R===47?R=0:1+ce===0&&W!==107&&0<G.length&&(Ye=1,G+="\0"),0<N*H&&a(0,G,$,P,Ie,pe,Re.length,W,E,W),pe=1,Ie++;break;case 59:case 125:if(R+ae+Ne+te===0){pe++;break}default:switch(pe++,Zt=b.charAt(ue),Y){case 9:case 32:if(ae+te+R===0)switch(Xe){case 44:case 58:case 9:case 32:Zt="";break;default:Y!==32&&(Zt=" ")}break;case 0:Zt="\\0";break;case 12:Zt="\\f";break;case 11:Zt="\\v";break;case 38:ae+R+te===0&&(Ye=_s=1,Zt="\f"+Zt);break;case 108:if(ae+R+te+Oe===0&&0<ut)switch(ue-ut){case 2:Xe===112&&b.charCodeAt(ue-3)===58&&(Oe=Xe);case 8:Tt===111&&(Oe=Tt)}break;case 58:ae+R+te===0&&(ut=ue);break;case 44:R+Ne+ae+te===0&&(Ye=1,Zt+="\r");break;case 34:case 39:R===0&&(ae=ae===Y?0:ae===0?Y:ae);break;case 91:ae+R+Ne===0&&te++;break;case 93:ae+R+Ne===0&&te--;break;case 41:ae+R+te===0&&Ne--;break;case 40:if(ae+R+te===0){if(ce===0)switch(2*Xe+3*Tt){case 533:break;default:ce=1}Ne++}break;case 64:R+Ne+ae+te+ut+se===0&&(se=1);break;case 42:case 47:if(!(0<ae+te+Ne))switch(R){case 0:switch(2*Y+3*b.charCodeAt(ue+1)){case 235:R=47;break;case 220:Je=ue,R=42}break;case 42:Y===47&&Xe===42&&Je+2!==ue&&(b.charCodeAt(Je+2)===33&&(Re+=b.substring(Je,ue+1)),Zt="",R=0)}}R===0&&(G+=Zt)}Tt=Xe,Xe=Y,ue++}if(Je=Re.length,0<Je){if(Ye=$,0<N&&(Hn=a(2,Re,Ye,P,Ie,pe,Je,W,E,W),Hn!==void 0&&(Re=Hn).length===0))return $c+Re+Oc;if(Re=Ye.join(",")+"{"+Re+"}",ze*Oe!==0){switch(ze!==2||s(Re,2)||(Oe=0),Oe){case 111:Re=Re.replace(S,":-moz-$1")+Re;break;case 112:Re=Re.replace(y,"::-webkit-input-$1")+Re.replace(y,"::-moz-$1")+Re.replace(y,":-ms-input-$1")+Re}Oe=0}}return $c+Re+Oc}function n(P,$,b){var W=$.trim().split(w);$=W;var E=W.length,te=P.length;switch(te){case 0:case 1:var R=0;for(P=te===0?"":P[0]+" ";R<E;++R)$[R]=r(P,$[R],b).trim();break;default:var Ne=R=0;for($=[];R<E;++R)for(var ae=0;ae<te;++ae)$[Ne++]=r(P[ae]+" ",W[R],b).trim()}return $}function r(P,$,b){var W=$.charCodeAt(0);switch(33>W&&(W=($=$.trim()).charCodeAt(0)),W){case 38:return $.replace(m,"$1"+P.trim());case 58:return P.trim()+$.replace(m,"$1"+P.trim());default:if(0<1*b&&0<$.indexOf("\f"))return $.replace(m,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+$}function i(P,$,b,W){var E=P+";",te=2*$+3*b+4*W;if(te===944){P=E.indexOf(":",9)+1;var R=E.substring(P,E.length-1).trim();return R=E.substring(0,P).trim()+R+";",ze===1||ze===2&&s(R,1)?"-webkit-"+R+R:R}if(ze===0||ze===2&&!s(E,1))return E;switch(te){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(ie,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return R=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+E+"-ms-flex-pack"+R+E;case 1005:return g.test(E)?E.replace(p,":-webkit-")+E.replace(p,":-moz-")+E:E;case 1e3:switch(R=E.substring(13).trim(),$=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt($)){case 226:R=E.replace(T,"tb");break;case 232:R=E.replace(T,"tb-rl");break;case 220:R=E.replace(T,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+R+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch($=(E=P).length-10,R=(E.charCodeAt($)===33?E.substring(0,$):E).substring(P.indexOf(":",7)+1).trim(),te=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:E=E.replace(R,"-webkit-"+R)+";"+E;break;case 207:case 102:E=E.replace(R,"-webkit-"+(102<te?"inline-":"")+"box")+";"+E.replace(R,"-webkit-"+R)+";"+E.replace(R,"-ms-"+R+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return R=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+R+"-ms-flex-"+R+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(_,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(_,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(B.test(P)===!0)return(R=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),$,b,W).replace(":fill-available",":stretch"):E.replace(R,"-webkit-"+R)+E.replace(R,"-moz-"+R.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,b+W===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function s(P,$){var b=P.indexOf($===1?":":"{"),W=P.substring(0,$!==3?b:10);return b=P.substring(b+1,P.length-1),z($!==2?W:W.replace(U,"$1"),b,$)}function o(P,$){var b=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return b!==$+";"?b.replace(I," or ($1)").substring(4):"("+$+")"}function a(P,$,b,W,E,te,R,Ne,ae,ce){for(var Y=0,Xe=$,Tt;Y<N;++Y)switch(Tt=yt[Y].call(c,P,Xe,b,W,E,te,R,Ne,ae,ce)){case void 0:case!1:case!0:case null:break;default:Xe=Tt}if(Xe!==$)return Xe}function u(P){switch(P){case void 0:case null:N=yt.length=0;break;default:if(typeof P=="function")yt[N++]=P;else if(typeof P=="object")for(var $=0,b=P.length;$<b;++$)u(P[$]);else H=!!P|0}return u}function l(P){return P=P.prefix,P!==void 0&&(z=null,P?typeof P!="function"?ze=1:(ze=2,z=P):ze=0),l}function c(P,$){var b=P;if(33>b.charCodeAt(0)&&(b=b.trim()),me=b,b=[me],0<N){var W=a(-1,$,b,b,Ie,pe,0,0,0,0);W!==void 0&&typeof W=="string"&&($=W)}var E=e(En,b,$,0,0);return 0<N&&(W=a(-2,E,b,b,Ie,pe,E.length,0,0,0),W!==void 0&&(E=W)),me="",Oe=0,pe=Ie=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,D=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,_=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,ie=/([^-])(image-set\()/,pe=1,Ie=1,Oe=0,ze=1,En=[],yt=[],N=0,z=null,H=0,me="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var fk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function pk(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var mk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ry=pk(function(t){return mk.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),mp=$l.exports,gk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vk={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gp={};gp[mp.ForwardRef]=vk;gp[mp.Memo]=cw;function iy(t){return mp.isMemo(t)?cw:gp[t.$$typeof]||gk}var wk=Object.defineProperty,Ek=Object.getOwnPropertyNames,sy=Object.getOwnPropertySymbols,Sk=Object.getOwnPropertyDescriptor,Ck=Object.getPrototypeOf,oy=Object.prototype;function hw(t,e,n){if(typeof e!="string"){if(oy){var r=Ck(e);r&&r!==oy&&hw(t,r,n)}var i=Ek(e);sy&&(i=i.concat(sy(e)));for(var s=iy(t),o=iy(e),a=0;a<i.length;++a){var u=i[a];if(!yk[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=Sk(e,u);try{wk(t,u,l)}catch{}}}}return t}var _k=hw;function Tn(){return(Tn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var ay=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},xd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!$l.exports.typeOf(t)},Vu=Object.freeze([]),hr=Object.freeze({});function Io(t){return typeof t=="function"}function uy(t){return t.displayName||t.name||"Component"}function yp(t){return t&&typeof t.styledComponentId=="string"}var Ji=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",vp=typeof window<"u"&&"HTMLElement"in window,Ik=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Qo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var kk=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Qo(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),uu=new Map,ju=new Map,Zs=1,Va=function(t){if(uu.has(t))return uu.get(t);for(;ju.has(Zs);)Zs++;var e=Zs++;return uu.set(t,e),ju.set(e,t),e},Tk=function(t){return ju.get(t)},xk=function(t,e){e>=Zs&&(Zs=e+1),uu.set(t,e),ju.set(e,t)},Ak="style["+Ji+'][data-styled-version="5.3.5"]',Nk=new RegExp("^"+Ji+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Dk=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Rk=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Nk);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(xk(l,u),Dk(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},Pk=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},dw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(Ji))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ji,"active"),r.setAttribute("data-styled-version","5.3.5");var o=Pk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Ok=function(){function t(n){var r=this.element=dw(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}Qo(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),$k=function(){function t(n){var r=this.element=dw(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),bk=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),ly=vp,Lk={isServer:!vp,useCSSOMInjection:!Ik},fw=function(){function t(n,r,i){n===void 0&&(n=hr),r===void 0&&(r={}),this.options=Tn({},Lk,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&vp&&ly&&(ly=!1,function(s){for(var o=document.querySelectorAll(Ak),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Ji)!=="active"&&(Rk(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return Va(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Tn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new bk(o):s?new Ok(o):new $k(o),new kk(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Va(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Va(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Va(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=Tk(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=Ji+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),Mk=/(a)(d)/gi,cy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ad(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=cy(e%52)+n;return(cy(e%52)+n).replace(Mk,"$1-$2")}var Ni=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},pw=function(t){return Ni(5381,t)};function Fk(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Io(n)&&!yp(n))return!1}return!0}var Uk=pw("5.3.5"),Bk=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Fk(e),this.componentId=n,this.baseHash=Ni(Uk,n),this.baseStyle=r,fw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Zi(this.rules,e,n,r).join(""),a=Ad(Ni(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=Ni(this.baseHash,r.hash),h="",d=0;d<l;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var g=Zi(p,e,n,r),v=Array.isArray(g)?g.join(""):g;c=Ni(c,v+d),h+=v}}if(h){var w=Ad(c>>>0);if(!n.hasNameForId(i,w)){var m=r(h,"."+w,void 0,i);n.insertRules(i,w,m)}s.push(w)}}return s.join(" ")},t}(),Vk=/^\s*\/\/.*$/gm,jk=[":","[",".","#"];function zk(t){var e,n,r,i,s=t===void 0?hr:t,o=s.options,a=o===void 0?hr:o,u=s.plugins,l=u===void 0?Vu:u,c=new dk(a),h=[],d=function(v){function w(m){if(m)try{v(m+"}")}catch{}}return function(m,f,y,S,T,D,I,_,U,B){switch(m){case 1:if(U===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(_===0)return f+"/*|*/";break;case 3:switch(_){case 102:case 112:return v(y[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(v){h.push(v)}),p=function(v,w,m){return w===0&&jk.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function g(v,w,m,f){f===void 0&&(f="&");var y=v.replace(Vk,""),S=w&&m?m+" "+w+" { "+y+" }":y;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,S)}return c.use([].concat(l,[function(v,w,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var w=h;return h=[],w}}])),g.hash=l.length?l.reduce(function(v,w){return w.name||Qo(15),Ni(v,w.name)},5381).toString():"",g}var mw=C.createContext();mw.Consumer;var gw=C.createContext(),Hk=(gw.Consumer,new fw),Nd=zk();function Wk(){return O.exports.useContext(mw)||Hk}function Kk(){return O.exports.useContext(gw)||Nd}var qk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Nd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Qo(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Nd),this.name+e.hash},t}(),Gk=/([A-Z])/,Qk=/([A-Z])/g,Xk=/^ms-/,Yk=function(t){return"-"+t.toLowerCase()};function hy(t){return Gk.test(t)?t.replace(Qk,Yk).replace(Xk,"-ms-"):t}var dy=function(t){return t==null||t===!1||t===""};function Zi(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Zi(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(dy(t))return"";if(yp(t))return"."+t.styledComponentId;if(Io(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return Zi(u,e,n,r)}var l;return t instanceof qk?n?(t.inject(n,r),t.getName(r)):t:xd(t)?function c(h,d){var p,g,v=[];for(var w in h)h.hasOwnProperty(w)&&!dy(h[w])&&(Array.isArray(h[w])&&h[w].isCss||Io(h[w])?v.push(hy(w)+":",h[w],";"):xd(h[w])?v.push.apply(v,c(h[w],w)):v.push(hy(w)+": "+(p=w,(g=h[w])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in fk?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var fy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Jk(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Io(t)||xd(t)?fy(Zi(ay(Vu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:fy(Zi(ay(t,n)))}var Zk=function(t,e,n){return n===void 0&&(n=hr),t.theme!==n.theme&&t.theme||e||n.theme},eT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tT=/(^-|-$)/g;function ah(t){return t.replace(eT,"-").replace(tT,"")}var nT=function(t){return Ad(pw(t)>>>0)};function ja(t){return typeof t=="string"&&!0}var Dd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},rT=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function iT(t,e,n){var r=t[n];Dd(e)&&Dd(r)?yw(r,e):t[n]=e}function yw(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Dd(o))for(var a in o)rT(a)&&iT(t,o[a],a)}return t}var vw=C.createContext();vw.Consumer;var uh={};function ww(t,e,n){var r=yp(t),i=!ja(t),s=e.attrs,o=s===void 0?Vu:s,a=e.componentId,u=a===void 0?function(f,y){var S=typeof f!="string"?"sc":ah(f);uh[S]=(uh[S]||0)+1;var T=S+"-"+nT("5.3.5"+S+uh[S]);return y?y+"-"+T:T}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(f){return ja(f)?"styled."+f:"Styled("+uy(f)+")"}(t):l,h=e.displayName&&e.componentId?ah(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,S){return t.shouldForwardProp(f,y,S)&&e.shouldForwardProp(f,y,S)}:t.shouldForwardProp);var g,v=new Bk(n,h,r?t.componentStyle:void 0),w=v.isStatic&&o.length===0,m=function(f,y){return function(S,T,D,I){var _=S.attrs,U=S.componentStyle,B=S.defaultProps,ie=S.foldedComponentIds,pe=S.shouldForwardProp,Ie=S.styledComponentId,Oe=S.target,ze=function(W,E,te){W===void 0&&(W=hr);var R=Tn({},E,{theme:W}),Ne={};return te.forEach(function(ae){var ce,Y,Xe,Tt=ae;for(ce in Io(Tt)&&(Tt=Tt(R)),Tt)R[ce]=Ne[ce]=ce==="className"?(Y=Ne[ce],Xe=Tt[ce],Y&&Xe?Y+" "+Xe:Y||Xe):Tt[ce]}),[R,Ne]}(Zk(T,O.exports.useContext(vw),B)||hr,T,_),En=ze[0],yt=ze[1],N=function(W,E,te,R){var Ne=Wk(),ae=Kk(),ce=E?W.generateAndInjectStyles(hr,Ne,ae):W.generateAndInjectStyles(te,Ne,ae);return ce}(U,I,En),z=D,H=yt.$as||T.$as||yt.as||T.as||Oe,me=ja(H),P=yt!==T?Tn({},T,{},yt):T,$={};for(var b in P)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?$.as=P[b]:(pe?pe(b,ry,H):!me||ry(b))&&($[b]=P[b]));return T.style&&yt.style!==T.style&&($.style=Tn({},T.style,{},yt.style)),$.className=Array.prototype.concat(ie,Ie,N!==Ie?N:null,T.className,yt.className).filter(Boolean).join(" "),$.ref=z,O.exports.createElement(H,$)}(g,f,y,w)};return m.displayName=c,(g=C.forwardRef(m)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Vu,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var y=e.componentId,S=function(D,I){if(D==null)return{};var _,U,B={},ie=Object.keys(D);for(U=0;U<ie.length;U++)_=ie[U],I.indexOf(_)>=0||(B[_]=D[_]);return B}(e,["componentId"]),T=y&&y+"-"+(ja(f)?f:ah(uy(f)));return ww(f,Tn({},S,{attrs:d,componentId:T}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?yw({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&_k(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Rd=function(t){return function e(n,r,i){if(i===void 0&&(i=hr),!$l.exports.isValidElementType(r))return Qo(1,String(r));var s=function(){return n(r,i,Jk.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Tn({},i,{},o))},s.attrs=function(o){return e(n,r,Tn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(ww,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Rd[t]=Rd(t)});const Ae=Rd;/**
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
 */const Ew=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ew(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},oT=function(t){const e=Ew(t);return Sw.encodeByteArray(e,!0)},Cw=function(t){return oT(t).replace(/\./g,"")},aT=function(t){try{return Sw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class uT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Iw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lT(){return qe().indexOf("Electron/")>=0}function Tw(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cT(){return qe().indexOf("MSAppHost/")>=0}function hT(){return typeof indexedDB=="object"}function dT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fT="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fT,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xo.prototype.create)}}class Xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zn(i,a,r)}}function pT(t,e){return t.replace(mT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mT=/\{\$([^}]+)}/g;function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(py(s)&&py(o)){if(!zu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function py(t){return t!==null&&typeof t=="object"}/**
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
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yT(t,e){const n=new vT(t,e);return n.subscribe.bind(n)}class vT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=lh),i.error===void 0&&(i.error=lh),i.complete===void 0&&(i.complete=lh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lh(){}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class ET{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CT(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ST(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ST(t){return t===Rr?void 0:t}function CT(t){return t.instantiationMode==="EAGER"}/**
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
 */class _T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ET(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const IT={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},kT=oe.INFO,TT={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},xT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wp{constructor(e){this.name=e,this._logLevel=kT,this._logHandler=xT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const AT=(t,e)=>e.some(n=>t instanceof n);let my,gy;function NT(){return my||(my=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return gy||(gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xw=new WeakMap,Pd=new WeakMap,Aw=new WeakMap,ch=new WeakMap,Ep=new WeakMap;function RT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xw.set(n,t)}).catch(()=>{}),Ep.set(e,t),e}function PT(t){if(Pd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pd.set(t,e)}let Od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Aw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OT(t){Od=t(Od)}function $T(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hh(this),e,...n);return Aw.set(r,e.sort?e.sort():[e]),dr(r)}:DT().includes(t)?function(...e){return t.apply(hh(this),e),dr(xw.get(this))}:function(...e){return dr(t.apply(hh(this),e))}}function bT(t){return typeof t=="function"?$T(t):(t instanceof IDBTransaction&&PT(t),AT(t,NT())?new Proxy(t,Od):t)}function dr(t){if(t instanceof IDBRequest)return RT(t);if(ch.has(t))return ch.get(t);const e=bT(t);return e!==t&&(ch.set(t,e),Ep.set(e,t)),e}const hh=t=>Ep.get(t);function LT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const MT=["get","getKey","getAll","getAllKeys","count"],FT=["put","add","delete","clear"],dh=new Map;function yy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MT.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return dh.set(e,s),s}OT(t=>({...t,get:(e,n,r)=>yy(e,n)||t.get(e,n,r),has:(e,n)=>!!yy(e,n)||t.has(e,n)}));/**
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
 */class UT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $d="@firebase/app",vy="0.7.30";/**
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
 */const Zr=new wp("@firebase/app"),VT="@firebase/app-compat",jT="@firebase/analytics-compat",zT="@firebase/analytics",HT="@firebase/app-check-compat",WT="@firebase/app-check",KT="@firebase/auth",qT="@firebase/auth-compat",GT="@firebase/database",QT="@firebase/database-compat",XT="@firebase/functions",YT="@firebase/functions-compat",JT="@firebase/installations",ZT="@firebase/installations-compat",ex="@firebase/messaging",tx="@firebase/messaging-compat",nx="@firebase/performance",rx="@firebase/performance-compat",ix="@firebase/remote-config",sx="@firebase/remote-config-compat",ox="@firebase/storage",ax="@firebase/storage-compat",ux="@firebase/firestore",lx="@firebase/firestore-compat",cx="firebase",hx="9.9.2";/**
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
 */const Nw="[DEFAULT]",dx={[$d]:"fire-core",[VT]:"fire-core-compat",[zT]:"fire-analytics",[jT]:"fire-analytics-compat",[WT]:"fire-app-check",[HT]:"fire-app-check-compat",[KT]:"fire-auth",[qT]:"fire-auth-compat",[GT]:"fire-rtdb",[QT]:"fire-rtdb-compat",[XT]:"fire-fn",[YT]:"fire-fn-compat",[JT]:"fire-iid",[ZT]:"fire-iid-compat",[ex]:"fire-fcm",[tx]:"fire-fcm-compat",[nx]:"fire-perf",[rx]:"fire-perf-compat",[ix]:"fire-rc",[sx]:"fire-rc-compat",[ox]:"fire-gcs",[ax]:"fire-gcs-compat",[ux]:"fire-fst",[lx]:"fire-fst-compat","fire-js":"fire-js",[cx]:"fire-js-all"};/**
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
 */const Hu=new Map,bd=new Map;function fx(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(bd.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;bd.set(e,t);for(const n of Hu.values())fx(n,t);return!0}function Sp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const px={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ei=new Xo("app","Firebase",px);/**
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
 */class mx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Jo=hx;function gx(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Nw,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ei.create("bad-app-name",{appName:String(r)});const i=Hu.get(r);if(i){if(zu(t,i.options)&&zu(n,i.config))return i;throw ei.create("duplicate-app",{appName:r})}const s=new _T(r);for(const a of bd.values())s.addComponent(a);const o=new mx(t,n,s);return Hu.set(r,o),o}function Dw(t=Nw){const e=Hu.get(t);if(!e)throw ei.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=dx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(a.join(" "));return}es(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yx="firebase-heartbeat-database",vx=1,ko="firebase-heartbeat-store";let fh=null;function Rw(){return fh||(fh=LT(yx,vx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ko)}}}).catch(t=>{throw ei.create("idb-open",{originalErrorMessage:t.message})})),fh}async function wx(t){var e;try{return(await Rw()).transaction(ko).objectStore(ko).get(Pw(t))}catch(n){if(n instanceof zn)Zr.warn(n.message);else{const r=ei.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Zr.warn(r.message)}}}async function wy(t,e){var n;try{const i=(await Rw()).transaction(ko,"readwrite");return await i.objectStore(ko).put(e,Pw(t)),i.done}catch(r){if(r instanceof zn)Zr.warn(r.message);else{const i=ei.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Zr.warn(i.message)}}}function Pw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ex=1024,Sx=30*24*60*60*1e3;class Cx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ix(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ey();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Sx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ey(),{heartbeatsToSend:n,unsentEntries:r}=_x(this._heartbeatsCache.heartbeats),i=Cw(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ey(){return new Date().toISOString().substring(0,10)}function _x(t,e=Ex){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ix{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hT()?dT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sy(t){return Cw(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kx(t){es(new Jr("platform-logger",e=>new UT(e),"PRIVATE")),es(new Jr("heartbeat",e=>new Cx(e),"PRIVATE")),fr($d,vy,t),fr($d,vy,"esm2017"),fr("fire-js","")}kx("");var Tx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Cp=Cp||{},q=Tx||self;function Wu(){}function Ld(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xx(t){return Object.prototype.hasOwnProperty.call(t,ph)&&t[ph]||(t[ph]=++Ax)}var ph="closure_uid_"+(1e9*Math.random()>>>0),Ax=0;function Nx(t,e,n){return t.call.apply(t.bind,arguments)}function Dx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=Nx:rt=Dx,rt.apply(null,arguments)}function za(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Tr(){this.s=this.s,this.o=this.o}var Rx=0;Tr.prototype.s=!1;Tr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Rx!=0)&&xx(this)};Tr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ow=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},$w=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Px(t){e:{var e=_A;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Cy(t){return Array.prototype.concat.apply([],arguments)}function _p(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ku(t){return/^[\s\xa0]*$/.test(t)}var _y=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wt(t,e){return t.indexOf(e)!=-1}function mh(t,e){return t<e?-1:t>e?1:0}var Et;e:{var Iy=q.navigator;if(Iy){var ky=Iy.userAgent;if(ky){Et=ky;break e}}Et=""}function Ip(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function bw(t){const e={};for(const n in t)e[n]=t[n];return e}var Ty="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ty.length;s++)n=Ty[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function kp(t){return kp[" "](t),t}kp[" "]=Wu;function Ox(t){var e=Lx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var $x=wt(Et,"Opera"),ts=wt(Et,"Trident")||wt(Et,"MSIE"),Mw=wt(Et,"Edge"),Md=Mw||ts,Fw=wt(Et,"Gecko")&&!(wt(Et.toLowerCase(),"webkit")&&!wt(Et,"Edge"))&&!(wt(Et,"Trident")||wt(Et,"MSIE"))&&!wt(Et,"Edge"),bx=wt(Et.toLowerCase(),"webkit")&&!wt(Et,"Edge");function Uw(){var t=q.document;return t?t.documentMode:void 0}var qu;e:{var gh="",yh=function(){var t=Et;if(Fw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mw)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bx)return/WebKit\/(\S+)/.exec(t);if($x)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yh&&(gh=yh?yh[1]:""),ts){var vh=Uw();if(vh!=null&&vh>parseFloat(gh)){qu=String(vh);break e}}qu=gh}var Lx={};function Mx(){return Ox(function(){let t=0;const e=_y(String(qu)).split("."),n=_y("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=mh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||mh(i[2].length==0,s[2].length==0)||mh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Fd;if(q.document&&ts){var xy=Uw();Fd=xy||parseInt(qu,10)||void 0}else Fd=void 0;var Fx=Fd,Ux=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Wu,e),q.removeEventListener("test",Wu,e)}catch{}return t}();function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};function To(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fw){e:{try{kp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Bx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&To.Z.h.call(this)}}at(To,pt);var Bx={2:"touch",3:"pen",4:"mouse"};To.prototype.h=function(){To.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ea="closure_listenable_"+(1e6*Math.random()|0),Vx=0;function jx(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Vx,this.ca=this.fa=!1}function Wl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Kl(t){this.src=t,this.g={},this.h=0}Kl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Bd(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new jx(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Ud(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ow(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Wl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Tp="closure_lm_"+(1e6*Math.random()|0),wh={};function Bw(t,e,n,r,i){if(r&&r.once)return jw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Bw(t,e[s],n,r,i);return null}return n=Np(n),t&&t[ea]?t.N(e,n,Zo(r)?!!r.capture:!!r,i):Vw(t,e,n,!1,r,i)}function Vw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zo(i)?!!i.capture:!!i,a=Ap(t);if(a||(t[Tp]=a=new Kl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=zx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ux||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Hw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zx(){function t(n){return e.call(t.src,t.listener,n)}var e=Hx;return t}function jw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)jw(t,e[s],n,r,i);return null}return n=Np(n),t&&t[ea]?t.O(e,n,Zo(r)?!!r.capture:!!r,i):Vw(t,e,n,!0,r,i)}function zw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)zw(t,e[s],n,r,i);else r=Zo(r)?!!r.capture:!!r,n=Np(n),t&&t[ea]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Bd(s,n,r,i),-1<n&&(Wl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ap(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bd(e,n,r,i)),(n=-1<t?e[t]:null)&&xp(n))}function xp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ea])Ud(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Hw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ap(e))?(Ud(n,t),n.h==0&&(n.src=null,e[Tp]=null)):Wl(t)}}}function Hw(t){return t in wh?wh[t]:wh[t]="on"+t}function Hx(t,e){if(t.ca)t=!0;else{e=new To(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&xp(t),t=n.call(r,e)}return t}function Ap(t){return t=t[Tp],t instanceof Kl?t:null}var Eh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Np(t){return typeof t=="function"?t:(t[Eh]||(t[Eh]=function(e){return t.handleEvent(e)}),t[Eh])}function Ge(){Tr.call(this),this.i=new Kl(this),this.P=this,this.I=null}at(Ge,Tr);Ge.prototype[ea]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){zw(this,t,e,n,r)};function it(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var i=e;e=new pt(r,t),Lw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ha(o,r,!0,e)&&i}if(o=e.g=t,i=Ha(o,r,!0,e)&&i,i=Ha(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ha(o,r,!1,e)&&i}Ge.prototype.M=function(){if(Ge.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Wl(n[r]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ha(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Ud(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Dp=q.JSON.stringify;function Wx(){var t=Kw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Kx{constructor(){this.h=this.g=null}add(e,n){const r=Ww.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ww=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qx,t=>t.reset());class qx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gx(t){q.setTimeout(()=>{throw t},0)}function Rp(t,e){Vd||Qx(),jd||(Vd(),jd=!0),Kw.add(t,e)}var Vd;function Qx(){var t=q.Promise.resolve(void 0);Vd=function(){t.then(Xx)}}var jd=!1,Kw=new Kx;function Xx(){for(var t;t=Wx();){try{t.h.call(t.g)}catch(n){Gx(n)}var e=Ww;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jd=!1}function ql(t,e){Ge.call(this),this.h=t||1,this.g=e||q,this.j=rt(this.kb,this),this.l=Date.now()}at(ql,Ge);M=ql.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),it(this,"tick"),this.da&&(Pp(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pp(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){ql.Z.M.call(this),Pp(this),delete this.g};function Op(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function qw(t){t.g=Op(()=>{t.g=null,t.i&&(t.i=!1,qw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Yx extends Tr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qw(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xo(t){Tr.call(this),this.h=t,this.g={}}at(xo,Tr);var Ay=[];function Gw(t,e,n,r){Array.isArray(n)||(n&&(Ay[0]=n.toString()),n=Ay);for(var i=0;i<n.length;i++){var s=Bw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qw(t){Ip(t.g,function(e,n){this.g.hasOwnProperty(n)&&xp(e)},t),t.g={}}xo.prototype.M=function(){xo.Z.M.call(this),Qw(this)};xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gl(){this.g=!0}Gl.prototype.Aa=function(){this.g=!1};function Jx(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Zx(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Di(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tA(t,n)+(r?" "+r:"")})}function eA(t,e){t.info(function(){return"TIMEOUT: "+e})}Gl.prototype.info=function(){};function tA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Dp(n)}catch{return e}}var ci={},Ny=null;function Ql(){return Ny=Ny||new Ge}ci.Ma="serverreachability";function Xw(t){pt.call(this,ci.Ma,t)}at(Xw,pt);function Ao(t){const e=Ql();it(e,new Xw(e))}ci.STAT_EVENT="statevent";function Yw(t,e){pt.call(this,ci.STAT_EVENT,t),this.stat=e}at(Yw,pt);function St(t){const e=Ql();it(e,new Yw(e,t))}ci.Na="timingevent";function Jw(t,e){pt.call(this,ci.Na,t),this.size=e}at(Jw,pt);function ta(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Xl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Zw={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $p(){}$p.prototype.h=null;function Dy(t){return t.h||(t.h=t.i())}function eE(){}var na={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bp(){pt.call(this,"d")}at(bp,pt);function Lp(){pt.call(this,"c")}at(Lp,pt);var zd;function Yl(){}at(Yl,$p);Yl.prototype.g=function(){return new XMLHttpRequest};Yl.prototype.i=function(){return{}};zd=new Yl;function ra(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new xo(this),this.P=nA,t=Md?125:void 0,this.W=new ql(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new tE}function tE(){this.i=null,this.g="",this.h=!1}var nA=45e3,Hd={},Gu={};M=ra.prototype;M.setTimeout=function(t){this.P=t};function Wd(t,e,n){t.K=1,t.v=Zl(Ln(e)),t.s=n,t.U=!0,nE(t,null)}function nE(t,e){t.F=Date.now(),ia(t),t.A=Ln(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),lE(n.h,"t",r),t.C=0,n=t.l.H,t.h=new tE,t.g=NE(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Yx(rt(t.Ia,t,t.g),t.O)),Gw(t.V,t.g,"readystatechange",t.gb),e=t.H?bw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ao(),Jx(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&xn(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const c=xn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Md||this.g&&(this.h.h||this.g.ga()||$y(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ao(3):Ao(2)),Jl(this);var n=this.g.ba();this.N=n;t:if(rE(this)){var r=$y(this.g);t="";var i=r.length,s=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),eo(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Zx(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ku(a)){var l=a;break t}}l=null}if(n=l)Di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Kd(this,n);else{this.i=!1,this.o=3,St(12),Lr(this),eo(this);break e}}this.U?(iE(this,c,o),Md&&this.i&&c==3&&(Gw(this.V,this.W,"tick",this.fb),this.W.start())):(Di(this.j,this.m,o,null),Kd(this,o)),c==4&&Lr(this),this.i&&!this.I&&(c==4?kE(this.l,this):(this.i=!1,ia(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),Lr(this),eo(this)}}}catch{}finally{}};function rE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function iE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=rA(t,n),i==Gu){e==4&&(t.o=4,St(14),r=!1),Di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Hd){t.o=4,St(15),Di(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Di(t.j,t.m,i,null),Kd(t,i);rE(t)&&i!=Gu&&i!=Hd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wp(e),e.L=!0,St(11))):(Di(t.j,t.m,n,"[Invalid Chunked Response]"),Lr(t),eo(t))}M.fb=function(){if(this.g){var t=xn(this.g),e=this.g.ga();this.C<e.length&&(Jl(this),iE(this,t,e),this.i&&t!=4&&ia(this))}};function rA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gu:(n=Number(e.substring(n,r)),isNaN(n)?Hd:(r+=1,r+n>e.length?Gu:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,Lr(this)};function ia(t){t.Y=Date.now()+t.P,sE(t,t.P)}function sE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ta(rt(t.eb,t),e)}function Jl(t){t.B&&(q.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(eA(this.j,this.A),this.K!=2&&(Ao(),St(17)),Lr(this),this.o=2,eo(this)):sE(this,this.Y-t)};function eo(t){t.l.G==0||t.I||kE(t.l,t)}function Lr(t){Jl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Pp(t.W),Qw(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Kd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qd(n.i,t))){if(n.I=t.N,!t.J&&qd(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ju(n),nc(n);else break e;Hp(n),St(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ta(rt(n.ab,n),6e3));if(1>=dE(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Mr(n,11)}else if((t.J||n.g==t)&&Ju(n),!Ku(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(wt(g,"spdy")||wt(g,"quic")||wt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Up(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,_e(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=AE(r,r.H?r.la:null,r.W),o.J){fE(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Jl(a),ia(a)),r.g=o}else _E(r);0<n.l.length&&rc(n)}else l[0]!="stop"&&l[0]!="close"||Mr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mr(n,7):zp(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ao(4)}catch{}}function iA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ld(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Mp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ld(t)||typeof t=="string")$w(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ld(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=iA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ps(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ps)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}M=ps.prototype;M.R=function(){Fp(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return Fp(this),this.g.concat()};function Fp(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ti(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ti(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}M.get=function(t,e){return ti(this.h,t)?this.h[t]:e};M.set=function(t,e){ti(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ti(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var oE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ni(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ni){this.g=e!==void 0?e:t.g,Qu(this,t.j),this.s=t.s,Xu(this,t.i),Yu(this,t.m),this.l=t.l,e=t.h;var n=new No;n.i=e.i,e.g&&(n.g=new ps(e.g),n.h=e.h),Ry(this,n),this.o=t.o}else t&&(n=String(t).match(oE))?(this.g=!!e,Qu(this,n[1]||"",!0),this.s=to(n[2]||""),Xu(this,n[3]||"",!0),Yu(this,n[4]),this.l=to(n[5]||"",!0),Ry(this,n[6]||"",!0),this.o=to(n[7]||"")):(this.g=!!e,this.h=new No(null,this.g))}ni.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bs(e,Py,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Bs(e,Py,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Bs(n,n.charAt(0)=="/"?cA:lA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Bs(n,dA)),t.join("")};function Ln(t){return new ni(t)}function Qu(t,e,n){t.j=n?to(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xu(t,e,n){t.i=n?to(e,!0):e}function Yu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ry(t,e,n){e instanceof No?(t.h=e,fA(t.h,t.g)):(n||(e=Bs(e,hA)),t.h=new No(e,t.g))}function _e(t,e,n){t.h.set(e,n)}function Zl(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oA(t){return t instanceof ni?Ln(t):new ni(t,void 0)}function aA(t,e,n,r){var i=new ni(null,void 0);return t&&Qu(i,t),e&&Xu(i,e),n&&Yu(i,n),r&&(i.l=r),i}function to(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Py=/[#\/\?@]/g,lA=/[#\?:]/g,cA=/[#\?]/g,hA=/[#\?@]/g,dA=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xr(t){t.g||(t.g=new ps,t.h=0,t.i&&sA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=No.prototype;M.add=function(t,e){xr(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aE(t,e){xr(t),e=ms(t,e),ti(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ti(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Fp(t)))}function uE(t,e){return xr(t),e=ms(t,e),ti(t.g.h,e)}M.forEach=function(t,e){xr(this),this.g.forEach(function(n,r){$w(n,function(i){t.call(e,i,r,this)},this)},this)};M.T=function(){xr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};M.R=function(t){xr(this);var e=[];if(typeof t=="string")uE(this,t)&&(e=Cy(e,this.g.get(ms(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Cy(e,t[n])}return e};M.set=function(t,e){return xr(this),this.i=null,t=ms(this,t),uE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function lE(t,e,n){aE(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),_p(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fA(t,e){e&&!t.j&&(xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aE(this,r),lE(this,i,n))},t)),t.j=e}var pA=class{constructor(t,e){this.h=t,this.g=e}};function cE(t){this.l=t||mA,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ea&&q.g.Ea()&&q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mA=10;function hE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dE(t){return t.h?1:t.g?t.g.size:0}function qd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Up(t,e){t.g?t.g.add(e):t.h=e}function fE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cE.prototype.cancel=function(){if(this.i=pE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _p(t.i)}function Bp(){}Bp.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Bp.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function gA(){this.g=new Bp}function yA(t,e,n){const r=n||"";try{Mp(t,function(i,s){let o=i;Zo(i)&&(o=Dp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function vA(t,e){const n=new Gl;if(q.Image){const r=new Image;r.onload=za(Wa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=za(Wa,n,r,"TestLoadImage: error",!1,e),r.onabort=za(Wa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=za(Wa,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function sa(t){this.l=t.$b||null,this.j=t.ib||!1}at(sa,$p);sa.prototype.g=function(){return new ec(this.l,this.j)};sa.prototype.i=function(t){return function(){return t}}({});function ec(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(ec,Ge);var Vp=0;M=ec.prototype;M.open=function(t,e){if(this.readyState!=Vp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Do(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oa(this)),this.readyState=Vp};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mE(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function mE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oa(this):Do(this),this.readyState==3&&mE(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,oa(this))};M.Ta=function(t){this.g&&(this.response=t,oa(this))};M.ha=function(){this.g&&oa(this)};function oa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Do(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Do(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wA=q.JSON.parse;function Me(t){Ge.call(this),this.headers=new ps,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gE,this.K=this.L=!1}at(Me,Ge);var gE="",EA=/^https?$/i,SA=["POST","PUT"];M=Me.prototype;M.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zd.g(),this.C=this.u?Dy(this.u):Dy(zd),this.g.onreadystatechange=rt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Oy(this,s);return}t=n||"";const i=new ps(this.headers);r&&Mp(r,function(s,o){i.set(o,s)}),r=Px(i.T()),n=q.FormData&&t instanceof q.FormData,!(0<=Ow(SA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wE(this),0<this.B&&((this.K=CA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.pa,this)):this.A=Op(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Oy(this,s)}};function CA(t){return ts&&Mx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function _A(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof Cp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function Oy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yE(t),tc(t)}function yE(t){t.D||(t.D=!0,it(t,"complete"),it(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),tc(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tc(this,!0)),Me.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?vE(this):this.cb())};M.cb=function(){vE(this)};function vE(t){if(t.h&&typeof Cp<"u"&&(!t.C[1]||xn(t)!=4||t.ba()!=2)){if(t.v&&xn(t)==4)Op(t.Fa,0,t);else if(it(t,"readystatechange"),xn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(oE)[1]||null;if(!i&&q.self&&q.self.location){var s=q.self.location.protocol;i=s.substr(0,s.length-1)}r=!EA.test(i?i.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var o=2<xn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",yE(t)}}finally{tc(t)}}}}function tc(t,e){if(t.g){wE(t);const n=t.g,r=t.C[0]?Wu:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function wE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function xn(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wA(e)}};function $y(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function IA(t){let e="";return Ip(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function jp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=IA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function EE(t){this.za=0,this.l=[],this.h=new Gl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Os("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Os("baseRetryDelayMs",5e3,t),this.$a=Os("retryDelaySeedMs",1e4,t),this.Ya=Os("forwardChannelMaxRetries",2,t),this.ra=Os("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new cE(t&&t.concurrentRequestLimit),this.Ca=new gA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=EE.prototype;M.ma=8;M.G=1;function zp(t){if(SE(t),t.G==3){var e=t.V++,n=Ln(t.F);_e(n,"SID",t.J),_e(n,"RID",e),_e(n,"TYPE","terminate"),aa(t,n),e=new ra(t,t.h,e,void 0),e.K=2,e.v=Zl(Ln(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=NE(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ia(e)}xE(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function nc(t){t.g&&(Wp(t),t.g.cancel(),t.g=null)}function SE(t){nc(t),t.u&&(q.clearTimeout(t.u),t.u=null),Ju(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Sh(t,e){t.l.push(new pA(t.Za++,e)),t.G==3&&rc(t)}function rc(t){hE(t.i)||t.m||(t.m=!0,Rp(t.Ha,t),t.C=0)}function kA(t,e){return dE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ta(rt(t.Ha,t,e),TE(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ra(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=bw(s),Lw(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=CE(this,i,e),n=Ln(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),aa(this,n),this.o&&s&&jp(n,this.o,s),Up(this.i,i),this.Ra&&_e(n,"TYPE","init"),this.ja?(_e(n,"$req",e),_e(n,"SID","null"),i.$=!0,Wd(i,n,null)):Wd(i,n,e),this.G=2}}else this.G==3&&(t?by(this,t):this.l.length==0||hE(this.i)||by(this))};function by(t,e){var n;e?n=e.m:n=t.V++;const r=Ln(t.F);_e(r,"SID",t.J),_e(r,"RID",n),_e(r,"AID",t.U),aa(t,r),t.o&&t.s&&jp(r,t.o,t.s),n=new ra(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=CE(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Up(t.i,n),Wd(n,r,e)}function aa(t,e){t.j&&Mp({},function(n,r){_e(e,r,n)})}function CE(t,e,n){n=Math.min(t.l.length,n);var r=t.j?rt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{yA(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function _E(t){t.g||t.u||(t.Y=1,Rp(t.Ga,t),t.A=0)}function Hp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ta(rt(t.Ga,t),TE(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,IE(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ta(rt(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,St(10),nc(this),IE(this))};function Wp(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function IE(t){t.g=new ra(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ln(t.oa);_e(e,"RID","rpc"),_e(e,"SID",t.J),_e(e,"CI",t.N?"0":"1"),_e(e,"AID",t.U),aa(t,e),_e(e,"TYPE","xmlhttp"),t.o&&t.s&&jp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Zl(Ln(e)),n.s=null,n.U=!0,nE(n,t)}M.ab=function(){this.v!=null&&(this.v=null,nc(this),Hp(this),St(19))};function Ju(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function kE(t,e){var n=null;if(t.g==e){Ju(t),Wp(t),t.g=null;var r=2}else if(qd(t.i,e))n=e.D,fE(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ql(),it(r,new Jw(r,n)),rc(t)}else _E(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&kA(t,e)||r==2&&Hp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mr(t,5);break;case 4:Mr(t,10);break;case 3:Mr(t,6);break;default:Mr(t,2)}}}function TE(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Mr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=rt(t.jb,t);n||(n=new ni("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Qu(n,"https"),Zl(n)),vA(n.toString(),r)}else St(2);t.G=0,t.j&&t.j.va(e),xE(t),SE(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),St(2)):(this.h.info("Failed to ping google.com"),St(1))};function xE(t){t.G=0,t.I=-1,t.j&&((pE(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,_p(t.l),t.l.length=0),t.j.ua())}function AE(t,e,n){let r=oA(n);if(r.i!="")e&&Xu(r,e+"."+r.i),Yu(r,r.m);else{const i=q.location;r=aA(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Ip(t.aa,function(i,s){_e(r,s,i)}),e=t.D,n=t.sa,e&&n&&_e(r,e,n),_e(r,"VER",t.ma),aa(t,r),r}function NE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Me(new sa({ib:!0})):new Me(t.qa),e.L=t.H,e}function DE(){}M=DE.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function Zu(){if(ts&&!(10<=Number(Fx)))throw Error("Environmental error: no available transport.")}Zu.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){Ge.call(this),this.g=new EE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ku(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ku(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}at(Ut,Ge);Ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Rp(rt(t.hb,t,e))),St(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=AE(t,null,t.W),rc(t)};Ut.prototype.close=function(){zp(this.g)};Ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Sh(this.g,e)}else this.v?(e={},e.__data__=Dp(t),Sh(this.g,e)):Sh(this.g,t)};Ut.prototype.M=function(){this.g.j=null,delete this.j,zp(this.g),delete this.g,Ut.Z.M.call(this)};function RE(t){bp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(RE,bp);function PE(){Lp.call(this),this.status=1}at(PE,Lp);function gs(t){this.g=t}at(gs,DE);gs.prototype.xa=function(){it(this.g,"a")};gs.prototype.wa=function(t){it(this.g,new RE(t))};gs.prototype.va=function(t){it(this.g,new PE)};gs.prototype.ua=function(){it(this.g,"b")};Zu.prototype.createWebChannel=Zu.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Xl.NO_ERROR=0;Xl.TIMEOUT=8;Xl.HTTP_ERROR=6;Zw.COMPLETE="complete";eE.EventType=na;na.OPEN="a";na.CLOSE="b";na.ERROR="c";na.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.La;Me.prototype.getLastErrorCode=Me.prototype.Da;Me.prototype.getStatus=Me.prototype.ba;Me.prototype.getResponseJson=Me.prototype.Qa;Me.prototype.getResponseText=Me.prototype.ga;Me.prototype.send=Me.prototype.ea;var TA=function(){return new Zu},xA=function(){return Ql()},Ch=Xl,AA=Zw,NA=ci,Ly={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},DA=sa,Ka=eE,RA=Me;const My="@firebase/firestore";/**
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
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */let ys="9.9.2";/**
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
 */const ri=new wp("@firebase/firestore");function Fy(){return ri.logLevel}function V(t,...e){if(ri.logLevel<=oe.DEBUG){const n=e.map(Kp);ri.debug(`Firestore (${ys}): ${t}`,...n)}}function Mn(t,...e){if(ri.logLevel<=oe.ERROR){const n=e.map(Kp);ri.error(`Firestore (${ys}): ${t}`,...n)}}function Uy(t,...e){if(ri.logLevel<=oe.WARN){const n=e.map(Kp);ri.warn(`Firestore (${ys}): ${t}`,...n)}}function Kp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function ye(t,e){t||Q()}function X(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class PA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class $A{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new PA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new xt(e)}}class bA{constructor(e,n,r){this.type="FirstParty",this.user=xt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class LA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new bA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.p=n.token,new MA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function UA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class OE{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=UA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Be(0,0))}static max(){return new J(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Ro{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const BA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Ro{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return BA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(we.fromString(e))}static fromName(e){return new j(we.fromString(e).popFirst(5))}static empty(){return new j(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new we(e.slice()))}}function VA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new vr(i,j.empty(),e)}function jA(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(J.min(),j.empty(),-1)}static max(){return new vr(J.max(),j.empty(),-1)}}function zA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const HA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ua(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==HA)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function la(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function By(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */qp.ot=-1;class je{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qa(this.root,e,this.comparator,!0)}}class qa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:et.RED,this.left=i!=null?i:et.EMPTY,this.right=s!=null?s:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vy(this.data.getIterator())}getIteratorFrom(e){return new Vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Ve(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const KA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=KA.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function bE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function LE(t){const e=t.mapValue.fields.__previous_value__;return bE(e)?LE(e):e}function Po(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class qA{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof is&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ic(t){return t==null}function el(t){return t===0&&1/t==-1/0}function GA(t){return typeof t=="number"&&Number.isInteger(t)&&!el(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bE(t)?4:QA(t)?9007199254740991:10:Q()}function vn(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wr(r.timestampValue),o=wr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return rs(r.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return be(r.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(r.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return be(r.integerValue)===be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=be(r.doubleValue),o=be(i.doubleValue);return s===o?el(s)===el(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(By(s)!==By(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!vn(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Oo(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=be(i.integerValue||i.doubleValue),a=be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jy(t.timestampValue,e.timestampValue);case 4:return jy(Po(t),Po(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=rs(i),a=rs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=le(o[u],a[u]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(be(i.latitude),be(s.latitude));return o!==0?o:le(be(i.longitude),be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=ss(o[u],a[u]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ga.mapValue&&s===Ga.mapValue)return 0;if(i===Ga.mapValue)return 1;if(s===Ga.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=le(a[c],l[c]);if(h!==0)return h;const d=ss(o[a[c]],u[l[c]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=wr(t),r=wr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Fi(t){return Gd(t)}function Gd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Gd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Gd(r.fields[a])}`;return s+"}"}(t.mapValue):Q();var e,n}function zy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qd(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function Hy(t){return!!t&&"nullValue"in t}function Wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lu(t){return!!t&&"mapValue"in t}function no(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=no(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(no(this.value))}}function ME(t){const e=[];return hi(t.fields,(n,r)=>{const i=new ft([n]);if(lu(r)){const s=ME(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class tt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,J.min(),J.min(),Nt.empty(),0)}static newFoundDocument(e,n,r){return new tt(e,1,n,J.min(),r,0)}static newNoDocument(e,n){return new tt(e,2,n,J.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,J.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class XA{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Ky(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XA(t,e,n,r,i,s,o)}function Qp(t){const e=X(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Fi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.ut=n}return e.ut}function YA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Fi(r.value)}`;var r}).join(", ")}]`),ic(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Fi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Fi(n)).join(",")),`Target(${e})`}function Xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!sN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!vn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gy(t.startAt,e.startAt)&&Gy(t.endAt,e.endAt)}function Xd(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ct extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new JA(e,n,r):n==="array-contains"?new tN(e,r):n==="in"?new nN(e,r):n==="not-in"?new rN(e,r):n==="array-contains-any"?new iN(e,r):new Ct(e,n,r)}static ct(e,n,r){return n==="in"?new ZA(e,r):new eN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(ss(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.at(ss(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class JA extends Ct{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.at(n)}}class ZA extends Ct{constructor(e,n){super(e,"in",n),this.keys=FE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eN extends Ct{constructor(e,n){super(e,"not-in",n),this.keys=FE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class tN extends Ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&Oo(n.arrayValue,this.value)}}class nN extends Ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class rN extends Ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oo(this.value.arrayValue,n)}}class iN extends Ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oo(this.value.arrayValue,r))}}class tl{constructor(e,n){this.position=e,this.inclusive=n}}class Ui{constructor(e,n="asc"){this.field=e,this.dir=n}}function sN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function oN(t,e,n,r,i,s,o,a){return new vs(t,e,n,r,i,s,o,a)}function Yp(t){return new vs(t)}function Qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Jp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zp(t){for(const e of t.filters)if(e.ht())return e.field;return null}function UE(t){return t.collectionGroup!==null}function $o(t){const e=X(t);if(e.lt===null){e.lt=[];const n=Zp(e),r=Jp(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Ui(n)),e.lt.push(new Ui(ft.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ui(ft.keyField(),s))}}}return e.lt}function Fn(t){const e=X(t);if(!e.ft)if(e.limitType==="F")e.ft=Ky(e.path,e.collectionGroup,$o(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of $o(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ui(s.field,o))}const r=e.endAt?new tl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new tl(e.startAt.position,e.startAt.inclusive):null;e.ft=Ky(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function nl(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return Xp(Fn(t),Fn(e))&&t.limitType===e.limitType}function BE(t){return`${Qp(Fn(t))}|lt:${t.limitType}`}function Yd(t){return`Query(target=${YA(Fn(t))}; limitType=${t.limitType})`}function em(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=qy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,$o(n),r)||n.endAt&&!function(i,s,o){const a=qy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,$o(n),r))}(t,e)}function aN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VE(t){return(e,n)=>{let r=!1;for(const i of $o(t)){const s=uN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uN(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ss(a,u):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */function jE(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:el(e)?"-0":e}}function zE(t){return{integerValue:""+t}}function lN(t,e){return GA(e)?zE(e):jE(t,e)}/**
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
 */class oc{constructor(){this._=void 0}}function cN(t,e,n){return t instanceof rl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof bo?WE(t,e):t instanceof Lo?KE(t,e):function(r,i){const s=HE(r,i),o=Xy(s)+Xy(r._t);return Qd(s)&&Qd(r._t)?zE(o):jE(r.wt,o)}(t,e)}function hN(t,e,n){return t instanceof bo?WE(t,e):t instanceof Lo?KE(t,e):n}function HE(t,e){return t instanceof il?Qd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class rl extends oc{}class bo extends oc{constructor(e){super(),this.elements=e}}function WE(t,e){const n=qE(e);for(const r of t.elements)n.some(i=>vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Lo extends oc{constructor(e){super(),this.elements=e}}function KE(t,e){let n=qE(e);for(const r of t.elements)n=n.filter(i=>!vn(i,r));return{arrayValue:{values:n}}}class il extends oc{constructor(e,n){super(),this.wt=e,this._t=n}}function Xy(t){return be(t.integerValue||t.doubleValue)}function qE(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bo&&r instanceof bo||n instanceof Lo&&r instanceof Lo?ns(n.elements,r.elements,vn):n instanceof il&&r instanceof il?vn(n._t,r._t):n instanceof rl&&r instanceof rl}(t.transform,e.transform)}class fN{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function GE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tm(t.key,un.none()):new ca(t.key,t.data,un.none());{const n=t.data,r=Nt.empty();let i=new Ve(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new Gt(i.toArray()),un.none())}}function pN(t,e,n){t instanceof ca?function(r,i,s){const o=r.value.clone(),a=Jy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(r,i,s){if(!cu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Jy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(QE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof ca?function(i,s,o,a){if(!cu(i.precondition,s))return o;const u=i.value.clone(),l=Zy(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,s,o,a){if(!cu(i.precondition,s))return o;const u=Zy(i.fieldTransforms,a,s),l=s.data;return l.setAll(QE(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return cu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function mN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HE(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function Yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ns(n,r,(i,s)=>dN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends ac{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends ac{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function QE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jy(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hN(o,a,n[i]))}return r}function Zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cN(s,o,e))}return r}class tm extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gN extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yN{constructor(e){this.count=e}}/**
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
 */var $e,ne;function vN(t){switch(t){default:return Q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function XE(t){if(t===void 0)return Mn("GRPC error has no .code"),k.UNKNOWN;switch(t){case $e.OK:return k.OK;case $e.CANCELLED:return k.CANCELLED;case $e.UNKNOWN:return k.UNKNOWN;case $e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case $e.INTERNAL:return k.INTERNAL;case $e.UNAVAILABLE:return k.UNAVAILABLE;case $e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case $e.NOT_FOUND:return k.NOT_FOUND;case $e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case $e.ABORTED:return k.ABORTED;case $e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case $e.DATA_LOSS:return k.DATA_LOSS;default:return Q()}}(ne=$e||($e={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $E(this.inner)}size(){return this.innerSize}}/**
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
 */const wN=new je(j.comparator);function Un(){return wN}const YE=new je(j.comparator);function Vs(...t){let e=YE;for(const n of t)e=e.insert(n.key,n);return e}function JE(t){let e=YE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return io()}function ZE(){return io()}function io(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const EN=new je(j.comparator),SN=new Ve(j.comparator);function Z(...t){let e=SN;for(const n of t)e=e.add(n);return e}const CN=new Ve(le);function eS(){return CN}/**
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
 */class uc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n)),new uc(J.min(),r,eS(),Un(),Z())}}class ha{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ha(ot.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
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
 */class hu{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class tS{constructor(e,n){this.targetId=e,this.It=n}}class nS{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ev{constructor(){this.Tt=0,this.Et=nv(),this.At=ot.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Z(),n=Z(),r=Z();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new ha(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=nv()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class _N{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Un(),this.Bt=tv(),this.Lt=new Ve(le)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Xd(s))if(r===0){const o=new j(s.path);this.Kt(n,o,tt.newNoDocument(o,J.min()))}else ye(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Xd(a.target)){const u=new j(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,tt.newNoDocument(u,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=Z();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ht(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new uc(e,n,this.Lt,this.$t,r);return this.$t=Un(),this.Bt=tv(),this.Lt=new Ve(le),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ev,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ve(le),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new ev),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function tv(){return new je(j.comparator)}function nv(){return new je(j.comparator)}/**
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
 */const IN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class TN{constructor(e,n){this.databaseId=e,this.dt=n}}function sl(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rS(t,e){return t.dt?e.toBase64():e.toUint8Array()}function xN(t,e){return sl(t,e.toTimestamp())}function Rn(t){return ye(!!t),J.fromTimestamp(function(e){const n=wr(e);return new Be(n.seconds,n.nanos)}(t))}function nm(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function iS(t){const e=we.fromString(t);return ye(aS(e)),e}function Jd(t,e){return nm(t.databaseId,e.path)}function _h(t,e){const n=iS(e);if(n.get(1)!==t.databaseId.projectId)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(sS(n))}function Zd(t,e){return nm(t.databaseId,e)}function AN(t){const e=iS(t);return e.length===4?we.emptyPath():sS(e)}function ef(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sS(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rv(t,e,n){return{name:Jd(t,e),fields:n.value.mapValue.fields}}function NN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.dt?(ye(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):(ye(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?k.UNKNOWN:XE(u.code);return new F(l,u.message||"")}(o);n=new nS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_h(t,r.document.name),s=Rn(r.document.updateTime),o=new Nt({mapValue:{fields:r.document.fields}}),a=tt.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new hu(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_h(t,r.document),s=r.readTime?Rn(r.readTime):J.min(),o=tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_h(t,r.document),s=r.removedTargetIds||[];n=new hu([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new yN(i),o=r.targetId;n=new tS(o,s)}}return n}function DN(t,e){let n;if(e instanceof ca)n={update:rv(t,e.key,e.value)};else if(e instanceof tm)n={delete:Jd(t,e.key)};else if(e instanceof Ar)n={update:rv(t,e.key,e.data),updateMask:BN(e.fieldMask)};else{if(!(e instanceof gN))return Q();n={verify:Jd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof rl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Lo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof il)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:xN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function RN(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Rn(r.updateTime):Rn(i);return s.isEqual(J.min())&&(s=Rn(i)),new fN(s,r.transformResults||[])}(n,e))):[]}function PN(t,e){return{documents:[Zd(t,e.path)]}}function ON(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(Wy(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NAN"}};if(Hy(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Wy(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NOT_NAN"}};if(Hy(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gi(h.field),op:MN(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:gi(c.field),direction:LN(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.dt||ic(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function $N(t){let e=AN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=oS(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ui(Ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ic(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new tl(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new tl(d,h)}(n.endAt)),oN(e,i,o,s,a,"F",u,l)}function bN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function oS(t){return t?t.unaryFilter!==void 0?[UN(t)]:t.fieldFilter!==void 0?[FN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>oS(e)).reduce((e,n)=>e.concat(n)):Q():[]}function LN(t){return IN[t]}function MN(t){return kN[t]}function gi(t){return{fieldPath:t.canonicalString()}}function Ri(t){return ft.fromServerFormat(t.fieldPath)}function FN(t){return Ct.create(Ri(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function UN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ri(t.unaryFilter.field);return Ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ri(t.unaryFilter.field);return Ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ri(t.unaryFilter.field);return Ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ri(t.unaryFilter.field);return Ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function BN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class VN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=GE(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>Yy(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>Yy(n,r))}}class rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=EN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rm(e,n,r,i)}}/**
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
 */class jN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class zN{constructor(e){this.ne=e}}function HN(t){const e=$N({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nl(e,e.limit,"L"):e}/**
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
 */class WN{constructor(){this.ze=new KN}addToCollectionParentIndex(e,n){return this.ze.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(vr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class KN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(we.comparator)).toArray()}}/**
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
 */class os{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new os(0)}static Rn(){return new os(-1)}}/**
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
 */class qN{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class QN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ro(r.mutation,i,Gt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vs();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Un();const o=io(),a=io();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Ar)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),ro(c.mutation,l,c.mutation.getFieldMask(),Be.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new GN(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=io();let i=new je((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Gt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=ZE();c.forEach(d=>{if(!s.has(d)){const p=GE(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Fr());let a=-1,u=s;return o.next(l=>A.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,Z())).next(c=>({batchId:a,changes:JE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=Vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Vs();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const u=function(l,c){return new vs(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=Vs();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&ro(l.mutation,u,Gt.empty(),Be.now()),em(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(tt.newInvalidDocument(n))}}/**
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
 */class XN{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return A.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Rn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:HN(r.bundledQuery),readTime:Rn(r.readTime)}}(n)),A.resolve()}}/**
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
 */class YN{constructor(){this.overlays=new je(j.comparator),this.Xn=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Fr(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new je((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Fr(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return A.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jN(n,r));let s=this.Xn.get(n);s===void 0&&(s=Z(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class im{constructor(){this.Zn=new Ve(He.ts),this.es=new Ve(He.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new He(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new He(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new j(new we([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new we([])),r=new He(n,e),i=new He(n,e+1);let s=Z();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||le(e.ls,n.ls)}static ns(e,n){return le(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
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
 */class JN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ve(He.ts)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(le);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),A.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new He(new j(s),0);let a=new Ve(le);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),A.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return A.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new He(n,0),i=this.ds.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ZN{constructor(e){this.ps=e,this.docs=new je(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=Un();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||zA(jA(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Q()}Is(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eD(this)}getSize(e){return A.resolve(this.size)}}class eD extends qN{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class tD{constructor(e){this.persistence=e,this.Ts=new ws(n=>Qp(n),Xp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Es=0,this.As=new im,this.targetCount=0,this.Rs=os.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),A.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.vn(n),A.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.As.containsKey(n))}}/**
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
 */class nD{constructor(e,n){this.bs={},this.overlays={},this.Ps=new qp(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new tD(this),this.indexManager=new WN,this.remoteDocumentCache=function(r){return new ZN(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new zN(n),this.Ds=new XN(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new JN(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new rD(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return A.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class rD extends WA{constructor(e){super(),this.currentSequenceNumber=e}}class sm{constructor(e){this.persistence=e,this.ks=new im,this.Ms=null}static Os(e){return new sm(e)}get Fs(){if(this.Ms)return this.Ms;throw Q()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),A.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Fs,r=>{const i=j.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return A.or([()=>A.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class om{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new om(e,n.fromCache,r,i)}}/**
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
 */class iD{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(Qy(n))return A.resolve(null);let r=Fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nl(n,null,"F"),r=Fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.ki(n,a);return this.Mi(n,l,o,u.readTime)?this.Ci(e,nl(n,null,"F")):this.Oi(e,l,n,u)}))})))}xi(e,n,r,i){return Qy(n)||i.isEqual(J.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(Fy()<=oe.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yd(n)),this.Oi(e,o,n,VA(i,-1)))})}ki(e,n){let r=new Ve(VE(e));return n.forEach((i,s)=>{em(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Fy()<=oe.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Yd(n)),this.Di.getDocumentsMatchingQuery(e,n,vr.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sD{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new je(le),this.Bi=new ws(s=>Qp(s),Xp),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QN(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function oD(t,e,n,r){return new sD(t,e,n,r)}async function uS(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function aD(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const v=u.docVersions.get(p);ye(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lS(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function uD(t,e){const n=X(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ot.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,v,w){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,c)&&a.push(n.Vs.updateTargetData(s,p))});let u=Un(),l=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(lD(s,o,e.documentUpdates).next(c=>{u=c.Gi,l=c.Qi})),!r.isEqual(J.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.$i=i,s))}function lD(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Gi:o,Qi:i}})}function cD(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hD(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Hr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function tf(t,e,n){const r=X(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!la(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function iv(t,e,n){const r=X(t);let i=J.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=X(a),h=c.Bi.get(l);return h!==void 0?A.resolve(c.$i.get(h)):c.Vs.getTargetData(u,l)}(r,o,Fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:Z())).next(a=>(dD(r,aN(e),a),{documents:a,ji:s})))}function dD(t,e,n){let r=J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class sv{constructor(){this.activeTargetIds=eS()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fD{constructor(){this.Fr=new sv,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new sv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pD{Br(e){}shutdown(){}}/**
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
 */class ov{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const mD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class gD{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class yD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(u=>(V("RestConnection","Received: ",u),u),u=>{throw Uy("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ys,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=mD[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new RA;a.listenOnce(AA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ch.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Ch.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case Ch.HTTP_ERROR:const c=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(g)>=0?g:k.UNKNOWN}(h.status);o(new F(d,h.message))}else o(new F(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(k.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=TA(),o=xA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new DA({})),this.uo(a.initMessageHeaders,n,r),_w()||kw()||lT()||Tw()||cT()||Iw()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");V("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new gD({jr:g=>{h?V("Connection","Not sending because WebChannel is closed:",g):(c||(V("Connection","Opening WebChannel transport."),l.open(),c=!0),V("Connection","WebChannel sending:",g),l.send(g))},Wr:()=>l.close()}),p=(g,v,w)=>{g.listen(v,m=>{try{w(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,Ka.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(l,Ka.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.eo())}),p(l,Ka.EventType.ERROR,g=>{h||(h=!0,Uy("Connection","WebChannel transport errored:",g),d.eo(new F(k.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ka.EventType.MESSAGE,g=>{var v;if(!h){const w=g.data[0];ye(!!w);const m=w,f=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(f){V("Connection","WebChannel received error:",f);const y=f.status;let S=function(D){const I=$e[D];if(I!==void 0)return XE(I)}(y),T=f.message;S===void 0&&(S=k.INTERNAL,T="Unknown error status: "+y+" with message "+f.message),h=!0,d.eo(new F(S,T)),l.close()}else V("Connection","WebChannel received:",w),d.no(w)}}),p(o,NA.STAT_EVENT,g=>{g.stat===Ly.PROXY?V("Connection","Detected buffering proxy"):g.stat===Ly.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Ih(){return typeof document<"u"?document:null}/**
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
 */function lc(t){return new TN(t,!0)}class cS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class hS{constructor(e,n,r,i,s,o,a,u){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new cS(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new F(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vD extends hS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=NN(this.wt,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Rn(s.readTime):J.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=ef(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Xd(a)?{documents:PN(i,a)}:{query:ON(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=rS(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=sl(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=bN(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=ef(this.wt),n.removeTarget=e,this.Oo(n)}}class wD extends hS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=RN(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.Jo(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=ef(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DN(this.wt,r))};this.Oo(n)}}/**
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
 */class ED extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(k.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(k.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class SD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Mn(n),this.su=!1):V("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class CD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{di(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=X(a);u.lu.add(4),await da(u),u._u.set("Unknown"),u.lu.delete(4),await cc(u)}(this))})}),this._u=new SD(r,i)}}async function cc(t){if(di(t))for(const e of t.fu)await e(!0)}async function da(t){for(const e of t.fu)await e(!1)}function dS(t,e){const n=X(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),lm(n)?um(n):Es(n).Co()&&am(n,e))}function fS(t,e){const n=X(t),r=Es(n);n.hu.delete(e),r.Co()&&pS(n,e),n.hu.size===0&&(r.Co()?r.ko():di(n)&&n._u.set("Unknown"))}function am(t,e){t.wu.Nt(e.targetId),Es(t).Qo(e)}function pS(t,e){t.wu.Nt(e),Es(t).jo(e)}function um(t){t.wu=new _N({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Es(t).start(),t._u.iu()}function lm(t){return di(t)&&!Es(t).Do()&&t.hu.size>0}function di(t){return X(t).lu.size===0}function mS(t){t.wu=void 0}async function _D(t){t.hu.forEach((e,n)=>{am(t,e)})}async function ID(t,e){mS(t),lm(t)?(t._u.uu(e),um(t)):t._u.set("Unknown")}async function kD(t,e,n){if(t._u.set("Online"),e instanceof nS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ol(t,r)}else if(e instanceof hu?t.wu.Ut(e):e instanceof tS?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(J.min()))try{const r=await lS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(u);l&&i.hu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),pS(i,a);const l=new Hr(u.target,a,1,u.sequenceNumber);am(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await ol(t,r)}}async function ol(t,e,n){if(!la(e))throw e;t.lu.add(1),await da(t),t._u.set("Offline"),n||(n=()=>lS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await cc(t)})}function gS(t,e){return e().catch(n=>ol(t,n,e))}async function hc(t){const e=X(t),n=Er(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;TD(e);)try{const i=await cD(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,xD(e,i)}catch(i){await ol(e,i)}yS(e)&&vS(e)}function TD(t){return di(t)&&t.au.length<10}function xD(t,e){t.au.push(e);const n=Er(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function yS(t){return di(t)&&!Er(t).Do()&&t.au.length>0}function vS(t){Er(t).start()}async function AD(t){Er(t).Xo()}async function ND(t){const e=Er(t);for(const n of t.au)e.Ho(n.mutations)}async function DD(t,e,n){const r=t.au.shift(),i=rm.from(r,e,n);await gS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hc(t)}async function RD(t,e){e&&Er(t).zo&&await async function(n,r){if(i=r.code,vN(i)&&i!==k.ABORTED){const s=n.au.shift();Er(n).No(),await gS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await hc(n)}var i}(t,e),yS(t)&&vS(t)}async function av(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=di(n);n.lu.add(3),await da(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await cc(n)}async function PD(t,e){const n=X(t);e?(n.lu.delete(2),await cc(n)):e||(n.lu.add(2),await da(n),n._u.set("Unknown"))}function Es(t){return t.mu||(t.mu=function(e,n,r){const i=X(e);return i.tu(),new vD(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:_D.bind(null,t),Jr:ID.bind(null,t),Go:kD.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),lm(t)?um(t):t._u.set("Unknown")):(await t.mu.stop(),mS(t))})),t.mu}function Er(t){return t.gu||(t.gu=function(e,n,r){const i=X(e);return i.tu(),new wD(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:AD.bind(null,t),Jr:RD.bind(null,t),Yo:ND.bind(null,t),Jo:DD.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await hc(t)):(await t.gu.stop(),t.au.length>0&&(V("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class cm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new cm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hm(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),la(t))return new F(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class uv{constructor(){this.yu=new je(j.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):Q():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new as(e,n,Bi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class OD{constructor(){this.Iu=void 0,this.listeners=[]}}class $D{constructor(){this.queries=new ws(e=>BE(e),sc),this.onlineState="Unknown",this.Tu=new Set}}async function bD(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new OD),i)try{s.Iu=await n.onListen(r)}catch(o){const a=hm(o,`Initialization of query '${Yd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&dm(n)}async function LD(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function MD(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&dm(n)}function FD(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dm(t){t.Tu.forEach(e=>{e.next()})}class UD{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class wS{constructor(e){this.key=e}}class ES{constructor(e){this.key=e}}class BD{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Z(),this.mutatedKeys=Z(),this.Lu=VE(e),this.Uu=new Bi(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new uv,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=em(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),w=!0):this.Qu(d,p)||(r.track({type:2,doc:p}),w=!0,(u&&this.Lu(p,u)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(u||l)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((l,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return p(h)-p(d)}(l.type,c.type)||this.Lu(l.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,s.length!==0||u?{snapshot:new as(this.query,e.Uu,i,s,e.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new uv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Z(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new ES(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new wS(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Z();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return as.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class VD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jD{constructor(e){this.key=e,this.Xu=!1}}class zD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new ws(a=>BE(a),sc),this.ec=new Map,this.nc=new Set,this.sc=new je(j.comparator),this.ic=new Map,this.rc=new im,this.oc={},this.uc=new Map,this.cc=os.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function HD(t,e){const n=e2(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await hD(n.localStore,Fn(e));n.isPrimaryClient&&dS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await WD(n,e,r,a==="current")}return i}async function WD(t,e,n,r){t.hc=(c,h,d)=>async function(p,g,v,w){let m=g.view.Ku(v);m.Mi&&(m=await iv(p.localStore,g.query,!1).then(({documents:S})=>g.view.Ku(S,m)));const f=w&&w.targetChanges.get(g.targetId),y=g.view.applyChanges(m,p.isPrimaryClient,f);return cv(p,g.targetId,y.zu),y.snapshot}(t,c,h,d);const i=await iv(t.localStore,e,!0),s=new BD(e,i.ji),o=s.Ku(i.documents),a=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);cv(t,n,u.zu);const l=new VD(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),u.snapshot}async function KD(t,e){const n=X(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!sc(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fS(n.remoteStore,r.targetId),nf(n,r.targetId)}).catch(ua)):(nf(n,r.targetId),await tf(n.localStore,r.targetId,!0))}async function qD(t,e,n){const r=t2(t);try{const i=await function(s,o){const a=X(s),u=Be.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Un(),g=Z();return a.Ui.getEntries(d,l).next(v=>{p=v,p.forEach((w,m)=>{m.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const w=[];for(const m of o){const f=mN(m,c.get(m.key).overlayedDocument);f!=null&&w.push(new Ar(m.key,f,ME(f.value.mapValue),un.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:JE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.oc[s.currentUser.toKey()];u||(u=new je(le)),u=u.insert(o,a),s.oc[s.currentUser.toKey()]=u}(r,i.batchId,n),await fa(r,i.changes),await hc(r.remoteStore)}catch(i){const s=hm(i,"Failed to persist write");n.reject(s)}}async function SS(t,e){const n=X(t);try{const r=await uD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ye(o.Xu):i.removedDocuments.size>0&&(ye(o.Xu),o.Xu=!1))}),await fa(n,r,e)}catch(r){await ua(r)}}function lv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Eu(o)&&(u=!0)}),u&&dm(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GD(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new je(j.comparator);o=o.insert(s,tt.newNoDocument(s,J.min()));const a=Z().add(s),u=new uc(J.min(),new Map,new Ve(le),o,a);await SS(r,u),r.sc=r.sc.remove(s),r.ic.delete(e),fm(r)}else await tf(r.localStore,e,!1).then(()=>nf(r,e,n)).catch(ua)}async function QD(t,e){const n=X(t),r=e.batch.batchId;try{const i=await aD(n.localStore,e);_S(n,r,null),CS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await ua(i)}}async function XD(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(ye(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);_S(r,e,n),CS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await ua(i)}}function CS(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function _S(t,e,n){const r=X(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||IS(t,r)})}function IS(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(fS(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),fm(t))}function cv(t,e,n){for(const r of n)r instanceof wS?(t.rc.addReference(r.key,e),YD(t,r)):r instanceof ES?(V("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||IS(t,r.key)):Q()}function YD(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.nc.add(r),fm(t))}function fm(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new j(we.fromString(e)),r=t.cc.next();t.ic.set(r,new jD(n)),t.sc=t.sc.insert(n,r),dS(t.remoteStore,new Hr(Fn(Yp(n.path)),r,2,qp.ot))}}async function fa(t,e,n){const r=X(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,u)=>{o.push(r.hc(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=om.Vi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,u){const l=X(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>A.forEach(u,h=>A.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>A.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!la(c))throw c;V("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.$i.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,g)}}}(r.localStore,s))}async function JD(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await uS(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new F(k.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.Ki)}}function ZD(t,e){const n=X(t),r=n.ic.get(e);if(r&&r.Xu)return Z().add(r.key);{let i=Z();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function e2(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=SS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GD.bind(null,e),e.Zu.Go=MD.bind(null,e.eventManager),e.Zu.lc=FD.bind(null,e.eventManager),e}function t2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XD.bind(null,e),e}class n2{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=lc(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return oD(this.persistence,new iD,e.initialUser,this.wt)}_c(e){return new nD(sm.Os,this.wt)}dc(e){return new fD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class r2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JD.bind(null,this.syncEngine),await PD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $D}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new yD(i));var i;return function(s,o,a,u){return new ED(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>lv(this.syncEngine,a,0),o=ov.V()?new ov:new pD,new CD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new zD(r,i,s,o,a,u);return l&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);V("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await da(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class i2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class s2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=OE.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function o2(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function a2(t,e){t.asyncQueue.verifyOperationInProgress();const n=await u2(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>av(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>av(e.remoteStore,s)),t.onlineComponents=e}async function u2(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await o2(t,new n2)),t.offlineComponents}async function kS(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await a2(t,new r2)),t.onlineComponents}function l2(t){return kS(t).then(e=>e.syncEngine)}async function hv(t){const e=await kS(t),n=e.eventManager;return n.onListen=HD.bind(null,e.syncEngine),n.onUnlisten=KD.bind(null,e.syncEngine),n}const dv=new Map;/**
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
 */function TS(t,e,n){if(!n)throw new F(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function c2(t,e,n,r){if(e===!0&&r===!0)throw new F(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fv(t){if(!j.isDocumentKey(t))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pv(t){if(j.isDocumentKey(t))throw new F(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dc(t);throw new F(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function h2(t,e){if(e<=0)throw new F(k.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class mv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,c2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class pm{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mv({}),this._settingsFrozen=!1,e instanceof is?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new is(i.options.projectId)}(e))}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OA;switch(n.type){case"gapi":const r=n.client;return ye(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new LA(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dv.get(e);n&&(V("ComponentProvider","Removing Datastore"),dv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class fi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class pr extends fi{constructor(e,n,r){super(e,n,Yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new j(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function mm(t,e,...n){if(t=gt(t),TS("collection","path",e),t instanceof pm){const r=we.fromString(e,...n);return pv(r),new pr(t,null,r)}{if(!(t instanceof $t||t instanceof pr))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return pv(r),new pr(t.firestore,null,r)}}function xS(t,e,...n){if(t=gt(t),arguments.length===1&&(e=OE.I()),TS("doc","path",e),t instanceof pm){const r=we.fromString(e,...n);return fv(r),new $t(t,null,new j(r))}{if(!(t instanceof $t||t instanceof pr))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return fv(r),new $t(t.firestore,t instanceof pr?t.converter:null,new j(r))}}/**
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
 */class d2{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new cS(this,"async_queue_retry"),this.Kc=()=>{const n=Ih();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ih();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new zr;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!la(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=cm.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&Q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function gv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class us extends pm{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new d2,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||DS(this),this._firestoreClient.terminate()}}function AS(t=Dw()){return Sp(t,"firestore").getImmediate()}function NS(t){return t._firestoreClient||DS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new qA(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new s2(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(ot.fromBase64String(e))}catch(n){throw new F(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gm{constructor(e){this._methodName=e}}/**
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
 */class ym{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const f2=/^__.*__$/;class p2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class RS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class vm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new vm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return al(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(PS(this.Zc)&&f2.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class m2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||lc(e)}aa(e,n,r,i=!1){return new vm({Zc:e,methodName:n,ca:r,path:ft.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function wm(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new m2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function g2(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);Em("Data must be an object, but it was:",o,r);const a=OS(r,o);let u,l;if(s.merge)u=new Gt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=rf(e,h,n);if(!o.contains(d))throw new F(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bS(c,d)||c.push(d)}u=new Gt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new p2(new Nt(a),u,l)}class pc extends gm{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function y2(t,e,n,r){const i=t.aa(1,e,n);Em("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();hi(r,(u,l)=>{const c=Sm(e,u,n);l=gt(l);const h=i.ia(c);if(l instanceof pc)s.push(c);else{const d=pa(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Gt(s);return new RS(o,a,i.fieldTransforms)}function v2(t,e,n,r,i,s){const o=t.aa(1,e,n),a=[rf(e,r,n)],u=[i];if(s.length%2!=0)throw new F(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(rf(e,s[d])),u.push(s[d+1]);const l=[],c=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!bS(l,a[d])){const p=a[d];let g=u[d];g=gt(g);const v=o.ia(p);if(g instanceof pc)l.push(p);else{const w=pa(g,v);w!=null&&(l.push(p),c.set(p,w))}}const h=new Gt(l);return new RS(c,h,o.fieldTransforms)}function w2(t,e,n,r=!1){return pa(n,t.aa(r?4:3,e))}function pa(t,e){if($S(t=gt(t)))return Em("Unsupported field value:",e,t),OS(t,e);if(t instanceof gm)return function(n,r){if(!PS(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=pa(o,r.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lN(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Be.fromDate(n);return{timestampValue:sl(r.wt,i)}}if(n instanceof Be){const i=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sl(r.wt,i)}}if(n instanceof ym)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ls)return{bytesValue:rS(r.wt,n._byteString)};if(n instanceof $t){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${dc(n)}`)}(t,e)}function OS(t,e){const n={};return $E(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=pa(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $S(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof ym||t instanceof ls||t instanceof $t||t instanceof gm)}function Em(t,e,n){if(!$S(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=dc(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function rf(t,e,n){if((e=gt(e))instanceof fc)return e._internalPath;if(typeof e=="string")return Sm(t,e);throw al("Field path arguments must be of type string or ",t,!1,void 0,n)}const E2=new RegExp("[~\\*/\\[\\]]");function Sm(t,e,n){if(e.search(E2)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fc(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new F(k.INVALID_ARGUMENT,a+t+u)}function bS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class LS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new S2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class S2 extends LS{data(){return super.data()}}function mc(t,e){return typeof e=="string"?Sm(t,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
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
 */class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class MS extends LS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class du extends MS{data(e={}){return super.data(e)}}class C2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new du(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new du(r._firestore,r._userDataWriter,o.doc.key,o.doc,new js(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new du(r._firestore,r._userDataWriter,o.doc.key,o.doc,new js(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:_2(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function I2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cm{}function sf(t,...e){for(const n of e)t=n._apply(t);return t}class k2 extends Cm{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=wm(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){vv(c,l);const p=[];for(const g of c)p.push(yv(a,i,g));h={arrayValue:{values:p}}}else h=yv(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||vv(c,l),h=w2(o,s,c,l==="in"||l==="not-in");const d=Ct.create(u,l,h);return function(p,g){if(g.ht()){const w=Zp(p);if(w!==null&&!w.isEqual(g.field))throw new F(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${g.field.toString()}'`);const m=Jp(p);m!==null&&FS(p,g.field,m)}const v=function(w,m){for(const f of w.filters)if(m.indexOf(f.op)>=0)return f.op;return null}(p,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(v!==null)throw v===g.op?new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new fi(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new vs(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function T2(t,e,n){const r=e,i=mc("where",t);return new k2(i,r,n)}class x2 extends Cm{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ui(i,s);return function(a,u){if(Jp(a)===null){const l=Zp(a);l!==null&&FS(a,l,u.field)}}(r,o),o}(e._query,this.fa,this.wa);return new fi(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new vs(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function A2(t,e="asc"){const n=e,r=mc("orderBy",t);return new x2(r,n)}class N2 extends Cm{constructor(e,n,r){super(),this.type=e,this.ma=n,this.ga=r}_apply(e){return new fi(e.firestore,e.converter,nl(e._query,this.ma,this.ga))}}function D2(t){return h2("limit",t),new N2("limit",t,"F")}function yv(t,e,n){if(typeof(n=gt(n))=="string"){if(n==="")throw new F(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!UE(e)&&n.indexOf("/")!==-1)throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!j.isDocumentKey(r))throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zy(t,new j(r))}if(n instanceof $t)return zy(t,n._key);throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(n)}.`)}function vv(t,e){if(!Array.isArray(t)||t.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(k.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function FS(t,e,n){if(!n.isEqual(e))throw new F(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class R2{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return hi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ym(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=LE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=wr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);ye(aS(r));const i=new is(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function P2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class US extends R2{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function wv(t,e,n,...r){t=Wr(t,$t);const i=Wr(t.firestore,us),s=wm(i);let o;return o=typeof(e=gt(e))=="string"||e instanceof fc?v2(s,"updateDoc",t._key,e,n,r):y2(s,"updateDoc",t._key,e),_m(i,[o.toMutation(t._key,un.exists(!0))])}function O2(t){return _m(Wr(t.firestore,us),[new tm(t._key,un.none())])}function $2(t,e){const n=Wr(t.firestore,us),r=xS(t),i=P2(t.converter,e);return _m(n,[g2(wm(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then(()=>r)}function BS(t,...e){var n,r,i;t=gt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(gv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof $t)l=Wr(t.firestore,us),c=Yp(t._key.path),u={next:h=>{e[o]&&e[o](b2(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Wr(t,fi);l=Wr(h.firestore,us),c=h._query;const d=new US(l);u={next:p=>{e[o]&&e[o](new C2(l,d,h,p))},error:e[o+1],complete:e[o+2]},I2(t._query)}return function(h,d,p,g){const v=new i2(g),w=new UD(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>bD(await hv(h),w)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>LD(await hv(h),w))}}(NS(l),c,a,u)}function _m(t,e){return function(n,r){const i=new zr;return n.asyncQueue.enqueueAndForget(async()=>qD(await l2(n),r,i)),i.promise}(NS(t),e)}function b2(t,e,n){const r=n.docs.get(e._key),i=new US(t);return new MS(t,i,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ys=n})(Jo),es(new Jr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new us(i,new $A(n.getProvider("auth-internal")),new FA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),fr(My,"3.4.14",t),fr(My,"3.4.14","esm2017")})();var L2="firebase",M2="9.9.2";/**
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
 */fr(L2,M2,"app");function Im(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function VS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F2=VS,jS=new Xo("auth","Firebase",VS());/**
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
 */const Ev=new wp("@firebase/auth");function fu(t,...e){Ev.logLevel<=oe.ERROR&&Ev.error(`Auth (${Jo}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw km(t,...e)}function mn(t,...e){return km(t,...e)}function zS(t,e,n){const r=Object.assign(Object.assign({},F2()),{[e]:n});return new Xo("auth","Firebase",r).create(e,{appName:t.name})}function U2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),zS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function km(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jS.create(t,...e)}function K(t,e,...n){if(!t)throw km(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fu(e),new Error(e)}function Bn(t,e){t||An(e)}/**
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
 */const Sv=new Map;function Nn(t){Bn(t instanceof Function,"Expected a class definition");let e=Sv.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sv.set(t,e),e)}/**
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
 */function B2(t,e){const n=Sp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zu(s,e!=null?e:{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function V2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function j2(){return Cv()==="http:"||Cv()==="https:"}function Cv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function z2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j2()||Iw()||"connection"in navigator)?navigator.onLine:!0}function H2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=_w()||kw()}get(){return z2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tm(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class HS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const W2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const K2=new ma(3e4,6e4);function ga(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ya(t,e,n,r,i={}){return WS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),HS.fetch()(KS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function WS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},W2),e);try{const i=new q2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Qa(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw zS(t,c,l);Yt(t,c)}}catch(i){if(i instanceof zn)throw i;Yt(t,"network-request-failed")}}async function va(t,e,n,r,i={}){const s=await ya(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function KS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tm(t.config,i):`${t.config.apiScheme}://${i}`}class q2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),K2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function G2(t,e){return ya(t,"POST","/v1/accounts:delete",e)}async function Q2(t,e){return ya(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function X2(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=xm(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:so(kh(i.auth_time)),issuedAtTime:so(kh(i.iat)),expirationTime:so(kh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kh(t){return Number(t)*1e3}function xm(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const s=aT(r);return s?JSON.parse(s):(fu("Failed to decode base64 JWT payload"),null)}catch(s){return fu("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Y2(t){const e=xm(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&J2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Z2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mo(t,Q2(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nR(s.providerUserInfo):[],a=tR(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function eR(t){const e=gt(t);await ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nR(t){return t.map(e=>{var{providerId:n}=e,r=Im(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rR(t,e){const n=await WS(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=KS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Y2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fo;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Kn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Im(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return X2(this,e)}reload(){return eR(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mo(this,G2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:T,providerData:D,stsTokenManager:I}=n;K(y&&I,e,"internal-error");const _=Fo.fromJSON(this.name,I);K(typeof y=="string",e,"internal-error"),Kn(h,e.name),Kn(d,e.name),K(typeof S=="boolean",e,"internal-error"),K(typeof T=="boolean",e,"internal-error"),Kn(p,e.name),Kn(g,e.name),Kn(v,e.name),Kn(w,e.name),Kn(m,e.name),Kn(f,e.name);const U=new Kr({uid:y,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:_,createdAt:m,lastLoginAt:f});return D&&Array.isArray(D)&&(U.providerData=D.map(B=>Object.assign({},B))),w&&(U._redirectEventId=w),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fo;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ul(s),s}}/**
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
 */class GS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GS.type="NONE";const _v=GS;/**
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
 */function pu(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(Nn(_v),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Nn(_v);const o=pu(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Kr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vi(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Vi(s,e,r))}}/**
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
 */function Iv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZS(e))return"Blackberry";if(eC(e))return"Webos";if(Am(e))return"Safari";if((e.includes("chrome/")||XS(e))&&!e.includes("edge/"))return"Chrome";if(JS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function QS(t=qe()){return/firefox\//i.test(t)}function Am(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function XS(t=qe()){return/crios\//i.test(t)}function YS(t=qe()){return/iemobile/i.test(t)}function JS(t=qe()){return/android/i.test(t)}function ZS(t=qe()){return/blackberry/i.test(t)}function eC(t=qe()){return/webos/i.test(t)}function gc(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iR(t=qe()){var e;return gc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sR(){return Tw()&&document.documentMode===10}function tC(t=qe()){return gc(t)||JS(t)||eC(t)||ZS(t)||/windows phone/i.test(t)||YS(t)}function oR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function nC(t,e=[]){let n;switch(t){case"Browser":n=Iv(qe());break;case"Worker":n=`${Iv(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jo}/${r}`}/**
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
 */class aR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class uR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kv(this),this.idTokenSubscription=new kv(this),this.beforeStateQueue=new aR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ul(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function wa(t){return gt(t)}class kv{constructor(e){this.auth=e,this.observer=null,this.addObserver=yT(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Nm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function lR(t,e){return ya(t,"POST","/v1/accounts:update",e)}/**
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
 */async function cR(t,e){return va(t,"POST","/v1/accounts:signInWithPassword",ga(t,e))}/**
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
 */async function hR(t,e){return va(t,"POST","/v1/accounts:signInWithEmailLink",ga(t,e))}async function dR(t,e){return va(t,"POST","/v1/accounts:signInWithEmailLink",ga(t,e))}/**
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
 */class Uo extends Nm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hR(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lR(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dR(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ji(t,e){return va(t,"POST","/v1/accounts:signInWithIdp",ga(t,e))}/**
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
 */const fR="http://localhost";class si extends Nm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Im(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:fR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
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
 */function pR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mR(t){const e=Fs(Us(t)).link,n=e?Fs(Us(e)).deep_link_id:null,r=Fs(Us(t)).deep_link_id;return(r?Fs(Us(r)).link:null)||r||n||e||t}class Dm{constructor(e){var n,r,i,s,o,a;const u=Fs(Us(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=pR((i=u.mode)!==null&&i!==void 0?i:null);K(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mR(e);try{return new Dm(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dm.parseLink(n);return K(r,"argument-error"),Uo._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ea extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Ea{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class Jn extends Ea{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends Ea{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function gR(t,e){return va(t,"POST","/v1/accounts:signUp",ga(t,e))}/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=Tv(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tv(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ll extends zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}}function rC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,s,e,r):s})}async function yR(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
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
 */async function vR(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Mo(t,rC(i,s,e,t),n);K(o.idToken,i,"internal-error");const a=xm(o.idToken);K(a,i,"internal-error");const{sub:u}=a;return K(t.uid===u,i,"user-mismatch"),oi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Yt(i,"user-mismatch"),o}}/**
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
 */async function iC(t,e,n=!1){const r="signIn",i=await rC(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wR(t,e){return iC(wa(t),e)}async function ER(t,e,n){const r=wa(t),i=await gR(r,{returnSecureToken:!0,email:e,password:n}),s=await oi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function SR(t,e,n){return wR(gt(t),Ss.credential(e,n))}function Pm(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}const cl="__sak";/**
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
 */class sC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cl,"1"),this.storage.removeItem(cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function CR(){const t=qe();return Am(t)||gc(t)}const _R=1e3,IR=10;class oC extends sC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CR()&&oR(),this.fallbackToPolling=tC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oC.type="LOCAL";const kR=oC;/**
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
 */class aC extends sC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aC.type="SESSION";const uC=aC;/**
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
 */function TR(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await TR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
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
 */function Om(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Om("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gn(){return window}function AR(t){gn().location.href=t}/**
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
 */function lC(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function NR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RR(){return lC()?self:null}/**
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
 */const cC="firebaseLocalStorageDb",PR=1,hl="firebaseLocalStorage",hC="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vc(t,e){return t.transaction([hl],e?"readwrite":"readonly").objectStore(hl)}function OR(){const t=indexedDB.deleteDatabase(cC);return new Sa(t).toPromise()}function af(){const t=indexedDB.open(cC,PR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hl,{keyPath:hC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hl)?e(r):(r.close(),await OR(),e(await af()))})})}async function xv(t,e,n){const r=vc(t,!0).put({[hC]:e,value:n});return new Sa(r).toPromise()}async function $R(t,e){const n=vc(t,!1).get(e),r=await new Sa(n).toPromise();return r===void 0?null:r.value}function Av(t,e){const n=vc(t,!0).delete(e);return new Sa(n).toPromise()}const bR=800,LR=3;class dC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(RR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NR(),!this.activeServiceWorker)return;this.sender=new xR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await af();return await xv(e,cl,"1"),await Av(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$R(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Av(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vc(i,!1).getAll();return new Sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dC.type="LOCAL";const MR=dC;/**
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
 */function FR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function UR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FR().appendChild(r)})}function BR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ma(3e4,6e4);/**
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
 */function fC(t,e){return e?Nn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $m extends Nm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VR(t){return iC(t.auth,new $m(t),t.bypassAuthState)}function jR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),vR(n,new $m(t),t.bypassAuthState)}async function zR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),yR(n,new $m(t),t.bypassAuthState)}/**
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
 */class pC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return zR;case"reauthViaPopup":case"reauthViaRedirect":return jR;default:Yt(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const HR=new ma(2e3,1e4);async function WR(t,e,n){const r=wa(t);U2(t,e,Rm);const i=fC(r,n);return new Ur(r,"signInViaPopup",e,i).executeNotNull()}class Ur extends pC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,HR.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const KR="pendingRedirect",mu=new Map;class qR extends pC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const r=await GR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GR(t,e){const n=YR(e),r=XR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QR(t,e){mu.set(t._key(),e)}function XR(t){return Nn(t._redirectPersistence)}function YR(t){return pu(KR,t.config.apiKey,t.name)}async function JR(t,e,n=!1){const r=wa(t),i=fC(r,e),o=await new qR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ZR=10*60*1e3;class eP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nv(e))}saveEventToCache(e){this.cachedEventUids.add(Nv(e)),this.lastProcessedEventTime=Date.now()}}function Nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mC(t);default:return!1}}/**
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
 */async function nP(t,e={}){return ya(t,"GET","/v1/projects",e)}/**
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
 */const rP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iP=/^https?/;async function sP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nP(t);for(const n of e)try{if(oP(n))return}catch{}Yt(t,"unauthorized-domain")}function oP(t){const e=of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iP.test(n))return!1;if(rP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aP=new ma(3e4,6e4);function Dv(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uP(t){return new Promise((e,n)=>{var r,i,s;function o(){Dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dv(),n(mn(t,"network-request-failed"))},timeout:aP.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const a=BR("iframefcb");return gn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},UR(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw gu=null,e})}let gu=null;function lP(t){return gu=gu||uP(t),gu}/**
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
 */const cP=new ma(5e3,15e3),hP="__/auth/iframe",dP="emulator/auth/iframe",fP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tm(e,dP):`https://${t.config.authDomain}/${hP}`,r={apiKey:e.apiKey,appName:t.name,v:Jo},i=pP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yo(r).slice(1)}`}async function gP(t){const e=await lP(t),n=gn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:mP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=gn().setTimeout(()=>{s(o)},cP.get());function u(){gn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const yP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vP=500,wP=600,EP="_blank",SP="http://localhost";class Rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CP(t,e,n,r=vP,i=wP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},yP),{width:r.toString(),height:i.toString(),top:s,left:o}),l=qe().toLowerCase();n&&(a=XS(l)?EP:n),QS(l)&&(e=e||SP,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(iR(l)&&a!=="_self")return _P(e||"",a),new Rv(null);const h=window.open(e||"",a,c);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Rv(h)}function _P(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IP="__/auth/handler",kP="emulator/auth/handler";function Pv(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jo,eventId:i};if(e instanceof Rm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Ea){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${TP(t)}?${Yo(a).slice(1)}`}function TP({config:t}){return t.emulator?Tm(t,kP):`https://${t.authDomain}/${IP}`}/**
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
 */const Th="webStorageSupport";class xP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uC,this._completeRedirectFn=JR,this._overrideRedirectResult=QR}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Pv(e,n,r,of(),i);return CP(e,o,Om())}async _openRedirect(e,n,r,i){return await this._originValidation(e),AR(Pv(e,n,r,of(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gP(e),r=new eP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Th,{type:Th},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Th];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tC()||Am()||gc()}}const AP=xP;var Ov="@firebase/auth",$v="0.20.5";/**
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
 */class NP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RP(t){es(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{K(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nC(t)},c=new uR(a,u,l);return V2(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new Jr("auth-internal",e=>{const n=wa(e.getProvider("auth").getImmediate());return(r=>new NP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Ov,$v,DP(t)),fr(Ov,$v,"esm2017")}/**
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
 */function wc(t=Dw()){const e=Sp(t,"auth");return e.isInitialized()?e.getImmediate():B2(t,{popupRedirectResolver:AP,persistence:[MR,kR,uC]})}RP("Browser");const PP={apiKey:"AIzaSyB0BSlU8s4G5PEnk6guraYVScT7ynBVMXk",authDomain:"oxoqna.firebaseapp.com",projectId:"oxoqna",storageBucket:"oxoqna.appspot.com",messagingSenderId:{VITE_API_KEY:"AIzaSyB0BSlU8s4G5PEnk6guraYVScT7ynBVMXk",VITE_AUTH_DOMAIN:"oxoqna.firebaseapp.com",VITE_PROJECT_ID:"oxoqna",VITE_STORAGE_BUCKET:"oxoqna.appspot.com",VITE_MESSAGING_SENDER_ID:"434224691922",VITE_APP_ID:"1:434224691922:web:96fe96fe1fce9d060ecb0b",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_MESSAGEIN_ID,appId:"1:434224691922:web:96fe96fe1fce9d060ecb0b"},OP=gx(PP),$P=wc(),bm=AS();var gC={exports:{}},yC={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=O.exports;function bP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var LP=typeof Object.is=="function"?Object.is:bP,MP=cs.useState,FP=cs.useEffect,UP=cs.useLayoutEffect,BP=cs.useDebugValue;function VP(t,e){var n=e(),r=MP({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return UP(function(){i.value=n,i.getSnapshot=e,xh(i)&&s({inst:i})},[t,n,e]),FP(function(){return xh(i)&&s({inst:i}),t(function(){xh(i)&&s({inst:i})})},[t]),BP(n),n}function xh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!LP(t,n)}catch{return!0}}function jP(t,e){return e()}var zP=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?jP:VP;yC.useSyncExternalStore=cs.useSyncExternalStore!==void 0?cs.useSyncExternalStore:zP;(function(t){t.exports=yC})(gC);var vC={exports:{}},wC={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=O.exports,HP=gC.exports;function WP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var KP=typeof Object.is=="function"?Object.is:WP,qP=HP.useSyncExternalStore,GP=Ec.useRef,QP=Ec.useEffect,XP=Ec.useMemo,YP=Ec.useDebugValue;wC.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=GP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=XP(function(){function u(p){if(!l){if(l=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return h=g}return h=p}if(g=h,KP(c,p))return g;var v=r(p);return i!==void 0&&i(g,v)?g:(c=p,h=v)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,r,i]);var a=qP(t,s[0],s[1]);return QP(function(){o.hasValue=!0,o.value=a},[a]),YP(a),a};(function(t){t.exports=wC})(vC);function JP(t){t()}let EC=JP;const ZP=t=>EC=t,eO=()=>EC,Sr=C.createContext(null);function SC(){return O.exports.useContext(Sr)}const tO=()=>{throw new Error("uSES not initialized!")};let CC=tO;const nO=t=>{CC=t},rO=(t,e)=>t===e;function iO(t=Sr){const e=t===Sr?SC:()=>O.exports.useContext(t);return function(r,i=rO){const{store:s,subscription:o,getServerState:a}=e(),u=CC(o.addNestedSub,s.getState,a||s.getState,r,i);return O.exports.useDebugValue(u),u}}const _C=iO();function dl(){return dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dl.apply(this,arguments)}var sO={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=Symbol.for("react.element"),Mm=Symbol.for("react.portal"),Sc=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),kc=Symbol.for("react.context"),oO=Symbol.for("react.server_context"),Tc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Ac=Symbol.for("react.suspense_list"),Nc=Symbol.for("react.memo"),Dc=Symbol.for("react.lazy"),aO=Symbol.for("react.offscreen"),IC;IC=Symbol.for("react.module.reference");function Jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Lm:switch(t=t.type,t){case Sc:case _c:case Cc:case xc:case Ac:return t;default:switch(t=t&&t.$$typeof,t){case oO:case kc:case Tc:case Dc:case Nc:case Ic:return t;default:return e}}case Mm:return e}}}fe.ContextConsumer=kc;fe.ContextProvider=Ic;fe.Element=Lm;fe.ForwardRef=Tc;fe.Fragment=Sc;fe.Lazy=Dc;fe.Memo=Nc;fe.Portal=Mm;fe.Profiler=_c;fe.StrictMode=Cc;fe.Suspense=xc;fe.SuspenseList=Ac;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(t){return Jt(t)===kc};fe.isContextProvider=function(t){return Jt(t)===Ic};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lm};fe.isForwardRef=function(t){return Jt(t)===Tc};fe.isFragment=function(t){return Jt(t)===Sc};fe.isLazy=function(t){return Jt(t)===Dc};fe.isMemo=function(t){return Jt(t)===Nc};fe.isPortal=function(t){return Jt(t)===Mm};fe.isProfiler=function(t){return Jt(t)===_c};fe.isStrictMode=function(t){return Jt(t)===Cc};fe.isSuspense=function(t){return Jt(t)===xc};fe.isSuspenseList=function(t){return Jt(t)===Ac};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Sc||t===_c||t===Cc||t===xc||t===Ac||t===aO||typeof t=="object"&&t!==null&&(t.$$typeof===Dc||t.$$typeof===Nc||t.$$typeof===Ic||t.$$typeof===kc||t.$$typeof===Tc||t.$$typeof===IC||t.getModuleId!==void 0)};fe.typeOf=Jt;(function(t){t.exports=fe})(sO);function uO(){const t=eO();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const bv={notify(){},get:()=>[]};function lO(t,e){let n,r=bv;function i(h){return u(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=uO())}function l(){n&&(n(),n=void 0,r.clear(),r=bv)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const cO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hO=cO?O.exports.useLayoutEffect:O.exports.useEffect;function dO({store:t,context:e,children:n,serverState:r}){const i=O.exports.useMemo(()=>{const a=lO(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=O.exports.useMemo(()=>t.getState(),[t]);hO(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]);const o=e||Sr;return C.createElement(o.Provider,{value:i},n)}function kC(t=Sr){const e=t===Sr?SC:()=>O.exports.useContext(t);return function(){const{store:r}=e();return r}}const fO=kC();function pO(t=Sr){const e=t===Sr?fO:kC(t);return function(){return e().dispatch}}const Fm=pO();nO(vC.exports.useSyncExternalStoreWithSelector);ZP(Sf.exports.unstable_batchedUpdates);const mO=({ansArr:{title:t,description:e,viewCount:n},answerId:r,cate:i,search:s})=>{const[o,a]=O.exports.useState(!1),[u,l]=O.exports.useState(!1),[c,h]=O.exports.useState(""),[d,p]=O.exports.useState(""),[g,v]=O.exports.useState(n),w=_C(_=>_.currentUser.currentUser.value.uid),m=xS(bm,"QnA",r);O.exports.useEffect(()=>{s&&(t.includes(s)||e.includes(s))&&a(!0)},[]);const f=async()=>{await wv(m,{viewCount:g})},y=_=>{let U=!0;if(u){if(U=window.confirm("\uC218\uC815\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),!U)return}else h(e),p(t);l(!u),_.stopPropagation()},S=async _=>{window.confirm("\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&await O2(m),_.stopPropagation()},T=()=>C.createElement(wO,{onSubmit:D},C.createElement("div",{className:"editFormHeader"},C.createElement("input",{id:"title",type:"text",placeholder:"\uC81C\uBAA9",value:d,onChange:_=>p(_),required:!0}),C.createElement("select",{id:"category"},C.createElement("option",{value:""},"--Please choose an option--"),C.createElement("option",{value:"\uD53C\uB4DC\uBC31"},"\uD53C\uB4DC\uBC31"),C.createElement("option",{value:"\uB9E4\uB108\uC9C0\uC218"},"\uB9E4\uB108\uC9C0\uC218"),C.createElement("option",{value:"\uAE30\uD0C0 \uC11C\uBE44\uC2A4 \uAE30\uB2A5"},"\uAE30\uD0C0 \uC11C\uBE44\uC2A4 \uAE30\uB2A5"),C.createElement("option",{value:"\uD504\uB85C\uD544 \uC124\uC815"},"\uD504\uB85C\uD544 \uC124\uC815"),C.createElement("option",{value:"\uC625\uC18C\uCF54\uC778"},"\uC625\uC18C\uCF54\uC778"),C.createElement("option",{value:"\uC54C\uB9BC\uC124\uC815"},"\uC54C\uB9BC \uC124\uC815"),C.createElement("option",{value:"\uD3F4\uB514"},"\uD3F4\uB514"),C.createElement("option",{value:"\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871"},"\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871"),C.createElement("option",{value:"\uADF8\uB8F9"},"\uADF8\uB8F9"))),C.createElement("textarea",{id:"description",type:"text",placeholder:"\uB0B4\uC6A9",value:c,onChange:_=>{h(_.value)},required:!0}),C.createElement("input",{className:"editSubmit",type:"submit",value:"\uC218\uC815"})),D=async _=>{_.preventDefault();const{target:U}=_,B=U.querySelector("#title").value,ie=U.querySelector("#category").value?U.querySelector("#category").value:i;//! category가 blank일 때 기본 카테고리로
const pe=U.querySelector("#description").value,Ie=new Date,Oe={title:B,description:pe,category:ie,updatedAt:Ie};window.confirm("\uAE00\uC744 \uC218\uC815\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&await wv(m,Oe),l(!1)},I=()=>{a(_=>!_),o||(v(_=>_+1),f())};return C.createElement(vO,{className:`answerContainer${o?" active":""}`},C.createElement("span",{onClick:I},C.createElement("h4",null,s?TC(t,s):t),yO(w)?C.createElement("div",{className:"adminButtons"},C.createElement("button",{onClick:y,type:"button"},u?"\uCDE8\uC18C":"\uC218\uC815"),C.createElement("button",{onClick:S,type:"button"},"\uC0AD\uC81C")):null,C.createElement("img",{src:"img/arrow.svg",alt:o?"\uB2EB\uD78C \uC9C8\uBB38":"\uC5F4\uB9B0 \uC9C8\uBB38"})),u&&C.createElement(C.Fragment,null,T()),o&&!u?C.createElement(C.Fragment,null,gO(e,s)):null)},TC=(t,e)=>{const n=t.split(e);return C.createElement(C.Fragment,null,n.map((r,i)=>C.createElement("span",{key:i},i!=0&&C.createElement("b",null,e),r)))},gO=(t,e)=>{let n=t.split("\\n"),r=[];for(let i of n)i&&r.push(i);return C.createElement("p",null,r.map((i,s)=>e&&i.includes(e)?C.createElement("span",{key:s},TC(i,e)):C.createElement("span",{key:s},i)))},yO=t=>{const e="SOT3U2CfXxXlIJxUYkh79gD7WYj1";return console.log(t),t===e},vO=Ae.div`
  position: relative;
  width: 709px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;

  span {
    display: flex;

    h4 {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      height: 46px;
      margin: 0;
      padding: 0px 16px;
      font-size: 16px;
      font-weight: 500;
      cursor: default;

      b {
        margin: 0 2px;
        font-weight: 700;
        text-decoration: underline;
        color: coral;
      }
    }
    img {
      position: absolute;
      width: 20px;
      right: 18px;
      top: 17px;
    }
    .adminButtons {
      position: absolute;
      right: 60px;
      top: 4px;
      button {
        width: 60px;
        height: 30px;
        margin: 4px;
        background-color: white;
        color: black;
        border: 1px solid black;
        border-radius: 5px;
      }
    }
  }

  &.active span {
    h4 {
      height: 47px;
      padding-top: 1px;
      border: 1px solid #e6e6e6;
      border-width: 0 0 1px 0;
      font-weight: 700;
    }
    img {
      rotate: 180deg;
      top: 16px;
    }
  }

  p {
    padding: 0px 30px 0 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    b {
      font-weight: 700;
      text-decoration: underline;
      color: coral;
    }
  }

  span {
    display: block;
  }
`,wO=Ae.form`
  font-size: 14px;
  font-weight: 500;
  .editFormHeader {
    display: flex;
    width: 100%;
    height: 50px;
    font-weight: 600;
    #title {
      flex: 3;
      box-sizing: border-box;
      height: 30px;
      padding-left: 10px;
      margin: 7px 5px 10px 7px;
      border: 1px solid #e6e6e6;
    }
    #category {
      flex: 1;
      box-sizing: border-box;
      height: 30px;
      padding-left: 10px;
      margin: 7px 5px 10px 7px;
      border: 1px solid #e6e6e6;
    }
  }

  #description {
    box-sizing: border-box;
    margin: 0px 7px 7px 7px;
    padding-left: 10px;
    width: 693px;
    height: 200px;
    border: 1px solid #e6e6e6;
    line-height: 1.6;
  }

  .editSubmit {
    width: 60px;
    height: 30px;
    margin: 0 7px 10px 640px;
    border-radius: 5px;
    background-color: black;
    color: white;
  }
`,EO=({cate:t,search:e})=>{const[n,r]=O.exports.useState([]),i=mm(bm,"QnA"),s=async()=>{let o="";t==="FAQ"?o=sf(i,A2("viewCount","desc"),D2(4)):o=sf(i,T2("category","==",t)),BS(o,a=>{const u=a.docs.map(l=>({id:l.id,...l.data()}));r(u)})};return O.exports.useEffect(()=>{s()},[t]),C.createElement(SO,null,!!n&&n.filter(o=>o.title.includes(e)||o.description.includes(e)).map(o=>C.createElement(mO,{ansArr:o,key:o.id,answerId:o.id,cate:t,search:e})))},SO=Ae.div`
  h3 {
    width: 709px;
    font-size: 20px;
    font-weight: 700;
  }
`,CO=({cate:t,elem:e})=>C.createElement(_O,{className:e===t?" active":"",value:e,type:"button"},e),_O=Ae.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  height: 42px;
  margin-right: 14px;
  margin-bottom: 10px;
  padding: 10px 16px;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 600;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  transition: color 0.2s, background-color 0.2s, border 0.2s;

  &.active {
    background: #000000;
    border: 1px solid #000000;
    color: white;
  }
`,IO=({cate:t,setCate:e})=>{const[n,r]=O.exports.useState([]),i=mm(bm,"QnA"),s=async()=>{const a=sf(i);BS(a,u=>{let l=["FAQ"];u.docs.map(c=>{let h=c.data().category;l.includes(h)||l.push(h)}),r(l)})};O.exports.useEffect(()=>{s()},[]);const o=a=>{a.target.tagName=="BUTTON"&&e(a.target.value)};return C.createElement(kO,{onClick:o},n.map((a,u)=>C.createElement(CO,{elem:a,cate:t,key:u})))},kO=Ae.div`
  display: flex;
  flex-wrap: wrap;
  width: 709px;
  margin-top: 41px;
  margin-bottom: 4px;
`,TO=({search:t,setSearch:e})=>{const n=i=>{e(i.target.value)},r=i=>{i.preventDefault(),console.log("clear"),e("")};return C.createElement(xO,{search:t},C.createElement("form",null,C.createElement("input",{placeholder:"\uAC80\uC0C9",onChange:n,value:t}),C.createElement("button",{className:"clearButton",type:"button",onClick:r,disabled:!t},"\uCD08\uAE30\uD654")))},xO=Ae.div`
  margin-bottom: 70px;

  form {
    position: relative;
    width: 709px;

    input {
      box-sizing: border-box;
      width: 709px;
      height: 42px;
      padding: 0 12px;
      border-radius: 10px;
      border: 1px solid #929292;
      font-size: 16px;
      font-weight: 300;
    }
    .clearButton {
      position: absolute;
      width: 90px;
      height: 100%;
      padding: 0;
      right: 0px;
      font-size: 16px;
      font-weight: 500;
      color: white;
      border: none;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
      background-color: black;
      z-index: 1;
    }
    .clearButton:disabled {
      background-color: #929292;
      cursor: default;
    }
  }
`;function AO({User:t}){const[e,n]=O.exports.useState(!1),r=()=>{n(a=>!a)},i=async a=>{a.preventDefault();const{target:u}=a,l=u.querySelector("#titleBox").value,c=u.querySelector("#qnaCategory").value,h=u.querySelector("#description").value,d=new Date,p={title:l,description:h,category:c,viewCount:0,createdAt:d,updatedAt:d},g=AS(OP);await $2(mm(g,"QnA"),p),r()},s=({state:a,toggleBtnHandler:u})=>C.createElement(C.Fragment,null,a?null:C.createElement($O,{type:"button",value:"\uAE00\uC4F0\uAE30",onClick:u})),o=()=>C.createElement(DO,{onSubmit:i},C.createElement(Ah,{htmlFor:"titleBox"},"\uC81C\uBAA9"),C.createElement(RO,{id:"titleBox",type:"text"}),C.createElement(Ah,{htmlFor:"qnaCategory"},"\uCE74\uD14C\uACE0\uB9AC"),C.createElement(PO,{id:"qnaCategory"},C.createElement("option",{value:""},"--Please choose an option--"),C.createElement("option",{value:"\uD53C\uB4DC\uBC31"},"\uD53C\uB4DC\uBC31"),C.createElement("option",{value:"\uB9E4\uB108\uC9C0\uC218"},"\uB9E4\uB108\uC9C0\uC218"),C.createElement("option",{value:"\uAE30\uD0C0_\uC11C\uBE44\uC2A4_\uAE30\uB2A5"},"\uAE30\uD0C0 \uC11C\uBE44\uC2A4 \uAE30\uB2A5"),C.createElement("option",{value:"\uD504\uB85C\uD544_\uC124\uC815"},"\uD504\uB85C\uD544 \uC124\uC815"),C.createElement("option",{value:"\uC625\uC18C\uCF54\uC778"},"\uC625\uC18C\uCF54\uC778"),C.createElement("option",{value:"\uC54C\uB9BC\uC124\uC815"},"\uC54C\uB9BC \uC124\uC815"),C.createElement("option",{value:"\uD3F4\uB514"},"\uD3F4\uB514"),C.createElement("option",{value:"\uC815\uCE58\uC131\uD5A5\uBCC4_\uB2E4\uC12F_\uBD80\uC871"},"\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871"),C.createElement("option",{value:"\uADF8\uB8F9"},"\uADF8\uB8F9")),C.createElement(Ah,{htmlFor:"description"},"\uBCF8\uBB38"),C.createElement(OO,{id:"description",maxLength:1500}),C.createElement("input",{type:"submit",value:"\uC791\uC131\uD558\uAE30",className:"submit"}));if(t==="SOT3U2CfXxXlIJxUYkh79gD7WYj1")return C.createElement(NO,{editBtn:e},e?C.createElement(o,null):C.createElement(s,{state:e,toggleBtnHandler:r}));C.Fragment}const NO=Ae.div`
  display: flex;
  width: ${t=>t.editBtn?100:10}%;
  position: relative;
  top: ${t=>t.editBtn?0:-30}px;
  margin-left: ${t=>t.editBtn?0:"auto"};
  .submit {
    width: 80px;
    height: 37px;
    margin: 0 7px 10px 640px;
    border-radius: 7px;
    background-color: black;
    color: white;
  }
`,DO=Ae.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-size: 16px;
`,RO=Ae.input`
  outline: none;
  border-radius: 5px;
  border: 2px solid #e6e6e6;
  height: 30px;

  font-weight: bold;

  &:focus {
    border-color: tomato;
  }
`,PO=Ae.select`
  outline: none;
  border-radius: 5px;
  border: 2px solid #e6e6e6;
  height: 30px;

  font-weight: bold;
  option {
    font-weight: bold;
  }
  &:focus {
    border-color: tomato;
  }
`,OO=Ae.textarea`
  resize: none;
  height: 200px;

  outline: none;
  border: 2px solid #e6e6e6;
  border-radius: 12px;

  margin-bottom: 15px;
  padding: 8px;

  font-weight: bold;

  &:focus {
    border-color: tomato;
  }
`,$O=Ae.input`
  width: 100px;
  height: 35px;

  background-color: white;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  outline: none;
  font-weight: bold;
  transition: 0.5s ease-in-out;

  cursor: pointer;
  &:hover {
    background-color: #464646;
    color: #fff;
  }
`,Ah=Ae.label`
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  margin: 5px 0;
`,bO=({currentUser:t})=>{const[e,n]=O.exports.useState("\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871"),[r,i]=O.exports.useState("");return C.createElement(LO,null,C.createElement("div",{className:"container"},C.createElement("h2",null,"oxopolitics FAQ"),C.createElement(AO,{User:t}),C.createElement(IO,{cate:e,setCate:n}),C.createElement(TO,{search:r,setSearch:i}),C.createElement(EO,{cate:e,setCate:n,search:r})))},LO=Ae.div`
  box-sizing: border-box;
  width: 1125px;
  padding: 0 50px;
  margin: 20px auto;
  display: block;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
  }
  .container {
    width: fit-content;
    margin: 0 auto;
  }
`,MO=Ae.span`
  display: flex;
  align-items: center;
  width: 161px;

  img {
    width: 100%;
    border-radius: 0;
  }
  .menubar {
    /* width: 100%; */
    cursor: pointer;
  }
  .oxoLogo {
    margin-left: 20px;
    width: 123px;
    height: initial;
    max-width: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;function FO(){return C.createElement(MO,null,C.createElement("img",{className:"menubar",src:"img/menu.svg"}),C.createElement("img",{className:"oxoLogo",width:"123px",src:"img/oxopolitics_letter_logo.png"}))}const UO="#e6e6e6";function BO({color:t=UO,width:e=24,height:n=24}){return React.createElement("svg",{width:e,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8741 7.67896C21.5857 8.24828 22 9.11022 22 10.0216V19.5784C22 21.2353 20.6569 22.5784 19 22.5784H13V15.5797C13 15.0274 12.5523 14.5797 12 14.5797C11.4477 14.5797 11 15.0274 11 15.5797V22.5784H5C3.34315 22.5784 2 21.2353 2 19.5784V10.0216C2 9.11022 2.41427 8.24828 3.12592 7.67896L10.1259 2.07896C11.2216 1.20244 12.7784 1.20244 13.8741 2.07896L20.8741 7.67896Z",fill:t}))}const VO="black";function jO({color:t=VO,width:e=22,height:n=22}){return React.createElement("svg",{width:e,height:n,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 0C2.68629 0 0 2.68629 0 6V14.2404L3.86169 10.3791C4.21304 10.0278 4.78261 10.0277 5.13412 10.3788L7.49267 12.7349L13.4276 6.8H10.0651C9.56802 6.8 9.16507 6.39706 9.16507 5.9C9.16507 5.40294 9.56802 5 10.0651 5H15.6002C16.0973 5 16.5002 5.40294 16.5002 5.9V11.4352C16.5002 11.9322 16.0973 12.3352 15.6002 12.3352C15.1032 12.3352 14.7002 11.9322 14.7002 11.4352V8.07296L8.12939 14.6438C7.77805 14.9951 7.20846 14.9953 6.85693 14.6441L4.49835 12.288L0.114312 16.6715C0.659179 19.4244 3.0872 21.5 6 21.5H15.5C18.8137 21.5 21.5 18.8137 21.5 15.5V6C21.5 2.68629 18.8137 0 15.5 0H6Z",fill:t}))}const zO="black";function HO({color:t=zO,width:e=23,height:n=22}){return React.createElement("svg",{width:e,height:n,viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.5 11C22.5 4.63558 17.8644 0 11.5 0C5.13558 0 0.5 4.63558 0.5 11C0.5 17.3644 5.13558 22 11.5 22C13.5945 22 15.5018 21.4979 17.1183 20.5974L20.7936 21.7395C21.726 22.0293 22.5293 21.2259 22.2396 20.2935L21.0974 16.6182C21.9979 15.0018 22.5 13.0945 22.5 11ZM14.8496 9.94813C15.1885 10.0661 15.4884 10.275 15.7164 10.552C15.9444 10.8291 16.0919 11.1635 16.1425 11.5187C16.1932 11.8739 16.1451 12.2362 16.0036 12.5659C15.8621 12.8956 15.6326 13.18 15.3402 13.388C15.0478 13.596 14.7038 13.7195 14.346 13.745C13.9881 13.7706 13.6301 13.6971 13.3111 13.5328C12.9922 13.3684 12.7246 13.1195 12.5377 12.8132C12.3508 12.5069 12.2518 12.1551 12.2515 11.7963C12.2349 11.4007 12.354 11.0113 12.589 10.6928L14.1532 8.25H15.8889L14.8496 9.94813ZM10.3043 10.552C10.0763 10.275 9.77639 10.0661 9.43754 9.94813L10.4768 8.25H8.74114L7.17692 10.6928C6.94185 11.0113 6.82277 11.4007 6.83943 11.7963C6.83972 12.1551 6.93872 12.5069 7.12561 12.8132C7.3125 13.1195 7.58006 13.3684 7.899 13.5328C8.21794 13.6971 8.57596 13.7706 8.93385 13.745C9.29174 13.7195 9.6357 13.596 9.92808 13.388C10.2205 13.18 10.45 12.8956 10.5915 12.5659C10.733 12.2362 10.7811 11.8739 10.7304 11.5187C10.6797 11.1635 10.5323 10.8291 10.3043 10.552Z",fill:t}))}function WO({active:t,Change:e}){const n=r=>{const i=r.target.closest("li");if(!i)return;const s=i.querySelector("path"),o=i.classList.contains("active");if(e("test"),!o){console.log(`${i.classList.item(0)}`),document.querySelector(".headerNav");const a=document.querySelector(".active");a&&(a.classList.remove("active"),a.querySelector("path").setAttribute("fill","#e6e6e6")),i.classList.add("active"),s.setAttribute("fill","#ffffff")}};return O.exports.useEffect(()=>{if(!t)return;const r=document.querySelector(`.${t}`),i=r.querySelector("path");r.classList.add("active"),i.setAttribute("fill","#ffffff")},[]),C.createElement(KO,null,C.createElement("ul",{onClick:n},C.createElement("li",{className:"IconHome"},C.createElement(BO,{color:"#e6e6e6"}),C.createElement("span",null,"\uD648")),C.createElement("li",{className:"IconPoldi"},C.createElement(jO,{color:"#e6e6e6"})," ",C.createElement("span",null,"\uD3F4\uB514")),C.createElement("li",{className:"IconChat"},C.createElement(HO,{color:"#e6e6e6"})," ",C.createElement("span",null,"\uD1A1"))))}const KO=Ae.nav`
  display: flex;
  width: 320px;
  justify-content: space-around;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
  }
  li {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    width: 58px;
    height: 40px;
    list-style: none;
    font-weight: 600;
    font-size: 14px;
    transition: 0.4s;
    cursor: pointer;
    svg {
      border-radius: 0;
      margin-right: 10px;
    }
    span {
      display: none;
    }
    &:hover {
      width: 90px;
      /* height: 40px; */
      background-color: rgb(245, 245, 245);
      transition: all 0.4s ease 0s;
    }
    &:hover span {
      display: inline-block;
      color: #2f2f2f;
    }
  }
  .active {
    width: 90px;
    height: 40px;
    background-color: #2f2f2f;
    transition: 0.4s;
  }
  .active span {
    display: inline-block;
    color: #ffffff;
  }
`;var Br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Br||(Br={}));var Lv=function(t){return t},Mv="beforeunload",qO="popstate";function GO(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var I=r.location,_=I.pathname,U=I.search,B=I.hash,ie=i.state||{};return[ie.idx,Lv({pathname:_,search:U,hash:B,state:ie.usr||null,key:ie.key||"default"})]}var o=null;function a(){if(o)p.call(o),o=null;else{var I=Br.Pop,_=s(),U=_[0],B=_[1];if(p.length){if(U!=null){var ie=c-U;ie&&(o={action:I,location:B,retry:function(){T(ie*-1)}},T(ie))}}else f(I)}}r.addEventListener(qO,a);var u=Br.Pop,l=s(),c=l[0],h=l[1],d=Uv(),p=Uv();c==null&&(c=0,i.replaceState(dl({},i.state,{idx:c}),""));function g(I){return typeof I=="string"?I:uf(I)}function v(I,_){return _===void 0&&(_=null),Lv(dl({pathname:h.pathname,hash:"",search:""},typeof I=="string"?pi(I):I,{state:_,key:QO()}))}function w(I,_){return[{usr:I.state,key:I.key,idx:_},g(I)]}function m(I,_,U){return!p.length||(p.call({action:I,location:_,retry:U}),!1)}function f(I){u=I;var _=s();c=_[0],h=_[1],d.call({action:u,location:h})}function y(I,_){var U=Br.Push,B=v(I,_);function ie(){y(I,_)}if(m(U,B,ie)){var pe=w(B,c+1),Ie=pe[0],Oe=pe[1];try{i.pushState(Ie,"",Oe)}catch{r.location.assign(Oe)}f(U)}}function S(I,_){var U=Br.Replace,B=v(I,_);function ie(){S(I,_)}if(m(U,B,ie)){var pe=w(B,c),Ie=pe[0],Oe=pe[1];i.replaceState(Ie,"",Oe),f(U)}}function T(I){i.go(I)}var D={get action(){return u},get location(){return h},createHref:g,push:y,replace:S,go:T,back:function(){T(-1)},forward:function(){T(1)},listen:function(_){return d.push(_)},block:function(_){var U=p.push(_);return p.length===1&&r.addEventListener(Mv,Fv),function(){U(),p.length||r.removeEventListener(Mv,Fv)}}};return D}function Fv(t){t.preventDefault(),t.returnValue=""}function Uv(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function QO(){return Math.random().toString(36).substr(2,8)}function uf(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function pi(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Um=O.exports.createContext(null),Bm=O.exports.createContext(null),Rc=O.exports.createContext({outlet:null,matches:[]});function wn(t,e){if(!t)throw new Error(e)}function XO(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?pi(e):e,i=NC(r.pathname||"/",n);if(i==null)return null;let s=xC(t);YO(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=o$(s[a],i);return o}function xC(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||wn(!1),o.relativePath=o.relativePath.slice(r.length));let a=mr([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&wn(!1),xC(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:i$(a,i.index),routesMeta:u})}),e}function YO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:s$(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JO=/^:\w+$/,ZO=3,e$=2,t$=1,n$=10,r$=-2,Bv=t=>t==="*";function i$(t,e){let n=t.split("/"),r=n.length;return n.some(Bv)&&(r+=r$),e&&(r+=e$),n.filter(i=>!Bv(i)).reduce((i,s)=>i+(JO.test(s)?ZO:s===""?t$:n$),r)}function s$(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function o$(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=a$({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:mr([i,c.pathname]),pathnameBase:DC(mr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=mr([i,c.pathnameBase]))}return s}function a$(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=u$(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=l$(a[h]||""),l},{}),pathname:s,pathnameBase:o,pattern:t}}function u$(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function l$(t,e){try{return decodeURIComponent(t)}catch{return t}}function c$(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?pi(t):t;return{pathname:n?n.startsWith("/")?n:h$(n,e):e,search:f$(r),hash:p$(i)}}function h$(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function AC(t,e,n){let r=typeof t=="string"?pi(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),a-=1;r.pathname=u.join("/")}s=a>=0?e[a]:"/"}let o=c$(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function d$(t){return t===""||t.pathname===""?"/":typeof t=="string"?pi(t).pathname:t.pathname}function NC(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),DC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),f$=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,p$=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function m$(t){Ca()||wn(!1);let{basename:e,navigator:n}=O.exports.useContext(Um),{hash:r,pathname:i,search:s}=RC(t),o=i;if(e!=="/"){let a=d$(t),u=a!=null&&a.endsWith("/");o=i==="/"?e+(u?"/":""):mr([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Ca(){return O.exports.useContext(Bm)!=null}function Pc(){return Ca()||wn(!1),O.exports.useContext(Bm).location}function g$(){Ca()||wn(!1);let{basename:t,navigator:e}=O.exports.useContext(Um),{matches:n}=O.exports.useContext(Rc),{pathname:r}=Pc(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=O.exports.useRef(!1);return O.exports.useEffect(()=>{s.current=!0}),O.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=AC(a,JSON.parse(i),r);t!=="/"&&(l.pathname=mr([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state)},[t,e,i,r])}function RC(t){let{matches:e}=O.exports.useContext(Rc),{pathname:n}=Pc(),r=JSON.stringify(e.map(i=>i.pathnameBase));return O.exports.useMemo(()=>AC(t,JSON.parse(r),n),[t,r,n])}function y$(t,e){Ca()||wn(!1);let{matches:n}=O.exports.useContext(Rc),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Pc(),a;if(e){var u;let d=typeof e=="string"?pi(e):e;s==="/"||((u=d.pathname)==null?void 0:u.startsWith(s))||wn(!1),a=d}else a=o;let l=a.pathname||"/",c=s==="/"?l:l.slice(s.length)||"/",h=XO(t,{pathname:c});return v$(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:mr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:mr([s,d.pathnameBase])})),n)}function v$(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>O.exports.createElement(Rc.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function lf(t){wn(!1)}function w$(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Br.Pop,navigator:s,static:o=!1}=t;Ca()&&wn(!1);let a=DC(e),u=O.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=pi(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,g=O.exports.useMemo(()=>{let v=NC(l,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:p}},[a,l,c,h,d,p]);return g==null?null:O.exports.createElement(Um.Provider,{value:u},O.exports.createElement(Bm.Provider,{children:n,value:{location:g,navigationType:i}}))}function E$(t){let{children:e,location:n}=t;return y$(cf(e),n)}function cf(t){let e=[];return O.exports.Children.forEach(t,n=>{if(!O.exports.isValidElement(n))return;if(n.type===O.exports.Fragment){e.push.apply(e,cf(n.props.children));return}n.type!==lf&&wn(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=cf(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hf(){return hf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hf.apply(this,arguments)}function S$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const C$=["onClick","reloadDocument","replace","state","target","to"];function _$(t){let{basename:e,children:n,window:r}=t,i=O.exports.useRef();i.current==null&&(i.current=GO({window:r}));let s=i.current,[o,a]=O.exports.useState({action:s.action,location:s.location});return O.exports.useLayoutEffect(()=>s.listen(a),[s]),O.exports.createElement(w$,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function I$(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const k$=O.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:u}=e,l=S$(e,C$),c=m$(u),h=T$(u,{replace:s,state:o,target:a});function d(p){r&&r(p),!p.defaultPrevented&&!i&&h(p)}return O.exports.createElement("a",hf({},l,{href:c,onClick:d,ref:n,target:a}))});function T$(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=g$(),o=Pc(),a=RC(t);return O.exports.useCallback(u=>{if(u.button===0&&(!n||n==="_self")&&!I$(u)){u.preventDefault();let l=!!r||uf(o)===uf(a);s(t,{replace:l,state:i})}},[o,s,a,r,i,n,t])}function sn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Cr(t){return!!t&&!!t[Se]}function Vn(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===b$}(t)||Array.isArray(t)||!!t[qv]||!!t.constructor[qv]||Vm(t)||jm(t))}function ai(t,e,n){n===void 0&&(n=!1),Cs(t)===0?(n?Object.keys:Hi)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Cs(t){var e=t[Se];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Vm(t)?2:jm(t)?3:0}function zi(t,e){return Cs(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function x$(t,e){return Cs(t)===2?t.get(e):t[e]}function PC(t,e,n){var r=Cs(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function OC(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Vm(t){return O$&&t instanceof Map}function jm(t){return $$&&t instanceof Set}function Pr(t){return t.o||t.t}function zm(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=bC(t);delete e[Se];for(var n=Hi(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Hm(t,e){return e===void 0&&(e=!1),Wm(t)||Cr(t)||!Vn(t)||(Cs(t)>1&&(t.set=t.add=t.clear=t.delete=A$),Object.freeze(t),e&&ai(t,function(n,r){return Hm(r,!0)},!0)),t}function A$(){sn(2)}function Wm(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function yn(t){var e=mf[t];return e||sn(18,t),e}function N$(t,e){mf[t]||(mf[t]=e)}function df(){return Bo}function Nh(t,e){e&&(yn("Patches"),t.u=[],t.s=[],t.v=e)}function fl(t){ff(t),t.p.forEach(D$),t.p=null}function ff(t){t===Bo&&(Bo=t.l)}function Vv(t){return Bo={p:[],l:Bo,h:t,m:!0,_:0}}function D$(t){var e=t[Se];e.i===0||e.i===1?e.j():e.O=!0}function Dh(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||yn("ES5").S(e,t,r),r?(n[Se].P&&(fl(e),sn(4)),Vn(t)&&(t=pl(e,t),e.l||ml(e,t)),e.u&&yn("Patches").M(n[Se].t,t,e.u,e.s)):t=pl(e,n,[]),fl(e),e.u&&e.v(e.u,e.s),t!==$C?t:void 0}function pl(t,e,n){if(Wm(e))return e;var r=e[Se];if(!r)return ai(e,function(s,o){return jv(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return ml(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=zm(r.k):r.o;ai(r.i===3?new Set(i):i,function(s,o){return jv(t,r,i,s,o,n)}),ml(t,i,!1),n&&t.u&&yn("Patches").R(r,n,t.u,t.s)}return r.o}function jv(t,e,n,r,i,s){if(Cr(i)){var o=pl(t,i,s&&e&&e.i!==3&&!zi(e.D,r)?s.concat(r):void 0);if(PC(n,r,o),!Cr(o))return;t.m=!1}if(Vn(i)&&!Wm(i)){if(!t.h.F&&t._<1)return;pl(t,i),e&&e.A.l||ml(t,i)}}function ml(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&Hm(e,n)}function Rh(t,e){var n=t[Se];return(n?Pr(n):t)[e]}function zv(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function er(t){t.P||(t.P=!0,t.l&&er(t.l))}function Ph(t){t.o||(t.o=zm(t.t))}function pf(t,e,n){var r=Vm(e)?yn("MapSet").N(e,n):jm(e)?yn("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:df(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,l=Vo;o&&(u=[a],l=zs);var c=Proxy.revocable(u,l),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):yn("ES5").J(e,n);return(n?n.A:df()).p.push(r),r}function R$(t){return Cr(t)||sn(22,t),function e(n){if(!Vn(n))return n;var r,i=n[Se],s=Cs(n);if(i){if(!i.P&&(i.i<4||!yn("ES5").K(i)))return i.t;i.I=!0,r=Hv(n,s),i.I=!1}else r=Hv(n,s);return ai(r,function(o,a){i&&x$(i.t,o)===a||PC(r,o,e(a))}),s===3?new Set(r):r}(t)}function Hv(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return zm(t)}function P$(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[Se];return Vo.get(u,s)},set:function(u){var l=this[Se];Vo.set(l,s,u)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Se];if(!a.P)switch(a.i){case 5:r(a)&&er(a);break;case 4:n(a)&&er(a)}}}function n(s){for(var o=s.t,a=s.k,u=Hi(a),l=u.length-1;l>=0;l--){var c=u[l];if(c!==Se){var h=o[c];if(h===void 0&&!zi(o,c))return!0;var d=a[c],p=d&&d[Se];if(p?p.t!==h:!OC(d,h))return!0}}var g=!!o[Se];return u.length!==Hi(o).length+(g?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};N$("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var g=bC(h);delete g[Se];for(var v=Hi(g),w=0;w<v.length;w++){var m=v[w];g[m]=t(m,c||!!g[m].enumerable)}return Object.create(Object.getPrototypeOf(h),g)}(a,s),l={i:a?5:4,A:o?o.A:df(),P:!1,I:!1,D:{},l:o,t:s,k:u,o:null,O:!1,C:!1};return Object.defineProperty(u,Se,{value:l,writable:!0}),u},S:function(s,o,a){a?Cr(o)&&o[Se].A===s&&e(s.p):(s.u&&function u(l){if(l&&typeof l=="object"){var c=l[Se];if(c){var h=c.t,d=c.k,p=c.D,g=c.i;if(g===4)ai(d,function(y){y!==Se&&(h[y]!==void 0||zi(h,y)?p[y]||u(d[y]):(p[y]=!0,er(c)))}),ai(h,function(y){d[y]!==void 0||zi(d,y)||(p[y]=!1,er(c))});else if(g===5){if(r(c)&&(er(c),p.length=!0),d.length<h.length)for(var v=d.length;v<h.length;v++)p[v]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&u(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var Wv,Bo,Km=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",O$=typeof Map<"u",$$=typeof Set<"u",Kv=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",$C=Km?Symbol.for("immer-nothing"):((Wv={})["immer-nothing"]=!0,Wv),qv=Km?Symbol.for("immer-draftable"):"__$immer_draftable",Se=Km?Symbol.for("immer-state"):"__$immer_state",b$=""+Object.prototype.constructor,Hi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,bC=Object.getOwnPropertyDescriptors||function(t){var e={};return Hi(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},mf={},Vo={get:function(t,e){if(e===Se)return t;var n=Pr(t);if(!zi(n,e))return function(i,s,o){var a,u=zv(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Vn(r)?r:r===Rh(t.t,e)?(Ph(t),t.o[e]=pf(t.A.h,r,t)):r},has:function(t,e){return e in Pr(t)},ownKeys:function(t){return Reflect.ownKeys(Pr(t))},set:function(t,e,n){var r=zv(Pr(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Rh(Pr(t),e),s=i==null?void 0:i[Se];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(OC(n,i)&&(n!==void 0||zi(t.t,e)))return!0;Ph(t),er(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return Rh(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,Ph(t),er(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Pr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){sn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){sn(12)}},zs={};ai(Vo,function(t,e){zs[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),zs.deleteProperty=function(t,e){return zs.set.call(this,t,e,void 0)},zs.set=function(t,e,n){return Vo.set.call(this,t[0],e,n,t[0])};var L$=function(){function t(n){var r=this;this.g=Kv,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(v){var w=this;v===void 0&&(v=a);for(var m=arguments.length,f=Array(m>1?m-1:0),y=1;y<m;y++)f[y-1]=arguments[y];return u.produce(v,function(S){var T;return(T=s).call.apply(T,[w,S].concat(f))})}}var l;if(typeof s!="function"&&sn(6),o!==void 0&&typeof o!="function"&&sn(7),Vn(i)){var c=Vv(r),h=pf(r,i,void 0),d=!0;try{l=s(h),d=!1}finally{d?fl(c):ff(c)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(v){return Nh(c,o),Dh(v,c)},function(v){throw fl(c),v}):(Nh(c,o),Dh(l,c))}if(!i||typeof i!="object"){if((l=s(i))===void 0&&(l=i),l===$C&&(l=void 0),r.F&&Hm(l,!0),o){var p=[],g=[];yn("Patches").M(i,l,p,g),o(p,g)}return l}sn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(l){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(l,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,u=r.produce(i,s,function(l,c){o=l,a=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(l){return[l,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Vn(n)||sn(8),Cr(n)&&(n=R$(n));var r=Vv(this),i=pf(this,n,void 0);return i[Se].C=!0,ff(r),i},e.finishDraft=function(n,r){var i=n&&n[Se],s=i.A;return Nh(s,r),Dh(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!Kv&&sn(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=yn("Patches").$;return Cr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Bt=new L$,LC=Bt.produce;Bt.produceWithPatches.bind(Bt);Bt.setAutoFreeze.bind(Bt);Bt.setUseProxies.bind(Bt);Bt.applyPatches.bind(Bt);Bt.createDraft.bind(Bt);Bt.finishDraft.bind(Bt);function M$(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qv(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gv(Object(n),!0).forEach(function(r){M$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ht(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Xv=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Oh=function(){return Math.random().toString(36).substring(7).split("").join(".")},gl={INIT:"@@redux/INIT"+Oh(),REPLACE:"@@redux/REPLACE"+Oh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Oh()}};function F$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function MC(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ht(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ht(1));return n(MC)(t,e)}if(typeof t!="function")throw new Error(ht(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(ht(3));return s}function h(v){if(typeof v!="function")throw new Error(ht(4));if(u)throw new Error(ht(5));var w=!0;return l(),a.push(v),function(){if(!!w){if(u)throw new Error(ht(6));w=!1,l();var f=a.indexOf(v);a.splice(f,1),o=null}}}function d(v){if(!F$(v))throw new Error(ht(7));if(typeof v.type>"u")throw new Error(ht(8));if(u)throw new Error(ht(9));try{u=!0,s=i(s,v)}finally{u=!1}for(var w=o=a,m=0;m<w.length;m++){var f=w[m];f()}return v}function p(v){if(typeof v!="function")throw new Error(ht(10));i=v,d({type:gl.REPLACE})}function g(){var v,w=h;return v={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(ht(11));function y(){f.next&&f.next(c())}y();var S=w(y);return{unsubscribe:S}}},v[Xv]=function(){return this},v}return d({type:gl.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[Xv]=g,r}function U$(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:gl.INIT});if(typeof r>"u")throw new Error(ht(12));if(typeof n(void 0,{type:gl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ht(13))})}function B$(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{U$(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],g=n[p],v=u[p],w=g(v,l);if(typeof w>"u")throw l&&l.type,new Error(ht(14));h[p]=w,c=c||w!==v}return c=c||s.length!==Object.keys(u).length,c?h:u}}function yl(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function V$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(ht(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=yl.apply(void 0,a)(i.dispatch),Qv(Qv({},i),{},{dispatch:s})}}}function FC(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var UC=FC();UC.withExtraArgument=FC;const Yv=UC;var j$=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var vl=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},z$=Object.defineProperty,Jv=Object.getOwnPropertySymbols,H$=Object.prototype.hasOwnProperty,W$=Object.prototype.propertyIsEnumerable,Zv=function(t,e,n){return e in t?z$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},jo=function(t,e){for(var n in e||(e={}))H$.call(e,n)&&Zv(t,n,e[n]);if(Jv)for(var r=0,i=Jv(e);r<i.length;r++){var n=i[r];W$.call(e,n)&&Zv(t,n,e[n])}return t},K$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?yl:yl.apply(null,arguments)};function q$(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var G$=function(t){j$(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,vl([void 0],n[0].concat(this)))):new(e.bind.apply(e,vl([void 0],n.concat(this))))},e}(Array);function gf(t){return Vn(t)?LC(t,function(){}):t}function Q$(t){return typeof t=="boolean"}function X$(){return function(e){return Y$(e)}}function Y$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new G$;return n&&(Q$(n)?r.push(Yv):r.push(Yv.withExtraArgument(n.extraArgument))),r}var J$=!0;function Z$(t){var e=X$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,u=a===void 0?!0:a,l=n.preloadedState,c=l===void 0?void 0:l,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(q$(i))p=B$(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=o;typeof g=="function"&&(g=g(e));var v=V$.apply(void 0,g),w=yl;u&&(w=K$(jo({trace:!J$},typeof u=="object"&&u)));var m=[v];Array.isArray(d)?m=vl([v],d):typeof d=="function"&&(m=d(m));var f=w.apply(void 0,m);return MC(p,c,f)}function zo(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return jo(jo({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function BC(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function eb(t){return typeof t=="function"}function tb(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?BC(e):[e,n,r],s=i[0],o=i[1],a=i[2],u;if(eb(t))u=function(){return gf(t())};else{var l=gf(t);u=function(){return l}}function c(h,d){h===void 0&&(h=u());var p=vl([s[d.type]],o.filter(function(g){var v=g.matcher;return v(d)}).map(function(g){var v=g.reducer;return v}));return p.filter(function(g){return!!g}).length===0&&(p=[a]),p.reduce(function(g,v){if(v)if(Cr(g)){var w=g,m=v(w,d);return typeof m>"u"?g:m}else{if(Vn(g))return LC(g,function(f){return v(f,d)});var m=v(g,d);if(typeof m>"u"){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return g},h)}return c.getInitialState=u,c}function nb(t,e){return t+"/"+e}function rb(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:gf(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=nb(e,c),p,g;"reducer"in h?(p=h.reducer,g=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=g?zo(d,g):zo(d)});function u(){var c=typeof t.extraReducers=="function"?BC(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],g=p===void 0?[]:p,v=c[2],w=v===void 0?void 0:v,m=jo(jo({},d),o);return tb(n,m,g,w)}var l;return{name:e,reducer:function(c,h){return l||(l=u()),l(c,h)},actions:a,caseReducers:s,getInitialState:function(){return l||(l=u()),l.getInitialState()}}}var qm="listenerMiddleware";zo(qm+"/add");zo(qm+"/removeAll");zo(qm+"/remove");P$();const ib={currentUser:{value:{email:"",uid:""}}},VC=rb({name:"currentUser",initialState:ib,reducers:{setCurrentUser:(t,e)=>{t.currentUser.value=e.payload}}}),{setCurrentUser:jC}=VC.actions,sb=VC.reducer;function ob(){const[t,e]=O.exports.useState(!1),n=wc();Fm();const r=i=>{i.persist(),n.signOut(),e(s=>!s)};return O.exports.useEffect(()=>{Pm(n,i=>{e(!!i)})},[]),C.createElement(ub,null,C.createElement(ab,{src:"img/IconSearch.svg",alt:"search"}),t?C.createElement(e0,{to:"/",onClick:r},"\uB85C\uADF8\uC544\uC6C3"):C.createElement(e0,{to:"/login"},"\uB85C\uADF8\uC778"))}const ab=Ae.img`
  display: inline-block;
  border-radius: 0;
`,ub=Ae.div`
  display: flex;
  align-items: center;
  width: 161px;

  img {
    width: 16px;
    margin-right: 25px;
  }
  img:hover {
    cursor: pointer;
  }
`,e0=Ae(k$)`
  width: 120px;
  height: 45px;

  background-color: rgb(47, 47, 47);
  border: none;
  border-radius: 10px;
  outline: none;

  color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  line-height: 45px;
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  &:hover,
  :active {
    color: black;
    background-color: #e6e6e6;
    transition: 0.7s;
    text-decoration: none;
  }
`;function lb(t){const[e,n]=O.exports.useState("IconHome");return C.createElement(C.Fragment,null,C.createElement(cb,{className:t.className},C.createElement(FO,null),C.createElement(WO,{active:e,Change:n}),C.createElement(ob,null)))}const cb=Ae.header`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
  box-sizing: border-box;
  padding: 0 50px;
  border-bottom: 1px solid #e6e6e6;
`;function hb(){const t=wc(),e=Fm();O.exports.useEffect(()=>{Pm(t,n=>{n&&e(jC({email:`${n.email}`,uid:`${n.uid}`}))})},[])}function db(){hb();const t=_C(e=>e.currentUser.currentUser.value.uid);return console.log(t),C.createElement("div",null,C.createElement(lb,null),C.createElement(bO,{currentUser:t}))}function fb(){const[t,e]=O.exports.useState(""),[n,r]=O.exports.useState(""),[i,s]=O.exports.useState(!1),[o,a]=O.exports.useState(""),u=wc(),l=Fm();O.exports.useEffect(()=>{Pm(u,p=>{p?(l(jC({email:`${p.email}`,uid:`${p.uid}`})),window.location.href!=="http://localhost:5173/"&&(window.location.href="/")):console.log("aa")})},[]);const c=p=>{const{target:{name:g,value:v}}=p;g==="email"?e(v):g==="password"&&r(v)},h=async p=>{p.preventDefault();try{let g;i?g=await ER(u,t,n):g=await SR(u,t,n)}catch(g){a(g.message)}},d=()=>s(p=>!p);return C.createElement(C.Fragment,null,C.createElement(pb,{onSubmit:h},C.createElement("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:t,onChange:c,className:"authInput"}),C.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:n,onChange:c,className:"authInput"}),C.createElement("input",{type:"submit",value:i?"Create Account":"Log In",className:"authInput authSubmit"}),o&&C.createElement("span",{className:"authError"},o)),C.createElement(mb,{onClick:d},i?"Sign in":"Create Account"))}const pb=Ae.form`
  display: flex;
  flex-direction: column;

  margin: 10px 0;
  input {
    width: 200px;
    height: 25px;
    margin: 10px 0;
    padding: 0;
    box-sizing: border-box;
  }
`,mb=Ae.div`
  margin-bottom: 10px;
  padding: 5px;
  border: 3px solid #e6e6e6;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #464646;
    color: #e6e6e6;
  }
`,gb=()=>{const t=async e=>{const{target:{name:n}}=e;let r;n==="google"&&(r=new _n),await WR($P,r)};return C.createElement(yb,null,C.createElement(fb,null),C.createElement("div",null,C.createElement("button",{onClick:t,name:"google"},"Continue with Google.")))},yb=Ae.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  border: 2px solid #e6e6e6;
`;function vb(){return C.createElement(_$,null,C.createElement(E$,null,C.createElement(lf,{path:"/",element:C.createElement(db,null)}),C.createElement(lf,{path:"/login",element:C.createElement(gb,null)})))}const wb=Z$({reducer:{currentUser:sb}});$h.createRoot(document.getElementById("root")).render(C.createElement(dO,{store:wb},C.createElement(vb,null)));

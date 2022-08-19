(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function QC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var O={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),XC=Symbol.for("react.portal"),YC=Symbol.for("react.fragment"),JC=Symbol.for("react.strict_mode"),ZC=Symbol.for("react.profiler"),e_=Symbol.for("react.provider"),t_=Symbol.for("react.context"),n_=Symbol.for("react.forward_ref"),r_=Symbol.for("react.suspense"),i_=Symbol.for("react.memo"),s_=Symbol.for("react.lazy"),Zm=Symbol.iterator;function o_(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var o0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a0=Object.assign,u0={};function fs(t,e,n){this.props=t,this.context=e,this.refs=u0,this.updater=n||o0}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=fs.prototype;function Cf(t,e,n){this.props=t,this.context=e,this.refs=u0,this.updater=n||o0}var _f=Cf.prototype=new l0;_f.constructor=Cf;a0(_f,fs.prototype);_f.isPureReactComponent=!0;var eg=Array.isArray,c0=Object.prototype.hasOwnProperty,If={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function d0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c0.call(e,r)&&!h0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:If.current}}function a_(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function u_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tg=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u_(""+t.key):e.toString(36)}function Za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case XC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bc(o,0):r,eg(i)?(n="",t!=null&&(n=t.replace(tg,"$&/")+"/"),Za(i,e,n,"",function(l){return l})):i!=null&&(kf(i)&&(i=a_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(tg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",eg(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Bc(s,a);o+=Za(s,e,n,u,i)}else if(u=o_(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Bc(s,a++),o+=Za(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var r=[],i=0;return Za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function l_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},eu={transition:null},c_={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:eu,ReactCurrentOwner:If};ee.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=fs;ee.Fragment=YC;ee.Profiler=ZC;ee.PureComponent=Cf;ee.StrictMode=JC;ee.Suspense=r_;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=a0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=If.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)c0.call(e,u)&&!h0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:t_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:e_,_context:t},t.Consumer=t};ee.createElement=d0;ee.createFactory=function(t){var e=d0.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:n_,render:t}};ee.isValidElement=kf;ee.lazy=function(t){return{$$typeof:s_,_payload:{_status:-1,_result:t},_init:l_}};ee.memo=function(t,e){return{$$typeof:i_,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=eu.transition;eu.transition={};try{t()}finally{eu.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return kt.current.useCallback(t,e)};ee.useContext=function(t){return kt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return kt.current.useEffect(t,e)};ee.useId=function(){return kt.current.useId()};ee.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return kt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ee.useRef=function(t){return kt.current.useRef(t)};ee.useState=function(t){return kt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return kt.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(O);const qo=QC(O.exports);var Uh={},Tf={exports:{}},jt={},f0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var H=N.length;N.push(z);e:for(;0<H;){var me=H-1>>>1,P=N[me];if(0<i(P,z))N[me]=z,N[H]=P,H=me;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],H=N.pop();if(H!==z){N[0]=H;e:for(var me=0,P=N.length,$=P>>>1;me<$;){var b=2*(me+1)-1,W=N[b],E=b+1,te=N[E];if(0>i(W,H))E<P&&0>i(te,W)?(N[me]=te,N[E]=H,me=E):(N[me]=W,N[b]=H,me=b);else if(E<P&&0>i(te,H))N[me]=te,N[E]=H,me=E;else break e}}return z}function i(N,z){var H=N.sortIndex-z.sortIndex;return H!==0?H:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var z=n(l);z!==null;){if(z.callback===null)r(l);else if(z.startTime<=N)r(l),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(l)}}function S(N){if(v=!1,y(N),!g)if(n(u)!==null)g=!0,Sn(k);else{var z=n(l);z!==null&&vt(S,z.startTime-N)}}function k(N,z){g=!1,v&&(v=!1,m(C),C=-1),p=!0;var H=d;try{for(y(z),h=n(u);h!==null&&(!(h.expirationTime>z)||N&&!ie());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var P=me(h.expirationTime<=z);z=t.unstable_now(),typeof P=="function"?h.callback=P:h===n(u)&&r(u),y(z)}else r(u);h=n(u)}if(h!==null)var $=!0;else{var b=n(l);b!==null&&vt(S,b.startTime-z),$=!1}return $}finally{h=null,d=H,p=!1}}var D=!1,_=null,C=-1,U=5,B=-1;function ie(){return!(t.unstable_now()-B<U)}function pe(){if(_!==null){var N=t.unstable_now();B=N;var z=!0;try{z=_(!0,N)}finally{z?Ie():(D=!1,_=null)}}else D=!1}var Ie;if(typeof f=="function")Ie=function(){f(pe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,He=$e.port2;$e.port1.onmessage=pe,Ie=function(){He.postMessage(null)}}else Ie=function(){w(pe,0)};function Sn(N){_=N,D||(D=!0,Ie())}function vt(N,z){C=w(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Sn(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var H=d;d=z;try{return N()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=d;d=N;try{return z()}finally{d=H}},t.unstable_scheduleCallback=function(N,z,H){var me=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?me+H:me):H=me,N){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=H+P,N={id:c++,callback:z,priorityLevel:N,startTime:H,expirationTime:P,sortIndex:-1},H>me?(N.sortIndex=H,e(l,N),n(u)===null&&N===n(l)&&(v?(m(C),C=-1):v=!0,vt(S,H-me))):(N.sortIndex=P,e(u,N),g||p||(g=!0,Sn(k))),N},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(N){var z=d;return function(){var H=d;d=z;try{return N.apply(this,arguments)}finally{d=H}}}})(p0);(function(t){t.exports=p0})(f0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=O.exports,Ut=f0.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,uo={};function li(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(uo[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bh=Object.prototype.hasOwnProperty,h_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ng={},rg={};function d_(t){return Bh.call(rg,t)?!0:Bh.call(ng,t)?!1:h_.test(t)?rg[t]=!0:(ng[t]=!0,!1)}function f_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p_(t,e,n,r){if(e===null||typeof e>"u"||f_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var xf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xf,Af);ot[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xf,Af);ot[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xf,Af);ot[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p_(e,n,i,r)&&(n=null),r||i===null?d_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Vh=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),zh=Symbol.for("react.suspense_list"),Pf=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),ig=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=ig&&t[ig]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Vc;function Ls(t){if(Vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+t}var jc=!1;function zc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function m_(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case Vh:return"Profiler";case Df:return"StrictMode";case jh:return"Suspense";case zh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case y0:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pf:return e=t.displayName||null,e!==null?e:Hh(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return Hh(t(e))}catch{}}return null}function g_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hh(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y_(t){var e=E0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=y_(t))}function S0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function sg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C0(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Kh(t,e){C0(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qh(t,e.type,n):e.hasOwnProperty("defaultValue")&&qh(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qh(t,e,n){(e!=="number"||Eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ag(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ms(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function _0(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,k0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v_=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(t){v_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ks[e]=Ks[t]})});function T0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ks.hasOwnProperty(t)&&Ks[t]?(""+e).trim():e+"px"}function x0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=T0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var w_=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xh(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=null;function Of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zh=null,$i=null,bi=null;function lg(t){if(t=Xo(t)){if(typeof Zh!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Tl(e),Zh(t.stateNode,t.type,e))}}function A0(t){$i?bi?bi.push(t):bi=[t]:$i=t}function N0(){if($i){var t=$i,e=bi;if(bi=$i=null,lg(t),e)for(t=0;t<e.length;t++)lg(e[t])}}function D0(t,e){return t(e)}function R0(){}var Hc=!1;function P0(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return D0(t,e,n)}finally{Hc=!1,($i!==null||bi!==null)&&(R0(),N0())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var ed=!1;if(On)try{var As={};Object.defineProperty(As,"passive",{get:function(){ed=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{ed=!1}function E_(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var qs=!1,Su=null,Cu=!1,td=null,S_={onError:function(t){qs=!0,Su=t}};function C_(t,e,n,r,i,s,o,a,u){qs=!1,Su=null,E_.apply(S_,arguments)}function __(t,e,n,r,i,s,o,a,u){if(C_.apply(this,arguments),qs){if(qs){var l=Su;qs=!1,Su=null}else throw Error(x(198));Cu||(Cu=!0,td=l)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cg(t){if(ci(t)!==t)throw Error(x(188))}function I_(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cg(i),t;if(s===r)return cg(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function $0(t){return t=I_(t),t!==null?b0(t):null}function b0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b0(t);if(e!==null)return e;t=t.sibling}return null}var L0=Ut.unstable_scheduleCallback,hg=Ut.unstable_cancelCallback,k_=Ut.unstable_shouldYield,T_=Ut.unstable_requestPaint,Oe=Ut.unstable_now,x_=Ut.unstable_getCurrentPriorityLevel,$f=Ut.unstable_ImmediatePriority,M0=Ut.unstable_UserBlockingPriority,_u=Ut.unstable_NormalPriority,A_=Ut.unstable_LowPriority,F0=Ut.unstable_IdlePriority,Cl=null,pn=null;function N_(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:P_,D_=Math.log,R_=Math.LN2;function P_(t){return t>>>=0,t===0?32:31-(D_(t)/R_|0)|0}var Ra=64,Pa=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fs(a):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function O_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=O_(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U0(){var t=Ra;return Ra<<=1,(Ra&4194240)===0&&(Ra=64),t}function Wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function b_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function B0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var V0,Lf,j0,z0,H0,rd=!1,Oa=[],ir=null,sr=null,or=null,ho=new Map,fo=new Map,Xn=[],L_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xo(e),e!==null&&Lf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function M_(t,e,n,r,i){switch(e){case"focusin":return ir=Ns(ir,t,e,n,r,i),!0;case"dragenter":return sr=Ns(sr,t,e,n,r,i),!0;case"mouseover":return or=Ns(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ho.set(s,Ns(ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fo.set(s,Ns(fo.get(s)||null,t,e,n,r,i)),!0}return!1}function W0(t){var e=$r(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=O0(n),e!==null){t.blockedOn=e,H0(t.priority,function(){j0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jh=r,n.target.dispatchEvent(r),Jh=null}else return e=Xo(n),e!==null&&Lf(e),t.blockedOn=n,!1;e.shift()}return!0}function fg(t,e,n){tu(t)&&n.delete(e)}function F_(){rd=!1,ir!==null&&tu(ir)&&(ir=null),sr!==null&&tu(sr)&&(sr=null),or!==null&&tu(or)&&(or=null),ho.forEach(fg),fo.forEach(fg)}function Ds(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,F_)))}function po(t){function e(i){return Ds(i,t)}if(0<Oa.length){Ds(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&Ds(ir,t),sr!==null&&Ds(sr,t),or!==null&&Ds(or,t),ho.forEach(e),fo.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&Xn.shift()}var Li=zn.ReactCurrentBatchConfig,ku=!0;function U_(t,e,n,r){var i=he,s=Li.transition;Li.transition=null;try{he=1,Mf(t,e,n,r)}finally{he=i,Li.transition=s}}function B_(t,e,n,r){var i=he,s=Li.transition;Li.transition=null;try{he=4,Mf(t,e,n,r)}finally{he=i,Li.transition=s}}function Mf(t,e,n,r){if(ku){var i=id(t,e,n,r);if(i===null)th(t,e,r,Tu,n),dg(t,r);else if(M_(i,t,e,n,r))r.stopPropagation();else if(dg(t,r),e&4&&-1<L_.indexOf(t)){for(;i!==null;){var s=Xo(i);if(s!==null&&V0(s),s=id(t,e,n,r),s===null&&th(t,e,r,Tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else th(t,e,r,null,n)}}var Tu=null;function id(t,e,n,r){if(Tu=null,t=Of(r),t=$r(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tu=t,null}function K0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x_()){case $f:return 1;case M0:return 4;case _u:case A_:return 16;case F0:return 536870912;default:return 16}default:return 16}}var nr=null,Ff=null,nu=null;function q0(){if(nu)return nu;var t,e=Ff,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nu=i.slice(t,1<r?1-r:void 0)}function ru(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function pg(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:pg,this.isPropagationStopped=pg,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=zt(ps),Qo=Ae({},ps,{view:0,detail:0}),V_=zt(Qo),Kc,qc,Rs,_l=Ae({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(Kc=t.screenX-Rs.screenX,qc=t.screenY-Rs.screenY):qc=Kc=0,Rs=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),mg=zt(_l),j_=Ae({},_l,{dataTransfer:0}),z_=zt(j_),H_=Ae({},Qo,{relatedTarget:0}),Gc=zt(H_),W_=Ae({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),K_=zt(W_),q_=Ae({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G_=zt(q_),Q_=Ae({},ps,{data:0}),gg=zt(Q_),X_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J_[t])?!!e[t]:!1}function Bf(){return Z_}var eI=Ae({},Qo,{key:function(t){if(t.key){var e=X_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ru(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?ru(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ru(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tI=zt(eI),nI=Ae({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=zt(nI),rI=Ae({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),iI=zt(rI),sI=Ae({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),oI=zt(sI),aI=Ae({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uI=zt(aI),lI=[9,13,27,32],Vf=On&&"CompositionEvent"in window,Gs=null;On&&"documentMode"in document&&(Gs=document.documentMode);var cI=On&&"TextEvent"in window&&!Gs,G0=On&&(!Vf||Gs&&8<Gs&&11>=Gs),vg=String.fromCharCode(32),wg=!1;function Q0(t,e){switch(t){case"keyup":return lI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function hI(t,e){switch(t){case"compositionend":return X0(e);case"keypress":return e.which!==32?null:(wg=!0,vg);case"textInput":return t=e.data,t===vg&&wg?null:t;default:return null}}function dI(t,e){if(Ei)return t==="compositionend"||!Vf&&Q0(t,e)?(t=q0(),nu=Ff=nr=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G0&&e.locale!=="ko"?null:e.data;default:return null}}var fI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fI[t.type]:e==="textarea"}function Y0(t,e,n,r){A0(r),e=xu(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qs=null,mo=null;function pI(t){u1(t,0)}function Il(t){var e=_i(t);if(S0(e))return t}function mI(t,e){if(t==="change")return e}var J0=!1;if(On){var Qc;if(On){var Xc="oninput"in document;if(!Xc){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),Xc=typeof Sg.oninput=="function"}Qc=Xc}else Qc=!1;J0=Qc&&(!document.documentMode||9<document.documentMode)}function Cg(){Qs&&(Qs.detachEvent("onpropertychange",Z0),mo=Qs=null)}function Z0(t){if(t.propertyName==="value"&&Il(mo)){var e=[];Y0(e,mo,t,Of(t)),P0(pI,e)}}function gI(t,e,n){t==="focusin"?(Cg(),Qs=e,mo=n,Qs.attachEvent("onpropertychange",Z0)):t==="focusout"&&Cg()}function yI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(mo)}function vI(t,e){if(t==="click")return Il(e)}function wI(t,e){if(t==="input"||t==="change")return Il(e)}function EI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:EI;function go(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bh.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ig(t,e){var n=_g(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_g(n)}}function e1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t1(){for(var t=window,e=Eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eu(t.document)}return e}function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SI(t){var e=t1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e1(n.ownerDocument.documentElement,n)){if(r!==null&&jf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ig(n,s);var o=Ig(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CI=On&&"documentMode"in document&&11>=document.documentMode,Si=null,sd=null,Xs=null,od=!1;function kg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||Si==null||Si!==Eu(r)||(r=Si,"selectionStart"in r&&jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&go(Xs,r)||(Xs=r,r=xu(sd,"onSelect"),0<r.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Yc={},n1={};On&&(n1=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function kl(t){if(Yc[t])return Yc[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n1)return Yc[t]=e[n];return t}var r1=kl("animationend"),i1=kl("animationiteration"),s1=kl("animationstart"),o1=kl("transitionend"),a1=new Map,Tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){a1.set(t,e),li(e,[t])}for(var Jc=0;Jc<Tg.length;Jc++){var Zc=Tg[Jc],_I=Zc.toLowerCase(),II=Zc[0].toUpperCase()+Zc.slice(1);Ir(_I,"on"+II)}Ir(r1,"onAnimationEnd");Ir(i1,"onAnimationIteration");Ir(s1,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(o1,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function xg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,__(r,e,void 0,t),t.currentTarget=null}function u1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;xg(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;xg(i,a,l),s=u}}}if(Cu)throw t=td,Cu=!1,td=null,t}function ve(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var r=t+"__bubble";n.has(r)||(l1(e,t,2,!1),n.add(r))}function eh(t,e,n){var r=0;e&&(r|=4),l1(n,t,r,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[La]){t[La]=!0,g0.forEach(function(n){n!=="selectionchange"&&(kI.has(n)||eh(n,!1,t),eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[La]||(e[La]=!0,eh("selectionchange",!1,e))}}function l1(t,e,n,r){switch(K0(e)){case 1:var i=U_;break;case 4:i=B_;break;default:i=Mf}n=i.bind(null,e,n,t),i=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function th(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}P0(function(){var l=s,c=Of(n),h=[];e:{var d=a1.get(t);if(d!==void 0){var p=Uf,g=t;switch(t){case"keypress":if(ru(n)===0)break e;case"keydown":case"keyup":p=tI;break;case"focusin":g="focus",p=Gc;break;case"focusout":g="blur",p=Gc;break;case"beforeblur":case"afterblur":p=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iI;break;case r1:case i1:case s1:p=K_;break;case o1:p=oI;break;case"scroll":p=V_;break;case"wheel":p=uI;break;case"copy":case"cut":case"paste":p=G_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yg}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,y;f!==null;){y=f;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=co(f,m),S!=null&&v.push(vo(f,S,y)))),w)break;f=f.return}0<v.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Jh&&(g=n.relatedTarget||n.fromElement)&&($r(g)||g[$n]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=l,g=g?$r(g):null,g!==null&&(w=ci(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=l),p!==g)){if(v=mg,S="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=yg,S="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:_i(p),y=g==null?d:_i(g),d=new v(S,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,S=null,$r(c)===l&&(v=new v(m,f+"enter",g,n,c),v.target=y,v.relatedTarget=w,S=v),w=S,p&&g)t:{for(v=p,m=g,f=0,y=v;y;y=gi(y))f++;for(y=0,S=m;S;S=gi(S))y++;for(;0<f-y;)v=gi(v),f--;for(;0<y-f;)m=gi(m),y--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=gi(v),m=gi(m)}v=null}else v=null;p!==null&&Ag(h,d,p,v,!1),g!==null&&w!==null&&Ag(h,w,g,v,!0)}}e:{if(d=l?_i(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var k=mI;else if(Eg(d))if(J0)k=wI;else{k=yI;var D=gI}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=vI);if(k&&(k=k(t,l))){Y0(h,k,n,c);break e}D&&D(t,d,l),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&qh(d,"number",d.value)}switch(D=l?_i(l):window,t){case"focusin":(Eg(D)||D.contentEditable==="true")&&(Si=D,sd=l,Xs=null);break;case"focusout":Xs=sd=Si=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,kg(h,n,c);break;case"selectionchange":if(CI)break;case"keydown":case"keyup":kg(h,n,c)}var _;if(Vf)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ei?Q0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(G0&&n.locale!=="ko"&&(Ei||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ei&&(_=q0()):(nr=c,Ff="value"in nr?nr.value:nr.textContent,Ei=!0)),D=xu(l,C),0<D.length&&(C=new gg(C,t,null,n,c),h.push({event:C,listeners:D}),_?C.data=_:(_=X0(n),_!==null&&(C.data=_)))),(_=cI?hI(t,n):dI(t,n))&&(l=xu(l,"onBeforeInput"),0<l.length&&(c=new gg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=_))}u1(h,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=co(t,n),s!=null&&r.unshift(vo(t,s,i)),s=co(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ag(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=co(n,s),u!=null&&o.unshift(vo(n,u,a))):i||(u=co(n,s),u!=null&&o.push(vo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TI=/\r\n?/g,xI=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(TI,`
`).replace(xI,"")}function Ma(t,e,n){if(e=Ng(e),Ng(t)!==e&&n)throw Error(x(425))}function Au(){}var ad=null,ud=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,AI=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,NI=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(t){return Dg.resolve(null).then(t).catch(DI)}:cd;function DI(t){setTimeout(function(){throw t})}function nh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);po(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),fn="__reactFiber$"+ms,wo="__reactProps$"+ms,$n="__reactContainer$"+ms,hd="__reactEvents$"+ms,RI="__reactListeners$"+ms,PI="__reactHandles$"+ms;function $r(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rg(t);t!==null;){if(n=t[fn])return n;t=Rg(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[fn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Tl(t){return t[wo]||null}var dd=[],Ii=-1;function kr(t){return{current:t}}function Ee(t){0>Ii||(t.current=dd[Ii],dd[Ii]=null,Ii--)}function ge(t,e){Ii++,dd[Ii]=t.current,t.current=e}var vr={},gt=kr(vr),Pt=kr(!1),Gr=vr;function qi(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function Nu(){Ee(Pt),Ee(gt)}function Pg(t,e,n){if(gt.current!==vr)throw Error(x(168));ge(gt,e),ge(Pt,n)}function c1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,g_(t)||"Unknown",i));return Ae({},n,r)}function Du(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Gr=gt.current,ge(gt,t),ge(Pt,Pt.current),!0}function Og(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=c1(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Pt),Ee(gt),ge(gt,t)):Ee(Pt),ge(Pt,n)}var _n=null,xl=!1,rh=!1;function h1(t){_n===null?_n=[t]:_n.push(t)}function OI(t){xl=!0,h1(t)}function Tr(){if(!rh&&_n!==null){rh=!0;var t=0,e=he;try{var n=_n;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,xl=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),L0($f,Tr),i}finally{he=e,rh=!1}}return null}var ki=[],Ti=0,Ru=null,Pu=0,Wt=[],Kt=0,Qr=null,kn=1,Tn="";function Dr(t,e){ki[Ti++]=Pu,ki[Ti++]=Ru,Ru=t,Pu=e}function d1(t,e,n){Wt[Kt++]=kn,Wt[Kt++]=Tn,Wt[Kt++]=Qr,Qr=t;var r=kn;t=Tn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-an(e)+i|n<<i|r,Tn=s+t}else kn=1<<s|n<<i|r,Tn=t}function zf(t){t.return!==null&&(Dr(t,1),d1(t,1,0))}function Hf(t){for(;t===Ru;)Ru=ki[--Ti],ki[Ti]=null,Pu=ki[--Ti],ki[Ti]=null;for(;t===Qr;)Qr=Wt[--Kt],Wt[Kt]=null,Tn=Wt[--Kt],Wt[Kt]=null,kn=Wt[--Kt],Wt[Kt]=null}var Ft=null,Mt=null,Ce=!1,sn=null;function f1(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:kn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Mt=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pd(t){if(Ce){var e=Mt;if(e){var n=e;if(!$g(t,e)){if(fd(t))throw Error(x(418));e=ar(n.nextSibling);var r=Ft;e&&$g(t,e)?f1(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Ft=t)}}else{if(fd(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ce=!1,Ft=t}}}function bg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function Fa(t){if(t!==Ft)return!1;if(!Ce)return bg(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=Mt)){if(fd(t))throw p1(),Error(x(418));for(;e;)f1(t,e),e=ar(e.nextSibling)}if(bg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ft?ar(t.stateNode.nextSibling):null;return!0}function p1(){for(var t=Mt;t;)t=ar(t.nextSibling)}function Gi(){Mt=Ft=null,Ce=!1}function Wf(t){sn===null?sn=[t]:sn.push(t)}var $I=zn.ReactCurrentBatchConfig;function nn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ou=kr(null),$u=null,xi=null,Kf=null;function qf(){Kf=xi=$u=null}function Gf(t){var e=Ou.current;Ee(Ou),t._currentValue=e}function md(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){$u=t,Kf=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Rt=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(Kf!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if($u===null)throw Error(x(308));xi=t,$u.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var br=null;function Qf(t){br===null?br=[t]:br.push(t)}function m1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qf(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(re&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qf(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function iu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}function Lg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bu(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Ae({},h,d);break e;case 2:Qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function Mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var y1=new m0.Component().refs;function gd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=cr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(un(e,t,i,r),iu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=cr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(un(e,t,i,r),iu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=cr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&(un(e,t,r,n),iu(e,t,r))}};function Fg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(i,s):!0}function v1(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Ot(e)?Gr:gt.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ug(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=y1,Xf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Ot(e)?Gr:gt.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Al.enqueueReplaceState(i,i.state,null),bu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===y1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bg(t){var e=t._init;return e(t._payload)}function w1(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=hr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,S){return f===null||f.tag!==6?(f=ch(y,m.mode,S),f.return=m,f):(f=i(f,y),f.return=m,f)}function u(m,f,y,S){var k=y.type;return k===wi?c(m,f,y.props.children,S,y.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gn&&Bg(k)===f.type)?(S=i(f,y.props),S.ref=Ps(m,f,y),S.return=m,S):(S=cu(y.type,y.key,y.props,null,m.mode,S),S.ref=Ps(m,f,y),S.return=m,S)}function l(m,f,y,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=hh(y,m.mode,S),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,S,k){return f===null||f.tag!==7?(f=zr(y,m.mode,S,k),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ch(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Aa:return y=cu(f.type,f.key,f.props,null,m.mode,y),y.ref=Ps(m,null,f),y.return=m,y;case vi:return f=hh(f,m.mode,y),f.return=m,f;case Gn:var S=f._init;return h(m,S(f._payload),y)}if(Ms(f)||xs(f))return f=zr(f,m.mode,y,null),f.return=m,f;Ua(m,f)}return null}function d(m,f,y,S){var k=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(m,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return y.key===k?u(m,f,y,S):null;case vi:return y.key===k?l(m,f,y,S):null;case Gn:return k=y._init,d(m,f,k(y._payload),S)}if(Ms(y)||xs(y))return k!==null?null:c(m,f,y,S,null);Ua(m,y)}return null}function p(m,f,y,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,a(f,m,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Aa:return m=m.get(S.key===null?y:S.key)||null,u(f,m,S,k);case vi:return m=m.get(S.key===null?y:S.key)||null,l(f,m,S,k);case Gn:var D=S._init;return p(m,f,y,D(S._payload),k)}if(Ms(S)||xs(S))return m=m.get(y)||null,c(f,m,S,k,null);Ua(f,S)}return null}function g(m,f,y,S){for(var k=null,D=null,_=f,C=f=0,U=null;_!==null&&C<y.length;C++){_.index>C?(U=_,_=null):U=_.sibling;var B=d(m,_,y[C],S);if(B===null){_===null&&(_=U);break}t&&_&&B.alternate===null&&e(m,_),f=s(B,f,C),D===null?k=B:D.sibling=B,D=B,_=U}if(C===y.length)return n(m,_),Ce&&Dr(m,C),k;if(_===null){for(;C<y.length;C++)_=h(m,y[C],S),_!==null&&(f=s(_,f,C),D===null?k=_:D.sibling=_,D=_);return Ce&&Dr(m,C),k}for(_=r(m,_);C<y.length;C++)U=p(_,m,C,y[C],S),U!==null&&(t&&U.alternate!==null&&_.delete(U.key===null?C:U.key),f=s(U,f,C),D===null?k=U:D.sibling=U,D=U);return t&&_.forEach(function(ie){return e(m,ie)}),Ce&&Dr(m,C),k}function v(m,f,y,S){var k=xs(y);if(typeof k!="function")throw Error(x(150));if(y=k.call(y),y==null)throw Error(x(151));for(var D=k=null,_=f,C=f=0,U=null,B=y.next();_!==null&&!B.done;C++,B=y.next()){_.index>C?(U=_,_=null):U=_.sibling;var ie=d(m,_,B.value,S);if(ie===null){_===null&&(_=U);break}t&&_&&ie.alternate===null&&e(m,_),f=s(ie,f,C),D===null?k=ie:D.sibling=ie,D=ie,_=U}if(B.done)return n(m,_),Ce&&Dr(m,C),k;if(_===null){for(;!B.done;C++,B=y.next())B=h(m,B.value,S),B!==null&&(f=s(B,f,C),D===null?k=B:D.sibling=B,D=B);return Ce&&Dr(m,C),k}for(_=r(m,_);!B.done;C++,B=y.next())B=p(_,m,C,B.value,S),B!==null&&(t&&B.alternate!==null&&_.delete(B.key===null?C:B.key),f=s(B,f,C),D===null?k=B:D.sibling=B,D=B);return t&&_.forEach(function(pe){return e(m,pe)}),Ce&&Dr(m,C),k}function w(m,f,y,S){if(typeof y=="object"&&y!==null&&y.type===wi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:e:{for(var k=y.key,D=f;D!==null;){if(D.key===k){if(k=y.type,k===wi){if(D.tag===7){n(m,D.sibling),f=i(D,y.props.children),f.return=m,m=f;break e}}else if(D.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gn&&Bg(k)===D.type){n(m,D.sibling),f=i(D,y.props),f.ref=Ps(m,D,y),f.return=m,m=f;break e}n(m,D);break}else e(m,D);D=D.sibling}y.type===wi?(f=zr(y.props.children,m.mode,S,y.key),f.return=m,m=f):(S=cu(y.type,y.key,y.props,null,m.mode,S),S.ref=Ps(m,f,y),S.return=m,m=S)}return o(m);case vi:e:{for(D=y.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=hh(y,m.mode,S),f.return=m,m=f}return o(m);case Gn:return D=y._init,w(m,f,D(y._payload),S)}if(Ms(y))return g(m,f,y,S);if(xs(y))return v(m,f,y,S);Ua(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=ch(y,m.mode,S),f.return=m,m=f),o(m)):n(m,f)}return w}var Qi=w1(!0),E1=w1(!1),Yo={},mn=kr(Yo),Eo=kr(Yo),So=kr(Yo);function Lr(t){if(t===Yo)throw Error(x(174));return t}function Yf(t,e){switch(ge(So,e),ge(Eo,t),ge(mn,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qh(e,t)}Ee(mn),ge(mn,e)}function Xi(){Ee(mn),Ee(Eo),Ee(So)}function S1(t){Lr(So.current);var e=Lr(mn.current),n=Qh(e,t.type);e!==n&&(ge(Eo,t),ge(mn,n))}function Jf(t){Eo.current===t&&(Ee(mn),Ee(Eo))}var ke=kr(0);function Lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ih=[];function Zf(){for(var t=0;t<ih.length;t++)ih[t]._workInProgressVersionPrimary=null;ih.length=0}var su=zn.ReactCurrentDispatcher,sh=zn.ReactCurrentBatchConfig,Xr=0,xe=null,Ue=null,Ke=null,Mu=!1,Ys=!1,Co=0,bI=0;function ct(){throw Error(x(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function tp(t,e,n,r,i,s){if(Xr=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,su.current=t===null||t.memoizedState===null?UI:BI,t=n(r,i),Ys){s=0;do{if(Ys=!1,Co=0,25<=s)throw Error(x(301));s+=1,Ke=Ue=null,e.updateQueue=null,su.current=VI,t=n(r,i)}while(Ys)}if(su.current=Fu,e=Ue!==null&&Ue.next!==null,Xr=0,Ke=Ue=xe=null,Mu=!1,e)throw Error(x(300));return t}function np(){var t=Co!==0;return Co=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?xe.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Yt(){if(Ue===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ke===null?xe.memoizedState:Ke.next;if(e!==null)Ke=e,Ue=t;else{if(t===null)throw Error(x(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?xe.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function _o(t,e){return typeof e=="function"?e(t):e}function oh(t){var e=Yt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Xr&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,xe.lanes|=c,Yr|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,cn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ah(t){var e=Yt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function C1(){}function _1(t,e){var n=xe,r=Yt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,rp(T1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Io(9,k1.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(x(349));(Xr&30)!==0||I1(n,e,i)}return i}function I1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k1(t,e,n,r){e.value=n,e.getSnapshot=r,x1(e)&&A1(t)}function T1(t,e,n){return n(function(){x1(e)&&A1(t)})}function x1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function A1(t){var e=bn(t,1);e!==null&&un(e,t,1,-1)}function Vg(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=FI.bind(null,xe,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N1(){return Yt().memoizedState}function ou(t,e,n,r){var i=dn();xe.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function Nl(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&ep(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function jg(t,e){return ou(8390656,8,t,e)}function rp(t,e){return Nl(2048,8,t,e)}function D1(t,e){return Nl(4,2,t,e)}function R1(t,e){return Nl(4,4,t,e)}function P1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O1(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,P1.bind(null,e,t),n)}function ip(){}function $1(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function b1(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function L1(t,e,n){return(Xr&21)===0?(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n):(cn(n,e)||(n=U0(),xe.lanes|=n,Yr|=n,t.baseState=!0),e)}function LI(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=sh.transition;sh.transition={};try{t(!1),e()}finally{he=n,sh.transition=r}}function M1(){return Yt().memoizedState}function MI(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F1(t))U1(e,n);else if(n=m1(t,e,n,r),n!==null){var i=It();un(n,t,r,i),B1(n,e,r)}}function FI(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F1(t))U1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var u=e.interleaved;u===null?(i.next=i,Qf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=m1(t,e,i,r),n!==null&&(i=It(),un(n,t,r,i),B1(n,e,r))}}function F1(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function U1(t,e){Ys=Mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}var Fu={readContext:Xt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},UI={readContext:Xt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:jg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ou(4194308,4,P1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ou(4194308,4,t,e)},useInsertionEffect:function(t,e){return ou(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MI.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:Vg,useDebugValue:ip,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=Vg(!1),e=t[0];return t=LI.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=dn();if(Ce){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),qe===null)throw Error(x(349));(Xr&30)!==0||I1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jg(T1.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,k1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=qe.identifierPrefix;if(Ce){var n=Tn,r=kn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BI={readContext:Xt,useCallback:$1,useContext:Xt,useEffect:rp,useImperativeHandle:O1,useInsertionEffect:D1,useLayoutEffect:R1,useMemo:b1,useReducer:oh,useRef:N1,useState:function(){return oh(_o)},useDebugValue:ip,useDeferredValue:function(t){var e=Yt();return L1(e,Ue.memoizedState,t)},useTransition:function(){var t=oh(_o)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:C1,useSyncExternalStore:_1,useId:M1,unstable_isNewReconciler:!1},VI={readContext:Xt,useCallback:$1,useContext:Xt,useEffect:rp,useImperativeHandle:O1,useInsertionEffect:D1,useLayoutEffect:R1,useMemo:b1,useReducer:ah,useRef:N1,useState:function(){return ah(_o)},useDebugValue:ip,useDeferredValue:function(t){var e=Yt();return Ue===null?e.memoizedState=t:L1(e,Ue.memoizedState,t)},useTransition:function(){var t=ah(_o)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:C1,useSyncExternalStore:_1,useId:M1,unstable_isNewReconciler:!1};function Yi(t,e){try{var n="",r=e;do n+=m_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jI=typeof WeakMap=="function"?WeakMap:Map;function V1(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bu||(Bu=!0,Ad=r),vd(t,e)},n}function j1(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vd(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nk.bind(null,t,e,n),e.then(t,t))}function Hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var zI=zn.ReactCurrentOwner,Rt=!1;function wt(t,e,n,r){e.child=t===null?E1(e,null,n,r):Qi(e,t.child,n,r)}function Kg(t,e,n,r,i){n=n.render;var s=e.ref;return Mi(e,i),r=tp(t,e,n,r,s,i),n=np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Ce&&n&&zf(e),e.flags|=1,wt(t,e,r,i),e.child)}function qg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z1(t,e,s,r,i)):(t=cu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function z1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(go(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Rt=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return wd(t,e,n,r,i)}function H1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ni,Lt),Lt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ni,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ni,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ni,Lt),Lt|=r;return wt(t,e,i,n),e.child}function W1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,r,i){var s=Ot(n)?Gr:gt.current;return s=qi(e,s),Mi(e,i),n=tp(t,e,n,r,s,i),r=np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Ce&&r&&zf(e),e.flags|=1,wt(t,e,n,i),e.child)}function Gg(t,e,n,r,i){if(Ot(n)){var s=!0;Du(e)}else s=!1;if(Mi(e,i),e.stateNode===null)au(t,e),v1(e,n,r),yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Xt(l):(l=Ot(n)?Gr:gt.current,l=qi(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Ug(e,o,r,l),Qn=!1;var d=e.memoizedState;o.state=d,bu(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Pt.current||Qn?(typeof c=="function"&&(gd(e,n,c,r),u=e.memoizedState),(a=Qn||Fg(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g1(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:nn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=Ot(n)?Gr:gt.current,u=qi(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Ug(e,o,r,u),Qn=!1,d=e.memoizedState,o.state=d,bu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Pt.current||Qn?(typeof p=="function"&&(gd(e,n,p,r),g=e.memoizedState),(l=Qn||Fg(e,n,l,r,d,g,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ed(t,e,n,r,s,i)}function Ed(t,e,n,r,i,s){W1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Og(e,n,!1),Ln(t,e,s);r=e.stateNode,zI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qi(e,t.child,null,s),e.child=Qi(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&Og(e,n,!0),e.child}function K1(t){var e=t.stateNode;e.pendingContext?Pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pg(t,e.context,!1),Yf(t,e.containerInfo)}function Qg(t,e,n,r,i){return Gi(),Wf(i),e.flags|=256,wt(t,e,n,r),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function q1(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(ke,i&1),t===null)return pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pl(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cd(n),e.memoizedState=Sd,t):sp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return HI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=hr(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sd,r}return s=t.child,t=s.sibling,r=hr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sp(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,r){return r!==null&&Wf(r),Qi(e,t.child,null,n),t=sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uh(Error(x(422))),Ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pl({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Qi(e,t.child,null,o),e.child.memoizedState=Cd(o),e.memoizedState=Sd,s);if((e.mode&1)===0)return Ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=uh(s,r,void 0),Ba(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),un(r,t,i,-1))}return hp(),r=uh(Error(x(421))),Ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=ar(i.nextSibling),Ft=e,Ce=!0,sn=null,t!==null&&(Wt[Kt++]=kn,Wt[Kt++]=Tn,Wt[Kt++]=Qr,kn=t.id,Tn=t.overflow,Qr=e),e=sp(e,r.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),md(t.return,e,n)}function lh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function G1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(ke,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lh(e,!0,n,null,s);break;case"together":lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function au(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WI(t,e,n){switch(e.tag){case 3:K1(e),Gi();break;case 5:S1(e);break;case 1:Ot(e.type)&&Du(e);break;case 4:Yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?q1(t,e,n):(ge(ke,ke.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return G1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,H1(t,e,n)}return Ln(t,e,n)}var Q1,_d,X1,Y1;Q1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};X1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Lr(mn.current);var s=null;switch(n){case"input":i=Wh(t,i),r=Wh(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Gh(t,i),r=Gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Au)}Xh(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(uo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(uo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ve("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};Y1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Os(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function KI(t,e,n){var r=e.pendingProps;switch(Hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Ot(e.type)&&Nu(),ht(e),null;case 3:return r=e.stateNode,Xi(),Ee(Pt),Ee(gt),Zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sn!==null&&(Rd(sn),sn=null))),_d(t,e),ht(e),null;case 5:Jf(e);var i=Lr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)X1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ht(e),null}if(t=Lr(mn.current),Fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[wo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)ve(Us[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":sg(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":ag(r,s),ve("invalid",r)}Xh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,a,t),i=["children",""+a]):uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Na(r),og(r,s,!0);break;case"textarea":Na(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[wo]=r,Q1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)ve(Us[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":sg(t,r),i=Wh(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":ag(t,r),i=Gh(t,r),ve("invalid",t);break;default:i=r}Xh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?x0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&k0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&lo(t,u):typeof u=="number"&&lo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&Nf(t,s,u,o))}switch(n){case"input":Na(t),og(t,r,!1);break;case"textarea":Na(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)Y1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Lr(So.current),Lr(mn.current),Fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:Ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return ht(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Mt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)p1(),Gi(),e.flags|=98560,s=!1;else if(s=Fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[fn]=e}else Gi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else sn!==null&&(Rd(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ke.current&1)!==0?Be===0&&(Be=3):hp())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Xi(),_d(t,e),t===null&&yo(e.stateNode.containerInfo),ht(e),null;case 10:return Gf(e.type._context),ht(e),null;case 17:return Ot(e.type)&&Nu(),ht(e),null;case 19:if(Ee(ke),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Os(s,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Lu(t),o!==null){for(e.flags|=128,Os(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>Ji&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ht(e),null}else 2*Oe()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return cp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Lt&1073741824)!==0&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function qI(t,e){switch(Hf(e),e.tag){case 1:return Ot(e.type)&&Nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),Ee(Pt),Ee(gt),Zf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return Xi(),null;case 10:return Gf(e.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var Va=!1,ft=!1,GI=typeof WeakSet=="function"?WeakSet:Set,L=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Id(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Yg=!1;function QI(t,e){if(ad=ku,t=t1(),jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ud={focusedElem:t,selectionRange:n},ku=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:nn(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(S){Re(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return g=Yg,Yg=!1,g}function Js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Id(e,n,s)}i=i.next}while(i!==r)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J1(t){var e=t.alternate;e!==null&&(t.alternate=null,J1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[wo],delete e[hd],delete e[RI],delete e[PI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z1(t){return t.tag===5||t.tag===3||t.tag===4}function Jg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Au));else if(r!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var et=null,rn=!1;function Kn(t,e,n){for(n=n.child;n!==null;)ew(t,e,n),n=n.sibling}function ew(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:ft||Ai(n,e);case 6:var r=et,i=rn;et=null,Kn(t,e,n),et=r,rn=i,et!==null&&(rn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(rn?(t=et,n=n.stateNode,t.nodeType===8?nh(t.parentNode,n):t.nodeType===1&&nh(t,n),po(t)):nh(et,n.stateNode));break;case 4:r=et,i=rn,et=n.stateNode.containerInfo,rn=!0,Kn(t,e,n),et=r,rn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Id(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!ft&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,Kn(t,e,n),ft=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GI),e.forEach(function(r){var i=ik.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,rn=!1;break e;case 3:et=a.stateNode.containerInfo,rn=!0;break e;case 4:et=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(et===null)throw Error(x(160));ew(s,o,i),et=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Re(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tw(e,t),e=e.sibling}function tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),hn(t),r&4){try{Js(3,t,t.return),Dl(3,t)}catch(v){Re(t,t.return,v)}try{Js(5,t,t.return)}catch(v){Re(t,t.return,v)}}break;case 1:tn(e,t),hn(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(tn(e,t),hn(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(v){Re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&C0(i,s),Yh(a,o);var l=Yh(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?x0(i,h):c==="dangerouslySetInnerHTML"?k0(i,h):c==="children"?lo(i,h):Nf(i,c,h,l)}switch(a){case"input":Kh(i,s);break;case"textarea":_0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Oi(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[wo]=s}catch(v){Re(t,t.return,v)}}break;case 6:if(tn(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Re(t,t.return,v)}}break;case 3:if(tn(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(v){Re(t,t.return,v)}break;case 4:tn(e,t),hn(t);break;case 13:tn(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(up=Oe())),r&4&&Zg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(l=ft)||c,tn(e,t),ft=l):tn(e,t),hn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&(t.mode&1)!==0)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,p=d.child,d.tag){case 0:case 11:case 14:case 15:Js(4,d,d.return);break;case 1:Ai(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Re(r,n,v)}}break;case 5:Ai(d,d.return);break;case 22:if(d.memoizedState!==null){ty(h);continue}}p!==null?(p.return=d,L=p):ty(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=T0("display",o))}catch(v){Re(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){Re(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tn(e,t),hn(t),r&4&&Zg(t);break;case 21:break;default:tn(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z1(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=Jg(t);xd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jg(t);Td(t,a,o);break;default:throw Error(x(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XI(t,e,n){L=t,nw(t)}function nw(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Va;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ft;a=Va;var l=ft;if(Va=o,(ft=u)&&!l)for(L=i;L!==null;)o=L,u=o.child,o.tag===22&&o.memoizedState!==null?ny(i):u!==null?(u.return=o,L=u):ny(i);for(;s!==null;)L=s,nw(s),s=s.sibling;L=i,Va=a,ft=l}ey(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,L=s):ey(t)}}function ey(t){for(;L!==null;){var e=L;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ft||Dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&po(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ft||e.flags&512&&kd(e)}catch(d){Re(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function ty(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function ny(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{kd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{kd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var YI=Math.ceil,Uu=zn.ReactCurrentDispatcher,op=zn.ReactCurrentOwner,Gt=zn.ReactCurrentBatchConfig,re=0,qe=null,Me=null,rt=0,Lt=0,Ni=kr(0),Be=0,ko=null,Yr=0,Rl=0,ap=0,Zs=null,Nt=null,up=0,Ji=1/0,Cn=null,Bu=!1,Ad=null,lr=null,ja=!1,rr=null,Vu=0,eo=0,Nd=null,uu=-1,lu=0;function It(){return(re&6)!==0?Oe():uu!==-1?uu:uu=Oe()}function cr(t){return(t.mode&1)===0?1:(re&2)!==0&&rt!==0?rt&-rt:$I.transition!==null?(lu===0&&(lu=U0()),lu):(t=he,t!==0||(t=window.event,t=t===void 0?16:K0(t.type)),t)}function un(t,e,n,r){if(50<eo)throw eo=0,Nd=null,Error(x(185));Go(t,n,r),((re&2)===0||t!==qe)&&(t===qe&&((re&2)===0&&(Rl|=n),Be===4&&Yn(t,rt)),$t(t,r),n===1&&re===0&&(e.mode&1)===0&&(Ji=Oe()+500,xl&&Tr()))}function $t(t,e){var n=t.callbackNode;$_(t,e);var r=Iu(t,t===qe?rt:0);if(r===0)n!==null&&hg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hg(n),e===1)t.tag===0?OI(ry.bind(null,t)):h1(ry.bind(null,t)),NI(function(){(re&6)===0&&Tr()}),n=null;else{switch(B0(r)){case 1:n=$f;break;case 4:n=M0;break;case 16:n=_u;break;case 536870912:n=F0;break;default:n=_u}n=cw(n,rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rw(t,e){if(uu=-1,lu=0,(re&6)!==0)throw Error(x(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=Iu(t,t===qe?rt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ju(t,r);else{e=r;var i=re;re|=2;var s=sw();(qe!==t||rt!==e)&&(Cn=null,Ji=Oe()+500,jr(t,e));do try{ek();break}catch(a){iw(t,a)}while(1);qf(),Uu.current=s,re=i,Me!==null?e=0:(qe=null,rt=0,e=Be)}if(e!==0){if(e===2&&(i=nd(t),i!==0&&(r=i,e=Dd(t,i))),e===1)throw n=ko,jr(t,0),Yn(t,r),$t(t,Oe()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!JI(i)&&(e=ju(t,r),e===2&&(s=nd(t),s!==0&&(r=s,e=Dd(t,s))),e===1))throw n=ko,jr(t,0),Yn(t,r),$t(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Rr(t,Nt,Cn);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=up+500-Oe(),10<e)){if(Iu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cd(Rr.bind(null,t,Nt,Cn),e);break}Rr(t,Nt,Cn);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YI(r/1960))-r,10<r){t.timeoutHandle=cd(Rr.bind(null,t,Nt,Cn),r);break}Rr(t,Nt,Cn);break;case 5:Rr(t,Nt,Cn);break;default:throw Error(x(329))}}}return $t(t,Oe()),t.callbackNode===n?rw.bind(null,t):null}function Dd(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=ju(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Rd(e)),t}function Rd(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function JI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~ap,e&=~Rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function ry(t){if((re&6)!==0)throw Error(x(327));Fi();var e=Iu(t,0);if((e&1)===0)return $t(t,Oe()),null;var n=ju(t,e);if(t.tag!==0&&n===2){var r=nd(t);r!==0&&(e=r,n=Dd(t,r))}if(n===1)throw n=ko,jr(t,0),Yn(t,e),$t(t,Oe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,Nt,Cn),$t(t,Oe()),null}function lp(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ji=Oe()+500,xl&&Tr())}}function Jr(t){rr!==null&&rr.tag===0&&(re&6)===0&&Fi();var e=re;re|=1;var n=Gt.transition,r=he;try{if(Gt.transition=null,he=1,t)return t()}finally{he=r,Gt.transition=n,re=e,(re&6)===0&&Tr()}}function cp(){Lt=Ni.current,Ee(Ni)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AI(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nu();break;case 3:Xi(),Ee(Pt),Ee(gt),Zf();break;case 5:Jf(r);break;case 4:Xi();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:Gf(r.type._context);break;case 22:case 23:cp()}n=n.return}if(qe=t,Me=t=hr(t.current,null),rt=Lt=e,Be=0,ko=null,ap=Rl=Yr=0,Nt=Zs=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}br=null}return t}function iw(t,e){do{var n=Me;try{if(qf(),su.current=Fu,Mu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mu=!1}if(Xr=0,Ke=Ue=xe=null,Ys=!1,Co=0,op.current=null,n===null||n.return===null){Be=1,ko=e,Me=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=rt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Hg(o);if(p!==null){p.flags&=-257,Wg(p,o,a,s,e),p.mode&1&&zg(s,l,e),e=p,u=l;var g=e.updateQueue;if(g===null){var v=new Set;v.add(u),e.updateQueue=v}else g.add(u);break e}else{if((e&1)===0){zg(s,l,e),hp();break e}u=Error(x(426))}}else if(Ce&&a.mode&1){var w=Hg(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Wg(w,o,a,s,e),Wf(Yi(u,a));break e}}s=u=Yi(u,a),Be!==4&&(Be=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=V1(s,u,e);Lg(s,m);break e;case 1:a=u;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=j1(s,a,e);Lg(s,S);break e}}s=s.return}while(s!==null)}aw(n)}catch(k){e=k,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function sw(){var t=Uu.current;return Uu.current=Fu,t===null?Fu:t}function hp(){(Be===0||Be===3||Be===2)&&(Be=4),qe===null||(Yr&268435455)===0&&(Rl&268435455)===0||Yn(qe,rt)}function ju(t,e){var n=re;re|=2;var r=sw();(qe!==t||rt!==e)&&(Cn=null,jr(t,e));do try{ZI();break}catch(i){iw(t,i)}while(1);if(qf(),re=n,Uu.current=r,Me!==null)throw Error(x(261));return qe=null,rt=0,Be}function ZI(){for(;Me!==null;)ow(Me)}function ek(){for(;Me!==null&&!k_();)ow(Me)}function ow(t){var e=lw(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?aw(t):Me=e,op.current=null}function aw(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=KI(n,e,Lt),n!==null){Me=n;return}}else{if(n=qI(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function Rr(t,e,n){var r=he,i=Gt.transition;try{Gt.transition=null,he=1,tk(t,e,n,r)}finally{Gt.transition=i,he=r}return null}function tk(t,e,n,r){do Fi();while(rr!==null);if((re&6)!==0)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(b_(t,s),t===qe&&(Me=qe=null,rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ja||(ja=!0,cw(_u,function(){return Fi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Gt.transition,Gt.transition=null;var o=he;he=1;var a=re;re|=4,op.current=null,QI(t,n),tw(n,t),SI(ud),ku=!!ad,ud=ad=null,t.current=n,XI(n),T_(),re=a,he=o,Gt.transition=s}else t.current=n;if(ja&&(ja=!1,rr=t,Vu=i),s=t.pendingLanes,s===0&&(lr=null),N_(n.stateNode),$t(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bu)throw Bu=!1,t=Ad,Ad=null,t;return(Vu&1)!==0&&t.tag!==0&&Fi(),s=t.pendingLanes,(s&1)!==0?t===Nd?eo++:(eo=0,Nd=t):eo=0,Tr(),null}function Fi(){if(rr!==null){var t=B0(Vu),e=Gt.transition,n=he;try{if(Gt.transition=null,he=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,Vu=0,(re&6)!==0)throw Error(x(331));var i=re;for(re|=4,L=t.current;L!==null;){var s=L,o=s.child;if((L.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(L=l;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Js(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,p=c.return;if(J1(c),c===l){L=null;break}if(d!==null){d.return=p,L=d;break}L=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,L=y;else e:for(o=f;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(k){Re(a,a.return,k)}if(a===o){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(re=i,Tr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Cl,t)}catch{}r=!0}return r}finally{he=n,Gt.transition=e}}return!1}function iy(t,e,n){e=Yi(n,e),e=V1(t,e,1),t=ur(t,e,1),e=It(),t!==null&&(Go(t,1,e),$t(t,e))}function Re(t,e,n){if(t.tag===3)iy(t,t,n);else for(;e!==null;){if(e.tag===3){iy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Yi(n,t),t=j1(e,t,1),e=ur(e,t,1),t=It(),e!==null&&(Go(e,1,t),$t(e,t));break}}e=e.return}}function nk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(rt&n)===n&&(Be===4||Be===3&&(rt&130023424)===rt&&500>Oe()-up?jr(t,0):ap|=n),$t(t,e)}function uw(t,e){e===0&&((t.mode&1)===0?e=1:(e=Pa,Pa<<=1,(Pa&130023424)===0&&(Pa=4194304)));var n=It();t=bn(t,e),t!==null&&(Go(t,e,n),$t(t,n))}function rk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uw(t,n)}function ik(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),uw(t,n)}var lw;lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Rt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Rt=!1,WI(t,e,n);Rt=(t.flags&131072)!==0}else Rt=!1,Ce&&(e.flags&1048576)!==0&&d1(e,Pu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;au(t,e),t=e.pendingProps;var i=qi(e,gt.current);Mi(e,n),i=tp(null,e,r,t,i,n);var s=np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,Du(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xf(e),i.updater=Al,e.stateNode=i,i._reactInternals=e,yd(e,r,t,n),e=Ed(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&zf(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(au(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ok(r),t=nn(r,t),i){case 0:e=wd(null,e,r,t,n);break e;case 1:e=Gg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=qg(null,e,r,nn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),wd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Gg(t,e,r,i,n);case 3:e:{if(K1(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g1(t,e),bu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(x(423)),e),e=Qg(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(x(424)),e),e=Qg(t,e,r,n,i);break e}else for(Mt=ar(e.stateNode.containerInfo.firstChild),Ft=e,Ce=!0,sn=null,n=E1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===i){e=Ln(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return S1(e),t===null&&pd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ld(r,i)?o=null:s!==null&&ld(r,s)&&(e.flags|=32),W1(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&pd(e),null;case 13:return q1(t,e,n);case 4:return Yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qi(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Kg(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Ou,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Pt.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Rn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),md(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),md(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mi(e,n),i=Xt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),qg(t,e,r,i,n);case 15:return z1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),au(t,e),e.tag=1,Ot(r)?(t=!0,Du(e)):t=!1,Mi(e,n),v1(e,r,i),yd(e,r,i,n),Ed(null,e,r,!0,t,n);case 19:return G1(t,e,n);case 22:return H1(t,e,n)}throw Error(x(156,e.tag))};function cw(t,e){return L0(t,e)}function sk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new sk(t,e,n,r)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ok(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Pf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return zr(n.children,i,s,e);case Df:o=8,i|=8;break;case Vh:return t=qt(12,n,e,i|2),t.elementType=Vh,t.lanes=s,t;case jh:return t=qt(13,n,e,i),t.elementType=jh,t.lanes=s,t;case zh:return t=qt(19,n,e,i),t.elementType=zh,t.lanes=s,t;case w0:return Pl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y0:o=10;break e;case v0:o=9;break e;case Rf:o=11;break e;case Pf:o=14;break e;case Gn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Pl(t,e,n,r){return t=qt(22,t,r,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function ch(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function hh(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ak(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wc(0),this.expirationTimes=Wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fp(t,e,n,r,i,s,o,a,u){return t=new ak(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xf(s),t}function uk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hw(t){if(!t)return vr;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Ot(n))return c1(t,n,e)}return e}function dw(t,e,n,r,i,s,o,a,u){return t=fp(n,r,!0,t,i,s,o,a,u),t.context=hw(null),n=t.current,r=It(),i=cr(n),s=Rn(r,i),s.callback=e!=null?e:null,ur(n,s,i),t.current.lanes=i,Go(t,i,r),$t(t,r),t}function Ol(t,e,n,r){var i=e.current,s=It(),o=cr(i);return n=hw(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&(un(t,i,o,s),iu(t,i,o)),o}function zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){sy(t,e),(t=t.alternate)&&sy(t,e)}function lk(){return null}var fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}$l.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Ol(t,e,null,null)};$l.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){Ol(null,t,null,null)}),e[$n]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&W0(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oy(){}function ck(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=zu(o);s.call(l)}}var o=dw(e,r,t,0,null,!1,!1,"",oy);return t._reactRootContainer=o,t[$n]=o.current,yo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=zu(u);a.call(l)}}var u=fp(t,0,!1,null,null,!1,!1,"",oy);return t._reactRootContainer=u,t[$n]=u.current,yo(t.nodeType===8?t.parentNode:t),Jr(function(){Ol(e,u,n,r)}),u}function Ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=zu(o);a.call(u)}}Ol(e,o,t,i)}else o=ck(n,e,t,i,r);return zu(o)}V0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(bf(e,n|1),$t(e,Oe()),(re&6)===0&&(Ji=Oe()+500,Tr()))}break;case 13:Jr(function(){var r=bn(t,1);if(r!==null){var i=It();un(r,t,1,i)}}),pp(t,1)}};Lf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=It();un(e,t,134217728,n)}pp(t,134217728)}};j0=function(t){if(t.tag===13){var e=cr(t),n=bn(t,e);if(n!==null){var r=It();un(n,t,e,r)}pp(t,e)}};z0=function(){return he};H0=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Zh=function(t,e,n){switch(e){case"input":if(Kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tl(r);if(!i)throw Error(x(90));S0(r),Kh(r,i)}}}break;case"textarea":_0(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};D0=lp;R0=Jr;var hk={usingClientEntryPoint:!1,Events:[Xo,_i,Tl,A0,N0,lp]},$s={findFiberByHostInstance:$r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dk={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$0(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||lk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{Cl=za.inject(dk),pn=za}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hk;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(x(200));return uk(t,e,null,n)};jt.createRoot=function(t,e){if(!gp(t))throw Error(x(299));var n=!1,r="",i=fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fp(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,yo(t.nodeType===8?t.parentNode:t),new mp(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=$0(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return Jr(t)};jt.hydrate=function(t,e,n){if(!bl(e))throw Error(x(200));return Ll(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dw(e,null,t,1,n!=null?n:null,i,!1,s,o),t[$n]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $l(e)};jt.render=function(t,e,n){if(!bl(e))throw Error(x(200));return Ll(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!bl(t))throw Error(x(40));return t._reactRootContainer?(Jr(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};jt.unstable_batchedUpdates=lp;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Ll(t,e,n,!1,r)};jt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=jt})(Tf);var ay=Tf.exports;Uh.createRoot=ay.createRoot,Uh.hydrateRoot=ay.hydrateRoot;var Ml={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=typeof Symbol=="function"&&Symbol.for,yp=Xe?Symbol.for("react.element"):60103,vp=Xe?Symbol.for("react.portal"):60106,Fl=Xe?Symbol.for("react.fragment"):60107,Ul=Xe?Symbol.for("react.strict_mode"):60108,Bl=Xe?Symbol.for("react.profiler"):60114,Vl=Xe?Symbol.for("react.provider"):60109,jl=Xe?Symbol.for("react.context"):60110,wp=Xe?Symbol.for("react.async_mode"):60111,zl=Xe?Symbol.for("react.concurrent_mode"):60111,Hl=Xe?Symbol.for("react.forward_ref"):60112,Wl=Xe?Symbol.for("react.suspense"):60113,fk=Xe?Symbol.for("react.suspense_list"):60120,Kl=Xe?Symbol.for("react.memo"):60115,ql=Xe?Symbol.for("react.lazy"):60116,pk=Xe?Symbol.for("react.block"):60121,mk=Xe?Symbol.for("react.fundamental"):60117,gk=Xe?Symbol.for("react.responder"):60118,yk=Xe?Symbol.for("react.scope"):60119;function Ht(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case yp:switch(t=t.type,t){case wp:case zl:case Fl:case Bl:case Ul:case Wl:return t;default:switch(t=t&&t.$$typeof,t){case jl:case Hl:case ql:case Kl:case Vl:return t;default:return e}}case vp:return e}}}function pw(t){return Ht(t)===zl}de.AsyncMode=wp;de.ConcurrentMode=zl;de.ContextConsumer=jl;de.ContextProvider=Vl;de.Element=yp;de.ForwardRef=Hl;de.Fragment=Fl;de.Lazy=ql;de.Memo=Kl;de.Portal=vp;de.Profiler=Bl;de.StrictMode=Ul;de.Suspense=Wl;de.isAsyncMode=function(t){return pw(t)||Ht(t)===wp};de.isConcurrentMode=pw;de.isContextConsumer=function(t){return Ht(t)===jl};de.isContextProvider=function(t){return Ht(t)===Vl};de.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===yp};de.isForwardRef=function(t){return Ht(t)===Hl};de.isFragment=function(t){return Ht(t)===Fl};de.isLazy=function(t){return Ht(t)===ql};de.isMemo=function(t){return Ht(t)===Kl};de.isPortal=function(t){return Ht(t)===vp};de.isProfiler=function(t){return Ht(t)===Bl};de.isStrictMode=function(t){return Ht(t)===Ul};de.isSuspense=function(t){return Ht(t)===Wl};de.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Fl||t===zl||t===Bl||t===Ul||t===Wl||t===fk||typeof t=="object"&&t!==null&&(t.$$typeof===ql||t.$$typeof===Kl||t.$$typeof===Vl||t.$$typeof===jl||t.$$typeof===Hl||t.$$typeof===mk||t.$$typeof===gk||t.$$typeof===yk||t.$$typeof===pk)};de.typeOf=Ht;(function(t){t.exports=de})(Ml);function vk(t){function e(P,$,b,W,E){for(var te=0,R=0,De=0,ae=0,ce,Y,Ye=0,xt=0,se,lt=se=ce=0,ue=0,Je=0,ks=0,Ze=0,Ta=b.length,Ts=Ta-1,en,G="",Pe="",Fc="",Uc="",Wn;ue<Ta;){if(Y=b.charCodeAt(ue),ue===Ts&&R+ae+De+te!==0&&(R!==0&&(Y=R===47?10:47),ae=De=te=0,Ta++,Ts++),R+ae+De+te===0){if(ue===Ts&&(0<Je&&(G=G.replace(d,"")),0<G.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:G+=b.charAt(ue)}Y=59}switch(Y){case 123:for(G=G.trim(),ce=G.charCodeAt(0),se=1,Ze=++ue;ue<Ta;){switch(Y=b.charCodeAt(ue)){case 123:se++;break;case 125:se--;break;case 47:switch(Y=b.charCodeAt(ue+1)){case 42:case 47:e:{for(lt=ue+1;lt<Ts;++lt)switch(b.charCodeAt(lt)){case 47:if(Y===42&&b.charCodeAt(lt-1)===42&&ue+2!==lt){ue=lt+1;break e}break;case 10:if(Y===47){ue=lt+1;break e}}ue=lt}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;ue++<Ts&&b.charCodeAt(ue)!==Y;);}if(se===0)break;ue++}switch(se=b.substring(Ze,ue),ce===0&&(ce=(G=G.replace(h,"").trim()).charCodeAt(0)),ce){case 64:switch(0<Je&&(G=G.replace(d,"")),Y=G.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Je=$;break;default:Je=Sn}if(se=e($,Je,se,Y,E+1),Ze=se.length,0<N&&(Je=n(Sn,G,ks),Wn=a(3,se,Je,$,Ie,pe,Ze,Y,E,W),G=Je.join(""),Wn!==void 0&&(Ze=(se=Wn.trim()).length)===0&&(Y=0,se="")),0<Ze)switch(Y){case 115:G=G.replace(D,o);case 100:case 109:case 45:se=G+"{"+se+"}";break;case 107:G=G.replace(f,"$1 $2"),se=G+"{"+se+"}",se=He===1||He===2&&s("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=G+se,W===112&&(se=(Pe+=se,""))}else se="";break;default:se=e($,n($,G,ks),se,W,E+1)}Fc+=se,se=ks=Je=lt=ce=0,G="",Y=b.charCodeAt(++ue);break;case 125:case 59:if(G=(0<Je?G.replace(d,""):G).trim(),1<(Ze=G.length))switch(lt===0&&(ce=G.charCodeAt(0),ce===45||96<ce&&123>ce)&&(Ze=(G=G.replace(" ",":")).length),0<N&&(Wn=a(1,G,$,P,Ie,pe,Pe.length,W,E,W))!==void 0&&(Ze=(G=Wn.trim()).length)===0&&(G="\0\0"),ce=G.charCodeAt(0),Y=G.charCodeAt(1),ce){case 0:break;case 64:if(Y===105||Y===99){Uc+=G+b.charAt(ue);break}default:G.charCodeAt(Ze-1)!==58&&(Pe+=i(G,ce,Y,G.charCodeAt(2)))}ks=Je=lt=ce=0,G="",Y=b.charCodeAt(++ue)}}switch(Y){case 13:case 10:R===47?R=0:1+ce===0&&W!==107&&0<G.length&&(Je=1,G+="\0"),0<N*H&&a(0,G,$,P,Ie,pe,Pe.length,W,E,W),pe=1,Ie++;break;case 59:case 125:if(R+ae+De+te===0){pe++;break}default:switch(pe++,en=b.charAt(ue),Y){case 9:case 32:if(ae+te+R===0)switch(Ye){case 44:case 58:case 9:case 32:en="";break;default:Y!==32&&(en=" ")}break;case 0:en="\\0";break;case 12:en="\\f";break;case 11:en="\\v";break;case 38:ae+R+te===0&&(Je=ks=1,en="\f"+en);break;case 108:if(ae+R+te+$e===0&&0<lt)switch(ue-lt){case 2:Ye===112&&b.charCodeAt(ue-3)===58&&($e=Ye);case 8:xt===111&&($e=xt)}break;case 58:ae+R+te===0&&(lt=ue);break;case 44:R+De+ae+te===0&&(Je=1,en+="\r");break;case 34:case 39:R===0&&(ae=ae===Y?0:ae===0?Y:ae);break;case 91:ae+R+De===0&&te++;break;case 93:ae+R+De===0&&te--;break;case 41:ae+R+te===0&&De--;break;case 40:if(ae+R+te===0){if(ce===0)switch(2*Ye+3*xt){case 533:break;default:ce=1}De++}break;case 64:R+De+ae+te+lt+se===0&&(se=1);break;case 42:case 47:if(!(0<ae+te+De))switch(R){case 0:switch(2*Y+3*b.charCodeAt(ue+1)){case 235:R=47;break;case 220:Ze=ue,R=42}break;case 42:Y===47&&Ye===42&&Ze+2!==ue&&(b.charCodeAt(Ze+2)===33&&(Pe+=b.substring(Ze,ue+1)),en="",R=0)}}R===0&&(G+=en)}xt=Ye,Ye=Y,ue++}if(Ze=Pe.length,0<Ze){if(Je=$,0<N&&(Wn=a(2,Pe,Je,P,Ie,pe,Ze,W,E,W),Wn!==void 0&&(Pe=Wn).length===0))return Uc+Pe+Fc;if(Pe=Je.join(",")+"{"+Pe+"}",He*$e!==0){switch(He!==2||s(Pe,2)||($e=0),$e){case 111:Pe=Pe.replace(S,":-moz-$1")+Pe;break;case 112:Pe=Pe.replace(y,"::-webkit-input-$1")+Pe.replace(y,"::-moz-$1")+Pe.replace(y,":-ms-input-$1")+Pe}$e=0}}return Uc+Pe+Fc}function n(P,$,b){var W=$.trim().split(w);$=W;var E=W.length,te=P.length;switch(te){case 0:case 1:var R=0;for(P=te===0?"":P[0]+" ";R<E;++R)$[R]=r(P,$[R],b).trim();break;default:var De=R=0;for($=[];R<E;++R)for(var ae=0;ae<te;++ae)$[De++]=r(P[ae]+" ",W[R],b).trim()}return $}function r(P,$,b){var W=$.charCodeAt(0);switch(33>W&&(W=($=$.trim()).charCodeAt(0)),W){case 38:return $.replace(m,"$1"+P.trim());case 58:return P.trim()+$.replace(m,"$1"+P.trim());default:if(0<1*b&&0<$.indexOf("\f"))return $.replace(m,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+$}function i(P,$,b,W){var E=P+";",te=2*$+3*b+4*W;if(te===944){P=E.indexOf(":",9)+1;var R=E.substring(P,E.length-1).trim();return R=E.substring(0,P).trim()+R+";",He===1||He===2&&s(R,1)?"-webkit-"+R+R:R}if(He===0||He===2&&!s(E,1))return E;switch(te){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(ie,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return R=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+E+"-ms-flex-pack"+R+E;case 1005:return g.test(E)?E.replace(p,":-webkit-")+E.replace(p,":-moz-")+E:E;case 1e3:switch(R=E.substring(13).trim(),$=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt($)){case 226:R=E.replace(k,"tb");break;case 232:R=E.replace(k,"tb-rl");break;case 220:R=E.replace(k,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+R+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch($=(E=P).length-10,R=(E.charCodeAt($)===33?E.substring(0,$):E).substring(P.indexOf(":",7)+1).trim(),te=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:E=E.replace(R,"-webkit-"+R)+";"+E;break;case 207:case 102:E=E.replace(R,"-webkit-"+(102<te?"inline-":"")+"box")+";"+E.replace(R,"-webkit-"+R)+";"+E.replace(R,"-ms-"+R+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return R=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+R+"-ms-flex-"+R+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(C,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(C,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(B.test(P)===!0)return(R=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),$,b,W).replace(":fill-available",":stretch"):E.replace(R,"-webkit-"+R)+E.replace(R,"-moz-"+R.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,b+W===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function s(P,$){var b=P.indexOf($===1?":":"{"),W=P.substring(0,$!==3?b:10);return b=P.substring(b+1,P.length-1),z($!==2?W:W.replace(U,"$1"),b,$)}function o(P,$){var b=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return b!==$+";"?b.replace(_," or ($1)").substring(4):"("+$+")"}function a(P,$,b,W,E,te,R,De,ae,ce){for(var Y=0,Ye=$,xt;Y<N;++Y)switch(xt=vt[Y].call(c,P,Ye,b,W,E,te,R,De,ae,ce)){case void 0:case!1:case!0:case null:break;default:Ye=xt}if(Ye!==$)return Ye}function u(P){switch(P){case void 0:case null:N=vt.length=0;break;default:if(typeof P=="function")vt[N++]=P;else if(typeof P=="object")for(var $=0,b=P.length;$<b;++$)u(P[$]);else H=!!P|0}return u}function l(P){return P=P.prefix,P!==void 0&&(z=null,P?typeof P!="function"?He=1:(He=2,z=P):He=0),l}function c(P,$){var b=P;if(33>b.charCodeAt(0)&&(b=b.trim()),me=b,b=[me],0<N){var W=a(-1,$,b,b,Ie,pe,0,0,0,0);W!==void 0&&typeof W=="string"&&($=W)}var E=e(Sn,b,$,0,0);return 0<N&&(W=a(-2,E,b,b,Ie,pe,E.length,0,0,0),W!==void 0&&(E=W)),me="",$e=0,pe=Ie=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,D=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,C=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,ie=/([^-])(image-set\()/,pe=1,Ie=1,$e=0,He=1,Sn=[],vt=[],N=0,z=null,H=0,me="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var wk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ek(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Sk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uy=Ek(function(t){return Sk.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Ep=Ml.exports,Ck={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_k={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ik={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sp={};Sp[Ep.ForwardRef]=Ik;Sp[Ep.Memo]=mw;function ly(t){return Ep.isMemo(t)?mw:Sp[t.$$typeof]||Ck}var kk=Object.defineProperty,Tk=Object.getOwnPropertyNames,cy=Object.getOwnPropertySymbols,xk=Object.getOwnPropertyDescriptor,Ak=Object.getPrototypeOf,hy=Object.prototype;function gw(t,e,n){if(typeof e!="string"){if(hy){var r=Ak(e);r&&r!==hy&&gw(t,r,n)}var i=Tk(e);cy&&(i=i.concat(cy(e)));for(var s=ly(t),o=ly(e),a=0;a<i.length;++a){var u=i[a];if(!_k[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=xk(e,u);try{kk(t,u,l)}catch{}}}}return t}var Nk=gw;function xn(){return(xn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var dy=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Pd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Ml.exports.typeOf(t)},Hu=Object.freeze([]),dr=Object.freeze({});function To(t){return typeof t=="function"}function fy(t){return t.displayName||t.name||"Component"}function Cp(t){return t&&typeof t.styledComponentId=="string"}var Zi=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",_p=typeof window<"u"&&"HTMLElement"in window,Dk=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Jo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Rk=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Jo(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),hu=new Map,Wu=new Map,to=1,Ha=function(t){if(hu.has(t))return hu.get(t);for(;Wu.has(to);)to++;var e=to++;return hu.set(t,e),Wu.set(e,t),e},Pk=function(t){return Wu.get(t)},Ok=function(t,e){e>=to&&(to=e+1),hu.set(t,e),Wu.set(e,t)},$k="style["+Zi+'][data-styled-version="5.3.5"]',bk=new RegExp("^"+Zi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Lk=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Mk=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(bk);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(Ok(l,u),Lk(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},Fk=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},yw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(Zi))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Zi,"active"),r.setAttribute("data-styled-version","5.3.5");var o=Fk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Uk=function(){function t(n){var r=this.element=yw(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}Jo(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),Bk=function(){function t(n){var r=this.element=yw(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),Vk=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),py=_p,jk={isServer:!_p,useCSSOMInjection:!Dk},vw=function(){function t(n,r,i){n===void 0&&(n=dr),r===void 0&&(r={}),this.options=xn({},jk,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&_p&&py&&(py=!1,function(s){for(var o=document.querySelectorAll($k),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Zi)!=="active"&&(Mk(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return Ha(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(xn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new Vk(o):s?new Uk(o):new Bk(o),new Rk(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ha(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ha(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ha(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=Pk(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=Zi+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),zk=/(a)(d)/gi,my=function(t){return String.fromCharCode(t+(t>25?39:97))};function Od(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=my(e%52)+n;return(my(e%52)+n).replace(zk,"$1-$2")}var Di=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},ww=function(t){return Di(5381,t)};function Hk(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(To(n)&&!Cp(n))return!1}return!0}var Wk=ww("5.3.5"),Kk=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hk(e),this.componentId=n,this.baseHash=Di(Wk,n),this.baseStyle=r,vw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=es(this.rules,e,n,r).join(""),a=Od(Di(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=Di(this.baseHash,r.hash),h="",d=0;d<l;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var g=es(p,e,n,r),v=Array.isArray(g)?g.join(""):g;c=Di(c,v+d),h+=v}}if(h){var w=Od(c>>>0);if(!n.hasNameForId(i,w)){var m=r(h,"."+w,void 0,i);n.insertRules(i,w,m)}s.push(w)}}return s.join(" ")},t}(),qk=/^\s*\/\/.*$/gm,Gk=[":","[",".","#"];function Qk(t){var e,n,r,i,s=t===void 0?dr:t,o=s.options,a=o===void 0?dr:o,u=s.plugins,l=u===void 0?Hu:u,c=new vk(a),h=[],d=function(v){function w(m){if(m)try{v(m+"}")}catch{}}return function(m,f,y,S,k,D,_,C,U,B){switch(m){case 1:if(U===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(C===0)return f+"/*|*/";break;case 3:switch(C){case 102:case 112:return v(y[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(v){h.push(v)}),p=function(v,w,m){return w===0&&Gk.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function g(v,w,m,f){f===void 0&&(f="&");var y=v.replace(qk,""),S=w&&m?m+" "+w+" { "+y+" }":y;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,S)}return c.use([].concat(l,[function(v,w,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var w=h;return h=[],w}}])),g.hash=l.length?l.reduce(function(v,w){return w.name||Jo(15),Di(v,w.name)},5381).toString():"",g}var Ew=qo.createContext();Ew.Consumer;var Sw=qo.createContext(),Xk=(Sw.Consumer,new vw),$d=Qk();function Yk(){return O.exports.useContext(Ew)||Xk}function Jk(){return O.exports.useContext(Sw)||$d}var Zk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=$d);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Jo(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=$d),this.name+e.hash},t}(),eT=/([A-Z])/,tT=/([A-Z])/g,nT=/^ms-/,rT=function(t){return"-"+t.toLowerCase()};function gy(t){return eT.test(t)?t.replace(tT,rT).replace(nT,"-ms-"):t}var yy=function(t){return t==null||t===!1||t===""};function es(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=es(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(yy(t))return"";if(Cp(t))return"."+t.styledComponentId;if(To(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return es(u,e,n,r)}var l;return t instanceof Zk?n?(t.inject(n,r),t.getName(r)):t:Pd(t)?function c(h,d){var p,g,v=[];for(var w in h)h.hasOwnProperty(w)&&!yy(h[w])&&(Array.isArray(h[w])&&h[w].isCss||To(h[w])?v.push(gy(w)+":",h[w],";"):Pd(h[w])?v.push.apply(v,c(h[w],w)):v.push(gy(w)+": "+(p=w,(g=h[w])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in wk?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var vy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function iT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return To(t)||Pd(t)?vy(es(dy(Hu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:vy(es(dy(t,n)))}var sT=function(t,e,n){return n===void 0&&(n=dr),t.theme!==n.theme&&t.theme||e||n.theme},oT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aT=/(^-|-$)/g;function dh(t){return t.replace(oT,"-").replace(aT,"")}var uT=function(t){return Od(ww(t)>>>0)};function Wa(t){return typeof t=="string"&&!0}var bd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},lT=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function cT(t,e,n){var r=t[n];bd(e)&&bd(r)?Cw(r,e):t[n]=e}function Cw(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(bd(o))for(var a in o)lT(a)&&cT(t,o[a],a)}return t}var _w=qo.createContext();_w.Consumer;var fh={};function Iw(t,e,n){var r=Cp(t),i=!Wa(t),s=e.attrs,o=s===void 0?Hu:s,a=e.componentId,u=a===void 0?function(f,y){var S=typeof f!="string"?"sc":dh(f);fh[S]=(fh[S]||0)+1;var k=S+"-"+uT("5.3.5"+S+fh[S]);return y?y+"-"+k:k}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(f){return Wa(f)?"styled."+f:"Styled("+fy(f)+")"}(t):l,h=e.displayName&&e.componentId?dh(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,S){return t.shouldForwardProp(f,y,S)&&e.shouldForwardProp(f,y,S)}:t.shouldForwardProp);var g,v=new Kk(n,h,r?t.componentStyle:void 0),w=v.isStatic&&o.length===0,m=function(f,y){return function(S,k,D,_){var C=S.attrs,U=S.componentStyle,B=S.defaultProps,ie=S.foldedComponentIds,pe=S.shouldForwardProp,Ie=S.styledComponentId,$e=S.target,He=function(W,E,te){W===void 0&&(W=dr);var R=xn({},E,{theme:W}),De={};return te.forEach(function(ae){var ce,Y,Ye,xt=ae;for(ce in To(xt)&&(xt=xt(R)),xt)R[ce]=De[ce]=ce==="className"?(Y=De[ce],Ye=xt[ce],Y&&Ye?Y+" "+Ye:Y||Ye):xt[ce]}),[R,De]}(sT(k,O.exports.useContext(_w),B)||dr,k,C),Sn=He[0],vt=He[1],N=function(W,E,te,R){var De=Yk(),ae=Jk(),ce=E?W.generateAndInjectStyles(dr,De,ae):W.generateAndInjectStyles(te,De,ae);return ce}(U,_,Sn),z=D,H=vt.$as||k.$as||vt.as||k.as||$e,me=Wa(H),P=vt!==k?xn({},k,{},vt):k,$={};for(var b in P)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?$.as=P[b]:(pe?pe(b,uy,H):!me||uy(b))&&($[b]=P[b]));return k.style&&vt.style!==k.style&&($.style=xn({},k.style,{},vt.style)),$.className=Array.prototype.concat(ie,Ie,N!==Ie?N:null,k.className,vt.className).filter(Boolean).join(" "),$.ref=z,O.exports.createElement(H,$)}(g,f,y,w)};return m.displayName=c,(g=qo.forwardRef(m)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Hu,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var y=e.componentId,S=function(D,_){if(D==null)return{};var C,U,B={},ie=Object.keys(D);for(U=0;U<ie.length;U++)C=ie[U],_.indexOf(C)>=0||(B[C]=D[C]);return B}(e,["componentId"]),k=y&&y+"-"+(Wa(f)?f:dh(fy(f)));return Iw(f,xn({},S,{attrs:d,componentId:k}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?Cw({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&Nk(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Ld=function(t){return function e(n,r,i){if(i===void 0&&(i=dr),!Ml.exports.isValidElementType(r))return Jo(1,String(r));var s=function(){return n(r,i,iT.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,xn({},i,{},o))},s.attrs=function(o){return e(n,r,xn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Iw,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Ld[t]=Ld(t)});const Ne=Ld;/**
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
 */const kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dT=function(t){const e=kw(t);return Tw.encodeByteArray(e,!0)},xw=function(t){return dT(t).replace(/\./g,"")},fT=function(t){try{return Tw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class pT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Aw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mT(){return Ge().indexOf("Electron/")>=0}function Rw(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gT(){return Ge().indexOf("MSAppHost/")>=0}function yT(){return typeof indexedDB=="object"}function vT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const wT="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wT,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ET(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,r)}}function ET(t,e){return t.replace(ST,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ST=/\{\$([^}]+)}/g;function CT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ku(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wy(s)&&wy(o)){if(!Ku(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wy(t){return t!==null&&typeof t=="object"}/**
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
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _T(t,e){const n=new IT(t,e);return n.subscribe.bind(n)}class IT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ph),i.error===void 0&&(i.error=ph),i.complete===void 0&&(i.complete=ph);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ph(){}/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class TT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AT(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xT(t){return t===Pr?void 0:t}function AT(t){return t.instantiationMode==="EAGER"}/**
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
 */class NT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const DT={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},RT=oe.INFO,PT={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},OT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ip{constructor(e){this.name=e,this._logLevel=RT,this._logHandler=OT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const $T=(t,e)=>e.some(n=>t instanceof n);let Ey,Sy;function bT(){return Ey||(Ey=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LT(){return Sy||(Sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pw=new WeakMap,Md=new WeakMap,Ow=new WeakMap,mh=new WeakMap,kp=new WeakMap;function MT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pw.set(n,t)}).catch(()=>{}),kp.set(e,t),e}function FT(t){if(Md.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Md.set(t,e)}let Fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ow.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UT(t){Fd=t(Fd)}function BT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gh(this),e,...n);return Ow.set(r,e.sort?e.sort():[e]),fr(r)}:LT().includes(t)?function(...e){return t.apply(gh(this),e),fr(Pw.get(this))}:function(...e){return fr(t.apply(gh(this),e))}}function VT(t){return typeof t=="function"?BT(t):(t instanceof IDBTransaction&&FT(t),$T(t,bT())?new Proxy(t,Fd):t)}function fr(t){if(t instanceof IDBRequest)return MT(t);if(mh.has(t))return mh.get(t);const e=VT(t);return e!==t&&(mh.set(t,e),kp.set(e,t)),e}const gh=t=>kp.get(t);function jT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(fr(o.result),u.oldVersion,u.newVersion,fr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const zT=["get","getKey","getAll","getAllKeys","count"],HT=["put","add","delete","clear"],yh=new Map;function Cy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yh.get(e))return yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zT.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return yh.set(e,s),s}UT(t=>({...t,get:(e,n,r)=>Cy(e,n)||t.get(e,n,r),has:(e,n)=>!!Cy(e,n)||t.has(e,n)}));/**
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
 */class WT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ud="@firebase/app",_y="0.7.30";/**
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
 */const ei=new Ip("@firebase/app"),qT="@firebase/app-compat",GT="@firebase/analytics-compat",QT="@firebase/analytics",XT="@firebase/app-check-compat",YT="@firebase/app-check",JT="@firebase/auth",ZT="@firebase/auth-compat",ex="@firebase/database",tx="@firebase/database-compat",nx="@firebase/functions",rx="@firebase/functions-compat",ix="@firebase/installations",sx="@firebase/installations-compat",ox="@firebase/messaging",ax="@firebase/messaging-compat",ux="@firebase/performance",lx="@firebase/performance-compat",cx="@firebase/remote-config",hx="@firebase/remote-config-compat",dx="@firebase/storage",fx="@firebase/storage-compat",px="@firebase/firestore",mx="@firebase/firestore-compat",gx="firebase",yx="9.9.2";/**
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
 */const $w="[DEFAULT]",vx={[Ud]:"fire-core",[qT]:"fire-core-compat",[QT]:"fire-analytics",[GT]:"fire-analytics-compat",[YT]:"fire-app-check",[XT]:"fire-app-check-compat",[JT]:"fire-auth",[ZT]:"fire-auth-compat",[ex]:"fire-rtdb",[tx]:"fire-rtdb-compat",[nx]:"fire-fn",[rx]:"fire-fn-compat",[ix]:"fire-iid",[sx]:"fire-iid-compat",[ox]:"fire-fcm",[ax]:"fire-fcm-compat",[ux]:"fire-perf",[lx]:"fire-perf-compat",[cx]:"fire-rc",[hx]:"fire-rc-compat",[dx]:"fire-gcs",[fx]:"fire-gcs-compat",[px]:"fire-fst",[mx]:"fire-fst-compat","fire-js":"fire-js",[gx]:"fire-js-all"};/**
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
 */const qu=new Map,Bd=new Map;function wx(t,e){try{t.container.addComponent(e)}catch(n){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Bd.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;Bd.set(e,t);for(const n of qu.values())wx(n,t);return!0}function Tp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ex={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ti=new Zo("app","Firebase",Ex);/**
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
 */class Sx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
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
 */const ta=yx;function Cx(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:$w,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ti.create("bad-app-name",{appName:String(r)});const i=qu.get(r);if(i){if(Ku(t,i.options)&&Ku(n,i.config))return i;throw ti.create("duplicate-app",{appName:r})}const s=new NT(r);for(const a of Bd.values())s.addComponent(a);const o=new Sx(t,n,s);return qu.set(r,o),o}function bw(t=$w){const e=qu.get(t);if(!e)throw ti.create("no-app",{appName:t});return e}function pr(t,e,n){var r;let i=(r=vx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(a.join(" "));return}ts(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _x="firebase-heartbeat-database",Ix=1,xo="firebase-heartbeat-store";let vh=null;function Lw(){return vh||(vh=jT(_x,Ix,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xo)}}}).catch(t=>{throw ti.create("idb-open",{originalErrorMessage:t.message})})),vh}async function kx(t){var e;try{return(await Lw()).transaction(xo).objectStore(xo).get(Mw(t))}catch(n){if(n instanceof Hn)ei.warn(n.message);else{const r=ti.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ei.warn(r.message)}}}async function Iy(t,e){var n;try{const i=(await Lw()).transaction(xo,"readwrite");return await i.objectStore(xo).put(e,Mw(t)),i.done}catch(r){if(r instanceof Hn)ei.warn(r.message);else{const i=ti.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ei.warn(i.message)}}}function Mw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tx=1024,xx=30*24*60*60*1e3;class Ax{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ky();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=xx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ky(),{heartbeatsToSend:n,unsentEntries:r}=Nx(this._heartbeatsCache.heartbeats),i=xw(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ky(){return new Date().toISOString().substring(0,10)}function Nx(t,e=Tx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ty(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ty(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yT()?vT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ty(t){return xw(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rx(t){ts(new Zr("platform-logger",e=>new WT(e),"PRIVATE")),ts(new Zr("heartbeat",e=>new Ax(e),"PRIVATE")),pr(Ud,_y,t),pr(Ud,_y,"esm2017"),pr("fire-js","")}Rx("");var Px=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,xp=xp||{},q=Px||self;function Gu(){}function Vd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function na(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ox(t){return Object.prototype.hasOwnProperty.call(t,wh)&&t[wh]||(t[wh]=++$x)}var wh="closure_uid_"+(1e9*Math.random()>>>0),$x=0;function bx(t,e,n){return t.call.apply(t.bind,arguments)}function Lx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=bx:it=Lx,it.apply(null,arguments)}function Ka(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xr(){this.s=this.s,this.o=this.o}var Mx=0;xr.prototype.s=!1;xr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Mx!=0)&&Ox(this)};xr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Uw=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Fx(t){e:{var e=NA;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function xy(t){return Array.prototype.concat.apply([],arguments)}function Ap(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qu(t){return/^[\s\xa0]*$/.test(t)}var Ay=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Et(t,e){return t.indexOf(e)!=-1}function Eh(t,e){return t<e?-1:t>e?1:0}var St;e:{var Ny=q.navigator;if(Ny){var Dy=Ny.userAgent;if(Dy){St=Dy;break e}}St=""}function Np(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Bw(t){const e={};for(const n in t)e[n]=t[n];return e}var Ry="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ry.length;s++)n=Ry[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Dp(t){return Dp[" "](t),t}Dp[" "]=Gu;function Ux(t){var e=jx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Bx=Et(St,"Opera"),ns=Et(St,"Trident")||Et(St,"MSIE"),jw=Et(St,"Edge"),jd=jw||ns,zw=Et(St,"Gecko")&&!(Et(St.toLowerCase(),"webkit")&&!Et(St,"Edge"))&&!(Et(St,"Trident")||Et(St,"MSIE"))&&!Et(St,"Edge"),Vx=Et(St.toLowerCase(),"webkit")&&!Et(St,"Edge");function Hw(){var t=q.document;return t?t.documentMode:void 0}var Xu;e:{var Sh="",Ch=function(){var t=St;if(zw)return/rv:([^\);]+)(\)|;)/.exec(t);if(jw)return/Edge\/([\d\.]+)/.exec(t);if(ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Vx)return/WebKit\/(\S+)/.exec(t);if(Bx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ch&&(Sh=Ch?Ch[1]:""),ns){var _h=Hw();if(_h!=null&&_h>parseFloat(Sh)){Xu=String(_h);break e}}Xu=Sh}var jx={};function zx(){return Ux(function(){let t=0;const e=Ay(String(Xu)).split("."),n=Ay("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Eh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Eh(i[2].length==0,s[2].length==0)||Eh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var zd;if(q.document&&ns){var Py=Hw();zd=Py||parseInt(Xu,10)||void 0}else zd=void 0;var Hx=zd,Wx=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Gu,e),q.removeEventListener("test",Gu,e)}catch{}return t}();function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};function Ao(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zw){e:{try{Dp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Kx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ao.Z.h.call(this)}}ut(Ao,mt);var Kx={2:"touch",3:"pen",4:"mouse"};Ao.prototype.h=function(){Ao.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ra="closure_listenable_"+(1e6*Math.random()|0),qx=0;function Gx(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++qx,this.ca=this.fa=!1}function Gl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ql(t){this.src=t,this.g={},this.h=0}Ql.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Wd(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Gx(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Hd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Fw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Rp="closure_lm_"+(1e6*Math.random()|0),Ih={};function Ww(t,e,n,r,i){if(r&&r.once)return qw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ww(t,e[s],n,r,i);return null}return n=$p(n),t&&t[ra]?t.N(e,n,na(r)?!!r.capture:!!r,i):Kw(t,e,n,!1,r,i)}function Kw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=na(i)?!!i.capture:!!i,a=Op(t);if(a||(t[Rp]=a=new Ql(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Qx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Wx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Qw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qx(){function t(n){return e.call(t.src,t.listener,n)}var e=Xx;return t}function qw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)qw(t,e[s],n,r,i);return null}return n=$p(n),t&&t[ra]?t.O(e,n,na(r)?!!r.capture:!!r,i):Kw(t,e,n,!0,r,i)}function Gw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Gw(t,e[s],n,r,i);else r=na(r)?!!r.capture:!!r,n=$p(n),t&&t[ra]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Wd(s,n,r,i),-1<n&&(Gl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Op(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wd(e,n,r,i)),(n=-1<t?e[t]:null)&&Pp(n))}function Pp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ra])Hd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Qw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Op(e))?(Hd(n,t),n.h==0&&(n.src=null,e[Rp]=null)):Gl(t)}}}function Qw(t){return t in Ih?Ih[t]:Ih[t]="on"+t}function Xx(t,e){if(t.ca)t=!0;else{e=new Ao(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Pp(t),t=n.call(r,e)}return t}function Op(t){return t=t[Rp],t instanceof Ql?t:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function $p(t){return typeof t=="function"?t:(t[kh]||(t[kh]=function(e){return t.handleEvent(e)}),t[kh])}function Qe(){xr.call(this),this.i=new Ql(this),this.P=this,this.I=null}ut(Qe,xr);Qe.prototype[ra]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){Gw(this,t,e,n,r)};function st(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(r,t),Vw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qa(o,r,!0,e)&&i}if(o=e.g=t,i=qa(o,r,!0,e)&&i,i=qa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=qa(o,r,!1,e)&&i}Qe.prototype.M=function(){if(Qe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Gl(n[r]);delete t.g[e],t.h--}}this.I=null};Qe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Hd(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var bp=q.JSON.stringify;function Yx(){var t=Yw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Jx{constructor(){this.h=this.g=null}add(e,n){const r=Xw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Xw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Zx,t=>t.reset());class Zx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eA(t){q.setTimeout(()=>{throw t},0)}function Lp(t,e){Kd||tA(),qd||(Kd(),qd=!0),Yw.add(t,e)}var Kd;function tA(){var t=q.Promise.resolve(void 0);Kd=function(){t.then(nA)}}var qd=!1,Yw=new Jx;function nA(){for(var t;t=Yx();){try{t.h.call(t.g)}catch(n){eA(n)}var e=Xw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qd=!1}function Xl(t,e){Qe.call(this),this.h=t||1,this.g=e||q,this.j=it(this.kb,this),this.l=Date.now()}ut(Xl,Qe);M=Xl.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),st(this,"tick"),this.da&&(Mp(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mp(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){Xl.Z.M.call(this),Mp(this),delete this.g};function Fp(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function Jw(t){t.g=Fp(()=>{t.g=null,t.i&&(t.i=!1,Jw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rA extends xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jw(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function No(t){xr.call(this),this.h=t,this.g={}}ut(No,xr);var Oy=[];function Zw(t,e,n,r){Array.isArray(n)||(n&&(Oy[0]=n.toString()),n=Oy);for(var i=0;i<n.length;i++){var s=Ww(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function eE(t){Np(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pp(e)},t),t.g={}}No.prototype.M=function(){No.Z.M.call(this),eE(this)};No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yl(){this.g=!0}Yl.prototype.Aa=function(){this.g=!1};function iA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ri(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aA(t,n)+(r?" "+r:"")})}function oA(t,e){t.info(function(){return"TIMEOUT: "+e})}Yl.prototype.info=function(){};function aA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bp(n)}catch{return e}}var hi={},$y=null;function Jl(){return $y=$y||new Qe}hi.Ma="serverreachability";function tE(t){mt.call(this,hi.Ma,t)}ut(tE,mt);function Do(t){const e=Jl();st(e,new tE(e))}hi.STAT_EVENT="statevent";function nE(t,e){mt.call(this,hi.STAT_EVENT,t),this.stat=e}ut(nE,mt);function Ct(t){const e=Jl();st(e,new nE(e,t))}hi.Na="timingevent";function rE(t,e){mt.call(this,hi.Na,t),this.size=e}ut(rE,mt);function ia(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Zl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},iE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Up(){}Up.prototype.h=null;function by(t){return t.h||(t.h=t.i())}function sE(){}var sa={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Bp(){mt.call(this,"d")}ut(Bp,mt);function Vp(){mt.call(this,"c")}ut(Vp,mt);var Gd;function ec(){}ut(ec,Up);ec.prototype.g=function(){return new XMLHttpRequest};ec.prototype.i=function(){return{}};Gd=new ec;function oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new No(this),this.P=uA,t=jd?125:void 0,this.W=new Xl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new oE}function oE(){this.i=null,this.g="",this.h=!1}var uA=45e3,Qd={},Yu={};M=oa.prototype;M.setTimeout=function(t){this.P=t};function Xd(t,e,n){t.K=1,t.v=nc(Mn(e)),t.s=n,t.U=!0,aE(t,null)}function aE(t,e){t.F=Date.now(),aa(t),t.A=Mn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),pE(n.h,"t",r),t.C=0,n=t.l.H,t.h=new oE,t.g=$E(t.l,n?e:null,!t.s),0<t.O&&(t.L=new rA(it(t.Ia,t,t.g),t.O)),Zw(t.V,t.g,"readystatechange",t.gb),e=t.H?Bw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Do(),iA(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||jd||this.g&&(this.h.h||this.g.ga()||Uy(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Do(3):Do(2)),tc(this);var n=this.g.ba();this.N=n;t:if(uE(this)){var r=Uy(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),no(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,sA(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qu(a)){var l=a;break t}}l=null}if(n=l)Ri(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yd(this,n);else{this.i=!1,this.o=3,Ct(12),Mr(this),no(this);break e}}this.U?(lE(this,c,o),jd&&this.i&&c==3&&(Zw(this.V,this.W,"tick",this.fb),this.W.start())):(Ri(this.j,this.m,o,null),Yd(this,o)),c==4&&Mr(this),this.i&&!this.I&&(c==4?DE(this.l,this):(this.i=!1,aa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),Mr(this),no(this)}}}catch{}finally{}};function uE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function lE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=lA(t,n),i==Yu){e==4&&(t.o=4,Ct(14),r=!1),Ri(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Qd){t.o=4,Ct(15),Ri(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ri(t.j,t.m,i,null),Yd(t,i);uE(t)&&i!=Yu&&i!=Qd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xp(e),e.L=!0,Ct(11))):(Ri(t.j,t.m,n,"[Invalid Chunked Response]"),Mr(t),no(t))}M.fb=function(){if(this.g){var t=An(this.g),e=this.g.ga();this.C<e.length&&(tc(this),lE(this,t,e),this.i&&t!=4&&aa(this))}};function lA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Yu:(n=Number(e.substring(n,r)),isNaN(n)?Qd:(r+=1,r+n>e.length?Yu:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,Mr(this)};function aa(t){t.Y=Date.now()+t.P,cE(t,t.P)}function cE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ia(it(t.eb,t),e)}function tc(t){t.B&&(q.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oA(this.j,this.A),this.K!=2&&(Do(),Ct(17)),Mr(this),this.o=2,no(this)):cE(this,this.Y-t)};function no(t){t.l.G==0||t.I||DE(t.l,t)}function Mr(t){tc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Mp(t.W),eE(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jd(n.i,t))){if(n.I=t.N,!t.J&&Jd(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)tl(n),sc(n);else break e;Qp(n),Ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ia(it(n.ab,n),6e3));if(1>=yE(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Fr(n,11)}else if((t.J||n.g==t)&&tl(n),!Qu(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Et(g,"spdy")||Et(g,"quic")||Et(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Hp(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,_e(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=OE(r,r.H?r.la:null,r.W),o.J){vE(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(tc(a),aa(a)),r.g=o}else AE(r);0<n.l.length&&oc(n)}else l[0]!="stop"&&l[0]!="close"||Fr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Fr(n,7):Gp(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Do(4)}catch{}}function cA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Vd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function jp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vd(t)||typeof t=="string")Uw(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Vd(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=cA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function gs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof gs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}M=gs.prototype;M.R=function(){zp(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return zp(this),this.g.concat()};function zp(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ni(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ni(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}M.get=function(t,e){return ni(this.h,t)?this.h[t]:e};M.set=function(t,e){ni(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ni(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var hE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ri(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ri){this.g=e!==void 0?e:t.g,Ju(this,t.j),this.s=t.s,Zu(this,t.i),el(this,t.m),this.l=t.l,e=t.h;var n=new Ro;n.i=e.i,e.g&&(n.g=new gs(e.g),n.h=e.h),Ly(this,n),this.o=t.o}else t&&(n=String(t).match(hE))?(this.g=!!e,Ju(this,n[1]||"",!0),this.s=ro(n[2]||""),Zu(this,n[3]||"",!0),el(this,n[4]),this.l=ro(n[5]||"",!0),Ly(this,n[6]||"",!0),this.o=ro(n[7]||"")):(this.g=!!e,this.h=new Ro(null,this.g))}ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,My,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,My,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?gA:mA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,vA)),t.join("")};function Mn(t){return new ri(t)}function Ju(t,e,n){t.j=n?ro(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zu(t,e,n){t.i=n?ro(e,!0):e}function el(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ly(t,e,n){e instanceof Ro?(t.h=e,wA(t.h,t.g)):(n||(e=js(e,yA)),t.h=new Ro(e,t.g))}function _e(t,e,n){t.h.set(e,n)}function nc(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function dA(t){return t instanceof ri?Mn(t):new ri(t,void 0)}function fA(t,e,n,r){var i=new ri(null,void 0);return t&&Ju(i,t),e&&Zu(i,e),n&&el(i,n),r&&(i.l=r),i}function ro(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var My=/[#\/\?@]/g,mA=/[#\?:]/g,gA=/[#\?]/g,yA=/[#\?@]/g,vA=/#/g;function Ro(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ar(t){t.g||(t.g=new gs,t.h=0,t.i&&hA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ro.prototype;M.add=function(t,e){Ar(this),this.i=null,t=ys(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dE(t,e){Ar(t),e=ys(t,e),ni(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ni(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&zp(t)))}function fE(t,e){return Ar(t),e=ys(t,e),ni(t.g.h,e)}M.forEach=function(t,e){Ar(this),this.g.forEach(function(n,r){Uw(n,function(i){t.call(e,i,r,this)},this)},this)};M.T=function(){Ar(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};M.R=function(t){Ar(this);var e=[];if(typeof t=="string")fE(this,t)&&(e=xy(e,this.g.get(ys(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=xy(e,t[n])}return e};M.set=function(t,e){return Ar(this),this.i=null,t=ys(this,t),fE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function pE(t,e,n){dE(t,e),0<n.length&&(t.i=null,t.g.set(ys(t,e),Ap(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ys(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wA(t,e){e&&!t.j&&(Ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(dE(this,r),pE(this,i,n))},t)),t.j=e}var EA=class{constructor(t,e){this.h=t,this.g=e}};function mE(t){this.l=t||SA,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ea&&q.g.Ea()&&q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SA=10;function gE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yE(t){return t.h?1:t.g?t.g.size:0}function Jd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hp(t,e){t.g?t.g.add(e):t.h=e}function vE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mE.prototype.cancel=function(){if(this.i=wE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ap(t.i)}function Wp(){}Wp.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Wp.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function CA(){this.g=new Wp}function _A(t,e,n){const r=n||"";try{jp(t,function(i,s){let o=i;na(i)&&(o=bp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function IA(t,e){const n=new Yl;if(q.Image){const r=new Image;r.onload=Ka(Ga,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ka(Ga,n,r,"TestLoadImage: error",!1,e),r.onabort=Ka(Ga,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ka(Ga,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ga(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ua(t){this.l=t.$b||null,this.j=t.ib||!1}ut(ua,Up);ua.prototype.g=function(){return new rc(this.l,this.j)};ua.prototype.i=function(t){return function(){return t}}({});function rc(t,e){Qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Kp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(rc,Qe);var Kp=0;M=rc.prototype;M.open=function(t,e){if(this.readyState!=Kp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Po(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,la(this)),this.readyState=Kp};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Po(this)),this.g&&(this.readyState=3,Po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;EE(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function EE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?la(this):Po(this),this.readyState==3&&EE(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,la(this))};M.Ta=function(t){this.g&&(this.response=t,la(this))};M.ha=function(){this.g&&la(this)};function la(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Po(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kA=q.JSON.parse;function Fe(t){Qe.call(this),this.headers=new gs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=SE,this.K=this.L=!1}ut(Fe,Qe);var SE="",TA=/^https?$/i,xA=["POST","PUT"];M=Fe.prototype;M.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gd.g(),this.C=this.u?by(this.u):by(Gd),this.g.onreadystatechange=it(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Fy(this,s);return}t=n||"";const i=new gs(this.headers);r&&jp(r,function(s,o){i.set(o,s)}),r=Fx(i.T()),n=q.FormData&&t instanceof q.FormData,!(0<=Fw(xA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{IE(this),0<this.B&&((this.K=AA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.pa,this)):this.A=Fp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Fy(this,s)}};function AA(t){return ns&&zx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function NA(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof xp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Fy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,CE(t),ic(t)}function CE(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),ic(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ic(this,!0)),Fe.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?_E(this):this.cb())};M.cb=function(){_E(this)};function _E(t){if(t.h&&typeof xp<"u"&&(!t.C[1]||An(t)!=4||t.ba()!=2)){if(t.v&&An(t)==4)Fp(t.Fa,0,t);else if(st(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(hE)[1]||null;if(!i&&q.self&&q.self.location){var s=q.self.location.protocol;i=s.substr(0,s.length-1)}r=!TA.test(i?i.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",CE(t)}}finally{ic(t)}}}}function ic(t,e){if(t.g){IE(t);const n=t.g,r=t.C[0]?Gu:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function IE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kA(e)}};function Uy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case SE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function DA(t){let e="";return Np(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=DA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kE(t){this.za=0,this.l=[],this.h=new Yl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=bs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=bs("baseRetryDelayMs",5e3,t),this.$a=bs("retryDelaySeedMs",1e4,t),this.Ya=bs("forwardChannelMaxRetries",2,t),this.ra=bs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new mE(t&&t.concurrentRequestLimit),this.Ca=new CA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=kE.prototype;M.ma=8;M.G=1;function Gp(t){if(TE(t),t.G==3){var e=t.V++,n=Mn(t.F);_e(n,"SID",t.J),_e(n,"RID",e),_e(n,"TYPE","terminate"),ca(t,n),e=new oa(t,t.h,e,void 0),e.K=2,e.v=nc(Mn(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=$E(e.l,null),e.g.ea(e.v)),e.F=Date.now(),aa(e)}PE(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function sc(t){t.g&&(Xp(t),t.g.cancel(),t.g=null)}function TE(t){sc(t),t.u&&(q.clearTimeout(t.u),t.u=null),tl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Th(t,e){t.l.push(new EA(t.Za++,e)),t.G==3&&oc(t)}function oc(t){gE(t.i)||t.m||(t.m=!0,Lp(t.Ha,t),t.C=0)}function RA(t,e){return yE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ia(it(t.Ha,t,e),RE(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new oa(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Bw(s),Vw(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xE(this,i,e),n=Mn(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),ca(this,n),this.o&&s&&qp(n,this.o,s),Hp(this.i,i),this.Ra&&_e(n,"TYPE","init"),this.ja?(_e(n,"$req",e),_e(n,"SID","null"),i.$=!0,Xd(i,n,null)):Xd(i,n,e),this.G=2}}else this.G==3&&(t?By(this,t):this.l.length==0||gE(this.i)||By(this))};function By(t,e){var n;e?n=e.m:n=t.V++;const r=Mn(t.F);_e(r,"SID",t.J),_e(r,"RID",n),_e(r,"AID",t.U),ca(t,r),t.o&&t.s&&qp(r,t.o,t.s),n=new oa(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=xE(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Hp(t.i,n),Xd(n,r,e)}function ca(t,e){t.j&&jp({},function(n,r){_e(e,r,n)})}function xE(t,e,n){n=Math.min(t.l.length,n);var r=t.j?it(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{_A(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function AE(t){t.g||t.u||(t.Y=1,Lp(t.Ga,t),t.A=0)}function Qp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ia(it(t.Ga,t),RE(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,NE(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ia(it(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ct(10),sc(this),NE(this))};function Xp(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function NE(t){t.g=new oa(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Mn(t.oa);_e(e,"RID","rpc"),_e(e,"SID",t.J),_e(e,"CI",t.N?"0":"1"),_e(e,"AID",t.U),ca(t,e),_e(e,"TYPE","xmlhttp"),t.o&&t.s&&qp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=nc(Mn(e)),n.s=null,n.U=!0,aE(n,t)}M.ab=function(){this.v!=null&&(this.v=null,sc(this),Qp(this),Ct(19))};function tl(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function DE(t,e){var n=null;if(t.g==e){tl(t),Xp(t),t.g=null;var r=2}else if(Jd(t.i,e))n=e.D,vE(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Jl(),st(r,new rE(r,n)),oc(t)}else AE(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&RA(t,e)||r==2&&Qp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Fr(t,5);break;case 4:Fr(t,10);break;case 3:Fr(t,6);break;default:Fr(t,2)}}}function RE(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Fr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=it(t.jb,t);n||(n=new ri("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Ju(n,"https"),nc(n)),IA(n.toString(),r)}else Ct(2);t.G=0,t.j&&t.j.va(e),PE(t),TE(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ct(2)):(this.h.info("Failed to ping google.com"),Ct(1))};function PE(t){t.G=0,t.I=-1,t.j&&((wE(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ap(t.l),t.l.length=0),t.j.ua())}function OE(t,e,n){let r=dA(n);if(r.i!="")e&&Zu(r,e+"."+r.i),el(r,r.m);else{const i=q.location;r=fA(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Np(t.aa,function(i,s){_e(r,s,i)}),e=t.D,n=t.sa,e&&n&&_e(r,e,n),_e(r,"VER",t.ma),ca(t,r),r}function $E(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fe(new ua({ib:!0})):new Fe(t.qa),e.L=t.H,e}function bE(){}M=bE.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function nl(){if(ns&&!(10<=Number(Hx)))throw Error("Environmental error: no available transport.")}nl.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){Qe.call(this),this.g=new kE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Qu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}ut(Bt,Qe);Bt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Lp(it(t.hb,t,e))),Ct(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=OE(t,null,t.W),oc(t)};Bt.prototype.close=function(){Gp(this.g)};Bt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Th(this.g,e)}else this.v?(e={},e.__data__=bp(t),Th(this.g,e)):Th(this.g,t)};Bt.prototype.M=function(){this.g.j=null,delete this.j,Gp(this.g),delete this.g,Bt.Z.M.call(this)};function LE(t){Bp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(LE,Bp);function ME(){Vp.call(this),this.status=1}ut(ME,Vp);function vs(t){this.g=t}ut(vs,bE);vs.prototype.xa=function(){st(this.g,"a")};vs.prototype.wa=function(t){st(this.g,new LE(t))};vs.prototype.va=function(t){st(this.g,new ME)};vs.prototype.ua=function(){st(this.g,"b")};nl.prototype.createWebChannel=nl.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Zl.NO_ERROR=0;Zl.TIMEOUT=8;Zl.HTTP_ERROR=6;iE.COMPLETE="complete";sE.EventType=sa;sa.OPEN="a";sa.CLOSE="b";sa.ERROR="c";sa.MESSAGE="d";Qe.prototype.listen=Qe.prototype.N;Fe.prototype.listenOnce=Fe.prototype.O;Fe.prototype.getLastError=Fe.prototype.La;Fe.prototype.getLastErrorCode=Fe.prototype.Da;Fe.prototype.getStatus=Fe.prototype.ba;Fe.prototype.getResponseJson=Fe.prototype.Qa;Fe.prototype.getResponseText=Fe.prototype.ga;Fe.prototype.send=Fe.prototype.ea;var PA=function(){return new nl},OA=function(){return Jl()},xh=Zl,$A=iE,bA=hi,Vy={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},LA=ua,Qa=sE,MA=Fe;const jy="@firebase/firestore";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let ws="9.9.2";/**
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
 */const ii=new Ip("@firebase/firestore");function zy(){return ii.logLevel}function V(t,...e){if(ii.logLevel<=oe.DEBUG){const n=e.map(Yp);ii.debug(`Firestore (${ws}): ${t}`,...n)}}function Fn(t,...e){if(ii.logLevel<=oe.ERROR){const n=e.map(Yp);ii.error(`Firestore (${ws}): ${t}`,...n)}}function Hy(t,...e){if(ii.logLevel<=oe.WARN){const n=e.map(Yp);ii.warn(`Firestore (${ws}): ${t}`,...n)}}function Yp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function ye(t,e){t||Q()}function X(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class FA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class BA{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new FA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new At(e)}}class VA{constructor(e,n,r){this.type="FirstParty",this.user=At.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class jA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new VA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.p=n.token,new zA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function WA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class FE{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ve(0,0))}static max(){return new J(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Oo{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const KA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Oo{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return KA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(we.fromString(e))}static fromName(e){return new j(we.fromString(e).popFirst(5))}static empty(){return new j(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new we(e.slice()))}}function qA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new wr(i,j.empty(),e)}function GA(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(J.min(),j.empty(),-1)}static max(){return new wr(J.max(),j.empty(),-1)}}function QA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const XA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ha(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==XA)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function da(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Wy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Jp.ot=-1;class ze{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:tt.RED,this.left=i!=null?i:tt.EMPTY,this.right=s!=null?s:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new je(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new at(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const JA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(ye(!!t),typeof t=="string"){let e=0;const n=JA.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function BE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function VE(t){const e=t.mapValue.fields.__previous_value__;return BE(e)?VE(e):e}function $o(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class ZA{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ss&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ac(t){return t==null}function rl(t){return t===0&&1/t==-1/0}function eN(t){return typeof t=="number"&&Number.isInteger(t)&&!rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?BE(t)?4:tN(t)?9007199254740991:10:Q()}function wn(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $o(t).isEqual($o(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Er(r.timestampValue),o=Er(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return is(r.bytesValue).isEqual(is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),o=Le(i.doubleValue);return s===o?rl(s)===rl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Wy(s)!==Wy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!wn(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function bo(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Le(i.integerValue||i.doubleValue),a=Le(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return qy(t.timestampValue,e.timestampValue);case 4:return qy($o(t),$o(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=is(i),a=is(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=le(o[u],a[u]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(Le(i.latitude),Le(s.latitude));return o!==0?o:le(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=os(o[u],a[u]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ya.mapValue&&s===Ya.mapValue)return 0;if(i===Ya.mapValue)return 1;if(s===Ya.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=le(a[c],l[c]);if(h!==0)return h;const d=os(o[a[c]],u[l[c]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Er(t),r=Er(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Ui(t){return Zd(t)}function Zd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Er(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?is(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Zd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Zd(r.fields[a])}`;return s+"}"}(t.mapValue):Q();var e,n}function Gy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ef(t){return!!t&&"integerValue"in t}function Zp(t){return!!t&&"arrayValue"in t}function Qy(t){return!!t&&"nullValue"in t}function Xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function du(t){return!!t&&"mapValue"in t}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=io(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(io(this.value))}}function jE(t){const e=[];return di(t.fields,(n,r)=>{const i=new pt([n]);if(du(r)){const s=jE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
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
 */class nt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),Dt.empty(),0)}static newFoundDocument(e,n,r){return new nt(e,1,n,J.min(),r,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Yy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nN(t,e,n,r,i,s,o)}function em(t){const e=X(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ut=n}return e.ut}function rN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ui(r.value)}`;var r}).join(", ")}]`),ac(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ui(n)).join(",")),`Target(${e})`}function tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!hN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!wn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zy(t.startAt,e.startAt)&&Zy(t.endAt,e.endAt)}function tf(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class _t extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new iN(e,n,r):n==="array-contains"?new aN(e,r):n==="in"?new uN(e,r):n==="not-in"?new lN(e,r):n==="array-contains-any"?new cN(e,r):new _t(e,n,r)}static ct(e,n,r){return n==="in"?new sN(e,r):new oN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(os(n,this.value)):n!==null&&si(this.value)===si(n)&&this.at(os(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class iN extends _t{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.at(n)}}class sN extends _t{constructor(e,n){super(e,"in",n),this.keys=zE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oN extends _t{constructor(e,n){super(e,"not-in",n),this.keys=zE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class aN extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zp(n)&&bo(n.arrayValue,this.value)}}class uN extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bo(this.value.arrayValue,n)}}class lN extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bo(this.value.arrayValue,n)}}class cN extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bo(this.value.arrayValue,r))}}class il{constructor(e,n){this.position=e,this.inclusive=n}}class Bi{constructor(e,n="asc"){this.field=e,this.dir=n}}function hN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Jy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Es{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function dN(t,e,n,r,i,s,o,a){return new Es(t,e,n,r,i,s,o,a)}function nm(t){return new Es(t)}function ev(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function im(t){for(const e of t.filters)if(e.ht())return e.field;return null}function HE(t){return t.collectionGroup!==null}function Lo(t){const e=X(t);if(e.lt===null){e.lt=[];const n=im(e),r=rm(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Bi(n)),e.lt.push(new Bi(pt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Bi(pt.keyField(),s))}}}return e.lt}function Un(t){const e=X(t);if(!e.ft)if(e.limitType==="F")e.ft=Yy(e.path,e.collectionGroup,Lo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Lo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Bi(s.field,o))}const r=e.endAt?new il(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new il(e.startAt.position,e.startAt.inclusive):null;e.ft=Yy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function sl(t,e,n){return new Es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return tm(Un(t),Un(e))&&t.limitType===e.limitType}function WE(t){return`${em(Un(t))}|lt:${t.limitType}`}function nf(t){return`Query(target=${rN(Un(t))}; limitType=${t.limitType})`}function sm(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Lo(n),r)||n.endAt&&!function(i,s,o){const a=Jy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Lo(n),r))}(t,e)}function fN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function KE(t){return(e,n)=>{let r=!1;for(const i of Lo(t)){const s=pN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function pN(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?os(a,u):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */function qE(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rl(e)?"-0":e}}function GE(t){return{integerValue:""+t}}function mN(t,e){return eN(e)?GE(e):qE(t,e)}/**
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
 */class lc{constructor(){this._=void 0}}function gN(t,e,n){return t instanceof ol?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Mo?XE(t,e):t instanceof Fo?YE(t,e):function(r,i){const s=QE(r,i),o=tv(s)+tv(r._t);return ef(s)&&ef(r._t)?GE(o):qE(r.wt,o)}(t,e)}function yN(t,e,n){return t instanceof Mo?XE(t,e):t instanceof Fo?YE(t,e):n}function QE(t,e){return t instanceof al?ef(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ol extends lc{}class Mo extends lc{constructor(e){super(),this.elements=e}}function XE(t,e){const n=JE(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends lc{constructor(e){super(),this.elements=e}}function YE(t,e){let n=JE(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class al extends lc{constructor(e,n){super(),this.wt=e,this._t=n}}function tv(t){return Le(t.integerValue||t.doubleValue)}function JE(t){return Zp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Mo&&r instanceof Mo||n instanceof Fo&&r instanceof Fo?rs(n.elements,r.elements,wn):n instanceof al&&r instanceof al?wn(n._t,r._t):n instanceof ol&&r instanceof ol}(t.transform,e.transform)}class wN{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function ZE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,ln.none()):new fa(t.key,t.data,ln.none());{const n=t.data,r=Dt.empty();let i=new je(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new Qt(i.toArray()),ln.none())}}function EN(t,e,n){t instanceof fa?function(r,i,s){const o=r.value.clone(),a=rv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(r,i,s){if(!fu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=rv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(eS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function so(t,e,n,r){return t instanceof fa?function(i,s,o,a){if(!fu(i.precondition,s))return o;const u=i.value.clone(),l=iv(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,s,o,a){if(!fu(i.precondition,s))return o;const u=iv(i.fieldTransforms,a,s),l=s.data;return l.setAll(eS(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return fu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function SN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=QE(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function nv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&rs(n,r,(i,s)=>vN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fa extends cc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends cc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rv(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yN(o,a,n[i]))}return r}function iv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gN(s,o,e))}return r}class om extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CN extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _N{constructor(e){this.count=e}}/**
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
 */var be,ne;function IN(t){switch(t){default:return Q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function tS(t){if(t===void 0)return Fn("GRPC error has no .code"),I.UNKNOWN;switch(t){case be.OK:return I.OK;case be.CANCELLED:return I.CANCELLED;case be.UNKNOWN:return I.UNKNOWN;case be.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case be.INTERNAL:return I.INTERNAL;case be.UNAVAILABLE:return I.UNAVAILABLE;case be.UNAUTHENTICATED:return I.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case be.NOT_FOUND:return I.NOT_FOUND;case be.ALREADY_EXISTS:return I.ALREADY_EXISTS;case be.PERMISSION_DENIED:return I.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case be.ABORTED:return I.ABORTED;case be.OUT_OF_RANGE:return I.OUT_OF_RANGE;case be.UNIMPLEMENTED:return I.UNIMPLEMENTED;case be.DATA_LOSS:return I.DATA_LOSS;default:return Q()}}(ne=be||(be={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return UE(this.inner)}size(){return this.innerSize}}/**
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
 */const kN=new ze(j.comparator);function Bn(){return kN}const nS=new ze(j.comparator);function zs(...t){let e=nS;for(const n of t)e=e.insert(n.key,n);return e}function rS(t){let e=nS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return oo()}function iS(){return oo()}function oo(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const TN=new ze(j.comparator),xN=new je(j.comparator);function Z(...t){let e=xN;for(const n of t)e=e.add(n);return e}const AN=new je(le);function sS(){return AN}/**
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
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,pa.createSynthesizedTargetChangeForCurrentChange(e,n)),new hc(J.min(),r,sS(),Bn(),Z())}}class pa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new pa(at.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
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
 */class pu{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class oS{constructor(e,n){this.targetId=e,this.It=n}}class aS{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sv{constructor(){this.Tt=0,this.Et=av(),this.At=at.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Z(),n=Z(),r=Z();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new pa(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=av()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class NN{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Bn(),this.Bt=ov(),this.Lt=new je(le)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(tf(s))if(r===0){const o=new j(s.path);this.Kt(n,o,nt.newNoDocument(o,J.min()))}else ye(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&tf(a.target)){const u=new j(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,nt.newNoDocument(u,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=Z();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ht(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.Lt,this.$t,r);return this.$t=Bn(),this.Bt=ov(),this.Lt=new je(le),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new sv,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new je(le),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new sv),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function ov(){return new ze(j.comparator)}function av(){return new ze(j.comparator)}/**
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
 */const DN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),RN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class PN{constructor(e,n){this.databaseId=e,this.dt=n}}function ul(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uS(t,e){return t.dt?e.toBase64():e.toUint8Array()}function ON(t,e){return ul(t,e.toTimestamp())}function Pn(t){return ye(!!t),J.fromTimestamp(function(e){const n=Er(e);return new Ve(n.seconds,n.nanos)}(t))}function am(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function lS(t){const e=we.fromString(t);return ye(dS(e)),e}function rf(t,e){return am(t.databaseId,e.path)}function Ah(t,e){const n=lS(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(cS(n))}function sf(t,e){return am(t.databaseId,e)}function $N(t){const e=lS(t);return e.length===4?we.emptyPath():cS(e)}function of(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cS(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uv(t,e,n){return{name:rf(t,e),fields:n.value.mapValue.fields}}function bN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.dt?(ye(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(ye(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?I.UNKNOWN:tS(u.code);return new F(l,u.message||"")}(o);n=new aS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ah(t,r.document.name),s=Pn(r.document.updateTime),o=new Dt({mapValue:{fields:r.document.fields}}),a=nt.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new pu(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ah(t,r.document),s=r.readTime?Pn(r.readTime):J.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ah(t,r.document),s=r.removedTargetIds||[];n=new pu([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new _N(i),o=r.targetId;n=new oS(o,s)}}return n}function LN(t,e){let n;if(e instanceof fa)n={update:uv(t,e.key,e.value)};else if(e instanceof om)n={delete:rf(t,e.key)};else if(e instanceof Nr)n={update:uv(t,e.key,e.data),updateMask:KN(e.fieldMask)};else{if(!(e instanceof CN))return Q();n={verify:rf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ol)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof al)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ON(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function MN(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Pn(r.updateTime):Pn(i);return s.isEqual(J.min())&&(s=Pn(i)),new wN(s,r.transformResults||[])}(n,e))):[]}function FN(t,e){return{documents:[sf(t,e.path)]}}function UN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=sf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(Xy(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NAN"}};if(Qy(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Xy(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NOT_NAN"}};if(Qy(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(h.field),op:zN(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:yi(c.field),direction:jN(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.dt||ac(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function BN(t){let e=$N(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=hS(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Bi(Pi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ac(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new il(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new il(d,h)}(n.endAt)),dN(e,i,o,s,a,"F",u,l)}function VN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function hS(t){return t?t.unaryFilter!==void 0?[WN(t)]:t.fieldFilter!==void 0?[HN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>hS(e)).reduce((e,n)=>e.concat(n)):Q():[]}function jN(t){return DN[t]}function zN(t){return RN[t]}function yi(t){return{fieldPath:t.canonicalString()}}function Pi(t){return pt.fromServerFormat(t.fieldPath)}function HN(t){return _t.create(Pi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function WN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pi(t.unaryFilter.field);return _t.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Pi(t.unaryFilter.field);return _t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pi(t.unaryFilter.field);return _t.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pi(t.unaryFilter.field);return _t.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function KN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&EN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=so(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=so(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=ZE(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>nv(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>nv(n,r))}}class um{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=TN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new um(e,n,r,i)}}/**
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
 */class GN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class QN{constructor(e){this.ne=e}}function XN(t){const e=BN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sl(e,e.limit,"L"):e}/**
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
 */class YN{constructor(){this.ze=new JN}addToCollectionParentIndex(e,n){return this.ze.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(wr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class JN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(we.comparator)).toArray()}}/**
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
 */class as{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new as(0)}static Rn(){return new as(-1)}}/**
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
 */class ZN{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&so(r.mutation,i,Qt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zs();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=oo(),a=oo();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Nr)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),so(c.mutation,l,c.mutation.getFieldMask(),Ve.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new eD(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=oo();let i=new ze((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Qt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=iS();c.forEach(d=>{if(!s.has(d)){const p=ZE(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Ur());let a=-1,u=s;return o.next(l=>A.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,Z())).next(c=>({batchId:a,changes:rS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=zs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zs();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const u=function(l,c){return new Es(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,nt.newInvalidDocument(l)))});let o=zs();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&so(l.mutation,u,Qt.empty(),Ve.now()),sm(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(nt.newInvalidDocument(n))}}/**
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
 */class nD{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return A.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Pn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:XN(r.bundledQuery),readTime:Pn(r.readTime)}}(n)),A.resolve()}}/**
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
 */class rD{constructor(){this.overlays=new ze(j.comparator),this.Xn=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Ur(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Ur(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Ur(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return A.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GN(n,r));let s=this.Xn.get(n);s===void 0&&(s=Z(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class lm{constructor(){this.Zn=new je(We.ts),this.es=new je(We.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new We(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new We(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new j(new we([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new we([])),r=new We(n,e),i=new We(n,e+1);let s=Z();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||le(e.ls,n.ls)}static ns(e,n){return le(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
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
 */class iD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new je(We.ts)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(le);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),A.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new We(new j(s),0);let a=new je(le);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),A.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return A.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new We(n,0),i=this.ds.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sD{constructor(e){this.ps=e,this.docs=new ze(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=Bn();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||QA(GA(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Q()}Is(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oD(this)}getSize(e){return A.resolve(this.size)}}class oD extends ZN{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class aD{constructor(e){this.persistence=e,this.Ts=new Ss(n=>em(n),tm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Es=0,this.As=new lm,this.targetCount=0,this.Rs=as.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),A.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.vn(n),A.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.As.containsKey(n))}}/**
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
 */class uD{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Jp(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new aD(this),this.indexManager=new YN,this.remoteDocumentCache=function(r){return new sD(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new QN(n),this.Ds=new nD(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new iD(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new lD(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return A.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class lD extends YA{constructor(e){super(),this.currentSequenceNumber=e}}class cm{constructor(e){this.persistence=e,this.ks=new lm,this.Ms=null}static Os(e){return new cm(e)}get Fs(){if(this.Ms)return this.Ms;throw Q()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),A.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Fs,r=>{const i=j.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return A.or([()=>A.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class hm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hm(e,n.fromCache,r,i)}}/**
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
 */class cD{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(ev(n))return A.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sl(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.ki(n,a);return this.Mi(n,l,o,u.readTime)?this.Ci(e,sl(n,null,"F")):this.Oi(e,l,n,u)}))})))}xi(e,n,r,i){return ev(n)||i.isEqual(J.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(zy()<=oe.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nf(n)),this.Oi(e,o,n,qA(i,-1)))})}ki(e,n){let r=new je(KE(e));return n.forEach((i,s)=>{sm(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return zy()<=oe.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",nf(n)),this.Di.getDocumentsMatchingQuery(e,n,wr.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class hD{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new ze(le),this.Bi=new Ss(s=>em(s),tm),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tD(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function dD(t,e,n,r){return new hD(t,e,n,r)}async function fS(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function fD(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const v=u.docVersions.get(p);ye(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pS(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function pD(t,e){const n=X(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(at.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,v,w){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,c)&&a.push(n.Vs.updateTargetData(s,p))});let u=Bn(),l=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mD(s,o,e.documentUpdates).next(c=>{u=c.Gi,l=c.Qi})),!r.isEqual(J.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.$i=i,s))}function mD(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Gi:o,Qi:i}})}function gD(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yD(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Wr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function af(t,e,n){const r=X(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!da(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function lv(t,e,n){const r=X(t);let i=J.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=X(a),h=c.Bi.get(l);return h!==void 0?A.resolve(c.$i.get(h)):c.Vs.getTargetData(u,l)}(r,o,Un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:Z())).next(a=>(vD(r,fN(e),a),{documents:a,ji:s})))}function vD(t,e,n){let r=J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class cv{constructor(){this.activeTargetIds=sS()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wD{constructor(){this.Fr=new cv,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ED{Br(e){}shutdown(){}}/**
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
 */class hv{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const SD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class CD{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class _D extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(u=>(V("RestConnection","Received: ",u),u),u=>{throw Hy("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=SD[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new MA;a.listenOnce($A.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xh.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),s(l);break;case xh.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case xh.HTTP_ERROR:const c=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(h.status);o(new F(d,h.message))}else o(new F(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(I.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=PA(),o=OA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new LA({})),this.uo(a.initMessageHeaders,n,r),Aw()||Dw()||mT()||Rw()||gT()||Nw()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");V("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new CD({jr:g=>{h?V("Connection","Not sending because WebChannel is closed:",g):(c||(V("Connection","Opening WebChannel transport."),l.open(),c=!0),V("Connection","WebChannel sending:",g),l.send(g))},Wr:()=>l.close()}),p=(g,v,w)=>{g.listen(v,m=>{try{w(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,Qa.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(l,Qa.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.eo())}),p(l,Qa.EventType.ERROR,g=>{h||(h=!0,Hy("Connection","WebChannel transport errored:",g),d.eo(new F(I.UNAVAILABLE,"The operation could not be completed")))}),p(l,Qa.EventType.MESSAGE,g=>{var v;if(!h){const w=g.data[0];ye(!!w);const m=w,f=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(f){V("Connection","WebChannel received error:",f);const y=f.status;let S=function(D){const _=be[D];if(_!==void 0)return tS(_)}(y),k=f.message;S===void 0&&(S=I.INTERNAL,k="Unknown error status: "+y+" with message "+f.message),h=!0,d.eo(new F(S,k)),l.close()}else V("Connection","WebChannel received:",w),d.no(w)}}),p(o,bA.STAT_EVENT,g=>{g.stat===Vy.PROXY?V("Connection","Detected buffering proxy"):g.stat===Vy.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Nh(){return typeof document<"u"?document:null}/**
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
 */function dc(t){return new PN(t,!0)}class mS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class gS{constructor(e,n,r,i,s,o,a,u){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new mS(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new F(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ID extends gS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=bN(this.wt,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Pn(s.readTime):J.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=of(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=tf(a)?{documents:FN(i,a)}:{query:UN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=uS(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=ul(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=VN(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=of(this.wt),n.removeTarget=e,this.Oo(n)}}class kD extends gS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=MN(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.Jo(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=of(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>LN(this.wt,r))};this.Oo(n)}}/**
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
 */class TD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(I.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class xD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Fn(n),this.su=!1):V("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class AD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{fi(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=X(a);u.lu.add(4),await ma(u),u._u.set("Unknown"),u.lu.delete(4),await fc(u)}(this))})}),this._u=new xD(r,i)}}async function fc(t){if(fi(t))for(const e of t.fu)await e(!0)}async function ma(t){for(const e of t.fu)await e(!1)}function yS(t,e){const n=X(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),pm(n)?fm(n):Cs(n).Co()&&dm(n,e))}function vS(t,e){const n=X(t),r=Cs(n);n.hu.delete(e),r.Co()&&wS(n,e),n.hu.size===0&&(r.Co()?r.ko():fi(n)&&n._u.set("Unknown"))}function dm(t,e){t.wu.Nt(e.targetId),Cs(t).Qo(e)}function wS(t,e){t.wu.Nt(e),Cs(t).jo(e)}function fm(t){t.wu=new NN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Cs(t).start(),t._u.iu()}function pm(t){return fi(t)&&!Cs(t).Do()&&t.hu.size>0}function fi(t){return X(t).lu.size===0}function ES(t){t.wu=void 0}async function ND(t){t.hu.forEach((e,n)=>{dm(t,e)})}async function DD(t,e){ES(t),pm(t)?(t._u.uu(e),fm(t)):t._u.set("Unknown")}async function RD(t,e,n){if(t._u.set("Online"),e instanceof aS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ll(t,r)}else if(e instanceof pu?t.wu.Ut(e):e instanceof oS?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(J.min()))try{const r=await pS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(u);l&&i.hu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),wS(i,a);const l=new Wr(u.target,a,1,u.sequenceNumber);dm(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await ll(t,r)}}async function ll(t,e,n){if(!da(e))throw e;t.lu.add(1),await ma(t),t._u.set("Offline"),n||(n=()=>pS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await fc(t)})}function SS(t,e){return e().catch(n=>ll(t,n,e))}async function pc(t){const e=X(t),n=Sr(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;PD(e);)try{const i=await gD(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,OD(e,i)}catch(i){await ll(e,i)}CS(e)&&_S(e)}function PD(t){return fi(t)&&t.au.length<10}function OD(t,e){t.au.push(e);const n=Sr(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function CS(t){return fi(t)&&!Sr(t).Do()&&t.au.length>0}function _S(t){Sr(t).start()}async function $D(t){Sr(t).Xo()}async function bD(t){const e=Sr(t);for(const n of t.au)e.Ho(n.mutations)}async function LD(t,e,n){const r=t.au.shift(),i=um.from(r,e,n);await SS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pc(t)}async function MD(t,e){e&&Sr(t).zo&&await async function(n,r){if(i=r.code,IN(i)&&i!==I.ABORTED){const s=n.au.shift();Sr(n).No(),await SS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await pc(n)}var i}(t,e),CS(t)&&_S(t)}async function dv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.lu.add(3),await ma(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await fc(n)}async function FD(t,e){const n=X(t);e?(n.lu.delete(2),await fc(n)):e||(n.lu.add(2),await ma(n),n._u.set("Unknown"))}function Cs(t){return t.mu||(t.mu=function(e,n,r){const i=X(e);return i.tu(),new ID(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:ND.bind(null,t),Jr:DD.bind(null,t),Go:RD.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),pm(t)?fm(t):t._u.set("Unknown")):(await t.mu.stop(),ES(t))})),t.mu}function Sr(t){return t.gu||(t.gu=function(e,n,r){const i=X(e);return i.tu(),new kD(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:$D.bind(null,t),Jr:MD.bind(null,t),Yo:bD.bind(null,t),Jo:LD.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await pc(t)):(await t.gu.stop(),t.au.length>0&&(V("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class mm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new mm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gm(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),da(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class fv{constructor(){this.yu=new ze(j.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):Q():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new us(e,n,Vi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class UD{constructor(){this.Iu=void 0,this.listeners=[]}}class BD{constructor(){this.queries=new Ss(e=>WE(e),uc),this.onlineState="Unknown",this.Tu=new Set}}async function VD(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new UD),i)try{s.Iu=await n.onListen(r)}catch(o){const a=gm(o,`Initialization of query '${nf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&ym(n)}async function jD(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zD(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&ym(n)}function HD(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ym(t){t.Tu.forEach(e=>{e.next()})}class WD{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class IS{constructor(e){this.key=e}}class kS{constructor(e){this.key=e}}class KD{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Z(),this.mutatedKeys=Z(),this.Lu=KE(e),this.Uu=new Vi(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new fv,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=sm(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),w=!0):this.Qu(d,p)||(r.track({type:2,doc:p}),w=!0,(u&&this.Lu(p,u)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(u||l)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((l,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return p(h)-p(d)}(l.type,c.type)||this.Lu(l.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,s.length!==0||u?{snapshot:new us(this.query,e.Uu,i,s,e.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new fv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Z(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new kS(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new IS(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Z();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return us.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class qD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GD{constructor(e){this.key=e,this.Xu=!1}}class QD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Ss(a=>WE(a),uc),this.ec=new Map,this.nc=new Set,this.sc=new ze(j.comparator),this.ic=new Map,this.rc=new lm,this.oc={},this.uc=new Map,this.cc=as.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function XD(t,e){const n=oR(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await yD(n.localStore,Un(e));n.isPrimaryClient&&yS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await YD(n,e,r,a==="current")}return i}async function YD(t,e,n,r){t.hc=(c,h,d)=>async function(p,g,v,w){let m=g.view.Ku(v);m.Mi&&(m=await lv(p.localStore,g.query,!1).then(({documents:S})=>g.view.Ku(S,m)));const f=w&&w.targetChanges.get(g.targetId),y=g.view.applyChanges(m,p.isPrimaryClient,f);return mv(p,g.targetId,y.zu),y.snapshot}(t,c,h,d);const i=await lv(t.localStore,e,!0),s=new KD(e,i.ji),o=s.Ku(i.documents),a=pa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);mv(t,n,u.zu);const l=new qD(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),u.snapshot}async function JD(t,e){const n=X(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!uc(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await af(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vS(n.remoteStore,r.targetId),uf(n,r.targetId)}).catch(ha)):(uf(n,r.targetId),await af(n.localStore,r.targetId,!0))}async function ZD(t,e,n){const r=aR(t);try{const i=await function(s,o){const a=X(s),u=Ve.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Bn(),g=Z();return a.Ui.getEntries(d,l).next(v=>{p=v,p.forEach((w,m)=>{m.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const w=[];for(const m of o){const f=SN(m,c.get(m.key).overlayedDocument);f!=null&&w.push(new Nr(m.key,f,jE(f.value.mapValue),ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:rS(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.oc[s.currentUser.toKey()];u||(u=new ze(le)),u=u.insert(o,a),s.oc[s.currentUser.toKey()]=u}(r,i.batchId,n),await ga(r,i.changes),await pc(r.remoteStore)}catch(i){const s=gm(i,"Failed to persist write");n.reject(s)}}async function TS(t,e){const n=X(t);try{const r=await pD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ye(o.Xu):i.removedDocuments.size>0&&(ye(o.Xu),o.Xu=!1))}),await ga(n,r,e)}catch(r){await ha(r)}}function pv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Eu(o)&&(u=!0)}),u&&ym(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eR(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new ze(j.comparator);o=o.insert(s,nt.newNoDocument(s,J.min()));const a=Z().add(s),u=new hc(J.min(),new Map,new je(le),o,a);await TS(r,u),r.sc=r.sc.remove(s),r.ic.delete(e),vm(r)}else await af(r.localStore,e,!1).then(()=>uf(r,e,n)).catch(ha)}async function tR(t,e){const n=X(t),r=e.batch.batchId;try{const i=await fD(n.localStore,e);AS(n,r,null),xS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ga(n,i)}catch(i){await ha(i)}}async function nR(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(ye(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);AS(r,e,n),xS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ga(r,i)}catch(i){await ha(i)}}function xS(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function AS(t,e,n){const r=X(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||NS(t,r)})}function NS(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(vS(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),vm(t))}function mv(t,e,n){for(const r of n)r instanceof IS?(t.rc.addReference(r.key,e),rR(t,r)):r instanceof kS?(V("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||NS(t,r.key)):Q()}function rR(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.nc.add(r),vm(t))}function vm(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new j(we.fromString(e)),r=t.cc.next();t.ic.set(r,new GD(n)),t.sc=t.sc.insert(n,r),yS(t.remoteStore,new Wr(Un(nm(n.path)),r,2,Jp.ot))}}async function ga(t,e,n){const r=X(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,u)=>{o.push(r.hc(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=hm.Vi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,u){const l=X(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>A.forEach(u,h=>A.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>A.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!da(c))throw c;V("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.$i.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,g)}}}(r.localStore,s))}async function iR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await fS(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new F(I.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ga(n,r.Ki)}}function sR(t,e){const n=X(t),r=n.ic.get(e);if(r&&r.Xu)return Z().add(r.key);{let i=Z();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function oR(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eR.bind(null,e),e.Zu.Go=zD.bind(null,e.eventManager),e.Zu.lc=HD.bind(null,e.eventManager),e}function aR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nR.bind(null,e),e}class uR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=dc(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return dD(this.persistence,new cD,e.initialUser,this.wt)}_c(e){return new uD(cm.Os,this.wt)}dc(e){return new wD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iR.bind(null,this.syncEngine),await FD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BD}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new _D(i));var i;return function(s,o,a,u){return new TD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>pv(this.syncEngine,a,0),o=hv.V()?new hv:new ED,new AD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new QD(r,i,s,o,a,u);return l&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);V("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ma(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class cR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class hR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=FE.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dR(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function fR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pR(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>dv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>dv(e.remoteStore,s)),t.onlineComponents=e}async function pR(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await dR(t,new uR)),t.offlineComponents}async function DS(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await fR(t,new lR)),t.onlineComponents}function mR(t){return DS(t).then(e=>e.syncEngine)}async function gv(t){const e=await DS(t),n=e.eventManager;return n.onListen=XD.bind(null,e.syncEngine),n.onUnlisten=JD.bind(null,e.syncEngine),n}const yv=new Map;/**
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
 */function RS(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gR(t,e,n,r){if(e===!0&&r===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vv(t){if(!j.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wv(t){if(j.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mc(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function yR(t,e){if(e<=0)throw new F(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ev{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class wm{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ev({}),this._settingsFrozen=!1,e instanceof ss?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(i.options.projectId)}(e))}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ev(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new UA;switch(n.type){case"gapi":const r=n.client;return ye(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new jA(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=yv.get(e);n&&(V("ComponentProvider","Removing Datastore"),yv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pi(this.firestore,e,this._query)}}class mr extends pi{constructor(e,n,r){super(e,n,nm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new j(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Em(t,e,...n){if(t=yt(t),RS("collection","path",e),t instanceof wm){const r=we.fromString(e,...n);return wv(r),new mr(t,null,r)}{if(!(t instanceof bt||t instanceof mr))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return wv(r),new mr(t.firestore,null,r)}}function PS(t,e,...n){if(t=yt(t),arguments.length===1&&(e=FE.I()),RS("doc","path",e),t instanceof wm){const r=we.fromString(e,...n);return vv(r),new bt(t,null,new j(r))}{if(!(t instanceof bt||t instanceof mr))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return vv(r),new bt(t.firestore,t instanceof mr?t.converter:null,new j(r))}}/**
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
 */class vR{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new mS(this,"async_queue_retry"),this.Kc=()=>{const n=Nh();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Nh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Hr;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!da(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=mm.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&Q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Sv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ls extends wm{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new vR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||bS(this),this._firestoreClient.terminate()}}function OS(t=bw()){return Tp(t,"firestore").getImmediate()}function $S(t){return t._firestoreClient||bS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new ZA(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(at.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sm{constructor(e){this._methodName=e}}/**
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
 */class Cm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const wR=/^__.*__$/;class ER{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fa(e,this.data,n,this.fieldTransforms)}}class LS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class _m{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new _m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return cl(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(MS(this.Zc)&&wR.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class SR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||dc(e)}aa(e,n,r,i=!1){return new _m({Zc:e,methodName:n,ca:r,path:pt.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Im(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new SR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CR(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);km("Data must be an object, but it was:",o,r);const a=FS(r,o);let u,l;if(s.merge)u=new Qt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=lf(e,h,n);if(!o.contains(d))throw new F(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);BS(c,d)||c.push(d)}u=new Qt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new ER(new Dt(a),u,l)}class yc extends Sm{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function _R(t,e,n,r){const i=t.aa(1,e,n);km("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();di(r,(u,l)=>{const c=Tm(e,u,n);l=yt(l);const h=i.ia(c);if(l instanceof yc)s.push(c);else{const d=ya(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Qt(s);return new LS(o,a,i.fieldTransforms)}function IR(t,e,n,r,i,s){const o=t.aa(1,e,n),a=[lf(e,r,n)],u=[i];if(s.length%2!=0)throw new F(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(lf(e,s[d])),u.push(s[d+1]);const l=[],c=Dt.empty();for(let d=a.length-1;d>=0;--d)if(!BS(l,a[d])){const p=a[d];let g=u[d];g=yt(g);const v=o.ia(p);if(g instanceof yc)l.push(p);else{const w=ya(g,v);w!=null&&(l.push(p),c.set(p,w))}}const h=new Qt(l);return new LS(c,h,o.fieldTransforms)}function kR(t,e,n,r=!1){return ya(n,t.aa(r?4:3,e))}function ya(t,e){if(US(t=yt(t)))return km("Unsupported field value:",e,t),FS(t,e);if(t instanceof Sm)return function(n,r){if(!MS(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ya(o,r.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mN(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:ul(r.wt,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ul(r.wt,i)}}if(n instanceof Cm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof cs)return{bytesValue:uS(r.wt,n._byteString)};if(n instanceof bt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:am(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${mc(n)}`)}(t,e)}function FS(t,e){const n={};return UE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=ya(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function US(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Cm||t instanceof cs||t instanceof bt||t instanceof Sm)}function km(t,e,n){if(!US(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=mc(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function lf(t,e,n){if((e=yt(e))instanceof gc)return e._internalPath;if(typeof e=="string")return Tm(t,e);throw cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const TR=new RegExp("[~\\*/\\[\\]]");function Tm(t,e,n){if(e.search(TR)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new F(I.INVALID_ARGUMENT,a+t+u)}function BS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class VS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xR extends VS{data(){return super.data()}}function vc(t,e){return typeof e=="string"?Tm(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
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
 */class Hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jS extends VS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mu extends jS{data(e={}){return super.data(e)}}class AR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mu(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new mu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new mu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:NR(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function DR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{}function cf(t,...e){for(const n of e)t=n._apply(t);return t}class RR extends xm{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=Im(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){_v(c,l);const p=[];for(const g of c)p.push(Cv(a,i,g));h={arrayValue:{values:p}}}else h=Cv(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||_v(c,l),h=kR(o,s,c,l==="in"||l==="not-in");const d=_t.create(u,l,h);return function(p,g){if(g.ht()){const w=im(p);if(w!==null&&!w.isEqual(g.field))throw new F(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${g.field.toString()}'`);const m=rm(p);m!==null&&zS(p,g.field,m)}const v=function(w,m){for(const f of w.filters)if(m.indexOf(f.op)>=0)return f.op;return null}(p,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(v!==null)throw v===g.op?new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new pi(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Es(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function PR(t,e,n){const r=e,i=vc("where",t);return new RR(i,r,n)}class OR extends xm{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new F(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Bi(i,s);return function(a,u){if(rm(a)===null){const l=im(a);l!==null&&zS(a,l,u.field)}}(r,o),o}(e._query,this.fa,this.wa);return new pi(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Es(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function $R(t,e="asc"){const n=e,r=vc("orderBy",t);return new OR(r,n)}class bR extends xm{constructor(e,n,r){super(),this.type=e,this.ma=n,this.ga=r}_apply(e){return new pi(e.firestore,e.converter,sl(e._query,this.ma,this.ga))}}function LR(t){return yR("limit",t),new bR("limit",t,"F")}function Cv(t,e,n){if(typeof(n=yt(n))=="string"){if(n==="")throw new F(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HE(e)&&n.indexOf("/")!==-1)throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!j.isDocumentKey(r))throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gy(t,new j(r))}if(n instanceof bt)return Gy(t,n._key);throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(n)}.`)}function _v(t,e){if(!Array.isArray(t)||t.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function zS(t,e,n){if(!n.isEqual(e))throw new F(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class MR{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return di(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Cm(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=VE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($o(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);ye(dS(r));const i=new ss(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function FR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class HS extends MR{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function Iv(t,e,n,...r){t=Kr(t,bt);const i=Kr(t.firestore,ls),s=Im(i);let o;return o=typeof(e=yt(e))=="string"||e instanceof gc?IR(s,"updateDoc",t._key,e,n,r):_R(s,"updateDoc",t._key,e),Am(i,[o.toMutation(t._key,ln.exists(!0))])}function UR(t){return Am(Kr(t.firestore,ls),[new om(t._key,ln.none())])}function BR(t,e){const n=Kr(t.firestore,ls),r=PS(t),i=FR(t.converter,e);return Am(n,[CR(Im(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function WS(t,...e){var n,r,i;t=yt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Sv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Sv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof bt)l=Kr(t.firestore,ls),c=nm(t._key.path),u={next:h=>{e[o]&&e[o](VR(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Kr(t,pi);l=Kr(h.firestore,ls),c=h._query;const d=new HS(l);u={next:p=>{e[o]&&e[o](new AR(l,d,h,p))},error:e[o+1],complete:e[o+2]},DR(t._query)}return function(h,d,p,g){const v=new cR(g),w=new WD(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>VD(await gv(h),w)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>jD(await gv(h),w))}}($S(l),c,a,u)}function Am(t,e){return function(n,r){const i=new Hr;return n.asyncQueue.enqueueAndForget(async()=>ZD(await mR(n),r,i)),i.promise}($S(t),e)}function VR(t,e,n){const r=n.docs.get(e._key),i=new HS(t);return new jS(t,i,e._key,r,new Hs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ws=n})(ta),ts(new Zr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new ls(i,new BA(n.getProvider("auth-internal")),new HA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),pr(jy,"3.4.14",t),pr(jy,"3.4.14","esm2017")})();var jR="firebase",zR="9.9.2";/**
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
 */pr(jR,zR,"app");function Nm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function KS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HR=KS,qS=new Zo("auth","Firebase",KS());/**
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
 */const kv=new Ip("@firebase/auth");function gu(t,...e){kv.logLevel<=oe.ERROR&&kv.error(`Auth (${ta}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Dm(t,...e)}function gn(t,...e){return Dm(t,...e)}function GS(t,e,n){const r=Object.assign(Object.assign({},HR()),{[e]:n});return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function WR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),GS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qS.create(t,...e)}function K(t,e,...n){if(!t)throw Dm(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gu(e),new Error(e)}function Vn(t,e){t||Nn(e)}/**
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
 */const Tv=new Map;function Dn(t){Vn(t instanceof Function,"Expected a class definition");let e=Tv.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tv.set(t,e),e)}/**
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
 */function KR(t,e){const n=Tp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ku(s,e!=null?e:{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function qR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GR(){return xv()==="http:"||xv()==="https:"}function xv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function QR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GR()||Nw()||"connection"in navigator)?navigator.onLine:!0}function XR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Aw()||Dw()}get(){return QR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rm(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class QS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const JR=new va(3e4,6e4);function wa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ea(t,e,n,r,i={}){return XS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),QS.fetch()(YS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function XS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YR),e);try{const i=new ZR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ja(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw GS(t,c,l);Jt(t,c)}}catch(i){if(i instanceof Hn)throw i;Jt(t,"network-request-failed")}}async function Sa(t,e,n,r,i={}){const s=await Ea(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function YS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rm(t.config,i):`${t.config.apiScheme}://${i}`}class ZR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),JR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function e2(t,e){return Ea(t,"POST","/v1/accounts:delete",e)}async function t2(t,e){return Ea(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ao(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n2(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=Pm(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ao(Dh(i.auth_time)),issuedAtTime:ao(Dh(i.iat)),expirationTime:ao(Dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dh(t){return Number(t)*1e3}function Pm(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const s=fT(r);return s?JSON.parse(s):(gu("Failed to decode base64 JWT payload"),null)}catch(s){return gu("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function r2(t){const e=Pm(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&i2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function i2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class s2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class JS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,t2(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?u2(s.providerUserInfo):[],a=a2(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new JS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function o2(t){const e=yt(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function u2(t){return t.map(e=>{var{providerId:n}=e,r=Nm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function l2(t,e){const n=await XS(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=YS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):r2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bo;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function qn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new JS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n2(this,e)}reload(){return o2(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Uo(this,e2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:k,providerData:D,stsTokenManager:_}=n;K(y&&_,e,"internal-error");const C=Bo.fromJSON(this.name,_);K(typeof y=="string",e,"internal-error"),qn(h,e.name),qn(d,e.name),K(typeof S=="boolean",e,"internal-error"),K(typeof k=="boolean",e,"internal-error"),qn(p,e.name),qn(g,e.name),qn(v,e.name),qn(w,e.name),qn(m,e.name),qn(f,e.name);const U=new qr({uid:y,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:C,createdAt:m,lastLoginAt:f});return D&&Array.isArray(D)&&(U.providerData=D.map(B=>Object.assign({},B))),w&&(U._redirectEventId=w),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bo;i.updateFromServerResponse(n);const s=new qr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}}/**
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
 */class ZS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ZS.type="NONE";const Av=ZS;/**
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
 */function yu(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(Dn(Av),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Dn(Av);const o=yu(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=qr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ji(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function Nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iC(e))return"Blackberry";if(sC(e))return"Webos";if(Om(e))return"Safari";if((e.includes("chrome/")||tC(e))&&!e.includes("edge/"))return"Chrome";if(rC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eC(t=Ge()){return/firefox\//i.test(t)}function Om(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tC(t=Ge()){return/crios\//i.test(t)}function nC(t=Ge()){return/iemobile/i.test(t)}function rC(t=Ge()){return/android/i.test(t)}function iC(t=Ge()){return/blackberry/i.test(t)}function sC(t=Ge()){return/webos/i.test(t)}function wc(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c2(t=Ge()){var e;return wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h2(){return Rw()&&document.documentMode===10}function oC(t=Ge()){return wc(t)||rC(t)||sC(t)||iC(t)||/windows phone/i.test(t)||nC(t)}function d2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function aC(t,e=[]){let n;switch(t){case"Browser":n=Nv(Ge());break;case"Worker":n=`${Nv(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ta}/${r}`}/**
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
 */class f2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class p2{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dv(this),this.idTokenSubscription=new Dv(this),this.beforeStateQueue=new f2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await hl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ca(t){return yt(t)}class Dv{constructor(e){this.auth=e,this.observer=null,this.addObserver=_T(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class $m{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function m2(t,e){return Ea(t,"POST","/v1/accounts:update",e)}/**
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
 */async function g2(t,e){return Sa(t,"POST","/v1/accounts:signInWithPassword",wa(t,e))}/**
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
 */async function y2(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",wa(t,e))}async function v2(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",wa(t,e))}/**
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
 */class Vo extends $m{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return g2(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return y2(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return m2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return v2(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zi(t,e){return Sa(t,"POST","/v1/accounts:signInWithIdp",wa(t,e))}/**
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
 */const w2="http://localhost";class oi extends $m{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:w2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
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
 */function E2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S2(t){const e=Bs(Vs(t)).link,n=e?Bs(Vs(e)).deep_link_id:null,r=Bs(Vs(t)).deep_link_id;return(r?Bs(Vs(r)).link:null)||r||n||e||t}class bm{constructor(e){var n,r,i,s,o,a;const u=Bs(Vs(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=E2((i=u.mode)!==null&&i!==void 0?i:null);K(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=S2(e);try{return new bm(n)}catch{return null}}}/**
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
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return Vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bm.parseLink(n);return K(r,"argument-error"),Vo._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _a extends Lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends _a{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class In extends _a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class Zn extends _a{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends _a{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function C2(t,e){return Sa(t,"POST","/v1/accounts:signUp",wa(t,e))}/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qr._fromIdTokenResponse(e,r,i),o=Rv(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rv(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dl extends Hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dl(e,n,r,i)}}function uC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(t,s,e,r):s})}async function _2(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
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
 */async function I2(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Uo(t,uC(i,s,e,t),n);K(o.idToken,i,"internal-error");const a=Pm(o.idToken);K(a,i,"internal-error");const{sub:u}=a;return K(t.uid===u,i,"user-mismatch"),ai._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Jt(i,"user-mismatch"),o}}/**
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
 */async function lC(t,e,n=!1){const r="signIn",i=await uC(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function k2(t,e){return lC(Ca(t),e)}async function T2(t,e,n){const r=Ca(t),i=await C2(r,{returnSecureToken:!0,email:e,password:n}),s=await ai._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function x2(t,e,n){return k2(yt(t),_s.credential(e,n))}function Mm(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}const fl="__sak";/**
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
 */class cC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fl,"1"),this.storage.removeItem(fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function A2(){const t=Ge();return Om(t)||wc(t)}const N2=1e3,D2=10;class hC extends cC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=A2()&&d2(),this.fallbackToPolling=oC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);h2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,D2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},N2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hC.type="LOCAL";const R2=hC;/**
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
 */class dC extends cC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dC.type="SESSION";const fC=dC;/**
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
 */function P2(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await P2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ec.receivers=[];/**
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
 */function Fm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class O2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Fm("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function $2(t){yn().location.href=t}/**
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
 */function pC(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function b2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M2(){return pC()?self:null}/**
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
 */const mC="firebaseLocalStorageDb",F2=1,pl="firebaseLocalStorage",gC="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sc(t,e){return t.transaction([pl],e?"readwrite":"readonly").objectStore(pl)}function U2(){const t=indexedDB.deleteDatabase(mC);return new Ia(t).toPromise()}function df(){const t=indexedDB.open(mC,F2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pl,{keyPath:gC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pl)?e(r):(r.close(),await U2(),e(await df()))})})}async function Pv(t,e,n){const r=Sc(t,!0).put({[gC]:e,value:n});return new Ia(r).toPromise()}async function B2(t,e){const n=Sc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function Ov(t,e){const n=Sc(t,!0).delete(e);return new Ia(n).toPromise()}const V2=800,j2=3;class yC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>j2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ec._getInstance(M2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await b2(),!this.activeServiceWorker)return;this.sender=new O2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await df();return await Pv(e,fl,"1"),await Ov(e,fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>B2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ov(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sc(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yC.type="LOCAL";const z2=yC;/**
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
 */function H2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function W2(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",H2().appendChild(r)})}function K2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new va(3e4,6e4);/**
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
 */function vC(t,e){return e?Dn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Um extends $m{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function q2(t){return lC(t.auth,new Um(t),t.bypassAuthState)}function G2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),I2(n,new Um(t),t.bypassAuthState)}async function Q2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),_2(n,new Um(t),t.bypassAuthState)}/**
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
 */class wC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q2;case"linkViaPopup":case"linkViaRedirect":return Q2;case"reauthViaPopup":case"reauthViaRedirect":return G2;default:Jt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const X2=new va(2e3,1e4);async function Y2(t,e,n){const r=Ca(t);WR(t,e,Lm);const i=vC(r,n);return new Br(r,"signInViaPopup",e,i).executeNotNull()}class Br extends wC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Fm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,X2.get())};e()}}Br.currentPopupAction=null;/**
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
 */const J2="pendingRedirect",vu=new Map;class Z2 extends wC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vu.get(this.auth._key());if(!e){try{const r=await eP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vu.set(this.auth._key(),e)}return this.bypassAuthState||vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eP(t,e){const n=rP(e),r=nP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tP(t,e){vu.set(t._key(),e)}function nP(t){return Dn(t._redirectPersistence)}function rP(t){return yu(J2,t.config.apiKey,t.name)}async function iP(t,e,n=!1){const r=Ca(t),i=vC(r,e),o=await new Z2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sP=10*60*1e3;class oP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!EC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sP&&this.cachedEventUids.clear(),this.cachedEventUids.has($v(e))}saveEventToCache(e){this.cachedEventUids.add($v(e)),this.lastProcessedEventTime=Date.now()}}function $v(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EC(t);default:return!1}}/**
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
 */async function uP(t,e={}){return Ea(t,"GET","/v1/projects",e)}/**
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
 */const lP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cP=/^https?/;async function hP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uP(t);for(const n of e)try{if(dP(n))return}catch{}Jt(t,"unauthorized-domain")}function dP(t){const e=hf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cP.test(n))return!1;if(lP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const fP=new va(3e4,6e4);function bv(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pP(t){return new Promise((e,n)=>{var r,i,s;function o(){bv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bv(),n(gn(t,"network-request-failed"))},timeout:fP.get()})}if(!((i=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yn().gapi)===null||s===void 0)&&s.load)o();else{const a=K2("iframefcb");return yn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},W2(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw wu=null,e})}let wu=null;function mP(t){return wu=wu||pP(t),wu}/**
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
 */const gP=new va(5e3,15e3),yP="__/auth/iframe",vP="emulator/auth/iframe",wP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rm(e,vP):`https://${t.config.authDomain}/${yP}`,r={apiKey:e.apiKey,appName:t.name,v:ta},i=EP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ea(r).slice(1)}`}async function CP(t){const e=await mP(t),n=yn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:SP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=yn().setTimeout(()=>{s(o)},gP.get());function u(){yn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const _P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IP=500,kP=600,TP="_blank",xP="http://localhost";class Lv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AP(t,e,n,r=IP,i=kP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},_P),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ge().toLowerCase();n&&(a=tC(l)?TP:n),eC(l)&&(e=e||xP,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(c2(l)&&a!=="_self")return NP(e||"",a),new Lv(null);const h=window.open(e||"",a,c);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Lv(h)}function NP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DP="__/auth/handler",RP="emulator/auth/handler";function Mv(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ta,eventId:i};if(e instanceof Lm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof _a){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${PP(t)}?${ea(a).slice(1)}`}function PP({config:t}){return t.emulator?Rm(t,RP):`https://${t.authDomain}/${DP}`}/**
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
 */const Rh="webStorageSupport";class OP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fC,this._completeRedirectFn=iP,this._overrideRedirectResult=tP}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Mv(e,n,r,hf(),i);return AP(e,o,Fm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),$2(Mv(e,n,r,hf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CP(e),r=new oP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rh,{type:Rh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rh];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oC()||Om()||wc()}}const $P=OP;var Fv="@firebase/auth",Uv="0.20.5";/**
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
 */class bP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MP(t){ts(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{K(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aC(t)},c=new p2(a,u,l);return qR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Zr("auth-internal",e=>{const n=Ca(e.getProvider("auth").getImmediate());return(r=>new bP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(Fv,Uv,LP(t)),pr(Fv,Uv,"esm2017")}/**
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
 */function Cc(t=bw()){const e=Tp(t,"auth");return e.isInitialized()?e.getImmediate():KR(t,{popupRedirectResolver:$P,persistence:[z2,R2,fC]})}MP("Browser");const FP={apiKey:{BASE_URL:"/QnAboard.github.io/",MODE:"production",DEV:!1,PROD:!0}.VITE_API_KEY,authDomain:{BASE_URL:"/QnAboard.github.io/",MODE:"production",DEV:!1,PROD:!0}.VITE_AUTH_DOMAIN,projectId:{BASE_URL:"/QnAboard.github.io/",MODE:"production",DEV:!1,PROD:!0}.VITE_PROJECT_ID,storageBucket:{BASE_URL:"/QnAboard.github.io/",MODE:"production",DEV:!1,PROD:!0}.VITE_STORAGE_BUCKET,messagingSenderId:{BASE_URL:"/QnAboard.github.io/",MODE:"production",DEV:!1,PROD:!0}.VITE_MESSAGEIN_ID,appId:{BASE_URL:"/QnAboard.github.io/",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_ID},UP=Cx(FP),BP=Cc(),Bm=OS();var SC={exports:{}},CC={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=O.exports;function VP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jP=typeof Object.is=="function"?Object.is:VP,zP=hs.useState,HP=hs.useEffect,WP=hs.useLayoutEffect,KP=hs.useDebugValue;function qP(t,e){var n=e(),r=zP({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return WP(function(){i.value=n,i.getSnapshot=e,Ph(i)&&s({inst:i})},[t,n,e]),HP(function(){return Ph(i)&&s({inst:i}),t(function(){Ph(i)&&s({inst:i})})},[t]),KP(n),n}function Ph(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jP(t,n)}catch{return!0}}function GP(t,e){return e()}var QP=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?GP:qP;CC.useSyncExternalStore=hs.useSyncExternalStore!==void 0?hs.useSyncExternalStore:QP;(function(t){t.exports=CC})(SC);var _C={exports:{}},IC={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=O.exports,XP=SC.exports;function YP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var JP=typeof Object.is=="function"?Object.is:YP,ZP=XP.useSyncExternalStore,eO=_c.useRef,tO=_c.useEffect,nO=_c.useMemo,rO=_c.useDebugValue;IC.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=eO(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=nO(function(){function u(p){if(!l){if(l=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return h=g}return h=p}if(g=h,JP(c,p))return g;var v=r(p);return i!==void 0&&i(g,v)?g:(c=p,h=v)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,r,i]);var a=ZP(t,s[0],s[1]);return tO(function(){o.hasValue=!0,o.value=a},[a]),rO(a),a};(function(t){t.exports=IC})(_C);function iO(t){t()}let kC=iO;const sO=t=>kC=t,oO=()=>kC,Cr=qo.createContext(null);function TC(){return O.exports.useContext(Cr)}const aO=()=>{throw new Error("uSES not initialized!")};let xC=aO;const uO=t=>{xC=t},lO=(t,e)=>t===e;function cO(t=Cr){const e=t===Cr?TC:()=>O.exports.useContext(t);return function(r,i=lO){const{store:s,subscription:o,getServerState:a}=e(),u=xC(o.addNestedSub,s.getState,a||s.getState,r,i);return O.exports.useDebugValue(u),u}}const AC=cO();function ml(){return ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ml.apply(this,arguments)}var hO={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=Symbol.for("react.element"),jm=Symbol.for("react.portal"),Ic=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),dO=Symbol.for("react.server_context"),Nc=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),Pc=Symbol.for("react.memo"),Oc=Symbol.for("react.lazy"),fO=Symbol.for("react.offscreen"),NC;NC=Symbol.for("react.module.reference");function Zt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Vm:switch(t=t.type,t){case Ic:case Tc:case kc:case Dc:case Rc:return t;default:switch(t=t&&t.$$typeof,t){case dO:case Ac:case Nc:case Oc:case Pc:case xc:return t;default:return e}}case jm:return e}}}fe.ContextConsumer=Ac;fe.ContextProvider=xc;fe.Element=Vm;fe.ForwardRef=Nc;fe.Fragment=Ic;fe.Lazy=Oc;fe.Memo=Pc;fe.Portal=jm;fe.Profiler=Tc;fe.StrictMode=kc;fe.Suspense=Dc;fe.SuspenseList=Rc;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(t){return Zt(t)===Ac};fe.isContextProvider=function(t){return Zt(t)===xc};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vm};fe.isForwardRef=function(t){return Zt(t)===Nc};fe.isFragment=function(t){return Zt(t)===Ic};fe.isLazy=function(t){return Zt(t)===Oc};fe.isMemo=function(t){return Zt(t)===Pc};fe.isPortal=function(t){return Zt(t)===jm};fe.isProfiler=function(t){return Zt(t)===Tc};fe.isStrictMode=function(t){return Zt(t)===kc};fe.isSuspense=function(t){return Zt(t)===Dc};fe.isSuspenseList=function(t){return Zt(t)===Rc};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ic||t===Tc||t===kc||t===Dc||t===Rc||t===fO||typeof t=="object"&&t!==null&&(t.$$typeof===Oc||t.$$typeof===Pc||t.$$typeof===xc||t.$$typeof===Ac||t.$$typeof===Nc||t.$$typeof===NC||t.getModuleId!==void 0)};fe.typeOf=Zt;(function(t){t.exports=fe})(hO);function pO(){const t=oO();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Bv={notify(){},get:()=>[]};function mO(t,e){let n,r=Bv;function i(h){return u(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=pO())}function l(){n&&(n(),n=void 0,r.clear(),r=Bv)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const gO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yO=gO?O.exports.useLayoutEffect:O.exports.useEffect;var $c={exports:{}},bc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vO=O.exports,wO=Symbol.for("react.element"),EO=Symbol.for("react.fragment"),SO=Object.prototype.hasOwnProperty,CO=vO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_O={key:!0,ref:!0,__self:!0,__source:!0};function DC(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SO.call(e,r)&&!_O.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wO,type:t,key:s,ref:o,props:i,_owner:CO.current}}bc.Fragment=EO;bc.jsx=DC;bc.jsxs=DC;(function(t){t.exports=bc})($c);const ds=$c.exports.Fragment,T=$c.exports.jsx,Te=$c.exports.jsxs;function IO({store:t,context:e,children:n,serverState:r}){const i=O.exports.useMemo(()=>{const a=mO(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=O.exports.useMemo(()=>t.getState(),[t]);return yO(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),T((e||Cr).Provider,{value:i,children:n})}function RC(t=Cr){const e=t===Cr?TC:()=>O.exports.useContext(t);return function(){const{store:r}=e();return r}}const kO=RC();function TO(t=Cr){const e=t===Cr?kO:RC(t);return function(){return e().dispatch}}const zm=TO();uO(_C.exports.useSyncExternalStoreWithSelector);sO(Tf.exports.unstable_batchedUpdates);const xO=({ansArr:{title:t,description:e,viewCount:n},answerId:r,cate:i,search:s})=>{const[o,a]=O.exports.useState(!1),[u,l]=O.exports.useState(!1),[c,h]=O.exports.useState(""),[d,p]=O.exports.useState(""),[g,v]=O.exports.useState(n),w=AC(C=>C.currentUser.currentUser.value.uid),m=PS(Bm,"QnA",r);O.exports.useEffect(()=>{s&&(t.includes(s)||e.includes(s))&&a(!0)},[]);const f=async()=>{await Iv(m,{viewCount:g})},y=C=>{let U=!0;if(u){if(U=window.confirm("\uC218\uC815\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),!U)return}else h(e),p(t);l(!u),C.stopPropagation()},S=async C=>{window.confirm("\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&await UR(m),C.stopPropagation()},k=()=>Te(RO,{onSubmit:D,children:[Te("div",{className:"editFormHeader",children:[T("input",{id:"title",type:"text",placeholder:"\uC81C\uBAA9",value:d,onChange:C=>p(C),required:!0}),Te("select",{id:"category",children:[T("option",{value:"",children:"--Please choose an option--"}),T("option",{value:"\uD53C\uB4DC\uBC31",children:"\uD53C\uB4DC\uBC31"}),T("option",{value:"\uB9E4\uB108\uC9C0\uC218",children:"\uB9E4\uB108\uC9C0\uC218"}),T("option",{value:"\uAE30\uD0C0 \uC11C\uBE44\uC2A4 \uAE30\uB2A5",children:"\uAE30\uD0C0 \uC11C\uBE44\uC2A4 \uAE30\uB2A5"}),T("option",{value:"\uD504\uB85C\uD544 \uC124\uC815",children:"\uD504\uB85C\uD544 \uC124\uC815"}),T("option",{value:"\uC625\uC18C\uCF54\uC778",children:"\uC625\uC18C\uCF54\uC778"}),T("option",{value:"\uC54C\uB9BC\uC124\uC815",children:"\uC54C\uB9BC \uC124\uC815"}),T("option",{value:"\uD3F4\uB514",children:"\uD3F4\uB514"}),T("option",{value:"\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871",children:"\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871"}),T("option",{value:"\uADF8\uB8F9",children:"\uADF8\uB8F9"})]})]}),T("textarea",{id:"description",type:"text",placeholder:"\uB0B4\uC6A9",value:c,onChange:C=>{h(C.value)},required:!0}),T("input",{className:"editSubmit",type:"submit",value:"\uC218\uC815"})]}),D=async C=>{C.preventDefault();const{target:U}=C,B=U.querySelector("#title").value,ie=U.querySelector("#category").value?U.querySelector("#category").value:i;//! category가 blank일 때 기본 카테고리로
const pe=U.querySelector("#description").value,Ie=new Date,$e={title:B,description:pe,category:ie,updatedAt:Ie};window.confirm("\uAE00\uC744 \uC218\uC815\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&await Iv(m,$e),l(!1)};return Te(DO,{className:`answerContainer${o?" active":""}`,children:[Te("span",{onClick:()=>{a(C=>!C),o||(v(C=>C+1),f())},children:[T("h4",{children:s?PC(t,s):t}),NO(w)?Te("div",{className:"adminButtons",children:[T("button",{onClick:y,type:"button",children:u?"\uCDE8\uC18C":"\uC218\uC815"}),T("button",{onClick:S,type:"button",children:"\uC0AD\uC81C"})]}):null,T("img",{src:"img/arrow.svg",alt:o?"\uB2EB\uD78C \uC9C8\uBB38":"\uC5F4\uB9B0 \uC9C8\uBB38"})]}),u&&T(ds,{children:k()}),o&&!u?T(ds,{children:AO(e,s)}):null]})},PC=(t,e)=>{const n=t.split(e);return T(ds,{children:n.map((r,i)=>Te("span",{children:[i!=0&&T("b",{children:e}),r]},i))})},AO=(t,e)=>{let n=t.split("\\n"),r=[];for(let i of n)i&&r.push(i);return T("p",{children:r.map((i,s)=>e&&i.includes(e)?T("span",{children:PC(i,e)},s):T("span",{children:i},s))})},NO=t=>{const e="SOT3U2CfXxXlIJxUYkh79gD7WYj1";return console.log(t),t===e},DO=Ne.div`
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
`,RO=Ne.form`
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
`,PO=({cate:t,search:e})=>{const[n,r]=O.exports.useState([]),i=Em(Bm,"QnA"),s=async()=>{let o="";t==="FAQ"?o=cf(i,$R("viewCount","desc"),LR(4)):o=cf(i,PR("category","==",t)),WS(o,a=>{const u=a.docs.map(l=>({id:l.id,...l.data()}));r(u)})};return O.exports.useEffect(()=>{s()},[t]),T(OO,{children:!!n&&n.filter(o=>o.title.includes(e)||o.description.includes(e)).map(o=>T(xO,{ansArr:o,answerId:o.id,cate:t,search:e},o.id))})},OO=Ne.div`
  h3 {
    width: 709px;
    font-size: 20px;
    font-weight: 700;
  }
`,$O=({cate:t,elem:e})=>T(bO,{className:e===t?" active":"",value:e,type:"button",children:e}),bO=Ne.button`
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
`,LO=({cate:t,setCate:e})=>{const[n,r]=O.exports.useState([]),i=Em(Bm,"QnA"),s=async()=>{const a=cf(i);WS(a,u=>{let l=["FAQ"];u.docs.map(c=>{let h=c.data().category;l.includes(h)||l.push(h)}),r(l)})};return O.exports.useEffect(()=>{s()},[]),T(MO,{onClick:a=>{a.target.tagName=="BUTTON"&&e(a.target.value)},children:n.map((a,u)=>T($O,{elem:a,cate:t},u))})},MO=Ne.div`
  display: flex;
  flex-wrap: wrap;
  width: 709px;
  margin-top: 41px;
  margin-bottom: 4px;
`,FO=({search:t,setSearch:e})=>T(UO,{search:t,children:Te("form",{children:[T("input",{placeholder:"\uAC80\uC0C9",onChange:i=>{e(i.target.value)},value:t}),T("button",{className:"clearButton",type:"button",onClick:i=>{i.preventDefault(),console.log("clear"),e("")},disabled:!t,children:"\uCD08\uAE30\uD654"})]})}),UO=Ne.div`
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
`;function BO({User:t}){const[e,n]=O.exports.useState(!1),r=()=>{n(a=>!a)},i=async a=>{a.preventDefault();const{target:u}=a,l=u.querySelector("#titleBox").value,c=u.querySelector("#qnaCategory").value,h=u.querySelector("#description").value,d=new Date,p={title:l,description:h,category:c,viewCount:0,createdAt:d,updatedAt:d},g=OS(UP);await BR(Em(g,"QnA"),p),r()},s=({state:a,toggleBtnHandler:u})=>T(ds,{children:a?null:T(KO,{type:"button",value:"\uAE00\uC4F0\uAE30",onClick:u})}),o=()=>Te(jO,{onSubmit:i,children:[T(Oh,{htmlFor:"titleBox",children:"\uC81C\uBAA9"}),T(zO,{id:"titleBox",type:"text"}),T(Oh,{htmlFor:"qnaCategory",children:"\uCE74\uD14C\uACE0\uB9AC"}),Te(HO,{id:"qnaCategory",children:[T("option",{value:"",children:"--Please choose an option--"}),T("option",{value:"\uD53C\uB4DC\uBC31",children:"\uD53C\uB4DC\uBC31"}),T("option",{value:"\uB9E4\uB108\uC9C0\uC218",children:"\uB9E4\uB108\uC9C0\uC218"}),T("option",{value:"\uAE30\uD0C0_\uC11C\uBE44\uC2A4_\uAE30\uB2A5",children:"\uAE30\uD0C0 \uC11C\uBE44\uC2A4 \uAE30\uB2A5"}),T("option",{value:"\uD504\uB85C\uD544_\uC124\uC815",children:"\uD504\uB85C\uD544 \uC124\uC815"}),T("option",{value:"\uC625\uC18C\uCF54\uC778",children:"\uC625\uC18C\uCF54\uC778"}),T("option",{value:"\uC54C\uB9BC\uC124\uC815",children:"\uC54C\uB9BC \uC124\uC815"}),T("option",{value:"\uD3F4\uB514",children:"\uD3F4\uB514"}),T("option",{value:"\uC815\uCE58\uC131\uD5A5\uBCC4_\uB2E4\uC12F_\uBD80\uC871",children:"\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871"}),T("option",{value:"\uADF8\uB8F9",children:"\uADF8\uB8F9"})]}),T(Oh,{htmlFor:"description",children:"\uBCF8\uBB38"}),T(WO,{id:"description",maxLength:1500}),T("input",{type:"submit",value:"\uC791\uC131\uD558\uAE30",className:"submit"})]});if(t==="SOT3U2CfXxXlIJxUYkh79gD7WYj1")return T(VO,{editBtn:e,children:e?T(o,{}):T(s,{state:e,toggleBtnHandler:r})})}const VO=Ne.div`
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
`,jO=Ne.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-size: 16px;
`,zO=Ne.input`
  outline: none;
  border-radius: 5px;
  border: 2px solid #e6e6e6;
  height: 30px;

  font-weight: bold;

  &:focus {
    border-color: tomato;
  }
`,HO=Ne.select`
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
`,WO=Ne.textarea`
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
`,KO=Ne.input`
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
`,Oh=Ne.label`
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  margin: 5px 0;
`,qO=({currentUser:t})=>{const[e,n]=O.exports.useState("\uC815\uCE58\uC131\uD5A5\uBCC4 \uB2E4\uC12F \uBD80\uC871"),[r,i]=O.exports.useState("");return T(GO,{children:Te("div",{className:"container",children:[T("h2",{children:"oxopolitics FAQ"}),T(BO,{User:t}),T(LO,{cate:e,setCate:n}),T(FO,{search:r,setSearch:i}),T(PO,{cate:e,setCate:n,search:r})]})})},GO=Ne.div`
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
`,QO=Ne.span`
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
`;function XO(){return Te(QO,{children:[T("img",{className:"menubar",src:"img/menu.svg"}),T("img",{className:"oxoLogo",width:"123px",src:"img/oxopolitics_letter_logo.png"})]})}const YO="#e6e6e6";function JO({color:t=YO,width:e=24,height:n=24}){return T("svg",{width:e,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:T("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8741 7.67896C21.5857 8.24828 22 9.11022 22 10.0216V19.5784C22 21.2353 20.6569 22.5784 19 22.5784H13V15.5797C13 15.0274 12.5523 14.5797 12 14.5797C11.4477 14.5797 11 15.0274 11 15.5797V22.5784H5C3.34315 22.5784 2 21.2353 2 19.5784V10.0216C2 9.11022 2.41427 8.24828 3.12592 7.67896L10.1259 2.07896C11.2216 1.20244 12.7784 1.20244 13.8741 2.07896L20.8741 7.67896Z",fill:t})})}const ZO="black";function e$({color:t=ZO,width:e=22,height:n=22}){return T("svg",{width:e,height:n,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:T("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 0C2.68629 0 0 2.68629 0 6V14.2404L3.86169 10.3791C4.21304 10.0278 4.78261 10.0277 5.13412 10.3788L7.49267 12.7349L13.4276 6.8H10.0651C9.56802 6.8 9.16507 6.39706 9.16507 5.9C9.16507 5.40294 9.56802 5 10.0651 5H15.6002C16.0973 5 16.5002 5.40294 16.5002 5.9V11.4352C16.5002 11.9322 16.0973 12.3352 15.6002 12.3352C15.1032 12.3352 14.7002 11.9322 14.7002 11.4352V8.07296L8.12939 14.6438C7.77805 14.9951 7.20846 14.9953 6.85693 14.6441L4.49835 12.288L0.114312 16.6715C0.659179 19.4244 3.0872 21.5 6 21.5H15.5C18.8137 21.5 21.5 18.8137 21.5 15.5V6C21.5 2.68629 18.8137 0 15.5 0H6Z",fill:t})})}const t$="black";function n$({color:t=t$,width:e=23,height:n=22}){return T("svg",{width:e,height:n,viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:T("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.5 11C22.5 4.63558 17.8644 0 11.5 0C5.13558 0 0.5 4.63558 0.5 11C0.5 17.3644 5.13558 22 11.5 22C13.5945 22 15.5018 21.4979 17.1183 20.5974L20.7936 21.7395C21.726 22.0293 22.5293 21.2259 22.2396 20.2935L21.0974 16.6182C21.9979 15.0018 22.5 13.0945 22.5 11ZM14.8496 9.94813C15.1885 10.0661 15.4884 10.275 15.7164 10.552C15.9444 10.8291 16.0919 11.1635 16.1425 11.5187C16.1932 11.8739 16.1451 12.2362 16.0036 12.5659C15.8621 12.8956 15.6326 13.18 15.3402 13.388C15.0478 13.596 14.7038 13.7195 14.346 13.745C13.9881 13.7706 13.6301 13.6971 13.3111 13.5328C12.9922 13.3684 12.7246 13.1195 12.5377 12.8132C12.3508 12.5069 12.2518 12.1551 12.2515 11.7963C12.2349 11.4007 12.354 11.0113 12.589 10.6928L14.1532 8.25H15.8889L14.8496 9.94813ZM10.3043 10.552C10.0763 10.275 9.77639 10.0661 9.43754 9.94813L10.4768 8.25H8.74114L7.17692 10.6928C6.94185 11.0113 6.82277 11.4007 6.83943 11.7963C6.83972 12.1551 6.93872 12.5069 7.12561 12.8132C7.3125 13.1195 7.58006 13.3684 7.899 13.5328C8.21794 13.6971 8.57596 13.7706 8.93385 13.745C9.29174 13.7195 9.6357 13.596 9.92808 13.388C10.2205 13.18 10.45 12.8956 10.5915 12.5659C10.733 12.2362 10.7811 11.8739 10.7304 11.5187C10.6797 11.1635 10.5323 10.8291 10.3043 10.552Z",fill:t})})}function r$({active:t,Change:e}){const n=r=>{const i=r.target.closest("li");if(!i)return;const s=i.querySelector("path"),o=i.classList.contains("active");if(e("test"),!o){console.log(`${i.classList.item(0)}`),document.querySelector(".headerNav");const a=document.querySelector(".active");a&&(a.classList.remove("active"),a.querySelector("path").setAttribute("fill","#e6e6e6")),i.classList.add("active"),s.setAttribute("fill","#ffffff")}};return O.exports.useEffect(()=>{if(!t)return;const r=document.querySelector(`.${t}`),i=r.querySelector("path");r.classList.add("active"),i.setAttribute("fill","#ffffff")},[]),T(i$,{children:Te("ul",{onClick:n,children:[Te("li",{className:"IconHome",children:[T(JO,{color:"#e6e6e6"}),T("span",{children:"\uD648"})]}),Te("li",{className:"IconPoldi",children:[T(e$,{color:"#e6e6e6"})," ",T("span",{children:"\uD3F4\uB514"})]}),Te("li",{className:"IconChat",children:[T(n$,{color:"#e6e6e6"})," ",T("span",{children:"\uD1A1"})]})]})})}const i$=Ne.nav`
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
`;var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));var Vv=function(t){return t},jv="beforeunload",s$="popstate";function o$(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var _=r.location,C=_.pathname,U=_.search,B=_.hash,ie=i.state||{};return[ie.idx,Vv({pathname:C,search:U,hash:B,state:ie.usr||null,key:ie.key||"default"})]}var o=null;function a(){if(o)p.call(o),o=null;else{var _=Vr.Pop,C=s(),U=C[0],B=C[1];if(p.length){if(U!=null){var ie=c-U;ie&&(o={action:_,location:B,retry:function(){k(ie*-1)}},k(ie))}}else f(_)}}r.addEventListener(s$,a);var u=Vr.Pop,l=s(),c=l[0],h=l[1],d=Hv(),p=Hv();c==null&&(c=0,i.replaceState(ml({},i.state,{idx:c}),""));function g(_){return typeof _=="string"?_:ff(_)}function v(_,C){return C===void 0&&(C=null),Vv(ml({pathname:h.pathname,hash:"",search:""},typeof _=="string"?mi(_):_,{state:C,key:a$()}))}function w(_,C){return[{usr:_.state,key:_.key,idx:C},g(_)]}function m(_,C,U){return!p.length||(p.call({action:_,location:C,retry:U}),!1)}function f(_){u=_;var C=s();c=C[0],h=C[1],d.call({action:u,location:h})}function y(_,C){var U=Vr.Push,B=v(_,C);function ie(){y(_,C)}if(m(U,B,ie)){var pe=w(B,c+1),Ie=pe[0],$e=pe[1];try{i.pushState(Ie,"",$e)}catch{r.location.assign($e)}f(U)}}function S(_,C){var U=Vr.Replace,B=v(_,C);function ie(){S(_,C)}if(m(U,B,ie)){var pe=w(B,c),Ie=pe[0],$e=pe[1];i.replaceState(Ie,"",$e),f(U)}}function k(_){i.go(_)}var D={get action(){return u},get location(){return h},createHref:g,push:y,replace:S,go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(C){return d.push(C)},block:function(C){var U=p.push(C);return p.length===1&&r.addEventListener(jv,zv),function(){U(),p.length||r.removeEventListener(jv,zv)}}};return D}function zv(t){t.preventDefault(),t.returnValue=""}function Hv(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function a$(){return Math.random().toString(36).substr(2,8)}function ff(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function mi(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Hm=O.exports.createContext(null),Wm=O.exports.createContext(null),Lc=O.exports.createContext({outlet:null,matches:[]});function En(t,e){if(!t)throw new Error(e)}function u$(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?mi(e):e,i=bC(r.pathname||"/",n);if(i==null)return null;let s=OC(t);l$(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=v$(s[a],i);return o}function OC(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||En(!1),o.relativePath=o.relativePath.slice(r.length));let a=gr([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&En(!1),OC(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:g$(a,i.index),routesMeta:u})}),e}function l$(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:y$(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c$=/^:\w+$/,h$=3,d$=2,f$=1,p$=10,m$=-2,Wv=t=>t==="*";function g$(t,e){let n=t.split("/"),r=n.length;return n.some(Wv)&&(r+=m$),e&&(r+=d$),n.filter(i=>!Wv(i)).reduce((i,s)=>i+(c$.test(s)?h$:s===""?f$:p$),r)}function y$(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function v$(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=w$({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:gr([i,c.pathname]),pathnameBase:LC(gr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=gr([i,c.pathnameBase]))}return s}function w$(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=E$(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=S$(a[h]||""),l},{}),pathname:s,pathnameBase:o,pattern:t}}function E$(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function S$(t,e){try{return decodeURIComponent(t)}catch{return t}}function C$(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mi(t):t;return{pathname:n?n.startsWith("/")?n:_$(n,e):e,search:k$(r),hash:T$(i)}}function _$(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $C(t,e,n){let r=typeof t=="string"?mi(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),a-=1;r.pathname=u.join("/")}s=a>=0?e[a]:"/"}let o=C$(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function I$(t){return t===""||t.pathname===""?"/":typeof t=="string"?mi(t).pathname:t.pathname}function bC(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),LC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),k$=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,T$=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function x$(t){ka()||En(!1);let{basename:e,navigator:n}=O.exports.useContext(Hm),{hash:r,pathname:i,search:s}=MC(t),o=i;if(e!=="/"){let a=I$(t),u=a!=null&&a.endsWith("/");o=i==="/"?e+(u?"/":""):gr([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function ka(){return O.exports.useContext(Wm)!=null}function Mc(){return ka()||En(!1),O.exports.useContext(Wm).location}function A$(){ka()||En(!1);let{basename:t,navigator:e}=O.exports.useContext(Hm),{matches:n}=O.exports.useContext(Lc),{pathname:r}=Mc(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=O.exports.useRef(!1);return O.exports.useEffect(()=>{s.current=!0}),O.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=$C(a,JSON.parse(i),r);t!=="/"&&(l.pathname=gr([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state)},[t,e,i,r])}function MC(t){let{matches:e}=O.exports.useContext(Lc),{pathname:n}=Mc(),r=JSON.stringify(e.map(i=>i.pathnameBase));return O.exports.useMemo(()=>$C(t,JSON.parse(r),n),[t,r,n])}function N$(t,e){ka()||En(!1);let{matches:n}=O.exports.useContext(Lc),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Mc(),a;if(e){var u;let d=typeof e=="string"?mi(e):e;s==="/"||((u=d.pathname)==null?void 0:u.startsWith(s))||En(!1),a=d}else a=o;let l=a.pathname||"/",c=s==="/"?l:l.slice(s.length)||"/",h=u$(t,{pathname:c});return D$(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:gr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:gr([s,d.pathnameBase])})),n)}function D$(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>O.exports.createElement(Lc.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function pf(t){En(!1)}function R$(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vr.Pop,navigator:s,static:o=!1}=t;ka()&&En(!1);let a=LC(e),u=O.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=mi(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,g=O.exports.useMemo(()=>{let v=bC(l,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:p}},[a,l,c,h,d,p]);return g==null?null:O.exports.createElement(Hm.Provider,{value:u},O.exports.createElement(Wm.Provider,{children:n,value:{location:g,navigationType:i}}))}function P$(t){let{children:e,location:n}=t;return N$(mf(e),n)}function mf(t){let e=[];return O.exports.Children.forEach(t,n=>{if(!O.exports.isValidElement(n))return;if(n.type===O.exports.Fragment){e.push.apply(e,mf(n.props.children));return}n.type!==pf&&En(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=mf(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gf(){return gf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gf.apply(this,arguments)}function O$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const $$=["onClick","reloadDocument","replace","state","target","to"];function b$(t){let{basename:e,children:n,window:r}=t,i=O.exports.useRef();i.current==null&&(i.current=o$({window:r}));let s=i.current,[o,a]=O.exports.useState({action:s.action,location:s.location});return O.exports.useLayoutEffect(()=>s.listen(a),[s]),O.exports.createElement(R$,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function L$(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const M$=O.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:u}=e,l=O$(e,$$),c=x$(u),h=F$(u,{replace:s,state:o,target:a});function d(p){r&&r(p),!p.defaultPrevented&&!i&&h(p)}return O.exports.createElement("a",gf({},l,{href:c,onClick:d,ref:n,target:a}))});function F$(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=A$(),o=Mc(),a=MC(t);return O.exports.useCallback(u=>{if(u.button===0&&(!n||n==="_self")&&!L$(u)){u.preventDefault();let l=!!r||ff(o)===ff(a);s(t,{replace:l,state:i})}},[o,s,a,r,i,n,t])}function on(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function _r(t){return!!t&&!!t[Se]}function jn(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===q$}(t)||Array.isArray(t)||!!t[Jv]||!!t.constructor[Jv]||Km(t)||qm(t))}function ui(t,e,n){n===void 0&&(n=!1),Is(t)===0?(n?Object.keys:Wi)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Is(t){var e=t[Se];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Km(t)?2:qm(t)?3:0}function Hi(t,e){return Is(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function U$(t,e){return Is(t)===2?t.get(e):t[e]}function FC(t,e,n){var r=Is(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function UC(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Km(t){return W$&&t instanceof Map}function qm(t){return K$&&t instanceof Set}function Or(t){return t.o||t.t}function Gm(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=VC(t);delete e[Se];for(var n=Wi(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Qm(t,e){return e===void 0&&(e=!1),Xm(t)||_r(t)||!jn(t)||(Is(t)>1&&(t.set=t.add=t.clear=t.delete=B$),Object.freeze(t),e&&ui(t,function(n,r){return Qm(r,!0)},!0)),t}function B$(){on(2)}function Xm(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function vn(t){var e=Ef[t];return e||on(18,t),e}function V$(t,e){Ef[t]||(Ef[t]=e)}function yf(){return jo}function $h(t,e){e&&(vn("Patches"),t.u=[],t.s=[],t.v=e)}function gl(t){vf(t),t.p.forEach(j$),t.p=null}function vf(t){t===jo&&(jo=t.l)}function Kv(t){return jo={p:[],l:jo,h:t,m:!0,_:0}}function j$(t){var e=t[Se];e.i===0||e.i===1?e.j():e.O=!0}function bh(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||vn("ES5").S(e,t,r),r?(n[Se].P&&(gl(e),on(4)),jn(t)&&(t=yl(e,t),e.l||vl(e,t)),e.u&&vn("Patches").M(n[Se].t,t,e.u,e.s)):t=yl(e,n,[]),gl(e),e.u&&e.v(e.u,e.s),t!==BC?t:void 0}function yl(t,e,n){if(Xm(e))return e;var r=e[Se];if(!r)return ui(e,function(s,o){return qv(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return vl(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Gm(r.k):r.o;ui(r.i===3?new Set(i):i,function(s,o){return qv(t,r,i,s,o,n)}),vl(t,i,!1),n&&t.u&&vn("Patches").R(r,n,t.u,t.s)}return r.o}function qv(t,e,n,r,i,s){if(_r(i)){var o=yl(t,i,s&&e&&e.i!==3&&!Hi(e.D,r)?s.concat(r):void 0);if(FC(n,r,o),!_r(o))return;t.m=!1}if(jn(i)&&!Xm(i)){if(!t.h.F&&t._<1)return;yl(t,i),e&&e.A.l||vl(t,i)}}function vl(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&Qm(e,n)}function Lh(t,e){var n=t[Se];return(n?Or(n):t)[e]}function Gv(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function tr(t){t.P||(t.P=!0,t.l&&tr(t.l))}function Mh(t){t.o||(t.o=Gm(t.t))}function wf(t,e,n){var r=Km(e)?vn("MapSet").N(e,n):qm(e)?vn("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:yf(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,l=zo;o&&(u=[a],l=Ws);var c=Proxy.revocable(u,l),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):vn("ES5").J(e,n);return(n?n.A:yf()).p.push(r),r}function z$(t){return _r(t)||on(22,t),function e(n){if(!jn(n))return n;var r,i=n[Se],s=Is(n);if(i){if(!i.P&&(i.i<4||!vn("ES5").K(i)))return i.t;i.I=!0,r=Qv(n,s),i.I=!1}else r=Qv(n,s);return ui(r,function(o,a){i&&U$(i.t,o)===a||FC(r,o,e(a))}),s===3?new Set(r):r}(t)}function Qv(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Gm(t)}function H$(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[Se];return zo.get(u,s)},set:function(u){var l=this[Se];zo.set(l,s,u)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Se];if(!a.P)switch(a.i){case 5:r(a)&&tr(a);break;case 4:n(a)&&tr(a)}}}function n(s){for(var o=s.t,a=s.k,u=Wi(a),l=u.length-1;l>=0;l--){var c=u[l];if(c!==Se){var h=o[c];if(h===void 0&&!Hi(o,c))return!0;var d=a[c],p=d&&d[Se];if(p?p.t!==h:!UC(d,h))return!0}}var g=!!o[Se];return u.length!==Wi(o).length+(g?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};V$("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var g=VC(h);delete g[Se];for(var v=Wi(g),w=0;w<v.length;w++){var m=v[w];g[m]=t(m,c||!!g[m].enumerable)}return Object.create(Object.getPrototypeOf(h),g)}(a,s),l={i:a?5:4,A:o?o.A:yf(),P:!1,I:!1,D:{},l:o,t:s,k:u,o:null,O:!1,C:!1};return Object.defineProperty(u,Se,{value:l,writable:!0}),u},S:function(s,o,a){a?_r(o)&&o[Se].A===s&&e(s.p):(s.u&&function u(l){if(l&&typeof l=="object"){var c=l[Se];if(c){var h=c.t,d=c.k,p=c.D,g=c.i;if(g===4)ui(d,function(y){y!==Se&&(h[y]!==void 0||Hi(h,y)?p[y]||u(d[y]):(p[y]=!0,tr(c)))}),ui(h,function(y){d[y]!==void 0||Hi(d,y)||(p[y]=!1,tr(c))});else if(g===5){if(r(c)&&(tr(c),p.length=!0),d.length<h.length)for(var v=d.length;v<h.length;v++)p[v]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&u(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var Xv,jo,Ym=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",W$=typeof Map<"u",K$=typeof Set<"u",Yv=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",BC=Ym?Symbol.for("immer-nothing"):((Xv={})["immer-nothing"]=!0,Xv),Jv=Ym?Symbol.for("immer-draftable"):"__$immer_draftable",Se=Ym?Symbol.for("immer-state"):"__$immer_state",q$=""+Object.prototype.constructor,Wi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,VC=Object.getOwnPropertyDescriptors||function(t){var e={};return Wi(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Ef={},zo={get:function(t,e){if(e===Se)return t;var n=Or(t);if(!Hi(n,e))return function(i,s,o){var a,u=Gv(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!jn(r)?r:r===Lh(t.t,e)?(Mh(t),t.o[e]=wf(t.A.h,r,t)):r},has:function(t,e){return e in Or(t)},ownKeys:function(t){return Reflect.ownKeys(Or(t))},set:function(t,e,n){var r=Gv(Or(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Lh(Or(t),e),s=i==null?void 0:i[Se];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(UC(n,i)&&(n!==void 0||Hi(t.t,e)))return!0;Mh(t),tr(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return Lh(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,Mh(t),tr(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Or(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){on(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){on(12)}},Ws={};ui(zo,function(t,e){Ws[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ws.deleteProperty=function(t,e){return Ws.set.call(this,t,e,void 0)},Ws.set=function(t,e,n){return zo.set.call(this,t[0],e,n,t[0])};var G$=function(){function t(n){var r=this;this.g=Yv,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(v){var w=this;v===void 0&&(v=a);for(var m=arguments.length,f=Array(m>1?m-1:0),y=1;y<m;y++)f[y-1]=arguments[y];return u.produce(v,function(S){var k;return(k=s).call.apply(k,[w,S].concat(f))})}}var l;if(typeof s!="function"&&on(6),o!==void 0&&typeof o!="function"&&on(7),jn(i)){var c=Kv(r),h=wf(r,i,void 0),d=!0;try{l=s(h),d=!1}finally{d?gl(c):vf(c)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(v){return $h(c,o),bh(v,c)},function(v){throw gl(c),v}):($h(c,o),bh(l,c))}if(!i||typeof i!="object"){if((l=s(i))===void 0&&(l=i),l===BC&&(l=void 0),r.F&&Qm(l,!0),o){var p=[],g=[];vn("Patches").M(i,l,p,g),o(p,g)}return l}on(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(l){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(l,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,u=r.produce(i,s,function(l,c){o=l,a=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(l){return[l,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){jn(n)||on(8),_r(n)&&(n=z$(n));var r=Kv(this),i=wf(this,n,void 0);return i[Se].C=!0,vf(r),i},e.finishDraft=function(n,r){var i=n&&n[Se],s=i.A;return $h(s,r),bh(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!Yv&&on(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=vn("Patches").$;return _r(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Vt=new G$,jC=Vt.produce;Vt.produceWithPatches.bind(Vt);Vt.setAutoFreeze.bind(Vt);Vt.setUseProxies.bind(Vt);Vt.applyPatches.bind(Vt);Vt.createDraft.bind(Vt);Vt.finishDraft.bind(Vt);function Q$(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function e0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zv(Object(n),!0).forEach(function(r){Q$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var t0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Fh=function(){return Math.random().toString(36).substring(7).split("").join(".")},wl={INIT:"@@redux/INIT"+Fh(),REPLACE:"@@redux/REPLACE"+Fh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Fh()}};function X$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function zC(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(dt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(dt(1));return n(zC)(t,e)}if(typeof t!="function")throw new Error(dt(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(dt(3));return s}function h(v){if(typeof v!="function")throw new Error(dt(4));if(u)throw new Error(dt(5));var w=!0;return l(),a.push(v),function(){if(!!w){if(u)throw new Error(dt(6));w=!1,l();var f=a.indexOf(v);a.splice(f,1),o=null}}}function d(v){if(!X$(v))throw new Error(dt(7));if(typeof v.type>"u")throw new Error(dt(8));if(u)throw new Error(dt(9));try{u=!0,s=i(s,v)}finally{u=!1}for(var w=o=a,m=0;m<w.length;m++){var f=w[m];f()}return v}function p(v){if(typeof v!="function")throw new Error(dt(10));i=v,d({type:wl.REPLACE})}function g(){var v,w=h;return v={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(dt(11));function y(){f.next&&f.next(c())}y();var S=w(y);return{unsubscribe:S}}},v[t0]=function(){return this},v}return d({type:wl.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[t0]=g,r}function Y$(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:wl.INIT});if(typeof r>"u")throw new Error(dt(12));if(typeof n(void 0,{type:wl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(dt(13))})}function J$(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{Y$(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],g=n[p],v=u[p],w=g(v,l);if(typeof w>"u")throw l&&l.type,new Error(dt(14));h[p]=w,c=c||w!==v}return c=c||s.length!==Object.keys(u).length,c?h:u}}function El(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Z$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(dt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=El.apply(void 0,a)(i.dispatch),e0(e0({},i),{},{dispatch:s})}}}function HC(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var WC=HC();WC.withExtraArgument=HC;const n0=WC;var eb=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var Sl=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},tb=Object.defineProperty,r0=Object.getOwnPropertySymbols,nb=Object.prototype.hasOwnProperty,rb=Object.prototype.propertyIsEnumerable,i0=function(t,e,n){return e in t?tb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Ho=function(t,e){for(var n in e||(e={}))nb.call(e,n)&&i0(t,n,e[n]);if(r0)for(var r=0,i=r0(e);r<i.length;r++){var n=i[r];rb.call(e,n)&&i0(t,n,e[n])}return t},ib=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?El:El.apply(null,arguments)};function sb(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var ob=function(t){eb(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Sl([void 0],n[0].concat(this)))):new(e.bind.apply(e,Sl([void 0],n.concat(this))))},e}(Array);function Sf(t){return jn(t)?jC(t,function(){}):t}function ab(t){return typeof t=="boolean"}function ub(){return function(e){return lb(e)}}function lb(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new ob;return n&&(ab(n)?r.push(n0):r.push(n0.withExtraArgument(n.extraArgument))),r}var cb=!0;function hb(t){var e=ub(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,u=a===void 0?!0:a,l=n.preloadedState,c=l===void 0?void 0:l,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(sb(i))p=J$(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=o;typeof g=="function"&&(g=g(e));var v=Z$.apply(void 0,g),w=El;u&&(w=ib(Ho({trace:!cb},typeof u=="object"&&u)));var m=[v];Array.isArray(d)?m=Sl([v],d):typeof d=="function"&&(m=d(m));var f=w.apply(void 0,m);return zC(p,c,f)}function Wo(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Ho(Ho({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function KC(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function db(t){return typeof t=="function"}function fb(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?KC(e):[e,n,r],s=i[0],o=i[1],a=i[2],u;if(db(t))u=function(){return Sf(t())};else{var l=Sf(t);u=function(){return l}}function c(h,d){h===void 0&&(h=u());var p=Sl([s[d.type]],o.filter(function(g){var v=g.matcher;return v(d)}).map(function(g){var v=g.reducer;return v}));return p.filter(function(g){return!!g}).length===0&&(p=[a]),p.reduce(function(g,v){if(v)if(_r(g)){var w=g,m=v(w,d);return typeof m>"u"?g:m}else{if(jn(g))return jC(g,function(f){return v(f,d)});var m=v(g,d);if(typeof m>"u"){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return g},h)}return c.getInitialState=u,c}function pb(t,e){return t+"/"+e}function mb(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Sf(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=pb(e,c),p,g;"reducer"in h?(p=h.reducer,g=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=g?Wo(d,g):Wo(d)});function u(){var c=typeof t.extraReducers=="function"?KC(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],g=p===void 0?[]:p,v=c[2],w=v===void 0?void 0:v,m=Ho(Ho({},d),o);return fb(n,m,g,w)}var l;return{name:e,reducer:function(c,h){return l||(l=u()),l(c,h)},actions:a,caseReducers:s,getInitialState:function(){return l||(l=u()),l.getInitialState()}}}var Jm="listenerMiddleware";Wo(Jm+"/add");Wo(Jm+"/removeAll");Wo(Jm+"/remove");H$();const gb={currentUser:{value:{email:"",uid:""}}},qC=mb({name:"currentUser",initialState:gb,reducers:{setCurrentUser:(t,e)=>{t.currentUser.value=e.payload}}}),{setCurrentUser:GC}=qC.actions,yb=qC.reducer;function vb(){const[t,e]=O.exports.useState(!1),n=Cc();zm();const r=i=>{i.persist(),n.signOut(),e(s=>!s)};return O.exports.useEffect(()=>{Mm(n,i=>{e(!!i)})},[]),Te(Eb,{children:[T(wb,{src:"img/IconSearch.svg",alt:"search"}),t?T(s0,{to:"/",onClick:r,children:"\uB85C\uADF8\uC544\uC6C3"}):T(s0,{to:"/login",children:"\uB85C\uADF8\uC778"})]})}const wb=Ne.img`
  display: inline-block;
  border-radius: 0;
`,Eb=Ne.div`
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
`,s0=Ne(M$)`
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
`;function Sb(t){const[e,n]=O.exports.useState("IconHome");return T(ds,{children:Te(Cb,{className:t.className,children:[T(XO,{}),T(r$,{active:e,Change:n}),T(vb,{})]})})}const Cb=Ne.header`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
  box-sizing: border-box;
  padding: 0 50px;
  border-bottom: 1px solid #e6e6e6;
`;function _b(){const t=Cc(),e=zm();O.exports.useEffect(()=>{Mm(t,n=>{n&&e(GC({email:`${n.email}`,uid:`${n.uid}`}))})},[])}function Ib(){_b();const t=AC(e=>e.currentUser.currentUser.value.uid);return console.log(t),Te("div",{children:[T(Sb,{}),T(qO,{currentUser:t})]})}function kb(){const[t,e]=O.exports.useState(""),[n,r]=O.exports.useState(""),[i,s]=O.exports.useState(!1),[o,a]=O.exports.useState(""),u=Cc(),l=zm();O.exports.useEffect(()=>{Mm(u,p=>{p?(l(GC({email:`${p.email}`,uid:`${p.uid}`})),window.location.href!=="http://localhost:5173/"&&(window.location.href="/")):console.log("aa")})},[]);const c=p=>{const{target:{name:g,value:v}}=p;g==="email"?e(v):g==="password"&&r(v)};return Te(ds,{children:[Te(Tb,{onSubmit:async p=>{p.preventDefault();try{let g;i?g=await T2(u,t,n):g=await x2(u,t,n)}catch(g){a(g.message)}},children:[T("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:t,onChange:c,className:"authInput"}),T("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:n,onChange:c,className:"authInput"}),T("input",{type:"submit",value:i?"Create Account":"Log In",className:"authInput authSubmit"}),o&&T("span",{className:"authError",children:o})]}),T(xb,{onClick:()=>s(p=>!p),children:i?"Sign in":"Create Account"})]})}const Tb=Ne.form`
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
`,xb=Ne.div`
  margin-bottom: 10px;
  padding: 5px;
  border: 3px solid #e6e6e6;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #464646;
    color: #e6e6e6;
  }
`,Ab=()=>Te(Nb,{children:[T(kb,{}),T("div",{children:T("button",{onClick:async e=>{const{target:{name:n}}=e;let r;n==="google"&&(r=new In),await Y2(BP,r)},name:"google",children:"Continue with Google."})})]}),Nb=Ne.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  border: 2px solid #e6e6e6;
`;function Db(){return T(b$,{children:Te(P$,{children:[T(pf,{path:"/",element:T(Ib,{})}),T(pf,{path:"/login",element:T(Ab,{})})]})})}const Rb=hb({reducer:{currentUser:yb}});Uh.createRoot(document.getElementById("root")).render(T(IO,{store:Rb,children:T(Db,{})}));

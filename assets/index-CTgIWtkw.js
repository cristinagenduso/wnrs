(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function $d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ms={exports:{}},or={},gs={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),zd=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),Md=Symbol.for("react.suspense"),Fd=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),Ra=Symbol.iterator;function Bd(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,ks={};function rn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||vs}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ws(){}Ws.prototype=rn.prototype;function Oi(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||vs}var Bi=Oi.prototype=new Ws;Bi.constructor=Oi;ws(Bi,rn.prototype);Bi.isPureReactComponent=!0;var Ha=Array.isArray,xs=Object.prototype.hasOwnProperty,Ai={current:null},_s={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var o,r={},i=null,a=null;if(t!=null)for(o in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)xs.call(t,o)&&!_s.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)r[o]===void 0&&(r[o]=l[o]);return{$$typeof:Yn,type:e,key:i,ref:a,props:r,_owner:Ai.current}}function Ad(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function Vd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ma=/\/+/g;function xr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vd(""+e.key):t.toString(36)}function ko(e,t,n,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yn:case zd:a=!0}}if(a)return a=e,r=r(a),e=o===""?"."+xr(a,0):o,Ha(r)?(n="",e!=null&&(n=e.replace(Ma,"$&/")+"/"),ko(r,t,n,"",function(d){return d})):r!=null&&(Vi(r)&&(r=Ad(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ma,"$&/")+"/")+e)),t.push(r)),1;if(a=0,o=o===""?".":o+":",Ha(e))for(var l=0;l<e.length;l++){i=e[l];var s=o+xr(i,l);a+=ko(i,t,n,s,r)}else if(s=Bd(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+xr(i,l++),a+=ko(i,t,n,s,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function no(e,t,n){if(e==null)return e;var o=[],r=0;return ko(e,o,"","",function(i){return t.call(n,i,r++)}),o}function Ud(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Wo={transition:null},qd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Ai};function Is(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:no,forEach:function(e,t,n){no(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return no(e,function(){t++}),t},toArray:function(e){return no(e,function(t){return t})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=rn;$.Fragment=Td;$.Profiler=Ld;$.PureComponent=Oi;$.StrictMode=Pd;$.Suspense=Md;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qd;$.act=Is;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ws({},e.props),r=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ai.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)xs.call(t,s)&&!_s.hasOwnProperty(s)&&(o[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:Yn,type:e.type,key:r,ref:i,props:o,_owner:a}};$.createContext=function(e){return e={$$typeof:Rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dd,_context:e},e.Consumer=e};$.createElement=Cs;$.createFactory=function(e){var t=Cs.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Hd,render:e}};$.isValidElement=Vi;$.lazy=function(e){return{$$typeof:Od,_payload:{_status:-1,_result:e},_init:Ud}};$.memo=function(e,t){return{$$typeof:Fd,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};$.unstable_act=Is;$.useCallback=function(e,t){return ue.current.useCallback(e,t)};$.useContext=function(e){return ue.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};$.useEffect=function(e,t){return ue.current.useEffect(e,t)};$.useId=function(){return ue.current.useId()};$.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ue.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};$.useRef=function(e){return ue.current.useRef(e)};$.useState=function(e){return ue.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ue.current.useTransition()};$.version="18.3.1";gs.exports=$;var z=gs.exports;const Qd=$d(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=z,Yd=Symbol.for("react.element"),Kd=Symbol.for("react.fragment"),Xd=Object.prototype.hasOwnProperty,Zd=Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jd={key:!0,ref:!0,__self:!0,__source:!0};function Ss(e,t,n){var o,r={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)Xd.call(t,o)&&!Jd.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Yd,type:e,key:i,ref:a,props:r,_owner:Zd.current}}or.Fragment=Kd;or.jsx=Ss;or.jsxs=Ss;ms.exports=or;var u=ms.exports,Gr={},Es={exports:{}},ke={},bs={exports:{}},js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,b){var N=S.length;S.push(b);e:for(;0<N;){var U=N-1>>>1,K=S[U];if(0<r(K,b))S[U]=b,S[N]=K,N=U;else break e}}function n(S){return S.length===0?null:S[0]}function o(S){if(S.length===0)return null;var b=S[0],N=S.pop();if(N!==b){S[0]=N;e:for(var U=0,K=S.length,eo=K>>>1;U<eo;){var mt=2*(U+1)-1,Wr=S[mt],gt=mt+1,to=S[gt];if(0>r(Wr,N))gt<K&&0>r(to,Wr)?(S[U]=to,S[gt]=N,U=gt):(S[U]=Wr,S[mt]=N,U=mt);else if(gt<K&&0>r(to,N))S[U]=to,S[gt]=N,U=gt;else break e}}return b}function r(S,b){var N=S.sortIndex-b.sortIndex;return N!==0?N:S.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],d=[],m=1,f=null,p=3,g=!1,v=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(S){for(var b=n(d);b!==null;){if(b.callback===null)o(d);else if(b.startTime<=S)o(d),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(d)}}function w(S){if(x=!1,y(S),!v)if(n(s)!==null)v=!0,wr(_);else{var b=n(d);b!==null&&kr(w,b.startTime-S)}}function _(S,b){v=!1,x&&(x=!1,c(C),C=-1),g=!0;var N=p;try{for(y(b),f=n(s);f!==null&&(!(f.expirationTime>b)||S&&!ne());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var K=U(f.expirationTime<=b);b=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(s)&&o(s),y(b)}else o(s);f=n(s)}if(f!==null)var eo=!0;else{var mt=n(d);mt!==null&&kr(w,mt.startTime-b),eo=!1}return eo}finally{f=null,p=N,g=!1}}var E=!1,W=null,C=-1,D=5,j=-1;function ne(){return!(e.unstable_now()-j<D)}function sn(){if(W!==null){var S=e.unstable_now();j=S;var b=!0;try{b=W(!0,S)}finally{b?un():(E=!1,W=null)}}else E=!1}var un;if(typeof h=="function")un=function(){h(sn)};else if(typeof MessageChannel<"u"){var Da=new MessageChannel,Nd=Da.port2;Da.port1.onmessage=sn,un=function(){Nd.postMessage(null)}}else un=function(){L(sn,0)};function wr(S){W=S,E||(E=!0,un())}function kr(S,b){C=L(function(){S(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,wr(_))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var b=3;break;default:b=p}var N=p;p=b;try{return S()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,b){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var N=p;p=S;try{return b()}finally{p=N}},e.unstable_scheduleCallback=function(S,b,N){var U=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?U+N:U):N=U,S){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=N+K,S={id:m++,callback:b,priorityLevel:S,startTime:N,expirationTime:K,sortIndex:-1},N>U?(S.sortIndex=N,t(d,S),n(s)===null&&S===n(d)&&(x?(c(C),C=-1):x=!0,kr(w,N-U))):(S.sortIndex=K,t(s,S),v||g||(v=!0,wr(_))),S},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(S){var b=p;return function(){var N=p;p=b;try{return S.apply(this,arguments)}finally{p=N}}}})(js);bs.exports=js;var eh=bs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=z,we=eh;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ns=new Set,zn={};function Nt(e,t){Xt(e,t),Xt(e+"Capture",t)}function Xt(e,t){for(zn[e]=t,e=0;e<t.length;e++)Ns.add(t[e])}var Ue=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yr=Object.prototype.hasOwnProperty,nh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fa={},Oa={};function oh(e){return Yr.call(Oa,e)?!0:Yr.call(Fa,e)?!1:nh.test(e)?Oa[e]=!0:(Fa[e]=!0,!1)}function rh(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ih(e,t,n,o){if(t===null||typeof t>"u"||rh(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,o,r,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ui=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ui,qi);te[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ui,qi);te[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ui,qi);te[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,t,n,o){var r=te.hasOwnProperty(t)?te[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ih(t,n,r,o)&&(n=null),o||r===null?oh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Ye=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),Tt=Symbol.for("react.portal"),Pt=Symbol.for("react.fragment"),Gi=Symbol.for("react.strict_mode"),Kr=Symbol.for("react.profiler"),$s=Symbol.for("react.provider"),zs=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Xr=Symbol.for("react.suspense"),Zr=Symbol.for("react.suspense_list"),Ki=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Ts=Symbol.for("react.offscreen"),Ba=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,_r;function wn(e){if(_r===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_r=t&&t[1]||""}return`
`+_r+e}var Cr=!1;function Ir(e,t){if(!e||Cr)return"";Cr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),i=o.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var s=`
`+r[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Cr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function ah(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Ir(e.type,!1),e;case 11:return e=Ir(e.type.render,!1),e;case 1:return e=Ir(e.type,!0),e;default:return""}}function Jr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pt:return"Fragment";case Tt:return"Portal";case Kr:return"Profiler";case Gi:return"StrictMode";case Xr:return"Suspense";case Zr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zs:return(e.displayName||"Context")+".Consumer";case $s:return(e._context.displayName||"Context")+".Provider";case Yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ki:return t=e.displayName||null,t!==null?t:Jr(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return Jr(e(t))}catch{}}return null}function lh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jr(t);case 8:return t===Gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sh(e){var t=Ps(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){o=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=sh(e))}function Ls(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Ps(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ei(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ds(e,t){t=t.checked,t!=null&&Qi(e,"checked",t,!1)}function ti(e,t){Ds(e,t);var n=ht(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ni(e,t.type,n):t.hasOwnProperty("defaultValue")&&ni(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ni(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Ut(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(kn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function Rs(e,t){var n=ht(t.value),o=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function qa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,Ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uh=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){uh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Fs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Os(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Fs(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var dh=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(e,t){if(t){if(dh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,qt=null,Qt=null;function Qa(e){if(e=Zn(e)){if(typeof si!="function")throw Error(k(280));var t=e.stateNode;t&&(t=sr(t),si(e.stateNode,e.type,t))}}function Bs(e){qt?Qt?Qt.push(e):Qt=[e]:qt=e}function As(){if(qt){var e=qt,t=Qt;if(Qt=qt=null,Qa(e),t)for(e=0;e<t.length;e++)Qa(t[e])}}function Vs(e,t){return e(t)}function Us(){}var Sr=!1;function qs(e,t,n){if(Sr)return e(t,n);Sr=!0;try{return Vs(e,t,n)}finally{Sr=!1,(qt!==null||Qt!==null)&&(Us(),As())}}function Pn(e,t){var n=e.stateNode;if(n===null)return null;var o=sr(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ui=!1;if(Ue)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{ui=!1}function hh(e,t,n,o,r,i,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Cn=!1,To=null,Po=!1,di=null,ch={onError:function(e){Cn=!0,To=e}};function fh(e,t,n,o,r,i,a,l,s){Cn=!1,To=null,hh.apply(ch,arguments)}function yh(e,t,n,o,r,i,a,l,s){if(fh.apply(this,arguments),Cn){if(Cn){var d=To;Cn=!1,To=null}else throw Error(k(198));Po||(Po=!0,di=d)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ga(e){if($t(e)!==e)throw Error(k(188))}function ph(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return Ga(r),e;if(i===o)return Ga(r),t;i=i.sibling}throw Error(k(188))}if(n.return!==o.return)n=r,o=i;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,o=i;break}if(l===o){a=!0,o=r,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,o=r;break}if(l===o){a=!0,o=i,n=r;break}l=l.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==o)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Gs(e){return e=ph(e),e!==null?Ys(e):null}function Ys(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ys(e);if(t!==null)return t;e=e.sibling}return null}var Ks=we.unstable_scheduleCallback,Ya=we.unstable_cancelCallback,mh=we.unstable_shouldYield,gh=we.unstable_requestPaint,q=we.unstable_now,vh=we.unstable_getCurrentPriorityLevel,Zi=we.unstable_ImmediatePriority,Xs=we.unstable_UserBlockingPriority,Lo=we.unstable_NormalPriority,wh=we.unstable_LowPriority,Zs=we.unstable_IdlePriority,rr=null,He=null;function kh(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(rr,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:_h,Wh=Math.log,xh=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(Wh(e)/xh|0)|0}var ao=64,lo=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?o=Wn(l):(i&=a,i!==0&&(o=Wn(i)))}else a=n&~r,a!==0?o=Wn(a):i!==0&&(o=Wn(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-ze(t),r=1<<n,o|=e[n],t&=~r;return o}function Ch(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ih(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-ze(i),l=1<<a,s=r[a];s===-1?(!(l&n)||l&o)&&(r[a]=Ch(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Js(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function Er(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Sh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-ze(n),i=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~i}}function Ji(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-ze(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var P=0;function eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tu,ea,nu,ou,ru,ci=!1,so=[],ot=null,rt=null,it=null,Ln=new Map,Dn=new Map,Je=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function cn(e,t,n,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Zn(t),t!==null&&ea(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function bh(e,t,n,o,r){switch(t){case"focusin":return ot=cn(ot,e,t,n,o,r),!0;case"dragenter":return rt=cn(rt,e,t,n,o,r),!0;case"mouseover":return it=cn(it,e,t,n,o,r),!0;case"pointerover":var i=r.pointerId;return Ln.set(i,cn(Ln.get(i)||null,e,t,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,Dn.set(i,cn(Dn.get(i)||null,e,t,n,o,r)),!0}return!1}function iu(e){var t=kt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Qs(n),t!==null){e.blockedOn=t,ru(e.priority,function(){nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);li=o,n.target.dispatchEvent(o),li=null}else return t=Zn(n),t!==null&&ea(t),e.blockedOn=n,!1;t.shift()}return!0}function Xa(e,t,n){xo(e)&&n.delete(t)}function jh(){ci=!1,ot!==null&&xo(ot)&&(ot=null),rt!==null&&xo(rt)&&(rt=null),it!==null&&xo(it)&&(it=null),Ln.forEach(Xa),Dn.forEach(Xa)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,jh)))}function Rn(e){function t(r){return fn(r,e)}if(0<so.length){fn(so[0],e);for(var n=1;n<so.length;n++){var o=so[n];o.blockedOn===e&&(o.blockedOn=null)}}for(ot!==null&&fn(ot,e),rt!==null&&fn(rt,e),it!==null&&fn(it,e),Ln.forEach(t),Dn.forEach(t),n=0;n<Je.length;n++)o=Je[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Je.length&&(n=Je[0],n.blockedOn===null);)iu(n),n.blockedOn===null&&Je.shift()}var Gt=Ye.ReactCurrentBatchConfig,Ro=!0;function Nh(e,t,n,o){var r=P,i=Gt.transition;Gt.transition=null;try{P=1,ta(e,t,n,o)}finally{P=r,Gt.transition=i}}function $h(e,t,n,o){var r=P,i=Gt.transition;Gt.transition=null;try{P=4,ta(e,t,n,o)}finally{P=r,Gt.transition=i}}function ta(e,t,n,o){if(Ro){var r=fi(e,t,n,o);if(r===null)Rr(e,t,o,Ho,n),Ka(e,o);else if(bh(r,e,t,n,o))o.stopPropagation();else if(Ka(e,o),t&4&&-1<Eh.indexOf(e)){for(;r!==null;){var i=Zn(r);if(i!==null&&tu(i),i=fi(e,t,n,o),i===null&&Rr(e,t,o,Ho,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else Rr(e,t,o,null,n)}}var Ho=null;function fi(e,t,n,o){if(Ho=null,e=Xi(o),e=kt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vh()){case Zi:return 1;case Xs:return 4;case Lo:case wh:return 16;case Zs:return 536870912;default:return 16}default:return 16}}var tt=null,na=null,_o=null;function lu(){if(_o)return _o;var e,t=na,n=t.length,o,r="value"in tt?tt.value:tt.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(o=1;o<=a&&t[n-o]===r[i-o];o++);return _o=r.slice(e,1<o?1-o:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function Za(){return!1}function We(e){function t(n,o,r,i,a){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uo:Za,this.isPropagationStopped=Za,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=We(an),Xn=A({},an,{view:0,detail:0}),zh=We(Xn),br,jr,yn,ir=A({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(br=e.screenX-yn.screenX,jr=e.screenY-yn.screenY):jr=br=0,yn=e),br)},movementY:function(e){return"movementY"in e?e.movementY:jr}}),Ja=We(ir),Th=A({},ir,{dataTransfer:0}),Ph=We(Th),Lh=A({},Xn,{relatedTarget:0}),Nr=We(Lh),Dh=A({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),Rh=We(Dh),Hh=A({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mh=We(Hh),Fh=A({},an,{data:0}),el=We(Fh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ah[e])?!!t[e]:!1}function ra(){return Vh}var Uh=A({},Xn,{key:function(e){if(e.key){var t=Oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qh=We(Uh),Qh=A({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=We(Qh),Gh=A({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Yh=We(Gh),Kh=A({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xh=We(Kh),Zh=A({},ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jh=We(Zh),ec=[9,13,27,32],ia=Ue&&"CompositionEvent"in window,In=null;Ue&&"documentMode"in document&&(In=document.documentMode);var tc=Ue&&"TextEvent"in window&&!In,su=Ue&&(!ia||In&&8<In&&11>=In),nl=" ",ol=!1;function uu(e,t){switch(e){case"keyup":return ec.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function nc(e,t){switch(e){case"compositionend":return du(t);case"keypress":return t.which!==32?null:(ol=!0,nl);case"textInput":return e=t.data,e===nl&&ol?null:e;default:return null}}function oc(e,t){if(Lt)return e==="compositionend"||!ia&&uu(e,t)?(e=lu(),_o=na=tt=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return su&&t.locale!=="ko"?null:t.data;default:return null}}var rc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rc[e.type]:t==="textarea"}function hu(e,t,n,o){Bs(o),t=Mo(t,"onChange"),0<t.length&&(n=new oa("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Sn=null,Hn=null;function ic(e){xu(e,0)}function ar(e){var t=Ht(e);if(Ls(t))return e}function ac(e,t){if(e==="change")return t}var cu=!1;if(Ue){var $r;if(Ue){var zr="oninput"in document;if(!zr){var il=document.createElement("div");il.setAttribute("oninput","return;"),zr=typeof il.oninput=="function"}$r=zr}else $r=!1;cu=$r&&(!document.documentMode||9<document.documentMode)}function al(){Sn&&(Sn.detachEvent("onpropertychange",fu),Hn=Sn=null)}function fu(e){if(e.propertyName==="value"&&ar(Hn)){var t=[];hu(t,Hn,e,Xi(e)),qs(ic,t)}}function lc(e,t,n){e==="focusin"?(al(),Sn=t,Hn=n,Sn.attachEvent("onpropertychange",fu)):e==="focusout"&&al()}function sc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ar(Hn)}function uc(e,t){if(e==="click")return ar(t)}function dc(e,t){if(e==="input"||e==="change")return ar(t)}function hc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:hc;function Mn(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Yr.call(t,r)||!Pe(e[r],t[r]))return!1}return!0}function ll(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sl(e,t){var n=ll(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ll(n)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pu(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cc(e){var t=pu(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yu(n.ownerDocument.documentElement,n)){if(o!==null&&aa(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=sl(n,i);var a=sl(n,o);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fc=Ue&&"documentMode"in document&&11>=document.documentMode,Dt=null,yi=null,En=null,pi=!1;function ul(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Dt==null||Dt!==zo(o)||(o=Dt,"selectionStart"in o&&aa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),En&&Mn(En,o)||(En=o,o=Mo(yi,"onSelect"),0<o.length&&(t=new oa("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Dt)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rt={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Tr={},mu={};Ue&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function lr(e){if(Tr[e])return Tr[e];if(!Rt[e])return e;var t=Rt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mu)return Tr[e]=t[n];return e}var gu=lr("animationend"),vu=lr("animationiteration"),wu=lr("animationstart"),ku=lr("transitionend"),Wu=new Map,dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Wu.set(e,t),Nt(t,[e])}for(var Pr=0;Pr<dl.length;Pr++){var Lr=dl[Pr],yc=Lr.toLowerCase(),pc=Lr[0].toUpperCase()+Lr.slice(1);ft(yc,"on"+pc)}ft(gu,"onAnimationEnd");ft(vu,"onAnimationIteration");ft(wu,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(ku,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mc=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function hl(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,yh(o,t,void 0,e),e.currentTarget=null}function xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var a=o.length-1;0<=a;a--){var l=o[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==i&&r.isPropagationStopped())break e;hl(r,l,d),i=s}else for(a=0;a<o.length;a++){if(l=o[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==i&&r.isPropagationStopped())break e;hl(r,l,d),i=s}}}if(Po)throw e=di,Po=!1,di=null,e}function H(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var o=e+"__bubble";n.has(o)||(_u(t,e,2,!1),n.add(o))}function Dr(e,t,n){var o=0;t&&(o|=4),_u(n,e,o,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[co]){e[co]=!0,Ns.forEach(function(n){n!=="selectionchange"&&(mc.has(n)||Dr(n,!1,e),Dr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Dr("selectionchange",!1,t))}}function _u(e,t,n,o){switch(au(t)){case 1:var r=Nh;break;case 4:r=$h;break;default:r=ta}n=r.bind(null,t,n,e),r=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Rr(e,t,n,o,r){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var l=o.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=o.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;a=a.return}for(;l!==null;){if(a=kt(l),a===null)return;if(s=a.tag,s===5||s===6){o=i=a;continue e}l=l.parentNode}}o=o.return}qs(function(){var d=i,m=Xi(n),f=[];e:{var p=Wu.get(e);if(p!==void 0){var g=oa,v=e;switch(e){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":g=qh;break;case"focusin":v="focus",g=Nr;break;case"focusout":v="blur",g=Nr;break;case"beforeblur":case"afterblur":g=Nr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Yh;break;case gu:case vu:case wu:g=Rh;break;case ku:g=Xh;break;case"scroll":g=zh;break;case"wheel":g=Jh;break;case"copy":case"cut":case"paste":g=Mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=tl}var x=(t&4)!==0,L=!x&&e==="scroll",c=x?p!==null?p+"Capture":null:p;x=[];for(var h=d,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,c!==null&&(w=Pn(h,c),w!=null&&x.push(On(h,w,y)))),L)break;h=h.return}0<x.length&&(p=new g(p,v,null,n,m),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==li&&(v=n.relatedTarget||n.fromElement)&&(kt(v)||v[qe]))break e;if((g||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=d,v=v?kt(v):null,v!==null&&(L=$t(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(x=Ja,w="onMouseLeave",c="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=tl,w="onPointerLeave",c="onPointerEnter",h="pointer"),L=g==null?p:Ht(g),y=v==null?p:Ht(v),p=new x(w,h+"leave",g,n,m),p.target=L,p.relatedTarget=y,w=null,kt(m)===d&&(x=new x(c,h+"enter",v,n,m),x.target=y,x.relatedTarget=L,w=x),L=w,g&&v)t:{for(x=g,c=v,h=0,y=x;y;y=zt(y))h++;for(y=0,w=c;w;w=zt(w))y++;for(;0<h-y;)x=zt(x),h--;for(;0<y-h;)c=zt(c),y--;for(;h--;){if(x===c||c!==null&&x===c.alternate)break t;x=zt(x),c=zt(c)}x=null}else x=null;g!==null&&cl(f,p,g,x,!1),v!==null&&L!==null&&cl(f,L,v,x,!0)}}e:{if(p=d?Ht(d):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var _=ac;else if(rl(p))if(cu)_=dc;else{_=sc;var E=lc}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=uc);if(_&&(_=_(e,d))){hu(f,_,n,m);break e}E&&E(e,p,d),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&ni(p,"number",p.value)}switch(E=d?Ht(d):window,e){case"focusin":(rl(E)||E.contentEditable==="true")&&(Dt=E,yi=d,En=null);break;case"focusout":En=yi=Dt=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,ul(f,n,m);break;case"selectionchange":if(fc)break;case"keydown":case"keyup":ul(f,n,m)}var W;if(ia)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Lt?uu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(su&&n.locale!=="ko"&&(Lt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Lt&&(W=lu()):(tt=m,na="value"in tt?tt.value:tt.textContent,Lt=!0)),E=Mo(d,C),0<E.length&&(C=new el(C,e,null,n,m),f.push({event:C,listeners:E}),W?C.data=W:(W=du(n),W!==null&&(C.data=W)))),(W=tc?nc(e,n):oc(e,n))&&(d=Mo(d,"onBeforeInput"),0<d.length&&(m=new el("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:d}),m.data=W))}xu(f,t)})}function On(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Pn(e,n),i!=null&&o.unshift(On(e,i,r)),i=Pn(e,t),i!=null&&o.push(On(e,i,r))),e=e.return}return o}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cl(e,t,n,o,r){for(var i=t._reactName,a=[];n!==null&&n!==o;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===o)break;l.tag===5&&d!==null&&(l=d,r?(s=Pn(n,i),s!=null&&a.unshift(On(n,s,l))):r||(s=Pn(n,i),s!=null&&a.push(On(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var gc=/\r\n?/g,vc=/\u0000|\uFFFD/g;function fl(e){return(typeof e=="string"?e:""+e).replace(gc,`
`).replace(vc,"")}function fo(e,t,n){if(t=fl(t),fl(e)!==t&&n)throw Error(k(425))}function Fo(){}var mi=null,gi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,wc=typeof clearTimeout=="function"?clearTimeout:void 0,yl=typeof Promise=="function"?Promise:void 0,kc=typeof queueMicrotask=="function"?queueMicrotask:typeof yl<"u"?function(e){return yl.resolve(null).then(e).catch(Wc)}:wi;function Wc(e){setTimeout(function(){throw e})}function Hr(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Rn(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Rn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),Re="__reactFiber$"+ln,Bn="__reactProps$"+ln,qe="__reactContainer$"+ln,ki="__reactEvents$"+ln,xc="__reactListeners$"+ln,_c="__reactHandles$"+ln;function kt(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[Re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pl(e);e!==null;){if(n=e[Re])return n;e=pl(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Re]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function sr(e){return e[Bn]||null}var Wi=[],Mt=-1;function yt(e){return{current:e}}function M(e){0>Mt||(e.current=Wi[Mt],Wi[Mt]=null,Mt--)}function R(e,t){Mt++,Wi[Mt]=e.current,e.current=t}var ct={},ae=yt(ct),fe=yt(!1),It=ct;function Zt(e,t){var n=e.type.contextTypes;if(!n)return ct;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function ye(e){return e=e.childContextTypes,e!=null}function Oo(){M(fe),M(ae)}function ml(e,t,n){if(ae.current!==ct)throw Error(k(168));R(ae,t),R(fe,n)}function Cu(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(k(108,lh(e)||"Unknown",r));return A({},n,o)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,It=ae.current,R(ae,e),R(fe,fe.current),!0}function gl(e,t,n){var o=e.stateNode;if(!o)throw Error(k(169));n?(e=Cu(e,t,It),o.__reactInternalMemoizedMergedChildContext=e,M(fe),M(ae),R(ae,e)):M(fe),R(fe,n)}var Oe=null,ur=!1,Mr=!1;function Iu(e){Oe===null?Oe=[e]:Oe.push(e)}function Cc(e){ur=!0,Iu(e)}function pt(){if(!Mr&&Oe!==null){Mr=!0;var e=0,t=P;try{var n=Oe;for(P=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Oe=null,ur=!1}catch(r){throw Oe!==null&&(Oe=Oe.slice(e+1)),Ks(Zi,pt),r}finally{P=t,Mr=!1}}return null}var Ft=[],Ot=0,Ao=null,Vo=0,xe=[],_e=0,St=null,Be=1,Ae="";function vt(e,t){Ft[Ot++]=Vo,Ft[Ot++]=Ao,Ao=e,Vo=t}function Su(e,t,n){xe[_e++]=Be,xe[_e++]=Ae,xe[_e++]=St,St=e;var o=Be;e=Ae;var r=32-ze(o)-1;o&=~(1<<r),n+=1;var i=32-ze(t)+r;if(30<i){var a=r-r%5;i=(o&(1<<a)-1).toString(32),o>>=a,r-=a,Be=1<<32-ze(t)+r|n<<r|o,Ae=i+e}else Be=1<<i|n<<r|o,Ae=e}function la(e){e.return!==null&&(vt(e,1),Su(e,1,0))}function sa(e){for(;e===Ao;)Ao=Ft[--Ot],Ft[Ot]=null,Vo=Ft[--Ot],Ft[Ot]=null;for(;e===St;)St=xe[--_e],xe[_e]=null,Ae=xe[--_e],xe[_e]=null,Be=xe[--_e],xe[_e]=null}var ve=null,ge=null,F=!1,$e=null;function Eu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=St!==null?{id:Be,overflow:Ae}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(F){var t=ge;if(t){var n=t;if(!vl(e,t)){if(xi(e))throw Error(k(418));t=at(n.nextSibling);var o=ve;t&&vl(e,t)?Eu(o,n):(e.flags=e.flags&-4097|2,F=!1,ve=e)}}else{if(xi(e))throw Error(k(418));e.flags=e.flags&-4097|2,F=!1,ve=e}}}function wl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function yo(e){if(e!==ve)return!1;if(!F)return wl(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=ge)){if(xi(e))throw bu(),Error(k(418));for(;t;)Eu(e,t),t=at(t.nextSibling)}if(wl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?at(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=ge;e;)e=at(e.nextSibling)}function Jt(){ge=ve=null,F=!1}function ua(e){$e===null?$e=[e]:$e.push(e)}var Ic=Ye.ReactCurrentBatchConfig;function pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var o=n.stateNode}if(!o)throw Error(k(147,e));var r=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kl(e){var t=e._init;return t(e._payload)}function ju(e){function t(c,h){if(e){var y=c.deletions;y===null?(c.deletions=[h],c.flags|=16):y.push(h)}}function n(c,h){if(!e)return null;for(;h!==null;)t(c,h),h=h.sibling;return null}function o(c,h){for(c=new Map;h!==null;)h.key!==null?c.set(h.key,h):c.set(h.index,h),h=h.sibling;return c}function r(c,h){return c=dt(c,h),c.index=0,c.sibling=null,c}function i(c,h,y){return c.index=y,e?(y=c.alternate,y!==null?(y=y.index,y<h?(c.flags|=2,h):y):(c.flags|=2,h)):(c.flags|=1048576,h)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,h,y,w){return h===null||h.tag!==6?(h=qr(y,c.mode,w),h.return=c,h):(h=r(h,y),h.return=c,h)}function s(c,h,y,w){var _=y.type;return _===Pt?m(c,h,y.props.children,w,y.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xe&&kl(_)===h.type)?(w=r(h,y.props),w.ref=pn(c,h,y),w.return=c,w):(w=$o(y.type,y.key,y.props,null,c.mode,w),w.ref=pn(c,h,y),w.return=c,w)}function d(c,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Qr(y,c.mode,w),h.return=c,h):(h=r(h,y.children||[]),h.return=c,h)}function m(c,h,y,w,_){return h===null||h.tag!==7?(h=Ct(y,c.mode,w,_),h.return=c,h):(h=r(h,y),h.return=c,h)}function f(c,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=qr(""+h,c.mode,y),h.return=c,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:return y=$o(h.type,h.key,h.props,null,c.mode,y),y.ref=pn(c,null,h),y.return=c,y;case Tt:return h=Qr(h,c.mode,y),h.return=c,h;case Xe:var w=h._init;return f(c,w(h._payload),y)}if(kn(h)||dn(h))return h=Ct(h,c.mode,y,null),h.return=c,h;po(c,h)}return null}function p(c,h,y,w){var _=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:l(c,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:return y.key===_?s(c,h,y,w):null;case Tt:return y.key===_?d(c,h,y,w):null;case Xe:return _=y._init,p(c,h,_(y._payload),w)}if(kn(y)||dn(y))return _!==null?null:m(c,h,y,w,null);po(c,y)}return null}function g(c,h,y,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return c=c.get(y)||null,l(h,c,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oo:return c=c.get(w.key===null?y:w.key)||null,s(h,c,w,_);case Tt:return c=c.get(w.key===null?y:w.key)||null,d(h,c,w,_);case Xe:var E=w._init;return g(c,h,y,E(w._payload),_)}if(kn(w)||dn(w))return c=c.get(y)||null,m(h,c,w,_,null);po(h,w)}return null}function v(c,h,y,w){for(var _=null,E=null,W=h,C=h=0,D=null;W!==null&&C<y.length;C++){W.index>C?(D=W,W=null):D=W.sibling;var j=p(c,W,y[C],w);if(j===null){W===null&&(W=D);break}e&&W&&j.alternate===null&&t(c,W),h=i(j,h,C),E===null?_=j:E.sibling=j,E=j,W=D}if(C===y.length)return n(c,W),F&&vt(c,C),_;if(W===null){for(;C<y.length;C++)W=f(c,y[C],w),W!==null&&(h=i(W,h,C),E===null?_=W:E.sibling=W,E=W);return F&&vt(c,C),_}for(W=o(c,W);C<y.length;C++)D=g(W,c,C,y[C],w),D!==null&&(e&&D.alternate!==null&&W.delete(D.key===null?C:D.key),h=i(D,h,C),E===null?_=D:E.sibling=D,E=D);return e&&W.forEach(function(ne){return t(c,ne)}),F&&vt(c,C),_}function x(c,h,y,w){var _=dn(y);if(typeof _!="function")throw Error(k(150));if(y=_.call(y),y==null)throw Error(k(151));for(var E=_=null,W=h,C=h=0,D=null,j=y.next();W!==null&&!j.done;C++,j=y.next()){W.index>C?(D=W,W=null):D=W.sibling;var ne=p(c,W,j.value,w);if(ne===null){W===null&&(W=D);break}e&&W&&ne.alternate===null&&t(c,W),h=i(ne,h,C),E===null?_=ne:E.sibling=ne,E=ne,W=D}if(j.done)return n(c,W),F&&vt(c,C),_;if(W===null){for(;!j.done;C++,j=y.next())j=f(c,j.value,w),j!==null&&(h=i(j,h,C),E===null?_=j:E.sibling=j,E=j);return F&&vt(c,C),_}for(W=o(c,W);!j.done;C++,j=y.next())j=g(W,c,C,j.value,w),j!==null&&(e&&j.alternate!==null&&W.delete(j.key===null?C:j.key),h=i(j,h,C),E===null?_=j:E.sibling=j,E=j);return e&&W.forEach(function(sn){return t(c,sn)}),F&&vt(c,C),_}function L(c,h,y,w){if(typeof y=="object"&&y!==null&&y.type===Pt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:e:{for(var _=y.key,E=h;E!==null;){if(E.key===_){if(_=y.type,_===Pt){if(E.tag===7){n(c,E.sibling),h=r(E,y.props.children),h.return=c,c=h;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xe&&kl(_)===E.type){n(c,E.sibling),h=r(E,y.props),h.ref=pn(c,E,y),h.return=c,c=h;break e}n(c,E);break}else t(c,E);E=E.sibling}y.type===Pt?(h=Ct(y.props.children,c.mode,w,y.key),h.return=c,c=h):(w=$o(y.type,y.key,y.props,null,c.mode,w),w.ref=pn(c,h,y),w.return=c,c=w)}return a(c);case Tt:e:{for(E=y.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(c,h.sibling),h=r(h,y.children||[]),h.return=c,c=h;break e}else{n(c,h);break}else t(c,h);h=h.sibling}h=Qr(y,c.mode,w),h.return=c,c=h}return a(c);case Xe:return E=y._init,L(c,h,E(y._payload),w)}if(kn(y))return v(c,h,y,w);if(dn(y))return x(c,h,y,w);po(c,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(c,h.sibling),h=r(h,y),h.return=c,c=h):(n(c,h),h=qr(y,c.mode,w),h.return=c,c=h),a(c)):n(c,h)}return L}var en=ju(!0),Nu=ju(!1),Uo=yt(null),qo=null,Bt=null,da=null;function ha(){da=Bt=qo=null}function ca(e){var t=Uo.current;M(Uo),e._currentValue=t}function Ci(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){qo=e,da=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Se(e){var t=e._currentValue;if(da!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(qo===null)throw Error(k(308));Bt=e,qo.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var Wt=null;function fa(e){Wt===null?Wt=[e]:Wt.push(e)}function $u(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,fa(t)):(n.next=r.next,r.next=n),t.interleaved=n,Qe(e,o)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,T&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,Qe(e,n)}return r=o.interleaved,r===null?(t.next=t,fa(o)):(t.next=r.next,r.next=t),o.interleaved=t,Qe(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ji(e,n)}}function Wl(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qo(e,t,n,o){var r=e.updateQueue;Ze=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?i=d:a.next=d,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=s))}if(i!==null){var f=r.baseState;a=0,m=d=s=null,l=i;do{var p=l.lane,g=l.eventTime;if((o&p)===p){m!==null&&(m=m.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(p=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(g,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,f,p):v,p==null)break e;f=A({},f,p);break e;case 2:Ze=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=g,s=f):m=m.next=g,a|=p;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(m===null&&(s=f),r.baseState=s,r.firstBaseUpdate=d,r.lastBaseUpdate=m,t=r.shared.interleaved,t!==null){r=t;do a|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);bt|=a,e.lanes=a,e.memoizedState=f}}function xl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(k(191,r));r.call(o)}}}var Jn={},Me=yt(Jn),An=yt(Jn),Vn=yt(Jn);function xt(e){if(e===Jn)throw Error(k(174));return e}function pa(e,t){switch(R(Vn,t),R(An,e),R(Me,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}M(Me),R(Me,t)}function tn(){M(Me),M(An),M(Vn)}function Tu(e){xt(Vn.current);var t=xt(Me.current),n=ri(t,e.type);t!==n&&(R(An,e),R(Me,n))}function ma(e){An.current===e&&(M(Me),M(An))}var O=yt(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fr=[];function ga(){for(var e=0;e<Fr.length;e++)Fr[e]._workInProgressVersionPrimary=null;Fr.length=0}var So=Ye.ReactCurrentDispatcher,Or=Ye.ReactCurrentBatchConfig,Et=0,B=null,G=null,X=null,Yo=!1,bn=!1,Un=0,Sc=0;function oe(){throw Error(k(321))}function va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pe(e[n],t[n]))return!1;return!0}function wa(e,t,n,o,r,i){if(Et=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?Nc:$c,e=n(o,r),bn){i=0;do{if(bn=!1,Un=0,25<=i)throw Error(k(301));i+=1,X=G=null,t.updateQueue=null,So.current=zc,e=n(o,r)}while(bn)}if(So.current=Ko,t=G!==null&&G.next!==null,Et=0,X=G=B=null,Yo=!1,t)throw Error(k(300));return e}function ka(){var e=Un!==0;return Un=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?B.memoizedState=X=e:X=X.next=e,X}function Ee(){if(G===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=X===null?B.memoizedState:X.next;if(t!==null)X=t,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},X===null?B.memoizedState=X=e:X=X.next=e}return X}function qn(e,t){return typeof t=="function"?t(e):t}function Br(e){var t=Ee(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var o=G,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var l=a=null,s=null,d=i;do{var m=d.lane;if((Et&m)===m)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var f={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=f,a=o):s=s.next=f,B.lanes|=m,bt|=m}d=d.next}while(d!==null&&d!==i);s===null?a=o:s.next=l,Pe(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseState=a,t.baseQueue=s,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do i=r.lane,B.lanes|=i,bt|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ar(e){var t=Ee(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);Pe(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,o]}function Pu(){}function Lu(e,t){var n=B,o=Ee(),r=t(),i=!Pe(o.memoizedState,r);if(i&&(o.memoizedState=r,ce=!0),o=o.queue,Wa(Hu.bind(null,n,o,e),[e]),o.getSnapshot!==t||i||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Qn(9,Ru.bind(null,n,o,r,t),void 0,null),Z===null)throw Error(k(349));Et&30||Du(n,t,r)}return r}function Du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ru(e,t,n,o){t.value=n,t.getSnapshot=o,Mu(t)&&Fu(e)}function Hu(e,t,n){return n(function(){Mu(t)&&Fu(e)})}function Mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pe(e,n)}catch{return!0}}function Fu(e){var t=Qe(e,1);t!==null&&Te(t,e,1,-1)}function _l(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t.queue=e,e=e.dispatch=jc.bind(null,B,e),[t.memoizedState,e]}function Qn(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Ou(){return Ee().memoizedState}function Eo(e,t,n,o){var r=De();B.flags|=e,r.memoizedState=Qn(1|t,n,void 0,o===void 0?null:o)}function dr(e,t,n,o){var r=Ee();o=o===void 0?null:o;var i=void 0;if(G!==null){var a=G.memoizedState;if(i=a.destroy,o!==null&&va(o,a.deps)){r.memoizedState=Qn(t,n,i,o);return}}B.flags|=e,r.memoizedState=Qn(1|t,n,i,o)}function Cl(e,t){return Eo(8390656,8,e,t)}function Wa(e,t){return dr(2048,8,e,t)}function Bu(e,t){return dr(4,2,e,t)}function Au(e,t){return dr(4,4,e,t)}function Vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uu(e,t,n){return n=n!=null?n.concat([e]):null,dr(4,4,Vu.bind(null,t,e),n)}function xa(){}function qu(e,t){var n=Ee();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&va(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=Ee();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&va(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Gu(e,t,n){return Et&21?(Pe(n,t)||(n=Js(),B.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function Ec(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var o=Or.transition;Or.transition={};try{e(!1),t()}finally{P=n,Or.transition=o}}function Yu(){return Ee().memoizedState}function bc(e,t,n){var o=ut(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ku(e))Xu(t,n);else if(n=$u(e,t,n,o),n!==null){var r=se();Te(n,e,o,r),Zu(n,t,o)}}function jc(e,t,n){var o=ut(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Xu(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(r.hasEagerState=!0,r.eagerState=l,Pe(l,a)){var s=t.interleaved;s===null?(r.next=r,fa(t)):(r.next=s.next,s.next=r),t.interleaved=r;return}}catch{}finally{}n=$u(e,t,r,o),n!==null&&(r=se(),Te(n,e,o,r),Zu(n,t,o))}}function Ku(e){var t=e.alternate;return e===B||t!==null&&t===B}function Xu(e,t){bn=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zu(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ji(e,n)}}var Ko={readContext:Se,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Nc={readContext:Se,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Se,useEffect:Cl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,Vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=De();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=bc.bind(null,B,e),[o.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:_l,useDebugValue:xa,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=_l(!1),t=e[0];return e=Ec.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=B,r=De();if(F){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),Z===null)throw Error(k(349));Et&30||Du(o,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,Cl(Hu.bind(null,o,i,e),[e]),o.flags|=2048,Qn(9,Ru.bind(null,o,i,n,t),void 0,null),n},useId:function(){var e=De(),t=Z.identifierPrefix;if(F){var n=Ae,o=Be;n=(o&~(1<<32-ze(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Un++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$c={readContext:Se,useCallback:qu,useContext:Se,useEffect:Wa,useImperativeHandle:Uu,useInsertionEffect:Bu,useLayoutEffect:Au,useMemo:Qu,useReducer:Br,useRef:Ou,useState:function(){return Br(qn)},useDebugValue:xa,useDeferredValue:function(e){var t=Ee();return Gu(t,G.memoizedState,e)},useTransition:function(){var e=Br(qn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Lu,useId:Yu,unstable_isNewReconciler:!1},zc={readContext:Se,useCallback:qu,useContext:Se,useEffect:Wa,useImperativeHandle:Uu,useInsertionEffect:Bu,useLayoutEffect:Au,useMemo:Qu,useReducer:Ar,useRef:Ou,useState:function(){return Ar(qn)},useDebugValue:xa,useDeferredValue:function(e){var t=Ee();return G===null?t.memoizedState=e:Gu(t,G.memoizedState,e)},useTransition:function(){var e=Ar(qn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Lu,useId:Yu,unstable_isNewReconciler:!1};function je(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ii(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hr={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=se(),r=ut(e),i=Ve(o,r);i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,r),t!==null&&(Te(t,e,r,o),Io(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=se(),r=ut(e),i=Ve(o,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,r),t!==null&&(Te(t,e,r,o),Io(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),o=ut(e),r=Ve(n,o);r.tag=2,t!=null&&(r.callback=t),t=lt(e,r,o),t!==null&&(Te(t,e,o,n),Io(t,e,o))}};function Il(e,t,n,o,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,a):t.prototype&&t.prototype.isPureReactComponent?!Mn(n,o)||!Mn(r,i):!0}function Ju(e,t,n){var o=!1,r=ct,i=t.contextType;return typeof i=="object"&&i!==null?i=Se(i):(r=ye(t)?It:ae.current,o=t.contextTypes,i=(o=o!=null)?Zt(e,r):ct),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function Sl(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&hr.enqueueReplaceState(t,t.state,null)}function Si(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},ya(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Se(i):(i=ye(t)?It:ae.current,r.context=Zt(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ii(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&hr.enqueueReplaceState(r,r.state,null),Qo(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",o=t;do n+=ah(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Vr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tc=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Zo||(Zo=!0,Ri=o),Ei(e,t)},n}function td(e,t,n){n=Ve(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){Ei(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof o!="function"&&(st===null?st=new Set([this]):st.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function El(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Tc;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=Qc.bind(null,e,t,n),t.then(e,e))}function bl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jl(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var Pc=Ye.ReactCurrentOwner,ce=!1;function le(e,t,n,o){t.child=e===null?Nu(t,null,n,o):en(t,e.child,n,o)}function Nl(e,t,n,o,r){n=n.render;var i=t.ref;return Yt(t,r),o=wa(e,t,n,o,i,r),n=ka(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ge(e,t,r)):(F&&n&&la(t),t.flags|=1,le(e,t,o,r),t.child)}function $l(e,t,n,o,r){if(e===null){var i=n.type;return typeof i=="function"&&!Na(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,nd(e,t,i,o,r)):(e=$o(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(a,o)&&e.ref===t.ref)return Ge(e,t,r)}return t.flags|=1,e=dt(i,o),e.ref=t.ref,e.return=t,t.child=e}function nd(e,t,n,o,r){if(e!==null){var i=e.memoizedProps;if(Mn(i,o)&&e.ref===t.ref)if(ce=!1,t.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,r)}return bi(e,t,n,o,r)}function od(e,t,n){var o=t.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Vt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Vt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,R(Vt,me),me|=o}else i!==null?(o=i.baseLanes|n,t.memoizedState=null):o=n,R(Vt,me),me|=o;return le(e,t,r,n),t.child}function rd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bi(e,t,n,o,r){var i=ye(n)?It:ae.current;return i=Zt(t,i),Yt(t,r),n=wa(e,t,n,o,i,r),o=ka(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ge(e,t,r)):(F&&o&&la(t),t.flags|=1,le(e,t,n,r),t.child)}function zl(e,t,n,o,r){if(ye(n)){var i=!0;Bo(t)}else i=!1;if(Yt(t,r),t.stateNode===null)bo(e,t),Ju(t,n,o),Si(t,n,o,r),o=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Se(d):(d=ye(n)?It:ae.current,d=Zt(t,d));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==o||s!==d)&&Sl(t,a,o,d),Ze=!1;var p=t.memoizedState;a.state=p,Qo(t,o,a,r),s=t.memoizedState,l!==o||p!==s||fe.current||Ze?(typeof m=="function"&&(Ii(t,n,m,o),s=t.memoizedState),(l=Ze||Il(t,n,l,o,p,s,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=s),a.props=o,a.state=s,a.context=d,o=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{a=t.stateNode,zu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:je(t.type,l),a.props=d,f=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Se(s):(s=ye(n)?It:ae.current,s=Zt(t,s));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==s)&&Sl(t,a,o,s),Ze=!1,p=t.memoizedState,a.state=p,Qo(t,o,a,r);var v=t.memoizedState;l!==f||p!==v||fe.current||Ze?(typeof g=="function"&&(Ii(t,n,g,o),v=t.memoizedState),(d=Ze||Il(t,n,d,o,p,v,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),a.props=o,a.state=v,a.context=s,o=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return ji(e,t,n,o,i,r)}function ji(e,t,n,o,r,i){rd(e,t);var a=(t.flags&128)!==0;if(!o&&!a)return r&&gl(t,n,!1),Ge(e,t,i);o=t.stateNode,Pc.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&a?(t.child=en(t,e.child,null,i),t.child=en(t,null,l,i)):le(e,t,l,i),t.memoizedState=o.state,r&&gl(t,n,!0),t.child}function id(e){var t=e.stateNode;t.pendingContext?ml(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ml(e,t.context,!1),pa(e,t.containerInfo)}function Tl(e,t,n,o,r){return Jt(),ua(r),t.flags|=256,le(e,t,n,o),t.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function ad(e,t,n){var o=t.pendingProps,r=O.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),R(O,r&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=o.children,e=o.fallback,i?(o=t.mode,i=t.child,a={mode:"hidden",children:a},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=yr(a,o,0,null),e=Ct(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$i(n),t.memoizedState=Ni,e):_a(t,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Lc(e,t,a,o,l,r,n);if(i){i=o.fallback,a=t.mode,r=e.child,l=r.sibling;var s={mode:"hidden",children:o.children};return!(a&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=s,t.deletions=null):(o=dt(r,s),o.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=dt(l,i):(i=Ct(i,a,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,a=e.child.memoizedState,a=a===null?$i(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ni,o}return i=e.child,e=i.sibling,o=dt(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function _a(e,t){return t=yr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,o){return o!==null&&ua(o),en(t,e.child,null,n),e=_a(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lc(e,t,n,o,r,i,a){if(n)return t.flags&256?(t.flags&=-257,o=Vr(Error(k(422))),mo(e,t,a,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,r=t.mode,o=yr({mode:"visible",children:o.children},r,0,null),i=Ct(i,r,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&en(t,e.child,null,a),t.child.memoizedState=$i(a),t.memoizedState=Ni,i);if(!(t.mode&1))return mo(e,t,a,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,i=Error(k(419)),o=Vr(i,o,void 0),mo(e,t,a,o)}if(l=(a&e.childLanes)!==0,ce||l){if(o=Z,o!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Qe(e,r),Te(o,e,r,-1))}return ja(),o=Vr(Error(k(421))),mo(e,t,a,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Gc.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,ge=at(r.nextSibling),ve=t,F=!0,$e=null,e!==null&&(xe[_e++]=Be,xe[_e++]=Ae,xe[_e++]=St,Be=e.id,Ae=e.overflow,St=t),t=_a(t,o.children),t.flags|=4096,t)}function Pl(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ci(e.return,t,n)}function Ur(e,t,n,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function ld(e,t,n){var o=t.pendingProps,r=o.revealOrder,i=o.tail;if(le(e,t,o.children,n),o=O.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pl(e,n,t);else if(e.tag===19)Pl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(R(O,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ur(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Go(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ur(t,!0,n,null,i);break;case"together":Ur(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t,n){switch(t.tag){case 3:id(t),Jt();break;case 5:Tu(t);break;case 1:ye(t.type)&&Bo(t);break;case 4:pa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;R(Uo,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(R(O,O.current&1),t.flags|=128,null):n&t.child.childLanes?ad(e,t,n):(R(O,O.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);R(O,O.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return ld(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),R(O,O.current),o)break;return null;case 22:case 23:return t.lanes=0,od(e,t,n)}return Ge(e,t,n)}var sd,zi,ud,dd;sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zi=function(){};ud=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,xt(Me.current);var i=null;switch(n){case"input":r=ei(e,r),o=ei(e,o),i=[];break;case"select":r=A({},r,{value:void 0}),o=A({},o,{value:void 0}),i=[];break;case"textarea":r=oi(e,r),o=oi(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fo)}ii(n,o);var a;n=null;for(d in r)if(!o.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in o){var s=o[d];if(l=r!=null?r[d]:void 0,o.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&H("scroll",e),i||l===s||(i=[])):(i=i||[]).push(d,s))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};dd=function(e,t,n,o){n!==o&&(t.flags|=4)};function mn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Rc(e,t,n){var o=t.pendingProps;switch(sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return ye(t.type)&&Oo(),re(t),null;case 3:return o=t.stateNode,tn(),M(fe),M(ae),ga(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Fi($e),$e=null))),zi(e,t),re(t),null;case 5:ma(t);var r=xt(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)ud(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(k(166));return re(t),null}if(e=xt(Me.current),yo(t)){o=t.stateNode,n=t.type;var i=t.memoizedProps;switch(o[Re]=t,o[Bn]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",o),H("close",o);break;case"iframe":case"object":case"embed":H("load",o);break;case"video":case"audio":for(r=0;r<xn.length;r++)H(xn[r],o);break;case"source":H("error",o);break;case"img":case"image":case"link":H("error",o),H("load",o);break;case"details":H("toggle",o);break;case"input":Aa(o,i),H("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},H("invalid",o);break;case"textarea":Ua(o,i),H("invalid",o)}ii(n,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?o.textContent!==l&&(i.suppressHydrationWarning!==!0&&fo(o.textContent,l,e),r=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&fo(o.textContent,l,e),r=["children",""+l]):zn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&H("scroll",o)}switch(n){case"input":ro(o),Va(o,i,!0);break;case"textarea":ro(o),qa(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Fo)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(n,{is:o.is}):(e=a.createElement(n),n==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,n),e[Re]=t,e[Bn]=o,sd(e,t,!1,!1),t.stateNode=e;e:{switch(a=ai(n,o),n){case"dialog":H("cancel",e),H("close",e),r=o;break;case"iframe":case"object":case"embed":H("load",e),r=o;break;case"video":case"audio":for(r=0;r<xn.length;r++)H(xn[r],e);r=o;break;case"source":H("error",e),r=o;break;case"img":case"image":case"link":H("error",e),H("load",e),r=o;break;case"details":H("toggle",e),r=o;break;case"input":Aa(e,o),r=ei(e,o),H("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=A({},o,{value:void 0}),H("invalid",e);break;case"textarea":Ua(e,o),r=oi(e,o),H("invalid",e);break;default:r=o}ii(n,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Os(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ms(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Tn(e,s):typeof s=="number"&&Tn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&Qi(e,i,s,a))}switch(n){case"input":ro(e),Va(e,o,!1);break;case"textarea":ro(e),qa(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ht(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Ut(e,!!o.multiple,i,!1):o.defaultValue!=null&&Ut(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(k(166));if(n=xt(Vn.current),xt(Me.current),yo(t)){if(o=t.stateNode,n=t.memoizedProps,o[Re]=t,(i=o.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fo(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(o.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Re]=t,t.stateNode=o}return re(t),null;case 13:if(M(O),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ge!==null&&t.mode&1&&!(t.flags&128))bu(),Jt(),t.flags|=98560,i=!1;else if(i=yo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Re]=t}else Jt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else $e!==null&&(Fi($e),$e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||O.current&1?Y===0&&(Y=3):ja())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),zi(e,t),e===null&&Fn(t.stateNode.containerInfo),re(t),null;case 10:return ca(t.type._context),re(t),null;case 17:return ye(t.type)&&Oo(),re(t),null;case 19:if(M(O),i=t.memoizedState,i===null)return re(t),null;if(o=(t.flags&128)!==0,a=i.rendering,a===null)if(o)mn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Go(e),a!==null){for(t.flags|=128,mn(i,!1),o=a.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)i=n,e=o,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(O,O.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>on&&(t.flags|=128,o=!0,mn(i,!1),t.lanes=4194304)}else{if(!o)if(e=Go(a),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!F)return re(t),null}else 2*q()-i.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,o=!0,mn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=O.current,R(O,o?n&1|2:n&1),t):(re(t),null);case 22:case 23:return ba(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?me&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Hc(e,t){switch(sa(t),t.tag){case 1:return ye(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),M(fe),M(ae),ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ma(t),null;case 13:if(M(O),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Jt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(O),null;case 4:return tn(),null;case 10:return ca(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var go=!1,ie=!1,Mc=typeof WeakSet=="function"?WeakSet:Set,I=null;function At(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){V(e,t,o)}else n.current=null}function Ti(e,t,n){try{n()}catch(o){V(e,t,o)}}var Ll=!1;function Fc(e,t){if(mi=Ro,e=pu(),aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,d=0,m=0,f=e,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(l=a+r),f!==i||o!==0&&f.nodeType!==3||(s=a+o),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++d===r&&(l=a),p===i&&++m===o&&(s=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Ro=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,L=v.memoizedState,c=t.stateNode,h=c.getSnapshotBeforeUpdate(t.elementType===t.type?x:je(t.type,x),L);c.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){V(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=Ll,Ll=!1,v}function jn(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Ti(t,n,i)}r=r.next}while(r!==o)}}function cr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hd(e){var t=e.alternate;t!==null&&(e.alternate=null,hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Re],delete t[Bn],delete t[ki],delete t[xc],delete t[_c])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function Dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Li(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(o!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}function Di(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var J=null,Ne=!1;function Ke(e,t,n){for(n=n.child;n!==null;)fd(e,t,n),n=n.sibling}function fd(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(rr,n)}catch{}switch(n.tag){case 5:ie||At(n,t);case 6:var o=J,r=Ne;J=null,Ke(e,t,n),J=o,Ne=r,J!==null&&(Ne?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Ne?(e=J,n=n.stateNode,e.nodeType===8?Hr(e.parentNode,n):e.nodeType===1&&Hr(e,n),Rn(e)):Hr(J,n.stateNode));break;case 4:o=J,r=Ne,J=n.stateNode.containerInfo,Ne=!0,Ke(e,t,n),J=o,Ne=r;break;case 0:case 11:case 14:case 15:if(!ie&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ti(n,t,a),r=r.next}while(r!==o)}Ke(e,t,n);break;case 1:if(!ie&&(At(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){V(n,t,l)}Ke(e,t,n);break;case 21:Ke(e,t,n);break;case 22:n.mode&1?(ie=(o=ie)||n.memoizedState!==null,Ke(e,t,n),ie=o):Ke(e,t,n);break;default:Ke(e,t,n)}}function Rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mc),t.forEach(function(o){var r=Yc.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:J=l.stateNode,Ne=!1;break e;case 3:J=l.stateNode.containerInfo,Ne=!0;break e;case 4:J=l.stateNode.containerInfo,Ne=!0;break e}l=l.return}if(J===null)throw Error(k(160));fd(i,a,r),J=null,Ne=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(d){V(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Le(e),o&4){try{jn(3,e,e.return),cr(3,e)}catch(x){V(e,e.return,x)}try{jn(5,e,e.return)}catch(x){V(e,e.return,x)}}break;case 1:be(t,e),Le(e),o&512&&n!==null&&At(n,n.return);break;case 5:if(be(t,e),Le(e),o&512&&n!==null&&At(n,n.return),e.flags&32){var r=e.stateNode;try{Tn(r,"")}catch(x){V(e,e.return,x)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ds(r,i),ai(l,a);var d=ai(l,i);for(a=0;a<s.length;a+=2){var m=s[a],f=s[a+1];m==="style"?Os(r,f):m==="dangerouslySetInnerHTML"?Ms(r,f):m==="children"?Tn(r,f):Qi(r,m,f,d)}switch(l){case"input":ti(r,i);break;case"textarea":Rs(r,i);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Ut(r,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ut(r,!!i.multiple,i.defaultValue,!0):Ut(r,!!i.multiple,i.multiple?[]:"",!1))}r[Bn]=i}catch(x){V(e,e.return,x)}}break;case 6:if(be(t,e),Le(e),o&4){if(e.stateNode===null)throw Error(k(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(x){V(e,e.return,x)}}break;case 3:if(be(t,e),Le(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(x){V(e,e.return,x)}break;case 4:be(t,e),Le(e);break;case 13:be(t,e),Le(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Sa=q())),o&4&&Rl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||m,be(t,e),ie=d):be(t,e),Le(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(I=e,m=e.child;m!==null;){for(f=I=m;I!==null;){switch(p=I,g=p.child,p.tag){case 0:case 11:case 14:case 15:jn(4,p,p.return);break;case 1:At(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){V(o,n,x)}}break;case 5:At(p,p.return);break;case 22:if(p.memoizedState!==null){Ml(f);continue}}g!==null?(g.return=p,I=g):Ml(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{r=f.stateNode,d?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Fs("display",a))}catch(x){V(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(x){V(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:be(t,e),Le(e),o&4&&Rl(e);break;case 21:break;default:be(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cd(n)){var o=n;break e}n=n.return}throw Error(k(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Tn(r,""),o.flags&=-33);var i=Dl(e);Di(e,i,r);break;case 3:case 4:var a=o.stateNode.containerInfo,l=Dl(e);Li(e,l,a);break;default:throw Error(k(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oc(e,t,n){I=e,pd(e)}function pd(e,t,n){for(var o=(e.mode&1)!==0;I!==null;){var r=I,i=r.child;if(r.tag===22&&o){var a=r.memoizedState!==null||go;if(!a){var l=r.alternate,s=l!==null&&l.memoizedState!==null||ie;l=go;var d=ie;if(go=a,(ie=s)&&!d)for(I=r;I!==null;)a=I,s=a.child,a.tag===22&&a.memoizedState!==null?Fl(r):s!==null?(s.return=a,I=s):Fl(r);for(;i!==null;)I=i,pd(i),i=i.sibling;I=r,go=l,ie=d}Hl(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,I=i):Hl(e)}}function Hl(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||cr(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ie)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xl(t,i,o);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Rn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ie||t.flags&512&&Pi(t)}catch(p){V(t,t.return,p)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ml(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Fl(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cr(4,t)}catch(s){V(t,n,s)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(s){V(t,r,s)}}var i=t.return;try{Pi(t)}catch(s){V(t,i,s)}break;case 5:var a=t.return;try{Pi(t)}catch(s){V(t,a,s)}}}catch(s){V(t,t.return,s)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Bc=Math.ceil,Xo=Ye.ReactCurrentDispatcher,Ca=Ye.ReactCurrentOwner,Ie=Ye.ReactCurrentBatchConfig,T=0,Z=null,Q=null,ee=0,me=0,Vt=yt(0),Y=0,Gn=null,bt=0,fr=0,Ia=0,Nn=null,he=null,Sa=0,on=1/0,Fe=null,Zo=!1,Ri=null,st=null,vo=!1,nt=null,Jo=0,$n=0,Hi=null,jo=-1,No=0;function se(){return T&6?q():jo!==-1?jo:jo=q()}function ut(e){return e.mode&1?T&2&&ee!==0?ee&-ee:Ic.transition!==null?(No===0&&(No=Js()),No):(e=P,e!==0||(e=window.event,e=e===void 0?16:au(e.type)),e):1}function Te(e,t,n,o){if(50<$n)throw $n=0,Hi=null,Error(k(185));Kn(e,n,o),(!(T&2)||e!==Z)&&(e===Z&&(!(T&2)&&(fr|=n),Y===4&&et(e,ee)),pe(e,o),n===1&&T===0&&!(t.mode&1)&&(on=q()+500,ur&&pt()))}function pe(e,t){var n=e.callbackNode;Ih(e,t);var o=Do(e,e===Z?ee:0);if(o===0)n!==null&&Ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Ya(n),t===1)e.tag===0?Cc(Ol.bind(null,e)):Iu(Ol.bind(null,e)),kc(function(){!(T&6)&&pt()}),n=null;else{switch(eu(o)){case 1:n=Zi;break;case 4:n=Xs;break;case 16:n=Lo;break;case 536870912:n=Zs;break;default:n=Lo}n=_d(n,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function md(e,t){if(jo=-1,No=0,T&6)throw Error(k(327));var n=e.callbackNode;if(Kt()&&e.callbackNode!==n)return null;var o=Do(e,e===Z?ee:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=er(e,o);else{t=o;var r=T;T|=2;var i=vd();(Z!==e||ee!==t)&&(Fe=null,on=q()+500,_t(e,t));do try{Uc();break}catch(l){gd(e,l)}while(!0);ha(),Xo.current=i,T=r,Q!==null?t=0:(Z=null,ee=0,t=Y)}if(t!==0){if(t===2&&(r=hi(e),r!==0&&(o=r,t=Mi(e,r))),t===1)throw n=Gn,_t(e,0),et(e,o),pe(e,q()),n;if(t===6)et(e,o);else{if(r=e.current.alternate,!(o&30)&&!Ac(r)&&(t=er(e,o),t===2&&(i=hi(e),i!==0&&(o=i,t=Mi(e,i))),t===1))throw n=Gn,_t(e,0),et(e,o),pe(e,q()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(k(345));case 2:wt(e,he,Fe);break;case 3:if(et(e,o),(o&130023424)===o&&(t=Sa+500-q(),10<t)){if(Do(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){se(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=wi(wt.bind(null,e,he,Fe),t);break}wt(e,he,Fe);break;case 4:if(et(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var a=31-ze(o);i=1<<a,a=t[a],a>r&&(r=a),o&=~i}if(o=r,o=q()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Bc(o/1960))-o,10<o){e.timeoutHandle=wi(wt.bind(null,e,he,Fe),o);break}wt(e,he,Fe);break;case 5:wt(e,he,Fe);break;default:throw Error(k(329))}}}return pe(e,q()),e.callbackNode===n?md.bind(null,e):null}function Mi(e,t){var n=Nn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=er(e,t),e!==2&&(t=he,he=n,t!==null&&Fi(t)),e}function Fi(e){he===null?he=e:he.push.apply(he,e)}function Ac(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!Pe(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ia,t&=~fr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),o=1<<n;e[n]=-1,t&=~o}}function Ol(e){if(T&6)throw Error(k(327));Kt();var t=Do(e,0);if(!(t&1))return pe(e,q()),null;var n=er(e,t);if(e.tag!==0&&n===2){var o=hi(e);o!==0&&(t=o,n=Mi(e,o))}if(n===1)throw n=Gn,_t(e,0),et(e,t),pe(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,he,Fe),pe(e,q()),null}function Ea(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(on=q()+500,ur&&pt())}}function jt(e){nt!==null&&nt.tag===0&&!(T&6)&&Kt();var t=T;T|=1;var n=Ie.transition,o=P;try{if(Ie.transition=null,P=1,e)return e()}finally{P=o,Ie.transition=n,T=t,!(T&6)&&pt()}}function ba(){me=Vt.current,M(Vt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wc(n)),Q!==null)for(n=Q.return;n!==null;){var o=n;switch(sa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Oo();break;case 3:tn(),M(fe),M(ae),ga();break;case 5:ma(o);break;case 4:tn();break;case 13:M(O);break;case 19:M(O);break;case 10:ca(o.type._context);break;case 22:case 23:ba()}n=n.return}if(Z=e,Q=e=dt(e.current,null),ee=me=t,Y=0,Gn=null,Ia=fr=bt=0,he=Nn=null,Wt!==null){for(t=0;t<Wt.length;t++)if(n=Wt[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var a=i.next;i.next=r,o.next=a}n.pending=o}Wt=null}return e}function gd(e,t){do{var n=Q;try{if(ha(),So.current=Ko,Yo){for(var o=B.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Yo=!1}if(Et=0,X=G=B=null,bn=!1,Un=0,Ca.current=null,n===null||n.return===null){Y=1,Gn=t,Q=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=ee,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=bl(a);if(g!==null){g.flags&=-257,jl(g,a,l,i,t),g.mode&1&&El(i,d,t),t=g,s=d;var v=t.updateQueue;if(v===null){var x=new Set;x.add(s),t.updateQueue=x}else v.add(s);break e}else{if(!(t&1)){El(i,d,t),ja();break e}s=Error(k(426))}}else if(F&&l.mode&1){var L=bl(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),jl(L,a,l,i,t),ua(nn(s,l));break e}}i=s=nn(s,l),Y!==4&&(Y=2),Nn===null?Nn=[i]:Nn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=ed(i,s,t);Wl(i,c);break e;case 1:l=s;var h=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(st===null||!st.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=td(i,l,t);Wl(i,w);break e}}i=i.return}while(i!==null)}kd(n)}catch(_){t=_,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function vd(){var e=Xo.current;return Xo.current=Ko,e===null?Ko:e}function ja(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(bt&268435455)&&!(fr&268435455)||et(Z,ee)}function er(e,t){var n=T;T|=2;var o=vd();(Z!==e||ee!==t)&&(Fe=null,_t(e,t));do try{Vc();break}catch(r){gd(e,r)}while(!0);if(ha(),T=n,Xo.current=o,Q!==null)throw Error(k(261));return Z=null,ee=0,Y}function Vc(){for(;Q!==null;)wd(Q)}function Uc(){for(;Q!==null&&!mh();)wd(Q)}function wd(e){var t=xd(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?kd(e):Q=t,Ca.current=null}function kd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hc(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=Rc(n,t,me),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function wt(e,t,n){var o=P,r=Ie.transition;try{Ie.transition=null,P=1,qc(e,t,n,o)}finally{Ie.transition=r,P=o}return null}function qc(e,t,n,o){do Kt();while(nt!==null);if(T&6)throw Error(k(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Sh(e,i),e===Z&&(Q=Z=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,_d(Lo,function(){return Kt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var a=P;P=1;var l=T;T|=4,Ca.current=null,Fc(e,n),yd(n,e),cc(gi),Ro=!!mi,gi=mi=null,e.current=n,Oc(n),gh(),T=l,P=a,Ie.transition=i}else e.current=n;if(vo&&(vo=!1,nt=e,Jo=r),i=e.pendingLanes,i===0&&(st=null),kh(n.stateNode),pe(e,q()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Zo)throw Zo=!1,e=Ri,Ri=null,e;return Jo&1&&e.tag!==0&&Kt(),i=e.pendingLanes,i&1?e===Hi?$n++:($n=0,Hi=e):$n=0,pt(),null}function Kt(){if(nt!==null){var e=eu(Jo),t=Ie.transition,n=P;try{if(Ie.transition=null,P=16>e?16:e,nt===null)var o=!1;else{if(e=nt,nt=null,Jo=0,T&6)throw Error(k(331));var r=T;for(T|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(I=d;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:jn(8,m,i)}var f=m.child;if(f!==null)f.return=m,I=f;else for(;I!==null;){m=I;var p=m.sibling,g=m.return;if(hd(m),m===d){I=null;break}if(p!==null){p.return=g,I=p;break}I=g}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var L=x.sibling;x.sibling=null,x=L}while(x!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:jn(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,I=c;break e}I=i.return}}var h=e.current;for(I=h;I!==null;){a=I;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,I=y;else e:for(a=h;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cr(9,l)}}catch(_){V(l,l.return,_)}if(l===a){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(T=r,pt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(rr,e)}catch{}o=!0}return o}finally{P=n,Ie.transition=t}}return!1}function Bl(e,t,n){t=nn(n,t),t=ed(e,t,1),e=lt(e,t,1),t=se(),e!==null&&(Kn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Bl(e,e,n);else for(;t!==null;){if(t.tag===3){Bl(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(st===null||!st.has(o))){e=nn(n,e),e=td(t,e,1),t=lt(t,e,1),e=se(),t!==null&&(Kn(t,1,e),pe(t,e));break}}t=t.return}}function Qc(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(ee&n)===n&&(Y===4||Y===3&&(ee&130023424)===ee&&500>q()-Sa?_t(e,0):Ia|=n),pe(e,t)}function Wd(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=se();e=Qe(e,t),e!==null&&(Kn(e,t,n),pe(e,n))}function Gc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wd(e,n)}function Yc(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(k(314))}o!==null&&o.delete(t),Wd(e,n)}var xd;xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,Dc(e,t,n);ce=!!(e.flags&131072)}else ce=!1,F&&t.flags&1048576&&Su(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;bo(e,t),e=t.pendingProps;var r=Zt(t,ae.current);Yt(t,n),r=wa(null,t,o,e,r,n);var i=ka();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(o)?(i=!0,Bo(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ya(t),r.updater=hr,t.stateNode=r,r._reactInternals=t,Si(t,o,e,n),t=ji(null,t,o,!0,i,n)):(t.tag=0,F&&i&&la(t),le(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=Xc(o),e=je(o,e),r){case 0:t=bi(null,t,o,e,n);break e;case 1:t=zl(null,t,o,e,n);break e;case 11:t=Nl(null,t,o,e,n);break e;case 14:t=$l(null,t,o,je(o.type,e),n);break e}throw Error(k(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:je(o,r),bi(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:je(o,r),zl(e,t,o,r,n);case 3:e:{if(id(t),e===null)throw Error(k(387));o=t.pendingProps,i=t.memoizedState,r=i.element,zu(e,t),Qo(t,o,null,n);var a=t.memoizedState;if(o=a.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=nn(Error(k(423)),t),t=Tl(e,t,o,n,r);break e}else if(o!==r){r=nn(Error(k(424)),t),t=Tl(e,t,o,n,r);break e}else for(ge=at(t.stateNode.containerInfo.firstChild),ve=t,F=!0,$e=null,n=Nu(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),o===r){t=Ge(e,t,n);break e}le(e,t,o,n)}t=t.child}return t;case 5:return Tu(t),e===null&&_i(t),o=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,vi(o,r)?a=null:i!==null&&vi(o,i)&&(t.flags|=32),rd(e,t),le(e,t,a,n),t.child;case 6:return e===null&&_i(t),null;case 13:return ad(e,t,n);case 4:return pa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=en(t,null,o,n):le(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:je(o,r),Nl(e,t,o,r,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,i=t.memoizedProps,a=r.value,R(Uo,o._currentValue),o._currentValue=a,i!==null)if(Pe(i.value,a)){if(i.children===r.children&&!fe.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===o){if(i.tag===1){s=Ve(-1,n&-n),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ci(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(k(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ci(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}le(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Yt(t,n),r=Se(r),o=o(r),t.flags|=1,le(e,t,o,n),t.child;case 14:return o=t.type,r=je(o,t.pendingProps),r=je(o.type,r),$l(e,t,o,r,n);case 15:return nd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:je(o,r),bo(e,t),t.tag=1,ye(o)?(e=!0,Bo(t)):e=!1,Yt(t,n),Ju(t,o,r),Si(t,o,r,n),ji(null,t,o,!0,e,n);case 19:return ld(e,t,n);case 22:return od(e,t,n)}throw Error(k(156,t.tag))};function _d(e,t){return Ks(e,t)}function Kc(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,o){return new Kc(e,t,n,o)}function Na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xc(e){if(typeof e=="function")return Na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yi)return 11;if(e===Ki)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $o(e,t,n,o,r,i){var a=2;if(o=e,typeof e=="function")Na(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Pt:return Ct(n.children,r,i,t);case Gi:a=8,r|=8;break;case Kr:return e=Ce(12,n,t,r|2),e.elementType=Kr,e.lanes=i,e;case Xr:return e=Ce(13,n,t,r),e.elementType=Xr,e.lanes=i,e;case Zr:return e=Ce(19,n,t,r),e.elementType=Zr,e.lanes=i,e;case Ts:return yr(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $s:a=10;break e;case zs:a=9;break e;case Yi:a=11;break e;case Ki:a=14;break e;case Xe:a=16,o=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,r),t.elementType=e,t.type=o,t.lanes=i,t}function Ct(e,t,n,o){return e=Ce(7,e,o,t),e.lanes=n,e}function yr(e,t,n,o){return e=Ce(22,e,o,t),e.elementType=Ts,e.lanes=n,e.stateNode={isHidden:!1},e}function qr(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Qr(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zc(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Er(0),this.expirationTimes=Er(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Er(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $a(e,t,n,o,r,i,a,l,s){return e=new Zc(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ya(i),e}function Jc(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tt,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Cd(e){if(!e)return ct;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ye(n))return Cu(e,n,t)}return t}function Id(e,t,n,o,r,i,a,l,s){return e=$a(n,o,!0,e,r,i,a,l,s),e.context=Cd(null),n=e.current,o=se(),r=ut(n),i=Ve(o,r),i.callback=t??null,lt(n,i,r),e.current.lanes=r,Kn(e,r,o),pe(e,o),e}function pr(e,t,n,o){var r=t.current,i=se(),a=ut(r);return n=Cd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(i,a),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=lt(r,t,a),e!==null&&(Te(e,r,a,i),Io(e,r,a)),a}function tr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Al(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function za(e,t){Al(e,t),(e=e.alternate)&&Al(e,t)}function ef(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ta(e){this._internalRoot=e}mr.prototype.render=Ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));pr(e,t,null,null)};mr.prototype.unmount=Ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){pr(null,e,null,null)}),t[qe]=null}};function mr(e){this._internalRoot=e}mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Je.length&&t!==0&&t<Je[n].priority;n++);Je.splice(n,0,e),n===0&&iu(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vl(){}function tf(e,t,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var d=tr(a);i.call(d)}}var a=Id(t,o,e,0,null,!1,!1,"",Vl);return e._reactRootContainer=a,e[qe]=a.current,Fn(e.nodeType===8?e.parentNode:e),jt(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var l=o;o=function(){var d=tr(s);l.call(d)}}var s=$a(e,0,!1,null,null,!1,!1,"",Vl);return e._reactRootContainer=s,e[qe]=s.current,Fn(e.nodeType===8?e.parentNode:e),jt(function(){pr(t,s,n,o)}),s}function vr(e,t,n,o,r){var i=n._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var s=tr(a);l.call(s)}}pr(t,a,e,r)}else a=tf(n,t,e,r,o);return tr(a)}tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(Ji(t,n|1),pe(t,q()),!(T&6)&&(on=q()+500,pt()))}break;case 13:jt(function(){var o=Qe(e,1);if(o!==null){var r=se();Te(o,e,1,r)}}),za(e,1)}};ea=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=se();Te(t,e,134217728,n)}za(e,134217728)}};nu=function(e){if(e.tag===13){var t=ut(e),n=Qe(e,t);if(n!==null){var o=se();Te(n,e,t,o)}za(e,t)}};ou=function(){return P};ru=function(e,t){var n=P;try{return P=e,t()}finally{P=n}};si=function(e,t,n){switch(t){case"input":if(ti(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=sr(o);if(!r)throw Error(k(90));Ls(o),ti(o,r)}}}break;case"textarea":Rs(e,n);break;case"select":t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}};Vs=Ea;Us=jt;var nf={usingClientEntryPoint:!1,Events:[Zn,Ht,sr,Bs,As,Ea]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},of={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gs(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{rr=wo.inject(of),He=wo}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(t))throw Error(k(200));return Jc(e,t,null,n)};ke.createRoot=function(e,t){if(!Pa(e))throw Error(k(299));var n=!1,o="",r=Sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=$a(e,1,!1,null,null,n,!1,o,r),e[qe]=t.current,Fn(e.nodeType===8?e.parentNode:e),new Ta(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Gs(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return jt(e)};ke.hydrate=function(e,t,n){if(!gr(t))throw Error(k(200));return vr(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Pa(e))throw Error(k(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",a=Sd;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Id(t,null,e,1,n??null,r,!1,i,a),e[qe]=t.current,Fn(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new mr(t)};ke.render=function(e,t,n){if(!gr(t))throw Error(k(200));return vr(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!gr(e))throw Error(k(40));return e._reactRootContainer?(jt(function(){vr(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};ke.unstable_batchedUpdates=Ea;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!gr(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return vr(e,t,n,!1,o)};ke.version="18.3.1-next-f1338f8080-20240426";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(e){console.error(e)}}Ed(),Es.exports=ke;var rf=Es.exports,Ul=rf;Gr.createRoot=Ul.createRoot,Gr.hydrateRoot=Ul.hydrateRoot;const af=({prevStep:e,theme:t})=>u.jsx("div",{className:"absolute top-2 left-2",children:u.jsxs("button",{className:`${t} opacity-80 hover:opacity-100 text-contrastText uppercase font-semibold flex`,onClick:e,children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})]}),"home"]})}),lf=({children:e,textRef:t})=>{const n=e.startsWith("Wild Card"),o=e.startsWith("Reminder"),r=n?e.slice(10):o?e.slice(9):e;return u.jsx(u.Fragment,{children:n?u.jsxs("div",{className:"laptop:w-[80%] rounded-[25px] text-center laptop:rounded-[60px] text-paper grid uppercase m-auto laptop:aspect-video h-64 laptop:h-fit relative bg-[#c10016] drop-shadow-md shadow-dark",children:[u.jsx("p",{className:"self-end text-sm font-bold laptop:text-xl",children:"wildcard"}),u.jsx("p",{ref:t,className:"w-[80%] m-auto text-base laptop:text-2xl font-bold laptop:w-[70%] top-1/2",children:r}),u.jsx("p",{className:"self-end mb-3 text-xs font-bold transform laptop:text-lg",children:"we're not really strangers"})]}):o?u.jsxs("div",{className:"laptop:w-[80%] rounded-[25px] flex justify-center text-center laptop:rounded-[60px] text-[#c10016] uppercase m-auto laptop:aspect-video h-64 laptop:h-fit relative bg-paper drop-shadow-md shadow-dark",children:[u.jsxs("div",{className:"grid grid-cols-3",children:[u.jsx("p",{className:"m-auto text-sm font-bold laptop:text-xl",children:"reminder"}),u.jsx("p",{ref:t,className:"w-[80%] col-span-2 m-auto text-base laptop:text-2xl font-bold laptop:w-[70%] top-1/2",children:r})]}),u.jsx("p",{className:"absolute text-xs font-bold laptop:text-lg bottom-3",children:"we're not really strangers"})]}):u.jsxs("div",{className:"laptop:w-[80%] rounded-[25px] text-center laptop:rounded-[60px] text-[#c10016] flex justify-center content-center uppercase m-auto laptop:aspect-video h-64 laptop:h-fit relative bg-paper drop-shadow-md shadow-dark",children:[u.jsx("p",{ref:t,className:"w-[80%] m-auto text-base laptop:text-2xl font-bold laptop:w-[70%] top-1/2",children:e}),u.jsx("p",{className:"absolute text-xs font-bold transform laptop:text-lg bottom-3",children:"we're not really strangers"})]})})},sf=({player:e,theme:t})=>u.jsx("div",{className:`${t} mx-auto mb-3 text-sm laptop:text-lg font-bold uppercase text-contrastText w-fit`,children:e!=""?`${e}'s turn`:null}),uf=({previousCard:e,nextCard:t,previousLevel:n,nextLevel:o,level:r,curr:i,tot:a,disablePrev:l,disablePrevLevel:s,disableNext:d,disableNextLevel:m,theme:f})=>u.jsxs("div",{className:`grid grid-cols-5 mx-3 laptop:mx-0 laptop:w-[80%] m-auto mt-6 text-contrastText ${f} select-none`,children:[u.jsxs("span",{className:"flex align-middle justify-self-start",children:[u.jsx("button",{className:`text-3xl m-auto ${s?`text-contrastText/30 ${f}`:`hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${f}`}`,onClick:n,disabled:s,children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-7 laptop:size-6",children:[u.jsx("polygon",{points:"17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12"}),u.jsx("polygon",{points:"11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12"})]})}),u.jsx("button",{className:`text-3xl m-auto ${l?`text-contrastText/30 ${f}`:`hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${f}`}`,onClick:e,disabled:l,children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-7 laptop:size-6",children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})]})})]}),u.jsxs("p",{className:`self-center laptop:col-start-3 col-span-3 laptop:col-span-1 font-semibold laptop:font-bold text-center text-contrastText ${f} laptop:text-base text-sm`,children:["LEVEL ",r," - ",i," / ",a]}),u.jsxs("span",{className:"flex align-middle laptop:col-start-5 justify-self-end",children:[u.jsx("button",{className:`m-auto ${d?`text-contrastText/30 ${f}`:`hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${f}`}`,onClick:t,disabled:d,children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-7 laptop:size-6",children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})]})}),u.jsx("button",{className:`m-auto ${m?`text-contrastText/30 ${f}`:`hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${f}`}`,onClick:o,disabled:m,children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-7 laptop:size-6",children:[u.jsx("polygon",{points:"6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"}),u.jsx("polygon",{points:"13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"})]})})]})]}),bd=({backDesc:e,preview:t})=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"grid mb-2",children:u.jsx("div",{className:"mx-10 mt-4",children:u.jsx("p",{className:"text-sm font-semibold text-center uppercase whitespace-pre-line",children:e})})}),u.jsx("div",{className:"w-[80%] mx-auto h-[2px] bg-black/20"}),u.jsx("div",{className:"grid py-2 mx-10 tablet:my-6",children:t.map((n,o)=>u.jsx("div",{className:"mt-3",children:u.jsx("p",{className:"text-sm font-semibold whitespace-pre-line",children:n})},o))})]}),La=e=>z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"206.000000pt",height:"206.000000pt",viewBox:"0 0 206.000000 206.000000",preserveAspectRatio:"xMidYMid meet",...e},z.createElement("g",{transform:"translate(0.000000,206.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none"},z.createElement("path",{d:"M940 1657 l-335 -142 -23 -45 c-17 -33 -22 -57 -19 -91 2 -30 72 -207 207 -530 112 -266 208 -492 214 -502 13 -22 84 -57 114 -57 37 0 664 269 694 297 33 32 52 84 45 127 -7 41 -415 1016 -436 1040 -20 23 -72 46 -103 46 -13 -1 -174 -65 -358 -143z m-173 -189 c31 -29 32 -99 3 -128 -28 -28 -96 -27 -127 2 -31 29 -32 99 -3 128 28 28 96 27 127 -2z"}),z.createElement("path",{d:"M367 1067 c-72 -167 -169 -426 -173 -465 -5 -38 -2 -53 18 -81 23 -34 88 -74 139 -86 l26 -6 7 337 c4 185 5 338 4 339 -2 2 -11 -15 -21 -38z"}),z.createElement("path",{d:"M550 662 l0 -263 48 -47 c50 -51 112 -77 168 -70 47 5 43 40 -21 185 -32 70 -84 196 -117 278 -33 83 -64 157 -69 165 -5 9 -9 -92 -9 -248z"}))),df=({categories:e,selectedDecks:t,setSelectedDecks:n})=>{const o=m=>{n(f=>f.includes(m)?f.filter(p=>p!==m):[...f,m])},[r,i]=z.useState(!1),[a,l]=z.useState(null),s=m=>{l(m),i(!r)},d=({selected:m})=>u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`h-4 w-4 mr-2 my-auto col-start-1 group-hover:text-paper group-hover:stroke-2 ${m?"text-paper stroke-2":"text-transparent cursor-default"}`,children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})});return u.jsx("div",{className:"h-[80vh] tablet:py-8 mx-auto overflow-y-scroll tablet:deck-list-selection",children:u.jsx("div",{className:"w-[90%] p-2 float-right",children:Object.values(e).map(m=>u.jsxs("div",{className:"mb-2",children:[u.jsx("h3",{className:"text-xs font-semibold uppercase text-paper",children:m.displayName}),m.decks.map(f=>u.jsxs("div",{className:"grid grid-cols-6 pl-2 mt-1",children:[u.jsxs("label",{htmlFor:f.short_name,className:"flex col-span-3 cursor-pointer group",children:[u.jsx("input",{type:"checkbox",id:f.short_name,checked:t.includes(f.short_name),onChange:()=>o(f.short_name),className:"appearance-none"}),u.jsx(d,{selected:t.includes(f.short_name)}),u.jsx("p",{className:"my-auto text-sm font-semibold uppercase select-none text-paper hover:underline h-fit",children:f.short_name})]}),u.jsxs("div",{className:"grid grid-cols-3 col-span-2 col-start-5 justify-self-end",children:[u.jsx("button",{onClick:()=>s(f.short_name),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"m-auto mr-2 text-paper size-5 opacity-80",children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})}),a===f.short_name&&u.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60",children:u.jsxs("div",{className:"p-4 bg-red-500 rounded shadow-lg",children:[u.jsx(bd,{backDesc:f.backDesc,preview:f.preview}),u.jsx("button",{onClick:()=>s(null),className:"p-2 mt-4 bg-red-500 rounded text-paper",children:"Close Info Dialog"})]})}),f.players==="1"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"m-auto text-paper size-5 opacity-80",children:[u.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})]}):f.players==="1+"?u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"m-auto text-paper size-5 opacity-80",children:u.jsx("path",{d:"M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M15,10v2h3v3h2v-3h3v-2h-3V7h-2v3H15z M1,18v2h16v-2 c0-2.66-5.33-4-8-4S1,15.34,1,18z"})}):f.players==="2"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"m-auto text-paper size-5 opacity-80",children:[u.jsx("path",{d:"M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z"}),u.jsx("circle",{cx:"9",cy:"8",r:"4"}),u.jsx("path",{d:"M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z"}),u.jsx("path",{d:"M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z"})]}):f.players==="2+"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"m-auto text-paper size-5 opacity-80",children:[u.jsx("polygon",{points:"22,9 22,7 20,7 20,9 18,9 18,11 20,11 20,13 22,13 22,11 24,11 24,9"}),u.jsx("path",{d:"M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z"}),u.jsx("path",{d:"M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z"}),u.jsx("path",{d:"M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z"}),u.jsx("path",{d:"M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z"})]}):null,f.isExpansion?u.jsx(La,{className:"m-auto text-paper size-5 opacity-80"}):null]})]},f.short_name))]},m.displayName))})})},hf=`Pick a card.
 Read it out loud to your partner(s) and listen to their answer.`,cf={level_one:{label:"Level 1 - Perception",content:"This level is about gaining perspective on what first impressions we give off and challenging the assumptions we make about others."},level_two:{label:"Level 2 - Connection",content:"This round is about asking the rarely asked questions and connecting on a deeper level."},level_three:{label:"Level 3 - Reflection",content:"Time to reflect on your game experience."},wildcard:{label:"Wildcard",content:"If you draw a wildcard, your partner must complete the instructions unless otherwise stated."}},ql={general:hf,levels:cf};function ff(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"my-5 text-center uppercase tablet:w-[80%] m-auto font-semibold whitespace-pre-line text-sm tracking-wide",children:ql.general}),u.jsx("div",{className:"w-[88%] mx-6 h-[2px] bg-black/20"}),u.jsx("div",{className:"grid mb-2",children:Object.values(ql.levels).map(({label:e,content:t})=>u.jsxs("div",{className:"mx-6 mt-4",children:[u.jsx("p",{className:"px-2 mb-1 text-xs font-semibold text-black uppercase bg-paper w-fit",children:e}),u.jsx("p",{className:"text-sm font-semibold tracking-wide",children:t})]},e))})]})}const jd=({title:e,children:t,handleClose:n,isInfo:o,theme:r})=>u.jsx(u.Fragment,{children:o?u.jsx("div",{className:"absolute z-10 w-full h-full overflow-y-auto transform py-[5%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black/90 tablet:bg-black/80",children:u.jsxs("div",{className:`bg-main ${r} mx-auto absolute top-1/2 left-1/2 w-full h-fit tablet:w-[55%] transform -translate-x-1/2 -translate-y-1/2 text-contrastText items-center`,children:[u.jsxs("div",{className:"relative flex my-4 align-middle",children:[u.jsx("p",{className:"m-auto font-semibold text-center uppercase tablet:text-lg w-[80%] mt-5 tablet:w-fit",children:e}),u.jsx("button",{onClick:n,className:"absolute text-contrastText right-4 top-2",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),u.jsx("div",{className:"w-[80%] mx-auto h-[2px] bg-black/20"}),t]})}):u.jsx("div",{className:"fixed top-0 left-0 z-10 w-screen h-full bg-main tablet:bg-black/80",children:u.jsxs("div",{className:`${r} bg-main absolute top-1/2 left-1/2 tablet:w-[50%] w-full transform -translate-x-1/2 -translate-y-1/2 text-contrastText h-fit items-center`,children:[u.jsxs("div",{className:"relative flex h-12 align-middle",children:[u.jsx("p",{className:"m-auto text-lg font-semibold uppercase w-fit",children:e}),u.jsx("button",{onClick:n,className:"absolute text-contrastText right-4 top-2",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),u.jsx("div",{className:"w-full h-[2px] bg-black/20"}),t]})})}),vn=({handleClick:e,children:t,show:n,title:o,icon:r,theme:i})=>u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:e,className:"mx-auto cursor-pointer w-fit",children:r}),n&&u.jsx(jd,{handleClose:e,title:o,theme:i,children:t})]}),yf=({theme:e,toggleTheme:t,onClose:n,defaultIndex:o=0})=>{const[r,i]=z.useState(o);z.useEffect(()=>{const d=l.indexOf(e);i(d!==-1?d:o)},[e]);const a=(d,m)=>{i(d),t(m),n()},l=["main","ownIt","selfLove","race","voting","bumbleDate","bumbleBFF","bumbleBizz","valentino","cann","hbo"],s=({selected:d})=>u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`h-4 w-4 mr-2 my-auto col-start-1 stroke-2 ${e} ${d?"text-contrastText stroke-2":"text-transparent cursor-default"}`,children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})});return u.jsx("div",{className:"grid w-[75%] m-auto py-6",children:l.map((d,m)=>u.jsxs("div",{className:"grid grid-cols-5 pl-2 mt-1 group",children:[u.jsx("input",{type:"radio",name:"themeSelector",value:d,id:d,onChange:()=>a(m,d),className:"sr-only",checked:m===r}),u.jsxs("label",{htmlFor:d,className:"flex items-center col-span-3 font-semibold uppercase cursor-pointer group-hover:underline",children:[u.jsx(s,{selected:m===r}),d]}),u.jsx("div",{className:`${d} h-fit py-[2px] bg-paper text-contrastPaperText text-center text-sm font-bold`,children:"WNRS"}),u.jsx("div",{className:`${d} h-fit py-[2px] bg-main text-contrastText text-center text-sm font-bold`,children:"WNRS"})]},m))})},pf=({players:e,setPlayers:t,minPlayers:n,theme:o})=>{z.useEffect(()=>{e.length<n&&t(Array(n).fill(""))},[n,e.length,t]);const r=e.filter(l=>l.trim()!==""),i=l=>s=>{if(s.preventDefault(),r.length>n){const d=e.filter((m,f)=>f!==l);t(d)}},a=(l,s)=>{const d=[...e];d[l]=s,t(d)};return z.useEffect(()=>{(e.length===0||e[e.length-1].trim()!=="")&&t([...e,""])},[e,t]),u.jsx("div",{className:"py-10",children:e.map((l,s)=>u.jsxs("div",{className:"grid w-1/2 grid-cols-2 mx-auto",children:[u.jsx("input",{name:"name",type:"text",value:l,onChange:d=>a(s,d.target.value),className:`${o} p-2 placeholder:opacity-60 placeholder:text-contrastText h-8 bg-light/20 my-1 rounded-md uppercase font-semibold text-contrastText bg-light focus:outline-main`,placeholder:`Player ${s+1}`}),s!==e.length-1&&r.length>n&&u.jsx("button",{className:`${o} relative flex items-center w-8 my-auto ml-4 rounded-md aspect-square hover:bg-light/20`,onClick:d=>i(s)(d),children:u.jsxs("svg",{viewBox:"0 0 24 24",className:"m-auto w-7 aspect-square text-contrastText",fill:"currentColor",children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M19 13H5v-2h14v2z"})]})})]},s))})},mf=e=>z.createElement("svg",{strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},z.createElement("path",{d:"M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm-.016-2H12a8 8 0 1 0-.016 0ZM13 18h-2v-2h2v2Zm0-3h-2a3.583 3.583 0 0 1 1.77-3.178C13.43 11.316 14 10.88 14 10a2 2 0 1 0-4 0H8v-.09a4 4 0 1 1 8 .09 3.413 3.413 0 0 1-1.56 2.645A3.1 3.1 0 0 0 13 15Z",fill:"currentColor"})),gf=e=>{let t=e.replaceAll(`
`,"");const n=new RegExp("\\[([^\\]]+)\\]\\(([^)]+)\\)","g");t=t.replaceAll(n,(r,i,a)=>a);const o=new RegExp(" <(.+)>","g");return t.replaceAll(o,"")},vf=({textRef:e,selectedDecks:t,decks:n,setSelectedDecks:o,setPlayers:r,players:i,theme:a,toggleTheme:l,categories:s})=>{const[d,m]=z.useState(!1),[f,p]=z.useState(!1),[g,v]=z.useState(!1),[x,L]=z.useState(!1),[c,h]=z.useState(!1),y=()=>{m(!d)},w=()=>{p(!f)},_=()=>{v(!g)},E=()=>{L(!x)},W=()=>{navigator.clipboard.writeText(gf(e)),h(!0),setTimeout(()=>h(!1),2e3)};return u.jsxs("div",{className:"grid grid-cols-5 w-[60%] laptop:w-[30%] m-auto text-contrastText/80 mt-6 relative",children:[u.jsx(vn,{handleClick:y,title:"How To Play",icon:u.jsx(mf,{className:`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${a}`}),show:d,theme:a,children:u.jsx(ff,{})}),u.jsx(vn,{handleClick:w,title:"decks selection",icon:u.jsx(La,{className:`hover:text-contrastText hover:bg-black/10 size-8 rounded-md p-1 mx-auto ${a}`}),show:f,theme:a,children:u.jsx(df,{decks:n,selectedDecks:t,setSelectedDecks:o,categories:s,handleClick:w})}),u.jsx(vn,{handleClick:W,icon:c?u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:`w-8 rounded-md p-1 aspect-square mx-auto ${a}`,children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}):u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${a}`,children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]}),theme:a}),u.jsx(vn,{handleClick:E,show:x,title:"change players",icon:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${a}`,children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"})}),theme:a,children:u.jsx(pf,{setPlayers:r,players:i,theme:a,minPlayers:1})}),u.jsx(vn,{handleClick:_,title:"CHANGE THEME",icon:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${a}`,children:[u.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),u.jsx("path",{d:"M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"}),u.jsx("circle",{cx:"6.5",cy:"11.5",r:"1.5"}),u.jsx("circle",{cx:"9.5",cy:"7.5",r:"1.5"}),u.jsx("circle",{cx:"14.5",cy:"7.5",r:"1.5"}),u.jsx("circle",{cx:"17.5",cy:"11.5",r:"1.5"})]}),show:g,theme:a,children:u.jsx(yf,{theme:a,toggleTheme:l,onClose:_})})]})},wf=({setSelectedDecks:e,selectedDecks:t,players:n,decks:o,prevStep:r,setPlayers:i,theme:a,toggleTheme:l,categories:s})=>{const[d,m]=z.useState(0),[f,p]=z.useState(0),[g,v]=z.useState(0),x=z.useRef(null),L=W=>{for(let C=W.length-1;C>0;C--){const D=Math.floor(Math.random()*(C+1));[W[C],W[D]]=[W[D],W[C]]}return W},c=z.useMemo(()=>{const W={};return t.forEach(C=>{const D=o.find(j=>j.short_name===C);D&&Object.keys(D.questions).forEach((j,ne)=>{W[ne]||(W[ne]=[]),W[ne]=W[ne].concat(D.questions[j])})}),Object.keys(W).forEach(C=>{W[C]=L(W[C])}),Object.values(W).filter(C=>C.length>0)},[t,o]),h=c[g]||[],y=()=>{d<h.length-1?(m(W=>W+1),p(W=>(W+1)%n.length)):g<c.length-1&&_()},w=()=>{d>0?(m(W=>W-1),p(W=>(W-1+n.length)%n.length)):g>0&&E()},_=()=>{g<c.length-1&&(v(W=>W+1),m(0),p(0))},E=()=>{g>0&&(v(W=>W-1),m(0),p(0))};return u.jsxs("div",{className:"pt-14",children:[u.jsx(af,{prevStep:r,theme:a}),u.jsxs("div",{className:"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 tablet:w-[80%] w-full",children:[u.jsx(sf,{player:n[f],theme:a}),u.jsx(lf,{textRef:x,theme:a,children:h[d]}),u.jsx(uf,{theme:a,previousCard:w,nextCard:y,previousLevel:E,nextLevel:_,level:g+1,curr:d+1,tot:h.length,disablePrev:d===0,disablePrevLevel:g===0,disableNext:d===h.length-1,disableNextLevel:g===c.length-1}),u.jsx(vf,{textRef:h[d],decks:o,players:n,setSelectedDecks:e,selectedDecks:t,setPlayers:i,theme:a,toggleTheme:l,categories:s})]})]})},nr=({onClick:e,children:t,theme:n})=>u.jsx("button",{className:`${n} bg-main text-contrastText uppercase px-4 py-1 font-semibold select-none`,onClick:e,children:t}),kf=({categories:e,selectedDecks:t,setSelectedDecks:n,nextStep:o,prevStep:r,theme:i})=>{const a=g=>{n(v=>v.includes(g)?v.length>1?v.filter(x=>x!==g):v:[...v,g])},[l,s]=z.useState(!1),[d,m]=z.useState(null),f=g=>{m(g),s(!l)},p=({selected:g})=>u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`h-4 w-4 mr-2 my-auto col-start-1 ${i} ${g?"text-contrastPaperText stroke-2":"text-transparent cursor-default"}`,children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})});return u.jsxs("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 laptop:pt-20 w-[90%]",children:[u.jsx("h2",{className:`w-[90%] laptop:w-1/2 py-2 pl-4 m-auto font-semibold uppercase text-contrastText bg-main text-xl ${i}`,children:"decks"}),u.jsx("p",{className:"w-[90%] laptop:w-1/2 m-auto mt-2 mb-10",children:"Don't worry. You may change this later :)"}),u.jsx("div",{className:"w-[90%] laptop:w-1/2 p-2 m-auto overflow-y-scroll deck-list h-96",children:Object.values(e).map(g=>u.jsxs("div",{className:"mb-2",children:[u.jsx("h2",{className:`${i} text-xs font-semibold uppercase text-contrastPaperText`,children:g.displayName}),g.decks.map(v=>u.jsxs("div",{className:"grid grid-cols-5 pl-2 mt-1",children:[u.jsxs("label",{htmlFor:v.short_name,className:"flex col-span-3 cursor-pointer",children:[u.jsx("input",{type:"checkbox",id:v.short_name,checked:t.includes(v.short_name),onChange:()=>a(v.short_name),className:"appearance-none"}),u.jsx(p,{selected:t.includes(v.short_name)}),u.jsx("p",{className:`${i} select-none uppercase text-contrastPaperText font-semibold hover:underline`,children:v.short_name})]}),u.jsxs("div",{className:"grid grid-cols-3 col-span-2 col-start-4 gap-x-2 justify-self-end",children:[v.backDesc!=null&&v.preview!=null?u.jsx("button",{onClick:()=>f(v.short_name),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`${i} m-auto text-contrastPaperText size-5 opacity-80`,children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})}):u.jsx("div",{}),d===v.short_name&&u.jsx(jd,{title:v.name,handleClose:()=>f(null),isInfo:!0,theme:i,children:u.jsx(bd,{backDesc:v.backDesc,preview:v.preview})}),v.players==="1"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`${i} text-contrastPaperText size-6 opacity-80`,children:[u.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})]}):v.players==="1+"?u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`${i} text-contrastPaperText size-6 opacity-80`,children:u.jsx("path",{d:"M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M15,10v2h3v3h2v-3h3v-2h-3V7h-2v3H15z M1,18v2h16v-2 c0-2.66-5.33-4-8-4S1,15.34,1,18z"})}):v.players==="2"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`${i} text-contrastPaperText size-6 opacity-80`,children:[u.jsx("path",{d:"M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z"}),u.jsx("circle",{cx:"9",cy:"8",r:"4"}),u.jsx("path",{d:"M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z"}),u.jsx("path",{d:"M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z"})]}):v.players==="2+"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`${i} text-contrastPaperText size-6 opacity-80`,children:[u.jsx("polygon",{points:"22,9 22,7 20,7 20,9 18,9 18,11 20,11 20,13 22,13 22,11 24,11 24,9"}),u.jsx("path",{d:"M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z"}),u.jsx("path",{d:"M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z"}),u.jsx("path",{d:"M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z"}),u.jsx("path",{d:"M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z"})]}):null,v.isExpansion?u.jsx(La,{className:`${i} w-6 aspect-square h-fit text-contrastPaperText opacity-80`}):null]})]},v.short_name))]},g.displayName))}),u.jsxs("div",{className:"w-[90%] laptop:w-[60%] grid grid-cols-2 mx-auto laptop:mt-20 mt-7",children:[u.jsx("div",{className:"place-items-start",children:u.jsx(nr,{onClick:r,theme:i,children:"back"})}),u.jsx("div",{className:"grid place-items-end",children:u.jsx(nr,{onClick:o,theme:i,children:"next"})})]})]})},Wf=({players:e,setPlayers:t,nextStep:n,prevStep:o,minPlayers:r,theme:i})=>{z.useEffect(()=>{e.length<r&&t(Array(r).fill("")),console.log("min players: ",r)},[r,e.length,t]);const a=e.filter(f=>f.trim()!==""),l=f=>p=>{if(p.preventDefault(),a.length>r){const g=e.filter((v,x)=>x!==f);t(g)}},s=(f,p)=>{const g=[...e];g[f]=p,t(g)},d=()=>{const f=e.filter(p=>p.trim()!=="");f.length<r?t([...f,...Array(r-f.length).fill("")]):t(f)},m=()=>{d(),n()};return z.useEffect(()=>{e[e.length-1]&&t([...e,""])},[e]),u.jsxs("div",{className:"mt-5 laptop:mt-20",children:[u.jsx("h2",{className:`${i} w-[90%] laptop:w-1/2 py-2 pl-4 mx-auto font-semibold uppercase text-contrastText bg-main`,children:"players"}),u.jsx("p",{className:"w-[90%] laptop:w-1/2 mx-auto mt-2 mb-10",children:"Just a bit more info. You may change also this later :)"}),e.map((f,p)=>u.jsxs("div",{className:"grid w-[90%] laptop:w-1/2 grid-cols-2 mx-auto",children:[u.jsx("input",{name:"name",type:"text",value:f,onChange:g=>s(p,g.target.value),className:`${i} p-2 placeholder:opacity-60 h-8 bg-main/20 my-1 rounded-md uppercase font-semibold text-main focus:outline-main`,placeholder:`Player ${p+1}`}),p!==e.length-1&&a.length>r&&u.jsx("button",{className:`${i} relative flex items-center w-8 my-auto ml-4 rounded-md aspect-square hover:bg-main/20`,onClick:g=>l(p)(g),children:u.jsxs("svg",{viewBox:"0 0 24 24",className:"m-auto w-7 aspect-square text-main",fill:"currentColor",children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M19 13H5v-2h14v2z"})]})})]},p)),u.jsxs("div",{className:"laptop:w-[60%] w-[90%] grid grid-cols-2 mx-auto mt-20",children:[o&&u.jsx("div",{className:"place-items-start",children:u.jsx(nr,{onClick:o,theme:i,children:"back"})}),n!=null&&e.length>=r&&u.jsx("div",{className:"grid place-items-end",children:u.jsx(nr,{onClick:m,theme:i,children:"next"})})]})]})},xf="WNRS x Bumble BFF",_f="Bumble BFF",Cf="Bumble BFF",If="crossover",Sf="2",Ef="bumbleBFF",bf=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],jf=!0,Nf=["Bumble BFF"],$f=[[`What about my
 Bumble profile made
 you swipe right?`,`What do you think I was like
 in high school?`],[`What are you
 passionate about?`,`How would you describe
 your ex in three words?
 How would they describe
 you?`,`How's your heart
 today? Really?`,`What type of social
 situation makes you feel
 the most awkward?`,`What takes someone from
 a friend to a best friend?`,`What have you let go of
 this year that's made the
 most positive change?`,`What question are you
 trying to answer in your
 life right now?`,`What's the nicest thing
 you can remember
 doing for a friend?
 Permission to brag.`,`When was the last time
 someone made you feel
 special on your birthday?`,`Has a quote ever changed
 your worldview?`,`Wild Card Think of a movie that
 always makes you cry. On
 the count of three, say
 your answers out loud.
 (Both players)`,`Wild Card Illustrate your
 current love life.
 30 seconds. Compare.`,`Wild Card Do you need advice on
 anything in your life
 right now?
 Permission to vent.
 (Both players)`,`Wild Card Write down the three
 most important
 qualities in a BFF.
 One minute. Compare.
 (Both players.)`],[`What part of
 my personality wasn't
 showcased online?`,`What do you admire
 most about me?`]],Ql={name:xf,short_name:_f,crossover:Cf,category:If,players:Sf,theme:Ef,levels:bf,isExpansion:jf,backDesc:Nf,questions:$f},zf="WNRS x Bumble Bizz",Tf="Bumble Bizz",Pf="Bumble Bizz",Lf="2",Df="bumbleBizz",Rf=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],Hf=!0,Mf=[[`Do I seem like more of
 a creative or analytical
 type? Explain.`,`How organized do you think
 my computer desktop is on
 a scale of 1-10?`,`Between the two of us,
 who do you think is quicker
 at responding to emails?`],[`If funding weren't an
 issue, what idea would
 you execute this year?`,`In the form of an
 elevator pitch, describe
 what you do for a living.`,`What's the most
 important thing you're
 currently putting off?`,`What are you better
 at than most people
 you know?`,`What do you need most
 help with currently?`,`What do you wish
 you could spend more
 time doing?`,`What professional
 advice would you give
 your younger self?`,`What was the most
 fulfilling moment of your
 career this past year?`,`What career low has
 taught you the most?`,`What part of your
 job leaves you most
 energized? And the
 most drained?`,`Wild Card Both players write down
 your number one goal for
 the next month. Exchange.`],[`How do our skillsets
 complement each other?`,`Wild Card Write down a podcast
 your partner needs to
 listen to. Exchange.`,`Wild Card Write a motivational
 reminder to your partner.
 Fold and exchange.
 Open when needed.
 (Both players.)`]],Gl={name:zf,short_name:Tf,crossover:Pf,players:Lf,theme:Df,levels:Rf,isExpansion:Hf,questions:Mf},Ff="WNRS x Bumble Date",Of="Bumble Date",Bf="Bumble",Af="2",Vf="bumbleDate",Uf=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],qf=!0,Qf=[[`What was your first
 impression of me on
 Bumble vs. IRL?`,`How would you describe
 what you think my type
 is in three words?`,`What did you think
 about my first
 message?`,`Between the two of us,
 Who seems like the better
 texter? Explain.`],[`What dating advice
 would you give your
 younger self?`,`How old do you feel,
 emotionally?`,`Will I find your ex on your
 Instagram feed? Why or
 why not?`,`What's the most
 embarrassing thing
 that's ever happened
 to you on a date?`,`Finish the sentence:
 Dating is __________.
 (Both Players)`,`What did the people who
 raised you teach you
 about love?`,"Describe your perfect date.",`What has being single
 taught you about yourself,
 if anything?`,`What's your least favorite
 question to be asked on a
 date? What do you wish you
 were asked more?`,`What are you
 passionate about?`,`What are you not giving
 enough time to, currently?`,`When's the last time
 you surprised yourself?`,`What about my Bumble profile
 made you swipe right?`,`Admit something:

 What could you have done
 better in your previous
 relationship(s)?`,`Admit something:

 Is there an image of yourself
 you try to project on a first
 date that you wish you could
 let go of?`,`Wild Card Write down a dating pet peeve.
 (30 seconds) Compare.`,`Wild Card Write down the three most
 important things to
 you in a relationship.
 (30 seconds) Compare.`,"Wild Card Create your own question."],[`What's the most attractive
 quality about me that
 isn't physical?`,`How accurately did my
 Bumble profile reflect
 who I am IRL?`,`Wild Card Based on what you've
 learned, rewrite each
 other's Bumble bios.
 (30 seconds) Compare.`]],Yl={name:Ff,short_name:Of,crossover:Bf,players:Af,theme:Vf,levels:Uf,isExpansion:qf,questions:Qf},Gf="WNRS Cann Expansion Pack",Yf="Cann",Kf="Cann",Xf="2",Zf="cann",Jf=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],ey=!0,ty=["Let's get even closer"],ny=[["On a scale of 1-10, how high do you think I am?","What's something you've never noticed about me until this moment?","If I were a song, which song would I be?"],["What's the most embarrassed you remember being from something you did while drunk?","If you could have any food in the world right now, what would it be?","How would you describe the feeling of drinking a Cann in one word?",`What do you wish you could see
 with a brand new perspective?`,"What do you want to spend more of your time doing? What do you want to spend less of your time doing?","What's been hard for you to say out loud? Get it off your chest.","What are you most grateful for in this current moment?","What idea of yours do you feel most excited about?",`What would bring your life
 5% more happiness?`,"Who in your life do you need to set better boundaries with?","What have you been feeling a lot of recently?","What do you need right now but aren't communicating?",'What does "taking care of you" look like in this chapter of your life?',"Wild Card Staring contest. First one to laugh has to finish their Cann.","Wild Card What's your favorite guilty pleasure? On the count of three, say your answers out loud.","Wild Card Pitch me a million dollar idea.","Wild Card Make the weirdest noise you can. Both players.","Wild Card Share a video that always you laugh with your partner. (Both players)","Wild Card Describe the best party you've been to recently in a different accent.","Wild Card Draw a snapshot of your dream vacation.","Wild Card Write a rap verse that describes your current love life & perform it. Get into it!"],["Wild Card What's your favorite pick-me-up? On the count of three say your answers out loud."]],Kl={name:Gf,short_name:Yf,crossover:Kf,players:Xf,theme:Zf,levels:Jf,isExpansion:ey,backDesc:ty,questions:ny},oy="WNRS x HBO Max",ry="HBO Max",iy="HBO Max",ay="Inspired by HBO Original",ly="2",sy="hbo",uy=["HBO Max"],dy=!1,hy=[`We don't become our
 best selves by ourselves.`,"#SoSheDid"],cy=["Issa and Molly on HBO Original Insecure. Julien and Zoya on Max Original Gossip Girl. The women of HBO Original Sex and the City.","Female friendships—onscreen and IRL—are often some of the most supportive, uplifting and even challenging relationships in our lives. They dare us to be our truest selves. They teach us to accept who we are. They're what make us believe in friendship soulmates.","This pack is inspired by some of our favorite femal friendships on HBO Max, and the different stages of their lives. No matter what chapter you and your friends are navigating, use these questions to get to know yourselves better, together.","Ready?","#SoSheDid"],fy=[[`How has our friendship
 changed you for the
 better? <Euphoria>`,`What was the hardest truth
 you had to face this year? <Insecure>`,`What have you achieved
 today that your younger
 self wouldn't believe? <Industry>`,`What am I most likely to
 get arrested for? <The Flight Attendant>`,`Wild Card What do you need to hear
 right now? Write it down and
 tape it to your mirror.
 Seriously, do it. <Insecure>`,`Imagine I just woke up from
 a crazy night out. Where did I
 end up? What did I do? What
 do I regret? <The Flight Attendant>`,`How would you describe your
 sex life in one word? <Sex and the City>`,`What is your most unlikely
 friendship? What makes it work? <Hacks>`,`Who in your life feels healing
 to be around? Who in your life
 feels like the opposite? <I May Destroy You>`,`Have you ever had to
 break up with a friend? <Insecure>`,`Are any of your
 insecurities hurting
 anyone else by
 accident? <Insecure>`,`What used to hurt that
 you can laugh at now?
 Get specific. <Hacks>`,`What are you proudest
 of yourself for saying
 "no" to recently? <Euphoria>`,`What opinion would
 you be most hesitant
 to share online? <Hacks>`,`What's one small way you
 could improve your relationship
 with social media? Get specific. <Gossip Girl>`,`What am I most likely to
 get fired for? Explain. <Industry>`,`What is the sexiest quality in
 someone that isn't physical? <Sex and the City>`,`What teacher do you wish you
 could thank today? Explain. <The Sex Lives of College Girls>`,`What does financial security
 look like for you? Get specific. <Industry>`,`What do you wish you could tell
 your high school self today? <Gossip Girl>`]],Xl={name:oy,short_name:ry,crossover:iy,edition:ay,players:ly,theme:sy,levels:uy,isExpansion:dy,backDesc:hy,preview:cy,questions:fy},yy="WNRS x Valentino",py="Valentino",my="Valentino",gy="2+",vy="valentino",wy=["Valentino"],ky=!1,Wy=[`See yourself in
 someone else`],xy=["When we show up as our authentic selves we empower others to do the same, but sometimes we need a little help opening up.","This expansion pack is an invitation to deeply connect with others and with yourself. To play, both players ask each other questions; you may even reveal parts of yourself that you never met before.","Ready?"],_y=[[`What have you witnessed
 recently that has given
 you hope for humanity
 in any big or small way?`,`What limiting belief is holding
 you back the most right now?`,`What have you overcome this
 year that you weren't sure
 you could?`,`When was the last time
 you felt truly understood
 by somebody? Who was it?
 What did they understand?`,`What has this year taught
 you about yourself?
 Good and bad.`,`Asking for help is a strength
 not a weakness. What do
 you need help with?`,`What has your negative
 self-talk sounded like
 recently? Replace it
 with an affirmation.`,`Who in your life can you
 have more empathy towards?
 What's getting in the
 way of that?`,`What are you judging
 yourself too harshly
 for? How can you show
 more empathy towards
 yourself?`,`What was the last lie
 you told yourself?`,`What are you working
 through that others
 don't see?`,`Is there someone in your
 life you feel misunderstood
 by? What do you wish they
 would understand?`,`What are you overthinking
 right now? Or who?`,`How have you neglected
 yourself recently? What's
 one thing you can do to make
 it up to yourself this week,
 big or small?`,`What "failure" taught
 you the most this year?
 What did it teach you?`,"What are you holding onto that are hurting you the most? What's one small step you can take towards letting it go?","Who deserves more of your time? How can you show up for them?",`What are you still
 trying to understand
 about yourself?`,"What is the hardest thing for you to understand about yourself?","What do you give in too much energy to? What is that at the expense of?",`Wild Card What would you tell
 yourself one year ago
 today? Write it out.`,`Wild Card Write down one thing you
 want to forgive yourself for.
 Find the lesson and let it go.`,"Wild Card Who in your life deserves the biggest thank you? Let them know now.",`Wild Card Both players write down a
 compliment to one another.
 Fold and exchange. Open
 only when you two
 have parted.`,`Reminder Have more empathy
 (For yourself too)`]],Zl={name:yy,short_name:py,crossover:my,players:gy,theme:vy,levels:wy,isExpansion:ky,backDesc:Wy,preview:xy,questions:_y},Cy="Couples Edition",Iy="Couples",Sy="Couples Edition",Ey="2+",by="main",jy=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],Ny=!0,$y=["Warning: These cards will unlock honest answers"],zy=["What's more romantic than being understood?","How well do you know your partner? How well do they know you? The Couples Edition is meant to explore how well you already know each other and unlock the layers you never knew existed.","It is an invitation to better understand who your partner is today, not just the person who you met them as. There's only one rule while playing: Honest answers only.","Ready?"],Ty=["Things to remember while playing:","1. Relationships change just like people in them do. Continue getting to know your partner every day.","2. Your partner can't read your mind. Communicate your needs, don't just think them.","3. Communication creates partnership, but that requires sharing your truth with your partner and being open to receiving theirs. Especially when it's uncomfortable.","4. The most romantic thing is being understood. But that requires listening actively. Limit all distractions when your partner is opening up to you.","5. Reveal even what feels risky. Let your partner see who you really are, not just what you think they want to see.","6. Show and tell your partner you love them every day. We all need more love than we lead on.","How did this game leave you feeling? What did it teach you about your partner? What did it teach you about yourself?"],Py=[[`What do you think I'm
 most sensitive to?`,`What do you think my
 view on marriage is?
 Explain.`,`What did you think I'd be
 like in bed? How accurate
 did that turn out to be?`,`What about me most intrigued
 you before we started dating?`,`What was the hardest
 thing for you to understand
 about me early on?`,`What do you think is the
 greatest source of stress
 for me right now?`,`What intimidated you
 most about me early
 on, if anything?`,`What warning would you
 give yourself about me at the
 start of our relationship?`,`What do you think my biggest
 goal for this year is?`,`What do you think is the
 main way I show/give love?`,`What's my biggest
 pet peeve? Explain.`,`How would you describe
 my relationship with work
 in one word? Explain.`,`What's your favorite thing
 to see me wear? (Nothing
 doesn't count.)`,`What's my coffee
 order? Get specific.`,`What did you think my
 type was before we met?`,`What did my friend group
 reveal to you about me?`,`Describe the first time
 we met through your
 perspective in detail.`,`What would I most
 likely be fired for?`,`What do I dislike that
 most people love?`,`What do I love that
 most people dislike?`,`How important do you
 think birthdays and holidays
 are to me? Explain.`,`Who do you think
 was more nervous
 on our first date?
 Explain.`,`If our relationship was
 a Netflix series, what would
 it be called? What episode
 are we on?`,`What do you think my
 perfect date night would
 be? Describe in detail.`,`What was the first
 thing you noticed about me
 that wasn't physical?`,`What assumption did
 you make about me that
 turned out to be false?`,`On a scale of 1-10,
 how open do you feel I
 am with you? Explain.`,`What would a day of
 completely spoiling me
 look like?`,`Did you make any assumptions
 about me based on my age?
 If so, what were they?`,`What do you think I'm
 most sensitive to during a fight
 or disagreement?`,`What celebrity couple
 are we most like?`,`If we weren't in a
 relationship, what
 pick up line would
 you use with me?`,`Do you think I have
 any unconventional
 views on love?`,`If our first kiss was a song,
 what would it be called?`,`How do I show you I'm upset
 without telling you I'm upset?`,`What assumption did you
 make about me that turned
 out to be right?`,`What about me first stood
 out to you physically?`,`What was I wearing
 on our first date?`,`How would you describe
 our first date in one word?`,`Did you ever stalk my
 social media before we met?
 If so, what stood out?`,`What's my go-to Postmates
 order at the moment?`,`How important do you
 feel physical affection is
 is for me? Explain.`,`What did your friends
 think about me when we
 first started dating?`,`How important do you think
 gifts are to me? Explain.`,`What do you think I'd like to
 do more often with you?`,`Wild Card Between the two of us,
 who's most likely to make
 us late for an event? Write
 it down and compare.`,`Wild Card Maintain eye contact
 for 30 seconds. What
 did you notice?`,`Wild Card Draw your partner to
 the best of your ability.
 1 minute. Compare.`,`Wild Card Do your best
 impersonation of
 each other.`,`Wild Card Rate each other's cuddling
 skills on a scale of 1-10.
 Compare and explain.`,`Wild Card Rate each other's cooking
 skills on a scale of 1-10.
 Compare and explain.`,`Wild Card Write down how well
 you feel you know your
 partner on a scale of 1-10.
 Compare and explain.`,`Wild Card Write down how well you
 feel your partner knows
 you on a scale of 1-10.
 Compare and explain.`,`Wild Card Write down how many times
 a week you think your partner
 would like to have sex.
 Compare.`],[`Finish the sentences:
 I knew I really liked you
 when _________. I knew I loved
 you when _________.`,`When was the last time
 someone betrayed your trust?
 How did that affect your
 ability to trust today?`,`What's the sexiest thing
 I do without realizing it?`,`What compromise have
 you seen me make in our
 relationship that you're
 most grateful for?`,`How has your definition
 of love changed over
 time, if at all?`,`How have I changed
 you for the better?`,`What did you learn to not
 take personally with me?`,`What do you overthink
 most in our relationship,
 if anything?`,`What can we laugh at now
 that once felt so daunting
 in our relationship?`,`The hardest thing for me
 to reveal about myself
 to you was _________.`,`What has this relationship
 taught you about yourself?`,`What's the most
 romantic thing I've done
 for you recently?`,`What did our worst
 argument teach you?`,`What are you currently
 working through that I
 don't see, if anything?`,`How do you think my job
 affects our relationship?`,`What have you been extra
 sensitive to lately?`,`What feelings are hard for
 you to communicate to me?
 How can I make it easier?`,`What immediately attracted
 you to me? What attracted
 you more over time?`,`What's the best gift
 I've given you? Material
 or immaterial?`,`What about you feels
 hardest to love?`,`What's the most important
 lesson a past relationship
 has taught you
 applied to ours?`,`Are there any insecurities
 from previous relationships
 that you carried into this
 one? If so, what were they?`,`What recent experience
 made you feel closer to me?`,`What have I helped you
 appreciate about yourself?`,`How do our strengths and
 weaknesses complement
 each other?`,`When was the last time I hurt
 you, perhaps unintentionally?`,`How do I show that I love
 you without telling you?`,`How have you seen me
 grow in this relationship?`,`Have I changed your worldview
 in any big or small way?`,`How does our age difference,
 or lack thereof, affect us?
 If at all?`,`What's one small way we
 can improve our sex life?`,"How do you define cheating?",`What small thing had a big
 impact on our relationship?`,`How does social media
 affect me in my day to day
 life? How does it affect
 our relationship?`,`When was the last time I
 made you feel loved when
 you didn't feel lovable?`,`Have I ever betrayed your
 trust in any big or small way?
 What would help rebuild
 that trust?`,`What did you learn from your
 parents' relationship that you'd like to apply/avoid in this one?`,`When do you think I'm at my best?
 Who am I with? What am I doing?`,`What's one small thing
 I do that tells you everything
 you need to know about me?`,`What fight of ours did
 you struggle with most?
 What felt particularly
 hard for you about it?`,`What's the hardest
 compromise you've had to
 make in this relationship?`,`What's something we
 used to do at the beginning
 of our relationship that
 you miss the most?`,`What's one way our
 relationship has gotten
 better over time?`,`In what way(s) is this
 relationship unlike any
 other before?`,`What title would you give
 this chapter of our sex life?`,`Wild Card Write down 3 things you love
 most about your partner.
 1 minute. Compare.`,`Wild Card Finish the sentence:
 I'm sorry for _________.
 Write it down. Both
 players. Compare.`,`Wild Card Write down one small way you
 can be better in this relationship.
 Both players. Compare.`,`Wild Card On a scale of 1-10, write down
 the importance of having kids
 to you. Compare and explain.`,`Wild Card Write a love song for
 your partner. 1 minute.
 Perform for each other.`,`Wild Card Write a short guide on how
 to love your partner well.
 30 seconds. Compare.`,`Wild Card Draw one of your favorite
 memories from our relationship.
 30 seconds. Compare.`,`Wild Card Between the two of us
 who apologizes first after
 a fight? Write down their
 name. Compare answers.`],[`How have I helped you
 become a better person?`,`What am I most qualified to
 give relationship advice about?`,`Is there anything you still
 don't know about me that
 you wish you did?`,`What answer of mine
 surprised you the most
 throughout this game?`,`If you could prescribe
 our relationship one thing,
 what would it be and why?`,`When in this game did you
 feel most connected to me?`,`What weakness of yours do
 I help complement the most?`,`What's something I'm too
 hard on myself about?`,`How have I changed since
 we first met? What hasn't
 changed about me at all?`,`On a scale of 1-10, how
 vulnerable do you think I've
 been in this game? Explain.`,`What's one similarity
 between us that you love?`,`What's one difference
 between us that you love?`,`How would you describe the
 way I love you to a stranger?`,`What part of my heart do
 you wish you could heal?`,`What's one thing you'll
 do differently during
 our next argument?`,`What do you think I
 struggle to open up about
 in our relationship?`,`What do you find difficult to
 open up to me about, if anything?`,`What answer of mine will you
 still be thinking about when
 this game is over?`,`What question felt
 most vulnerable for
 you to ask? Explain.`,`What question felt
 most vulnerable for
 you to answer?`,`What is a lesson about
 love that you'll take
 away from this game?`,`Thank you for helping me
 realize _________ about myself.`,`What did this
 conversation teach you
 about our relationship?
 What did it teach you
 about yourself?`,`What about our relationship
 are you proudest of?`,`What don't I give myself
 enough credit for?`,`What goal would feel best for
 you to accomplish this year?
 How can I support you in that?`,`What could other
 couples learn from us?`,`When was the last time you
 felt lucky to be my significant
 other? Get specific. ("All the time" doesn't count.)`,`Finish the sentence:
 I'm proudest of you for _________.`,`What's a superpower
 of mine that perhaps
 I'm unaware of?`,`Finish the sentence:
 Thank you for accepting _________ about me.`,`What do you wish
 we did more of?`,`What most excites you
 about our future?`,`What do we have in this
 relationship that you never
 thought was possible?`,`What's one thing you'd never
 change about our relationship?`,`What do you think our
 defining characteristic
 is as a couple?`,`What would you tell
 yourself on our first date
 if you had the chance?`,`In your opinion,
 how am I holding myself
 back the most?`,`If we started a business
 together what would it be?`,`What's your favorite
 ritual of ours? What's a
 ritual you'd like to create
 for us moving forward?`,`Wild Card Write a note to your
 partner that you can
 only open during
 your next fight.`,`Wild Card Write down a promise to each
 other. 1 minute. Compare.`,`Wild Card Write down the top 3 things
 you're most grateful for in
 your partner. 30 seconds.
 Compare.`,`Wild Card Kiss a part of your partner
 you've never kissed before.`,`Wild Card What memory of ours makes
 you smile just thinking about it?
 Write it down and compare.`,`Wild Card Think of one thing we can
 do this week to make our
 relationship stronger.
 Schedule it now.`,`Wild Card Write a stand up routine about
 our relationship. 1 minute.
 Recite to each other.`,`Wild Card Plan a surprise your partner
 would appreciate. Make it happen
 by the end of this month.
 Both players.`,`Wild Card Play a round of
 rock paper scissors.
 Loser must do anything
 their partner wants.`]],Jl={name:Cy,short_name:Iy,edition:Sy,players:Ey,theme:by,levels:jy,isExpansion:Ny,backDesc:$y,preview:zy,instruction:Ty,questions:Py},Ly="Family Edition",Dy="Family",Ry="Family Edition",Hy="2+",My="main",Fy=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],Oy=!0,By=["How well do you know your family?","How well do they know you?"],Ay=["When was the last time you truly connected with your family? Not just as relatives, but as human beings?","This pack is an invitation to get to know your family as individuals, outside of your roles and for them to get to know you.","Whether big or small, conventional or perfectly unique, our family pack is for any group of individuals who consider each other family. There's only one rule while playing: Honest answers only.","Ready?"],Vy=["Warning: Not your average game night.","Starting with level 1, players take turns asking and answering questions from each deck. Each player must ask and answer at least 3 cards before progressing to the next level. The person who did the dishes last draws the first card.","Level 1: On your turn, draw a card and have the player to your left answer. (Option for all players to chime in.) Continue in a circle until Level 1 is complete.","Level 2: When it's your turn, read your card out loud and choose one player in the group to answer. You may not select a player who has just been picked.","Level 3: When it's your turn, draw a card and the group collectively answers for the cardholder.","Wildcards: If you draw a wildcard, your group must complete the instructions unless otherwise stated."],Uy=[[`What do you think my
 favorite/least favorite
 holiday is? Explain.`,`From your perspective,
 how would you describe my
 relationship with work
 or school?`,`How important do you think
 birthdays are to me? Explain.`,`For siblings: Growing up,
 who got away with more?`,`If our family had a
 Netflix series, what
 would it be called?`,`If I have the aux on a
 family road trip, what am
 I most likely to put on?`,`Who is most likely to
 read through the terms
 and conditions?`,`For children to ask parents:
 In what ways was my childhood
 different than yours?
 Get specific.`,`Who in our family do
 you feel you know the
 most/least? Why do
 you think that is?`,`What warning sign should be
 outside our family home?`,`Describe what you think
 a day in my life looks like.
 Get specific.`,`How do I show you I'm
 in a bad mood without
 telling you?`,`Who would you cast to
 play each of us in a movie
 based on our life?`,`In one word, how would you
 describe my role in the family?`,`If we were on Family Feud,
 who would win the most
 points for us?`,`Growing up, how strict do
 you feel our household was
 on a scale of 1-10? Explain.`,`What would you bring
 home to cheer me up after
 I've had a bad day?`,`Do you think I ever snuck
 out of the house growing up?
 Why or why not?`,`What is my comfort TV show
 and how many times do you
 think I've watched it?`,`What do you think was
 my strongest subject in
 school? My weakest?`,`What compliment do you
 think I hear the most? What
 don't I hear enough?`,`What am I really good at that
 perhaps I'm unaware of?`,`Do you think I've found
 my passion in life? What
 do you think it is?`,`Who do you think I get my
 sense of humor from?`,`Who in our family do you think
 I'm most similar to? Who am I the
 most different from? Explain.`,`Which one of us is most
 likely to lead the group
 out of an escape room
 successfully?`,`If our family made a cookbook,
 what meals would be included?`,`If our family came out with
 a line of merch, what phrase
 would we print on a t-shirt?`,`What am I most likely
 to get fired for?`,`Which friend of mine do you
 think brings out the best in me?
 What do they bring out?`,`What consistently brings
 a smile to my face?`,`If I were a cartoon
 character, what would my
 signature outfit be?`,`What do you think I
 am/was like in school?`,`Who in our family would you
 most likely go to for financial
 advice? What would you ask?`,`Who in the family are
 you most likely to go to for
 relationship advice? What
 would you ask them?`,`What do you think I wanted
 to be when I grew up?`,`Who in our family is most
 likely to get Tiktok famous?
 What would they go
 viral for?`,`How messy do you think my
 room is right now on a scale
 of 1-10? Explain.`,`What do you think is taking
 up most of my energy these
 days? How do you think I
 feel about it?`,`How would you describe
 my relationship with social
 media in one word?`,`Who do you think my
 best friend is and why?`,`Wild Card All players rate how
 unfiltered you feel you can
 be with our family on a scale
 of 1-10. Compare and explain.`,`Wild Card Who is most likely to be late
 to a family gathering? All players
 say your answers out loud on
 the count of 3.`,`Wild Card All players set your
 phone to do not disturb.
 Which player is this going to be the hardest for?`,`Wild Card Which of us is most likely
 to drive somewhere every
 day and still get lost?`,`Wild Card Tell the family member to
 your right one thing you admire
 about them and why.`,`Wild Card Each player writes down one
 thing that helps you open up
 emotionally and one thing
 that shuts you down. Share
 your answers with the family
 before moving on to the
 next card.`,`Wild Card In one sentence, describe
 the home you grew up in.
 1 minute. Share.`,`Wild Card Collectively rate your
 family members from best to
 worst texter. Write it down. Compare and explain.`,`Wild Card What do you think our family's
 superpower is? Write it down.
 Compare and explain.`,`Wild Card Give each family member a
 superlative (Best dressed, most
 likely to befriend a stranger,
 most likely to cry in public, etc).
 Get creative.`,`Wild Card Write down how open-minded
 you think our family is on a scale
 of 1-10. 10 being extremely open-
minded. Compare and explain.`,`Wild Card Tell the group your favorite
 memory that you share with the
 person sitting on your left.`,`Wild Card Who in the family has gotten
 the most speeding tickets?
 Everyone says your answer
 out loud on the count of 3.`,`Wild Card Take a family selfie!
 Bonus: Send it to someone
 who wishes were here.`,`Wild Card Which one of us is most likely
 to put an ice cream carton back
 in the fridge with just one bite
 left? Everyone says your answer
 out loud on the count of 3.`,`Reminder There's always
 another layer to
 everyone you think
 you know best.`],[`What's your favorite
 thing about being home?`,`How likely are you to bring a
 significant other home to meet us?
 What is something you'd warn
 them about beforehand?`,`Who do you consider family
 that you're not related to?
 What is their name and one
 thing about them?`,`What is the most valuable
 lesson our family has taught
 you about work ethic? Explain.`,`What is the most valuable
 lesson our family has taught
 you about love? Explain.`,`What boundary do you wish you
 had set with our family sooner?
 How can we honor it now?`,`What conversation feels
 overdue in our family? Go
 easy or go deep.`,`What's your favorite thing
 about this chapter in your life?`,`How does our family
 deal with conflict? What's
 one small thing we can
 work on?`,`Is there anything you've
 struggled to share with our
 family? Permission to share
 now if you feel ready.`,`What are you proudest of
 yourself for getting through
 this past year?`,`What are you proudest of our
 family for getting through?`,`What area of your life have
 you gained more confidence
 in recently? What's helped
 you get there?`,`When do you come to our
 family for help instead
 of anyone else?`,`What is a family memory
 that still makes you laugh
 to this day?`,`What's your grandfather's name
 and one thing about him?`,`When was the last time you
 took a risk that paid off?`,`What have you learned to
 accept about yourself over
 time? What's helped you
 get there?`,`Has a teacher ever changed
 your life? If so, what was their
 name, and what would you say
 to them today?`,`In what ways are you
 most like the people
 who raised you?`,`What's your most vivid
 memory from your childhood
 home? Describe in detail.`,`How do you show up for
 yourself after a bad day?`,`What is the best gift a family
 member has ever given you? Material or Immaterial?`,`When was the last time
 you felt most understood
 by someone in the family? What did they understand?`,`When was the last time
 you felt misunderstood
 by someone in the family? What do you wish they
 understood?`,`When was the last time
 you took someone in our
 family for granted?`,`What's one argument you've
 had with someone in this family
 that you can laugh at now?`,`If you could have a
 conversation with a loved
 one who is no longer here,
 what would you ask them?
 What would you want
 them to say?`,`What's your grandmother's
 name and one thing about her?`,`What's been the best
 mistake you've ever made?`,`Where do our family
 arguments often stem from?
 How do you personally
 contribute?`,`What's become more/less
 important to you over the years?`,`For siblings: What family
 rules have you learned to
 appreciate as you've
 gotten older?`,`How do you define family
 beyond just being related?
 Get specific.`,`For siblings: What's a
 vivid memory that you have
 of me growing up that makes
 you smile to this day?`,`What are you currently
 working through that
 our family doesn't see?`,`Finish the sentence: Something
 that brought a smile to my face
 this week was _________.`,`For parents to answer: How
 would you describe raising this
 family in one word?`,`What's one lesson you've had
 to unlearn from growing up
 in our family? Big or small.`,`What's something that felt
 normal growing up that
 you now realize is special?`,`What's something you want
 the next generation of our
 family to let go of?`,`Describe your perfect
 day with the family.
 Get specific.`,`Wild Card All players rate our family's
 communication skills on a scale
 of 1-10. How could we improve
 that by 1 point?`,`Wild Card Apologize to someone in
 the group for something
 big or small.`,`Wild Card All players write down
 your favorite family memory
 that comes to mind. 1 minute. Compare.`,`Wild Card Cardholder, share a life
 update with the family you
 would usually just keep
 to yourself.`,`Wild Card Play a round of rock paper
 scissors with the person sitting
 in front of you. Loser must
 complete a house chore of
 the winner's choice.`,`Wild Card Initiate a family group hug!
 Not the crappy kind. A warm
 fluffy one!`,`Wild Card Cardholder, pick a family
 member who isn't playing the
 game to text "I love you" to,
 before flipping to the
 next card.`,`Reminder Everyone is doing
 the best they can
 with what they
 know.`],[`How would you describe
 our family to a stranger?`,`What is my defining
 characteristic?`,`What is our family's
 defining characteristic?`,`What goal do you want to
 achieve this year? How can our
 family support you in that?`,`How have you seen
 me evolve recently?
 What hasn't changed
 at all?`,`What's one small thing I do
 that makes you feel loved?`,`What's something you
 assumed about me that
 turned out to be false?`,`What parts of yourself
 do you see in our family?`,`In one word, how would you
 describe our conversation?`,`What can you always
 count on me for?`,`What's one promise you
 want to keep to yourself
 this year? How can we
 help you keep it?`,`What's one promise you want to
 keep to our family this year?`,`What's an embarrassing
 family story that should
 never leave this table?`,`What is something about
 us that only our family
 would understand?`,`For children to answer: Finish
 the sentence, I'm thankful you raised me to be _________.`,`What do you think I
 should let go of?`,`Finish this sentence: Before
 this game is over I want our
 family to know _________.`,`What do you need right
 now from our family that
 you aren't communicating, if anything?`,`Who deserves a round of
 applause? What for?`,"What do you need today?",`How do our personalities
 complement each other?`,`From your perspective,
 what is something I do
 that seems effortless?`,`When do you miss
 our family the most?`,`What did you learn about
 yourself throughout
 this game?`,`What surprised you most
 during the game? Or who?`,`Who did you learn
 the most about during
 the game? What did
 you learn?`,`Who is the best
 communicator in our
 family? What can we
 learn from them?`,`What do you think I
 would benefit from
 doing less of?`,`What do you think I would
 benefit from doing more of?`,`What do you think our
 family would benefit from
 doing more of?`,`What subject is our
 family most qualified to
 give advice about?`,`What's something I could be
 great at if I invested the time?`,`Finish the sentence: One
 small way I can better show
 up for myself is _________.`,`Finish the sentence: One
 small way I can better show
 up for our family is _________.`,`For parents to answer:
 In what ways do you look
 up to your children?`,`What contribution do I
 bring to our family that
 I don't get enough
 credit for?`,`What does our family
 deserve an award for?`,`What do you need from
 our family in this chapter
 of your life?`,`What am I most qualified
 to give advice about?`,`Wild Card Tell the family member to
 your right one reason you're
 proud of them and why.`,`Wild Card Tell the person across
 from you the biggest
 lesson you've learned
 from them. Explain.`,`Wild Card Is there anything you've
 always wanted to ask a
 family member but haven't? Permission to finally ask.`,`Wild Card Cardholder, make a
 toast to the family.`,`Wild Card Each player writes out
 one thing our family would
 benefit from letting go of.
 Share and tear!`,`Wild Card Thank someone in the group
 for something big or small.`,`Wild Card Plan a family gathering
 for the near future. Add
 to your calendars and
 follow through.`,`Wild Card All players draw a family
 portrait to the best of your
 ability. 1 minute. Vote for
 which one goes on the fridge.`,`Wild Card Create a family theme song.
 Each player writes one line and
 sing together once complete.
 Get into it.`,`Reminder Boundaries
 allow us to
 love at full
 capacity.`,`Reminder Everyone's love
 looks different.`]],es={name:Ly,short_name:Dy,edition:Ry,players:Hy,theme:My,levels:Fy,isExpansion:Oy,backDesc:By,preview:Ay,instruction:Vy,questions:Uy},qy="Honest Dating Expansion Pack",Qy="Honest Dating",Gy="Honest Dating Expansion Pack",Yy="2",Ky="main",Xy=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],Zy=!0,Jy=[`What if dating was
 as simple as getting to know
 another human being?`,"No games, just this one."],ep=["How honest are your dating experiences, really?","Dating doesn't have to be a game, it can be as simple as getting to know another human being. Discovering compatibility with another person is only possible when we show up as our true selves, but we have to be willing to let our true selves be seen.","This dating explansion pack can be added to the original WNRS card game. Each player alternates between asking and answering each question. How do you win? Stay honest.","Ready?"],tp=[[`Just by looking at me,
 what would you think
 I do for a living?`,`What do you think my type
 is? Describe in detail.`,`What do you think my
 drink of choice is?`,`How many relationship do
 you think I've been in? How
 many times do you think I've
 been in love? Explain.`,`What do you think I was like
 in high school? Explain.`,`Do you think I'm still on
 good terms with my
 exes? Why or why not?`,`What was the first thing
 you noticed about me when
 we met in person?`,`Wild Card Write down your 3 favorite
 physical features of your
 partner and read them out
 loud. Both players.`],[`What are you feeling
 a lot lately?`,`Do you have any
 unconventional opinions
 when it comes to romantic
 relationships?`,`I know I really like
 someone when _________.`,`Has sex ever been a
 deal breaker in your
 past relationships?
 Explain.`,`When's the last time you
 ghosted someone and why?`,`What about me intrigued
 you besides my physical
 appearance?`,`What do your friends know
 about me, if anything?`,`What part of your job
 energizes you the most?
 Leaves you the most
 drained?`,`How has your view on love
 evolved over time, if at all?`,'How do you define "Dating"?',`Describe your worst
 heartbreak. What did
 it teach you?`,`Have you ever considered
 an open relationship?
 Why or why not?`,`Who in your life do you feel
 most yourself around? Why?`,`Which one of your parents'
 personality traits do you
 want to keep? Let go of?`,`What is something new
 you've learned about
 yourself recently?`,`What's the hardest
 part about dating you?`,`What are you overthinking
 right now?`,`What have you tolerated
 from others in the past
 that you no longer have
 space for?`,`What dating advice would you
 give your younger self?`,`How emotionally available do
 you currently feel? Explain.`,`What has being
 single taught you
 about yourself?`,`What was the worst
 date you've ever been
 on and why?`,`What about you has felt
 repeatedly misunderstood
 by others, if anything?`,`What's a
 non-negotiable
 in your life?`,`What did the people who raised
 you teach you about love? How
 has that shaped your views on
 love today?`,`Wild Card Write down your top 2
 relationship deal breakers.
 Both players. Compare.`,`Wild Card Write down your favorite
 song lyric you can think of
 off the top of your head.
 Compare and explain.`,`Wild Card Share something you
 typically wouldn't on a
 first date. Both players.`,`Wild Card Give each other tattoos
 with the nearest pen or
 marker. 30 seconds.`,`Wild Card Write down the top 3 most
 important qualities in a romantic
 partner. Both players. Compare.`,`Wild Card Think of the most underrated
 show streaming currently. On the
 count of 3, say your answers out
 loud. Both players.`],[`What song should I listen
 to on my way home?`,`Based on what you've learned
 about me, what do you think I'm
 looking for romantically?`,`On a scale of 1-10 how
 "Emotionally available"
 do I seem? Explain.`,`What mannerisms of
 mine stood out the
 most to you, if any?`,`How would you describe
 our date in one word?`,`If you were to write
 my dating profile bio,
 what would it say?`,`What part of my personality
 isn't showcased online?`,`What do you find most
 attractive about me that
 isn't physical?`,`Wild Card Look through each other's
 social media. Pick your favorite
 photo. Compare and explain.`,`Wild Card Write your partner a text outside
 of your comfort zone at this end
 of this date. Both players.`,`Wild Card Ask literally anything.
 Permission to go there.`]],ts={name:qy,short_name:Qy,edition:Gy,players:Yy,theme:Ky,levels:Xy,isExpansion:Zy,backDesc:Jy,preview:ep,questions:tp},np="WNRS x Red Table Talk Editionk",op="Inner Circle",rp="Inner Circle Expansion Pack",ip="Red Table Talk",ap="2+",lp="main",sp=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],up=!0,dp=[`There's always another
 layer to anyone
 you think you know`],hp=[[`What do you think I'm
 most sensitive to?`,`What do you think my
 main love language is?`],[`What's the hardest truth
 you had to face
 this past year?`,`What's brought you the most
 unexpected joy recently?`,`Who in your life do you feel
 you can be most
 vulnerable with? Explain.`,`Have I ever challenged
 your worldview? How so?`,`What is a moment in our relationship
 that you felt undeniably loved?`,`How can I add 1% more
 happiness to your life?`,`A perfect day together
 would be _________.`,`What's the most fun you
 can remember having with
 me recently?`,`How can I best support
 you in this chapter
 in your life?`,`What's a feeling you're
 uncomfortable
 sharing with me?`,`What are you currently
 working through that
 I don't see?`,`When's the last time
 you felt lucky
 to be you?`,`When's the last time
 I surprised you?`,`When was the last time
 you felt most yourself?`,`Wild Card Sing your favorite song lyrics
 you can think of off
 the top of your head.
 Both players.`,`Wild Card Ask me something you think
 is off limits. Both players.`,`Wild Card Draw your favorite memory with me.
 Both players. Compare.`,`Wild Card Set an intention for
 this next week. Stick
 to it. (Both players)`,`Wild Card Finish the sentence:
 When I'm hurt I _________.
 Both players.`],[`What are you
 proudest
 of me for?`,`What's something we
 should celebrate together?`,`You've shown me _________
 about myself.`,`Wild Card Finish the sentence:
 Thank you for _________.
 Both players.`]],ns={name:np,short_name:op,edition:rp,crossover:ip,players:ap,theme:lp,levels:sp,isExpansion:up,backDesc:dp,questions:hp},cp=`WNRS x DVF Own It
 Expansion Pack`,fp="Own It",yp="DVF",pp="2+",mp="ownIt",gp=["Own It"],vp=!0,wp=["Own It Expansion Pack"],kp=["What if your biggest insecurities were your greatest strengths? If you own it. They are!",`To "own it" is to accept the truth and deal with it, however unpleasant it may be. We're Not Really Strangers and DVF came together to create an expansion pack all about owning the person we are today and the person we are becoming.`,"To play, journal your answers or explore this deck with a loved one who's willing to dig deep.","Owning who we are is the best thing we can do for ourselves and the people in our lives.","Ready?"],Wp={Yellow:"#d0af3a",Orange:"#c66532",Red:"#af2637",Green:"#275835",Blue:"#5f86b5",Pink:"#c97986"},xp=[["When was the last time you felt complete [#af2637](zen)? Who were you with? Where were you? What were you doing?",`How would you describe
 your relationship with [#d0af3a](yourself)
 in one word?`,`What is your [#275835](x-factor)?
 Permission to brag.`,"Who is a [#c66532](woman) in your life that inspires you to be a better person? Why does she come to mind? (Send her a thank you)","What still feels [#c97986](vulnerable) in your life? What does owning it look like for you?","Who from your past would you want to [#5f86b5](reunite) with? What would you ask them?",`What's the hardest [#275835](truth)
 you've had to own
 this past year? What has
 owning it taught you?`,"How has your definition of [#d0af3a](success) evolved over time? What is your definition of it today? Get specific.","Who in your life do you want to build a deeper [#af2637](relationship) with? (Be direct and tell them)",`What [#5f86b5](question) have you
 avoided asking someone? What
 question have you avoided
 asking yourself?`,"What area of your life have you made the most [#c97986](progress) in recently? Get specific. Take a moment to congratulate yourself.",`What part(s) of yourself
 have you been minimizing that
 you're ready to finally own?
 Permission to [#c97986](own it).`,"Who do you feel [#d0af3a](misunderstood) by? What do you wish they would come to understand?",`What lesson in [#275835](love)
 took you the longest
 to learn?`,`What act of [#c66532](kindness)
 from a stranger will
 you never forget?`,"What has brought you the most unexpected [#c97986](joy) recently?",`What has your [#af2637](heart)
 been telling you that
 you've been ignoring?`,"What have you not [#d0af3a](forgiven) that hurts you the most?",`What have you [#c66532](envied)
 in the past that you
 can laugh at now?`,`What [#c97986](door) are you most
 grateful for closing that
 felt like the end of
 the world at the time? What
 did it open for you?`,`What do you wish
 you had the [#af2637](courage)
 to do? To say?`,"What [#5f86b5](blame) have you been placing on someone else that you can take some accountability for?",`What have you become
 newly [#d0af3a](aware) of within
 yourself recently?
 Get specific.`,`Wild Card [#5f86b5](Set an intention for
 today, this month and
 this year. Write it out.)`,"Wild Card [#af2637](Spend at least 5 minutes in nature today. Be still and observe. What did you notice?)",`Wild Card [#275835](Write down 3 things
 you're most grateful for
 in this present moment.
 Big or small.)`]],os={name:cp,short_name:fp,crossover:yp,players:pp,theme:mp,levels:gp,isExpansion:vp,backDesc:wp,preview:kp,colors:Wp,questions:xp},_p="Relationship Expansion Pack",Cp="Relationship",Ip="Relationship Expansion Pack",Sp="2",Ep="main",bp=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],jp=!0,Np=[`What's more romantic
 than being understood?`],$p=["How well do you know your partner? How well do they know you?","Communication creates partnership, but that requires sharing your truth and being open to receiving theirs. Especially when it's uncomfortable.","This relationship expansion pack can be added to the original WNRS card game. Remember there are two ways to play this game. Either play safe, or play to grow. The second is how you win.","Ready?"],zp=[[`How important do you think
 birthdays and holidays are
 to me? Explain.`,`On a scale of 1-10, how open do
 you feel I am with you? Explain.`,`Who do you think was
 more nervous on our first
 date? Explain.`,`What was the first thing
 you noticed about me?`,`What do you think my
 perfect date night
 would be?`,`What assumption did you
 make about me that turned
 out to be false?`],[`What did our worst
 argument teach you?`,`What has this relationship
 taught you about yourself?`,`What's one small way I can
 be a better partner?`,"What do you wish we did more of?",`What have you been extra
 sensitive to lately?`,`What's the most important
 lesson a past relationship
 has taught you?`,`What are you currently
 working through that I
 don't see, if anything?`,`Have I helped you change
 your mind about anything?`,`How do I show that I love
 you without telling you?`,`What's one small way we
 can improve our sex life?`,`What feelings are hard for
 you to communicate to me?
 How can I make it easier?`,`What about you feels
 hardest to love?`,`How have you seen me grow
 in this relationship?`,`What have I helped you
 appreciate about yourself?`,`What recent experience
 made you feel closer to me?`,`What immediately attracted
 you to me? What attracted
 you more over time?`,`What fear do you think
 holds me back the most?`,`What song
 best describes
 our relationship?`,`How does our age difference,
 or lack thereof, affect us?
 If at all?`,`What's the most
 attractive thing I do
 without realizing it?`,`What's the most
 romantic thing I've done
 for you recently?`,`How does one earn your
 trust? Have I earned it?
 How can I earn more?`,`Finish the sentence: Thank
 you for accepting _________.`,`What would a day of
 completely spoiling me
 look like?`,`What made you fall
 in love with me?`,`Do you think my job affects
 me positively or negatively?
 How does it affect us?`,`Are there any insecurities
 from previous relationships
 that you carried into this
 one? If so, what are they?`,`When was the last time I hurt
 you, perhaps unintentionally?`,`What's the best gift
 I've given you? Material
 and immaterial?`,`The hardest thing for me
 to reveal about myself
 to you was _________.`,`How do our strengths and
 weaknesses complement
 each other?`,`Wild Card Write a love song for
 your partner. 1 minute.
 Perform for each other.`,`Wild Card Write down the top 3 things
 your partner does that
 makes you feel most loved.
 Both players. Compare.`,`Wild Card On a scale of 1-10 write down the
 importance of having kids to you.
 Compare and explain.`,`Wild Card Write down one small way
 you can be better in this
 relationship. Both players. Compare.`,`Wild Card Draw one of your favorite
 memories from our relationship.
 30 seconds. Compare.`,`Wild Card Write down the title you
 would give this chapter of
 our relationship. Compare.`,`Wild Card Ask your partner something
 you've never asked them before.`,`Wild Card Write a short guide of how
 to love your partner well.
 30 seconds. Compare.`],[`What answer of mine
 surprised you the most
 throughout this game,
 if any?`,`Is there anything you
 still don't know about me
 that you wish you did?`,`Thank you for helping me
 realize _________ about myself.`,`What don't I give myself
 enough credit for?`,`What goal would feel best for
 you to accomplish this year? How
 can I support you in that?`,`What about our relationship
 are you proudest of?`,`What did this conversation teach
 you about our relationship? What
 did it teach you about yourself?`,`Wild Card Write down your intention for
 our relationship. Compare.`,`Wild Card Write down the top 3 things
 you're most grateful for in
 your partner. 30 seconds.
 Compare.`]],rs={name:_p,short_name:Cp,edition:Ip,players:Sp,theme:Ep,levels:bp,isExpansion:jp,backDesc:Np,preview:$p,questions:zp},Tp="Main Card Game",Pp="Main",Lp="2+",Dp="main",Rp=["Level 1 Perception","Level 2 Connection","Level 3 Reflection","Final Card"],Hp=!0,Mp=[`What's more romantic
 than being understood?`],Fp=["Do you really know your best friend? How well do you know your mother, or sister, or anyone else close to you?","WNRS is a purpose driven card game. 3 carefully crafted levels that allow you to deepen your existing relationships and create new ones.","Ready?"],Op=[[`What was your
 first impression
 of me?`,"What do you think is the hardest part of what I do for a living?",`What reality show do you
 think I'm most likely to binge
 watch? Explain.`,"What does my style tell you about me?","Do I seem like a cat or dog person?",`Do I seem like more of a
 creative type or analytical type?
 Explain.`,"How many speeding tickets do you think I've gotten in my life?","Do I seem like someone who would get a name tattooed on myself? Why or why not?",`What do you think I'm most
 likely to splurge on?`,`Finish the sentence:
 Just by looking at
 you I'd think _________.`,`What character
 would I play in a
 movie?`,"Do I remind you of anyone?","Who do you think my celebrity crush is?",`Do you think I've
 ever checked an
 ex's phone for
 evidence?`,"What's the first thing you noticed about me?","What do you think my go to karaoke song is?","If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?","What does my phone wallpaper tell you about me?",`Do I look kind?
 explain.`,"Do you think I fall in love easily? why or why not?",`As a child, what do
 you think I wanted
 to be?`,"Do you think I'm usually early, on time, or late to events? Explain.",`What subject do you think
 I thrived in at school? Did I
 fail any?`,"What compliment do you think I hear the most?","Do I seem like a morning person or a night owl? why?","What fast food restaurant do you think I'm most likely to drive through? What's my order?",`What is my body language
 telling you right now?`,`What does my Instagram
 tell you about me?`,`Do you think plants
 thrive or die in my
 care? Explain.`,`On a scale of 1-10, how messy
 do you think my car is? 1 being
 cleanest, 10 complete
 disaster. Explain.`,`Do you think I was
 popular in school?
 explain.`,`Do you think I've ever been
 fired from a job? If so, what
 for?`,`Do you think I intimidate
 others? Why or why
 not?`,"How likely am I to go camping? How high maintenance is my set up?",`What about me
 is most strange
 or unfamiliar to
 you?`,`What about me
 intrigues you?`,`If Myspace were still a thing
 what would my profile song be?`,`Wild Card Maintain eye contact
 for thirty seconds.
 What did you notice?`,`Wild Card Close your eyes. What
 color is my shirt?`,`Wild Card Ask and answer the
 next question in a
 different accent.
 (Both players)`,`Wild Card Draw a picture together.
 (30 seconds)`,"Wild Card Write down something others would never guess about you just by looking at you. (Both players) Compare.","Wild Card Draw a portrait of each other to the best of your ability. (1 minute) Then exchange.",`Wild Card Think of your favorite brand
 of cereal. On the count of three
 say your answers out loud!
 (Both players)`,"Wild Card Think of your favorite childhood tv show of all time. On the count of three, say it out loud! (Both players)",`Wild Card Rate your dancing skills
 on a scale of 1-10. On the
 count of three, say your
 answers out loud! (Both players)`,`Wild Card Close your eyes. What
 color are my eyes?`,`Wild Card Make an assumption about me.
 (Both players)`,`Reminder Let go of your
 attachment to
 the outcome.`],[`How can you become
 a better person?`,"What's your mother's name? And the most beautiful thing about her?","If you could get to know someone in your life on a deeper level, who would it be and why?",`What's the most pain
 you've ever been in that
 wasn't physical?`,`Are you missing anyone
 right now? Do you think
 they are missing you
 too?`,"What is a dream you've let go of?","What is the last thing you lied to your mother about?","Have you ever told someone I love you but didn't mean it? If so, why?",`What are you still
 trying to prove to
 yourself?`,`Are you lying to
 yourself about
 anything?`,"What is your 1st love's name and the reason you fell in love with them?",`What part of your life
 works? What part of
 your life hurts?`,"What lesson took you the longest to unlearn?",`If you have, when
 was the moment
 you realized you
 weren't invincible?`,"Do you think the image you have of yourself matches the image people see you as?",`If you could have it your
 way: Who would you be
 with? Where would you
 be? And what would you be
 doing?`,"Is there a feeling you miss?","What's been your happiest memory this past year?",`When was the last
 time you surprised
 yourself?`,`How would you
 describe the feeling
 of being in love
 in one word?`,"What's your father's name? And tell me one thing about him.","What are you more afraid of, failure or success? And why?","What has been your earliest recollection of happiness?",`What do you crave
 more of?`,`What is a compliment
 you wish you received
 more frequently?`,"Have you changed your mind about anything recently?","Describe your perfect day!",`What is the most
unexplainable thing
 that's ever happened
 to you?`,`What would your younger
 self not believe about
 your life today?`,"What is something you wouldn't want to change about yourself?",`What title would you give this
 chapter in your life?`,`Has a stranger
 ever changed
 your life?`,`How are you,
 really?`,`When you're asked how
 are you, how often do you
 answer truthfully?`,`Finish the sentences:
 strangers would describe
 me as _________. Only I know
 that I am _________.`,`What question are you trying to
 answer most in your life right
 now?`,`What's been the best
 compliment a stranger
 has ever given you?`,`Wild Card Staring contest. First
 to blink must reveal
 a personal problem
 and ask your partner
 for advice on how they
 might handle it.`,`Wild Card Ask a question you'd
 be too afraid to ask.
 Something you wouldn't
 dare to ask.`,"Wild Card Call someone you admire and tell them why you appreciate them! (Put on speaker phone)","Wild Card Admit something.","Wild Card Questions are an art form. Create your own question.","Wild Card Think of something you strongly dislike that most people love. On the count of three, say it out loud! (Both players)","Wild Card Swap seats with your partner.","Wild Card Show the first photo in your camera roll. Explain.","Wild Card Create a secret handshake.","Wild Card Sing the chorus of your favorite song of all time. Get into it!","Wild Card Draw your current mood. Then Compare. (Both players)",`Wild Card Both players write an
 embarrassing fun fact about
 yourselves. Play a game of
 rock, paper, scissors. Loser
 must reveal!`,"Wild Card Both players write the most important things in life to you. (30 seconds) Compare.","Wild Card Press shuffle on your music library. Explain the first song that comes up!",`Reminder Be more interested
 in understanding
 others than being
 understood.`],["How would you describe me to a stranger?",`What about me
 most surprised you?`,`What would be
 the perfect gift
 for me?`,`What do you admire
 most about me?`,`Based on what you
 learned about me,
 what book would
 you recommend I
 read?`,"What about me is hardest for you to understand?","What am I most qualified to give advice about?","What is one thing you think I can do that would dramatically improve my life?",`If we were in a band, what
 would our name be?`,"What can I help you with?",`Based on what you
 learned about me,
 does my social media
 accurately reflect who I am?
 Why or why not?`,`What do I need to hear
 right now?`,"Based on what you know about me, do you have any Netflix recommendations?",`What do you think my
 superpower is?`,`What is a lesson you
 will take away from
 our conversation?`,"When in this game did you feel most connected to me?",`How does one earn your
 vulnerability? Have I earned
 it? How can I earn more?`,`What do you think
 our most important
 similarity is?`,`What can we create
 together?`,`In one word, how
 would you describe
 our conversation?`,`What answer of mine made you light
 up?`,`When this game is over,
 what will you remember
 about me?`,`What parts of
 yourself do you see in me?`,`How do our personalities
 complement each other?`,"Why do you think we met?",`What do you think
 my weakness is?`,`What would make
 you feel closer
 to me?`,`What do you think I
 fear the most?`,`What has this
 conversation taught you
 about yourself?`,`What do you think I
 should know about
 myself that perhaps
 I'm unaware of?`,`What do you
 think my defining
 characteristic
 is?`,`Do you believe everyone has a
 calling? If so, do you think
 I've found mine?`,`What do you recommend
 I let go of, if anything?`,`In one word, describe
 how you feel right
 now.`,"Wild Card Give your partner a hug. Not the crappy kind. A ward fluffy one.","Wild Card Write down one thing you want to let go of this year. Read out loud, then rip up together. (Both players)",`Wild Card Swap a song suggestion your
 partner may enjoy. (Both
 players)`,"Wild Card Dare your partner to do something outside of their comfort zone in the next week. (Both players)","Wild Card Admit something.","Wild Card Give your partner a compliment you don't think they hear enough.","Wild Card Write a song about your partner. (30 seconds) Then sing it aloud, get into it! (Both players)","Wild Card Scroll through each other's Instagrams. Find the picture you feel best represents your partner's essence and comment on why.",`Wild Card Both players share
 something you're most
 grateful for in this
 current moment.`,`Wild Card Play a round of rock, paper,
 scissors. Winner can ask their partner anything. Loser must answer.`,"Wild Card Give each other nicknames!",`Wild Card Create your own question.
 Make it count.`,"Wild Card Take a selfie together.","Wild Card Write down a goal for this year. Fold & exchange. Hold each other accountable. (Both players)",`Wild Card Both players write a note
 to your younger selves.
 (1 minute) Option to compare.`],[`Each player write a
 message to the other.
 Fold and exchange.
 Open only once you two
 have parted.`]],is={name:Tp,short_name:Pp,players:Lp,theme:Dp,levels:Rp,isExpansion:Hp,backDesc:Mp,preview:Fp,questions:Op},Bp="Ex-Friend Edition",Ap="Ex-Friend",Vp="2",Up="main",qp=["Ex-Friend"],Qp=!1,Gp=[`Will you be my
 friend again?`,"(circle one) YES NO"],Yp=["Friendship make-ups are soooo awkward and intimidating. It's feels impossible to break the ice and have a meaningful conversation that leaves both sides feeling heard. Till now.","Take turns asking and answering each question. For this specific pack, we recommend that both players answer each card. Optional: have tissues and wine ready.","You may decide to mend the friendship or go your separate ways. Regardless of the outcome, you'll know you did your part."],Kp=["Things to remember while playing:","1. Avoid viewing conflict as something you can win. No one wins unless the conflict is resolved on both sides.",'2. Avoid using the phrases "you always" or "you never".',"3. While playing, actively look for points of agreement rather than points of division.","4. When someone shares how you've hurt their feelings, believe them. It doesn't mean you're a bad person. View it as an opportunity to grow.","5. Friendships don't need to last forever to be successful. It's okay to grow in different directions. It's okay to love each other from a distance."],Xp=[[`Both players explain the
 situation from the other
 person's POV to the best
 of your ability.`,"My part in this was _________.",`Take 3 minutes to explan
 your point of view with no
 interruptions. Both players.`,`Wild Card Both players write down your
 most common defense mechanism
 and how it holds you back the
 most. Read out loud.`,"What hurt you the most?",`What is one thing you wish you
 could have done differently?`,`Did you set any unfair
 expectations on me?`,`When did you feel
 most distant from me?`,`Finish the sentence: Something
 I'm working on is _________.`,`Reminder Everyone's truth
 looks different.`,`Was there anything you were
 going through that I didn't see?`,`It was very clear our friendship
 wasn't the same when _________.`,"When do you miss me most?",`Wild Card Apologize for something
 (Big or Small).`,`What's a life update
 that I've missed?`,`What's something about out
 friendship that you don't get
 from anyone else?`]],as={name:Bp,short_name:Ap,players:Vp,theme:Up,levels:qp,isExpansion:Qp,backDesc:Gp,preview:Yp,instruction:Kp,questions:Xp},Zp="Quarantine Edition",Jp="Quarantine",em="Quarantine Edition",tm="2+",nm="main",om=["Level 1 Perception","Level 2 Connection","Level 3 Reflection","Final Card"],rm=!1,im=[`Physically distant
 Emotionally Connected`],am=[[`What time do you
 think I've been
 waking up these days?`,`What do you think
 I've been binge
 watching lately?`,`Do you think
 I'm mainly cooking
 or postmating?`,`What do you think
 has been my go to
 snack during this time?`],["When quarantining is behind us, what change do you want to make in your day to day life if any?","What can you create during this time with exactly what you have? Big or small.","What's been the kindest thing someone has done for you during this time? What's been the kindest thing you've done for yourself?","What would feel best to fully accept in this current moment?","What are you most excited for today? Big or small?","What has been the hardest part of all this for you? Permission to vent.","What movie do you wish you'd never seen so you can watch it for the first time during quarantine?",`Wild Card Staring contest. First
 to smile must reveal
 what their kitchen looks
 like in the current moment.`,"Wild Card Share your most played song at the moment","Wild Card Share your screen time. Both players."],[`If you made a playlist for me,
 what 3 songs would be on it?`,`What do I need to watch
 as soon as I have the time?`,`How can I best be there
 for you during this chapter?`,`Wild Card Who's been on your mind lately?
 Send them a text letting them know
 you're thinking of them.
 Both players.`],[`Each player write a
 virtual message to your
 partner. Press send once you
 two have hung up.`]],ls={name:Zp,short_name:Jp,edition:em,players:tm,theme:nm,levels:om,isExpansion:rm,backDesc:im,questions:am},lm=`Race and Privilege:
 An Overdue Conversation`,sm="Race & Privilege",um="Race & Privilege Edition",dm="2+",hm="race",cm=["Level 1 Perception","Level 2 Connection","Level 3 Reflection"],fm=!1,ym=[`If a conversation
 is hard, it's probably
 the one worth having.`],pm=["This conversation isn't easy.","Remember, not everyone will be on the same level of understanding as you, and that's okay.","This conversation doesn't end after one sitting, or after a wave of outrage online. It is a lifelong conversation that starts with ourselves.","Ready?"],mm=["Find a parner with an open heart and mind. This person can have completely different or very similar viewpoints. Alternate asking and answering each question with your partner(s).","Remember, the more you have in your toolkit the better you can be at sharing your views with someone else. We've provided resources throughout this PDF to help fill that toolkit. Review definitions together before beginning the game."],gm=[[`What privileges
 do you think I have?
 Explain.`,`What stereotypes
 do you think have been made
 about you, if any?`,`Wild Card Write down your
 biggest fear entering this
 conversation about race.
 1 minute. Compare.`],[`In your day to day life,
 how often do you think about
 race / the color of your own skin?
 Why do you think that is?`,`What qualities
 do you associate with
 a good listener?`,`Has your family ever
 said something you deeply
 disagreed with regarding the
 topic of race / racism? How
 did you respond?`,`How do you feel about
 cancel culture in regards
 to race / racism? What role
 does it play? How does it
 help? How does it hurt?`,`On a scale of 1-10 how would
 you rate your current knowledge
 of our nation's history regarding
 slavery and systemic racism? What
 can you do to help raise your
 knowledge by 1 point?`,`When was the last time
 you had a shift in perspective
 regarding the topic of race /
 racism? How did that shift
 occur for you?`,`What's an unpopular opinion
 you hold regarding race / racism
 that you feel too afraid to voice?
 Have you ever challenged
 that opinion?`,`What did the people
 that raised you teach
 you about race? Directly
 or indirectly?`,`Permission to sound
 uninformed: What have you
 always wondered but felt
 too afraid to ask about
 race / racism?`,`Have you ever experienced
 racism in your friend / peer
 group? Did you call it out?
 Why or why not?`,`What was your first
 memory realizing that
 race existed?`,`Have you ever had to unfriend
 or create a boundary towards
 someone you love because of
 a disconnect concerning the
 topic of race / racism?`,`What did you grow up
 believing "beautiful" looked
 like? Where did that come from?
 How has it evolved?`,`What do you feel when you
 hear "Black lives matter"?
 "All lives matter"?`,`What has been your personal
 experience with police? Why do
 you think that is? When you get
 pulled over how safe
 do you feel?`,`Have you ever been called out
 for saying something insensitive
 regarding race? How did it make
 you feel? Did it change you?
 Why or why not?`,`How do you define "privilege"?
 Articulate what privileges
 you think you have.`,`Reminder Be open to changing
 your mind when
 receiving new
 information,
 especially if it makes
 you uncomfortable.`],[`How can you be a
 better listener to things
 you don't understand?`,`What do you hope future
 generations understand about
 race? What is our role in helping
 them understand?`,`How can you turn
 your privilege into positive
 change with your voice
 and resources?`,`Wild Card Write down one lesson
 this conversation taught you.
 Both players. Compare.`]],ss={name:lm,short_name:sm,edition:um,players:dm,theme:hm,levels:cm,isExpansion:fm,backDesc:ym,preview:pm,instruction:mm,questions:gm},vm="sneaky link edition 💦💦💦",wm="Sneaky Link",km="sneaky link 💦💦💦",Wm="2",xm="race",_m=["Level 1","Level 2","Level 3"],Cm=!0,Im=!1,Sm=["are u awake right now?","come curious, leave connected 💦🤪"],Em=["Instructions: this is a questions game to play with your sneaky link. there are only 2 rules:","1.) be honest",'2.) the person who sent the last "u up?" text goes first'],bm=["warning: 🚨 this may be the most you've ever talked to them","@user143011595 | 18+ ONLY 🛑"],jm=[[`What did you think I would
 be like in bed? What am I
 actually like?`,`What would you assume
 about me based off of
 my social media?`],[`What's my name in
 your contacts?`,`What's the best text you
 could receive from me?`,`What is the latest time you
 would respond to a "u up?"
 text from me?`,"My place or your place?",`When do you think
 about me most?`,`What's something about you
 that might surprise me?`,`What am I good at?
 (Describe in detail)`,`What is your current
 go-to late night snack?`,`When I show up, what outfit
 do you like to see me in?`,`Wild Card If we had to try something
 new tonight, what would it
 be? Bonus: do it.`,`Wild Card What's your favourite part
 of my body? Prove it.`],[`Why do you keep
 coming back?`,`Wild Card Come up with a secret code
 word/phrase to text each
 other.`]],us={name:vm,short_name:wm,edition:km,players:Wm,theme:xm,levels:_m,noWNRS:Cm,isExpansion:Im,backDesc:Sm,preview:Em,instruction:bm,questions:jm},Nm="Voting Edition",$m="Voting",zm="Voting Edition",Tm="2+",Pm="voting",Lm=["Voting"],Dm=!1,Rm=["Voting Edition"],Hm=["We all know that it's important to vote, but we wanted to dig a little deeper. These questions are meant to explore not only our knowledge of politics and the process of voting but also our limiting beliefs. Not just why we're ready to vote, but why we may be on the fence.","And finally some tools, resources, and prompts to go beyond just voting, but to vote informed. To play, find a friend or loved one wanting to explore an important topic that is often messier than a check on the ballot.","Ready?"],Mm=["Disclaimer: It's important to have open conversations with others, even when we don't agree. However, make sure to explore these questions with people you feel safe with. Political conversations can get charged. Practice healthy boundaries and step away from any conversation that doesn't show mutual respect."],Fm=[[`How did your upbringing
 shape your views on politics?
 How has it evolved over time?`,`Do you hold any limiting beliefs
 when it comes to voting? If so,
 what are they?`,`If you could enact one
 policy today, what would
 it be and why?`,`When was the first time
 you voted? What got you to
 the voting booth?`,`Have you ever had the
 opportunity to vote and
 not taken it? If so, why?`,`If you could ask each
 presidential candidate one
 question and get and honest
 answer, what would
 you ask?`,`When was the last time
 you changed your mind about
 something politically? What
 prompted your shift in
 perspective?`,`What's one thing you feel
 uninformed about politically that
 you'd like to gather more information
 on? What's one small step you can
 take towards gaining more
 knowledge on this topic?`,`What boundaries feel
 important for you to set in the
 conversation surrounding
 politics?`,`I do / don't vote
 because ________.`,`What do most people
 assume about your political
 views / beliefs? How accurate
 are those assumptions?`,`What do you wish the
 people from the other side of
 the political spectrum understood
 about your POV? What do you wish
 you understood about theirs?`,`The world needs
 more ________, and
 less _________.`,`How has social media
 influenced your political
 views, if at all?`,`How do you want to use
 your social media platform
 (big or small) to enact change
 that feels authentic to you?`,`What biases can you recognize
 that you have regarding your
 current political stance?`,`Where do you get the majority
 of your voting information? How
 have you checked it's credibility?
 (See resources key to find various
 fact-checking websites)`,`Is there a political view
 you have that you feel too
 afraid to admit publicly?`,`What's one thing you
 know about the voting process
 today, that you didn't in the
 previous election?`,`If the election doesn't go your
 way, how will you or your loved
 one's lives be affected? Are you
 informed about the potential
 impact your vote / lack
 thereof will have?`,`How would you describe
 the imporance of voting
 to your younger self?`,`Was there a moment recently
 that drastically shaped your
 political ideology? If so,
 what was it?`,`Do you have open conversations
 with people who hold differing
 political views as you?
 Why or why not?`,`Reminder Normalize saying
 I don't have enough
 information on this
 topic to form an
 opinion just yet.`,`Reminder Listen to learn
 even when you
 don't agree.`]],ds={name:Nm,short_name:$m,edition:zm,players:Tm,theme:Pm,levels:Lm,isExpansion:Dm,backDesc:Rm,preview:Hm,instruction:Mm,questions:Fm},Om="Breakup Edition",Bm="Breakup",Am="Breakup Edition",Vm="1+",Um="main",qm=["Breakup","Final Card"],Qm=!1,Gm=[`The end of a relationship
 is the beginning of a new
 one... with yourself`],Ym=["Breakups are important. They teach us about ourselves. They show us what we want and what we don't. They allow us to move away from what isn't for us – and closer to what is. They even show us parts of ourselves we need to break up.","We've created this edition as a tool to self-reflect after a breakup. Journal your answers or play with a friend who can be a soundboard for your healing process. The end of a relationship is the beginning of a new one… with yourself.","Ready?"],Km=[[`What has helped you
 heal from a heartbreak
 in the past, besides time and
 meeting someone new?`,`After your most recent
 breakup, what song did you
 play on repeat?`,`Picture you're talking to
 your ex. Finish the sentence:
 You hurt me, but thank
 you for _________.`,`What have all your
 previous relationships
 had in common that you'd like
 to avoid moving forward,
 if anything.`,`Did their love leave you
 feeling good most of the time?
 If not, what was the dominant
 feeling they left you with?`,`Were you lying
 to yourself about
 anything during your
 last relationship?
 If so, what was it?`,`What did your last
 relationship make you
 appreciate about
 yourself?`,`What are 3 things you can
 appreciate about being single
 (even if it feels hard)?`,`Are you talking to
 other people currently? If
 so, are you seeking a real
 connection or needing
 a distraction?`,`What part of your last
 relationship worked? What
 part of it hurt?`,`Do you want closure
 or just an excuse to talk
 to them? Explain.`,`How can you show up
 for yourself when no
 one else can?`,`How has your last
 relationship prepared
 you for your next one?`,`What parts of yourself do
 you need to break up with?`,`What would feel best
 to fully accept in this
 current moment?`,`Who in your life has
 been treating you right
 lately? Let them know before
 moving on to the next card.
 (Exes not included.)`,`How did you get
 over your first
 love?`,`Were you more attracted
 to their potential or who they
 really were? Explain.`,`What title would you
 give this chapter of your
 healing process?`,`Would you encourage
 your future child to be in a
 relationship like your last?
 Why or why not?`,`What story about love
 have you been telling yourself
 that no longer serves you? How
 would you like to change
 that story?`,`What can you be doing
 now with all the energy you
 were putting into them?`,`What's the best lesson
 an ex has ever taught you?`,`What were you
 over-rationalizing
 throughout your
 last relationship,
 if anything?`,`Do you have a limiting
 belief about love? Where
 do you think it stems from?
 How can you challenge this belief?`,`What can you do for
 yourself today, even if
 you don't enjoy it, to make
 future you happy?`,`Did your last
 relationship reveal some
 toxic traits in yourself that
 you'd like to work on? If so,
 what are they?`,`What is your heart
 telling you? What is your
 mind telling you?`,`What do you want
 to receive from a future
 relationship? What do
 you want to give?
 Get specific.`,`Were there any patterns
 in your previous relationship
 that you're newly aware of?
 If so, what were they?`,`Significant other aside,
 when you visualize coming
 home to a life you love, what
 does that look like?
 Get specific.`,`What was the biggest
 turning point in your
 dating life?`,`What validation are you
 seeking from a partner? How
 can you give it to yourself?`,`Imagine you're talking to
 your ex. Finish the sentence:
 I'm sorry for _________.`,`What's your ex's name
 and one thing about them?`,`Did you like your ex as a
 person? Or were you just in
 love? Explain.`,"What feels unique about this heartbreak, if anything?",`What advice would you
 give a friend or loved one
 going through a similar
 situation as you?`,"If you could ask your ex one thing and get a completely honest answer, what would it be?",`Wild Card Write down 3 things
 you love about yourself that aren't physical.`,`Wild Card Write a note to your future
 self. Fold and place somewhere
 safe. Set a reminder to open
 3 months from today.`,`Wild Card Write a stand up routine about
 your last relationship. 1 minute.
 Read out loud.`,`Wild Card Write down 3 things you love
 about yourself physically.
 Permission to brag.`,`Wild Card Set a time this week to
 do something you love and
 limit any distractions.`,`Wild Card Write down 3 things you
 wouldn't change about this
 current moment.`,`Wild Card Draw how your
 heart feels today.`,`Wild Card Write down 3 things
 about your last relationship
 that you will no longer accept
 moving forward. Get specific.`,`Reminder Breakups skew
 your memory. Your
 ex was not perfect.
 You will feel better.`,`Reminder Don't let your
 loneliness take you
 back to people who
 repeatedly hurt you.`,`Reminder Your love life
 is one area of your
 life. Don't forget to
 nurture the rest.`],[`Write a final note to your
 ex that they'll never see. Get
 it all off your chest. Tear
 when you feel ready.`]],Xm=50,Zm=47,hs={name:Om,short_name:Bm,edition:Am,players:Vm,theme:Um,levels:qm,isExpansion:Qm,backDesc:Gm,preview:Ym,questions:Km,_total:Xm,_contains:Zm},Jm="Forgiveness Edition",eg="Forgiveness",tg="Forgiveness Edition",ng="1+",og="main",rg=["Forgiveness"],ig=!1,ag=["Time to forgive (yourself too)"],lg=["You're human. You'll make mistakes, often at other people's expense. They're human. They will also make mistakes, often at your expense. Whether you're needing to forgive another person, or yourself, forgiveness can be difficult. It means letting go of the idea that things could have gone differently. It doesn't mean excusing bad behavior, it means freeing yourself.","To play, either journal your responses or explore these questions with someone else on their forgiveness journey. When you forgive the past you create the space to redefine your future.","Ready?"],sg=[["What does resentment feel like in your body?","Finish the sentence: I know I've forgiven someone when _________.","Finish the sentence: the hardest part about forgiveness is _________.","When was the last time you were wrong in a situation but didn't admit it because of pride?",`Who have you had to
 forgive too many times?
 Explain.`,"Is there someone you owe an apology to that perhaps you've overlooked?","What did your childhood teach you about forgiveness? Towards others? Towards yourself?","Is there someone you've forgiven who doesn't know it yet? If so, what's stopping you?","Who in your life gives the best apologies? Why do they come to mind?","Who in your life gives the worst apologies? Why do they come to mind?","Who's the most understanding person you know? Send them this card as a thank you.","Finish the sentence: I'm working on accepting _________.","What title would you give this chapter of your forgiveness journey?","Have you been carrying any resentment recently? What's one small step you can take towards letting it go?","What have you been hardest on yourself for recently? What would you say to a friend going through a similar situation?","Is there something you haven't forgiven your parents for? If so, what comes to mind?",`What do you keep having to
 apologize for that's within
 your control to change?`,`Finish the sentence: I'm
 still working on _________.
 And that's okay.`,"Is there something you haven't forgiven your ex for? Explain.","How forgiving are you of other people on a scale of 1-10? How can you increase your answer by 1 point?","How forgiving are you towards yourself on a scale of 1-10? How can you increase your answer by 1 point?",`When was the last time
 you gave an ingenuine
 apology? Why?`,"Finish the sentence: I'm tired of apologizing for _________.","What does a bad apology look like? Get specific.","What does an ideal apology look like to you? Get specific.","What's the hardest thing you've had to forgive yourself/someone else for?","Who is someone that has forgiven you in the past, that you're grateful for to this day?","Are you punishing yourself for anything right now? How can you show empathy for yourself in this moment?","When was the last time you felt unappreciated by someone? Give yourself that validation before flipping to the next card.","Has an apology ever stuck with you till this day, or lack thereof? If so, why?","When was the last time you owed someone an apology but didn't give it to them? What stopped you?","What did you have to unlearn about forgiveness, if anything?","Is there someone in your life you've yet to forgive? If so, why?","What mistake are you most grateful for making?","What did you beat yourself up over when you were younger that you can have more empathy for now?","Who took you the longest to forgive? What helped you get there?","How do you treat yourself when you've made a mistake? Get specific.","Who do you wish you could receive an apology from, if anybody? What do you wish they would say?","Who do you wish you could apologize to? What would you say?",`What do you need to forgive
 yourself for today?`,"What have you learned about forgiveness as you've gotten older?",`How do you
 define forgiveness?`,"Wild Card Before apologizing ask yourself: what am I saying sorry for? Do I mean it? Or am I acting small for someone else's comfort?","Wild Card Write out one mistake you've made recently and the lesson it taught you.","Wild Card Look in the mirror. Finish the sentence: I forgive you for _______.",`Wild Card What are you holding on
 to that's no longer holding
 on to you? Write it down
 and rip it up.`,`Reminder An apology isn't
 the time to defend
 yourself.`,`Reminder Replace "That was
 so stupid of me"
 with "That was
 so human of me."`,`Reminder Have more empathy.
 (For yourself too)`,`Reminder Forgive yourself
 like you did your
 ex so many times.`]],ug=51,dg=51,cs={name:Jm,short_name:eg,edition:tg,players:ng,theme:og,levels:rg,isExpansion:ig,backDesc:ag,preview:lg,questions:sg,_total:ug,_contains:dg},hg="Healing Edition",cg="Healing",fg="Healing Edition",yg="1+",pg="main",mg=["Forgiveness"],gg=!1,vg=[`Make your mind
 a good place to be`],wg=["If you're not speaking your truth, you're storing it. And that gets heavy. This pack is an invitation to get it all off your chest. Use it to self reflect, or play with someone who's ready to dig deep with you.","Being honest about how you're really feeling is one of the most healing things you can do for youself and the people in your life.","Ready?"],kg=[["What or who do you need to set a healthy boundary with? Explain.","What's been the best thing for your mental health lately? Get specific.","What's been the worst thing for your mental health lately (that's within your control to change)?","What does self-care look like for you? Get specific. Create that day for yourself this week.","When was the last time you healed from something you weren't sure you could move past?",`Finish the sentence: I'm
 working on accepting _________.`,"When was the last time you didn't ask for help, but really needed it? Explain.","Finish the sentence: I need help with _________.","I know my anxiety is setting in when _________. Get specific.","Today I'm struggling with _________.","Who's been good for your mental health? Send them a picture of this card as a thank you.","What title would you give this chapter of your healing journey?","How has your mental health affected your romantic relationships, if at all?",`Finish the sentence:
 I want to give myself permission to feel _________. What's getting in the way of that?`,"How can you contribute to someone else's happiness today? Do that thing, big or small.","What's been draining your energy lately? What's been giving you energy? Get specific.",`How have you neglected
 your mental health recently?
 What's one small way you can
 make it up to yourself?`,"When was the first mental health scare you remember having? What stands out to you about it?",`What small step can you take
 towards your healing today?`,"What are you currently healing from that others don't see?","What emotion keeps coming up for you lately? Why do you think that is?","What is your body telling you today?","What's one thing (big or small) you're most looking forward to? What about it excites you most?","What do you understand now about the healing process that you didn't before?","What's been causing you unnecessary stress? What would help alleviate that for you?","What hurt your younger self that you never fully healed from? What would you say to your younger self today?","What have you been avoiding that deserves your attention? Why have you been avoiding it?","What's a boundary you can set with yourself today that will benefit future you?",`What's something you can say "no" to this week to prioritize your mental health? What's something you can say "yes" to?`,"What song makes you happy? Play it in the background while you answer the next few cards.","What do you need right now more than anything?","How do you define happiness? Get specific.","What piece of advice has helped your mental health the most?",`What does prioritizing your
 mental health look like in this
 chapter of your life?
 Get specific.`,"Wild Card Illustrate how your mind feels today. 30 seconds.","Wild Card Get something off your chest. Write it out. 1 minute. Don't overthink it.","Wild Card Write out an intrusive thought. Cross it out. Replace it with a positive affirmation.","Wild Card What would feel best to let go of today? Write it out and rip it up.","Wild Card Write out 3 things that made you smile today.","Wild Card Stretch for 30 seconds before flipping to the next card.","Wild Card Jump up and down as if you're celebrating the best news of your life for 30 seconds before flipping to the next card. (No seriously, do it).","Wild Card What promise do you want to keep to yourself this year? Write it out and date it.","Wild Card Admit something (to yourself)","Wild Card Take 3 deep breaths before flipping to the next card. Hold for 2 seconds between each breath.","Wild Card Write down the names of everyone you feel unconditionally loved by. Make more time for these people (even if it's yourself).","Wild Card Delete all of your social media apps for a day. Journal about how you felt after.",`Reminder Pay attention to
 who you're with
 when you feel
 your best.`,`Reminder If you're trying
 not to think
 about it, it's
 probably time
 to heal it.`,`Reminder You don't have
 to have it all
 figured out right
 now. Sleep on it.`,`Reminder I'm proud of the
 progress you're
 making. No matter
 how small.`]],fs={name:hg,short_name:cg,edition:fg,players:yg,theme:pg,levels:mg,isExpansion:gg,backDesc:vg,preview:wg,questions:kg},Wg="Self-love Edition",xg="Self-love",_g="Self-love Edition",Cg="1",Ig="selfLove",Sg=["Self-love","Final Card"],Eg=!1,bg=[`Time to fall in love
 with myself ❤️`],jg=["Self-love is about calling ourselves on our own stuff, not just everybody's else's. It's about being kind to ourselves, even when we mess up. And appreciating ourselves, even when no one else does.","Add this edition to your self-love practice. Answer these questions at your own pace. Journal your answers or play with a friend who is also on their self-love journey. Revisit these questions as often as you need.","The more we love ourselves, the easier it becomes to give and receive love from others.","Ready?"],Ng=[["What belief about myself is holding me back the most? (Replace with a positive affirmation.)",`What am I proudest of myself
 for saying "no" to recently?`,"Am I avoiding any hard conversations with myself? If so, what comes to mind?","What mistake of mine taught me the most recently? What did it teach me?","What titles would you give this chapter of your self-love journey?","What would I never want to change about myself? (Be specific!)","What part(s) of myself have I felt the need to change in the past that I now embrace?",`What does self-love mean
 to me? What does it not
 mean to me? (Get specific.)`,"What did I give too much energy to a year ago that I can laugh at now?","What can I take responsibility for that I've been placing on someone else?","What do I want to learn more about in this chapter in my life? (Take time this week to explore this topic.)","Do I have a clear picture of who I want to be this time next year? What's one small step I can towards becoming that person?","When was the last time I shared my truth, even though it felt risky?","Fill in the blank: Sometimes I forget how good I am at _________.",`What do I want to stop
 apologizing for?`,"What did I learn about myself this week?","What am I not willing to settle for in relationships today, that I allowed not too long ago?","When was the last time someone helped me appreciate a part of myself that feels hard for me to love?","How do I want to be loved by somebody else? Describe in detail. Do you love yourself in this way? (Answer honestly)","What boundary would benefit me the most to set with myself? Why haven't I set it yet?","What do I wish someone would say to me in this current moment? (Give yourself that validation.)","Is there anything I've been beating myself up about? What does having empathy for myself look like in this situation?","What feedback forced me to grow recently, even if it was hard to hear in the moment?","When was the last time I felt most in my element? What was I doing?","How has my confidence increased with age?","What can I offer to a friendship that I'm most excited to give?","What is my favorite thing about the age I am today?","When was the last time I earned my own trust? How did I earn it?","What was the most genuine thank you I've received recently? What was it for?","What compliment do I hear most that isn't about my physical appearance?","What's the biggest improvement I've seen in myself this past year?","How have I been underselling myself, perhaps unintentionally?","What am I proudest of myself for recently, even if no one else has let me know?","Who inspires me to become a better version of myself? How do they inspire me?","Who do I compare myself most to? Why them? How does the comparison fuel me? How does it drain me?","When was the last time I earned my own respect? Explain.","How have I neglected myself recently? What's one small way I can make it up to myself today?","When do I feel my best? What am I wearing? What am I doing? (Create that day for yourself as soon as possible.)",`What haven't I given myself
 permission to feel recently?`,`What's a "flaw" I've learned to appreciate about myself overtime?`,"What are three things I love about my physical appearance? (Permission to brag!)","When was the last time I pleasantly surprised myself? Explain.","Wild Card Who's helped me love myself more? (Let them know!)","Wild Card What are three things I'm most grateful for in this present moment? Write them out.","Wild Card Who's done a great job at loving me? (Tell them thank you)","Wild Card Write out one thing you appreciate about the body part you're most insecure about.","Wild Card Write out an affirmation you need to hear most in this current moment. Repeat it everyday this week.",`Reminder Replace "That was
 so stupid of me"
 with "That was
 so human of me."`,`Reminder You deserve to
 take a breath. Relax
 for a moment. You've
 made it this far.
 Take that in.`,`Reminder The more you love
 yourself the better
 your relationships
 with everyone else
 will be.`],[`Write a love letter to
 yourself. Take as much time
 as you need. Place it somewhere
 safe. Read it when you need
 it most.`]],$g=51,zg=51,ys={name:Wg,short_name:xg,edition:_g,players:Cg,theme:Ig,levels:Sg,isExpansion:Eg,backDesc:bg,preview:jg,questions:Ng,_total:$g,_contains:zg},Tg="Self-reflection Edition",Pg="Self-reflection",Lg="Self-reflection Edition",Dg="1",Rg="main",Hg=["Self-reflection"],Mg=!1,Fg=[`Self awareness starts
 with self-reflection`],Og=[[`When do I feel most
 helpful to others?`,`What do I keep doing
 that keeps hurting? Why
 do I keep repeating this
 behavior?`,`What did the people who raised
 me teach me about love? What
 lessons do I want to keep? What
 do I want to challenge?`,`Are any of my
 insecurities hurting
 anyone else by
 accident?`,`How would I describe my
 relationship with myself
 in one word?`,`What do I need help
 with currently? Who
 can help me? How can I
 help myself?`,`What am I putting off
 that feels important?
 Why am I avoiding it?`,`When have I given too much of
 myself in a relationship? What
 did that look like? What lesson
 did that leave me with?`,`What's the most exciting
 improvement I've been seeing
 in myself recently?`,`What is an unpopular opinion
 of mine that I hesitate to
 share with others?`,`When was the last time I
 remember being mean to
 someone? Why did I act
 this way?`,`I want to thank
 myself for _________.`,`Which one of my mistakes
 taught me the most this
 past year? What did it
 teach me?`,`What purchase has meant
 the most to me recently?
 What is a purchase that I
 could have done without?`,`What have I accomplished
 recently that would have
 shocked me a year ago?`,`What's the best gift I can
 give myself in this chapter
 of my life?`,`What expectation have
 I set on someone that has
 been hurting me the most?`,`What's an important
 boundary I want to set
 with someone in my life?
 Why haven't I set it
 already?`,`What's one small step I can
 take today towards a goal
 that feels out of reach?`,`What's a
 non-negotiable
 in my life?`,`What have I tolerated
 from people in the past
 that I no longer have
 space for?`,`What have I outgrown
 recently? What am I
 growing into?`,`What can I be kinder
 towards myself for
 today?`,`What have I always
 accepted as true that
 turned out to be false?`,`What or who
 do I have an unhealthy
 relationship with?`,`In what ways do I want to
 be like the people that raised
 me? What's important for me
 to avoid repeating?`,`What's become more
 important to me recently
 than ever before?`,`When was the last
 time I truly enjoyed my
 own company? What
 was I doing?`,`What is the most fun I
 can remember having
 recently? What was I
 doing? Who was I with?`,`What's something mean
 that was said to me in my
 childhood that I carry to
 this day? What would I say
 to my younger self now?`,`Whose life seems most
 fulfilling to me? What does
 their life look like?`,`What insecurity has
 been holding me back
 the most?`,`What do I dislike that most
 people love? What do I love
 that most people dislike?`,`When do I feel most
 productive? What time is it
 usually? Am I alone or with
 others? (Get specific.)`,`Who intimidates
 me? Why do they
 intimidate me?`,`What do I have to offer in
 a romantic relationship?
 What do I want to receive?`,`What have I been
 sensitive to lately?`,`Who do I envy? Why
 do I envy them?`,`Who do I feel most
 myself around? Why?`,`What am I wearing when I
 have the best time? What
 do I always regret
 wearing?`,`What have my past
 relationships taught
 m about myself?
 Good and bad?`,`What's my most toxic
 trait I can admit to?
 Where do I think it
 stems from?`,`Wild Card What's my favorite song at
 the moment? Why do I love it
 so much? (Play it for
 yourself.)`,`Wild Card What am I doubting about
 myself currently? (Replace that
 thought with an affirmation and
 repeat it out loud.)`,`Wild Card What is one truth I've
 recently come to terms
 with? (Write it out.)`,`Wild Card Look in the mirror today
 and give yourself a
 genuine compliment.`,`Wild Card What do I need to get
 off my chest? (Write it out.)`,`Wild Card What is my happiness level on a
 scale of 1-10? (Write it down and
 date it. Why is it this number?
 What would make it 1
 score higher?)`,`Wild Card What feels impossible today that
 would shock me to accomplish in
 a year? (Write it down and date it.)`,`Wild Card Take 3 deep breaths
 before answering the
 next question.`,`Wild Card What do I need to hear
 most right now? (Write it
 out. Place somewhere
 you'll see often.)`,`Wild Card What are 3 things I love
 most about myself today?
 (Write them out.)`]],Bg=52,ps={name:Tg,short_name:Pg,edition:Lg,players:Dg,theme:Rg,levels:Hg,isExpansion:Mg,backDesc:Fg,questions:Og,_total:Bg},Ag=()=>{const e=[hs,Ql,Gl,Yl,Kl,Jl,as,es,cs,Xl,fs,ts,ns,is,os,ls,ss,rs,ys,ps,us,Zl,ds],t={Main:{displayName:"Main Deck",decks:[is]},Expansions:{displayName:"Expansion",decks:[Jl,es,ts,ns,os,rs]},Self:{displayName:"One Player +",decks:[hs,cs,fs,ys,ps]},Online:{displayName:"Online Released",decks:[as,ls,ss,us,ds]},Crossover:{displayName:"Crossover",decks:[Ql,Gl,Yl,Kl,Xl,Zl]}},[n,o]=z.useState(0),[r,i]=z.useState(["Main"]),[a,l]=z.useState([]),[s,d]=z.useState("main");z.useEffect(()=>{document.documentElement.setAttribute("data-theme",s)},[s]);const m=g=>{d(g)},f=()=>o(g=>g+1),p=()=>o(g=>g-1);return u.jsxs("div",{className:`h-[calc(100dvh)] max-h-screen relative ${n===3?`${s} bg-main`:"bg-white"}`,children:[n===0&&u.jsxs("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 tranform top-1/2 left-1/2 w-fit",children:[u.jsxs("h1",{className:"text-3xl font-bold tracking-wide uppercase",children:["We're Not",u.jsx("br",{}),"Really",u.jsx("br",{}),"Strangers"]}),u.jsxs("div",{className:"flex flex-row mt-3 w-fit group",children:[u.jsx("button",{onClick:f,className:"font-bold uppercase text-main",children:"New Game"}),u.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`group-hover:text-main ml-[2px] size-6 my-auto aspect-square ${s} laptop:text-transparent text-main transform group-hover:translate-x-2 duration-300 ease-in-out`,children:[u.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"})]})]})]}),n===1&&u.jsx(kf,{decks:e,categories:t,selectedDecks:r,setSelectedDecks:i,nextStep:f,prevStep:p,theme:s}),n===2&&u.jsx(Wf,{players:a,setPlayers:l,nextStep:f,prevStep:p,minPlayers:1,theme:s}),n===3&&u.jsx(wf,{decks:e,selectedDecks:r,setSelectedDecks:i,players:a,setPlayers:l,prevStep:()=>o(0),theme:s,toggleTheme:m,categories:t})]})};Gr.createRoot(document.getElementById("root")).render(u.jsx(Qd.StrictMode,{children:u.jsx(Ag,{})}));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var $f={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function dx(){if(g_)return Ro;g_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var __;function px(){return __||(__=1,$f.exports=dx()),$f.exports}var on=px(),th={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function mx(){if(v_)return fe;v_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function y(L,et,Tt){this.props=L,this.context=et,this.refs=A,this.updater=Tt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,et){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,et,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function F(L,et,Tt){this.props=L,this.context=et,this.refs=A,this.updater=Tt||M}var N=F.prototype=new _;N.constructor=F,b(N,y.prototype),N.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function V(L,et,Tt,Dt,Ft,at){return Tt=at.ref,{$$typeof:o,type:L,key:et,ref:Tt!==void 0?Tt:null,props:at}}function Y(L,et){return V(L.type,et,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function C(L){var et={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Tt){return et[Tt]})}var B=/\/+/g;function ft(L,et){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):et.toString(36)}function ht(){}function _t(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ht,ht):(L.status="pending",L.then(function(et){L.status==="pending"&&(L.status="fulfilled",L.value=et)},function(et){L.status==="pending"&&(L.status="rejected",L.reason=et)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function vt(L,et,Tt,Dt,Ft){var at=typeof L;(at==="undefined"||at==="boolean")&&(L=null);var gt=!1;if(L===null)gt=!0;else switch(at){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(L.$$typeof){case o:case t:gt=!0;break;case g:return gt=L._init,vt(gt(L._payload),et,Tt,Dt,Ft)}}if(gt)return Ft=Ft(L),gt=Dt===""?"."+ft(L,0):Dt,U(Ft)?(Tt="",gt!=null&&(Tt=gt.replace(B,"$&/")+"/"),vt(Ft,et,Tt,"",function(Kt){return Kt})):Ft!=null&&(D(Ft)&&(Ft=Y(Ft,Tt+(Ft.key==null||L&&L.key===Ft.key?"":(""+Ft.key).replace(B,"$&/")+"/")+gt)),et.push(Ft)),1;gt=0;var Ut=Dt===""?".":Dt+":";if(U(L))for(var Vt=0;Vt<L.length;Vt++)Dt=L[Vt],at=Ut+ft(Dt,Vt),gt+=vt(Dt,et,Tt,at,Ft);else if(Vt=S(L),typeof Vt=="function")for(L=Vt.call(L),Vt=0;!(Dt=L.next()).done;)Dt=Dt.value,at=Ut+ft(Dt,Vt++),gt+=vt(Dt,et,Tt,at,Ft);else if(at==="object"){if(typeof L.then=="function")return vt(_t(L),et,Tt,Dt,Ft);throw et=String(L),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return gt}function P(L,et,Tt){if(L==null)return L;var Dt=[],Ft=0;return vt(L,Dt,"","",function(at){return et.call(Tt,at,Ft++)}),Dt}function Q(L){if(L._status===-1){var et=L._result;et=et(),et.then(function(Tt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Tt)},function(Tt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Tt)}),L._status===-1&&(L._status=0,L._result=et)}if(L._status===1)return L._result.default;throw L._result}var Z=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function At(){}return fe.Children={map:P,forEach:function(L,et,Tt){P(L,function(){et.apply(this,arguments)},Tt)},count:function(L){var et=0;return P(L,function(){et++}),et},toArray:function(L){return P(L,function(et){return et})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},fe.Component=y,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=F,fe.StrictMode=r,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,fe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},fe.cache=function(L){return function(){return L.apply(null,arguments)}},fe.cloneElement=function(L,et,Tt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Dt=b({},L.props),Ft=L.key,at=void 0;if(et!=null)for(gt in et.ref!==void 0&&(at=void 0),et.key!==void 0&&(Ft=""+et.key),et)!G.call(et,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&et.ref===void 0||(Dt[gt]=et[gt]);var gt=arguments.length-2;if(gt===1)Dt.children=Tt;else if(1<gt){for(var Ut=Array(gt),Vt=0;Vt<gt;Vt++)Ut[Vt]=arguments[Vt+2];Dt.children=Ut}return V(L.type,Ft,void 0,void 0,at,Dt)},fe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},fe.createElement=function(L,et,Tt){var Dt,Ft={},at=null;if(et!=null)for(Dt in et.key!==void 0&&(at=""+et.key),et)G.call(et,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(Ft[Dt]=et[Dt]);var gt=arguments.length-2;if(gt===1)Ft.children=Tt;else if(1<gt){for(var Ut=Array(gt),Vt=0;Vt<gt;Vt++)Ut[Vt]=arguments[Vt+2];Ft.children=Ut}if(L&&L.defaultProps)for(Dt in gt=L.defaultProps,gt)Ft[Dt]===void 0&&(Ft[Dt]=gt[Dt]);return V(L,at,void 0,void 0,null,Ft)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(L){return{$$typeof:d,render:L}},fe.isValidElement=D,fe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Q}},fe.memo=function(L,et){return{$$typeof:p,type:L,compare:et===void 0?null:et}},fe.startTransition=function(L){var et=z.T,Tt={};z.T=Tt;try{var Dt=L(),Ft=z.S;Ft!==null&&Ft(Tt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(At,Z)}catch(at){Z(at)}finally{z.T=et}},fe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},fe.use=function(L){return z.H.use(L)},fe.useActionState=function(L,et,Tt){return z.H.useActionState(L,et,Tt)},fe.useCallback=function(L,et){return z.H.useCallback(L,et)},fe.useContext=function(L){return z.H.useContext(L)},fe.useDebugValue=function(){},fe.useDeferredValue=function(L,et){return z.H.useDeferredValue(L,et)},fe.useEffect=function(L,et,Tt){var Dt=z.H;if(typeof Tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Dt.useEffect(L,et)},fe.useId=function(){return z.H.useId()},fe.useImperativeHandle=function(L,et,Tt){return z.H.useImperativeHandle(L,et,Tt)},fe.useInsertionEffect=function(L,et){return z.H.useInsertionEffect(L,et)},fe.useLayoutEffect=function(L,et){return z.H.useLayoutEffect(L,et)},fe.useMemo=function(L,et){return z.H.useMemo(L,et)},fe.useOptimistic=function(L,et){return z.H.useOptimistic(L,et)},fe.useReducer=function(L,et,Tt){return z.H.useReducer(L,et,Tt)},fe.useRef=function(L){return z.H.useRef(L)},fe.useState=function(L){return z.H.useState(L)},fe.useSyncExternalStore=function(L,et,Tt){return z.H.useSyncExternalStore(L,et,Tt)},fe.useTransition=function(){return z.H.useTransition()},fe.version="19.1.1",fe}var S_;function Dd(){return S_||(S_=1,th.exports=mx()),th.exports}var ze=Dd(),eh={exports:{}},wo={},nh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function gx(){return x_||(x_=1,function(o){function t(P,Q){var Z=P.length;P.push(Q);t:for(;0<Z;){var At=Z-1>>>1,L=P[At];if(0<l(L,Q))P[At]=Q,P[Z]=L,Z=At;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Q=P[0],Z=P.pop();if(Z!==Q){P[0]=Z;t:for(var At=0,L=P.length,et=L>>>1;At<et;){var Tt=2*(At+1)-1,Dt=P[Tt],Ft=Tt+1,at=P[Ft];if(0>l(Dt,Z))Ft<L&&0>l(at,Dt)?(P[At]=at,P[Ft]=Z,At=Ft):(P[At]=Dt,P[Tt]=Z,At=Tt);else if(Ft<L&&0>l(at,Z))P[At]=at,P[Ft]=Z,At=Ft;else break t}}return Q}function l(P,Q){var Z=P.sortIndex-Q.sortIndex;return Z!==0?Z:P.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,S=3,M=!1,b=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var Q=i(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=P)r(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function z(P){if(A=!1,U(P),!b)if(i(m)!==null)b=!0,G||(G=!0,ft());else{var Q=i(p);Q!==null&&vt(z,Q.startTime-P)}}var G=!1,V=-1,Y=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<Y)}function B(){if(y=!1,G){var P=o.unstable_now();D=P;var Q=!0;try{t:{b=!1,A&&(A=!1,F(V),V=-1),M=!0;var Z=S;try{e:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var At=v.callback;if(typeof At=="function"){v.callback=null,S=v.priorityLevel;var L=At(v.expirationTime<=P);if(P=o.unstable_now(),typeof L=="function"){v.callback=L,U(P),Q=!0;break e}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)Q=!0;else{var et=i(p);et!==null&&vt(z,et.startTime-P),Q=!1}}break t}finally{v=null,S=Z,M=!1}Q=void 0}}finally{Q?ft():G=!1}}}var ft;if(typeof N=="function")ft=function(){N(B)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,_t=ht.port2;ht.port1.onmessage=B,ft=function(){_t.postMessage(null)}}else ft=function(){_(B,0)};function vt(P,Q){V=_(function(){P(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var Z=S;S=Q;try{return P()}finally{S=Z}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=S;S=P;try{return Q()}finally{S=Z}},o.unstable_scheduleCallback=function(P,Q,Z){var At=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?At+Z:At):Z=At,P){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,P={id:g++,callback:Q,priorityLevel:P,startTime:Z,expirationTime:L,sortIndex:-1},Z>At?(P.sortIndex=Z,t(p,P),i(m)===null&&P===i(p)&&(A?(F(V),V=-1):A=!0,vt(z,Z-At))):(P.sortIndex=L,t(m,P),b||M||(b=!0,G||(G=!0,ft()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var Q=S;return function(){var Z=S;S=Q;try{return P.apply(this,arguments)}finally{S=Z}}}}(ih)),ih}var M_;function _x(){return M_||(M_=1,nh.exports=gx()),nh.exports}var ah={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function vx(){if(y_)return Ln;y_=1;var o=Dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Ln.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.1.1",Ln}var E_;function Sx(){if(E_)return ah.exports;E_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ah.exports=vx(),ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function xx(){if(T_)return wo;T_=1;var o=_x(),t=Dd(),i=Sx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,s=f;break}if(T===s){x=!0,s=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=c;break}if(T===s){x=!0,s=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case z:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case N:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var vt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},At=[],L=-1;function et(e){return{current:e}}function Tt(e){0>L||(e.current=At[L],At[L]=null,L--)}function Dt(e,n){L++,At[L]=e.current,e.current=n}var Ft=et(null),at=et(null),gt=et(null),Ut=et(null);function Vt(e,n){switch(Dt(gt,n),Dt(at,e),Dt(Ft,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xg(n),e=Wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Tt(Ft),Dt(Ft,e)}function Kt(){Tt(Ft),Tt(at),Tt(gt)}function ae(e){e.memoizedState!==null&&Dt(Ut,e);var n=Ft.current,a=Wg(n,e.type);n!==a&&(Dt(at,e),Dt(Ft,a))}function Le(e){at.current===e&&(Tt(Ft),Tt(at)),Ut.current===e&&(Tt(Ut),yo._currentValue=Z)}var ge=Object.prototype.hasOwnProperty,I=o.unstable_scheduleCallback,Re=o.unstable_cancelCallback,te=o.unstable_shouldYield,Ee=o.unstable_requestPaint,rt=o.unstable_now,dt=o.unstable_getCurrentPriorityLevel,ut=o.unstable_ImmediatePriority,pt=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,Nt=o.unstable_LowPriority,w=o.unstable_IdlePriority,E=o.log,k=o.unstable_setDisableYieldValue,nt=null,it=null;function W(e){if(typeof E=="function"&&k(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(nt,e)}catch{}}var Lt=Math.clz32?Math.clz32:qt,Rt=Math.log,It=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Rt(e)/It|0)|0}var bt=256,Et=4194304;function Ht(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Ht(s):(x&=T,x!==0?c=Ht(x):a||(a=T&~e,a!==0&&(c=Ht(a))))):(T=s&~f,T!==0?c=Ht(T):x!==0?c=Ht(x):a||(a=s&~e,a!==0&&(c=Ht(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Jt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H(){var e=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),e}function wt(){var e=Et;return Et<<=1,(Et&62914560)===0&&(Et=4194304),e}function Pt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function kt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ot(e,n,a,s,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-Lt(a),Mt=1<<mt;T[mt]=0,O[mt]=-1;var st=$[mt];if(st!==null)for($[mt]=null,mt=0;mt<st.length;mt++){var ot=st[mt];ot!==null&&(ot.lane&=-536870913)}a&=~Mt}s!==0&&xt(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Lt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Zt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Lt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function le(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oe(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:u_(e.type))}function Qe(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var Ne=Math.random().toString(36).slice(2),Je="__reactFiber$"+Ne,ke="__reactProps$"+Ne,Vn="__reactContainer$"+Ne,si="__reactEvents$"+Ne,yr="__reactListeners$"+Ne,ua="__reactHandles$"+Ne,Ns="__reactResources$"+Ne,Ri="__reactMarker$"+Ne;function Er(e){delete e[Je],delete e[ke],delete e[si],delete e[yr],delete e[ua]}function Fi(e){var n=e[Je];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Vn]||a[Je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=jg(e);e!==null;){if(a=e[Je])return a;e=jg(e)}return n}e=a,a=e.parentNode}return null}function fa(e){if(e=e[Je]||e[Vn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ha(e){var n=e[Ns];return n||(n=e[Ns]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(e){e[Ri]=!0}var Ko=new Set,Qo={};function R(e,n){q(e,n),q(e+"Capture",n)}function q(e,n){for(Qo[e]=n,e=0;e<n.length;e++)Ko.add(n[e])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},K={};function zt(e){return ge.call(K,e)?!0:ge.call(ct,e)?!1:lt.test(e)?K[e]=!0:(ct[e]=!0,!1)}function Gt(e,n,a){if(zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Yt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var ne,re;function Qt(e){if(ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+e+re}var de=!1;function we(e,n){if(!e||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ot){var st=ot}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ot){st=ot}e.call(Mt.prototype)}}else{try{throw Error()}catch(ot){st=ot}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ot){if(ot&&st&&typeof ot.stack=="string")return[ot.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var O=x.split(`
`),$=T.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===$.length)for(s=O.length-1,c=$.length-1;1<=s&&0<=c&&O[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==$[c]){var mt=`
`+O[s].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=s&&0<=c);break}}}finally{de=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function je(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Qt("Activity");default:return""}}function Be(e){try{var n="";do n+=je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e){var n=ee(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=Ze(e))}function Cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ee(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function _n(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(e,n,a,s,c,f,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Dn(e,x,pe(n)):a!=null?Dn(e,x,pe(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+pe(T):e.removeAttribute("name")}function Bn(e,n,a,s,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function Dn(e,n,a){n==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function En(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function Tr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(vt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function kn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||uv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Wd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Xd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Xd(e,f,n[f])}function Qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Jc=null;function $c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Ar=null;function qd(e){var n=fa(e);if(n&&(e=n.stateNode)){var a=e[ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[ke]||null;if(!c)throw Error(r(90));Xe(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Cn(s)}break t;case"textarea":En(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var tu=!1;function Yd(e,n,a){if(tu)return e(n,a);tu=!0;try{var s=e(n);return s}finally{if(tu=!1,(br!==null||Ar!==null)&&(Bl(),br&&(n=br,e=Ar,Ar=br=null,qd(n),e)))for(n=0;n<e.length;n++)qd(e[n])}}function Os(e,n){var a=e.stateNode;if(a===null)return null;var s=a[ke]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Hi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{eu=!1}var da=null,nu=null,$o=null;function Zd(){if($o)return $o;var e,n=nu,a=n.length,s,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return $o=c.slice(e,1<s?1-s:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function jd(){return!1}function Xn(e){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:jd,this.isPropagationStopped=jd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Xn(Ya),zs=g({},Ya,{view:0,detail:0}),dv=Xn(zs),iu,au,Bs,il=g({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bs&&(Bs&&e.type==="mousemove"?(iu=e.screenX-Bs.screenX,au=e.screenY-Bs.screenY):au=iu=0,Bs=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:au}}),Kd=Xn(il),pv=g({},il,{dataTransfer:0}),mv=Xn(pv),gv=g({},zs,{relatedTarget:0}),ru=Xn(gv),_v=g({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Xn(_v),Sv=g({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xv=Xn(Sv),Mv=g({},Ya,{data:0}),Qd=Xn(Mv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tv[e])?!!n[e]:!1}function su(){return bv}var Av=g({},zs,{key:function(e){if(e.key){var n=yv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rv=Xn(Av),wv=g({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=Xn(wv),Cv=g({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Dv=Xn(Cv),Uv=g({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Xn(Uv),Nv=g({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Xn(Nv),Pv=g({},Ya,{newState:0,oldState:0}),zv=Xn(Pv),Bv=[9,13,27,32],ou=Hi&&"CompositionEvent"in window,Is=null;Hi&&"documentMode"in document&&(Is=document.documentMode);var Iv=Hi&&"TextEvent"in window&&!Is,$d=Hi&&(!ou||Is&&8<Is&&11>=Is),tp=" ",ep=!1;function np(e,n){switch(e){case"keyup":return Bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function Fv(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ep=!0,tp);case"textInput":return e=n.data,e===tp&&ep?null:e;default:return null}}function Hv(e,n){if(Rr)return e==="compositionend"||!ou&&np(e,n)?(e=Zd(),$o=nu=da=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $d&&n.locale!=="ko"?null:n.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gv[e.type]:n==="textarea"}function rp(e,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=kl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Fs=null,Hs=null;function Vv(e){Fg(e,0)}function al(e){var n=qa(e);if(Cn(n))return e}function sp(e,n){if(e==="change")return n}var op=!1;if(Hi){var lu;if(Hi){var cu="oninput"in document;if(!cu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),cu=typeof lp.oninput=="function"}lu=cu}else lu=!1;op=lu&&(!document.documentMode||9<document.documentMode)}function cp(){Fs&&(Fs.detachEvent("onpropertychange",up),Hs=Fs=null)}function up(e){if(e.propertyName==="value"&&al(Hs)){var n=[];rp(n,Hs,e,$c(e)),Yd(Vv,n)}}function kv(e,n,a){e==="focusin"?(cp(),Fs=n,Hs=a,Fs.attachEvent("onpropertychange",up)):e==="focusout"&&cp()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Hs)}function Wv(e,n){if(e==="click")return al(n)}function qv(e,n){if(e==="input"||e==="change")return al(n)}function Yv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Yv;function Gs(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ge.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,n){var a=fp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fp(a)}}function dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_i(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_i(e.document)}return n}function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zv=Hi&&"documentMode"in document&&11>=document.documentMode,wr=null,fu=null,Vs=null,hu=!1;function mp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||wr==null||wr!==_i(s)||(s=wr,"selectionStart"in s&&uu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vs&&Gs(Vs,s)||(Vs=s,s=kl(fu,"onSelect"),0<s.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=wr)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Cr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},du={},gp={};Hi&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function ja(e){if(du[e])return du[e];if(!Cr[e])return e;var n=Cr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return du[e]=n[a];return e}var _p=ja("animationend"),vp=ja("animationiteration"),Sp=ja("animationstart"),jv=ja("transitionrun"),Kv=ja("transitionstart"),Qv=ja("transitioncancel"),xp=ja("transitionend"),Mp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function vi(e,n){Mp.set(e,n),R(n,[e])}var yp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Be(n)},yp.set(e,n),n)}return{value:e,source:n,stack:Be(n)}}var li=[],Dr=0,mu=0;function rl(){for(var e=Dr,n=mu=Dr=0;n<e;){var a=li[n];li[n++]=null;var s=li[n];li[n++]=null;var c=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Ep(a,c,f)}}function sl(e,n,a,s){li[Dr++]=e,li[Dr++]=n,li[Dr++]=a,li[Dr++]=s,mu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function gu(e,n,a,s){return sl(e,n,a,s),ol(e)}function Ur(e,n){return sl(e,null,null,n),ol(e)}function Ep(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Lt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<po)throw po=0,Ef=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Lr={};function Jv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new Jv(e,n,a,s)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,s,c,f){var x=0;if(s=e,typeof e=="function")_u(e)&&(x=1);else if(typeof e=="string")x=tx(e,a,Ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=jn(31,a,n,c),e.elementType=D,e.lanes=f,e;case b:return Ka(a.children,c,f,n);case A:x=8,c|=24;break;case y:return e=jn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case z:return e=jn(13,a,n,c),e.elementType=z,e.lanes=f,e;case G:return e=jn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:x=10;break t;case F:x=9;break t;case U:x=11;break t;case V:x=14;break t;case Y:x=16,s=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(x,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Ka(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function vu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function Su(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nr=[],Or=0,cl=null,ul=0,ci=[],ui=0,Qa=null,Vi=1,ki="";function Ja(e,n){Nr[Or++]=ul,Nr[Or++]=cl,cl=e,ul=n}function bp(e,n,a){ci[ui++]=Vi,ci[ui++]=ki,ci[ui++]=Qa,Qa=e;var s=Vi;e=ki;var c=32-Lt(s)-1;s&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Vi=1<<32-Lt(n)+c|a<<c|s,ki=f+e}else Vi=1<<f|a<<c|s,ki=e}function xu(e){e.return!==null&&(Ja(e,1),bp(e,1,0))}function Mu(e){for(;e===cl;)cl=Nr[--Or],Nr[Or]=null,ul=Nr[--Or],Nr[Or]=null;for(;e===Qa;)Qa=ci[--ui],ci[ui]=null,ki=ci[--ui],ci[ui]=null,Vi=ci[--ui],ci[ui]=null}var In=null,en=null,Ue=!1,$a=null,wi=!1,yu=Error(r(519));function tr(e){var n=Error(r(418,""));throw Ws(oi(n,e)),yu}function Ap(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[Je]=e,n[ke]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)ye(go[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Bn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),xe(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Tr(n,s.value,s.defaultValue,s.children),xe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||kg(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||tr(e)}function Rp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:In=In.return}}function ks(e){if(e!==In)return!1;if(!Ue)return Rp(e),Ue=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&en&&tr(e),Rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){en=xi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}en=null}}else n===27?(n=en,Ca(e.type)?(e=kf,kf=null,en=e):en=n):en=In?xi(e.stateNode.nextSibling):null;return!0}function Xs(){en=In=null,Ue=!1}function wp(){var e=$a;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),$a=null),e}function Ws(e){$a===null?$a=[e]:$a.push(e)}var Eu=et(null),er=null,Xi=null;function pa(e,n,a){Dt(Eu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Eu.current,Tt(Eu)}function Tu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Tu(f.return,a,e),s||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Tu(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function qs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;Zn(c.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(c===Ut.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&bu(n,e,a,s),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Cp(er,e)}function hl(e,n){return er===null&&nr(e),Cp(e,n)}function Cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var $v=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},tS=o.unstable_scheduleCallback,eS=o.unstable_NormalPriority,hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new $v,data:new Map,refCount:0}}function Ys(e){e.refCount--,e.refCount===0&&tS(eS,function(){e.controller.abort()})}var Zs=null,Ru=0,Pr=0,zr=null;function nS(e,n){if(Zs===null){var a=Zs=[];Ru=0,Pr=Df(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Ru++,n.then(Dp,Dp),n}function Dp(){if(--Ru===0&&Zs!==null){zr!==null&&(zr.status="fulfilled");var e=Zs;Zs=null,Pr=0,zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function iS(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Up=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&nS(e,n),Up!==null&&Up(e,n)};var ir=et(null);function wu(){var e=ir.current;return e!==null?e:qe.pooledCache}function dl(e,n){n===null?Dt(ir,ir.current):Dt(ir,n.pool)}function Lp(){var e=wu();return e===null?null:{parent:hn._currentValue,pool:e}}var js=Error(r(460)),Np=Error(r(474)),pl=Error(r(542)),Cu={then:function(){}};function Op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Pp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e;default:if(typeof n.status=="string")n.then(ml,ml);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e}throw Ks=n,js}}var Ks=null;function zp(){if(Ks===null)throw Error(r(459));var e=Ks;return Ks=null,e}function Bp(e){if(e===js||e===pl)throw Error(r(483))}var ma=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ol(e),Ep(e,null,a),n}return sl(e,s,n,a),ol(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Zt(e,a)}}function Lu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function Js(){if(Nu){var e=zr;if(e!==null)throw e}}function $s(e,n,a,s){Nu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,$=O.next;O.next=null,x===null?f=$:x.next=$,x=O;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,T=mt.lastBaseUpdate,T!==x&&(T===null?mt.firstBaseUpdate=$:T.next=$,mt.lastBaseUpdate=O))}if(f!==null){var Mt=c.baseState;x=0,mt=$=O=null,T=f;do{var st=T.lane&-536870913,ot=st!==T.lane;if(ot?(Ae&st)===st:(s&st)===st){st!==0&&st===Pr&&(Nu=!0),mt!==null&&(mt=mt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ce=e,ie=T;st=n;var He=a;switch(ie.tag){case 1:if(ce=ie.payload,typeof ce=="function"){Mt=ce.call(He,Mt,st);break t}Mt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ie.payload,st=typeof ce=="function"?ce.call(He,Mt,st):ce,st==null)break t;Mt=g({},Mt,st);break t;case 2:ma=!0}}st=T.callback,st!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[st]:ot.push(st))}else ot={lane:st,tag:T.tag,payload:T.payload,callback:T.callback,next:null},mt===null?($=mt=ot,O=Mt):mt=mt.next=ot,x|=st;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);mt===null&&(O=Mt),c.baseState=O,c.firstBaseUpdate=$,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),ba|=x,e.lanes=x,e.memoizedState=Mt}}function Ip(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Fp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ip(a[e],n)}var Br=et(null),gl=et(0);function Hp(e,n){e=Ji,Dt(gl,e),Dt(Br,n),Ji=e|n.baseLanes}function Ou(){Dt(gl,Ji),Dt(Br,Br.current)}function Pu(){Ji=gl.current,Tt(Br),Tt(gl)}var va=0,_e=null,Ie=null,cn=null,_l=!1,Ir=!1,ar=!1,vl=0,to=0,Fr=null,aS=0;function rn(){throw Error(r(321))}function zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,s,c,f){return va=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Em:Tm,ar=!1,f=a(s,c),ar=!1,Ir&&(f=Vp(n,a,s,c)),Gp(e),f}function Gp(e){P.H=Tl;var n=Ie!==null&&Ie.next!==null;if(va=0,cn=Ie=_e=null,_l=!1,to=0,Fr=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&fl(e)&&(vn=!0))}function Vp(e,n,a,s){_e=e;var c=0;do{if(Ir&&(Fr=null),to=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,cn=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=fS,f=n(a,s)}while(Ir);return f}function rS(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),n}function Iu(){var e=vl!==0;return vl=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}va=0,cn=Ie=_e=null,Ir=!1,to=vl=0,Fr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?_e.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=cn===null?_e.memoizedState:cn.next;if(n!==null)cn=n,Ie=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?_e.memoizedState=cn=e:cn=cn.next=e}return cn}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=to;return to+=1,Fr===null&&(Fr=[]),e=Pp(Fr,e,n),n=_e,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Em:Tm),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===N)return Un(e)}throw Error(r(438,String(e)))}function Vu(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=un();return ku(n,Ie,e)}function ku(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=x=null,O=null,$=n,mt=!1;do{var Mt=$.lane&-536870913;if(Mt!==$.lane?(Ae&Mt)===Mt:(va&Mt)===Mt){var st=$.revertLane;if(st===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Mt===Pr&&(mt=!0);else if((va&st)===st){$=$.next,st===Pr&&(mt=!0);continue}else Mt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=Mt,x=f):O=O.next=Mt,_e.lanes|=st,ba|=st;Mt=$.action,ar&&a(f,Mt),f=$.hasEagerState?$.eagerState:a(f,Mt)}else st={lane:Mt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=st,x=f):O=O.next=st,_e.lanes|=Mt,ba|=Mt;$=$.next}while($!==null&&$!==n);if(O===null?x=f:O.next=T,!Zn(f,e.memoizedState)&&(vn=!0,mt&&(a=zr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Xu(e){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Zn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function kp(e,n,a){var s=_e,c=un(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Zn((Ie||c).memoizedState,a);x&&(c.memoizedState=a,vn=!0),c=c.queue;var T=qp.bind(null,s,c,e);if(no(2048,8,T,[e]),c.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,Hr(9,Ml(),Wp.bind(null,s,c,a,n),null),qe===null)throw Error(r(349));f||(va&124)!==0||Xp(s,n,a)}return a}function Xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Gu(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Wp(e,n,a,s){n.value=a,n.getSnapshot=s,Yp(n)&&Zp(e)}function qp(e,n,a){return a(function(){Yp(n)&&Zp(e)})}function Yp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function Zp(e){var n=Ur(e,2);n!==null&&ti(n,e,2)}function Wu(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),ar){W(!0);try{a()}finally{W(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function jp(e,n,a,s){return e.baseState=a,ku(e,Ie,typeof s=="function"?s:qi)}function sS(e,n,a,s,c){if(El(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Kp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(c,s),O=P.S;O!==null&&O(x,T),Qp(e,n,T)}catch($){qu(e,n,$)}finally{P.T=f}}else try{f=a(c,s),Qp(e,n,f)}catch($){qu(e,n,$)}}function Qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Jp(e,n,s)},function(s){return qu(e,n,s)}):Jp(e,n,a)}function Jp(e,n,a){n.status="fulfilled",n.value=a,$p(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Kp(e,a)))}function qu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,$p(n),n=n.next;while(n!==s)}e.action=null}function $p(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tm(e,n){return n}function em(e,n){if(Ue){var a=qe.formState;if(a!==null){t:{var s=_e;if(Ue){if(en){e:{for(var c=en,f=wi;c.nodeType!==8;){if(!f){c=null;break e}if(c=xi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){en=xi(c.nextSibling),s=c.data==="F!";break t}}tr(s)}s=!1}s&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:n},a.queue=s,a=xm.bind(null,_e,s),s.dispatch=a,s=Wu(!1),f=Qu.bind(null,_e,!1,s.queue),s=Wn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=sS.bind(null,_e,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function nm(e){var n=un();return im(n,Ie,e)}function im(e,n,a){if(n=ku(e,n,tm)[0],e=xl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(x){throw x===js?pl:x}else s=n;n=un();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,Hr(9,Ml(),oS.bind(null,c,a),null)),[s,f,e]}function oS(e,n){e.action=n}function am(e){var n=un(),a=Ie;if(a!==null)return im(n,a,e);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Hr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Gu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Ml(){return{destroy:void 0,resource:void 0}}function rm(){return un().memoizedState}function yl(e,n,a,s){var c=Wn();s=s===void 0?null:s,_e.flags|=e,c.memoizedState=Hr(1|n,Ml(),a,s)}function no(e,n,a,s){var c=un();s=s===void 0?null:s;var f=c.memoizedState.inst;Ie!==null&&s!==null&&zu(s,Ie.memoizedState.deps)?c.memoizedState=Hr(n,f,a,s):(_e.flags|=e,c.memoizedState=Hr(1|n,f,a,s))}function sm(e,n){yl(8390656,8,e,n)}function om(e,n){no(2048,8,e,n)}function lm(e,n){return no(4,2,e,n)}function cm(e,n){return no(4,4,e,n)}function um(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fm(e,n,a){a=a!=null?a.concat([e]):null,no(4,4,um.bind(null,n,e),a)}function Yu(){}function hm(e,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&zu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function dm(e,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&zu(n,s[1]))return s[0];if(s=e(),ar){W(!0);try{e()}finally{W(!1)}}return a.memoizedState=[s,n],s}function Zu(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=gg(),_e.lanes|=e,ba|=e,a)}function pm(e,n,a,s){return Zn(a,n)?a:Br.current!==null?(e=Zu(e,a,s),Zn(e,n)||(vn=!0),e):(va&42)===0?(vn=!0,e.memoizedState=a):(e=gg(),_e.lanes|=e,ba|=e,n)}function mm(e,n,a,s,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,Qu(e,!1,n,a);try{var O=c(),$=P.S;if($!==null&&$(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var mt=iS(O,s);io(e,n,mt,$n(e))}else io(e,n,s,$n(e))}catch(Mt){io(e,n,{then:function(){},status:"rejected",reason:Mt},$n())}finally{Q.p=f,P.T=x}}function lS(){}function ju(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=gm(e).queue;mm(e,c,n,Z,a===null?lS:function(){return _m(e),a(s)})}function gm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _m(e){var n=gm(e).next.queue;io(e,n,{},$n())}function Ku(){return Un(yo)}function vm(){return un().memoizedState}function Sm(){return un().memoizedState}function cS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=ga(a);var s=_a(n,e,a);s!==null&&(ti(s,n,a),Qs(s,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function uS(e,n,a){var s=$n();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?Mm(n,a):(a=gu(e,n,a,s),a!==null&&(ti(a,e,s),ym(a,n,s)))}function xm(e,n,a){var s=$n();io(e,n,a,s)}function io(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))Mm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Zn(T,x))return sl(e,n,c,0),qe===null&&rl(),!1}catch{}finally{}if(a=gu(e,n,c,s),a!==null)return ti(a,e,s),ym(a,n,s),!0}return!1}function Qu(e,n,a,s){if(s={lane:2,revertLane:Df(),action:s,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(r(479))}else n=gu(e,a,s,2),n!==null&&ti(n,e,2)}function El(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Mm(e,n){Ir=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ym(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Zt(e,a)}}var Tl={readContext:Un,use:Sl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},Em={readContext:Un,use:Sl,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:sm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,um.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var s=e();if(ar){W(!0);try{e()}finally{W(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Wn();if(a!==void 0){var c=a(n);if(ar){W(!0);try{a(n)}finally{W(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=uS.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=xm.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Wn();return Zu(a,e,n)},useTransition:function(){var e=Wu(!1);return e=mm.bind(null,_e,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=_e,c=Wn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Ae&124)!==0||Xp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,sm(qp.bind(null,s,f,e),[e]),s.flags|=2048,Hr(9,Ml(),Wp.bind(null,s,f,a,n),null),a},useId:function(){var e=Wn(),n=qe.identifierPrefix;if(Ue){var a=ki,s=Vi;a=(s&~(1<<32-Lt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=aS++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:em,useActionState:em,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qu.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Wn().memoizedState=cS.bind(null,_e)}},Tm={readContext:Un,use:Sl,useCallback:hm,useContext:Un,useEffect:om,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:cm,useMemo:dm,useReducer:xl,useRef:rm,useState:function(){return xl(qi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=un();return pm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=xl(qi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Ku,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=un();return jp(a,Ie,e,n)},useMemoCache:Vu,useCacheRefresh:Sm},fS={readContext:Un,use:Sl,useCallback:hm,useContext:Un,useEffect:om,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:cm,useMemo:dm,useReducer:Xu,useRef:rm,useState:function(){return Xu(qi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=un();return Ie===null?Zu(a,e,n):pm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Xu(qi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Ku,useFormState:am,useActionState:am,useOptimistic:function(e,n){var a=un();return Ie!==null?jp(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Sm},Gr=null,ao=0;function bl(e){var n=ao;return ao+=1,Gr===null&&(Gr=[]),Pp(Gr,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bm(e){var n=e._init;return n(e._payload)}function Am(e){function n(j,X){if(e){var J=j.deletions;J===null?(j.deletions=[X],j.flags|=16):J.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function s(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=Gi(j,X),j.index=0,j.sibling=null,j}function f(j,X,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<X?(j.flags|=67108866,X):J):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function x(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,X,J,St){return X===null||X.tag!==6?(X=vu(J,j.mode,St),X.return=j,X):(X=c(X,J),X.return=j,X)}function O(j,X,J,St){var jt=J.type;return jt===b?mt(j,X,J.props.children,St,J.key):X!==null&&(X.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===Y&&bm(jt)===X.type)?(X=c(X,J.props),ro(X,J),X.return=j,X):(X=ll(J.type,J.key,J.props,null,j.mode,St),ro(X,J),X.return=j,X)}function $(j,X,J,St){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Su(J,j.mode,St),X.return=j,X):(X=c(X,J.children||[]),X.return=j,X)}function mt(j,X,J,St,jt){return X===null||X.tag!==7?(X=Ka(J,j.mode,St,jt),X.return=j,X):(X=c(X,J),X.return=j,X)}function Mt(j,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=vu(""+X,j.mode,J),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return J=ll(X.type,X.key,X.props,null,j.mode,J),ro(J,X),J.return=j,J;case M:return X=Su(X,j.mode,J),X.return=j,X;case Y:var St=X._init;return X=St(X._payload),Mt(j,X,J)}if(vt(X)||ft(X))return X=Ka(X,j.mode,J,null),X.return=j,X;if(typeof X.then=="function")return Mt(j,bl(X),J);if(X.$$typeof===N)return Mt(j,hl(j,X),J);Al(j,X)}return null}function st(j,X,J,St){var jt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return jt!==null?null:T(j,X,""+J,St);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===jt?O(j,X,J,St):null;case M:return J.key===jt?$(j,X,J,St):null;case Y:return jt=J._init,J=jt(J._payload),st(j,X,J,St)}if(vt(J)||ft(J))return jt!==null?null:mt(j,X,J,St,null);if(typeof J.then=="function")return st(j,X,bl(J),St);if(J.$$typeof===N)return st(j,X,hl(j,J),St);Al(j,J)}return null}function ot(j,X,J,St,jt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return j=j.get(J)||null,T(X,j,""+St,jt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case S:return j=j.get(St.key===null?J:St.key)||null,O(X,j,St,jt);case M:return j=j.get(St.key===null?J:St.key)||null,$(X,j,St,jt);case Y:var Se=St._init;return St=Se(St._payload),ot(j,X,J,St,jt)}if(vt(St)||ft(St))return j=j.get(J)||null,mt(X,j,St,jt,null);if(typeof St.then=="function")return ot(j,X,J,bl(St),jt);if(St.$$typeof===N)return ot(j,X,J,hl(X,St),jt);Al(X,St)}return null}function ce(j,X,J,St){for(var jt=null,Se=null,$t=X,se=X=0,xn=null;$t!==null&&se<J.length;se++){$t.index>se?(xn=$t,$t=null):xn=$t.sibling;var Ce=st(j,$t,J[se],St);if(Ce===null){$t===null&&($t=xn);break}e&&$t&&Ce.alternate===null&&n(j,$t),X=f(Ce,X,se),Se===null?jt=Ce:Se.sibling=Ce,Se=Ce,$t=xn}if(se===J.length)return a(j,$t),Ue&&Ja(j,se),jt;if($t===null){for(;se<J.length;se++)$t=Mt(j,J[se],St),$t!==null&&(X=f($t,X,se),Se===null?jt=$t:Se.sibling=$t,Se=$t);return Ue&&Ja(j,se),jt}for($t=s($t);se<J.length;se++)xn=ot($t,j,se,J[se],St),xn!==null&&(e&&xn.alternate!==null&&$t.delete(xn.key===null?se:xn.key),X=f(xn,X,se),Se===null?jt=xn:Se.sibling=xn,Se=xn);return e&&$t.forEach(function(Oa){return n(j,Oa)}),Ue&&Ja(j,se),jt}function ie(j,X,J,St){if(J==null)throw Error(r(151));for(var jt=null,Se=null,$t=X,se=X=0,xn=null,Ce=J.next();$t!==null&&!Ce.done;se++,Ce=J.next()){$t.index>se?(xn=$t,$t=null):xn=$t.sibling;var Oa=st(j,$t,Ce.value,St);if(Oa===null){$t===null&&($t=xn);break}e&&$t&&Oa.alternate===null&&n(j,$t),X=f(Oa,X,se),Se===null?jt=Oa:Se.sibling=Oa,Se=Oa,$t=xn}if(Ce.done)return a(j,$t),Ue&&Ja(j,se),jt;if($t===null){for(;!Ce.done;se++,Ce=J.next())Ce=Mt(j,Ce.value,St),Ce!==null&&(X=f(Ce,X,se),Se===null?jt=Ce:Se.sibling=Ce,Se=Ce);return Ue&&Ja(j,se),jt}for($t=s($t);!Ce.done;se++,Ce=J.next())Ce=ot($t,j,se,Ce.value,St),Ce!==null&&(e&&Ce.alternate!==null&&$t.delete(Ce.key===null?se:Ce.key),X=f(Ce,X,se),Se===null?jt=Ce:Se.sibling=Ce,Se=Ce);return e&&$t.forEach(function(hx){return n(j,hx)}),Ue&&Ja(j,se),jt}function He(j,X,J,St){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var jt=J.key;X!==null;){if(X.key===jt){if(jt=J.type,jt===b){if(X.tag===7){a(j,X.sibling),St=c(X,J.props.children),St.return=j,j=St;break t}}else if(X.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===Y&&bm(jt)===X.type){a(j,X.sibling),St=c(X,J.props),ro(St,J),St.return=j,j=St;break t}a(j,X);break}else n(j,X);X=X.sibling}J.type===b?(St=Ka(J.props.children,j.mode,St,J.key),St.return=j,j=St):(St=ll(J.type,J.key,J.props,null,j.mode,St),ro(St,J),St.return=j,j=St)}return x(j);case M:t:{for(jt=J.key;X!==null;){if(X.key===jt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(j,X.sibling),St=c(X,J.children||[]),St.return=j,j=St;break t}else{a(j,X);break}else n(j,X);X=X.sibling}St=Su(J,j.mode,St),St.return=j,j=St}return x(j);case Y:return jt=J._init,J=jt(J._payload),He(j,X,J,St)}if(vt(J))return ce(j,X,J,St);if(ft(J)){if(jt=ft(J),typeof jt!="function")throw Error(r(150));return J=jt.call(J),ie(j,X,J,St)}if(typeof J.then=="function")return He(j,X,bl(J),St);if(J.$$typeof===N)return He(j,X,hl(j,J),St);Al(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(j,X.sibling),St=c(X,J),St.return=j,j=St):(a(j,X),St=vu(J,j.mode,St),St.return=j,j=St),x(j)):a(j,X)}return function(j,X,J,St){try{ao=0;var jt=He(j,X,J,St);return Gr=null,jt}catch($t){if($t===js||$t===pl)throw $t;var Se=jn(29,$t,null,j.mode);return Se.lanes=St,Se.return=j,Se}finally{}}}var Vr=Am(!0),Rm=Am(!1),fi=et(null),Ci=null;function Sa(e){var n=e.alternate;Dt(dn,dn.current&1),Dt(fi,e),Ci===null&&(n===null||Br.current!==null||n.memoizedState!==null)&&(Ci=e)}function wm(e){if(e.tag===22){if(Dt(dn,dn.current),Dt(fi,e),Ci===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ci=e)}}else xa()}function xa(){Dt(dn,dn.current),Dt(fi,fi.current)}function Yi(e){Tt(fi),Ci===e&&(Ci=null),Tt(dn)}var dn=et(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Vf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ju(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=$n(),c=ga(s);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(ti(n,e,s),Qs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=$n(),c=ga(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(ti(n,e,s),Qs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),s=ga(a);s.tag=2,n!=null&&(s.callback=n),n=_a(e,s,a),n!==null&&(ti(n,e,a),Qs(n,e,a))}};function Cm(e,n,a,s,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(c,f):!0}function Dm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Um(e){wl(e)}function Lm(e){console.error(e)}function Nm(e){wl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Om(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tf(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Pm(e){return e=ga(e),e.tag=3,e}function zm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Om(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Om(n,a,s),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function hS(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,c,!0),a=fi.current,a!==null){switch(a.tag){case 13:return Ci===null?bf():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Rf(e,s,c)),!1;case 22:return a.flags|=65536,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Rf(e,s,c)),!1}throw Error(r(435,a.tag))}return Rf(e,s,c),bf(),!1}if(Ue)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==yu&&(e=Error(r(422),{cause:s}),Ws(oi(e,a)))):(s!==yu&&(n=Error(r(423),{cause:s}),Ws(oi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=oi(s,a),c=tf(e.stateNode,s,c),Lu(e,c),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=oi(f,a),ho===null?ho=[f]:ho.push(f),nn!==4&&(nn=2),n===null)return!0;s=oi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=tf(a.stateNode,s,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Pm(c),zm(c,e,a,s),Lu(a,c),!1}a=a.return}while(a!==null);return!1}var Bm=Error(r(461)),vn=!1;function Tn(e,n,a,s){n.child=e===null?Rm(n,null,a,s):Vr(n,e.child,a,s)}function Im(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return nr(n),s=Bu(e,n,a,x,f,c),T=Iu(),e!==null&&!vn?(Fu(e,n,c),Zi(e,n,c)):(Ue&&T&&xu(n),n.flags|=1,Tn(e,n,s,c),n.child)}function Fm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Hm(e,n,f,s,c)):(e=ll(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!cf(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(x,s)&&e.ref===n.ref)return Zi(e,n,c)}return n.flags|=1,e=Gi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Hm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Gs(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,cf(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Zi(e,n,c)}return ef(e,n,a,s,c)}function Gm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Vm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Hp(n,f):Ou(),wm(n);else return n.lanes=n.childLanes=536870912,Vm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(dl(n,f.cachePool),Hp(n,f),xa(),n.memoizedState=null):(e!==null&&dl(n,null),Ou(),xa());return Tn(e,n,c,a),n.child}function Vm(e,n,a,s){var c=wu();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&dl(n,null),Ou(),wm(n),e!==null&&qs(e,n,s,!0),null}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,s,c){return nr(n),a=Bu(e,n,a,s,void 0,c),s=Iu(),e!==null&&!vn?(Fu(e,n,c),Zi(e,n,c)):(Ue&&s&&xu(n),n.flags|=1,Tn(e,n,a,c),n.child)}function km(e,n,a,s,c,f){return nr(n),n.updateQueue=null,a=Vp(n,s,a,c),Gp(e),s=Iu(),e!==null&&!vn?(Fu(e,n,f),Zi(e,n,f)):(Ue&&s&&xu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Xm(e,n,a,s,c){if(nr(n),n.stateNode===null){var f=Lr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Un(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Du(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Un(x):Lr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Ju(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&$u.enqueueReplaceState(f,f.state,null),$s(n,s,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,O=rr(a,T);f.props=O;var $=f.context,mt=a.contextType;x=Lr,typeof mt=="object"&&mt!==null&&(x=Un(mt));var Mt=a.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&Dm(n,f,s,x),ma=!1;var st=n.memoizedState;f.state=st,$s(n,s,f,c),Js(),$=n.memoizedState,T||st!==$||ma?(typeof Mt=="function"&&(Ju(n,a,Mt,s),$=n.memoizedState),(O=ma||Cm(n,a,O,s,st,$,x))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Uu(e,n),x=n.memoizedProps,mt=rr(a,x),f.props=mt,Mt=n.pendingProps,st=f.context,$=a.contextType,O=Lr,typeof $=="object"&&$!==null&&(O=Un($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Mt||st!==O)&&Dm(n,f,s,O),ma=!1,st=n.memoizedState,f.state=st,$s(n,s,f,c),Js();var ot=n.memoizedState;x!==Mt||st!==ot||ma||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof T=="function"&&(Ju(n,a,T,s),ot=n.memoizedState),(mt=ma||Cm(n,a,mt,s,st,ot,O)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=O,s=mt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Dl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Vr(n,e.child,null,c),n.child=Vr(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Zi(e,n,c),e}function Wm(e,n,a,s){return Xs(),n.flags|=256,Tn(e,n,a,s),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:Lp()}}function rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function qm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(c?Sa(n):xa(),Ue){var T=en,O;if(O=T){t:{for(O=T,T=wi;O.nodeType!==8;){if(!T){T=null;break t}if(O=xi(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:Qa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},O=jn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,In=n,en=null,O=!0):O=!1}O||tr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Vf(T)?n.lanes=32:n.lanes=536870912,null;Yi(n)}return T=s.children,s=s.fallback,c?(xa(),c=n.mode,T=Ul({mode:"hidden",children:T},c),s=Ka(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=af(a),c.childLanes=rf(e,x,a),n.memoizedState=nf,s):(Sa(n),sf(n,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),c=s.fallback,T=n.mode,s=Ul({mode:"visible",children:s.children},T),c=Ka(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Vr(n,e.child,null,a),s=n.child,s.memoizedState=af(a),s.childLanes=rf(e,x,a),n.memoizedState=nf,n=c);else if(Sa(n),Vf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,Ws({value:s,source:null,stack:null}),n=of(e,n,a)}else if(vn||qs(e,n,a,!1),x=(a&e.childLanes)!==0,vn||x){if(x=qe,x!==null&&(s=a&-a,s=(s&42)!==0?1:le(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,Ur(e,s),ti(x,e,s),Bm;T.data==="$?"||bf(),n=of(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,en=xi(T.nextSibling),In=n,Ue=!0,$a=null,wi=!1,e!==null&&(ci[ui++]=Vi,ci[ui++]=ki,ci[ui++]=Qa,Vi=e.id,ki=e.overflow,Qa=n),n=sf(n,s.children),n.flags|=4096);return n}return c?(xa(),c=s.fallback,T=n.mode,O=e.child,$=O.sibling,s=Gi(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,$!==null?c=Gi($,c):(c=Ka(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=e.child.memoizedState,T===null?T=af(a):(O=T.cachePool,O!==null?($=hn._currentValue,O=O.parent!==$?{parent:$,pool:$}:O):O=Lp(),T={baseLanes:T.baseLanes|a,cachePool:O}),c.memoizedState=T,c.childLanes=rf(e,x,a),n.memoizedState=nf,s):(Sa(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function of(e,n,a){return Vr(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ym(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Tu(e.return,n,a)}function lf(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Zm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Tn(e,n,s.children,a),s=dn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ym(e,a,n);else if(e.tag===19)Ym(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Dt(dn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),lf(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Rl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}lf(n,!0,a,null,f);break;case"together":lf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function dS(e,n,a){switch(n.tag){case 3:Vt(n,n.stateNode.containerInfo),pa(n,hn,e.memoizedState.cache),Xs();break;case 27:case 5:ae(n);break;case 4:Vt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(e,n,a):(Sa(n),e=Zi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Zm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(dn,dn.current),s)break;return null;case 22:case 23:return n.lanes=0,Gm(e,n,a);case 24:pa(n,hn,e.memoizedState.cache)}return Zi(e,n,a)}function jm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return vn=!1,dS(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Ue&&(n.flags&1048576)!==0&&bp(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")_u(s)?(e=rr(s,e),n.tag=1,n=Xm(null,n,s,e,a)):(n.tag=0,n=ef(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=Im(null,n,s,e,a);break t}else if(c===V){n.tag=14,n=Fm(null,n,s,e,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),Xm(e,n,s,c,a);case 3:t:{if(Vt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Uu(e,n),$s(n,s,null,a);var x=n.memoizedState;if(s=x.cache,pa(n,hn,s),s!==f.cache&&bu(n,[hn],a,!0),Js(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(e,n,s,a);break t}else if(s!==c){c=oi(Error(r(424)),n),Ws(c),n=Wm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=xi(e.firstChild),In=n,Ue=!0,$a=null,wi=!0,a=Rm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xs(),s===c){n=Zi(e,n,a);break t}Tn(e,n,s,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=$g(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,e=n.pendingProps,s=Wl(gt.current).createElement(a),s[Je]=n,s[ke]=e,An(s,a,e),ln(s),n.stateNode=s):n.memoizedState=$g(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&Ue&&(s=n.stateNode=Kg(n.type,n.pendingProps,gt.current),In=n,wi=!0,c=en,Ca(n.type)?(kf=c,en=xi(s.firstChild)):en=c),Tn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((c=s=en)&&(s=GS(s,n.type,n.pendingProps,wi),s!==null?(n.stateNode=s,In=n,en=xi(s.firstChild),wi=!1,c=!0):c=!1),c||tr(n)),ae(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,Ff(c,f)?s=null:x!==null&&Ff(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(e,n,rS,null,null,a),yo._currentValue=c),Dl(e,n),Tn(e,n,s,a),n.child;case 6:return e===null&&Ue&&((e=a=en)&&(a=VS(a,n.pendingProps,wi),a!==null?(n.stateNode=a,In=n,en=null,e=!0):e=!1),e||tr(n)),null;case 13:return qm(e,n,a);case 4:return Vt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Vr(n,null,s,a):Tn(e,n,s,a),n.child;case 11:return Im(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,pa(n,n.type,s.value),Tn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=Un(c),s=s(c),n.flags|=1,Tn(e,n,s,a),n.child;case 14:return Fm(e,n,n.type,n.pendingProps,a);case 15:return Hm(e,n,n.type,n.pendingProps,a);case 19:return Zm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Ul(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Gi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Gm(e,n,a);case 24:return nr(n),s=Un(hn),e===null?(c=wu(),c===null&&(c=qe,f=Au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Du(n),pa(n,hn,c)):((e.lanes&a)!==0&&(Uu(e,n),$s(n,null,null,a),Js()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,hn,s)):(s=f.cache,pa(n,hn,s),s!==c.cache&&bu(n,[hn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function Km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!a_(n)){if(n=fi.current,n!==null&&((Ae&4194048)===Ae?Ci!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||n!==Ci))throw Ks=Cu,Np;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?wt():536870912,e.lanes|=n,qr|=n)}function so(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function pS(e,n,a){var s=n.pendingProps;switch(Mu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Wi(hn),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ks(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wp())),$e(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?($e(n),Km(n,a)):($e(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),$e(n),Km(n,a)):($e(n),n.flags&=-16777217):(e.memoizedProps!==s&&ji(n),$e(n),n.flags&=-16777217),null;case 27:Le(n),a=gt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return $e(n),null}e=Ft.current,ks(n)?Ap(n):(e=Kg(c,s,a),n.stateNode=e,ji(n))}return $e(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return $e(n),null}if(e=Ft.current,ks(n))Ap(n);else{switch(c=Wl(gt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[Je]=n,e[ke]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(An(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return $e(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=gt.current,ks(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=In,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Je]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||kg(e.nodeValue,a)),e||tr(n)}else e=Wl(e).createTextNode(s),e[Je]=n,n.stateNode=e}return $e(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ks(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Je]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=wp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yi(n),n):(Yi(n),null)}if(Yi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),$e(n),null;case 4:return Kt(),e===null&&Of(n.stateNode.containerInfo),$e(n),null;case 10:return Wi(n.type),$e(n),null;case 19:if(Tt(dn),c=n.memoizedState,c===null)return $e(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)so(c,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,so(c,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Tp(a,e),a=a.sibling;return Dt(dn,dn.current&1|2),n.child}e=e.sibling}c.tail!==null&&rt()>Pl&&(n.flags|=128,s=!0,so(c,!1),n.lanes=4194304)}else{if(!s)if(e=Rl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ue)return $e(n),null}else 2*rt()-c.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,s=!0,so(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=rt(),n.sibling=null,e=dn.current,Dt(dn,s?e&1|2:e&1),n):($e(n),null);case 22:case 23:return Yi(n),Pu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Tt(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(hn),$e(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function mS(e,n){switch(Mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(hn),Kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Yi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Tt(dn),null;case 4:return Kt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Yi(n),Pu(),e!==null&&Tt(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(hn),null;case 25:return null;default:return null}}function Qm(e,n){switch(Mu(n),n.tag){case 3:Wi(hn),Kt();break;case 26:case 27:case 5:Le(n);break;case 4:Kt();break;case 13:Yi(n);break;case 19:Tt(dn);break;case 10:Wi(n.type);break;case 22:case 23:Yi(n),Pu(),e!==null&&Tt(ir);break;case 24:Wi(hn)}}function oo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(T){We(n,n.return,T)}}function Ma(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var O=a,$=T;try{$()}catch(mt){We(c,O,mt)}}}s=s.next}while(s!==f)}}catch(mt){We(n,n.return,mt)}}function Jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fp(n,a)}catch(s){We(e,e.return,s)}}}function $m(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){We(e,n,s)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){We(e,n,c)}}function Di(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){We(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(e,n,c)}else a.current=null}function tg(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){We(e,e.return,c)}}function uf(e,n,a){try{var s=e.stateNode;zS(s,e.type,a,n),s[ke]=n}catch(c){We(e,e.return,c)}}function eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(s!==4&&(s===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Nl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[Je]=e,n[ke]=a}catch(f){We(e,e.return,f)}}var Ki=!1,sn=!1,df=!1,ig=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function gS(e,n){if(e=e.containerInfo,Bf=Ql,e=pp(e),uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,O=-1,$=0,mt=0,Mt=e,st=null;e:for(;;){for(var ot;Mt!==a||c!==0&&Mt.nodeType!==3||(T=x+c),Mt!==f||s!==0&&Mt.nodeType!==3||(O=x+s),Mt.nodeType===3&&(x+=Mt.nodeValue.length),(ot=Mt.firstChild)!==null;)st=Mt,Mt=ot;for(;;){if(Mt===e)break e;if(st===a&&++$===c&&(T=x),st===f&&++mt===s&&(O=x),(ot=Mt.nextSibling)!==null)break;Mt=st,st=Mt.parentNode}Mt=ot}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},Ql=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ce=rr(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ce,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ie){We(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Gf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function ag(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),s&4&&oo(5,a);break;case 1:if(ya(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){We(a,a.return,x)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){We(a,a.return,x)}}s&64&&Jm(a),s&512&&lo(a,a.return);break;case 3:if(ya(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fp(e,n)}catch(x){We(a,a.return,x)}}break;case 27:n===null&&s&4&&ng(a);case 26:case 5:ya(e,a),n===null&&s&4&&tg(a),s&512&&lo(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),s&4&&og(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bS.bind(null,a),kS(e,a))));break;case 22:if(s=a.memoizedState!==null||Ki,!s){n=n!==null&&n.memoizedState!==null||sn,c=Ki;var f=sn;Ki=s,(sn=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),Ki=c,sn=f}break;case 30:break;default:ya(e,a)}}function rg(e){var n=e.alternate;n!==null&&(e.alternate=null,rg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Er(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,qn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)sg(e,n,a),a=a.sibling}function sg(e,n,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(nt,a)}catch{}switch(a.tag){case 26:sn||Di(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Di(a,n);var s=Ke,c=qn;Ca(a.type)&&(Ke=a.stateNode,qn=!1),Qi(e,n,a),vo(a.stateNode),Ke=s,qn=c;break;case 5:sn||Di(a,n);case 6:if(s=Ke,c=qn,Ke=null,Qi(e,n,a),Ke=s,qn=c,Ke!==null)if(qn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){We(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){We(a,n,f)}break;case 18:Ke!==null&&(qn?(e=Ke,Zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ao(e)):Zg(Ke,a.stateNode));break;case 4:s=Ke,c=qn,Ke=a.stateNode.containerInfo,qn=!0,Qi(e,n,a),Ke=s,qn=c;break;case 0:case 11:case 14:case 15:sn||Ma(2,a,n),sn||Ma(4,a,n),Qi(e,n,a);break;case 1:sn||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&$m(a,n,s)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:sn=(s=sn)||a.memoizedState!==null,Qi(e,n,a),sn=s;break;default:Qi(e,n,a)}}function og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){We(n,n.return,a)}}function _S(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ig),n;default:throw Error(r(435,e.tag))}}function pf(e,n){var a=_S(e);n.forEach(function(s){var c=AS.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Ca(T.type)){Ke=T.stateNode,qn=!1;break t}break;case 5:Ke=T.stateNode,qn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,qn=!0;break t}T=T.return}if(Ke===null)throw Error(r(160));sg(f,x,c),Ke=null,qn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)lg(n,e),n=n.sibling}var Si=null;function lg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Qn(e),s&4&&(Ma(3,e,e.return),oo(3,e),Ma(5,e,e.return));break;case 1:Kn(n,e),Qn(e),s&512&&(sn||a===null||Di(a,a.return)),s&64&&Ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Si;if(Kn(n,e),Qn(e),s&512&&(sn||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ri]||f[Je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[Je]=e,ln(f),s=f;break t;case"link":var x=n_("link","href",c).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(x=n_("meta","content",c).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Je]=e,ln(f),s=f}e.stateNode=s}else i_(c,e.type,e.stateNode);else e.stateNode=e_(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?i_(c,e.type,e.stateNode):e_(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Qn(e),s&512&&(sn||a===null||Di(a,a.return)),a!==null&&s&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Qn(e),s&512&&(sn||a===null||Di(a,a.return)),e.flags&32){c=e.stateNode;try{kn(c,"")}catch(ot){We(e,e.return,ot)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,uf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(Kn(n,e),Qn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ot){We(e,e.return,ot)}}break;case 3:if(Zl=null,c=Si,Si=ql(n.containerInfo),Kn(n,e),Si=c,Qn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(ot){We(e,e.return,ot)}df&&(df=!1,cg(e));break;case 4:s=Si,Si=ql(e.stateNode.containerInfo),Kn(n,e),Qn(e),Si=s;break;case 12:Kn(n,e),Qn(e);break;case 13:Kn(n,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=rt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,pf(e,s)));break;case 22:c=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,$=Ki,mt=sn;if(Ki=$||c,sn=mt||O,Kn(n,e),sn=mt,Ki=$,Qn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Ki||sn||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=O.stateNode;var Mt=O.memoizedProps.style,st=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;T.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(ot){We(O,O.return,ot)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(ot){We(O,O.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,pf(e,a))));break;case 19:Kn(n,e),Qn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,pf(e,s)));break;case 30:break;case 21:break;default:Kn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(eg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(e);Nl(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(kn(x,""),a.flags&=-33);var T=ff(e);Nl(e,T,x);break;case 3:case 4:var O=a.stateNode.containerInfo,$=ff(e);hf(e,$,O);break;default:throw Error(r(161))}}catch(mt){We(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),sr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),sr(n);break;case 27:vo(n.stateNode);case 26:case 5:Di(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),oo(4,f);break;case 1:if(Ea(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){We(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)Ip(O[c],T)}catch($){We(s,s.return,$)}}a&&x&64&&Jm(f),lo(f,f.return);break;case 27:ng(f);case 26:case 5:Ea(c,f,a),a&&s===null&&x&4&&tg(f),lo(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&x&4&&og(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),lo(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ys(a))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e))}function Ui(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ug(e,n,a,s),n=n.sibling}function ug(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,s),c&2048&&oo(9,n);break;case 1:Ui(e,n,a,s);break;case 3:Ui(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e)));break;case 12:if(c&2048){Ui(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){We(n,n.return,O)}}else Ui(e,n,a,s);break;case 13:Ui(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,s):co(e,n):f._visibility&2?Ui(e,n,a,s):(f._visibility|=2,kr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&mf(x,n);break;case 24:Ui(e,n,a,s),c&2048&&gf(n.alternate,n);break;default:Ui(e,n,a,s)}}function kr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,T=a,O=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:kr(f,x,T,O,c),oo(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?kr(f,x,T,O,c):co(f,x):(mt._visibility|=2,kr(f,x,T,O,c)),c&&$&2048&&mf(x.alternate,x);break;case 24:kr(f,x,T,O,c),c&&$&2048&&gf(x.alternate,x);break;default:kr(f,x,T,O,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&mf(s.alternate,s);break;case 24:co(a,s),c&2048&&gf(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Xr(e){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 26:Xr(e),e.flags&uo&&e.memoizedState!==null&&nx(Si,e.memoizedState,e.memoizedProps);break;case 5:Xr(e);break;case 3:case 4:var n=Si;Si=ql(e.stateNode.containerInfo),Xr(e),Si=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Xr(e),uo=n):Xr(e));break;default:Xr(e)}}function hg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,pg(s,e)}hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):fo(e);break;default:fo(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,pg(s,e)}hg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function pg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Sn=s;else t:for(a=e;Sn!==null;){s=Sn;var c=s.sibling,f=s.return;if(rg(s),s===a){Sn=null;break t}if(c!==null){c.return=f,Sn=c;break t}Sn=f}}}var vS={getCacheForType:function(e){var n=Un(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},SS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,qe=null,Me=null,Ae=0,Pe=0,Jn=null,Ta=!1,Wr=!1,_f=!1,Ji=0,nn=0,ba=0,or=0,vf=0,hi=0,qr=0,ho=null,Yn=null,Sf=!1,xf=0,Pl=1/0,zl=null,Aa=null,bn=0,Ra=null,Yr=null,Zr=0,Mf=0,yf=null,mg=null,po=0,Ef=null;function $n(){if((Oe&2)!==0&&Ae!==0)return Ae&-Ae;if(P.T!==null){var e=Pr;return e!==0?e:Df()}return oe()}function gg(){hi===0&&(hi=(Ae&536870912)===0||Ue?H():536870912);var e=fi.current;return e!==null&&(e.flags|=32),hi}function ti(e,n,a){(e===qe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(jr(e,0),wa(e,Ae,hi,!1)),kt(e,a),((Oe&2)===0||e!==qe)&&(e===qe&&((Oe&2)===0&&(or|=a),nn===4&&wa(e,Ae,hi,!1)),Li(e))}function _g(e,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=s?yS(e,n):Af(e,n,!0),f=s;do{if(c===0){Wr&&!s&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!xS(a)){c=Af(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=e;c=ho;var O=T.current.memoizedState.isDehydrated;if(O&&(jr(T,x).flags|=256),x=Af(T,x,!1),x!==2){if(_f&&!O){T.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=Yn,Yn=c,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){jr(e,0),wa(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(s,n,hi,!Ta);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-rt(),10<c)){if(wa(s,n,hi,!Ta),Bt(s,0,!0)!==0)break t;s.timeoutHandle=qg(vg.bind(null,s,a,Yn,zl,Sf,n,hi,or,qr,Ta,f,2,-0,0),c);break t}vg(s,a,Yn,zl,Sf,n,hi,or,qr,Ta,f,0,-0,0)}}break}while(!0);Li(e)}function vg(e,n,a,s,c,f,x,T,O,$,mt,Mt,st,ot){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:ex},fg(n),Mt=ix(),Mt!==null)){e.cancelPendingCommit=Mt(bg.bind(null,e,n,f,a,s,c,x,T,O,mt,1,st,ot)),wa(e,f,x,!$);return}bg(e,n,f,a,s,c,x,T,O)}function xS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,s){n&=~vf,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&xt(e,a,n)}function Bl(){return(Oe&6)===0?(mo(0),!1):!0}function Tf(){if(Me!==null){if(Pe===0)var e=Me.return;else e=Me,Xi=er=null,Hu(e),Gr=null,ao=0,e=Me;for(;e!==null;)Qm(e.alternate,e),e=e.return;Me=null}}function jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,IS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Tf(),qe=e,Me=a=Gi(e.current,null),Ae=n,Pe=0,Jn=null,Ta=!1,Wr=Ct(e,n),_f=!1,qr=hi=vf=or=ba=nn=0,Yn=ho=null,Sf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Lt(s),f=1<<c;n|=e[c],s&=~f}return Ji=n,rl(),a}function Sg(e,n){_e=null,P.H=Tl,n===js||n===pl?(n=zp(),Pe=3):n===Np?(n=zp(),Pe=4):Pe=n===Bm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,Me===null&&(nn=1,Cl(e,oi(n,e.current)))}function xg(){var e=P.H;return P.H=Tl,e===null?Tl:e}function Mg(){var e=P.A;return P.A=vS,e}function bf(){nn=4,Ta||(Ae&4194048)!==Ae&&fi.current!==null||(Wr=!0),(ba&134217727)===0&&(or&134217727)===0||qe===null||wa(qe,Ae,hi,!1)}function Af(e,n,a){var s=Oe;Oe|=2;var c=xg(),f=Mg();(qe!==e||Ae!==n)&&(zl=null,jr(e,n)),n=!1;var x=nn;t:do try{if(Pe!==0&&Me!==null){var T=Me,O=Jn;switch(Pe){case 8:Tf(),x=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var $=Pe;if(Pe=0,Jn=null,Kr(e,T,O,$),a&&Wr){x=0;break t}break;default:$=Pe,Pe=0,Jn=null,Kr(e,T,O,$)}}MS(),x=nn;break}catch(mt){Sg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Xi=er=null,Oe=s,P.H=c,P.A=f,Me===null&&(qe=null,Ae=0,rl()),x}function MS(){for(;Me!==null;)yg(Me)}function yS(e,n){var a=Oe;Oe|=2;var s=xg(),c=Mg();qe!==e||Ae!==n?(zl=null,Pl=rt()+500,jr(e,n)):Wr=Ct(e,n);t:do try{if(Pe!==0&&Me!==null){n=Me;var f=Jn;e:switch(Pe){case 1:Pe=0,Jn=null,Kr(e,n,f,1);break;case 2:case 9:if(Op(f)){Pe=0,Jn=null,Eg(n);break}n=function(){Pe!==2&&Pe!==9||qe!==e||(Pe=7),Li(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Op(f)?(Pe=0,Jn=null,Eg(n)):(Pe=0,Jn=null,Kr(e,n,f,7));break;case 5:var x=null;switch(Me.tag){case 26:x=Me.memoizedState;case 5:case 27:var T=Me;if(!x||a_(x)){Pe=0,Jn=null;var O=T.sibling;if(O!==null)Me=O;else{var $=T.return;$!==null?(Me=$,Il($)):Me=null}break e}}Pe=0,Jn=null,Kr(e,n,f,5);break;case 6:Pe=0,Jn=null,Kr(e,n,f,6);break;case 8:Tf(),nn=6;break t;default:throw Error(r(462))}}ES();break}catch(mt){Sg(e,mt)}while(!0);return Xi=er=null,P.H=s,P.A=c,Oe=a,Me!==null?0:(qe=null,Ae=0,rl(),nn)}function ES(){for(;Me!==null&&!te();)yg(Me)}function yg(e){var n=jm(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Il(e):Me=n}function Eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Hu(n);default:Qm(a,n),n=Me=Tp(n,Ji),n=jm(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Il(e):Me=n}function Kr(e,n,a,s){Xi=er=null,Hu(n),Gr=null,ao=0;var c=n.return;try{if(hS(e,c,n,a,Ae)){nn=1,Cl(e,oi(a,e.current)),Me=null;return}}catch(f){if(c!==null)throw Me=c,f;nn=1,Cl(e,oi(a,e.current)),Me=null;return}n.flags&32768?(Ue||s===1?e=!0:Wr||(Ae&536870912)!==0?e=!1:(Ta=e=!0,(s===2||s===9||s===3||s===6)&&(s=fi.current,s!==null&&s.tag===13&&(s.flags|=16384))),Tg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){Tg(n,Ta);return}e=n.return;var a=pS(n.alternate,n,Ji);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);nn===0&&(nn=5)}function Tg(e,n){do{var a=mS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);nn=6,Me=null}function bg(e,n,a,s,c,f,x,T,O){e.cancelPendingCommit=null;do Fl();while(bn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=mu,Ot(e,a,f,x,T,O),e===qe&&(Me=qe=null,Ae=0),Yr=n,Ra=e,Zr=a,Mf=f,yf=c,mg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,RS(yt,function(){return Dg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=Q.p,Q.p=2,x=Oe,Oe|=4;try{gS(e,n,a)}finally{Oe=x,Q.p=c,P.T=s}}bn=1,Ag(),Rg(),wg()}}function Ag(){if(bn===1){bn=0;var e=Ra,n=Yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Q.p;Q.p=2;var c=Oe;Oe|=4;try{lg(n,e);var f=If,x=pp(e.containerInfo),T=f.focusedElem,O=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&dp(T.ownerDocument.documentElement,T)){if(O!==null&&uu(T)){var $=O.start,mt=O.end;if(mt===void 0&&(mt=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(mt,T.value.length);else{var Mt=T.ownerDocument||document,st=Mt&&Mt.defaultView||window;if(st.getSelection){var ot=st.getSelection(),ce=T.textContent.length,ie=Math.min(O.start,ce),He=O.end===void 0?ie:Math.min(O.end,ce);!ot.extend&&ie>He&&(x=He,He=ie,ie=x);var j=hp(T,ie),X=hp(T,He);if(j&&X&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var J=Mt.createRange();J.setStart(j.node,j.offset),ot.removeAllRanges(),ie>He?(ot.addRange(J),ot.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),ot.addRange(J))}}}}for(Mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&Mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Mt.length;T++){var St=Mt[T];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Ql=!!Bf,If=Bf=null}finally{Oe=c,Q.p=s,P.T=a}}e.current=n,bn=2}}function Rg(){if(bn===2){bn=0;var e=Ra,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Q.p;Q.p=2;var c=Oe;Oe|=4;try{ag(e,n.alternate,n)}finally{Oe=c,Q.p=s,P.T=a}}bn=3}}function wg(){if(bn===4||bn===3){bn=0,Ee();var e=Ra,n=Yr,a=Zr,s=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Yr=Ra=null,Cg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),ue(a),n=n.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(nt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=Q.p,Q.p=2,P.T=null;try{for(var f=e.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Q.p=c}}(Zr&3)!==0&&Fl(),Li(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Ef?po++:(po=0,Ef=e):po=0,mo(0)}}function Cg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ys(n)))}function Fl(e){return Ag(),Rg(),wg(),Dg()}function Dg(){if(bn!==5)return!1;var e=Ra,n=Mf;Mf=0;var a=ue(Zr),s=P.T,c=Q.p;try{Q.p=32>a?32:a,P.T=null,a=yf,yf=null;var f=Ra,x=Zr;if(bn=0,Yr=Ra=null,Zr=0,(Oe&6)!==0)throw Error(r(331));var T=Oe;if(Oe|=4,dg(f.current),ug(f,f.current,x,a),Oe=T,mo(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(nt,f)}catch{}return!0}finally{Q.p=c,P.T=s,Cg(e,n)}}function Ug(e,n,a){n=oi(a,n),n=tf(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(kt(e,2),Li(e))}function We(e,n,a){if(e.tag===3)Ug(e,e,a);else for(;n!==null;){if(n.tag===3){Ug(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Aa===null||!Aa.has(s))){e=oi(a,e),a=Pm(2),s=_a(n,a,2),s!==null&&(zm(a,s,n,e),kt(s,2),Li(s));break}}n=n.return}}function Rf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new SS;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(_f=!0,c.add(a),e=TS.bind(null,e,n,a),n.then(e,e))}function TS(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Ae&a)===a&&(nn===4||nn===3&&(Ae&62914560)===Ae&&300>rt()-xf?(Oe&2)===0&&jr(e,0):vf|=a,qr===Ae&&(qr=0)),Li(e)}function Lg(e,n){n===0&&(n=wt()),e=Ur(e,n),e!==null&&(kt(e,n),Li(e))}function bS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Lg(e,a)}function AS(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Lg(e,a)}function RS(e,n){return I(e,n)}var Hl=null,Qr=null,wf=!1,Gl=!1,Cf=!1,lr=0;function Li(e){e!==Qr&&e.next===null&&(Qr===null?Hl=Qr=e:Qr=Qr.next=e),Gl=!0,wf||(wf=!0,CS())}function mo(e,n){if(!Cf&&Gl){Cf=!0;do for(var a=!1,s=Hl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,zg(s,f))}else f=Ae,f=Bt(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,zg(s,f));s=s.next}while(a);Cf=!1}}function wS(){Ng()}function Ng(){Gl=wf=!1;var e=0;lr!==0&&(BS()&&(e=lr),lr=0);for(var n=rt(),a=null,s=Hl;s!==null;){var c=s.next,f=Og(s,n);f===0?(s.next=null,a===null?Hl=c:a.next=c,c===null&&(Qr=a)):(a=s,(e!==0||(f&3)!==0)&&(Gl=!0)),s=c}mo(e)}function Og(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Lt(f),T=1<<x,O=c[x];O===-1?((T&a)===0||(T&s)!==0)&&(c[x]=Jt(T,n)):O<=n&&(e.expiredLanes|=T),f&=~T}if(n=qe,a=Ae,a=Bt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Re(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Re(s),ue(a)){case 2:case 8:a=pt;break;case 32:a=yt;break;case 268435456:a=w;break;default:a=yt}return s=Pg.bind(null,e),a=I(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Re(s),e.callbackPriority=2,e.callbackNode=null,2}function Pg(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var s=Ae;return s=Bt(e,e===qe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(_g(e,s,n),Og(e,rt()),e.callbackNode!=null&&e.callbackNode===a?Pg.bind(null,e):null)}function zg(e,n){if(Fl())return null;_g(e,n,!0)}function CS(){FS(function(){(Oe&6)!==0?I(ut,wS):Ng()})}function Df(){return lr===0&&(lr=H()),lr}function Bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function Ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function DS(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Bg((c[ke]||null).action),x=s.submitter;x&&(n=(n=x[ke]||null)?Bg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new nl("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var O=x?Ig(c,x):new FormData(c);ju(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=x?Ig(c,x):new FormData(c),ju(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var Uf=0;Uf<pu.length;Uf++){var Lf=pu[Uf],US=Lf.toLowerCase(),LS=Lf[0].toUpperCase()+Lf.slice(1);vi(US,"on"+LS)}vi(_p,"onAnimationEnd"),vi(vp,"onAnimationIteration"),vi(Sp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(jv,"onTransitionRun"),vi(Kv,"onTransitionStart"),vi(Qv,"onTransitionCancel"),vi(xp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],O=T.instance,$=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(mt){wl(mt)}c.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(T=s[x],O=T.instance,$=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(mt){wl(mt)}c.currentTarget=null,f=O}}}}function ye(e,n){var a=n[si];a===void 0&&(a=n[si]=new Set);var s=e+"__bubble";a.has(s)||(Hg(n,e,2,!1),a.add(s))}function Nf(e,n,a){var s=0;n&&(s|=4),Hg(a,e,s,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[Vl]){e[Vl]=!0,Ko.forEach(function(a){a!=="selectionchange"&&(NS.has(a)||Nf(a,!1,e),Nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Nf("selectionchange",!1,n))}}function Hg(e,n,a,s){switch(u_(n)){case 2:var c=sx;break;case 8:c=ox;break;default:c=Zf}a=c.bind(null,n,a,e),c=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Pf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=Fi(T),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue t}T=T.parentNode}}s=s.return}Yd(function(){var $=f,mt=$c(a),Mt=[];t:{var st=Mp.get(e);if(st!==void 0){var ot=nl,ce=e;switch(e){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":ot=Rv;break;case"focusin":ce="focus",ot=ru;break;case"focusout":ce="blur",ot=ru;break;case"beforeblur":case"afterblur":ot=ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Dv;break;case _p:case vp:case Sp:ot=vv;break;case xp:ot=Lv;break;case"scroll":case"scrollend":ot=dv;break;case"wheel":ot=Ov;break;case"copy":case"cut":case"paste":ot=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Jd;break;case"toggle":case"beforetoggle":ot=zv}var ie=(n&4)!==0,He=!ie&&(e==="scroll"||e==="scrollend"),j=ie?st!==null?st+"Capture":null:st;ie=[];for(var X=$,J;X!==null;){var St=X;if(J=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||J===null||j===null||(St=Os(X,j),St!=null&&ie.push(_o(X,St,J))),He)break;X=X.return}0<ie.length&&(st=new ot(st,ce,null,a,mt),Mt.push({event:st,listeners:ie}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",st&&a!==Jc&&(ce=a.relatedTarget||a.fromElement)&&(Fi(ce)||ce[Vn]))break t;if((ot||st)&&(st=mt.window===mt?mt:(st=mt.ownerDocument)?st.defaultView||st.parentWindow:window,ot?(ce=a.relatedTarget||a.toElement,ot=$,ce=ce?Fi(ce):null,ce!==null&&(He=u(ce),ie=ce.tag,ce!==He||ie!==5&&ie!==27&&ie!==6)&&(ce=null)):(ot=null,ce=$),ot!==ce)){if(ie=Kd,St="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Jd,St="onPointerLeave",j="onPointerEnter",X="pointer"),He=ot==null?st:qa(ot),J=ce==null?st:qa(ce),st=new ie(St,X+"leave",ot,a,mt),st.target=He,st.relatedTarget=J,St=null,Fi(mt)===$&&(ie=new ie(j,X+"enter",ce,a,mt),ie.target=J,ie.relatedTarget=He,St=ie),He=St,ot&&ce)e:{for(ie=ot,j=ce,X=0,J=ie;J;J=Jr(J))X++;for(J=0,St=j;St;St=Jr(St))J++;for(;0<X-J;)ie=Jr(ie),X--;for(;0<J-X;)j=Jr(j),J--;for(;X--;){if(ie===j||j!==null&&ie===j.alternate)break e;ie=Jr(ie),j=Jr(j)}ie=null}else ie=null;ot!==null&&Gg(Mt,st,ot,ie,!1),ce!==null&&He!==null&&Gg(Mt,He,ce,ie,!0)}}t:{if(st=$?qa($):window,ot=st.nodeName&&st.nodeName.toLowerCase(),ot==="select"||ot==="input"&&st.type==="file")var jt=sp;else if(ap(st))if(op)jt=qv;else{jt=Xv;var Se=kv}else ot=st.nodeName,!ot||ot.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?$&&Qc($.elementType)&&(jt=sp):jt=Wv;if(jt&&(jt=jt(e,$))){rp(Mt,jt,a,mt);break t}Se&&Se(e,st,$),e==="focusout"&&$&&st.type==="number"&&$.memoizedProps.value!=null&&Dn(st,"number",st.value)}switch(Se=$?qa($):window,e){case"focusin":(ap(Se)||Se.contentEditable==="true")&&(wr=Se,fu=$,Vs=null);break;case"focusout":Vs=fu=wr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,mp(Mt,a,mt);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":mp(Mt,a,mt)}var $t;if(ou)t:{switch(e){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else Rr?np(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&($d&&a.locale!=="ko"&&(Rr||se!=="onCompositionStart"?se==="onCompositionEnd"&&Rr&&($t=Zd()):(da=mt,nu="value"in da?da.value:da.textContent,Rr=!0)),Se=kl($,se),0<Se.length&&(se=new Qd(se,e,null,a,mt),Mt.push({event:se,listeners:Se}),$t?se.data=$t:($t=ip(a),$t!==null&&(se.data=$t)))),($t=Iv?Fv(e,a):Hv(e,a))&&(se=kl($,"onBeforeInput"),0<se.length&&(Se=new Qd("onBeforeInput","beforeinput",null,a,mt),Mt.push({event:Se,listeners:se}),Se.data=$t)),DS(Mt,e,$,a,mt)}Fg(Mt,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(e,a),c!=null&&s.unshift(_o(e,c,f)),c=Os(e,n),c!=null&&s.push(_o(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gg(e,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,O=T.alternate,$=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||$===null||(O=$,c?($=Os(a,f),$!=null&&x.unshift(_o(a,$,O))):c||($=Os(a,f),$!=null&&x.push(_o(a,$,O)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var OS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function Vg(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(PS,"")}function kg(e,n){return n=Vg(n),Vg(e)===n}function Xl(){}function Fe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||kn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&kn(e,""+s);break;case"className":Yt(e,"class",s);break;case"tabIndex":Yt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(e,a,s);break;case"style":Wd(e,s,f);break;case"data":if(n!=="object"){Yt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",c.name,c,null),Fe(e,n,"formEncType",c.formEncType,c,null),Fe(e,n,"formMethod",c.formMethod,c,null),Fe(e,n,"formTarget",c.formTarget,c,null)):(Fe(e,n,"encType",c.encType,c,null),Fe(e,n,"method",c.method,c,null),Fe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Xl);break;case"onScroll":s!=null&&ye("scroll",e);break;case"onScrollEnd":s!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Gt(e,"popover",s);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Gt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fv.get(a)||a,Gt(e,a,s))}}function zf(e,n,a,s,c,f){switch(a){case"style":Wd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?kn(e,s):(typeof s=="number"||typeof s=="bigint")&&kn(e,""+s);break;case"onScroll":s!=null&&ye("scroll",e);break;case"onScrollEnd":s!=null&&ye("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Gt(e,a,s)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,f,x,a,null)}}c&&Fe(e,n,"srcSet",a.srcSet,a,null),s&&Fe(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var T=f=x=c=null,O=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":x=mt;break;case"checked":O=mt;break;case"defaultChecked":$=mt;break;case"value":f=mt;break;case"defaultValue":T=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Fe(e,n,s,mt,a,null)}}Bn(e,f,T,O,$,x,c,!1),xe(e);return;case"select":ye("invalid",e),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Fe(e,n,c,T,a,null)}n=f,a=x,e.multiple=!!s,n!=null?tn(e,!!s,n,!1):a!=null&&tn(e,!!s,a,!0);return;case"textarea":ye("invalid",e),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Fe(e,n,x,T,a,null)}Tr(e,s,c,f),xe(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(e,n,O,s,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(s=0;s<go.length;s++)ye(go[s],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,$,s,a,null)}return;default:if(Qc(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&zf(e,n,mt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Fe(e,n,T,s,a,null))}function zS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,O=null,$=null,mt=null;for(ot in a){var Mt=a[ot];if(a.hasOwnProperty(ot)&&Mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":O=Mt;default:s.hasOwnProperty(ot)||Fe(e,n,ot,null,s,Mt)}}for(var st in s){var ot=s[st];if(Mt=a[st],s.hasOwnProperty(st)&&(ot!=null||Mt!=null))switch(st){case"type":f=ot;break;case"name":c=ot;break;case"checked":$=ot;break;case"defaultChecked":mt=ot;break;case"value":x=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==Mt&&Fe(e,n,st,ot,s,Mt)}}Xe(e,x,T,O,$,mt,f,c);return;case"select":ot=x=T=st=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":ot=O;default:s.hasOwnProperty(f)||Fe(e,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":st=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==O&&Fe(e,n,c,f,s,O)}n=T,a=x,s=ot,st!=null?tn(e,!!a,st,!1):!!s!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":ot=st=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(e,n,T,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":st=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Fe(e,n,x,c,s,f)}En(e,st,ot);return;case"option":for(var ce in a)if(st=a[ce],a.hasOwnProperty(ce)&&st!=null&&!s.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Fe(e,n,ce,null,s,st)}for(O in s)if(st=s[O],ot=a[O],s.hasOwnProperty(O)&&st!==ot&&(st!=null||ot!=null))switch(O){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Fe(e,n,O,st,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)st=a[ie],a.hasOwnProperty(ie)&&st!=null&&!s.hasOwnProperty(ie)&&Fe(e,n,ie,null,s,st);for($ in s)if(st=s[$],ot=a[$],s.hasOwnProperty($)&&st!==ot&&(st!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Fe(e,n,$,st,s,ot)}return;default:if(Qc(n)){for(var He in a)st=a[He],a.hasOwnProperty(He)&&st!==void 0&&!s.hasOwnProperty(He)&&zf(e,n,He,void 0,s,st);for(mt in s)st=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||st===ot||st===void 0&&ot===void 0||zf(e,n,mt,st,s,ot);return}}for(var j in a)st=a[j],a.hasOwnProperty(j)&&st!=null&&!s.hasOwnProperty(j)&&Fe(e,n,j,null,s,st);for(Mt in s)st=s[Mt],ot=a[Mt],!s.hasOwnProperty(Mt)||st===ot||st==null&&ot==null||Fe(e,n,Mt,st,s,ot)}var Bf=null,If=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function Xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function BS(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(e){return Yg.resolve(null).then(e).catch(HS)}:qg;function HS(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Zg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=e.ownerDocument;if(a&1&&vo(x.documentElement),a&2&&vo(x.body),a&4)for(a=x.head,vo(a),x=a.firstChild;x;){var T=x.nextSibling,O=x.nodeName;x[Ri]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(c===0){e.removeChild(f),Ao(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);Ao(n)}function Gf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),Er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function GS(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function VS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function Vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function kS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var kf=null;function jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Kg(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Er(e)}var di=new Map,Qg=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=Q.d;Q.d={f:XS,r:WS,D:qS,C:YS,L:ZS,m:jS,X:QS,S:KS,M:JS};function XS(){var e=$i.f(),n=Bl();return e||n}function WS(e){var n=fa(e);n!==null&&n.tag===5&&n.type==="form"?_m(n):$i.r(e)}var $r=typeof document>"u"?null:document;function Jg(e,n,a){var s=$r;if(s&&typeof n=="string"&&n){var c=_n(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qg.has(c)||(Qg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",e),ln(n),s.head.appendChild(n)))}}function qS(e){$i.D(e),Jg("dns-prefetch",e,null)}function YS(e,n){$i.C(e,n),Jg("preconnect",e,n)}function ZS(e,n,a){$i.L(e,n,a);var s=$r;if(s&&e&&n){var c='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_n(a.imageSizes)+'"]')):c+='[href="'+_n(e)+'"]';var f=c;switch(n){case"style":f=ts(e);break;case"script":f=es(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(So(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),An(n,"link",e),ln(n),s.head.appendChild(n)))}}function jS(e,n){$i.m(e,n);var a=$r;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_n(s)+'"][href="'+_n(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=es(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),An(s,"link",e),ln(s),a.head.appendChild(s)}}}function KS(e,n,a){$i.S(e,n,a);var s=$r;if(s&&e){var c=ha(s).hoistableStyles,f=ts(e);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(So(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Xf(e,a);var O=x=s.createElement("link");ln(O),An(O,"link",e),O._p=new Promise(function($,mt){O.onload=$,O.onerror=mt}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function QS(e,n){$i.X(e,n);var a=$r;if(a&&e){var s=ha(a).hoistableScripts,c=es(e),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(e=g({src:e,async:!0},n),(n=di.get(c))&&Wf(e,n),f=a.createElement("script"),ln(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function JS(e,n){$i.M(e,n);var a=$r;if(a&&e){var s=ha(a).hoistableScripts,c=es(e),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(c))&&Wf(e,n),f=a.createElement("script"),ln(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function $g(e,n,a,s){var c=(c=gt.current)?ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=ha(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ts(a.href);var f=ha(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(So(e)))&&!f._p&&(x.instance=f,x.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||$S(c,e,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=es(a),a=ha(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ts(e){return'href="'+_n(e)+'"'}function So(e){return'link[rel="stylesheet"]['+e+"]"}function t_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function $S(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),ln(n),e.head.appendChild(n))}function es(e){return'[src="'+_n(e)+'"]'}function xo(e){return"script[async]"+e}function e_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_n(a.href)+'"]');if(s)return n.instance=s,ln(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ln(s),An(s,"style",c),Yl(s,a.precedence,e),n.instance=s;case"stylesheet":c=ts(a.href);var f=e.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,ln(f),f;s=t_(a),(c=di.get(c))&&Xf(s,c),f=(e.ownerDocument||e).createElement("link"),ln(f);var x=f;return x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),An(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=es(a.src),(c=e.querySelector(xo(f)))?(n.instance=c,ln(c),c):(s=a,(c=di.get(f))&&(s=g({},a),Wf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),ln(c),An(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,e));return n.instance}function Yl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function n_(e,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ri]||f[Je]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function i_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function tx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function a_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Mo=null;function ex(){}function nx(e,n,a){if(Mo===null)throw Error(r(475));var s=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ts(a.href),f=e.querySelector(So(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=jl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,ln(f);return}f=e.ownerDocument||e,a=t_(a),(c=di.get(c))&&Xf(a,c),f=f.createElement("link"),ln(f);var x=f;x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),An(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=jl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function ix(){if(Mo===null)throw Error(r(475));var e=Mo;return e.stylesheets&&e.count===0&&qf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function qf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(ax,e),Kl=null,jl.call(e))}function ax(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var s=a.get(null);else{a=new Map,Kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=jl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function rx(e,n,a,s,c,f,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.hiddenUpdates=Pt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function r_(e,n,a,s,c,f,x,T,O,$,mt,Mt){return e=new rx(e,n,a,x,T,O,$,Mt),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Du(f),e}function s_(e){return e?(e=Lr,e):Lr}function o_(e,n,a,s,c,f){c=s_(c),s.context===null?s.context=c:s.pendingContext=c,s=ga(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=_a(e,s,n),a!==null&&(ti(a,e,n),Qs(a,e,n))}function l_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Yf(e,n){l_(e,n),(e=e.alternate)&&l_(e,n)}function c_(e){if(e.tag===13){var n=Ur(e,67108864);n!==null&&ti(n,e,67108864),Yf(e,67108864)}}var Ql=!0;function sx(e,n,a,s){var c=P.T;P.T=null;var f=Q.p;try{Q.p=2,Zf(e,n,a,s)}finally{Q.p=f,P.T=c}}function ox(e,n,a,s){var c=P.T;P.T=null;var f=Q.p;try{Q.p=8,Zf(e,n,a,s)}finally{Q.p=f,P.T=c}}function Zf(e,n,a,s){if(Ql){var c=jf(s);if(c===null)Pf(e,n,s,Jl,a),f_(e,s);else if(cx(c,e,n,a,s))s.stopPropagation();else if(f_(e,s),n&4&&-1<lx.indexOf(e)){for(;c!==null;){var f=fa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ht(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var O=1<<31-Lt(x);T.entanglements[1]|=O,x&=~O}Li(f),(Oe&6)===0&&(Pl=rt()+500,mo(0))}}break;case 13:T=Ur(f,2),T!==null&&ti(T,f,2),Bl(),Yf(f,2)}if(f=jf(s),f===null&&Pf(e,n,s,Jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Pf(e,n,s,null,a)}}function jf(e){return e=$c(e),Kf(e)}var Jl=null;function Kf(e){if(Jl=null,e=Fi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function u_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case ut:return 2;case pt:return 8;case yt:case Nt:return 32;case w:return 268435456;default:return 32}default:return 32}}var Qf=!1,Da=null,Ua=null,La=null,Eo=new Map,To=new Map,Na=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=fa(n),n!==null&&c_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function cx(e,n,a,s,c){switch(n){case"focusin":return Da=bo(Da,e,n,a,s,c),!0;case"dragenter":return Ua=bo(Ua,e,n,a,s,c),!0;case"mouseover":return La=bo(La,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,s,c)),!0}return!1}function h_(e){var n=Fi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Qe(e.priority,function(){if(a.tag===13){var s=$n();s=le(s);var c=Ur(a,s);c!==null&&ti(c,a,s),Yf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Jc=s,a.target.dispatchEvent(s),Jc=null}else return n=fa(a),n!==null&&c_(n),e.blockedOn=a,!1;n.shift()}return!0}function d_(e,n,a){$l(e)&&a.delete(n)}function ux(){Qf=!1,Da!==null&&$l(Da)&&(Da=null),Ua!==null&&$l(Ua)&&(Ua=null),La!==null&&$l(La)&&(La=null),Eo.forEach(d_),To.forEach(d_)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Qf||(Qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ux)))}var ec=null;function p_(e){ec!==e&&(ec=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Kf(s||a)===null)continue;break}var f=fa(a);f!==null&&(e.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ao(e){function n(O){return tc(O,e)}Da!==null&&tc(Da,e),Ua!==null&&tc(Ua,e),La!==null&&tc(La,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Na.length;a++){var s=Na[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)h_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[ke]||null;if(typeof f=="function")x||p_(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[ke]||null)T=x.formAction;else if(Kf(c)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),p_(a)}}}function Jf(e){this._internalRoot=e}nc.prototype.render=Jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();o_(a,s,e,n,null,null)},nc.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;o_(e.current,2,null,e,null,null),Bl(),n[Vn]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=oe();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&h_(e)}};var m_=t.version;if(m_!=="19.1.1")throw Error(r(527,m_,"19.1.1"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var fx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{nt=ic.inject(fx),it=ic}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Um,f=Lm,x=Nm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=r_(e,1,!1,null,null,a,s,c,f,x,T,null),e[Vn]=n.current,Of(e),new Jf(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Um,x=Lm,T=Nm,O=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=r_(e,1,!0,n,a??null,s,c,f,x,T,O,$),n.context=s_(null),a=n.current,s=$n(),s=le(s),c=ga(s),c.callback=null,_a(a,c,s),a=s,n.current.lanes=a,kt(n,a),Li(n),e[Vn]=n.current,Of(e),new nc(n)},wo.version="19.1.1",wo}var b_;function Mx(){if(b_)return eh.exports;b_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),eh.exports=xx(),eh.exports}var yx=Mx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="179",Ex=0,A_=1,Tx=2,N0=1,bx=2,ra=3,Wa=0,wn=1,sa=2,Va=0,Es=1,Fc=2,R_=3,w_=4,Ax=5,_r=100,Rx=101,wx=102,Cx=103,Dx=104,Ux=200,Lx=201,Nx=202,Ox=203,Hh=204,Gh=205,Px=206,zx=207,Bx=208,Ix=209,Fx=210,Hx=211,Gx=212,Vx=213,kx=214,Vh=0,kh=1,Xh=2,As=3,Wh=4,qh=5,Yh=6,Zh=7,Ld=0,Xx=1,Wx=2,ka=0,qx=1,Yx=2,Zx=3,jx=4,Kx=5,Qx=6,Jx=7,O0=300,Rs=301,ws=302,Hc=303,jh=304,Yc=306,Kh=1e3,Rn=1001,Qh=1002,bi=1003,$x=1004,ac=1005,yn=1006,rh=1007,Sr=1008,zi=1009,P0=1010,z0=1011,Ho=1012,Nd=1013,xr=1014,oa=1015,Wo=1016,Od=1017,Pd=1018,Go=1020,B0=35902,I0=1021,F0=1022,Ti=1023,Vo=1026,ko=1027,H0=1028,zd=1029,G0=1030,Bd=1031,Id=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,rd=37808,sd=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,Bc=36492,Sd=36494,xd=36495,V0=36283,Md=36284,yd=36285,Ed=36286,tM=3200,eM=3201,k0=0,nM=1,Ga="",ii="srgb",Cs="srgb-linear",Gc="linear",Ge="srgb",ns=7680,C_=519,iM=512,aM=513,rM=514,X0=515,sM=516,oM=517,lM=518,cM=519,Td=35044,D_="300 es",Pi=2e3,Vc=2001;class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,bd=180/Math.PI;function Xa(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Te(o,t,i){return Math.max(t,Math.min(i,o))}function uM(o,t){return(o%t+t)%t}function oh(o,t,i){return(1-i)*o+i*t}function Oi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=A;return}if(v!==A||m!==S||p!==M||g!==b){let y=1-d;const _=m*S+p*M+g*b+v*A,F=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const z=Math.sqrt(N),G=Math.atan2(z,_*F);y=Math.sin(y*G)/z,d=Math.sin(d*G)/z}const U=d*F;if(m=m*y+S*U,p=p*y+M*U,g=g*y+b*U,v=v*y+A*U,y===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=z,p*=z,g*=z,v*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+g*v+m*M-p*S,t[i+1]=m*b+g*S+p*v-d*M,t[i+2]=p*b+g*M+d*S-m*v,t[i+3]=g*b-d*v-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*v+p*M*b,this._y=p*M*v-S*g*b,this._z=p*g*b+S*M*v,this._w=p*g*v-S*M*b;break;case"YXZ":this._x=S*g*v+p*M*b,this._y=p*M*v-S*g*b,this._z=p*g*b-S*M*v,this._w=p*g*v+S*M*b;break;case"ZXY":this._x=S*g*v-p*M*b,this._y=p*M*v+S*g*b,this._z=p*g*b+S*M*v,this._w=p*g*v-S*M*b;break;case"ZYX":this._x=S*g*v-p*M*b,this._y=p*M*v+S*g*b,this._z=p*g*b-S*M*v,this._w=p*g*v+S*M*b;break;case"YZX":this._x=S*g*v+p*M*b,this._y=p*M*v+S*g*b,this._z=p*g*b-S*M*v,this._w=p*g*v-S*M*b;break;case"XZY":this._x=S*g*v-p*M*b,this._y=p*M*v-S*g*b,this._z=p*g*b+S*M*v,this._w=p*g*v+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(U_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(U_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new tt,U_=new qo;class he{constructor(t,i,r,l,u,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],M=r[5],b=r[8],A=l[0],y=l[3],_=l[6],F=l[1],N=l[4],U=l[7],z=l[2],G=l[5],V=l[8];return u[0]=h*A+d*F+m*z,u[3]=h*y+d*N+m*G,u[6]=h*_+d*U+m*V,u[1]=p*A+g*F+v*z,u[4]=p*y+g*N+v*G,u[7]=p*_+g*U+v*V,u[2]=S*A+M*F+b*z,u[5]=S*y+M*N+b*G,u[8]=S*_+M*U+b*V,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,S=d*m-g*u,M=p*u-h*m,b=i*v+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=S*A,t[4]=(g*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new he;function W0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Xo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fM(){const o=Xo("canvas");return o.style.display="block",o}const L_={};function Ts(o){o in L_||(L_[o]=!0,console.warn(o))}function hM(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const N_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dM(){const o={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ge&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Gc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Cs]:{primaries:t,whitePoint:r,transfer:Gc,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const De=dM();function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class pM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{is===void 0&&(is=Xo("canvas")),is.width=t.width,is.height=t.height;const l=is.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=is}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xo("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=la(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mM=0;class Fd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Xa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(uh(l[h].image)):u.push(uh(l[h]))}else u=uh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function uh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;const fh=new tt;class Pn extends Us{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=Rn,l=Rn,u=yn,h=Sr,d=Ti,m=zi,p=Pn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Xa(),this.name="",this.source=new Fd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=O0;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],S=m[1],M=m[5],b=m[9],A=m[2],y=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+A)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(M+1)/2,z=(_+1)/2,G=(g+S)/4,V=(v+A)/4,Y=(b+y)/4;return N>U&&N>z?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=V/r):U>z?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=G/l,u=Y/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=V/u,l=Y/u),this.set(r,l,u,i),this}let F=Math.sqrt((y-b)*(y-b)+(v-A)*(v-A)+(S-g)*(S-g));return Math.abs(F)<.001&&(F=1),this.x=(y-b)/F,this.y=(v-A)/F,this.z=(S-g)/F,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends Us{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Fd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends _M{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class q0 extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),sc.subVectors(this.max,Co),as.subVectors(t.a,Co),rs.subVectors(t.b,Co),ss.subVectors(t.c,Co),Pa.subVectors(rs,as),za.subVectors(ss,rs),cr.subVectors(as,ss);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-cr.z,cr.y,Pa.z,0,-Pa.x,za.z,0,-za.x,cr.z,0,-cr.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-cr.y,cr.x,0];return!hh(i,as,rs,ss,sc)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,as,rs,ss,sc))?!1:(oc.crossVectors(Pa,za),i=[oc.x,oc.y,oc.z],hh(i,as,rs,ss,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Mi=new tt,rc=new Yo,as=new tt,rs=new tt,ss=new tt,Pa=new tt,za=new tt,cr=new tt,Co=new tt,sc=new tt,oc=new tt,ur=new tt;function hh(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ur.fromArray(o,u);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),m=t.dot(ur),p=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const SM=new Yo,Do=new tt,dh=new tt;class Zo{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):SM.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(dh)),this.expandByPoint(Do.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new tt,ph=new tt,lc=new tt,Ba=new tt,mh=new tt,cc=new tt,gh=new tt;class Zc{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ph.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(ph);const u=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Ba.dot(this.direction),m=-Ba.dot(lc),p=Ba.lengthSq(),g=Math.abs(1-h*h);let v,S,M,b;if(g>0)if(v=h*m-d,S=h*d-m,b=u*g,v>=0)if(S>=-b)if(S<=b){const A=1/g;v*=A,S*=A,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ph).addScaledVector(lc,S),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(u=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(u=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,u){mh.subVectors(i,t),cc.subVectors(r,t),gh.crossVectors(mh,cc);let h=this.direction.dot(gh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Ba,cc));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Ba));if(p<0||m+p>h)return null;const g=-d*Ba.dot(gh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,u,h,d,m,p,g,v,S,M,b,A,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,v,S,M,b,A,y)}set(t,i,r,l,u,h,d,m,p,g,v,S,M,b,A,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=M,_[7]=b,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/os.setFromMatrixColumn(t,0).length(),u=1/os.setFromMatrixColumn(t,1).length(),h=1/os.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=h*g,M=h*v,b=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,M=m*v,b=p*g,A=p*v;i[0]=S+A*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=A+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,M=m*v,b=p*g,A=p*v;i[0]=S-A*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=A-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,M=h*v,b=d*g,A=d*v;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+A,i[1]=m*v,i[5]=A*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=A-S*v,i[8]=b*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+b,i[10]=S-A*v}else if(t.order==="XZY"){const S=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+A,i[5]=h*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=A*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xM,t,MM)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ia.crossVectors(r,ei),Ia.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ia.crossVectors(r,ei)),Ia.normalize(),uc.crossVectors(ei,Ia),l[0]=Ia.x,l[4]=uc.x,l[8]=ei.x,l[1]=Ia.y,l[5]=uc.y,l[9]=ei.y,l[2]=Ia.z,l[6]=uc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],M=r[13],b=r[2],A=r[6],y=r[10],_=r[14],F=r[3],N=r[7],U=r[11],z=r[15],G=l[0],V=l[4],Y=l[8],D=l[12],C=l[1],B=l[5],ft=l[9],ht=l[13],_t=l[2],vt=l[6],P=l[10],Q=l[14],Z=l[3],At=l[7],L=l[11],et=l[15];return u[0]=h*G+d*C+m*_t+p*Z,u[4]=h*V+d*B+m*vt+p*At,u[8]=h*Y+d*ft+m*P+p*L,u[12]=h*D+d*ht+m*Q+p*et,u[1]=g*G+v*C+S*_t+M*Z,u[5]=g*V+v*B+S*vt+M*At,u[9]=g*Y+v*ft+S*P+M*L,u[13]=g*D+v*ht+S*Q+M*et,u[2]=b*G+A*C+y*_t+_*Z,u[6]=b*V+A*B+y*vt+_*At,u[10]=b*Y+A*ft+y*P+_*L,u[14]=b*D+A*ht+y*Q+_*et,u[3]=F*G+N*C+U*_t+z*Z,u[7]=F*V+N*B+U*vt+z*At,u[11]=F*Y+N*ft+U*P+z*L,u[15]=F*D+N*ht+U*Q+z*et,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],S=t[10],M=t[14],b=t[3],A=t[7],y=t[11],_=t[15];return b*(+u*m*v-l*p*v-u*d*S+r*p*S+l*d*M-r*m*M)+A*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*S+l*h*v-r*h*S+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],S=t[10],M=t[11],b=t[12],A=t[13],y=t[14],_=t[15],F=v*y*p-A*S*p+A*m*M-d*y*M-v*m*_+d*S*_,N=b*S*p-g*y*p-b*m*M+h*y*M+g*m*_-h*S*_,U=g*A*p-b*v*p+b*d*M-h*A*M-g*d*_+h*v*_,z=b*v*m-g*A*m-b*d*S+h*A*S+g*d*y-h*v*y,G=i*F+r*N+l*U+u*z;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/G;return t[0]=F*V,t[1]=(A*S*u-v*y*u-A*l*M+r*y*M+v*l*_-r*S*_)*V,t[2]=(d*y*u-A*m*u+A*l*p-r*y*p-d*l*_+r*m*_)*V,t[3]=(v*m*u-d*S*u-v*l*p+r*S*p+d*l*M-r*m*M)*V,t[4]=N*V,t[5]=(g*y*u-b*S*u+b*l*M-i*y*M-g*l*_+i*S*_)*V,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*V,t[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*V,t[8]=U*V,t[9]=(b*v*u-g*A*u-b*r*M+i*A*M+g*r*_-i*v*_)*V,t[10]=(h*A*u-b*d*u+b*r*p-i*A*p-h*r*_+i*d*_)*V,t[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*M-i*d*M)*V,t[12]=z*V,t[13]=(g*A*l-b*v*l+b*r*S-i*A*S-g*r*y+i*v*y)*V,t[14]=(b*d*l-h*A*l-b*r*m+i*A*m+h*r*y-i*d*y)*V,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*S+i*d*S)*V,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,S=u*p,M=u*g,b=u*v,A=h*g,y=h*v,_=d*v,F=m*p,N=m*g,U=m*v,z=r.x,G=r.y,V=r.z;return l[0]=(1-(A+_))*z,l[1]=(M+U)*z,l[2]=(b-N)*z,l[3]=0,l[4]=(M-U)*G,l[5]=(1-(S+_))*G,l[6]=(y+F)*G,l[7]=0,l[8]=(b+N)*V,l[9]=(y-F)*V,l[10]=(1-(S+A))*V,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/u,g=1/h,v=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=v,yi.elements[9]*=v,yi.elements[10]*=v,i.setFromRotationMatrix(yi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=Pi,m=!1){const p=this.elements,g=2*u/(i-t),v=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let b,A;if(m)b=u/(h-u),A=h*u/(h-u);else if(d===Pi)b=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Vc)b=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=Pi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,A;if(m)b=1/(h-u),A=h/(h-u);else if(d===Pi)b=-2/(h-u),A=-(h+u)/(h-u);else if(d===Vc)b=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const os=new tt,yi=new Ye,xM=new tt(0,0,0),MM=new tt(1,1,1),Ia=new tt,uc=new tt,ei=new tt,P_=new Ye,z_=new qo;class Bi{constructor(t=0,i=0,r=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return P_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return z_.setFromEuler(this),this.setFromQuaternion(z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yM=0;const B_=new tt,ls=new qo,na=new Ye,fc=new tt,Uo=new tt,EM=new tt,TM=new qo,I_=new tt(1,0,0),F_=new tt(0,1,0),H_=new tt(0,0,1),G_={type:"added"},bM={type:"removed"},cs={type:"childadded",child:null},_h={type:"childremoved",child:null};class pn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new tt,i=new Bi,r=new qo,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new he}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(F_,t)}rotateZ(t){return this.rotateOnAxis(H_,t)}translateOnAxis(t,i){return B_.copy(t).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(F_,t)}translateZ(t){return this.translateOnAxis(H_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Uo,fc,this.up):na.lookAt(fc,Uo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ls.setFromRotationMatrix(na),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(G_),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bM),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(G_),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,EM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,TM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}pn.DEFAULT_UP=new tt(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new tt,ia=new tt,vh=new tt,aa=new tt,us=new tt,fs=new tt,V_=new tt,Sh=new tt,xh=new tt,Mh=new tt,yh=new an,Eh=new an,Th=new an;class gi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ei.subVectors(l,i),ia.subVectors(r,i),vh.subVectors(t,i);const h=Ei.dot(Ei),d=Ei.dot(ia),m=Ei.dot(vh),p=ia.dot(ia),g=ia.dot(vh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return yh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),yh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,r),Th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(yh,u.x),h.addScaledVector(Eh,u.y),h.addScaledVector(Th,u.z),h}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),ia.subVectors(t,i),Ei.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Ei.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;us.subVectors(l,r),fs.subVectors(u,r),Sh.subVectors(t,r);const m=us.dot(Sh),p=fs.dot(Sh);if(m<=0&&p<=0)return i.copy(r);xh.subVectors(t,l);const g=us.dot(xh),v=fs.dot(xh);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(us,h);Mh.subVectors(t,u);const M=us.dot(Mh),b=fs.dot(Mh);if(b>=0&&M<=b)return i.copy(u);const A=M*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(fs,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return V_.subVectors(u,l),d=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(V_,d);const _=1/(y+A+S);return h=A*_,d=S*_,i.copy(r).addScaledVector(us,h).addScaledVector(fs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},hc={h:0,s:0,l:0};function bh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=uM(t,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=bh(h,u,t+1/3),this.g=bh(h,u,t),this.b=bh(h,u,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=ii){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ii){const r=Y0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return De.workingToColorSpace(On.copy(this),t),Math.round(Te(On.r*255,0,255))*65536+Math.round(Te(On.g*255,0,255))*256+Math.round(Te(On.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,u=On.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=ii){De.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==ii?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(hc);const r=oh(Fa.h,hc.h,i),l=oh(Fa.s,hc.s,i),u=oh(Fa.l,hc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new be;be.NAMES=Y0;let AM=0;class Ii extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Es,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hh&&(r.blendSrc=this.blendSrc),this.blendDst!==Gh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kc extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new tt,dc=new ve;let RM=0;class ri{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Td,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Td&&(t.usage=this.usage),t}}class Z0 extends ri{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class j0 extends ri{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ai extends ri{constructor(t,i,r){super(new Float32Array(t),i,r)}}let wM=0;const pi=new Ye,Ah=new pn,hs=new tt,ni=new Yo,Lo=new Yo,Mn=new tt;class Gn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W0(t)?j0:Z0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,r){return pi.makeTranslation(t,i,r),this.applyMatrix4(pi),this}scale(t,i,r){return pi.makeScale(t,i,r),this.applyMatrix4(pi),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ai(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ni.min,Lo.min),ni.expandByPoint(Mn),Mn.addVectors(ni.max,Lo.max),ni.expandByPoint(Mn)):(ni.expandByPoint(Lo.min),ni.expandByPoint(Lo.max))}ni.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Mn.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(t,p),Mn.add(hs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<r.count;Y++)d[Y]=new tt,m[Y]=new tt;const p=new tt,g=new tt,v=new tt,S=new ve,M=new ve,b=new ve,A=new tt,y=new tt;function _(Y,D,C){p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),S.fromBufferAttribute(u,Y),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,C),g.sub(p),v.sub(p),M.sub(S),b.sub(S);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(B),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(B),d[Y].add(A),d[D].add(A),d[C].add(A),m[Y].add(y),m[D].add(y),m[C].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let Y=0,D=F.length;Y<D;++Y){const C=F[Y],B=C.start,ft=C.count;for(let ht=B,_t=B+ft;ht<_t;ht+=3)_(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}const N=new tt,U=new tt,z=new tt,G=new tt;function V(Y){z.fromBufferAttribute(l,Y),G.copy(z);const D=d[Y];N.copy(D),N.sub(z.multiplyScalar(z.dot(D))).normalize(),U.crossVectors(G,D);const B=U.dot(m[Y])<0?-1:1;h.setXYZW(Y,N.x,N.y,N.z,B)}for(let Y=0,D=F.length;Y<D;++Y){const C=F[Y],B=C.start,ft=C.count;for(let ht=B,_t=B+ft;ht<_t;ht+=3)V(t.getX(ht+0)),V(t.getX(ht+1)),V(t.getX(ht+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,g=new tt,v=new tt;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),A=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let _=0;_<g;_++)S[b++]=p[M++]}return new ri(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const S=p[g],M=t(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let S=0,M=v.length;S<M;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new Ye,fr=new Zc,pc=new Zo,X_=new tt,mc=new tt,gc=new tt,_c=new tt,Rh=new tt,vc=new tt,W_=new tt,Sc=new tt;class ai extends pn{constructor(t=new Gn,i=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){vc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(Rh.fromBufferAttribute(v,t),h?vc.addScaledVector(Rh,g):vc.addScaledVector(Rh.sub(i),g))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(u),fr.copy(t.ray).recast(t.near),!(pc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(pc,X_)===null||fr.origin.distanceToSquared(X_)>(t.far-t.near)**2))&&(k_.copy(u).invert(),fr.copy(t.ray).applyMatrix4(k_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],_=h[y.materialIndex],F=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=F,z=N;U<z;U+=3){const G=d.getX(U),V=d.getX(U+1),Y=d.getX(U+2);l=xc(this,_,t,r,p,g,v,G,V,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=b,_=A;y<_;y+=3){const F=d.getX(y),N=d.getX(y+1),U=d.getX(y+2);l=xc(this,h,t,r,p,g,v,F,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],_=h[y.materialIndex],F=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=F,z=N;U<z;U+=3){const G=U,V=U+1,Y=U+2;l=xc(this,_,t,r,p,g,v,G,V,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=b,_=A;y<_;y+=3){const F=y,N=y+1,U=y+2;l=xc(this,h,t,r,p,g,v,F,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function CM(o,t,i,r,l,u,h,d){let m;if(t.side===wn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Wa,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function xc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,mc),o.getVertexPosition(m,gc),o.getVertexPosition(p,_c);const g=CM(o,t,i,r,mc,gc,_c,W_);if(g){const v=new tt;gi.getBarycoord(W_,mc,gc,_c,v),l&&(g.uv=gi.getInterpolatedAttribute(l,d,m,p,v,new ve)),u&&(g.uv1=gi.getInterpolatedAttribute(u,d,m,p,v,new ve)),h&&(g.normal=gi.getInterpolatedAttribute(h,d,m,p,v,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new tt,materialIndex:0};gi.getNormal(mc,gc,_c,S.normal),g.face=S,g.barycoord=v}return g}class jo extends Gn{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ai(p,3)),this.setAttribute("normal",new Ai(g,3)),this.setAttribute("uv",new Ai(v,2));function b(A,y,_,F,N,U,z,G,V,Y,D){const C=U/V,B=z/Y,ft=U/2,ht=z/2,_t=G/2,vt=V+1,P=Y+1;let Q=0,Z=0;const At=new tt;for(let L=0;L<P;L++){const et=L*B-ht;for(let Tt=0;Tt<vt;Tt++){const Dt=Tt*C-ft;At[A]=Dt*F,At[y]=et*N,At[_]=_t,p.push(At.x,At.y,At.z),At[A]=0,At[y]=0,At[_]=G>0?1:-1,g.push(At.x,At.y,At.z),v.push(Tt/V),v.push(1-L/Y),Q+=1}}for(let L=0;L<Y;L++)for(let et=0;et<V;et++){const Tt=S+et+vt*L,Dt=S+et+vt*(L+1),Ft=S+(et+1)+vt*(L+1),at=S+(et+1)+vt*L;m.push(Tt,Dt,at),m.push(Dt,Ft,at),Z+=6}d.addGroup(M,Z,D),M+=Z,S+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const r=Ds(o[i]);for(const l in r)t[l]=r[l]}return t}function DM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function K0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const UM={clone:Ds,merge:Hn};var LM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LM,this.fragmentShader=NM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=DM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Q0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new tt,q_=new ve,Y_=new ve;class mi extends Q0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,q_,Y_),i.subVectors(Y_,q_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class OM extends pn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(ds,ps,t,i);l.layers=this.layers,this.add(l);const u=new mi(ds,ps,t,i);u.layers=this.layers,this.add(u);const h=new mi(ds,ps,t,i);h.layers=this.layers,this.add(h);const d=new mi(ds,ps,t,i);d.layers=this.layers,this.add(d);const m=new mi(ds,ps,t,i);m.layers=this.layers,this.add(m);const p=new mi(ds,ps,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,S,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class J0 extends Pn{constructor(t=[],i=Rs,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PM extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new J0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new ca({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:Va});u.uniforms.tEquirect.value=i;const h=new ai(l,u),d=i.minFilter;return i.minFilter===Sr&&(i.minFilter=yn),new OM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Ms extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zM={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,r),_=this._getHandJoint(p,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ms;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class BM extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Td,this.updateRanges=[],this.version=0,this.uuid=Xa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new tt;class Xc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Oi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Oi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Oi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Oi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new ri(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $0 extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const No=new tt,gs=new tt,_s=new tt,vs=new ve,Oo=new ve,tv=new Ye,Mc=new tt,Po=new tt,yc=new tt,Z_=new ve,Ch=new ve,j_=new ve;class FM extends pn{constructor(t=new $0){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Gn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new IM(i,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Xc(r,3,0,!1)),ms.setAttribute("uv",new Xc(r,2,3,!1))}this.geometry=ms,this.material=t,this.center=new ve(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),tv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const h=this.center;Ec(Mc.set(-.5,-.5,0),_s,h,gs,l,u),Ec(Po.set(.5,-.5,0),_s,h,gs,l,u),Ec(yc.set(.5,.5,0),_s,h,gs,l,u),Z_.set(0,0),Ch.set(1,0),j_.set(1,1);let d=t.ray.intersectTriangle(Mc,Po,yc,!1,No);if(d===null&&(Ec(Po.set(-.5,.5,0),_s,h,gs,l,u),Ch.set(0,1),d=t.ray.intersectTriangle(Mc,yc,Po,!1,No),d===null))return;const m=t.ray.origin.distanceTo(No);m<t.near||m>t.far||i.push({distance:m,point:No.clone(),uv:gi.getInterpolation(No,Mc,Po,yc,Z_,Ch,j_,new ve),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ec(o,t,i,r,l,u){vs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Oo.x=u*vs.x-l*vs.y,Oo.y=l*vs.x+u*vs.y):Oo.copy(vs),o.copy(t),o.x+=Oo.x,o.y+=Oo.y,o.applyMatrix4(tv)}const Dh=new tt,HM=new tt,GM=new he;class mr{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Dh.subVectors(r,i).cross(HM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Dh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||GM.getNormalMatrix(t),l=this.coplanarPoint(Dh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Zo,VM=new ve(.5,.5),Tc=new tt;class Gd{constructor(t=new mr,i=new mr,r=new mr,l=new mr,u=new mr,h=new mr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Pi,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],S=u[6],M=u[7],b=u[8],A=u[9],y=u[10],_=u[11],F=u[12],N=u[13],U=u[14],z=u[15];if(l[0].setComponents(p-h,M-g,_-b,z-F).normalize(),l[1].setComponents(p+h,M+g,_+b,z+F).normalize(),l[2].setComponents(p+d,M+v,_+A,z+N).normalize(),l[3].setComponents(p-d,M-v,_-A,z-N).normalize(),r)l[4].setComponents(m,S,y,U).normalize(),l[5].setComponents(p-m,M-S,_-y,z-U).normalize();else if(l[4].setComponents(p-m,M-S,_-y,z-U).normalize(),i===Pi)l[5].setComponents(p+m,M+S,_+y,z+U).normalize();else if(i===Vc)l[5].setComponents(m,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);const i=VM.distanceTo(t.center);return hr.radius=.7071067811865476+i,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bo extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wc=new tt,qc=new tt,K_=new Ye,zo=new Zc,bc=new Zo,Uh=new tt,Q_=new tt;class Ac extends pn{constructor(t=new Gn,i=new Bo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Wc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wc.distanceTo(qc);t.setAttribute("lineDistance",new Ai(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,t.ray.intersectsSphere(bc)===!1)return;K_.copy(l).invert(),zo.copy(t.ray).applyMatrix4(K_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=p){const _=g.getX(A),F=g.getX(A+1),N=Rc(this,t,zo,m,_,F,A);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(b-1),y=g.getX(M),_=Rc(this,t,zo,m,A,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=p){const _=Rc(this,t,zo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Rc(this,t,zo,m,b-1,M,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Rc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(Wc.fromBufferAttribute(d,l),qc.fromBufferAttribute(d,u),i.distanceSqToSegment(Wc,qc,Uh,Q_)>r)return;Uh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Uh);if(!(p<t.near||p>t.far))return{distance:p,point:Q_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Ad extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const J_=new Ye,Rd=new Zc,wc=new Zo,Cc=new tt;class $_ extends pn{constructor(t=new Gn,i=new Ad){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(l),wc.radius+=u,t.ray.intersectsSphere(wc)===!1)return;J_.copy(l).invert(),Rd.copy(t.ray).applyMatrix4(J_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,A=M;b<A;b++){const y=p.getX(b);Cc.fromBufferAttribute(v,y),t0(Cc,y,m,l,t,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=S,A=M;b<A;b++)Cc.fromBufferAttribute(v,b),t0(Cc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function t0(o,t,i,r,l,u,h){const d=Rd.distanceSqToPoint(o);if(d<i){const m=new tt;Rd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class e0 extends Pn{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ev extends Pn{constructor(t,i,r=xr,l,u,h,d=bi,m=bi,p,g=Vo,v=1){if(g!==Vo&&g!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jc extends Gn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,S=i/m,M=[],b=[],A=[],y=[];for(let _=0;_<g;_++){const F=_*S-h;for(let N=0;N<p;N++){const U=N*v-u;b.push(U,-F,0),A.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<d;F++){const N=F+p*_,U=F+p*(_+1),z=F+1+p*(_+1),G=F+1+p*_;M.push(N,U,G),M.push(U,z,G)}this.setIndex(M),this.setAttribute("position",new Ai(b,3)),this.setAttribute("normal",new Ai(A,3)),this.setAttribute("uv",new Ai(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fo extends Gn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new tt,S=new tt,M=[],b=[],A=[],y=[];for(let _=0;_<=r;_++){const F=[],N=_/r;let U=0;_===0&&h===0?U=.5/i:_===r&&m===Math.PI&&(U=-.5/i);for(let z=0;z<=i;z++){const G=z/i;v.x=-t*Math.cos(l+G*u)*Math.sin(h+N*d),v.y=t*Math.cos(h+N*d),v.z=t*Math.sin(l+G*u)*Math.sin(h+N*d),b.push(v.x,v.y,v.z),S.copy(v).normalize(),A.push(S.x,S.y,S.z),y.push(G+U,1-N),F.push(p++)}g.push(F)}for(let _=0;_<r;_++)for(let F=0;F<i;F++){const N=g[_][F+1],U=g[_][F],z=g[_+1][F],G=g[_+1][F+1];(_!==0||h>0)&&M.push(N,U,G),(_!==r-1||m<Math.PI)&&M.push(U,z,G)}this.setIndex(M),this.setAttribute("position",new Ai(b,3)),this.setAttribute("normal",new Ai(A,3)),this.setAttribute("uv",new Ai(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kM extends Ii{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k0,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class XM extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WM extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class qM{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,S=p.length;v<S;v+=2){const M=p[v],b=p[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const YM=new qM;class Vd{constructor(t){this.manager=t!==void 0?t:YM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Vd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ss=new WeakMap;class ZM extends Vd{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=Lh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let v=Ss.get(h);v===void 0&&(v=[],Ss.set(h,v)),v.push({onLoad:i,onError:l})}return h}const d=Xo("img");function m(){g(),i&&i(this);const v=Ss.get(this)||[];for(let S=0;S<v.length;S++){const M=v[S];M.onLoad&&M.onLoad(this)}Ss.delete(this),u.manager.itemEnd(t)}function p(v){g(),l&&l(v),Lh.remove(`image:${t}`);const S=Ss.get(this)||[];for(let M=0;M<S.length;M++){const b=S[M];b.onError&&b.onError(v)}Ss.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Lh.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class n0 extends Vd{constructor(t){super(t)}load(t,i,r,l){const u=new Pn,h=new ZM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class nv extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Nh=new Ye,i0=new tt,a0=new tt;class jM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;i0.setFromMatrixPosition(t.matrixWorld),i.position.copy(i0),a0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(a0),i.updateMatrixWorld(),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iv extends Q0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class KM extends jM{constructor(){super(new iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r0 extends nv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new KM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class QM extends nv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class JM extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const s0=new Ye;class $M{constructor(t,i,r=0,l=1/0){this.ray=new Zc(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return s0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s0),this}intersectObject(t,i=!0,r=[]){return wd(t,this,r,i),r.sort(o0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)wd(t[l],this,r,i);return r.sort(o0),r}}function o0(o,t){return o.distance-t.distance}function wd(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)wd(u[h],t,i,!0)}}function l0(o,t,i,r){const l=ty(r);switch(i){case I0:return o*t;case H0:return o*t/l.components*l.byteLength;case zd:return o*t/l.components*l.byteLength;case G0:return o*t*2/l.components*l.byteLength;case Bd:return o*t*2/l.components*l.byteLength;case F0:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Id:return o*t*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $h:case ed:return Math.max(o,16)*Math.max(t,8)/4;case Jh:case td:return Math.max(o,8)*Math.max(t,8)/2;case nd:case id:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ad:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ld:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ud:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case fd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case _d:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Bc:case Sd:case xd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case V0:case Md:return Math.ceil(o/4)*Math.ceil(t/4)*8;case yd:case Ed:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ty(o){switch(o){case zi:case P0:return{byteLength:1,components:1};case Ho:case z0:case Wo:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case xr:case Nd:case oa:return{byteLength:4,components:1};case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ey(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<v.length;M++){const b=v[S],A=v[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++S,v[S]=A)}v.length=S+1;for(let M=0,b=v.length;M<b;M++){const A=v[M];o.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,my=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,by=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ry=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ET=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ay,alphamap_pars_fragment:ry,alphatest_fragment:sy,alphatest_pars_fragment:oy,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:fy,begin_vertex:hy,beginnormal_vertex:dy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:xy,color_fragment:My,color_pars_fragment:yy,color_pars_vertex:Ey,color_vertex:Ty,common:by,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ry,displacementmap_pars_vertex:wy,displacementmap_vertex:Cy,emissivemap_fragment:Dy,emissivemap_pars_fragment:Uy,colorspace_fragment:Ly,colorspace_pars_fragment:Ny,envmap_fragment:Oy,envmap_common_pars_fragment:Py,envmap_pars_fragment:zy,envmap_pars_vertex:By,envmap_physical_pars_fragment:Zy,envmap_vertex:Iy,fog_vertex:Fy,fog_pars_vertex:Hy,fog_fragment:Gy,fog_pars_fragment:Vy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Xy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:qy,lights_pars_begin:Yy,lights_toon_fragment:jy,lights_toon_pars_fragment:Ky,lights_phong_fragment:Qy,lights_phong_pars_fragment:Jy,lights_physical_fragment:$y,lights_physical_pars_fragment:tE,lights_fragment_begin:eE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:oE,map_fragment:lE,map_pars_fragment:cE,map_particle_fragment:uE,map_particle_pars_fragment:fE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:dE,morphinstance_vertex:pE,morphcolor_vertex:mE,morphnormal_vertex:gE,morphtarget_pars_vertex:_E,morphtarget_vertex:vE,normal_fragment_begin:SE,normal_fragment_maps:xE,normal_pars_fragment:ME,normal_pars_vertex:yE,normal_vertex:EE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:bE,clearcoat_normal_fragment_maps:AE,clearcoat_pars_fragment:RE,iridescence_pars_fragment:wE,opaque_fragment:CE,packing:DE,premultiplied_alpha_fragment:UE,project_vertex:LE,dithering_fragment:NE,dithering_pars_fragment:OE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:IE,shadowmap_vertex:FE,shadowmask_pars_fragment:HE,skinbase_vertex:GE,skinning_pars_vertex:VE,skinning_vertex:kE,skinnormal_vertex:XE,specularmap_fragment:WE,specularmap_pars_fragment:qE,tonemapping_fragment:YE,tonemapping_pars_fragment:ZE,transmission_fragment:jE,transmission_pars_fragment:KE,uv_pars_fragment:QE,uv_pars_vertex:JE,uv_vertex:$E,worldpos_vertex:tT,background_vert:eT,background_frag:nT,backgroundCube_vert:iT,backgroundCube_frag:aT,cube_vert:rT,cube_frag:sT,depth_vert:oT,depth_frag:lT,distanceRGBA_vert:cT,distanceRGBA_frag:uT,equirect_vert:fT,equirect_frag:hT,linedashed_vert:dT,linedashed_frag:pT,meshbasic_vert:mT,meshbasic_frag:gT,meshlambert_vert:_T,meshlambert_frag:vT,meshmatcap_vert:ST,meshmatcap_frag:xT,meshnormal_vert:MT,meshnormal_frag:yT,meshphong_vert:ET,meshphong_frag:TT,meshphysical_vert:bT,meshphysical_frag:AT,meshtoon_vert:RT,meshtoon_frag:wT,points_vert:CT,points_frag:DT,shadow_vert:UT,shadow_frag:LT,sprite_vert:NT,sprite_frag:OT},Wt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ni={basic:{uniforms:Hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Hn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Hn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Hn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Hn([Wt.points,Wt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Hn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Hn([Wt.common,Wt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Hn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Hn([Wt.sprite,Wt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Hn([Wt.common,Wt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Hn([Wt.lights,Wt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ni.physical={uniforms:Hn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Dc={r:0,b:0,g:0},dr=new Bi,PT=new Ye;function zT(o,t,i,r,l,u,h){const d=new be(0);let m=u===!0?0:1,p,g,v=null,S=0,M=null;function b(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function A(N){let U=!1;const z=b(N);z===null?_(d,m):z&&z.isColor&&(_(z,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===Yc)?(g===void 0&&(g=new ai(new jo(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:Ds(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,V,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),dr.copy(U.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(PT.makeRotationFromEuler(dr)),g.material.toneMapped=De.getTransfer(z.colorSpace)!==Ge,(v!==z||S!==z.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=z,S=z.version,M=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new ai(new jc(2,2),new ca({name:"BackgroundMaterial",uniforms:Ds(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=De.getTransfer(z.colorSpace)!==Ge,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||S!==z.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,S=z.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(Dc,K0(o)),r.buffers.color.setClear(Dc.r,Dc.g,Dc.b,U,h)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:A,addToRenderList:y,dispose:F}}function BT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,B,ft,ht,_t){let vt=!1;const P=v(ht,ft,B);u!==P&&(u=P,p(u.object)),vt=M(C,ht,ft,_t),vt&&b(C,ht,ft,_t),_t!==null&&t.update(_t,o.ELEMENT_ARRAY_BUFFER),(vt||h)&&(h=!1,U(C,B,ft,ht),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,B,ft){const ht=ft.wireframe===!0;let _t=r[C.id];_t===void 0&&(_t={},r[C.id]=_t);let vt=_t[B.id];vt===void 0&&(vt={},_t[B.id]=vt);let P=vt[ht];return P===void 0&&(P=S(m()),vt[ht]=P),P}function S(C){const B=[],ft=[],ht=[];for(let _t=0;_t<i;_t++)B[_t]=0,ft[_t]=0,ht[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ft,attributeDivisors:ht,object:C,attributes:{},index:null}}function M(C,B,ft,ht){const _t=u.attributes,vt=B.attributes;let P=0;const Q=ft.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const L=_t[Z];let et=vt[Z];if(et===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(et=C.instanceColor)),L===void 0||L.attribute!==et||et&&L.data!==et.data)return!0;P++}return u.attributesNum!==P||u.index!==ht}function b(C,B,ft,ht){const _t={},vt=B.attributes;let P=0;const Q=ft.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let L=vt[Z];L===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const et={};et.attribute=L,L&&L.data&&(et.data=L.data),_t[Z]=et,P++}u.attributes=_t,u.attributesNum=P,u.index=ht}function A(){const C=u.newAttributes;for(let B=0,ft=C.length;B<ft;B++)C[B]=0}function y(C){_(C,0)}function _(C,B){const ft=u.newAttributes,ht=u.enabledAttributes,_t=u.attributeDivisors;ft[C]=1,ht[C]===0&&(o.enableVertexAttribArray(C),ht[C]=1),_t[C]!==B&&(o.vertexAttribDivisor(C,B),_t[C]=B)}function F(){const C=u.newAttributes,B=u.enabledAttributes;for(let ft=0,ht=B.length;ft<ht;ft++)B[ft]!==C[ft]&&(o.disableVertexAttribArray(ft),B[ft]=0)}function N(C,B,ft,ht,_t,vt,P){P===!0?o.vertexAttribIPointer(C,B,ft,_t,vt):o.vertexAttribPointer(C,B,ft,ht,_t,vt)}function U(C,B,ft,ht){A();const _t=ht.attributes,vt=ft.getAttributes(),P=B.defaultAttributeValues;for(const Q in vt){const Z=vt[Q];if(Z.location>=0){let At=_t[Q];if(At===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(At=C.instanceColor)),At!==void 0){const L=At.normalized,et=At.itemSize,Tt=t.get(At);if(Tt===void 0)continue;const Dt=Tt.buffer,Ft=Tt.type,at=Tt.bytesPerElement,gt=Ft===o.INT||Ft===o.UNSIGNED_INT||At.gpuType===Nd;if(At.isInterleavedBufferAttribute){const Ut=At.data,Vt=Ut.stride,Kt=At.offset;if(Ut.isInstancedInterleavedBuffer){for(let ae=0;ae<Z.locationSize;ae++)_(Z.location+ae,Ut.meshPerAttribute);C.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let ae=0;ae<Z.locationSize;ae++)y(Z.location+ae);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let ae=0;ae<Z.locationSize;ae++)N(Z.location+ae,et/Z.locationSize,Ft,L,Vt*at,(Kt+et/Z.locationSize*ae)*at,gt)}else{if(At.isInstancedBufferAttribute){for(let Ut=0;Ut<Z.locationSize;Ut++)_(Z.location+Ut,At.meshPerAttribute);C.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Ut=0;Ut<Z.locationSize;Ut++)y(Z.location+Ut);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let Ut=0;Ut<Z.locationSize;Ut++)N(Z.location+Ut,et/Z.locationSize,Ft,L,et*at,et/Z.locationSize*Ut*at,gt)}}else if(P!==void 0){const L=P[Q];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Z.location,L);break;case 3:o.vertexAttrib3fv(Z.location,L);break;case 4:o.vertexAttrib4fv(Z.location,L);break;default:o.vertexAttrib1fv(Z.location,L)}}}}F()}function z(){Y();for(const C in r){const B=r[C];for(const ft in B){const ht=B[ft];for(const _t in ht)g(ht[_t].object),delete ht[_t];delete B[ft]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ft in B){const ht=B[ft];for(const _t in ht)g(ht[_t].object),delete ht[_t];delete B[ft]}delete r[C.id]}function V(C){for(const B in r){const ft=r[B];if(ft[C.id]===void 0)continue;const ht=ft[C.id];for(const _t in ht)g(ht[_t].object),delete ht[_t];delete ft[C.id]}}function Y(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:G,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:y,disableUnusedAttributes:F}}function IT(o,t,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(p,g,v,S){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let b=0;for(let A=0;A<v;A++)b+=g[A]*S[A];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function FT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(V){return!(V!==Ti&&r.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const Y=V===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==zi&&r.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==oa&&!Y)}function m(V){if(V==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:z,maxSamples:G}}function HT(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new mr,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||l;return l=S,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,M){const b=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const F=u?0:r,N=F*4;let U=_.clippingState||null;m.value=U,U=g(b,S,N,M);for(let z=0;z!==N;++z)U[z]=i[z];_.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,S,M,b){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,b!==!0||y===null){const _=M+A*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,U=M;N!==A;++N,U+=4)h.copy(v[N]).applyMatrix4(F,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function GT(o){let t=new WeakMap;function i(h,d){return d===Hc?h.mapping=Rs:d===jh&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Hc||d===jh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new PM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ys=4,c0=[.125,.215,.35,.446,.526,.582],vr=20,Oh=new iv,u0=new be;let Ph=null,zh=0,Bh=0,Ih=!1;const gr=(1+Math.sqrt(5))/2,xs=1/gr,f0=[new tt(-gr,xs,0),new tt(gr,xs,0),new tt(-xs,0,gr),new tt(xs,0,gr),new tt(0,gr,-xs),new tt(0,gr,xs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],VT=new tt;class h0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=VT}=u;Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,zh,Bh),this._renderer.xr.enabled=Ih,t.scissorTest=!1,Uc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Wo,format:Ti,colorSpace:Cs,depthBuffer:!1},l=d0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kT(u)),this._blurMaterial=XT(u,t,i)}return l}_compileMaterial(t){const i=new ai(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,r,l,u){const m=new mi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(u0),v.toneMapping=ka,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new kc({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),y=new ai(new jo,A);let _=!1;const F=t.background;F?F.isColor&&(A.color.copy(F),t.background=null,_=!0):(A.color.copy(u0),_=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[N]));const z=this._cubeSize;Uc(l,U*z,N>2?z:0,z,z),v.setRenderTarget(l),_&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=S,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Rs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ai(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Uc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Oh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=f0[(l-u-1)%f0.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ai(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vr-1),A=u/b,y=isFinite(u)?1+Math.floor(g*A):vr;y>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vr}`);const _=[];let F=0;for(let V=0;V<vr;++V){const Y=V/A,D=Math.exp(-Y*Y/2);_.push(D),V===0?F+=D:V<y&&(F+=2*D)}for(let V=0;V<_.length;V++)_[V]=_[V]/F;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-r;const U=this._sizeLods[l],z=3*U*(l>N-ys?l-N+ys:0),G=4*(this._cubeSize-U);Uc(i,z,G,3*U,2*U),m.setRenderTarget(i),m.render(v,Oh)}}function kT(o){const t=[],i=[],r=[];let l=o;const u=o-ys+1+c0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ys?m=c0[h-o+ys-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,A=3,y=2,_=1,F=new Float32Array(A*b*M),N=new Float32Array(y*b*M),U=new Float32Array(_*b*M);for(let G=0;G<M;G++){const V=G%3*2/3-1,Y=G>2?0:-1,D=[V,Y,0,V+2/3,Y,0,V+2/3,Y+1,0,V,Y,0,V+2/3,Y+1,0,V,Y+1,0];F.set(D,A*b*G),N.set(S,y*b*G);const C=[G,G,G,G,G,G];U.set(C,_*b*G)}const z=new Gn;z.setAttribute("position",new ri(F,A)),z.setAttribute("uv",new ri(N,y)),z.setAttribute("faceIndex",new ri(U,_)),t.push(z),l>ys&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function d0(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Uc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function XT(o,t,i){const r=new Float32Array(vr),l=new tt(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function p0(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function m0(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Hc||m===jh,g=m===Rs||m===ws;if(p||g){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new h0(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new h0(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function qT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ts("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function YT(o,t,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,b=v.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let N=0,U=F.length;N<U;N+=3){const z=F[N+0],G=F[N+1],V=F[N+2];S.push(z,G,G,V,V,z)}}else if(b!==void 0){const F=b.array;A=b.version;for(let N=0,U=F.length/3-1;N<U;N+=3){const z=N+0,G=N+1,V=N+2;S.push(z,G,G,V,V,z)}}else return;const y=new(W0(S)?j0:Z0)(S,1);y.version=A;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function ZT(o,t,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,S*h,b),i.update(M,r,b))}function g(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,r,1)}function v(S,M,b,A){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,A,0,b);let _=0;for(let F=0;F<b;F++)_+=M[F]*A[F];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function jT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function KT(o,t,i){const r=new WeakMap,l=new an;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let C=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),A===!0&&(U=2),y===!0&&(U=3);let z=d.attributes.position.count*U,G=1;z>t.maxTextureSize&&(G=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const V=new Float32Array(z*G*4*v),Y=new q0(V,z,G,v);Y.type=oa,Y.needsUpdate=!0;const D=U*4;for(let B=0;B<v;B++){const ft=_[B],ht=F[B],_t=N[B],vt=z*G*4*B;for(let P=0;P<ft.count;P++){const Q=P*D;b===!0&&(l.fromBufferAttribute(ft,P),V[vt+Q+0]=l.x,V[vt+Q+1]=l.y,V[vt+Q+2]=l.z,V[vt+Q+3]=0),A===!0&&(l.fromBufferAttribute(ht,P),V[vt+Q+4]=l.x,V[vt+Q+5]=l.y,V[vt+Q+6]=l.z,V[vt+Q+7]=0),y===!0&&(l.fromBufferAttribute(_t,P),V[vt+Q+8]=l.x,V[vt+Q+9]=l.y,V[vt+Q+10]=l.z,V[vt+Q+11]=_t.itemSize===4?l.w:1)}}S={count:v,texture:Y,size:new ve(z,G)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function QT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const rv=new Pn,g0=new ev(1,1),sv=new q0,ov=new vM,lv=new J0,_0=[],v0=[],S0=new Float32Array(16),x0=new Float32Array(9),M0=new Float32Array(4);function Ls(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=_0[l];if(u===void 0&&(u=new Float32Array(l),_0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Kc(o,t){let i=v0[t];i===void 0&&(i=new Int32Array(t),v0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function JT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function $T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function nb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;M0.set(r),o.uniformMatrix2fv(this.addr,!1,M0),gn(i,r)}}function ib(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;x0.set(r),o.uniformMatrix3fv(this.addr,!1,x0),gn(i,r)}}function ab(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;S0.set(r),o.uniformMatrix4fv(this.addr,!1,S0),gn(i,r)}}function rb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function cb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function fb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function hb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function db(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(g0.compareFunction=X0,u=g0):u=rv,i.setTexture2D(t||u,l)}function pb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||ov,l)}function mb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||lv,l)}function gb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||sv,l)}function _b(o){switch(o){case 5126:return JT;case 35664:return $T;case 35665:return tb;case 35666:return eb;case 35674:return nb;case 35675:return ib;case 35676:return ab;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ob;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return ub;case 36295:return fb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}function vb(o,t){o.uniform1fv(this.addr,t)}function Sb(o,t){const i=Ls(t,this.size,2);o.uniform2fv(this.addr,i)}function xb(o,t){const i=Ls(t,this.size,3);o.uniform3fv(this.addr,i)}function Mb(o,t){const i=Ls(t,this.size,4);o.uniform4fv(this.addr,i)}function yb(o,t){const i=Ls(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Eb(o,t){const i=Ls(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Tb(o,t){const i=Ls(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function bb(o,t){o.uniform1iv(this.addr,t)}function Ab(o,t){o.uniform2iv(this.addr,t)}function Rb(o,t){o.uniform3iv(this.addr,t)}function wb(o,t){o.uniform4iv(this.addr,t)}function Cb(o,t){o.uniform1uiv(this.addr,t)}function Db(o,t){o.uniform2uiv(this.addr,t)}function Ub(o,t){o.uniform3uiv(this.addr,t)}function Lb(o,t){o.uniform4uiv(this.addr,t)}function Nb(o,t,i){const r=this.cache,l=t.length,u=Kc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||rv,u[h])}function Ob(o,t,i){const r=this.cache,l=t.length,u=Kc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ov,u[h])}function Pb(o,t,i){const r=this.cache,l=t.length,u=Kc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||lv,u[h])}function zb(o,t,i){const r=this.cache,l=t.length,u=Kc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||sv,u[h])}function Bb(o){switch(o){case 5126:return vb;case 35664:return Sb;case 35665:return xb;case 35666:return Mb;case 35674:return yb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return bb;case 35667:case 35671:return Ab;case 35668:case 35672:return Rb;case 35669:case 35673:return wb;case 5125:return Cb;case 36294:return Db;case 36295:return Ub;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return zb}}class Ib{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=_b(i.type)}}class Fb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Bb(i.type)}}class Hb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function y0(o,t){o.seq.push(t),o.map[t.id]=t}function Gb(o,t,i){const r=o.name,l=r.length;for(Fh.lastIndex=0;;){const u=Fh.exec(r),h=Fh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){y0(i,p===void 0?new Ib(d,o,t):new Fb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Hb(d),y0(i,v)),i=v}}}class Ic{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);Gb(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function E0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const Vb=37297;let kb=0;function Xb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const T0=new he;function Wb(o){De._getMatrix(T0,De.workingColorSpace,o);const t=`mat3( ${T0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Gc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function b0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Xb(o.getShaderSource(t),d)}else return u}function qb(o,t){const i=Wb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Yb(o,t){let i;switch(t){case qx:i="Linear";break;case Yx:i="Reinhard";break;case Zx:i="Cineon";break;case jx:i="ACESFilmic";break;case Qx:i="AgX";break;case Jx:i="Neutral";break;case Kx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new tt;function Zb(){De.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),t=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Kb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Qb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Io(o){return o!==""}function A0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function R0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(o){return o.replace(Jb,tA)}const $b=new Map;function tA(o,t){let i=me[t];if(i===void 0){const r=$b.get(t);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cd(i)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(o){return o.replace(eA,nA)}function nA(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===N0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===bx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function aA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Rs:case ws:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function sA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ld:t="ENVMAP_BLENDING_MULTIPLY";break;case Xx:t="ENVMAP_BLENDING_MIX";break;case Wx:t="ENVMAP_BLENDING_ADD";break}return t}function oA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function lA(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=iA(i),p=aA(i),g=rA(i),v=sA(i),S=oA(i),M=jb(i),b=Kb(u),A=l.createProgram();let y,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),_.length>0&&(_+=`
`)):(y=[C0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),_=[C0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?me.tonemapping_pars_fragment:"",i.toneMapping!==ka?Yb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,qb("linearToOutputTexel",i.outputColorSpace),Zb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=Cd(h),h=A0(h,i),h=R0(h,i),d=Cd(d),d=A0(d,i),d=R0(d,i),h=w0(h),d=w0(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=F+y+h,U=F+_+d,z=E0(l,l.VERTEX_SHADER,N),G=E0(l,l.FRAGMENT_SHADER,U);l.attachShader(A,z),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function V(B){if(o.debug.checkShaderErrors){const ft=l.getProgramInfoLog(A)||"",ht=l.getShaderInfoLog(z)||"",_t=l.getShaderInfoLog(G)||"",vt=ft.trim(),P=ht.trim(),Q=_t.trim();let Z=!0,At=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,z,G);else{const L=b0(l,z,"vertex"),et=b0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+vt+`
`+L+`
`+et)}else vt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",vt):(P===""||Q==="")&&(At=!1);At&&(B.diagnostics={runnable:Z,programLog:vt,vertexShader:{log:P,prefix:y},fragmentShader:{log:Q,prefix:_}})}l.deleteShader(z),l.deleteShader(G),Y=new Ic(l,A),D=Qb(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&V(this),Y};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,Vb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kb++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=G,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new fA(t),i.set(t,r)),r}}class fA{constructor(t){this.id=cA++,this.code=t,this.usedTimes=0}}function hA(o,t,i,r,l,u,h){const d=new Hd,m=new uA,p=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,B,ft,ht){const _t=ft.fog,vt=ht.geometry,P=D.isMeshStandardMaterial?ft.environment:null,Q=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),Z=Q&&Q.mapping===Yc?Q.image.height:null,At=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const L=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,et=L!==void 0?L.length:0;let Tt=0;vt.morphAttributes.position!==void 0&&(Tt=1),vt.morphAttributes.normal!==void 0&&(Tt=2),vt.morphAttributes.color!==void 0&&(Tt=3);let Dt,Ft,at,gt;if(At){const oe=Ni[At];Dt=oe.vertexShader,Ft=oe.fragmentShader}else Dt=D.vertexShader,Ft=D.fragmentShader,m.update(D),at=m.getVertexShaderID(D),gt=m.getFragmentShaderID(D);const Ut=o.getRenderTarget(),Vt=o.state.buffers.depth.getReversed(),Kt=ht.isInstancedMesh===!0,ae=ht.isBatchedMesh===!0,Le=!!D.map,ge=!!D.matcap,I=!!Q,Re=!!D.aoMap,te=!!D.lightMap,Ee=!!D.bumpMap,rt=!!D.normalMap,dt=!!D.displacementMap,ut=!!D.emissiveMap,pt=!!D.metalnessMap,yt=!!D.roughnessMap,Nt=D.anisotropy>0,w=D.clearcoat>0,E=D.dispersion>0,k=D.iridescence>0,nt=D.sheen>0,it=D.transmission>0,W=Nt&&!!D.anisotropyMap,Lt=w&&!!D.clearcoatMap,Rt=w&&!!D.clearcoatNormalMap,It=w&&!!D.clearcoatRoughnessMap,qt=k&&!!D.iridescenceMap,bt=k&&!!D.iridescenceThicknessMap,Et=nt&&!!D.sheenColorMap,Ht=nt&&!!D.sheenRoughnessMap,Bt=!!D.specularMap,Ct=!!D.specularColorMap,Jt=!!D.specularIntensityMap,H=it&&!!D.transmissionMap,wt=it&&!!D.thicknessMap,Pt=!!D.gradientMap,kt=!!D.alphaMap,Ot=D.alphaTest>0,xt=!!D.alphaHash,Zt=!!D.extensions;let le=ka;D.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(le=o.toneMapping);const ue={shaderID:At,shaderType:D.type,shaderName:D.name,vertexShader:Dt,fragmentShader:Ft,defines:D.defines,customVertexShaderID:at,customFragmentShaderID:gt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:ae,batchingColor:ae&&ht._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&ht.instanceColor!==null,instancingMorph:Kt&&ht.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ut===null?o.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Cs,alphaToCoverage:!!D.alphaToCoverage,map:Le,matcap:ge,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:Z,aoMap:Re,lightMap:te,bumpMap:Ee,normalMap:rt,displacementMap:S&&dt,emissiveMap:ut,normalMapObjectSpace:rt&&D.normalMapType===nM,normalMapTangentSpace:rt&&D.normalMapType===k0,metalnessMap:pt,roughnessMap:yt,anisotropy:Nt,anisotropyMap:W,clearcoat:w,clearcoatMap:Lt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:It,dispersion:E,iridescence:k,iridescenceMap:qt,iridescenceThicknessMap:bt,sheen:nt,sheenColorMap:Et,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:Ct,specularIntensityMap:Jt,transmission:it,transmissionMap:H,thicknessMap:wt,gradientMap:Pt,opaque:D.transparent===!1&&D.blending===Es&&D.alphaToCoverage===!1,alphaMap:kt,alphaTest:Ot,alphaHash:xt,combine:D.combine,mapUv:Le&&A(D.map.channel),aoMapUv:Re&&A(D.aoMap.channel),lightMapUv:te&&A(D.lightMap.channel),bumpMapUv:Ee&&A(D.bumpMap.channel),normalMapUv:rt&&A(D.normalMap.channel),displacementMapUv:dt&&A(D.displacementMap.channel),emissiveMapUv:ut&&A(D.emissiveMap.channel),metalnessMapUv:pt&&A(D.metalnessMap.channel),roughnessMapUv:yt&&A(D.roughnessMap.channel),anisotropyMapUv:W&&A(D.anisotropyMap.channel),clearcoatMapUv:Lt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&A(D.sheenRoughnessMap.channel),specularMapUv:Bt&&A(D.specularMap.channel),specularColorMapUv:Ct&&A(D.specularColorMap.channel),specularIntensityMapUv:Jt&&A(D.specularIntensityMap.channel),transmissionMapUv:H&&A(D.transmissionMap.channel),thicknessMapUv:wt&&A(D.thicknessMap.channel),alphaMapUv:kt&&A(D.alphaMap.channel),vertexTangents:!!vt.attributes.tangent&&(rt||Nt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,pointsUvs:ht.isPoints===!0&&!!vt.attributes.uv&&(Le||kt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Vt,skinning:ht.isSkinnedMesh===!0,morphTargets:vt.morphAttributes.position!==void 0,morphNormals:vt.morphAttributes.normal!==void 0,morphColors:vt.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Tt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:Le&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:ut&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===sa,flipSided:D.side===wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Zt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&D.extensions.multiDraw===!0||ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ue.vertexUv1s=p.has(1),ue.vertexUv2s=p.has(2),ue.vertexUv3s=p.has(3),p.clear(),ue}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(F(C,D),N(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function F(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=b[D.type];let B;if(C){const ft=Ni[C];B=UM.clone(ft.uniforms)}else B=D.uniforms;return B}function z(D,C){let B;for(let ft=0,ht=g.length;ft<ht;ft++){const _t=g[ft];if(_t.cacheKey===C){B=_t,++B.usedTimes;break}}return B===void 0&&(B=new lA(o,C,D,u),g.push(B)),B}function G(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function V(D){m.remove(D)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:z,releaseProgram:G,releaseShaderCache:V,programs:g,dispose:Y}}function dA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function pA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function D0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function U0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,S,M,b,A,y){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:b,renderOrder:v.renderOrder,z:A,group:y},o[t]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=A,_.group=y),t++,_}function d(v,S,M,b,A,y){const _=h(v,S,M,b,A,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,S,M,b,A,y){const _=h(v,S,M,b,A,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||pA),r.length>1&&r.sort(S||D0),l.length>1&&l.sort(S||D0)}function g(){for(let v=t,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function mA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new U0,o.set(r,[h])):l>=u.length?(h=new U0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function gA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new be};break;case"SpotLight":i={position:new tt,direction:new tt,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function _A(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let vA=0;function SA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function xA(o){const t=new gA,i=_A(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,u=new Ye,h=new Ye;function d(p){let g=0,v=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,A=0,y=0,_=0,F=0,N=0,U=0,z=0,G=0,V=0;p.sort(SA);for(let D=0,C=p.length;D<C;D++){const B=p[D],ft=B.color,ht=B.intensity,_t=B.distance,vt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ft.r*ht,v+=ft.g*ht,S+=ft.b*ht;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],ht);V++}else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,Z=i.get(B);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=vt,r.directionalShadowMatrix[M]=B.shadow.matrix,F++}r.directional[M]=P,M++}else if(B.isSpotLight){const P=t.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(ft).multiplyScalar(ht),P.distance=_t,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[A]=P;const Q=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,Q.updateMatrices(B),B.castShadow&&G++),r.spotLightMatrix[A]=Q.matrix,B.castShadow){const Z=i.get(B);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=vt,U++}A++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(ft).multiplyScalar(ht),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=P,y++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const Q=B.shadow,Z=i.get(B);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=vt,r.pointShadowMatrix[b]=B.shadow.matrix,N++}r.point[b]=P,b++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(ht),P.groundColor.copy(B.groundColor).multiplyScalar(ht),r.hemi[_]=P,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Wt.LTC_FLOAT_1,r.rectAreaLTC2=Wt.LTC_FLOAT_2):(r.rectAreaLTC1=Wt.LTC_HALF_1,r.rectAreaLTC2=Wt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==b||Y.spotLength!==A||Y.rectAreaLength!==y||Y.hemiLength!==_||Y.numDirectionalShadows!==F||Y.numPointShadows!==N||Y.numSpotShadows!==U||Y.numSpotMaps!==z||Y.numLightProbes!==V)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+z-G,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=V,Y.directionalLength=M,Y.pointLength=b,Y.spotLength=A,Y.rectAreaLength=y,Y.hemiLength=_,Y.numDirectionalShadows=F,Y.numPointShadows=N,Y.numSpotShadows=U,Y.numSpotMaps=z,Y.numLightProbes=V,r.version=vA++)}function m(p,g){let v=0,S=0,M=0,b=0,A=0;const y=g.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function L0(o){const t=new xA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function MA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new L0(o),t.set(l,[d])):u>=h.length?(d=new L0(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TA(o,t,i){let r=new Gd;const l=new ve,u=new ve,h=new an,d=new XM({depthPacking:eM}),m=new WM,p={},g=i.maxTextureSize,v={[Wa]:wn,[wn]:Wa,[sa]:sa},S=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:yA,fragmentShader:EA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Gn;b.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ai(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let _=this.type;this.render=function(G,V,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ft=o.state;ft.setBlending(Va),ft.buffers.depth.getReversed()?ft.buffers.color.setClear(0,0,0,0):ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const ht=_!==ra&&this.type===ra,_t=_===ra&&this.type!==ra;for(let vt=0,P=G.length;vt<P;vt++){const Q=G[vt],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const At=Z.getFrameExtents();if(l.multiply(At),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/At.x),l.x=u.x*At.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/At.y),l.y=u.y*At.y,Z.mapSize.y=u.y)),Z.map===null||ht===!0||_t===!0){const et=this.type!==ra?{minFilter:bi,magFilter:bi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Mr(l.x,l.y,et),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const L=Z.getViewportCount();for(let et=0;et<L;et++){const Tt=Z.getViewport(et);h.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),ft.viewport(h),Z.updateMatrices(Q,et),r=Z.getFrustum(),U(V,Y,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===ra&&F(Z,Y),Z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,B)};function F(G,V){const Y=t.update(A);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Mr(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(V,null,Y,S,A,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(V,null,Y,M,A,null)}function N(G,V,Y,D){let C=null;const B=Y.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)C=B;else if(C=Y.isPointLight===!0?m:d,o.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const ft=C.uuid,ht=V.uuid;let _t=p[ft];_t===void 0&&(_t={},p[ft]=_t);let vt=_t[ht];vt===void 0&&(vt=C.clone(),_t[ht]=vt,V.addEventListener("dispose",z)),C=vt}if(C.visible=V.visible,C.wireframe=V.wireframe,D===ra?C.side=V.shadowSide!==null?V.shadowSide:V.side:C.side=V.shadowSide!==null?V.shadowSide:v[V.side],C.alphaMap=V.alphaMap,C.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,C.map=V.map,C.clipShadows=V.clipShadows,C.clippingPlanes=V.clippingPlanes,C.clipIntersection=V.clipIntersection,C.displacementMap=V.displacementMap,C.displacementScale=V.displacementScale,C.displacementBias=V.displacementBias,C.wireframeLinewidth=V.wireframeLinewidth,C.linewidth=V.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ft=o.properties.get(C);ft.light=Y}return C}function U(G,V,Y,D,C){if(G.visible===!1)return;if(G.layers.test(V.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ra)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,G.matrixWorld);const ht=t.update(G),_t=G.material;if(Array.isArray(_t)){const vt=ht.groups;for(let P=0,Q=vt.length;P<Q;P++){const Z=vt[P],At=_t[Z.materialIndex];if(At&&At.visible){const L=N(G,At,D,C);G.onBeforeShadow(o,G,V,Y,ht,L,Z),o.renderBufferDirect(Y,null,ht,L,G,Z),G.onAfterShadow(o,G,V,Y,ht,L,Z)}}}else if(_t.visible){const vt=N(G,_t,D,C);G.onBeforeShadow(o,G,V,Y,ht,vt,null),o.renderBufferDirect(Y,null,ht,vt,G,null),G.onAfterShadow(o,G,V,Y,ht,vt,null)}}const ft=G.children;for(let ht=0,_t=ft.length;ht<_t;ht++)U(ft[ht],V,Y,D,C)}function z(G){G.target.removeEventListener("dispose",z);for(const Y in p){const D=p[Y],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const bA={[Vh]:kh,[Xh]:Yh,[Wh]:Zh,[As]:qh,[kh]:Vh,[Yh]:Xh,[Zh]:Wh,[qh]:As};function AA(o,t){function i(){let H=!1;const wt=new an;let Pt=null;const kt=new an(0,0,0,0);return{setMask:function(Ot){Pt!==Ot&&!H&&(o.colorMask(Ot,Ot,Ot,Ot),Pt=Ot)},setLocked:function(Ot){H=Ot},setClear:function(Ot,xt,Zt,le,ue){ue===!0&&(Ot*=le,xt*=le,Zt*=le),wt.set(Ot,xt,Zt,le),kt.equals(wt)===!1&&(o.clearColor(Ot,xt,Zt,le),kt.copy(wt))},reset:function(){H=!1,Pt=null,kt.set(-1,0,0,0)}}}function r(){let H=!1,wt=!1,Pt=null,kt=null,Ot=null;return{setReversed:function(xt){if(wt!==xt){const Zt=t.get("EXT_clip_control");xt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;const le=Ot;Ot=null,this.setClear(le)}},getReversed:function(){return wt},setTest:function(xt){xt?Ut(o.DEPTH_TEST):Vt(o.DEPTH_TEST)},setMask:function(xt){Pt!==xt&&!H&&(o.depthMask(xt),Pt=xt)},setFunc:function(xt){if(wt&&(xt=bA[xt]),kt!==xt){switch(xt){case Vh:o.depthFunc(o.NEVER);break;case kh:o.depthFunc(o.ALWAYS);break;case Xh:o.depthFunc(o.LESS);break;case As:o.depthFunc(o.LEQUAL);break;case Wh:o.depthFunc(o.EQUAL);break;case qh:o.depthFunc(o.GEQUAL);break;case Yh:o.depthFunc(o.GREATER);break;case Zh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){Ot!==xt&&(wt&&(xt=1-xt),o.clearDepth(xt),Ot=xt)},reset:function(){H=!1,Pt=null,kt=null,Ot=null,wt=!1}}}function l(){let H=!1,wt=null,Pt=null,kt=null,Ot=null,xt=null,Zt=null,le=null,ue=null;return{setTest:function(oe){H||(oe?Ut(o.STENCIL_TEST):Vt(o.STENCIL_TEST))},setMask:function(oe){wt!==oe&&!H&&(o.stencilMask(oe),wt=oe)},setFunc:function(oe,Qe,Ne){(Pt!==oe||kt!==Qe||Ot!==Ne)&&(o.stencilFunc(oe,Qe,Ne),Pt=oe,kt=Qe,Ot=Ne)},setOp:function(oe,Qe,Ne){(xt!==oe||Zt!==Qe||le!==Ne)&&(o.stencilOp(oe,Qe,Ne),xt=oe,Zt=Qe,le=Ne)},setLocked:function(oe){H=oe},setClear:function(oe){ue!==oe&&(o.clearStencil(oe),ue=oe)},reset:function(){H=!1,wt=null,Pt=null,kt=null,Ot=null,xt=null,Zt=null,le=null,ue=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,M=[],b=null,A=!1,y=null,_=null,F=null,N=null,U=null,z=null,G=null,V=new be(0,0,0),Y=0,D=!1,C=null,B=null,ft=null,ht=null,_t=null;const vt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=Q>=2);let At=null,L={};const et=o.getParameter(o.SCISSOR_BOX),Tt=o.getParameter(o.VIEWPORT),Dt=new an().fromArray(et),Ft=new an().fromArray(Tt);function at(H,wt,Pt,kt){const Ot=new Uint8Array(4),xt=o.createTexture();o.bindTexture(H,xt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<Pt;Zt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(wt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return xt}const gt={};gt[o.TEXTURE_2D]=at(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=at(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=at(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=at(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Ut(o.DEPTH_TEST),h.setFunc(As),Ee(!1),rt(A_),Ut(o.CULL_FACE),Re(Va);function Ut(H){g[H]!==!0&&(o.enable(H),g[H]=!0)}function Vt(H){g[H]!==!1&&(o.disable(H),g[H]=!1)}function Kt(H,wt){return v[H]!==wt?(o.bindFramebuffer(H,wt),v[H]=wt,H===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=wt),H===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function ae(H,wt){let Pt=M,kt=!1;if(H){Pt=S.get(wt),Pt===void 0&&(Pt=[],S.set(wt,Pt));const Ot=H.textures;if(Pt.length!==Ot.length||Pt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Zt=Ot.length;xt<Zt;xt++)Pt[xt]=o.COLOR_ATTACHMENT0+xt;Pt.length=Ot.length,kt=!0}}else Pt[0]!==o.BACK&&(Pt[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Pt)}function Le(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const ge={[_r]:o.FUNC_ADD,[Rx]:o.FUNC_SUBTRACT,[wx]:o.FUNC_REVERSE_SUBTRACT};ge[Cx]=o.MIN,ge[Dx]=o.MAX;const I={[Ux]:o.ZERO,[Lx]:o.ONE,[Nx]:o.SRC_COLOR,[Hh]:o.SRC_ALPHA,[Fx]:o.SRC_ALPHA_SATURATE,[Bx]:o.DST_COLOR,[Px]:o.DST_ALPHA,[Ox]:o.ONE_MINUS_SRC_COLOR,[Gh]:o.ONE_MINUS_SRC_ALPHA,[Ix]:o.ONE_MINUS_DST_COLOR,[zx]:o.ONE_MINUS_DST_ALPHA,[Hx]:o.CONSTANT_COLOR,[Gx]:o.ONE_MINUS_CONSTANT_COLOR,[Vx]:o.CONSTANT_ALPHA,[kx]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(H,wt,Pt,kt,Ot,xt,Zt,le,ue,oe){if(H===Va){A===!0&&(Vt(o.BLEND),A=!1);return}if(A===!1&&(Ut(o.BLEND),A=!0),H!==Ax){if(H!==y||oe!==D){if((_!==_r||U!==_r)&&(o.blendEquation(o.FUNC_ADD),_=_r,U=_r),oe)switch(H){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fc:o.blendFunc(o.ONE,o.ONE);break;case R_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case w_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case R_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}F=null,N=null,z=null,G=null,V.set(0,0,0),Y=0,y=H,D=oe}return}Ot=Ot||wt,xt=xt||Pt,Zt=Zt||kt,(wt!==_||Ot!==U)&&(o.blendEquationSeparate(ge[wt],ge[Ot]),_=wt,U=Ot),(Pt!==F||kt!==N||xt!==z||Zt!==G)&&(o.blendFuncSeparate(I[Pt],I[kt],I[xt],I[Zt]),F=Pt,N=kt,z=xt,G=Zt),(le.equals(V)===!1||ue!==Y)&&(o.blendColor(le.r,le.g,le.b,ue),V.copy(le),Y=ue),y=H,D=!1}function te(H,wt){H.side===sa?Vt(o.CULL_FACE):Ut(o.CULL_FACE);let Pt=H.side===wn;wt&&(Pt=!Pt),Ee(Pt),H.blending===Es&&H.transparent===!1?Re(Va):Re(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),u.setMask(H.colorWrite);const kt=H.stencilWrite;d.setTest(kt),kt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ut(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ut(o.SAMPLE_ALPHA_TO_COVERAGE):Vt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function rt(H){H!==Ex?(Ut(o.CULL_FACE),H!==B&&(H===A_?o.cullFace(o.BACK):H===Tx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Vt(o.CULL_FACE),B=H}function dt(H){H!==ft&&(P&&o.lineWidth(H),ft=H)}function ut(H,wt,Pt){H?(Ut(o.POLYGON_OFFSET_FILL),(ht!==wt||_t!==Pt)&&(o.polygonOffset(wt,Pt),ht=wt,_t=Pt)):Vt(o.POLYGON_OFFSET_FILL)}function pt(H){H?Ut(o.SCISSOR_TEST):Vt(o.SCISSOR_TEST)}function yt(H){H===void 0&&(H=o.TEXTURE0+vt-1),At!==H&&(o.activeTexture(H),At=H)}function Nt(H,wt,Pt){Pt===void 0&&(At===null?Pt=o.TEXTURE0+vt-1:Pt=At);let kt=L[Pt];kt===void 0&&(kt={type:void 0,texture:void 0},L[Pt]=kt),(kt.type!==H||kt.texture!==wt)&&(At!==Pt&&(o.activeTexture(Pt),At=Pt),o.bindTexture(H,wt||gt[H]),kt.type=H,kt.texture=wt)}function w(){const H=L[At];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{o.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{o.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{o.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function W(){try{o.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{o.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{o.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(){try{o.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{o.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(H){Dt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Dt.copy(H))}function Ht(H){Ft.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Ft.copy(H))}function Bt(H,wt){let Pt=p.get(wt);Pt===void 0&&(Pt=new WeakMap,p.set(wt,Pt));let kt=Pt.get(H);kt===void 0&&(kt=o.getUniformBlockIndex(wt,H.name),Pt.set(H,kt))}function Ct(H,wt){const kt=p.get(wt).get(H);m.get(wt)!==kt&&(o.uniformBlockBinding(wt,kt,H.__bindingPointIndex),m.set(wt,kt))}function Jt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},At=null,L={},v={},S=new WeakMap,M=[],b=null,A=!1,y=null,_=null,F=null,N=null,U=null,z=null,G=null,V=new be(0,0,0),Y=0,D=!1,C=null,B=null,ft=null,ht=null,_t=null,Dt.set(0,0,o.canvas.width,o.canvas.height),Ft.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Ut,disable:Vt,bindFramebuffer:Kt,drawBuffers:ae,useProgram:Le,setBlending:Re,setMaterial:te,setFlipSided:Ee,setCullFace:rt,setLineWidth:dt,setPolygonOffset:ut,setScissorTest:pt,activeTexture:yt,bindTexture:Nt,unbindTexture:w,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:qt,texImage3D:bt,updateUBOMapping:Bt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:It,texSubImage2D:nt,texSubImage3D:it,compressedTexSubImage2D:W,compressedTexSubImage3D:Lt,scissor:Et,viewport:Ht,reset:Jt}}function RA(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ve,g=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,E){return M?new OffscreenCanvas(w,E):Xo("canvas")}function A(w,E,k){let nt=1;const it=Nt(w);if((it.width>k||it.height>k)&&(nt=k/Math.max(it.width,it.height)),nt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(nt*it.width),Lt=Math.floor(nt*it.height);v===void 0&&(v=b(W,Lt));const Rt=E?b(W,Lt):v;return Rt.width=W,Rt.height=Lt,Rt.getContext("2d").drawImage(w,0,0,W,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+W+"x"+Lt+")."),Rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function y(w){return w.generateMipmaps}function _(w){o.generateMipmap(w)}function F(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(w,E,k,nt,it=!1){if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=E;if(E===o.RED&&(k===o.FLOAT&&(W=o.R32F),k===o.HALF_FLOAT&&(W=o.R16F),k===o.UNSIGNED_BYTE&&(W=o.R8)),E===o.RED_INTEGER&&(k===o.UNSIGNED_BYTE&&(W=o.R8UI),k===o.UNSIGNED_SHORT&&(W=o.R16UI),k===o.UNSIGNED_INT&&(W=o.R32UI),k===o.BYTE&&(W=o.R8I),k===o.SHORT&&(W=o.R16I),k===o.INT&&(W=o.R32I)),E===o.RG&&(k===o.FLOAT&&(W=o.RG32F),k===o.HALF_FLOAT&&(W=o.RG16F),k===o.UNSIGNED_BYTE&&(W=o.RG8)),E===o.RG_INTEGER&&(k===o.UNSIGNED_BYTE&&(W=o.RG8UI),k===o.UNSIGNED_SHORT&&(W=o.RG16UI),k===o.UNSIGNED_INT&&(W=o.RG32UI),k===o.BYTE&&(W=o.RG8I),k===o.SHORT&&(W=o.RG16I),k===o.INT&&(W=o.RG32I)),E===o.RGB_INTEGER&&(k===o.UNSIGNED_BYTE&&(W=o.RGB8UI),k===o.UNSIGNED_SHORT&&(W=o.RGB16UI),k===o.UNSIGNED_INT&&(W=o.RGB32UI),k===o.BYTE&&(W=o.RGB8I),k===o.SHORT&&(W=o.RGB16I),k===o.INT&&(W=o.RGB32I)),E===o.RGBA_INTEGER&&(k===o.UNSIGNED_BYTE&&(W=o.RGBA8UI),k===o.UNSIGNED_SHORT&&(W=o.RGBA16UI),k===o.UNSIGNED_INT&&(W=o.RGBA32UI),k===o.BYTE&&(W=o.RGBA8I),k===o.SHORT&&(W=o.RGBA16I),k===o.INT&&(W=o.RGBA32I)),E===o.RGB&&k===o.UNSIGNED_INT_5_9_9_9_REV&&(W=o.RGB9_E5),E===o.RGBA){const Lt=it?Gc:De.getTransfer(nt);k===o.FLOAT&&(W=o.RGBA32F),k===o.HALF_FLOAT&&(W=o.RGBA16F),k===o.UNSIGNED_BYTE&&(W=Lt===Ge?o.SRGB8_ALPHA8:o.RGBA8),k===o.UNSIGNED_SHORT_4_4_4_4&&(W=o.RGBA4),k===o.UNSIGNED_SHORT_5_5_5_1&&(W=o.RGB5_A1)}return(W===o.R16F||W===o.R32F||W===o.RG16F||W===o.RG32F||W===o.RGBA16F||W===o.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function U(w,E){let k;return w?E===null||E===xr||E===Go?k=o.DEPTH24_STENCIL8:E===oa?k=o.DEPTH32F_STENCIL8:E===Ho&&(k=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===Go?k=o.DEPTH_COMPONENT24:E===oa?k=o.DEPTH_COMPONENT32F:E===Ho&&(k=o.DEPTH_COMPONENT16),k}function z(w,E){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==bi&&w.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function G(w){const E=w.target;E.removeEventListener("dispose",G),Y(E),E.isVideoTexture&&g.delete(E)}function V(w){const E=w.target;E.removeEventListener("dispose",V),C(E)}function Y(w){const E=r.get(w);if(E.__webglInit===void 0)return;const k=w.source,nt=S.get(k);if(nt){const it=nt[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&D(w),Object.keys(nt).length===0&&S.delete(k)}r.remove(w)}function D(w){const E=r.get(w);o.deleteTexture(E.__webglTexture);const k=w.source,nt=S.get(k);delete nt[E.__cacheKey],h.memory.textures--}function C(w){const E=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let it=0;it<E.__webglFramebuffer[nt].length;it++)o.deleteFramebuffer(E.__webglFramebuffer[nt][it]);else o.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)o.deleteFramebuffer(E.__webglFramebuffer[nt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=w.textures;for(let nt=0,it=k.length;nt<it;nt++){const W=r.get(k[nt]);W.__webglTexture&&(o.deleteTexture(W.__webglTexture),h.memory.textures--),r.remove(k[nt])}r.remove(w)}let B=0;function ft(){B=0}function ht(){const w=B;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),B+=1,w}function _t(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function vt(w,E){const k=r.get(w);if(w.isVideoTexture&&pt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const nt=w.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(k,w,E);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,k.__webglTexture,o.TEXTURE0+E)}function P(w,E){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){gt(k,w,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,k.__webglTexture,o.TEXTURE0+E)}function Q(w,E){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){gt(k,w,E);return}i.bindTexture(o.TEXTURE_3D,k.__webglTexture,o.TEXTURE0+E)}function Z(w,E){const k=r.get(w);if(w.version>0&&k.__version!==w.version){Ut(k,w,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,k.__webglTexture,o.TEXTURE0+E)}const At={[Kh]:o.REPEAT,[Rn]:o.CLAMP_TO_EDGE,[Qh]:o.MIRRORED_REPEAT},L={[bi]:o.NEAREST,[$x]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[yn]:o.LINEAR,[rh]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},et={[iM]:o.NEVER,[cM]:o.ALWAYS,[aM]:o.LESS,[X0]:o.LEQUAL,[rM]:o.EQUAL,[lM]:o.GEQUAL,[sM]:o.GREATER,[oM]:o.NOTEQUAL};function Tt(w,E){if(E.type===oa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===rh||E.magFilter===ac||E.magFilter===Sr||E.minFilter===yn||E.minFilter===rh||E.minFilter===ac||E.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,At[E.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,At[E.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,At[E.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bi||E.minFilter!==ac&&E.minFilter!==Sr||E.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Dt(w,E){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",G));const nt=E.source;let it=S.get(nt);it===void 0&&(it={},S.set(nt,it));const W=_t(E);if(W!==w.__cacheKey){it[W]===void 0&&(it[W]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,k=!0),it[W].usedTimes++;const Lt=it[w.__cacheKey];Lt!==void 0&&(it[w.__cacheKey].usedTimes--,Lt.usedTimes===0&&D(E)),w.__cacheKey=W,w.__webglTexture=it[W].texture}return k}function Ft(w,E,k){return Math.floor(Math.floor(w/k)/E)}function at(w,E,k,nt){const W=w.updateRanges;if(W.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,k,nt,E.data);else{W.sort((bt,Et)=>bt.start-Et.start);let Lt=0;for(let bt=1;bt<W.length;bt++){const Et=W[Lt],Ht=W[bt],Bt=Et.start+Et.count,Ct=Ft(Ht.start,E.width,4),Jt=Ft(Et.start,E.width,4);Ht.start<=Bt+1&&Ct===Jt&&Ft(Ht.start+Ht.count-1,E.width,4)===Ct?Et.count=Math.max(Et.count,Ht.start+Ht.count-Et.start):(++Lt,W[Lt]=Ht)}W.length=Lt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),It=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Et=W.length;bt<Et;bt++){const Ht=W[bt],Bt=Math.floor(Ht.start/4),Ct=Math.ceil(Ht.count/4),Jt=Bt%E.width,H=Math.floor(Bt/E.width),wt=Ct,Pt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,Jt,H,wt,Pt,k,nt,E.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,It),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function gt(w,E,k){let nt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=o.TEXTURE_3D);const it=Dt(w,E),W=E.source;i.bindTexture(nt,w.__webglTexture,o.TEXTURE0+k);const Lt=r.get(W);if(W.version!==Lt.__version||it===!0){i.activeTexture(o.TEXTURE0+k);const Rt=De.getPrimaries(De.workingColorSpace),It=E.colorSpace===Ga?null:De.getPrimaries(E.colorSpace),qt=E.colorSpace===Ga||Rt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let bt=A(E.image,!1,l.maxTextureSize);bt=yt(E,bt);const Et=u.convert(E.format,E.colorSpace),Ht=u.convert(E.type);let Bt=N(E.internalFormat,Et,Ht,E.colorSpace,E.isVideoTexture);Tt(nt,E);let Ct;const Jt=E.mipmaps,H=E.isVideoTexture!==!0,wt=Lt.__version===void 0||it===!0,Pt=W.dataReady,kt=z(E,bt);if(E.isDepthTexture)Bt=U(E.format===ko,E.type),wt&&(H?i.texStorage2D(o.TEXTURE_2D,1,Bt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,bt.width,bt.height,0,Et,Ht,null));else if(E.isDataTexture)if(Jt.length>0){H&&wt&&i.texStorage2D(o.TEXTURE_2D,kt,Bt,Jt[0].width,Jt[0].height);for(let Ot=0,xt=Jt.length;Ot<xt;Ot++)Ct=Jt[Ot],H?Pt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,Ct.width,Ct.height,Et,Ht,Ct.data):i.texImage2D(o.TEXTURE_2D,Ot,Bt,Ct.width,Ct.height,0,Et,Ht,Ct.data);E.generateMipmaps=!1}else H?(wt&&i.texStorage2D(o.TEXTURE_2D,kt,Bt,bt.width,bt.height),Pt&&at(E,bt,Et,Ht)):i.texImage2D(o.TEXTURE_2D,0,Bt,bt.width,bt.height,0,Et,Ht,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Bt,Jt[0].width,Jt[0].height,bt.depth);for(let Ot=0,xt=Jt.length;Ot<xt;Ot++)if(Ct=Jt[Ot],E.format!==Ti)if(Et!==null)if(H){if(Pt)if(E.layerUpdates.size>0){const Zt=l0(Ct.width,Ct.height,E.format,E.type);for(const le of E.layerUpdates){const ue=Ct.data.subarray(le*Zt/Ct.data.BYTES_PER_ELEMENT,(le+1)*Zt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,le,Ct.width,Ct.height,1,Et,ue)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,Ct.width,Ct.height,bt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ot,Bt,Ct.width,Ct.height,bt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Pt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,Ct.width,Ct.height,bt.depth,Et,Ht,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ot,Bt,Ct.width,Ct.height,bt.depth,0,Et,Ht,Ct.data)}else{H&&wt&&i.texStorage2D(o.TEXTURE_2D,kt,Bt,Jt[0].width,Jt[0].height);for(let Ot=0,xt=Jt.length;Ot<xt;Ot++)Ct=Jt[Ot],E.format!==Ti?Et!==null?H?Pt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ot,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,Ot,Bt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Pt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,Ct.width,Ct.height,Et,Ht,Ct.data):i.texImage2D(o.TEXTURE_2D,Ot,Bt,Ct.width,Ct.height,0,Et,Ht,Ct.data)}else if(E.isDataArrayTexture)if(H){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Bt,bt.width,bt.height,bt.depth),Pt)if(E.layerUpdates.size>0){const Ot=l0(bt.width,bt.height,E.format,E.type);for(const xt of E.layerUpdates){const Zt=bt.data.subarray(xt*Ot/bt.data.BYTES_PER_ELEMENT,(xt+1)*Ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Et,Ht,Zt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Et,Ht,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,bt.width,bt.height,bt.depth,0,Et,Ht,bt.data);else if(E.isData3DTexture)H?(wt&&i.texStorage3D(o.TEXTURE_3D,kt,Bt,bt.width,bt.height,bt.depth),Pt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Et,Ht,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,bt.width,bt.height,bt.depth,0,Et,Ht,bt.data);else if(E.isFramebufferTexture){if(wt)if(H)i.texStorage2D(o.TEXTURE_2D,kt,Bt,bt.width,bt.height);else{let Ot=bt.width,xt=bt.height;for(let Zt=0;Zt<kt;Zt++)i.texImage2D(o.TEXTURE_2D,Zt,Bt,Ot,xt,0,Et,Ht,null),Ot>>=1,xt>>=1}}else if(Jt.length>0){if(H&&wt){const Ot=Nt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,kt,Bt,Ot.width,Ot.height)}for(let Ot=0,xt=Jt.length;Ot<xt;Ot++)Ct=Jt[Ot],H?Pt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,Et,Ht,Ct):i.texImage2D(o.TEXTURE_2D,Ot,Bt,Et,Ht,Ct);E.generateMipmaps=!1}else if(H){if(wt){const Ot=Nt(bt);i.texStorage2D(o.TEXTURE_2D,kt,Bt,Ot.width,Ot.height)}Pt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Ht,bt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Et,Ht,bt);y(E)&&_(nt),Lt.__version=W.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Ut(w,E,k){if(E.image.length!==6)return;const nt=Dt(w,E),it=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+k);const W=r.get(it);if(it.version!==W.__version||nt===!0){i.activeTexture(o.TEXTURE0+k);const Lt=De.getPrimaries(De.workingColorSpace),Rt=E.colorSpace===Ga?null:De.getPrimaries(E.colorSpace),It=E.colorSpace===Ga||Lt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let xt=0;xt<6;xt++)!qt&&!bt?Et[xt]=A(E.image[xt],!0,l.maxCubemapSize):Et[xt]=bt?E.image[xt].image:E.image[xt],Et[xt]=yt(E,Et[xt]);const Ht=Et[0],Bt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),Jt=N(E.internalFormat,Bt,Ct,E.colorSpace),H=E.isVideoTexture!==!0,wt=W.__version===void 0||nt===!0,Pt=it.dataReady;let kt=z(E,Ht);Tt(o.TEXTURE_CUBE_MAP,E);let Ot;if(qt){H&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Jt,Ht.width,Ht.height);for(let xt=0;xt<6;xt++){Ot=Et[xt].mipmaps;for(let Zt=0;Zt<Ot.length;Zt++){const le=Ot[Zt];E.format!==Ti?Bt!==null?H?Pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,0,0,le.width,le.height,Bt,le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,Jt,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,0,0,le.width,le.height,Bt,Ct,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,Jt,le.width,le.height,0,Bt,Ct,le.data)}}}else{if(Ot=E.mipmaps,H&&wt){Ot.length>0&&kt++;const xt=Nt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Jt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){H?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Et[xt].width,Et[xt].height,Bt,Ct,Et[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Jt,Et[xt].width,Et[xt].height,0,Bt,Ct,Et[xt].data);for(let Zt=0;Zt<Ot.length;Zt++){const ue=Ot[Zt].image[xt].image;H?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,0,0,ue.width,ue.height,Bt,Ct,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,Jt,ue.width,ue.height,0,Bt,Ct,ue.data)}}else{H?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt,Ct,Et[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Jt,Bt,Ct,Et[xt]);for(let Zt=0;Zt<Ot.length;Zt++){const le=Ot[Zt];H?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,0,0,Bt,Ct,le.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,Jt,Bt,Ct,le.image[xt])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),W.__version=it.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Vt(w,E,k,nt,it,W){const Lt=u.convert(k.format,k.colorSpace),Rt=u.convert(k.type),It=N(k.internalFormat,Lt,Rt,k.colorSpace),qt=r.get(E),bt=r.get(k);if(bt.__renderTarget=E,!qt.__hasExternalTextures){const Et=Math.max(1,E.width>>W),Ht=Math.max(1,E.height>>W);it===o.TEXTURE_3D||it===o.TEXTURE_2D_ARRAY?i.texImage3D(it,W,It,Et,Ht,E.depth,0,Lt,Rt,null):i.texImage2D(it,W,It,Et,Ht,0,Lt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,nt,it,bt.__webglTexture,0,dt(E)):(it===o.TEXTURE_2D||it>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,nt,it,bt.__webglTexture,W),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(w,E,k){if(o.bindRenderbuffer(o.RENDERBUFFER,w),E.depthBuffer){const nt=E.depthTexture,it=nt&&nt.isDepthTexture?nt.type:null,W=U(E.stencilBuffer,it),Lt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=dt(E);ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,W,E.width,E.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,W,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,W,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,w)}else{const nt=E.textures;for(let it=0;it<nt.length;it++){const W=nt[it],Lt=u.convert(W.format,W.colorSpace),Rt=u.convert(W.type),It=N(W.internalFormat,Lt,Rt,W.colorSpace),qt=dt(E);k&&ut(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,It,E.width,E.height):ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,It,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,It,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ae(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=r.get(E.depthTexture);nt.__renderTarget=E,(!nt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt(E.depthTexture,0);const it=nt.__webglTexture,W=dt(E);if(E.depthTexture.format===Vo)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,it,0,W):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,it,0);else if(E.depthTexture.format===ko)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,it,0,W):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Le(w){const E=r.get(w),k=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const nt=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",it)};nt.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=nt}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const nt=w.texture.mipmaps;nt&&nt.length>0?ae(E.__webglFramebuffer[0],w):ae(E.__webglFramebuffer,w)}else if(k){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=o.createRenderbuffer(),Kt(E.__webglDepthbuffer[nt],w,!1);else{const it=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer[nt];o.bindRenderbuffer(o.RENDERBUFFER,W),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,W)}}else{const nt=w.texture.mipmaps;if(nt&&nt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Kt(E.__webglDepthbuffer,w,!1);else{const it=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,W),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,W)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(w,E,k){const nt=r.get(w);E!==void 0&&Vt(nt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),k!==void 0&&Le(w)}function I(w){const E=w.texture,k=r.get(w),nt=r.get(E);w.addEventListener("dispose",V);const it=w.textures,W=w.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=E.version,h.memory.textures++),W){k.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[Rt]=[];for(let It=0;It<E.mipmaps.length;It++)k.__webglFramebuffer[Rt][It]=o.createFramebuffer()}else k.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)k.__webglFramebuffer[Rt]=o.createFramebuffer()}else k.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let Rt=0,It=it.length;Rt<It;Rt++){const qt=r.get(it[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&ut(w)===!1){k.__webglMultisampledFramebuffer=o.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Rt=0;Rt<it.length;Rt++){const It=it[Rt];k.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,k.__webglColorRenderbuffer[Rt]);const qt=u.convert(It.format,It.colorSpace),bt=u.convert(It.type),Et=N(It.internalFormat,qt,bt,It.colorSpace,w.isXRRenderTarget===!0),Ht=dt(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,Et,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,k.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=o.createRenderbuffer(),Kt(k.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(W){i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture),Tt(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let It=0;It<E.mipmaps.length;It++)Vt(k.__webglFramebuffer[Rt][It],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,It);else Vt(k.__webglFramebuffer[Rt],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let Rt=0,It=it.length;Rt<It;Rt++){const qt=it[Rt],bt=r.get(qt);let Et=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Et=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,bt.__webglTexture),Tt(Et,qt),Vt(k.__webglFramebuffer,w,qt,o.COLOR_ATTACHMENT0+Rt,Et,0),y(qt)&&_(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,nt.__webglTexture),Tt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let It=0;It<E.mipmaps.length;It++)Vt(k.__webglFramebuffer[It],w,E,o.COLOR_ATTACHMENT0,Rt,It);else Vt(k.__webglFramebuffer,w,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&_(Rt),i.unbindTexture()}w.depthBuffer&&Le(w)}function Re(w){const E=w.textures;for(let k=0,nt=E.length;k<nt;k++){const it=E[k];if(y(it)){const W=F(w),Lt=r.get(it).__webglTexture;i.bindTexture(W,Lt),_(W),i.unbindTexture()}}}const te=[],Ee=[];function rt(w){if(w.samples>0){if(ut(w)===!1){const E=w.textures,k=w.width,nt=w.height;let it=o.COLOR_BUFFER_BIT;const W=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=r.get(w),Rt=E.length>1;if(Rt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const It=w.texture.mipmaps;It&&It.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[qt]);const bt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,k,nt,0,0,k,nt,it,o.NEAREST),m===!0&&(te.length=0,Ee.length=0,te.push(o.COLOR_ATTACHMENT0+qt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(te.push(W),Ee.push(W),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[qt]);const bt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function dt(w){return Math.min(l.maxSamples,w.samples)}function ut(w){const E=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(w){const E=h.render.frame;g.get(w)!==E&&(g.set(w,E),w.update())}function yt(w,E){const k=w.colorSpace,nt=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Cs&&k!==Ga&&(De.getTransfer(k)===Ge?(nt!==Ti||it!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=ht,this.resetTextureUnits=ft,this.setTexture2D=vt,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=ge,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=ut}function wA(o,t){function i(r,l=Ga){let u;const h=De.getTransfer(l);if(r===zi)return o.UNSIGNED_BYTE;if(r===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===B0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===P0)return o.BYTE;if(r===z0)return o.SHORT;if(r===Ho)return o.UNSIGNED_SHORT;if(r===Nd)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===oa)return o.FLOAT;if(r===Wo)return o.HALF_FLOAT;if(r===I0)return o.ALPHA;if(r===F0)return o.RGB;if(r===Ti)return o.RGBA;if(r===Vo)return o.DEPTH_COMPONENT;if(r===ko)return o.DEPTH_STENCIL;if(r===H0)return o.RED;if(r===zd)return o.RED_INTEGER;if(r===G0)return o.RG;if(r===Bd)return o.RG_INTEGER;if(r===Id)return o.RGBA_INTEGER;if(r===Nc||r===Oc||r===Pc||r===zc)if(h===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Nc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Nc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===$h||r===td||r===ed)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===td)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nd||r===id||r===ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===nd||r===id)return h===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ad)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ud)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bc||r===Sd||r===xd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Bc)return h===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===V0||r===Md||r===yd||r===Ed)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Bc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Md)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class cv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new cv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ca({vertexShader:CA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ai(new jc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends Us{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,S=null,M=null,b=null;const A=new UA,y={},_=i.getContextAttributes();let F=null,N=null;const U=[],z=[],G=new ve;let V=null;const Y=new mi;Y.viewport=new an;const D=new mi;D.viewport=new an;const C=[Y,D],B=new JM;let ft=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=U[at];return gt===void 0&&(gt=new wh,U[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=U[at];return gt===void 0&&(gt=new wh,U[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=U[at];return gt===void 0&&(gt=new wh,U[at]=gt),gt.getHandSpace()};function _t(at){const gt=z.indexOf(at.inputSource);if(gt===-1)return;const Ut=U[gt];Ut!==void 0&&(Ut.update(at.inputSource,at.frame,p||h),Ut.dispatchEvent({type:at.type,data:at.inputSource}))}function vt(){l.removeEventListener("select",_t),l.removeEventListener("selectstart",_t),l.removeEventListener("selectend",_t),l.removeEventListener("squeeze",_t),l.removeEventListener("squeezestart",_t),l.removeEventListener("squeezeend",_t),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",P);for(let at=0;at<U.length;at++){const gt=z[at];gt!==null&&(z[at]=null,U[at].disconnect(gt))}ft=null,ht=null,A.reset();for(const at in y)delete y[at];t.setRenderTarget(F),M=null,S=null,v=null,l=null,N=null,Ft.stop(),r.isPresenting=!1,t.setPixelRatio(V),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",_t),l.addEventListener("selectstart",_t),l.addEventListener("selectend",_t),l.addEventListener("squeeze",_t),l.addEventListener("squeezestart",_t),l.addEventListener("squeezeend",_t),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Vt=null,Kt=null;_.depth&&(Kt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=_.stencil?ko:Vo,Vt=_.stencil?Go:xr);const ae={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:u};S=v.createProjectionLayer(ae),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),N=new Mr(S.textureWidth,S.textureHeight,{format:Ti,type:zi,depthTexture:new ev(S.textureWidth,S.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ut={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Mr(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function P(at){for(let gt=0;gt<at.removed.length;gt++){const Ut=at.removed[gt],Vt=z.indexOf(Ut);Vt>=0&&(z[Vt]=null,U[Vt].disconnect(Ut))}for(let gt=0;gt<at.added.length;gt++){const Ut=at.added[gt];let Vt=z.indexOf(Ut);if(Vt===-1){for(let ae=0;ae<U.length;ae++)if(ae>=z.length){z.push(Ut),Vt=ae;break}else if(z[ae]===null){z[ae]=Ut,Vt=ae;break}if(Vt===-1)break}const Kt=U[Vt];Kt&&Kt.connect(Ut)}}const Q=new tt,Z=new tt;function At(at,gt,Ut){Q.setFromMatrixPosition(gt.matrixWorld),Z.setFromMatrixPosition(Ut.matrixWorld);const Vt=Q.distanceTo(Z),Kt=gt.projectionMatrix.elements,ae=Ut.projectionMatrix.elements,Le=Kt[14]/(Kt[10]-1),ge=Kt[14]/(Kt[10]+1),I=(Kt[9]+1)/Kt[5],Re=(Kt[9]-1)/Kt[5],te=(Kt[8]-1)/Kt[0],Ee=(ae[8]+1)/ae[0],rt=Le*te,dt=Le*Ee,ut=Vt/(-te+Ee),pt=ut*-te;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(pt),at.translateZ(ut),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Kt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const yt=Le+ut,Nt=ge+ut,w=rt-pt,E=dt+(Vt-pt),k=I*ge/Nt*yt,nt=Re*ge/Nt*yt;at.projectionMatrix.makePerspective(w,E,k,nt,yt,Nt),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function L(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let gt=at.near,Ut=at.far;A.texture!==null&&(A.depthNear>0&&(gt=A.depthNear),A.depthFar>0&&(Ut=A.depthFar)),B.near=D.near=Y.near=gt,B.far=D.far=Y.far=Ut,(ft!==B.near||ht!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),ft=B.near,ht=B.far),B.layers.mask=at.layers.mask|6,Y.layers.mask=B.layers.mask&3,D.layers.mask=B.layers.mask&5;const Vt=at.parent,Kt=B.cameras;L(B,Vt);for(let ae=0;ae<Kt.length;ae++)L(Kt[ae],Vt);Kt.length===2?At(B,Y,D):B.projectionMatrix.copy(Y.projectionMatrix),et(at,B,Vt)};function et(at,gt,Ut){Ut===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(Ut.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=bd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(at){m=at,S!==null&&(S.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(B)},this.getCameraTexture=function(at){return y[at]};let Tt=null;function Dt(at,gt){if(g=gt.getViewerPose(p||h),b=gt,g!==null){const Ut=g.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Vt=!1;Ut.length!==B.cameras.length&&(B.cameras.length=0,Vt=!0);for(let ge=0;ge<Ut.length;ge++){const I=Ut[ge];let Re=null;if(M!==null)Re=M.getViewport(I);else{const Ee=v.getViewSubImage(S,I);Re=Ee.viewport,ge===0&&(t.setRenderTargetTextures(N,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(N))}let te=C[ge];te===void 0&&(te=new mi,te.layers.enable(ge),te.viewport=new an,C[ge]=te),te.matrix.fromArray(I.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(I.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(B.matrix.copy(te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Vt===!0&&B.cameras.push(te)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const ge=v.getDepthInformation(Ut[0]);ge&&ge.isValid&&ge.texture&&A.init(ge,l.renderState)}if(Kt&&Kt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let ge=0;ge<Ut.length;ge++){const I=Ut[ge].camera;if(I){let Re=y[I];Re||(Re=new cv,y[I]=Re);const te=v.getCameraImage(I);Re.sourceTexture=te}}}for(let Ut=0;Ut<U.length;Ut++){const Vt=z[Ut],Kt=U[Ut];Vt!==null&&Kt!==void 0&&Kt.update(Vt,gt,p||h)}Tt&&Tt(at,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),b=null}const Ft=new av;Ft.setAnimationLoop(Dt),this.setAnimationLoop=function(at){Tt=at},this.dispose=function(){}}}const pr=new Bi,NA=new Ye;function OA(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,K0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,F,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),A(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,F,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===wn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===wn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const F=t.get(_),N=F.envMap,U=F.envMapRotation;N&&(y.envMap.value=N,pr.copy(U),pr.x*=-1,pr.y*=-1,pr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),y.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(pr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,F,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*F,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,F){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===wn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const F=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function PA(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const U=N.program;r.uniformBlockBinding(F,U)}function p(F,N){let U=l[F.id];U===void 0&&(b(F),U=g(F),l[F.id]=U,F.addEventListener("dispose",y));const z=N.program;r.updateUBOMapping(F,z);const G=t.render.frame;u[F.id]!==G&&(S(F),u[F.id]=G)}function g(F){const N=v();F.__bindingPointIndex=N;const U=o.createBuffer(),z=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const N=l[F.id],U=F.uniforms,z=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,V=U.length;G<V;G++){const Y=Array.isArray(U[G])?U[G]:[U[G]];for(let D=0,C=Y.length;D<C;D++){const B=Y[D];if(M(B,G,D,z)===!0){const ft=B.__offset,ht=Array.isArray(B.value)?B.value:[B.value];let _t=0;for(let vt=0;vt<ht.length;vt++){const P=ht[vt],Q=A(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ft+_t,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,_t),_t+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ft,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,N,U,z){const G=F.value,V=N+"_"+U;if(z[V]===void 0)return typeof G=="number"||typeof G=="boolean"?z[V]=G:z[V]=G.clone(),!0;{const Y=z[V];if(typeof G=="number"||typeof G=="boolean"){if(Y!==G)return z[V]=G,!0}else if(Y.equals(G)===!1)return Y.copy(G),!0}return!1}function b(F){const N=F.uniforms;let U=0;const z=16;for(let V=0,Y=N.length;V<Y;V++){const D=Array.isArray(N[V])?N[V]:[N[V]];for(let C=0,B=D.length;C<B;C++){const ft=D[C],ht=Array.isArray(ft.value)?ft.value:[ft.value];for(let _t=0,vt=ht.length;_t<vt;_t++){const P=ht[_t],Q=A(P),Z=U%z,At=Z%Q.boundary,L=Z+At;U+=At,L!==0&&z-L<Q.storage&&(U+=z-L),ft.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=U,U+=Q.storage}}}const G=U%z;return G>0&&(U+=z-G),F.__size=U,F.__cache={},this}function A(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function y(F){const N=F.target;N.removeEventListener("dispose",y);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class zA{constructor(t={}){const{canvas:i=fM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const F=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1;this._outputColorSpace=ii;let G=0,V=0,Y=null,D=-1,C=null;const B=new an,ft=new an;let ht=null;const _t=new be(0);let vt=0,P=i.width,Q=i.height,Z=1,At=null,L=null;const et=new an(0,0,P,Q),Tt=new an(0,0,P,Q);let Dt=!1;const Ft=new Gd;let at=!1,gt=!1;const Ut=new Ye,Vt=new tt,Kt=new an,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function ge(){return Y===null?Z:1}let I=r;function Re(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",Pt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),I===null){const q="webgl2";if(I=Re(q,R),I===null)throw Re(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let te,Ee,rt,dt,ut,pt,yt,Nt,w,E,k,nt,it,W,Lt,Rt,It,qt,bt,Et,Ht,Bt,Ct,Jt;function H(){te=new qT(I),te.init(),Bt=new wA(I,te),Ee=new FT(I,te,t,Bt),rt=new AA(I,te),Ee.reversedDepthBuffer&&S&&rt.buffers.depth.setReversed(!0),dt=new jT(I),ut=new dA,pt=new RA(I,te,rt,ut,Ee,Bt,dt),yt=new GT(U),Nt=new WT(U),w=new ey(I),Ct=new BT(I,w),E=new YT(I,w,dt,Ct),k=new QT(I,E,w,dt),bt=new KT(I,Ee,pt),Rt=new HT(ut),nt=new hA(U,yt,Nt,te,Ee,Ct,Rt),it=new OA(U,ut),W=new mA,Lt=new MA(te),qt=new zT(U,yt,Nt,rt,k,M,m),It=new TA(U,k,Ee),Jt=new PA(I,dt,Ee,rt),Et=new IT(I,te,dt),Ht=new ZT(I,te,dt),dt.programs=nt.programs,U.capabilities=Ee,U.extensions=te,U.properties=ut,U.renderLists=W,U.shadowMap=It,U.state=rt,U.info=dt}H();const wt=new LA(U,I);this.xr=wt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(P,Q,!1))},this.getSize=function(R){return R.set(P,Q)},this.setSize=function(R,q,lt=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Q=q,i.width=Math.floor(R*Z),i.height=Math.floor(q*Z),lt===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*Z,Q*Z).floor()},this.setDrawingBufferSize=function(R,q,lt){P=R,Q=q,Z=lt,i.width=Math.floor(R*lt),i.height=Math.floor(q*lt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,q,lt,ct){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,q,lt,ct),rt.viewport(B.copy(et).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(Tt)},this.setScissor=function(R,q,lt,ct){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,q,lt,ct),rt.scissor(ft.copy(Tt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){rt.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,lt=!0){let ct=0;if(R){let K=!1;if(Y!==null){const zt=Y.texture.format;K=zt===Id||zt===Bd||zt===zd}if(K){const zt=Y.texture.type,Gt=zt===zi||zt===xr||zt===Ho||zt===Go||zt===Od||zt===Pd,Yt=qt.getClearColor(),Xt=qt.getClearAlpha(),ne=Yt.r,re=Yt.g,Qt=Yt.b;Gt?(b[0]=ne,b[1]=re,b[2]=Qt,b[3]=Xt,I.clearBufferuiv(I.COLOR,0,b)):(A[0]=ne,A[1]=re,A[2]=Qt,A[3]=Xt,I.clearBufferiv(I.COLOR,0,A))}else ct|=I.COLOR_BUFFER_BIT}q&&(ct|=I.DEPTH_BUFFER_BIT),lt&&(ct|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Pt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),qt.dispose(),W.dispose(),Lt.dispose(),ut.dispose(),yt.dispose(),Nt.dispose(),k.dispose(),Ct.dispose(),Jt.dispose(),nt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ne),wt.removeEventListener("sessionend",Je),ke.stop()};function Pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=dt.autoReset,q=It.enabled,lt=It.autoUpdate,ct=It.needsUpdate,K=It.type;H(),dt.autoReset=R,It.enabled=q,It.autoUpdate=lt,It.needsUpdate=ct,It.type=K}function Ot(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const q=R.target;q.removeEventListener("dispose",xt),Zt(q)}function Zt(R){le(R),ut.remove(R)}function le(R){const q=ut.get(R).programs;q!==void 0&&(q.forEach(function(lt){nt.releaseProgram(lt)}),R.isShaderMaterial&&nt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,lt,ct,K,zt){q===null&&(q=ae);const Gt=K.isMesh&&K.matrixWorld.determinant()<0,Yt=fa(R,q,lt,ct,K);rt.setMaterial(ct,Gt);let Xt=lt.index,ne=1;if(ct.wireframe===!0){if(Xt=E.getWireframeAttribute(lt),Xt===void 0)return;ne=2}const re=lt.drawRange,Qt=lt.attributes.position;let de=re.start*ne,we=(re.start+re.count)*ne;zt!==null&&(de=Math.max(de,zt.start*ne),we=Math.min(we,(zt.start+zt.count)*ne)),Xt!==null?(de=Math.max(de,0),we=Math.min(we,Xt.count)):Qt!=null&&(de=Math.max(de,0),we=Math.min(we,Qt.count));const je=we-de;if(je<0||je===1/0)return;Ct.setup(K,ct,Yt,lt,Xt);let Be,pe=Et;if(Xt!==null&&(Be=w.get(Xt),pe=Ht,pe.setIndex(Be)),K.isMesh)ct.wireframe===!0?(rt.setLineWidth(ct.wireframeLinewidth*ge()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(K.isLine){let ee=ct.linewidth;ee===void 0&&(ee=1),rt.setLineWidth(ee*ge()),K.isLineSegments?pe.setMode(I.LINES):K.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else K.isPoints?pe.setMode(I.POINTS):K.isSprite&&pe.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))pe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ee=K._multiDrawStarts,Ze=K._multiDrawCounts,xe=K._multiDrawCount,Cn=Xt?w.get(Xt).bytesPerElement:1,_i=ut.get(ct).currentProgram.getUniforms();for(let zn=0;zn<xe;zn++)_i.setValue(I,"_gl_DrawID",zn),pe.render(ee[zn]/Cn,Ze[zn])}else if(K.isInstancedMesh)pe.renderInstances(de,je,K.count);else if(lt.isInstancedBufferGeometry){const ee=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ze=Math.min(lt.instanceCount,ee);pe.renderInstances(de,je,Ze)}else pe.render(de,je)};function ue(R,q,lt){R.transparent===!0&&R.side===sa&&R.forceSinglePass===!1?(R.side=wn,R.needsUpdate=!0,Ri(R,q,lt),R.side=Wa,R.needsUpdate=!0,Ri(R,q,lt),R.side=sa):Ri(R,q,lt)}this.compile=function(R,q,lt=null){lt===null&&(lt=R),_=Lt.get(lt),_.init(q),N.push(_),lt.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),R!==lt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ct=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const zt=K.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){const Yt=zt[Gt];ue(Yt,lt,K),ct.add(Yt)}else ue(zt,lt,K),ct.add(zt)}),_=N.pop(),ct},this.compileAsync=function(R,q,lt=null){const ct=this.compile(R,q,lt);return new Promise(K=>{function zt(){if(ct.forEach(function(Gt){ut.get(Gt).currentProgram.isReady()&&ct.delete(Gt)}),ct.size===0){K(R);return}setTimeout(zt,10)}te.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let oe=null;function Qe(R){oe&&oe(R)}function Ne(){ke.stop()}function Je(){ke.start()}const ke=new av;ke.setAnimationLoop(Qe),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(R){oe=R,wt.setAnimationLoop(R),R===null?ke.stop():ke.start()},wt.addEventListener("sessionstart",Ne),wt.addEventListener("sessionend",Je),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,Y),_=Lt.get(R,N.length),_.init(q),N.push(_),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ft.setFromProjectionMatrix(Ut,Pi,q.reversedDepth),gt=this.localClippingEnabled,at=Rt.init(this.clippingPlanes,gt),y=W.get(R,F.length),y.init(),F.push(y),wt.enabled===!0&&wt.isPresenting===!0){const zt=U.xr.getDepthSensingMesh();zt!==null&&Vn(zt,q,-1/0,U.sortObjects)}Vn(R,q,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(At,L),Le=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Le&&qt.addToRenderList(y,R),this.info.render.frame++,at===!0&&Rt.beginShadows();const lt=_.state.shadowsArray;It.render(lt,R,q),at===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=y.opaque,K=y.transmissive;if(_.setupLights(),q.isArrayCamera){const zt=q.cameras;if(K.length>0)for(let Gt=0,Yt=zt.length;Gt<Yt;Gt++){const Xt=zt[Gt];yr(ct,K,R,Xt)}Le&&qt.render(R);for(let Gt=0,Yt=zt.length;Gt<Yt;Gt++){const Xt=zt[Gt];si(y,R,Xt,Xt.viewport)}}else K.length>0&&yr(ct,K,R,q),Le&&qt.render(R),si(y,R,q);Y!==null&&V===0&&(pt.updateMultisampleRenderTarget(Y),pt.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(U,R,q),Ct.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],at===!0&&Rt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Vn(R,q,lt,ct){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ft.intersectsSprite(R)){ct&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Gt=k.update(R),Yt=R.material;Yt.visible&&y.push(R,Gt,Yt,lt,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ft.intersectsObject(R))){const Gt=k.update(R),Yt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Kt.copy(Gt.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Yt)){const Xt=Gt.groups;for(let ne=0,re=Xt.length;ne<re;ne++){const Qt=Xt[ne],de=Yt[Qt.materialIndex];de&&de.visible&&y.push(R,Gt,de,lt,Kt.z,Qt)}}else Yt.visible&&y.push(R,Gt,Yt,lt,Kt.z,null)}}const zt=R.children;for(let Gt=0,Yt=zt.length;Gt<Yt;Gt++)Vn(zt[Gt],q,lt,ct)}function si(R,q,lt,ct){const K=R.opaque,zt=R.transmissive,Gt=R.transparent;_.setupLightsView(lt),at===!0&&Rt.setGlobalState(U.clippingPlanes,lt),ct&&rt.viewport(B.copy(ct)),K.length>0&&ua(K,q,lt),zt.length>0&&ua(zt,q,lt),Gt.length>0&&ua(Gt,q,lt),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function yr(R,q,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ct.id]===void 0&&(_.state.transmissionRenderTarget[ct.id]=new Mr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Wo:zi,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const zt=_.state.transmissionRenderTarget[ct.id],Gt=ct.viewport||B;zt.setSize(Gt.z*U.transmissionResolutionScale,Gt.w*U.transmissionResolutionScale);const Yt=U.getRenderTarget(),Xt=U.getActiveCubeFace(),ne=U.getActiveMipmapLevel();U.setRenderTarget(zt),U.getClearColor(_t),vt=U.getClearAlpha(),vt<1&&U.setClearColor(16777215,.5),U.clear(),Le&&qt.render(lt);const re=U.toneMapping;U.toneMapping=ka;const Qt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),_.setupLightsView(ct),at===!0&&Rt.setGlobalState(U.clippingPlanes,ct),ua(R,lt,ct),pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt),te.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let we=0,je=q.length;we<je;we++){const Be=q[we],pe=Be.object,ee=Be.geometry,Ze=Be.material,xe=Be.group;if(Ze.side===sa&&pe.layers.test(ct.layers)){const Cn=Ze.side;Ze.side=wn,Ze.needsUpdate=!0,Ns(pe,lt,ct,ee,Ze,xe),Ze.side=Cn,Ze.needsUpdate=!0,de=!0}}de===!0&&(pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt))}U.setRenderTarget(Yt,Xt,ne),U.setClearColor(_t,vt),Qt!==void 0&&(ct.viewport=Qt),U.toneMapping=re}function ua(R,q,lt){const ct=q.isScene===!0?q.overrideMaterial:null;for(let K=0,zt=R.length;K<zt;K++){const Gt=R[K],Yt=Gt.object,Xt=Gt.geometry,ne=Gt.group;let re=Gt.material;re.allowOverride===!0&&ct!==null&&(re=ct),Yt.layers.test(lt.layers)&&Ns(Yt,q,lt,Xt,re,ne)}}function Ns(R,q,lt,ct,K,zt){R.onBeforeRender(U,q,lt,ct,K,zt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,q,lt,ct,R,zt),K.transparent===!0&&K.side===sa&&K.forceSinglePass===!1?(K.side=wn,K.needsUpdate=!0,U.renderBufferDirect(lt,q,ct,K,R,zt),K.side=Wa,K.needsUpdate=!0,U.renderBufferDirect(lt,q,ct,K,R,zt),K.side=sa):U.renderBufferDirect(lt,q,ct,K,R,zt),R.onAfterRender(U,q,lt,ct,K,zt)}function Ri(R,q,lt){q.isScene!==!0&&(q=ae);const ct=ut.get(R),K=_.state.lights,zt=_.state.shadowsArray,Gt=K.state.version,Yt=nt.getParameters(R,K.state,zt,q,lt),Xt=nt.getProgramCacheKey(Yt);let ne=ct.programs;ct.environment=R.isMeshStandardMaterial?q.environment:null,ct.fog=q.fog,ct.envMap=(R.isMeshStandardMaterial?Nt:yt).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",xt),ne=new Map,ct.programs=ne);let re=ne.get(Xt);if(re!==void 0){if(ct.currentProgram===re&&ct.lightsStateVersion===Gt)return Fi(R,Yt),re}else Yt.uniforms=nt.getUniforms(R),R.onBeforeCompile(Yt,U),re=nt.acquireProgram(Yt,Xt),ne.set(Xt,re),ct.uniforms=Yt.uniforms;const Qt=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Rt.uniform),Fi(R,Yt),ct.needsLights=ha(R),ct.lightsStateVersion=Gt,ct.needsLights&&(Qt.ambientLightColor.value=K.state.ambient,Qt.lightProbe.value=K.state.probe,Qt.directionalLights.value=K.state.directional,Qt.directionalLightShadows.value=K.state.directionalShadow,Qt.spotLights.value=K.state.spot,Qt.spotLightShadows.value=K.state.spotShadow,Qt.rectAreaLights.value=K.state.rectArea,Qt.ltc_1.value=K.state.rectAreaLTC1,Qt.ltc_2.value=K.state.rectAreaLTC2,Qt.pointLights.value=K.state.point,Qt.pointLightShadows.value=K.state.pointShadow,Qt.hemisphereLights.value=K.state.hemi,Qt.directionalShadowMap.value=K.state.directionalShadowMap,Qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qt.spotShadowMap.value=K.state.spotShadowMap,Qt.spotLightMatrix.value=K.state.spotLightMatrix,Qt.spotLightMap.value=K.state.spotLightMap,Qt.pointShadowMap.value=K.state.pointShadowMap,Qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ct.currentProgram=re,ct.uniformsList=null,re}function Er(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Fi(R,q){const lt=ut.get(R);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function fa(R,q,lt,ct,K){q.isScene!==!0&&(q=ae),pt.resetTextureUnits();const zt=q.fog,Gt=ct.isMeshStandardMaterial?q.environment:null,Yt=Y===null?U.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Cs,Xt=(ct.isMeshStandardMaterial?Nt:yt).get(ct.envMap||Gt),ne=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,re=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Qt=!!lt.morphAttributes.position,de=!!lt.morphAttributes.normal,we=!!lt.morphAttributes.color;let je=ka;ct.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(je=U.toneMapping);const Be=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,pe=Be!==void 0?Be.length:0,ee=ut.get(ct),Ze=_.state.lights;if(at===!0&&(gt===!0||R!==C)){const tn=R===C&&ct.id===D;Rt.setState(ct,R,tn)}let xe=!1;ct.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ze.state.version||ee.outputColorSpace!==Yt||K.isBatchedMesh&&ee.batching===!1||!K.isBatchedMesh&&ee.batching===!0||K.isBatchedMesh&&ee.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ee.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ee.instancing===!1||!K.isInstancedMesh&&ee.instancing===!0||K.isSkinnedMesh&&ee.skinning===!1||!K.isSkinnedMesh&&ee.skinning===!0||K.isInstancedMesh&&ee.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ee.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ee.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ee.instancingMorph===!1&&K.morphTexture!==null||ee.envMap!==Xt||ct.fog===!0&&ee.fog!==zt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Rt.numPlanes||ee.numIntersection!==Rt.numIntersection)||ee.vertexAlphas!==ne||ee.vertexTangents!==re||ee.morphTargets!==Qt||ee.morphNormals!==de||ee.morphColors!==we||ee.toneMapping!==je||ee.morphTargetsCount!==pe)&&(xe=!0):(xe=!0,ee.__version=ct.version);let Cn=ee.currentProgram;xe===!0&&(Cn=Ri(ct,q,K));let _i=!1,zn=!1,_n=!1;const Xe=Cn.getUniforms(),Bn=ee.uniforms;if(rt.useProgram(Cn.program)&&(_i=!0,zn=!0,_n=!0),ct.id!==D&&(D=ct.id,zn=!0),_i||C!==R){rt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xe.setValue(I,"projectionMatrix",R.projectionMatrix),Xe.setValue(I,"viewMatrix",R.matrixWorldInverse);const En=Xe.map.cameraPosition;En!==void 0&&En.setValue(I,Vt.setFromMatrixPosition(R.matrixWorld)),Ee.logarithmicDepthBuffer&&Xe.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Xe.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,zn=!0,_n=!0)}if(K.isSkinnedMesh){Xe.setOptional(I,K,"bindMatrix"),Xe.setOptional(I,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Xe.setValue(I,"boneTexture",tn.boneTexture,pt))}K.isBatchedMesh&&(Xe.setOptional(I,K,"batchingTexture"),Xe.setValue(I,"batchingTexture",K._matricesTexture,pt),Xe.setOptional(I,K,"batchingIdTexture"),Xe.setValue(I,"batchingIdTexture",K._indirectTexture,pt),Xe.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&Xe.setValue(I,"batchingColorTexture",K._colorsTexture,pt));const Dn=lt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&bt.update(K,lt,Cn),(zn||ee.receiveShadow!==K.receiveShadow)&&(ee.receiveShadow=K.receiveShadow,Xe.setValue(I,"receiveShadow",K.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Bn.envMap.value=Xt,Bn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&q.environment!==null&&(Bn.envMapIntensity.value=q.environmentIntensity),zn&&(Xe.setValue(I,"toneMappingExposure",U.toneMappingExposure),ee.needsLights&&qa(Bn,_n),zt&&ct.fog===!0&&it.refreshFogUniforms(Bn,zt),it.refreshMaterialUniforms(Bn,ct,Z,Q,_.state.transmissionRenderTarget[R.id]),Ic.upload(I,Er(ee),Bn,pt)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Ic.upload(I,Er(ee),Bn,pt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Xe.setValue(I,"center",K.center),Xe.setValue(I,"modelViewMatrix",K.modelViewMatrix),Xe.setValue(I,"normalMatrix",K.normalMatrix),Xe.setValue(I,"modelMatrix",K.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const tn=ct.uniformsGroups;for(let En=0,Tr=tn.length;En<Tr;En++){const kn=tn[En];Jt.update(kn,Cn),Jt.bind(kn,Cn)}}return Cn}function qa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,q,lt){const ct=ut.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),ut.get(R.texture).__webglTexture=q,ut.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const lt=ut.get(R);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const ln=I.createFramebuffer();this.setRenderTarget=function(R,q=0,lt=0){Y=R,G=q,V=lt;let ct=!0,K=null,zt=!1,Gt=!1;if(R){const Xt=ut.get(R);if(Xt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(I.FRAMEBUFFER,null),ct=!1;else if(Xt.__webglFramebuffer===void 0)pt.setupRenderTarget(R);else if(Xt.__hasExternalTextures)pt.rebindTextures(R,ut.get(R.texture).__webglTexture,ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Xt.__boundDepthTexture!==Qt){if(Qt!==null&&ut.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Gt=!0);const re=ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[q])?K=re[q][lt]:K=re[q],zt=!0):R.samples>0&&pt.useMultisampledRTT(R)===!1?K=ut.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?K=re[lt]:K=re,B.copy(R.viewport),ft.copy(R.scissor),ht=R.scissorTest}else B.copy(et).multiplyScalar(Z).floor(),ft.copy(Tt).multiplyScalar(Z).floor(),ht=Dt;if(lt!==0&&(K=ln),rt.bindFramebuffer(I.FRAMEBUFFER,K)&&ct&&rt.drawBuffers(R,K),rt.viewport(B),rt.scissor(ft),rt.setScissorTest(ht),zt){const Xt=ut.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xt.__webglTexture,lt)}else if(Gt){const Xt=q;for(let ne=0;ne<R.textures.length;ne++){const re=ut.get(R.textures[ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ne,re.__webglTexture,lt,Xt)}}else if(R!==null&&lt!==0){const Xt=ut.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xt.__webglTexture,lt)}D=-1},this.readRenderTargetPixels=function(R,q,lt,ct,K,zt,Gt,Yt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){rt.bindFramebuffer(I.FRAMEBUFFER,Xt);try{const ne=R.textures[Yt],re=ne.format,Qt=ne.type;if(!Ee.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ct&&lt>=0&&lt<=R.height-K&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Yt),I.readPixels(q,lt,ct,K,Bt.convert(re),Bt.convert(Qt),zt))}finally{const ne=Y!==null?ut.get(Y).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,q,lt,ct,K,zt,Gt,Yt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(q>=0&&q<=R.width-ct&&lt>=0&&lt<=R.height-K){rt.bindFramebuffer(I.FRAMEBUFFER,Xt);const ne=R.textures[Yt],re=ne.format,Qt=ne.type;if(!Ee.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.bufferData(I.PIXEL_PACK_BUFFER,zt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Yt),I.readPixels(q,lt,ct,K,Bt.convert(re),Bt.convert(Qt),0);const we=Y!==null?ut.get(Y).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,we);const je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hM(I,je,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,zt),I.deleteBuffer(de),I.deleteSync(je),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,lt=0){const ct=Math.pow(2,-lt),K=Math.floor(R.image.width*ct),zt=Math.floor(R.image.height*ct),Gt=q!==null?q.x:0,Yt=q!==null?q.y:0;pt.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,lt,0,0,Gt,Yt,K,zt),rt.unbindTexture()};const Ko=I.createFramebuffer(),Qo=I.createFramebuffer();this.copyTextureToTexture=function(R,q,lt=null,ct=null,K=0,zt=null){zt===null&&(K!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),zt=K,K=0):zt=0);let Gt,Yt,Xt,ne,re,Qt,de,we,je;const Be=R.isCompressedTexture?R.mipmaps[zt]:R.image;if(lt!==null)Gt=lt.max.x-lt.min.x,Yt=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,ne=lt.min.x,re=lt.min.y,Qt=lt.isBox3?lt.min.z:0;else{const Dn=Math.pow(2,-K);Gt=Math.floor(Be.width*Dn),Yt=Math.floor(Be.height*Dn),R.isDataArrayTexture?Xt=Be.depth:R.isData3DTexture?Xt=Math.floor(Be.depth*Dn):Xt=1,ne=0,re=0,Qt=0}ct!==null?(de=ct.x,we=ct.y,je=ct.z):(de=0,we=0,je=0);const pe=Bt.convert(q.format),ee=Bt.convert(q.type);let Ze;q.isData3DTexture?(pt.setTexture3D(q,0),Ze=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(pt.setTexture2DArray(q,0),Ze=I.TEXTURE_2D_ARRAY):(pt.setTexture2D(q,0),Ze=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const xe=I.getParameter(I.UNPACK_ROW_LENGTH),Cn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_i=I.getParameter(I.UNPACK_SKIP_PIXELS),zn=I.getParameter(I.UNPACK_SKIP_ROWS),_n=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const Xe=R.isDataArrayTexture||R.isData3DTexture,Bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Dn=ut.get(R),tn=ut.get(q),En=ut.get(Dn.__renderTarget),Tr=ut.get(tn.__renderTarget);rt.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let kn=0;kn<Xt;kn++)Xe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ut.get(R).__webglTexture,K,Qt+kn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ut.get(q).__webglTexture,zt,je+kn)),I.blitFramebuffer(ne,re,Gt,Yt,de,we,Gt,Yt,I.DEPTH_BUFFER_BIT,I.NEAREST);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||ut.has(R)){const Dn=ut.get(R),tn=ut.get(q);rt.bindFramebuffer(I.READ_FRAMEBUFFER,Ko),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qo);for(let En=0;En<Xt;En++)Xe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dn.__webglTexture,K,Qt+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dn.__webglTexture,K),Bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,zt,je+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,zt),K!==0?I.blitFramebuffer(ne,re,Gt,Yt,de,we,Gt,Yt,I.COLOR_BUFFER_BIT,I.NEAREST):Bn?I.copyTexSubImage3D(Ze,zt,de,we,je+En,ne,re,Gt,Yt):I.copyTexSubImage2D(Ze,zt,de,we,ne,re,Gt,Yt);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Ze,zt,de,we,je,Gt,Yt,Xt,pe,ee,Be.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Ze,zt,de,we,je,Gt,Yt,Xt,pe,Be.data):I.texSubImage3D(Ze,zt,de,we,je,Gt,Yt,Xt,pe,ee,Be):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,zt,de,we,Gt,Yt,pe,ee,Be.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,zt,de,we,Be.width,Be.height,pe,Be.data):I.texSubImage2D(I.TEXTURE_2D,zt,de,we,Gt,Yt,pe,ee,Be);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Cn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_i),I.pixelStorei(I.UNPACK_SKIP_ROWS,zn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_n),zt===0&&q.generateMipmaps&&I.generateMipmap(Ze),rt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,lt=null,ct=null,K=0){return Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,lt,ct,K)},this.initRenderTarget=function(R){ut.get(R).__webglFramebuffer===void 0&&pt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?pt.setTextureCube(R,0):R.isData3DTexture?pt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?pt.setTexture2DArray(R,0):pt.setTexture2D(R,0),rt.unbindTexture()},this.resetState=function(){G=0,V=0,Y=null,rt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const BA=()=>{const o=ze.useRef(null),t=ze.useRef(null),i=ze.useRef(null),r=ze.useRef(null),l=ze.useRef(null),u=ze.useRef(null),h=ze.useRef(null),d=ze.useRef(null),m=ze.useRef(new $M),p=ze.useRef(new ve),g=ze.useRef([]),v=ze.useRef(null),S=ze.useRef(null),M=ze.useRef(null),b=ze.useRef(!1),[A,y]=ze.useState(!1),[_,F]=ze.useState(!1),[N,U]=ze.useState(!1),z=ze.useRef(0),G=ze.useRef({x:0,y:0,z:0}),V=ze.useRef({x:-Math.PI/3,y:0,z:0}),Y=()=>N?.8:A?1:_?1.2:1.4,D=Y(),C=()=>{const rt=window.innerWidth;U(rt<468),y(rt>=468&&rt<768),F(rt>=768&&rt<1024)};ze.useEffect(()=>(C(),window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}),[]),ze.useEffect(()=>{const rt=()=>{const ut=getComputedStyle(document.documentElement).getPropertyValue("--scroll-progress"),pt=ut?parseFloat(ut):0;console.log("🔄 INTERNAL SCROLL UPDATE:",{progress:pt.toFixed(3),scrollProgressVar:ut}),z.current=pt};console.log("🚀 Setting up internal scroll listener"),rt();const dt=new MutationObserver(rt);return dt.observe(document.documentElement,{attributes:!0,attributeFilter:["style"]}),console.log("📝 Internal scroll listener added"),()=>{dt.disconnect(),console.log("🗑️ Internal scroll listener removed")}},[]);const B=()=>{if(!S.current)return;const rt=z.current,ut=(E=>{const k=Math.pow(E,2.5);return k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2})(rt),pt=G.current.x+(V.current.x-G.current.x)*ut;rt>.01&&console.log("🎥 Camera animating:",{scrollProgress:rt.toFixed(3),easedProgress:ut.toFixed(3),currentRotationX:pt.toFixed(3)}),S.current.rotation.x=pt;let yt=2.5,Nt=3.5;N?(yt=3.2,Nt=4.2):A?(yt=3,Nt=4):_&&(yt=2.8,Nt=3.8);const w=yt+(Nt-yt)*ut;S.current.position.z=w};ze.useEffect(()=>{if(o.current)return ft(),()=>{r.current&&cancelAnimationFrame(r.current),i.current&&o.current&&(o.current.removeChild(i.current.domElement),i.current.dispose()),d.current&&t.current&&(t.current.remove(d.current),d.current.geometry.dispose(),d.current.material instanceof Ii&&d.current.material.dispose()),window.removeEventListener("resize",Ee),window.removeEventListener("mousemove",Kt),window.removeEventListener("touchmove",ae),window.removeEventListener("touchstart",Le)}},[A,_,N]);const ft=()=>{const rt=new BM;t.current=rt;const dt=window.innerWidth/window.innerHeight;let ut=75,pt=2.5;N?(ut=55,pt=3.2):A?(ut=60,pt=3):_&&(ut=70,pt=2.8);const yt=new mi(ut,dt,.1,1e3);S.current=yt,yt.position.z=pt,G.current={x:yt.rotation.x,y:yt.rotation.y,z:yt.rotation.z};const Nt=new zA({antialias:!A&&!N,alpha:!1,powerPreference:"high-performance"});i.current=Nt,Nt.setSize(window.innerWidth,window.innerHeight),Nt.setClearColor(0,1),Nt.domElement.style.position="absolute",Nt.domElement.style.top="0",Nt.domElement.style.left="0",Nt.domElement.style.zIndex="1",Nt.domElement.style.pointerEvents="auto",A||N?Nt.setPixelRatio(Math.min(window.devicePixelRatio,2)):Nt.setPixelRatio(window.devicePixelRatio),o.current.appendChild(Nt.domElement);const w=new Ms;let E=0;N?E=0:A?E=.1:_&&(E=-.1),w.position.y=E,w.scale.setScalar(.9),v.current=w,rt.add(w),Q(),Z(),At(),window.addEventListener("resize",Ee),window.addEventListener("mousemove",Kt),window.addEventListener("touchmove",ae),window.addEventListener("touchstart",Le),te(),Ft()},ht="/earth_night_2.png",_t="/2k_earth_normal_map_2.png",vt="/2k_earth_specular_map_2.png",P=()=>{if(A||_||N)return;console.log("Creating moving stars for desktop view");const rt=5e3,dt=new Float32Array(rt*3);for(let Nt=0;Nt<rt;Nt++){const w=1.2+Math.random()*.3,E=Math.random()*Math.PI*2,k=Math.acos(2*Math.random()-1),nt=w*Math.sin(k)*Math.cos(E),it=w*Math.sin(k)*Math.sin(E),W=w*Math.cos(k);dt[Nt*3]=nt*100,dt[Nt*3+1]=it*100,dt[Nt*3+2]=W*100}const ut=new Gn;ut.setAttribute("position",new ri(dt,3));const pt=new Ad({color:16777215,size:.2,sizeAttenuation:!0,transparent:!0,depthWrite:!1,opacity:.8}),yt=new $_(ut,pt);yt.rotation.z=Math.PI/4,d.current=yt,t.current.add(yt),console.log("Moving stars created successfully")},Q=()=>{const rt=new Ms,dt=new Fo(500,64,32);new n0().load("/8k_stars_milky_way.jpg",pt=>{console.log("Galaxy HDRI texture loaded successfully"),pt.mapping=Hc,pt.wrapS=Rn,pt.wrapT=Rn,pt.minFilter=yn,pt.magFilter=yn,pt.flipY=!1,pt.colorSpace=ii;const yt=new kc({map:pt,side:wn,transparent:!1,fog:!1}),Nt=new ai(dt,yt);rt.add(Nt),console.log("Galaxy HDRI background sphere created successfully")},pt=>{console.log("Loading galaxy HDRI texture progress:",pt)},pt=>{console.warn("Could not load galaxy HDRI texture:",pt),console.log("Creating fallback star field");const yt=new kc({color:17,side:wn}),Nt=new ai(dt,yt);rt.add(Nt);const w=new Gn,E=2e3,k=new Float32Array(E*3);for(let W=0;W<E*3;W+=3)k[W]=(Math.random()-.5)*800,k[W+1]=(Math.random()-.5)*800,k[W+2]=(Math.random()-.5)*800;w.setAttribute("position",new ri(k,3));const nt=new Ad({color:16777215,size:2,transparent:!0,opacity:.8}),it=new $_(w,nt);rt.add(it)}),h.current=rt,t.current.add(rt),P()},Z=()=>{const rt=N?48:A?64:128,dt=Y(),ut=new Fo(dt,rt,rt),pt=new n0,yt=new kM({color:4386,emissive:4386,emissiveIntensity:.3,shininess:25,specular:2236962}),Nt=new ai(ut,yt);l.current=Nt,v.current.add(Nt),pt.load(ht,nt=>{console.log("Earth night map texture loaded successfully"),nt.wrapS=Rn,nt.wrapT=Rn,nt.repeat.set(1,1),nt.flipY=!1,nt.minFilter=yn,nt.magFilter=yn,yt.map=nt,yt.color.setHex(16777215),yt.emissive.setHex(4386),yt.emissiveIntensity=.3,yt.needsUpdate=!0,pt.load(_t,it=>{console.log("Earth normal map loaded successfully"),it.wrapS=Rn,it.wrapT=Rn,it.repeat.set(1,1),it.flipY=!1,it.minFilter=yn,it.magFilter=yn,yt.normalMap=it,yt.normalScale.set(.8,.8),yt.needsUpdate=!0,console.log("Normal map applied to Earth material")},void 0,it=>{console.warn("Could not load Earth normal map:",it)}),pt.load(vt,it=>{console.log("Earth roughness/specular map loaded successfully"),it.wrapS=Rn,it.wrapT=Rn,it.repeat.set(1,1),it.flipY=!1,it.minFilter=yn,it.magFilter=yn,yt.specularMap=it,yt.shininess=30,yt.needsUpdate=!0,console.log("Roughness/metalness map applied to Earth material")},void 0,it=>{console.warn("Could not load Earth roughness/specular map:",it)}),console.log("Diffuse texture applied to Earth material")},nt=>{console.log("Loading Earth texture progress:",nt)},nt=>{console.warn("Could not load Earth night map texture:",nt),console.log("Creating fallback procedural texture");const it=document.createElement("canvas");it.width=2048,it.height=1024;const W=it.getContext("2d"),Lt=W.createRadialGradient(1024,512,0,1024,512,1024);Lt.addColorStop(0,"#001122"),Lt.addColorStop(.7,"#000811"),Lt.addColorStop(1,"#000000"),W.fillStyle=Lt,W.fillRect(0,0,2048,1024),W.fillStyle="#0a2f1a",W.beginPath(),W.moveTo(200,200),W.bezierCurveTo(300,150,450,180,400,300),W.bezierCurveTo(350,350,250,320,200,280),W.closePath(),W.fill(),W.fillRect(900,180,150,100),W.beginPath(),W.moveTo(1100,150),W.bezierCurveTo(1400,120,1600,200,1500,350),W.bezierCurveTo(1200,300,1050,250,1100,150),W.closePath(),W.fill(),W.beginPath(),W.moveTo(950,300),W.bezierCurveTo(1050,280,1100,400,1e3,600),W.bezierCurveTo(950,650,900,500,950,300),W.closePath(),W.fill(),W.fillRect(1400,600,120,80),W.beginPath(),W.moveTo(400,450),W.bezierCurveTo(500,430,520,600,450,800),W.bezierCurveTo(400,750,350,500,400,450),W.closePath(),W.fill(),W.fillStyle="#ffdd44";for(let qt=0;qt<500;qt++){const bt=Math.random()*2048,Et=Math.random()*1024;W.beginPath(),W.arc(bt,Et,1,0,Math.PI*2),W.fill()}W.fillStyle="#ffffff",[[300,250],[900,200],[1200,200],[1e3,400],[450,500]].forEach(([qt,bt])=>{for(let Et=0;Et<20;Et++){const Ht=(Math.random()-.5)*40,Bt=(Math.random()-.5)*20;W.beginPath(),W.arc(qt+Ht,bt+Bt,.5,0,Math.PI*2),W.fill()}});const It=new e0(it);It.wrapS=Rn,It.wrapT=Rn,It.repeat.set(1,1),yt.map=It,yt.color.setHex(16777215),yt.needsUpdate=!0});const w=new QM(6316128,.5);t.current.add(w);const E=new r0(16777215,1.4);E.position.set(-1,.5,1),t.current.add(E);const k=new r0(11393254,.4);k.position.set(.5,1,-.5),t.current.add(k)},At=()=>{const rt=N?24:A?32:64,dt=Y(),ut=new Fo(dt+.02,rt,rt),pt=new ca({uniforms:{time:{value:1}},vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.5 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,side:wn,blending:Fc,transparent:!0}),yt=new ai(ut,pt);u.current=yt,v.current.add(yt)},L=(rt,dt,ut)=>{const pt=ut||Y(),yt=(90-rt)*(Math.PI/180),Nt=(dt+180)*(Math.PI/180),w=-(pt*Math.sin(yt)*Math.cos(Nt)),E=pt*Math.sin(yt)*Math.sin(Nt),k=pt*Math.cos(yt);return new tt(w,k,E)},et=rt=>{const dt=rt.clone().normalize(),ut=90-Math.acos(dt.y)*180/Math.PI,pt=(270+Math.atan2(dt.x,dt.z)*180/Math.PI)%360-180;return{lat:ut,lon:pt}},Tt=rt=>{const dt=Y(),ut=L(rt.lat,rt.lon,dt),pt=70,yt=ut.clone().normalize(),Nt=new tt(0,1,0),w=new tt().crossVectors(yt,Nt).normalize(),E=new tt().crossVectors(w,yt).normalize();Math.abs(yt.dot(Nt))>.99&&(w.set(1,0,0),E.crossVectors(w,yt).normalize(),w.crossVectors(yt,E).normalize());const k=[];for(let it=0;it<pt;it++){const W=it/pt*Math.PI*2+(Math.random()-.5)*.5,Lt=.15+Math.random()*.25,Rt=(Math.random()-.5)*.1,It=Math.cos(W)*Lt,qt=Math.sin(W)*Lt,bt=ut.clone().add(w.clone().multiplyScalar(It)).add(E.clone().multiplyScalar(qt)).add(yt.clone().multiplyScalar(Rt));bt.normalize().multiplyScalar(dt);const Et=et(bt),Ht=ut.distanceTo(bt);k.push({latLon:Et,distance:Ht})}k.sort((it,W)=>it.distance-W.distance);const nt=k.map(it=>it.latLon);return console.log("generateShortHoverTargets",rt,"generated",nt.length,"targets (sorted by distance)"),nt},Dt=(rt,dt=12,ut=40,pt="random")=>{const yt=[],w=["circular","elliptical","clustered","spiral","linear","arc","scattered"],E=pt==="random"?w[Math.floor(Math.random()*w.length)]:pt;for(let k=0;k<dt;k++){let nt,it,W=0,Lt=!1;do{let Rt,It;switch(E){case"circular":{const Et=k/dt*Math.PI*2,Ht=(Math.random()-.5)*Math.PI,Bt=Et+Ht,Ct=Math.random()*ut*.8;Rt=Math.cos(Bt)*Ct*(.3+Math.random()*1.4),It=Math.sin(Bt)*Ct*(.3+Math.random()*1.4);break}case"elliptical":{const Et=k/dt*Math.PI*2+(Math.random()-.5)*1.5,Ht=ut*(1.2+Math.random()*.8),Bt=Ht*(.05+Math.random()*.2),Ct=Math.random()*Math.PI*2,Jt=Math.cos(Et)*Ht,H=Math.sin(Et)*Bt;Rt=Jt*Math.cos(Ct)-H*Math.sin(Ct),It=Jt*Math.sin(Ct)+H*Math.cos(Ct);break}case"clustered":{const Et=Math.floor(Math.random()*2)+2,Bt=Math.floor(k/dt*Et)/Et*Math.PI*2+(Math.random()-.5)*1,Ct=ut*(.4+Math.random()*.4),Jt=ut*(.15+Math.random()*.2),H=Math.cos(Bt)*Ct,wt=Math.sin(Bt)*Ct;Rt=H+(Math.random()-.5)*Jt,It=wt+(Math.random()-.5)*Jt;break}case"spiral":{const Et=.8+Math.random()*1,Ht=k/dt*Math.PI*6*Et,Bt=k/(dt-1)*ut*.9;Rt=Math.cos(Ht)*Bt,It=Math.sin(Ht)*Bt;break}case"linear":{const Et=Math.random()*Math.PI*2,Ht=ut*1.1,Bt=(k/(dt-1)*2-1)*.9,Ct=ut*.08,Jt=Math.cos(Et)*Bt*Ht,H=Math.sin(Et)*Bt*Ht,wt=Et+Math.PI/2,Pt=(Math.random()-.5)*Ct;Rt=Jt+Math.cos(wt)*Pt,It=H+Math.sin(wt)*Pt;break}case"arc":{const Et=Math.random()*Math.PI*2,Ht=Math.PI*.3+Math.random()*Math.PI*.4,Bt=Et+k/dt*Ht,Ct=ut*(.7+Math.random()*.2),Jt=ut*.1,H=Math.cos(Bt)*Ct,wt=Math.sin(Bt)*Ct,Pt=(Math.random()-.5)*Jt,kt=Bt+Math.PI/2;Rt=H+Math.cos(kt)*Pt,It=wt+Math.sin(kt)*Pt;break}case"scattered":{const Et=Math.random()*Math.PI*2,Ht=.7+Math.random()*.3,Bt=(Math.random()-.5)*ut*.6,Ct=(Math.random()-.5)*ut*.6,Jt=Math.cos(Et)*ut*Ht,H=Math.sin(Et)*ut*Ht;Rt=Bt+Jt*.8,It=Ct+H*.8;break}default:{const Et=Math.random()<.5?1:-1;Rt=(Math.random()*Et+.5*Et)*ut,It=(Math.random()-.5)*ut*.8}}nt=rt.lat+Rt,it=rt.lon+It,nt=Math.max(-80,Math.min(80,nt)),it=(it+180)%360-180;const qt=Math.sqrt(Math.pow(nt-rt.lat,2)+Math.pow(it-rt.lon,2));let bt=!1;for(const Et of yt)if(Math.sqrt(Math.pow(nt-Et.lat,2)+Math.pow(it-Et.lon,2))<6){bt=!0;break}Lt=qt>=8&&!bt,W++,W>50&&(Lt=qt>=5)}while(!Lt&&W<100);yt.push({lat:nt,lon:it})}return console.log(`Generated ${dt} points using ${E} shape pattern`),yt},Ft=()=>{console.log("Creating 4 permanent connection patches...");const rt=[{lat:37.5,lon:-96,maxDistance:8},{lat:40.7,lon:-74,maxDistance:10},{lat:48.8,lon:2.3,maxDistance:8},{lat:35.6,lon:139.6,maxDistance:9},{lat:52.5,lon:13.4,maxDistance:7},{lat:31.2,lon:121.4,maxDistance:8},{lat:28.6,lon:77.2,maxDistance:9}];rt.forEach((dt,ut)=>{const pt=Math.floor(Math.random()*18)+8,yt=["circular","elliptical","clustered","spiral","linear","arc","scattered"],Nt=yt[Math.floor(Math.random()*yt.length)],w=Dt(dt,pt,dt?.maxDistance,Nt);console.log(`Creating patch ${ut+1} with ${pt} short connections (${Nt} shape) converging to center:`,dt),w.forEach((E,k)=>{const nt=L(E.lat,E.lon),it=L(dt.lat,dt.lon),W=ut*500+k*60,Lt=gt(nt,it,W,!0,dt.color);g.current.push(Lt),console.log(`Created short line ${k+1} from`,E,"to center",dt)})}),console.log(`Total permanent connections created: ${rt.length} patches with randomized line counts (8-25 each) and diverse shapes (circular/elliptical/clustered/spiral/linear/arc/scattered)`)};console.log("connectionsRef.current",g.current);const at=(rt,dt)=>{const ut=Y(),pt=Math.acos(Math.max(-1,Math.min(1,rt.dot(dt)/(ut*ut)))),yt=pt*ut;let Nt;return pt<Math.PI/6?Nt=.02:pt<Math.PI/2?Nt=.035:Nt=Math.min(.06,yt*.02),Nt},gt=(rt,dt,ut=0,pt=!1,yt)=>{const Nt=Y(),w=rt.clone().normalize().multiplyScalar(Nt),E=dt.clone().normalize().multiplyScalar(Nt),k=at(w,E),nt=w.distanceTo(E),W=Math.max(N?20:A?30:50,Math.floor(nt*(N?30:A?40:80))),Lt=[];w.clone().cross(E).normalize();for(let ue=0;ue<=W;ue++){const oe=ue/W,Qe=Math.acos(Math.max(-1,Math.min(1,w.dot(E)/(D*D))));if(Qe<.001)Lt.push(w.clone().lerp(E,oe));else{const Ne=Math.sin(Qe),Je=Math.sin((1-oe)*Qe)/Ne,ke=Math.sin(oe*Qe)/Ne,Vn=w.clone().multiplyScalar(Je).add(E.clone().multiplyScalar(ke)),si=Math.sin(oe*Math.PI),yr=Nt+k*si;let ua=Vn.normalize().multiplyScalar(yr);Lt.push(ua)}}const Rt=new Gn().setFromPoints(Lt),It=yt?.main??8900331,qt=yt?.glow1??8900331,bt=yt?.glow2??11393254,Et=yt?.glow3??14743295,Ht=new Bo({color:It,transparent:!0,opacity:0,linewidth:.5}),Bt=new Ac(Rt,Ht),Ct=new Bo({color:qt,transparent:!0,opacity:0,linewidth:1}),Jt=new Ac(Rt,Ct),H=new Bo({color:bt,transparent:!0,opacity:0,linewidth:1.5}),wt=new Ac(Rt,H),Pt=new Bo({color:Et,transparent:!0,opacity:0,linewidth:2}),kt=new Ac(Rt,Pt);v.current.add(Bt),v.current.add(Jt),v.current.add(wt),v.current.add(kt);const Ot=[],xt=N?1:A?2:3;for(let ue=0;ue<xt;ue++){const oe=document.createElement("canvas");oe.width=16,oe.height=16;const Qe=oe.getContext("2d"),Ne=Qe.createRadialGradient(8,8,0,8,8,8);Ne.addColorStop(0,"rgba(255, 255, 255, 1)"),Ne.addColorStop(.3,"rgba(135, 206, 235, 0.8)"),Ne.addColorStop(1,"rgba(135, 206, 235, 0)"),Qe.fillStyle=Ne,Qe.fillRect(0,0,16,16);const Je=new e0(oe),ke=new $0({map:Je,transparent:!0,opacity:0,blending:Fc,sizeAttenuation:!1}),Vn=()=>N?.002:A?.003:.004,si=new FM(ke);si.scale.setScalar(Vn()),v.current.add(si),Ot.push({core:si,glow1:null,glow2:null,coreMaterial:ke,glowMaterial1:null,glowMaterial2:null,offset:ue*.2})}return{line:Bt,glowLine1:Jt,glowLine2:wt,glowLine3:kt,lightDots:Ot,curve:{getPoint:ue=>{const oe=Math.floor(ue*(Lt.length-1)),Qe=Math.min(oe+1,Lt.length-1),Ne=ue*(Lt.length-1)-oe;return oe===Qe?Lt[oe].clone():Lt[oe].clone().lerp(Lt[Qe],Ne)}},points:Lt,startTime:Date.now()+ut,duration:2500+Math.random()*1500,material:Ht,glowMaterial1:Ct,glowMaterial2:H,glowMaterial3:Pt,animationProgress:0,emergenceComplete:!1,isRemoving:!1,removalStartTime:0,isPermanent:pt}},Ut=()=>{g.current.forEach(rt=>{!rt.isRemoving&&!rt.isPermanent&&(rt.isRemoving=!0,rt.removalStartTime=Date.now())})},Vt=()=>{g.current=g.current.filter(rt=>rt.isRemoving&&(Date.now()-rt.removalStartTime)/800>=1?(v.current.remove(rt.line),v.current.remove(rt.glowLine1),v.current.remove(rt.glowLine2),v.current.remove(rt.glowLine3),rt.lightDots.forEach(pt=>{v.current.remove(pt.core),pt.glow1&&v.current.remove(pt.glow1),pt.glow2&&v.current.remove(pt.glow2)}),!1):!0)},Kt=rt=>{p.current.x=rt.clientX/window.innerWidth*2-1,p.current.y=-(rt.clientY/window.innerHeight)*2+1,I(rt.clientX,rt.clientY)},ae=rt=>{if(rt.preventDefault(),rt.touches.length>0){const dt=rt.touches[0];p.current.x=dt.clientX/window.innerWidth*2-1,p.current.y=-(dt.clientY/window.innerHeight)*2+1,I(dt.clientX,dt.clientY)}},Le=rt=>{if(rt.preventDefault(),rt.touches.length>0){const dt=rt.touches[0];p.current.x=dt.clientX/window.innerWidth*2-1,p.current.y=-(dt.clientY/window.innerHeight)*2+1,I(dt.clientX,dt.clientY)}},ge=(rt,dt)=>{const ut=document.elementFromPoint(rt,dt);if(!ut)return!1;const pt=["BUTTON","A","INPUT","SELECT","TEXTAREA"],yt=ut.tagName.toUpperCase();if(pt.includes(yt)||window.getComputedStyle(ut).cursor==="pointer")return!0;let w=ut.parentElement;for(;w&&w!==document.body;){const E=w.tagName.toUpperCase();if(pt.includes(E)||window.getComputedStyle(w).cursor==="pointer"||w.classList.contains("btn")||w.classList.contains("button")||w.classList.contains("cursor-pointer")||w.getAttribute("role")==="button")return!0;w=w.parentElement}return!1},I=(rt,dt)=>{if(!S.current||!l.current)return;if(ge(rt,dt)){b.current=!1,g.current.length>0&&(Ut(),M.current&&(M.current.innerHTML=`
            ${A||N?"Tap":"Hover"} anywhere on Earth to create connections spreading outward with tiny traveling light dots<br>
            <small>Lines follow great circle routes with small, consistent-sized glowing particles</small>
          `));return}m.current.setFromCamera(p.current,S.current);const ut=m.current.intersectObject(l.current);if(ut.length>0){b.current=!0;const pt=ut[0].point.clone(),yt=new Ye;yt.copy(v.current.matrixWorld);const Nt=pt.clone().applyMatrix4(yt.invert()),w=Y(),E=Nt.normalize().multiplyScalar(w),k=et(E);Ut();const nt=N?8:A?12:16;Tt(k).forEach((W,Lt)=>{const Rt=L(W.lat,W.lon,w);let It;Lt<20?It=0:It=(Lt-20)*50;const qt=gt(E,Rt,It);g.current.push(qt)}),M.current&&(M.current.innerHTML=`
          Short network at: ${k.lat.toFixed(1)}°, ${k.lon.toFixed(1)}°<br>
          <small>${nt} short lines creating local network pattern</small>
        `)}else b.current=!1,g.current.length>0&&(Ut(),M.current&&(M.current.innerHTML=`
            ${A||N?"Tap":"Hover"} anywhere on Earth to create connections spreading outward with tiny traveling light dots<br>
            <small>Lines follow great circle routes with small, consistent-sized glowing particles</small>
          `))},Re=()=>{const rt=Date.now();g.current.forEach(dt=>{if(dt.isRemoving){const pt=rt-dt.removalStartTime,Nt=1-Math.min(pt/800,1);dt.material.opacity*=Nt,dt.glowMaterial1.opacity*=Nt,dt.glowMaterial2.opacity*=Nt,dt.glowMaterial3.opacity*=Nt,dt.lightDots.forEach(w=>{w.coreMaterial.opacity*=Nt,w.glowMaterial1&&(w.glowMaterial1.opacity*=Nt),w.glowMaterial2&&(w.glowMaterial2.opacity*=Nt)});return}const ut=rt-dt.startTime;if(!dt.emergenceComplete&&ut>0){const pt=Math.min(ut/2e3,1),yt=Math.floor(dt.points.length*pt);if(yt>1){const Nt=new Gn().setFromPoints(dt.points.slice(0,yt));dt.line.geometry=Nt,dt.glowLine1.geometry=Nt,dt.glowLine2.geometry=Nt,dt.glowLine3.geometry=Nt}dt.material.opacity=pt*.35,dt.glowMaterial1.opacity=pt*.245,dt.glowMaterial2.opacity=pt*.175,dt.glowMaterial3.opacity=pt*.105,pt>=1&&(dt.emergenceComplete=!0)}if(dt.emergenceComplete){const pt=ut-2e3;dt.lightDots.forEach(yt=>{const Nt=(pt%dt.duration/dt.duration+yt.offset)%1;if(Nt>=0){const w=dt.curve.getPoint(Nt);yt.core.position.copy(w),yt.glow1&&yt.glow1.position.copy(w),yt.glow2&&yt.glow2.position.copy(w);const E=Math.min(1,Nt*12),k=Math.min(1,(1-Nt)*12),nt=Math.min(E,k);yt.coreMaterial.opacity=nt*1}})}if(dt.emergenceComplete){const pt=.7+.2*Math.sin(ut*.004),yt=.8+.1*Math.sin(ut*.006);dt.material.opacity=pt*.35,dt.glowMaterial1.opacity=pt*.245,dt.glowMaterial2.opacity=yt*.175,dt.glowMaterial3.opacity=yt*.105}})},te=()=>{r.current=requestAnimationFrame(te),v.current&&!b.current&&(v.current.rotation.y+=3e-4*3),h.current&&!b.current&&(h.current.rotation.y+=2e-4*3,h.current.rotation.x+=1e-4),d.current&&!b.current&&!A&&!_&&!N&&(d.current.rotation.x-=.016/20,d.current.rotation.y-=.016/30),Re(),Vt(),B(),g.current.filter(dt=>dt.isPermanent).length===0&&(console.log("Recreating permanent connections..."),Ft()),i.current&&t.current&&S.current&&i.current.render(t.current,S.current)},Ee=()=>{if(S.current&&i.current){C();const rt=window.innerWidth/window.innerHeight;let dt=75,ut=2.5;if(N?(dt=55,ut=3.2):A?(dt=60,ut=3):_&&(dt=70,ut=2.8),S.current.fov=dt,S.current.aspect=rt,z.current===0&&(S.current.position.z=ut),S.current.updateProjectionMatrix(),G.current={x:0,y:0,z:0},i.current.setSize(window.innerWidth,window.innerHeight),A||N?i.current.setPixelRatio(Math.min(window.devicePixelRatio,2)):i.current.setPixelRatio(window.devicePixelRatio),v.current){let pt=-.3;if(N?pt=.2:A?pt=.1:_&&(pt=-.1),v.current.position.y=pt,l.current){const w=Y();(N&&w!==.8||A&&w!==1||_&&w!==1.2||!A&&!_&&!N&&w!==1.4)&&(v.current.remove(l.current),u.current&&v.current.remove(u.current),Z(),At())}const yt=d.current!==null,Nt=!A&&!_&&!N;yt&&!Nt?d.current&&t.current&&(t.current.remove(d.current),d.current.geometry.dispose(),d.current.material instanceof Ii&&d.current.material.dispose(),d.current=null,console.log("Moving stars removed for mobile/tablet view")):!yt&&Nt&&(P(),console.log("Moving stars added for desktop view"))}}};return on.jsx(on.Fragment,{children:on.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full pointer-events-none",style:{zIndex:1,touchAction:"none"}})})};function IA(){const o=ze.useRef(null),[t,i]=ze.useState(0);return ze.useEffect(()=>{const r=o.current;if(!r)return;const l=()=>{const u=r.scrollTop,h=r.scrollHeight-r.clientHeight,d=h>0?Math.min(u/h,1):0;i(d)};return r.addEventListener("scroll",l,{passive:!0}),()=>{r.removeEventListener("scroll",l)}},[]),ze.useEffect(()=>{document.documentElement.style.setProperty("--scroll-progress",t.toString())},[t]),on.jsxs("div",{className:"h-screen flex items-center justify-center relative overflow-hidden z-10",children:[on.jsx("div",{ref:o,className:"absolute inset-0 overflow-y-auto hide-scrollbar",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:on.jsxs("div",{className:"h-[200vh] relative",children:[on.jsx("div",{className:"fixed inset-0 z-10",children:on.jsx(BA,{})}),on.jsx("div",{className:"relative z-20 h-full flex items-center justify-center",children:on.jsxs("div",{className:"text-center text-white",children:[on.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 opacity-0",children:"Welcome to Earth Globe"}),on.jsx("p",{className:"text-lg md:text-xl mb-8 opacity-0",children:"Scroll to explore the interactive globe"}),on.jsxs("div",{className:"flex flex-col items-center space-y-2 opacity-0",children:[on.jsx("div",{className:"w-6 h-10 border-2 border-white rounded-full flex justify-center",children:on.jsx("div",{className:"w-1 h-3 bg-white rounded-full mt-2 transition-all duration-300",style:{transform:`translateY(${t*12}px)`,opacity:1-t}})}),on.jsx("span",{className:"text-sm opacity-0",children:"Scroll to animate"})]})]})})]})}),on.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}})]})}function FA(){return on.jsx("div",{className:"bg-gray-50 overflow-x-hidden",children:on.jsx(IA,{})})}yx.createRoot(document.getElementById("root")).render(on.jsx(ze.StrictMode,{children:on.jsx(FA,{})}));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();var Um={exports:{}},Ju={};var dy;function pA(){if(dy)return Ju;dy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:l}}return Ju.Fragment=t,Ju.jsx=n,Ju.jsxs=n,Ju}var py;function mA(){return py||(py=1,Um.exports=pA()),Um.exports}var Zn=mA(),Lm={exports:{}},ve={};var my;function _A(){if(my)return ve;my=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function S(z,nt,mt){this.props=z,this.context=nt,this.refs=y,this.updater=mt||E}S.prototype.isReactComponent={},S.prototype.setState=function(z,nt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,nt,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=S.prototype;function O(z,nt,mt){this.props=z,this.context=nt,this.refs=y,this.updater=mt||E}var C=O.prototype=new U;C.constructor=O,M(C,S.prototype),C.isPureReactComponent=!0;var L=Array.isArray;function P(){}var w={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function b(z,nt,mt){var Mt=mt.ref;return{$$typeof:o,type:z,key:nt,ref:Mt!==void 0?Mt:null,props:mt}}function R(z,nt){return b(z.type,nt,z.props)}function I(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function k(z){var nt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(mt){return nt[mt]})}var j=/\/+/g;function it(z,nt){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):nt.toString(36)}function et(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(nt){z.status==="pending"&&(z.status="fulfilled",z.value=nt)},function(nt){z.status==="pending"&&(z.status="rejected",z.reason=nt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,nt,mt,Mt,wt){var $=typeof z;($==="undefined"||$==="boolean")&&(z=null);var st=!1;if(z===null)st=!0;else switch($){case"bigint":case"string":case"number":st=!0;break;case"object":switch(z.$$typeof){case o:case t:st=!0;break;case _:return st=z._init,F(st(z._payload),nt,mt,Mt,wt)}}if(st)return wt=wt(z),st=Mt===""?"."+it(z,0):Mt,L(wt)?(mt="",st!=null&&(mt=st.replace(j,"$&/")+"/"),F(wt,nt,mt,"",function(Dt){return Dt})):wt!=null&&(I(wt)&&(wt=R(wt,mt+(wt.key==null||z&&z.key===wt.key?"":(""+wt.key).replace(j,"$&/")+"/")+st)),nt.push(wt)),1;st=0;var At=Mt===""?".":Mt+":";if(L(z))for(var Ot=0;Ot<z.length;Ot++)Mt=z[Ot],$=At+it(Mt,Ot),st+=F(Mt,nt,mt,$,wt);else if(Ot=x(z),typeof Ot=="function")for(z=Ot.call(z),Ot=0;!(Mt=z.next()).done;)Mt=Mt.value,$=At+it(Mt,Ot++),st+=F(Mt,nt,mt,$,wt);else if($==="object"){if(typeof z.then=="function")return F(et(z),nt,mt,Mt,wt);throw nt=String(z),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return st}function G(z,nt,mt){if(z==null)return z;var Mt=[],wt=0;return F(z,Mt,"","",function($){return nt.call(mt,$,wt++)}),Mt}function Q(z){if(z._status===-1){var nt=z._result;nt=nt(),nt.then(function(mt){(z._status===0||z._status===-1)&&(z._status=1,z._result=mt)},function(mt){(z._status===0||z._status===-1)&&(z._status=2,z._result=mt)}),z._status===-1&&(z._status=0,z._result=nt)}if(z._status===1)return z._result.default;throw z._result}var gt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},H={map:G,forEach:function(z,nt,mt){G(z,function(){nt.apply(this,arguments)},mt)},count:function(z){var nt=0;return G(z,function(){nt++}),nt},toArray:function(z){return G(z,function(nt){return nt})||[]},only:function(z){if(!I(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ve.Activity=g,ve.Children=H,ve.Component=S,ve.Fragment=n,ve.Profiler=r,ve.PureComponent=O,ve.StrictMode=a,ve.Suspense=p,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,ve.__COMPILER_RUNTIME={__proto__:null,c:function(z){return w.H.useMemoCache(z)}},ve.cache=function(z){return function(){return z.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(z,nt,mt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Mt=M({},z.props),wt=z.key;if(nt!=null)for($ in nt.key!==void 0&&(wt=""+nt.key),nt)!V.call(nt,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&nt.ref===void 0||(Mt[$]=nt[$]);var $=arguments.length-2;if($===1)Mt.children=mt;else if(1<$){for(var st=Array($),At=0;At<$;At++)st[At]=arguments[At+2];Mt.children=st}return b(z.type,wt,Mt)},ve.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},ve.createElement=function(z,nt,mt){var Mt,wt={},$=null;if(nt!=null)for(Mt in nt.key!==void 0&&($=""+nt.key),nt)V.call(nt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(wt[Mt]=nt[Mt]);var st=arguments.length-2;if(st===1)wt.children=mt;else if(1<st){for(var At=Array(st),Ot=0;Ot<st;Ot++)At[Ot]=arguments[Ot+2];wt.children=At}if(z&&z.defaultProps)for(Mt in st=z.defaultProps,st)wt[Mt]===void 0&&(wt[Mt]=st[Mt]);return b(z,$,wt)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(z){return{$$typeof:f,render:z}},ve.isValidElement=I,ve.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:Q}},ve.memo=function(z,nt){return{$$typeof:d,type:z,compare:nt===void 0?null:nt}},ve.startTransition=function(z){var nt=w.T,mt={};w.T=mt;try{var Mt=z(),wt=w.S;wt!==null&&wt(mt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(P,gt)}catch($){gt($)}finally{nt!==null&&mt.types!==null&&(nt.types=mt.types),w.T=nt}},ve.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},ve.use=function(z){return w.H.use(z)},ve.useActionState=function(z,nt,mt){return w.H.useActionState(z,nt,mt)},ve.useCallback=function(z,nt){return w.H.useCallback(z,nt)},ve.useContext=function(z){return w.H.useContext(z)},ve.useDebugValue=function(){},ve.useDeferredValue=function(z,nt){return w.H.useDeferredValue(z,nt)},ve.useEffect=function(z,nt){return w.H.useEffect(z,nt)},ve.useEffectEvent=function(z){return w.H.useEffectEvent(z)},ve.useId=function(){return w.H.useId()},ve.useImperativeHandle=function(z,nt,mt){return w.H.useImperativeHandle(z,nt,mt)},ve.useInsertionEffect=function(z,nt){return w.H.useInsertionEffect(z,nt)},ve.useLayoutEffect=function(z,nt){return w.H.useLayoutEffect(z,nt)},ve.useMemo=function(z,nt){return w.H.useMemo(z,nt)},ve.useOptimistic=function(z,nt){return w.H.useOptimistic(z,nt)},ve.useReducer=function(z,nt,mt){return w.H.useReducer(z,nt,mt)},ve.useRef=function(z){return w.H.useRef(z)},ve.useState=function(z){return w.H.useState(z)},ve.useSyncExternalStore=function(z,nt,mt){return w.H.useSyncExternalStore(z,nt,mt)},ve.useTransition=function(){return w.H.useTransition()},ve.version="19.2.3",ve}var _y;function K0(){return _y||(_y=1,Lm.exports=_A()),Lm.exports}var kl=K0(),Nm={exports:{}},$u={},Om={exports:{}},Pm={};var gy;function gA(){return gy||(gy=1,(function(o){function t(F,G){var Q=F.length;F.push(G);t:for(;0<Q;){var gt=Q-1>>>1,H=F[gt];if(0<r(H,G))F[gt]=G,F[Q]=H,Q=gt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var G=F[0],Q=F.pop();if(Q!==G){F[0]=Q;t:for(var gt=0,H=F.length,z=H>>>1;gt<z;){var nt=2*(gt+1)-1,mt=F[nt],Mt=nt+1,wt=F[Mt];if(0>r(mt,Q))Mt<H&&0>r(wt,mt)?(F[gt]=wt,F[Mt]=Q,gt=Mt):(F[gt]=mt,F[nt]=Q,gt=nt);else if(Mt<H&&0>r(wt,Q))F[gt]=wt,F[Mt]=Q,gt=Mt;else break t}}return G}function r(F,G){var Q=F.sortIndex-G.sortIndex;return Q!==0?Q:F.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,x=!1,E=!1,M=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var G=n(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=F)a(d),G.sortIndex=G.expirationTime,t(p,G);else break;G=n(d)}}function L(F){if(M=!1,C(F),!E)if(n(p)!==null)E=!0,P||(P=!0,k());else{var G=n(d);G!==null&&et(L,G.startTime-F)}}var P=!1,w=-1,V=5,b=-1;function R(){return y?!0:!(o.unstable_now()-b<V)}function I(){if(y=!1,P){var F=o.unstable_now();b=F;var G=!0;try{t:{E=!1,M&&(M=!1,U(w),w=-1),x=!0;var Q=v;try{e:{for(C(F),g=n(p);g!==null&&!(g.expirationTime>F&&R());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,v=g.priorityLevel;var H=gt(g.expirationTime<=F);if(F=o.unstable_now(),typeof H=="function"){g.callback=H,C(F),G=!0;break e}g===n(p)&&a(p),C(F)}else a(p);g=n(p)}if(g!==null)G=!0;else{var z=n(d);z!==null&&et(L,z.startTime-F),G=!1}}break t}finally{g=null,v=Q,x=!1}G=void 0}}finally{G?k():P=!1}}}var k;if(typeof O=="function")k=function(){O(I)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,it=j.port2;j.port1.onmessage=I,k=function(){it.postMessage(null)}}else k=function(){S(I,0)};function et(F,G){w=S(function(){F(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(F){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var Q=v;v=G;try{return F()}finally{v=Q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=v;v=F;try{return G()}finally{v=Q}},o.unstable_scheduleCallback=function(F,G,Q){var gt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?gt+Q:gt):Q=gt,F){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=Q+H,F={id:_++,callback:G,priorityLevel:F,startTime:Q,expirationTime:H,sortIndex:-1},Q>gt?(F.sortIndex=Q,t(d,F),n(p)===null&&F===n(d)&&(M?(U(w),w=-1):M=!0,et(L,Q-gt))):(F.sortIndex=H,t(p,F),E||x||(E=!0,P||(P=!0,k()))),F},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(F){var G=v;return function(){var Q=v;v=G;try{return F.apply(this,arguments)}finally{v=Q}}}})(Pm)),Pm}var vy;function vA(){return vy||(vy=1,Om.exports=gA()),Om.exports}var zm={exports:{}},yi={};var xy;function xA(){if(xy)return yi;xy=1;var o=K0();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return yi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,yi.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},yi.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},yi.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},yi.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},yi.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},yi.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},yi.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},yi.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},yi.requestFormReset=function(p){a.d.r(p)},yi.unstable_batchedUpdates=function(p,d){return p(d)},yi.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},yi.useFormStatus=function(){return c.H.useHostTransitionStatus()},yi.version="19.2.3",yi}var Sy;function SA(){if(Sy)return zm.exports;Sy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zm.exports=xA(),zm.exports}var yy;function yA(){if(yy)return $u;yy=1;var o=vA(),t=K0(),n=SA();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,u=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),e;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==u.return)s=h,u=m;else{for(var T=!1,N=h.child;N;){if(N===s){T=!0,s=h,u=m;break}if(N===u){T=!0,u=h,s=m;break}N=N.sibling}if(!T){for(N=m.child;N;){if(N===s){T=!0,s=m,u=h;break}if(N===u){T=!0,u=m,s=h;break}N=N.sibling}if(!T)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case O:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return i=e.displayName||null,i!==null?i:it(e.type)||"Memo";case V:i=e._payload,e=e._init;try{return it(e(i))}catch{}}return null}var et=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},gt=[],H=-1;function z(e){return{current:e}}function nt(e){0>H||(e.current=gt[H],gt[H]=null,H--)}function mt(e,i){H++,gt[H]=e.current,e.current=i}var Mt=z(null),wt=z(null),$=z(null),st=z(null);function At(e,i){switch(mt($,i),mt(wt,e),mt(Mt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?zS(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=zS(i),e=FS(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Mt),mt(Mt,e)}function Ot(){nt(Mt),nt(wt),nt($)}function Dt(e){e.memoizedState!==null&&mt(st,e);var i=Mt.current,s=FS(i,e.type);i!==s&&(mt(wt,e),mt(Mt,s))}function le(e){wt.current===e&&(nt(Mt),nt(wt)),st.current===e&&(nt(st),Zu._currentValue=Q)}var Ue,Yt;function ne(e){if(Ue===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ue=i&&i[1]||"",Yt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+Yt}var _e=!1;function ae(e,i){if(!e||_e)return"";_e=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(dt){var ut=dt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(dt){ut=dt}e.call(yt.prototype)}}else{try{throw Error()}catch(dt){ut=dt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(dt){if(dt&&ut&&typeof dt.stack=="string")return[dt.stack,ut.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),T=m[0],N=m[1];if(T&&N){var W=T.split(`
`),rt=N.split(`
`);for(h=u=0;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;for(;h<rt.length&&!rt[h].includes("DetermineComponentFrameRoot");)h++;if(u===W.length||h===rt.length)for(u=W.length-1,h=rt.length-1;1<=u&&0<=h&&W[u]!==rt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(W[u]!==rt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||W[u]!==rt[h]){var vt=`
`+W[u].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=u&&0<=h);break}}}finally{_e=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ne(s):""}function ot(e,i){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return e.child!==i&&i!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ae(e.type,!1);case 11:return ae(e.type.render,!1);case 1:return ae(e.type,!0);case 31:return ne("Activity");default:return""}}function q(e){try{var i="",s=null;do i+=ot(e,s),s=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var ke=Object.prototype.hasOwnProperty,Se=o.unstable_scheduleCallback,ue=o.unstable_cancelCallback,qt=o.unstable_shouldYield,B=o.unstable_requestPaint,A=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,jt=o.log,Zt=o.unstable_setDisableYieldValue,Tt=null,Rt=null;function It(e){if(typeof jt=="function"&&Zt(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Tt,e)}catch{}}var Bt=Math.clz32?Math.clz32:X,Lt=Math.log,de=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Lt(e)/de|0)|0}var Pt=256,bt=262144,zt=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,i,s){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var N=u&134217727;return N!==0?(u=N&~m,u!==0?h=Et(u):(T&=N,T!==0?h=Et(T):s||(s=N&~e,s!==0&&(h=Et(s))))):(N=u&~m,N!==0?h=Et(N):T!==0?h=Et(T):s||(s=u&~e,s!==0&&(h=Et(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function se(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Gt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Kt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ye(e,i,s,u,h,m){var T=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var N=e.entanglements,W=e.expirationTimes,rt=e.hiddenUpdates;for(s=T&~s;0<s;){var vt=31-Bt(s),yt=1<<vt;N[vt]=0,W[vt]=-1;var ut=rt[vt];if(ut!==null)for(rt[vt]=null,vt=0;vt<ut.length;vt++){var dt=ut[vt];dt!==null&&(dt.lane&=-536870913)}s&=~yt}u!==0&&Ht(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~i))}function Ht(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Bt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|s&261930}function pe(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var u=31-Bt(s),h=1<<u;h&i|e[u]&i&&(e[u]|=i),s&=~h}}function ie(e,i){var s=i&-i;return s=(s&42)!==0?1:me(s),(s&(e.suspendedLanes|i))!==0?0:s}function me(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:sy(e.type))}function We(e,i){var s=G.p;try{return G.p=e,i()}finally{G.p=s}}var an=Math.random().toString(36).slice(2),Me="__reactFiber$"+an,Ee="__reactProps$"+an,we="__reactContainer$"+an,$n="__reactEvents$"+an,$e="__reactListeners$"+an,ti="__reactHandles$"+an,xi="__reactResources$"+an,vn="__reactMarker$"+an;function An(e){delete e[Me],delete e[Ee],delete e[$n],delete e[$e],delete e[ti]}function xn(e){var i=e[Me];if(i)return i;for(var s=e.parentNode;s;){if(i=s[we]||s[Me]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=XS(e);e!==null;){if(s=e[Me])return s;e=XS(e)}return i}e=s,s=e.parentNode}return null}function Si(e){if(e=e[Me]||e[we]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ea(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Sn(e){var i=e[xi];return i||(i=e[xi]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function D(e){e[vn]=!0}var K=new Set,ct={};function lt(e,i){tt(e,i),tt(e+"Capture",i)}function tt(e,i){for(ct[e]=i,e=0;e<i.length;e++)K.add(i[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Ft={};function Xt(e){return ke.call(Ft,e)?!0:ke.call(Vt,e)?!1:Nt.test(e)?Ft[e]=!0:(Vt[e]=!0,!1)}function $t(e,i,s){if(Xt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ce(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function te(e,i,s,u){if(u===null)e.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+u)}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function En(e,i,s){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){s=""+T,m.call(this,T)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return s},setValue:function(T){s=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function mn(e){if(!e._valueTracker){var i=Ke(e)?"checked":"value";e._valueTracker=En(e,i,""+e[i])}}function tn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return e&&(u=Ke(e)?e.checked?"true":"false":e.value),e=u,e!==s?(i.setValue(e),!0):!1}function re(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qe=/[\n"\\]/g;function ge(e){return e.replace(Qe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function si(e,i,s,u,h,m,T,N){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?oi(e,T,fe(i)):s!=null?oi(e,T,fe(s)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+fe(N):e.removeAttribute("name")}function vr(e,i,s,u,h,m,T,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){mn(e);return}s=s!=null?""+fe(s):"",i=i!=null?""+fe(i):s,N||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=N?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T),mn(e)}function oi(e,i,s){i==="number"&&re(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ta(e,i,s,u){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&u&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function rn(e,i,s){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+fe(s):""}function li(e,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(et(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=fe(i),e.defaultValue=s,u=e.textContent,u===s&&u!==""&&u!==null&&(e.value=u),mn(e)}function qn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ci(e,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,s):typeof s!="number"||s===0||ui.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function ko(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&s[h]!==u&&ci(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&ci(e,m,i[m])}function Ga(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qc(e){return fT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xr(){}var Cd=null;function wd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Wo=null;function Pg(e){var i=Si(e);if(i&&(e=i.stateNode)){var s=e[Ee]||null;t:switch(e=i.stateNode,i.type){case"input":if(si(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==e&&u.form===e.form){var h=u[Ee]||null;if(!h)throw Error(a(90));si(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===e.form&&tn(u)}break t;case"textarea":rn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Ta(e,!!s.multiple,i,!1)}}}var Dd=!1;function zg(e,i,s){if(Dd)return e(i,s);Dd=!0;try{var u=e(i);return u}finally{if(Dd=!1,(Xo!==null||Wo!==null)&&(If(),Xo&&(i=Xo,e=Wo,Wo=Xo=null,Pg(i),e)))for(i=0;i<e.length;i++)Pg(e[i])}}function fu(e,i){var s=e.stateNode;if(s===null)return null;var u=s[Ee]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=!1;if(Sr)try{var hu={};Object.defineProperty(hu,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",hu,hu),window.removeEventListener("test",hu,hu)}catch{Ud=!1}var is=null,Ld=null,Jc=null;function Fg(){if(Jc)return Jc;var e,i=Ld,s=i.length,u,h="value"in is?is.value:is.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var T=s-e;for(u=1;u<=T&&i[s-u]===h[m-u];u++);return Jc=h.slice(e,1<u?1-u:void 0)}function $c(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function tf(){return!0}function Bg(){return!1}function Gi(e){function i(s,u,h,m,T){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(s=e[N],this[N]=s?s(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?tf:Bg,this.isPropagationStopped=Bg,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=tf)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=tf)},persist:function(){},isPersistent:tf}),i}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Gi(js),du=g({},js,{view:0,detail:0}),hT=Gi(du),Nd,Od,pu,nf=g({},du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pu&&(pu&&e.type==="mousemove"?(Nd=e.screenX-pu.screenX,Od=e.screenY-pu.screenY):Od=Nd=0,pu=e),Nd)},movementY:function(e){return"movementY"in e?e.movementY:Od}}),Ig=Gi(nf),dT=g({},nf,{dataTransfer:0}),pT=Gi(dT),mT=g({},du,{relatedTarget:0}),Pd=Gi(mT),_T=g({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),gT=Gi(_T),vT=g({},js,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xT=Gi(vT),ST=g({},js,{data:0}),Hg=Gi(ST),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ET={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TT(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ET[e])?!!i[e]:!1}function zd(){return TT}var bT=g({},du,{key:function(e){if(e.key){var i=yT[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=$c(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?MT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?$c(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$c(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AT=Gi(bT),RT=g({},nf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Gi(RT),CT=g({},du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),wT=Gi(CT),DT=g({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),UT=Gi(DT),LT=g({},nf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NT=Gi(LT),OT=g({},js,{newState:0,oldState:0}),PT=Gi(OT),zT=[9,13,27,32],Fd=Sr&&"CompositionEvent"in window,mu=null;Sr&&"documentMode"in document&&(mu=document.documentMode);var FT=Sr&&"TextEvent"in window&&!mu,Vg=Sr&&(!Fd||mu&&8<mu&&11>=mu),kg=" ",Xg=!1;function Wg(e,i){switch(e){case"keyup":return zT.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qo=!1;function BT(e,i){switch(e){case"compositionend":return qg(i);case"keypress":return i.which!==32?null:(Xg=!0,kg);case"textInput":return e=i.data,e===kg&&Xg?null:e;default:return null}}function IT(e,i){if(qo)return e==="compositionend"||!Fd&&Wg(e,i)?(e=Fg(),Jc=Ld=is=null,qo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vg&&i.locale!=="ko"?null:i.data;default:return null}}var HT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!HT[e.type]:i==="textarea"}function Zg(e,i,s,u){Xo?Wo?Wo.push(u):Wo=[u]:Xo=u,i=qf(i,"onChange"),0<i.length&&(s=new ef("onChange","change",null,s,u),e.push({event:s,listeners:i}))}var _u=null,gu=null;function GT(e){DS(e,0)}function af(e){var i=Ea(e);if(tn(i))return e}function jg(e,i){if(e==="change")return i}var Kg=!1;if(Sr){var Bd;if(Sr){var Id="oninput"in document;if(!Id){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),Id=typeof Qg.oninput=="function"}Bd=Id}else Bd=!1;Kg=Bd&&(!document.documentMode||9<document.documentMode)}function Jg(){_u&&(_u.detachEvent("onpropertychange",$g),gu=_u=null)}function $g(e){if(e.propertyName==="value"&&af(gu)){var i=[];Zg(i,gu,e,wd(e)),zg(GT,i)}}function VT(e,i,s){e==="focusin"?(Jg(),_u=i,gu=s,_u.attachEvent("onpropertychange",$g)):e==="focusout"&&Jg()}function kT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return af(gu)}function XT(e,i){if(e==="click")return af(i)}function WT(e,i){if(e==="input"||e==="change")return af(i)}function qT(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ea=typeof Object.is=="function"?Object.is:qT;function vu(e,i){if(ea(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!ke.call(i,h)||!ea(e[h],i[h]))return!1}return!0}function tv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ev(e,i){var s=tv(e);e=0;for(var u;s;){if(s.nodeType===3){if(u=e+s.textContent.length,e<=i&&u>=i)return{node:s,offset:i-e};e=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=tv(s)}}function nv(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?nv(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function iv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=re(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=re(e.document)}return i}function Hd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var YT=Sr&&"documentMode"in document&&11>=document.documentMode,Yo=null,Gd=null,xu=null,Vd=!1;function av(e,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Vd||Yo==null||Yo!==re(u)||(u=Yo,"selectionStart"in u&&Hd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xu&&vu(xu,u)||(xu=u,u=qf(Gd,"onSelect"),0<u.length&&(i=new ef("onSelect","select",null,i,s),e.push({event:i,listeners:u}),i.target=Yo)))}function Ks(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Zo={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionrun:Ks("Transition","TransitionRun"),transitionstart:Ks("Transition","TransitionStart"),transitioncancel:Ks("Transition","TransitionCancel"),transitionend:Ks("Transition","TransitionEnd")},kd={},rv={};Sr&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function Qs(e){if(kd[e])return kd[e];if(!Zo[e])return e;var i=Zo[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in rv)return kd[e]=i[s];return e}var sv=Qs("animationend"),ov=Qs("animationiteration"),lv=Qs("animationstart"),ZT=Qs("transitionrun"),jT=Qs("transitionstart"),KT=Qs("transitioncancel"),uv=Qs("transitionend"),cv=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Va(e,i){cv.set(e,i),lt(i,[e])}var rf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ba=[],jo=0,Wd=0;function sf(){for(var e=jo,i=Wd=jo=0;i<e;){var s=ba[i];ba[i++]=null;var u=ba[i];ba[i++]=null;var h=ba[i];ba[i++]=null;var m=ba[i];if(ba[i++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}m!==0&&fv(s,h,m)}}function of(e,i,s,u){ba[jo++]=e,ba[jo++]=i,ba[jo++]=s,ba[jo++]=u,Wd|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function qd(e,i,s,u){return of(e,i,s,u),lf(e)}function Js(e,i){return of(e,null,null,i),lf(e)}function fv(e,i,s){e.lanes|=s;var u=e.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Bt(s),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=s|536870912),m):null}function lf(e){if(50<Gu)throw Gu=0,em=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ko={};function QT(e,i,s,u){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function na(e,i,s,u){return new QT(e,i,s,u)}function Yd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yr(e,i){var s=e.alternate;return s===null?(s=na(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function hv(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function uf(e,i,s,u,h,m){var T=0;if(u=e,typeof e=="function")Yd(e)&&(T=1);else if(typeof e=="string")T=nA(e,s,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=na(31,s,i,h),e.elementType=b,e.lanes=m,e;case M:return $s(s.children,h,m,i);case y:T=8,h|=24;break;case S:return e=na(12,s,i,h|2),e.elementType=S,e.lanes=m,e;case L:return e=na(13,s,i,h),e.elementType=L,e.lanes=m,e;case P:return e=na(19,s,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:T=10;break t;case U:T=9;break t;case C:T=11;break t;case w:T=14;break t;case V:T=16,u=null;break t}T=29,s=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=na(T,s,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function $s(e,i,s,u){return e=na(7,e,u,i),e.lanes=s,e}function Zd(e,i,s){return e=na(6,e,null,i),e.lanes=s,e}function dv(e){var i=na(18,null,null,0);return i.stateNode=e,i}function jd(e,i,s){return i=na(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var pv=new WeakMap;function Aa(e,i){if(typeof e=="object"&&e!==null){var s=pv.get(e);return s!==void 0?s:(i={value:e,source:i,stack:q(i)},pv.set(e,i),i)}return{value:e,source:i,stack:q(i)}}var Qo=[],Jo=0,cf=null,Su=0,Ra=[],Ca=0,as=null,$a=1,tr="";function Mr(e,i){Qo[Jo++]=Su,Qo[Jo++]=cf,cf=e,Su=i}function mv(e,i,s){Ra[Ca++]=$a,Ra[Ca++]=tr,Ra[Ca++]=as,as=e;var u=$a;e=tr;var h=32-Bt(u)-1;u&=~(1<<h),s+=1;var m=32-Bt(i)+h;if(30<m){var T=h-h%5;m=(u&(1<<T)-1).toString(32),u>>=T,h-=T,$a=1<<32-Bt(i)+h|s<<h|u,tr=m+e}else $a=1<<m|s<<h|u,tr=e}function Kd(e){e.return!==null&&(Mr(e,1),mv(e,1,0))}function Qd(e){for(;e===cf;)cf=Qo[--Jo],Qo[Jo]=null,Su=Qo[--Jo],Qo[Jo]=null;for(;e===as;)as=Ra[--Ca],Ra[Ca]=null,tr=Ra[--Ca],Ra[Ca]=null,$a=Ra[--Ca],Ra[Ca]=null}function _v(e,i){Ra[Ca++]=$a,Ra[Ca++]=tr,Ra[Ca++]=as,$a=i.id,tr=i.overflow,as=e}var fi=null,yn=null,He=!1,rs=null,wa=!1,Jd=Error(a(519));function ss(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yu(Aa(i,e)),Jd}function gv(e){var i=e.stateNode,s=e.type,u=e.memoizedProps;switch(i[Me]=e,i[Ee]=u,s){case"dialog":ze("cancel",i),ze("close",i);break;case"iframe":case"object":case"embed":ze("load",i);break;case"video":case"audio":for(s=0;s<ku.length;s++)ze(ku[s],i);break;case"source":ze("error",i);break;case"img":case"image":case"link":ze("error",i),ze("load",i);break;case"details":ze("toggle",i);break;case"input":ze("invalid",i),vr(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":ze("invalid",i);break;case"textarea":ze("invalid",i),li(i,u.value,u.defaultValue,u.children)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||OS(i.textContent,s)?(u.popover!=null&&(ze("beforetoggle",i),ze("toggle",i)),u.onScroll!=null&&ze("scroll",i),u.onScrollEnd!=null&&ze("scrollend",i),u.onClick!=null&&(i.onclick=xr),i=!0):i=!1,i||ss(e,!0)}function vv(e){for(fi=e.return;fi;)switch(fi.tag){case 5:case 31:case 13:wa=!1;return;case 27:case 3:wa=!0;return;default:fi=fi.return}}function $o(e){if(e!==fi)return!1;if(!He)return vv(e),He=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||_m(e.type,e.memoizedProps)),s=!s),s&&yn&&ss(e),vv(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));yn=kS(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));yn=kS(e)}else i===27?(i=yn,Ss(e.type)?(e=ym,ym=null,yn=e):yn=i):yn=fi?Ua(e.stateNode.nextSibling):null;return!0}function to(){yn=fi=null,He=!1}function $d(){var e=rs;return e!==null&&(Wi===null?Wi=e:Wi.push.apply(Wi,e),rs=null),e}function yu(e){rs===null?rs=[e]:rs.push(e)}var tp=z(null),eo=null,Er=null;function os(e,i,s){mt(tp,i._currentValue),i._currentValue=s}function Tr(e){e._currentValue=tp.current,nt(tp)}function ep(e,i,s){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===s)break;e=e.return}}function np(e,i,s,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var N=m;m=h;for(var W=0;W<i.length;W++)if(N.context===i[W]){m.lanes|=s,N=m.alternate,N!==null&&(N.lanes|=s),ep(m.return,s,e),u||(T=null);break t}m=N.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(a(341));T.lanes|=s,m=T.alternate,m!==null&&(m.lanes|=s),ep(T,s,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function tl(e,i,s,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var N=h.type;ea(h.pendingProps.value,T.value)||(e!==null?e.push(N):e=[N])}}else if(h===st.current){if(T=h.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Zu):e=[Zu])}h=h.return}e!==null&&np(i,e,s,u),i.flags|=262144}function ff(e){for(e=e.firstContext;e!==null;){if(!ea(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function no(e){eo=e,Er=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hi(e){return xv(eo,e)}function hf(e,i){return eo===null&&no(e),xv(e,i)}function xv(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Er===null){if(e===null)throw Error(a(308));Er=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Er=Er.next=i;return s}var JT=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},$T=o.unstable_scheduleCallback,tb=o.unstable_NormalPriority,In={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ip(){return{controller:new JT,data:new Map,refCount:0}}function Mu(e){e.refCount--,e.refCount===0&&$T(tb,function(){e.controller.abort()})}var Eu=null,ap=0,el=0,nl=null;function eb(e,i){if(Eu===null){var s=Eu=[];ap=0,el=om(),nl={status:"pending",value:void 0,then:function(u){s.push(u)}}}return ap++,i.then(Sv,Sv),i}function Sv(){if(--ap===0&&Eu!==null){nl!==null&&(nl.status="fulfilled");var e=Eu;Eu=null,el=0,nl=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nb(e,i){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var yv=F.S;F.S=function(e,i){aS=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&eb(e,i),yv!==null&&yv(e,i)};var io=z(null);function rp(){var e=io.current;return e!==null?e:hn.pooledCache}function df(e,i){i===null?mt(io,io.current):mt(io,i.pool)}function Mv(){var e=rp();return e===null?null:{parent:In._currentValue,pool:e}}var il=Error(a(460)),sp=Error(a(474)),pf=Error(a(542)),mf={then:function(){}};function Ev(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tv(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(xr,xr),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Av(e),e;default:if(typeof i.status=="string")i.then(xr,xr);else{if(e=hn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Av(e),e}throw ro=i,il}}function ao(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ro=s,il):s}}var ro=null;function bv(){if(ro===null)throw Error(a(459));var e=ro;return ro=null,e}function Av(e){if(e===il||e===pf)throw Error(a(483))}var al=null,Tu=0;function _f(e){var i=Tu;return Tu+=1,al===null&&(al=[]),Tv(al,e,i)}function bu(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function gf(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Rv(e){function i(J,Z){if(e){var at=J.deletions;at===null?(J.deletions=[Z],J.flags|=16):at.push(Z)}}function s(J,Z){if(!e)return null;for(;Z!==null;)i(J,Z),Z=Z.sibling;return null}function u(J){for(var Z=new Map;J!==null;)J.key!==null?Z.set(J.key,J):Z.set(J.index,J),J=J.sibling;return Z}function h(J,Z){return J=yr(J,Z),J.index=0,J.sibling=null,J}function m(J,Z,at){return J.index=at,e?(at=J.alternate,at!==null?(at=at.index,at<Z?(J.flags|=67108866,Z):at):(J.flags|=67108866,Z)):(J.flags|=1048576,Z)}function T(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function N(J,Z,at,St){return Z===null||Z.tag!==6?(Z=Zd(at,J.mode,St),Z.return=J,Z):(Z=h(Z,at),Z.return=J,Z)}function W(J,Z,at,St){var oe=at.type;return oe===M?vt(J,Z,at.props.children,St,at.key):Z!==null&&(Z.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===V&&ao(oe)===Z.type)?(Z=h(Z,at.props),bu(Z,at),Z.return=J,Z):(Z=uf(at.type,at.key,at.props,null,J.mode,St),bu(Z,at),Z.return=J,Z)}function rt(J,Z,at,St){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==at.containerInfo||Z.stateNode.implementation!==at.implementation?(Z=jd(at,J.mode,St),Z.return=J,Z):(Z=h(Z,at.children||[]),Z.return=J,Z)}function vt(J,Z,at,St,oe){return Z===null||Z.tag!==7?(Z=$s(at,J.mode,St,oe),Z.return=J,Z):(Z=h(Z,at),Z.return=J,Z)}function yt(J,Z,at){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Zd(""+Z,J.mode,at),Z.return=J,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case x:return at=uf(Z.type,Z.key,Z.props,null,J.mode,at),bu(at,Z),at.return=J,at;case E:return Z=jd(Z,J.mode,at),Z.return=J,Z;case V:return Z=ao(Z),yt(J,Z,at)}if(et(Z)||k(Z))return Z=$s(Z,J.mode,at,null),Z.return=J,Z;if(typeof Z.then=="function")return yt(J,_f(Z),at);if(Z.$$typeof===O)return yt(J,hf(J,Z),at);gf(J,Z)}return null}function ut(J,Z,at,St){var oe=Z!==null?Z.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return oe!==null?null:N(J,Z,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case x:return at.key===oe?W(J,Z,at,St):null;case E:return at.key===oe?rt(J,Z,at,St):null;case V:return at=ao(at),ut(J,Z,at,St)}if(et(at)||k(at))return oe!==null?null:vt(J,Z,at,St,null);if(typeof at.then=="function")return ut(J,Z,_f(at),St);if(at.$$typeof===O)return ut(J,Z,hf(J,at),St);gf(J,at)}return null}function dt(J,Z,at,St,oe){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return J=J.get(at)||null,N(Z,J,""+St,oe);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case x:return J=J.get(St.key===null?at:St.key)||null,W(Z,J,St,oe);case E:return J=J.get(St.key===null?at:St.key)||null,rt(Z,J,St,oe);case V:return St=ao(St),dt(J,Z,at,St,oe)}if(et(St)||k(St))return J=J.get(at)||null,vt(Z,J,St,oe,null);if(typeof St.then=="function")return dt(J,Z,at,_f(St),oe);if(St.$$typeof===O)return dt(J,Z,at,hf(Z,St),oe);gf(Z,St)}return null}function Qt(J,Z,at,St){for(var oe=null,qe=null,ee=Z,Ae=Z=0,Be=null;ee!==null&&Ae<at.length;Ae++){ee.index>Ae?(Be=ee,ee=null):Be=ee.sibling;var Ye=ut(J,ee,at[Ae],St);if(Ye===null){ee===null&&(ee=Be);break}e&&ee&&Ye.alternate===null&&i(J,ee),Z=m(Ye,Z,Ae),qe===null?oe=Ye:qe.sibling=Ye,qe=Ye,ee=Be}if(Ae===at.length)return s(J,ee),He&&Mr(J,Ae),oe;if(ee===null){for(;Ae<at.length;Ae++)ee=yt(J,at[Ae],St),ee!==null&&(Z=m(ee,Z,Ae),qe===null?oe=ee:qe.sibling=ee,qe=ee);return He&&Mr(J,Ae),oe}for(ee=u(ee);Ae<at.length;Ae++)Be=dt(ee,J,Ae,at[Ae],St),Be!==null&&(e&&Be.alternate!==null&&ee.delete(Be.key===null?Ae:Be.key),Z=m(Be,Z,Ae),qe===null?oe=Be:qe.sibling=Be,qe=Be);return e&&ee.forEach(function(bs){return i(J,bs)}),He&&Mr(J,Ae),oe}function he(J,Z,at,St){if(at==null)throw Error(a(151));for(var oe=null,qe=null,ee=Z,Ae=Z=0,Be=null,Ye=at.next();ee!==null&&!Ye.done;Ae++,Ye=at.next()){ee.index>Ae?(Be=ee,ee=null):Be=ee.sibling;var bs=ut(J,ee,Ye.value,St);if(bs===null){ee===null&&(ee=Be);break}e&&ee&&bs.alternate===null&&i(J,ee),Z=m(bs,Z,Ae),qe===null?oe=bs:qe.sibling=bs,qe=bs,ee=Be}if(Ye.done)return s(J,ee),He&&Mr(J,Ae),oe;if(ee===null){for(;!Ye.done;Ae++,Ye=at.next())Ye=yt(J,Ye.value,St),Ye!==null&&(Z=m(Ye,Z,Ae),qe===null?oe=Ye:qe.sibling=Ye,qe=Ye);return He&&Mr(J,Ae),oe}for(ee=u(ee);!Ye.done;Ae++,Ye=at.next())Ye=dt(ee,J,Ae,Ye.value,St),Ye!==null&&(e&&Ye.alternate!==null&&ee.delete(Ye.key===null?Ae:Ye.key),Z=m(Ye,Z,Ae),qe===null?oe=Ye:qe.sibling=Ye,qe=Ye);return e&&ee.forEach(function(dA){return i(J,dA)}),He&&Mr(J,Ae),oe}function fn(J,Z,at,St){if(typeof at=="object"&&at!==null&&at.type===M&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case x:t:{for(var oe=at.key;Z!==null;){if(Z.key===oe){if(oe=at.type,oe===M){if(Z.tag===7){s(J,Z.sibling),St=h(Z,at.props.children),St.return=J,J=St;break t}}else if(Z.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===V&&ao(oe)===Z.type){s(J,Z.sibling),St=h(Z,at.props),bu(St,at),St.return=J,J=St;break t}s(J,Z);break}else i(J,Z);Z=Z.sibling}at.type===M?(St=$s(at.props.children,J.mode,St,at.key),St.return=J,J=St):(St=uf(at.type,at.key,at.props,null,J.mode,St),bu(St,at),St.return=J,J=St)}return T(J);case E:t:{for(oe=at.key;Z!==null;){if(Z.key===oe)if(Z.tag===4&&Z.stateNode.containerInfo===at.containerInfo&&Z.stateNode.implementation===at.implementation){s(J,Z.sibling),St=h(Z,at.children||[]),St.return=J,J=St;break t}else{s(J,Z);break}else i(J,Z);Z=Z.sibling}St=jd(at,J.mode,St),St.return=J,J=St}return T(J);case V:return at=ao(at),fn(J,Z,at,St)}if(et(at))return Qt(J,Z,at,St);if(k(at)){if(oe=k(at),typeof oe!="function")throw Error(a(150));return at=oe.call(at),he(J,Z,at,St)}if(typeof at.then=="function")return fn(J,Z,_f(at),St);if(at.$$typeof===O)return fn(J,Z,hf(J,at),St);gf(J,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,Z!==null&&Z.tag===6?(s(J,Z.sibling),St=h(Z,at),St.return=J,J=St):(s(J,Z),St=Zd(at,J.mode,St),St.return=J,J=St),T(J)):s(J,Z)}return function(J,Z,at,St){try{Tu=0;var oe=fn(J,Z,at,St);return al=null,oe}catch(ee){if(ee===il||ee===pf)throw ee;var qe=na(29,ee,null,J.mode);return qe.lanes=St,qe.return=J,qe}}}var so=Rv(!0),Cv=Rv(!1),ls=!1;function op(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lp(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function us(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cs(e,i,s){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Je&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=lf(e),fv(e,null,s),i}return of(e,u,i,s),lf(e)}function Au(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,pe(e,s)}}function up(e,i){var s=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var cp=!1;function Ru(){if(cp){var e=nl;if(e!==null)throw e}}function Cu(e,i,s,u){cp=!1;var h=e.updateQueue;ls=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,N=h.shared.pending;if(N!==null){h.shared.pending=null;var W=N,rt=W.next;W.next=null,T===null?m=rt:T.next=rt,T=W;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,N=vt.lastBaseUpdate,N!==T&&(N===null?vt.firstBaseUpdate=rt:N.next=rt,vt.lastBaseUpdate=W))}if(m!==null){var yt=h.baseState;T=0,vt=rt=W=null,N=m;do{var ut=N.lane&-536870913,dt=ut!==N.lane;if(dt?(Fe&ut)===ut:(u&ut)===ut){ut!==0&&ut===el&&(cp=!0),vt!==null&&(vt=vt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var Qt=e,he=N;ut=i;var fn=s;switch(he.tag){case 1:if(Qt=he.payload,typeof Qt=="function"){yt=Qt.call(fn,yt,ut);break t}yt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=he.payload,ut=typeof Qt=="function"?Qt.call(fn,yt,ut):Qt,ut==null)break t;yt=g({},yt,ut);break t;case 2:ls=!0}}ut=N.callback,ut!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=h.callbacks,dt===null?h.callbacks=[ut]:dt.push(ut))}else dt={lane:ut,tag:N.tag,payload:N.payload,callback:N.callback,next:null},vt===null?(rt=vt=dt,W=yt):vt=vt.next=dt,T|=ut;if(N=N.next,N===null){if(N=h.shared.pending,N===null)break;dt=N,N=dt.next,dt.next=null,h.lastBaseUpdate=dt,h.shared.pending=null}}while(!0);vt===null&&(W=yt),h.baseState=W,h.firstBaseUpdate=rt,h.lastBaseUpdate=vt,m===null&&(h.shared.lanes=0),ms|=T,e.lanes=T,e.memoizedState=yt}}function wv(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Dv(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)wv(s[e],i)}var rl=z(null),vf=z(0);function Uv(e,i){e=Nr,mt(vf,e),mt(rl,i),Nr=e|i.baseLanes}function fp(){mt(vf,Nr),mt(rl,rl.current)}function hp(){Nr=vf.current,nt(rl),nt(vf)}var ia=z(null),Da=null;function fs(e){var i=e.alternate;mt(Pn,Pn.current&1),mt(ia,e),Da===null&&(i===null||rl.current!==null||i.memoizedState!==null)&&(Da=e)}function dp(e){mt(Pn,Pn.current),mt(ia,e),Da===null&&(Da=e)}function Lv(e){e.tag===22?(mt(Pn,Pn.current),mt(ia,e),Da===null&&(Da=e)):hs()}function hs(){mt(Pn,Pn.current),mt(ia,ia.current)}function aa(e){nt(ia),Da===e&&(Da=null),nt(Pn)}var Pn=z(0);function xf(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||xm(s)||Sm(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var br=0,Te=null,un=null,Hn=null,Sf=!1,sl=!1,oo=!1,yf=0,wu=0,ol=null,ib=0;function Un(){throw Error(a(321))}function pp(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ea(e[s],i[s]))return!1;return!0}function mp(e,i,s,u,h,m){return br=m,Te=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?mx:Dp,oo=!1,m=s(u,h),oo=!1,sl&&(m=Ov(i,s,u,h)),Nv(e),m}function Nv(e){F.H=Lu;var i=un!==null&&un.next!==null;if(br=0,Hn=un=Te=null,Sf=!1,wu=0,ol=null,i)throw Error(a(300));e===null||Gn||(e=e.dependencies,e!==null&&ff(e)&&(Gn=!0))}function Ov(e,i,s,u){Te=e;var h=0;do{if(sl&&(ol=null),wu=0,sl=!1,25<=h)throw Error(a(301));if(h+=1,Hn=un=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=_x,m=i(s,u)}while(sl);return m}function ab(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Du(i):i,e=e.useState()[0],(un!==null?un.memoizedState:null)!==e&&(Te.flags|=1024),i}function _p(){var e=yf!==0;return yf=0,e}function gp(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function vp(e){if(Sf){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Sf=!1}br=0,Hn=un=Te=null,sl=!1,wu=yf=0,ol=null}function Di(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hn===null?Te.memoizedState=Hn=e:Hn=Hn.next=e,Hn}function zn(){if(un===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=un.next;var i=Hn===null?Te.memoizedState:Hn.next;if(i!==null)Hn=i,un=e;else{if(e===null)throw Te.alternate===null?Error(a(467)):Error(a(310));un=e,e={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},Hn===null?Te.memoizedState=Hn=e:Hn=Hn.next=e}return Hn}function Mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Du(e){var i=wu;return wu+=1,ol===null&&(ol=[]),e=Tv(ol,e,i),i=Te,(Hn===null?i.memoizedState:Hn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?mx:Dp),e}function Ef(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Du(e);if(e.$$typeof===O)return hi(e)}throw Error(a(438,String(e)))}function xp(e){var i=null,s=Te.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=Te.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Mf(),Te.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),u=0;u<e;u++)s[u]=R;return i.index++,s}function Ar(e,i){return typeof i=="function"?i(e):i}function Tf(e){var i=zn();return Sp(i,un,e)}function Sp(e,i,s){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var N=T=null,W=null,rt=i,vt=!1;do{var yt=rt.lane&-536870913;if(yt!==rt.lane?(Fe&yt)===yt:(br&yt)===yt){var ut=rt.revertLane;if(ut===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),yt===el&&(vt=!0);else if((br&ut)===ut){rt=rt.next,ut===el&&(vt=!0);continue}else yt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},W===null?(N=W=yt,T=m):W=W.next=yt,Te.lanes|=ut,ms|=ut;yt=rt.action,oo&&s(m,yt),m=rt.hasEagerState?rt.eagerState:s(m,yt)}else ut={lane:yt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},W===null?(N=W=ut,T=m):W=W.next=ut,Te.lanes|=yt,ms|=yt;rt=rt.next}while(rt!==null&&rt!==i);if(W===null?T=m:W.next=N,!ea(m,e.memoizedState)&&(Gn=!0,vt&&(s=nl,s!==null)))throw s;e.memoizedState=m,e.baseState=T,e.baseQueue=W,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function yp(e){var i=zn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var u=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do m=e(m,T.action),T=T.next;while(T!==h);ea(m,i.memoizedState)||(Gn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function Pv(e,i,s){var u=Te,h=zn(),m=He;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var T=!ea((un||h).memoizedState,s);if(T&&(h.memoizedState=s,Gn=!0),h=h.queue,Tp(Bv.bind(null,u,h,e),[e]),h.getSnapshot!==i||T||Hn!==null&&Hn.memoizedState.tag&1){if(u.flags|=2048,ll(9,{destroy:void 0},Fv.bind(null,u,h,s,i),null),hn===null)throw Error(a(349));m||(br&127)!==0||zv(u,i,s)}return s}function zv(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Te.updateQueue,i===null?(i=Mf(),Te.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Fv(e,i,s,u){i.value=s,i.getSnapshot=u,Iv(i)&&Hv(e)}function Bv(e,i,s){return s(function(){Iv(i)&&Hv(e)})}function Iv(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ea(e,s)}catch{return!0}}function Hv(e){var i=Js(e,2);i!==null&&qi(i,e,2)}function Mp(e){var i=Di();if(typeof e=="function"){var s=e;if(e=s(),oo){It(!0);try{s()}finally{It(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},i}function Gv(e,i,s,u){return e.baseState=s,Sp(e,un,typeof u=="function"?u:Ar)}function rb(e,i,s,u,h){if(Rf(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};F.T!==null?s(!0):m.isTransition=!1,u(m),s=i.pending,s===null?(m.next=i.pending=m,Vv(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Vv(e,i){var s=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=F.T,T={};F.T=T;try{var N=s(h,u),W=F.S;W!==null&&W(T,N),kv(e,i,N)}catch(rt){Ep(e,i,rt)}finally{m!==null&&T.types!==null&&(m.types=T.types),F.T=m}}else try{m=s(h,u),kv(e,i,m)}catch(rt){Ep(e,i,rt)}}function kv(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){Xv(e,i,u)},function(u){return Ep(e,i,u)}):Xv(e,i,s)}function Xv(e,i,s){i.status="fulfilled",i.value=s,Wv(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Vv(e,s)))}function Ep(e,i,s){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,Wv(i),i=i.next;while(i!==u)}e.action=null}function Wv(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function qv(e,i){return i}function Yv(e,i){if(He){var s=hn.formState;if(s!==null){t:{var u=Te;if(He){if(yn){e:{for(var h=yn,m=wa;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ua(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){yn=Ua(h.nextSibling),u=h.data==="F!";break t}}ss(u)}u=!1}u&&(i=s[0])}}return s=Di(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qv,lastRenderedState:i},s.queue=u,s=hx.bind(null,Te,u),u.dispatch=s,u=Mp(!1),m=wp.bind(null,Te,!1,u.queue),u=Di(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,s=rb.bind(null,Te,h,m,s),h.dispatch=s,u.memoizedState=e,[i,s,!1]}function Zv(e){var i=zn();return jv(i,un,e)}function jv(e,i,s){if(i=Sp(e,i,qv)[0],e=Tf(Ar)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Du(i)}catch(T){throw T===il?pf:T}else u=i;i=zn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(Te.flags|=2048,ll(9,{destroy:void 0},sb.bind(null,h,s),null)),[u,m,e]}function sb(e,i){e.action=i}function Kv(e){var i=zn(),s=un;if(s!==null)return jv(i,s,e);zn(),i=i.memoizedState,s=zn();var u=s.queue.dispatch;return s.memoizedState=e,[i,u,!1]}function ll(e,i,s,u){return e={tag:e,create:s,deps:u,inst:i,next:null},i=Te.updateQueue,i===null&&(i=Mf(),Te.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(u=s.next,s.next=e,e.next=u,i.lastEffect=e),e}function Qv(){return zn().memoizedState}function bf(e,i,s,u){var h=Di();Te.flags|=e,h.memoizedState=ll(1|i,{destroy:void 0},s,u===void 0?null:u)}function Af(e,i,s,u){var h=zn();u=u===void 0?null:u;var m=h.memoizedState.inst;un!==null&&u!==null&&pp(u,un.memoizedState.deps)?h.memoizedState=ll(i,m,s,u):(Te.flags|=e,h.memoizedState=ll(1|i,m,s,u))}function Jv(e,i){bf(8390656,8,e,i)}function Tp(e,i){Af(2048,8,e,i)}function ob(e){Te.flags|=4;var i=Te.updateQueue;if(i===null)i=Mf(),Te.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function $v(e){var i=zn().memoizedState;return ob({ref:i,nextImpl:e}),function(){if((Je&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function tx(e,i){return Af(4,2,e,i)}function ex(e,i){return Af(4,4,e,i)}function nx(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ix(e,i,s){s=s!=null?s.concat([e]):null,Af(4,4,nx.bind(null,i,e),s)}function bp(){}function ax(e,i){var s=zn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&pp(i,u[1])?u[0]:(s.memoizedState=[e,i],e)}function rx(e,i){var s=zn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&pp(i,u[1]))return u[0];if(u=e(),oo){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[u,i],u}function Ap(e,i,s){return s===void 0||(br&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=sS(),Te.lanes|=e,ms|=e,s)}function sx(e,i,s,u){return ea(s,i)?s:rl.current!==null?(e=Ap(e,s,u),ea(e,i)||(Gn=!0),e):(br&42)===0||(br&1073741824)!==0&&(Fe&261930)===0?(Gn=!0,e.memoizedState=s):(e=sS(),Te.lanes|=e,ms|=e,i)}function ox(e,i,s,u,h){var m=G.p;G.p=m!==0&&8>m?m:8;var T=F.T,N={};F.T=N,wp(e,!1,i,s);try{var W=h(),rt=F.S;if(rt!==null&&rt(N,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var vt=nb(W,u);Uu(e,i,vt,oa(e))}else Uu(e,i,u,oa(e))}catch(yt){Uu(e,i,{then:function(){},status:"rejected",reason:yt},oa())}finally{G.p=m,T!==null&&N.types!==null&&(T.types=N.types),F.T=T}}function lb(){}function Rp(e,i,s,u){if(e.tag!==5)throw Error(a(476));var h=lx(e).queue;ox(e,h,i,Q,s===null?lb:function(){return ux(e),s(u)})}function lx(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:Q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ux(e){var i=lx(e);i.next===null&&(i=e.alternate.memoizedState),Uu(e,i.next.queue,{},oa())}function Cp(){return hi(Zu)}function cx(){return zn().memoizedState}function fx(){return zn().memoizedState}function ub(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=oa();e=us(s);var u=cs(i,e,s);u!==null&&(qi(u,i,s),Au(u,i,s)),i={cache:ip()},e.payload=i;return}i=i.return}}function cb(e,i,s){var u=oa();s={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Rf(e)?dx(i,s):(s=qd(e,i,s,u),s!==null&&(qi(s,e,u),px(s,i,u)))}function hx(e,i,s){var u=oa();Uu(e,i,s,u)}function Uu(e,i,s,u){var h={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Rf(e))dx(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,N=m(T,s);if(h.hasEagerState=!0,h.eagerState=N,ea(N,T))return of(e,i,h,0),hn===null&&sf(),!1}catch{}if(s=qd(e,i,h,u),s!==null)return qi(s,e,u),px(s,i,u),!0}return!1}function wp(e,i,s,u){if(u={lane:2,revertLane:om(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Rf(e)){if(i)throw Error(a(479))}else i=qd(e,s,u,2),i!==null&&qi(i,e,2)}function Rf(e){var i=e.alternate;return e===Te||i!==null&&i===Te}function dx(e,i){sl=Sf=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function px(e,i,s){if((s&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,pe(e,s)}}var Lu={readContext:hi,use:Ef,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useLayoutEffect:Un,useInsertionEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useSyncExternalStore:Un,useId:Un,useHostTransitionStatus:Un,useFormState:Un,useActionState:Un,useOptimistic:Un,useMemoCache:Un,useCacheRefresh:Un};Lu.useEffectEvent=Un;var mx={readContext:hi,use:Ef,useCallback:function(e,i){return Di().memoizedState=[e,i===void 0?null:i],e},useContext:hi,useEffect:Jv,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,bf(4194308,4,nx.bind(null,i,e),s)},useLayoutEffect:function(e,i){return bf(4194308,4,e,i)},useInsertionEffect:function(e,i){bf(4,2,e,i)},useMemo:function(e,i){var s=Di();i=i===void 0?null:i;var u=e();if(oo){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[u,i],u},useReducer:function(e,i,s){var u=Di();if(s!==void 0){var h=s(i);if(oo){It(!0);try{s(i)}finally{It(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=cb.bind(null,Te,e),[u.memoizedState,e]},useRef:function(e){var i=Di();return e={current:e},i.memoizedState=e},useState:function(e){e=Mp(e);var i=e.queue,s=hx.bind(null,Te,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:bp,useDeferredValue:function(e,i){var s=Di();return Ap(s,e,i)},useTransition:function(){var e=Mp(!1);return e=ox.bind(null,Te,e.queue,!0,!1),Di().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var u=Te,h=Di();if(He){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),hn===null)throw Error(a(349));(Fe&127)!==0||zv(u,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,Jv(Bv.bind(null,u,m,e),[e]),u.flags|=2048,ll(9,{destroy:void 0},Fv.bind(null,u,m,s,i),null),s},useId:function(){var e=Di(),i=hn.identifierPrefix;if(He){var s=tr,u=$a;s=(u&~(1<<32-Bt(u)-1)).toString(32)+s,i="_"+i+"R_"+s,s=yf++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ib++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Cp,useFormState:Yv,useActionState:Yv,useOptimistic:function(e){var i=Di();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=wp.bind(null,Te,!0,s),s.dispatch=i,[e,i]},useMemoCache:xp,useCacheRefresh:function(){return Di().memoizedState=ub.bind(null,Te)},useEffectEvent:function(e){var i=Di(),s={impl:e};return i.memoizedState=s,function(){if((Je&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Dp={readContext:hi,use:Ef,useCallback:ax,useContext:hi,useEffect:Tp,useImperativeHandle:ix,useInsertionEffect:tx,useLayoutEffect:ex,useMemo:rx,useReducer:Tf,useRef:Qv,useState:function(){return Tf(Ar)},useDebugValue:bp,useDeferredValue:function(e,i){var s=zn();return sx(s,un.memoizedState,e,i)},useTransition:function(){var e=Tf(Ar)[0],i=zn().memoizedState;return[typeof e=="boolean"?e:Du(e),i]},useSyncExternalStore:Pv,useId:cx,useHostTransitionStatus:Cp,useFormState:Zv,useActionState:Zv,useOptimistic:function(e,i){var s=zn();return Gv(s,un,e,i)},useMemoCache:xp,useCacheRefresh:fx};Dp.useEffectEvent=$v;var _x={readContext:hi,use:Ef,useCallback:ax,useContext:hi,useEffect:Tp,useImperativeHandle:ix,useInsertionEffect:tx,useLayoutEffect:ex,useMemo:rx,useReducer:yp,useRef:Qv,useState:function(){return yp(Ar)},useDebugValue:bp,useDeferredValue:function(e,i){var s=zn();return un===null?Ap(s,e,i):sx(s,un.memoizedState,e,i)},useTransition:function(){var e=yp(Ar)[0],i=zn().memoizedState;return[typeof e=="boolean"?e:Du(e),i]},useSyncExternalStore:Pv,useId:cx,useHostTransitionStatus:Cp,useFormState:Kv,useActionState:Kv,useOptimistic:function(e,i){var s=zn();return un!==null?Gv(s,un,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:xp,useCacheRefresh:fx};_x.useEffectEvent=$v;function Up(e,i,s,u){i=e.memoizedState,s=s(u,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Lp={enqueueSetState:function(e,i,s){e=e._reactInternals;var u=oa(),h=us(u);h.payload=i,s!=null&&(h.callback=s),i=cs(e,h,u),i!==null&&(qi(i,e,u),Au(i,e,u))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var u=oa(),h=us(u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=cs(e,h,u),i!==null&&(qi(i,e,u),Au(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=oa(),u=us(s);u.tag=2,i!=null&&(u.callback=i),i=cs(e,u,s),i!==null&&(qi(i,e,s),Au(i,e,s))}};function gx(e,i,s,u,h,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!vu(s,u)||!vu(h,m):!0}function vx(e,i,s,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==e&&Lp.enqueueReplaceState(i,i.state,null)}function lo(e,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function xx(e){rf(e)}function Sx(e){console.error(e)}function yx(e){rf(e)}function Cf(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Mx(e,i,s){try{var u=e.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Np(e,i,s){return s=us(s),s.tag=3,s.payload={element:null},s.callback=function(){Cf(e,i)},s}function Ex(e){return e=us(e),e.tag=3,e}function Tx(e,i,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){Mx(i,s,u)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Mx(i,s,u),typeof h!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function fb(e,i,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&tl(i,s,h,!0),s=ia.current,s!==null){switch(s.tag){case 31:case 13:return Da===null?Hf():s.alternate===null&&Ln===0&&(Ln=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===mf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),am(e,u,h)),!1;case 22:return s.flags|=65536,u===mf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),am(e,u,h)),!1}throw Error(a(435,s.tag))}return am(e,u,h),Hf(),!1}if(He)return i=ia.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Jd&&(e=Error(a(422),{cause:u}),yu(Aa(e,s)))):(u!==Jd&&(i=Error(a(423),{cause:u}),yu(Aa(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Aa(u,s),h=Np(e.stateNode,u,h),up(e,h),Ln!==4&&(Ln=2)),!1;var m=Error(a(520),{cause:u});if(m=Aa(m,s),Hu===null?Hu=[m]:Hu.push(m),Ln!==4&&(Ln=2),i===null)return!0;u=Aa(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Np(s.stateNode,u,e),up(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_s===null||!_s.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Ex(h),Tx(h,e,s,u),up(s,h),!1}s=s.return}while(s!==null);return!1}var Op=Error(a(461)),Gn=!1;function di(e,i,s,u){i.child=e===null?Cv(i,null,s,u):so(i,e.child,s,u)}function bx(e,i,s,u,h){s=s.render;var m=i.ref;if("ref"in u){var T={};for(var N in u)N!=="ref"&&(T[N]=u[N])}else T=u;return no(i),u=mp(e,i,s,T,m,h),N=_p(),e!==null&&!Gn?(gp(e,i,h),Rr(e,i,h)):(He&&N&&Kd(i),i.flags|=1,di(e,i,u,h),i.child)}function Ax(e,i,s,u,h){if(e===null){var m=s.type;return typeof m=="function"&&!Yd(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Rx(e,i,m,u,h)):(e=uf(s.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Vp(e,h)){var T=m.memoizedProps;if(s=s.compare,s=s!==null?s:vu,s(T,u)&&e.ref===i.ref)return Rr(e,i,h)}return i.flags|=1,e=yr(m,u),e.ref=i.ref,e.return=i,i.child=e}function Rx(e,i,s,u,h){if(e!==null){var m=e.memoizedProps;if(vu(m,u)&&e.ref===i.ref)if(Gn=!1,i.pendingProps=u=m,Vp(e,h))(e.flags&131072)!==0&&(Gn=!0);else return i.lanes=e.lanes,Rr(e,i,h)}return Pp(e,i,s,u,h)}function Cx(e,i,s,u){var h=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return wx(e,i,m,s,u)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&df(i,m!==null?m.cachePool:null),m!==null?Uv(i,m):fp(),Lv(i);else return u=i.lanes=536870912,wx(e,i,m!==null?m.baseLanes|s:s,s,u)}else m!==null?(df(i,m.cachePool),Uv(i,m),hs(),i.memoizedState=null):(e!==null&&df(i,null),fp(),hs());return di(e,i,h,s),i.child}function Nu(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function wx(e,i,s,u,h){var m=rp();return m=m===null?null:{parent:In._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&df(i,null),fp(),Lv(i),e!==null&&tl(e,i,u,!0),i.childLanes=h,null}function wf(e,i){return i=Uf({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Dx(e,i,s){return so(i,e.child,null,s),e=wf(i,i.pendingProps),e.flags|=2,aa(i),i.memoizedState=null,e}function hb(e,i,s){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(He){if(u.mode==="hidden")return e=wf(i,u),i.lanes=536870912,Nu(null,e);if(dp(i),(e=yn)?(e=VS(e,wa),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:as!==null?{id:$a,overflow:tr}:null,retryLane:536870912,hydrationErrors:null},s=dv(e),s.return=i,i.child=s,fi=i,yn=null)):e=null,e===null)throw ss(i);return i.lanes=536870912,null}return wf(i,u)}var m=e.memoizedState;if(m!==null){var T=m.dehydrated;if(dp(i),h)if(i.flags&256)i.flags&=-257,i=Dx(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Gn||tl(e,i,s,!1),h=(s&e.childLanes)!==0,Gn||h){if(u=hn,u!==null&&(T=ie(u,s),T!==0&&T!==m.retryLane))throw m.retryLane=T,Js(e,T),qi(u,e,T),Op;Hf(),i=Dx(e,i,s)}else e=m.treeContext,yn=Ua(T.nextSibling),fi=i,He=!0,rs=null,wa=!1,e!==null&&_v(i,e),i=wf(i,u),i.flags|=4096;return i}return e=yr(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Df(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Pp(e,i,s,u,h){return no(i),s=mp(e,i,s,u,void 0,h),u=_p(),e!==null&&!Gn?(gp(e,i,h),Rr(e,i,h)):(He&&u&&Kd(i),i.flags|=1,di(e,i,s,h),i.child)}function Ux(e,i,s,u,h,m){return no(i),i.updateQueue=null,s=Ov(i,u,s,h),Nv(e),u=_p(),e!==null&&!Gn?(gp(e,i,m),Rr(e,i,m)):(He&&u&&Kd(i),i.flags|=1,di(e,i,s,m),i.child)}function Lx(e,i,s,u,h){if(no(i),i.stateNode===null){var m=Ko,T=s.contextType;typeof T=="object"&&T!==null&&(m=hi(T)),m=new s(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Lp,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},op(i),T=s.contextType,m.context=typeof T=="object"&&T!==null?hi(T):Ko,m.state=i.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Up(i,s,T,u),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Lp.enqueueReplaceState(m,m.state,null),Cu(i,u,m,h),Ru(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var N=i.memoizedProps,W=lo(s,N);m.props=W;var rt=m.context,vt=s.contextType;T=Ko,typeof vt=="object"&&vt!==null&&(T=hi(vt));var yt=s.getDerivedStateFromProps;vt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,vt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||rt!==T)&&vx(i,m,u,T),ls=!1;var ut=i.memoizedState;m.state=ut,Cu(i,u,m,h),Ru(),rt=i.memoizedState,N||ut!==rt||ls?(typeof yt=="function"&&(Up(i,s,yt,u),rt=i.memoizedState),(W=ls||gx(i,s,W,u,ut,rt,T))?(vt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=rt),m.props=u,m.state=rt,m.context=T,u=W):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,lp(e,i),T=i.memoizedProps,vt=lo(s,T),m.props=vt,yt=i.pendingProps,ut=m.context,rt=s.contextType,W=Ko,typeof rt=="object"&&rt!==null&&(W=hi(rt)),N=s.getDerivedStateFromProps,(rt=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==yt||ut!==W)&&vx(i,m,u,W),ls=!1,ut=i.memoizedState,m.state=ut,Cu(i,u,m,h),Ru();var dt=i.memoizedState;T!==yt||ut!==dt||ls||e!==null&&e.dependencies!==null&&ff(e.dependencies)?(typeof N=="function"&&(Up(i,s,N,u),dt=i.memoizedState),(vt=ls||gx(i,s,vt,u,ut,dt,W)||e!==null&&e.dependencies!==null&&ff(e.dependencies))?(rt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,dt,W),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,dt,W)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=dt),m.props=u,m.state=dt,m.context=W,u=vt):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&ut===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,Df(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=so(i,e.child,null,h),i.child=so(i,null,s,h)):di(e,i,s,h),i.memoizedState=m.state,e=i.child):e=Rr(e,i,h),e}function Nx(e,i,s,u){return to(),i.flags|=256,di(e,i,s,u),i.child}var zp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fp(e){return{baseLanes:e,cachePool:Mv()}}function Bp(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=sa),e}function Ox(e,i,s){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(Pn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(He){if(h?fs(i):hs(),(e=yn)?(e=VS(e,wa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:as!==null?{id:$a,overflow:tr}:null,retryLane:536870912,hydrationErrors:null},s=dv(e),s.return=i,i.child=s,fi=i,yn=null)):e=null,e===null)throw ss(i);return Sm(e)?i.lanes=32:i.lanes=536870912,null}var N=u.children;return u=u.fallback,h?(hs(),h=i.mode,N=Uf({mode:"hidden",children:N},h),u=$s(u,h,s,null),N.return=i,u.return=i,N.sibling=u,i.child=N,u=i.child,u.memoizedState=Fp(s),u.childLanes=Bp(e,T,s),i.memoizedState=zp,Nu(null,u)):(fs(i),Ip(i,N))}var W=e.memoizedState;if(W!==null&&(N=W.dehydrated,N!==null)){if(m)i.flags&256?(fs(i),i.flags&=-257,i=Hp(e,i,s)):i.memoizedState!==null?(hs(),i.child=e.child,i.flags|=128,i=null):(hs(),N=u.fallback,h=i.mode,u=Uf({mode:"visible",children:u.children},h),N=$s(N,h,s,null),N.flags|=2,u.return=i,N.return=i,u.sibling=N,i.child=u,so(i,e.child,null,s),u=i.child,u.memoizedState=Fp(s),u.childLanes=Bp(e,T,s),i.memoizedState=zp,i=Nu(null,u));else if(fs(i),Sm(N)){if(T=N.nextSibling&&N.nextSibling.dataset,T)var rt=T.dgst;T=rt,u=Error(a(419)),u.stack="",u.digest=T,yu({value:u,source:null,stack:null}),i=Hp(e,i,s)}else if(Gn||tl(e,i,s,!1),T=(s&e.childLanes)!==0,Gn||T){if(T=hn,T!==null&&(u=ie(T,s),u!==0&&u!==W.retryLane))throw W.retryLane=u,Js(e,u),qi(T,e,u),Op;xm(N)||Hf(),i=Hp(e,i,s)}else xm(N)?(i.flags|=192,i.child=e.child,i=null):(e=W.treeContext,yn=Ua(N.nextSibling),fi=i,He=!0,rs=null,wa=!1,e!==null&&_v(i,e),i=Ip(i,u.children),i.flags|=4096);return i}return h?(hs(),N=u.fallback,h=i.mode,W=e.child,rt=W.sibling,u=yr(W,{mode:"hidden",children:u.children}),u.subtreeFlags=W.subtreeFlags&65011712,rt!==null?N=yr(rt,N):(N=$s(N,h,s,null),N.flags|=2),N.return=i,u.return=i,u.sibling=N,i.child=u,Nu(null,u),u=i.child,N=e.child.memoizedState,N===null?N=Fp(s):(h=N.cachePool,h!==null?(W=In._currentValue,h=h.parent!==W?{parent:W,pool:W}:h):h=Mv(),N={baseLanes:N.baseLanes|s,cachePool:h}),u.memoizedState=N,u.childLanes=Bp(e,T,s),i.memoizedState=zp,Nu(e.child,u)):(fs(i),s=e.child,e=s.sibling,s=yr(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=s,i.memoizedState=null,s)}function Ip(e,i){return i=Uf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Uf(e,i){return e=na(22,e,null,i),e.lanes=0,e}function Hp(e,i,s){return so(i,e.child,null,s),e=Ip(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Px(e,i,s){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),ep(e.return,i,s)}function Gp(e,i,s,u,h,m){var T=e.memoizedState;T===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h,treeForkCount:m}:(T.isBackwards=i,T.rendering=null,T.renderingStartTime=0,T.last=u,T.tail=s,T.tailMode=h,T.treeForkCount=m)}function zx(e,i,s){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var T=Pn.current,N=(T&2)!==0;if(N?(T=T&1|2,i.flags|=128):T&=1,mt(Pn,T),di(e,i,u,s),u=He?Su:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Px(e,s,i);else if(e.tag===19)Px(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&xf(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Gp(i,!1,h,s,m,u);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&xf(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}Gp(i,!0,s,null,m,u);break;case"together":Gp(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Rr(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),ms|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(tl(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=yr(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=yr(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Vp(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ff(e)))}function db(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),os(i,In,e.memoizedState.cache),to();break;case 27:case 5:Dt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:os(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,dp(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(fs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ox(e,i,s):(fs(i),e=Rr(e,i,s),e!==null?e.sibling:null);fs(i);break;case 19:var h=(e.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(tl(e,i,s,!1),u=(s&i.childLanes)!==0),h){if(u)return zx(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),mt(Pn,Pn.current),u)break;return null;case 22:return i.lanes=0,Cx(e,i,s,i.pendingProps);case 24:os(i,In,e.memoizedState.cache)}return Rr(e,i,s)}function Fx(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Gn=!0;else{if(!Vp(e,s)&&(i.flags&128)===0)return Gn=!1,db(e,i,s);Gn=(e.flags&131072)!==0}else Gn=!1,He&&(i.flags&1048576)!==0&&mv(i,Su,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=ao(i.elementType),i.type=e,typeof e=="function")Yd(e)?(u=lo(e,u),i.tag=1,i=Lx(null,i,e,u,s)):(i.tag=0,i=Pp(null,i,e,u,s));else{if(e!=null){var h=e.$$typeof;if(h===C){i.tag=11,i=bx(null,i,e,u,s);break t}else if(h===w){i.tag=14,i=Ax(null,i,e,u,s);break t}}throw i=it(e)||e,Error(a(306,i,""))}}return i;case 0:return Pp(e,i,i.type,i.pendingProps,s);case 1:return u=i.type,h=lo(u,i.pendingProps),Lx(e,i,u,h,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,lp(e,i),Cu(i,u,null,s);var T=i.memoizedState;if(u=T.cache,os(i,In,u),u!==m.cache&&np(i,[In],s,!0),Ru(),u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Nx(e,i,u,s);break t}else if(u!==h){h=Aa(Error(a(424)),i),yu(h),i=Nx(e,i,u,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,yn=Ua(e.firstChild),fi=i,He=!0,rs=null,wa=!0,s=Cv(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(to(),u===h){i=Rr(e,i,s);break t}di(e,i,u,s)}i=i.child}return i;case 26:return Df(e,i),e===null?(s=ZS(i.type,null,i.pendingProps,null))?i.memoizedState=s:He||(s=i.type,e=i.pendingProps,u=Yf($.current).createElement(s),u[Me]=i,u[Ee]=e,pi(u,s,e),D(u),i.stateNode=u):i.memoizedState=ZS(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Dt(i),e===null&&He&&(u=i.stateNode=WS(i.type,i.pendingProps,$.current),fi=i,wa=!0,h=yn,Ss(i.type)?(ym=h,yn=Ua(u.firstChild)):yn=h),di(e,i,i.pendingProps.children,s),Df(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&He&&((h=u=yn)&&(u=kb(u,i.type,i.pendingProps,wa),u!==null?(i.stateNode=u,fi=i,yn=Ua(u.firstChild),wa=!1,h=!0):h=!1),h||ss(i)),Dt(i),h=i.type,m=i.pendingProps,T=e!==null?e.memoizedProps:null,u=m.children,_m(h,m)?u=null:T!==null&&_m(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=mp(e,i,ab,null,null,s),Zu._currentValue=h),Df(e,i),di(e,i,u,s),i.child;case 6:return e===null&&He&&((e=s=yn)&&(s=Xb(s,i.pendingProps,wa),s!==null?(i.stateNode=s,fi=i,yn=null,e=!0):e=!1),e||ss(i)),null;case 13:return Ox(e,i,s);case 4:return At(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=so(i,null,u,s):di(e,i,u,s),i.child;case 11:return bx(e,i,i.type,i.pendingProps,s);case 7:return di(e,i,i.pendingProps,s),i.child;case 8:return di(e,i,i.pendingProps.children,s),i.child;case 12:return di(e,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,os(i,i.type,u.value),di(e,i,u.children,s),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,no(i),h=hi(h),u=u(h),i.flags|=1,di(e,i,u,s),i.child;case 14:return Ax(e,i,i.type,i.pendingProps,s);case 15:return Rx(e,i,i.type,i.pendingProps,s);case 19:return zx(e,i,s);case 31:return hb(e,i,s);case 22:return Cx(e,i,s,i.pendingProps);case 24:return no(i),u=hi(In),e===null?(h=rp(),h===null&&(h=hn,m=ip(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:u,cache:h},op(i),os(i,In,h)):((e.lanes&s)!==0&&(lp(e,i),Cu(i,null,null,s),Ru()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),os(i,In,u)):(u=m.cache,os(i,In,u),u!==h.cache&&np(i,[In],s,!0))),di(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Cr(e){e.flags|=4}function kp(e,i,s,u,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(cS())e.flags|=8192;else throw ro=mf,sp}else e.flags&=-16777217}function Bx(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$S(i))if(cS())e.flags|=8192;else throw ro=mf,sp}function Lf(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ie():536870912,e.lanes|=i,hl|=i)}function Ou(e,i){if(!He)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Mn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,u=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=s,i}function pb(e,i,s){var u=i.pendingProps;switch(Qd(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Mn(i),null;case 3:return s=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Tr(In),Ot(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&($o(i)?Cr(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$d())),Mn(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Cr(i),m!==null?(Mn(i),Bx(i,m)):(Mn(i),kp(i,h,null,u,s))):m?m!==e.memoizedState?(Cr(i),Mn(i),Bx(i,m)):(Mn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&Cr(i),Mn(i),kp(i,h,e,u,s)),null;case 27:if(le(i),s=$.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Cr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Mn(i),null}e=Mt.current,$o(i)?gv(i):(e=WS(h,u,s),i.stateNode=e,Cr(i))}return Mn(i),null;case 5:if(le(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Cr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Mn(i),null}if(m=Mt.current,$o(i))gv(i);else{var T=Yf($.current);switch(m){case 1:m=T.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=T.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=T.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=T.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=T.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?T.createElement("select",{is:u.is}):T.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?T.createElement(h,{is:u.is}):T.createElement(h)}}m[Me]=i,m[Ee]=u;t:for(T=i.child;T!==null;){if(T.tag===5||T.tag===6)m.appendChild(T.stateNode);else if(T.tag!==4&&T.tag!==27&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===i)break t;for(;T.sibling===null;){if(T.return===null||T.return===i)break t;T=T.return}T.sibling.return=T.return,T=T.sibling}i.stateNode=m;t:switch(pi(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&Cr(i)}}return Mn(i),kp(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Cr(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=$.current,$o(i)){if(e=i.stateNode,s=i.memoizedProps,u=null,h=fi,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[Me]=i,e=!!(e.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||OS(e.nodeValue,s)),e||ss(i,!0)}else e=Yf(e).createTextNode(u),e[Me]=i,i.stateNode=e}return Mn(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(u=$o(i),s!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Me]=i}else to(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),e=!1}else s=$d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(aa(i),i):(aa(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Mn(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=$o(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Me]=i}else to(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),h=!1}else h=$d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(aa(i),i):(aa(i),null)}return aa(i),(i.flags&128)!==0?(i.lanes=s,i):(s=u!==null,e=e!==null&&e.memoizedState!==null,s&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Lf(i,i.updateQueue),Mn(i),null);case 4:return Ot(),e===null&&fm(i.stateNode.containerInfo),Mn(i),null;case 10:return Tr(i.type),Mn(i),null;case 19:if(nt(Pn),u=i.memoizedState,u===null)return Mn(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)Ou(u,!1);else{if(Ln!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=xf(e),m!==null){for(i.flags|=128,Ou(u,!1),e=m.updateQueue,i.updateQueue=e,Lf(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)hv(s,e),s=s.sibling;return mt(Pn,Pn.current&1|2),He&&Mr(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&A()>Ff&&(i.flags|=128,h=!0,Ou(u,!1),i.lanes=4194304)}else{if(!h)if(e=xf(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Lf(i,e),Ou(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!He)return Mn(i),null}else 2*A()-u.renderingStartTime>Ff&&s!==536870912&&(i.flags|=128,h=!0,Ou(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=A(),e.sibling=null,s=Pn.current,mt(Pn,h?s&1|2:s&1),He&&Mr(i,u.treeForkCount),e):(Mn(i),null);case 22:case 23:return aa(i),hp(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),s=i.updateQueue,s!==null&&Lf(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),e!==null&&nt(io),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Tr(In),Mn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function mb(e,i){switch(Qd(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Tr(In),Ot(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return le(i),null;case 31:if(i.memoizedState!==null){if(aa(i),i.alternate===null)throw Error(a(340));to()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(aa(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));to()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(Pn),null;case 4:return Ot(),null;case 10:return Tr(i.type),null;case 22:case 23:return aa(i),hp(),e!==null&&nt(io),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Tr(In),null;case 25:return null;default:return null}}function Ix(e,i){switch(Qd(i),i.tag){case 3:Tr(In),Ot();break;case 26:case 27:case 5:le(i);break;case 4:Ot();break;case 31:i.memoizedState!==null&&aa(i);break;case 13:aa(i);break;case 19:nt(Pn);break;case 10:Tr(i.type);break;case 22:case 23:aa(i),hp(),e!==null&&nt(io);break;case 24:Tr(In)}}function Pu(e,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&e)===e){u=void 0;var m=s.create,T=s.inst;u=m(),T.destroy=u}s=s.next}while(s!==h)}}catch(N){on(i,i.return,N)}}function ds(e,i,s){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var T=u.inst,N=T.destroy;if(N!==void 0){T.destroy=void 0,h=i;var W=s,rt=N;try{rt()}catch(vt){on(h,W,vt)}}}u=u.next}while(u!==m)}}catch(vt){on(i,i.return,vt)}}function Hx(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Dv(i,s)}catch(u){on(e,e.return,u)}}}function Gx(e,i,s){s.props=lo(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(u){on(e,i,u)}}function zu(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(h){on(e,i,h)}}function er(e,i){var s=e.ref,u=e.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){on(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){on(e,i,h)}else s.current=null}function Vx(e){var i=e.type,s=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){on(e,e.return,h)}}function Xp(e,i,s){try{var u=e.stateNode;Fb(u,e.type,s,i),u[Ee]=i}catch(h){on(e,e.return,h)}}function kx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ss(e.type)||e.tag===4}function Wp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||kx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qp(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=xr));else if(u!==4&&(u===27&&Ss(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(qp(e,i,s),e=e.sibling;e!==null;)qp(e,i,s),e=e.sibling}function Nf(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(u!==4&&(u===27&&Ss(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Nf(e,i,s),e=e.sibling;e!==null;)Nf(e,i,s),e=e.sibling}function Xx(e){var i=e.stateNode,s=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);pi(i,u,s),i[Me]=e,i[Ee]=s}catch(m){on(e,e.return,m)}}var wr=!1,Vn=!1,Yp=!1,Wx=typeof WeakSet=="function"?WeakSet:Set,ei=null;function _b(e,i){if(e=e.containerInfo,pm=th,e=iv(e),Hd(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var T=0,N=-1,W=-1,rt=0,vt=0,yt=e,ut=null;e:for(;;){for(var dt;yt!==s||h!==0&&yt.nodeType!==3||(N=T+h),yt!==m||u!==0&&yt.nodeType!==3||(W=T+u),yt.nodeType===3&&(T+=yt.nodeValue.length),(dt=yt.firstChild)!==null;)ut=yt,yt=dt;for(;;){if(yt===e)break e;if(ut===s&&++rt===h&&(N=T),ut===m&&++vt===u&&(W=T),(dt=yt.nextSibling)!==null)break;yt=ut,ut=yt.parentNode}yt=dt}s=N===-1||W===-1?null:{start:N,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(mm={focusedElem:e,selectionRange:s},th=!1,ei=i;ei!==null;)if(i=ei,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,ei=e;else for(;ei!==null;){switch(i=ei,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var Qt=lo(s.type,h);e=u.getSnapshotBeforeUpdate(Qt,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(he){on(s,s.return,he)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)vm(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,ei=e;break}ei=i.return}}function qx(e,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:Ur(e,s),u&4&&Pu(5,s);break;case 1:if(Ur(e,s),u&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(T){on(s,s.return,T)}else{var h=lo(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){on(s,s.return,T)}}u&64&&Hx(s),u&512&&zu(s,s.return);break;case 3:if(Ur(e,s),u&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Dv(e,i)}catch(T){on(s,s.return,T)}}break;case 27:i===null&&u&4&&Xx(s);case 26:case 5:Ur(e,s),i===null&&u&4&&Vx(s),u&512&&zu(s,s.return);break;case 12:Ur(e,s);break;case 31:Ur(e,s),u&4&&jx(e,s);break;case 13:Ur(e,s),u&4&&Kx(e,s),u&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=bb.bind(null,s),Wb(e,s))));break;case 22:if(u=s.memoizedState!==null||wr,!u){i=i!==null&&i.memoizedState!==null||Vn,h=wr;var m=Vn;wr=u,(Vn=i)&&!m?Lr(e,s,(s.subtreeFlags&8772)!==0):Ur(e,s),wr=h,Vn=m}break;case 30:break;default:Ur(e,s)}}function Yx(e){var i=e.alternate;i!==null&&(e.alternate=null,Yx(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&An(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Tn=null,Vi=!1;function Dr(e,i,s){for(s=s.child;s!==null;)Zx(e,i,s),s=s.sibling}function Zx(e,i,s){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Tt,s)}catch{}switch(s.tag){case 26:Vn||er(s,i),Dr(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Vn||er(s,i);var u=Tn,h=Vi;Ss(s.type)&&(Tn=s.stateNode,Vi=!1),Dr(e,i,s),Wu(s.stateNode),Tn=u,Vi=h;break;case 5:Vn||er(s,i);case 6:if(u=Tn,h=Vi,Tn=null,Dr(e,i,s),Tn=u,Vi=h,Tn!==null)if(Vi)try{(Tn.nodeType===9?Tn.body:Tn.nodeName==="HTML"?Tn.ownerDocument.body:Tn).removeChild(s.stateNode)}catch(m){on(s,i,m)}else try{Tn.removeChild(s.stateNode)}catch(m){on(s,i,m)}break;case 18:Tn!==null&&(Vi?(e=Tn,HS(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Sl(e)):HS(Tn,s.stateNode));break;case 4:u=Tn,h=Vi,Tn=s.stateNode.containerInfo,Vi=!0,Dr(e,i,s),Tn=u,Vi=h;break;case 0:case 11:case 14:case 15:ds(2,s,i),Vn||ds(4,s,i),Dr(e,i,s);break;case 1:Vn||(er(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&Gx(s,i,u)),Dr(e,i,s);break;case 21:Dr(e,i,s);break;case 22:Vn=(u=Vn)||s.memoizedState!==null,Dr(e,i,s),Vn=u;break;default:Dr(e,i,s)}}function jx(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sl(e)}catch(s){on(i,i.return,s)}}}function Kx(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sl(e)}catch(s){on(i,i.return,s)}}function gb(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Wx),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Wx),i;default:throw Error(a(435,e.tag))}}function Of(e,i){var s=gb(e);i.forEach(function(u){if(!s.has(u)){s.add(u);var h=Ab.bind(null,e,u);u.then(h,h)}})}function ki(e,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=e,T=i,N=T;t:for(;N!==null;){switch(N.tag){case 27:if(Ss(N.type)){Tn=N.stateNode,Vi=!1;break t}break;case 5:Tn=N.stateNode,Vi=!1;break t;case 3:case 4:Tn=N.stateNode.containerInfo,Vi=!0;break t}N=N.return}if(Tn===null)throw Error(a(160));Zx(m,T,h),Tn=null,Vi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Qx(i,e),i=i.sibling}var ka=null;function Qx(e,i){var s=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ki(i,e),Xi(e),u&4&&(ds(3,e,e.return),Pu(3,e),ds(5,e,e.return));break;case 1:ki(i,e),Xi(e),u&512&&(Vn||s===null||er(s,s.return)),u&64&&wr&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=ka;if(ki(i,e),Xi(e),u&512&&(Vn||s===null||er(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=e.memoizedState,s===null)if(u===null)if(e.stateNode===null){t:{u=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[vn]||m[Me]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),pi(m,u,s),m[Me]=e,D(m),u=m;break t;case"link":var T=QS("link","href",h).get(u+(s.href||""));if(T){for(var N=0;N<T.length;N++)if(m=T[N],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(N,1);break e}}m=h.createElement(u),pi(m,u,s),h.head.appendChild(m);break;case"meta":if(T=QS("meta","content",h).get(u+(s.content||""))){for(N=0;N<T.length;N++)if(m=T[N],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(N,1);break e}}m=h.createElement(u),pi(m,u,s),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[Me]=e,D(m),u=m}e.stateNode=u}else JS(h,e.type,e.stateNode);else e.stateNode=KS(h,u,e.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?JS(h,e.type,e.stateNode):KS(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Xp(e,e.memoizedProps,s.memoizedProps)}break;case 27:ki(i,e),Xi(e),u&512&&(Vn||s===null||er(s,s.return)),s!==null&&u&4&&Xp(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ki(i,e),Xi(e),u&512&&(Vn||s===null||er(s,s.return)),e.flags&32){h=e.stateNode;try{qn(h,"")}catch(Qt){on(e,e.return,Qt)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,Xp(e,h,s!==null?s.memoizedProps:h)),u&1024&&(Yp=!0);break;case 6:if(ki(i,e),Xi(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,s=e.stateNode;try{s.nodeValue=u}catch(Qt){on(e,e.return,Qt)}}break;case 3:if(Kf=null,h=ka,ka=Zf(i.containerInfo),ki(i,e),ka=h,Xi(e),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Sl(i.containerInfo)}catch(Qt){on(e,e.return,Qt)}Yp&&(Yp=!1,Jx(e));break;case 4:u=ka,ka=Zf(e.stateNode.containerInfo),ki(i,e),Xi(e),ka=u;break;case 12:ki(i,e),Xi(e);break;case 31:ki(i,e),Xi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Of(e,u)));break;case 13:ki(i,e),Xi(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(zf=A()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Of(e,u)));break;case 22:h=e.memoizedState!==null;var W=s!==null&&s.memoizedState!==null,rt=wr,vt=Vn;if(wr=rt||h,Vn=vt||W,ki(i,e),Vn=vt,wr=rt,Xi(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||W||wr||Vn||uo(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){W=s=i;try{if(m=W.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{N=W.stateNode;var yt=W.memoizedProps.style,ut=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;N.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Qt){on(W,W.return,Qt)}}}else if(i.tag===6){if(s===null){W=i;try{W.stateNode.nodeValue=h?"":W.memoizedProps}catch(Qt){on(W,W.return,Qt)}}}else if(i.tag===18){if(s===null){W=i;try{var dt=W.stateNode;h?GS(dt,!0):GS(W.stateNode,!1)}catch(Qt){on(W,W.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Of(e,s))));break;case 19:ki(i,e),Xi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Of(e,u)));break;case 30:break;case 21:break;default:ki(i,e),Xi(e)}}function Xi(e){var i=e.flags;if(i&2){try{for(var s,u=e.return;u!==null;){if(kx(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Wp(e);Nf(e,m,h);break;case 5:var T=s.stateNode;s.flags&32&&(qn(T,""),s.flags&=-33);var N=Wp(e);Nf(e,N,T);break;case 3:case 4:var W=s.stateNode.containerInfo,rt=Wp(e);qp(e,rt,W);break;default:throw Error(a(161))}}catch(vt){on(e,e.return,vt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Jx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Jx(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ur(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)qx(e,i.alternate,i),i=i.sibling}function uo(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ds(4,i,i.return),uo(i);break;case 1:er(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Gx(i,i.return,s),uo(i);break;case 27:Wu(i.stateNode);case 26:case 5:er(i,i.return),uo(i);break;case 22:i.memoizedState===null&&uo(i);break;case 30:uo(i);break;default:uo(i)}e=e.sibling}}function Lr(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,T=m.flags;switch(m.tag){case 0:case 11:case 15:Lr(h,m,s),Pu(4,m);break;case 1:if(Lr(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(rt){on(u,u.return,rt)}if(u=m,h=u.updateQueue,h!==null){var N=u.stateNode;try{var W=h.shared.hiddenCallbacks;if(W!==null)for(h.shared.hiddenCallbacks=null,h=0;h<W.length;h++)wv(W[h],N)}catch(rt){on(u,u.return,rt)}}s&&T&64&&Hx(m),zu(m,m.return);break;case 27:Xx(m);case 26:case 5:Lr(h,m,s),s&&u===null&&T&4&&Vx(m),zu(m,m.return);break;case 12:Lr(h,m,s);break;case 31:Lr(h,m,s),s&&T&4&&jx(h,m);break;case 13:Lr(h,m,s),s&&T&4&&Kx(h,m);break;case 22:m.memoizedState===null&&Lr(h,m,s),zu(m,m.return);break;case 30:break;default:Lr(h,m,s)}i=i.sibling}}function Zp(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Mu(s))}function jp(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Mu(e))}function Xa(e,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)$x(e,i,s,u),i=i.sibling}function $x(e,i,s,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Xa(e,i,s,u),h&2048&&Pu(9,i);break;case 1:Xa(e,i,s,u);break;case 3:Xa(e,i,s,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Mu(e)));break;case 12:if(h&2048){Xa(e,i,s,u),e=i.stateNode;try{var m=i.memoizedProps,T=m.id,N=m.onPostCommit;typeof N=="function"&&N(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){on(i,i.return,W)}}else Xa(e,i,s,u);break;case 31:Xa(e,i,s,u);break;case 13:Xa(e,i,s,u);break;case 23:break;case 22:m=i.stateNode,T=i.alternate,i.memoizedState!==null?m._visibility&2?Xa(e,i,s,u):Fu(e,i):m._visibility&2?Xa(e,i,s,u):(m._visibility|=2,ul(e,i,s,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Zp(T,i);break;case 24:Xa(e,i,s,u),h&2048&&jp(i.alternate,i);break;default:Xa(e,i,s,u)}}function ul(e,i,s,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,T=i,N=s,W=u,rt=T.flags;switch(T.tag){case 0:case 11:case 15:ul(m,T,N,W,h),Pu(8,T);break;case 23:break;case 22:var vt=T.stateNode;T.memoizedState!==null?vt._visibility&2?ul(m,T,N,W,h):Fu(m,T):(vt._visibility|=2,ul(m,T,N,W,h)),h&&rt&2048&&Zp(T.alternate,T);break;case 24:ul(m,T,N,W,h),h&&rt&2048&&jp(T.alternate,T);break;default:ul(m,T,N,W,h)}i=i.sibling}}function Fu(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,u=i,h=u.flags;switch(u.tag){case 22:Fu(s,u),h&2048&&Zp(u.alternate,u);break;case 24:Fu(s,u),h&2048&&jp(u.alternate,u);break;default:Fu(s,u)}i=i.sibling}}var Bu=8192;function cl(e,i,s){if(e.subtreeFlags&Bu)for(e=e.child;e!==null;)tS(e,i,s),e=e.sibling}function tS(e,i,s){switch(e.tag){case 26:cl(e,i,s),e.flags&Bu&&e.memoizedState!==null&&iA(s,ka,e.memoizedState,e.memoizedProps);break;case 5:cl(e,i,s);break;case 3:case 4:var u=ka;ka=Zf(e.stateNode.containerInfo),cl(e,i,s),ka=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=Bu,Bu=16777216,cl(e,i,s),Bu=u):cl(e,i,s));break;default:cl(e,i,s)}}function eS(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Iu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];ei=u,iS(u,e)}eS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nS(e),e=e.sibling}function nS(e){switch(e.tag){case 0:case 11:case 15:Iu(e),e.flags&2048&&ds(9,e,e.return);break;case 3:Iu(e);break;case 12:Iu(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Pf(e)):Iu(e);break;default:Iu(e)}}function Pf(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];ei=u,iS(u,e)}eS(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ds(8,i,i.return),Pf(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Pf(i));break;default:Pf(i)}e=e.sibling}}function iS(e,i){for(;ei!==null;){var s=ei;switch(s.tag){case 0:case 11:case 15:ds(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Mu(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,ei=u;else t:for(s=e;ei!==null;){u=ei;var h=u.sibling,m=u.return;if(Yx(u),u===s){ei=null;break t}if(h!==null){h.return=m,ei=h;break t}ei=m}}}var vb={getCacheForType:function(e){var i=hi(In),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return hi(In).controller.signal}},xb=typeof WeakMap=="function"?WeakMap:Map,Je=0,hn=null,Pe=null,Fe=0,sn=0,ra=null,ps=!1,fl=!1,Kp=!1,Nr=0,Ln=0,ms=0,co=0,Qp=0,sa=0,hl=0,Hu=null,Wi=null,Jp=!1,zf=0,aS=0,Ff=1/0,Bf=null,_s=null,Yn=0,gs=null,dl=null,Or=0,$p=0,tm=null,rS=null,Gu=0,em=null;function oa(){return(Je&2)!==0&&Fe!==0?Fe&-Fe:F.T!==null?om():be()}function sS(){if(sa===0)if((Fe&536870912)===0||He){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),sa=e}else sa=536870912;return e=ia.current,e!==null&&(e.flags|=32),sa}function qi(e,i,s){(e===hn&&(sn===2||sn===9)||e.cancelPendingCommit!==null)&&(pl(e,0),vs(e,Fe,sa,!1)),Kt(e,s),((Je&2)===0||e!==hn)&&(e===hn&&((Je&2)===0&&(co|=s),Ln===4&&vs(e,Fe,sa,!1)),nr(e))}function oS(e,i,s){if((Je&6)!==0)throw Error(a(327));var u=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Ct(e,i),h=u?Mb(e,i):im(e,i,!0),m=u;do{if(h===0){fl&&!u&&vs(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!Sb(s)){h=im(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var N=e;h=Hu;var W=N.current.memoizedState.isDehydrated;if(W&&(pl(N,T).flags|=256),T=im(N,T,!1),T!==2){if(Kp&&!W){N.errorRecoveryDisabledLanes|=m,co|=m,h=4;break t}m=Wi,Wi=h,m!==null&&(Wi===null?Wi=m:Wi.push.apply(Wi,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){pl(e,0),vs(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:vs(u,i,sa,!ps);break t;case 2:Wi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=zf+300-A(),10<h)){if(vs(u,i,sa,!ps),xt(u,0,!0)!==0)break t;Or=i,u.timeoutHandle=BS(lS.bind(null,u,s,Wi,Bf,Jp,i,sa,co,hl,ps,m,"Throttled",-0,0),h);break t}lS(u,s,Wi,Bf,Jp,i,sa,co,hl,ps,m,null,-0,0)}}break}while(!0);nr(e)}function lS(e,i,s,u,h,m,T,N,W,rt,vt,yt,ut,dt){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xr},tS(i,m,yt);var Qt=(m&62914560)===m?zf-A():(m&4194048)===m?aS-A():0;if(Qt=aA(yt,Qt),Qt!==null){Or=m,e.cancelPendingCommit=Qt(_S.bind(null,e,i,m,s,u,h,T,N,W,vt,yt,null,ut,dt)),vs(e,m,T,!rt);return}}_S(e,i,m,s,u,h,T,N,W)}function Sb(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!ea(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vs(e,i,s,u){i&=~Qp,i&=~co,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-Bt(h),T=1<<m;u[m]=-1,h&=~T}s!==0&&Ht(e,s,i)}function If(){return(Je&6)===0?(Vu(0),!1):!0}function nm(){if(Pe!==null){if(sn===0)var e=Pe.return;else e=Pe,Er=eo=null,vp(e),al=null,Tu=0,e=Pe;for(;e!==null;)Ix(e.alternate,e),e=e.return;Pe=null}}function pl(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Hb(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Or=0,nm(),hn=e,Pe=s=yr(e.current,null),Fe=i,sn=0,ra=null,ps=!1,fl=Ct(e,i),Kp=!1,hl=sa=Qp=co=ms=Ln=0,Wi=Hu=null,Jp=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Bt(u),m=1<<h;i|=e[h],u&=~m}return Nr=i,sf(),s}function uS(e,i){Te=null,F.H=Lu,i===il||i===pf?(i=bv(),sn=3):i===sp?(i=bv(),sn=4):sn=i===Op?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ra=i,Pe===null&&(Ln=1,Cf(e,Aa(i,e.current)))}function cS(){var e=ia.current;return e===null?!0:(Fe&4194048)===Fe?Da===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===Da:!1}function fS(){var e=F.H;return F.H=Lu,e===null?Lu:e}function hS(){var e=F.A;return F.A=vb,e}function Hf(){Ln=4,ps||(Fe&4194048)!==Fe&&ia.current!==null||(fl=!0),(ms&134217727)===0&&(co&134217727)===0||hn===null||vs(hn,Fe,sa,!1)}function im(e,i,s){var u=Je;Je|=2;var h=fS(),m=hS();(hn!==e||Fe!==i)&&(Bf=null,pl(e,i)),i=!1;var T=Ln;t:do try{if(sn!==0&&Pe!==null){var N=Pe,W=ra;switch(sn){case 8:nm(),T=6;break t;case 3:case 2:case 9:case 6:ia.current===null&&(i=!0);var rt=sn;if(sn=0,ra=null,ml(e,N,W,rt),s&&fl){T=0;break t}break;default:rt=sn,sn=0,ra=null,ml(e,N,W,rt)}}yb(),T=Ln;break}catch(vt){uS(e,vt)}while(!0);return i&&e.shellSuspendCounter++,Er=eo=null,Je=u,F.H=h,F.A=m,Pe===null&&(hn=null,Fe=0,sf()),T}function yb(){for(;Pe!==null;)dS(Pe)}function Mb(e,i){var s=Je;Je|=2;var u=fS(),h=hS();hn!==e||Fe!==i?(Bf=null,Ff=A()+500,pl(e,i)):fl=Ct(e,i);t:do try{if(sn!==0&&Pe!==null){i=Pe;var m=ra;e:switch(sn){case 1:sn=0,ra=null,ml(e,i,m,1);break;case 2:case 9:if(Ev(m)){sn=0,ra=null,pS(i);break}i=function(){sn!==2&&sn!==9||hn!==e||(sn=7),nr(e)},m.then(i,i);break t;case 3:sn=7;break t;case 4:sn=5;break t;case 7:Ev(m)?(sn=0,ra=null,pS(i)):(sn=0,ra=null,ml(e,i,m,7));break;case 5:var T=null;switch(Pe.tag){case 26:T=Pe.memoizedState;case 5:case 27:var N=Pe;if(T?$S(T):N.stateNode.complete){sn=0,ra=null;var W=N.sibling;if(W!==null)Pe=W;else{var rt=N.return;rt!==null?(Pe=rt,Gf(rt)):Pe=null}break e}}sn=0,ra=null,ml(e,i,m,5);break;case 6:sn=0,ra=null,ml(e,i,m,6);break;case 8:nm(),Ln=6;break t;default:throw Error(a(462))}}Eb();break}catch(vt){uS(e,vt)}while(!0);return Er=eo=null,F.H=u,F.A=h,Je=s,Pe!==null?0:(hn=null,Fe=0,sf(),Ln)}function Eb(){for(;Pe!==null&&!qt();)dS(Pe)}function dS(e){var i=Fx(e.alternate,e,Nr);e.memoizedProps=e.pendingProps,i===null?Gf(e):Pe=i}function pS(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Ux(s,i,i.pendingProps,i.type,void 0,Fe);break;case 11:i=Ux(s,i,i.pendingProps,i.type.render,i.ref,Fe);break;case 5:vp(i);default:Ix(s,i),i=Pe=hv(i,Nr),i=Fx(s,i,Nr)}e.memoizedProps=e.pendingProps,i===null?Gf(e):Pe=i}function ml(e,i,s,u){Er=eo=null,vp(i),al=null,Tu=0;var h=i.return;try{if(fb(e,h,i,s,Fe)){Ln=1,Cf(e,Aa(s,e.current)),Pe=null;return}}catch(m){if(h!==null)throw Pe=h,m;Ln=1,Cf(e,Aa(s,e.current)),Pe=null;return}i.flags&32768?(He||u===1?e=!0:fl||(Fe&536870912)!==0?e=!1:(ps=e=!0,(u===2||u===9||u===3||u===6)&&(u=ia.current,u!==null&&u.tag===13&&(u.flags|=16384))),mS(i,e)):Gf(i)}function Gf(e){var i=e;do{if((i.flags&32768)!==0){mS(i,ps);return}e=i.return;var s=pb(i.alternate,i,Nr);if(s!==null){Pe=s;return}if(i=i.sibling,i!==null){Pe=i;return}Pe=i=e}while(i!==null);Ln===0&&(Ln=5)}function mS(e,i){do{var s=mb(e.alternate,e);if(s!==null){s.flags&=32767,Pe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=s}while(e!==null);Ln=6,Pe=null}function _S(e,i,s,u,h,m,T,N,W){e.cancelPendingCommit=null;do Vf();while(Yn!==0);if((Je&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Wd,ye(e,s,m,T,N,W),e===hn&&(Pe=hn=null,Fe=0),dl=i,gs=e,Or=s,$p=m,tm=h,rS=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rb(ht,function(){return yS(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,h=G.p,G.p=2,T=Je,Je|=4;try{_b(e,i,s)}finally{Je=T,G.p=h,F.T=u}}Yn=1,gS(),vS(),xS()}}function gS(){if(Yn===1){Yn=0;var e=gs,i=dl,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var u=G.p;G.p=2;var h=Je;Je|=4;try{Qx(i,e);var m=mm,T=iv(e.containerInfo),N=m.focusedElem,W=m.selectionRange;if(T!==N&&N&&N.ownerDocument&&nv(N.ownerDocument.documentElement,N)){if(W!==null&&Hd(N)){var rt=W.start,vt=W.end;if(vt===void 0&&(vt=rt),"selectionStart"in N)N.selectionStart=rt,N.selectionEnd=Math.min(vt,N.value.length);else{var yt=N.ownerDocument||document,ut=yt&&yt.defaultView||window;if(ut.getSelection){var dt=ut.getSelection(),Qt=N.textContent.length,he=Math.min(W.start,Qt),fn=W.end===void 0?he:Math.min(W.end,Qt);!dt.extend&&he>fn&&(T=fn,fn=he,he=T);var J=ev(N,he),Z=ev(N,fn);if(J&&Z&&(dt.rangeCount!==1||dt.anchorNode!==J.node||dt.anchorOffset!==J.offset||dt.focusNode!==Z.node||dt.focusOffset!==Z.offset)){var at=yt.createRange();at.setStart(J.node,J.offset),dt.removeAllRanges(),he>fn?(dt.addRange(at),dt.extend(Z.node,Z.offset)):(at.setEnd(Z.node,Z.offset),dt.addRange(at))}}}}for(yt=[],dt=N;dt=dt.parentNode;)dt.nodeType===1&&yt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<yt.length;N++){var St=yt[N];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}th=!!pm,mm=pm=null}finally{Je=h,G.p=u,F.T=s}}e.current=i,Yn=2}}function vS(){if(Yn===2){Yn=0;var e=gs,i=dl,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var u=G.p;G.p=2;var h=Je;Je|=4;try{qx(e,i.alternate,i)}finally{Je=h,G.p=u,F.T=s}}Yn=3}}function xS(){if(Yn===4||Yn===3){Yn=0,B();var e=gs,i=dl,s=Or,u=rS;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Yn=5:(Yn=0,dl=gs=null,SS(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(_s=null),gn(s),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=F.T,h=G.p,G.p=2,F.T=null;try{for(var m=e.onRecoverableError,T=0;T<u.length;T++){var N=u[T];m(N.value,{componentStack:N.stack})}}finally{F.T=i,G.p=h}}(Or&3)!==0&&Vf(),nr(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===em?Gu++:(Gu=0,em=e):Gu=0,Vu(0)}}function SS(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Mu(i)))}function Vf(){return gS(),vS(),xS(),yS()}function yS(){if(Yn!==5)return!1;var e=gs,i=$p;$p=0;var s=gn(Or),u=F.T,h=G.p;try{G.p=32>s?32:s,F.T=null,s=tm,tm=null;var m=gs,T=Or;if(Yn=0,dl=gs=null,Or=0,(Je&6)!==0)throw Error(a(331));var N=Je;if(Je|=4,nS(m.current),$x(m,m.current,T,s),Je=N,Vu(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Tt,m)}catch{}return!0}finally{G.p=h,F.T=u,SS(e,i)}}function MS(e,i,s){i=Aa(s,i),i=Np(e.stateNode,i,2),e=cs(e,i,2),e!==null&&(Kt(e,2),nr(e))}function on(e,i,s){if(e.tag===3)MS(e,e,s);else for(;i!==null;){if(i.tag===3){MS(i,e,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_s===null||!_s.has(u))){e=Aa(s,e),s=Ex(2),u=cs(i,s,2),u!==null&&(Tx(s,u,i,e),Kt(u,2),nr(u));break}}i=i.return}}function am(e,i,s){var u=e.pingCache;if(u===null){u=e.pingCache=new xb;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(s)||(Kp=!0,h.add(s),e=Tb.bind(null,e,i,s),i.then(e,e))}function Tb(e,i,s){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,hn===e&&(Fe&s)===s&&(Ln===4||Ln===3&&(Fe&62914560)===Fe&&300>A()-zf?(Je&2)===0&&pl(e,0):Qp|=s,hl===Fe&&(hl=0)),nr(e)}function ES(e,i){i===0&&(i=Ie()),e=Js(e,i),e!==null&&(Kt(e,i),nr(e))}function bb(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),ES(e,s)}function Ab(e,i){var s=0;switch(e.tag){case 31:case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),ES(e,s)}function Rb(e,i){return Se(e,i)}var kf=null,_l=null,rm=!1,Xf=!1,sm=!1,xs=0;function nr(e){e!==_l&&e.next===null&&(_l===null?kf=_l=e:_l=_l.next=e),Xf=!0,rm||(rm=!0,wb())}function Vu(e,i){if(!sm&&Xf){sm=!0;do for(var s=!1,u=kf;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var T=u.suspendedLanes,N=u.pingedLanes;m=(1<<31-Bt(42|e)+1)-1,m&=h&~(T&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,RS(u,m))}else m=Fe,m=xt(u,u===hn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ct(u,m)||(s=!0,RS(u,m));u=u.next}while(s);sm=!1}}function Cb(){TS()}function TS(){Xf=rm=!1;var e=0;xs!==0&&Ib()&&(e=xs);for(var i=A(),s=null,u=kf;u!==null;){var h=u.next,m=bS(u,i);m===0?(u.next=null,s===null?kf=h:s.next=h,h===null&&(_l=s)):(s=u,(e!==0||(m&3)!==0)&&(Xf=!0)),u=h}Yn!==0&&Yn!==5||Vu(e),xs!==0&&(xs=0)}function bS(e,i){for(var s=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-Bt(m),N=1<<T,W=h[T];W===-1?((N&s)===0||(N&u)!==0)&&(h[T]=se(N,i)):W<=i&&(e.expiredLanes|=N),m&=~N}if(i=hn,s=Fe,s=xt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,s===0||e===i&&(sn===2||sn===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&ue(u),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(u!==null&&ue(u),gn(s)){case 2:case 8:s=_t;break;case 32:s=ht;break;case 268435456:s=Ut;break;default:s=ht}return u=AS.bind(null,e),s=Se(s,u),e.callbackPriority=i,e.callbackNode=s,i}return u!==null&&u!==null&&ue(u),e.callbackPriority=2,e.callbackNode=null,2}function AS(e,i){if(Yn!==0&&Yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Vf()&&e.callbackNode!==s)return null;var u=Fe;return u=xt(e,e===hn?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(oS(e,u,i),bS(e,A()),e.callbackNode!=null&&e.callbackNode===s?AS.bind(null,e):null)}function RS(e,i){if(Vf())return null;oS(e,i,!0)}function wb(){Gb(function(){(Je&6)!==0?Se(pt,Cb):TS()})}function om(){if(xs===0){var e=el;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),xs=e}return xs}function CS(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qc(""+e)}function wS(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Db(e,i,s,u,h){if(i==="submit"&&s&&s.stateNode===h){var m=CS((h[Ee]||null).action),T=u.submitter;T&&(i=(i=T[Ee]||null)?CS(i.formAction):T.getAttribute("formAction"),i!==null&&(m=i,T=null));var N=new ef("action","action",null,u,h);e.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(xs!==0){var W=T?wS(h,T):new FormData(h);Rp(s,{pending:!0,data:W,method:h.method,action:m},null,W)}}else typeof m=="function"&&(N.preventDefault(),W=T?wS(h,T):new FormData(h),Rp(s,{pending:!0,data:W,method:h.method,action:m},m,W))},currentTarget:h}]})}}for(var lm=0;lm<Xd.length;lm++){var um=Xd[lm],Ub=um.toLowerCase(),Lb=um[0].toUpperCase()+um.slice(1);Va(Ub,"on"+Lb)}Va(sv,"onAnimationEnd"),Va(ov,"onAnimationIteration"),Va(lv,"onAnimationStart"),Va("dblclick","onDoubleClick"),Va("focusin","onFocus"),Va("focusout","onBlur"),Va(ZT,"onTransitionRun"),Va(jT,"onTransitionStart"),Va(KT,"onTransitionCancel"),Va(uv,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ku));function DS(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var u=e[s],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var N=u[T],W=N.instance,rt=N.currentTarget;if(N=N.listener,W!==m&&h.isPropagationStopped())break t;m=N,h.currentTarget=rt;try{m(h)}catch(vt){rf(vt)}h.currentTarget=null,m=W}else for(T=0;T<u.length;T++){if(N=u[T],W=N.instance,rt=N.currentTarget,N=N.listener,W!==m&&h.isPropagationStopped())break t;m=N,h.currentTarget=rt;try{m(h)}catch(vt){rf(vt)}h.currentTarget=null,m=W}}}}function ze(e,i){var s=i[$n];s===void 0&&(s=i[$n]=new Set);var u=e+"__bubble";s.has(u)||(US(i,e,2,!1),s.add(u))}function cm(e,i,s){var u=0;i&&(u|=4),US(s,e,u,i)}var Wf="_reactListening"+Math.random().toString(36).slice(2);function fm(e){if(!e[Wf]){e[Wf]=!0,K.forEach(function(s){s!=="selectionchange"&&(Nb.has(s)||cm(s,!1,e),cm(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Wf]||(i[Wf]=!0,cm("selectionchange",!1,i))}}function US(e,i,s,u){switch(sy(i)){case 2:var h=oA;break;case 8:h=lA;break;default:h=Am}s=h.bind(null,i,s,e),h=void 0,!Ud||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function hm(e,i,s,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var N=u.stateNode.containerInfo;if(N===h)break;if(T===4)for(T=u.return;T!==null;){var W=T.tag;if((W===3||W===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;N!==null;){if(T=xn(N),T===null)return;if(W=T.tag,W===5||W===6||W===26||W===27){u=m=T;continue t}N=N.parentNode}}u=u.return}zg(function(){var rt=m,vt=wd(s),yt=[];t:{var ut=cv.get(e);if(ut!==void 0){var dt=ef,Qt=e;switch(e){case"keypress":if($c(s)===0)break t;case"keydown":case"keyup":dt=AT;break;case"focusin":Qt="focus",dt=Pd;break;case"focusout":Qt="blur",dt=Pd;break;case"beforeblur":case"afterblur":dt=Pd;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=pT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=wT;break;case sv:case ov:case lv:dt=gT;break;case uv:dt=UT;break;case"scroll":case"scrollend":dt=hT;break;case"wheel":dt=NT;break;case"copy":case"cut":case"paste":dt=xT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Gg;break;case"toggle":case"beforetoggle":dt=PT}var he=(i&4)!==0,fn=!he&&(e==="scroll"||e==="scrollend"),J=he?ut!==null?ut+"Capture":null:ut;he=[];for(var Z=rt,at;Z!==null;){var St=Z;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||J===null||(St=fu(Z,J),St!=null&&he.push(Xu(Z,St,at))),fn)break;Z=Z.return}0<he.length&&(ut=new dt(ut,Qt,null,s,vt),yt.push({event:ut,listeners:he}))}}if((i&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ut&&s!==Cd&&(Qt=s.relatedTarget||s.fromElement)&&(xn(Qt)||Qt[we]))break t;if((dt||ut)&&(ut=vt.window===vt?vt:(ut=vt.ownerDocument)?ut.defaultView||ut.parentWindow:window,dt?(Qt=s.relatedTarget||s.toElement,dt=rt,Qt=Qt?xn(Qt):null,Qt!==null&&(fn=l(Qt),he=Qt.tag,Qt!==fn||he!==5&&he!==27&&he!==6)&&(Qt=null)):(dt=null,Qt=rt),dt!==Qt)){if(he=Ig,St="onMouseLeave",J="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(he=Gg,St="onPointerLeave",J="onPointerEnter",Z="pointer"),fn=dt==null?ut:Ea(dt),at=Qt==null?ut:Ea(Qt),ut=new he(St,Z+"leave",dt,s,vt),ut.target=fn,ut.relatedTarget=at,St=null,xn(vt)===rt&&(he=new he(J,Z+"enter",Qt,s,vt),he.target=at,he.relatedTarget=fn,St=he),fn=St,dt&&Qt)e:{for(he=Ob,J=dt,Z=Qt,at=0,St=J;St;St=he(St))at++;St=0;for(var oe=Z;oe;oe=he(oe))St++;for(;0<at-St;)J=he(J),at--;for(;0<St-at;)Z=he(Z),St--;for(;at--;){if(J===Z||Z!==null&&J===Z.alternate){he=J;break e}J=he(J),Z=he(Z)}he=null}else he=null;dt!==null&&LS(yt,ut,dt,he,!1),Qt!==null&&fn!==null&&LS(yt,fn,Qt,he,!0)}}t:{if(ut=rt?Ea(rt):window,dt=ut.nodeName&&ut.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ut.type==="file")var qe=jg;else if(Yg(ut))if(Kg)qe=WT;else{qe=kT;var ee=VT}else dt=ut.nodeName,!dt||dt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?rt&&Ga(rt.elementType)&&(qe=jg):qe=XT;if(qe&&(qe=qe(e,rt))){Zg(yt,qe,s,vt);break t}ee&&ee(e,ut,rt),e==="focusout"&&rt&&ut.type==="number"&&rt.memoizedProps.value!=null&&oi(ut,"number",ut.value)}switch(ee=rt?Ea(rt):window,e){case"focusin":(Yg(ee)||ee.contentEditable==="true")&&(Yo=ee,Gd=rt,xu=null);break;case"focusout":xu=Gd=Yo=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,av(yt,s,vt);break;case"selectionchange":if(YT)break;case"keydown":case"keyup":av(yt,s,vt)}var Ae;if(Fd)t:{switch(e){case"compositionstart":var Be="onCompositionStart";break t;case"compositionend":Be="onCompositionEnd";break t;case"compositionupdate":Be="onCompositionUpdate";break t}Be=void 0}else qo?Wg(e,s)&&(Be="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Be="onCompositionStart");Be&&(Vg&&s.locale!=="ko"&&(qo||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&qo&&(Ae=Fg()):(is=vt,Ld="value"in is?is.value:is.textContent,qo=!0)),ee=qf(rt,Be),0<ee.length&&(Be=new Hg(Be,e,null,s,vt),yt.push({event:Be,listeners:ee}),Ae?Be.data=Ae:(Ae=qg(s),Ae!==null&&(Be.data=Ae)))),(Ae=FT?BT(e,s):IT(e,s))&&(Be=qf(rt,"onBeforeInput"),0<Be.length&&(ee=new Hg("onBeforeInput","beforeinput",null,s,vt),yt.push({event:ee,listeners:Be}),ee.data=Ae)),Db(yt,e,rt,s,vt)}DS(yt,i)})}function Xu(e,i,s){return{instance:e,listener:i,currentTarget:s}}function qf(e,i){for(var s=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=fu(e,s),h!=null&&u.unshift(Xu(e,h,m)),h=fu(e,i),h!=null&&u.push(Xu(e,h,m))),e.tag===3)return u;e=e.return}return[]}function Ob(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function LS(e,i,s,u,h){for(var m=i._reactName,T=[];s!==null&&s!==u;){var N=s,W=N.alternate,rt=N.stateNode;if(N=N.tag,W!==null&&W===u)break;N!==5&&N!==26&&N!==27||rt===null||(W=rt,h?(rt=fu(s,m),rt!=null&&T.unshift(Xu(s,rt,W))):h||(rt=fu(s,m),rt!=null&&T.push(Xu(s,rt,W)))),s=s.return}T.length!==0&&e.push({event:i,listeners:T})}var Pb=/\r\n?/g,zb=/\u0000|\uFFFD/g;function NS(e){return(typeof e=="string"?e:""+e).replace(Pb,`
`).replace(zb,"")}function OS(e,i){return i=NS(i),NS(e)===i}function cn(e,i,s,u,h,m){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||qn(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&qn(e,""+u);break;case"className":ce(e,"class",u);break;case"tabIndex":ce(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ce(e,s,u);break;case"style":ko(e,u,m);break;case"data":if(i!=="object"){ce(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Qc(""+u),e.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&cn(e,i,"name",h.name,h,null),cn(e,i,"formEncType",h.formEncType,h,null),cn(e,i,"formMethod",h.formMethod,h,null),cn(e,i,"formTarget",h.formTarget,h,null)):(cn(e,i,"encType",h.encType,h,null),cn(e,i,"method",h.method,h,null),cn(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Qc(""+u),e.setAttribute(s,u);break;case"onClick":u!=null&&(e.onclick=xr);break;case"onScroll":u!=null&&ze("scroll",e);break;case"onScrollEnd":u!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}s=Qc(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""+u):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":u===!0?e.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,u):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(s,u):e.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(s):e.setAttribute(s,u);break;case"popover":ze("beforetoggle",e),ze("toggle",e),$t(e,"popover",u);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":$t(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=cT.get(s)||s,$t(e,s,u))}}function dm(e,i,s,u,h,m){switch(s){case"style":ko(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof u=="string"?qn(e,u):(typeof u=="number"||typeof u=="bigint")&&qn(e,""+u);break;case"onScroll":u!=null&&ze("scroll",e);break;case"onScrollEnd":u!=null&&ze("scrollend",e);break;case"onClick":u!=null&&(e.onclick=xr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[Ee]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,u,h);break t}s in e?e[s]=u:u===!0?e.setAttribute(s,""):$t(e,s,u)}}}function pi(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var T=s[m];if(T!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:cn(e,i,m,T,s,null)}}h&&cn(e,i,"srcSet",s.srcSet,s,null),u&&cn(e,i,"src",s.src,s,null);return;case"input":ze("invalid",e);var N=m=T=h=null,W=null,rt=null;for(u in s)if(s.hasOwnProperty(u)){var vt=s[u];if(vt!=null)switch(u){case"name":h=vt;break;case"type":T=vt;break;case"checked":W=vt;break;case"defaultChecked":rt=vt;break;case"value":m=vt;break;case"defaultValue":N=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,i));break;default:cn(e,i,u,vt,s,null)}}vr(e,m,N,W,rt,T,h,!1);return;case"select":ze("invalid",e),u=T=m=null;for(h in s)if(s.hasOwnProperty(h)&&(N=s[h],N!=null))switch(h){case"value":m=N;break;case"defaultValue":T=N;break;case"multiple":u=N;default:cn(e,i,h,N,s,null)}i=m,s=T,e.multiple=!!u,i!=null?Ta(e,!!u,i,!1):s!=null&&Ta(e,!!u,s,!0);return;case"textarea":ze("invalid",e),m=h=u=null;for(T in s)if(s.hasOwnProperty(T)&&(N=s[T],N!=null))switch(T){case"value":u=N;break;case"defaultValue":h=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:cn(e,i,T,N,s,null)}li(e,u,h,m);return;case"option":for(W in s)s.hasOwnProperty(W)&&(u=s[W],u!=null)&&(W==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":cn(e,i,W,u,s,null));return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(u=0;u<ku.length;u++)ze(ku[u],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in s)if(s.hasOwnProperty(rt)&&(u=s[rt],u!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:cn(e,i,rt,u,s,null)}return;default:if(Ga(i)){for(vt in s)s.hasOwnProperty(vt)&&(u=s[vt],u!==void 0&&dm(e,i,vt,u,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(u=s[N],u!=null&&cn(e,i,N,u,s,null))}function Fb(e,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,N=null,W=null,rt=null,vt=null;for(dt in s){var yt=s[dt];if(s.hasOwnProperty(dt)&&yt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":W=yt;default:u.hasOwnProperty(dt)||cn(e,i,dt,null,u,yt)}}for(var ut in u){var dt=u[ut];if(yt=s[ut],u.hasOwnProperty(ut)&&(dt!=null||yt!=null))switch(ut){case"type":m=dt;break;case"name":h=dt;break;case"checked":rt=dt;break;case"defaultChecked":vt=dt;break;case"value":T=dt;break;case"defaultValue":N=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==yt&&cn(e,i,ut,dt,u,yt)}}si(e,T,N,W,rt,vt,m,h);return;case"select":dt=T=N=ut=null;for(m in s)if(W=s[m],s.hasOwnProperty(m)&&W!=null)switch(m){case"value":break;case"multiple":dt=W;default:u.hasOwnProperty(m)||cn(e,i,m,null,u,W)}for(h in u)if(m=u[h],W=s[h],u.hasOwnProperty(h)&&(m!=null||W!=null))switch(h){case"value":ut=m;break;case"defaultValue":N=m;break;case"multiple":T=m;default:m!==W&&cn(e,i,h,m,u,W)}i=N,s=T,u=dt,ut!=null?Ta(e,!!s,ut,!1):!!u!=!!s&&(i!=null?Ta(e,!!s,i,!0):Ta(e,!!s,s?[]:"",!1));return;case"textarea":dt=ut=null;for(N in s)if(h=s[N],s.hasOwnProperty(N)&&h!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:cn(e,i,N,null,u,h)}for(T in u)if(h=u[T],m=s[T],u.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":ut=h;break;case"defaultValue":dt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&cn(e,i,T,h,u,m)}rn(e,ut,dt);return;case"option":for(var Qt in s)ut=s[Qt],s.hasOwnProperty(Qt)&&ut!=null&&!u.hasOwnProperty(Qt)&&(Qt==="selected"?e.selected=!1:cn(e,i,Qt,null,u,ut));for(W in u)ut=u[W],dt=s[W],u.hasOwnProperty(W)&&ut!==dt&&(ut!=null||dt!=null)&&(W==="selected"?e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol":cn(e,i,W,ut,u,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in s)ut=s[he],s.hasOwnProperty(he)&&ut!=null&&!u.hasOwnProperty(he)&&cn(e,i,he,null,u,ut);for(rt in u)if(ut=u[rt],dt=s[rt],u.hasOwnProperty(rt)&&ut!==dt&&(ut!=null||dt!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:cn(e,i,rt,ut,u,dt)}return;default:if(Ga(i)){for(var fn in s)ut=s[fn],s.hasOwnProperty(fn)&&ut!==void 0&&!u.hasOwnProperty(fn)&&dm(e,i,fn,void 0,u,ut);for(vt in u)ut=u[vt],dt=s[vt],!u.hasOwnProperty(vt)||ut===dt||ut===void 0&&dt===void 0||dm(e,i,vt,ut,u,dt);return}}for(var J in s)ut=s[J],s.hasOwnProperty(J)&&ut!=null&&!u.hasOwnProperty(J)&&cn(e,i,J,null,u,ut);for(yt in u)ut=u[yt],dt=s[yt],!u.hasOwnProperty(yt)||ut===dt||ut==null&&dt==null||cn(e,i,yt,ut,u,dt)}function PS(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),u=0;u<s.length;u++){var h=s[u],m=h.transferSize,T=h.initiatorType,N=h.duration;if(m&&N&&PS(T)){for(T=0,N=h.responseEnd,u+=1;u<s.length;u++){var W=s[u],rt=W.startTime;if(rt>N)break;var vt=W.transferSize,yt=W.initiatorType;vt&&PS(yt)&&(W=W.responseEnd,T+=vt*(W<N?1:(N-rt)/(W-rt)))}if(--u,i+=8*(m+T)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pm=null,mm=null;function Yf(e){return e.nodeType===9?e:e.ownerDocument}function zS(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function FS(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function _m(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gm=null;function Ib(){var e=window.event;return e&&e.type==="popstate"?e===gm?!1:(gm=e,!0):(gm=null,!1)}var BS=typeof setTimeout=="function"?setTimeout:void 0,Hb=typeof clearTimeout=="function"?clearTimeout:void 0,IS=typeof Promise=="function"?Promise:void 0,Gb=typeof queueMicrotask=="function"?queueMicrotask:typeof IS<"u"?function(e){return IS.resolve(null).then(e).catch(Vb)}:BS;function Vb(e){setTimeout(function(){throw e})}function Ss(e){return e==="head"}function HS(e,i){var s=i,u=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(u===0){e.removeChild(h),Sl(i);return}u--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")u++;else if(s==="html")Wu(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Wu(s);for(var m=s.firstChild;m;){var T=m.nextSibling,N=m.nodeName;m[vn]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=T}}else s==="body"&&Wu(e.ownerDocument.body);s=h}while(s);Sl(i)}function GS(e,i){var s=e;e=0;do{var u=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=u}while(s)}function vm(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":vm(s),An(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function kb(e,i,s,u){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[vn])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ua(e.nextSibling),e===null)break}return null}function Xb(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ua(e.nextSibling),e===null))return null;return e}function VS(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ua(e.nextSibling),e===null))return null;return e}function xm(e){return e.data==="$?"||e.data==="$~"}function Sm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wb(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Ua(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var ym=null;function kS(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ua(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function XS(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function WS(e,i,s){switch(i=Yf(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Wu(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);An(e)}var La=new Map,qS=new Set;function Zf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pr=G.d;G.d={f:qb,r:Yb,D:Zb,C:jb,L:Kb,m:Qb,X:$b,S:Jb,M:tA};function qb(){var e=Pr.f(),i=If();return e||i}function Yb(e){var i=Si(e);i!==null&&i.tag===5&&i.type==="form"?ux(i):Pr.r(e)}var gl=typeof document>"u"?null:document;function YS(e,i,s){var u=gl;if(u&&typeof i=="string"&&i){var h=ge(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),qS.has(h)||(qS.add(h),e={rel:e,crossOrigin:s,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),pi(i,"link",e),D(i),u.head.appendChild(i)))}}function Zb(e){Pr.D(e),YS("dns-prefetch",e,null)}function jb(e,i){Pr.C(e,i),YS("preconnect",e,i)}function Kb(e,i,s){Pr.L(e,i,s);var u=gl;if(u&&e&&i){var h='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ge(s.imageSizes)+'"]')):h+='[href="'+ge(e)+'"]';var m=h;switch(i){case"style":m=vl(e);break;case"script":m=xl(e)}La.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),La.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(qu(m))||i==="script"&&u.querySelector(Yu(m))||(i=u.createElement("link"),pi(i,"link",e),D(i),u.head.appendChild(i)))}}function Qb(e,i){Pr.m(e,i);var s=gl;if(s&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ge(u)+'"][href="'+ge(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xl(e)}if(!La.has(m)&&(e=g({rel:"modulepreload",href:e},i),La.set(m,e),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Yu(m)))return}u=s.createElement("link"),pi(u,"link",e),D(u),s.head.appendChild(u)}}}function Jb(e,i,s){Pr.S(e,i,s);var u=gl;if(u&&e){var h=Sn(u).hoistableStyles,m=vl(e);i=i||"default";var T=h.get(m);if(!T){var N={loading:0,preload:null};if(T=u.querySelector(qu(m)))N.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=La.get(m))&&Mm(e,s);var W=T=u.createElement("link");D(W),pi(W,"link",e),W._p=new Promise(function(rt,vt){W.onload=rt,W.onerror=vt}),W.addEventListener("load",function(){N.loading|=1}),W.addEventListener("error",function(){N.loading|=2}),N.loading|=4,jf(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:N},h.set(m,T)}}}function $b(e,i){Pr.X(e,i);var s=gl;if(s&&e){var u=Sn(s).hoistableScripts,h=xl(e),m=u.get(h);m||(m=s.querySelector(Yu(h)),m||(e=g({src:e,async:!0},i),(i=La.get(h))&&Em(e,i),m=s.createElement("script"),D(m),pi(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function tA(e,i){Pr.M(e,i);var s=gl;if(s&&e){var u=Sn(s).hoistableScripts,h=xl(e),m=u.get(h);m||(m=s.querySelector(Yu(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=La.get(h))&&Em(e,i),m=s.createElement("script"),D(m),pi(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function ZS(e,i,s,u){var h=(h=$.current)?Zf(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=vl(s.href),s=Sn(h).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=vl(s.href);var m=Sn(h).hoistableStyles,T=m.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=h.querySelector(qu(e)))&&!m._p&&(T.instance=m,T.state.loading=5),La.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},La.set(e,s),m||eA(h,e,s,T.state))),i&&u===null)throw Error(a(528,""));return T}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=xl(s),s=Sn(h).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function vl(e){return'href="'+ge(e)+'"'}function qu(e){return'link[rel="stylesheet"]['+e+"]"}function jS(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function eA(e,i,s,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),pi(i,"link",s),D(i),e.head.appendChild(i))}function xl(e){return'[src="'+ge(e)+'"]'}function Yu(e){return"script[async]"+e}function KS(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+ge(s.href)+'"]');if(u)return i.instance=u,D(u),u;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),D(u),pi(u,"style",h),jf(u,s.precedence,e),i.instance=u;case"stylesheet":h=vl(s.href);var m=e.querySelector(qu(h));if(m)return i.state.loading|=4,i.instance=m,D(m),m;u=jS(s),(h=La.get(h))&&Mm(u,h),m=(e.ownerDocument||e).createElement("link"),D(m);var T=m;return T._p=new Promise(function(N,W){T.onload=N,T.onerror=W}),pi(m,"link",u),i.state.loading|=4,jf(m,s.precedence,e),i.instance=m;case"script":return m=xl(s.src),(h=e.querySelector(Yu(m)))?(i.instance=h,D(h),h):(u=s,(h=La.get(m))&&(u=g({},s),Em(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),D(h),pi(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,jf(u,s.precedence,e));return i.instance}function jf(e,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,T=0;T<u.length;T++){var N=u[T];if(N.dataset.precedence===i)m=N;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Mm(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Em(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Kf=null;function QS(e,i,s){if(Kf===null){var u=new Map,h=Kf=new Map;h.set(s,u)}else h=Kf,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(e))return u;for(u.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[vn]||m[Me]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(i)||"";T=e+T;var N=u.get(T);N?N.push(m):u.set(T,[m])}}return u}function JS(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function nA(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function $S(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iA(e,i,s,u){if(s.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=vl(u.href),m=i.querySelector(qu(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Qf.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,D(m);return}m=i.ownerDocument||i,u=jS(u),(h=La.get(h))&&Mm(u,h),m=m.createElement("link"),D(m);var T=m;T._p=new Promise(function(N,W){T.onload=N,T.onerror=W}),pi(m,"link",u),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Qf.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Tm=0;function aA(e,i){return e.stylesheets&&e.count===0&&$f(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var u=setTimeout(function(){if(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Tm===0&&(Tm=62500*Bb());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Tm?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$f(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jf=null;function $f(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jf=new Map,i.forEach(rA,e),Jf=null,Qf.call(e))}function rA(e,i){if(!(i.state.loading&4)){var s=Jf.get(e);if(s)var u=s.get(null);else{s=new Map,Jf.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),u=T)}u&&s.set(null,u)}h=i.instance,T=h.getAttribute("data-precedence"),m=s.get(T)||u,m===u&&s.set(null,h),s.set(T,h),this.count++,u=Qf.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Zu={$$typeof:O,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function sA(e,i,s,u,h,m,T,N,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.hiddenUpdates=Gt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function ty(e,i,s,u,h,m,T,N,W,rt,vt,yt){return e=new sA(e,i,s,T,W,rt,vt,yt,N),i=1,m===!0&&(i|=24),m=na(3,null,null,i),e.current=m,m.stateNode=e,i=ip(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:i},op(m),e}function ey(e){return e?(e=Ko,e):Ko}function ny(e,i,s,u,h,m){h=ey(h),u.context===null?u.context=h:u.pendingContext=h,u=us(i),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=cs(e,u,i),s!==null&&(qi(s,e,i),Au(s,e,i))}function iy(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function bm(e,i){iy(e,i),(e=e.alternate)&&iy(e,i)}function ay(e){if(e.tag===13||e.tag===31){var i=Js(e,67108864);i!==null&&qi(i,e,67108864),bm(e,67108864)}}function ry(e){if(e.tag===13||e.tag===31){var i=oa();i=me(i);var s=Js(e,i);s!==null&&qi(s,e,i),bm(e,i)}}var th=!0;function oA(e,i,s,u){var h=F.T;F.T=null;var m=G.p;try{G.p=2,Am(e,i,s,u)}finally{G.p=m,F.T=h}}function lA(e,i,s,u){var h=F.T;F.T=null;var m=G.p;try{G.p=8,Am(e,i,s,u)}finally{G.p=m,F.T=h}}function Am(e,i,s,u){if(th){var h=Rm(u);if(h===null)hm(e,i,u,eh,s),oy(e,u);else if(cA(h,e,i,s,u))u.stopPropagation();else if(oy(e,u),i&4&&-1<uA.indexOf(e)){for(;h!==null;){var m=Si(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Et(m.pendingLanes);if(T!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;T;){var W=1<<31-Bt(T);N.entanglements[1]|=W,T&=~W}nr(m),(Je&6)===0&&(Ff=A()+500,Vu(0))}}break;case 31:case 13:N=Js(m,2),N!==null&&qi(N,m,2),If(),bm(m,2)}if(m=Rm(u),m===null&&hm(e,i,u,eh,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else hm(e,i,u,null,s)}}function Rm(e){return e=wd(e),Cm(e)}var eh=null;function Cm(e){if(eh=null,e=xn(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=c(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return eh=e,null}function sy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pt:return 2;case _t:return 8;case ht:case Wt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var wm=!1,ys=null,Ms=null,Es=null,ju=new Map,Ku=new Map,Ts=[],uA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oy(e,i){switch(e){case"focusin":case"focusout":ys=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":ju.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ku.delete(i.pointerId)}}function Qu(e,i,s,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Si(i),i!==null&&ay(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function cA(e,i,s,u,h){switch(i){case"focusin":return ys=Qu(ys,e,i,s,u,h),!0;case"dragenter":return Ms=Qu(Ms,e,i,s,u,h),!0;case"mouseover":return Es=Qu(Es,e,i,s,u,h),!0;case"pointerover":var m=h.pointerId;return ju.set(m,Qu(ju.get(m)||null,e,i,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Ku.set(m,Qu(Ku.get(m)||null,e,i,s,u,h)),!0}return!1}function ly(e){var i=xn(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){e.blockedOn=i,We(e.priority,function(){ry(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,We(e.priority,function(){ry(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nh(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Rm(e.nativeEvent);if(s===null){s=e.nativeEvent;var u=new s.constructor(s.type,s);Cd=u,s.target.dispatchEvent(u),Cd=null}else return i=Si(s),i!==null&&ay(i),e.blockedOn=s,!1;i.shift()}return!0}function uy(e,i,s){nh(e)&&s.delete(i)}function fA(){wm=!1,ys!==null&&nh(ys)&&(ys=null),Ms!==null&&nh(Ms)&&(Ms=null),Es!==null&&nh(Es)&&(Es=null),ju.forEach(uy),Ku.forEach(uy)}function ih(e,i){e.blockedOn===i&&(e.blockedOn=null,wm||(wm=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,fA)))}var ah=null;function cy(e){ah!==e&&(ah=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ah===e&&(ah=null);for(var i=0;i<e.length;i+=3){var s=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(Cm(u||s)===null)continue;break}var m=Si(s);m!==null&&(e.splice(i,3),i-=3,Rp(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function Sl(e){function i(W){return ih(W,e)}ys!==null&&ih(ys,e),Ms!==null&&ih(Ms,e),Es!==null&&ih(Es,e),ju.forEach(i),Ku.forEach(i);for(var s=0;s<Ts.length;s++){var u=Ts[s];u.blockedOn===e&&(u.blockedOn=null)}for(;0<Ts.length&&(s=Ts[0],s.blockedOn===null);)ly(s),s.blockedOn===null&&Ts.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],T=h[Ee]||null;if(typeof m=="function")T||cy(s);else if(T){var N=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[Ee]||null)N=T.formAction;else if(Cm(h)!==null)continue}else N=T.action;typeof N=="function"?s[u+1]=N:(s.splice(u,3),u-=3),cy(s)}}}function fy(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(T){return h=T})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(s,20)}function s(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Dm(e){this._internalRoot=e}rh.prototype.render=Dm.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=oa();ny(s,u,e,i,null,null)},rh.prototype.unmount=Dm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;ny(e.current,2,null,e,null,null),If(),i[we]=null}};function rh(e){this._internalRoot=e}rh.prototype.unstable_scheduleHydration=function(e){if(e){var i=be();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ts.length&&i!==0&&i<Ts[s].priority;s++);Ts.splice(s,0,e),s===0&&ly(e)}};var hy=t.version;if(hy!=="19.2.3")throw Error(a(527,hy,"19.2.3"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var hA={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sh.isDisabled&&sh.supportsFiber)try{Tt=sh.inject(hA),Rt=sh}catch{}}return $u.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,u="",h=xx,m=Sx,T=yx;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError)),i=ty(e,1,!1,null,null,s,u,null,h,m,T,fy),e[we]=i.current,fm(e),new Dm(i)},$u.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var u=!1,h="",m=xx,T=Sx,N=yx,W=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(W=s.formState)),i=ty(e,1,!0,i,s??null,u,h,W,m,T,N,fy),i.context=ey(null),s=i.current,u=oa(),u=me(u),h=us(u),h.callback=null,cs(s,h,u),s=u,i.current.lanes=s,Kt(i,s),nr(i),e[we]=i.current,fm(e),new rh(i)},$u.version="19.2.3",$u}var My;function MA(){if(My)return Nm.exports;My=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Nm.exports=yA(),Nm.exports}var EA=MA();const Q0="182",TA=0,Ey=1,bA=2,kh=1,AA=2,cc=3,ks=0,ji=1,kr=2,Yr=0,Do=1,Ty=2,by=3,Ay=4,RA=5,To=100,CA=101,wA=102,DA=103,UA=104,LA=200,NA=201,OA=202,PA=203,L_=204,N_=205,zA=206,FA=207,BA=208,IA=209,HA=210,GA=211,VA=212,kA=213,XA=214,O_=0,P_=1,z_=2,Ql=3,F_=4,B_=5,I_=6,H_=7,a1=0,WA=1,qA=2,dr=0,r1=1,s1=2,o1=3,l1=4,u1=5,c1=6,f1=7,h1=300,Bo=301,Jl=302,G_=303,V_=304,xd=306,k_=1e3,Wr=1001,X_=1002,mi=1003,YA=1004,oh=1005,Ci=1006,Fm=1007,Ao=1008,ma=1009,d1=1010,p1=1011,Lc=1012,J0=1013,_r=1014,ur=1015,Qr=1016,$0=1017,tg=1018,Nc=1020,m1=35902,_1=35899,g1=1021,v1=1022,Ka=1023,Jr=1026,Ro=1027,x1=1028,eg=1029,$l=1030,ng=1031,ig=1033,Xh=33776,Wh=33777,qh=33778,Yh=33779,W_=35840,q_=35841,Y_=35842,Z_=35843,j_=36196,K_=37492,Q_=37496,J_=37488,$_=37489,t0=37490,e0=37491,n0=37808,i0=37809,a0=37810,r0=37811,s0=37812,o0=37813,l0=37814,u0=37815,c0=37816,f0=37817,h0=37818,d0=37819,p0=37820,m0=37821,_0=36492,g0=36494,v0=36495,x0=36283,S0=36284,y0=36285,M0=36286,ZA=3200,jA=0,KA=1,Ns="",Pa="srgb",tu="srgb-linear",ad="linear",ln="srgb",yl=7680,Ry=519,QA=512,JA=513,$A=514,ag=515,tR=516,eR=517,rg=518,nR=519,Cy=35044,wy="300 es",cr=2e3,rd=2001;function S1(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function sd(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function iR(){const o=sd("canvas");return o.style.display="block",o}const Dy={};function Uy(...o){const t="THREE."+o.shift();console.log(t,...o)}function xe(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ze(...o){const t="THREE."+o.shift();console.error(t,...o)}function Oc(...o){const t=o.join(" ");t in Dy||(Dy[t]=!0,xe(...o))}function aR(o,t,n){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}class uu{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,t);t.target=null}}}const Mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bm=Math.PI/180,od=180/Math.PI;function Wc(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Mi[o&255]+Mi[o>>8&255]+Mi[o>>16&255]+Mi[o>>24&255]+"-"+Mi[t&255]+Mi[t>>8&255]+"-"+Mi[t>>16&15|64]+Mi[t>>24&255]+"-"+Mi[n&63|128]+Mi[n>>8&255]+"-"+Mi[n>>16&255]+Mi[n>>24&255]+Mi[a&255]+Mi[a>>8&255]+Mi[a>>16&255]+Mi[a>>24&255]).toLowerCase()}function Ge(o,t,n){return Math.max(t,Math.min(n,o))}function rR(o,t){return(o%t+t)%t}function Im(o,t,n){return(1-n)*o+n*t}function tc(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class nn{constructor(t=0,n=0){nn.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ge(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*r+t.x,this.y=l*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qc{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,l,c,f){let p=a[r+0],d=a[r+1],_=a[r+2],g=a[r+3],v=l[c+0],x=l[c+1],E=l[c+2],M=l[c+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=x,t[n+2]=E,t[n+3]=M;return}if(g!==M||p!==v||d!==x||_!==E){let y=p*v+d*x+_*E+g*M;y<0&&(v=-v,x=-x,E=-E,M=-M,y=-y);let S=1-f;if(y<.9995){const U=Math.acos(y),O=Math.sin(U);S=Math.sin(S*U)/O,f=Math.sin(f*U)/O,p=p*S+v*f,d=d*S+x*f,_=_*S+E*f,g=g*S+M*f}else{p=p*S+v*f,d=d*S+x*f,_=_*S+E*f,g=g*S+M*f;const U=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=U,d*=U,_*=U,g*=U}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,r,l,c){const f=a[r],p=a[r+1],d=a[r+2],_=a[r+3],g=l[c],v=l[c+1],x=l[c+2],E=l[c+3];return t[n]=f*E+_*g+p*x-d*v,t[n+1]=p*E+_*v+d*g-f*x,t[n+2]=d*E+_*x+f*v-p*g,t[n+3]=_*E-f*g-p*v-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(r/2),g=f(l/2),v=p(a/2),x=p(r/2),E=p(l/2);switch(c){case"XYZ":this._x=v*_*g+d*x*E,this._y=d*x*g-v*_*E,this._z=d*_*E+v*x*g,this._w=d*_*g-v*x*E;break;case"YXZ":this._x=v*_*g+d*x*E,this._y=d*x*g-v*_*E,this._z=d*_*E-v*x*g,this._w=d*_*g+v*x*E;break;case"ZXY":this._x=v*_*g-d*x*E,this._y=d*x*g+v*_*E,this._z=d*_*E+v*x*g,this._w=d*_*g-v*x*E;break;case"ZYX":this._x=v*_*g-d*x*E,this._y=d*x*g+v*_*E,this._z=d*_*E-v*x*g,this._w=d*_*g+v*x*E;break;case"YZX":this._x=v*_*g+d*x*E,this._y=d*x*g+v*_*E,this._z=d*_*E-v*x*g,this._w=d*_*g-v*x*E;break;case"XZY":this._x=v*_*g-d*x*E,this._y=d*x*g-v*_*E,this._z=d*_*E+v*x*g,this._w=d*_*g+v*x*E;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(_-p)*x,this._y=(l-d)*x,this._z=(c-r)*x}else if(a>f&&a>g){const x=2*Math.sqrt(1+a-f-g);this._w=(_-p)/x,this._x=.25*x,this._y=(r+c)/x,this._z=(l+d)/x}else if(f>g){const x=2*Math.sqrt(1+f-a-g);this._w=(l-d)/x,this._x=(r+c)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+g-a-f);this._w=(c-r)/x,this._x=(l+d)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+r*d-l*p,this._y=r*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-r*f,this._w=c*_-a*f-r*p-l*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(t=0,n=0,a=0){ft.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ly.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ly.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*r-f*a),_=2*(f*n-l*r),g=2*(l*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-l*g,this.z=r+p*g+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this.z=Ge(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this.z=Ge(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=r*p-l*f,this.y=l*c-a*p,this.z=a*f-r*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Hm.copy(this).projectOnVector(t),this.sub(Hm)}reflect(t){return this.sub(Hm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ge(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hm=new ft,Ly=new qc;class Re{constructor(t,n,a,r,l,c,f,p,d){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,d)}set(t,n,a,r,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=r,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],x=a[5],E=a[8],M=r[0],y=r[3],S=r[6],U=r[1],O=r[4],C=r[7],L=r[2],P=r[5],w=r[8];return l[0]=c*M+f*U+p*L,l[3]=c*y+f*O+p*P,l[6]=c*S+f*C+p*w,l[1]=d*M+_*U+g*L,l[4]=d*y+_*O+g*P,l[7]=d*S+_*C+g*w,l[2]=v*M+x*U+E*L,l[5]=v*y+x*O+E*P,l[8]=v*S+x*C+E*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+r*l*d-r*c*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*l,x=d*l-c*p,E=n*g+a*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(r*d-_*a)*M,t[2]=(f*a-r*c)*M,t[3]=v*M,t[4]=(_*n-r*p)*M,t[5]=(r*l-f*n)*M,t[6]=x*M,t[7]=(a*p-d*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-r*d,r*p,-r*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Gm.makeScale(t,n)),this}rotate(t){return this.premultiply(Gm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Gm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gm=new Re,Ny=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oy=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sR(){const o={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===ln&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===ln&&(r.r=Xl(r.r),r.g=Xl(r.g),r.b=Xl(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ns?ad:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Oc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Oc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[tu]:{primaries:t,whitePoint:a,transfer:ad,toXYZ:Ny,fromXYZ:Oy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pa},outputColorSpaceConfig:{drawingBufferColorSpace:Pa}},[Pa]:{primaries:t,whitePoint:a,transfer:ln,toXYZ:Ny,fromXYZ:Oy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pa}}}),o}const Xe=sR();function Zr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Xl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ml;class oR{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Ml===void 0&&(Ml=sd("canvas")),Ml.width=t.width,Ml.height=t.height;const r=Ml.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Ml}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=sd("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=Zr(l[c]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Zr(n[a]/255)*255):n[a]=Zr(n[a]);return{data:n,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lR=0;class sg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Wc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(Vm(r[c].image)):l.push(Vm(r[c]))}else l=Vm(r);a.url=l}return n||(t.images[this.uuid]=a),a}}function Vm(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?oR.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let uR=0;const km=new ft;class Hi extends uu{constructor(t=Hi.DEFAULT_IMAGE,n=Hi.DEFAULT_MAPPING,a=Wr,r=Wr,l=Ci,c=Ao,f=Ka,p=ma,d=Hi.DEFAULT_ANISOTROPY,_=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=Wc(),this.name="",this.source=new sg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new nn(0,0),this.repeat=new nn(1,1),this.center=new nn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(km).x}get height(){return this.source.getSize(km).y}get depth(){return this.source.getSize(km).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){xe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case k_:t.x=t.x-Math.floor(t.x);break;case Wr:t.x=t.x<0?0:1;break;case X_:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case k_:t.y=t.y-Math.floor(t.y);break;case Wr:t.y=t.y<0?0:1;break;case X_:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hi.DEFAULT_IMAGE=null;Hi.DEFAULT_MAPPING=h1;Hi.DEFAULT_ANISOTROPY=1;class Nn{constructor(t=0,n=0,a=0,r=1){Nn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*r+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,l;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],x=p[5],E=p[9],M=p[2],y=p[6],S=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const O=(d+1)/2,C=(x+1)/2,L=(S+1)/2,P=(_+v)/4,w=(g+M)/4,V=(E+y)/4;return O>C&&O>L?O<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(O),r=P/a,l=w/a):C>L?C<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(C),a=P/r,l=V/r):L<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(L),a=w/l,r=V/l),this.set(a,r,l,n),this}let U=Math.sqrt((y-E)*(y-E)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(g-M)/U,this.z=(v-_)/U,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this.z=Ge(this.z,t.z,n.z),this.w=Ge(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this.z=Ge(this.z,t,n),this.w=Ge(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cR extends uu{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Nn(0,0,t,n),this.scissorTest=!1,this.viewport=new Nn(0,0,t,n);const r={width:t,height:n,depth:a.depth},l=new Hi(r);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new sg(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends cR{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class y1 extends Hi{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fR extends Hi{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yc{constructor(t=new ft(1/0,1/0,1/0),n=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Wa.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Wa.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Wa.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Wa):Wa.fromBufferAttribute(l,c),Wa.applyMatrix4(t.matrixWorld),this.expandByPoint(Wa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lh.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),lh.copy(a.boundingBox)),lh.applyMatrix4(t.matrixWorld),this.union(lh)}const r=t.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wa),Wa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ec),uh.subVectors(this.max,ec),El.subVectors(t.a,ec),Tl.subVectors(t.b,ec),bl.subVectors(t.c,ec),As.subVectors(Tl,El),Rs.subVectors(bl,Tl),fo.subVectors(El,bl);let n=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-fo.z,fo.y,As.z,0,-As.x,Rs.z,0,-Rs.x,fo.z,0,-fo.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-fo.y,fo.x,0];return!Xm(n,El,Tl,bl,uh)||(n=[1,0,0,0,1,0,0,0,1],!Xm(n,El,Tl,bl,uh))?!1:(ch.crossVectors(As,Rs),n=[ch.x,ch.y,ch.z],Xm(n,El,Tl,bl,uh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zr=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],Wa=new ft,lh=new Yc,El=new ft,Tl=new ft,bl=new ft,As=new ft,Rs=new ft,fo=new ft,ec=new ft,uh=new ft,ch=new ft,ho=new ft;function Xm(o,t,n,a,r){for(let l=0,c=o.length-3;l<=c;l+=3){ho.fromArray(o,l);const f=r.x*Math.abs(ho.x)+r.y*Math.abs(ho.y)+r.z*Math.abs(ho.z),p=t.dot(ho),d=n.dot(ho),_=a.dot(ho);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const hR=new Yc,nc=new ft,Wm=new ft;class Sd{constructor(t=new ft,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):hR.setFromPoints(t).getCenter(a);let r=0;for(let l=0,c=t.length;l<c;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nc.subVectors(t,this.center);const n=nc.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(nc,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nc.copy(t.center).add(Wm)),this.expandByPoint(nc.copy(t.center).sub(Wm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fr=new ft,qm=new ft,fh=new ft,Cs=new ft,Ym=new ft,hh=new ft,Zm=new ft;class M1{constructor(t=new ft,n=new ft(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fr)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Fr.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Fr.copy(this.origin).addScaledVector(this.direction,n),Fr.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){qm.copy(t).add(n).multiplyScalar(.5),fh.copy(n).sub(t).normalize(),Cs.copy(this.origin).sub(qm);const l=t.distanceTo(n)*.5,c=-this.direction.dot(fh),f=Cs.dot(this.direction),p=-Cs.dot(fh),d=Cs.lengthSq(),_=Math.abs(1-c*c);let g,v,x,E;if(_>0)if(g=c*p-f,v=c*f-p,E=l*_,g>=0)if(v>=-E)if(v<=E){const M=1/_;g*=M,v*=M,x=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+d;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),x=-g*g+v*(v+2*p)+d):v<=E?(g=0,v=Math.min(Math.max(-l,-p),l),x=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),x=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(qm).addScaledVector(fh,v),x}intersectSphere(t,n){Fr.subVectors(t.center,this.origin);const a=Fr.dot(this.direction),r=Fr.dot(Fr)-a*a,l=t.radius*t.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,r=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,r=(t.min.x-v.x)*d),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,Fr)!==null}intersectTriangle(t,n,a,r,l){Ym.subVectors(n,t),hh.subVectors(a,t),Zm.crossVectors(Ym,hh);let c=this.direction.dot(Zm),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Cs.subVectors(this.origin,t);const p=f*this.direction.dot(hh.crossVectors(Cs,hh));if(p<0)return null;const d=f*this.direction.dot(Ym.cross(Cs));if(d<0||p+d>c)return null;const _=-f*Cs.dot(Zm);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dn{constructor(t,n,a,r,l,c,f,p,d,_,g,v,x,E,M,y){Dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,d,_,g,v,x,E,M,y)}set(t,n,a,r,l,c,f,p,d,_,g,v,x,E,M,y){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=r,S[1]=l,S[5]=c,S[9]=f,S[13]=p,S[2]=d,S[6]=_,S[10]=g,S[14]=v,S[3]=x,S[7]=E,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/Al.setFromMatrixColumn(t,0).length(),l=1/Al.setFromMatrixColumn(t,1).length(),c=1/Al.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(r),d=Math.sin(r),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,x=c*g,E=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=x+E*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=E+x*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,x=p*g,E=d*_,M=d*g;n[0]=v+M*f,n[4]=E*f-x,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=x*f-E,n[6]=M+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,x=p*g,E=d*_,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=E+x*f,n[1]=x+E*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,x=c*g,E=f*_,M=f*g;n[0]=p*_,n[4]=E*d-x,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=x*d-E,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,x=c*d,E=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=E*g+x,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=x*g+E,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,x=c*d,E=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=c*_,n[9]=x*g-E,n[2]=E*g-x,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dR,t,pR)}lookAt(t,n,a){const r=this.elements;return la.subVectors(t,n),la.lengthSq()===0&&(la.z=1),la.normalize(),ws.crossVectors(a,la),ws.lengthSq()===0&&(Math.abs(a.z)===1?la.x+=1e-4:la.z+=1e-4,la.normalize(),ws.crossVectors(a,la)),ws.normalize(),dh.crossVectors(la,ws),r[0]=ws.x,r[4]=dh.x,r[8]=la.x,r[1]=ws.y,r[5]=dh.y,r[9]=la.y,r[2]=ws.z,r[6]=dh.z,r[10]=la.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],x=a[13],E=a[2],M=a[6],y=a[10],S=a[14],U=a[3],O=a[7],C=a[11],L=a[15],P=r[0],w=r[4],V=r[8],b=r[12],R=r[1],I=r[5],k=r[9],j=r[13],it=r[2],et=r[6],F=r[10],G=r[14],Q=r[3],gt=r[7],H=r[11],z=r[15];return l[0]=c*P+f*R+p*it+d*Q,l[4]=c*w+f*I+p*et+d*gt,l[8]=c*V+f*k+p*F+d*H,l[12]=c*b+f*j+p*G+d*z,l[1]=_*P+g*R+v*it+x*Q,l[5]=_*w+g*I+v*et+x*gt,l[9]=_*V+g*k+v*F+x*H,l[13]=_*b+g*j+v*G+x*z,l[2]=E*P+M*R+y*it+S*Q,l[6]=E*w+M*I+y*et+S*gt,l[10]=E*V+M*k+y*F+S*H,l[14]=E*b+M*j+y*G+S*z,l[3]=U*P+O*R+C*it+L*Q,l[7]=U*w+O*I+C*et+L*gt,l[11]=U*V+O*k+C*F+L*H,l[15]=U*b+O*j+C*G+L*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],x=t[14],E=t[3],M=t[7],y=t[11],S=t[15],U=p*x-d*v,O=f*x-d*g,C=f*v-p*g,L=c*x-d*_,P=c*v-p*_,w=c*g-f*_;return n*(M*U-y*O+S*C)-a*(E*U-y*L+S*P)+r*(E*O-M*L+S*w)-l*(E*C-M*P+y*w)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],x=t[11],E=t[12],M=t[13],y=t[14],S=t[15],U=g*y*d-M*v*d+M*p*x-f*y*x-g*p*S+f*v*S,O=E*v*d-_*y*d-E*p*x+c*y*x+_*p*S-c*v*S,C=_*M*d-E*g*d+E*f*x-c*M*x-_*f*S+c*g*S,L=E*g*p-_*M*p-E*f*v+c*M*v+_*f*y-c*g*y,P=n*U+a*O+r*C+l*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return t[0]=U*w,t[1]=(M*v*l-g*y*l-M*r*x+a*y*x+g*r*S-a*v*S)*w,t[2]=(f*y*l-M*p*l+M*r*d-a*y*d-f*r*S+a*p*S)*w,t[3]=(g*p*l-f*v*l-g*r*d+a*v*d+f*r*x-a*p*x)*w,t[4]=O*w,t[5]=(_*y*l-E*v*l+E*r*x-n*y*x-_*r*S+n*v*S)*w,t[6]=(E*p*l-c*y*l-E*r*d+n*y*d+c*r*S-n*p*S)*w,t[7]=(c*v*l-_*p*l+_*r*d-n*v*d-c*r*x+n*p*x)*w,t[8]=C*w,t[9]=(E*g*l-_*M*l-E*a*x+n*M*x+_*a*S-n*g*S)*w,t[10]=(c*M*l-E*f*l+E*a*d-n*M*d-c*a*S+n*f*S)*w,t[11]=(_*f*l-c*g*l-_*a*d+n*g*d+c*a*x-n*f*x)*w,t[12]=L*w,t[13]=(_*M*r-E*g*r+E*a*v-n*M*v-_*a*y+n*g*y)*w,t[14]=(E*f*r-c*M*r-E*a*p+n*M*p+c*a*y-n*f*y)*w,t[15]=(c*g*r-_*f*r+_*a*p-n*g*p-c*a*v+n*f*v)*w,this}scale(t){const n=this.elements,a=t.x,r=t.y,l=t.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-r*p,d*p+r*f,0,d*f+r*p,_*f+a,_*p-r*c,0,d*p-r*f,_*p+r*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,l,c){return this.set(1,a,l,0,t,1,c,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,g=f+f,v=l*d,x=l*_,E=l*g,M=c*_,y=c*g,S=f*g,U=p*d,O=p*_,C=p*g,L=a.x,P=a.y,w=a.z;return r[0]=(1-(M+S))*L,r[1]=(x+C)*L,r[2]=(E-O)*L,r[3]=0,r[4]=(x-C)*P,r[5]=(1-(v+S))*P,r[6]=(y+U)*P,r[7]=0,r[8]=(E+O)*w,r[9]=(y-U)*w,r[10]=(1-(v+M))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let l=Al.set(r[0],r[1],r[2]).length();const c=Al.set(r[4],r[5],r[6]).length(),f=Al.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),qa.copy(this);const d=1/l,_=1/c,g=1/f;return qa.elements[0]*=d,qa.elements[1]*=d,qa.elements[2]*=d,qa.elements[4]*=_,qa.elements[5]*=_,qa.elements[6]*=_,qa.elements[8]*=g,qa.elements[9]*=g,qa.elements[10]*=g,n.setFromRotationMatrix(qa),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,r,l,c,f=cr,p=!1){const d=this.elements,_=2*l/(n-t),g=2*l/(a-r),v=(n+t)/(n-t),x=(a+r)/(a-r);let E,M;if(p)E=l/(c-l),M=c*l/(c-l);else if(f===cr)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===rd)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,l,c,f=cr,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-r),v=-(n+t)/(n-t),x=-(a+r)/(a-r);let E,M;if(p)E=1/(c-l),M=c/(c-l);else if(f===cr)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===rd)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Al=new ft,qa=new Dn,dR=new ft(0,0,0),pR=new ft(1,1,1),ws=new ft,dh=new ft,la=new ft,Py=new Dn,zy=new qc;class $r{constructor(t=0,n=0,a=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,l=r[0],c=r[4],f=r[8],p=r[1],d=r[5],_=r[9],g=r[2],v=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ge(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,x),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Py.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Py,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return zy.setFromEuler(this),this.setFromQuaternion(zy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class E1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mR=0;const Fy=new ft,Rl=new qc,Br=new Dn,ph=new ft,ic=new ft,_R=new ft,gR=new qc,By=new ft(1,0,0),Iy=new ft(0,1,0),Hy=new ft(0,0,1),Gy={type:"added"},vR={type:"removed"},Cl={type:"childadded",child:null},jm={type:"childremoved",child:null};class gi extends uu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=Wc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const t=new ft,n=new $r,a=new qc,r=new ft(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dn},normalMatrix:{value:new Re}}),this.matrix=new Dn,this.matrixWorld=new Dn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Rl.setFromAxisAngle(t,n),this.quaternion.multiply(Rl),this}rotateOnWorldAxis(t,n){return Rl.setFromAxisAngle(t,n),this.quaternion.premultiply(Rl),this}rotateX(t){return this.rotateOnAxis(By,t)}rotateY(t){return this.rotateOnAxis(Iy,t)}rotateZ(t){return this.rotateOnAxis(Hy,t)}translateOnAxis(t,n){return Fy.copy(t).applyQuaternion(this.quaternion),this.position.add(Fy.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(By,t)}translateY(t){return this.translateOnAxis(Iy,t)}translateZ(t){return this.translateOnAxis(Hy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?ph.copy(t):ph.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),ic.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(ic,ph,this.up):Br.lookAt(ph,ic,this.up),this.quaternion.setFromRotationMatrix(Br),r&&(Br.extractRotation(r.matrixWorld),Rl.setFromRotationMatrix(Br),this.quaternion.premultiply(Rl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gy),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(vR),jm.child=t,this.dispatchEvent(jm),jm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Br.multiply(t.parent.matrixWorld)),t.applyMatrix4(Br),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gy),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,t,_R),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,gR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),x=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=r,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}gi.DEFAULT_UP=new ft(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ya=new ft,Ir=new ft,Km=new ft,Hr=new ft,wl=new ft,Dl=new ft,Vy=new ft,Qm=new ft,Jm=new ft,$m=new ft,t_=new Nn,e_=new Nn,n_=new Nn;class ja{constructor(t=new ft,n=new ft,a=new ft){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Ya.subVectors(t,n),r.cross(Ya);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,n,a,r,l){Ya.subVectors(r,n),Ir.subVectors(a,n),Km.subVectors(t,n);const c=Ya.dot(Ya),f=Ya.dot(Ir),p=Ya.dot(Km),d=Ir.dot(Ir),_=Ir.dot(Km),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(d*p-f*_)*v,E=(c*_-f*p)*v;return l.set(1-x-E,E,x)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,Hr)===null?!1:Hr.x>=0&&Hr.y>=0&&Hr.x+Hr.y<=1}static getInterpolation(t,n,a,r,l,c,f,p){return this.getBarycoord(t,n,a,r,Hr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Hr.x),p.addScaledVector(c,Hr.y),p.addScaledVector(f,Hr.z),p)}static getInterpolatedAttribute(t,n,a,r,l,c){return t_.setScalar(0),e_.setScalar(0),n_.setScalar(0),t_.fromBufferAttribute(t,n),e_.fromBufferAttribute(t,a),n_.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(t_,l.x),c.addScaledVector(e_,l.y),c.addScaledVector(n_,l.z),c}static isFrontFacing(t,n,a,r){return Ya.subVectors(a,n),Ir.subVectors(t,n),Ya.cross(Ir).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ya.subVectors(this.c,this.b),Ir.subVectors(this.a,this.b),Ya.cross(Ir).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ja.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ja.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,l){return ja.getInterpolation(t,this.a,this.b,this.c,n,a,r,l)}containsPoint(t){return ja.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ja.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,l=this.c;let c,f;wl.subVectors(r,a),Dl.subVectors(l,a),Qm.subVectors(t,a);const p=wl.dot(Qm),d=Dl.dot(Qm);if(p<=0&&d<=0)return n.copy(a);Jm.subVectors(t,r);const _=wl.dot(Jm),g=Dl.dot(Jm);if(_>=0&&g<=_)return n.copy(r);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(wl,c);$m.subVectors(t,l);const x=wl.dot($m),E=Dl.dot($m);if(E>=0&&x<=E)return n.copy(l);const M=x*d-p*E;if(M<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(a).addScaledVector(Dl,f);const y=_*E-x*g;if(y<=0&&g-_>=0&&x-E>=0)return Vy.subVectors(l,r),f=(g-_)/(g-_+(x-E)),n.copy(r).addScaledVector(Vy,f);const S=1/(y+M+v);return c=M*S,f=v*S,n.copy(a).addScaledVector(wl,c).addScaledVector(Dl,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const T1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},mh={h:0,s:0,l:0};function i_(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class je{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Pa){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Xe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Xe.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Xe.workingColorSpace){if(t=rR(t,1),n=Ge(n,0,1),a=Ge(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=i_(c,l,t+1/3),this.g=i_(c,l,t),this.b=i_(c,l,t-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(t,n=Pa){function a(l){l!==void 0&&parseFloat(l)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:xe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Pa){const a=T1[t.toLowerCase()];return a!==void 0?this.setHex(a,n):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}copyLinearToSRGB(t){return this.r=Xl(t.r),this.g=Xl(t.g),this.b=Xl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pa){return Xe.workingToColorSpace(Ei.copy(this),t),Math.round(Ge(Ei.r*255,0,255))*65536+Math.round(Ge(Ei.g*255,0,255))*256+Math.round(Ge(Ei.b*255,0,255))}getHexString(t=Pa){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Xe.workingColorSpace){Xe.workingToColorSpace(Ei.copy(this),n);const a=Ei.r,r=Ei.g,l=Ei.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(r-l)/g+(r<l?6:0);break;case r:p=(l-a)/g+2;break;case l:p=(a-r)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Ei.copy(this),n),t.r=Ei.r,t.g=Ei.g,t.b=Ei.b,t}getStyle(t=Pa){Xe.workingToColorSpace(Ei.copy(this),t);const n=Ei.r,a=Ei.g,r=Ei.b;return t!==Pa?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+n,Ds.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ds),t.getHSL(mh);const a=Im(Ds.h,mh.h,n),r=Im(Ds.s,mh.s,n),l=Im(Ds.l,mh.l,n);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ei=new je;je.NAMES=T1;let xR=0;class Zc extends uu{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xR++}),this.uuid=Wc(),this.name="",this.type="Material",this.blending=Do,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=L_,this.blendDst=N_,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){xe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(a.blending=this.blending),this.side!==ks&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==L_&&(a.blendSrc=this.blendSrc),this.blendDst!==N_&&(a.blendDst=this.blendDst),this.blendEquation!==To&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ry&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yl&&(a.stencilFail=this.stencilFail),this.stencilZFail!==yl&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==yl&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=r(t.textures),c=r(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class b1 extends Zc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=a1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kn=new ft,_h=new nn;let SR=0;class Fi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Cy,this.updateRanges=[],this.gpuType=ur,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)_h.fromBufferAttribute(this,n),_h.applyMatrix3(t),this.setXY(n,_h.x,_h.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix3(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix4(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyNormalMatrix(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.transformDirection(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=tc(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Yi(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=tc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=tc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=tc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=tc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Yi(n,this.array),a=Yi(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Yi(n,this.array),a=Yi(a,this.array),r=Yi(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,l){return t*=this.itemSize,this.normalized&&(n=Yi(n,this.array),a=Yi(a,this.array),r=Yi(r,this.array),l=Yi(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cy&&(t.usage=this.usage),t}}class A1 extends Fi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class R1 extends Fi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class jr extends Fi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let yR=0;const Na=new Dn,a_=new gi,Ul=new ft,ua=new Yc,ac=new Yc,ni=new ft;class Ja extends uu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=Wc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S1(t)?R1:A1)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new Re().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Na.makeRotationFromQuaternion(t),this.applyMatrix4(Na),this}rotateX(t){return Na.makeRotationX(t),this.applyMatrix4(Na),this}rotateY(t){return Na.makeRotationY(t),this.applyMatrix4(Na),this}rotateZ(t){return Na.makeRotationZ(t),this.applyMatrix4(Na),this}translate(t,n,a){return Na.makeTranslation(t,n,a),this.applyMatrix4(Na),this}scale(t,n,a){return Na.makeScale(t,n,a),this.applyMatrix4(Na),this}lookAt(t){return a_.lookAt(t),a_.updateMatrix(),this.applyMatrix4(a_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ul).negate(),this.translate(Ul.x,Ul.y,Ul.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new jr(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const l=t[r];n.setXYZ(r,l.x,l.y,l.z||0)}t.length>n.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];ua.setFromBufferAttribute(l),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,ua.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,ua.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(ua.min),this.boundingBox.expandByPoint(ua.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sd);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(t){const a=this.boundingSphere.center;if(ua.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];ac.setFromBufferAttribute(f),this.morphTargetsRelative?(ni.addVectors(ua.min,ac.min),ua.expandByPoint(ni),ni.addVectors(ua.max,ac.max),ua.expandByPoint(ni)):(ua.expandByPoint(ac.min),ua.expandByPoint(ac.max))}ua.getCenter(a);let r=0;for(let l=0,c=t.count;l<c;l++)ni.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(ni));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)ni.fromBufferAttribute(f,d),p&&(Ul.fromBufferAttribute(t,d),ni.add(Ul)),r=Math.max(r,a.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<a.count;V++)f[V]=new ft,p[V]=new ft;const d=new ft,_=new ft,g=new ft,v=new nn,x=new nn,E=new nn,M=new ft,y=new ft;function S(V,b,R){d.fromBufferAttribute(a,V),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,R),v.fromBufferAttribute(l,V),x.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),_.sub(d),g.sub(d),x.sub(v),E.sub(v);const I=1/(x.x*E.y-E.x*x.y);isFinite(I)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(I),y.copy(g).multiplyScalar(x.x).addScaledVector(_,-E.x).multiplyScalar(I),f[V].add(M),f[b].add(M),f[R].add(M),p[V].add(y),p[b].add(y),p[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let V=0,b=U.length;V<b;++V){const R=U[V],I=R.start,k=R.count;for(let j=I,it=I+k;j<it;j+=3)S(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const O=new ft,C=new ft,L=new ft,P=new ft;function w(V){L.fromBufferAttribute(r,V),P.copy(L);const b=f[V];O.copy(b),O.sub(L.multiplyScalar(L.dot(b))).normalize(),C.crossVectors(P,b);const I=C.dot(p[V])<0?-1:1;c.setXYZW(V,O.x,O.y,O.z,I)}for(let V=0,b=U.length;V<b;++V){const R=U[V],I=R.start,k=R.count;for(let j=I,it=I+k;j<it;j+=3)w(t.getX(j+0)),w(t.getX(j+1)),w(t.getX(j+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Fi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const r=new ft,l=new ft,c=new ft,f=new ft,p=new ft,d=new ft,_=new ft,g=new ft;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),M=t.getX(v+1),y=t.getX(v+2);r.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),_.subVectors(c,l),g.subVectors(r,l),_.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)r.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(r,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)ni.fromBufferAttribute(t,n),ni.normalize(),t.setXYZ(n,ni.x,ni.y,ni.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let x=0,E=0;for(let M=0,y=p.length;M<y;M++){f.isInterleavedBufferAttribute?x=p[M]*f.data.stride+f.offset:x=p[M]*_;for(let S=0;S<_;S++)v[E++]=d[x++]}return new Fi(v,_,g)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ja,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],x=t(v,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];_.push(x.toJSON(t.data))}_.length>0&&(r[p]=_,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],g=l[d];for(let v=0,x=g.length;v<x;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ky=new Dn,po=new M1,gh=new Sd,Xy=new ft,vh=new ft,xh=new ft,Sh=new ft,r_=new ft,yh=new ft,Wy=new ft,Mh=new ft;class ts extends gi{constructor(t=new Ja,n=new b1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){yh.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],g=l[p];_!==0&&(r_.fromBufferAttribute(g,t),c?yh.addScaledVector(r_,_):yh.addScaledVector(r_.sub(n),_))}n.add(yh)}return n}raycast(t,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),gh.copy(a.boundingSphere),gh.applyMatrix4(l),po.copy(t.ray).recast(t.near),!(gh.containsPoint(po.origin)===!1&&(po.intersectSphere(gh,Xy)===null||po.origin.distanceToSquared(Xy)>(t.far-t.near)**2))&&(ky.copy(l).invert(),po.copy(t.ray).applyMatrix4(ky),!(a.boundingBox!==null&&po.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,po)))}_computeIntersections(t,n,a){let r;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],S=c[y.materialIndex],U=Math.max(y.start,x.start),O=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let C=U,L=O;C<L;C+=3){const P=f.getX(C),w=f.getX(C+1),V=f.getX(C+2);r=Eh(this,S,t,a,d,_,g,P,w,V),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let y=E,S=M;y<S;y+=3){const U=f.getX(y),O=f.getX(y+1),C=f.getX(y+2);r=Eh(this,c,t,a,d,_,g,U,O,C),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],S=c[y.materialIndex],U=Math.max(y.start,x.start),O=Math.min(p.count,Math.min(y.start+y.count,x.start+x.count));for(let C=U,L=O;C<L;C+=3){const P=C,w=C+1,V=C+2;r=Eh(this,S,t,a,d,_,g,P,w,V),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(p.count,x.start+x.count);for(let y=E,S=M;y<S;y+=3){const U=y,O=y+1,C=y+2;r=Eh(this,c,t,a,d,_,g,U,O,C),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}}function MR(o,t,n,a,r,l,c,f){let p;if(t.side===ji?p=a.intersectTriangle(c,l,r,!0,f):p=a.intersectTriangle(r,l,c,t.side===ks,f),p===null)return null;Mh.copy(f),Mh.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Mh);return d<n.near||d>n.far?null:{distance:d,point:Mh.clone(),object:o}}function Eh(o,t,n,a,r,l,c,f,p,d){o.getVertexPosition(f,vh),o.getVertexPosition(p,xh),o.getVertexPosition(d,Sh);const _=MR(o,t,n,a,vh,xh,Sh,Wy);if(_){const g=new ft;ja.getBarycoord(Wy,vh,xh,Sh,g),r&&(_.uv=ja.getInterpolatedAttribute(r,f,p,d,g,new nn)),l&&(_.uv1=ja.getInterpolatedAttribute(l,f,p,d,g,new nn)),c&&(_.normal=ja.getInterpolatedAttribute(c,f,p,d,g,new ft),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new ft,materialIndex:0};ja.getNormal(vh,xh,Sh,v.normal),_.face=v,_.barycoord=g}return _}class jc extends Ja{constructor(t=1,n=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,a,n,t,c,l,0),E("z","y","x",1,-1,a,n,-t,c,l,1),E("x","z","y",1,1,t,a,n,r,c,2),E("x","z","y",1,-1,t,a,-n,r,c,3),E("x","y","z",1,-1,t,n,a,r,l,4),E("x","y","z",-1,-1,t,n,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new jr(d,3)),this.setAttribute("normal",new jr(_,3)),this.setAttribute("uv",new jr(g,2));function E(M,y,S,U,O,C,L,P,w,V,b){const R=C/w,I=L/V,k=C/2,j=L/2,it=P/2,et=w+1,F=V+1;let G=0,Q=0;const gt=new ft;for(let H=0;H<F;H++){const z=H*I-j;for(let nt=0;nt<et;nt++){const mt=nt*R-k;gt[M]=mt*U,gt[y]=z*O,gt[S]=it,d.push(gt.x,gt.y,gt.z),gt[M]=0,gt[y]=0,gt[S]=P>0?1:-1,_.push(gt.x,gt.y,gt.z),g.push(nt/w),g.push(1-H/V),G+=1}}for(let H=0;H<V;H++)for(let z=0;z<w;z++){const nt=v+z+et*H,mt=v+z+et*(H+1),Mt=v+(z+1)+et*(H+1),wt=v+(z+1)+et*H;p.push(nt,mt,wt),p.push(mt,Mt,wt),Q+=6}f.addGroup(x,Q,b),x+=Q,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function eu(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function Ni(o){const t={};for(let n=0;n<o.length;n++){const a=eu(o[n]);for(const r in a)t[r]=a[r]}return t}function ER(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function C1(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}const TR={clone:eu,merge:Ni};var bR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Zc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bR,this.fragmentShader=AR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eu(t.uniforms),this.uniformsGroups=ER(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?n.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[r]={type:"m4",value:c.toArray()}:n.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class w1 extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dn,this.projectionMatrix=new Dn,this.projectionMatrixInverse=new Dn,this.coordinateSystem=cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Us=new ft,qy=new nn,Yy=new nn;class da extends w1{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return od*2*Math.atan(Math.tan(Bm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-t/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Us.x,Us.y).multiplyScalar(-t/Us.z)}getViewSize(t,n){return this.getViewBounds(t,qy,Yy),n.subVectors(Yy,qy)}setViewOffset(t,n,a,r,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Bm*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*r/p,n-=c.offsetY*a/d,r*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ll=-90,Nl=1;class RR extends gi{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new da(Ll,Nl,t,n);r.layers=this.layers,this.add(r);const l=new da(Ll,Nl,t,n);l.layers=this.layers,this.add(l);const c=new da(Ll,Nl,t,n);c.layers=this.layers,this.add(c);const f=new da(Ll,Nl,t,n);f.layers=this.layers,this.add(f);const p=new da(Ll,Nl,t,n);p.layers=this.layers,this.add(p);const d=new da(Ll,Nl,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===cr)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===rd)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,l),t.setRenderTarget(a,1,r),t.render(n,c),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,p),t.setRenderTarget(a,4,r),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,r),t.render(n,_),t.setRenderTarget(g,v,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class D1 extends Hi{constructor(t=[],n=Bo,a,r,l,c,f,p,d,_){super(t,n,a,r,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class U1 extends pr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new D1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jc(5,5,5),l=new Qa({name:"CubemapFromEquirect",uniforms:eu(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ji,blending:Yr});l.uniforms.tEquirect.value=n;const c=new ts(r,l),f=n.minFilter;return n.minFilter===Ao&&(n.minFilter=Ci),new RR(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,r);t.setRenderTarget(l)}}class Th extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CR={type:"move"};class s_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Th,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Th,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Th,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const y=n.getJointPose(M,a),S=this._getHandJoint(d,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(CR)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Th;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class og{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(t),this.density=n}clone(){return new og(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wR extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class DR extends Hi{constructor(t=null,n=1,a=1,r,l,c,f,p,d=mi,_=mi,g,v){super(null,c,f,p,d,_,r,l,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const o_=new ft,UR=new ft,LR=new Re;class So{constructor(t=new ft(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=o_.subVectors(a,n).cross(UR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(o_),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||LR.getNormalMatrix(t),r=this.coplanarPoint(o_).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mo=new Sd,NR=new nn(.5,.5),bh=new ft;class lg{constructor(t=new So,n=new So,a=new So,r=new So,l=new So,c=new So){this.planes=[t,n,a,r,l,c]}set(t,n,a,r,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=cr,a=!1){const r=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],g=l[5],v=l[6],x=l[7],E=l[8],M=l[9],y=l[10],S=l[11],U=l[12],O=l[13],C=l[14],L=l[15];if(r[0].setComponents(d-c,x-_,S-E,L-U).normalize(),r[1].setComponents(d+c,x+_,S+E,L+U).normalize(),r[2].setComponents(d+f,x+g,S+M,L+O).normalize(),r[3].setComponents(d-f,x-g,S-M,L-O).normalize(),a)r[4].setComponents(p,v,y,C).normalize(),r[5].setComponents(d-p,x-v,S-y,L-C).normalize();else if(r[4].setComponents(d-p,x-v,S-y,L-C).normalize(),n===cr)r[5].setComponents(d+p,x+v,S+y,L+C).normalize();else if(n===rd)r[5].setComponents(p,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mo)}intersectsSprite(t){mo.center.set(0,0,0);const n=NR.distanceTo(t.center);return mo.radius=.7071067811865476+n,mo.applyMatrix4(t.matrixWorld),this.intersectsSphere(mo)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(bh.x=r.normal.x>0?t.max.x:t.min.x,bh.y=r.normal.y>0?t.max.y:t.min.y,bh.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(bh)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class OR extends Zc{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zy=new Dn,E0=new M1,Ah=new Sd,Rh=new ft;class PR extends gi{constructor(t=new Ja,n=new OR){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,r=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ah.copy(a.boundingSphere),Ah.applyMatrix4(r),Ah.radius+=l,t.ray.intersectsSphere(Ah)===!1)return;Zy.copy(r).invert(),E0.copy(t.ray).applyMatrix4(Zy);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let E=v,M=x;E<M;E++){const y=d.getX(E);Rh.fromBufferAttribute(g,y),jy(Rh,y,p,r,t,n,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let E=v,M=x;E<M;E++)Rh.fromBufferAttribute(g,E),jy(Rh,E,p,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function jy(o,t,n,a,r,l,c){const f=E0.distanceSqToPoint(o);if(f<n){const p=new ft;E0.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class Pc extends Hi{constructor(t,n,a=_r,r,l,c,f=mi,p=mi,d,_=Jr,g=1){if(_!==Jr&&_!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,r,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zR extends Pc{constructor(t,n=_r,a=Bo,r,l,c=mi,f=mi,p,d=Jr){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,r,l,c,f,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class L1 extends Hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yd extends Ja{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(r),d=f+1,_=p+1,g=t/f,v=n/p,x=[],E=[],M=[],y=[];for(let S=0;S<_;S++){const U=S*v-c;for(let O=0;O<d;O++){const C=O*g-l;E.push(C,-U,0),M.push(0,0,1),y.push(O/f),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let U=0;U<f;U++){const O=U+d*S,C=U+d*(S+1),L=U+1+d*(S+1),P=U+1+d*S;x.push(O,C,P),x.push(C,L,P)}this.setIndex(x),this.setAttribute("position",new jr(E,3)),this.setAttribute("normal",new jr(M,3)),this.setAttribute("uv",new jr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yd(t.width,t.height,t.widthSegments,t.heightSegments)}}class FR extends Qa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class BR extends Zc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IR extends Zc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class N1 extends gi{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const l_=new Dn,Ky=new ft,Qy=new ft;class HR{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nn(512,512),this.mapType=ma,this.map=null,this.mapPass=null,this.matrix=new Dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lg,this._frameExtents=new nn(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Ky.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ky),Qy.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Qy),n.updateMatrixWorld(),l_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l_,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(l_)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class GR extends HR{constructor(){super(new da(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=od*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,l=t.distance||n.far;(a!==n.fov||r!==n.aspect||l!==n.far)&&(n.fov=a,n.aspect=r,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class VR extends N1{constructor(t,n,a=0,r=Math.PI/3,l=0,c=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gi.DEFAULT_UP),this.updateMatrix(),this.target=new gi,this.distance=a,this.angle=r,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new GR}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class O1 extends w1{constructor(t=-1,n=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class kR extends N1{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class XR extends da{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Jy(o,t,n,a){const r=WR(a);switch(n){case g1:return o*t;case x1:return o*t/r.components*r.byteLength;case eg:return o*t/r.components*r.byteLength;case $l:return o*t*2/r.components*r.byteLength;case ng:return o*t*2/r.components*r.byteLength;case v1:return o*t*3/r.components*r.byteLength;case Ka:return o*t*4/r.components*r.byteLength;case ig:return o*t*4/r.components*r.byteLength;case Xh:case Wh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case qh:case Yh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case q_:case Z_:return Math.max(o,16)*Math.max(t,8)/4;case W_:case Y_:return Math.max(o,8)*Math.max(t,8)/2;case j_:case K_:case J_:case $_:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Q_:case t0:case e0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case n0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case i0:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case a0:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case r0:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case s0:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case o0:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case l0:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case u0:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case c0:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case f0:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case h0:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case d0:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case p0:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case m0:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _0:case g0:case v0:return Math.ceil(o/4)*Math.ceil(t/4)*16;case x0:case S0:return Math.ceil(o/4)*Math.ceil(t/4)*8;case y0:case M0:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WR(o){switch(o){case ma:case d1:return{byteLength:1,components:1};case Lc:case p1:case Qr:return{byteLength:2,components:1};case $0:case tg:return{byteLength:2,components:4};case _r:case J0:case ur:return{byteLength:4,components:1};case m1:case _1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Q0}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Q0);function P1(){let o=null,t=!1,n=null,a=null;function r(l,c){n(l,c),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function qR(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];o.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:r,remove:l,update:c}}var YR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZR=`#ifdef USE_ALPHAHASH
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
#endif`,jR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$R=`#ifdef USE_AOMAP
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
#endif`,tC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eC=`#ifdef USE_BATCHING
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
#endif`,nC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sC=`#ifdef USE_IRIDESCENCE
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
#endif`,oC=`#ifdef USE_BUMPMAP
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
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_C=`#define PI 3.141592653589793
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
} // validated`,gC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vC=`vec3 transformedNormal = objectNormal;
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
#endif`,xC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EC="gl_FragColor = linearToOutputTexel( gl_FragColor );",TC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bC=`#ifdef USE_ENVMAP
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
#endif`,AC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RC=`#ifdef USE_ENVMAP
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
#endif`,CC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wC=`#ifdef USE_ENVMAP
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
#endif`,DC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OC=`#ifdef USE_GRADIENTMAP
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
}`,PC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BC=`uniform bool receiveShadow;
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
#endif`,IC=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,HC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,WC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qC=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,YC=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$C=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n3=`#if defined( USE_POINTS_UV )
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
#endif`,i3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`#ifdef USE_MORPHTARGETS
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
#endif`,u3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m3=`#ifdef USE_NORMALMAP
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
#endif`,_3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U3=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,L3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N3=`#ifdef USE_SKINNING
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
#endif`,O3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P3=`#ifdef USE_SKINNING
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
#endif`,z3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H3=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G3=`#ifdef USE_TRANSMISSION
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y3=`uniform sampler2D t2D;
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
}`,Z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J3=`#include <common>
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
}`,$3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,t2=`#define DISTANCE
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
}`,e2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`uniform float scale;
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
}`,r2=`uniform vec3 diffuse;
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
}`,s2=`#include <common>
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
}`,o2=`uniform vec3 diffuse;
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
}`,l2=`#define LAMBERT
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
}`,u2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,c2=`#define MATCAP
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
}`,f2=`#define MATCAP
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
}`,h2=`#define NORMAL
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
}`,d2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p2=`#define PHONG
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
}`,m2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,_2=`#define STANDARD
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
}`,g2=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,v2=`#define TOON
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
}`,x2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,S2=`uniform float size;
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
}`,y2=`uniform vec3 diffuse;
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
}`,M2=`#include <common>
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
}`,E2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,T2=`uniform float rotation;
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
}`,b2=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:YR,alphahash_pars_fragment:ZR,alphamap_fragment:jR,alphamap_pars_fragment:KR,alphatest_fragment:QR,alphatest_pars_fragment:JR,aomap_fragment:$R,aomap_pars_fragment:tC,batching_pars_vertex:eC,batching_vertex:nC,begin_vertex:iC,beginnormal_vertex:aC,bsdfs:rC,iridescence_fragment:sC,bumpmap_pars_fragment:oC,clipping_planes_fragment:lC,clipping_planes_pars_fragment:uC,clipping_planes_pars_vertex:cC,clipping_planes_vertex:fC,color_fragment:hC,color_pars_fragment:dC,color_pars_vertex:pC,color_vertex:mC,common:_C,cube_uv_reflection_fragment:gC,defaultnormal_vertex:vC,displacementmap_pars_vertex:xC,displacementmap_vertex:SC,emissivemap_fragment:yC,emissivemap_pars_fragment:MC,colorspace_fragment:EC,colorspace_pars_fragment:TC,envmap_fragment:bC,envmap_common_pars_fragment:AC,envmap_pars_fragment:RC,envmap_pars_vertex:CC,envmap_physical_pars_fragment:IC,envmap_vertex:wC,fog_vertex:DC,fog_pars_vertex:UC,fog_fragment:LC,fog_pars_fragment:NC,gradientmap_pars_fragment:OC,lightmap_pars_fragment:PC,lights_lambert_fragment:zC,lights_lambert_pars_fragment:FC,lights_pars_begin:BC,lights_toon_fragment:HC,lights_toon_pars_fragment:GC,lights_phong_fragment:VC,lights_phong_pars_fragment:kC,lights_physical_fragment:XC,lights_physical_pars_fragment:WC,lights_fragment_begin:qC,lights_fragment_maps:YC,lights_fragment_end:ZC,logdepthbuf_fragment:jC,logdepthbuf_pars_fragment:KC,logdepthbuf_pars_vertex:QC,logdepthbuf_vertex:JC,map_fragment:$C,map_pars_fragment:t3,map_particle_fragment:e3,map_particle_pars_fragment:n3,metalnessmap_fragment:i3,metalnessmap_pars_fragment:a3,morphinstance_vertex:r3,morphcolor_vertex:s3,morphnormal_vertex:o3,morphtarget_pars_vertex:l3,morphtarget_vertex:u3,normal_fragment_begin:c3,normal_fragment_maps:f3,normal_pars_fragment:h3,normal_pars_vertex:d3,normal_vertex:p3,normalmap_pars_fragment:m3,clearcoat_normal_fragment_begin:_3,clearcoat_normal_fragment_maps:g3,clearcoat_pars_fragment:v3,iridescence_pars_fragment:x3,opaque_fragment:S3,packing:y3,premultiplied_alpha_fragment:M3,project_vertex:E3,dithering_fragment:T3,dithering_pars_fragment:b3,roughnessmap_fragment:A3,roughnessmap_pars_fragment:R3,shadowmap_pars_fragment:C3,shadowmap_pars_vertex:w3,shadowmap_vertex:D3,shadowmask_pars_fragment:U3,skinbase_vertex:L3,skinning_pars_vertex:N3,skinning_vertex:O3,skinnormal_vertex:P3,specularmap_fragment:z3,specularmap_pars_fragment:F3,tonemapping_fragment:B3,tonemapping_pars_fragment:I3,transmission_fragment:H3,transmission_pars_fragment:G3,uv_pars_fragment:V3,uv_pars_vertex:k3,uv_vertex:X3,worldpos_vertex:W3,background_vert:q3,background_frag:Y3,backgroundCube_vert:Z3,backgroundCube_frag:j3,cube_vert:K3,cube_frag:Q3,depth_vert:J3,depth_frag:$3,distance_vert:t2,distance_frag:e2,equirect_vert:n2,equirect_frag:i2,linedashed_vert:a2,linedashed_frag:r2,meshbasic_vert:s2,meshbasic_frag:o2,meshlambert_vert:l2,meshlambert_frag:u2,meshmatcap_vert:c2,meshmatcap_frag:f2,meshnormal_vert:h2,meshnormal_frag:d2,meshphong_vert:p2,meshphong_frag:m2,meshphysical_vert:_2,meshphysical_frag:g2,meshtoon_vert:v2,meshtoon_frag:x2,points_vert:S2,points_frag:y2,shadow_vert:M2,shadow_frag:E2,sprite_vert:T2,sprite_frag:b2},kt={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new nn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new nn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},or={basic:{uniforms:Ni([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Ni([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new je(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Ni([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Ni([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Ni([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new je(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Ni([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Ni([kt.points,kt.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Ni([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Ni([kt.common,kt.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Ni([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Ni([kt.sprite,kt.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distance:{uniforms:Ni([kt.common,kt.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distance_vert,fragmentShader:Ce.distance_frag},shadow:{uniforms:Ni([kt.lights,kt.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};or.physical={uniforms:Ni([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new nn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new nn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new nn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Ch={r:0,b:0,g:0},_o=new $r,A2=new Dn;function R2(o,t,n,a,r,l,c){const f=new je(0);let p=l===!0?0:1,d,_,g=null,v=0,x=null;function E(O){let C=O.isScene===!0?O.background:null;return C&&C.isTexture&&(C=(O.backgroundBlurriness>0?n:t).get(C)),C}function M(O){let C=!1;const L=E(O);L===null?S(f,p):L&&L.isColor&&(S(L,1),C=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,C){const L=E(C);L&&(L.isCubeTexture||L.mapping===xd)?(_===void 0&&(_=new ts(new jc(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:eu(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,w,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),_o.copy(C.backgroundRotation),_o.x*=-1,_o.y*=-1,_o.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_o.y*=-1,_o.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(A2.makeRotationFromEuler(_o)),_.material.toneMapped=Xe.getTransfer(L.colorSpace)!==ln,(g!==L||v!==L.version||x!==o.toneMapping)&&(_.material.needsUpdate=!0,g=L,v=L.version,x=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new ts(new yd(2,2),new Qa({name:"BackgroundMaterial",uniforms:eu(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(L.colorSpace)!==ln,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,g=L,v=L.version,x=o.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null))}function S(O,C){O.getRGB(Ch,C1(o)),a.buffers.color.setClear(Ch.r,Ch.g,Ch.b,C,c)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(O,C=1){f.set(O),p=C,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,S(f,p)},render:M,addToRenderList:y,dispose:U}}function C2(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,c=!1;function f(R,I,k,j,it){let et=!1;const F=g(j,k,I);l!==F&&(l=F,d(l.object)),et=x(R,j,k,it),et&&E(R,j,k,it),it!==null&&t.update(it,o.ELEMENT_ARRAY_BUFFER),(et||c)&&(c=!1,C(R,I,k,j),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function p(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,I,k){const j=k.wireframe===!0;let it=a[R.id];it===void 0&&(it={},a[R.id]=it);let et=it[I.id];et===void 0&&(et={},it[I.id]=et);let F=et[j];return F===void 0&&(F=v(p()),et[j]=F),F}function v(R){const I=[],k=[],j=[];for(let it=0;it<n;it++)I[it]=0,k[it]=0,j[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:j,object:R,attributes:{},index:null}}function x(R,I,k,j){const it=l.attributes,et=I.attributes;let F=0;const G=k.getAttributes();for(const Q in G)if(G[Q].location>=0){const H=it[Q];let z=et[Q];if(z===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),H===void 0||H.attribute!==z||z&&H.data!==z.data)return!0;F++}return l.attributesNum!==F||l.index!==j}function E(R,I,k,j){const it={},et=I.attributes;let F=0;const G=k.getAttributes();for(const Q in G)if(G[Q].location>=0){let H=et[Q];H===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(H=R.instanceColor));const z={};z.attribute=H,H&&H.data&&(z.data=H.data),it[Q]=z,F++}l.attributes=it,l.attributesNum=F,l.index=j}function M(){const R=l.newAttributes;for(let I=0,k=R.length;I<k;I++)R[I]=0}function y(R){S(R,0)}function S(R,I){const k=l.newAttributes,j=l.enabledAttributes,it=l.attributeDivisors;k[R]=1,j[R]===0&&(o.enableVertexAttribArray(R),j[R]=1),it[R]!==I&&(o.vertexAttribDivisor(R,I),it[R]=I)}function U(){const R=l.newAttributes,I=l.enabledAttributes;for(let k=0,j=I.length;k<j;k++)I[k]!==R[k]&&(o.disableVertexAttribArray(k),I[k]=0)}function O(R,I,k,j,it,et,F){F===!0?o.vertexAttribIPointer(R,I,k,it,et):o.vertexAttribPointer(R,I,k,j,it,et)}function C(R,I,k,j){M();const it=j.attributes,et=k.getAttributes(),F=I.defaultAttributeValues;for(const G in et){const Q=et[G];if(Q.location>=0){let gt=it[G];if(gt===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const H=gt.normalized,z=gt.itemSize,nt=t.get(gt);if(nt===void 0)continue;const mt=nt.buffer,Mt=nt.type,wt=nt.bytesPerElement,$=Mt===o.INT||Mt===o.UNSIGNED_INT||gt.gpuType===J0;if(gt.isInterleavedBufferAttribute){const st=gt.data,At=st.stride,Ot=gt.offset;if(st.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Q.locationSize;Dt++)S(Q.location+Dt,st.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<Q.locationSize;Dt++)y(Q.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Dt=0;Dt<Q.locationSize;Dt++)O(Q.location+Dt,z/Q.locationSize,Mt,H,At*wt,(Ot+z/Q.locationSize*Dt)*wt,$)}else{if(gt.isInstancedBufferAttribute){for(let st=0;st<Q.locationSize;st++)S(Q.location+st,gt.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let st=0;st<Q.locationSize;st++)y(Q.location+st);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let st=0;st<Q.locationSize;st++)O(Q.location+st,z/Q.locationSize,Mt,H,z*wt,z/Q.locationSize*st*wt,$)}}else if(F!==void 0){const H=F[G];if(H!==void 0)switch(H.length){case 2:o.vertexAttrib2fv(Q.location,H);break;case 3:o.vertexAttrib3fv(Q.location,H);break;case 4:o.vertexAttrib4fv(Q.location,H);break;default:o.vertexAttrib1fv(Q.location,H)}}}}U()}function L(){V();for(const R in a){const I=a[R];for(const k in I){const j=I[k];for(const it in j)_(j[it].object),delete j[it];delete I[k]}delete a[R]}}function P(R){if(a[R.id]===void 0)return;const I=a[R.id];for(const k in I){const j=I[k];for(const it in j)_(j[it].object),delete j[it];delete I[k]}delete a[R.id]}function w(R){for(const I in a){const k=a[I];if(k[R.id]===void 0)continue;const j=k[R.id];for(const it in j)_(j[it].object),delete j[it];delete k[R.id]}}function V(){b(),c=!0,l!==r&&(l=r,d(l.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:V,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:y,disableUnusedAttributes:U}}function w2(o,t,n){let a;function r(d){a=d}function l(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let x=0;for(let E=0;E<g;E++)x+=_[E];n.update(x,a,1)}function p(d,_,g,v){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)c(d[E],_[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M]*v[M];n.update(E,a,1)}}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function D2(o,t,n,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(w){return!(w!==Ka&&a.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(w){const V=w===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ma&&a.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ur&&!V)}function p(w){if(w==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(xe("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:C,maxSamples:L,samples:P}}function U2(o){const t=this;let n=null,a=0,r=!1,l=!1;const c=new So,f=new Re,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||a!==0||r;return r=v,a=g.length,x},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,S=o.get(g);if(!r||E===null||E.length===0||l&&!y)l?_(null):d();else{const U=l?0:a,O=U*4;let C=S.clippingState||null;p.value=C,C=_(E,v,O,x);for(let L=0;L!==O;++L)C[L]=n[L];S.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,x,E){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=p.value,E!==!0||y===null){const S=x+M*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,C=x;O!==M;++O,C+=4)c.copy(g[O]).applyMatrix4(U,f),c.normal.toArray(y,C),y[C+3]=c.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function L2(o){let t=new WeakMap;function n(c,f){return f===G_?c.mapping=Bo:f===V_&&(c.mapping=Jl),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===G_||f===V_)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new U1(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",r),n(d.texture,c.mapping)}else return null}}return c}function r(c){const f=c.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Os=4,$y=[.125,.215,.35,.446,.526,.582],bo=20,N2=256,rc=new O1,tM=new je;let u_=null,c_=0,f_=0,h_=!1;const O2=new ft;class eM{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,l={}){const{size:c=256,position:f=O2}=l;u_=this._renderer.getRenderTarget(),c_=this._renderer.getActiveCubeFace(),f_=this._renderer.getActiveMipmapLevel(),h_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=aM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(u_,c_,f_),this._renderer.xr.enabled=h_,t.scissorTest=!1,Ol(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Bo||t.mapping===Jl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),u_=this._renderer.getRenderTarget(),c_=this._renderer.getActiveCubeFace(),f_=this._renderer.getActiveMipmapLevel(),h_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Qr,format:Ka,colorSpace:tu,depthBuffer:!1},r=nM(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nM(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P2(l)),this._blurMaterial=F2(l,t,n),this._ggxMaterial=z2(l,t,n)}return r}_compileMaterial(t){const n=new ts(new Ja,t);this._renderer.compile(n,rc)}_sceneToCubeUV(t,n,a,r,l){const p=new da(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(tM),g.toneMapping=dr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ts(new jc,new b1({name:"PMREM.Background",side:ji,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let S=!1;const U=t.background;U?U.isColor&&(y.color.copy(U),t.background=null,S=!0):(y.color.copy(tM),S=!0);for(let O=0;O<6;O++){const C=O%3;C===0?(p.up.set(0,d[O],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[O],l.y,l.z)):C===1?(p.up.set(0,0,d[O]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[O],l.z)):(p.up.set(0,d[O],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[O]));const L=this._cubeSize;Ol(r,C*L,O>2?L:0,L,L),g.setRenderTarget(r),S&&g.render(M,p),g.render(t,p)}g.toneMapping=x,g.autoClear=v,t.background=U}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Bo||t.mapping===Jl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=aM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iM());const l=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Ol(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,rc)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,x=g*v,{_lodMax:E}=this,M=this._sizeLods[a],y=3*M*(a>E-Os?a-E+Os:0),S=4*(this._cubeSize-M);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=E-n,Ol(l,y,S,3*M,2*M),r.setRenderTarget(l),r.render(f,rc),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=E-a,Ol(t,y,S,3*M,2*M),r.setRenderTarget(t),r.render(f,rc)}_blur(t,n,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,r,"latitudinal",l),this._halfBlur(c,t,a,a,r,"longitudinal",l)}_halfBlur(t,n,a,r,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[r];g.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*bo-1),M=l/E,y=isFinite(l)?1+Math.floor(_*M):bo;y>bo&&xe(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${bo}`);const S=[];let U=0;for(let w=0;w<bo;++w){const V=w/M,b=Math.exp(-V*V/2);S.push(b),w===0?U+=b:w<y&&(U+=2*b)}for(let w=0;w<S.length;w++)S[w]=S[w]/U;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:O}=this;v.dTheta.value=E,v.mipInt.value=O-a;const C=this._sizeLods[r],L=3*C*(r>O-Os?r-O+Os:0),P=4*(this._cubeSize-C);Ol(n,L,P,3*C,2*C),p.setRenderTarget(n),p.render(g,rc)}}function P2(o){const t=[],n=[],a=[];let r=o;const l=o-Os+1+$y.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);t.push(f);let p=1/f;c>o-Os?p=$y[c-o+Os-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,E=6,M=3,y=2,S=1,U=new Float32Array(M*E*x),O=new Float32Array(y*E*x),C=new Float32Array(S*E*x);for(let P=0;P<x;P++){const w=P%3*2/3-1,V=P>2?0:-1,b=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];U.set(b,M*E*P),O.set(v,y*E*P);const R=[P,P,P,P,P,P];C.set(R,S*E*P)}const L=new Ja;L.setAttribute("position",new Fi(U,M)),L.setAttribute("uv",new Fi(O,y)),L.setAttribute("faceIndex",new Fi(C,S)),a.push(new ts(L,null)),r>Os&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function nM(o,t,n){const a=new pr(o,t,n);return a.texture.mapping=xd,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ol(o,t,n,a,r){o.viewport.set(t,n,a,r),o.scissor.set(t,n,a,r)}function z2(o,t,n){return new Qa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Md(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function F2(o,t,n){const a=new Float32Array(bo),r=new ft(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:bo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function iM(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function aM(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Md(){return`

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
	`}function B2(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===G_||p===V_,_=p===Bo||p===Jl;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new eM(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return d&&x&&x.height>0||_&&x&&r(x)?(n===null&&(n=new eM(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function I2(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=o.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Oc("WebGLRenderer: "+a+" extension not supported."),r}}}function H2(o,t,n,a){const r={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete r[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",c),r[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const U=x.array;M=x.version;for(let O=0,C=U.length;O<C;O+=3){const L=U[O+0],P=U[O+1],w=U[O+2];v.push(L,P,P,w,w,L)}}else if(E!==void 0){const U=E.array;M=E.version;for(let O=0,C=U.length/3-1;O<C;O+=3){const L=O+0,P=O+1,w=O+2;v.push(L,P,P,w,w,L)}}else return;const y=new(S1(v)?R1:A1)(v,1);y.version=M;const S=l.get(g);S&&t.remove(S),l.set(g,y)}function _(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function G2(o,t,n){let a;function r(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,x){o.drawElements(a,x,l,v*c),n.update(x,a,1)}function d(v,x,E){E!==0&&(o.drawElementsInstanced(a,x,l,v*c,E),n.update(x,a,E))}function _(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,v,0,E);let y=0;for(let S=0;S<E;S++)y+=x[S];n.update(y,a,1)}function g(v,x,E,M){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)d(v[S]/c,x[S],M[S]);else{y.multiDrawElementsInstancedWEBGL(a,x,0,l,v,0,M,0,E);let S=0;for(let U=0;U<E;U++)S+=x[U]*M[U];n.update(S,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function V2(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:Ze("WebGLInfo: Unknown draw mode:",c);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function k2(o,t,n){const a=new WeakMap,r=new Nn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let R=function(){V.dispose(),a.delete(f),f.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),y===!0&&(C=3);let L=f.attributes.position.count*C,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*P*4*g),V=new y1(w,L,P,g);V.type=ur,V.needsUpdate=!0;const b=C*4;for(let I=0;I<g;I++){const k=S[I],j=U[I],it=O[I],et=L*P*4*I;for(let F=0;F<k.count;F++){const G=F*b;E===!0&&(r.fromBufferAttribute(k,F),w[et+G+0]=r.x,w[et+G+1]=r.y,w[et+G+2]=r.z,w[et+G+3]=0),M===!0&&(r.fromBufferAttribute(j,F),w[et+G+4]=r.x,w[et+G+5]=r.y,w[et+G+6]=r.z,w[et+G+7]=0),y===!0&&(r.fromBufferAttribute(it,F),w[et+G+8]=r.x,w[et+G+9]=r.y,w[et+G+10]=r.z,w[et+G+11]=it.itemSize===4?r.w:1)}}v={count:g,texture:V,size:new nn(L,P)},a.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function X2(o,t,n,a){let r=new WeakMap;function l(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return g}function c(){r=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const W2={[r1]:"LINEAR_TONE_MAPPING",[s1]:"REINHARD_TONE_MAPPING",[o1]:"CINEON_TONE_MAPPING",[l1]:"ACES_FILMIC_TONE_MAPPING",[c1]:"AGX_TONE_MAPPING",[f1]:"NEUTRAL_TONE_MAPPING",[u1]:"CUSTOM_TONE_MAPPING"};function q2(o,t,n,a,r){const l=new pr(t,n,{type:o,depthBuffer:a,stencilBuffer:r}),c=new pr(t,n,{type:Qr,depthBuffer:!1,stencilBuffer:!1}),f=new Ja;f.setAttribute("position",new jr([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new jr([0,2,0,0,2,0],2));const p=new FR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ts(f,p),_=new O1(-1,1,1,-1,0,1);let g=null,v=null,x=!1,E,M=null,y=[],S=!1;this.setSize=function(U,O){l.setSize(U,O),c.setSize(U,O);for(let C=0;C<y.length;C++){const L=y[C];L.setSize&&L.setSize(U,O)}},this.setEffects=function(U){y=U,S=y.length>0&&y[0].isRenderPass===!0;const O=l.width,C=l.height;for(let L=0;L<y.length;L++){const P=y[L];P.setSize&&P.setSize(O,C)}},this.begin=function(U,O){if(x||U.toneMapping===dr&&y.length===0)return!1;if(M=O,O!==null){const C=O.width,L=O.height;(l.width!==C||l.height!==L)&&this.setSize(C,L)}return S===!1&&U.setRenderTarget(l),E=U.toneMapping,U.toneMapping=dr,!0},this.hasRenderPass=function(){return S},this.end=function(U,O){U.toneMapping=E,x=!0;let C=l,L=c;for(let P=0;P<y.length;P++){const w=y[P];if(w.enabled!==!1&&(w.render(U,L,C,O),w.needsSwap!==!1)){const V=C;C=L,L=V}}if(g!==U.outputColorSpace||v!==U.toneMapping){g=U.outputColorSpace,v=U.toneMapping,p.defines={},Xe.getTransfer(g)===ln&&(p.defines.SRGB_TRANSFER="");const P=W2[v];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,U.setRenderTarget(M),U.render(d,_),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const z1=new Hi,T0=new Pc(1,1),F1=new y1,B1=new fR,I1=new D1,rM=[],sM=[],oM=new Float32Array(16),lM=new Float32Array(9),uM=new Float32Array(4);function cu(o,t,n){const a=o[0];if(a<=0||a>0)return o;const r=t*n;let l=rM[r];if(l===void 0&&(l=new Float32Array(r),rM[r]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Qn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Jn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Ed(o,t){let n=sM[t];n===void 0&&(n=new Int32Array(t),sM[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function Y2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function Z2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qn(n,t))return;o.uniform2fv(this.addr,t),Jn(n,t)}}function j2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qn(n,t))return;o.uniform3fv(this.addr,t),Jn(n,t)}}function K2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qn(n,t))return;o.uniform4fv(this.addr,t),Jn(n,t)}}function Q2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Qn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Jn(n,t)}else{if(Qn(n,a))return;uM.set(a),o.uniformMatrix2fv(this.addr,!1,uM),Jn(n,a)}}function J2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Qn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Jn(n,t)}else{if(Qn(n,a))return;lM.set(a),o.uniformMatrix3fv(this.addr,!1,lM),Jn(n,a)}}function $2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Qn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Jn(n,t)}else{if(Qn(n,a))return;oM.set(a),o.uniformMatrix4fv(this.addr,!1,oM),Jn(n,a)}}function tw(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function ew(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qn(n,t))return;o.uniform2iv(this.addr,t),Jn(n,t)}}function nw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qn(n,t))return;o.uniform3iv(this.addr,t),Jn(n,t)}}function iw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qn(n,t))return;o.uniform4iv(this.addr,t),Jn(n,t)}}function aw(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function rw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qn(n,t))return;o.uniform2uiv(this.addr,t),Jn(n,t)}}function sw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qn(n,t))return;o.uniform3uiv(this.addr,t),Jn(n,t)}}function ow(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qn(n,t))return;o.uniform4uiv(this.addr,t),Jn(n,t)}}function lw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(T0.compareFunction=n.isReversedDepthBuffer()?rg:ag,l=T0):l=z1,n.setTexture2D(t||l,r)}function uw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||B1,r)}function cw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||I1,r)}function fw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||F1,r)}function hw(o){switch(o){case 5126:return Y2;case 35664:return Z2;case 35665:return j2;case 35666:return K2;case 35674:return Q2;case 35675:return J2;case 35676:return $2;case 5124:case 35670:return tw;case 35667:case 35671:return ew;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return aw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return fw}}function dw(o,t){o.uniform1fv(this.addr,t)}function pw(o,t){const n=cu(t,this.size,2);o.uniform2fv(this.addr,n)}function mw(o,t){const n=cu(t,this.size,3);o.uniform3fv(this.addr,n)}function _w(o,t){const n=cu(t,this.size,4);o.uniform4fv(this.addr,n)}function gw(o,t){const n=cu(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function vw(o,t){const n=cu(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function xw(o,t){const n=cu(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Sw(o,t){o.uniform1iv(this.addr,t)}function yw(o,t){o.uniform2iv(this.addr,t)}function Mw(o,t){o.uniform3iv(this.addr,t)}function Ew(o,t){o.uniform4iv(this.addr,t)}function Tw(o,t){o.uniform1uiv(this.addr,t)}function bw(o,t){o.uniform2uiv(this.addr,t)}function Aw(o,t){o.uniform3uiv(this.addr,t)}function Rw(o,t){o.uniform4uiv(this.addr,t)}function Cw(o,t,n){const a=this.cache,r=t.length,l=Ed(n,r);Qn(a,l)||(o.uniform1iv(this.addr,l),Jn(a,l));let c;this.type===o.SAMPLER_2D_SHADOW?c=T0:c=z1;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||c,l[f])}function ww(o,t,n){const a=this.cache,r=t.length,l=Ed(n,r);Qn(a,l)||(o.uniform1iv(this.addr,l),Jn(a,l));for(let c=0;c!==r;++c)n.setTexture3D(t[c]||B1,l[c])}function Dw(o,t,n){const a=this.cache,r=t.length,l=Ed(n,r);Qn(a,l)||(o.uniform1iv(this.addr,l),Jn(a,l));for(let c=0;c!==r;++c)n.setTextureCube(t[c]||I1,l[c])}function Uw(o,t,n){const a=this.cache,r=t.length,l=Ed(n,r);Qn(a,l)||(o.uniform1iv(this.addr,l),Jn(a,l));for(let c=0;c!==r;++c)n.setTexture2DArray(t[c]||F1,l[c])}function Lw(o){switch(o){case 5126:return dw;case 35664:return pw;case 35665:return mw;case 35666:return _w;case 35674:return gw;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return Sw;case 35667:case 35671:return yw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return Tw;case 36294:return bw;case 36295:return Aw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Nw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=hw(n.type)}}class Ow{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Lw(n.type)}}class Pw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(t,n[f.id],a)}}}const d_=/(\w+)(\])?(\[|\.)?/g;function cM(o,t){o.seq.push(t),o.map[t.id]=t}function zw(o,t,n){const a=o.name,r=a.length;for(d_.lastIndex=0;;){const l=d_.exec(a),c=d_.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===r){cM(n,d===void 0?new Nw(f,o,t):new Ow(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new Pw(f),cM(n,g)),n=g}}}class Zh{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);zw(f,p,this)}const r=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):l.push(c);r.length>0&&(this.seq=r.concat(l))}setValue(t,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,l=t.length;r!==l;++r){const c=t[r];c.id in n&&a.push(c)}return a}}function fM(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const Fw=37297;let Bw=0;function Iw(o,t){const n=o.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const hM=new Re;function Hw(o){Xe._getMatrix(hM,Xe.workingColorSpace,o);const t=`mat3( ${hM.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(o)){case ad:return[t,"LinearTransferOETF"];case ln:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function dM(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+Iw(o.getShaderSource(t),f)}else return l}function Gw(o,t){const n=Hw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Vw={[r1]:"Linear",[s1]:"Reinhard",[o1]:"Cineon",[l1]:"ACESFilmic",[c1]:"AgX",[f1]:"Neutral",[u1]:"Custom"};function kw(o,t){const n=Vw[t];return n===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wh=new ft;function Xw(){Xe.getLuminanceCoefficients(wh);const o=wh.x.toFixed(4),t=wh.y.toFixed(4),n=wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fc).join(`
`)}function qw(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Yw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(t,r),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function fc(o){return o!==""}function pM(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mM(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function b0(o){return o.replace(Zw,Kw)}const jw=new Map;function Kw(o,t){let n=Ce[t];if(n===void 0){const a=jw.get(t);if(a!==void 0)n=Ce[a],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return b0(n)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _M(o){return o.replace(Qw,Jw)}function Jw(o,t,n,a){let r="";for(let l=parseInt(t);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function gM(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const $w={[kh]:"SHADOWMAP_TYPE_PCF",[cc]:"SHADOWMAP_TYPE_VSM"};function tD(o){return $w[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eD={[Bo]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE",[xd]:"ENVMAP_TYPE_CUBE_UV"};function nD(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":eD[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const iD={[Jl]:"ENVMAP_MODE_REFRACTION"};function aD(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":iD[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rD={[a1]:"ENVMAP_BLENDING_MULTIPLY",[WA]:"ENVMAP_BLENDING_MIX",[qA]:"ENVMAP_BLENDING_ADD"};function sD(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":rD[o.combine]||"ENVMAP_BLENDING_NONE"}function oD(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function lD(o,t,n,a){const r=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=tD(n),d=nD(n),_=aD(n),g=sD(n),v=oD(n),x=Ww(n),E=qw(l),M=r.createProgram();let y,S,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(fc).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(fc).join(`
`),S.length>0&&(S+=`
`)):(y=[gM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fc).join(`
`),S=[gM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Ce.tonemapping_pars_fragment:"",n.toneMapping!==dr?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,Gw("linearToOutputTexel",n.outputColorSpace),Xw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fc).join(`
`)),c=b0(c),c=pM(c,n),c=mM(c,n),f=b0(f),f=pM(f,n),f=mM(f,n),c=_M(c),f=_M(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===wy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=U+y+c,C=U+S+f,L=fM(r,r.VERTEX_SHADER,O),P=fM(r,r.FRAGMENT_SHADER,C);r.attachShader(M,L),r.attachShader(M,P),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function w(I){if(o.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",j=r.getShaderInfoLog(L)||"",it=r.getShaderInfoLog(P)||"",et=k.trim(),F=j.trim(),G=it.trim();let Q=!0,gt=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,L,P);else{const H=dM(r,L,"vertex"),z=dM(r,P,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+et+`
`+H+`
`+z)}else et!==""?xe("WebGLProgram: Program Info Log:",et):(F===""||G==="")&&(gt=!1);gt&&(I.diagnostics={runnable:Q,programLog:et,vertexShader:{log:F,prefix:y},fragmentShader:{log:G,prefix:S}})}r.deleteShader(L),r.deleteShader(P),V=new Zh(r,M),b=Yw(r,M)}let V;this.getUniforms=function(){return V===void 0&&w(this),V};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(M,Fw)),R},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bw++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let uD=0;class cD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new fD(t),n.set(t,a)),a}}class fD{constructor(t){this.id=uD++,this.code=t,this.usedTimes=0}}function hD(o,t,n,a,r,l,c){const f=new E1,p=new cD,d=new Set,_=[],g=new Map,v=r.logarithmicDepthBuffer;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return d.add(b),b===0?"uv":`uv${b}`}function y(b,R,I,k,j){const it=k.fog,et=j.geometry,F=b.isMeshStandardMaterial?k.environment:null,G=(b.isMeshStandardMaterial?n:t).get(b.envMap||F),Q=G&&G.mapping===xd?G.image.height:null,gt=E[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&xe("WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const H=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,z=H!==void 0?H.length:0;let nt=0;et.morphAttributes.position!==void 0&&(nt=1),et.morphAttributes.normal!==void 0&&(nt=2),et.morphAttributes.color!==void 0&&(nt=3);let mt,Mt,wt,$;if(gt){const Gt=or[gt];mt=Gt.vertexShader,Mt=Gt.fragmentShader}else mt=b.vertexShader,Mt=b.fragmentShader,p.update(b),wt=p.getVertexShaderID(b),$=p.getFragmentShaderID(b);const st=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Ot=j.isInstancedMesh===!0,Dt=j.isBatchedMesh===!0,le=!!b.map,Ue=!!b.matcap,Yt=!!G,ne=!!b.aoMap,_e=!!b.lightMap,ae=!!b.bumpMap,ot=!!b.normalMap,q=!!b.displacementMap,ke=!!b.emissiveMap,Se=!!b.metalnessMap,ue=!!b.roughnessMap,qt=b.anisotropy>0,B=b.clearcoat>0,A=b.dispersion>0,Y=b.iridescence>0,pt=b.sheen>0,_t=b.transmission>0,ht=qt&&!!b.anisotropyMap,Wt=B&&!!b.clearcoatMap,Ut=B&&!!b.clearcoatNormalMap,jt=B&&!!b.clearcoatRoughnessMap,Zt=Y&&!!b.iridescenceMap,Tt=Y&&!!b.iridescenceThicknessMap,Rt=pt&&!!b.sheenColorMap,It=pt&&!!b.sheenRoughnessMap,Bt=!!b.specularMap,Lt=!!b.specularColorMap,de=!!b.specularIntensityMap,X=_t&&!!b.transmissionMap,Pt=_t&&!!b.thicknessMap,bt=!!b.gradientMap,zt=!!b.alphaMap,Et=b.alphaTest>0,xt=!!b.alphaHash,Ct=!!b.extensions;let se=dr;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(se=o.toneMapping);const Ie={shaderID:gt,shaderType:b.type,shaderName:b.name,vertexShader:mt,fragmentShader:Mt,defines:b.defines,customVertexShaderID:wt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Dt,batchingColor:Dt&&j._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&j.instanceColor!==null,instancingMorph:Ot&&j.morphTexture!==null,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:tu,alphaToCoverage:!!b.alphaToCoverage,map:le,matcap:Ue,envMap:Yt,envMapMode:Yt&&G.mapping,envMapCubeUVHeight:Q,aoMap:ne,lightMap:_e,bumpMap:ae,normalMap:ot,displacementMap:q,emissiveMap:ke,normalMapObjectSpace:ot&&b.normalMapType===KA,normalMapTangentSpace:ot&&b.normalMapType===jA,metalnessMap:Se,roughnessMap:ue,anisotropy:qt,anisotropyMap:ht,clearcoat:B,clearcoatMap:Wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:jt,dispersion:A,iridescence:Y,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:Rt,sheenRoughnessMap:It,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:de,transmission:_t,transmissionMap:X,thicknessMap:Pt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Do&&b.alphaToCoverage===!1,alphaMap:zt,alphaTest:Et,alphaHash:xt,combine:b.combine,mapUv:le&&M(b.map.channel),aoMapUv:ne&&M(b.aoMap.channel),lightMapUv:_e&&M(b.lightMap.channel),bumpMapUv:ae&&M(b.bumpMap.channel),normalMapUv:ot&&M(b.normalMap.channel),displacementMapUv:q&&M(b.displacementMap.channel),emissiveMapUv:ke&&M(b.emissiveMap.channel),metalnessMapUv:Se&&M(b.metalnessMap.channel),roughnessMapUv:ue&&M(b.roughnessMap.channel),anisotropyMapUv:ht&&M(b.anisotropyMap.channel),clearcoatMapUv:Wt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&M(b.sheenRoughnessMap.channel),specularMapUv:Bt&&M(b.specularMap.channel),specularColorMapUv:Lt&&M(b.specularColorMap.channel),specularIntensityMapUv:de&&M(b.specularIntensityMap.channel),transmissionMapUv:X&&M(b.transmissionMap.channel),thicknessMapUv:Pt&&M(b.thicknessMap.channel),alphaMapUv:zt&&M(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(ot||qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!et.attributes.uv&&(le||zt),fog:!!it,useFog:b.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:j.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:nt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:le&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===ln,decodeVideoTextureEmissive:ke&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===ln,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kr,flipSided:b.side===ji,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ct&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&b.extensions.multiDraw===!0||Dt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=d.has(1),Ie.vertexUv2s=d.has(2),Ie.vertexUv3s=d.has(3),d.clear(),Ie}function S(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)R.push(I),R.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(U(R,b),O(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function U(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function O(b,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=E[b.type];let I;if(R){const k=or[R];I=TR.clone(k.uniforms)}else I=b.uniforms;return I}function L(b,R){let I=g.get(R);return I!==void 0?++I.usedTimes:(I=new lD(o,R,b,l),_.push(I),g.set(R,I)),I}function P(b){if(--b.usedTimes===0){const R=_.indexOf(b);_[R]=_[_.length-1],_.pop(),g.delete(b.cacheKey),b.destroy()}}function w(b){p.remove(b)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:C,acquireProgram:L,releaseProgram:P,releaseShaderCache:w,programs:_,dispose:V}}function dD(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function r(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:l}}function pD(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function vM(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function xM(){const o=[];let t=0;const n=[],a=[],r=[];function l(){t=0,n.length=0,a.length=0,r.length=0}function c(g,v,x,E,M,y){let S=o[t];return S===void 0?(S={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:y},o[t]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=x,S.groupOrder=E,S.renderOrder=g.renderOrder,S.z=M,S.group=y),t++,S}function f(g,v,x,E,M,y){const S=c(g,v,x,E,M,y);x.transmission>0?a.push(S):x.transparent===!0?r.push(S):n.push(S)}function p(g,v,x,E,M,y){const S=c(g,v,x,E,M,y);x.transmission>0?a.unshift(S):x.transparent===!0?r.unshift(S):n.unshift(S)}function d(g,v){n.length>1&&n.sort(g||pD),a.length>1&&a.sort(v||vM),r.length>1&&r.sort(v||vM)}function _(){for(let g=t,v=o.length;g<v;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:f,unshift:p,finish:_,sort:d}}function mD(){let o=new WeakMap;function t(a,r){const l=o.get(a);let c;return l===void 0?(c=new xM,o.set(a,[c])):r>=l.length?(c=new xM,l.push(c)):c=l[r],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function _D(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ft,color:new je};break;case"SpotLight":n={position:new ft,direction:new ft,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ft,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ft,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return o[t.id]=n,n}}}function gD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let vD=0;function xD(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function SD(o){const t=new _D,n=gD(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ft);const r=new ft,l=new Dn,c=new Dn;function f(d){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let x=0,E=0,M=0,y=0,S=0,U=0,O=0,C=0,L=0,P=0,w=0;d.sort(xD);for(let b=0,R=d.length;b<R;b++){const I=d[b],k=I.color,j=I.intensity,it=I.distance;let et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$l?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)_+=k.r*j,g+=k.g*j,v+=k.b*j;else if(I.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(I.sh.coefficients[F],j);w++}else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Q=n.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,a.directionalShadow[x]=Q,a.directionalShadowMap[x]=et,a.directionalShadowMatrix[x]=I.shadow.matrix,U++}a.directional[x]=F,x++}else if(I.isSpotLight){const F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(k).multiplyScalar(j),F.distance=it,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,a.spot[M]=F;const G=I.shadow;if(I.map&&(a.spotLightMap[L]=I.map,L++,G.updateMatrices(I),I.castShadow&&P++),a.spotLightMatrix[M]=G.matrix,I.castShadow){const Q=n.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,a.spotShadow[M]=Q,a.spotShadowMap[M]=et,C++}M++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(k).multiplyScalar(j),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),a.rectArea[y]=F,y++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const G=I.shadow,Q=n.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,a.pointShadow[E]=Q,a.pointShadowMap[E]=et,a.pointShadowMatrix[E]=I.shadow.matrix,O++}a.point[E]=F,E++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(j),F.groundColor.copy(I.groundColor).multiplyScalar(j),a.hemi[S]=F,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=kt.LTC_FLOAT_1,a.rectAreaLTC2=kt.LTC_FLOAT_2):(a.rectAreaLTC1=kt.LTC_HALF_1,a.rectAreaLTC2=kt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const V=a.hash;(V.directionalLength!==x||V.pointLength!==E||V.spotLength!==M||V.rectAreaLength!==y||V.hemiLength!==S||V.numDirectionalShadows!==U||V.numPointShadows!==O||V.numSpotShadows!==C||V.numSpotMaps!==L||V.numLightProbes!==w)&&(a.directional.length=x,a.spot.length=M,a.rectArea.length=y,a.point.length=E,a.hemi.length=S,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=O,a.pointShadowMap.length=O,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=O,a.spotLightMatrix.length=C+L-P,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=w,V.directionalLength=x,V.pointLength=E,V.spotLength=M,V.rectAreaLength=y,V.hemiLength=S,V.numDirectionalShadows=U,V.numPointShadows=O,V.numSpotShadows=C,V.numSpotMaps=L,V.numLightProbes=w,a.version=vD++)}function p(d,_){let g=0,v=0,x=0,E=0,M=0;const y=_.matrixWorldInverse;for(let S=0,U=d.length;S<U;S++){const O=d[S];if(O.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(y),g++}else if(O.isSpotLight){const C=a.spot[x];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(y),x++}else if(O.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(O.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(O.width*.5,0,0),C.halfHeight.set(0,O.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(O.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),v++}else if(O.isHemisphereLight){const C=a.hemi[M];C.direction.setFromMatrixPosition(O.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:f,setupView:p,state:a}}function SM(o){const t=new SD(o),n=[],a=[];function r(_){d.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function yD(o){let t=new WeakMap;function n(r,l=0){const c=t.get(r);let f;return c===void 0?(f=new SM(o),t.set(r,[f])):l>=c.length?(f=new SM(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const MD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ED=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TD=[new ft(1,0,0),new ft(-1,0,0),new ft(0,1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1)],bD=[new ft(0,-1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1),new ft(0,-1,0),new ft(0,-1,0)],yM=new Dn,sc=new ft,p_=new ft;function AD(o,t,n){let a=new lg;const r=new nn,l=new nn,c=new Nn,f=new BR,p=new IR,d={},_=n.maxTextureSize,g={[ks]:ji,[ji]:ks,[kr]:kr},v=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nn},radius:{value:4}},vertexShader:MD,fragmentShader:ED}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ja;E.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ts(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let S=this.type;this.render=function(P,w,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;P.type===AA&&(xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=kh);const b=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),k=o.state;k.setBlending(Yr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=S!==this.type;j&&w.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(et=>et.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,et=P.length;it<et;it++){const F=P[it],G=F.shadow;if(G===void 0){xe("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Q=G.getFrameExtents();if(r.multiply(Q),l.copy(G.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/Q.x),r.x=l.x*Q.x,G.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/Q.y),r.y=l.y*Q.y,G.mapSize.y=l.y)),G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===cc){if(F.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new pr(r.x,r.y,{format:$l,type:Qr,minFilter:Ci,magFilter:Ci,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new Pc(r.x,r.y,ur),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Jr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=mi,G.map.depthTexture.magFilter=mi}else{F.isPointLight?(G.map=new U1(r.x),G.map.depthTexture=new zR(r.x,_r)):(G.map=new pr(r.x,r.y),G.map.depthTexture=new Pc(r.x,r.y,_r)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Jr;const H=o.state.buffers.depth.getReversed();this.type===kh?(G.map.depthTexture.compareFunction=H?rg:ag,G.map.depthTexture.minFilter=Ci,G.map.depthTexture.magFilter=Ci):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=mi,G.map.depthTexture.magFilter=mi)}G.camera.updateProjectionMatrix()}const gt=G.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<gt;H++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,H),o.clear();else{H===0&&(o.setRenderTarget(G.map),o.clear());const z=G.getViewport(H);c.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),k.viewport(c)}if(F.isPointLight){const z=G.camera,nt=G.matrix,mt=F.distance||z.far;mt!==z.far&&(z.far=mt,z.updateProjectionMatrix()),sc.setFromMatrixPosition(F.matrixWorld),z.position.copy(sc),p_.copy(z.position),p_.add(TD[H]),z.up.copy(bD[H]),z.lookAt(p_),z.updateMatrixWorld(),nt.makeTranslation(-sc.x,-sc.y,-sc.z),yM.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(yM,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(F);a=G.getFrustum(),C(w,V,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===cc&&U(G,V),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(b,R,I)};function U(P,w){const V=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pr(r.x,r.y,{format:$l,type:Qr})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(w,null,V,v,M,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(w,null,V,x,M,null)}function O(P,w,V,b){let R=null;const I=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)R=I;else if(R=V.isPointLight===!0?p:f,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=R.uuid,j=w.uuid;let it=d[k];it===void 0&&(it={},d[k]=it);let et=it[j];et===void 0&&(et=R.clone(),it[j]=et,w.addEventListener("dispose",L)),R=et}if(R.visible=w.visible,R.wireframe=w.wireframe,b===cc?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:g[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const k=o.properties.get(R);k.light=V}return R}function C(P,w,V,b,R){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===cc)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const j=t.update(P),it=P.material;if(Array.isArray(it)){const et=j.groups;for(let F=0,G=et.length;F<G;F++){const Q=et[F],gt=it[Q.materialIndex];if(gt&&gt.visible){const H=O(P,gt,b,R);P.onBeforeShadow(o,P,w,V,j,H,Q),o.renderBufferDirect(V,null,j,H,P,Q),P.onAfterShadow(o,P,w,V,j,H,Q)}}}else if(it.visible){const et=O(P,it,b,R);P.onBeforeShadow(o,P,w,V,j,et,null),o.renderBufferDirect(V,null,j,et,P,null),P.onAfterShadow(o,P,w,V,j,et,null)}}const k=P.children;for(let j=0,it=k.length;j<it;j++)C(k[j],w,V,b,R)}function L(P){P.target.removeEventListener("dispose",L);for(const V in d){const b=d[V],R=P.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const RD={[O_]:P_,[z_]:I_,[F_]:H_,[Ql]:B_,[P_]:O_,[I_]:z_,[H_]:F_,[B_]:Ql};function CD(o,t){function n(){let X=!1;const Pt=new Nn;let bt=null;const zt=new Nn(0,0,0,0);return{setMask:function(Et){bt!==Et&&!X&&(o.colorMask(Et,Et,Et,Et),bt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,xt,Ct,se,Ie){Ie===!0&&(Et*=se,xt*=se,Ct*=se),Pt.set(Et,xt,Ct,se),zt.equals(Pt)===!1&&(o.clearColor(Et,xt,Ct,se),zt.copy(Pt))},reset:function(){X=!1,bt=null,zt.set(-1,0,0,0)}}}function a(){let X=!1,Pt=!1,bt=null,zt=null,Et=null;return{setReversed:function(xt){if(Pt!==xt){const Ct=t.get("EXT_clip_control");xt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return Pt},setTest:function(xt){xt?st(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(xt){bt!==xt&&!X&&(o.depthMask(xt),bt=xt)},setFunc:function(xt){if(Pt&&(xt=RD[xt]),zt!==xt){switch(xt){case O_:o.depthFunc(o.NEVER);break;case P_:o.depthFunc(o.ALWAYS);break;case z_:o.depthFunc(o.LESS);break;case Ql:o.depthFunc(o.LEQUAL);break;case F_:o.depthFunc(o.EQUAL);break;case B_:o.depthFunc(o.GEQUAL);break;case I_:o.depthFunc(o.GREATER);break;case H_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Et!==xt&&(Pt&&(xt=1-xt),o.clearDepth(xt),Et=xt)},reset:function(){X=!1,bt=null,zt=null,Et=null,Pt=!1}}}function r(){let X=!1,Pt=null,bt=null,zt=null,Et=null,xt=null,Ct=null,se=null,Ie=null;return{setTest:function(Gt){X||(Gt?st(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Gt){Pt!==Gt&&!X&&(o.stencilMask(Gt),Pt=Gt)},setFunc:function(Gt,Kt,ye){(bt!==Gt||zt!==Kt||Et!==ye)&&(o.stencilFunc(Gt,Kt,ye),bt=Gt,zt=Kt,Et=ye)},setOp:function(Gt,Kt,ye){(xt!==Gt||Ct!==Kt||se!==ye)&&(o.stencilOp(Gt,Kt,ye),xt=Gt,Ct=Kt,se=ye)},setLocked:function(Gt){X=Gt},setClear:function(Gt){Ie!==Gt&&(o.clearStencil(Gt),Ie=Gt)},reset:function(){X=!1,Pt=null,bt=null,zt=null,Et=null,xt=null,Ct=null,se=null,Ie=null}}}const l=new n,c=new a,f=new r,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,x=[],E=null,M=!1,y=null,S=null,U=null,O=null,C=null,L=null,P=null,w=new je(0,0,0),V=0,b=!1,R=null,I=null,k=null,j=null,it=null;const et=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=G>=2);let gt=null,H={};const z=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),mt=new Nn().fromArray(z),Mt=new Nn().fromArray(nt);function wt(X,Pt,bt,zt){const Et=new Uint8Array(4),xt=o.createTexture();o.bindTexture(X,xt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ct=0;Ct<bt;Ct++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Pt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Pt+Ct,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return xt}const $={};$[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),st(o.DEPTH_TEST),c.setFunc(Ql),ae(!1),ot(Ey),st(o.CULL_FACE),ne(Yr);function st(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function At(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Ot(X,Pt){return g[X]!==Pt?(o.bindFramebuffer(X,Pt),g[X]=Pt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Pt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Dt(X,Pt){let bt=x,zt=!1;if(X){bt=v.get(Pt),bt===void 0&&(bt=[],v.set(Pt,bt));const Et=X.textures;if(bt.length!==Et.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Ct=Et.length;xt<Ct;xt++)bt[xt]=o.COLOR_ATTACHMENT0+xt;bt.length=Et.length,zt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(bt)}function le(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Ue={[To]:o.FUNC_ADD,[CA]:o.FUNC_SUBTRACT,[wA]:o.FUNC_REVERSE_SUBTRACT};Ue[DA]=o.MIN,Ue[UA]=o.MAX;const Yt={[LA]:o.ZERO,[NA]:o.ONE,[OA]:o.SRC_COLOR,[L_]:o.SRC_ALPHA,[HA]:o.SRC_ALPHA_SATURATE,[BA]:o.DST_COLOR,[zA]:o.DST_ALPHA,[PA]:o.ONE_MINUS_SRC_COLOR,[N_]:o.ONE_MINUS_SRC_ALPHA,[IA]:o.ONE_MINUS_DST_COLOR,[FA]:o.ONE_MINUS_DST_ALPHA,[GA]:o.CONSTANT_COLOR,[VA]:o.ONE_MINUS_CONSTANT_COLOR,[kA]:o.CONSTANT_ALPHA,[XA]:o.ONE_MINUS_CONSTANT_ALPHA};function ne(X,Pt,bt,zt,Et,xt,Ct,se,Ie,Gt){if(X===Yr){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(st(o.BLEND),M=!0),X!==RA){if(X!==y||Gt!==b){if((S!==To||C!==To)&&(o.blendEquation(o.FUNC_ADD),S=To,C=To),Gt)switch(X){case Do:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ty:o.blendFunc(o.ONE,o.ONE);break;case by:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ay:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ze("WebGLState: Invalid blending: ",X);break}else switch(X){case Do:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ty:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case by:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ay:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",X);break}U=null,O=null,L=null,P=null,w.set(0,0,0),V=0,y=X,b=Gt}return}Et=Et||Pt,xt=xt||bt,Ct=Ct||zt,(Pt!==S||Et!==C)&&(o.blendEquationSeparate(Ue[Pt],Ue[Et]),S=Pt,C=Et),(bt!==U||zt!==O||xt!==L||Ct!==P)&&(o.blendFuncSeparate(Yt[bt],Yt[zt],Yt[xt],Yt[Ct]),U=bt,O=zt,L=xt,P=Ct),(se.equals(w)===!1||Ie!==V)&&(o.blendColor(se.r,se.g,se.b,Ie),w.copy(se),V=Ie),y=X,b=!1}function _e(X,Pt){X.side===kr?At(o.CULL_FACE):st(o.CULL_FACE);let bt=X.side===ji;Pt&&(bt=!bt),ae(bt),X.blending===Do&&X.transparent===!1?ne(Yr):ne(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const zt=X.stencilWrite;f.setTest(zt),zt&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ke(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function ot(X){X!==TA?(st(o.CULL_FACE),X!==I&&(X===Ey?o.cullFace(o.BACK):X===bA?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),I=X}function q(X){X!==k&&(F&&o.lineWidth(X),k=X)}function ke(X,Pt,bt){X?(st(o.POLYGON_OFFSET_FILL),(j!==Pt||it!==bt)&&(o.polygonOffset(Pt,bt),j=Pt,it=bt)):At(o.POLYGON_OFFSET_FILL)}function Se(X){X?st(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function ue(X){X===void 0&&(X=o.TEXTURE0+et-1),gt!==X&&(o.activeTexture(X),gt=X)}function qt(X,Pt,bt){bt===void 0&&(gt===null?bt=o.TEXTURE0+et-1:bt=gt);let zt=H[bt];zt===void 0&&(zt={type:void 0,texture:void 0},H[bt]=zt),(zt.type!==X||zt.texture!==Pt)&&(gt!==bt&&(o.activeTexture(bt),gt=bt),o.bindTexture(X,Pt||$[X]),zt.type=X,zt.texture=Pt)}function B(){const X=H[gt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(X){Ze("WebGLState:",X)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(X){Ze("WebGLState:",X)}}function pt(){try{o.texSubImage2D(...arguments)}catch(X){Ze("WebGLState:",X)}}function _t(){try{o.texSubImage3D(...arguments)}catch(X){Ze("WebGLState:",X)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ze("WebGLState:",X)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ze("WebGLState:",X)}}function Ut(){try{o.texStorage2D(...arguments)}catch(X){Ze("WebGLState:",X)}}function jt(){try{o.texStorage3D(...arguments)}catch(X){Ze("WebGLState:",X)}}function Zt(){try{o.texImage2D(...arguments)}catch(X){Ze("WebGLState:",X)}}function Tt(){try{o.texImage3D(...arguments)}catch(X){Ze("WebGLState:",X)}}function Rt(X){mt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),mt.copy(X))}function It(X){Mt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Mt.copy(X))}function Bt(X,Pt){let bt=d.get(Pt);bt===void 0&&(bt=new WeakMap,d.set(Pt,bt));let zt=bt.get(X);zt===void 0&&(zt=o.getUniformBlockIndex(Pt,X.name),bt.set(X,zt))}function Lt(X,Pt){const zt=d.get(Pt).get(X);p.get(Pt)!==zt&&(o.uniformBlockBinding(Pt,zt,X.__bindingPointIndex),p.set(Pt,zt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},gt=null,H={},g={},v=new WeakMap,x=[],E=null,M=!1,y=null,S=null,U=null,O=null,C=null,L=null,P=null,w=new je(0,0,0),V=0,b=!1,R=null,I=null,k=null,j=null,it=null,mt.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:st,disable:At,bindFramebuffer:Ot,drawBuffers:Dt,useProgram:le,setBlending:ne,setMaterial:_e,setFlipSided:ae,setCullFace:ot,setLineWidth:q,setPolygonOffset:ke,setScissorTest:Se,activeTexture:ue,bindTexture:qt,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:Y,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Ut,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:_t,compressedTexSubImage2D:ht,compressedTexSubImage3D:Wt,scissor:Rt,viewport:It,reset:de}}function wD(o,t,n,a,r,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new nn,_=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,A){return x?new OffscreenCanvas(B,A):sd("canvas")}function M(B,A,Y){let pt=1;const _t=qt(B);if((_t.width>Y||_t.height>Y)&&(pt=Y/Math.max(_t.width,_t.height)),pt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ht=Math.floor(pt*_t.width),Wt=Math.floor(pt*_t.height);g===void 0&&(g=E(ht,Wt));const Ut=A?E(ht,Wt):g;return Ut.width=ht,Ut.height=Wt,Ut.getContext("2d").drawImage(B,0,0,ht,Wt),xe("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ht+"x"+Wt+")."),Ut}else return"data"in B&&xe("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),B;return B}function y(B){return B.generateMipmaps}function S(B){o.generateMipmap(B)}function U(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(B,A,Y,pt,_t=!1){if(B!==null){if(o[B]!==void 0)return o[B];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ht=A;if(A===o.RED&&(Y===o.FLOAT&&(ht=o.R32F),Y===o.HALF_FLOAT&&(ht=o.R16F),Y===o.UNSIGNED_BYTE&&(ht=o.R8)),A===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ht=o.R8UI),Y===o.UNSIGNED_SHORT&&(ht=o.R16UI),Y===o.UNSIGNED_INT&&(ht=o.R32UI),Y===o.BYTE&&(ht=o.R8I),Y===o.SHORT&&(ht=o.R16I),Y===o.INT&&(ht=o.R32I)),A===o.RG&&(Y===o.FLOAT&&(ht=o.RG32F),Y===o.HALF_FLOAT&&(ht=o.RG16F),Y===o.UNSIGNED_BYTE&&(ht=o.RG8)),A===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ht=o.RG8UI),Y===o.UNSIGNED_SHORT&&(ht=o.RG16UI),Y===o.UNSIGNED_INT&&(ht=o.RG32UI),Y===o.BYTE&&(ht=o.RG8I),Y===o.SHORT&&(ht=o.RG16I),Y===o.INT&&(ht=o.RG32I)),A===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),Y===o.UNSIGNED_INT&&(ht=o.RGB32UI),Y===o.BYTE&&(ht=o.RGB8I),Y===o.SHORT&&(ht=o.RGB16I),Y===o.INT&&(ht=o.RGB32I)),A===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),Y===o.UNSIGNED_INT&&(ht=o.RGBA32UI),Y===o.BYTE&&(ht=o.RGBA8I),Y===o.SHORT&&(ht=o.RGBA16I),Y===o.INT&&(ht=o.RGBA32I)),A===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),A===o.RGBA){const Wt=_t?ad:Xe.getTransfer(pt);Y===o.FLOAT&&(ht=o.RGBA32F),Y===o.HALF_FLOAT&&(ht=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(ht=Wt===ln?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function C(B,A){let Y;return B?A===null||A===_r||A===Nc?Y=o.DEPTH24_STENCIL8:A===ur?Y=o.DEPTH32F_STENCIL8:A===Lc&&(Y=o.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_r||A===Nc?Y=o.DEPTH_COMPONENT24:A===ur?Y=o.DEPTH_COMPONENT32F:A===Lc&&(Y=o.DEPTH_COMPONENT16),Y}function L(B,A){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==mi&&B.minFilter!==Ci?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function P(B){const A=B.target;A.removeEventListener("dispose",P),V(A),A.isVideoTexture&&_.delete(A)}function w(B){const A=B.target;A.removeEventListener("dispose",w),R(A)}function V(B){const A=a.get(B);if(A.__webglInit===void 0)return;const Y=B.source,pt=v.get(Y);if(pt){const _t=pt[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&b(B),Object.keys(pt).length===0&&v.delete(Y)}a.remove(B)}function b(B){const A=a.get(B);o.deleteTexture(A.__webglTexture);const Y=B.source,pt=v.get(Y);delete pt[A.__cacheKey],c.memory.textures--}function R(B){const A=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let _t=0;_t<A.__webglFramebuffer[pt].length;_t++)o.deleteFramebuffer(A.__webglFramebuffer[pt][_t]);else o.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)o.deleteFramebuffer(A.__webglFramebuffer[pt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=B.textures;for(let pt=0,_t=Y.length;pt<_t;pt++){const ht=a.get(Y[pt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),c.memory.textures--),a.remove(Y[pt])}a.remove(B)}let I=0;function k(){I=0}function j(){const B=I;return B>=r.maxTextures&&xe("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),I+=1,B}function it(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function et(B,A){const Y=a.get(B);if(B.isVideoTexture&&Se(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Y.__version!==B.version){const pt=B.image;if(pt===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,B,A);return}}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+A)}function F(B,A){const Y=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){$(Y,B,A);return}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+A)}function G(B,A){const Y=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){$(Y,B,A);return}n.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+A)}function Q(B,A){const Y=a.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Y.__version!==B.version){st(Y,B,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+A)}const gt={[k_]:o.REPEAT,[Wr]:o.CLAMP_TO_EDGE,[X_]:o.MIRRORED_REPEAT},H={[mi]:o.NEAREST,[YA]:o.NEAREST_MIPMAP_NEAREST,[oh]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Fm]:o.LINEAR_MIPMAP_NEAREST,[Ao]:o.LINEAR_MIPMAP_LINEAR},z={[QA]:o.NEVER,[nR]:o.ALWAYS,[JA]:o.LESS,[ag]:o.LEQUAL,[$A]:o.EQUAL,[rg]:o.GEQUAL,[tR]:o.GREATER,[eR]:o.NOTEQUAL};function nt(B,A){if(A.type===ur&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ci||A.magFilter===Fm||A.magFilter===oh||A.magFilter===Ao||A.minFilter===Ci||A.minFilter===Fm||A.minFilter===oh||A.minFilter===Ao)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,gt[A.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,gt[A.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,gt[A.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,H[A.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,H[A.minFilter]),A.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===mi||A.minFilter!==oh&&A.minFilter!==Ao||A.type===ur&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(B,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function mt(B,A){let Y=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",P));const pt=A.source;let _t=v.get(pt);_t===void 0&&(_t={},v.set(pt,_t));const ht=it(A);if(ht!==B.__cacheKey){_t[ht]===void 0&&(_t[ht]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),_t[ht].usedTimes++;const Wt=_t[B.__cacheKey];Wt!==void 0&&(_t[B.__cacheKey].usedTimes--,Wt.usedTimes===0&&b(A)),B.__cacheKey=ht,B.__webglTexture=_t[ht].texture}return Y}function Mt(B,A,Y){return Math.floor(Math.floor(B/Y)/A)}function wt(B,A,Y,pt){const ht=B.updateRanges;if(ht.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,Y,pt,A.data);else{ht.sort((Tt,Rt)=>Tt.start-Rt.start);let Wt=0;for(let Tt=1;Tt<ht.length;Tt++){const Rt=ht[Wt],It=ht[Tt],Bt=Rt.start+Rt.count,Lt=Mt(It.start,A.width,4),de=Mt(Rt.start,A.width,4);It.start<=Bt+1&&Lt===de&&Mt(It.start+It.count-1,A.width,4)===Lt?Rt.count=Math.max(Rt.count,It.start+It.count-Rt.start):(++Wt,ht[Wt]=It)}ht.length=Wt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Tt=0,Rt=ht.length;Tt<Rt;Tt++){const It=ht[Tt],Bt=Math.floor(It.start/4),Lt=Math.ceil(It.count/4),de=Bt%A.width,X=Math.floor(Bt/A.width),Pt=Lt,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,de),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),n.texSubImage2D(o.TEXTURE_2D,0,de,X,Pt,bt,Y,pt,A.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function $(B,A,Y){let pt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=o.TEXTURE_3D);const _t=mt(B,A),ht=A.source;n.bindTexture(pt,B.__webglTexture,o.TEXTURE0+Y);const Wt=a.get(ht);if(ht.version!==Wt.__version||_t===!0){n.activeTexture(o.TEXTURE0+Y);const Ut=Xe.getPrimaries(Xe.workingColorSpace),jt=A.colorSpace===Ns?null:Xe.getPrimaries(A.colorSpace),Zt=A.colorSpace===Ns||Ut===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=M(A.image,!1,r.maxTextureSize);Tt=ue(A,Tt);const Rt=l.convert(A.format,A.colorSpace),It=l.convert(A.type);let Bt=O(A.internalFormat,Rt,It,A.colorSpace,A.isVideoTexture);nt(pt,A);let Lt;const de=A.mipmaps,X=A.isVideoTexture!==!0,Pt=Wt.__version===void 0||_t===!0,bt=ht.dataReady,zt=L(A,Tt);if(A.isDepthTexture)Bt=C(A.format===Ro,A.type),Pt&&(X?n.texStorage2D(o.TEXTURE_2D,1,Bt,Tt.width,Tt.height):n.texImage2D(o.TEXTURE_2D,0,Bt,Tt.width,Tt.height,0,Rt,It,null));else if(A.isDataTexture)if(de.length>0){X&&Pt&&n.texStorage2D(o.TEXTURE_2D,zt,Bt,de[0].width,de[0].height);for(let Et=0,xt=de.length;Et<xt;Et++)Lt=de[Et],X?bt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Rt,It,Lt.data):n.texImage2D(o.TEXTURE_2D,Et,Bt,Lt.width,Lt.height,0,Rt,It,Lt.data);A.generateMipmaps=!1}else X?(Pt&&n.texStorage2D(o.TEXTURE_2D,zt,Bt,Tt.width,Tt.height),bt&&wt(A,Tt,Rt,It)):n.texImage2D(o.TEXTURE_2D,0,Bt,Tt.width,Tt.height,0,Rt,It,Tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){X&&Pt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Bt,de[0].width,de[0].height,Tt.depth);for(let Et=0,xt=de.length;Et<xt;Et++)if(Lt=de[Et],A.format!==Ka)if(Rt!==null)if(X){if(bt)if(A.layerUpdates.size>0){const Ct=Jy(Lt.width,Lt.height,A.format,A.type);for(const se of A.layerUpdates){const Ie=Lt.data.subarray(se*Ct/Lt.data.BYTES_PER_ELEMENT,(se+1)*Ct/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,se,Lt.width,Lt.height,1,Rt,Ie)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Tt.depth,Rt,Lt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Bt,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?bt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Tt.depth,Rt,It,Lt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Et,Bt,Lt.width,Lt.height,Tt.depth,0,Rt,It,Lt.data)}else{X&&Pt&&n.texStorage2D(o.TEXTURE_2D,zt,Bt,de[0].width,de[0].height);for(let Et=0,xt=de.length;Et<xt;Et++)Lt=de[Et],A.format!==Ka?Rt!==null?X?bt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Rt,Lt.data):n.compressedTexImage2D(o.TEXTURE_2D,Et,Bt,Lt.width,Lt.height,0,Lt.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?bt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Rt,It,Lt.data):n.texImage2D(o.TEXTURE_2D,Et,Bt,Lt.width,Lt.height,0,Rt,It,Lt.data)}else if(A.isDataArrayTexture)if(X){if(Pt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Bt,Tt.width,Tt.height,Tt.depth),bt)if(A.layerUpdates.size>0){const Et=Jy(Tt.width,Tt.height,A.format,A.type);for(const xt of A.layerUpdates){const Ct=Tt.data.subarray(xt*Et/Tt.data.BYTES_PER_ELEMENT,(xt+1)*Et/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Tt.width,Tt.height,1,Rt,It,Ct)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,It,Tt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Tt.width,Tt.height,Tt.depth,0,Rt,It,Tt.data);else if(A.isData3DTexture)X?(Pt&&n.texStorage3D(o.TEXTURE_3D,zt,Bt,Tt.width,Tt.height,Tt.depth),bt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,It,Tt.data)):n.texImage3D(o.TEXTURE_3D,0,Bt,Tt.width,Tt.height,Tt.depth,0,Rt,It,Tt.data);else if(A.isFramebufferTexture){if(Pt)if(X)n.texStorage2D(o.TEXTURE_2D,zt,Bt,Tt.width,Tt.height);else{let Et=Tt.width,xt=Tt.height;for(let Ct=0;Ct<zt;Ct++)n.texImage2D(o.TEXTURE_2D,Ct,Bt,Et,xt,0,Rt,It,null),Et>>=1,xt>>=1}}else if(de.length>0){if(X&&Pt){const Et=qt(de[0]);n.texStorage2D(o.TEXTURE_2D,zt,Bt,Et.width,Et.height)}for(let Et=0,xt=de.length;Et<xt;Et++)Lt=de[Et],X?bt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Rt,It,Lt):n.texImage2D(o.TEXTURE_2D,Et,Bt,Rt,It,Lt);A.generateMipmaps=!1}else if(X){if(Pt){const Et=qt(Tt);n.texStorage2D(o.TEXTURE_2D,zt,Bt,Et.width,Et.height)}bt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,It,Tt)}else n.texImage2D(o.TEXTURE_2D,0,Bt,Rt,It,Tt);y(A)&&S(pt),Wt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function st(B,A,Y){if(A.image.length!==6)return;const pt=mt(B,A),_t=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+Y);const ht=a.get(_t);if(_t.version!==ht.__version||pt===!0){n.activeTexture(o.TEXTURE0+Y);const Wt=Xe.getPrimaries(Xe.workingColorSpace),Ut=A.colorSpace===Ns?null:Xe.getPrimaries(A.colorSpace),jt=A.colorSpace===Ns||Wt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Zt=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,Rt=[];for(let xt=0;xt<6;xt++)!Zt&&!Tt?Rt[xt]=M(A.image[xt],!0,r.maxCubemapSize):Rt[xt]=Tt?A.image[xt].image:A.image[xt],Rt[xt]=ue(A,Rt[xt]);const It=Rt[0],Bt=l.convert(A.format,A.colorSpace),Lt=l.convert(A.type),de=O(A.internalFormat,Bt,Lt,A.colorSpace),X=A.isVideoTexture!==!0,Pt=ht.__version===void 0||pt===!0,bt=_t.dataReady;let zt=L(A,It);nt(o.TEXTURE_CUBE_MAP,A);let Et;if(Zt){X&&Pt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,zt,de,It.width,It.height);for(let xt=0;xt<6;xt++){Et=Rt[xt].mipmaps;for(let Ct=0;Ct<Et.length;Ct++){const se=Et[Ct];A.format!==Ka?Bt!==null?X?bt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,se.width,se.height,Bt,se.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,de,se.width,se.height,0,se.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,se.width,se.height,Bt,Lt,se.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,de,se.width,se.height,0,Bt,Lt,se.data)}}}else{if(Et=A.mipmaps,X&&Pt){Et.length>0&&zt++;const xt=qt(Rt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,zt,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Tt){X?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Rt[xt].width,Rt[xt].height,Bt,Lt,Rt[xt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Rt[xt].width,Rt[xt].height,0,Bt,Lt,Rt[xt].data);for(let Ct=0;Ct<Et.length;Ct++){const Ie=Et[Ct].image[xt].image;X?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Ie.width,Ie.height,Bt,Lt,Ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,de,Ie.width,Ie.height,0,Bt,Lt,Ie.data)}}else{X?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt,Lt,Rt[xt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Bt,Lt,Rt[xt]);for(let Ct=0;Ct<Et.length;Ct++){const se=Et[Ct];X?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Bt,Lt,se.image[xt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,de,Bt,Lt,se.image[xt])}}}y(A)&&S(o.TEXTURE_CUBE_MAP),ht.__version=_t.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function At(B,A,Y,pt,_t,ht){const Wt=l.convert(Y.format,Y.colorSpace),Ut=l.convert(Y.type),jt=O(Y.internalFormat,Wt,Ut,Y.colorSpace),Zt=a.get(A),Tt=a.get(Y);if(Tt.__renderTarget=A,!Zt.__hasExternalTextures){const Rt=Math.max(1,A.width>>ht),It=Math.max(1,A.height>>ht);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?n.texImage3D(_t,ht,jt,Rt,It,A.depth,0,Wt,Ut,null):n.texImage2D(_t,ht,jt,Rt,It,0,Wt,Ut,null)}n.bindFramebuffer(o.FRAMEBUFFER,B),ke(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,_t,Tt.__webglTexture,0,q(A)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,_t,Tt.__webglTexture,ht),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(B,A,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,B),A.depthBuffer){const pt=A.depthTexture,_t=pt&&pt.isDepthTexture?pt.type:null,ht=C(A.stencilBuffer,_t),Wt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ke(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,q(A),ht,A.width,A.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,q(A),ht,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ht,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,B)}else{const pt=A.textures;for(let _t=0;_t<pt.length;_t++){const ht=pt[_t],Wt=l.convert(ht.format,ht.colorSpace),Ut=l.convert(ht.type),jt=O(ht.internalFormat,Wt,Ut,ht.colorSpace);ke(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,q(A),jt,A.width,A.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,q(A),jt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,jt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(B,A,Y){const pt=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=a.get(A.depthTexture);if(_t.__renderTarget=A,(!_t.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),_t.__webglTexture===void 0){_t.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),nt(o.TEXTURE_CUBE_MAP,A.depthTexture);const Zt=l.convert(A.depthTexture.format),Tt=l.convert(A.depthTexture.type);let Rt;A.depthTexture.format===Jr?Rt=o.DEPTH_COMPONENT24:A.depthTexture.format===Ro&&(Rt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Rt,A.width,A.height,0,Zt,Tt,null)}}else et(A.depthTexture,0);const ht=_t.__webglTexture,Wt=q(A),Ut=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,jt=A.depthTexture.format===Ro?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===Jr)ke(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ut,ht,0,Wt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ut,ht,0);else if(A.depthTexture.format===Ro)ke(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ut,ht,0,Wt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ut,ht,0);else throw new Error("Unknown depthTexture format")}function le(B){const A=a.get(B),Y=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const pt=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const _t=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",_t)};pt.addEventListener("dispose",_t),A.__depthDisposeCallback=_t}A.__boundDepthTexture=pt}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let pt=0;pt<6;pt++)Dt(A.__webglFramebuffer[pt],B,pt);else{const pt=B.texture.mipmaps;pt&&pt.length>0?Dt(A.__webglFramebuffer[0],B,0):Dt(A.__webglFramebuffer,B,0)}else if(Y){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=o.createRenderbuffer(),Ot(A.__webglDepthbuffer[pt],B,!1);else{const _t=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ht)}}else{const pt=B.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Ot(A.__webglDepthbuffer,B,!1);else{const _t=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ht)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(B,A,Y){const pt=a.get(B);A!==void 0&&At(pt.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&le(B)}function Yt(B){const A=B.texture,Y=a.get(B),pt=a.get(A);B.addEventListener("dispose",w);const _t=B.textures,ht=B.isWebGLCubeRenderTarget===!0,Wt=_t.length>1;if(Wt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=A.version,c.memory.textures++),ht){Y.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[Ut]=[];for(let jt=0;jt<A.mipmaps.length;jt++)Y.__webglFramebuffer[Ut][jt]=o.createFramebuffer()}else Y.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)Y.__webglFramebuffer[Ut]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ut=0,jt=_t.length;Ut<jt;Ut++){const Zt=a.get(_t[Ut]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),c.memory.textures++)}if(B.samples>0&&ke(B)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ut=0;Ut<_t.length;Ut++){const jt=_t[Ut];Y.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut]);const Zt=l.convert(jt.format,jt.colorSpace),Tt=l.convert(jt.type),Rt=O(jt.internalFormat,Zt,Tt,jt.colorSpace,B.isXRRenderTarget===!0),It=q(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,Rt,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(Y.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){n.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let jt=0;jt<A.mipmaps.length;jt++)At(Y.__webglFramebuffer[Ut][jt],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,jt);else At(Y.__webglFramebuffer[Ut],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(A)&&S(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Wt){for(let Ut=0,jt=_t.length;Ut<jt;Ut++){const Zt=_t[Ut],Tt=a.get(Zt);let Rt=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Rt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Tt.__webglTexture),nt(Rt,Zt),At(Y.__webglFramebuffer,B,Zt,o.COLOR_ATTACHMENT0+Ut,Rt,0),y(Zt)&&S(Rt)}n.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ut=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ut,pt.__webglTexture),nt(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let jt=0;jt<A.mipmaps.length;jt++)At(Y.__webglFramebuffer[jt],B,A,o.COLOR_ATTACHMENT0,Ut,jt);else At(Y.__webglFramebuffer,B,A,o.COLOR_ATTACHMENT0,Ut,0);y(A)&&S(Ut),n.unbindTexture()}B.depthBuffer&&le(B)}function ne(B){const A=B.textures;for(let Y=0,pt=A.length;Y<pt;Y++){const _t=A[Y];if(y(_t)){const ht=U(B),Wt=a.get(_t).__webglTexture;n.bindTexture(ht,Wt),S(ht),n.unbindTexture()}}}const _e=[],ae=[];function ot(B){if(B.samples>0){if(ke(B)===!1){const A=B.textures,Y=B.width,pt=B.height;let _t=o.COLOR_BUFFER_BIT;const ht=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=a.get(B),Ut=A.length>1;if(Ut)for(let Zt=0;Zt<A.length;Zt++)n.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const jt=B.texture.mipmaps;jt&&jt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Zt=0;Zt<A.length;Zt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Zt]);const Tt=a.get(A[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,_t,o.NEAREST),p===!0&&(_e.length=0,ae.length=0,_e.push(o.COLOR_ATTACHMENT0+Zt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(_e.push(ht),ae.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Zt=0;Zt<A.length;Zt++){n.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Zt]);const Tt=a.get(A[Zt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,Tt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const A=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function q(B){return Math.min(r.maxSamples,B.samples)}function ke(B){const A=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Se(B){const A=c.render.frame;_.get(B)!==A&&(_.set(B,A),B.update())}function ue(B,A){const Y=B.colorSpace,pt=B.format,_t=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Y!==tu&&Y!==Ns&&(Xe.getTransfer(Y)===ln?(pt!==Ka||_t!==ma)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",Y)),A}function qt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function DD(o,t){function n(a,r=Ns){let l;const c=Xe.getTransfer(r);if(a===ma)return o.UNSIGNED_BYTE;if(a===$0)return o.UNSIGNED_SHORT_4_4_4_4;if(a===tg)return o.UNSIGNED_SHORT_5_5_5_1;if(a===m1)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===_1)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===d1)return o.BYTE;if(a===p1)return o.SHORT;if(a===Lc)return o.UNSIGNED_SHORT;if(a===J0)return o.INT;if(a===_r)return o.UNSIGNED_INT;if(a===ur)return o.FLOAT;if(a===Qr)return o.HALF_FLOAT;if(a===g1)return o.ALPHA;if(a===v1)return o.RGB;if(a===Ka)return o.RGBA;if(a===Jr)return o.DEPTH_COMPONENT;if(a===Ro)return o.DEPTH_STENCIL;if(a===x1)return o.RED;if(a===eg)return o.RED_INTEGER;if(a===$l)return o.RG;if(a===ng)return o.RG_INTEGER;if(a===ig)return o.RGBA_INTEGER;if(a===Xh||a===Wh||a===qh||a===Yh)if(c===ln)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Xh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Wh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===qh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Yh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Xh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Wh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===qh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Yh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===W_||a===q_||a===Y_||a===Z_)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===W_)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===q_)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Y_)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Z_)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===j_||a===K_||a===Q_||a===J_||a===$_||a===t0||a===e0)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===j_||a===K_)return c===ln?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Q_)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===J_)return l.COMPRESSED_R11_EAC;if(a===$_)return l.COMPRESSED_SIGNED_R11_EAC;if(a===t0)return l.COMPRESSED_RG11_EAC;if(a===e0)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===n0||a===i0||a===a0||a===r0||a===s0||a===o0||a===l0||a===u0||a===c0||a===f0||a===h0||a===d0||a===p0||a===m0)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===n0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===i0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===a0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===r0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===s0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===o0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===l0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===u0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===c0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===f0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===h0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===d0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===p0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===m0)return c===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===_0||a===g0||a===v0)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===_0)return c===ln?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===g0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===v0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===x0||a===S0||a===y0||a===M0)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===x0)return l.COMPRESSED_RED_RGTC1_EXT;if(a===S0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===y0)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===M0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Nc?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const UD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LD=`
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

}`;class ND{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new L1(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Qa({vertexShader:UD,fragmentShader:LD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ts(new yd(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OD extends uu{constructor(t,n){super();const a=this;let r=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,x=null,E=null;const M=typeof XRWebGLBinding<"u",y=new ND,S={},U=n.getContextAttributes();let O=null,C=null;const L=[],P=[],w=new nn;let V=null;const b=new da;b.viewport=new Nn;const R=new da;R.viewport=new Nn;const I=[b,R],k=new XR;let j=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=L[$];return st===void 0&&(st=new s_,L[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=L[$];return st===void 0&&(st=new s_,L[$]=st),st.getGripSpace()},this.getHand=function($){let st=L[$];return st===void 0&&(st=new s_,L[$]=st),st.getHandSpace()};function et($){const st=P.indexOf($.inputSource);if(st===-1)return;const At=L[st];At!==void 0&&(At.update($.inputSource,$.frame,d||c),At.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){r.removeEventListener("select",et),r.removeEventListener("selectstart",et),r.removeEventListener("selectend",et),r.removeEventListener("squeeze",et),r.removeEventListener("squeezestart",et),r.removeEventListener("squeezeend",et),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",G);for(let $=0;$<L.length;$++){const st=P[$];st!==null&&(P[$]=null,L[$].disconnect(st))}j=null,it=null,y.reset();for(const $ in S)delete S[$];t.setRenderTarget(O),x=null,v=null,g=null,r=null,C=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(V),t.setSize(w.width,w.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,a.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,a.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(O=t.getRenderTarget(),r.addEventListener("select",et),r.addEventListener("selectstart",et),r.addEventListener("selectend",et),r.addEventListener("squeeze",et),r.addEventListener("squeezestart",et),r.addEventListener("squeezeend",et),r.addEventListener("end",F),r.addEventListener("inputsourceschange",G),U.xrCompatible!==!0&&await n.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ot=null,Dt=null;U.depth&&(Dt=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=U.stencil?Ro:Jr,Ot=U.stencil?Nc:_r);const le={colorFormat:n.RGBA8,depthFormat:Dt,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(le),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new pr(v.textureWidth,v.textureHeight,{format:Ka,type:ma,depthTexture:new Pc(v.textureWidth,v.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,n,At),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new pr(x.framebufferWidth,x.framebufferHeight,{format:Ka,type:ma,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await r.requestReferenceSpace(f),wt.setContext(r),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G($){for(let st=0;st<$.removed.length;st++){const At=$.removed[st],Ot=P.indexOf(At);Ot>=0&&(P[Ot]=null,L[Ot].disconnect(At))}for(let st=0;st<$.added.length;st++){const At=$.added[st];let Ot=P.indexOf(At);if(Ot===-1){for(let le=0;le<L.length;le++)if(le>=P.length){P.push(At),Ot=le;break}else if(P[le]===null){P[le]=At,Ot=le;break}if(Ot===-1)break}const Dt=L[Ot];Dt&&Dt.connect(At)}}const Q=new ft,gt=new ft;function H($,st,At){Q.setFromMatrixPosition(st.matrixWorld),gt.setFromMatrixPosition(At.matrixWorld);const Ot=Q.distanceTo(gt),Dt=st.projectionMatrix.elements,le=At.projectionMatrix.elements,Ue=Dt[14]/(Dt[10]-1),Yt=Dt[14]/(Dt[10]+1),ne=(Dt[9]+1)/Dt[5],_e=(Dt[9]-1)/Dt[5],ae=(Dt[8]-1)/Dt[0],ot=(le[8]+1)/le[0],q=Ue*ae,ke=Ue*ot,Se=Ot/(-ae+ot),ue=Se*-ae;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ue),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const qt=Ue+Se,B=Yt+Se,A=q-ue,Y=ke+(Ot-ue),pt=ne*Yt/B*qt,_t=_e*Yt/B*qt;$.projectionMatrix.makePerspective(A,Y,pt,_t,qt,B),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function z($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let st=$.near,At=$.far;y.texture!==null&&(y.depthNear>0&&(st=y.depthNear),y.depthFar>0&&(At=y.depthFar)),k.near=R.near=b.near=st,k.far=R.far=b.far=At,(j!==k.near||it!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,it=k.far),k.layers.mask=$.layers.mask|6,b.layers.mask=k.layers.mask&3,R.layers.mask=k.layers.mask&5;const Ot=$.parent,Dt=k.cameras;z(k,Ot);for(let le=0;le<Dt.length;le++)z(Dt[le],Ot);Dt.length===2?H(k,b,R):k.projectionMatrix.copy(b.projectionMatrix),nt($,k,Ot)};function nt($,st,At){At===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=od*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function($){p=$,v!==null&&(v.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function($){return S[$]};let mt=null;function Mt($,st){if(_=st.getViewerPose(d||c),E=st,_!==null){const At=_.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Ot=!1;At.length!==k.cameras.length&&(k.cameras.length=0,Ot=!0);for(let Yt=0;Yt<At.length;Yt++){const ne=At[Yt];let _e=null;if(x!==null)_e=x.getViewport(ne);else{const ot=g.getViewSubImage(v,ne);_e=ot.viewport,Yt===0&&(t.setRenderTargetTextures(C,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(C))}let ae=I[Yt];ae===void 0&&(ae=new da,ae.layers.enable(Yt),ae.viewport=new Nn,I[Yt]=ae),ae.matrix.fromArray(ne.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ne.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(_e.x,_e.y,_e.width,_e.height),Yt===0&&(k.matrix.copy(ae.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ot===!0&&k.cameras.push(ae)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const Yt=g.getDepthInformation(At[0]);Yt&&Yt.isValid&&Yt.texture&&y.init(Yt,r.renderState)}if(Dt&&Dt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let Yt=0;Yt<At.length;Yt++){const ne=At[Yt].camera;if(ne){let _e=S[ne];_e||(_e=new L1,S[ne]=_e);const ae=g.getCameraImage(ne);_e.sourceTexture=ae}}}}for(let At=0;At<L.length;At++){const Ot=P[At],Dt=L[At];Ot!==null&&Dt!==void 0&&Dt.update(Ot,st,d||c)}mt&&mt($,st),st.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:st}),E=null}const wt=new P1;wt.setAnimationLoop(Mt),this.setAnimationLoop=function($){mt=$},this.dispose=function(){}}}const go=new $r,PD=new Dn;function zD(o,t){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,C1(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function r(y,S,U,O,C){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(y,S):S.isMeshToonMaterial?(l(y,S),g(y,S)):S.isMeshPhongMaterial?(l(y,S),_(y,S)):S.isMeshStandardMaterial?(l(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,C)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),M(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?p(y,S,U,O):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ji&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ji&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const U=t.get(S),O=U.envMap,C=U.envMapRotation;O&&(y.envMap.value=O,go.copy(C),go.x*=-1,go.y*=-1,go.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(go.y*=-1,go.z*=-1),y.envMapRotation.value.setFromMatrix4(PD.makeRotationFromEuler(go)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,U,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*U,y.scale.value=O*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,U){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ji&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const U=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function FD(o,t,n,a){let r={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,O){const C=O.program;a.uniformBlockBinding(U,C)}function d(U,O){let C=r[U.id];C===void 0&&(E(U),C=_(U),r[U.id]=C,U.addEventListener("dispose",y));const L=O.program;a.updateUBOMapping(U,L);const P=t.render.frame;l[U.id]!==P&&(v(U),l[U.id]=P)}function _(U){const O=g();U.__bindingPointIndex=O;const C=o.createBuffer(),L=U.__size,P=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,L,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,C),C}function g(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const O=r[U.id],C=U.uniforms,L=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let P=0,w=C.length;P<w;P++){const V=Array.isArray(C[P])?C[P]:[C[P]];for(let b=0,R=V.length;b<R;b++){const I=V[b];if(x(I,P,b,L)===!0){const k=I.__offset,j=Array.isArray(I.value)?I.value:[I.value];let it=0;for(let et=0;et<j.length;et++){const F=j[et],G=M(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,k+it,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,it),it+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(U,O,C,L){const P=U.value,w=O+"_"+C;if(L[w]===void 0)return typeof P=="number"||typeof P=="boolean"?L[w]=P:L[w]=P.clone(),!0;{const V=L[w];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return L[w]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function E(U){const O=U.uniforms;let C=0;const L=16;for(let w=0,V=O.length;w<V;w++){const b=Array.isArray(O[w])?O[w]:[O[w]];for(let R=0,I=b.length;R<I;R++){const k=b[R],j=Array.isArray(k.value)?k.value:[k.value];for(let it=0,et=j.length;it<et;it++){const F=j[it],G=M(F),Q=C%L,gt=Q%G.boundary,H=Q+gt;C+=gt,H!==0&&L-H<G.storage&&(C+=L-H),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=C,C+=G.storage}}}const P=C%L;return P>0&&(C+=L-P),U.__size=C,U.__cache={},this}function M(U){const O={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(O.boundary=4,O.storage=4):U.isVector2?(O.boundary=8,O.storage=8):U.isVector3||U.isColor?(O.boundary=16,O.storage=12):U.isVector4?(O.boundary=16,O.storage=16):U.isMatrix3?(O.boundary=48,O.storage=48):U.isMatrix4?(O.boundary=64,O.storage=64):U.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xe("WebGLRenderer: Unsupported uniform value type.",U),O}function y(U){const O=U.target;O.removeEventListener("dispose",y);const C=c.indexOf(O.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(r[O.id]),delete r[O.id],delete l[O.id]}function S(){for(const U in r)o.deleteBuffer(r[U]);c=[],r={},l={}}return{bind:p,update:d,dispose:S}}const BD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ir=null;function ID(){return ir===null&&(ir=new DR(BD,16,16,$l,Qr),ir.name="DFG_LUT",ir.minFilter=Ci,ir.magFilter=Ci,ir.wrapS=Wr,ir.wrapT=Wr,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}class HD{constructor(t={}){const{canvas:n=iR(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:x=ma}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=c;const M=x,y=new Set([ig,ng,eg]),S=new Set([ma,_r,Lc,Nc,$0,tg]),U=new Uint32Array(4),O=new Int32Array(4);let C=null,L=null;const P=[],w=[];let V=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let R=!1;this._outputColorSpace=Pa;let I=0,k=0,j=null,it=-1,et=null;const F=new Nn,G=new Nn;let Q=null;const gt=new je(0);let H=0,z=n.width,nt=n.height,mt=1,Mt=null,wt=null;const $=new Nn(0,0,z,nt),st=new Nn(0,0,z,nt);let At=!1;const Ot=new lg;let Dt=!1,le=!1;const Ue=new Dn,Yt=new ft,ne=new Nn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function ot(){return j===null?mt:1}let q=a;function ke(D,K){return n.getContext(D,K)}try{const D={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Q0}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Gt,!1),q===null){const K="webgl2";if(q=ke(K,D),q===null)throw ke(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Ze("WebGLRenderer: "+D.message),D}let Se,ue,qt,B,A,Y,pt,_t,ht,Wt,Ut,jt,Zt,Tt,Rt,It,Bt,Lt,de,X,Pt,bt,zt,Et;function xt(){Se=new I2(q),Se.init(),bt=new DD(q,Se),ue=new D2(q,Se,t,bt),qt=new CD(q,Se),ue.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),B=new V2(q),A=new dD,Y=new wD(q,Se,qt,A,ue,bt,B),pt=new L2(b),_t=new B2(b),ht=new qR(q),zt=new C2(q,ht),Wt=new H2(q,ht,B,zt),Ut=new X2(q,Wt,ht,B),de=new k2(q,ue,Y),It=new U2(A),jt=new hD(b,pt,_t,Se,ue,zt,It),Zt=new zD(b,A),Tt=new mD,Rt=new yD(Se),Lt=new R2(b,pt,_t,qt,Ut,E,p),Bt=new AD(b,Ut,ue),Et=new FD(q,B,ue,qt),X=new w2(q,Se,B),Pt=new G2(q,Se,B),B.programs=jt.programs,b.capabilities=ue,b.extensions=Se,b.properties=A,b.renderLists=Tt,b.shadowMap=Bt,b.state=qt,b.info=B}xt(),M!==ma&&(V=new q2(M,n.width,n.height,r,l));const Ct=new OD(b,q);this.xr=Ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const D=Se.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Se.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(D){D!==void 0&&(mt=D,this.setSize(z,nt,!1))},this.getSize=function(D){return D.set(z,nt)},this.setSize=function(D,K,ct=!0){if(Ct.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}z=D,nt=K,n.width=Math.floor(D*mt),n.height=Math.floor(K*mt),ct===!0&&(n.style.width=D+"px",n.style.height=K+"px"),V!==null&&V.setSize(n.width,n.height),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(z*mt,nt*mt).floor()},this.setDrawingBufferSize=function(D,K,ct){z=D,nt=K,mt=ct,n.width=Math.floor(D*ct),n.height=Math.floor(K*ct),this.setViewport(0,0,D,K)},this.setEffects=function(D){if(M===ma){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let K=0;K<D.length;K++)if(D[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(F)},this.getViewport=function(D){return D.copy($)},this.setViewport=function(D,K,ct,lt){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,K,ct,lt),qt.viewport(F.copy($).multiplyScalar(mt).round())},this.getScissor=function(D){return D.copy(st)},this.setScissor=function(D,K,ct,lt){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,K,ct,lt),qt.scissor(G.copy(st).multiplyScalar(mt).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(D){qt.setScissorTest(At=D)},this.setOpaqueSort=function(D){Mt=D},this.setTransparentSort=function(D){wt=D},this.getClearColor=function(D){return D.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ct=!0){let lt=0;if(D){let tt=!1;if(j!==null){const Nt=j.texture.format;tt=y.has(Nt)}if(tt){const Nt=j.texture.type,Vt=S.has(Nt),Ft=Lt.getClearColor(),Xt=Lt.getClearAlpha(),$t=Ft.r,ce=Ft.g,te=Ft.b;Vt?(U[0]=$t,U[1]=ce,U[2]=te,U[3]=Xt,q.clearBufferuiv(q.COLOR,0,U)):(O[0]=$t,O[1]=ce,O[2]=te,O[3]=Xt,q.clearBufferiv(q.COLOR,0,O))}else lt|=q.COLOR_BUFFER_BIT}K&&(lt|=q.DEPTH_BUFFER_BIT),ct&&(lt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Gt,!1),Lt.dispose(),Tt.dispose(),Rt.dispose(),A.dispose(),pt.dispose(),_t.dispose(),Ut.dispose(),zt.dispose(),Et.dispose(),jt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",gn),Ct.removeEventListener("sessionend",be),We.stop()};function se(D){D.preventDefault(),Uy("WebGLRenderer: Context Lost."),R=!0}function Ie(){Uy("WebGLRenderer: Context Restored."),R=!1;const D=B.autoReset,K=Bt.enabled,ct=Bt.autoUpdate,lt=Bt.needsUpdate,tt=Bt.type;xt(),B.autoReset=D,Bt.enabled=K,Bt.autoUpdate=ct,Bt.needsUpdate=lt,Bt.type=tt}function Gt(D){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Kt(D){const K=D.target;K.removeEventListener("dispose",Kt),ye(K)}function ye(D){Ht(D),A.remove(D)}function Ht(D){const K=A.get(D).programs;K!==void 0&&(K.forEach(function(ct){jt.releaseProgram(ct)}),D.isShaderMaterial&&jt.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ct,lt,tt,Nt){K===null&&(K=_e);const Vt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ft=vn(D,K,ct,lt,tt);qt.setMaterial(lt,Vt);let Xt=ct.index,$t=1;if(lt.wireframe===!0){if(Xt=Wt.getWireframeAttribute(ct),Xt===void 0)return;$t=2}const ce=ct.drawRange,te=ct.attributes.position;let fe=ce.start*$t,Ke=(ce.start+ce.count)*$t;Nt!==null&&(fe=Math.max(fe,Nt.start*$t),Ke=Math.min(Ke,(Nt.start+Nt.count)*$t)),Xt!==null?(fe=Math.max(fe,0),Ke=Math.min(Ke,Xt.count)):te!=null&&(fe=Math.max(fe,0),Ke=Math.min(Ke,te.count));const En=Ke-fe;if(En<0||En===1/0)return;zt.setup(tt,lt,Ft,ct,Xt);let mn,tn=X;if(Xt!==null&&(mn=ht.get(Xt),tn=Pt,tn.setIndex(mn)),tt.isMesh)lt.wireframe===!0?(qt.setLineWidth(lt.wireframeLinewidth*ot()),tn.setMode(q.LINES)):tn.setMode(q.TRIANGLES);else if(tt.isLine){let re=lt.linewidth;re===void 0&&(re=1),qt.setLineWidth(re*ot()),tt.isLineSegments?tn.setMode(q.LINES):tt.isLineLoop?tn.setMode(q.LINE_LOOP):tn.setMode(q.LINE_STRIP)}else tt.isPoints?tn.setMode(q.POINTS):tt.isSprite&&tn.setMode(q.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Oc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tn.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))tn.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const re=tt._multiDrawStarts,Qe=tt._multiDrawCounts,ge=tt._multiDrawCount,si=Xt?ht.get(Xt).bytesPerElement:1,vr=A.get(lt).currentProgram.getUniforms();for(let oi=0;oi<ge;oi++)vr.setValue(q,"_gl_DrawID",oi),tn.render(re[oi]/si,Qe[oi])}else if(tt.isInstancedMesh)tn.renderInstances(fe,En,tt.count);else if(ct.isInstancedBufferGeometry){const re=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Qe=Math.min(ct.instanceCount,re);tn.renderInstances(fe,En,Qe)}else tn.render(fe,En)};function pe(D,K,ct){D.transparent===!0&&D.side===kr&&D.forceSinglePass===!1?(D.side=ji,D.needsUpdate=!0,$e(D,K,ct),D.side=ks,D.needsUpdate=!0,$e(D,K,ct),D.side=kr):$e(D,K,ct)}this.compile=function(D,K,ct=null){ct===null&&(ct=D),L=Rt.get(ct),L.init(K),w.push(L),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(L.pushLight(tt),tt.castShadow&&L.pushShadow(tt))}),D!==ct&&D.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(L.pushLight(tt),tt.castShadow&&L.pushShadow(tt))}),L.setupLights();const lt=new Set;return D.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Nt=tt.material;if(Nt)if(Array.isArray(Nt))for(let Vt=0;Vt<Nt.length;Vt++){const Ft=Nt[Vt];pe(Ft,ct,tt),lt.add(Ft)}else pe(Nt,ct,tt),lt.add(Nt)}),L=w.pop(),lt},this.compileAsync=function(D,K,ct=null){const lt=this.compile(D,K,ct);return new Promise(tt=>{function Nt(){if(lt.forEach(function(Vt){A.get(Vt).currentProgram.isReady()&&lt.delete(Vt)}),lt.size===0){tt(D);return}setTimeout(Nt,10)}Se.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ie=null;function me(D){ie&&ie(D)}function gn(){We.stop()}function be(){We.start()}const We=new P1;We.setAnimationLoop(me),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(D){ie=D,Ct.setAnimationLoop(D),D===null?We.stop():We.start()},Ct.addEventListener("sessionstart",gn),Ct.addEventListener("sessionend",be),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ct=Ct.enabled===!0&&Ct.isPresenting===!0,lt=V!==null&&(j===null||ct)&&V.begin(b,j);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),D.isScene===!0&&D.onBeforeRender(b,D,K,j),L=Rt.get(D,w.length),L.init(K),w.push(L),Ue.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ot.setFromProjectionMatrix(Ue,cr,K.reversedDepth),le=this.localClippingEnabled,Dt=It.init(this.clippingPlanes,le),C=Tt.get(D,P.length),C.init(),P.push(C),Ct.enabled===!0&&Ct.isPresenting===!0){const Vt=b.xr.getDepthSensingMesh();Vt!==null&&an(Vt,K,-1/0,b.sortObjects)}an(D,K,0,b.sortObjects),C.finish(),b.sortObjects===!0&&C.sort(Mt,wt),ae=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ae&&Lt.addToRenderList(C,D),this.info.render.frame++,Dt===!0&&It.beginShadows();const tt=L.state.shadowsArray;if(Bt.render(tt,D,K),Dt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&V.hasRenderPass())===!1){const Vt=C.opaque,Ft=C.transmissive;if(L.setupLights(),K.isArrayCamera){const Xt=K.cameras;if(Ft.length>0)for(let $t=0,ce=Xt.length;$t<ce;$t++){const te=Xt[$t];Ee(Vt,Ft,D,te)}ae&&Lt.render(D);for(let $t=0,ce=Xt.length;$t<ce;$t++){const te=Xt[$t];Me(C,D,te,te.viewport)}}else Ft.length>0&&Ee(Vt,Ft,D,K),ae&&Lt.render(D),Me(C,D,K)}j!==null&&k===0&&(Y.updateMultisampleRenderTarget(j),Y.updateRenderTargetMipmap(j)),lt&&V.end(b),D.isScene===!0&&D.onAfterRender(b,D,K),zt.resetDefaultState(),it=-1,et=null,w.pop(),w.length>0?(L=w[w.length-1],Dt===!0&&It.setGlobalState(b.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?C=P[P.length-1]:C=null};function an(D,K,ct,lt){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)L.pushLight(D),D.castShadow&&L.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ot.intersectsSprite(D)){lt&&ne.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ue);const Vt=Ut.update(D),Ft=D.material;Ft.visible&&C.push(D,Vt,Ft,ct,ne.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ot.intersectsObject(D))){const Vt=Ut.update(D),Ft=D.material;if(lt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ne.copy(D.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ne.copy(Vt.boundingSphere.center)),ne.applyMatrix4(D.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ft)){const Xt=Vt.groups;for(let $t=0,ce=Xt.length;$t<ce;$t++){const te=Xt[$t],fe=Ft[te.materialIndex];fe&&fe.visible&&C.push(D,Vt,fe,ct,ne.z,te)}}else Ft.visible&&C.push(D,Vt,Ft,ct,ne.z,null)}}const Nt=D.children;for(let Vt=0,Ft=Nt.length;Vt<Ft;Vt++)an(Nt[Vt],K,ct,lt)}function Me(D,K,ct,lt){const{opaque:tt,transmissive:Nt,transparent:Vt}=D;L.setupLightsView(ct),Dt===!0&&It.setGlobalState(b.clippingPlanes,ct),lt&&qt.viewport(F.copy(lt)),tt.length>0&&we(tt,K,ct),Nt.length>0&&we(Nt,K,ct),Vt.length>0&&we(Vt,K,ct),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Ee(D,K,ct,lt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[lt.id]===void 0){const fe=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[lt.id]=new pr(1,1,{generateMipmaps:!0,type:fe?Qr:ma,minFilter:Ao,samples:ue.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const Nt=L.state.transmissionRenderTarget[lt.id],Vt=lt.viewport||F;Nt.setSize(Vt.z*b.transmissionResolutionScale,Vt.w*b.transmissionResolutionScale);const Ft=b.getRenderTarget(),Xt=b.getActiveCubeFace(),$t=b.getActiveMipmapLevel();b.setRenderTarget(Nt),b.getClearColor(gt),H=b.getClearAlpha(),H<1&&b.setClearColor(16777215,.5),b.clear(),ae&&Lt.render(ct);const ce=b.toneMapping;b.toneMapping=dr;const te=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),L.setupLightsView(lt),Dt===!0&&It.setGlobalState(b.clippingPlanes,lt),we(D,ct,lt),Y.updateMultisampleRenderTarget(Nt),Y.updateRenderTargetMipmap(Nt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ke=0,En=K.length;Ke<En;Ke++){const mn=K[Ke],{object:tn,geometry:re,material:Qe,group:ge}=mn;if(Qe.side===kr&&tn.layers.test(lt.layers)){const si=Qe.side;Qe.side=ji,Qe.needsUpdate=!0,$n(tn,ct,lt,re,Qe,ge),Qe.side=si,Qe.needsUpdate=!0,fe=!0}}fe===!0&&(Y.updateMultisampleRenderTarget(Nt),Y.updateRenderTargetMipmap(Nt))}b.setRenderTarget(Ft,Xt,$t),b.setClearColor(gt,H),te!==void 0&&(lt.viewport=te),b.toneMapping=ce}function we(D,K,ct){const lt=K.isScene===!0?K.overrideMaterial:null;for(let tt=0,Nt=D.length;tt<Nt;tt++){const Vt=D[tt],{object:Ft,geometry:Xt,group:$t}=Vt;let ce=Vt.material;ce.allowOverride===!0&&lt!==null&&(ce=lt),Ft.layers.test(ct.layers)&&$n(Ft,K,ct,Xt,ce,$t)}}function $n(D,K,ct,lt,tt,Nt){D.onBeforeRender(b,K,ct,lt,tt,Nt),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),tt.onBeforeRender(b,K,ct,lt,D,Nt),tt.transparent===!0&&tt.side===kr&&tt.forceSinglePass===!1?(tt.side=ji,tt.needsUpdate=!0,b.renderBufferDirect(ct,K,lt,tt,D,Nt),tt.side=ks,tt.needsUpdate=!0,b.renderBufferDirect(ct,K,lt,tt,D,Nt),tt.side=kr):b.renderBufferDirect(ct,K,lt,tt,D,Nt),D.onAfterRender(b,K,ct,lt,tt,Nt)}function $e(D,K,ct){K.isScene!==!0&&(K=_e);const lt=A.get(D),tt=L.state.lights,Nt=L.state.shadowsArray,Vt=tt.state.version,Ft=jt.getParameters(D,tt.state,Nt,K,ct),Xt=jt.getProgramCacheKey(Ft);let $t=lt.programs;lt.environment=D.isMeshStandardMaterial?K.environment:null,lt.fog=K.fog,lt.envMap=(D.isMeshStandardMaterial?_t:pt).get(D.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,$t===void 0&&(D.addEventListener("dispose",Kt),$t=new Map,lt.programs=$t);let ce=$t.get(Xt);if(ce!==void 0){if(lt.currentProgram===ce&&lt.lightsStateVersion===Vt)return xi(D,Ft),ce}else Ft.uniforms=jt.getUniforms(D),D.onBeforeCompile(Ft,b),ce=jt.acquireProgram(Ft,Xt),$t.set(Xt,ce),lt.uniforms=Ft.uniforms;const te=lt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(te.clippingPlanes=It.uniform),xi(D,Ft),lt.needsLights=xn(D),lt.lightsStateVersion=Vt,lt.needsLights&&(te.ambientLightColor.value=tt.state.ambient,te.lightProbe.value=tt.state.probe,te.directionalLights.value=tt.state.directional,te.directionalLightShadows.value=tt.state.directionalShadow,te.spotLights.value=tt.state.spot,te.spotLightShadows.value=tt.state.spotShadow,te.rectAreaLights.value=tt.state.rectArea,te.ltc_1.value=tt.state.rectAreaLTC1,te.ltc_2.value=tt.state.rectAreaLTC2,te.pointLights.value=tt.state.point,te.pointLightShadows.value=tt.state.pointShadow,te.hemisphereLights.value=tt.state.hemi,te.directionalShadowMap.value=tt.state.directionalShadowMap,te.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,te.spotShadowMap.value=tt.state.spotShadowMap,te.spotLightMatrix.value=tt.state.spotLightMatrix,te.spotLightMap.value=tt.state.spotLightMap,te.pointShadowMap.value=tt.state.pointShadowMap,te.pointShadowMatrix.value=tt.state.pointShadowMatrix),lt.currentProgram=ce,lt.uniformsList=null,ce}function ti(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=Zh.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function xi(D,K){const ct=A.get(D);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function vn(D,K,ct,lt,tt){K.isScene!==!0&&(K=_e),Y.resetTextureUnits();const Nt=K.fog,Vt=lt.isMeshStandardMaterial?K.environment:null,Ft=j===null?b.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tu,Xt=(lt.isMeshStandardMaterial?_t:pt).get(lt.envMap||Vt),$t=lt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ce=!!ct.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),te=!!ct.morphAttributes.position,fe=!!ct.morphAttributes.normal,Ke=!!ct.morphAttributes.color;let En=dr;lt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(En=b.toneMapping);const mn=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,tn=mn!==void 0?mn.length:0,re=A.get(lt),Qe=L.state.lights;if(Dt===!0&&(le===!0||D!==et)){const ui=D===et&&lt.id===it;It.setState(lt,D,ui)}let ge=!1;lt.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Qe.state.version||re.outputColorSpace!==Ft||tt.isBatchedMesh&&re.batching===!1||!tt.isBatchedMesh&&re.batching===!0||tt.isBatchedMesh&&re.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&re.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&re.instancing===!1||!tt.isInstancedMesh&&re.instancing===!0||tt.isSkinnedMesh&&re.skinning===!1||!tt.isSkinnedMesh&&re.skinning===!0||tt.isInstancedMesh&&re.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&re.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&re.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&re.instancingMorph===!1&&tt.morphTexture!==null||re.envMap!==Xt||lt.fog===!0&&re.fog!==Nt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==It.numPlanes||re.numIntersection!==It.numIntersection)||re.vertexAlphas!==$t||re.vertexTangents!==ce||re.morphTargets!==te||re.morphNormals!==fe||re.morphColors!==Ke||re.toneMapping!==En||re.morphTargetsCount!==tn)&&(ge=!0):(ge=!0,re.__version=lt.version);let si=re.currentProgram;ge===!0&&(si=$e(lt,K,tt));let vr=!1,oi=!1,Ta=!1;const rn=si.getUniforms(),li=re.uniforms;if(qt.useProgram(si.program)&&(vr=!0,oi=!0,Ta=!0),lt.id!==it&&(it=lt.id,oi=!0),vr||et!==D){qt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),rn.setValue(q,"projectionMatrix",D.projectionMatrix),rn.setValue(q,"viewMatrix",D.matrixWorldInverse);const ci=rn.map.cameraPosition;ci!==void 0&&ci.setValue(q,Yt.setFromMatrixPosition(D.matrixWorld)),ue.logarithmicDepthBuffer&&rn.setValue(q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&rn.setValue(q,"isOrthographic",D.isOrthographicCamera===!0),et!==D&&(et=D,oi=!0,Ta=!0)}if(re.needsLights&&(Qe.state.directionalShadowMap.length>0&&rn.setValue(q,"directionalShadowMap",Qe.state.directionalShadowMap,Y),Qe.state.spotShadowMap.length>0&&rn.setValue(q,"spotShadowMap",Qe.state.spotShadowMap,Y),Qe.state.pointShadowMap.length>0&&rn.setValue(q,"pointShadowMap",Qe.state.pointShadowMap,Y)),tt.isSkinnedMesh){rn.setOptional(q,tt,"bindMatrix"),rn.setOptional(q,tt,"bindMatrixInverse");const ui=tt.skeleton;ui&&(ui.boneTexture===null&&ui.computeBoneTexture(),rn.setValue(q,"boneTexture",ui.boneTexture,Y))}tt.isBatchedMesh&&(rn.setOptional(q,tt,"batchingTexture"),rn.setValue(q,"batchingTexture",tt._matricesTexture,Y),rn.setOptional(q,tt,"batchingIdTexture"),rn.setValue(q,"batchingIdTexture",tt._indirectTexture,Y),rn.setOptional(q,tt,"batchingColorTexture"),tt._colorsTexture!==null&&rn.setValue(q,"batchingColorTexture",tt._colorsTexture,Y));const qn=ct.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&de.update(tt,ct,si),(oi||re.receiveShadow!==tt.receiveShadow)&&(re.receiveShadow=tt.receiveShadow,rn.setValue(q,"receiveShadow",tt.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(li.envMap.value=Xt,li.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&K.environment!==null&&(li.envMapIntensity.value=K.environmentIntensity),li.dfgLUT!==void 0&&(li.dfgLUT.value=ID()),oi&&(rn.setValue(q,"toneMappingExposure",b.toneMappingExposure),re.needsLights&&An(li,Ta),Nt&&lt.fog===!0&&Zt.refreshFogUniforms(li,Nt),Zt.refreshMaterialUniforms(li,lt,mt,nt,L.state.transmissionRenderTarget[D.id]),Zh.upload(q,ti(re),li,Y)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Zh.upload(q,ti(re),li,Y),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&rn.setValue(q,"center",tt.center),rn.setValue(q,"modelViewMatrix",tt.modelViewMatrix),rn.setValue(q,"normalMatrix",tt.normalMatrix),rn.setValue(q,"modelMatrix",tt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const ui=lt.uniformsGroups;for(let ci=0,ko=ui.length;ci<ko;ci++){const Ga=ui[ci];Et.update(Ga,si),Et.bind(Ga,si)}}return si}function An(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function xn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(D,K,ct){const lt=A.get(D);lt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),A.get(D.texture).__webglTexture=K,A.get(D.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ct,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const ct=A.get(D);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const Si=q.createFramebuffer();this.setRenderTarget=function(D,K=0,ct=0){j=D,I=K,k=ct;let lt=null,tt=!1,Nt=!1;if(D){const Ft=A.get(D);if(Ft.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(q.FRAMEBUFFER,Ft.__webglFramebuffer),F.copy(D.viewport),G.copy(D.scissor),Q=D.scissorTest,qt.viewport(F),qt.scissor(G),qt.setScissorTest(Q),it=-1;return}else if(Ft.__webglFramebuffer===void 0)Y.setupRenderTarget(D);else if(Ft.__hasExternalTextures)Y.rebindTextures(D,A.get(D.texture).__webglTexture,A.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ce=D.depthTexture;if(Ft.__boundDepthTexture!==ce){if(ce!==null&&A.has(ce)&&(D.width!==ce.image.width||D.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(D)}}const Xt=D.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Nt=!0);const $t=A.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[K])?lt=$t[K][ct]:lt=$t[K],tt=!0):D.samples>0&&Y.useMultisampledRTT(D)===!1?lt=A.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?lt=$t[ct]:lt=$t,F.copy(D.viewport),G.copy(D.scissor),Q=D.scissorTest}else F.copy($).multiplyScalar(mt).floor(),G.copy(st).multiplyScalar(mt).floor(),Q=At;if(ct!==0&&(lt=Si),qt.bindFramebuffer(q.FRAMEBUFFER,lt)&&qt.drawBuffers(D,lt),qt.viewport(F),qt.scissor(G),qt.setScissorTest(Q),tt){const Ft=A.get(D.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,ct)}else if(Nt){const Ft=K;for(let Xt=0;Xt<D.textures.length;Xt++){const $t=A.get(D.textures[Xt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xt,$t.__webglTexture,ct,Ft)}}else if(D!==null&&ct!==0){const Ft=A.get(D.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ft.__webglTexture,ct)}it=-1},this.readRenderTargetPixels=function(D,K,ct,lt,tt,Nt,Vt,Ft=0){if(!(D&&D.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=A.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){qt.bindFramebuffer(q.FRAMEBUFFER,Xt);try{const $t=D.textures[Ft],ce=$t.format,te=$t.type;if(!ue.textureFormatReadable(ce)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(te)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-lt&&ct>=0&&ct<=D.height-tt&&(D.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),q.readPixels(K,ct,lt,tt,bt.convert(ce),bt.convert(te),Nt))}finally{const $t=j!==null?A.get(j).__webglFramebuffer:null;qt.bindFramebuffer(q.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(D,K,ct,lt,tt,Nt,Vt,Ft=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=A.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(K>=0&&K<=D.width-lt&&ct>=0&&ct<=D.height-tt){qt.bindFramebuffer(q.FRAMEBUFFER,Xt);const $t=D.textures[Ft],ce=$t.format,te=$t.type;if(!ue.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.bufferData(q.PIXEL_PACK_BUFFER,Nt.byteLength,q.STREAM_READ),D.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),q.readPixels(K,ct,lt,tt,bt.convert(ce),bt.convert(te),0);const Ke=j!==null?A.get(j).__webglFramebuffer:null;qt.bindFramebuffer(q.FRAMEBUFFER,Ke);const En=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await aR(q,En,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Nt),q.deleteBuffer(fe),q.deleteSync(En),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ct=0){const lt=Math.pow(2,-ct),tt=Math.floor(D.image.width*lt),Nt=Math.floor(D.image.height*lt),Vt=K!==null?K.x:0,Ft=K!==null?K.y:0;Y.setTexture2D(D,0),q.copyTexSubImage2D(q.TEXTURE_2D,ct,0,0,Vt,Ft,tt,Nt),qt.unbindTexture()};const Ea=q.createFramebuffer(),Sn=q.createFramebuffer();this.copyTextureToTexture=function(D,K,ct=null,lt=null,tt=0,Nt=null){Nt===null&&(tt!==0?(Oc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=tt,tt=0):Nt=0);let Vt,Ft,Xt,$t,ce,te,fe,Ke,En;const mn=D.isCompressedTexture?D.mipmaps[Nt]:D.image;if(ct!==null)Vt=ct.max.x-ct.min.x,Ft=ct.max.y-ct.min.y,Xt=ct.isBox3?ct.max.z-ct.min.z:1,$t=ct.min.x,ce=ct.min.y,te=ct.isBox3?ct.min.z:0;else{const qn=Math.pow(2,-tt);Vt=Math.floor(mn.width*qn),Ft=Math.floor(mn.height*qn),D.isDataArrayTexture?Xt=mn.depth:D.isData3DTexture?Xt=Math.floor(mn.depth*qn):Xt=1,$t=0,ce=0,te=0}lt!==null?(fe=lt.x,Ke=lt.y,En=lt.z):(fe=0,Ke=0,En=0);const tn=bt.convert(K.format),re=bt.convert(K.type);let Qe;K.isData3DTexture?(Y.setTexture3D(K,0),Qe=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Y.setTexture2DArray(K,0),Qe=q.TEXTURE_2D_ARRAY):(Y.setTexture2D(K,0),Qe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const ge=q.getParameter(q.UNPACK_ROW_LENGTH),si=q.getParameter(q.UNPACK_IMAGE_HEIGHT),vr=q.getParameter(q.UNPACK_SKIP_PIXELS),oi=q.getParameter(q.UNPACK_SKIP_ROWS),Ta=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,mn.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,mn.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,$t),q.pixelStorei(q.UNPACK_SKIP_ROWS,ce),q.pixelStorei(q.UNPACK_SKIP_IMAGES,te);const rn=D.isDataArrayTexture||D.isData3DTexture,li=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const qn=A.get(D),ui=A.get(K),ci=A.get(qn.__renderTarget),ko=A.get(ui.__renderTarget);qt.bindFramebuffer(q.READ_FRAMEBUFFER,ci.__webglFramebuffer),qt.bindFramebuffer(q.DRAW_FRAMEBUFFER,ko.__webglFramebuffer);for(let Ga=0;Ga<Xt;Ga++)rn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,A.get(D).__webglTexture,tt,te+Ga),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,A.get(K).__webglTexture,Nt,En+Ga)),q.blitFramebuffer($t,ce,Vt,Ft,fe,Ke,Vt,Ft,q.DEPTH_BUFFER_BIT,q.NEAREST);qt.bindFramebuffer(q.READ_FRAMEBUFFER,null),qt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(tt!==0||D.isRenderTargetTexture||A.has(D)){const qn=A.get(D),ui=A.get(K);qt.bindFramebuffer(q.READ_FRAMEBUFFER,Ea),qt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Sn);for(let ci=0;ci<Xt;ci++)rn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,qn.__webglTexture,tt,te+ci):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,qn.__webglTexture,tt),li?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ui.__webglTexture,Nt,En+ci):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ui.__webglTexture,Nt),tt!==0?q.blitFramebuffer($t,ce,Vt,Ft,fe,Ke,Vt,Ft,q.COLOR_BUFFER_BIT,q.NEAREST):li?q.copyTexSubImage3D(Qe,Nt,fe,Ke,En+ci,$t,ce,Vt,Ft):q.copyTexSubImage2D(Qe,Nt,fe,Ke,$t,ce,Vt,Ft);qt.bindFramebuffer(q.READ_FRAMEBUFFER,null),qt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else li?D.isDataTexture||D.isData3DTexture?q.texSubImage3D(Qe,Nt,fe,Ke,En,Vt,Ft,Xt,tn,re,mn.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Qe,Nt,fe,Ke,En,Vt,Ft,Xt,tn,mn.data):q.texSubImage3D(Qe,Nt,fe,Ke,En,Vt,Ft,Xt,tn,re,mn):D.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Nt,fe,Ke,Vt,Ft,tn,re,mn.data):D.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Nt,fe,Ke,mn.width,mn.height,tn,mn.data):q.texSubImage2D(q.TEXTURE_2D,Nt,fe,Ke,Vt,Ft,tn,re,mn);q.pixelStorei(q.UNPACK_ROW_LENGTH,ge),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,si),q.pixelStorei(q.UNPACK_SKIP_PIXELS,vr),q.pixelStorei(q.UNPACK_SKIP_ROWS,oi),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ta),Nt===0&&K.generateMipmaps&&q.generateMipmap(Qe),qt.unbindTexture()},this.initRenderTarget=function(D){A.get(D).__webglFramebuffer===void 0&&Y.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Y.setTextureCube(D,0):D.isData3DTexture?Y.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Y.setTexture2DArray(D,0):Y.setTexture2D(D,0),qt.unbindTexture()},this.resetState=function(){I=0,k=0,j=null,qt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const GD=1/3,ar=1/6,m_=o=>Math.floor(o)|0,__=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function VD(o=Math.random){const t=kD(o),n=new Float64Array(t).map(l=>__[l%12*3]),a=new Float64Array(t).map(l=>__[l%12*3+1]),r=new Float64Array(t).map(l=>__[l%12*3+2]);return function(c,f,p){let d,_,g,v;const x=(c+f+p)*GD,E=m_(c+x),M=m_(f+x),y=m_(p+x),S=(E+M+y)*ar,U=E-S,O=M-S,C=y-S,L=c-U,P=f-O,w=p-C;let V,b,R,I,k,j;L>=P?P>=w?(V=1,b=0,R=0,I=1,k=1,j=0):L>=w?(V=1,b=0,R=0,I=1,k=0,j=1):(V=0,b=0,R=1,I=1,k=0,j=1):P<w?(V=0,b=0,R=1,I=0,k=1,j=1):L<w?(V=0,b=1,R=0,I=0,k=1,j=1):(V=0,b=1,R=0,I=1,k=1,j=0);const it=L-V+ar,et=P-b+ar,F=w-R+ar,G=L-I+2*ar,Q=P-k+2*ar,gt=w-j+2*ar,H=L-1+3*ar,z=P-1+3*ar,nt=w-1+3*ar,mt=E&255,Mt=M&255,wt=y&255;let $=.6-L*L-P*P-w*w;if($<0)d=0;else{const Dt=mt+t[Mt+t[wt]];$*=$,d=$*$*(n[Dt]*L+a[Dt]*P+r[Dt]*w)}let st=.6-it*it-et*et-F*F;if(st<0)_=0;else{const Dt=mt+V+t[Mt+b+t[wt+R]];st*=st,_=st*st*(n[Dt]*it+a[Dt]*et+r[Dt]*F)}let At=.6-G*G-Q*Q-gt*gt;if(At<0)g=0;else{const Dt=mt+I+t[Mt+k+t[wt+j]];At*=At,g=At*At*(n[Dt]*G+a[Dt]*Q+r[Dt]*gt)}let Ot=.6-H*H-z*z-nt*nt;if(Ot<0)v=0;else{const Dt=mt+1+t[Mt+1+t[wt+1]];Ot*=Ot,v=Ot*Ot*(n[Dt]*H+a[Dt]*z+r[Dt]*nt)}return 32*(d+_+g+v)}}function kD(o){const n=new Uint8Array(512);for(let a=0;a<512/2;a++)n[a]=a;for(let a=0;a<512/2-1;a++){const r=a+~~(o()*(256-a)),l=n[a];n[a]=n[r],n[r]=l}for(let a=256;a<512;a++)n[a]=n[a-256];return n}function Gr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function H1(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Sa={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nu={duration:.5,overwrite:!1,delay:0},ug,vi,bn,Ba=1e8,pn=1/Ba,A0=Math.PI*2,XD=A0/4,WD=0,G1=Math.sqrt,qD=Math.cos,YD=Math.sin,ri=function(t){return typeof t=="string"},On=function(t){return typeof t=="function"},es=function(t){return typeof t=="number"},cg=function(t){return typeof t>"u"},gr=function(t){return typeof t=="object"},Ki=function(t){return t!==!1},fg=function(){return typeof window<"u"},Dh=function(t){return On(t)||ri(t)},V1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wi=Array.isArray,ZD=/random\([^)]+\)/g,jD=/,\s*/g,MM=/(?:-?\.?\d|\.)+/gi,k1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,g_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,X1=/[+-]=-?[.\d]+/,KD=/[^,'"\[\]\s]+/gi,QD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Cn,rr,R0,hg,ya={},ld={},W1,q1=function(t){return(ld=iu(t,ya))&&ta},dg=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},zc=function(t,n){return!n&&console.warn(t)},Y1=function(t,n){return t&&(ya[t]=n)&&ld&&(ld[t]=n)||ya},Fc=function(){return 0},JD={suppressEvents:!0,isStart:!0,kill:!1},jh={suppressEvents:!0,kill:!1},$D={suppressEvents:!0},pg={},Hs=[],C0={},Z1,ha={},v_={},EM=30,Kh=[],mg="",_g=function(t){var n=t[0],a,r;if(gr(n)||On(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(r=Kh.length;r--&&!Kh[r].targetTest(n););a=Kh[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new vE(t[r],a)))||t.splice(r,1);return t},Uo=function(t){return t._gsap||_g(Ia(t))[0]._gsap},j1=function(t,n,a){return(a=t[n])&&On(a)?t[n]():cg(a)&&t.getAttribute&&t.getAttribute(n)||a},Qi=function(t,n){return(t=t.split(",")).forEach(n)||t},Fn=function(t){return Math.round(t*1e5)/1e5||0},Rn=function(t){return Math.round(t*1e7)/1e7||0},Wl=function(t,n){var a=n.charAt(0),r=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+r:a==="-"?t-r:a==="*"?t*r:t/r},tU=function(t,n){for(var a=n.length,r=0;t.indexOf(n[r])<0&&++r<a;);return r<a},ud=function(){var t=Hs.length,n=Hs.slice(0),a,r;for(C0={},Hs.length=0,a=0;a<t;a++)r=n[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},gg=function(t){return!!(t._initted||t._startAt||t.add)},K1=function(t,n,a,r){Hs.length&&!vi&&ud(),t.render(n,a,!!(vi&&n<0&&gg(t))),Hs.length&&!vi&&ud()},Q1=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(KD).length<2?n:ri(t)?t.trim():t},J1=function(t){return t},Ma=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},eU=function(t){return function(n,a){for(var r in a)r in n||r==="duration"&&t||r==="ease"||(n[r]=a[r])}},iu=function(t,n){for(var a in n)t[a]=n[a];return t},TM=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=gr(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},cd=function(t,n){var a={},r;for(r in t)r in n||(a[r]=t[r]);return a},xc=function(t){var n=t.parent||Cn,a=t.keyframes?eU(wi(t.keyframes)):Ma;if(Ki(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},nU=function(t,n){for(var a=t.length,r=a===n.length;r&&a--&&t[a]===n[a];);return a<0},$1=function(t,n,a,r,l){var c=t[r],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[r]=n,n._prev=c,n.parent=n._dp=t,n},Td=function(t,n,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[r]===n&&(t[r]=l),n._next=n._prev=n.parent=null},Xs=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Lo=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},iU=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},w0=function(t,n,a,r){return t._startAt&&(vi?t._startAt.revert(jh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,r))},aU=function o(t){return!t||t._ts&&o(t.parent)},bM=function(t){return t._repeat?au(t._tTime,t=t.duration()+t._rDelay)*t:0},au=function(t,n){var a=Math.floor(t=Rn(t/n));return t&&a===t?a-1:a},fd=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},bd=function(t){return t._end=Rn(t._start+(t._tDur/Math.abs(t._ts||t._rts||pn)||0))},Ad=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Rn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),bd(t),a._dirty||Lo(a,t)),t},tE=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=fd(t.rawTime(),n),(!n._dur||Kc(0,n.totalDuration(),a)-n._tTime>pn)&&n.render(a,!0)),Lo(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-pn}},lr=function(t,n,a,r){return n.parent&&Xs(n),n._start=Rn((es(a)?a:a||t!==Cn?Oa(t,a,n):t._time)+n._delay),n._end=Rn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),$1(t,n,"_first","_last",t._sort?"_start":0),D0(n)||(t._recent=n),r||tE(t,n),t._ts<0&&Ad(t,t._tTime),t},eE=function(t,n){return(ya.ScrollTrigger||dg("scrollTrigger",n))&&ya.ScrollTrigger.create(n,t)},nE=function(t,n,a,r,l){if(xg(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!vi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Z1!==_a.frame)return Hs.push(t),t._lazy=[l,r],1},rU=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},D0=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},sU=function(t,n,a,r){var l=t.ratio,c=n<0||!n&&(!t._start&&rU(t)&&!(!t._initted&&D0(t))||(t._ts<0||t._dp._ts<0)&&!D0(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=Kc(0,t._tDur,n),_=au(p,f),t._yoyo&&_&1&&(c=1-c),_!==au(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||vi||r||t._zTime===pn||!n&&t._zTime){if(!t._initted&&nE(t,n,r,a,p))return;for(g=t._zTime,t._zTime=n||(a?pn:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&w0(t,n,a,!0),t._onUpdate&&!a&&va(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&va(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Xs(t,1),!a&&!vi&&(va(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},oU=function(t,n,a){var r;if(a>n)for(r=t._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=t._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},ru=function(t,n,a,r){var l=t._repeat,c=Rn(n)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Rn(c*(l+1)+t._rDelay*l):c,f>0&&!r&&Ad(t,t._tTime=t._tDur*f),t.parent&&bd(t),a||Lo(t.parent,t),t},AM=function(t){return t instanceof Bi?Lo(t):ru(t,t._dur)},lU={_start:0,endTime:Fc,totalDuration:Fc},Oa=function o(t,n,a){var r=t.labels,l=t._recent||lU,c=t.duration()>=Ba?l.endTime(!1):t._dur,f,p,d;return ri(n)&&(isNaN(n)||n in r)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in r||(r[n]=c),r[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(wi(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},Sc=function(t,n,a){var r=es(n[1]),l=(r?2:1)+(t<2?0:1),c=n[l],f,p;if(r&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Ki(p.vars.inherit)&&p.parent;c.immediateRender=Ki(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new Wn(n[0],c,n[l+1])},Zs=function(t,n){return t||t===0?n(t):n},Kc=function(t,n,a){return a<t?t:a>n?n:a},Ai=function(t,n){return!ri(t)||!(n=QD.exec(t))?"":n[1]},uU=function(t,n,a){return Zs(a,function(r){return Kc(t,n,r)})},U0=[].slice,iE=function(t,n){return t&&gr(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&gr(t[0]))&&!t.nodeType&&t!==rr},cU=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(r){var l;return ri(r)&&!n||iE(r,1)?(l=a).push.apply(l,Ia(r)):a.push(r)})||a},Ia=function(t,n,a){return bn&&!n&&bn.selector?bn.selector(t):ri(t)&&!a&&(R0||!su())?U0.call((n||hg).querySelectorAll(t),0):wi(t)?cU(t,a):iE(t)?U0.call(t,0):t?[t]:[]},L0=function(t){return t=Ia(t)[0]||zc("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Ia(n,a.querySelectorAll?a:a===t?zc("Invalid scope")||hg.createElement("div"):t)}},aE=function(t){return t.sort(function(){return .5-Math.random()})},rE=function(t){if(On(t))return t;var n=gr(t)?t:{each:t},a=No(n.ease),r=n.from||0,l=parseFloat(n.base)||0,c={},f=r>0&&r<1,p=isNaN(r)||f,d=n.axis,_=r,g=r;return ri(r)?_=g={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(_=r[0],g=r[1]),function(v,x,E){var M=(E||n).length,y=c[M],S,U,O,C,L,P,w,V,b;if(!y){if(b=n.grid==="auto"?0:(n.grid||[1,Ba])[1],!b){for(w=-Ba;w<(w=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(y=c[M]=[],S=p?Math.min(b,M)*_-.5:r%b,U=b===Ba?0:p?M*g/b-.5:r/b|0,w=0,V=Ba,P=0;P<M;P++)O=P%b-S,C=U-(P/b|0),y[P]=L=d?Math.abs(d==="y"?C:O):G1(O*O+C*C),L>w&&(w=L),L<V&&(V=L);r==="random"&&aE(y),y.max=w-V,y.min=V,y.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:d?d==="y"?M/b:b:Math.max(b,M/b))||0)*(r==="edges"?-1:1),y.b=M<0?l-M:l,y.u=Ai(n.amount||n.each)||0,a=a&&M<0?mE(a):a}return M=(y[v]-y.min)/y.max||0,Rn(y.b+(a?a(M):M)*y.v)+y.u}},N0=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var r=Rn(Math.round(parseFloat(a)/t)*t*n);return(r-r%1)/n+(es(a)?0:Ai(a))}},sE=function(t,n){var a=wi(t),r,l;return!a&&gr(t)&&(r=a=t.radius||Ba,t.values?(t=Ia(t.values),(l=!es(t[0]))&&(r*=r)):t=N0(t.increment)),Zs(n,a?On(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Ba,_=0,g=t.length,v,x;g--;)l?(v=t[g].x-f,x=t[g].y-p,v=v*v+x*x):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!r||d<=r?t[_]:c,l||_===c||es(c)?_:_+Ai(c)}:N0(t))},oE=function(t,n,a,r){return Zs(wi(t)?!n:a===!0?!!(a=0):!r,function(){return wi(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*r)/r})},fU=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(r){return n.reduce(function(l,c){return c(l)},r)}},hU=function(t,n){return function(a){return t(parseFloat(a))+(n||Ai(a))}},dU=function(t,n,a){return uE(t,n,0,1,a)},lE=function(t,n,a){return Zs(a,function(r){return t[~~n(r)]})},pU=function o(t,n,a){var r=n-t;return wi(t)?lE(t,o(0,t.length),n):Zs(a,function(l){return(r+(l-t)%r)%r+t})},mU=function o(t,n,a){var r=n-t,l=r*2;return wi(t)?lE(t,o(0,t.length-1),n):Zs(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},Bc=function(t){return t.replace(ZD,function(n){var a=n.indexOf("[")+1,r=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(jD);return oE(a?r:+r[0],a?0:+r[1],+r[2]||1e-5)})},uE=function(t,n,a,r,l){var c=n-t,f=r-a;return Zs(l,function(p){return a+((p-t)/c*f||0)})},_U=function o(t,n,a,r){var l=isNaN(t+n)?0:function(x){return(1-x)*t+x*n};if(!l){var c=ri(t),f={},p,d,_,g,v;if(a===!0&&(r=1)&&(a=null),c)t={p:t},n={p:n};else if(wi(t)&&!wi(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return _[M](E-M)},a=n}else r||(t=iu(wi(t)?[]:{},t));if(!_){for(p in n)vg.call(f,t,p,"get",n[p]);l=function(E){return Mg(E,f)||(c?t.p:t)}}}return Zs(a,l)},RM=function(t,n,a){var r=t.labels,l=Ba,c,f,p;for(c in r)f=r[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},va=function(t,n,a){var r=t.vars,l=r[n],c=bn,f=t._ctx,p,d,_;if(l)return p=r[n+"Params"],d=r.callbackScope||t,a&&Hs.length&&ud(),f&&(bn=f),_=p?l.apply(d,p):l.call(d),bn=c,_},hc=function(t){return Xs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!vi),t.progress()<1&&va(t,"onInterrupt"),t},Gl,cE=[],fE=function(t){if(t)if(t=!t.name&&t.default||t,fg()||t.headless){var n=t.name,a=On(t),r=n&&!a&&t.init?function(){this._props=[]}:t,l={init:Fc,render:Mg,add:vg,kill:LU,modifier:UU,rawVars:0},c={targetTest:0,get:0,getSetter:yg,aliases:{},register:0};if(su(),t!==r){if(ha[n])return;Ma(r,Ma(cd(t,l),c)),iu(r.prototype,iu(l,cd(t,c))),ha[r.prop=n]=r,t.targetTest&&(Kh.push(r),pg[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Y1(n,r),t.register&&t.register(ta,r,Ji)}else cE.push(t)},dn=255,dc={aqua:[0,dn,dn],lime:[0,dn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dn],navy:[0,0,128],white:[dn,dn,dn],olive:[128,128,0],yellow:[dn,dn,0],orange:[dn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dn,0,0],pink:[dn,192,203],cyan:[0,dn,dn],transparent:[dn,dn,dn,0]},x_=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*dn+.5|0},hE=function(t,n,a){var r=t?es(t)?[t>>16,t>>8&dn,t&dn]:0:dc.black,l,c,f,p,d,_,g,v,x,E;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),dc[t])r=dc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&dn,r&dn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&dn,t&dn]}else if(t.substr(0,3)==="hsl"){if(r=E=t.match(MM),!n)p=+r[0]%360/360,d=+r[1]/100,_=+r[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,r.length>3&&(r[3]*=1),r[0]=x_(p+1/3,l,c),r[1]=x_(p,l,c),r[2]=x_(p-1/3,l,c);else if(~t.indexOf("="))return r=t.match(k1),a&&r.length<4&&(r[3]=1),r}else r=t.match(MM)||dc.transparent;r=r.map(Number)}return n&&!E&&(l=r[0]/dn,c=r[1]/dn,f=r[2]/dn,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?p=d=0:(x=g-v,d=_>.5?x/(2-g-v):x/(g+v),p=g===l?(c-f)/x+(c<f?6:0):g===c?(f-l)/x+2:(l-c)/x+4,p*=60),r[0]=~~(p+.5),r[1]=~~(d*100+.5),r[2]=~~(_*100+.5)),a&&r.length<4&&(r[3]=1),r},dE=function(t){var n=[],a=[],r=-1;return t.split(Gs).forEach(function(l){var c=l.match(Hl)||[];n.push.apply(n,c),a.push(r+=c.length+1)}),n.c=a,n},CM=function(t,n,a){var r="",l=(t+r).match(Gs),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!l)return t;if(l=l.map(function(v){return(v=hE(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=dE(t),p=a.c,p.join(r)!==_.c.join(r)))for(d=t.replace(Gs,"1").split(Hl),g=d.length-1;f<g;f++)r+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(Gs),g=d.length-1;f<g;f++)r+=d[f]+l[f];return r+d[g]},Gs=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in dc)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),gU=/hsl[a]?\(/,pE=function(t){var n=t.join(" "),a;if(Gs.lastIndex=0,Gs.test(n))return a=gU.test(n),t[1]=CM(t[1],a),t[0]=CM(t[0],a,dE(t[1])),!0},Ic,_a=(function(){var o=Date.now,t=500,n=33,a=o(),r=a,l=1e3/240,c=l,f=[],p,d,_,g,v,x,E=function M(y){var S=o()-r,U=y===!0,O,C,L,P;if((S>t||S<0)&&(a+=S-n),r+=S,L=r-a,O=L-c,(O>0||U)&&(P=++g.frame,v=L-g.time*1e3,g.time=L=L/1e3,c+=O+(O>=l?4:l-O),C=1),U||(p=d(M)),C)for(x=0;x<f.length;x++)f[x](L,v,P,y)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){W1&&(!R0&&fg()&&(rr=R0=window,hg=rr.document||{},ya.gsap=ta,(rr.gsapVersions||(rr.gsapVersions=[])).push(ta.version),q1(ld||rr.GreenSockGlobals||!rr.gsap&&rr||{}),cE.forEach(fE)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(y){return setTimeout(y,c-g.time*1e3+1|0)},Ic=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Ic=0,d=Fc},lagSmoothing:function(y,S){t=y||1/0,n=Math.min(S||33,t)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,S,U){var O=S?function(C,L,P,w){y(C,L,P,w),g.remove(O)}:y;return g.remove(y),f[U?"unshift":"push"](O),su(),O},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&x>=S&&x--},_listeners:f},g})(),su=function(){return!Ic&&_a.wake()},Ve={},vU=/^[\d.\-M][\d.\-,\s]/,xU=/["']/g,SU=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),r=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[r]=isNaN(d)?d.replace(xU,"").trim():+d,r=p.substr(f+1).trim();return n},yU=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),r=t.indexOf("(",n);return t.substring(n,~r&&r<a?t.indexOf(")",a+1):a)},MU=function(t){var n=(t+"").split("("),a=Ve[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[SU(n[1])]:yU(t).split(",").map(Q1)):Ve._CE&&vU.test(t)?Ve._CE("",t):a},mE=function(t){return function(n){return 1-t(1-n)}},_E=function o(t,n){for(var a=t._first,r;a;)a instanceof Bi?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(r=a._ease,a._ease=a._yEase,a._yEase=r,a._yoyo=n)),a=a._next},No=function(t,n){return t&&(On(t)?t:Ve[t]||MU(t))||n},Vo=function(t,n,a,r){a===void 0&&(a=function(p){return 1-n(1-p)}),r===void 0&&(r=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:r},c;return Qi(t,function(f){Ve[f]=ya[f]=l,Ve[c=f.toLowerCase()]=a;for(var p in l)Ve[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ve[f+"."+p]=l[p]}),l},gE=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},S_=function o(t,n,a){var r=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/A0*(Math.asin(1/r)||0),f=function(_){return _===1?1:r*Math.pow(2,-10*_)*YD((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:gE(f);return l=A0/l,p.config=function(d,_){return o(t,d,_)},p},y_=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},r=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:gE(a);return r.config=function(l){return o(t,l)},r};Qi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Vo(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Vo("Elastic",S_("in"),S_("out"),S_());(function(o,t){var n=1/t,a=2*n,r=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Vo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Vo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Vo("Circ",function(o){return-(G1(1-o*o)-1)});Vo("Sine",function(o){return o===1?1:-qD(o*XD)+1});Vo("Back",y_("in"),y_("out"),y_());Ve.SteppedEase=Ve.steps=ya.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,r=t+(n?0:1),l=n?1:0,c=1-pn;return function(f){return((r*Kc(0,c,f)|0)+l)*a}}};nu.ease=Ve["quad.out"];Qi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return mg+=o+","+o+"Params,"});var vE=function(t,n){this.id=WD++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:j1,this.set=n?n.getSetter:yg},Hc=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ru(this,+n.duration,1,1),this.data=n.data,bn&&(this._ctx=bn,bn.data.push(this)),Ic||_a.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,ru(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,r){if(su(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Ad(this,a),!l._dp||l.parent||tE(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&lr(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===pn||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),K1(this,a,r)),this},t.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+bM(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},t.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+bM(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?au(this._tTime,l)+1:1},t.timeScale=function(a,r){if(!arguments.length)return this._rts===-pn?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?fd(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-pn?0:this._rts,this.totalTime(Kc(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),bd(this),iU(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(su(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pn&&(this._tTime-=pn)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=Rn(a);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&lr(r,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(Ki(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fd(r.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=$D);var r=vi;return vi=a,gg(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),vi=r,this},t.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,AM(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,AM(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,r){return this.totalTime(Oa(this,a),Ki(r))},t.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,Ki(r)),this._dur||(this._zTime=-pn),this},t.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},t.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-pn:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-pn,this},t.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-pn)},t.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},t.then=function(a){var r=this,l=r._prom;return new Promise(function(c){var f=On(a)?a:J1,p=function(){var _=r.then;r.then=null,l&&l(),On(f)&&(f=f(r))&&(f.then||f===r)&&(r.then=_),c(f),r.then=_};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?p():r._prom=p})},t.kill=function(){hc(this)},o})();Ma(Hc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pn,_prom:0,_ps:!1,_rts:1});var Bi=(function(o){H1(t,o);function t(a,r){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=Ki(a.sortChildren),Cn&&lr(a.parent||Cn,Gr(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&eE(Gr(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(r,l,c){return Sc(0,arguments,this),this},n.from=function(r,l,c){return Sc(1,arguments,this),this},n.fromTo=function(r,l,c,f){return Sc(2,arguments,this),this},n.set=function(r,l,c){return l.duration=0,l.parent=this,xc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Wn(r,l,Oa(this,c),1),this},n.call=function(r,l,c){return lr(this,Wn.delayedCall(0,r,l),c)},n.staggerTo=function(r,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Wn(r,c,Oa(this,p)),this},n.staggerFrom=function(r,l,c,f,p,d,_){return c.runBackwards=1,xc(c).immediateRender=Ki(c.immediateRender),this.staggerTo(r,l,c,f,p,d,_)},n.staggerFromTo=function(r,l,c,f,p,d,_,g){return f.startAt=c,xc(f).immediateRender=Ki(f.immediateRender),this.staggerTo(r,l,f,p,d,_,g)},n.render=function(r,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=r<=0?0:Rn(r),g=this._zTime<0!=r<0&&(this._initted||!d),v,x,E,M,y,S,U,O,C,L,P,w;if(this!==Cn&&_>p&&r>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,r+=this._time-f),v=_,C=this._start,O=this._ts,S=!O,g&&(d||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,y=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,l,c);if(v=Rn(_%y),_===p?(M=this._repeat,v=d):(L=Rn(_/y),M=~~L,M&&M===L&&(v=d,M--),v>d&&(v=d)),L=au(this._tTime,y),!f&&this._tTime&&L!==M&&this._tTime-L*y-this._dur<=0&&(L=M),P&&M&1&&(v=d-v,w=1),M!==L&&!this._lock){var V=P&&L&1,b=V===(P&&M&1);if(M<L&&(V=!V),f=V?0:_%d?d:_,this._lock=1,this.render(f||(w?0:Rn(M*y)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&va(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,L=M),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,b&&(this._lock=2,f=V?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;_E(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=oU(this,Rn(f),Rn(v)),U&&(_-=v-(v=U._start))),this._tTime=_,this._time=v,this._act=!O,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&_&&d&&!l&&!L&&(va(this,"onStart"),this._tTime!==_))return this;if(v>=f&&r>=0)for(x=this._first;x;){if(E=x._next,(x._act||v>=x._start)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,l,c),v!==this._time||!this._ts&&!S){U=0,E&&(_+=this._zTime=-pn);break}}x=E}else{x=this._last;for(var R=r<0?r:v;x;){if(E=x._prev,(x._act||R<=x._end)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(R-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(R-x._start)*x._ts,l,c||vi&&gg(x)),v!==this._time||!this._ts&&!S){U=0,E&&(_+=this._zTime=R?-pn:pn);break}}x=E}}if(U&&!l&&(this.pause(),U.render(v>=f?0:-pn)._zTime=v>=f?1:-1,this._ts))return this._start=C,bd(this),this.render(r,l,c);this._onUpdate&&!l&&va(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(O)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Xs(this,1),!l&&!(r<0&&!f)&&(_||f||!p)&&(va(this,_===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,l){var c=this;if(es(l)||(l=Oa(this,l,r)),!(r instanceof Hc)){if(wi(r))return r.forEach(function(f){return c.add(f,l)}),this;if(ri(r))return this.addLabel(r,l);if(On(r))r=Wn.delayedCall(0,r);else return this}return this!==r?lr(this,r,l):this},n.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ba);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Wn?l&&p.push(d):(c&&p.push(d),r&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},n.remove=function(r){return ri(r)?this.removeLabel(r):On(r)?this.killTweensOf(r):(r.parent===this&&Td(this,r),r===this._recent&&(this._recent=this._last),Lo(this))},n.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rn(_a.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},n.addLabel=function(r,l){return this.labels[r]=Oa(this,l),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,l,c){var f=Wn.delayedCall(0,l||Fc,c);return f.data="isPause",this._hasPause=1,lr(this,f,Oa(this,r))},n.removePause=function(r){var l=this._first;for(r=Oa(this,r);l;)l._start===r&&l.data==="isPause"&&Xs(l),l=l._next},n.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),p=f.length;p--;)Ps!==f[p]&&f[p].kill(r,l);return this},n.getTweensOf=function(r,l){for(var c=[],f=Ia(r),p=this._first,d=es(l),_;p;)p instanceof Wn?tU(p._targets,f)&&(d?(!Ps||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(r,l){l=l||{};var c=this,f=Oa(c,r),p=l,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,x,E=Wn.to(c,Ma({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||pn,onStart:function(){if(c.pause(),!x){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==y&&ru(E,y,0,1).render(E._time,!0,!0),x=1}_&&_.apply(E,g||[])}},l));return v?E.render(0):E},n.tweenFromTo=function(r,l,c){return this.tweenTo(l,Ma({startAt:{time:Oa(this,r)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),RM(this,Oa(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),RM(this,Oa(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+pn)},n.shiftChildren=function(r,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(r=Rn(r);f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=r);return Lo(this)},n.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Lo(this)},n.totalDuration=function(r){var l=0,c=this,f=c._last,p=Ba,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,lr(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=Rn(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;ru(c,c===Cn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(Cn._ts&&(K1(Cn,fd(r,Cn)),Z1=_a.frame),_a.frame>=EM){EM+=Sa.autoSleep||120;var l=Cn._first;if((!l||!l._ts)&&Sa.autoSleep&&_a._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||_a.sleep()}}},t})(Hc);Ma(Bi.prototype,{_lock:0,_hasPause:0,_forcing:0});var EU=function(t,n,a,r,l,c,f){var p=new Ji(this._pt,t,n,0,1,TE,null,l),d=0,_=0,g,v,x,E,M,y,S,U;for(p.b=a,p.e=r,a+="",r+="",(S=~r.indexOf("random("))&&(r=Bc(r)),c&&(U=[a,r],c(U,t,n),a=U[0],r=U[1]),v=a.match(g_)||[];g=g_.exec(r);)E=g[0],M=r.substring(d,g.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),E!==v[_++]&&(y=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:y,c:E.charAt(1)==="="?Wl(y,E)-y:parseFloat(E)-y,m:x&&x<4?Math.round:0},d=g_.lastIndex);return p.c=d<r.length?r.substring(d,r.length):"",p.fp=f,(X1.test(r)||S)&&(p.e=0),this._pt=p,p},vg=function(t,n,a,r,l,c,f,p,d,_){On(r)&&(r=r(l||0,t,c));var g=t[n],v=a!=="get"?a:On(g)?d?t[n.indexOf("set")||!On(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,x=On(g)?d?CU:ME:Sg,E;if(ri(r)&&(~r.indexOf("random(")&&(r=Bc(r)),r.charAt(1)==="="&&(E=Wl(v,r)+(Ai(v)||0),(E||E===0)&&(r=E))),!_||v!==r||O0)return!isNaN(v*r)&&r!==""?(E=new Ji(this._pt,t,n,+v||0,r-(v||0),typeof g=="boolean"?DU:EE,0,x),d&&(E.fp=d),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(n in t)&&dg(n,r),EU.call(this,t,n,v,r,x,p||Sa.stringFilter,d))},TU=function(t,n,a,r,l){if(On(t)&&(t=yc(t,l,n,a,r)),!gr(t)||t.style&&t.nodeType||wi(t)||V1(t))return ri(t)?yc(t,l,n,a,r):t;var c={},f;for(f in t)c[f]=yc(t[f],l,n,a,r);return c},xE=function(t,n,a,r,l,c){var f,p,d,_;if(ha[t]&&(f=new ha[t]).init(l,f.rawVars?n[t]:TU(n[t],r,l,c,a),a,r,c)!==!1&&(a._pt=p=new Ji(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==Gl))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Ps,O0,xg=function o(t,n,a){var r=t.vars,l=r.ease,c=r.startAt,f=r.immediateRender,p=r.lazy,d=r.onUpdate,_=r.runBackwards,g=r.yoyoEase,v=r.keyframes,x=r.autoRevert,E=t._dur,M=t._startAt,y=t._targets,S=t.parent,U=S&&S.data==="nested"?S.vars.targets:y,O=t._overwrite==="auto"&&!ug,C=t.timeline,L,P,w,V,b,R,I,k,j,it,et,F,G;if(C&&(!v||!l)&&(l="none"),t._ease=No(l,nu.ease),t._yEase=g?mE(No(g===!0?l:g,nu.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!C&&!!r.runBackwards,!C||v&&!r.stagger){if(k=y[0]?Uo(y[0]).harness:0,F=k&&r[k.prop],L=cd(r,pg),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!x?M.render(-1,!0):M.revert(_&&E?jh:JD),M._lazy=0),c){if(Xs(t._startAt=Wn.set(y,Ma({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&Ki(p),startAt:null,delay:0,onUpdate:d&&function(){return va(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(vi||!f&&!x)&&t._startAt.revert(jh),f&&E&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&E&&!M){if(n&&(f=!1),w=Ma({overwrite:!1,data:"isFromStart",lazy:f&&!M&&Ki(p),immediateRender:f,stagger:0,parent:S},L),F&&(w[k.prop]=F),Xs(t._startAt=Wn.set(y,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(vi?t._startAt.revert(jh):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,pn,pn);else if(!n)return}for(t._pt=t._ptCache=0,p=E&&Ki(p)||p&&!E,P=0;P<y.length;P++){if(b=y[P],I=b._gsap||_g(y)[P]._gsap,t._ptLookup[P]=it={},C0[I.id]&&Hs.length&&ud(),et=U===y?P:U.indexOf(b),k&&(j=new k).init(b,F||L,t,et,U)!==!1&&(t._pt=V=new Ji(t._pt,b,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(Q){it[Q]=V}),j.priority&&(R=1)),!k||F)for(w in L)ha[w]&&(j=xE(w,L,t,et,b,U))?j.priority&&(R=1):it[w]=V=vg.call(t,b,w,"get",L[w],et,U,0,r.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),O&&t._pt&&(Ps=t,Cn.killTweensOf(b,it,t.globalTime(n)),G=!t.parent,Ps=0),t._pt&&p&&(C0[I.id]=1)}R&&bE(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!G,v&&n<=0&&C.render(Ba,!0,!0)},bU=function(t,n,a,r,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,x;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,x=t._targets.length;x--;){if(_=v[x][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return O0=1,t.vars[n]="+=0",xg(t,f),O0=0,p?zc(n+" not eligible for reset"):1;d.push(_)}for(x=d.length;x--;)g=d[x],_=g._pt||g,_.s=(r||r===0)&&!l?r:_.s+(r||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=Fn(a)+Ai(g.e)),g.b&&(g.b=_.s+Ai(g.b))},AU=function(t,n){var a=t[0]?Uo(t[0]).harness:0,r=a&&a.aliases,l,c,f,p;if(!r)return n;l=iu({},n);for(c in r)if(c in l)for(p=r[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},RU=function(t,n,a,r){var l=n.ease||r||"power1.inOut",c,f;if(wi(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},yc=function(t,n,a,r,l){return On(t)?t.call(n,a,r,l):ri(t)&&~t.indexOf("random(")?Bc(t):t},SE=mg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yE={};Qi(SE+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return yE[o]=1});var Wn=(function(o){H1(t,o);function t(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,c?r:xc(r))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,x=p.overwrite,E=p.keyframes,M=p.defaults,y=p.scrollTrigger,S=p.yoyoEase,U=r.parent||Cn,O=(wi(a)||V1(a)?es(a[0]):"length"in r)?[a]:Ia(a),C,L,P,w,V,b,R,I;if(f._targets=O.length?_g(O):zc("GSAP target "+a+" not found. https://gsap.com",!Sa.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,E||v||Dh(d)||Dh(_)){if(r=f.vars,C=f.timeline=new Bi({data:"nested",defaults:M||{},targets:U&&U.data==="nested"?U.vars.targets:O}),C.kill(),C.parent=C._dp=Gr(f),C._start=0,v||Dh(d)||Dh(_)){if(w=O.length,R=v&&rE(v),gr(v))for(V in v)~SE.indexOf(V)&&(I||(I={}),I[V]=v[V]);for(L=0;L<w;L++)P=cd(r,yE),P.stagger=0,S&&(P.yoyoEase=S),I&&iu(P,I),b=O[L],P.duration=+yc(d,Gr(f),L,b,O),P.delay=(+yc(_,Gr(f),L,b,O)||0)-f._delay,!v&&w===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),C.to(b,P,R?R(L,b,O):0),C._ease=Ve.none;C.duration()?d=_=0:f.timeline=0}else if(E){xc(Ma(C.vars.defaults,{ease:"none"})),C._ease=No(E.ease||r.ease||"none");var k=0,j,it,et;if(wi(E))E.forEach(function(F){return C.to(O,F,">")}),C.duration();else{P={};for(V in E)V==="ease"||V==="easeEach"||RU(V,E[V],P,E.easeEach);for(V in P)for(j=P[V].sort(function(F,G){return F.t-G.t}),k=0,L=0;L<j.length;L++)it=j[L],et={ease:it.e,duration:(it.t-(L?j[L-1].t:0))/100*d},et[V]=it.v,C.to(O,et,k),k+=et.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return x===!0&&!ug&&(Ps=Gr(f),Cn.killTweensOf(O),Ps=0),lr(U,Gr(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(g||!d&&!E&&f._start===Rn(U._time)&&Ki(g)&&aU(Gr(f))&&U.data!=="nested")&&(f._tTime=-pn,f.render(Math.max(0,-_)||0)),y&&eE(Gr(f),y),f}var n=t.prototype;return n.render=function(r,l,c){var f=this._time,p=this._tDur,d=this._dur,_=r<0,g=r>p-pn&&!_?p:r<pn?0:r,v,x,E,M,y,S,U,O,C;if(!d)sU(this,r,l,c);else if(g!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,O=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+r,l,c);if(v=Rn(g%M),g===p?(E=this._repeat,v=d):(y=Rn(g/M),E=~~y,E&&E===y?(v=d,E--):v>d&&(v=d)),S=this._yoyo&&E&1,S&&(C=this._yEase,v=d-v),y=au(this._tTime,M),v===f&&!c&&this._initted&&E===y)return this._tTime=g,this;E!==y&&(O&&this._yEase&&_E(O,S),this.vars.repeatRefresh&&!S&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(Rn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(nE(this,_?r:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==y))return this;if(d!==this._dur)return this.render(r,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=U=(C||this._ease)(v/d),this._from&&(this.ratio=U=1-U),!f&&g&&!l&&!y&&(va(this,"onStart"),this._tTime!==g))return this;for(x=this._pt;x;)x.r(U,x.d),x=x._next;O&&O.render(r<0?r:O._dur*O._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(_&&w0(this,r,l,c),va(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!l&&this.parent&&va(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&w0(this,r,!0,!0),(r||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Xs(this,1),!l&&!(_&&!f)&&(g||f||S)&&(va(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},n.resetTo=function(r,l,c,f,p){Ic||_a.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||xg(this,d),_=this._ease(d/this._dur),bU(this,r,l,c,f,_,d,p)?this.resetTo(r,l,c,f,1):(Ad(this,0),this.parent||$1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?hc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Ps&&Ps.vars.overwrite!==!0)._first||hc(this),this.parent&&c!==this.timeline.totalDuration()&&ru(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=r?Ia(r):f,d=this._ptLookup,_=this._pt,g,v,x,E,M,y,S;if((!l||l==="all")&&nU(f,p))return l==="all"&&(this._pt=0),hc(this);for(g=this._op=this._op||[],l!=="all"&&(ri(l)&&(M={},Qi(l,function(U){return M[U]=1}),l=M),l=AU(f,l)),S=f.length;S--;)if(~p.indexOf(f[S])){v=d[S],l==="all"?(g[S]=l,E=v,x={}):(x=g[S]=g[S]||{},E=l);for(M in E)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&Td(this,y,"_pt"),delete v[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&_&&hc(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return Sc(1,arguments)},t.delayedCall=function(r,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(r,l,c){return Sc(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return Cn.killTweensOf(r,l,c)},t})(Hc);Ma(Wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qi("staggerTo,staggerFrom,staggerFromTo",function(o){Wn[o]=function(){var t=new Bi,n=U0.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Sg=function(t,n,a){return t[n]=a},ME=function(t,n,a){return t[n](a)},CU=function(t,n,a,r){return t[n](r.fp,a)},wU=function(t,n,a){return t.setAttribute(n,a)},yg=function(t,n){return On(t[n])?ME:cg(t[n])&&t.setAttribute?wU:Sg},EE=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},DU=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},TE=function(t,n){var a=n._pt,r="";if(!t&&n.b)r=n.b;else if(t===1&&n.e)r=n.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+r,a=a._next;r+=n.c}n.set(n.t,n.p,r,n)},Mg=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},UU=function(t,n,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,n,a),l=c},LU=function(t){for(var n=this._pt,a,r;n;)r=n._next,n.p===t&&!n.op||n.op===t?Td(this,n,"_pt"):n.dep||(a=1),n=r;return!a},NU=function(t,n,a,r){r.mSet(t,n,r.m.call(r.tween,a,r.mt),r)},bE=function(t){for(var n=t._pt,a,r,l,c;n;){for(a=n._next,r=l;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:c)?n._prev._next=n:l=n,(n._next=r)?r._prev=n:c=n,n=a}t._pt=l},Ji=(function(){function o(n,a,r,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||EE,this.d=p||this,this.set=d||Sg,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=NU,this.m=a,this.mt=l,this.tween=r},o})();Qi(mg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return pg[o]=1});ya.TweenMax=ya.TweenLite=Wn;ya.TimelineLite=ya.TimelineMax=Bi;Cn=new Bi({sortChildren:!1,defaults:nu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sa.stringFilter=pE;var Oo=[],Qh={},OU=[],wM=0,PU=0,M_=function(t){return(Qh[t]||OU).map(function(n){return n()})},P0=function(){var t=Date.now(),n=[];t-wM>2&&(M_("matchMediaInit"),Oo.forEach(function(a){var r=a.queries,l=a.conditions,c,f,p,d;for(f in r)c=rr.matchMedia(r[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),M_("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),wM=t,M_("matchMedia"))},AE=(function(){function o(n,a){this.selector=a&&L0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=PU++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,r,l){On(a)&&(l=r,r=a,a=On);var c=this,f=function(){var d=bn,_=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=L0(l)),bn=c,g=r.apply(c,arguments),On(g)&&c._r.push(g),bn=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===On?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var r=bn;bn=null,a(this),bn=r},t.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof Wn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,r){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Bi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Wn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=Oo.length;c--;)Oo[c].id===this.id&&Oo.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),zU=(function(){function o(n){this.contexts=[],this.scope=n,bn&&bn.data.push(this)}var t=o.prototype;return t.add=function(a,r,l){gr(a)||(a={matches:a});var c=new AE(0,l||this.scope),f=c.conditions={},p,d,_;bn&&!c.selector&&(c.selector=bn.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(d in a)d==="all"?_=1:(p=rr.matchMedia(a[d]),p&&(Oo.indexOf(c)<0&&Oo.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(P0):p.addEventListener("change",P0)));return _&&r(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),hd={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(r){return fE(r)})},timeline:function(t){return new Bi(t)},getTweensOf:function(t,n){return Cn.getTweensOf(t,n)},getProperty:function(t,n,a,r){ri(t)&&(t=Ia(t)[0]);var l=Uo(t||{}).get,c=a?J1:Q1;return a==="native"&&(a=""),t&&(n?c((ha[n]&&ha[n].get||l)(t,n,a,r)):function(f,p,d){return c((ha[f]&&ha[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Ia(t),t.length>1){var r=t.map(function(_){return ta.quickSetter(_,n,a)}),l=r.length;return function(_){for(var g=l;g--;)r[g](_)}}t=t[0]||{};var c=ha[n],f=Uo(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;Gl._pt=0,g.init(t,a?_+a:_,Gl,0,[t]),g.render(1,g),Gl._pt&&Mg(1,Gl)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var r,l=ta.to(t,Ma((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return Cn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=No(t.ease,nu.ease)),TM(nu,t||{})},config:function(t){return TM(Sa,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!ha[f]&&!ya[f]&&zc(n+" effect requires "+f+" plugin.")}),v_[n]=function(f,p,d){return a(Ia(f),Ma(p||{},l),d)},c&&(Bi.prototype[n]=function(f,p,d){return this.add(v_[n](f,gr(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Ve[t]=No(n)},parseEase:function(t,n){return arguments.length?No(t,n):Ve},getById:function(t){return Cn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Bi(t),r,l;for(a.smoothChildTiming=Ki(t.smoothChildTiming),Cn.remove(a),a._dp=0,a._time=a._tTime=Cn._time,r=Cn._first;r;)l=r._next,(n||!(!r._dur&&r instanceof Wn&&r.vars.onComplete===r._targets[0]))&&lr(a,r,r._start-r._delay),r=l;return lr(Cn,a,0),a},context:function(t,n){return t?new AE(t,n):bn},matchMedia:function(t){return new zU(t)},matchMediaRefresh:function(){return Oo.forEach(function(t){var n=t.conditions,a,r;for(r in n)n[r]&&(n[r]=!1,a=1);a&&t.revert()})||P0()},addEventListener:function(t,n){var a=Qh[t]||(Qh[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Qh[t],r=a&&a.indexOf(n);r>=0&&a.splice(r,1)},utils:{wrap:pU,wrapYoyo:mU,distribute:rE,random:oE,snap:sE,normalize:dU,getUnit:Ai,clamp:uU,splitColor:hE,toArray:Ia,selector:L0,mapRange:uE,pipe:fU,unitize:hU,interpolate:_U,shuffle:aE},install:q1,effects:v_,ticker:_a,updateRoot:Bi.updateRoot,plugins:ha,globalTimeline:Cn,core:{PropTween:Ji,globals:Y1,Tween:Wn,Timeline:Bi,Animation:Hc,getCache:Uo,_removeLinkedListItem:Td,reverting:function(){return vi},context:function(t){return t&&bn&&(bn.data.push(t),t._ctx=bn),bn},suppressOverwrites:function(t){return ug=t}}};Qi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return hd[o]=Wn[o]});_a.add(Bi.updateRoot);Gl=hd.to({},{duration:0});var FU=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},BU=function(t,n){var a=t._targets,r,l,c;for(r in n)for(l=a.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=FU(c,r)),c&&c.modifier&&c.modifier(n[r],t,a[l],r))},E_=function(t,n){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var p,d;if(ri(l)&&(p={},Qi(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}BU(f,l)}}}},ta=hd.registerPlugin({name:"attr",init:function(t,n,a,r,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],r,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)vi?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},E_("roundProps",N0),E_("modifiers"),E_("snap",sE))||hd;Wn.version=Bi.version=ta.version="3.14.2";W1=1;fg()&&su();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;var DM,zs,ql,Eg,Co,UM,Tg,IU=function(){return typeof window<"u"},ns={},yo=180/Math.PI,Yl=Math.PI/180,Pl=Math.atan2,LM=1e8,bg=/([A-Z])/g,HU=/(left|right|width|margin|padding|x)/i,GU=/[\s,\(]\S/,fr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},z0=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},VU=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},kU=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},XU=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},WU=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},RE=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},CE=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},qU=function(t,n,a){return t.style[n]=a},YU=function(t,n,a){return t.style.setProperty(n,a)},ZU=function(t,n,a){return t._gsap[n]=a},jU=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},KU=function(t,n,a,r,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},QU=function(t,n,a,r,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},wn="transform",$i=wn+"Origin",JU=function o(t,n){var a=this,r=this.target,l=r.style,c=r._gsap;if(t in ns&&l){if(this.tfm=this.tfm||{},t!=="transform")t=fr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Vr(r,f)}):this.tfm[t]=c.x?c[t]:Vr(r,t),t===$i&&(this.tfm.zOrigin=c.zOrigin);else return fr.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(wn)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push($i,n,"")),t=wn}(l||n)&&this.props.push(t,n,l[t])},wE=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$U=function(){var t=this.props,n=this.target,a=n.style,r=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(bg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Tg(),(!l||!l.isStart)&&!a[wn]&&(wE(a),r.zOrigin&&a[$i]&&(a[$i]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},DE=function(t,n){var a={target:t,props:[],revert:$U,save:JU};return t._gsap||ta.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(r){return a.save(r)}),a},UE,F0=function(t,n){var a=zs.createElementNS?zs.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):zs.createElement(t);return a&&a.style?a:zs.createElement(t)},xa=function o(t,n,a){var r=getComputedStyle(t);return r[n]||r.getPropertyValue(n.replace(bg,"-$1").toLowerCase())||r.getPropertyValue(n)||!a&&o(t,ou(n)||n,1)||""},NM="O,Moz,ms,Ms,Webkit".split(","),ou=function(t,n,a){var r=n||Co,l=r.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(NM[c]+t in l););return c<0?null:(c===3?"ms":c>=0?NM[c]:"")+t},B0=function(){IU()&&window.document&&(DM=window,zs=DM.document,ql=zs.documentElement,Co=F0("div")||{style:{}},F0("div"),wn=ou(wn),$i=wn+"Origin",Co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",UE=!!ou("perspective"),Tg=ta.core.reverting,Eg=1)},OM=function(t){var n=t.ownerSVGElement,a=F0("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",a.appendChild(r),ql.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),ql.removeChild(a),l},PM=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},LE=function(t){var n,a;try{n=t.getBBox()}catch{n=OM(t),a=1}return n&&(n.width||n.height)||a||(n=OM(t)),n&&!n.width&&!n.x&&!n.y?{x:+PM(t,["x","cx","x1"])||0,y:+PM(t,["y","cy","y1"])||0,width:0,height:0}:n},NE=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&LE(t))},Ws=function(t,n){if(n){var a=t.style,r;n in ns&&n!==$i&&(n=wn),a.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(r==="--"?n:n.replace(bg,"-$1").toLowerCase())):a.removeAttribute(n)}},Fs=function(t,n,a,r,l,c){var f=new Ji(t._pt,n,a,0,1,c?CE:RE);return t._pt=f,f.b=r,f.e=l,t._props.push(a),f},zM={deg:1,rad:1,turn:1},tL={grid:1,flex:1},qs=function o(t,n,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Co.style,p=HU.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=r==="px",x=r==="%",E,M,y,S;if(r===c||!l||zM[r]||zM[c])return l;if(c!=="px"&&!v&&(l=o(t,n,a,"px")),S=t.getCTM&&NE(t),(x||c==="%")&&(ns[n]||~n.indexOf("adius")))return E=S?t.getBBox()[p?"width":"height"]:t[_],Fn(x?l/E*g:l/100*E);if(f[p?"width":"height"]=g+(v?c:r),M=r!=="rem"&&~n.indexOf("adius")||r==="em"&&t.appendChild&&!d?t:t.parentNode,S&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===zs||!M.appendChild)&&(M=zs.body),y=M._gsap,y&&x&&y.width&&p&&y.time===_a.time&&!y.uncache)return Fn(l/y.width*g);if(x&&(n==="height"||n==="width")){var U=t.style[n];t.style[n]=g+r,E=t[_],U?t.style[n]=U:Ws(t,n)}else(x||c==="%")&&!tL[xa(M,"display")]&&(f.position=xa(t,"position")),M===t&&(f.position="static"),M.appendChild(Co),E=Co[_],M.removeChild(Co),f.position="absolute";return p&&x&&(y=Uo(M),y.time=_a.time,y.width=M[_]),Fn(v?E*l/g:E&&l?g/E*l:0)},Vr=function(t,n,a,r){var l;return Eg||B0(),n in fr&&n!=="transform"&&(n=fr[n],~n.indexOf(",")&&(n=n.split(",")[0])),ns[n]&&n!=="transform"?(l=Vc(t,r),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:pd(xa(t,$i))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=dd[n]&&dd[n](t,n,a)||xa(t,n)||j1(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?qs(t,n,l,a)+a:l},eL=function(t,n,a,r){if(!a||a==="none"){var l=ou(n,t,1),c=l&&xa(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=xa(t,"borderTopColor"))}var f=new Ji(this._pt,t.style,n,0,1,TE),p=0,d=0,_,g,v,x,E,M,y,S,U,O,C,L;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=xa(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=t.style[n],t.style[n]=r,r=xa(t,n)||r,M?t.style[n]=M:Ws(t,n)),_=[a,r],pE(_),a=_[0],r=_[1],v=a.match(Hl)||[],L=r.match(Hl)||[],L.length){for(;g=Hl.exec(r);)y=g[0],U=r.substring(p,g.index),E?E=(E+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(E=1),y!==(M=v[d++]||"")&&(x=parseFloat(M)||0,C=M.substr((x+"").length),y.charAt(1)==="="&&(y=Wl(x,y)+C),S=parseFloat(y),O=y.substr((S+"").length),p=Hl.lastIndex-O.length,O||(O=O||Sa.units[n]||C,p===r.length&&(r+=O,f.e+=O)),C!==O&&(x=qs(t,n,M,O)||0),f._pt={_next:f._pt,p:U||d===1?U:",",s:x,c:S-x,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=n==="display"&&r==="none"?CE:RE;return X1.test(r)&&(f.e=0),this._pt=f,f},FM={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nL=function(t){var n=t.split(" "),a=n[0],r=n[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(t=a,a=r,r=t),n[0]=FM[a]||a,n[1]=FM[r]||r,n.join(" ")},iL=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,r=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],ns[f]&&(p=1,f=f==="transformOrigin"?$i:wn),Ws(a,f);p&&(Ws(a,wn),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Vc(a,1),c.uncache=1,wE(r)))}},dd={clearProps:function(t,n,a,r,l){if(l.data!=="isFromStart"){var c=t._pt=new Ji(t._pt,n,a,0,0,iL);return c.u=r,c.pr=-10,c.tween=l,t._props.push(a),1}}},Gc=[1,0,0,1,0,0],OE={},PE=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},BM=function(t){var n=xa(t,wn);return PE(n)?Gc:n.substr(7).match(k1).map(Fn)},Ag=function(t,n){var a=t._gsap||Uo(t),r=t.style,l=BM(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Gc:l):(l===Gc&&!t.offsetParent&&t!==ql&&!a.svg&&(p=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,ql.appendChild(t)),l=BM(t),p?r.display=p:Ws(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):ql.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},I0=function(t,n,a,r,l,c){var f=t._gsap,p=l||Ag(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,x=p[0],E=p[1],M=p[2],y=p[3],S=p[4],U=p[5],O=n.split(" "),C=parseFloat(O[0])||0,L=parseFloat(O[1])||0,P,w,V,b;a?p!==Gc&&(w=x*y-E*M)&&(V=C*(y/w)+L*(-M/w)+(M*U-y*S)/w,b=C*(-E/w)+L*(x/w)-(x*U-E*S)/w,C=V,L=b):(P=LE(t),C=P.x+(~O[0].indexOf("%")?C/100*P.width:C),L=P.y+(~(O[1]||O[0]).indexOf("%")?L/100*P.height:L)),r||r!==!1&&f.smooth?(S=C-d,U=L-_,f.xOffset=g+(S*x+U*M)-S,f.yOffset=v+(S*E+U*y)-U):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=L,f.smooth=!!r,f.origin=n,f.originIsAbsolute=!!a,t.style[$i]="0px 0px",c&&(Fs(c,f,"xOrigin",d,C),Fs(c,f,"yOrigin",_,L),Fs(c,f,"xOffset",g,f.xOffset),Fs(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+L)},Vc=function(t,n){var a=t._gsap||new vE(t);if("x"in a&&!n&&!a.uncache)return a;var r=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=xa(t,$i)||"0",_,g,v,x,E,M,y,S,U,O,C,L,P,w,V,b,R,I,k,j,it,et,F,G,Q,gt,H,z,nt,mt,Mt,wt;return _=g=v=M=y=S=U=O=C=0,x=E=1,a.svg=!!(t.getCTM&&NE(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[wn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[wn]!=="none"?p[wn]:"")),r.scale=r.rotate=r.translate="none"),w=Ag(t,a.svg),a.svg&&(a.uncache?(Q=t.getBBox(),d=a.xOrigin-Q.x+"px "+(a.yOrigin-Q.y)+"px",G=""):G=!n&&t.getAttribute("data-svg-origin"),I0(t,G||d,!!G||a.originIsAbsolute,a.smooth!==!1,w)),L=a.xOrigin||0,P=a.yOrigin||0,w!==Gc&&(I=w[0],k=w[1],j=w[2],it=w[3],_=et=w[4],g=F=w[5],w.length===6?(x=Math.sqrt(I*I+k*k),E=Math.sqrt(it*it+j*j),M=I||k?Pl(k,I)*yo:0,U=j||it?Pl(j,it)*yo+M:0,U&&(E*=Math.abs(Math.cos(U*Yl))),a.svg&&(_-=L-(L*I+P*j),g-=P-(L*k+P*it))):(wt=w[6],mt=w[7],H=w[8],z=w[9],nt=w[10],Mt=w[11],_=w[12],g=w[13],v=w[14],V=Pl(wt,nt),y=V*yo,V&&(b=Math.cos(-V),R=Math.sin(-V),G=et*b+H*R,Q=F*b+z*R,gt=wt*b+nt*R,H=et*-R+H*b,z=F*-R+z*b,nt=wt*-R+nt*b,Mt=mt*-R+Mt*b,et=G,F=Q,wt=gt),V=Pl(-j,nt),S=V*yo,V&&(b=Math.cos(-V),R=Math.sin(-V),G=I*b-H*R,Q=k*b-z*R,gt=j*b-nt*R,Mt=it*R+Mt*b,I=G,k=Q,j=gt),V=Pl(k,I),M=V*yo,V&&(b=Math.cos(V),R=Math.sin(V),G=I*b+k*R,Q=et*b+F*R,k=k*b-I*R,F=F*b-et*R,I=G,et=Q),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,S=180-S),x=Fn(Math.sqrt(I*I+k*k+j*j)),E=Fn(Math.sqrt(F*F+wt*wt)),V=Pl(et,F),U=Math.abs(V)>2e-4?V*yo:0,C=Mt?1/(Mt<0?-Mt:Mt):0),a.svg&&(G=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!PE(xa(t,wn)),G&&t.setAttribute("transform",G))),Math.abs(U)>90&&Math.abs(U)<270&&(l?(x*=-1,U+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,U+=U<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=Fn(x),a.scaleY=Fn(E),a.rotation=Fn(M)+f,a.rotationX=Fn(y)+f,a.rotationY=Fn(S)+f,a.skewX=U+f,a.skewY=O+f,a.transformPerspective=C+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(r[$i]=pd(d)),a.xOffset=a.yOffset=0,a.force3D=Sa.force3D,a.renderTransform=a.svg?rL:UE?zE:aL,a.uncache=0,a},pd=function(t){return(t=t.split(" "))[0]+" "+t[1]},T_=function(t,n,a){var r=Ai(n);return Fn(parseFloat(n)+parseFloat(qs(t,"x",a+"px",r)))+r},aL=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,zE(t,n)},vo="0deg",oc="0px",xo=") ",zE=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,x=a.skewY,E=a.scaleX,M=a.scaleY,y=a.transformPerspective,S=a.force3D,U=a.target,O=a.zOrigin,C="",L=S==="auto"&&t&&t!==1||S===!0;if(O&&(g!==vo||_!==vo)){var P=parseFloat(_)*Yl,w=Math.sin(P),V=Math.cos(P),b;P=parseFloat(g)*Yl,b=Math.cos(P),c=T_(U,c,w*b*-O),f=T_(U,f,-Math.sin(P)*-O),p=T_(U,p,V*b*-O+O)}y!==oc&&(C+="perspective("+y+xo),(r||l)&&(C+="translate("+r+"%, "+l+"%) "),(L||c!==oc||f!==oc||p!==oc)&&(C+=p!==oc||L?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+xo),d!==vo&&(C+="rotate("+d+xo),_!==vo&&(C+="rotateY("+_+xo),g!==vo&&(C+="rotateX("+g+xo),(v!==vo||x!==vo)&&(C+="skew("+v+", "+x+xo),(E!==1||M!==1)&&(C+="scale("+E+", "+M+xo),U.style[wn]=C||"translate(0, 0)"},rL=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,x=a.target,E=a.xOrigin,M=a.yOrigin,y=a.xOffset,S=a.yOffset,U=a.forceCSS,O=parseFloat(c),C=parseFloat(f),L,P,w,V,b;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Yl,d*=Yl,L=Math.cos(p)*g,P=Math.sin(p)*g,w=Math.sin(p-d)*-v,V=Math.cos(p-d)*v,d&&(_*=Yl,b=Math.tan(d-_),b=Math.sqrt(1+b*b),w*=b,V*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),L*=b,P*=b)),L=Fn(L),P=Fn(P),w=Fn(w),V=Fn(V)):(L=g,V=v,P=w=0),(O&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(O=qs(x,"x",c,"px"),C=qs(x,"y",f,"px")),(E||M||y||S)&&(O=Fn(O+E-(E*L+M*w)+y),C=Fn(C+M-(E*P+M*V)+S)),(r||l)&&(b=x.getBBox(),O=Fn(O+r/100*b.width),C=Fn(C+l/100*b.height)),b="matrix("+L+","+P+","+w+","+V+","+O+","+C+")",x.setAttribute("transform",b),U&&(x.style[wn]=b)},sL=function(t,n,a,r,l){var c=360,f=ri(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?yo:1),d=p-r,_=r+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*LM)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*LM)%c-~~(d/c)*c)),t._pt=v=new Ji(t._pt,n,a,r,d,VU),v.e=_,v.u="deg",t._props.push(a),v},IM=function(t,n){for(var a in n)t[a]=n[a];return t},oL=function(t,n,a){var r=IM({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,x,E;r.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[wn]=n,f=Vc(a,1),Ws(a,wn),a.setAttribute("transform",d)):(d=getComputedStyle(a)[wn],c[wn]=n,f=Vc(a,1),c[wn]=d);for(p in ns)d=r[p],_=f[p],d!==_&&l.indexOf(p)<0&&(x=Ai(d),E=Ai(_),g=x!==E?qs(a,p,d,E):parseFloat(d),v=parseFloat(_),t._pt=new Ji(t._pt,f,p,g,v-g,z0),t._pt.u=E||0,t._props.push(p));IM(f,r)};Qi("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",r="Bottom",l="Left",c=(t<3?[n,a,r,l]:[n+l,n+a,r+a,r+l]).map(function(f){return t<2?o+f:"border"+f+o});dd[t>1?"border"+o:o]=function(f,p,d,_,g){var v,x;if(arguments.length<4)return v=c.map(function(E){return Vr(f,E,d)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(_+"").split(" "),x={},c.forEach(function(E,M){return x[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,x,g)}});var FE={name:"css",register:B0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,r,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,x,E,M,y,S,U,O,C,L,P,w,V,b;Eg||B0(),this.styles=this.styles||DE(t),V=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(ha[M]&&xE(M,n,a,r,t,l)))){if(x=typeof _,E=dd[M],x==="function"&&(_=_.call(a,r,t,l),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=Bc(_)),E)E(this,t,M,_,a)&&(w=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Gs.lastIndex=0,Gs.test(d)||(y=Ai(d),S=Ai(_),S?y!==S&&(d=qs(t,M,d,S)+S):y&&(_+=y)),this.add(f,"setProperty",d,_,r,l,0,0,M),c.push(M),V.push(M,0,f[M]);else if(x!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,r,t,l):p[M],ri(d)&&~d.indexOf("random(")&&(d=Bc(d)),Ai(d+"")||d==="auto"||(d+=Sa.units[M]||Ai(Vr(t,M))||""),(d+"").charAt(1)==="="&&(d=Vr(t,M))):d=Vr(t,M),v=parseFloat(d),U=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),U&&(_=_.substr(2)),g=parseFloat(_),M in fr&&(M==="autoAlpha"&&(v===1&&Vr(t,"visibility")==="hidden"&&g&&(v=0),V.push("visibility",0,f.visibility),Fs(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=fr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),O=M in ns,O){if(this.styles.save(M),b=_,x==="string"&&_.substring(0,6)==="var(--"){if(_=xa(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=_,_=xa(t,"perspective"),R?t.style.perspective=R:Ws(t,"perspective")}g=parseFloat(_)}if(C||(L=t._gsap,L.renderTransform&&!n.parseTransform||Vc(t,n.parseTransform),P=n.smoothOrigin!==!1&&L.smooth,C=this._pt=new Ji(this._pt,f,wn,0,1,L.renderTransform,L,0,-1),C.dep=1),M==="scale")this._pt=new Ji(this._pt,L,"scaleY",L.scaleY,(U?Wl(L.scaleY,U+g):g)-L.scaleY||0,z0),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){V.push($i,0,f[$i]),_=nL(_),L.svg?I0(t,_,0,P,0,this):(S=parseFloat(_.split(" ")[2])||0,S!==L.zOrigin&&Fs(this,L,"zOrigin",L.zOrigin,S),Fs(this,f,M,pd(d),pd(_)));continue}else if(M==="svgOrigin"){I0(t,_,1,P,0,this);continue}else if(M in OE){sL(this,L,M,v,U?Wl(v,U+_):_);continue}else if(M==="smoothOrigin"){Fs(this,L,"smooth",L.smooth,_);continue}else if(M==="force3D"){L[M]=_;continue}else if(M==="transform"){oL(this,_,t);continue}}else M in f||(M=ou(M)||M);if(O||(g||g===0)&&(v||v===0)&&!GU.test(_)&&M in f)y=(d+"").substr((v+"").length),g||(g=0),S=Ai(_)||(M in Sa.units?Sa.units[M]:y),y!==S&&(v=qs(t,M,d,S)),this._pt=new Ji(this._pt,O?L:f,M,v,(U?Wl(v,U+g):g)-v,!O&&(S==="px"||M==="zIndex")&&n.autoRound!==!1?WU:z0),this._pt.u=S||0,O&&b!==_?(this._pt.b=d,this._pt.e=b,this._pt.r=XU):y!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=kU);else if(M in f)eL.call(this,t,M,d,U?U+_:_);else if(M in t)this.add(t,M,d||t[M],U?U+_:_,r,l);else if(M!=="parseTransform"){dg(M,_);continue}O||(M in f?V.push(M,0,f[M]):typeof t[M]=="function"?V.push(M,2,t[M]()):V.push(M,1,d||t[M])),c.push(M)}}w&&bE(this)},render:function(t,n){if(n.tween._time||!Tg())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Vr,aliases:fr,getSetter:function(t,n,a){var r=fr[n];return r&&r.indexOf(",")<0&&(n=r),n in ns&&n!==$i&&(t._gsap.x||Vr(t,"x"))?a&&UM===a?n==="scale"?jU:ZU:(UM=a||{})&&(n==="scale"?KU:QU):t.style&&!cg(t.style[n])?qU:~n.indexOf("-")?YU:yg(t,n)},core:{_removeProperty:Ws,_getMatrix:Ag}};ta.utils.checkPrefix=ou;ta.core.getStyleSaver=DE;(function(o,t,n,a){var r=Qi(o+","+t+","+n,function(l){ns[l]=1});Qi(t,function(l){Sa.units[l]="deg",OE[l]=1}),fr[r[13]]=o+","+t,Qi(a,function(l){var c=l.split(":");fr[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Sa.units[o]="px"});ta.registerPlugin(FE);var BE=ta.registerPlugin(FE)||ta;BE.core.Tween;function lL(o,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(o,a.key,a)}}function uL(o,t,n){return t&&lL(o.prototype,t),o}var _i,Jh,ga,Bs,Is,Zl,IE,Mo,Mc,HE,qr,Za,GE,VE=function(){return _i||typeof window<"u"&&(_i=window.gsap)&&_i.registerPlugin&&_i},kE=1,Vl=[],Ne=[],mr=[],Ec=Date.now,H0=function(t,n){return n},cL=function(){var t=Mc.core,n=t.bridge||{},a=t._scrollers,r=t._proxies;a.push.apply(a,Ne),r.push.apply(r,mr),Ne=a,mr=r,H0=function(c,f){return n[c](f)}},Vs=function(t,n){return~mr.indexOf(t)&&mr[mr.indexOf(t)+1][n]},Tc=function(t){return!!~HE.indexOf(t)},Li=function(t,n,a,r,l){return t.addEventListener(n,a,{passive:r!==!1,capture:!!l})},Ui=function(t,n,a,r){return t.removeEventListener(n,a,!!r)},Uh="scrollLeft",Lh="scrollTop",G0=function(){return qr&&qr.isPressed||Ne.cache++},md=function(t,n){var a=function r(l){if(l||l===0){kE&&(ga.history.scrollRestoration="manual");var c=qr&&qr.isPressed;l=r.v=Math.round(l)||(qr&&qr.iOS?1:0),t(l),r.cacheID=Ne.cache,c&&H0("ss",l)}else(n||Ne.cache!==r.cacheID||H0("ref"))&&(r.cacheID=Ne.cache,r.v=t());return r.v+r.offset};return a.offset=0,t&&a},Ii={s:Uh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:md(function(o){return arguments.length?ga.scrollTo(o,Kn.sc()):ga.pageXOffset||Bs[Uh]||Is[Uh]||Zl[Uh]||0})},Kn={s:Lh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ii,sc:md(function(o){return arguments.length?ga.scrollTo(Ii.sc(),o):ga.pageYOffset||Bs[Lh]||Is[Lh]||Zl[Lh]||0})},Zi=function(t,n){return(n&&n._ctx&&n._ctx.selector||_i.utils.toArray)(t)[0]||(typeof t=="string"&&_i.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},fL=function(t,n){for(var a=n.length;a--;)if(n[a]===t||n[a].contains(t))return!0;return!1},Ys=function(t,n){var a=n.s,r=n.sc;Tc(t)&&(t=Bs.scrollingElement||Is);var l=Ne.indexOf(t),c=r===Kn.sc?1:2;!~l&&(l=Ne.push(t)-1),Ne[l+c]||Li(t,"scroll",G0);var f=Ne[l+c],p=f||(Ne[l+c]=md(Vs(t,a),!0)||(Tc(t)?r:md(function(d){return arguments.length?t[a]=d:t[a]})));return p.target=t,f||(p.smooth=_i.getProperty(t,"scrollBehavior")==="smooth"),p},V0=function(t,n,a){var r=t,l=t,c=Ec(),f=c,p=n||50,d=Math.max(500,p*3),_=function(E,M){var y=Ec();M||y-c>p?(l=r,r=E,f=c,c=y):a?r+=E:r=l+(E-l)/(y-f)*(c-f)},g=function(){l=r=a?0:r,f=c=0},v=function(E){var M=f,y=l,S=Ec();return(E||E===0)&&E!==r&&_(E),c===f||S-f>d?0:(r+(a?y:-y))/((a?S:c)-M)*1e3};return{update:_,reset:g,getVelocity:v}},lc=function(t,n){return n&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},HM=function(t){var n=Math.max.apply(Math,t),a=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(a)?n:a},XE=function(){Mc=_i.core.globals().ScrollTrigger,Mc&&Mc.core&&cL()},WE=function(t){return _i=t||VE(),!Jh&&_i&&typeof document<"u"&&document.body&&(ga=window,Bs=document,Is=Bs.documentElement,Zl=Bs.body,HE=[ga,Bs,Is,Zl],_i.utils.clamp,GE=_i.core.context||function(){},Mo="onpointerenter"in Zl?"pointer":"mouse",IE=Bn.isTouch=ga.matchMedia&&ga.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ga||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Za=Bn.eventTypes=("ontouchstart"in Is?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Is?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kE=0},500),XE(),Jh=1),Jh};Ii.op=Kn;Ne.cache=0;var Bn=(function(){function o(n){this.init(n)}var t=o.prototype;return t.init=function(a){Jh||WE(_i)||console.warn("Please gsap.registerPlugin(Observer)"),Mc||XE();var r=a.tolerance,l=a.dragMinimum,c=a.type,f=a.target,p=a.lineHeight,d=a.debounce,_=a.preventDefault,g=a.onStop,v=a.onStopDelay,x=a.ignore,E=a.wheelSpeed,M=a.event,y=a.onDragStart,S=a.onDragEnd,U=a.onDrag,O=a.onPress,C=a.onRelease,L=a.onRight,P=a.onLeft,w=a.onUp,V=a.onDown,b=a.onChangeX,R=a.onChangeY,I=a.onChange,k=a.onToggleX,j=a.onToggleY,it=a.onHover,et=a.onHoverEnd,F=a.onMove,G=a.ignoreCheck,Q=a.isNormalizer,gt=a.onGestureStart,H=a.onGestureEnd,z=a.onWheel,nt=a.onEnable,mt=a.onDisable,Mt=a.onClick,wt=a.scrollSpeed,$=a.capture,st=a.allowClicks,At=a.lockAxis,Ot=a.onLockAxis;this.target=f=Zi(f)||Is,this.vars=a,x&&(x=_i.utils.toArray(x)),r=r||1e-9,l=l||0,E=E||1,wt=wt||1,c=c||"wheel,touch,pointer",d=d!==!1,p||(p=parseFloat(ga.getComputedStyle(Zl).lineHeight)||22);var Dt,le,Ue,Yt,ne,_e,ae,ot=this,q=0,ke=0,Se=a.passive||!_&&a.passive!==!1,ue=Ys(f,Ii),qt=Ys(f,Kn),B=ue(),A=qt(),Y=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Za[0]==="pointerdown",pt=Tc(f),_t=f.ownerDocument||Bs,ht=[0,0,0],Wt=[0,0,0],Ut=0,jt=function(){return Ut=Ec()},Zt=function(Kt,ye){return(ot.event=Kt)&&x&&fL(Kt.target,x)||ye&&Y&&Kt.pointerType!=="touch"||G&&G(Kt,ye)},Tt=function(){ot._vx.reset(),ot._vy.reset(),le.pause(),g&&g(ot)},Rt=function(){var Kt=ot.deltaX=HM(ht),ye=ot.deltaY=HM(Wt),Ht=Math.abs(Kt)>=r,pe=Math.abs(ye)>=r;I&&(Ht||pe)&&I(ot,Kt,ye,ht,Wt),Ht&&(L&&ot.deltaX>0&&L(ot),P&&ot.deltaX<0&&P(ot),b&&b(ot),k&&ot.deltaX<0!=q<0&&k(ot),q=ot.deltaX,ht[0]=ht[1]=ht[2]=0),pe&&(V&&ot.deltaY>0&&V(ot),w&&ot.deltaY<0&&w(ot),R&&R(ot),j&&ot.deltaY<0!=ke<0&&j(ot),ke=ot.deltaY,Wt[0]=Wt[1]=Wt[2]=0),(Yt||Ue)&&(F&&F(ot),Ue&&(y&&Ue===1&&y(ot),U&&U(ot),Ue=0),Yt=!1),_e&&!(_e=!1)&&Ot&&Ot(ot),ne&&(z(ot),ne=!1),Dt=0},It=function(Kt,ye,Ht){ht[Ht]+=Kt,Wt[Ht]+=ye,ot._vx.update(Kt),ot._vy.update(ye),d?Dt||(Dt=requestAnimationFrame(Rt)):Rt()},Bt=function(Kt,ye){At&&!ae&&(ot.axis=ae=Math.abs(Kt)>Math.abs(ye)?"x":"y",_e=!0),ae!=="y"&&(ht[2]+=Kt,ot._vx.update(Kt,!0)),ae!=="x"&&(Wt[2]+=ye,ot._vy.update(ye,!0)),d?Dt||(Dt=requestAnimationFrame(Rt)):Rt()},Lt=function(Kt){if(!Zt(Kt,1)){Kt=lc(Kt,_);var ye=Kt.clientX,Ht=Kt.clientY,pe=ye-ot.x,ie=Ht-ot.y,me=ot.isDragging;ot.x=ye,ot.y=Ht,(me||(pe||ie)&&(Math.abs(ot.startX-ye)>=l||Math.abs(ot.startY-Ht)>=l))&&(Ue||(Ue=me?2:1),me||(ot.isDragging=!0),Bt(pe,ie))}},de=ot.onPress=function(Gt){Zt(Gt,1)||Gt&&Gt.button||(ot.axis=ae=null,le.pause(),ot.isPressed=!0,Gt=lc(Gt),q=ke=0,ot.startX=ot.x=Gt.clientX,ot.startY=ot.y=Gt.clientY,ot._vx.reset(),ot._vy.reset(),Li(Q?f:_t,Za[1],Lt,Se,!0),ot.deltaX=ot.deltaY=0,O&&O(ot))},X=ot.onRelease=function(Gt){if(!Zt(Gt,1)){Ui(Q?f:_t,Za[1],Lt,!0);var Kt=!isNaN(ot.y-ot.startY),ye=ot.isDragging,Ht=ye&&(Math.abs(ot.x-ot.startX)>3||Math.abs(ot.y-ot.startY)>3),pe=lc(Gt);!Ht&&Kt&&(ot._vx.reset(),ot._vy.reset(),_&&st&&_i.delayedCall(.08,function(){if(Ec()-Ut>300&&!Gt.defaultPrevented){if(Gt.target.click)Gt.target.click();else if(_t.createEvent){var ie=_t.createEvent("MouseEvents");ie.initMouseEvent("click",!0,!0,ga,1,pe.screenX,pe.screenY,pe.clientX,pe.clientY,!1,!1,!1,!1,0,null),Gt.target.dispatchEvent(ie)}}})),ot.isDragging=ot.isGesturing=ot.isPressed=!1,g&&ye&&!Q&&le.restart(!0),Ue&&Rt(),S&&ye&&S(ot),C&&C(ot,Ht)}},Pt=function(Kt){return Kt.touches&&Kt.touches.length>1&&(ot.isGesturing=!0)&&gt(Kt,ot.isDragging)},bt=function(){return(ot.isGesturing=!1)||H(ot)},zt=function(Kt){if(!Zt(Kt)){var ye=ue(),Ht=qt();It((ye-B)*wt,(Ht-A)*wt,1),B=ye,A=Ht,g&&le.restart(!0)}},Et=function(Kt){if(!Zt(Kt)){Kt=lc(Kt,_),z&&(ne=!0);var ye=(Kt.deltaMode===1?p:Kt.deltaMode===2?ga.innerHeight:1)*E;It(Kt.deltaX*ye,Kt.deltaY*ye,0),g&&!Q&&le.restart(!0)}},xt=function(Kt){if(!Zt(Kt)){var ye=Kt.clientX,Ht=Kt.clientY,pe=ye-ot.x,ie=Ht-ot.y;ot.x=ye,ot.y=Ht,Yt=!0,g&&le.restart(!0),(pe||ie)&&Bt(pe,ie)}},Ct=function(Kt){ot.event=Kt,it(ot)},se=function(Kt){ot.event=Kt,et(ot)},Ie=function(Kt){return Zt(Kt)||lc(Kt,_)&&Mt(ot)};le=ot._dc=_i.delayedCall(v||.25,Tt).pause(),ot.deltaX=ot.deltaY=0,ot._vx=V0(0,50,!0),ot._vy=V0(0,50,!0),ot.scrollX=ue,ot.scrollY=qt,ot.isDragging=ot.isGesturing=ot.isPressed=!1,GE(this),ot.enable=function(Gt){return ot.isEnabled||(Li(pt?_t:f,"scroll",G0),c.indexOf("scroll")>=0&&Li(pt?_t:f,"scroll",zt,Se,$),c.indexOf("wheel")>=0&&Li(f,"wheel",Et,Se,$),(c.indexOf("touch")>=0&&IE||c.indexOf("pointer")>=0)&&(Li(f,Za[0],de,Se,$),Li(_t,Za[2],X),Li(_t,Za[3],X),st&&Li(f,"click",jt,!0,!0),Mt&&Li(f,"click",Ie),gt&&Li(_t,"gesturestart",Pt),H&&Li(_t,"gestureend",bt),it&&Li(f,Mo+"enter",Ct),et&&Li(f,Mo+"leave",se),F&&Li(f,Mo+"move",xt)),ot.isEnabled=!0,ot.isDragging=ot.isGesturing=ot.isPressed=Yt=Ue=!1,ot._vx.reset(),ot._vy.reset(),B=ue(),A=qt(),Gt&&Gt.type&&de(Gt),nt&&nt(ot)),ot},ot.disable=function(){ot.isEnabled&&(Vl.filter(function(Gt){return Gt!==ot&&Tc(Gt.target)}).length||Ui(pt?_t:f,"scroll",G0),ot.isPressed&&(ot._vx.reset(),ot._vy.reset(),Ui(Q?f:_t,Za[1],Lt,!0)),Ui(pt?_t:f,"scroll",zt,$),Ui(f,"wheel",Et,$),Ui(f,Za[0],de,$),Ui(_t,Za[2],X),Ui(_t,Za[3],X),Ui(f,"click",jt,!0),Ui(f,"click",Ie),Ui(_t,"gesturestart",Pt),Ui(_t,"gestureend",bt),Ui(f,Mo+"enter",Ct),Ui(f,Mo+"leave",se),Ui(f,Mo+"move",xt),ot.isEnabled=ot.isPressed=ot.isDragging=!1,mt&&mt(ot))},ot.kill=ot.revert=function(){ot.disable();var Gt=Vl.indexOf(ot);Gt>=0&&Vl.splice(Gt,1),qr===ot&&(qr=0)},Vl.push(ot),Q&&Tc(f)&&(qr=ot),ot.enable(M)},uL(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Bn.version="3.14.2";Bn.create=function(o){return new Bn(o)};Bn.register=WE;Bn.getAll=function(){return Vl.slice()};Bn.getById=function(o){return Vl.filter(function(t){return t.vars.id===o})[0]};VE()&&_i.registerPlugin(Bn);var Jt,Bl,Le,_n,pa,en,Rg,_d,kc,bc,pc,Nh,Ti,Rd,k0,Pi,GM,VM,Il,qE,b_,YE,Oi,X0,ZE,jE,Ls,W0,Cg,jl,wg,Ac,q0,A_,Oh=1,bi=Date.now,R_=bi(),Ha=0,mc=0,kM=function(t,n,a){var r=fa(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return a["_"+n+"Clamp"]=r,r?t.substr(6,t.length-7):t},XM=function(t,n){return n&&(!fa(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},hL=function o(){return mc&&requestAnimationFrame(o)},WM=function(){return Rd=1},qM=function(){return Rd=0},sr=function(t){return t},_c=function(t){return Math.round(t*1e5)/1e5||0},KE=function(){return typeof window<"u"},QE=function(){return Jt||KE()&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},Io=function(t){return!!~Rg.indexOf(t)},JE=function(t){return(t==="Height"?wg:Le["inner"+t])||pa["client"+t]||en["client"+t]},$E=function(t){return Vs(t,"getBoundingClientRect")||(Io(t)?function(){return id.width=Le.innerWidth,id.height=wg,id}:function(){return Xr(t)})},dL=function(t,n,a){var r=a.d,l=a.d2,c=a.a;return(c=Vs(t,"getBoundingClientRect"))?function(){return c()[r]}:function(){return(n?JE(l):t["client"+l])||0}},pL=function(t,n){return!n||~mr.indexOf(t)?$E(t):function(){return id}},hr=function(t,n){var a=n.s,r=n.d2,l=n.d,c=n.a;return Math.max(0,(a="scroll"+r)&&(c=Vs(t,a))?c()-$E(t)()[l]:Io(t)?(pa[a]||en[a])-JE(r):t[a]-t["offset"+r])},Ph=function(t,n){for(var a=0;a<Il.length;a+=3)(!n||~n.indexOf(Il[a+1]))&&t(Il[a],Il[a+1],Il[a+2])},fa=function(t){return typeof t=="string"},Ri=function(t){return typeof t=="function"},gc=function(t){return typeof t=="number"},Eo=function(t){return typeof t=="object"},uc=function(t,n,a){return t&&t.progress(n?0:1)&&a&&t.pause()},C_=function(t,n){if(t.enabled){var a=t._ctx?t._ctx.add(function(){return n(t)}):n(t);a&&a.totalTime&&(t.callbackAnimation=a)}},zl=Math.abs,tT="left",eT="top",Dg="right",Ug="bottom",Po="width",zo="height",Rc="Right",Cc="Left",wc="Top",Dc="Bottom",Xn="padding",za="margin",lu="Width",Lg="Height",jn="px",Fa=function(t){return Le.getComputedStyle(t)},mL=function(t){var n=Fa(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},YM=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},Xr=function(t,n){var a=n&&Fa(t)[k0]!=="matrix(1, 0, 0, 1, 0, 0)"&&Jt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return a&&a.progress(0).kill(),r},gd=function(t,n){var a=n.d2;return t["offset"+a]||t["client"+a]||0},nT=function(t){var n=[],a=t.labels,r=t.duration(),l;for(l in a)n.push(a[l]/r);return n},_L=function(t){return function(n){return Jt.utils.snap(nT(t),n)}},Ng=function(t){var n=Jt.utils.snap(t),a=Array.isArray(t)&&t.slice(0).sort(function(r,l){return r-l});return a?function(r,l,c){c===void 0&&(c=.001);var f;if(!l)return n(r);if(l>0){for(r-=c,f=0;f<a.length;f++)if(a[f]>=r)return a[f];return a[f-1]}else for(f=a.length,r+=c;f--;)if(a[f]<=r)return a[f];return a[0]}:function(r,l,c){c===void 0&&(c=.001);var f=n(r);return!l||Math.abs(f-r)<c||f-r<0==l<0?f:n(l<0?r-t:r+t)}},gL=function(t){return function(n,a){return Ng(nT(t))(n,a.direction)}},zh=function(t,n,a,r){return a.split(",").forEach(function(l){return t(n,l,r)})},ai=function(t,n,a,r,l){return t.addEventListener(n,a,{passive:!r,capture:!!l})},ii=function(t,n,a,r){return t.removeEventListener(n,a,!!r)},Fh=function(t,n,a){a=a&&a.wheelHandler,a&&(t(n,"wheel",a),t(n,"touchmove",a))},ZM={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bh={toggleActions:"play",anticipatePin:0},vd={top:0,left:0,center:.5,bottom:1,right:1},$h=function(t,n){if(fa(t)){var a=t.indexOf("="),r=~a?+(t.charAt(a-1)+1)*parseFloat(t.substr(a+1)):0;~a&&(t.indexOf("%")>a&&(r*=n/100),t=t.substr(0,a-1)),t=r+(t in vd?vd[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Ih=function(t,n,a,r,l,c,f,p){var d=l.startColor,_=l.endColor,g=l.fontSize,v=l.indent,x=l.fontWeight,E=_n.createElement("div"),M=Io(a)||Vs(a,"pinType")==="fixed",y=t.indexOf("scroller")!==-1,S=M?en:a,U=t.indexOf("start")!==-1,O=U?d:_,C="border-color:"+O+";font-size:"+g+";color:"+O+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((y||p)&&M?"fixed;":"absolute;"),(y||p||!M)&&(C+=(r===Kn?Dg:Ug)+":"+(c+parseFloat(v))+"px;"),f&&(C+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),E._isStart=U,E.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),E.style.cssText=C,E.innerText=n||n===0?t+"-"+n:t,S.children[0]?S.insertBefore(E,S.children[0]):S.appendChild(E),E._offset=E["offset"+r.op.d2],td(E,0,r,U),E},td=function(t,n,a,r){var l={display:"block"},c=a[r?"os2":"p2"],f=a[r?"p2":"os2"];t._isFlipped=r,l[a.a+"Percent"]=r?-100:0,l[a.a]=r?"1px":0,l["border"+c+lu]=1,l["border"+f+lu]=0,l[a.p]=n+"px",Jt.set(t,l)},De=[],Y0={},Xc,jM=function(){return bi()-Ha>34&&(Xc||(Xc=requestAnimationFrame(Kr)))},Fl=function(){(!Oi||!Oi.isPressed||Oi.startX>en.clientWidth)&&(Ne.cache++,Oi?Xc||(Xc=requestAnimationFrame(Kr)):Kr(),Ha||Go("scrollStart"),Ha=bi())},w_=function(){jE=Le.innerWidth,ZE=Le.innerHeight},vc=function(t){Ne.cache++,(t===!0||!Ti&&!YE&&!_n.fullscreenElement&&!_n.webkitFullscreenElement&&(!X0||jE!==Le.innerWidth||Math.abs(Le.innerHeight-ZE)>Le.innerHeight*.25))&&_d.restart(!0)},Ho={},vL=[],iT=function o(){return ii(Oe,"scrollEnd",o)||wo(!0)},Go=function(t){return Ho[t]&&Ho[t].map(function(n){return n()})||vL},ca=[],aT=function(t){for(var n=0;n<ca.length;n+=5)(!t||ca[n+4]&&ca[n+4].query===t)&&(ca[n].style.cssText=ca[n+1],ca[n].getBBox&&ca[n].setAttribute("transform",ca[n+2]||""),ca[n+3].uncache=1)},rT=function(){return Ne.forEach(function(t){return Ri(t)&&++t.cacheID&&(t.rec=t())})},Og=function(t,n){var a;for(Pi=0;Pi<De.length;Pi++)a=De[Pi],a&&(!n||a._ctx===n)&&(t?a.kill(1):a.revert(!0,!0));Ac=!0,n&&aT(n),n||Go("revert")},sT=function(t,n){Ne.cache++,(n||!zi)&&Ne.forEach(function(a){return Ri(a)&&a.cacheID++&&(a.rec=0)}),fa(t)&&(Le.history.scrollRestoration=Cg=t)},zi,Fo=0,KM,xL=function(){if(KM!==Fo){var t=KM=Fo;requestAnimationFrame(function(){return t===Fo&&wo(!0)})}},oT=function(){en.appendChild(jl),wg=!Oi&&jl.offsetHeight||Le.innerHeight,en.removeChild(jl)},QM=function(t){return kc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},wo=function(t,n){if(pa=_n.documentElement,en=_n.body,Rg=[Le,_n,pa,en],Ha&&!t&&!Ac){ai(Oe,"scrollEnd",iT);return}oT(),zi=Oe.isRefreshing=!0,Ac||rT();var a=Go("refreshInit");qE&&Oe.sort(),n||Og(),Ne.forEach(function(r){Ri(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),De.slice(0).forEach(function(r){return r.refresh()}),Ac=!1,De.forEach(function(r){if(r._subPinOffset&&r.pin){var l=r.vars.horizontal?"offsetWidth":"offsetHeight",c=r.pin[l];r.revert(!0,1),r.adjustPinSpacing(r.pin[l]-c),r.refresh()}}),q0=1,QM(!0),De.forEach(function(r){var l=hr(r.scroller,r._dir),c=r.vars.end==="max"||r._endClamp&&r.end>l,f=r._startClamp&&r.start>=l;(c||f)&&r.setPositions(f?l-1:r.start,c?Math.max(f?l:r.start+1,l):r.end,!0)}),QM(!1),q0=0,a.forEach(function(r){return r&&r.render&&r.render(-1)}),Ne.forEach(function(r){Ri(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),sT(Cg,1),_d.pause(),Fo++,zi=2,Kr(2),De.forEach(function(r){return Ri(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zi=Oe.isRefreshing=!1,Go("refresh")},Z0=0,ed=1,Uc,Kr=function(t){if(t===2||!zi&&!Ac){Oe.isUpdating=!0,Uc&&Uc.update(0);var n=De.length,a=bi(),r=a-R_>=50,l=n&&De[0].scroll();if(ed=Z0>l?-1:1,zi||(Z0=l),r&&(Ha&&!Rd&&a-Ha>200&&(Ha=0,Go("scrollEnd")),pc=R_,R_=a),ed<0){for(Pi=n;Pi-- >0;)De[Pi]&&De[Pi].update(0,r);ed=1}else for(Pi=0;Pi<n;Pi++)De[Pi]&&De[Pi].update(0,r);Oe.isUpdating=!1}Xc=0},j0=[tT,eT,Ug,Dg,za+Dc,za+Rc,za+wc,za+Cc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nd=j0.concat([Po,zo,"boxSizing","max"+lu,"max"+Lg,"position",za,Xn,Xn+wc,Xn+Rc,Xn+Dc,Xn+Cc]),SL=function(t,n,a){Kl(a);var r=t._gsap;if(r.spacerIsNative)Kl(r.spacerState);else if(t._gsap.swappedIn){var l=n.parentNode;l&&(l.insertBefore(t,n),l.removeChild(n))}t._gsap.swappedIn=!1},D_=function(t,n,a,r){if(!t._gsap.swappedIn){for(var l=j0.length,c=n.style,f=t.style,p;l--;)p=j0[l],c[p]=a[p];c.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(c.display="inline-block"),f[Ug]=f[Dg]="auto",c.flexBasis=a.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Po]=gd(t,Ii)+jn,c[zo]=gd(t,Kn)+jn,c[Xn]=f[za]=f[eT]=f[tT]="0",Kl(r),f[Po]=f["max"+lu]=a[Po],f[zo]=f["max"+Lg]=a[zo],f[Xn]=a[Xn],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},yL=/([A-Z])/g,Kl=function(t){if(t){var n=t.t.style,a=t.length,r=0,l,c;for((t.t._gsap||Jt.core.getCache(t.t)).uncache=1;r<a;r+=2)c=t[r+1],l=t[r],c?n[l]=c:n[l]&&n.removeProperty(l.replace(yL,"-$1").toLowerCase())}},Hh=function(t){for(var n=nd.length,a=t.style,r=[],l=0;l<n;l++)r.push(nd[l],a[nd[l]]);return r.t=t,r},ML=function(t,n,a){for(var r=[],l=t.length,c=a?8:0,f;c<l;c+=2)f=t[c],r.push(f,f in n?n[f]:t[c+1]);return r.t=t.t,r},id={left:0,top:0},JM=function(t,n,a,r,l,c,f,p,d,_,g,v,x,E){Ri(t)&&(t=t(p)),fa(t)&&t.substr(0,3)==="max"&&(t=v+(t.charAt(4)==="="?$h("0"+t.substr(3),a):0));var M=x?x.time():0,y,S,U;if(x&&x.seek(0),isNaN(t)||(t=+t),gc(t))x&&(t=Jt.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,v,t)),f&&td(f,a,r,!0);else{Ri(n)&&(n=n(p));var O=(t||"0").split(" "),C,L,P,w;U=Zi(n,p)||en,C=Xr(U)||{},(!C||!C.left&&!C.top)&&Fa(U).display==="none"&&(w=U.style.display,U.style.display="block",C=Xr(U),w?U.style.display=w:U.style.removeProperty("display")),L=$h(O[0],C[r.d]),P=$h(O[1]||"0",a),t=C[r.p]-d[r.p]-_+L+l-P,f&&td(f,P,r,a-P<20||f._isStart&&P>20),a-=a-P}if(E&&(p[E]=t||-.001,t<0&&(t=0)),c){var V=t+a,b=c._isStart;y="scroll"+r.d2,td(c,V,r,b&&V>20||!b&&(g?Math.max(en[y],pa[y]):c.parentNode[y])<=V+1),g&&(d=Xr(f),g&&(c.style[r.op.p]=d[r.op.p]-r.op.m-c._offset+jn))}return x&&U&&(y=Xr(U),x.seek(v),S=Xr(U),x._caScrollDist=y[r.p]-S[r.p],t=t/x._caScrollDist*v),x&&x.seek(M),x?t:Math.round(t)},EL=/(webkit|moz|length|cssText|inset)/i,$M=function(t,n,a,r){if(t.parentNode!==n){var l=t.style,c,f;if(n===en){t._stOrig=l.cssText,f=Fa(t);for(c in f)!+c&&!EL.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=a,l.left=r}else l.cssText=t._stOrig;Jt.core.getCache(t).uncache=1,n.appendChild(t)}},lT=function(t,n,a){var r=n,l=r;return function(c){var f=Math.round(t());return f!==r&&f!==l&&Math.abs(f-r)>3&&Math.abs(f-l)>3&&(c=f,a&&a()),l=r,r=Math.round(c),r}},Gh=function(t,n,a){var r={};r[n.p]="+="+a,Jt.set(t,r)},t1=function(t,n){var a=Ys(t,n),r="_scroll"+n.p2,l=function c(f,p,d,_,g){var v=c.tween,x=p.onComplete,E={};d=d||a();var M=lT(a,d,function(){v.kill(),c.tween=0});return g=_&&g||0,_=_||f-d,v&&v.kill(),p[r]=f,p.inherit=!1,p.modifiers=E,E[r]=function(){return M(d+_*v.ratio+g*v.ratio*v.ratio)},p.onUpdate=function(){Ne.cache++,c.tween&&Kr()},p.onComplete=function(){c.tween=0,x&&x.call(v)},v=c.tween=Jt.to(t,p),v};return t[r]=a,a.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},ai(t,"wheel",a.wheelHandler),Oe.isTouch&&ai(t,"touchmove",a.wheelHandler),l},Oe=(function(){function o(n,a){Bl||o.register(Jt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),W0(this),this.init(n,a)}var t=o.prototype;return t.init=function(a,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!mc){this.update=this.refresh=this.kill=sr;return}a=YM(fa(a)||gc(a)||a.nodeType?{trigger:a}:a,Bh);var l=a,c=l.onUpdate,f=l.toggleClass,p=l.id,d=l.onToggle,_=l.onRefresh,g=l.scrub,v=l.trigger,x=l.pin,E=l.pinSpacing,M=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,U=l.onSnapComplete,O=l.once,C=l.snap,L=l.pinReparent,P=l.pinSpacer,w=l.containerAnimation,V=l.fastScrollEnd,b=l.preventOverlaps,R=a.horizontal||a.containerAnimation&&a.horizontal!==!1?Ii:Kn,I=!g&&g!==0,k=Zi(a.scroller||Le),j=Jt.core.getCache(k),it=Io(k),et=("pinType"in a?a.pinType:Vs(k,"pinType")||it&&"fixed")==="fixed",F=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],G=I&&a.toggleActions.split(" "),Q="markers"in a?a.markers:Bh.markers,gt=it?0:parseFloat(Fa(k)["border"+R.p2+lu])||0,H=this,z=a.onRefreshInit&&function(){return a.onRefreshInit(H)},nt=dL(k,it,R),mt=pL(k,it),Mt=0,wt=0,$=0,st=Ys(k,R),At,Ot,Dt,le,Ue,Yt,ne,_e,ae,ot,q,ke,Se,ue,qt,B,A,Y,pt,_t,ht,Wt,Ut,jt,Zt,Tt,Rt,It,Bt,Lt,de,X,Pt,bt,zt,Et,xt,Ct,se;if(H._startClamp=H._endClamp=!1,H._dir=R,y*=45,H.scroller=k,H.scroll=w?w.time.bind(w):st,le=st(),H.vars=a,r=r||a.animation,"refreshPriority"in a&&(qE=1,a.refreshPriority===-9999&&(Uc=H)),j.tweenScroll=j.tweenScroll||{top:t1(k,Kn),left:t1(k,Ii)},H.tweenTo=At=j.tweenScroll[R.p],H.scrubDuration=function(Ht){Pt=gc(Ht)&&Ht,Pt?X?X.duration(Ht):X=Jt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Pt,paused:!0,onComplete:function(){return S&&S(H)}}):(X&&X.progress(1).kill(),X=0)},r&&(r.vars.lazy=!1,r._initted&&!H.isReverted||r.vars.immediateRender!==!1&&a.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),H.animation=r.pause(),r.scrollTrigger=H,H.scrubDuration(g),Lt=0,p||(p=r.vars.id)),C&&((!Eo(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in en.style&&Jt.set(it?[en,pa]:k,{scrollBehavior:"auto"}),Ne.forEach(function(Ht){return Ri(Ht)&&Ht.target===(it?_n.scrollingElement||pa:k)&&(Ht.smooth=!1)}),Dt=Ri(C.snapTo)?C.snapTo:C.snapTo==="labels"?_L(r):C.snapTo==="labelsDirectional"?gL(r):C.directional!==!1?function(Ht,pe){return Ng(C.snapTo)(Ht,bi()-wt<500?0:pe.direction)}:Jt.utils.snap(C.snapTo),bt=C.duration||{min:.1,max:2},bt=Eo(bt)?bc(bt.min,bt.max):bc(bt,bt),zt=Jt.delayedCall(C.delay||Pt/2||.1,function(){var Ht=st(),pe=bi()-wt<500,ie=At.tween;if((pe||Math.abs(H.getVelocity())<10)&&!ie&&!Rd&&Mt!==Ht){var me=(Ht-Yt)/ue,gn=r&&!I?r.totalProgress():me,be=pe?0:(gn-de)/(bi()-pc)*1e3||0,We=Jt.utils.clamp(-me,1-me,zl(be/2)*be/.185),an=me+(C.inertia===!1?0:We),Me,Ee,we=C,$n=we.onStart,$e=we.onInterrupt,ti=we.onComplete;if(Me=Dt(an,H),gc(Me)||(Me=an),Ee=Math.max(0,Math.round(Yt+Me*ue)),Ht<=ne&&Ht>=Yt&&Ee!==Ht){if(ie&&!ie._initted&&ie.data<=zl(Ee-Ht))return;C.inertia===!1&&(We=Me-me),At(Ee,{duration:bt(zl(Math.max(zl(an-gn),zl(Me-gn))*.185/be/.05||0)),ease:C.ease||"power3",data:zl(Ee-Ht),onInterrupt:function(){return zt.restart(!0)&&$e&&$e(H)},onComplete:function(){H.update(),Mt=st(),r&&!I&&(X?X.resetTo("totalProgress",Me,r._tTime/r._tDur):r.progress(Me)),Lt=de=r&&!I?r.totalProgress():H.progress,U&&U(H),ti&&ti(H)}},Ht,We*ue,Ee-Ht-We*ue),$n&&$n(H,At.tween)}}else H.isActive&&Mt!==Ht&&zt.restart(!0)}).pause()),p&&(Y0[p]=H),v=H.trigger=Zi(v||x!==!0&&x),se=v&&v._gsap&&v._gsap.stRevert,se&&(se=se(H)),x=x===!0?v:Zi(x),fa(f)&&(f={targets:v,className:f}),x&&(E===!1||E===za||(E=!E&&x.parentNode&&x.parentNode.style&&Fa(x.parentNode).display==="flex"?!1:Xn),H.pin=x,Ot=Jt.core.getCache(x),Ot.spacer?qt=Ot.pinState:(P&&(P=Zi(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Ot.spacerIsNative=!!P,P&&(Ot.spacerState=Hh(P))),Ot.spacer=Y=P||_n.createElement("div"),Y.classList.add("pin-spacer"),p&&Y.classList.add("pin-spacer-"+p),Ot.pinState=qt=Hh(x)),a.force3D!==!1&&Jt.set(x,{force3D:!0}),H.spacer=Y=Ot.spacer,Bt=Fa(x),jt=Bt[E+R.os2],_t=Jt.getProperty(x),ht=Jt.quickSetter(x,R.a,jn),D_(x,Y,Bt),A=Hh(x)),Q){ke=Eo(Q)?YM(Q,ZM):ZM,ot=Ih("scroller-start",p,k,R,ke,0),q=Ih("scroller-end",p,k,R,ke,0,ot),pt=ot["offset"+R.op.d2];var Ie=Zi(Vs(k,"content")||k);_e=this.markerStart=Ih("start",p,Ie,R,ke,pt,0,w),ae=this.markerEnd=Ih("end",p,Ie,R,ke,pt,0,w),w&&(Ct=Jt.quickSetter([_e,ae],R.a,jn)),!et&&!(mr.length&&Vs(k,"fixedMarkers")===!0)&&(mL(it?en:k),Jt.set([ot,q],{force3D:!0}),Tt=Jt.quickSetter(ot,R.a,jn),It=Jt.quickSetter(q,R.a,jn))}if(w){var Gt=w.vars.onUpdate,Kt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){H.update(0,0,1),Gt&&Gt.apply(w,Kt||[])})}if(H.previous=function(){return De[De.indexOf(H)-1]},H.next=function(){return De[De.indexOf(H)+1]},H.revert=function(Ht,pe){if(!pe)return H.kill(!0);var ie=Ht!==!1||!H.enabled,me=Ti;ie!==H.isReverted&&(ie&&(Et=Math.max(st(),H.scroll.rec||0),$=H.progress,xt=r&&r.progress()),_e&&[_e,ae,ot,q].forEach(function(gn){return gn.style.display=ie?"none":"block"}),ie&&(Ti=H,H.update(ie)),x&&(!L||!H.isActive)&&(ie?SL(x,Y,qt):D_(x,Y,Fa(x),Zt)),ie||H.update(ie),Ti=me,H.isReverted=ie)},H.refresh=function(Ht,pe,ie,me){if(!((Ti||!H.enabled)&&!pe)){if(x&&Ht&&Ha){ai(o,"scrollEnd",iT);return}!zi&&z&&z(H),Ti=H,At.tween&&!ie&&(At.tween.kill(),At.tween=0),X&&X.pause(),M&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Xt){return Xt.vars.immediateRender&&Xt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),H.isReverted||H.revert(!0,!0),H._subPinOffset=!1;var gn=nt(),be=mt(),We=w?w.duration():hr(k,R),an=ue<=.01||!ue,Me=0,Ee=me||0,we=Eo(ie)?ie.end:a.end,$n=a.endTrigger||v,$e=Eo(ie)?ie.start:a.start||(a.start===0||!v?0:x?"0 0":"0 100%"),ti=H.pinnedContainer=a.pinnedContainer&&Zi(a.pinnedContainer,H),xi=v&&Math.max(0,De.indexOf(H))||0,vn=xi,An,xn,Si,Ea,Sn,D,K,ct,lt,tt,Nt,Vt,Ft;for(Q&&Eo(ie)&&(Vt=Jt.getProperty(ot,R.p),Ft=Jt.getProperty(q,R.p));vn-- >0;)D=De[vn],D.end||D.refresh(0,1)||(Ti=H),K=D.pin,K&&(K===v||K===x||K===ti)&&!D.isReverted&&(tt||(tt=[]),tt.unshift(D),D.revert(!0,!0)),D!==De[vn]&&(xi--,vn--);for(Ri($e)&&($e=$e(H)),$e=kM($e,"start",H),Yt=JM($e,v,gn,R,st(),_e,ot,H,be,gt,et,We,w,H._startClamp&&"_startClamp")||(x?-.001:0),Ri(we)&&(we=we(H)),fa(we)&&!we.indexOf("+=")&&(~we.indexOf(" ")?we=(fa($e)?$e.split(" ")[0]:"")+we:(Me=$h(we.substr(2),gn),we=fa($e)?$e:(w?Jt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Yt):Yt)+Me,$n=v)),we=kM(we,"end",H),ne=Math.max(Yt,JM(we||($n?"100% 0":We),$n,gn,R,st()+Me,ae,q,H,be,gt,et,We,w,H._endClamp&&"_endClamp"))||-.001,Me=0,vn=xi;vn--;)D=De[vn]||{},K=D.pin,K&&D.start-D._pinPush<=Yt&&!w&&D.end>0&&(An=D.end-(H._startClamp?Math.max(0,D.start):D.start),(K===v&&D.start-D._pinPush<Yt||K===ti)&&isNaN($e)&&(Me+=An*(1-D.progress)),K===x&&(Ee+=An));if(Yt+=Me,ne+=Me,H._startClamp&&(H._startClamp+=Me),H._endClamp&&!zi&&(H._endClamp=ne||-.001,ne=Math.min(ne,hr(k,R))),ue=ne-Yt||(Yt-=.01)&&.001,an&&($=Jt.utils.clamp(0,1,Jt.utils.normalize(Yt,ne,Et))),H._pinPush=Ee,_e&&Me&&(An={},An[R.a]="+="+Me,ti&&(An[R.p]="-="+st()),Jt.set([_e,ae],An)),x&&!(q0&&H.end>=hr(k,R)))An=Fa(x),Ea=R===Kn,Si=st(),Wt=parseFloat(_t(R.a))+Ee,!We&&ne>1&&(Nt=(it?_n.scrollingElement||pa:k).style,Nt={style:Nt,value:Nt["overflow"+R.a.toUpperCase()]},it&&Fa(en)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Nt.style["overflow"+R.a.toUpperCase()]="scroll")),D_(x,Y,An),A=Hh(x),xn=Xr(x,!0),ct=et&&Ys(k,Ea?Ii:Kn)(),E?(Zt=[E+R.os2,ue+Ee+jn],Zt.t=Y,vn=E===Xn?gd(x,R)+ue+Ee:0,vn&&(Zt.push(R.d,vn+jn),Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=vn+jn)),Kl(Zt),ti&&De.forEach(function(Xt){Xt.pin===ti&&Xt.vars.pinSpacing!==!1&&(Xt._subPinOffset=!0)}),et&&st(Et)):(vn=gd(x,R),vn&&Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=vn+jn)),et&&(Sn={top:xn.top+(Ea?Si-Yt:ct)+jn,left:xn.left+(Ea?ct:Si-Yt)+jn,boxSizing:"border-box",position:"fixed"},Sn[Po]=Sn["max"+lu]=Math.ceil(xn.width)+jn,Sn[zo]=Sn["max"+Lg]=Math.ceil(xn.height)+jn,Sn[za]=Sn[za+wc]=Sn[za+Rc]=Sn[za+Dc]=Sn[za+Cc]="0",Sn[Xn]=An[Xn],Sn[Xn+wc]=An[Xn+wc],Sn[Xn+Rc]=An[Xn+Rc],Sn[Xn+Dc]=An[Xn+Dc],Sn[Xn+Cc]=An[Xn+Cc],B=ML(qt,Sn,L),zi&&st(0)),r?(lt=r._initted,b_(1),r.render(r.duration(),!0,!0),Ut=_t(R.a)-Wt+ue+Ee,Rt=Math.abs(ue-Ut)>1,et&&Rt&&B.splice(B.length-2,2),r.render(0,!0,!0),lt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),b_(0)):Ut=ue,Nt&&(Nt.value?Nt.style["overflow"+R.a.toUpperCase()]=Nt.value:Nt.style.removeProperty("overflow-"+R.a));else if(v&&st()&&!w)for(xn=v.parentNode;xn&&xn!==en;)xn._pinOffset&&(Yt-=xn._pinOffset,ne-=xn._pinOffset),xn=xn.parentNode;tt&&tt.forEach(function(Xt){return Xt.revert(!1,!0)}),H.start=Yt,H.end=ne,le=Ue=zi?Et:st(),!w&&!zi&&(le<Et&&st(Et),H.scroll.rec=0),H.revert(!1,!0),wt=bi(),zt&&(Mt=-1,zt.restart(!0)),Ti=0,r&&I&&(r._initted||xt)&&r.progress()!==xt&&r.progress(xt||0,!0).render(r.time(),!0,!0),(an||$!==H.progress||w||M||r&&!r._initted)&&(r&&!I&&(r._initted||$||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Yt<-.001&&!$?Jt.utils.normalize(Yt,ne,0):$,!0),H.progress=an||(le-Yt)/ue===$?0:$),x&&E&&(Y._pinOffset=Math.round(H.progress*Ut)),X&&X.invalidate(),isNaN(Vt)||(Vt-=Jt.getProperty(ot,R.p),Ft-=Jt.getProperty(q,R.p),Gh(ot,R,Vt),Gh(_e,R,Vt-(me||0)),Gh(q,R,Ft),Gh(ae,R,Ft-(me||0))),an&&!zi&&H.update(),_&&!zi&&!Se&&(Se=!0,_(H),Se=!1)}},H.getVelocity=function(){return(st()-Ue)/(bi()-pc)*1e3||0},H.endAnimation=function(){uc(H.callbackAnimation),r&&(X?X.progress(1):r.paused()?I||uc(r,H.direction<0,1):uc(r,r.reversed()))},H.labelToScroll=function(Ht){return r&&r.labels&&(Yt||H.refresh()||Yt)+r.labels[Ht]/r.duration()*ue||0},H.getTrailing=function(Ht){var pe=De.indexOf(H),ie=H.direction>0?De.slice(0,pe).reverse():De.slice(pe+1);return(fa(Ht)?ie.filter(function(me){return me.vars.preventOverlaps===Ht}):ie).filter(function(me){return H.direction>0?me.end<=Yt:me.start>=ne})},H.update=function(Ht,pe,ie){if(!(w&&!ie&&!Ht)){var me=zi===!0?Et:H.scroll(),gn=Ht?0:(me-Yt)/ue,be=gn<0?0:gn>1?1:gn||0,We=H.progress,an,Me,Ee,we,$n,$e,ti,xi;if(pe&&(Ue=le,le=w?st():me,C&&(de=Lt,Lt=r&&!I?r.totalProgress():be)),y&&x&&!Ti&&!Oh&&Ha&&(!be&&Yt<me+(me-Ue)/(bi()-pc)*y?be=1e-4:be===1&&ne>me+(me-Ue)/(bi()-pc)*y&&(be=.9999)),be!==We&&H.enabled){if(an=H.isActive=!!be&&be<1,Me=!!We&&We<1,$e=an!==Me,$n=$e||!!be!=!!We,H.direction=be>We?1:-1,H.progress=be,$n&&!Ti&&(Ee=be&&!We?0:be===1?1:We===1?2:3,I&&(we=!$e&&G[Ee+1]!=="none"&&G[Ee+1]||G[Ee],xi=r&&(we==="complete"||we==="reset"||we in r))),b&&($e||xi)&&(xi||g||!r)&&(Ri(b)?b(H):H.getTrailing(b).forEach(function(Si){return Si.endAnimation()})),I||(X&&!Ti&&!Oh?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",be,r._tTime/r._tDur):(X.vars.totalProgress=be,X.invalidate().restart())):r&&r.totalProgress(be,!!(Ti&&(wt||Ht)))),x){if(Ht&&E&&(Y.style[E+R.os2]=jt),!et)ht(_c(Wt+Ut*be));else if($n){if(ti=!Ht&&be>We&&ne+1>me&&me+1>=hr(k,R),L)if(!Ht&&(an||ti)){var vn=Xr(x,!0),An=me-Yt;$M(x,en,vn.top+(R===Kn?An:0)+jn,vn.left+(R===Kn?0:An)+jn)}else $M(x,Y);Kl(an||ti?B:A),Rt&&be<1&&an||ht(Wt+(be===1&&!ti?Ut:0))}}C&&!At.tween&&!Ti&&!Oh&&zt.restart(!0),f&&($e||O&&be&&(be<1||!A_))&&kc(f.targets).forEach(function(Si){return Si.classList[an||O?"add":"remove"](f.className)}),c&&!I&&!Ht&&c(H),$n&&!Ti?(I&&(xi&&(we==="complete"?r.pause().totalProgress(1):we==="reset"?r.restart(!0).pause():we==="restart"?r.restart(!0):r[we]()),c&&c(H)),($e||!A_)&&(d&&$e&&C_(H,d),F[Ee]&&C_(H,F[Ee]),O&&(be===1?H.kill(!1,1):F[Ee]=0),$e||(Ee=be===1?1:3,F[Ee]&&C_(H,F[Ee]))),V&&!an&&Math.abs(H.getVelocity())>(gc(V)?V:2500)&&(uc(H.callbackAnimation),X?X.progress(1):uc(r,we==="reverse"?1:!be,1))):I&&c&&!Ti&&c(H)}if(It){var xn=w?me/w.duration()*(w._caScrollDist||0):me;Tt(xn+(ot._isFlipped?1:0)),It(xn)}Ct&&Ct(-me/w.duration()*(w._caScrollDist||0))}},H.enable=function(Ht,pe){H.enabled||(H.enabled=!0,ai(k,"resize",vc),it||ai(k,"scroll",Fl),z&&ai(o,"refreshInit",z),Ht!==!1&&(H.progress=$=0,le=Ue=Mt=st()),pe!==!1&&H.refresh())},H.getTween=function(Ht){return Ht&&At?At.tween:X},H.setPositions=function(Ht,pe,ie,me){if(w){var gn=w.scrollTrigger,be=w.duration(),We=gn.end-gn.start;Ht=gn.start+We*Ht/be,pe=gn.start+We*pe/be}H.refresh(!1,!1,{start:XM(Ht,ie&&!!H._startClamp),end:XM(pe,ie&&!!H._endClamp)},me),H.update()},H.adjustPinSpacing=function(Ht){if(Zt&&Ht){var pe=Zt.indexOf(R.d)+1;Zt[pe]=parseFloat(Zt[pe])+Ht+jn,Zt[1]=parseFloat(Zt[1])+Ht+jn,Kl(Zt)}},H.disable=function(Ht,pe){if(Ht!==!1&&H.revert(!0,!0),H.enabled&&(H.enabled=H.isActive=!1,pe||X&&X.pause(),Et=0,Ot&&(Ot.uncache=1),z&&ii(o,"refreshInit",z),zt&&(zt.pause(),At.tween&&At.tween.kill()&&(At.tween=0)),!it)){for(var ie=De.length;ie--;)if(De[ie].scroller===k&&De[ie]!==H)return;ii(k,"resize",vc),it||ii(k,"scroll",Fl)}},H.kill=function(Ht,pe){H.disable(Ht,pe),X&&!pe&&X.kill(),p&&delete Y0[p];var ie=De.indexOf(H);ie>=0&&De.splice(ie,1),ie===Pi&&ed>0&&Pi--,ie=0,De.forEach(function(me){return me.scroller===H.scroller&&(ie=1)}),ie||zi||(H.scroll.rec=0),r&&(r.scrollTrigger=null,Ht&&r.revert({kill:!1}),pe||r.kill()),_e&&[_e,ae,ot,q].forEach(function(me){return me.parentNode&&me.parentNode.removeChild(me)}),Uc===H&&(Uc=0),x&&(Ot&&(Ot.uncache=1),ie=0,De.forEach(function(me){return me.pin===x&&ie++}),ie||(Ot.spacer=0)),a.onKill&&a.onKill(H)},De.push(H),H.enable(!1,!1),se&&se(H),r&&r.add&&!ue){var ye=H.update;H.update=function(){H.update=ye,Ne.cache++,Yt||ne||H.refresh()},Jt.delayedCall(.01,H.update),ue=.01,Yt=ne=0}else H.refresh();x&&xL()},o.register=function(a){return Bl||(Jt=a||QE(),KE()&&window.document&&o.enable(),Bl=mc),Bl},o.defaults=function(a){if(a)for(var r in a)Bh[r]=a[r];return Bh},o.disable=function(a,r){mc=0,De.forEach(function(c){return c[r?"kill":"disable"](a)}),ii(Le,"wheel",Fl),ii(_n,"scroll",Fl),clearInterval(Nh),ii(_n,"touchcancel",sr),ii(en,"touchstart",sr),zh(ii,_n,"pointerdown,touchstart,mousedown",WM),zh(ii,_n,"pointerup,touchend,mouseup",qM),_d.kill(),Ph(ii);for(var l=0;l<Ne.length;l+=3)Fh(ii,Ne[l],Ne[l+1]),Fh(ii,Ne[l],Ne[l+2])},o.enable=function(){if(Le=window,_n=document,pa=_n.documentElement,en=_n.body,Jt&&(kc=Jt.utils.toArray,bc=Jt.utils.clamp,W0=Jt.core.context||sr,b_=Jt.core.suppressOverwrites||sr,Cg=Le.history.scrollRestoration||"auto",Z0=Le.pageYOffset||0,Jt.core.globals("ScrollTrigger",o),en)){mc=1,jl=document.createElement("div"),jl.style.height="100vh",jl.style.position="absolute",oT(),hL(),Bn.register(Jt),o.isTouch=Bn.isTouch,Ls=Bn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),X0=Bn.isTouch===1,ai(Le,"wheel",Fl),Rg=[Le,_n,pa,en],Jt.matchMedia?(o.matchMedia=function(d){var _=Jt.matchMedia(),g;for(g in d)_.add(g,d[g]);return _},Jt.addEventListener("matchMediaInit",function(){rT(),Og()}),Jt.addEventListener("matchMediaRevert",function(){return aT()}),Jt.addEventListener("matchMedia",function(){wo(0,1),Go("matchMedia")}),Jt.matchMedia().add("(orientation: portrait)",function(){return w_(),w_})):console.warn("Requires GSAP 3.11.0 or later"),w_(),ai(_n,"scroll",Fl);var a=en.hasAttribute("style"),r=en.style,l=r.borderTopStyle,c=Jt.core.Animation.prototype,f,p;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",f=Xr(en),Kn.m=Math.round(f.top+Kn.sc())||0,Ii.m=Math.round(f.left+Ii.sc())||0,l?r.borderTopStyle=l:r.removeProperty("border-top-style"),a||(en.setAttribute("style",""),en.removeAttribute("style")),Nh=setInterval(jM,250),Jt.delayedCall(.5,function(){return Oh=0}),ai(_n,"touchcancel",sr),ai(en,"touchstart",sr),zh(ai,_n,"pointerdown,touchstart,mousedown",WM),zh(ai,_n,"pointerup,touchend,mouseup",qM),k0=Jt.utils.checkPrefix("transform"),nd.push(k0),Bl=bi(),_d=Jt.delayedCall(.2,wo).pause(),Il=[_n,"visibilitychange",function(){var d=Le.innerWidth,_=Le.innerHeight;_n.hidden?(GM=d,VM=_):(GM!==d||VM!==_)&&vc()},_n,"DOMContentLoaded",wo,Le,"load",wo,Le,"resize",vc],Ph(ai),De.forEach(function(d){return d.enable(0,1)}),p=0;p<Ne.length;p+=3)Fh(ii,Ne[p],Ne[p+1]),Fh(ii,Ne[p],Ne[p+2])}},o.config=function(a){"limitCallbacks"in a&&(A_=!!a.limitCallbacks);var r=a.syncInterval;r&&clearInterval(Nh)||(Nh=r)&&setInterval(jM,r),"ignoreMobileResize"in a&&(X0=o.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Ph(ii)||Ph(ai,a.autoRefreshEvents||"none"),YE=(a.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(a,r){var l=Zi(a),c=Ne.indexOf(l),f=Io(l);~c&&Ne.splice(c,f?6:2),r&&(f?mr.unshift(Le,r,en,r,pa,r):mr.unshift(l,r))},o.clearMatchMedia=function(a){De.forEach(function(r){return r._ctx&&r._ctx.query===a&&r._ctx.kill(!0,!0)})},o.isInViewport=function(a,r,l){var c=(fa(a)?Zi(a):a).getBoundingClientRect(),f=c[l?Po:zo]*r||0;return l?c.right-f>0&&c.left+f<Le.innerWidth:c.bottom-f>0&&c.top+f<Le.innerHeight},o.positionInViewport=function(a,r,l){fa(a)&&(a=Zi(a));var c=a.getBoundingClientRect(),f=c[l?Po:zo],p=r==null?f/2:r in vd?vd[r]*f:~r.indexOf("%")?parseFloat(r)*f/100:parseFloat(r)||0;return l?(c.left+p)/Le.innerWidth:(c.top+p)/Le.innerHeight},o.killAll=function(a){if(De.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),a!==!0){var r=Ho.killAll||[];Ho={},r.forEach(function(l){return l()})}},o})();Oe.version="3.14.2";Oe.saveStyles=function(o){return o?kc(o).forEach(function(t){if(t&&t.style){var n=ca.indexOf(t);n>=0&&ca.splice(n,5),ca.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Jt.core.getCache(t),W0())}}):ca};Oe.revert=function(o,t){return Og(!o,t)};Oe.create=function(o,t){return new Oe(o,t)};Oe.refresh=function(o){return o?vc(!0):(Bl||Oe.register())&&wo(!0)};Oe.update=function(o){return++Ne.cache&&Kr(o===!0?2:0)};Oe.clearScrollMemory=sT;Oe.maxScroll=function(o,t){return hr(o,t?Ii:Kn)};Oe.getScrollFunc=function(o,t){return Ys(Zi(o),t?Ii:Kn)};Oe.getById=function(o){return Y0[o]};Oe.getAll=function(){return De.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Oe.isScrolling=function(){return!!Ha};Oe.snapDirectional=Ng;Oe.addEventListener=function(o,t){var n=Ho[o]||(Ho[o]=[]);~n.indexOf(t)||n.push(t)};Oe.removeEventListener=function(o,t){var n=Ho[o],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)};Oe.batch=function(o,t){var n=[],a={},r=t.interval||.016,l=t.batchMax||1e9,c=function(d,_){var g=[],v=[],x=Jt.delayedCall(r,function(){_(g,v),g=[],v=[]}).pause();return function(E){g.length||x.restart(!0),g.push(E.trigger),v.push(E),l<=g.length&&x.progress(1)}},f;for(f in t)a[f]=f.substr(0,2)==="on"&&Ri(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return Ri(l)&&(l=l(),ai(Oe,"refresh",function(){return l=t.batchMax()})),kc(o).forEach(function(p){var d={};for(f in a)d[f]=a[f];d.trigger=p,n.push(Oe.create(d))}),n};var e1=function(t,n,a,r){return n>r?t(r):n<0&&t(0),a>r?(r-n)/(a-n):a<0?n/(n-a):1},U_=function o(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(Bn.isTouch?" pinch-zoom":""):"none",t===pa&&o(en,n)},Vh={auto:1,scroll:1},TL=function(t){var n=t.event,a=t.target,r=t.axis,l=(n.changedTouches?n.changedTouches[0]:n).target,c=l._gsap||Jt.core.getCache(l),f=bi(),p;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==en&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(Vh[(p=Fa(l)).overflowY]||Vh[p.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==a&&!Io(l)&&(Vh[(p=Fa(l)).overflowY]||Vh[p.overflowX]),c._isScrollT=f}(c._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},uT=function(t,n,a,r){return Bn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&TL,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return a&&ai(_n,Bn.eventTypes[0],i1,!1,!0)},onDisable:function(){return ii(_n,Bn.eventTypes[0],i1,!0)}})},bL=/(input|label|select|textarea)/i,n1,i1=function(t){var n=bL.test(t.target.tagName);(n||n1)&&(t._gsapAllow=!0,n1=n)},AL=function(t){Eo(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,a=n.normalizeScrollX,r=n.momentum,l=n.allowNestedScroll,c=n.onRelease,f,p,d=Zi(t.target)||pa,_=Jt.core.globals().ScrollSmoother,g=_&&_.get(),v=Ls&&(t.content&&Zi(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),x=Ys(d,Kn),E=Ys(d,Ii),M=1,y=(Bn.isTouch&&Le.visualViewport?Le.visualViewport.scale*Le.visualViewport.width:Le.outerWidth)/Le.innerWidth,S=0,U=Ri(r)?function(){return r(f)}:function(){return r||2.8},O,C,L=uT(d,t.type,!0,l),P=function(){return C=!1},w=sr,V=sr,b=function(){p=hr(d,Kn),V=bc(Ls?1:0,p),a&&(w=bc(0,hr(d,Ii))),O=Fo},R=function(){v._gsap.y=_c(parseFloat(v._gsap.y)+x.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},I=function(){if(C){requestAnimationFrame(P);var Q=_c(f.deltaY/2),gt=V(x.v-Q);if(v&&gt!==x.v+x.offset){x.offset=gt-x.v;var H=_c((parseFloat(v&&v._gsap.y)||0)-x.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+H+", 0, 1)",v._gsap.y=H+"px",x.cacheID=Ne.cache,Kr()}return!0}x.offset&&R(),C=!0},k,j,it,et,F=function(){b(),k.isActive()&&k.vars.scrollY>p&&(x()>p?k.progress(1)&&x(p):k.resetTo("scrollY",p))};return v&&Jt.set(v,{y:"+=0"}),t.ignoreCheck=function(G){return Ls&&G.type==="touchmove"&&I()||M>1.05&&G.type!=="touchstart"||f.isGesturing||G.touches&&G.touches.length>1},t.onPress=function(){C=!1;var G=M;M=_c((Le.visualViewport&&Le.visualViewport.scale||1)/y),k.pause(),G!==M&&U_(d,M>1.01?!0:a?!1:"x"),j=E(),it=x(),b(),O=Fo},t.onRelease=t.onGestureStart=function(G,Q){if(x.offset&&R(),!Q)et.restart(!0);else{Ne.cache++;var gt=U(),H,z;a&&(H=E(),z=H+gt*.05*-G.velocityX/.227,gt*=e1(E,H,z,hr(d,Ii)),k.vars.scrollX=w(z)),H=x(),z=H+gt*.05*-G.velocityY/.227,gt*=e1(x,H,z,hr(d,Kn)),k.vars.scrollY=V(z),k.invalidate().duration(gt).play(.01),(Ls&&k.vars.scrollY>=p||H>=p-1)&&Jt.to({},{onUpdate:F,duration:gt})}c&&c(G)},t.onWheel=function(){k._ts&&k.pause(),bi()-S>1e3&&(O=0,S=bi())},t.onChange=function(G,Q,gt,H,z){if(Fo!==O&&b(),Q&&a&&E(w(H[2]===Q?j+(G.startX-G.x):E()+Q-H[1])),gt){x.offset&&R();var nt=z[2]===gt,mt=nt?it+G.startY-G.y:x()+gt-z[1],Mt=V(mt);nt&&mt!==Mt&&(it+=Mt-mt),x(Mt)}(gt||Q)&&Kr()},t.onEnable=function(){U_(d,a?!1:"x"),Oe.addEventListener("refresh",F),ai(Le,"resize",F),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=E.smooth=!1),L.enable()},t.onDisable=function(){U_(d,!0),ii(Le,"resize",F),Oe.removeEventListener("refresh",F),L.kill()},t.lockAxis=t.lockAxis!==!1,f=new Bn(t),f.iOS=Ls,Ls&&!x()&&x(1),Ls&&Jt.ticker.add(sr),et=f._dc,k=Jt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lT(x,x(),function(){return k.pause()})},onUpdate:Kr,onComplete:et.vars.onComplete}),f};Oe.sort=function(o){if(Ri(o))return De.sort(o);var t=Le.pageYOffset||0;return Oe.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+Le.innerHeight}),De.sort(o||function(n,a){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};Oe.observe=function(o){return new Bn(o)};Oe.normalizeScroll=function(o){if(typeof o>"u")return Oi;if(o===!0&&Oi)return Oi.enable();if(o===!1){Oi&&Oi.kill(),Oi=o;return}var t=o instanceof Bn?o:AL(o);return Oi&&Oi.target===t.target&&Oi.kill(),Io(t.target)&&(Oi=t),t};Oe.core={_getVelocityProp:V0,_inputObserver:uT,_scrollers:Ne,_proxies:mr,bridge:{ss:function(){Ha||Go("scrollStart"),Ha=bi()},ref:function(){return Ti}}};QE()&&Jt.registerPlugin(Oe);BE.registerPlugin(Oe);const RL=`
  uniform float uTime;
  uniform float uProgress;
  uniform float uWaveAmplitude;
  uniform float uPointSize;
  
  attribute vec3 startPos;
  attribute vec3 endPos;
  attribute float aSize;
  attribute float aBrightness;
  
  varying float vAlpha;
  varying float vBrightness;
  varying float vDepth;
  
  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vBrightness = aBrightness;
    
    // Smooth easing for morph
    float t = uProgress;
    float easedT = t * t * (3.0 - 2.0 * t); // smoothstep
    
    // Wave noise for plane - more pronounced waves
    float waveFreq = 0.015;
    float waveSpeed = 0.3;
    float noiseVal = snoise(vec3(startPos.x * waveFreq, startPos.z * waveFreq, uTime * waveSpeed));
    float waveY = noiseVal * uWaveAmplitude * (1.0 - easedT);
    
    // Add secondary wave for more detail
    float noiseVal2 = snoise(vec3(startPos.x * waveFreq * 2.0, startPos.z * waveFreq * 2.0, uTime * waveSpeed * 1.5));
    waveY += noiseVal2 * uWaveAmplitude * 0.3 * (1.0 - easedT);
    
    // Current position with wave
    vec3 currentStartPos = startPos;
    currentStartPos.y += waveY;
    
    // Add micro-jitter for life
    float jitter = snoise(vec3(position * 0.05 + uTime * 0.1)) * 0.2 * (1.0 - easedT * 0.7);
    
    // Morph between positions
    vec3 finalPos = mix(currentStartPos, endPos, easedT);
    finalPos += vec3(jitter);
    
    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    
    // Size attenuation - smaller dots like in reference
    float sizeAttenuation = uPointSize * aSize * (200.0 / -mvPosition.z);
    gl_PointSize = clamp(sizeAttenuation, 0.5, 4.0);
    
    // Alpha based on distance and fog - fade distant points
    float dist = length(mvPosition.xyz);
    vDepth = -mvPosition.z;
    
    // Fade based on distance from camera
    vAlpha = smoothstep(180.0, 20.0, dist);
    vAlpha *= (0.4 + 0.6 * aBrightness);
    
    // Additional fade for very distant particles
    vAlpha *= smoothstep(200.0, 100.0, dist);
    
    gl_Position = projectionMatrix * mvPosition;
  }
`,CL=`
  uniform vec3 uColor;
  
  varying float vAlpha;
  varying float vBrightness;
  varying float vDepth;
  
  void main() {
    // Circular particle with soft edge
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) discard;
    
    // Soft glow falloff - more subtle
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 2.0);
    
    // Brightness variation - subtle
    vec3 finalColor = uColor * (0.8 + 0.2 * vBrightness);
    
    // Fade alpha for depth
    float depthFade = smoothstep(150.0, 50.0, vDepth);
    
    gl_FragColor = vec4(finalColor, vAlpha * glow * depthFade);
  }
`;function wL(){const o=kl.useRef(null),t=kl.useRef(null);return kl.useEffect(()=>{if(!o.current)return;const n=o.current,a=window.innerWidth,r=window.innerHeight,l=new wR;l.fog=new og(663317,.012);const c=new da(50,a/r,.1,500);c.position.set(0,35,60),c.lookAt(0,0,-20);const f=new HD({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setSize(a,r),f.setPixelRatio(Math.min(2,window.devicePixelRatio)),f.setClearColor(663317,1),n.appendChild(f.domElement);const p=new VR(16777215,1.5);p.position.set(0,80,20),p.angle=Math.PI/3,p.penumbra=.8,p.decay=2,p.distance=300,l.add(p);const d=new kR(1719598,.4);l.add(d);const _=1e5,g=new Ja,v=new Float32Array(_*3),x=new Float32Array(_*3),E=new Float32Array(_),M=new Float32Array(_),y=300,S=250;for(let I=0;I<_;I++){const k=(Math.random()-.5)*y,j=(Math.random()-.5)*S-30,it=k+(Math.random()-.5)*3,et=j+(Math.random()-.5)*3,F=(Math.random()-.5)*1;v[I*3]=it,v[I*3+1]=F,v[I*3+2]=et,E[I]=.3+Math.random()*.5,M[I]=.3+Math.random()*.7}const U=20,O=Math.PI*(3-Math.sqrt(5));for(let I=0;I<_;I++){const k=1-I/(_-1)*2,j=Math.sqrt(1-k*k),it=O*I,et=Math.cos(it)*j,F=Math.sin(it)*j;x[I*3]=et*U,x[I*3+1]=k*U,x[I*3+2]=F*U}g.setAttribute("position",new Fi(new Float32Array(v),3)),g.setAttribute("startPos",new Fi(v,3)),g.setAttribute("endPos",new Fi(x,3)),g.setAttribute("aSize",new Fi(E,1)),g.setAttribute("aBrightness",new Fi(M,1));const C=new Qa({uniforms:{uTime:{value:0},uProgress:{value:0},uWaveAmplitude:{value:6},uPointSize:{value:2.5},uColor:{value:new je(15267314)}},vertexShader:RL,fragmentShader:CL,transparent:!0,depthWrite:!1,blending:Do}),L=new PR(g,C);l.add(L);const P=VD();t.current={scene:l,camera:c,renderer:f,particles:L,material:C,noise3D:P,scrollProgress:0};let w=0;const V=()=>{if(w+=.008,t.current){t.current.material.uniforms.uTime.value=w;const I=t.current.scrollProgress;t.current.material.uniforms.uWaveAmplitude.value=6*(1-I),t.current.material.uniforms.uProgress.value=I,t.current.camera.position.x=Math.sin(w*.05)*3,t.current.camera.lookAt(0,I*8,-20+I*20)}f.render(l,c),requestAnimationFrame(V)};V();const b=Oe.create({trigger:n,start:"top top",end:"+=250%",pin:!0,scrub:1.5,onUpdate:I=>{t.current&&(t.current.scrollProgress=I.progress)}}),R=()=>{const I=window.innerWidth,k=window.innerHeight;c.aspect=I/k,c.updateProjectionMatrix(),f.setSize(I,k)};return window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R),b.kill(),f.dispose(),g.dispose(),C.dispose(),n.removeChild(f.domElement)}},[]),Zn.jsx("div",{"code-path":"src/components/ParticleOcean.tsx:373:5",ref:o,className:"fixed inset-0 w-full h-full",style:{background:"radial-gradient(ellipse at 50% 0%, #1a3d32 0%, #0d281e 30%, #05120a 70%, #020805 100%)"}})}function DL(){const[o,t]=kl.useState("");return kl.useEffect(()=>{const n=()=>{t(new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}))};n();const a=setInterval(n,1e3);return()=>clearInterval(a)},[]),Zn.jsxs("div",{"code-path":"src/App.tsx:24:5",className:"relative",children:[Zn.jsx(wL,{"code-path":"src/App.tsx:26:7"}),Zn.jsx("header",{"code-path":"src/App.tsx:29:7",className:"fixed top-0 left-0 right-0 z-50 px-8 py-6 pointer-events-none",children:Zn.jsxs("div",{"code-path":"src/App.tsx:30:9",className:"flex items-center justify-between",children:[Zn.jsx("div",{"code-path":"src/App.tsx:31:11",className:"text-white/80 text-sm font-light tracking-wide pointer-events-auto",children:"Independent Digital Agency"}),Zn.jsx("div",{"code-path":"src/App.tsx:34:11",className:"text-white/80 text-sm font-light tracking-wide",children:"Based in Munich"}),Zn.jsxs("div",{"code-path":"src/App.tsx:37:11",className:"flex items-center gap-6 pointer-events-auto",children:[Zn.jsxs("div",{"code-path":"src/App.tsx:38:13",className:"flex items-center gap-2",children:[Zn.jsx("div",{"code-path":"src/App.tsx:39:15",className:"w-3 h-3 rounded-full bg-[#35f0e0]/80"}),Zn.jsx("span",{"code-path":"src/App.tsx:40:15",className:"text-white/80 text-sm font-light tracking-wide",children:o})]}),Zn.jsx("button",{"code-path":"src/App.tsx:42:13",className:"px-6 py-2 border border-[#35f0e0]/40 rounded-full text-white/80 text-sm font-light hover:bg-[#35f0e0]/10 hover:border-[#35f0e0]/60 transition-all",children:"Contact"})]})]})}),Zn.jsx("div",{"code-path":"src/App.tsx:50:7",className:"h-[300vh]"}),Zn.jsx("section",{"code-path":"src/App.tsx:53:7",className:"relative min-h-screen bg-[#05120a] flex items-center justify-center px-8 z-10",children:Zn.jsxs("div",{"code-path":"src/App.tsx:54:9",className:"max-w-4xl mx-auto text-center",children:[Zn.jsx("h2",{"code-path":"src/App.tsx:55:11",className:"text-4xl md:text-6xl font-light text-white/90 mb-8 tracking-tight",children:"Scroll to see the magic"}),Zn.jsx("p",{"code-path":"src/App.tsx:58:11",className:"text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto",children:"The teal particle ocean waves morph into a floating sphere as you scroll. Experience the smooth transition from an infinite dot field to a crystalline sphere."})]})})]})}EA.createRoot(document.getElementById("root")).render(Zn.jsx(kl.StrictMode,{"code-path":"src/main.tsx:7:3",children:Zn.jsx(DL,{"code-path":"src/main.tsx:8:5"})}));

import{r as i,Y as Ge,Z as Ye,$ as ie,a0 as V,j as v,y as M,x as $e,a1 as k,a2 as te,a3 as Xe,a4 as Ze,a5 as ze,a6 as qe,a7 as Qe}from"./index-CzSfmOcl.js";var Je=Ye.useId||(()=>{}),et=0;function Y(e){const[t,n]=i.useState(Je());return Ge(()=>{e||n(r=>r??String(et++))},[e]),e||(t?`radix-${t}`:"")}var $="focusScope.autoFocusOnMount",X="focusScope.autoFocusOnUnmount",ue={bubbles:!1,cancelable:!0},tt="FocusScope",ye=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...s}=e,[c,g]=i.useState(null),h=ie(o),m=ie(a),f=i.useRef(null),p=V(t,u=>g(u)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let u=function(E){if(y.paused||!c)return;const b=E.target;c.contains(b)?f.current=b:D(f.current,{select:!0})},l=function(E){if(y.paused||!c)return;const b=E.relatedTarget;b!==null&&(c.contains(b)||D(f.current,{select:!0}))},d=function(E){if(document.activeElement===document.body)for(const C of E)C.removedNodes.length>0&&D(c)};document.addEventListener("focusin",u),document.addEventListener("focusout",l);const S=new MutationObserver(d);return c&&S.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",l),S.disconnect()}}},[r,c,y.paused]),i.useEffect(()=>{if(c){le.add(y);const u=document.activeElement;if(!c.contains(u)){const d=new CustomEvent($,ue);c.addEventListener($,h),c.dispatchEvent(d),d.defaultPrevented||(nt(it(Ee(c)),{select:!0}),document.activeElement===u&&D(c))}return()=>{c.removeEventListener($,h),setTimeout(()=>{const d=new CustomEvent(X,ue);c.addEventListener(X,m),c.dispatchEvent(d),d.defaultPrevented||D(u??document.body,{select:!0}),c.removeEventListener(X,m),le.remove(y)},0)}}},[c,h,m,y]);const w=i.useCallback(u=>{if(!n&&!r||y.paused)return;const l=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,d=document.activeElement;if(l&&d){const S=u.currentTarget,[E,b]=rt(S);E&&b?!u.shiftKey&&d===b?(u.preventDefault(),n&&D(E,{select:!0})):u.shiftKey&&d===E&&(u.preventDefault(),n&&D(b,{select:!0})):d===S&&u.preventDefault()}},[n,r,y.paused]);return v.jsx(M.div,{tabIndex:-1,...s,ref:p,onKeyDown:w})});ye.displayName=tt;function nt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(D(r,{select:t}),document.activeElement!==n)return}function rt(e){const t=Ee(e),n=se(t,e),r=se(t.reverse(),e);return[n,r]}function Ee(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function se(e,t){for(const n of e)if(!ot(n,{upTo:t}))return n}function ot(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function at(e){return e instanceof HTMLInputElement&&"select"in e}function D(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&at(e)&&t&&e.select()}}var le=ct();function ct(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=fe(e,t),e.unshift(t)},remove(t){var n;e=fe(e,t),(n=e[0])==null||n.resume()}}}function fe(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function it(e){return e.filter(t=>t.tagName!=="A")}var Z=0;function ut(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??de()),document.body.insertAdjacentElement("beforeend",e[1]??de()),Z++,()=>{Z===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Z--}},[])}function de(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var x=function(){return x=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},x.apply(this,arguments)};function be(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function st(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var U="right-scroll-bar-position",H="width-before-scroll-bar",lt="with-scroll-bars-hidden",ft="--removed-body-scroll-bar-size";function z(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function dt(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var vt=typeof window<"u"?i.useLayoutEffect:i.useEffect,ve=new WeakMap;function ht(e,t){var n=dt(null,function(r){return e.forEach(function(o){return z(o,r)})});return vt(function(){var r=ve.get(n);if(r){var o=new Set(r),a=new Set(e),s=n.current;o.forEach(function(c){a.has(c)||z(c,null)}),a.forEach(function(c){o.has(c)||z(c,s)})}ve.set(n,e)},[e]),n}function gt(e){return e}function mt(e,t){t===void 0&&(t=gt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,r);return n.push(s),function(){n=n.filter(function(c){return c!==s})}},assignSyncMedium:function(a){for(r=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){r=!0;var s=[];if(n.length){var c=n;n=[],c.forEach(a),s=n}var g=function(){var m=s;s=[],m.forEach(a)},h=function(){return Promise.resolve().then(g)};h(),n={push:function(m){s.push(m),h()},filter:function(m){return s=s.filter(m),n}}}};return o}function pt(e){e===void 0&&(e={});var t=mt(null);return t.options=x({async:!0,ssr:!1},e),t}var Ce=function(e){var t=e.sideCar,n=be(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,x({},n))};Ce.isSideCarExport=!0;function yt(e,t){return e.useMedium(t),Ce}var Se=pt(),q=function(){},G=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:q,onWheelCapture:q,onTouchMoveCapture:q}),o=r[0],a=r[1],s=e.forwardProps,c=e.children,g=e.className,h=e.removeScrollBar,m=e.enabled,f=e.shards,p=e.sideCar,y=e.noIsolation,w=e.inert,u=e.allowPinchZoom,l=e.as,d=l===void 0?"div":l,S=e.gapMode,E=be(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=p,C=ht([n,t]),N=x(x({},E),o);return i.createElement(i.Fragment,null,m&&i.createElement(b,{sideCar:Se,removeScrollBar:h,shards:f,noIsolation:y,inert:w,setCallbacks:a,allowPinchZoom:!!u,lockRef:n,gapMode:S}),s?i.cloneElement(i.Children.only(c),x(x({},N),{ref:C})):i.createElement(d,x({},N,{className:g,ref:C}),c))});G.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};G.classNames={fullWidth:H,zeroRight:U};var Et=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function bt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Et();return t&&e.setAttribute("nonce",t),e}function Ct(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function St(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var wt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=bt())&&(Ct(t,n),St(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Rt=function(){var e=wt();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},we=function(){var e=Rt(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},xt={left:0,top:0,right:0,gap:0},Q=function(e){return parseInt(e||"",10)||0},Dt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Q(n),Q(r),Q(o)]},At=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return xt;var t=Dt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Nt=we(),I="data-scroll-locked",Pt=function(e,t,n,r){var o=e.left,a=e.top,s=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(lt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(I,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(U,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(H,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(U," .").concat(U,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(H," .").concat(H,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(I,`] {
    `).concat(ft,": ").concat(c,`px;
  }
`)},he=function(){var e=parseInt(document.body.getAttribute(I)||"0",10);return isFinite(e)?e:0},Tt=function(){i.useEffect(function(){return document.body.setAttribute(I,(he()+1).toString()),function(){var e=he()-1;e<=0?document.body.removeAttribute(I):document.body.setAttribute(I,e.toString())}},[])},Ot=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Tt();var a=i.useMemo(function(){return At(o)},[o]);return i.createElement(Nt,{styles:Pt(a,!t,o,n?"":"!important")})},ee=!1;if(typeof window<"u")try{var L=Object.defineProperty({},"passive",{get:function(){return ee=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch{ee=!1}var P=ee?{passive:!1}:!1,It=function(e){return e.tagName==="TEXTAREA"},Re=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!It(e)&&n[t]==="visible")},Mt=function(e){return Re(e,"overflowY")},_t=function(e){return Re(e,"overflowX")},ge=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=xe(e,r);if(o){var a=De(e,r),s=a[1],c=a[2];if(s>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},kt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ft=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},xe=function(e,t){return e==="v"?Mt(t):_t(t)},De=function(e,t){return e==="v"?kt(t):Ft(t)},Lt=function(e,t){return e==="h"&&t==="rtl"?-1:1},jt=function(e,t,n,r,o){var a=Lt(e,window.getComputedStyle(t).direction),s=a*r,c=n.target,g=t.contains(c),h=!1,m=s>0,f=0,p=0;do{var y=De(e,c),w=y[0],u=y[1],l=y[2],d=u-l-a*w;(w||d)&&xe(e,c)&&(f+=d,p+=w),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!g&&c!==document.body||g&&(t.contains(c)||t===c));return(m&&(Math.abs(f)<1||!o)||!m&&(Math.abs(p)<1||!o))&&(h=!0),h},j=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},me=function(e){return[e.deltaX,e.deltaY]},pe=function(e){return e&&"current"in e?e.current:e},Wt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Bt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ut=0,T=[];function Ht(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(Ut++)[0],a=i.useState(we)[0],s=i.useRef(e);i.useEffect(function(){s.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var u=st([e.lockRef.current],(e.shards||[]).map(pe),!0).filter(Boolean);return u.forEach(function(l){return l.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),u.forEach(function(l){return l.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(u,l){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!s.current.allowPinchZoom;var d=j(u),S=n.current,E="deltaX"in u?u.deltaX:S[0]-d[0],b="deltaY"in u?u.deltaY:S[1]-d[1],C,N=u.target,_=Math.abs(E)>Math.abs(b)?"h":"v";if("touches"in u&&_==="h"&&N.type==="range")return!1;var F=ge(_,N);if(!F)return!0;if(F?C=_:(C=_==="v"?"h":"v",F=ge(_,N)),!F)return!1;if(!r.current&&"changedTouches"in u&&(E||b)&&(r.current=C),!C)return!0;var ce=r.current||C;return jt(ce,l,u,ce==="h"?E:b,!0)},[]),g=i.useCallback(function(u){var l=u;if(!(!T.length||T[T.length-1]!==a)){var d="deltaY"in l?me(l):j(l),S=t.current.filter(function(C){return C.name===l.type&&(C.target===l.target||l.target===C.shadowParent)&&Wt(C.delta,d)})[0];if(S&&S.should){l.cancelable&&l.preventDefault();return}if(!S){var E=(s.current.shards||[]).map(pe).filter(Boolean).filter(function(C){return C.contains(l.target)}),b=E.length>0?c(l,E[0]):!s.current.noIsolation;b&&l.cancelable&&l.preventDefault()}}},[]),h=i.useCallback(function(u,l,d,S){var E={name:u,delta:l,target:d,should:S,shadowParent:Kt(d)};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(b){return b!==E})},1)},[]),m=i.useCallback(function(u){n.current=j(u),r.current=void 0},[]),f=i.useCallback(function(u){h(u.type,me(u),u.target,c(u,e.lockRef.current))},[]),p=i.useCallback(function(u){h(u.type,j(u),u.target,c(u,e.lockRef.current))},[]);i.useEffect(function(){return T.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",g,P),document.addEventListener("touchmove",g,P),document.addEventListener("touchstart",m,P),function(){T=T.filter(function(u){return u!==a}),document.removeEventListener("wheel",g,P),document.removeEventListener("touchmove",g,P),document.removeEventListener("touchstart",m,P)}},[]);var y=e.removeScrollBar,w=e.inert;return i.createElement(i.Fragment,null,w?i.createElement(a,{styles:Bt(o)}):null,y?i.createElement(Ot,{gapMode:e.gapMode}):null)}function Kt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Vt=yt(Se,Ht);var Ae=i.forwardRef(function(e,t){return i.createElement(G,x({},e,{ref:t,sideCar:Vt}))});Ae.classNames=G.classNames;var Gt=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},O=new WeakMap,W=new WeakMap,B={},J=0,Ne=function(e){return e&&(e.host||Ne(e.parentNode))},Yt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ne(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},$t=function(e,t,n,r){var o=Yt(t,Array.isArray(e)?e:[e]);B[n]||(B[n]=new WeakMap);var a=B[n],s=[],c=new Set,g=new Set(o),h=function(f){!f||c.has(f)||(c.add(f),h(f.parentNode))};o.forEach(h);var m=function(f){!f||g.has(f)||Array.prototype.forEach.call(f.children,function(p){if(c.has(p))m(p);else try{var y=p.getAttribute(r),w=y!==null&&y!=="false",u=(O.get(p)||0)+1,l=(a.get(p)||0)+1;O.set(p,u),a.set(p,l),s.push(p),u===1&&w&&W.set(p,!0),l===1&&p.setAttribute(n,"true"),w||p.setAttribute(r,"true")}catch(d){console.error("aria-hidden: cannot operate on ",p,d)}})};return m(t),c.clear(),J++,function(){s.forEach(function(f){var p=O.get(f)-1,y=a.get(f)-1;O.set(f,p),a.set(f,y),p||(W.has(f)||f.removeAttribute(r),W.delete(f)),y||f.removeAttribute(n)}),J--,J||(O=new WeakMap,O=new WeakMap,W=new WeakMap,B={})}},Xt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Gt(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),$t(r,o,n,"aria-hidden")):function(){return null}},ne="Dialog",[Pe,on]=$e(ne),[Zt,R]=Pe(ne),Te=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:s=!0}=e,c=i.useRef(null),g=i.useRef(null),[h=!1,m]=qe({prop:r,defaultProp:o,onChange:a});return v.jsx(Zt,{scope:t,triggerRef:c,contentRef:g,contentId:Y(),titleId:Y(),descriptionId:Y(),open:h,onOpenChange:m,onOpenToggle:i.useCallback(()=>m(f=>!f),[m]),modal:s,children:n})};Te.displayName=ne;var Oe="DialogTrigger",Ie=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(Oe,n),a=V(t,o.triggerRef);return v.jsx(M.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ae(o.open),...r,ref:a,onClick:k(e.onClick,o.onOpenToggle)})});Ie.displayName=Oe;var re="DialogPortal",[zt,Me]=Pe(re,{forceMount:void 0}),_e=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=R(re,t);return v.jsx(zt,{scope:t,forceMount:n,children:i.Children.map(r,s=>v.jsx(te,{present:n||a.open,children:v.jsx(Qe,{asChild:!0,container:o,children:s})}))})};_e.displayName=re;var K="DialogOverlay",ke=i.forwardRef((e,t)=>{const n=Me(K,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=R(K,e.__scopeDialog);return a.modal?v.jsx(te,{present:r||a.open,children:v.jsx(qt,{...o,ref:t})}):null});ke.displayName=K;var qt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(K,n);return v.jsx(Ae,{as:Xe,allowPinchZoom:!0,shards:[o.contentRef],children:v.jsx(M.div,{"data-state":ae(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),A="DialogContent",Fe=i.forwardRef((e,t)=>{const n=Me(A,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=R(A,e.__scopeDialog);return v.jsx(te,{present:r||a.open,children:a.modal?v.jsx(Qt,{...o,ref:t}):v.jsx(Jt,{...o,ref:t})})});Fe.displayName=A;var Qt=i.forwardRef((e,t)=>{const n=R(A,e.__scopeDialog),r=i.useRef(null),o=V(t,n.contentRef,r);return i.useEffect(()=>{const a=r.current;if(a)return Xt(a)},[]),v.jsx(Le,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:k(e.onCloseAutoFocus,a=>{var s;a.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:k(e.onPointerDownOutside,a=>{const s=a.detail.originalEvent,c=s.button===0&&s.ctrlKey===!0;(s.button===2||c)&&a.preventDefault()}),onFocusOutside:k(e.onFocusOutside,a=>a.preventDefault())})}),Jt=i.forwardRef((e,t)=>{const n=R(A,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return v.jsx(Le,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var s,c;(s=e.onCloseAutoFocus)==null||s.call(e,a),a.defaultPrevented||(r.current||(c=n.triggerRef.current)==null||c.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var g,h;(g=e.onInteractOutside)==null||g.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=a.target;((h=n.triggerRef.current)==null?void 0:h.contains(s))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),Le=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...s}=e,c=R(A,n),g=i.useRef(null),h=V(t,g);return ut(),v.jsxs(v.Fragment,{children:[v.jsx(ye,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:v.jsx(Ze,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":ae(c.open),...s,ref:h,onDismiss:()=>c.onOpenChange(!1)})}),v.jsxs(v.Fragment,{children:[v.jsx(en,{titleId:c.titleId}),v.jsx(nn,{contentRef:g,descriptionId:c.descriptionId})]})]})}),oe="DialogTitle",je=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(oe,n);return v.jsx(M.h2,{id:o.titleId,...r,ref:t})});je.displayName=oe;var We="DialogDescription",Be=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(We,n);return v.jsx(M.p,{id:o.descriptionId,...r,ref:t})});Be.displayName=We;var Ue="DialogClose",He=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(Ue,n);return v.jsx(M.button,{type:"button",...r,ref:t,onClick:k(e.onClick,()=>o.onOpenChange(!1))})});He.displayName=Ue;function ae(e){return e?"open":"closed"}var Ke="DialogTitleWarning",[an,Ve]=ze(Ke,{contentName:A,titleName:oe,docsSlug:"dialog"}),en=({titleId:e})=>{const t=Ve(Ke),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},tn="DialogDescriptionWarning",nn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ve(tn).contentName}}.`;return i.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},cn=Te,un=Ie,sn=_e,ln=ke,fn=Fe,dn=je,vn=Be,hn=He;export{fn as C,vn as D,ln as O,sn as P,cn as R,un as T,hn as a,dn as b};

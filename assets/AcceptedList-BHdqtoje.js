const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OrderCard-BNoxmhKS.js","assets/index-BRPwgKXP.js","assets/index-CEqBSek3.css","assets/orderStore-BtugDXu6.js","assets/skeleton-DZmJMt6-.js"])))=>i.map(i=>d[i]);
import{a as L,A,b as $,u as G,r as p,P as m,d as M,j as t,z as _,B as E,D as k,_ as q,E as Q,c as U,F as V}from"./index-BRPwgKXP.js";import{u as F}from"./orderStore-BtugDXu6.js";import{u as z}from"./useMutation-DAKMrP2u.js";import{S as g}from"./skeleton-DZmJMt6-.js";const K=async(e,s,i)=>{try{const a=L.get("authToken"),l=new URLSearchParams({status:s});return(await A.patch(`/v1/order/${e}/status?${l.toString()}`,null,{headers:{Authorization:`Bearer ${a}`},signal:i})).data}catch(a){if($.isCancel(a)){console.debug("Update order status request cancelled");return}throw console.error("Update order status error:",a),a}},B=e=>{const s=G(),i=p.useRef(null),{mutateAsync:a,isError:l,error:x,isLoading:f}=z({mutationFn:async({orderId:o,newStatus:r})=>{i.current&&i.current.abort();const n=new AbortController;return i.current=n,await K(o,r,n.signal),i.current===n&&(i.current=null),{orderId:o,newStatus:r}},onMutate:async({orderId:o,newStatus:r})=>{const n=r==="PROCESSING"?"PENDING":"ALL";await s.cancelQueries(["orders",n,e]);const d=s.getQueryData(["orders",n,e]),c=d==null?void 0:d.content.map(u=>u.id===o?{...u,status:r,...r==="PROCESSING"&&{acceptTime:new Date().toISOString().replace("T"," ").slice(0,19)}}:u);return c&&s.setQueryData(["orders",n,e],{previousOrders:d,content:c}),{previousOrders:d}},onError:(o,r,n)=>{const d=r.newStatus==="PROCESSING"?"PENDING":"ALL";console.debug("newOrder",r,"context",n),n!=null&&n.previousOrders&&s.setQueryData(["orders",d,e],n.previousOrders),console.error("Update order status error:",o)},onSettled:({newStatus:o})=>{const r=o==="PROCESSING"?"PENDING":"ALL";console.debug("updateOrderStatusAsync onSettled"),s.invalidateQueries(["orders",r,e])}});return{updateOrderStatusAsync:a,isError:l,error:x,isLoading:f}},H=e=>{switch(e){case"PENDING":return{bgColor:"bg-stone-600",textColor:"text-gray-100",statusText:"未接單"};case"PROCESSING":return{bgColor:"bg-blue-500",textColor:"text-gray-100",statusText:"製作中"};case"COMPLETED":return{bgColor:"bg-yellow-500",textColor:"text-gray-100",statusText:"未取餐"};case"PICKED_UP":return{bgColor:"bg-lime-600",textColor:"text-gray-100",statusText:"已取餐"};case"CANCELED":return{bgColor:"bg-gray-500",textColor:"text-gray-100",statusText:"取消"};default:return{bgColor:"bg-gray-200",textColor:"text-gray-100",statusText:""}}},C=e=>{switch(e){case"PROCESSING":return"COMPLETED";case"COMPLETED":return"PICKED_UP";case"PICKED_UP":return"CANCELED";case"PENDING":return"PROCESSING";default:return null}},S=({order:e,showStatus:s=!0})=>{const{bgColor:i,textColor:a,statusText:l}=H(e.status),{updateOrderStatusAsync:x,isLoading:f}=B(),o=F(c=>c.setOrderData),r=p.useCallback(async()=>{const c=C(e.status);if(c)try{await x({orderId:e.id,newStatus:c})}catch(u){console.error("Failed to update order status:",u)}},[e.id,e.status,x]),n=M(),d=c=>{c.preventDefault(),o(e),n(`/history/order/${e.id.slice(-5)}`)};return t.jsxs("div",{className:"relative flex justify-between rounded-lg p-4 shadow-lg mb-6 bg-gray-50",children:[t.jsxs("div",{className:"flex flex-col items-start text-start",children:[t.jsxs("div",{className:"flex flex-col max-w-[200px]",children:[t.jsxs("p",{className:"text-xl font-bold break-words",children:["單號： ",e.id.slice(-5)]}),t.jsxs("p",{className:"text-sm font-semibold break-words",children:["預估製作時間: ",e.estimatedPrepTime," 分鐘"]}),t.jsxs("p",{className:"text-sm font-medium break-words",children:["下單時間: ",e.orderTime]})]}),t.jsx("button",{className:"bg-orange-500 mt-6 text-white px-3 py-1 text-sm font-bold rounded hover:bg-orange-600 whitespace-nowrap",onClick:d,children:"訂單內容"})]}),t.jsx("div",{className:"flex flex-col items-end",children:s&&t.jsx("div",{className:"flex items-center mb-2",children:t.jsx("button",{onClick:r,disabled:!0,className:`px-3 py-1 rounded-md text-sm font-bold ${i} ${a} ${C(e.status)?"":"opacity-50 cursor-not-allowed"}`,children:l})})}),t.jsx("div",{className:"absolute bottom-4 right-4 mt-5",children:t.jsxs("p",{className:"mt-2 font-semibold",children:["總金額: ",e.cost," 元"]})})]})};S.propTypes={order:m.shape({id:m.string.isRequired,status:m.string.isRequired,cost:m.number.isRequired,orderTime:m.string.isRequired,estimatedPrepTime:m.number.isRequired}).isRequired,onAccept:m.func,onReject:m.func,onStatusChange:m.func,showStatus:m.bool};var h="Progress",b=100,[X,ce]=_(h),[J,W]=X(h),w=p.forwardRef((e,s)=>{const{__scopeProgress:i,value:a=null,max:l,getValueLabel:x=Y,...f}=e;(l||l===0)&&!j(l)&&console.error(Z(`${l}`,"Progress"));const o=j(l)?l:b;a!==null&&!y(a,o)&&console.error(ee(`${a}`,"Progress"));const r=y(a,o)?a:null,n=N(r)?x(r,o):void 0;return t.jsx(J,{scope:i,value:r,max:o,children:t.jsx(E.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":N(r)?r:void 0,"aria-valuetext":n,role:"progressbar","data-state":R(r,o),"data-value":r??void 0,"data-max":o,...f,ref:s})})});w.displayName=h;var D="ProgressIndicator",O=p.forwardRef((e,s)=>{const{__scopeProgress:i,...a}=e,l=W(D,i);return t.jsx(E.div,{"data-state":R(l.value,l.max),"data-value":l.value??void 0,"data-max":l.max,...a,ref:s})});O.displayName=D;function Y(e,s){return`${Math.round(e/s*100)}%`}function R(e,s){return e==null?"indeterminate":e===s?"complete":"loading"}function N(e){return typeof e=="number"}function j(e){return N(e)&&!isNaN(e)&&e>0}function y(e,s){return N(e)&&!isNaN(e)&&e<=s&&e>=0}function Z(e,s){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${b}\`.`}function ee(e,s){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${b} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var T=w,te=O;const I=p.forwardRef(({className:e,value:s,...i},a)=>t.jsx(T,{ref:a,className:k("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",e),...i,children:t.jsx(te,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(s||0)}%)`}})}));I.displayName=T.displayName;const se=()=>t.jsxs("div",{className:"relative flex justify-between rounded-lg p-4 shadow-lg mb-6 bg-gray-50",children:[t.jsxs("div",{className:"flex flex-col items-start text-start",children:[t.jsxs("div",{className:"mb-2",children:[t.jsx(g,{className:"w-32 h-7"})," "]}),t.jsxs("div",{className:"mb-1",children:[t.jsx(g,{className:"w-48 h-5"})," "]}),t.jsxs("div",{className:"mb-2",children:[t.jsx(g,{className:"w-40 h-5"})," "]}),t.jsx(g,{className:"w-20 h-8 mt-6"})," "]}),t.jsx("div",{className:"flex flex-col items-end",children:t.jsxs("div",{className:"flex items-center mb-2",children:[t.jsx(g,{className:"w-16 h-8"})," "]})}),t.jsxs("div",{className:"absolute bottom-4 right-4",children:[t.jsx(g,{className:"w-32 h-6"})," "]})]}),re=p.lazy(()=>q(()=>import("./OrderCard-BNoxmhKS.js"),__vite__mapDeps([0,1,2,3,4])));function ae(){const{orders:e,isLoading:s,isError:i,error:a,progress:l,completedQueries:x}=Q("ALL"),{userInfo:f}=U(),o=f==null?void 0:f.role,r=e==null?void 0:e.pages.map(c=>c.content.filter(u=>o==="MERCHANT"?u.status!=="PENDING":u.status!=="PENDING"&&u.status!=="PROCESSING"&&u.status!=="COMPLETED")),n=r==null?void 0:r.flatMap(c=>c),{acceptedListNumber:d}=V();return s||l<180?t.jsx("div",{className:"w-full flex justify-center mt-20",children:t.jsxs("div",{className:"w-3/5 flex flex-col justify-center items-center",children:[t.jsx(I,{value:l,className:"w-full"}),t.jsxs("div",{className:"text-sm text-gray-500",children:["Loading ",x," of ",d," ..."]})]})}):(n==null?void 0:n.length)===0?t.jsx("div",{className:"w-full flex justify-center mt-20",children:t.jsx("div",{className:"w-3/5 flex flex-col justify-center items-center",children:t.jsx("div",{className:"text-lg text-gray-500",children:"目前無已接訂單"})})}):i?t.jsxs("div",{className:"text-center pt-20",children:["Error: ",a]}):t.jsx("div",{className:"flex flex-col text-center justify-between ",children:r.map((c,u)=>c.map((P,v)=>o==="MERCHANT"?t.jsx(p.Suspense,{fallback:t.jsx(se,{}),children:t.jsx(re,{order:P,pageId:u},v)},v):t.jsx(S,{order:P},v)))})}ae.prototype={orderData:m.object};export{ae as A,S as C,se as O,I as P,B as u};
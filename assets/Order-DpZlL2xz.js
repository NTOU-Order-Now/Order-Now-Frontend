import{a as S,A as j,b as P,u as v,r as h,P as p,c as D,j as t}from"./index-NGzkvcc4.js";import{H as A}from"./Header-DIgAe7tj.js";import{u as y}from"./sidebarStore-BNsTiJ8H.js";import{u as C}from"./orderStore-cE2a9vjc.js";import{u as I}from"./useMutation--dmrRt6a.js";import{a as R,u as E}from"./index-o4McFdZ7.js";import{T as L}from"./ToggleNavBar-CIqqtx_W.js";import"./index-Basaqh1b.js";const q=async(e,o,s)=>{try{const n=S.get("authToken");return(await j.patch(`/v1/order/${e}/status`,null,{headers:{Authorization:`Bearer ${n}`},params:{status:o},signal:s})).data}catch(n){if(P.isCancel(n)){console.debug("Update order status request cancelled");return}throw console.error("Update order status error:",n),n}},k=()=>{const e=v(),o=h.useRef(null),{mutateAsync:s,isError:n,error:c,isLoading:a}=I({mutationFn:async({orderId:d,newStatus:i})=>{o.current&&(console.debug("Abort previous updateOrderStatus request"),o.current.abort());const r=new AbortController;o.current=r;const u=await q(d,i,r.signal);return o.current===r&&(o.current=null),u},onMutate:async({orderId:d,newStatus:i})=>{await e.cancelQueries(["orders"]);const r=e.getQueryData(["orders"]),u=r==null?void 0:r.pages.map(x=>x.map(g=>g.id===d?{...g,status:i,...i==="PROCESSING"&&{acceptTime:new Date().toISOString().replace("T"," ").slice(0,19)}}:g));return u&&e.setQueryData(["orders"],x=>({...x,pages:u})),{previousOrders:r}},onError:(d,i,r)=>{r!=null&&r.previousOrders&&e.setQueryData(["orders"],r.previousOrders),alert("更新訂單狀態失敗，請稍後再試"),console.error("Update order status error:",d)},onSettled:()=>{console.debug("updateOrderStatusAsync onSettled"),e.invalidateQueries(["orders"])}});return{updateOrderStatusAsync:s,isError:n,error:c,isLoading:a}},G=e=>{switch(e){case"PROCESSING":return{bgColor:"bg-blue-500",textColor:"text-gray-100",statusText:"製作中"};case"COMPLETED":return{bgColor:"bg-yellow-500",textColor:"text-gray-100",statusText:"未取餐"};case"PICKED_UP":return{bgColor:"bg-lime-600",textColor:"text-gray-100",statusText:"已取餐"};case"CANCELED":return{bgColor:"bg-gray-500",textColor:"text-gray-100",statusText:"取消"};default:return{bgColor:"bg-gray-200",textColor:"text-gray-100",statusText:""}}},b=e=>{switch(e){case"PROCESSING":return"COMPLETED";case"COMPLETED":return"PICKED_UP";case"PENDING":return"PROCESSING";default:return null}},N=({order:e,showStatus:o=!0})=>{console.debug("order",e);const{bgColor:s,textColor:n,statusText:c}=G(e.status),{updateOrderStatusAsync:a,isLoading:d}=k(),i=C(l=>l.setOrderData);C(l=>l.orderData);const r=h.useCallback(async l=>{try{await a({orderId:l,newStatus:"PROCESSING"}),console.debug("Accept order: ",l)}catch(m){console.error("Failed to accept order:",m)}},[a]),u=h.useCallback(async l=>{try{await a({orderId:l,newStatus:"CANCELED"}),console.debug("Reject order: ",l)}catch(m){console.error("Failed to reject order:",m)}},[a]),x=()=>{const l=new Date,m=new Date(e.estimatedPrepTime);return e.status==="PROCESSING"&&l>m},g=h.useCallback(async()=>{const l=b(e.status);if(l)try{await a({orderId:e.id,newStatus:l})}catch(m){console.error("Failed to update order status:",m)}},[e.id,e.status,a]),f=D(),O=l=>{l.preventDefault(),i(e),f(`/store/pos/management/order/${e.id.slice(-5)}`)};return t.jsxs("div",{className:"relative flex justify-between rounded-lg p-4 shadow-lg mb-6 bg-gray-50",children:[t.jsxs("div",{className:"flex flex-col items-start text-start",children:[t.jsxs("p",{className:"text-xl font-bold ",children:["單號： ",e.id.slice(-5)]}),t.jsxs("p",{className:"text-sm font-semibold ",children:["預估製作時間: ",e.estimatedPrepTime," 分鐘"]}),t.jsxs("p",{className:"text-sm font-medium",children:["下單時間: ",e.orderTime]}),t.jsx("button",{className:"bg-orange-500 mt-6 text-white px-3 py-1 text-sm font-bold rounded hover:bg-orange-600",onClick:O,children:"訂單內容"})]}),t.jsxs("div",{className:"flex flex-col items-end",children:[o&&e.status!=="PENDING"&&t.jsxs("div",{className:"flex items-center mb-2",children:[x()&&t.jsx("span",{className:"text-red-500 text-sm ml-2 font-bold pr-2",children:"超時"}),t.jsx("button",{onClick:g,disabled:!b(e.status),className:`px-3 py-1 rounded-md text-sm font-bold ${s} ${n} ${b(e.status)?"":"opacity-50 cursor-not-allowed"}`,children:c})]}),e.status==="PENDING"&&t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>u(e.id),className:"bg-red-500 text-white px-3 py-1 text-sm font-bold rounded hover:bg-red-600",children:"拒絕"}),t.jsx("button",{onClick:()=>r(e.id),className:"bg-green-500 text-white px-3 py-1 text-sm font-bold rounded hover:bg-green-600",children:"接單"})]})]}),t.jsx("div",{className:"absolute bottom-4 right-4 mt-5",children:t.jsxs("p",{className:"mt-2 font-semibold",children:["總金額: ",e.cost," 元"]})})]})};N.propTypes={order:p.shape({id:p.string.isRequired,status:p.string.isRequired,cost:p.number.isRequired,orderTime:p.string.isRequired,estimatedPrepTime:p.number.isRequired}).isRequired,onAccept:p.func,onReject:p.func,onStatusChange:p.func,showStatus:p.bool};const U=async(e={},o)=>{try{const{page:s=0,size:n=3,status:c}=e,a=new URLSearchParams({page:s.toString(),size:n.toString()});c&&a.append("status",c);const d=S.get("authToken");return(await j.get(`/v1/order/search?${a.toString()}`,{headers:{Authorization:`Bearer ${d}`},signal:o})).data}catch(s){if(P.isCancel(s)){console.debug("Search order request cancelled");return}throw console.error("Search order error:",s),s}},w=e=>{const{data:s,fetchNextPage:n,hasNextPage:c,isFetchingNextPage:a,isLoading:d,isError:i,error:r}=R({queryKey:["orders",e],queryFn:async({pageParam:u=0})=>{const x=await U({page:u,size:3,status:e});return console.log(x.data),x.data},getNextPageParam:(u,x)=>{const g=u.currentPage;return g<u.totalPages-1?g+1:void 0},staleTime:6e4});return{orders:s,fetchNextPage:n,hasNextPage:c,isFetchingNextPage:a,isLoading:d,isError:i,error:r}},Q=()=>{const{ref:e,inView:o}=E({rootMargin:"100px"}),{orders:s,fetchNextPage:n,hasNextPage:c,isFetchingNextPage:a,isLoading:d,isError:i,error:r}=w("PENDING");return console.debug("orders",s,c),h.useEffect(()=>{o&&!a&&c&&n()},[o,a,c,n]),d||s===void 0?t.jsx("div",{className:"text-center pt-20",children:"Loading..."}):i?t.jsxs("div",{className:"text-center pt-20",children:["Error: ",r.message]}):t.jsxs("div",{className:"flex flex-col text-center justify-between ",children:[s==null?void 0:s.pages.map(u=>u.content.map((x,g)=>t.jsx(N,{order:x},g))),t.jsx("div",{ref:e,children:c&&a&&t.jsx("div",{className:"text-center py-4",children:"Loading more..."})})]})};function T(){const{ref:e,inView:o}=E({rootMargin:"100px"}),{orders:s,fetchNextPage:n,hasNextPage:c,isFetchingNextPage:a,isLoading:d,isError:i,error:r}=w(),u=s==null?void 0:s.pages.map(x=>x.content.filter(g=>g.status!=="PENDING"));return h.useEffect(()=>{o&&!a&&c&&n()},[o,a,c,n]),d?t.jsx("div",{className:"text-center pt-20",children:"Loading..."}):i?t.jsxs("div",{className:"text-center pt-20",children:["Error: ",r.message]}):t.jsxs("div",{className:"flex flex-col text-center justify-between ",children:[u.map(x=>x.map((g,f)=>t.jsx(N,{order:g},f))),t.jsx("div",{ref:e,children:c&&a&&t.jsx("div",{className:"text-center py-4",children:"Loading more..."})})]})}T.prototype={orderData:p.object};const H=()=>{v().getQueryData(["order","PENDING"]);const[o,s]=h.useState(0),n=y(r=>r.toggleSidebar),c=y(r=>r.title),i={未接受:()=>{s(0),console.debug("handleToUnaccepted")},已接受:()=>{s(1),console.debug("handleToAccepted")}};return t.jsxs("div",{className:"flex flex-col h-screen",children:[t.jsx(A,{title:c,onLeftClick:n}),t.jsx("div",{className:"sticky mt-[55px] z-20 px-10 py-1  h-[85px] bg-white content-center rounded-b-xl shadow-sm ",children:t.jsx(L,{options:i,InitActiveTab:"未接受"})}),t.jsx("div",{className:"overflow-auto h-[dvh-64px] px-8 py-2",children:o===0?t.jsx(Q,{}):t.jsx(T,{})})]})};export{H as default};

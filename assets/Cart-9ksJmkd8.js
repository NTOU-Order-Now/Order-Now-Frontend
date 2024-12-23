import{a as S,A as T,b as D,u as k,r as f,P as o,j as e,c as q,C as M}from"./index-Df6S3GLs.js";import{u as A,C as E}from"./CartItemCard-ByU4pIJP.js";import{f as P}from"./faEllipsis-CxEkbWIP.js";import{u as Q}from"./useMutation-DB-Y8DCy.js";import{F as b,f as I}from"./index-BCnIIidU.js";import{u as F}from"./useCategoryQueries-DOWJFlpU.js";import{u as H}from"./useSystemContext-lX1l9ygt.js";import $ from"./CartRemark-p496UwTW.js";import"./blur-D88BhFD3.js";import"./useQueries-bjlDKR_4.js";const z=async(t,r)=>{const a=S.get("authToken");try{return(await T.patch("/v1/cart/send",{note:t},{headers:{Authorization:`Bearer ${a}`},signal:r})).data}catch(s){if(D.isCancel(s))console.debug("PATCH cart request cancelled");else throw console.error("PATCH cart error; ",s),s}},L=()=>{const t=k(),r=f.useRef(null),{mutateAsync:a,isPending:s,isSuccess:l,error:m}=Q({mutationFn:async n=>{r.current&&r.current.abort();const i=new AbortController;r.current=i;const d=await z(n,r.current.signal);return r.current===i&&(r.current=null),d},onMutate:async()=>{await t.cancelQueries(["cart"]);const n=t.getQueryData(["cart"]),i=n?{...n}:{orderedDishes:[]};return i.orderedDishes||(i.orderedDishes=[]),t.setQueryData(["cart"],i),{previousCart:n}},onError:(n,i,d)=>{throw d!=null&&d.previousCart&&t.setQueryData(["cart"],d.previousCart),alert("訂單送出失敗，請重整頁面後再試試"),n},onSettled:()=>{console.debug("useCartAddMutation onSettled"),t.invalidateQueries(["cart"])}});return{sendCartAsync:a,sendCartError:m,sendCartIsPending:s,sendCartIsSuccess:l}},y=({orderDetail:t,handleChangeRemark:r})=>{const{totalSpend:a,estimateTime:s,cartData:l,remark:m}=t,{ispatchCartError:n}=A(),i=n?"bg-gray-300":"bg-white",{sendCartAsync:d,sendCartIsPending:u}=L(),h=async x=>{x.preventDefault(),!(a===0||(l==null?void 0:l.orderedDishes.length)===0)&&(r(""),await d(m))};return e.jsxs("div",{className:" fixed bottom-0 w-full bg-orange-400 px-4 py-2 rounded-t-lg  text-white font-notoTC font-medium",children:[e.jsxs("div",{className:"flex justify-between mb-3 px-2 text-sm",children:[e.jsx("span",{children:"總金額"}),e.jsxs("span",{children:["$ ",a]})]}),l.orderedDishes.length>0&&e.jsxs("div",{className:"flex justify-between mb-3 px-2 text-sm",children:[e.jsx("span",{children:"預估完成時間"}),e.jsxs("span",{children:[s," ~ ",s+20," 分鐘"]})]}),e.jsx("button",{className:`w-full ${i} text-orange-500 py-2 px-2 rounded-full font-semibold `,disabled:n,onClick:h,children:u?e.jsx(b,{icon:P.faEllipsis,beatFade:!0,size:"lg",className:"mr-2"}):"送出訂單"})]})};y.propTypes={orderDetail:o.shape({cartData:o.object.isRequired,totalSpend:o.number.isRequired,estimateTime:o.number.isRequired,remark:o.string.isRequired}).isRequired,handleChangeRemark:o.func.isRequired};const g=()=>{const t=q(),r=()=>{t(-1)};return e.jsx("header",{className:"h-16 fixed z-30 top-0 left-0 w-full flex justify-between items-center bg-white shadow-md transition-shadow duration-300 ease-in-out p-2 font-notoTC",children:e.jsxs("div",{className:"flex ml-3 items-center text-xl ",children:[e.jsx(b,{icon:I,className:"mr-4 cursor-pointer text-2xl mt-1",onClick:r}),e.jsx("h1",{className:"font-noto font-bold text-2xl",children:"購物車"})]})})},v=({orderDetail:t})=>{const{cartData:r,merchantName:a,totalSpend:s}=t;return e.jsxs("div",{className:"mt-[66px] flex justify-between items-center p-4 bg-white",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-gray-900",children:r.orderedDishes.length?a:""}),e.jsx("p",{className:"text-sm text-gray-500",children:"訂單詳細資訊"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"總金額"}),e.jsxs("h2",{className:"text-2xl font-bold text-black",children:["$",s]})]})]})};v.propTypes={orderDetail:o.shape({cartData:o.object.isRequired,merchantName:o.string,totalSpend:o.number.isRequired}).isRequired};const N=({cartData:t,dishesMap:r})=>!t.orderedDishes||t.orderedDishes.length===0?e.jsx("div",{className:"flex justify-center items-center mt-4 fa-2x",children:"目前購物車是空的:)"}):e.jsx("div",{children:t.orderedDishes.map((a,s)=>{var l;return e.jsx(E,{dishData:a,imageUrl:(l=r[a==null?void 0:a.dishId])==null?void 0:l.picture},s)})});N.propTypes={cartData:o.object.isRequired,dishesMap:o.object.isRequired};const Z=()=>{const{userInfo:t,cartData:r,isCartError:a,merchantData:s,isMerchantLoading:l,menuCategoryList:m,totalSpend:n,totalQuantity:i,refetchCart:d}=H();r===void 0&&(console.error("Cart not found, refetchCart"),d());const{categoryData:u,isQueriesSuccess:h}=F(m,s==null?void 0:s.menuId,t!==void 0&&(t==null?void 0:t.role)==="CUSTOMER"),[x,p]=f.useState(""),w=f.useMemo(()=>u?u==null?void 0:u.reduce((C,R)=>(R.dishes.forEach(j=>{C[j.id]=j}),C),{}):{},[u]);if(r===void 0||!h)return e.jsx(M,{});let c=10*i;return c>150&&c<300?c=Math.floor(c*.7):c>=300&&(c=Math.floor(c*.5)),a?e.jsxs("div",{className:"flex justify-center items-center mt-28 fa-2x",children:[e.jsx(g,{}),"購物車資料讀取失敗:("]}):e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:"flex-none",children:[e.jsx(g,{}),e.jsx(v,{orderDetail:{cartData:r,merchantName:s==null?void 0:s.name,totalSpend:n}})]}),e.jsxs("div",{className:"flex-1 overflow-auto pb-[120px] ",children:[e.jsx(N,{cartData:r,dishesMap:w}),e.jsx("div",{className:"px-4",children:e.jsx($,{onRemarkChange:p,value:x})})]}),e.jsx("div",{className:"flex-none",children:e.jsx(y,{orderDetail:{cartData:r,totalSpend:n,remark:x,estimateTime:c-(i>2?30:0)},handleChangeRemark:p})})]})};export{Z as default};

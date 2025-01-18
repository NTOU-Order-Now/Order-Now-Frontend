import{a as S,A as D,b as T,u as k,r as f,P as o,j as e,c as q,d as M,C as A}from"./index-YwLf8I32.js";import{u as E,C as I}from"./CartItemCard-CmDnsR__.js";import{f as Q}from"./faEllipsis-CxEkbWIP.js";import{u as P}from"./useMutation-D75FCXxV.js";import{F,f as H}from"./index-CfLZK19C.js";import{N as g}from"./NormalHeader-d6drsw1Q.js";import{u as $}from"./useCategoryQueries-CVixOTA6.js";import L from"./CartRemark-B8iMHOgg.js";import"./blur-7cZasfdP.js";const U=async(r,t)=>{const a=S.get("authToken");try{return(await D.patch("/v1/cart/send",{note:r},{headers:{Authorization:`Bearer ${a}`},signal:t})).data}catch(s){if(T.isCancel(s))console.debug("PATCH cart request cancelled");else throw console.error("PATCH cart error; ",s),s}},z=()=>{const r=k(),t=f.useRef(null),{mutateAsync:a,isPending:s,isSuccess:d,error:u}=P({mutationFn:async n=>{t.current&&t.current.abort();const i=new AbortController;t.current=i;const l=await U(n,t.current.signal);return t.current===i&&(t.current=null),l.data},onMutate:async()=>{await r.cancelQueries(["cart"]);const n=r.getQueryData(["cart"]),i=n?{...n}:{orderedDishes:[]};return i.orderedDishes||(i.orderedDishes=[]),r.setQueryData(["cart"],i),{previousCart:n}},onError:(n,i,l)=>{throw l!=null&&l.previousCart&&r.setQueryData(["cart"],l.previousCart),alert("訂單送出失敗，請重整頁面後再試試"),n},onSettled:()=>{console.debug("useCartAddMutation onSettled"),r.invalidateQueries(["cart"])}});return{sendCartAsync:a,sendCartError:u,sendCartIsPending:s,sendCartIsSuccess:d}},b=({orderDetail:r,handleChangeRemark:t})=>{const{totalSpend:a,estimateTime:s,cartData:d,remark:u}=r,{ispatchCartError:n}=E(),i=n?"bg-gray-300":"bg-white",{sendCartAsync:l,sendCartIsPending:p}=z(),x=async h=>{h.preventDefault(),!(a===0||(d==null?void 0:d.orderedDishes.length)===0)&&(t(""),await l(u))};return e.jsxs("div",{className:" fixed bottom-0 w-full bg-orange-400 px-4 py-2 rounded-t-lg  text-white font-notoTC font-medium",children:[e.jsxs("div",{className:"flex justify-between mb-3 px-2 text-sm",children:[e.jsx("span",{children:"總金額"}),e.jsxs("span",{children:["$ ",a]})]}),d.orderedDishes.length>0&&e.jsxs("div",{className:"flex justify-between mb-3 px-2 text-sm",children:[e.jsx("span",{children:"預估完成時間"}),e.jsxs("span",{children:[s," ~ ",s+20," 分鐘"]})]}),e.jsx("button",{className:`w-full ${i} text-orange-500 py-2 px-2 rounded-full font-semibold `,disabled:n,onClick:x,children:p?e.jsx(F,{icon:Q.faEllipsis,beatFade:!0,size:"lg",className:"mr-2"}):"送出訂單"})]})};b.propTypes={orderDetail:o.shape({cartData:o.object.isRequired,totalSpend:o.number.isRequired,estimateTime:o.number.isRequired,remark:o.string.isRequired}).isRequired,handleChangeRemark:o.func.isRequired};const y=({orderDetail:r})=>{const{cartData:t,merchantName:a,totalSpend:s}=r;return e.jsxs("div",{className:"mt-[66px] flex justify-between items-center p-4 bg-white",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-gray-900",children:t.orderedDishes.length?a:""}),e.jsx("p",{className:"text-sm text-gray-500",children:"訂單詳細資訊"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"總金額"}),e.jsxs("h2",{className:"text-2xl font-bold text-black",children:["$",s]})]})]})};y.propTypes={orderDetail:o.shape({cartData:o.object.isRequired,merchantName:o.string,totalSpend:o.number.isRequired}).isRequired};const v=({cartData:r,dishesMap:t})=>!r.orderedDishes||r.orderedDishes.length===0?e.jsx("div",{className:"flex justify-center items-center mt-4 fa-2x",children:"目前購物車是空的:)"}):e.jsx("div",{children:r.orderedDishes.map((a,s)=>{var d;return e.jsx(I,{dishData:a,imageUrl:(d=t[a==null?void 0:a.dishId])==null?void 0:d.picture},s)})});v.propTypes={cartData:o.object.isRequired,dishesMap:o.object.isRequired};const Z=()=>{const{userInfo:r,cartData:t,isCartError:a,merchantData:s,isMerchantLoading:d,menuCategoryList:u,totalSpend:n,totalQuantity:i,refetchCart:l}=q();r&&t===void 0&&(console.error("Cart not found, refetchCart"),l());const p=M(),[x,h]=f.useState(""),{categoryData:m,isQueriesSuccess:N}=$(u,s==null?void 0:s[0].menuId,r!==void 0&&(r==null?void 0:r.role)==="CUSTOMER"),R=f.useMemo(()=>m?m==null?void 0:m.reduce((C,w)=>(w.dishes.forEach(j=>{C[j.id]=j}),C),{}):{},[m]);if(t===void 0||!N)return e.jsx(A,{});let c=10*i;return c>150&&c<300?c=Math.floor(c*.7):c>=300&&(c=Math.floor(c*.5)),a?e.jsxs("div",{className:"flex justify-center items-center mt-28 fa-2x",children:[e.jsx(g,{}),"購物車資料讀取失敗:("]}):e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:"flex-none",children:[e.jsx(g,{leftIcon:H,title:"購物車",handleClick:async()=>await p(-1)}),e.jsx(y,{orderDetail:{cartData:t,merchantName:s==null?void 0:s[0].name,totalSpend:n}})]}),e.jsxs("div",{className:"flex-1 overflow-auto pb-[120px] ",children:[e.jsx(v,{cartData:t,dishesMap:R}),e.jsx("div",{className:"px-4",children:e.jsx(L,{onRemarkChange:h,value:x})})]}),e.jsx("div",{className:"flex-none",children:e.jsx(b,{orderDetail:{cartData:t,totalSpend:n,remark:x,estimateTime:c-(i>2?30:0)},handleChangeRemark:h})})]})};export{Z as default};
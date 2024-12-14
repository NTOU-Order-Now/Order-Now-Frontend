import{a as D,A as R,b as T,u as S,r as y,P as s,j as e,c as A,d as E}from"./index-BVyBSOmJ.js";import{u as Q}from"./useMutation-DJX0FVuL.js";import{F as g}from"./index.es-BJrB9fUl.js";import{f as M,a as k,b as I}from"./index-CuE17EBt.js";import{b as P}from"./blur-DLlne5MJ.js";import{u as $}from"./useCategoryQueries-CaKsata1.js";const L=async(t,r,o)=>{try{const a=D.get("authToken");return(await R.patch(`/v1/cart/dishes/${t}`,r,{headers:{Authorization:`Bearer ${a}`},signal:o})).data}catch(a){if(T.isCancel(a)){console.debug("PATCH cart request cancelled");return}else throw console.error("PATCH cart error; ",a),a}},C=()=>{const t=S(),r=y.useRef(null),{mutateAsync:o,onError:a,onMutate:d,isError:m}=Q({mutationFn:async({orderedDishId:l,newQuantity:u})=>{r.current&&(console.debug("Abort previous patchCart request"),r.current.abort());const i=new AbortController;r.current=i;const c={quantity:u.toString()},n=await L(l,c,r.current.signal);return r.current===i&&(r.current=null),n},onMutate:async({orderedDishId:l,newQuantity:u})=>{await t.cancelQueries(["cart"]);const i=t.getQueryData(["cart"]),c=i?{...i}:{orderedDishes:[]};return c.orderedDishes||(c.orderedDishes=[]),u===0?c.orderedDishes=c.orderedDishes.filter(n=>n.id!==l):c.orderedDishes=c.orderedDishes.map(n=>n.id===l?{...n,quantity:u}:n),t.setQueryData(["cart"],c),{previousCart:i}},onError:(l,u,i)=>{i!=null&&i.previousCart&&t.setQueryData(["cart"],i.previousCart),alert("更新數量失敗，請稍後再試")},onSettled:()=>{console.debug("patchCartAsync onSettled"),t.invalidateQueries(["cart"])}});return{patchCartAsync:o,patchCartError:a,patchCartOnMutate:d,ispatchCartError:m}},N=({orderDetail:t})=>{const{totalSpend:r,estimateTime:o,cartData:a}=t,{ispatchCartError:d}=C(),m=d?"bg-gray-300":"bg-white";return e.jsxs("div",{className:" fixed bottom-0 w-full bg-orange-400 px-4 py-2 rounded-t-lg  text-white font-notoTC font-medium",children:[e.jsxs("div",{className:"flex justify-between mb-3 px-2 text-sm",children:[e.jsx("span",{children:"總金額"}),e.jsxs("span",{children:["$ ",r]})]}),a.orderedDishes.length>0&&e.jsxs("div",{className:"flex justify-between mb-3 px-2 text-sm",children:[e.jsx("span",{children:"預估完成時間"}),e.jsxs("span",{children:[o," ~ ",o+20," 分鐘"]})]}),e.jsx("button",{className:`w-full ${m} text-orange-500 py-2 px-2 rounded-full font-semibold `,disabled:d,children:"送出訂單"})]})};N.propTypes={orderDetail:s.shape({cartData:s.object.isRequired,totalSpend:s.number.isRequired,estimateTime:s.number.isRequired}).isRequired};const b=()=>{const t=A(),r=()=>{t(-1)};return e.jsx("header",{className:"h-16 fixed z-30 top-0 left-0 w-full flex justify-between items-center bg-white shadow-md transition-shadow duration-300 ease-in-out p-2 font-notoTC",children:e.jsxs("div",{className:"flex ml-3 items-center text-xl ",children:[e.jsx(g,{icon:M,className:"mr-4 cursor-pointer text-2xl mt-1",onClick:r}),e.jsx("h1",{className:"font-noto font-bold text-2xl",children:"購物車"})]})})},v=({orderDetail:t})=>{const{cartData:r,merchantName:o,totalSpend:a}=t;return e.jsxs("div",{className:"mt-[66px] flex justify-between items-center p-4 bg-white",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-gray-900",children:r.orderedDishes.length?o:""}),e.jsx("p",{className:"text-sm text-gray-500",children:"訂單詳細資訊"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"總金額"}),e.jsxs("h2",{className:"text-2xl font-bold text-black",children:["$",a]})]})]})};v.propTypes={orderDetail:s.shape({cartData:s.object.isRequired,merchantName:s.string,totalSpend:s.number.isRequired}).isRequired};const w=({dishData:t,imageUrl:r})=>{const{id:o,dishName:a,price:d,quantity:m,chosenAttributes:l,note:u}=t,[i,c]=y.useState(m),{patchCartAsync:n}=C(),x=j=>{const f=i+j;f<0||f>25||(f>0&&c(f),n({orderedDishId:o,newQuantity:f}))};let h=0;const p=l!=null&&l.length?l.map(j=>(h+=j.extraCost||0,j.chosenOption)).join(", "):"";return i<=0?null:e.jsxs("div",{className:"relative flex rounded-lg p-4 w-full items-start min-h-[142px]",children:[r&&e.jsx(P.LazyLoadImage,{src:r,alt:a,className:"w-20 h-26 object-cover rounded-lg flex-shrink-0",effect:"blur",wrapperClassName:"flex-shrink-0"}),e.jsxs("div",{className:"ml-4 flex min-w-0 flex-col h-full",children:[e.jsx("h2",{className:"text-lg font-semibold truncate",children:a}),p&&e.jsxs("p",{className:"text-sm text-gray-500 truncate",children:["+$",h," : ",p]}),u&&e.jsx("p",{className:"text-sm text-gray-500 line-clamp-2",children:u}),e.jsxs("p",{className:"text-xl mt-2 absolute bottom-[15px] font-semibold",children:["$ ",(d+h)*i]})]}),e.jsxs("div",{className:"absolute bottom-[15px] right-[15px] flex items-end border border-gray-300 rounded-md",children:[e.jsx("button",{onClick:()=>x(-1),className:"px-2 py-0 text-lg rounded-l-md w-7",children:m<=1?e.jsx(g,{icon:k,size:"xs",style:{color:"#d00b0b"}}):"-"}),e.jsx("span",{className:"px-4 py-0.5",children:i}),e.jsx("button",{onClick:()=>x(1),className:"px-2 py-0 text-lg rounded-r-md w-7",children:"+"})]})]})};w.propTypes={dishData:s.shape({id:s.string.isRequired,dishId:s.string.isRequired,dishName:s.string.isRequired,price:s.number.isRequired,quantity:s.number.isRequired,chosenAttributes:s.arrayOf(s.shape({name:s.string})),note:s.string}).isRequired,imageUrl:s.string.isRequired||s.object.isRequired};const q=({cartData:t,dishesMap:r})=>!t.orderedDishes||t.orderedDishes.length===0?e.jsx("div",{className:"flex justify-center items-center mt-4 fa-2x",children:"目前購物車是空的:)"}):e.jsx("div",{children:t.orderedDishes.map((o,a)=>{var d;return e.jsx(w,{dishData:o,imageUrl:((d=r[o.dishId])==null?void 0:d.picture)||{}},a)})});q.propTypes={cartData:s.object.isRequired,dishesMap:s.object.isRequired};const G=()=>{const{cartData:t,isCartError:r,merchantData:o,isMerchantLoading:a,menuCategoryList:d,totalSpend:m,totalQuantity:l}=E(),{categoryData:u,isQueriesSuccess:i}=$(d,t==null?void 0:t.storeId),c=y.useMemo(()=>u?u.reduce((x,h)=>(h.dishes.forEach(p=>{x[p.id]=p}),x),{}):{},[u]);if(t==null||a||!i)return e.jsxs("div",{className:"flex justify-center items-center mt-28 fa-2x",children:[e.jsx(b,{}),e.jsx(g,{icon:I,spinPulse:!0})]});let n=10*l;return n>150&&n<300?n=Math.floor(n*.7):n>=300&&(n=Math.floor(n*.5)),r?e.jsxs("div",{className:"flex justify-center items-center mt-28 fa-2x",children:[e.jsx(b,{}),"購物車資料讀取失敗:("]}):e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:"flex-none",children:[e.jsx(b,{}),e.jsx(v,{orderDetail:{cartData:t,merchantName:o==null?void 0:o.name,totalSpend:m}})]}),e.jsx("div",{className:"flex-1 overflow-auto pb-[120px] ",children:e.jsx(q,{cartData:t,dishesMap:c})}),e.jsx("div",{className:"flex-none",children:e.jsx(N,{orderDetail:{cartData:t,totalSpend:m,estimateTime:n-(l>2?30:0)}})})]})};export{G as default};
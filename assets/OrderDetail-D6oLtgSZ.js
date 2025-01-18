import{c as p,d as C,r as h,j as t,H as b}from"./index-YwLf8I32.js";import{u as j}from"./orderStore-DlfEsPHS.js";import{U as E,O as N,E as v}from"./EstimatedTime-DvfK0zRt.js";import{H as w}from"./Header-DylciwfJ.js";import{F as I,m as y}from"./index-CfLZK19C.js";import{u as D}from"./useCategoryQueries-CVixOTA6.js";import{C as P}from"./CartItemCard-CmDnsR__.js";import"./useMutation-D75FCXxV.js";import"./blur-7cZasfdP.js";const F=()=>{const e=j(s=>s.orderData),{userInfo:i,merchantData:o,menuCategoryList:c}=p(),r=C();if(h.useEffect(()=>{e===null&&r("/store/pos/management/order")},[e,r]),e===null)return t.jsx(b,{});const m={PENDING:{text:"未接單",bgColor:"bg-red-500"},PROCESSING:{text:"製作中",bgColor:"bg-blue-500"},COMPLETED:{text:"未取餐",bgColor:"bg-yellow-500"},PICKED_UP:{text:"已取餐",bgColor:"bg-green-500"},CANCELED:{text:"取消",bgColor:"bg-gray-300"}},l=s=>m[s]||{text:"default",bgColor:"bg-gray-200"},u=t.jsx("button",{className:`${l(e==null?void 0:e.status).bgColor} text-sm px-3 py-1 rounded-md text-white font-bold`,children:l(e==null?void 0:e.status).text}),{categoryData:x}=D(c,o==null?void 0:o.menuId,i!==void 0),f=()=>{r(-1)},g=s=>{const d=x.flatMap(a=>a.dishes).find(a=>a.id===s);return d?d.picture:null};return t.jsxs("div",{className:"flex flex-col h-screen",children:[t.jsx("div",{className:"sticky mt-[54px] z-50 shadow-sm",children:t.jsx(w,{LeftIcon:t.jsx(I,{icon:y}),title:"單號 "+e.id.slice(-5),onLeftClick:f,rightComponents:[u]})}),t.jsxs("div",{className:"flex-1 overflow-auto pb-[48px]",children:[t.jsxs("div",{className:"bg-white text-black flex-1 p-4 overflow-auto",children:[t.jsx(E,{user:e,role:i.role}),t.jsx(N,{note:e.note}),e.orderedDishes.map((s,n)=>t.jsx(P,{dishData:s,imageUrl:g(s.dishId),showAdjustBtn:!1},n))]}),t.jsx("div",{className:"fixed bottom-0 left-0 right-0 w-full",children:t.jsx(v,{value:e.estimatedPrepTime})})]})]})};export{F as default};
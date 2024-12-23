import{P as r,j as e,c as N,N as C}from"./index-Df6S3GLs.js";import{u as y}from"./orderStore-D6TBxBbe.js";import{H as v}from"./Header-Dwd2uDhE.js";import{F as T,v as w}from"./index-BCnIIidU.js";import{u as I}from"./useSystemContext-lX1l9ygt.js";import{u as P}from"./useCategoryQueries-DOWJFlpU.js";import{C as D}from"./CartItemCard-ByU4pIJP.js";import"./useQueries-bjlDKR_4.js";import"./useMutation-DB-Y8DCy.js";import"./blur-D88BhFD3.js";const c=({user:s})=>e.jsxs("div",{className:"mb-6 flex flex-col items-start gap-2",children:[e.jsxs("p",{className:"font-bold text-lg bg-gray-200 p-2 rounded-md",children:["用戶ID: ",s.id]}),e.jsxs("p",{className:"text-lg   ",children:["下單時間: ",s.orderTime]}),e.jsxs("p",{className:"text-lg",children:["預估製作時間: ",s.estimatedPrepTime," 分鐘"]}),e.jsxs("p",{className:"text-2xl font-bold mt-2",children:["總金額: $",s.cost]})]});c.propTypes={user:r.shape({id:r.string.isRequired,estimatedPrepTime:r.number.isRequired,orderTime:r.string.isRequired,cost:r.number.isRequired}).isRequired};const m=({note:s})=>e.jsxs("div",{className:"bg-gray-100 p-3 rounded-md mb-6 min-h-24",children:[e.jsx("h2",{className:"font-bold mb-2",children:"訂單備註"}),e.jsx("p",{className:"text-gray-600 text-sm",children:s})]});m.propTypes={note:r.string.isRequired};const x=({value:s,onChange:i})=>e.jsxs("footer",{className:"  bg-orange-500 p-4 text-center text-white flex justify-center items-center",children:[e.jsx("span",{className:"text-xl font-bold mr-2",children:"預估完成時間"}),e.jsx("span",{className:"bg-orange-300 rounded-xl w-14 h-8 content-center text-black font-extrabold",children:s}),e.jsx("span",{className:"text-xl ml-2",children:"分鐘"})]});x.propTypes={value:r.number.isRequired,onChange:r.func};const E=()=>{const s=y(t=>t.orderData);console.debug("orderData:",s);const i={PENDING:{text:"未接單",bgColor:"bg-red-500"},PROCESSING:{text:"製作中",bgColor:"bg-blue-500"},COMPLETED:{text:"未取餐",bgColor:"bg-yellow-500"},PICKED_UP:{text:"已取餐",bgColor:"bg-green-500"},CANCELED:{text:"取消",bgColor:"bg-gray-300"}},n=t=>i[t]||{text:"default",bgColor:"bg-gray-200"},u=e.jsx("button",{className:`${n(s==null?void 0:s.status).bgColor} text-sm px-3 py-1 rounded-md text-white font-bold`,children:n(s==null?void 0:s.status).text}),{userInfo:p,merchantData:o,menuCategoryList:g}=I(),{categoryData:f}=P(g,o==null?void 0:o.menuId,p!==void 0),h=N(),b=()=>{h(-1)},j=t=>{const d=f.flatMap(a=>a.dishes).find(a=>a.id===t);return d?d.picture:null};return s===null?e.jsx(C,{to:"/store/pos/management/order",replace:!0}):e.jsxs("div",{className:"flex flex-col h-screen",children:[e.jsx("div",{className:"sticky mt-[54px] z-50 shadow-sm",children:e.jsx(v,{LeftIcon:e.jsx(T,{icon:w}),title:"單號 "+s.id.slice(-5),onLeftClick:b,rightComponents:[u]})}),e.jsxs("div",{className:"flex-1 overflow-auto pb-[48px]",children:[e.jsxs("div",{className:"bg-white text-black flex-1 p-4 overflow-auto",children:[e.jsx(c,{user:s}),e.jsx(m,{note:s.note}),s.orderedDishes.map((t,l)=>e.jsx(D,{dishData:t,imageUrl:j(t.dishId)},l))]}),e.jsx("div",{className:"fixed bottom-0 left-0 right-0 w-full",children:e.jsx(x,{value:s.estimatedPrepTime})})]})]})};E.propTypes={};export{E as default};

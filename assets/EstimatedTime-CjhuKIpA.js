import{P as t,c as i,j as e}from"./index-CfmVgRZ1.js";const l=({user:s,storeData:r,role:n})=>{const a=i();return n==="MERCHANT"?e.jsxs("div",{className:"mb-6 flex flex-col items-start gap-2",children:[e.jsxs("p",{className:"font-bold text-lg bg-gray-200 p-2 rounded-md",children:["用戶ID: ",s.id]}),e.jsxs("p",{className:"text-lg   ",children:["下單時間: ",s.orderTime]}),e.jsxs("p",{className:"text-lg",children:["預估製作時間: ",s.estimatedPrepTime," 分鐘"]}),e.jsxs("p",{className:"text-2xl font-bold mt-2",children:["總金額: $",s.cost]})]}):e.jsxs("div",{className:"mb-6 flex flex-col items-start gap-2",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[e.jsx("p",{className:"font-notoTC font-extrabold text-2xl ",children:r.name}),e.jsx("button",{className:"font-notoTC font-medium h-6 text-center text-xs  bg-orange-500 px-2 py-1 rounded-lg text-white",onClick:()=>{a(`/menu/${r.id}`)},children:"查看菜單"})]}),e.jsxs("p",{className:"text-lg   ",children:["下單時間: ",s.orderTime]}),e.jsxs("p",{className:"text-lg",children:["預估製作時間: ",s.estimatedPrepTime," 分鐘"]}),e.jsxs("p",{className:"text-2xl font-bold mt-2",children:["總金額: $",s.cost]})]})};l.propTypes={user:t.shape({id:t.string.isRequired,estimatedPrepTime:t.number.isRequired,orderTime:t.string.isRequired,cost:t.number.isRequired}).isRequired,storeData:t.object,role:t.string.isRequired};const o=({note:s})=>e.jsxs("div",{className:"bg-gray-200 p-3 rounded-md mb-6 min-h-24",children:[e.jsx("h2",{className:"font-bold mb-2",children:"訂單備註"}),e.jsx("p",{className:"text-gray-600 text-sm",children:s})]});o.propTypes={note:t.string.isRequired};const d=({value:s,onChange:r})=>e.jsxs("footer",{className:"  bg-orange-500 p-4 text-center text-white flex justify-center items-center",children:[e.jsx("span",{className:"text-xl font-bold mr-2",children:"預估完成時間"}),e.jsx("span",{className:"bg-orange-300 rounded-xl w-14 h-8 content-center text-black font-extrabold",children:s}),e.jsx("span",{className:"text-xl ml-2",children:"分鐘"})]});d.propTypes={value:t.number.isRequired,onChange:t.func};export{d as E,o as O,l as U};

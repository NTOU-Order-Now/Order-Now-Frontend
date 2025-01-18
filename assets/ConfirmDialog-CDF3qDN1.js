import{r as E,j as e,P as t}from"./index-BRPwgKXP.js";import{B as m}from"./button-DUhbg3Kc.js";import{D,a as T,b as h,c as P,d as f,e as R,f as S,g as y}from"./dialog-Bc20Vifv.js";import"./orderStore-BtugDXu6.js";import{u as j}from"./AcceptedList-BHdqtoje.js";import"./index-B6k3gOzA.js";import"./useMutation-DAKMrP2u.js";import"./skeleton-DZmJMt6-.js";const N=({order:o,status:a,pageId:n})=>{const u=r=>{switch(r){case"ACCEPT":return{bgColor:"bg-green-500",bgHoverColor:"bg-green-600",statusText:"接單",title:"將訂單轉為製作中?",description:`訂單接收後不可取消，顧客也不可取消訂單。
確認後訂單將切換為製作中`,disable:!1};case"REJECT":return{bgColor:"bg-red-500",bgHoverColor:"bg-red-600",statusText:"拒絕",title:"拒絕此訂單?",description:"訂單拒絕後會立即通知顧客",disable:!1};case"PROCESSING":return{bgColor:"bg-blue-500",bgHoverColor:"bg-blue-600",statusText:"製作中",title:"將訂單轉為未取餐?",description:"確認訂單已製作完畢，確認後將通知顧客可前往取餐，訂單狀態切換為未取餐",disable:!1};case"COMPLETED":return{bgColor:"bg-yellow-500",bgHoverColor:"bg-yellow-600",statusText:"未取餐",title:"將訂單轉為已取餐?",description:"確認顧可已經取餐，確認後將訂單狀態切換為已取餐",disable:!1};case"PICKED_UP":return{bgColor:"bg-lime-600",bgHoverColor:"bg-lime-600",statusText:"已取餐",title:"此訂單已取餐",disable:!0};case"CANCELED":return{bgColor:"bg-gray-500",textColor:"text-gray-500",statusText:"取消",title:"此訂單已取消",disable:!0};default:return{bgColor:"bg-gray-200",statusText:""}}},d=r=>{switch(r){case"ACCEPT":return"PROCESSING";case"REJECT":return"CANCELED";case"PROCESSING":return"COMPLETED";case"COMPLETED":return"PICKED_UP";case"PICKED_UP":return"CANCELED";case"PENDING":return"PROCESSING";default:return null}},{bgColor:c,bgHoverColor:g,statusText:b,title:C,description:p,disable:i}=u(a),s=d(a),{updateOrderStatusAsync:l}=j(n),x=E.useCallback(async()=>{if(s)try{await l({orderId:o.id,newStatus:s})}catch(r){console.error("Failed to update order status:",r)}},[o.id,l,s]);return e.jsxs(D,{children:[e.jsx(T,{asChild:!0,children:e.jsx("button",{className:`${c} text-white px-3 py-1 text-sm w-full font-bold rounded-md hover:${g} disabled:${i}`,children:b})}),e.jsxs(h,{className:"w-full",children:[e.jsxs(P,{children:[e.jsx(f,{children:C}),e.jsx(R,{children:p})]}),e.jsx(S,{children:e.jsx(y,{asChild:!0,children:e.jsx(m,{type:"button",onClick:async()=>{i||await x()},children:"確定"})})})]})]})};N.propTypes={order:t.shape({id:t.string.isRequired,status:t.string.isRequired,cost:t.number.isRequired,orderTime:t.string.isRequired,estimatedPrepTime:t.number.isRequired}).isRequired,status:t.string.isRequired,pageId:t.number.isRequired};export{N as default};
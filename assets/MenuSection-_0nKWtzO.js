const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CartItemCardSkeleton-oyX5yhMQ.js","assets/index-B402WIRV.js","assets/index-B9T6NPvN.css","assets/MenuItemCard-B2ki7Iov.js","assets/blur-B9vAKZxl.js","assets/blur-DOfe2hmq.css","assets/index-DXwj08oC.js","assets/Menu-C2Je_AdK.js","assets/sidebarStore-igJN0RtU.js","assets/Header-JskNl-s8.js","assets/NavbarSkeleton-Du-gMAox.js","assets/MenuSectionSkeleton-Bc78nFqF.js","assets/useCategoryQueries-CNWHdMbZ.js","assets/useQueries-BZjoIdZe.js","assets/merchantMenuNav-Dy1FHj98.js","assets/useImageUploadMutation-CWl0KSDa.js","assets/useMutation-C4u_mu20.js","assets/useSystemContext-96Di7jkZ.js"])))=>i.map(i=>d[i]);
import{r as m,a as v,A as w,b as C,u as b,P as y,j as p,_ as Q}from"./index-B402WIRV.js";import{u as D}from"./useMutation-C4u_mu20.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k=(...s)=>s.filter((r,t,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=m.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:c,className:a="",children:o,iconNode:n,...i},e)=>m.createElement("svg",{ref:e,...A,width:r,height:r,stroke:s,strokeWidth:c?Number(t)*24/Number(r):t,className:k("lucide",a),...i},[...n.map(([l,u])=>m.createElement(l,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(s,r)=>{const t=m.forwardRef(({className:c,...a},o)=>m.createElement(P,{ref:o,iconNode:r,className:k(`lucide-${_(s)}`,c),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=E("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=E("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),R=async(s,r,t,c)=>{const a=v.get("authToken");try{return(await w.patch(`/v2/menu/${s}/dishes`,{categoryName:t},{params:{category:r},signal:c,headers:{Authorization:`Bearer ${a}`}})).data}catch(o){if(C.isCancel(o)){console.debug("Update category name request cancelled");return}throw console.error(`Failed to update category name from ${r} to ${t}:`,o),o}},M=s=>{const r=b(),t=m.useRef(null),{mutateAsync:c,isError:a,isPending:o}=D({mutationFn:async({oldCategoryName:n,newCategoryName:i})=>{t.current&&t.current.abort();const e=new AbortController;t.current=e;const l=await R(s,n,i,e.signal);return t.current===e&&(t.current=null),{oldCategoryName:n,newCategoryName:i,result:l}},onMutate:async({oldCategoryName:n,newCategoryName:i})=>{await Promise.all([r.cancelQueries(["menuCategoryList",s]),r.cancelQueries(["categoryDishes",n])]);const e=r.getQueryData(["menuCategoryList",s]),l=r.getQueryData(["categoryDishes",n]);return r.setQueryData(["menuCategoryList",s],e.map(u=>u.categoryName===n?{...u,categoryName:i}:u)),l&&(r.removeQueries(["categoryDishes",n]),r.setQueryData(["categoryDishes",i],l)),{previousMenuCategoryList:e,previousCategoryDishes:l,oldCategoryName:n}},onError:(n,i,e)=>{console.debug("varoables",i,e),e!=null&&e.previousMenuCategoryList&&r.setQueryData(["menuCategoryList",s],e.previousMenuCategoryList),e!=null&&e.previousCategoryDishes&&(r.setQueryData(["categoryDishes",e.oldCategoryName],e.previousCategoryDishes),r.removeQueries(["categoryDishes",i.newCategoryName])),alert("更新錯誤，請重整頁面後再試"),console.error("Update category name error:",n)},onSettled:n=>{r.invalidateQueries(["menuCategoryList",s]),n&&(r.invalidateQueries(["categoryDishes",n.oldCategoryName]),r.invalidateQueries(["categoryDishes",n.newCategoryName]))}});return{changeCategoryName:c,isError:a,isPending:o}},j=({categoryData:s,menuId:r})=>{const[t,c]=m.useState(!1),[a,o]=m.useState((s==null?void 0:s.categoryName)||"未命名類別"),{changeCategoryName:n}=M(r);m.useEffect(()=>{o((s==null?void 0:s.categoryName)||"未命名類別")},[s]);const i=async u=>{if(u.preventDefault(),u.stopPropagation(),a.trim()!==""&&a.trim()!==(s==null?void 0:s.categoryName))try{await n({oldCategoryName:s==null?void 0:s.categoryName,newCategoryName:a.trim()})}catch(f){console.error("Failed to update category name:",f)}else a.trim()===""&&alert("不可為空");c(!1)},e=async u=>{u.key==="Enter"?await i(u):u.key==="Escape"&&(o((s==null?void 0:s.categoryName)||"未命名類別"),c(!1))},l=()=>{t?i():c(!0)};return p.jsxs("div",{className:"flex items-center gap-2 py-3 ",children:[t?p.jsx("input",{type:"text",value:a,onChange:u=>o(u.target.value),onBlur:i,onKeyDown:e,className:"border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none text-2xl font-bold px-1 bg-transparent h-10",autoFocus:!0}):p.jsx("h2",{className:"text-2xl font-bold h-10 flex items-center px-1",children:(s==null?void 0:s.categoryName)||"未命名類別"}),p.jsx("button",{onClick:l,className:"p-2 hover:bg-gray-100 rounded-full transition-colors right-3 relative",title:t?"儲存":"編輯",children:t?p.jsx($,{className:"w-5 h-5 text-blue-600"}):p.jsx(L,{className:"w-5 h-5 text-gray-600"})})]})};j.propTypes={categoryData:y.shape({categoryName:y.string,dishes:y.array}),menuId:y.string.isRequired};const x=async(s,r,t,c)=>{const a=v.get("authToken");try{return(await w.put(`/v2/menu/${s}/dishes`,t,{params:{category:r},signal:c,headers:{Authorization:`Bearer ${a}`}})).data}catch(o){if(C.isCancel(o)){console.debug("Update dishes order request cancelled");return}throw console.error(`Failed to update dishes order in category ${r}:`,o),o}},T=s=>{const r=b(),t=m.useRef(null),{mutateAsync:c,isError:a,isPending:o}=D({mutationFn:async({categoryName:n,newOrder:i})=>{t.current&&t.current.abort();const e=i.map(f=>f.id),l=new AbortController;t.current=l;const u=await x(s,n,e,l.signal);return t.current===l&&(t.current=null),u},onMutate:async({categoryName:n,newOrder:i})=>{await r.cancelQueries(["categoryDishes",n]);const e=r.getQueryData(["categoryDishes",n]),l={...e,dishes:i};return r.setQueryData(["categoryDishes",n],l),{previousDishes:e,categoryName:n}},onError:(n,i,e)=>{e!=null&&e.previousDishes&&r.setQueryData(["categoryDishes",e.categoryName],e.previousDishes),alert("變更錯誤，請重整後再試")},onSettled:(n,i,e)=>{r.invalidateQueries(["categoryDishes",e.categoryName])}});return{updateDishOrder:c,isError:a,isPending:o}},S=async(s,r,t)=>{const c=v.get("authToken");try{return(await w.delete(`/v2/menu/${s}/dish/${r}`,{signal:t,headers:{Authorization:`Bearer ${c}`}})).data}catch(a){if(C.isCancel(a)){console.debug("Delete dish request cancelled");return}throw console.error(`Failed to delete dish (ID: ${r}) from menu (ID: ${s}):`,a),a}},O=s=>{const r=b(),t=m.useRef(null),{mutateAsync:c,isError:a,isPending:o}=D({mutationFn:async({dishId:n,categoryName:i})=>{t.current&&t.current.abort();const e=new AbortController;t.current=e;const l=await S(s,n,e.signal);return t.current===e&&(t.current=null),l},onMutate:async({dishId:n,categoryName:i})=>{await r.cancelQueries(["categoryDishes",i]);const e=r.getQueryData(["categoryDishes",i]);return r.setQueryData(["categoryDishes",i],{previousDishes:e,dishes:e.dishes.filter(l=>l.id!==n)}),{previousDishes:e,categoryName:i}},onError:(n,i,e)=>{e!=null&&e.previousDishes&&r.setQueryData(["categoryDishes",e.categoryName],e.previousDishes),alert("刪除失敗，請重整頁面後再試一次"),console.error("Delete dish error:",n)},onSettled:(n,i,e)=>{r.invalidateQueries(["categoryDishes",e.categoryName]),r.invalidateQueries(["menuCategoryList",s])}});return{deleteMenuDish:c,isError:a,isPending:o}},N=m.lazy(()=>Q(()=>import("./CartItemCardSkeleton-oyX5yhMQ.js"),__vite__mapDeps([0,1,2]))),q=m.lazy(()=>Q(()=>import("./MenuItemCard-B2ki7Iov.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17])));function F({sectionRefs:s,categoryData:r,menuId:t}){const{updateDishOrder:c,isPending:a}=T(t),{deleteMenuDish:o,isPending:n}=O(t);if(M(t),a)return p.jsx(N,{});const i=async(e,l,u)=>{const f=r.find(g=>g.categoryName===e),h=f.dishes.findIndex(g=>g.id===l),d=[...f.dishes];u==="up"&&h>0?[d[h],d[h-1]]=[d[h-1],d[h]]:u==="down"&&h<d.length-1?[d[h],d[h+1]]=[d[h+1],d[h]]:u==="up"&&h===0?[d[h],d[d.length-1]]=[d[d.length-1],d[h]]:u==="down"&&h===d.length-1&&([d[h],d[0]]=[d[0],d[h]]),await c({categoryName:e,newOrder:d})};return p.jsx("div",{className:"font-notoTC relative  flex flex-col justify-start container mx-auto p-4",children:r==null?void 0:r.map((e,l)=>p.jsxs("div",{ref:u=>s.current[l]=u,className:"w-full mb-8",children:[p.jsx(j,{categoryData:e,menuId:t}),p.jsx("div",{className:"grid gap-4",children:e==null?void 0:e.dishes.map((u,f)=>p.jsx(m.Suspense,{fallback:p.jsx(N,{}),children:p.jsx(q,{categoryName:e.categoryName,food:u,onMove:i,onDelete:o})},f))})]},l))})}F.propTypes={sectionRefs:y.object.isRequired,categoryData:y.array.isRequired,menuId:y.string};export{F as default};
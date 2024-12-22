const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MenuNavbar-CDZKGbnO.js","assets/index-NGzkvcc4.js","assets/index-Djd05nlW.css","assets/merchantMenuNav-BahwwGw1.js","assets/MenuSection-MQIUOFdK.js","assets/useMutation--dmrRt6a.js"])))=>i.map(i=>d[i]);
import{P as l,j as e,r as m,e as W,a as E,A as P,b as A,u as G,_ as T,c as X,M as J}from"./index-NGzkvcc4.js";import{w as Y,F as w,x as _,y as Z,z as ee,A as M,q as te}from"./index-Basaqh1b.js";import{u as O}from"./sidebarStore-BNsTiJ8H.js";import{H as $}from"./Header-DIgAe7tj.js";import se from"./NavbarSkeleton-DEnsFkPf.js";import ne from"./MenuSectionSkeleton-C9vxvhF_.js";import{u as re}from"./useCategoryQueries-D0DcMVAD.js";import{u as oe}from"./merchantMenuNav-BahwwGw1.js";import{u as Q}from"./useMutation--dmrRt6a.js";import{u as ae}from"./useSystemContext-Bg3dPr5V.js";const V=({dishName:o,onSave:r,onBack:a})=>{const t=e.jsx("button",{onClick:r,className:"bg-orange-400 text-white px-4 py-1 rounded-lg font-bold hover:bg-orange-600",children:"保存"});return e.jsx($,{leftIcon:Y,title:o,onLeftClick:a,rightComponents:[t]})};V.propTypes={dishName:l.string.isRequired,onSave:l.func,onBack:l.func};const U=({defaultName:o,defaultDescription:r,defaultPrice:a,defaultCategory:t,categoryNames:c=[],onImageUpload:d,onNameChange:n,onDescriptionChange:s,onPriceChange:i,onCategoryChange:h})=>e.jsxs("div",{className:"mt-10 p-6 bg-white",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"名稱："}),e.jsx("input",{type:"text",defaultValue:o,placeholder:"請輸入名稱",className:"w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:u=>n(u.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"商品描述："}),e.jsx("textarea",{defaultValue:r,placeholder:"請輸入商品描述",className:"w-full h-24 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:u=>s(u.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"圖片："}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"text",placeholder:"請選擇圖片",readOnly:!0,className:"flex-1 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none mr-2"}),e.jsx("button",{onClick:d,className:"flex-shrink-0 bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-600",children:"上傳圖片"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"價格："}),e.jsx("input",{type:"number",defaultValue:a,placeholder:"請輸入價格",className:"w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:u=>i(Number(u.target.value))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"類別："}),e.jsx("input",{type:"text",defaultValue:t,placeholder:"請輸入類別",list:"category-options",className:"w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:u=>h(u.target.value)}),e.jsx("datalist",{id:"category-options",children:c.map((u,f)=>e.jsx("option",{value:u},f))})]})]});U.propTypes={defaultName:l.string,defaultDescription:l.string,defaultPrice:l.oneOfType([l.string,l.number]),defaultCategory:l.string,onImageUpload:l.func,categoryNames:l.arrayOf(l.string),onNameChange:l.func.isRequired,onDescriptionChange:l.func.isRequired,onPriceChange:l.func.isRequired,onCategoryChange:l.func.isRequired};const z=({option:o,onDelete:r,onUpdate:a})=>{const[t,c]=m.useState(!1),[d,n]=m.useState(!1),s=m.useRef(null);m.useEffect(()=>{s.current&&(t||d)&&s.current.focus()},[t,d]);const i=u=>{const f=u.target.value;u.type==="keydown"&&u.key!=="Enter"||(c(!1),a({name:f}))},h=u=>{const f=u.target.value;u.type==="keydown"&&u.key!=="Enter"||(n(!1),a({extraCost:parseFloat(f)||0}))};return e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[t?e.jsx("input",{ref:s,type:"text",defaultValue:o.name,onBlur:i,onKeyDown:i,className:"border rounded px-2 py-1 text-lg focus:ring-orange-400"}):e.jsx("span",{onClick:()=>c(!0),className:"cursor-pointer hover:underline text-xl",children:o.name}),d?e.jsx("input",{ref:s,type:"number",defaultValue:o.extraCost,onBlur:h,onKeyDown:h,className:"border rounded px-2 py-1 text-sm focus:ring-orange-400"}):e.jsxs("span",{onClick:()=>n(!0),className:"px-3 border rounded-xl text-black border-black cursor-pointer hover:underline",children:["+ ",o.extraCost,"元"]})]}),e.jsx("button",{className:"text-red-400 hover:text-red-700",onClick:r,children:e.jsx(w,{icon:_})})]})};z.propTypes={option:l.shape({name:l.string.isRequired,extraCost:l.number.isRequired}).isRequired,onDelete:l.func.isRequired,onUpdate:l.func.isRequired};function B({options:o,selectedOption:r,onChange:a}){const t=Object.keys(o),c=t.findIndex(n=>n===r),d=100/t.length;return e.jsx("div",{className:"relative border border-gray-300 rounded-2xl p-1 w-full",style:{height:"50px"},children:e.jsxs("div",{className:"relative w-full h-full flex overflow-hidden rounded-xl",children:[e.jsx("div",{className:"absolute h-full bg-orange-500 transition-transform duration-300 ease-in-out rounded-xl",style:{width:`${d}%`,transform:`translateX(${c*100}%)`}}),t.map(n=>{const s=n===r;return e.jsx("button",{onClick:()=>a(n),className:`
                                relative flex-1 text-center text-lg font-bold 
                                transition-colors duration-300 ease-in-out z-10
                                ${s?"text-white":"text-black"}
                            `,children:n},n)})]})})}B.propTypes={options:l.object.isRequired,selectedOption:l.string.isRequired,onChange:l.func.isRequired};const F=({group:o,groupIndex:r,onUpdateGroup:a,onDeleteGroup:t})=>{const[c,d]=m.useState(!1),[n,s]=m.useState(o.name),[i,h]=m.useState(o.isRequired),[u,f]=m.useState(o.type),[b,y]=m.useState(o.attributeOptions||[]),j=()=>{d(!1),x()},C=()=>{const g={name:"新選項",extraCost:0,isChosen:!1},p=[...b,g];y(p),x({attributeOptions:p})},S=g=>{const p=b.filter((v,I)=>I!==g);y(p),x({attributeOptions:p})},k=(g,p)=>{const v=b.map((I,H)=>H===g?{...I,...p}:I);y(v),x({attributeOptions:v})},x=g=>{const p={...o,name:n,isRequired:i,type:u,attributeOptions:b,...g};a(p)},D={單選:()=>{f("single"),x({type:"single"})},複選:()=>{f("multiple"),x({type:"multiple"})}},N=u==="single"?"單選":"複選",R=()=>{const g=!i;h(g),x({isRequired:g})};return e.jsxs("div",{className:"p-4 bg-white border rounded-lg shadow-md mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c?e.jsx("input",{type:"text",value:n,onChange:g=>s(g.target.value),onKeyDown:g=>{g.key==="Enter"&&j()},className:"border rounded px-2 py-1 text-lg font-bold focus:ring-orange-500 focus:outline-none"}):e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("h3",{className:"font-bold text-xl",children:n}),e.jsx("span",{className:`px-2 py-1 rounded-lg text-white text-sm cursor-pointer ${i?"bg-red-500":"bg-gray-500"}`,onClick:R,children:"必選"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"text-orange-500 hover:text-orange-700 text-xl",onClick:()=>{c?j():d(!0)},children:e.jsx(w,{icon:c?Z:ee})}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-xl",onClick:t,children:e.jsx(w,{icon:_})})]})]}),b.map((g,p)=>e.jsx(z,{option:g,onDelete:()=>S(p),onUpdate:v=>k(p,v)},p)),e.jsx("button",{className:"text-orange-500 mt-2 text-lg",onClick:C,children:"新增選項..."}),e.jsx("div",{className:"flex justify-end space-x-4 mt-4",children:e.jsx("div",{className:"flex border-black border-[2px] rounded-2xl overflow-hidden",children:e.jsx(B,{options:D,selectedOption:N,onChange:g=>{D[g]()}})})})]})};F.propTypes={group:l.object.isRequired,groupIndex:l.number.isRequired,onUpdateGroup:l.func.isRequired,onDeleteGroup:l.func.isRequired};const K=({groups:o,onGroupsChange:r})=>{const a=d=>{const n=o.filter((s,i)=>i!==d);r(n)},t=(d,n)=>{const s=o.map((i,h)=>h===d?n:i);r(s)},c=()=>{const d={name:"新選項標題",description:"",type:"single",isRequired:!1,attributeOptions:[]};r([...o,d])};return e.jsxs("div",{className:"p-4 bg-white mt-4",children:[o.map((d,n)=>e.jsx(F,{groupIndex:n,group:d,onUpdateGroup:s=>t(n,s),onDeleteGroup:()=>a(n)},n)),e.jsx("div",{className:"flex justify-center mt-6 z-50",children:e.jsxs("button",{className:"text-orange-500 hover:text-orange-700 flex items-center",onClick:c,children:[e.jsx(w,{icon:M,size:"lg",className:"mr-2"}),"新增客製化選項"]})})]})};K.propTypes={groups:l.array.isRequired,onGroupsChange:l.func.isRequired};const q=W(o=>({selectedDish:null,setSelectedDish:r=>o({selectedDish:r})})),ie=async({menuId:o,id:r,name:a,description:t,picture:c,price:d,category:n,dishAttributes:s},i)=>{if(a===""||d===null||n===""||t==="")throw new Error("content can't be empty");try{const h=E.get("authToken");return(await P.put(`/v2/menu/${o}/dish/${r}`,{name:a,description:t,picture:c,price:d,category:n,dishAttributes:s},{signal:i,headers:{Authorization:`Bearer ${h}`}})).data}catch(h){if(A.isCancel(h)){console.debug("Update dish request cancelled");return}throw console.error(`Failed to update dish (ID: ${r}) in menu (ID: ${o}):`,h),h}},le=o=>{const r=G(),a=m.useRef(null),{mutateAsync:t,isError:c,isPending:d}=Q({mutationFn:async n=>{a.current&&a.current.abort();const s=new AbortController;return a.current=s,await ie({menuId:o,...n},s.signal),a.current===s&&(a.current=null),n.category},onMutate:async n=>{const{category:s,id:i}=n;await r.cancelQueries(["categoryDishes",s]);const h=r.getQueryData(["categoryDishes",s]);return r.setQueryData(["categoryDishes",s],{categoryName:s,dishes:h.dishes.map(u=>u.id===i?t:u)}),{previousDishes:h,category:s}},onError:(n,s,i)=>{console.debug("error",s,i),i!=null&&i.previousDishes&&r.setQueryData(["categoryDishes",i.category],i.previousDishes),alert("更新錯誤，請確保所有欄位都不為空"),console.error("Update dish error:",n)},onSettled:n=>{r.invalidateQueries(["categoryDishes",n])}});return{updateDish:t,isError:c,isPending:d}};function L({onClose:o,categoryNames:r,menuId:a}){const t=q(N=>N.selectedDish),[c,d]=m.useState(t.name),[n,s]=m.useState(t.description),[i,h]=m.useState(t.price),[u,f]=m.useState(t.category),[b,y]=m.useState(t.dishAttributes),{updateDish:j,isPending:C}=le(a),S=async()=>{const R={id:t.id,name:c,description:n,picture:"https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:i,category:u,dishAttributes:b};try{await j(R),o()}catch(g){console.error("更新失敗：",g)}},k=()=>{o()},x=()=>{console.log("Image upload")},D=N=>{y(N)};return e.jsxs("div",{children:[e.jsx(V,{dishName:c,onBack:k,onSave:S,isPending:C}),e.jsx(U,{defaultName:c,defaultDescription:n,defaultPrice:i,defaultCategory:u,categoryNames:r,onImageUpload:x,onNameChange:d,onDescriptionChange:s,onPriceChange:h,onCategoryChange:f}),e.jsx(K,{groups:b,onGroupsChange:D})]})}L.propTypes={onClose:l.func.isRequired,categoryNames:l.arrayOf(l.string),menuId:l.string.isRequired};const ce=async(o,r)=>{const a=E.get("authToken");try{return(await P.get(`/v2/menu/${o}/dish/create`,{signal:r,headers:{Authorization:`Bearer ${a}`}})).data}catch(t){if(A.isCancel(t)){console.debug("Get new dish ID request cancelled");return}throw console.error(`Failed to get new dish ID for menu (ID: ${o}):`,t),t}},ue=o=>{const r=G(),a=m.useRef(null),t="",{mutateAsync:c,isError:d,isPending:n}=Q({mutationFn:async()=>{a.current&&a.current.abort();const s=new AbortController;a.current=s;const i=await ce(o,s.signal);return a.current===s&&(a.current=null),i},onMutate:async()=>{await r.cancelQueries(["categoryDishes",t]);const s=r==null?void 0:r.getQueryData(["categoryDishes",t]),i={id:`temp-${Date.now()}`,name:"",description:"",picture:"",price:null,category:t,salesVolume:0,dishAttributes:[]};return r.setQueryData(["categoryDishes",t],{categoryName:"",dishes:s?[s.dishes,i]:[i]}),{previousDishes:s}},onError:(s,i,h)=>{h!=null&&h.previousDishes?r.setQueryData(["categoryDishes",t],h.previousDishes):r.setQueryData(["categoryDishes",t],[]),alert("創建失敗，請重整頁面再試一次"),console.error("Create new dish error:",s)},onSettled:()=>{console.debug("onSettled"),r.invalidateQueries(["menuCategoryList",o]),r.invalidateQueries(["categoryDishes"],t)}});return{createDish:c,isError:d,isPending:n}},de=m.lazy(()=>T(()=>import("./MenuNavbar-CDZKGbnO.js"),__vite__mapDeps([0,1,2,3]))),pe=m.lazy(()=>T(()=>import("./MenuSection-MQIUOFdK.js"),__vite__mapDeps([4,1,2,5]))),he=()=>{const o=O(p=>p.toggleSidebar),r=O(p=>p.title),{userInfo:a,merchantData:t,menuCategoryList:c}=ae(),d=a==null?void 0:a.id,n=a==null?void 0:a.storeId,s=t==null?void 0:t.menuId,{categoryData:i}=re(c,t==null?void 0:t.menuId,a!==void 0),h=X(),u=m.useRef([]),[f,b]=m.useState(!1),y=oe(p=>p.setNavbarItems),{createDish:j,isPending:C}=ue(s),S=p=>{var v;(v=u.current[p])==null||v.scrollIntoView({behavior:"smooth",inline:"start"})},k=q(p=>p.selectedDish),x=q(p=>p.setSelectedDish);if(m.useEffect(()=>{c!=null&&c.length&&y(c==null?void 0:c.map(p=>p.categoryName))},[c,y]),d&&!t)return e.jsx(J,{});const D=async()=>{await j(s)},N=e.jsx("button",{onClick:D,className:"bg-orange-500 text-white rounded-lg p-2 flex  shadow-md content-center w-full h-full",children:C?e.jsx(w,{icon:te,spinPulse:!0,style:{color:"#ffffff"},size:"xs"}):e.jsx(w,{icon:M})}),R=e.jsx("button",{onClick:()=>{h(`/menu/${n}`)},className:" bg-slate-400 text-white rounded-lg px-3 py-1 font-sm shadow-md",children:"預覽"}),g=c.map(p=>p.categoryName);return k?e.jsx(L,{onClose:()=>x(null),categoryNames:g,menuId:s}):e.jsxs("div",{className:"flex flex-col h-screen",children:[e.jsx($,{title:r,onLeftClick:o,rightComponents:[N,R]}),e.jsx("div",{className:"sticky mt-[54px] z-20 shadow-sm",children:e.jsx(m.Suspense,{fallback:e.jsx(se,{isNavbarFixed:!1}),children:e.jsx(de,{onNavClick:S,isNavbarFixed:f})})}),e.jsx("div",{className:"overflow-auto h-[dvh-34px]  ",children:e.jsx(m.Suspense,{fallback:e.jsx(ne,{}),children:e.jsx(pe,{menuId:s,sectionRefs:u,categoryData:i})})})]})},we=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));export{we as M,q as u};

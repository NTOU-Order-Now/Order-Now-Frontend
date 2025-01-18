const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MenuNavbar-Dks2eBGY.js","assets/index-BRPwgKXP.js","assets/index-CEqBSek3.css","assets/merchantMenuNav-jSrsAeyY.js","assets/MenuSection-BZJiojLc.js","assets/useMutation-DAKMrP2u.js","assets/skeleton-DZmJMt6-.js"])))=>i.map(i=>d[i]);
import{P as i,j as e,r as m,g as X,a as O,A as P,b as G,u as A,_ as T,c as J,d as Y}from"./index-BRPwgKXP.js";import{F as v,m as Z,d as _,n as ee,o as F,p as se,q as te,r as $}from"./index-CRygpoRb.js";import{u as E}from"./sidebarStore-DWX8Wp68.js";import{H as M}from"./Header-CGBdcrwe.js";import ne from"./NavbarSkeleton-MfEq1YYt.js";import re from"./MenuSectionSkeleton-Cjec33c6.js";import{u as ae}from"./useCategoryQueries-2fr52h4a.js";import{u as oe}from"./merchantMenuNav-jSrsAeyY.js";import{f as ie}from"./faEllipsis-CxEkbWIP.js";import{u as le}from"./useImageUploadMutation-fjaH3cbv.js";import{u as U}from"./useMutation-DAKMrP2u.js";const Q=({dishName:r,onSave:a,onBack:o,isPending:s})=>{const c=e.jsx("button",{onClick:a,className:"bg-orange-400 text-white px-4 py-1 rounded-lg font-bold hover:bg-orange-600",children:s?e.jsx(v,{icon:ie.faEllipsis,beatFade:!0,size:"lg",className:"mr-2"}):"保存"});return e.jsx(M,{LeftIcon:e.jsx(v,{icon:Z}),title:r,onLeftClick:o,rightComponents:[c]})};Q.propTypes={dishName:i.string.isRequired,onSave:i.func,onBack:i.func,isPending:i.bool};const V=({defaultName:r,defaultDescription:a,defaultPrice:o,defaultCategory:s,defaultImage:c,categoryNames:u=[],onNameChange:t,onDescriptionChange:n,onPriceChange:l,onCategoryChange:p,onImageChange:h})=>{const{uploadImage:y,isPending:b,isError:C}=le(),D=async x=>{const N=x.target.files[0];if(N)try{h({url:null}),console.debug("file:",N);const w=await y(N);h({url:w})}catch(w){console.error("upload Failed:",w),h({url:null})}};return e.jsxs("div",{className:"mt-10 p-6 bg-white",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"名稱："}),e.jsx("input",{type:"text",defaultValue:r,placeholder:"請輸入名稱",className:"w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:x=>t(x.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"商品描述："}),e.jsx("textarea",{defaultValue:a,placeholder:"請輸入商品描述",className:"w-full h-24 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:x=>n(x.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"圖片："}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"flex-1 relative",children:e.jsx("input",{type:"text",value:c||"",placeholder:"請選擇圖片",readOnly:!0,className:"w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none"})}),e.jsx("label",{htmlFor:"dish-image-upload",className:`
                            flex-shrink-0 px-6 py-2 rounded-md
                            ${b?"bg-gray-400 cursor-not-allowed":"bg-orange-400 hover:bg-orange-600 cursor-pointer"}
                            text-white transition-colors duration-200
                        `,children:b?e.jsxs(e.Fragment,{children:[e.jsx(v,{icon:_,className:"mr-2 animate-spin"}),"上傳中"]}):e.jsxs(e.Fragment,{children:[e.jsx(v,{icon:ee,className:"mr-2"}),"上傳圖片"]})}),e.jsx("input",{id:"dish-image-upload",type:"file",className:"hidden",onChange:D,accept:"image/*",disabled:b})]}),c&&e.jsx("div",{className:"mt-2",children:e.jsx("img",{src:c,alt:"商品圖片",className:"w-32 h-32 object-cover rounded-lg shadow-md"})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"價格："}),e.jsx("input",{type:"number",defaultValue:o,placeholder:"請輸入價格",className:"w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:x=>l(Number(x.target.value))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",children:"類別："}),e.jsx("input",{type:"text",defaultValue:s,placeholder:"請輸入類別",list:"category-options",className:"w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",onChange:x=>p(x.target.value)}),e.jsx("datalist",{id:"category-options",children:u.map((x,N)=>e.jsx("option",{value:x},N))})]})]})};V.propTypes={defaultName:i.string,defaultDescription:i.string,defaultPrice:i.oneOfType([i.string,i.number]),defaultImage:i.string,defaultCategory:i.string,onImageUpload:i.func,categoryNames:i.arrayOf(i.string),onNameChange:i.func.isRequired,onDescriptionChange:i.func.isRequired,onPriceChange:i.func.isRequired,onCategoryChange:i.func.isRequired,onImageChange:i.func.isRequired};const z=({option:r,onDelete:a,onUpdate:o})=>{const[s,c]=m.useState(!1),[u,t]=m.useState(!1),n=m.useRef(null);m.useEffect(()=>{n.current&&(s||u)&&n.current.focus()},[s,u]);const l=h=>{const y=h.target.value;h.type==="keydown"&&h.key!=="Enter"||(c(!1),o({name:y}))},p=h=>{const y=h.target.value;h.type==="keydown"&&h.key!=="Enter"||(t(!1),o({extraCost:parseFloat(y)||0}))};return e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[s?e.jsx("input",{ref:n,type:"text",defaultValue:r.name,onBlur:l,onKeyDown:l,className:"border rounded px-2 py-1 text-lg focus:ring-orange-400"}):e.jsx("span",{onClick:()=>c(!0),className:"cursor-pointer hover:underline text-xl",children:r.name}),u?e.jsx("input",{ref:n,type:"number",defaultValue:r.extraCost,onBlur:p,onKeyDown:p,className:"border rounded px-2 py-1 text-sm focus:ring-orange-400"}):e.jsxs("span",{onClick:()=>t(!0),className:"px-3 border rounded-xl text-black border-black cursor-pointer hover:underline",children:["+ ",r.extraCost,"元"]})]}),e.jsx("button",{className:"text-red-400 hover:text-red-700",onClick:a,children:e.jsx(v,{icon:F})})]})};z.propTypes={option:i.shape({name:i.string.isRequired,extraCost:i.number.isRequired}).isRequired,onDelete:i.func.isRequired,onUpdate:i.func.isRequired};function B({options:r,selectedOption:a,onChange:o}){const s=Object.keys(r),c=s.findIndex(t=>t===a),u=100/s.length;return e.jsx("div",{className:"relative  h-full  w-full",children:e.jsxs("div",{className:"relative border-gray-200 border-2 h-full flex overflow-hidden rounded-xl",children:[e.jsx("div",{className:"absolute h-full bg-orange-500 transition-transform duration-300 ease-in-out rounded-xl",style:{width:`${u}%`,transform:`translateX(${c*100}%)`}}),s.map(t=>{const n=t===a;return e.jsx("button",{onClick:()=>o(t),className:`
                                relative flex-1 text-center text-sm font-bold 
                                transition-colors duration-300 ease-in-out z-10
                                ${n?"text-white":"text-black"}
                            `,children:t},t)})]})})}B.propTypes={options:i.object.isRequired,selectedOption:i.string.isRequired,onChange:i.func.isRequired};const L=({group:r,groupIndex:a,onUpdateGroup:o,onDeleteGroup:s})=>{const[c,u]=m.useState(!1),[t,n]=m.useState(r.name),[l,p]=m.useState(r.isRequired),[h,y]=m.useState(r.type),[b,C]=m.useState(r.attributeOptions||[]),D=()=>{u(!1),j()},x=()=>{const d={name:"新選項",extraCost:0,isChosen:!1},f=[...b,d];C(f),j({attributeOptions:f})},N=d=>{const f=b.filter((g,S)=>S!==d);C(f),j({attributeOptions:f})},w=(d,f)=>{const g=b.map((S,W)=>W===d?{...S,...f}:S);C(g),j({attributeOptions:g})},j=d=>{const f={...r,name:t,isRequired:l,type:h,attributeOptions:b,...d};o(f)},k={單選:()=>{y("single"),j({type:"single"})},複選:()=>{y("multiple"),j({type:"multiple"})}},R=h==="single"?"單選":"複選",I=()=>{const d=!l;p(d),j({isRequired:d})};return e.jsxs("div",{className:"p-4 bg-white border rounded-lg shadow-md mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c?e.jsx("input",{type:"text",value:t,onChange:d=>n(d.target.value),onKeyDown:d=>{d.key==="Enter"&&D()},className:"border rounded px-2 py-1 text-lg font-bold focus:ring-orange-500 focus:outline-none"}):e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("h3",{className:"font-bold text-xl",children:t}),e.jsx("span",{className:`px-2 py-1 rounded-lg text-white text-sm cursor-pointer ${l?"bg-red-500":"bg-gray-500"}`,onClick:I,children:"必選"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"text-orange-500 hover:text-orange-700 text-xl",onClick:()=>{c?D():u(!0)},children:e.jsx(v,{icon:c?se:te})}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-xl",onClick:s,children:e.jsx(v,{icon:F})})]})]}),b.map((d,f)=>e.jsx(z,{option:d,onDelete:()=>N(f),onUpdate:g=>w(f,g)},f)),e.jsx("button",{className:"text-orange-500 mt-2 text-lg",onClick:x,children:"新增選項..."}),e.jsx("div",{className:"flex justify-end space-x-4 mt-4",children:e.jsx("div",{className:"flex w-[120px] h-10 overflow-hidden",children:e.jsx(B,{options:k,selectedOption:R,onChange:d=>{k[d]()}})})})]})};L.propTypes={group:i.object.isRequired,groupIndex:i.number.isRequired,onUpdateGroup:i.func.isRequired,onDeleteGroup:i.func.isRequired};const K=({groups:r,onGroupsChange:a})=>{const o=u=>{const t=r.filter((n,l)=>l!==u);a(t)},s=(u,t)=>{const n=r.map((l,p)=>p===u?t:l);a(n)},c=()=>{const u={name:"新選項標題",description:"",type:"single",isRequired:!1,attributeOptions:[]};a([...r,u])};return e.jsxs("div",{className:"p-4 bg-white mt-4",children:[r.map((u,t)=>e.jsx(L,{groupIndex:t,group:u,onUpdateGroup:n=>s(t,n),onDeleteGroup:()=>o(t)},t)),e.jsx("div",{className:"flex justify-center mt-6 z-50",children:e.jsxs("button",{className:"text-orange-500 hover:text-orange-700 flex items-center",onClick:c,children:[e.jsx(v,{icon:$,size:"lg",className:"mr-2"}),"新增客製化選項"]})})]})};K.propTypes={groups:i.array.isRequired,onGroupsChange:i.func.isRequired};const q=X(r=>({selectedDish:null,setSelectedDish:a=>r({selectedDish:a})})),ce=async({menuId:r,id:a,name:o,description:s,picture:c,price:u,category:t,dishAttributes:n},l)=>{if(o===""||u===null||t===""||s==="")throw new Error("content can't be empty");try{const p=O.get("authToken");return(await P.put(`/v2/menu/${r}/dish/${a}`,{name:o,description:s,picture:c,price:u,category:t,dishAttributes:n},{signal:l,headers:{Authorization:`Bearer ${p}`}})).data}catch(p){if(G.isCancel(p)){console.debug("Update dish request cancelled");return}throw console.error(`Failed to update dish (ID: ${a}) in menu (ID: ${r}):`,p),p}},de=r=>{const a=A(),o=m.useRef(null),{mutateAsync:s,isError:c,isPending:u}=U({mutationFn:async t=>{o.current&&o.current.abort();const n=new AbortController;return o.current=n,await ce({menuId:r,...t},n.signal),o.current===n&&(o.current=null),t.category},onMutate:async t=>{const{category:n,id:l}=t;await a.cancelQueries(["categoryDishes",n]);const p=a.getQueryData(["categoryDishes",n]);return a.setQueryData(["categoryDishes",n],{categoryName:n,dishes:p.dishes.map(h=>h.id===l?s:h)}),{previousDishes:p,category:n}},onError:(t,n,l)=>{console.debug("error",n,l),l!=null&&l.previousDishes&&a.setQueryData(["categoryDishes",l.category],l.previousDishes),alert("更新錯誤，請確保所有欄位都不為空"),console.error("Update dish error:",t)},onSettled:t=>{a.invalidateQueries(["categoryDishes",t])}});return{updateDish:s,isError:c,isPending:u}};function H({onClose:r,categoryNames:a,menuId:o}){const s=q(d=>d.selectedDish),[c,u]=m.useState(s.name),[t,n]=m.useState(s.description),[l,p]=m.useState(s.price),[h,y]=m.useState(s.category),[b,C]=m.useState(s.dishAttributes),[D,x]=m.useState(s.picture),N=({url:d})=>{d&&x(d)},{updateDish:w,isPending:j}=de(o),k=async()=>{const d=D,f={id:s.id,name:c,description:t,picture:d,price:l,category:h,dishAttributes:b};try{await w(f),r()}catch(g){console.error("更新失敗：",g)}},R=()=>{r()},I=d=>{C(d)};return e.jsxs("div",{children:[e.jsx(Q,{dishName:c,onBack:R,onSave:k,isPending:j}),e.jsx(V,{defaultName:c,defaultDescription:t,defaultPrice:l,defaultImage:D,defaultCategory:h,categoryNames:a,onNameChange:u,onDescriptionChange:n,onPriceChange:p,onCategoryChange:y,onImageChange:N}),e.jsx(K,{groups:b,onGroupsChange:I})]})}H.propTypes={onClose:i.func.isRequired,categoryNames:i.arrayOf(i.string),menuId:i.string.isRequired};const ue=async(r,a)=>{const o=O.get("authToken");try{return(await P.get(`/v2/menu/${r}/dish/create`,{signal:a,headers:{Authorization:`Bearer ${o}`}})).data}catch(s){if(G.isCancel(s)){console.debug("Get new dish ID request cancelled");return}throw console.error(`Failed to get new dish ID for menu (ID: ${r}):`,s),s}},pe=r=>{const a=A(),o=m.useRef(null),s="",{mutateAsync:c,isError:u,isPending:t}=U({mutationFn:async()=>{o.current&&o.current.abort();const n=new AbortController;o.current=n;const l=await ue(r,n.signal);return o.current===n&&(o.current=null),l},onMutate:async()=>{await a.cancelQueries(["categoryDishes",s]);const n=a==null?void 0:a.getQueryData(["categoryDishes",s]),l={id:`temp-${Date.now()}`,name:"",description:"",picture:"",price:null,category:s,salesVolume:0,dishAttributes:[]};return a.setQueryData(["categoryDishes",s],{categoryName:"",dishes:n?[n.dishes,l]:[l]}),{previousDishes:n}},onError:(n,l,p)=>{p!=null&&p.previousDishes?a.setQueryData(["categoryDishes",s],p.previousDishes):a.setQueryData(["categoryDishes",s],[]),alert("創建失敗，請重整頁面再試一次"),console.error("Create new dish error:",n)},onSettled:()=>{a.invalidateQueries(["menuCategoryList",r]),a.invalidateQueries(["categoryDishes"],s)}});return{createDish:c,isError:u,isPending:t}},me=m.lazy(()=>T(()=>import("./MenuNavbar-Dks2eBGY.js"),__vite__mapDeps([0,1,2,3]))),he=m.lazy(()=>T(()=>import("./MenuSection-BZJiojLc.js").then(r=>r.M),__vite__mapDeps([4,1,2,5,6]))),ge=()=>{var d,f;const r=E(g=>g.toggleSidebar),a=E(g=>g.title),{userInfo:o,merchantData:s,menuCategoryList:c}=J();o==null||o.id;const u=o==null?void 0:o.storeId,t=(d=s==null?void 0:s[0])==null?void 0:d.menuId,{categoryData:n}=ae(c,(f=s==null?void 0:s[0])==null?void 0:f.menuId,o!==void 0),l=Y(),p=m.useRef([]),[h,y]=m.useState(!1),b=oe(g=>g.setNavbarItems),{createDish:C,isPending:D}=pe(t),x=g=>{var S;(S=p.current[g])==null||S.scrollIntoView({behavior:"smooth",inline:"start"})},N=q(g=>g.selectedDish),w=q(g=>g.setSelectedDish);m.useEffect(()=>{b(c==null?void 0:c.map(g=>g.categoryName))},[c,b]);const j=async()=>{await C(t)},k=e.jsx("button",{onClick:j,className:"bg-orange-500 text-white rounded-lg p-2 flex  shadow-md content-center w-full h-full",children:D?e.jsx(v,{icon:_,spinPulse:!0,style:{color:"#ffffff"},size:"xs"}):e.jsx(v,{icon:$})}),R=e.jsx("button",{onClick:()=>{l(`/menu/${u}`)},className:" bg-slate-400 text-white rounded-lg px-3 py-1 font-sm shadow-md",children:"預覽"}),I=c.map(g=>g.categoryName);return N?e.jsx(H,{onClose:()=>{w(null)},categoryNames:I,menuId:t}):e.jsxs("div",{className:"flex flex-col h-screen",children:[e.jsx(M,{title:a,onLeftClick:r,rightComponents:[k,R]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"sticky top-[54px] mt-[54px] z-20 shadow-sm",children:e.jsx(m.Suspense,{fallback:e.jsx(ne,{isNavbarFixed:!1}),children:e.jsx(me,{onNavClick:x,isNavbarFixed:h})})}),e.jsx("div",{className:"overflow-auto h-[dvh-34px]  ",children:e.jsx(m.Suspense,{fallback:e.jsx(re,{}),children:e.jsx(he,{menuId:t,sectionRefs:p,categoryData:n})})})]})]})},ke=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));export{ke as M,q as u};

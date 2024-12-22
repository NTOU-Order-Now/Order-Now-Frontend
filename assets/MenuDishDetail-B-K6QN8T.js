const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OptionCardSkeleton-B4XtsTlW.js","assets/index-NGzkvcc4.js","assets/index-Djd05nlW.css","assets/CartRemark-r91hryxr.js","assets/OptionCard-M1Z6ZNM7.js","assets/index-Basaqh1b.js","assets/blur-Dwm1PFOt.js","assets/blur-DOfe2hmq.css","assets/CartOption-VpIfotI2.js"])))=>i.map(i=>d[i]);
import{e as k,r as l,_ as m,h as P,d as V,j as r,P as p}from"./index-NGzkvcc4.js";import{F as q,K as z}from"./index-Basaqh1b.js";import{b as I}from"./blur-Dwm1PFOt.js";const D=k(c=>({dishes:{},allDishAttributes:{},setAllDishAttributes:(e,s)=>c(t=>({allDishAttributes:{...t.allDishAttributes,[e]:s}})),setDishDetail:(e,s)=>c(t=>({dishes:{...t.dishes,[e]:{...t.dishes[e],...s}}})),setQuantity:(e,s)=>c(t=>t.dishes[e]?{dishes:{...t.dishes,[e]:{...t.dishes[e],quantity:s}}}:t),setNote:(e,s)=>c(t=>t.dishes[e]?{dishes:{...t.dishes,[e]:{...t.dishes[e],note:s}}}:t),addChosenAttribute:(e,s)=>c(t=>{const i=t.dishes[e]||{},n=i.chosenAttributes||[];return{dishes:{...t.dishes,[e]:{...i,chosenAttributes:[...n,s]}}}}),removeChosenAttributeOption:(e,s,t)=>c(i=>{if(!i.dishes[e])return i;const n=i.dishes[e].chosenAttributes||[];return{dishes:{...i.dishes,[e]:{...i.dishes[e],chosenAttributes:n.filter(d=>!(d.attributeName===s&&d.chosenOption===t))}}}}),sortChosenAttributes:e=>c(s=>{if(!s.dishes[e])return s;const t=s.dishes[e].chosenAttributes||[];return{dishes:{...s.dishes,[e]:{...s.dishes[e],chosenAttributes:t.sort((i,n)=>i.attributeName!==n.attributeName?i.attributeName.localeCompare(n.attributeName):i.chosenOption!==n.chosenOption?i.chosenOption.localeCompare(n.chosenOption):i.extraCost-n.extraCost)}}}})})),L=l.lazy(()=>m(()=>import("./OptionCardSkeleton-B4XtsTlW.js"),__vite__mapDeps([0,1,2]))),M=l.lazy(()=>m(()=>import("./CartRemark-r91hryxr.js"),__vite__mapDeps([3,1,2]))),$=l.lazy(()=>m(()=>import("./OptionCard-M1Z6ZNM7.js"),__vite__mapDeps([4,1,2,5,6,7]))),F=l.lazy(()=>m(()=>import("./CartOption-VpIfotI2.js"),__vite__mapDeps([8,1,2]))),N=({dishData:c,onClose:e})=>{const{id:s,name:t,price:i,picture:n,description:d,dishAttributes:u}=c,{merchantId:b}=P(),[C,x]=l.useState(!1),[w,g]=l.useState(!1),[E,O]=l.useState(!0),y=D(o=>o.setDishDetail),A=D(o=>o.setAllDishAttributes),v=V(o=>o.user),h=l.useRef([]),[_,R]=l.useState("");l.useEffect(()=>(A(s,u),y(s,{storeId:b,dishId:s,dishName:t,price:i,quantity:1,note:_,chosenAttributes:[]}),x(!0),document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[y,s,b,u,A,t,i,_]);const j=()=>{g(!0),setTimeout(()=>{x(!1),document.body.style.overflow="",e&&e()},500)},S=o=>{const a=u.findIndex(f=>f.name===o);a!==-1&&h.current[a]&&h.current[a].scrollIntoView({behavior:"smooth",block:"start"})},T=o=>{const a=o+1;h.current[a]&&h.current[a].scrollIntoView({behavior:"smooth",block:"start"})};return r.jsx("div",{className:"font-notoTC fixed z-10 top-0 left-0 right-0",children:r.jsxs("div",{className:`bg-white shadow-md overflow-hidden h-dvh flex flex-col  transition-transform duration-500 ${w?"translate-y-full none":"translate-y-0"}
                                                                                                                            ${C?"translate-y-0":"translate-y-full none"}`,children:[r.jsxs("div",{className:"flex-1 overflow-y-auto",children:[r.jsxs("div",{className:"relative h-48 overflow-hidden",children:[r.jsx(I.LazyLoadImage,{className:"w-full h-full object-cover",src:n,alt:t,effect:"blur",wrapperClassName:"absolute inset-0"}),r.jsx("button",{onClick:j,className:"absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md",children:r.jsx(q,{icon:z,className:"text-sm"})})]}),r.jsxs("div",{className:"p-4",children:[r.jsx("h2",{className:"text-xl font-bold",children:t}),r.jsxs("p",{className:"text-lg text-gray-700",children:["$",i]}),r.jsx("p",{className:"text-sm text-gray-500",children:d}),u.map((o,a)=>r.jsx("div",{ref:f=>h.current[a]=f,children:r.jsx(l.Suspense,{fallback:r.jsx(L,{}),children:r.jsx($,{title:o.name,description:o.description,options:o.attributeOptions,type:o.type,dishId:s,isRequired:o.isRequired,isShowError:E,setIsShowError:O,onSelectNext:()=>T(a)})})},a)),r.jsx("div",{className:"pb-12",children:r.jsx(M,{onRemarkChange:R})})]}),r.jsx("div",{className:"py-5"})]}),v!==void 0&&v.role==="CUSTOMER"&&r.jsx(F,{dishId:s,dishAttributes:u,onRequiredMissing:S,onClose:j})]})})};N.propTypes={dishData:p.object.isRequired,onClose:p.func,dishId:p.string};const X=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{X as M,D as u};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NavbarSkeleton-BMt1TWtY.js","assets/index-Y_Wg8SMc.js","assets/index-BYhJshBL.css","assets/MenuHeaderSkeleton-3YrQtiLt.js","assets/ViewCartButtonSkeleton-CTn26khD.js","assets/MenuSectionSkeleton-BiDLU2Gk.js","assets/MenuHeader-B3MPyIBo.js","assets/index-SQZRpR2P.js","assets/blur-Bq5UJe5_.js","assets/blur-DOfe2hmq.css","assets/MenuNavbar-DJDjaDSX.js","assets/merchantMenuNav-Cb7S-pbS.js","assets/MenuSection-Baj__vhq.js","assets/ViewCartButton-4w11LR0e.js","assets/useSystemContext-BGpv41gF.js"])))=>i.map(i=>d[i]);
import{r as e,_ as a,h as y,i as j,j as s,M,g as D}from"./index-Y_Wg8SMc.js";import{u as L}from"./useCategoryQueries-lutAm-2e.js";import{u as b}from"./merchantStore-DFh1AahL.js";import{u as P}from"./merchantMenuNav-Cb7S-pbS.js";import"./useQueries-CxUs_7Sg.js";const g=e.lazy(()=>a(()=>import("./NavbarSkeleton-BMt1TWtY.js"),__vite__mapDeps([0,1,2]))),N=e.lazy(()=>a(()=>import("./MenuHeaderSkeleton-3YrQtiLt.js"),__vite__mapDeps([3,1,2]))),R=e.lazy(()=>a(()=>import("./ViewCartButtonSkeleton-CTn26khD.js"),__vite__mapDeps([4,1,2]))),V=e.lazy(()=>a(()=>import("./MenuSectionSkeleton-BiDLU2Gk.js"),__vite__mapDeps([5,1,2]))),k=e.lazy(()=>a(()=>import("./MenuHeader-B3MPyIBo.js"),__vite__mapDeps([6,1,2,7,8,9]))),w=e.lazy(()=>a(()=>import("./MenuNavbar-DJDjaDSX.js"),__vite__mapDeps([10,1,2,11]))),T=e.lazy(()=>a(()=>import("./MenuSection-Baj__vhq.js"),__vite__mapDeps([12,1,2]))),z=e.lazy(()=>a(()=>import("./ViewCartButton-4w11LR0e.js"),__vite__mapDeps([13,1,2,7,14])));function H(){const{merchantId:r}=y(),l=e.useRef([]),[x,E]=e.useState(!1),i=P(t=>t.setNavbarItems),S=t=>{var o;(o=l.current[t])==null||o.scrollIntoView({behavior:"smooth",inline:"start"})};e.useEffect(()=>{const t=()=>{const o=window.scrollY;E(o>260)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]);const u=b(t=>t.getMerchantById),[_,d]=e.useState(null),[m,f]=e.useState(null);e.useEffect(()=>{const t=u(r);t?(f(t),d(t==null?void 0:t.menuId)):(async()=>{try{return await D.getMerchantsByIdList([r])}catch(n){console.error("Failed to fetch merchant data:",n)}})().then(n=>{var v;f(n.data[0]),d((v=n.data[0])==null?void 0:v.menuId)})},[r,u]);const{menuCategoryList:c}=j(_),{categoryData:p}=L(c,_),[h,I]=e.useState(null);return e.useEffect(()=>{i(c.map(t=>t.categoryName))},[c,i]),r&&!m?s.jsx(M,{}):s.jsxs("div",{className:"flex flex-col ",children:[s.jsx(e.Suspense,{fallback:s.jsx(N,{}),children:s.jsx(k,{merchantData:m})}),s.jsx(e.Suspense,{fallback:s.jsx(g,{isNavbarFixed:!1}),children:s.jsx(w,{onNavClick:S,isNavbarFixed:x})}),s.jsx(e.Suspense,{fallback:s.jsx(V,{}),children:s.jsx(T,{selectedDish:h,setSelectedDish:I,sectionRefs:l,categoryData:p})}),h==null&&s.jsx(e.Suspense,{fallback:s.jsx(R,{}),children:s.jsx(z,{})})]})}export{H as default};
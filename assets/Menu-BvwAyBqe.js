const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NavbarSkeleton-jBaijLSC.js","assets/index-YwLf8I32.js","assets/index-CEqBSek3.css","assets/MenuHeaderSkeleton-C_OkZpi9.js","assets/ViewCartButtonSkeleton-DOsqOeJ3.js","assets/MenuSectionSkeleton-Dke3olh1.js","assets/MenuHeader-BZqbD8L7.js","assets/index-CfLZK19C.js","assets/blur-7cZasfdP.js","assets/blur-DOfe2hmq.css","assets/MenuNavbar-D0ahtsZM.js","assets/merchantMenuNav-BGFxZAQr.js","assets/MenuSection-Dr11Bz-c.js","assets/ViewCartButton-Cusf6k79.js"])))=>i.map(i=>d[i]);
import{r as e,_ as n,i as f,k as p,p as S,j as s,M as j}from"./index-YwLf8I32.js";import{u as y}from"./useCategoryQueries-CVixOTA6.js";import{u as I}from"./merchantMenuNav-BGFxZAQr.js";const h=e.lazy(()=>n(()=>import("./NavbarSkeleton-jBaijLSC.js"),__vite__mapDeps([0,1,2]))),L=e.lazy(()=>n(()=>import("./MenuHeaderSkeleton-C_OkZpi9.js"),__vite__mapDeps([3,1,2]))),b=e.lazy(()=>n(()=>import("./ViewCartButtonSkeleton-DOsqOeJ3.js"),__vite__mapDeps([4,1,2]))),P=e.lazy(()=>n(()=>import("./MenuSectionSkeleton-Dke3olh1.js"),__vite__mapDeps([5,1,2]))),k=e.lazy(()=>n(()=>import("./MenuHeader-BZqbD8L7.js"),__vite__mapDeps([6,1,2,7,8,9]))),N=e.lazy(()=>n(()=>import("./MenuNavbar-D0ahtsZM.js"),__vite__mapDeps([10,1,2,11]))),R=e.lazy(()=>n(()=>import("./MenuSection-Dr11Bz-c.js"),__vite__mapDeps([12,1,2]))),V=e.lazy(()=>n(()=>import("./ViewCartButton-Cusf6k79.js"),__vite__mapDeps([13,1,2,7])));function M(){const{merchantId:u}=f(),i=e.useRef([]),[_,d]=e.useState(!1),l=I(o=>o.setNavbarItems),{storeData:t,isLoading:m,isError:w}=p([u]),{menuCategoryList:a}=S(t==null?void 0:t[0].menuId),{categoryData:v}=y(a,t==null?void 0:t[0].menuId),[c,x]=e.useState(null),E=o=>{var r;(r=i.current[o])==null||r.scrollIntoView({behavior:"smooth",inline:"start"})};return e.useEffect(()=>{const o=()=>{const r=window.scrollY;d(r>260)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),e.useEffect(()=>{l(a.map(o=>o.categoryName))},[a,l]),m&&!t?s.jsx(j,{}):s.jsxs("div",{className:"flex flex-col ",children:[s.jsx(e.Suspense,{fallback:s.jsx(L,{}),children:s.jsx(k,{merchantData:t==null?void 0:t[0]})}),s.jsx(e.Suspense,{fallback:s.jsx(h,{isNavbarFixed:!1}),children:s.jsx(N,{onNavClick:E,isNavbarFixed:_})}),s.jsx(e.Suspense,{fallback:s.jsx(P,{}),children:s.jsx(R,{selectedDish:c,setSelectedDish:x,sectionRefs:i,categoryData:v})}),c==null&&s.jsx(e.Suspense,{fallback:s.jsx(b,{}),children:s.jsx(V,{})})]})}export{M as default};
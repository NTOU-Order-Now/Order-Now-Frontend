const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NavbarSkeleton-DudmCrBB.js","assets/index-iUSX4OFq.js","assets/index-BO7FN990.css","assets/MenuHeaderSkeleton-CPHjR8B2.js","assets/ViewCartButtonSkeleton-D8-8KpSm.js","assets/MenuSectionSkeleton-DqLmwJKt.js","assets/MenuHeader-CLLATC96.js","assets/index-DE8yvV3K.js","assets/blur-DJo-Nj84.js","assets/blur-DOfe2hmq.css","assets/MenuNavbar-BxKpZsNw.js","assets/merchantMenuNav-DGOpln-A.js","assets/MenuSection-BRqEywy-.js","assets/ViewCartButton-bTrg11T-.js"])))=>i.map(i=>d[i]);
import{r as e,_ as n,i as f,k as p,p as S,j as s,M as j}from"./index-iUSX4OFq.js";import{u as y}from"./useCategoryQueries-BzNI2KA7.js";import{u as I}from"./merchantMenuNav-DGOpln-A.js";const h=e.lazy(()=>n(()=>import("./NavbarSkeleton-DudmCrBB.js"),__vite__mapDeps([0,1,2]))),L=e.lazy(()=>n(()=>import("./MenuHeaderSkeleton-CPHjR8B2.js"),__vite__mapDeps([3,1,2]))),b=e.lazy(()=>n(()=>import("./ViewCartButtonSkeleton-D8-8KpSm.js"),__vite__mapDeps([4,1,2]))),P=e.lazy(()=>n(()=>import("./MenuSectionSkeleton-DqLmwJKt.js"),__vite__mapDeps([5,1,2]))),k=e.lazy(()=>n(()=>import("./MenuHeader-CLLATC96.js"),__vite__mapDeps([6,1,2,7,8,9]))),N=e.lazy(()=>n(()=>import("./MenuNavbar-BxKpZsNw.js"),__vite__mapDeps([10,1,2,11]))),R=e.lazy(()=>n(()=>import("./MenuSection-BRqEywy-.js"),__vite__mapDeps([12,1,2]))),V=e.lazy(()=>n(()=>import("./ViewCartButton-bTrg11T-.js"),__vite__mapDeps([13,1,2,7])));function M(){const{merchantId:u}=f(),i=e.useRef([]),[_,d]=e.useState(!1),l=I(o=>o.setNavbarItems),{storeData:t,isLoading:m,isError:w}=p([u]),{menuCategoryList:a}=S(t==null?void 0:t[0].menuId),{categoryData:v}=y(a,t==null?void 0:t[0].menuId),[c,x]=e.useState(null),E=o=>{var r;(r=i.current[o])==null||r.scrollIntoView({behavior:"smooth",inline:"start"})};return e.useEffect(()=>{const o=()=>{const r=window.scrollY;d(r>260)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),e.useEffect(()=>{l(a.map(o=>o.categoryName))},[a,l]),m&&!t?s.jsx(j,{}):s.jsxs("div",{className:"flex flex-col ",children:[s.jsx(e.Suspense,{fallback:s.jsx(L,{}),children:s.jsx(k,{merchantData:t==null?void 0:t[0]})}),s.jsx(e.Suspense,{fallback:s.jsx(h,{isNavbarFixed:!1}),children:s.jsx(N,{onNavClick:E,isNavbarFixed:_})}),s.jsx(e.Suspense,{fallback:s.jsx(P,{}),children:s.jsx(R,{selectedDish:c,setSelectedDish:x,sectionRefs:i,categoryData:v})}),c==null&&s.jsx(e.Suspense,{fallback:s.jsx(b,{}),children:s.jsx(V,{})})]})}export{M as default};

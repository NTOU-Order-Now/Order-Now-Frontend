const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NavbarSkeleton-CCXTqHb2.js","assets/index-CGLjlMRI.js","assets/index-D-fMXEC-.css","assets/MenuHeaderSkeleton-0vPGzfcQ.js","assets/ViewCartButtonSkeleton-BlY5ViUU.js","assets/MenuSectionSkeleton-Jk78E7r4.js","assets/MenuHeader-tHXOJHQ8.js","assets/index-DdxdYMTC.js","assets/blur-Cy3ahvP8.js","assets/blur-DOfe2hmq.css","assets/MenuNavbar-ChrXdB7d.js","assets/merchantMenuNav-DLkkfRu_.js","assets/MenuSection-CQjwzDyJ.js","assets/ViewCartButton-DRDbOA_Y.js","assets/useSystemContext-B9O4VHUW.js"])))=>i.map(i=>d[i]);
import{r as e,_ as a,h as y,i as j,j as s,M,g as D}from"./index-CGLjlMRI.js";import{u as L}from"./useCategoryQueries-DuBIVxZG.js";import{u as b}from"./merchantStore-hSAdT5Zn.js";import{u as P}from"./merchantMenuNav-DLkkfRu_.js";const g=e.lazy(()=>a(()=>import("./NavbarSkeleton-CCXTqHb2.js"),__vite__mapDeps([0,1,2]))),N=e.lazy(()=>a(()=>import("./MenuHeaderSkeleton-0vPGzfcQ.js"),__vite__mapDeps([3,1,2]))),R=e.lazy(()=>a(()=>import("./ViewCartButtonSkeleton-BlY5ViUU.js"),__vite__mapDeps([4,1,2]))),V=e.lazy(()=>a(()=>import("./MenuSectionSkeleton-Jk78E7r4.js"),__vite__mapDeps([5,1,2]))),k=e.lazy(()=>a(()=>import("./MenuHeader-tHXOJHQ8.js"),__vite__mapDeps([6,1,2,7,8,9]))),w=e.lazy(()=>a(()=>import("./MenuNavbar-ChrXdB7d.js"),__vite__mapDeps([10,1,2,11]))),T=e.lazy(()=>a(()=>import("./MenuSection-CQjwzDyJ.js"),__vite__mapDeps([12,1,2]))),z=e.lazy(()=>a(()=>import("./ViewCartButton-DRDbOA_Y.js"),__vite__mapDeps([13,1,2,7,14])));function F(){const{merchantId:n}=y(),l=e.useRef([]),[x,E]=e.useState(!1),i=P(t=>t.setNavbarItems),S=t=>{var o;(o=l.current[t])==null||o.scrollIntoView({behavior:"smooth",inline:"start"})};e.useEffect(()=>{const t=()=>{const o=window.scrollY;E(o>260)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]);const u=b(t=>t.getMerchantById),[_,d]=e.useState(null),[m,f]=e.useState(null);e.useEffect(()=>{const t=u(n);t?(f(t),d(t==null?void 0:t.menuId)):(async()=>{try{return await D.getMerchantsByIdList([n])}catch(r){console.error("Failed to fetch merchant data:",r)}})().then(r=>{var v;f(r.data[0]),d((v=r.data[0])==null?void 0:v.menuId)})},[n,u]);const c=j(_),{categoryData:p}=L(c,_),[h,I]=e.useState(null);return e.useEffect(()=>{i(c.map(t=>t.categoryName))},[c,i]),n&&!m?s.jsx(M,{}):s.jsxs("div",{className:"flex flex-col ",children:[s.jsx(e.Suspense,{fallback:s.jsx(N,{}),children:s.jsx(k,{merchantData:m})}),s.jsx(e.Suspense,{fallback:s.jsx(g,{isNavbarFixed:!1}),children:s.jsx(w,{onNavClick:S,isNavbarFixed:x})}),s.jsx(e.Suspense,{fallback:s.jsx(V,{}),children:s.jsx(T,{selectedDish:h,setSelectedDish:I,sectionRefs:l,categoryData:p})}),h==null&&s.jsx(e.Suspense,{fallback:s.jsx(R,{}),children:s.jsx(z,{})})]})}export{F as default};

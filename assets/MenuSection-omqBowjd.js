const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CartItemCardSkeleton-eHJ7TIMS.js","assets/index-NGzkvcc4.js","assets/index-Djd05nlW.css","assets/MenuDishDetail-B-K6QN8T.js","assets/index-Basaqh1b.js","assets/blur-Dwm1PFOt.js","assets/blur-DOfe2hmq.css","assets/MenuItemCard-CekVvxXK.js","assets/useSystemContext-Bg3dPr5V.js"])))=>i.map(i=>d[i]);
import{r as i,_ as a,j as e,P as t}from"./index-NGzkvcc4.js";const p=i.lazy(()=>a(()=>import("./CartItemCardSkeleton-eHJ7TIMS.js"),__vite__mapDeps([0,1,2]))),_=i.lazy(()=>a(()=>import("./MenuDishDetail-B-K6QN8T.js").then(n=>n.M),__vite__mapDeps([3,1,2,4,5,6]))),x=i.lazy(()=>a(()=>import("./MenuItemCard-CekVvxXK.js"),__vite__mapDeps([7,1,2,8,5,6])));function f({sectionRefs:n,categoryData:d,selectedDish:o,setSelectedDish:l}){const m=s=>{l(s)};return e.jsxs("div",{className:"font-notoTC relative min-h-screen flex flex-col justify-center container mx-auto p-4 ",children:[d.map((s,c)=>e.jsx("div",{ref:r=>n.current[c]=r,className:"w-full mb-8",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-2xl font-notoTC my-2 font-bold",children:s.categoryName}),e.jsx("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:s.dishes.map((r,u)=>e.jsx(i.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(x,{food:r,onClick:m})},u))})]})},(s==null?void 0:s.categoryName)||`section-${c}`)),o&&e.jsx(_,{dishData:o,onClose:()=>l(null)})]})}f.propTypes={sectionRefs:t.object.isRequired,categoryData:t.array.isRequired,selectedDish:t.object,setSelectedDish:t.func.isRequired};export{f as default};

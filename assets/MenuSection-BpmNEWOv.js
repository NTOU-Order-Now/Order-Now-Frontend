const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CartItemCardSkeleton-CICFlvh2.js","assets/index-BVyBSOmJ.js","assets/index-AsxfWBjN.css","assets/MenuDishDetail-a-Fj9wSe.js","assets/index.es-BJrB9fUl.js","assets/index-CuE17EBt.js","assets/blur-DLlne5MJ.js","assets/blur-DOfe2hmq.css","assets/react-CxkCoJ2v.js","assets/MenuItemCard-RXN1UhWL.js"])))=>i.map(i=>d[i]);
import{r as i,_ as o,j as e,P as t}from"./index-BVyBSOmJ.js";const p=i.lazy(()=>o(()=>import("./CartItemCardSkeleton-CICFlvh2.js"),__vite__mapDeps([0,1,2]))),_=i.lazy(()=>o(()=>import("./MenuDishDetail-a-Fj9wSe.js").then(n=>n.M),__vite__mapDeps([3,1,2,4,5,6,7,8]))),x=i.lazy(()=>o(()=>import("./MenuItemCard-RXN1UhWL.js"),__vite__mapDeps([9,1,2,6,7])));function f({sectionRefs:n,categoryData:d,selectedDish:a,setSelectedDish:l}){const m=s=>{l(s)};return e.jsxs("div",{className:"font-notoTC -top-12 relative min-h-screen flex flex-col items-center justify-center container mx-auto p-4 ",children:[d.map((s,c)=>e.jsx("div",{ref:r=>n.current[c]=r,className:"w-full mb-8",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-2xl font-notoTC my-2 font-bold",children:s.categoryName}),e.jsx("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:s.dishes.map((r,u)=>e.jsx(i.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(x,{food:r,onClick:m})},u))})]})},(s==null?void 0:s.categoryName)||`section-${c}`)),a&&e.jsx(_,{dishData:a,onClose:()=>l(null)})]})}f.propTypes={sectionRefs:t.object.isRequired,categoryData:t.array.isRequired,selectedDish:t.object,setSelectedDish:t.func.isRequired};export{f as default};
import{r as l,j as s,P as c}from"./index-CzSfmOcl.js";import{u as d}from"./DishDetail-u4luNUC_.js";import"./index-CQUfDht9.js";import"./blur-Cr-a8CGW.js";const u=({dishId:n})=>{const[t,o]=l.useState(1),r=d(e=>e.setQuantity),a=()=>{const e=t+1;e<=25&&(o(e),r(n,e))},i=()=>{const e=t-1;e>=1&&(o(e),r(n,e))};return s.jsxs("div",{className:"font-notoTC flex flex-row items-center justify-center bg-orange-500 rounded-full px-2 py-1 shadow-md border border-orange-700 mr-4 ",children:[s.jsx("button",{className:"pb-1 bg-orange-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-3xl mb-1",onClick:i,disabled:t<=1,children:"-"}),s.jsx("span",{className:"pb-1 w-8 mx-2 text-center text-white font-bold",children:t}),s.jsx("button",{className:"bg-orange-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xl",onClick:a,children:"+"})]})};u.propTypes={dishId:c.string.isRequired};export{u as default};

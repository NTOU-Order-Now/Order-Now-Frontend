import{j as e,P as t}from"./index-CzSfmOcl.js";import{b as j}from"./blur-Cr-a8CGW.js";import{F as o,E as v,G as w,o as g,H as N}from"./index-CQUfDht9.js";import{u as y}from"./Menu-BvdmY8QE.js";import"./sidebarStore-DebjSK80.js";import"./Header-BoKHyjy0.js";import"./NavbarSkeleton-B0I9eLqg.js";import"./MenuSectionSkeleton-B-ZLpZw5.js";import"./useCategoryQueries-DOiJ7Ei2.js";import"./useQueries-CgXJHdrG.js";import"./merchantMenuNav-fNHZ_K1i.js";import"./useImageUploadMutation-Bqd5EAXX.js";import"./useMutation-CZ1Qi4ay.js";import"./useSystemContext-BanMn82W.js";const k=({categoryName:r,food:l,onMove:m,onDelete:d})=>{const{id:a,name:i,picture:p,price:n,description:x}=l,u=y(s=>s.setSelectedDish),f=async s=>{s.stopPropagation(),await d({dishId:a,categoryName:r})},c=async(s,b)=>{s.stopPropagation(),await m(r,a,b)},h=s=>{s.stopPropagation(),u(l)};return e.jsxs("div",{className:"w-full  h-[17rem] flex cursor-pointer relative rounded-lg  overflow-hidden bg-gray-50 shadow-lg ",onClick:s=>h(s),children:[e.jsxs("div",{className:"flex flex-col justify-center absolute mb-10 left-0 h-full p-2  bg-white",children:[e.jsx("button",{onClick:s=>c(s,"up"),className:"mb-16 py-2 cursor-pointer",children:e.jsx(o,{icon:v,size:"lg",className:"text-gray-600 hover:text-black"})}),e.jsx("button",{onClick:s=>c(s,"down"),className:"mt-16 py-2 cursor-pointer",children:e.jsx(o,{icon:w,size:"lg",className:"text-gray-600 hover:text-black"})})]}),e.jsx("div",{className:"w-40 flex-shrink-0 overflow-hidden aspect-auto ml-9 relative",children:e.jsx(j.LazyLoadImage,{src:p,alt:i,className:"object-cover w-full h-full",effect:"blur",wrapperClassName:"object-cover w-full h-full"})}),e.jsxs("div",{className:"flex-1 min-w-0 relative w-full p-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2 text-black truncate",children:i}),e.jsx("p",{className:"text-sm text-gray-600 mt-4 line-clamp-3 overflow-hidden break-words",children:x}),e.jsxs("div",{className:"absolute bottom-4  left-4 right-4 space-x-2 flex flex-row justify-between w-full",children:[e.jsxs("p",{className:"text-xl text-gray-800 relative items-start font-bold",children:["$",n||"0"]}),e.jsxs("div",{className:"pr-8",children:[e.jsx("button",{onClick:f,className:"text-red-500 hover:text-red-600 mr-4",children:e.jsx(o,{icon:g,size:"xl"})}),e.jsx("button",{className:"text-orange-500 hover:text-orange-600",children:e.jsx(o,{icon:N,size:"xl"})})]})]})]})]})};k.propTypes={categoryName:t.string.isRequired,food:t.oneOfType([t.object,t.func]),onMove:t.func.isRequired,onDelete:t.func.isRequired};export{k as default};

import{j as a,P as r}from"./index-YwLf8I32.js";const o=({isNavbarFixed:l})=>{const s=Array(5).fill(null);return a.jsx("nav",{className:`font-notoTC bg-white/30 backdrop-blur-sm p-3 flex transition-all w-full duration-300 ${l?"fixed top-0 left-0 w-full z-10 shadow-lg":"relative"}`,children:a.jsx("ul",{className:`pb-2 mt-2 flex w-full space-x-4 overflow-x-auto whitespace-nowrap scrollbar-transparent ${l?"":"relative -top-12"}`,children:s.map((t,e)=>a.jsx("li",{className:"animate-pulse",children:a.jsx("div",{className:`h-6 bg-gray-200/50 rounded ${e===0?"w-24 bg-gray-300/50":"w-16"}`})},e))})})};o.propTypes={isNavbarFixed:r.bool.isRequired};export{o as default};
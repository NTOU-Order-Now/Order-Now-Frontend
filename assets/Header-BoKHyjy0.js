import{P as s,j as e}from"./index-CzSfmOcl.js";import{F as c,w as d}from"./index-CQUfDht9.js";const f=({title:r,LeftIcon:n=e.jsx(c,{icon:d}),onLeftClick:i,rightComponents:t=[]})=>{const o=window.location.href;return e.jsxs("header",{className:"fixed z-30 top-0 left-0 w-full flex flex-row items-center justify-between bg-white  transition-shadow duration-300 ease-in-out p-3 font-notoTC shadow-md",children:[e.jsx("div",{className:"absolute left-4 text-xl cursor-pointer",onClick:i,children:e.jsx(e.Fragment,{children:n})}),e.jsx("h1",{className:"font-bold text-xl ml-12",children:e.jsx("a",{href:o,children:r})}),t.length>0&&e.jsx("div",{className:"flex items-center gap-4",children:t.map((l,a)=>e.jsx("div",{className:"flex items-center",children:l},a))})]})};f.propTypes={title:s.string.isRequired,LeftIcon:s.element,onLeftClick:s.func.isRequired,rightComponents:s.arrayOf(s.node)};export{f as H};

import{A as o,b as c,y as n}from"./index-BRPwgKXP.js";const u=async(r,s,t)=>{try{return(await o.get(`/v2/menu/${r}/dishes`,{params:{category:s},signal:t})).data.data}catch(e){if(c.isCancel(e)){console.debug("Get dishes request cancelled");return}throw console.error(`Failed to fetch dishes by category: ${s}`,e),e}},d=(r,s,t=!0)=>n({queries:r.map(e=>({queryKey:["categoryDishes",e.categoryName],queryFn:async({signal:a})=>{const i=await u(s,e.categoryName,a);return{categoryName:e.categoryName,dishes:i}},enabled:!!r&&!!s&&e.dishIds.length>0&&t,refetchOnWindowFocus:!1,staleTime:1/0})),combine:e=>({categoryData:e.map(a=>a.data).filter(Boolean),isQueriesSuccess:e.every(a=>a.isSuccess)})});export{d as u};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/signals.module.CIQeVecW.js","_astro/preact.module.urFXiQ-_.js","_astro/hooks.module.CZU-8z4O.js"])))=>i.map(i=>d[i]);
import{g as h,D as S,E as b}from"./preact.module.urFXiQ-_.js";const N="modulepreload",A=function(n){return"/"+n},p={},L=function(f,a,d){let m=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");m=Promise.allSettled(a.map(t=>{if(t=A(t),t in p)return;p[t]=!0;const o=t.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${l}`))return;const e=document.createElement("link");if(e.rel=o?"stylesheet":N,o||(e.as="script"),e.crossOrigin="",e.href=t,r&&e.setAttribute("nonce",r),document.head.appendChild(e),o)return new Promise((c,i)=>{e.addEventListener("load",c),e.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${t}`)))})}))}function g(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return m.then(s=>{for(const r of s||[])r.status==="rejected"&&g(r.reason);return f().catch(g)})},_=({value:n,name:f,hydrate:a=!0})=>n?h(a?"astro-slot":"astro-static-slot",{name:f,dangerouslySetInnerHTML:{__html:n}}):null;_.shouldComponentUpdate=()=>!1;var y=_;const u=new Map;var R=n=>async(f,a,{default:d,...m},{client:g})=>{if(!n.hasAttribute("ssr"))return;for(const[t,o]of Object.entries(m))a[t]=h(y,{value:o,name:t});if(n.dataset.preactSignals){const{signal:t}=await L(async()=>{const{signal:l}=await import("./signals.module.CIQeVecW.js");return{signal:l}},__vite__mapDeps([0,1,2]));let o=JSON.parse(n.dataset.preactSignals);for(const[l,e]of Object.entries(o))if(Array.isArray(e))e.forEach(([c,i])=>{const v=a[l][i];let E=v;if(typeof i!="string"&&(E=v[0],i=v[1]),!u.has(c)){const w=t(E);u.set(c,w)}a[l][i]=u.get(c)});else{if(!u.has(e)){const c=t(a[l]);u.set(e,c)}a[l]=u.get(e)}}(g!=="only"?b:S)(h(f,a,d!=null?h(y,{value:d}):d),n),n.addEventListener("astro:unmount",()=>S(null,n),{once:!0})};export{R as default};

(self.webpackChunkplain=self.webpackChunkplain||[]).push([[179],{6267:(e,t,n)=>{"use strict";n.d(t,{B:()=>h});var r=n(5032),s=n(3606),a=n.n(s),l=n(7077),c=n(1447),o=n(7257),i=n(9644),u=n(8296),d=n(6552);setTimeout(n.n(d)().highlightAll);var m=n(8219);const p=[l.Z,c.Z];o.Z.use(p);const h=()=>{const{state:{slides:e}}=(0,m.re)(),[t]=function(){const[e,t]=(0,r.useState)(null);return[e]}();return(0,r.useEffect)((()=>{e.some((({fusumaProps:e})=>!!e.hasExecutableCode))&&async function(){n.e(868).then(n.bind(n,4868));const{createContext:e,runInNewContext:t}=await n.e(104).then(n.t.bind(n,3104,23));Array.from(document.querySelectorAll(".executable-code-button")).forEach((n=>{n.addEventListener("click",(n=>{const r=n.target.nextSibling;"none"===r.style.display&&(r.style.display="block");const s=e({console:{log:(...e)=>{const t=document.createElement("p");t.innerText=`- ${e.join(" ")}`,r.appendChild(t)}}});t(n.target.dataset.value,s)}))}))}()}),[]),r.createElement(i.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,hashNavigation:{watchState:!0},pagination:{}},e.map((({slide:e,fusumaProps:{classes:t,sectionTitle:n,background:s}},l)=>r.createElement(u.o,{key:l,className:a()(t,n?"section-title":void 0),"data-hash":`slide-${l+1}`},s&&r.createElement("div",{className:"slide-background",style:s}),r.createElement("div",{className:"slide-internal-box"},r.createElement(e,null))))))}},8219:(e,t,n)=>{"use strict";n.d(t,{BP:()=>m,Gw:()=>i,PM:()=>o,$L:()=>u,re:()=>d});var r=n(5032);var s=n(2356);const a={mode:location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common",currentIndex:function(){const e=new URL(window.location.href).hash.match(/^#slide-(.+?)$/);return null!==e?e[1]-1:0}(),slides:[],contentsList:[],timeline:[],currentFragmentSteps:0},l=(0,r.createContext)(a),c=(e,t)=>{switch(t.type){case"SET_MODE":return{...e,mode:t.payload};case"ADD_SLIDES":return{...e,...t.payload};case"UPDATE_CURRENT_INDEX":return{...e,...(0,s.W)({next:t.payload,...e})};case"UPDATE_CURRENT_FRAGMENT_STEPS":return{...e,currentFragmentSteps:"+"===t.payload?e.currentFragmentSteps+1:e.currentFragmentSteps-1};default:return e}},o=e=>({type:"SET_MODE",payload:e}),i=e=>({type:"ADD_SLIDES",payload:e}),u=e=>({type:"UPDATE_CURRENT_INDEX",payload:e}),d=()=>(0,r.useContext)(l),m=({children:e})=>{const[t,n]=(0,r.useReducer)(c,a);return r.createElement(l.Provider,{value:{state:t,dispatch:n}},e)}},7002:(e,t,n)=>{"use strict";var r=n(5032),s=n(4998),a=n(8219);var l=n(5716),c=n(6267);const o=(0,r.memo)((()=>{const{state:{currentIndex:e},dispatch:t}=(0,a.re)(),s=(0,r.useRef)(e);(0,r.useEffect)((()=>{const{swiper:t}=document.querySelector(".swiper-container");t?.slideTo(e)}),[e]);const l=({key:e})=>{"ArrowRight"===e?t((0,a.$L)("+")):"ArrowLeft"===e&&t((0,a.$L)("-"))};return(0,r.useEffect)((()=>(window.innerWidth<=768&&(async()=>{const{swipeEvent:e}=await n.e(784).then(n.bind(n,9784));e((e=>{t((0,a.$L)(e))}))})(),document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)})),[]),(0,r.useEffect)((()=>{s.current=e}),[e]),r.createElement(c.B,null)}));function i(e){const[t,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{if("common"===e){if("false"!==new URL(window.location.href).searchParams.get("sidebar")||!1){const{Sidebar:e}=await Promise.all([n.e(426),n.e(860),n.e(925)]).then(n.bind(n,3925));s(e)}}else s(null)})()}),[e]),t}const u=({slidesProps:e})=>{const[t,s]=(0,r.useState)(!1),{state:{mode:c},dispatch:u}=(0,a.re)(),d=function(e){const[t,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{if("common"===e)s(o);else if("view"===e){const{default:e}=await n.e(103).then(n.bind(n,5103));s(e)}else if("host"===e){const{default:e}=await Promise.all([n.e(426),n.e(399),n.e(91)]).then(n.bind(n,91));s(e)}else s(null)})()}),[e]),t}(c),m=i(c);return(0,r.useEffect)((()=>{u((0,a.Gw)(e))}),[e]),(0,r.useEffect)((()=>{"common"!==c&&t&&s(!1)}),[c,t]),r.createElement(r.Fragment,null,m&&r.createElement(r.Fragment,null,r.createElement(m,{isOpen:t,onStateChange:({isOpen:e})=>s(e)}),r.createElement(l.xXU,{className:"btn-sidebar",onClick:()=>s(!0)})),d&&r.createElement(d,null))},d=({list:e})=>()=>r.createElement("div",{className:"toc"},r.createElement("ol",null,e.map((({index:e,title:t})=>r.createElement("li",{key:t},r.createElement("a",{href:`#slide-${e}`,title:t},r.createElement("span",{className:"chapter"},t)))))));function m(e){const t=[],n=[],r=[],s=[],a=[],l={};return e.forEach((({slides:e,fusumaProps:l,backgrounds:c,fragmentSteps:o})=>{t.push(...e),n.push(...l),r.push(...c),s.push(o),o&&a.push(...o)})),n.reduce(((e,{sectionTitle:t},n)=>(t&&e.push({title:t,index:n+1}),e)),l.contentsList=[]),l.slides=t.map(((e,t)=>{const s=n[t],a=0===r[t]?null:r[t].includes("/")?{backgroundImage:`url('${r[t]}')`}:{backgroundColor:r[t]};return s.classes&&(s.classes=Array.isArray(s.classes)?s.classes[0].split(","):s.classes.split(",")),{slide:s.contents?d({list:l.contentsList}):e,fusumaProps:{...s,background:a}}})),l.timeline=a,l}var p,h;!function(e=[]){(0,s.hydrate)(r.createElement(a.BP,null,r.createElement(u,{slidesProps:m(e)})),document.getElementById("root"))}((p=n(3447),{id:(h=p).id,slides:h.keys().sort().map((e=>h(e)))}).slides),document.addEventListener("click",(e=>{if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},3179:(e,t,n)=>{if("/Users/hiroppy/Programming/fusuma/samples/plain/style.css".match(/\+*.css$/i))try{n(5031)}catch(e){console.error(e)}},2356:(e,t,n)=>{"use strict";function r({next:e,slides:t,currentIndex:n,timeline:r,currentFragmentSteps:s}){let a,l=e;return"+"===e?(l=Math.min(n+1,t.length-1),a=Array.isArray(r[l])?0:s+1):"-"===e&&(l=Math.max(n-1,0),a=Array.isArray(r[l])?r[l].length:s-1),Array.isArray(r[n])?a<0?{currentIndex:l,currentFragmentSteps:0}:r[n].length>=a?{currentIndex:n,currentFragmentSteps:a}:{currentIndex:l,currentFragmentSteps:0}:{currentIndex:l,currentFragmentSteps:a}}n.d(t,{W:()=>r})},743:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>l,backgrounds:()=>c,fusumaProps:()=>o,default:()=>u});var r=n(5032),s=n(3077);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const l=[e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("h1",null,"Hello😃")),e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("h2",null,"Bye👋"))],c=[0,0],o=[{classes:"title"},{sectionTitle:"Bye👋"}],i={};function u({components:e,...t}){return(0,s.kt)("wrapper",a({},i,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Hello😃"),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"Bye👋"))}u.isMDXComponent=!0},5031:(e,t,n)=>{"use strict";n.r(t)},3447:(e,t,n)=>{var r={"./0-title.md":743};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=3447}},function(e){"use strict";var t;t=e.x,e.x=()=>{var n=t();return[426,860,925].map(e.E),n}},[[757,666,736],[7002,666,736],[3179,666,736]]]);
(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[179],{6267:(a,e,t)=>{"use strict";t.d(e,{B:()=>h});var n=t(5032),s=t(3606),r=t.n(s),m=t(7077),p=t(1447),l=t(7257),i=t(9644),c=t(8296),o=t(6552),d=t.n(o);t(5791),t(3531),t(7813);setTimeout(d().highlightAll);var N=t(1970),u=t(8850);const k=[m.Z,p.Z];l.Z.use(k);const h=()=>{const{state:{slides:a}}=(0,N.re)(),[e]=function(){const[a,e]=(0,n.useState)(null);return(0,u.Q)().get("ssr")||(0,n.useEffect)((()=>{(async()=>{const{Mermaid:a}=await Promise.all([t.e(937),t.e(560)]).then(t.bind(t,746)),n=new a;n.init(),e(n)})()}),[]),[a]}();return(0,n.useEffect)((()=>{d().highlightAll(),a.some((({fusumaProps:a})=>!!a.hasExecutableCode))&&async function(){t.e(868).then(t.bind(t,4868));const{createContext:a,runInNewContext:e}=await t.e(104).then(t.t.bind(t,3104,23));Array.from(document.querySelectorAll(".executable-code-button")).forEach((t=>{t.addEventListener("click",(t=>{const n=t.target.nextSibling;"none"===n.style.display&&(n.style.display="block");const s=a({console:{log:(...a)=>{const e=document.createElement("p");e.innerText=`- ${a.join(" ")}`,n.appendChild(e)}}});e(t.target.dataset.value,s)}))}))}(),e?.reload()}),[]),n.createElement(i.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,hashNavigation:{watchState:!0},pagination:{}},a.map((({slide:a,fusumaProps:{classes:e,sectionTitle:t,background:s}},m)=>n.createElement(c.o,{key:m,className:r()(e,t?"section-title":void 0),"data-hash":`slide-${m+1}`},s&&n.createElement("div",{className:"slide-background",style:s}),n.createElement("div",{className:"slide-internal-box"},n.createElement(a,null))))))}},1970:(a,e,t)=>{"use strict";t.d(e,{BP:()=>N,Gw:()=>i,oA:()=>o,PM:()=>l,$L:()=>c,re:()=>d});var n=t(5032);function s({next:a,slides:e,currentIndex:t,timeline:n,currentFragmentSteps:s}){let r=a,m=0;return"+"===a?(r=Math.min(t+1,e.length-1),m=Array.isArray(n[r])?0:Array.isArray(n[t])?s+1:0):"-"===a&&(r=Math.max(t-1,0),m=Array.isArray(n[r])?n[r].length:Array.isArray(n[t])?s-1:0),Array.isArray(n[t])?m<0?{currentIndex:r,currentFragmentSteps:0}:n[t].length>=m?{currentIndex:t,currentFragmentSteps:m}:{currentIndex:r,currentFragmentSteps:0}:{currentIndex:r,currentFragmentSteps:m}}const r={mode:location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common",currentIndex:function(){const a=new URL(window.location.href).hash.match(/^#slide-(.+?)$/);return null!==a?a[1]-1:0}(),slides:[],contentsList:[],timeline:[],currentFragmentSteps:0},m=(0,n.createContext)(r),p=(a,e)=>{switch(e.type){case"SET_MODE":return{...a,mode:e.payload};case"ADD_SLIDES":return{...a,...e.payload};case"UPDATE_CURRENT_INDEX":return{...a,...s({next:e.payload,...a})};case"RESET_STATE":return{...a,currentIndex:0,currentFragmentSteps:0};case"UPDATE_CURRENT_FRAGMENT_STEPS":return{...a,currentFragmentSteps:"+"===e.payload?a.currentFragmentSteps+1:a.currentFragmentSteps-1};default:return a}},l=a=>({type:"SET_MODE",payload:a}),i=a=>({type:"ADD_SLIDES",payload:a}),c=a=>({type:"UPDATE_CURRENT_INDEX",payload:a}),o=()=>({type:"RESET_STATE"}),d=()=>(0,n.useContext)(m),N=({children:a})=>{const[e,t]=(0,n.useReducer)(p,r);return n.createElement(m.Provider,{value:{state:e,dispatch:t}},a)}},3781:(a,e,t)=>{"use strict";var n=t(5032),s=t(4998),r=t(1970);var m=t(5716),p=t(6267);const l=(0,n.memo)((()=>{const{state:{currentIndex:a},dispatch:e}=(0,r.re)();return(0,n.useEffect)((()=>{const{swiper:e}=document.querySelector(".swiper-container");e?.slideTo(a)}),[a]),(0,n.useEffect)((()=>{const a=({key:a})=>{"ArrowRight"===a?e((0,r.$L)("+")):"ArrowLeft"===a&&e((0,r.$L)("-"))};return window.innerWidth<=768&&(async()=>{const{swipeEvent:a}=await t.e(784).then(t.bind(t,9784));a((a=>{e((0,r.$L)(a))}))})(),document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}}),[]),n.createElement(p.B,null)}));var i=t(8850);const c=({slidesProps:a})=>{const[e,s]=(0,n.useState)(!1),{state:{mode:p},dispatch:c}=(0,r.re)(),o=function(a){const[e,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{if("common"===a)s(l);else if("view"===a){const{default:a}=await t.e(103).then(t.bind(t,5103));s(a)}else if("host"===a){const{default:a}=await Promise.all([t.e(426),t.e(772),t.e(226)]).then(t.bind(t,6226));s(a)}else s(null)})()}),[a]),e}(p),d=function(a){const[e,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{if("common"===a){if("false"!==(0,i.Q)().get("sidebar")){const{Sidebar:a}=await Promise.all([t.e(426),t.e(860),t.e(925)]).then(t.bind(t,3925));s(a)}}else s(null)})()}),[a]),e}(p);return(0,n.useEffect)((()=>{c((0,r.Gw)(a))}),[a]),(0,n.useEffect)((()=>{"common"!==p&&e&&s(!1)}),[p,e]),n.createElement(n.Fragment,null,d&&n.createElement(n.Fragment,null,n.createElement(d,{isOpen:e,onStateChange:({isOpen:a})=>s(a)}),n.createElement(m.xXU,{className:"btn-sidebar",onClick:()=>s(!0)})),o&&n.createElement(o,null))},o=({list:a})=>()=>n.createElement("div",{className:"toc"},n.createElement("ol",null,a.map((({index:a,title:e})=>n.createElement("li",{key:e},n.createElement("a",{href:`#slide-${a}`,title:e},n.createElement("span",{className:"chapter"},e)))))));function d(a){const e=[],t=[],n=[],s=[],r=[],m={};return a.forEach((({slides:a,fusumaProps:m,backgrounds:p,fragmentSteps:l})=>{e.push(...a),t.push(...m),n.push(...p),s.push(l),l&&r.push(...l)})),t.reduce(((a,{sectionTitle:e},t)=>(e&&a.push({title:e,index:t+1}),a)),m.contentsList=[]),m.slides=e.map(((a,e)=>{const s=t[e],r=0===n[e]?null:n[e].includes("/")?{backgroundImage:`url('${n[e]}')`}:{backgroundColor:n[e]};return s.classes&&(s.classes=Array.isArray(s.classes)?s.classes[0].split(","):s.classes.split(",")),{slide:s.contents?o({list:m.contentsList}):a,fusumaProps:{...s,background:r}}})),m.timeline=r,m}var N,u;!function(a=[]){(0,s.hydrate)(n.createElement(r.BP,null,n.createElement(c,{slidesProps:d(a)})),document.getElementById("root"))}((N=t(3447),{id:(u=N).id,slides:u.keys().sort().map((a=>u(a)))}).slides),document.addEventListener("click",(a=>{if("A"===a.target.tagName){if(a.target.host===location.host||""===a.target.href)return;a.preventDefault(),window.open(a.target.href,"_blank")}}))},8850:(a,e,t)=>{"use strict";function n(){return new URL(window.location.href).searchParams}t.d(e,{Q:()=>n})},743:(a,e,t)=>{"use strict";t.r(e),t.d(e,{slides:()=>m,backgrounds:()=>p,fragmentSteps:()=>l,fusumaProps:()=>i,default:()=>o});var n=t(5032),s=t(3077);function r(){return(r=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}const m=[a=>(0,s.kt)(n.Fragment,null,(0,s.kt)("h1",null,"Math, Diagrams, and Flowcharts"))],p=[0],l=[0],i=[{}],c={};function o({components:a,...e}){return(0,s.kt)("wrapper",r({},c,e,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Math, Diagrams, and Flowcharts"))}o.isMDXComponent=!0},3345:(a,e,t)=>{"use strict";t.r(e),t.d(e,{slides:()=>m,backgrounds:()=>p,fragmentSteps:()=>l,fusumaProps:()=>i,default:()=>o});var n=t(5032),s=t(3077);function r(){return(r=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}const m=[a=>(0,s.kt)(n.Fragment,null,(0,s.kt)("h2",null,"Charts and Diagrams"),(0,s.kt)("br",null),(0,s.kt)("p",null,"Fusuma uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/knsv/mermaid"},"mermaid")," but need to install mermaid manually."),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"# fusumarc.yml\n\nslide:\n  chart: true # the default is false\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i mermaid\n"))),a=>(0,s.kt)(n.Fragment,null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"\\`\\`\\`mermaid\ngraph TD;\nA--\x3eB;\nA--\x3eC;\nB--\x3eD;\nC--\x3eD;\n\\`\\`\\`\n")),(0,s.kt)("div",{className:"mermaid",id:"mermaid-1","data-value":"graph TD;\nA--\x3eB;\nA--\x3eC;\nB--\x3eD;\nC--\x3eD;",style:{visibility:"hidden"}})),a=>(0,s.kt)(n.Fragment,null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"\\`\\`\\`mermaid\ngantt\ndateFormat YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task :done, des1, 2014-01-06,2014-01-08\nActive task :active, des2, 2014-01-09, 3d\nFuture task : des3, after des2, 5d\nFuture task2 : des4, after des3, 5d\n\\`\\`\\`\n")),(0,s.kt)("div",{className:"mermaid",id:"mermaid-2","data-value":"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10 section A section\nCompleted task:done,des1, 2014-01-06,2014-01-08\nActive task   :active,  des2, 2014-01-09, 3d\nFuture task   : des3, after des2, 5d\nFuture task2  : des4, after des3, 5d",style:{visibility:"hidden"}}))],p=[0,0,0],l=[0,0,0],i=[{sectionTitle:"Charts"},{},{}],c={};function o({components:a,...e}){return(0,s.kt)("wrapper",r({},c,e,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"Charts and Diagrams"),(0,s.kt)("br",null),(0,s.kt)("p",null,"Fusuma uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/knsv/mermaid"},"mermaid")," but need to install mermaid manually."),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"# fusumarc.yml\n\nslide:\n  chart: true # the default is false\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i mermaid\n")),(0,s.kt)("hr",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"\\`\\`\\`mermaid\ngraph TD;\nA--\x3eB;\nA--\x3eC;\nB--\x3eD;\nC--\x3eD;\n\\`\\`\\`\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n")),(0,s.kt)("hr",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"\\`\\`\\`mermaid\ngantt\ndateFormat YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task :done, des1, 2014-01-06,2014-01-08\nActive task :active, des2, 2014-01-09, 3d\nFuture task : des3, after des2, 5d\nFuture task2 : des4, after des3, 5d\n\\`\\`\\`\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-chart"},"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2              :         des4, after des3, 5d\n")))}o.isMDXComponent=!0},5634:(a,e,t)=>{"use strict";t.r(e),t.d(e,{slides:()=>m,backgrounds:()=>p,fragmentSteps:()=>l,fusumaProps:()=>i,default:()=>o});var n=t(5032),s=t(3077);function r(){return(r=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}const m=[a=>(0,s.kt)(n.Fragment,null,(0,s.kt)("h2",null,"Math"),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"# .fusumarc.yml\n\nslide:\n  math: true\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"$$\n\\textrm{padSize} = \\lceil \\log_{10}(\\mathbf{arraySize} + 1) \\rceil\n$$\n")),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"padSize"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"⌈"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mo"},"log"),(0,s.kt)("mo",{parentName:"mo"},"⁡")),(0,s.kt)("mn",{parentName:"msub"},"10")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"a"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"a"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"y"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"S"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"i"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"z"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"e")),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"⌉")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\textrm{padSize} = \\lceil \\log_{10}(\\mathbf{arraySize} + 1) \\rceil")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord textrm"},"padSize")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"⌈"),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.20696799999999996em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4558600000000004em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"​")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.24414em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf",style:{marginRight:"0.01597em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"z"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"e")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"⌉")))))))],p=[0],l=[0],i=[{sectionTitle:"Math"}],c={};function o({components:a,...e}){return(0,s.kt)("wrapper",r({},c,e,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"Math"),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"# .fusumarc.yml\n\nslide:\n  math: true\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"$$\n\\textrm{padSize} = \\lceil \\log_{10}(\\mathbf{arraySize} + 1) \\rceil\n$$\n")),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"padSize"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"⌈"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mo"},"log"),(0,s.kt)("mo",{parentName:"mo"},"⁡")),(0,s.kt)("mn",{parentName:"msub"},"10")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"a"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"a"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"y"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"S"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"i"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"z"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold"},"e")),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"⌉")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\textrm{padSize} = \\lceil \\log_{10}(\\mathbf{arraySize} + 1) \\rceil")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord textrm"},"padSize")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"⌈"),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.20696799999999996em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4558600000000004em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"​")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.24414em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf",style:{marginRight:"0.01597em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"z"),(0,s.kt)("span",{parentName:"span",className:"mord mathbf"},"e")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"⌉")))))))}o.isMDXComponent=!0},3447:(a,e,t)=>{var n={"./0-title.md":743,"./01-chart.md":3345,"./02-math.md":5634};function s(a){var e=r(a);return t(e)}function r(a){if(!t.o(n,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return n[a]}s.keys=function(){return Object.keys(n)},s.resolve=r,a.exports=s,s.id=3447}},function(a){"use strict";var e;e=a.x,a.x=()=>{var t=e();return[426,860,925].map(a.E),t}},[[757,666,736],[3781,666,736]]]);
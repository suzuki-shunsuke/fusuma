(self.webpackChunkintro=self.webpackChunkintro||[]).push([[925],{3925:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Sidebar:()=>u});var r=a(5032),l=a(7850),s=a(2485),n=a.n(s),i=a(2511),c=a(5716);const o=({children:e,title:t})=>r.createElement("div",{className:"tooltip-container"},r.createElement("span",{className:"tooltip"},t),e);var m=a(1970);const h=e=>`${e}`.padStart(2,"0"),d=({href:e,areaLabel:t,children:a})=>r.createElement("a",{key:"twitter",rel:"noopener noreferrer",target:"_blank",href:e,"aria-label":t},a),u=(0,r.memo)((({isOpen:e,onStateChange:t})=>{const{state:{currentIndex:a,slides:s,contentsList:u},dispatch:b}=(0,m.re)(),E=s.length,p="https://hiroppy.github.io/fusuma/intro/";return r.createElement(l.slide,{isOpen:e,disableAutoFocus:!0,onStateChange:t,outerContainerId:"root"},r.createElement("div",{className:"sidebar-social"},r.createElement(d,{href:`https://twitter.com/intent/tweet?text=What's Fusuma? ${p}`,areaLabel:`What's Fusuma? ${p}`},r.createElement(i.fWC,null)),r.createElement(d,{href:"https://github.com/hiroppy/fusuma.git",areaLabel:"github"},r.createElement(i.hJX,{style:{width:20,height:20}}))),r.createElement("div",{className:"sidebar-control"},r.createElement(c.b2E,{onClick:()=>b((0,m.$L)(0)),className:"sidebar-cursor"}),r.createElement("span",null,`${h(a+1)} / ${h(E)}`),r.createElement(c.cHm,{onClick:()=>b((0,m.$L)(E-1)),className:"sidebar-cursor"})),r.createElement("div",{className:"sidebar-tools"},r.createElement(o,{title:"Presenter"},r.createElement(c.kxx,{onClick:()=>b((0,m.PM)("host")),style:{width:19,height:19,marginTop:3},className:"sidebar-cursor"})),r.createElement(o,{title:"Embed"},r.createElement(c.xoN,{onClick:()=>{navigator.clipboard&&navigator.clipboard.writeText(`<iframe src="${p}" style="width:100%;height:100%;"></iframe>`)},style:{width:26,height:26},className:"sidebar-cursor"})),r.createElement(o,{title:"Fullscreen"},r.createElement(c.Nms,{style:{width:26,height:26},onClick:()=>{n().isEnabled&&n().toggle()},className:"sidebar-cursor"}))),u.length&&r.createElement("ul",{className:"sidebar-contents"},u.map((e=>r.createElement("li",{key:e.title},r.createElement("a",{style:{cursor:"pointer"},onClick:()=>b((0,m.$L)(e.index-1))},e.title))))))}))}}]);
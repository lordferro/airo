"use strict";(self.webpackChunkairo=self.webpackChunkairo||[]).push([[945],{837:function(e,n,t){t.d(n,{J:function(){return c}});var r=t(184),c=function(){return(0,r.jsx)("svg",{className:"icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"rgba(116, 182, 247,1)",viewBox:"0 0 512 512",children:(0,r.jsx)("path",{d:"M448 0h-384c-35.2 0-64 28.8-64 64v384c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64v-384c0-35.2-28.8-64-64-64zM224 397.255l-118.627-118.628 45.255-45.254 73.372 73.372 153.373-153.373 45.254 45.255-198.627 198.628z"})})}},945:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(433),c=t(791),i=t(355),s=t(439),a=t(762);function u(e,n){if(Object.is(e,n))return!0;if("object"!==typeof e||null===e||"object"!==typeof n||null===n)return!1;if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;var t,r=(0,a.Z)(e);try{for(r.s();!(t=r.n()).done;){var c=(0,s.Z)(t.value,2),i=c[0],u=c[1];if(!Object.is(u,n.get(i)))return!1}}catch(x){r.e(x)}finally{r.f()}return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;var o,l=(0,a.Z)(e);try{for(l.s();!(o=l.n()).done;){var d=o.value;if(!n.has(d))return!1}}catch(x){l.e(x)}finally{l.f()}return!0}var f=Object.keys(e);if(f.length!==Object.keys(n).length)return!1;for(var h=0;h<f.length;h++)if(!Object.prototype.hasOwnProperty.call(n,f[h])||!Object.is(e[f[h]],n[f[h]]))return!1;return!0}var o=t(87),l=t(837),d=t(184),f=function(e){var n=e.recepie,t=e.checked;return(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("div",{className:"img",children:(0,d.jsx)("img",{alt:"".concat(n.name),src:"".concat(n.image_url)})}),(0,d.jsxs)("div",{className:"infos",children:[(0,d.jsxs)("div",{className:"name",children:[(0,d.jsx)("h2",{children:n.name}),(0,d.jsx)("h4",{children:n.tagline})]}),(0,d.jsxs)("ul",{className:"stats",children:[(0,d.jsxs)("li",{children:[(0,d.jsxs)("h3",{children:[n.abv," %"]}),(0,d.jsx)("h4",{children:"Alcohol"})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("h3",{children:n.first_brewed}),(0,d.jsx)("h4",{children:"First brewed"})]})]}),(0,d.jsxs)("div",{className:"links",children:[(0,d.jsx)(o.rU,{to:"".concat(n.id),children:(0,d.jsx)("button",{className:"readMore",children:"Read more"})}),t&&(0,d.jsx)(l.J,{})]})]})]})},h=function(){var e=(0,i.k)((function(e){return{recepies:e.recepies,checked:e.checked,page:e.page,startIndex:e.startIndex,endIndex:e.endIndex,increaseIndex:e.increaseIndex,fetch:e.fetch,increasePage:e.increasePage}}),u),n=e.recepies,t=e.page,s=e.checked,a=e.fetch,o=e.startIndex,l=e.endIndex,h=e.increaseIndex,x=e.increasePage,v=(0,c.useRef)(null),p=(0,c.useRef)(null),g=(0,c.useCallback)((function(e){if(s.indexOf(e)<0)i.k.setState({checked:[].concat((0,r.Z)(s),[e])});else{var n=s.filter((function(n){return n!==e}));i.k.setState({checked:n})}}),[s]),j=function(e){if(!(e[0].intersectionRatio<=0)){var n=e[0];n.boundingClientRect.y>350&&n.isIntersecting&&h()}};return(0,c.useEffect)((function(){a();var e=v.current,n=new IntersectionObserver(j,{root:null,rootMargin:"15px",threshold:1});return e&&n.observe(e),function(){e&&n.unobserve(e)}}),[t]),(0,c.useEffect)((function(){var e=function(e){if(2===e.button&&e.target&&e.target.closest("li")){var n=Number(e.target.closest("li[id]").getAttribute("id"));g(n)}},n=p.current;return p.current&&n.addEventListener("mousedown",e),function(){n.removeEventListener("mousedown",e)}}),[g]),(0,c.useEffect)((function(){n.length>0&&n.length<=l&&x()}),[l,x,n.length]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("ul",{ref:p,children:n&&n.slice(o,l).map((function(e){return(0,d.jsx)("li",{onContextMenu:function(e){e.preventDefault()},id:e.id,children:(0,d.jsx)(f,{recepie:e,checked:(n=e.id,s.includes(n))})},e.id);var n}))}),s.length>0&&(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("button",{className:"controlBtn delete",onClick:function(){var e=n.filter((function(e){return!s.includes(e.id)}));i.k.setState({recepies:e}),i.k.setState({checked:[]})},children:"delete"}),(0,d.jsx)("button",{className:"controlBtn deselect",onClick:function(){i.k.setState({checked:[]})},children:"deselect all"})]}),(0,d.jsx)("div",{ref:v})]})}},355:function(e,n,t){t.d(n,{k:function(){return u}});var r=t(165),c=t(433),i=t(861),s=t(847),a=t(243),u=(0,s.Ue)((function(e,n){return{recepies:[],checked:[],page:1,currentRecepie:{},startIndex:0,endIndex:15,increasePage:function(){return e((function(e){return{page:e.page+1}}))},increaseIndex:function(){return e((function(e){return{startIndex:e.startIndex+5,endIndex:e.endIndex+5}}))},getRecepieById:function(e){return n().recepies.find((function(n){return n.id===Number(e)}))},fetch:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var i,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("https://api.punkapi.com/v2/beers?page=".concat(n().page));case 2:i=t.sent,s=i.data,e({recepies:[].concat((0,c.Z)(n().recepies),(0,c.Z)(s))});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))}}]);
//# sourceMappingURL=945.21d7d95a.chunk.js.map
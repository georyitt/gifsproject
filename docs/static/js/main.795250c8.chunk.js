(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=(n(15),n(2)),u=n(9),s=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(u.a)(t))})),o(""))},children:Object(s.jsx)("input",{type:"text",name:"add",id:"",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=u40V7DxnHmFmqDuHWo3gLIB4BzPrDCLb&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var n;return t.title.trim().length<1&&(t.title=e),{id:t.id,title:t.title,url:null===(n=t.images)||void 0===n?void 0:n.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__jackInTheBox",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){b(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsxs)("h3",{children:[" ",e]}),a&&Object(s.jsx)("p",{children:"Cargando..."}),Object(s.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(s.jsx)(f,Object(j.a)({},t),t.id)}))})]})},m=function(){var t=Object(r.useState)(["One punch man"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(o,{setCategories:c}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(h,{category:t},t)}))})]})};a.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.795250c8.chunk.js.map
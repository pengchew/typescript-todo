(this.webpackJsonpts=this.webpackJsonpts||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(15),i=n(12),r=n.n(i),u=(n(20),n(6)),s=n(10),j=(n(21),n(1)),l=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)([]),r=Object(s.a)(i,2),l=r[0],b=r[1],a=function(t){b([].concat(Object(u.a)(l),[{text:t,complete:!1}]))};return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(n),o("")},children:[Object(j.jsx)("input",{type:"text",value:n,onChange:function(t){return o(t.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Add Todo"})]}),Object(j.jsx)("section",{children:l.map((function(t,e){return Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("div",{style:{textDecoration:t.complete?"line-through":""},children:t.text}),Object(j.jsx)("button",{type:"button",onClick:function(){return function(t){var e=l;e[t].complete=!e[t].complete,b(Object(u.a)(e))}(e)},children:t.complete?"Incomplete":"Complete"}),Object(j.jsx)("button",{onClick:function(){return function(t){var e=l;e.splice(t,1),b(Object(u.a)(e))}(e)},children:"x"})]},e)}))})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),b()}},[[28,1,2]]]);
//# sourceMappingURL=main.c98dc320.chunk.js.map
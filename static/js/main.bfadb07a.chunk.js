(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{72:function(e,n,t){},73:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),i=t(56),r=t.n(i),l=(t(72),t(9)),j=t(4),a=t(99),x=t(97),p=(t(73),t(92)),b=t(3),s=function(){return Object(b.jsx)(p.a,{m:"16px",mb:"40px",bgGradient:"linear(to-l, #7928CA, #FF0080)",bgClip:"text",fontSize:"6xl",fontWeight:"extrabold",children:"Todo App"})},u=t(93),d=t(94),O=t(95),h=t(98),f=function(e){var n=e.onClick,t=e.children;return Object(b.jsx)(h.a,{m:"8px",w:"100px",pr:"6px",pl:"6px",bg:"#FF0080",color:"#fff",outline:"none",onClick:n,children:t})},C=function(e){var n=e.Todos,t=e.onClickCompleteDelete,c=e.onClickBack;return Object(b.jsxs)(u.a,{m:"40px",p:"20px",w:"1200px",minH:"200px",border:"1px",borderRadius:"8px",children:[Object(b.jsx)(d.a,{fontSize:"lg",borderBottom:"2px",color:"#FF0080",children:"\u9811\u5f35\u3063\u305f\uff01"}),Object(b.jsx)(u.a,{fontSize:"lg",children:Object(b.jsx)("ul",{children:n.map((function(e,n){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)("li",{children:e}),Object(b.jsx)(f,{onClick:function(){return c(n)},children:"\u623b\u3059"}),Object(b.jsx)(f,{onClick:function(){return t(n)},children:"\u524a\u9664"})]})},e)}))})})]})},m=function(e){var n=e.incompleteTodos,t=e.onClickFinish,c=e.onClickIncompleteDelete;return Object(b.jsxs)(u.a,{m:"40px",p:"20px",minH:"200px",border:"1px",borderRadius:"8px",w:"1200px",children:[Object(b.jsx)(d.a,{fontSize:"lg",borderBottom:"2px",color:"#FF0080",children:"\u3059\u3050\u3084\u308c\uff01"}),Object(b.jsx)(u.a,{fontSize:"lg",children:Object(b.jsx)("ul",{children:n.map((function(e,n){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)("li",{children:e}),Object(b.jsx)(f,{onClick:function(){return t(n)},children:"\u5b8c\u4e86"}),Object(b.jsx)(f,{onClick:function(){return c(n)},children:"\u524a\u9664"})]})},e)}))})})]})},k=function(e){var n=e.onClick,t=e.children;return Object(b.jsx)(h.a,{m:"8px",w:"100px",pr:"6px",pl:"6px",bg:"#FF0080",color:"#fff",outline:"none",onClick:n,children:t})},g=t(100),v=Object(c.memo)((function(e){var n=e.input,t=e.onChange,c=e.placeholder;return Object(b.jsx)(g.a,{m:"8px",placeholder:c,value:n,onChange:t})})),F=Object(c.memo)((function(e){var n=e.input,t=e.onChange,c=e.onClick,o=e.placeholder,i=e.text;return Object(b.jsxs)(O.a,{m:"8px",w:"1200px",children:[Object(b.jsx)(v,{input:n,onChange:t,placeholder:o}),Object(b.jsx)(k,{onClick:c,children:i})]})}));function S(){var e=Object(c.useState)(""),n=Object(j.a)(e,2),t=n[0],o=n[1],i=Object(c.useState)([""]),r=Object(j.a)(i,2),p=r[0],u=r[1],d=Object(c.useState)([""]),O=Object(j.a)(d,2),h=O[0],f=O[1];return Object(b.jsxs)(a.a,{children:[Object(b.jsx)(s,{}),Object(b.jsx)(x.a,{children:Object(b.jsx)(F,{input:t,onChange:function(e){return o(e.target.value)},onClick:function(){var e=[].concat(Object(l.a)(p),[t]);u(e),o("")},placeholder:"",text:"\u8ffd\u52a0"})}),Object(b.jsx)(x.a,{children:Object(b.jsx)(m,{incompleteTodos:p,onClickFinish:function(e){var n=Object(l.a)(p);n.splice(e,1);var t=[].concat(Object(l.a)(h),[p[e]]);u(n),f(t)},onClickIncompleteDelete:function(e){var n=Object(l.a)(p);n.splice(e,1),u(n)}})}),Object(b.jsx)(x.a,{children:Object(b.jsx)(C,{Todos:h,onClickCompleteDelete:function(e){var n=Object(l.a)(h);n.splice(e,1),f(n)},onClickBack:function(e){var n=Object(l.a)(h);n.splice(e,1);var t=[].concat(Object(l.a)(p),[h[e]]);f(n),u(t)}})})]})}var w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),w()}},[[79,1,2]]]);
//# sourceMappingURL=main.bfadb07a.chunk.js.map
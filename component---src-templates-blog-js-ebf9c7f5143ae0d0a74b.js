(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{c851:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));a("a1Th"),a("Btvt");var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),l=a("Kvkj"),o=a("TJpk"),d=a("ZMKu"),s={visible:{transition:{when:"beforeChildren",staggerChildren:.1}}},c={hidden:{y:100,scale:.95,opacity:0},visible:{y:0,scale:1,opacity:1,transition:{duration:.3}}};t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.pageContext,n=a.currentPage,u=a.numPages,g=n-1==1?"/":(n-1).toString(),m="/blog/"+(n+1).toString(),p=1===n,v=n===u;return i.a.createElement(l.d,null,i.a.createElement(o.Helmet,{title:"Articles about design and code · Edmundo Santos, Designer"}),i.a.createElement(l.c,{title:"Exploring ideas about design, code, and technology.",description:"+ some other random stuff."}),i.a.createElement(d.a.div,{className:"blog-grid",variants:s,initial:"hidden",animate:"visible"},t.map((function(e,t){var a=e.node,n=a.frontmatter,r=n.title,o=n.description,d=n.date,s=a.fields.slug;return i.a.createElement(l.e,{key:t,index:t,slug:s,title:r,description:o,date:d,variants:c})}))),i.a.createElement("div",{className:"pagination"},!p&&i.a.createElement(r.a,{to:g,rel:"prev","aria-label":"Previous page"},"← Prev"),!v&&i.a.createElement(r.a,{to:m,rel:"next","aria-label":"Next page"},"Next →")))};var u="443158990"}}]);
//# sourceMappingURL=component---src-templates-blog-js-ebf9c7f5143ae0d0a74b.js.map
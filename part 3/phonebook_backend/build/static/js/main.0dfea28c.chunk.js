(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(2),c=t.n(o),i=t(14),a=t.n(i),u=t(3),r=t(0),s=function(e){var n=e.onChange;return Object(r.jsxs)("div",{children:["filter shown with ",Object(r.jsx)("input",{onChange:n})]})},l=function(e){var n=e.onSubmit,t=e.nameVal,o=e.noVal,c=e.nameChange,i=e.noChange;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:c})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:o,onChange:i})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.person,t=e.handleRemove;return Object(r.jsxs)("div",{children:[n.name," ",n.number,Object(r.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},j=function(e){var n=e.filtered,t=e.handleDelete;return Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(d,{person:e,handleRemove:t},e.id)}))})},f=t(4),b=t.n(f),h="/api/phones",m=function(){return b.a.get(h)},O=function(e){return b.a.post(h,e)},v=function(e){return b.a.delete(h+"/"+e)},x=function(e,n){return b.a.put(h+"/"+e,n)},g=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{className:"added",children:n})},p=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],i=Object(o.useState)(""),a=Object(u.a)(i,2),d=a[0],f=a[1],b=Object(o.useState)(""),h=Object(u.a)(b,2),p=h[0],w=h[1],C=Object(o.useState)([]),S=Object(u.a)(C,2),k=S[0],y=S[1],D=Object(o.useState)(null),T=Object(u.a)(D,2),V=T[0],E=T[1];Object(o.useEffect)((function(){console.log("effect"),m().then((function(e){console.log("promise fullfilled"),c(e.data),y(e.data)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(g,{message:V}),Object(r.jsx)(s,{onChange:function(e){y(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),Object(r.jsx)("h2",{children:"add new entry"}),Object(r.jsx)(l,{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===d}))){if(window.confirm("Change ".concat(d,"'s number with this one?"))){var n={name:d,number:p};x(t.find((function(e){return e.name===d})).id,n).then((function(e){console.log(e.data),m().then((function(e){c(e.data),y(e.data)})),E("".concat(d,"'s number is updated.")),setTimeout((function(){E(null)}),5e3)})).catch((function(e){console.log(e),E("".concat(d," was already deleted from the server.")),setTimeout((function(){E(null)}),5e3)}))}}else O({name:d,number:p}).then((function(e){m().then((function(e){c(e.data),y(e.data)})),E("".concat(d," is added to phonebook.")),setTimeout((function(){E(null)}),5e3),console.log(e)})).catch((function(e){E("name or number error"),setTimeout((function(){E(null)}),5e3)}));f(""),w("")},nameVal:d,noVal:p,nameChange:function(e){f(e.target.value)},noChange:function(e){w(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(j,{filtered:k,handleDelete:function(e){window.confirm("Do you really want to remove this person?")&&v(e).then((function(n){y(k.filter((function(n){return n.id!==e}))),c(t.filter((function(n){return n.id!==e}))),console.log(n)}))}})]})};t(38);a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0dfea28c.chunk.js.map
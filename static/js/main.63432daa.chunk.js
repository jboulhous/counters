(this.webpackJsonpcounters=this.webpackJsonpcounters||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),o=n.n(s),a=n(0),l=function(){return Object(a.jsxs)("div",{className:"py-5 text-center",children:[Object(a.jsx)("h2",{children:"Hi buddy!"}),Object(a.jsx)("p",{className:"lead",children:"Count anything you want to..."})]})},i=n(2),u=n(4),d=n(3),j=new(n(6).default)("MyReactCounterApp");j.version(1).stores({counters:"++id"});var b=j,m=function(e){var t=e.counterId,n=e.setCounterId;window.setCounterId=n;var r=Object(c.useState)(null),s=Object(i.a)(r,2),o=s[0],l=s[1];window.counter=o,window.setCounter=l;var j=Object(u.useLiveQuery)((function(){return b.counters.where("id").equals(t).toArray().then((function(e){return console.log("counters",j),console.log("current counters rest",e),e.length&&n(e[0].id),e.length&&l(e[0]),e}))}),[t]);if(!j)return null;if(!j.length)return null;return console.log("before returning CurrentCounter",o),Object(a.jsxs)("div",{className:"col-md-8",children:[Object(a.jsx)("h4",{className:"mb-3",children:o&&o.title}),Object(a.jsx)("div",{className:"card text-center",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:o&&o.total}),Object(a.jsx)("form",{className:"",children:Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var e=Object(d.a)(Object(d.a)({},o),{},{step:o.step-1});console.log("decrement step",o.step,e),l(e)},children:"-"})}),Object(a.jsx)("input",{type:"text",className:"form-control text-center","aria-describedby":"validatedInputGroupPrepend",required:"",value:o&&isFinite(o.step)?o.step:"1",readOnly:!0}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var e=Object(d.a)(Object(d.a)({},o),{},{step:o.step+1});console.log("increment step",o.step,e),l(e)},children:"+"})})]})})}),Object(a.jsx)("button",{href:"#",className:"btn btn-primary float-left",onClick:function(){var e=o.id,t=o.step,n=o.total-t;console.log("decrement counter ".concat(e," with step ").concat(t," from ").concat(o.total," to ").concat(n)),b.counters.update(e,{total:n,step:t}).then((function(e){console.log("counter updated")}))},children:"Decrement"}),Object(a.jsx)("button",{href:"#",className:"btn btn-secondary mr-1",onClick:function(){window.confirm("Confirm resetting the current counter")&&b.counters.update(o.id,{step:1,total:0})},children:"Reset"}),Object(a.jsx)("button",{href:"#",className:"btn btn-danger ml-1",onClick:function(){window.confirm("Confirm deleting the current counter")&&b.counters.delete(o.id)},children:"Delete"}),Object(a.jsx)("button",{href:"#",className:"btn btn-primary float-right",onClick:function(){var e=o.id,t=o.step,n=t+o.total;console.log("increment counter ".concat(e," with step ").concat(t," from ").concat(o.total," to ").concat(n)),b.counters.update(e,{total:n,step:t}).then((function(e){console.log("counter updated")}))},children:"Increment"})]})})]})},h=function(e){var t=e.setCurrentCounter,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],o=r[1];return Object(a.jsx)("form",{className:"",onSubmit:function(e){e.preventDefault(),console.log("form submit"),s&&function(e){console.log("addCounter");var n={title:e,total:0,step:1};b.counters.add(n).then((function(e){return t(e)})).then((function(e){return o("")}))}(s)},children:Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Count something...",required:"",value:s,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:"Add counter"})})]})})})},p=function(e){var t=e.counters,n=e.currentCounter,c=e.setCurrentCounter;return Object(a.jsxs)("div",{className:"col-md-4 order-md-2 mb-4",children:[Object(a.jsxs)("h4",{className:"d-flex justify-content-between align-items-center mb-3",children:[Object(a.jsx)("span",{className:"text-muted",children:"Counters"}),Object(a.jsx)("span",{className:"badge badge-secondary badge-pill",children:t&&t.length})]}),Object(a.jsx)("ul",{className:"list-group mb-3",children:t&&t.map((function(e){var t=e.id===n?"text-success":"",r=e.id===n?"bg-light":"lh-condensed",s="list-group-item d-flex justify-content-between ".concat(r),o=e.id===n?"text-success":"text-muted";return Object(a.jsxs)("li",{className:s,onClick:function(t){return c(e.id)},children:[Object(a.jsx)("div",{className:t,children:Object(a.jsx)("h6",{className:"my-0",children:e.title})}),Object(a.jsx)("span",{className:o,children:e.total})]},e.id)}))}),Object(a.jsx)(h,{setCurrentCounter:c})]})},x=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(u.useLiveQuery)((function(){return b.counters.where("id").above(0).toArray()}));return Object(a.jsx)("div",{className:"row",children:s&&s.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{counters:s,currentCounter:n,setCurrentCounter:r}),Object(a.jsx)(m,{counterId:n,setCounterId:r})]}):Object(a.jsx)(h,{setCurrentCounter:r})})},O=function(){return Object(a.jsx)("footer",{className:"my-5 pt-5 text-muted text-center text-small",children:Object(a.jsx)("p",{className:"mb-1",children:"\xa9 2021 Jamal Boulhous"})})};window.db=b;var f=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{}),Object(a.jsx)(x,{}),Object(a.jsx)(O,{})]})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.63432daa.chunk.js.map
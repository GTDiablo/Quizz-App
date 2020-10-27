(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),a=n(16),r=n.n(a),j=n(4),o=n(10),l=n(11);var u=function(e){var t=Object(j.c)((function(e){return e.questions})),n=Object(j.b)(),i=Object(s.useState)(""),a=Object(o.a)(i,2),r=a[0],u=a[1],b=t.questions.length<=0;return Object(c.jsxs)("div",{className:"landing-container",children:[Object(c.jsxs)("div",{className:"landing-hero",children:[Object(c.jsx)("div",{className:"navigation",children:Object(c.jsxs)(l.b,{to:"/settings",children:[Object(c.jsx)("img",{src:"./assets/settings.svg",alt:""}),"Be\xe1ll\xedt\xe1sok"]})}),Object(c.jsxs)("div",{className:"landing-content",children:[Object(c.jsx)("h1",{children:"A Nagy Quiz App"}),Object(c.jsx)("p",{children:"Teszteld saj\xe1t \xe9s bar\xe1taid tud\xe1st\xe1r\xe1t egy izgalmas megm\xe9rettet\xe9ssel ! K\xe9sz\xedts \xe9s v\xe1laszolj meg neh\xe9z vagy k\xf6nny\u0171 k\xe9rd\xe9seket. A m\xf3k\xe1nak sosincs v\xe9ge, b\xe1rmikor \xfaj k\xe9rd\xe9seket adhatsz meg."}),Object(c.jsx)("p",{children:"Add meg a neved \xe9s kezdj\xfcnk hozz\xe1 !"}),Object(c.jsxs)("div",{className:"landing-content-action",children:[Object(c.jsx)("input",{disabled:b,type:"text",placeholder:"Neved:",onChange:function(e){return u(e.target.value)}}),Object(c.jsxs)("button",{disabled:b,onClick:function(){""!==r.trim()&&n(function(e){return{type:"QUIZ_SET_NAME",payload:e}}(r))},className:"btn btn-primary",children:["Kezdj\xfcnk Hozz\xe1 ",Object(c.jsx)("i",{className:"fa fa-arrow-right"})]})]}),b?Object(c.jsxs)("div",{className:"landing-content-error caption-t",children:[Object(c.jsx)("b",{children:"Figyelem:"})," Addig nem kezdhetsz j\xe1tszani, am\xedg nincsenek k\xe9rd\xe9sek! Adj meg \xfaj k\xe9rd\xe9seket a be\xe1ll\xedt\xe1sok men\xfcben vagy kattints ide!"]}):null]})]}),Object(c.jsx)("div",{className:"landing-illustration"})]})};var b=function(e){var t=e.text,n=e.selected,s=e.setter_cb,i=e.right_answer,a=e.show,r="";return a&&i===t&&(r="quiz-choice__right"),n&&a&&i!==t&&(r="quiz-choice__wrong"),Object(c.jsxs)("div",{onClick:function(){return s(t)},className:"quiz-choice ".concat(n?"quiz-choice__selected":""," ").concat(r),children:[Object(c.jsx)("div",{className:"quiz-choice-dot"}),Object(c.jsx)("div",{className:"quiz-choice-text",children:t})]})};var d=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.questions})),n=Object(j.c)((function(e){return e.quiz})),i=t.questions[n.index],a=Object(s.useState)(!1),r=Object(o.a)(a,2),u=r[0],d=r[1],O=Object(s.useState)(""),h=Object(o.a)(O,2),m=h[0],x=h[1],g=function(e){u||x(e)};return Object(c.jsxs)("div",{className:"game-container",children:[Object(c.jsxs)("div",{className:"navigation",onClick:function(){return e({type:"QUIZ_RESET_NAME"})},children:[Object(c.jsx)("img",{src:"./assets/reset.svg",alt:""}),"\xdajrakezd\xe9s"]}),n.index<t.questions.length?Object(c.jsxs)("div",{className:"game-content",children:[Object(c.jsxs)("div",{className:"game-state",children:[n.name," j\xe1t\xe9kos pontjai: ",n.points,"/",t.questions.length]}),Object(c.jsxs)("h1",{children:["#",n.index+1," ",i.text]}),Object(c.jsxs)("div",{className:"game-actions",children:[Object(c.jsx)("div",{className:"game-actions-choices",children:i.choices.map((function(e,t){return Object(c.jsx)(b,{text:e,setter_cb:g,selected:e===m,right_answer:i.right_answer,show:u},t)}))}),Object(c.jsx)("button",{className:"btn ".concat(u?"btn-primary-outline":"btn-primary"),onClick:function(){u?(e({type:"QUIZ_NEXT_QUESTION"}),d(!1),x("")):(d(!0),m===i.right_answer&&e({type:"QUIZ_ADD_POINT"}))},children:u?"Tov\xe1bb":"K\xfcld\xe9s"})]})]}):Object(c.jsxs)("div",{className:"game-result",children:[Object(c.jsxs)("div",{className:"game-result-text",children:[n.name," j\xe1t\xe9kos ",n.points,"/",t.questions.length," pontot \xe9rt el!"]}),Object(c.jsxs)("div",{className:"game-result-actions",children:[Object(c.jsx)("button",{onClick:function(){return e({type:"QUIZ_RESET_NAME"})},className:"btn btn-primary",children:"Kezdj neki egy \xfaj k\xf6rnek"}),Object(c.jsx)("span",{children:"vagy"}),Object(c.jsx)("button",{className:"btn btn-primary-outline",children:Object(c.jsx)(l.b,{to:"/settings",children:"Hozz l\xe9tre t\xf6bb k\xe9rd\xe9st"})})]})]})]})},O=function(e){var t=Object(j.c)((function(e){return e.quiz}));return Object(c.jsx)(i.a.Fragment,{children:""!==t.name.trim()?Object(c.jsx)(d,{}):Object(c.jsx)(u,{})})},h=n(5),m=n(40);var x=function(e){var t=e.id,n=e.text,s=Object(j.b)();return Object(c.jsxs)("div",{className:"question-item",children:[Object(c.jsx)("div",{className:"question-item-text",children:n}),Object(c.jsx)("button",{onClick:function(){return s(function(e){return{type:"DELETE_QUESTION",payload:e}}(t))},className:"question-item-action",children:"\xd7"})]})};var g=function(){var e=Object(j.b)(),t=Object(s.useState)(-1),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),u=l[0],b=l[1],d=Object(s.useState)(["","","",""]),O=Object(o.a)(d,2),x=O[0],g=O[1],v=function(){var t=!0;if(""===u.trim()&&(t=!1),-1===i&&(t=!1),x.forEach((function(e){""===e.trim()&&(t=!1)})),t){var n={text:u,choices:x,right_answer:x[i]};e(function(e){return{type:"ADD_QUESTION",payload:Object(h.a)(Object(h.a)({},e),{},{id:Object(m.a)()})}}(n)),g(["","","",""]),a(-1),b("")}};return Object(c.jsxs)("div",{className:"manager-input-content",children:[Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("label",{htmlFor:"question-input",children:"K\xe9rd\xe9s"}),Object(c.jsx)("input",{id:"question-input",name:"question-input",type:"text",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(c.jsxs)("div",{className:"manager-input-content-labels",children:[Object(c.jsx)("span",{className:"caption-t",children:Object(c.jsx)("b",{children:"V\xe1lasz:"})}),Object(c.jsx)("span",{className:"caption-t",children:Object(c.jsx)("b",{children:"Helyes ?"})})]}),Object(c.jsx)("div",{className:"choices",children:x.map((function(e,t){return Object(c.jsxs)("div",{className:"choice-input",children:[Object(c.jsx)("input",{type:"text",onChange:function(e){return function(e,t){var n=x;n[e]=t,g(n)}(t,e.target.value)}}),Object(c.jsx)("input",{type:"checkbox",checked:i===t,value:e,onChange:function(){return a(t)}})]},t)}))}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return v()},children:"K\xe9rd\xe9s hozz\xe1ad\xe1sa"})]})},v=function(e){var t=Object(j.c)((function(e){return e.questions})),n=0===t.questions.length;return Object(c.jsxs)("div",{className:"manager-container",children:[Object(c.jsx)("div",{className:"navigation",children:Object(c.jsxs)(l.b,{to:"/",children:[Object(c.jsx)("i",{className:"fa fa-arrow-left"}),"Vissza a j\xe1t\xe9khoz"]})}),Object(c.jsx)("div",{className:"manager-questions ".concat(n?"empty":""),children:n?Object(c.jsx)("h1",{children:"Jelenleg nincsenek k\xe9rd\xe9sek."}):t.questions.map((function(e){return Object(c.jsx)(x,{text:e.text,id:e.id},e.id)}))}),Object(c.jsx)("div",{className:"manager-input",children:Object(c.jsx)(g,{})})]})},p=(n(37),n(3));var N=function(){var e=Object(j.b)();return Object(s.useEffect)((function(){e({type:"LOAD_QUESTIONS"})}),[e]),Object(c.jsx)(l.a,{children:Object(c.jsxs)(p.d,{children:[Object(c.jsx)(p.b,{path:"/",exact:!0,component:O}),Object(c.jsx)(p.b,{path:"/settings",exact:!0,component:v}),Object(c.jsx)(p.b,{path:"/*",render:function(){return Object(c.jsx)(p.a,{to:"/"})}})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))},k={name:"",points:0,index:0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ADD_POINT":return Object(h.a)(Object(h.a)({},e),{},{points:e.points+1});case"QUIZ_SET_NAME":return Object(h.a)(Object(h.a)({},e),{},{name:t.payload});case"QUIZ_RESET_NAME":return{name:"",points:0,index:0};case"QUIZ_NEXT_QUESTION":return Object(h.a)(Object(h.a)({},e),{},{index:e.index+1});default:return e}},q=n(24),_={loading:!0,questions:[]},z=function(){var e=localStorage.getItem("questions");return null!==e?JSON.parse(e):[]},E=function(e){var t=JSON.stringify(e);localStorage.setItem("questions",t)},S=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_QUESTION":return e=[n.payload].concat(Object(q.a)(t.questions)),E(e),Object(h.a)(Object(h.a)({},t),{},{questions:e});case"DELETE_QUESTION":return e=Object(q.a)(t.questions.filter((function(e){return e.id!==n.payload}))),E(e),Object(h.a)(Object(h.a)({},t),{},{questions:e});case"LOAD_QUESTIONS":return{loading:!1,questions:z()};default:return t}},I=n(14),T=Object(I.b)({questions:S,quiz:y}),Q=Object(I.c)(T),A=function(e){return Object(c.jsx)(j.a,{store:Q,children:e.children})};r.a.render(Object(c.jsx)(A,{children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),f()}},[[38,1,2]]]);
//# sourceMappingURL=main.ae8f96d4.chunk.js.map
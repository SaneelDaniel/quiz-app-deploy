(this["webpackJsonpquiz-game"]=this["webpackJsonpquiz-game"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(8),a=c.n(i),l=(c(15),c(16),c(6)),r=c.n(l),j=c(9),o=c(3),d=c(10),u=c.n(d),b=Object(n.createContext)(),h=c(0);var O=function(e){e.lst;var t=s.a.useContext(b),c=t.quizListArray,i=(t.SET_QUIZLIST_ARRAY,c);return Object(n.useEffect)((function(){console.log(i)}),[c]),Object(h.jsx)("div",{className:"answers-list",children:i?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Answers"}),null===i||void 0===i?void 0:i.map((function(e,t){return Object(h.jsx)("div",{className:"answer-card",children:Object(h.jsxs)("div",{className:"answer-section",children:[Object(h.jsxs)("div",{className:"answer-count",children:[Object(h.jsxs)("p",{children:[" Q",t+1,". "]}),Object(h.jsx)("p",{children:e.questionString})]}),Object(h.jsx)("div",{className:"answer-count",children:Object(h.jsxs)("p",{children:["Answer: ",e.rightChoice]})})]})},t)}))]}):Object(h.jsx)("div",{})})},x="https://mongo-quiz-rest.herokuapp.com/quizes/QuizCollection";var v=function(){var e=s.a.useContext(b),t=(e.quizListArray,e.SET_QUIZLIST_ARRAY),c=Object(n.useState)(0),i=Object(o.a)(c,2),a=i[0],l=i[1],d=Object(n.useState)(!1),v=Object(o.a)(d,2),p=v[0],f=v[1],m=Object(n.useState)(0),g=Object(o.a)(m,2),y=g[0],S=g[1],w=Object(n.useState)([]),A=Object(o.a)(w,2),N=A[0],k=A[1],z=Object(n.useState)(null),q=Object(o.a)(z,2),L=q[0],C=q[1],T=Object(n.useState)(!1),I=Object(o.a)(T,2);function R(){return(R=Object(j.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x,{method:"get",dataType:"json"}).then((function(e){return e.json()})).then((function(e){for(var c=[],n=0;n<e.length;n++){var s=e[n];c.push(s)}k(c),t(c)})).catch((function(e){window.alert("Server Unresponsive")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}I[0],I[1],Object(n.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[]);var Q=function(e){e&&S(y+1),C(null);var t=a+1;t<N.length?l(t):f(!0)},_=function(){var e=!1;N[a].choices[L]===N[a].rightChoice&&Q(e=!0),Q(e)};return Object(h.jsxs)("div",{children:[(null===N||void 0===N?void 0:N.length)>0?Object(h.jsx)("h1",{children:"Good Luck"}):Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"Welcome to the Quiz App"})}),Object(h.jsx)("div",{className:"",children:p?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"app-score",children:[Object(h.jsx)("div",{className:"score-section ",children:Object(h.jsxs)("span",{children:["You scored ",y," out of ",N.length," (",y/N.length*100,"%)"]})}),Object(h.jsx)("button",{className:"retry-button",onClick:function(){window.location.reload(!1)},children:"Retry!"})]}),Object(h.jsx)("div",{className:"answers",children:Object(h.jsx)(O,{list:N})})]}):N.length>0?Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("div",{className:"question-section",children:[Object(h.jsxs)("div",{className:"question-count",children:[Object(h.jsxs)("span",{children:["Question ",a+1]}),"/",N.length]}),Object(h.jsx)("div",{className:"question-text",children:N[a].questionString})]}),Object(h.jsxs)("div",{className:"answer-section",children:[N[a].choices.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"radio",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"radiobutton",value:t,onChange:function(e){return C(e.target.value)}}),N[a].choices[t]]})})},t)})),a===N.length-1?Object(h.jsx)("button",{onClick:_,children:"Submit Quiz"}):Object(h.jsx)("div",{children:null!==L?Object(h.jsx)("button",{type:"submit",className:"btn btn-default",onClick:_,children:"Next"}):Object(h.jsx)("div",{})})]})]}):Object(h.jsx)("div",{className:"",children:Object(h.jsx)(u.a,{type:"Bars",color:"##A9A9A9",height:80,width:80})})})]})},p=c(7),f=function(e,t){switch(console.log(t,t.payload),t.type){case"SET_QUIZLIST_ARRAY":return Object(p.a)(Object(p.a)({},e),{},{quizListArray:t.payload});default:return e}},m=function(e){var t=Object(n.useReducer)(f,{quizListArray:[]}),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(h.jsx)(b.Provider,{value:{quizListArray:s.quizListArray,SET_QUIZLIST_ARRAY:function(e){i({type:"SET_QUIZLIST_ARRAY",payload:e})}},children:e.children})},g=c(4);var y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"social",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("a",{href:"https://www.linkedin.com/in/saneel-daniel/",class:"icon-block",children:Object(h.jsx)(g.c,{size:30,style:{fill:"black"}})}),Object(h.jsx)("a",{href:"https://github.com/SaneelDaniel",class:"icon-block",children:Object(h.jsx)(g.a,{size:30,style:{fill:"black"}})}),Object(h.jsx)("a",{href:"mailto:saneel.daniel07@gmail.com",class:"icon-block",children:Object(h.jsx)(g.b,{size:30,style:{fill:"black"}})}),Object(h.jsx)("a",{href:"http://danielsaneeldennis--portfolio.web.app/",class:"icon-block",children:Object(h.jsx)(g.d,{size:30,style:{fill:"black"}})})]})}),Object(h.jsx)("ul",{className:"copyright",children:Object(h.jsx)("span",{children:"\xa9 2021 Saneel Daniel "})})]})};function S(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(v,{}),Object(h.jsx)(y,{})]})}var w=function(){return Object(h.jsx)(m,{children:Object(h.jsx)(S,{})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),A()}},[[39,1,2]]]);
//# sourceMappingURL=main.f8ec1c65.chunk.js.map
(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(10),r=n.n(s),c=n(2),a=n(3),o=n(5),i=n(4),l=n(1),u=n.n(l),d=(n(16),n(17),n(7)),h=n(11),p=n(6),j=n.n(p),b=(n(19),n(9)),m=n.n(b),f=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){return e.json()}))},v=n(0),O=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],input:"",select:""},e.handleChange=function(t){var n=t.target.value;e.setState({input:n})},e.handleSelectChange=function(t){var n=t.target.value;e.setState({select:n})},e.getPreparedTodos=function(){var t=e.state,n=t.todos,s=t.input,r=t.select,c=s.toLowerCase(),a=Object(h.a)(n);switch(s&&(a=n.filter((function(e){return e.title.toLowerCase().includes(c)}))),r){case"completed":return a.filter((function(e){return e.completed}));case"not":return a.filter((function(e){return!e.completed}));default:return a}},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.input,s=t.select,r=this.getPreparedTodos();return Object(v.jsxs)("div",{className:"TodoList",children:[Object(v.jsx)("h2",{children:"Todos:"}),Object(v.jsxs)("label",{htmlFor:"input",children:["Filter by Title:"," ",Object(v.jsx)("input",{type:"text",name:"input",id:"input",value:n,onChange:this.handleChange}),"  ",Object(v.jsxs)("select",{name:"select",value:s,onChange:this.handleSelectChange,children:[Object(v.jsx)("option",{value:"all",children:"All"}),Object(v.jsx)("option",{value:"completed",children:"Completed"}),Object(v.jsx)("option",{value:"not",children:"Not completed"})]})]}),Object(v.jsx)("div",{className:"TodoList__list-container",children:Object(v.jsx)("ul",{className:"TodoList__list",children:r.map((function(t){return Object(v.jsxs)("li",{className:m()("TodoList__item",{"TodoList__item--unchecked":!t.completed,"TodoList__item--checked":t.completed}),children:[Object(v.jsxs)("label",{htmlFor:"".concat(t.id),children:[Object(v.jsx)("input",{type:"checkbox",id:"".concat(t.id),checked:t.completed}),Object(v.jsx)("p",{children:t.title})]}),Object(v.jsxs)("button",{className:m()("TodoList__user-button","button",{"TodoList__user- button--selected":t.userId===e.props.userId}),type:"button",onClick:function(){return e.props.selectUser(t.userId)},children:["User #",t.userId]})]},t.id)}))})})]})}}]),n}(u.a.Component),x=(n(21),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=this.props.userId,f("users/".concat(n));case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=this.props.removeUser;return Object(v.jsx)(v.Fragment,{children:e?Object(v.jsxs)("div",{className:"CurrentUser",children:[Object(v.jsx)("h2",{className:"CurrentUser__title",children:Object(v.jsxs)("span",{children:["Selected user:",e.id]})}),Object(v.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(v.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(v.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(v.jsx)("button",{type:"button",onClick:t,children:"Clear"})]}):Object(v.jsx)("p",{style:{color:"red"},children:" User not found "})})}}]),n}(u.a.Component)),_=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.handleClear=function(){e.selectUser(0)},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.selectedUserId;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("div",{className:"App__sidebar",children:Object(v.jsx)(O,{selectUser:this.selectUser,userId:e})}),Object(v.jsx)("div",{className:"App__content",children:Object(v.jsx)("div",{className:"App__content-container",children:e?Object(v.jsx)(x,{userId:e,removeUser:this.handleClear}):"No user selected"})})]})}}]),n}(u.a.Component),y=_;r.a.render(Object(v.jsx)(y,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.148c864d.chunk.js.map
(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{107:function(e,t){},109:function(e,t){},143:function(e,t){},144:function(e,t){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),l=n.n(c),i=(n(98),n(99),n(5)),o=n(29),u=n(92),s=n(89),m="ITEM_ADD",p="ITEM_REMOVE",f="ITEM_SET_STATUS",d="ITEM_SET_FILTER",v="PAGE_SET",E="STATE_SET",g={items:[],items_filter:"all",page:"home"};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=n(90),y={set:function(e){try{return localStorage.setItem("state",JSON.stringify(e))}catch(t){return null}},get:function(){try{return void 0===localStorage.state?{}:JSON.parse(localStorage.getItem("state"))}catch(e){return localStorage.setItem("state",JSON.stringify({})),{}}}},N=n(91);function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:m,title:e,url:t,completed:!1,id:Object(N.v4)()}}var k=Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object.assign({},e,t.state);case f:return b({},e,{items:e.items.map(function(e){return t.id===e.id?b({},e,{completed:t.completed}):e})});case p:return b({},e,{items:e.items.filter(function(e){return e.id!==t.id})});case m:return b({},e,{items:[].concat(Object(u.a)(e.items),[{title:t.title,url:t.url,completed:t.completed,id:t.id}])});case d:return b({},e,{items_filter:t.filter});case v:return b({},e,{page:t.page});default:return e}},Object.assign({},g,y.get()));window.onstorage=function(e){var t,n=e.key,a=e.newValue;"state"===n&&k.dispatch((t=JSON.parse(a),{type:E,state:t}))},k.subscribe(Object(O.throttle)(function(){y.set(k.getState())}));var S=k;var w=function(e){var t=e.children;return r.a.createElement(i.a,{store:S},t)};n(186);var I=function(){return r.a.createElement("div",{className:"app-bar-container"},r.a.createElement("h1",{className:"app-bar-title"},"TODO App"))},T=(n(187),[{title:"home",key:"home",icon:"home"},{title:"add",key:"add",icon:"plus"},{title:"info",key:"info",icon:"info"}]);var P=function(e){var t=e.page,n=e.setPage;return r.a.createElement("ul",{className:"navigation-container"},T.map(function(e){var a=e.key,c=e.icon,l=e.title;return r.a.createElement("li",{key:a,className:a===t?"active":"",onClick:function(){return n(a)}},r.a.createElement("i",{className:"fa fa-"+c}),r.a.createElement("span",null,l))}))},_=Object(i.b)(function(e){return{page:e.page}},function(e){return{setPage:function(t){return e(function(e){return{type:v,page:e}}(t))}}})(P);n(188),n(189);var A=function(e){var t=e.item,n=e.removeItem,a=e.setItemStatus,c=t.url,l=t.title,i=t.id,o=t.completed;return r.a.createElement("div",{className:"todo-item"},void 0===c||""===c?r.a.createElement("span",null,l):r.a.createElement("a",{href:c},l),r.a.createElement("div",{className:"todo-item-options"},r.a.createElement("span",{className:"todo-item-delete",onClick:function(){n(i)}},r.a.createElement("i",{className:"fa fa-times"})),r.a.createElement("span",{onClick:function(){a(i,!o)},className:"todo-item-complete"},r.a.createElement("i",{className:"fa "+(o?"fa-check-double":"fa-check")}))))},C=Object(i.b)(function(e){return{}},function(e){return{removeItem:function(t){return e(function(e){return{type:p,id:e}}(t))},setItemStatus:function(t,n){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:f,id:e,completed:t}}(t,n))}}})(A);n(190);var D=function(e){var t=e.items,n=t.filter(function(e){return e.completed}).reverse(),a=t.filter(function(e){return!e.completed}).reverse();return r.a.createElement("div",{className:"page-home"},r.a.createElement("div",{className:"card page-home-pending"},r.a.createElement("h1",{className:"card-title"},r.a.createElement("span",null,"Pending tasks"),r.a.createElement("span",null,a.length," items")),a.map(function(e){return r.a.createElement(C,{key:e.id,item:e})}),0===a.length?r.a.createElement("div",{className:"empty-list"},r.a.createElement("i",{className:"fa fa-meh"}),r.a.createElement("span",null,"list is empty")):null),r.a.createElement("div",{className:"card page-home-completed"},r.a.createElement("h1",{className:"card-title"},r.a.createElement("span",null,"Completed tasks"),r.a.createElement("span",null,n.length," items")),n.map(function(e){return r.a.createElement(C,{key:e.id,item:e})}),0===n.length?r.a.createElement("div",{className:"empty-list"},r.a.createElement("i",{className:"fa fa-meh"}),r.a.createElement("span",null,"list is empty")):null))},J=Object(i.b)(function(e){return{items:e.items}},function(e){return{}})(D),M=n(50);n(191);var x=function(e){var t=e.placeholder,n=e.onChange,a=e.value;return r.a.createElement("div",{className:"material-input"},r.a.createElement("input",{type:"text",value:a,onChange:n}),r.a.createElement("div",null),void 0!==t&&""===a?r.a.createElement("span",null,t):null)};n(192);var R=function(e){var t=e.addItem,n=Object(a.useState)(""),c=Object(M.a)(n,2),l=c[0],i=c[1],o=Object(a.useState)(""),u=Object(M.a)(o,2),s=u[0],m=u[1];return r.a.createElement("div",{className:"page-add"},r.a.createElement("div",{className:"card page-add-container"},r.a.createElement("h1",{className:"card-title"},"Add new task"),r.a.createElement(x,{placeholder:"task title",value:l,onChange:function(e){var t=e.target;return i(t.value)}}),r.a.createElement("br",null),r.a.createElement(x,{placeholder:"task url (optional)",value:s,onChange:function(e){var t=e.target;return m(t.value)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){""!==l.trim()&&(t(l.trim(),s.trim()),i(""),m(""))},className:"btn btn-primary"},"Add")))},V=Object(i.b)(function(e){return{}},function(e){return{addItem:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e(j(t,n))}}})(R);n(193);var W=function(){return r.a.createElement("div",{className:"page-info"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-title"},"About this App"),r.a.createElement("p",null,"This is a progressive web app with react and redux technologies.")))},B=[{page:"home",component:J},{page:"add",component:V},{page:"info",component:Object(i.b)(function(e){return{}},function(e){return{}})(W)}];var F=function(e){var t,n=e.page,a=B.filter(function(e){return e.page===n});return t=0===a.length?B[0].component:a[0].component,r.a.createElement("div",{className:"content"},r.a.createElement(t,null))},G=Object(i.b)(function(e){return{page:e.page}},function(e){return{}})(F);l.a.render(r.a.createElement(w,null,r.a.createElement(I,null),r.a.createElement(G,null),r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("".concat("/todo","/sw.js")).then(function(e){}).catch(function(e){})},93:function(e,t,n){e.exports=n(194)},99:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.85e7177c.chunk.js.map
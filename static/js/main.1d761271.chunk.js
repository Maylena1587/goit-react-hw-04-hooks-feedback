(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__3BDe4",item:"Statistics_item__3f5Tw"}},,,,function(e,t,n){e.exports={section:"Section_section__56ohy",title:"Section_title__1Sj3D"}},,function(e,t,n){e.exports={container:"Container_container__6cNz2"}},function(e,t,n){e.exports={btn:"Controls_btn__25O2A",feedbackBtns:"Controls_feedbackBtns__eulXw"}},function(e,t,n){e.exports={notification:"Notification_notification__2XU1f"}},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(7),s=n.n(r),o=(n(16),n(4)),l=n(8),u=n.n(l);function d(e){var t=e.children;return Object(c.jsx)("div",{className:u.a.container,children:t})}var b=n(6),j=n.n(b);var f=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:j.a.section,children:[Object(c.jsx)("p",{className:j.a.title,children:t}),n]})},h=n(3),O=n.n(h),x=n(9),m=n.n(x);function _(e){var t=e.options,n=e.clickHandler;return t.map((function(e){return function(e){var t=e.feedbackType,n=e.clickHandler;return Object(c.jsx)("button",{className:m.a.btn,"data-action":t,onClick:n,children:t},t)}({feedbackType:e,clickHandler:n})}))}var v=_;_.propTypes={options:O.a.arrayOf(O.a.string).isRequired,clickHandler:O.a.func.isRequired};var p=n(2),k=n.n(p);var g=function(e){var t=e.good,n=e.neutral,i=e.bad,r=e.total,s=e.percent;return Object(c.jsx)(a.Fragment,{children:Object(c.jsxs)("ul",{className:k.a.list,children:[Object(c.jsxs)("li",{className:k.a.item,children:["Good: ",t]}),Object(c.jsxs)("li",{className:k.a.item,children:["Neutral: ",n]}),Object(c.jsxs)("li",{className:k.a.item,children:["Bad: ",i]}),Object(c.jsxs)("li",{className:k.a.item,children:["Total: ",r]}),Object(c.jsxs)("li",{className:k.a.item,children:["Positive feedback: ",s,"%"]})]})})},N=n(10),S=n.n(N);var w=function(e){var t=e.message;return Object(c.jsx)("div",{className:S.a.notification,children:t})};var C=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(0),s=Object(o.a)(r,2),l=s[0],u=s[1],b=Object(a.useState)(0),j=Object(o.a)(b,2),h=j[0],O=j[1],x=function(){return n+l+h};return Object(c.jsxs)(d,{children:[Object(c.jsx)(f,{title:"Please leave feedback",children:Object(c.jsx)(v,{options:["good","neutral","bad"],clickHandler:function(e){var t=e.target;switch(t.dataset.action){case"good":i((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":O((function(e){return e+1}))}t.blur()}})}),Object(c.jsx)(f,{title:"Statistics",children:0!==x()?Object(c.jsx)(g,{good:n,neutral:l,bad:h,total:x(),percent:function(){var e=x();return e?+(n/e*100).toFixed(0):0}()}):Object(c.jsx)(w,{message:"No feedback given"})})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),T()}],[[19,1,2]]]);
//# sourceMappingURL=main.1d761271.chunk.js.map
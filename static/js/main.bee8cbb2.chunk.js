(this["webpackJsonptest-radency_list-of-lawers"]=this["webpackJsonptest-radency_list-of-lawers"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var s=t(2),r=t.n(s),c=t(5),n=t.n(c),i=(t(11),t(4)),l=t(6),o=(t(12),t(1)),b=t.n(o),d=function(e){var a=function(e){var a;switch(e){case"alabama":a="AL";break;case"alaska":a="AK";break;case"arizona":a="AZ";break;case"arkansas":a="AR";break;case"california":a="CA";break;case"colorado":a="CO";break;case"connecticut":a="CT";break;case"delaware":a="DE";break;case"florida":a="FL";break;case"georgia":a="GA";break;case"hawaii":a="HI";break;case"idaho":a="ID";break;case"illinois":a="IL";break;case"indiana":a="IN";break;case"iowa":a="IA";break;case"kansas":a="KS";break;case"kentucky":a="KY";break;case"louisiana":a="LA";break;case"maine":a="ME";break;case"maryland":a="MD";break;case"massachusetts":a="MA";break;case"michigan":a="MI";break;case"minnesota":a="MN";break;case"mississippi":a="MS";break;case"missouri":a="MO";break;case"montana":a="MT";break;case"nebraska":a="NE";break;case"nevada":a="NV";break;case"new hampshire":a="NH";break;case"new jersey":a="NJ";break;case"new mexico":a="NM";break;case"new york":a="NY";break;case"north carolina":a="NC";break;case"north dakota":a="ND";break;case"ohio":a="OH";break;case"oklahoma":a="OK";break;case"oregon":a="OR";break;case"pennsylvania":a="PA";break;case"rhode island":a="RI";break;case"south carolina":a="SC";break;case"south dakota":a="SD";break;case"tennessee":a="TN";break;case"texas":a="TX";break;case"utah":a="UT";break;case"vermont":a="VT";break;case"virginia":a="VA";break;case"washington ":a="WA";break;case"west virginia":a="WV";break;case"wisconsin":a="WI";break;case"wyoming":a="WY";break;default:a="Wrong states name"}return a};return e.includes(",")?e.split(",").map((function(e){return e.trim()})).map((function(e){return e.length>2?a(e):e.toUpperCase()})).join(" | "):e.length>2?a(e):void 0},h=function(e,a){var t=e.findIndex((function(e){return e.id!==a.id&&(e.phone===a.phone||e.email.toLowerCase()===a.email.toLowerCase())}))+1;return 0===t?"":t},m=function(e){var a=new Date,t=new Date(e),s=/\d{2}[/]\d{2}[/]\d{4}/.test(e)||/\d{4}-\d{2}-\d{2}/.test(e);return t.getTime()>a.getTime()&&s},j=(t(13),t(0)),_=function(e){var a=e.contacts;return a.length>0&&Object(j.jsx)("section",{className:"list",children:Object(j.jsxs)("table",{className:"table list__table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"table__row",children:"ID"}),Object(j.jsx)("th",{className:"table__row",children:"Full Name"}),Object(j.jsx)("th",{className:"table__row",children:"Phone"}),Object(j.jsx)("th",{className:"table__row",children:"Email"}),Object(j.jsx)("th",{className:"table__row",children:"Age"}),Object(j.jsx)("th",{className:"table__row",children:"Experience"}),Object(j.jsx)("th",{className:"table__row",children:"Yearly Income"}),Object(j.jsx)("th",{className:"table__row",children:"Has children"}),Object(j.jsx)("th",{className:"table__row",children:"License states"}),Object(j.jsx)("th",{className:"table__row",children:"Expiration date"}),Object(j.jsx)("th",{className:"table__row",children:"License number"}),Object(j.jsx)("th",{className:"table__row",children:"Dublicate with"})]})}),Object(j.jsx)("tbody",{children:a.map((function(e,a,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"table__row",children:e.id}),Object(j.jsx)("td",{className:"table__row",children:e.name}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":"Wrong phone number"===e.phone}),children:e.phone}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e.email)}),children:e.email}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":e.age<21||(s=e.age,!((0^s)===s))}),children:e.age}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":e.experience<0||e.experience>e.age}),children:e.experience}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":e.income>1e6||e.income<0}),children:e.income.toFixed(2)}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":"TRUE"!==e.isChildren&&"FALSE"!==e.isChildren}),children:e.isChildren}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":"Wrong states name"===e.states||""===e.states}),children:e.states}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":!m(e.expiration)}),children:e.expiration}),Object(j.jsx)("td",{className:b()({table__row:!0,"table__row--invalid":!/\w{6}/.test(e.license)||6!==e.license.length}),children:e.license}),Object(j.jsx)("td",{className:"table__row",children:h(t,e)})]},e.id);var s}))})]})})};var u=function(){var e=Object(s.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(s.useState)(!0),n=Object(i.a)(c,2),o=n[0],b=n[1],h=Object(s.useRef)(void 0);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("a",{className:"header__logo",href:"https://www.radency.com/",children:Object(j.jsx)("img",{src:"logo.png",alt:"radency"})}),Object(j.jsx)("p",{className:"header__title",children:"software engineering"})]}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)("h1",{className:"main__title",children:"List of lawyers"}),Object(j.jsx)("input",{type:"file",accept:".csv",ref:h,style:{display:"none"},onChange:function(e){if(0!==Object.keys(e.target.files).length){var a=new FileReader;a.onload=function(){var e=a.result.toLowerCase(),t=Object(l.parse)(e,{header:!0});Object.keys(t.data[0]).reduce((function(e,a){return e+("full name"===a||"phone"===a||"email"===a?1:0)}),0)<3?b(!1):(b(!0),r(t.data.filter((function(e){return e["full name"]})).map((function(e,a){return{name:e["full name"].trim().toUpperCase(),phone:e.phone.trim().length>=10?e.phone.trim().padStart(12,"+1"):"Wrong phone number",email:e.email.trim(),age:e.age?+e.age:"",experience:e.experience?+e.experience:"",income:e["yearly income"]?+e["yearly income"]:0,isChildren:e["has children"]?e["has children"].trim().toUpperCase():"FALSE",states:e["license states"]?d(e["license states"].trim()):"",expiration:e["expiration date"]?e["expiration date"].trim():"",license:e["license number"]?e["license number"].trim():"",id:a+1}}))))},a.readAsText(e.target.files[0])}}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"main__file-selector",onClick:function(){h.current.click()},children:"Import users"}),o?Object(j.jsx)(_,{contacts:t}):Object(j.jsx)("p",{className:"main__invalid",children:"File format is not correct"})]})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(a){var t=a.getCLS,s=a.getFID,r=a.getFCP,c=a.getLCP,n=a.getTTFB;t(e),s(e),r(e),c(e),n(e)}))};n.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.bee8cbb2.chunk.js.map
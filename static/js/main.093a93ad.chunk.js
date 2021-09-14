(this["webpackJsonpnear-earth-asteroid"]=this["webpackJsonpnear-earth-asteroid"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"1":{"prev":null,"next":"Satellite Visualization","prevRoute":null,"nextRoute":"/sv"},"2":{"prev":"Introduction","next":"Near Earth Asteroids","prevRoute":"/introduction","nextRoute":"/neo"},"3":{"prev":"Near Earth Asteroids","next":null,"prevRoute":"/sv","nextRoute":null}}')},39:function(e,t,s){},59:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(15),r=s.n(a),i=(s(39),s(5)),l=s(0);function o(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("header",{id:"header",children:[Object(l.jsxs)("nav",{id:"header__left",children:[Object(l.jsx)(i.b,{to:"/",className:"header_element sv",children:"Satellite Visualization"}),Object(l.jsx)(i.b,{to:"/near-earth-asteroids",className:"header_element neo",children:"Near Earth Asteroids"}),Object(l.jsx)(i.b,{to:"/introduction",className:"header_element docs",children:"Documentation"})]}),Object(l.jsx)("nav",{id:"header__right",children:Object(l.jsx)("form",{action:"search",method:"GET",className:"d-block w-100",children:Object(l.jsx)("input",{type:"search",placeholder:"Search",name:"query",className:"searchInp"})})})]})})}var d=s(3);function j(e){var t=Object(n.useState)(null),s=Object(d.a)(t,2),c=s[0],a=s[1];function r(){var e=(new Date).getHours();a(e>=0&&e<12?"Morning":e>=12&&e<16?"Afternoon":"Evening")}return Object(n.useEffect)((function(){var e=setInterval((function(){r()}),6e4);return function(){return clearInterval(e)}}),[c]),null!==c?Object(l.jsxs)("h4",{className:"user-select-none",children:["Good ",c,"!"]}):(r(),Object(l.jsx)(l.Fragment,{}))}function b(e){var t=Object(n.useState)(null),s=Object(d.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(!1),i=Object(d.a)(r,2),o=i[0],j=i[1],b=Object(n.useState)([]),h=Object(d.a)(b,2),x=h[0],u=h[1],O=Object(n.useState)(!1),m=Object(d.a)(O,2),p=m[0],g=m[1],f=Object(n.useState)(null),v=Object(d.a)(f,2),N=v[0],y=v[1],_=new Date,k="https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(_.getFullYear(),"-").concat(_.getMonth()+1,"-").concat(_.getUTCDate(),"&end_date=").concat(_.getFullYear(),"-").concat(_.getMonth()+1,"-").concat(_.getUTCDate(),"&api_key=wDSucYIL2UXgbDlD0Yn8dvhgREVWn5DbqrbI6JbZ");function w(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(l.jsxs)(l.Fragment,{children:[x.map((function(e,t){return Object(l.jsxs)("div",{className:"asteroid_box",children:[Object(l.jsxs)("h5",{className:"mb-2",children:[Object(l.jsx)("span",{className:"user-select-none text-primary",children:"Name "}),e.name]}),Object(l.jsxs)("h5",{className:"mb-2",children:[Object(l.jsx)("span",{className:"user-select-none text-primary",children:"Close approach to earth "}),e.close_approach_data[0].close_approach_date_full.split(" ")[1]]}),Object(l.jsxs)("h5",{className:"mb-2",children:[Object(l.jsx)("span",{className:"user-select-none text-primary",children:"Miss distance "}),e.close_approach_data[0].miss_distance.kilometers," KM"]}),Object(l.jsxs)("h5",{className:"mb-2",children:[Object(l.jsx)("span",{className:"user-select-none text-primary",children:"Orbiting body "}),e.close_approach_data[0].orbiting_body]}),Object(l.jsxs)("div",{className:"mb-2",children:[Object(l.jsx)("h5",{className:"user-select-none text-primary mb-0",children:"Relative velocity"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"d-block",children:[e.close_approach_data[0].relative_velocity.kilometers_per_hour," KM/HOUR"]}),Object(l.jsx)("span",{className:"d-block"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"d-block",children:[e.close_approach_data[0].relative_velocity.kilometers_per_second," KM/SECOND"]}),Object(l.jsx)("span",{className:"d-block"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"d-block",children:[e.close_approach_data[0].relative_velocity.miles_per_hour," MILES/HOUR"]}),Object(l.jsx)("span",{className:"d-block"})]})]}),Object(l.jsxs)("h5",{className:"mb-2",children:[Object(l.jsx)("span",{className:"user-select-none text-primary",children:"Is potential threat "}),!0===e.is_potentially_hazardous_asteroid?"Yes":"No"]}),Object(l.jsxs)("h5",{className:"mb-2",children:[Object(l.jsx)("span",{className:"user-select-none text-primary",children:"Estimated diameter (max.) "}),e.estimated_diameter.kilometers.estimated_diameter_max," KM"]}),Object(l.jsxs)("h5",{className:"mb-0",children:[Object(l.jsx)("span",{className:"user-select-none text-primary",children:"Estimated diameter (min.) "}),e.estimated_diameter.kilometers.estimated_diameter_min," KM"]})]},t)})),!0===e&&Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("div",{className:"spinner-border my-auto",role:"status","aria-hidden":"true"})})]})}return Object(n.useEffect)((function(){if(null===N)fetch(k).then((function(e){return e.json()})).then((function(e){if(void 0!==e.near_earth_objects){var t=e.near_earth_objects["".concat(_.getFullYear(),"-").concat("0"+(_.getMonth()+1).toString(),"-").concat(_.getUTCDate())];x.length!==t.length?u(x.concat(t.slice(x.length,x.length+5))):g(!0),y(e),j(!0)}else a(e.error),j(!0)}),(function(e){a(e),j(!0)}));else{var e=N.near_earth_objects["".concat(_.getFullYear(),"-").concat("0"+(_.getMonth()+1).toString(),"-").concat(_.getUTCDate())];x.length!==e.length?u(x.concat(e.slice(x.length,x.length+5))):g(!0),j(!0)}}),[o]),Object(n.useEffect)((function(){function e(){var e=window.pageYOffset,t=window.innerHeight,s=document.body.offsetHeight;Math.max(s-(e+t),0)<300&&(p||j(!1))}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),c?Object(l.jsxs)("span",{children:["Error: ",c.message]}):o||p?void 0!==x?w():Object(l.jsx)(l.Fragment,{}):w(!0)}function h(e){Object(n.useEffect)((function(){document.title="Near Earth Asteroids"}),[]);var t=new Date,s="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getUTCDate());return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{className:"user-select-none",children:["Asteroids near Earth on ",s]}),Object(l.jsx)("div",{style:{marginTop:"20px"},children:Object(l.jsx)(b,{})})]})}var x=s(72),u=s(75),O=s(73),m=s(74),p=s(19),g=s(12),f=s.n(g).a.icon({iconUrl:"/near-earth-asteroid/logo192.png",iconRetinaUrl:"/near-earth-asteroid/logo192.png",iconAnchor:[5,55],popupAnchor:[10,-44],iconSize:[35,35]});function v(e){Object(n.useEffect)((function(){document.title="Satellite Visualization"}),[]);var t=Object(n.useState)(null),s=Object(d.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(null),i=Object(d.a)(r,2),o=i[0],j=i[1],b=Object(n.useState)(!1),h=Object(d.a)(b,2),g=h[0],v=h[1],N=Object(n.useState)("https://tle.ivanstanojevic.me/api/tle/"),y=Object(d.a)(N,2),_=y[0],k=y[1];return Object(n.useEffect)((function(){null!==o&&!1!==g||fetch(_).then((function(e){return e.json()})).then((function(e){j(null===o?e.member:o.concat(e.member)),k(e.view.next),v(!0)}),(function(e){a(e)}))}),[g]),c?Object(l.jsxs)("span",{children:["Error: ",c.message]}):null===o?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("div",{className:"spinner-border my-auto",role:"status","aria-hidden":"true"})})}):null!==o?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn btn-primary btn-sm",style:{boxShadow:"none",backgroundColor:"var(--outline)",borderColor:"var(--outline)"},onClick:function(){v(!1)},children:"Load more satellite data"}),Object(l.jsxs)("small",{style:{fontSize:"0.83em"},className:"user-select-none mx-2",children:[Object(l.jsx)("i",{className:"fw-bold",children:"Pro tip"})," Click on a satellite to know about it"]}),Object(l.jsxs)(x.a,{center:[0,0],zoom:2,scrollWheelZoom:!0,worldCopyJump:!0,className:"mb-3 mt-3",children:[Object(l.jsx)(u.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(O.a,{position:[Object(p.getLatLngObj)(e.line1+"\n"+o[0].line2).lat,Object(p.getLatLngObj)(o[0].line1+"\n"+e.line2).lng],icon:f,children:Object(l.jsxs)(m.a,{children:[Object(l.jsxs)("span",{className:"d-block",children:[Object(l.jsxs)("span",{className:"text-primary",children:["Name"," "]}),Object(l.jsx)("span",{children:e.name})]}),Object(l.jsxs)("span",{className:"d-block",children:[Object(l.jsxs)("span",{className:"text-primary",children:["Satellite ID"," "]}),Object(l.jsx)("span",{children:e.satelliteId})]}),Object(l.jsxs)("span",{className:"d-block",children:[Object(l.jsxs)("span",{className:"text-primary",children:["Latitude"," "]}),Object(l.jsx)("span",{children:Object(p.getLatLngObj)(e.line1+"\n"+e.line2).lat})]}),Object(l.jsxs)("span",{className:"d-block",children:[Object(l.jsxs)("span",{className:"text-primary",children:["Longitude"," "]}),Object(l.jsx)("span",{children:Object(p.getLatLngObj)(e.line1+"\n"+e.line2).lng})]})]})})},t)}))]})]}):Object(l.jsx)(l.Fragment,{})}function N(e){var t=new URLSearchParams(window.location.search).get("query");Object(n.useEffect)((function(){document.title="Search results for ".concat(t)}),[]);var s=Object(n.useState)(null),c=Object(d.a)(s,2),a=c[0],r=c[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),j=o[0],b=o[1],h=Object(n.useState)([]),x=Object(d.a)(h,2),u=(x[0],x[1]),O=new Date,m="https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(O.getFullYear(),"-").concat(O.getMonth()+1,"-").concat(O.getUTCDate(),"&end_date=").concat(O.getFullYear(),"-").concat(O.getMonth()+1,"-").concat(O.getUTCDate(),"&api_key=UWFXJdagMZAFM1H2d2f8DYhFeKyX6dlGz5NfmUgP");return Object(n.useEffect)((function(){fetch(m).then((function(e){return e.json()})).then((function(e){b(!0),u(e)}),(function(e){b(!0),r(e)}))}),[m]),a?Object(l.jsxs)("span",{children:["Error: ",a.message]}):j?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("h5",{children:["Search results for ",Object(l.jsx)("span",{className:"fw-bold",children:t})]})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("div",{className:"spinner-border my-auto",role:"status","aria-hidden":"true"})})})}var y=s(23);function _(e){var t=y[e.index].next,s=y[e.index].prev,n=y[e.index].nextRoute,c=y[e.index].prevRoute;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{className:"text-decoration-underline",children:["ATL SPACE CHALLENGE PROJECT UNDER ",Object(l.jsx)("a",{href:"http://aimapp2.aim.gov.in/atlspace/",rel:"noreferrer",target:"_blank",children:"EXPLORATION"})," CRITERION"]}),Object(l.jsx)("small",{className:"d-block mt-4 mb-4",children:"This is the documentation of the this website with all the resources present as links. Click on the links to go to its wikipedia page whenever necessary to you. There is also an index with the list of all the documentation pages."}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"There are two pages in this website"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:"Satellites Visualization"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/near-earth-asteroids",children:"Near Earth Asteroids"})})]})]}),Object(l.jsxs)("div",{className:"mt-4",children:[Object(l.jsx)("span",{children:"The website uses NASA's APIs to gather data. "}),Object(l.jsx)("a",{href:"https://en.wikipedia.org/wiki/API",target:"_blank",rel:"noreferrer",children:"Learn about APIs here"})]}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsxs)("span",{children:["This is a static website with no server side, instead, it uses a",Object(l.jsx)("a",{href:"https://en.wikipedia.org/wiki/User_interface",target:"_blank",rel:"noreferrer",children:" UI (User Interface)"})," library called",Object(l.jsx)("a",{href:"https://en.wikipedia.org/wiki/React_(JavaScript_library)",target:"_blank",rel:"noreferrer",children:" React.js"})]})}),Object(l.jsxs)("div",{className:"mt-4",children:[Object(l.jsx)("h4",{children:"Contributors"}),Object(l.jsxs)("div",{children:["Apoorva Kumar Shukla",Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/Apoorva-Shukla",target:"_blank",rel:"noreferrer",children:" Github Profile"})}),Object(l.jsxs)("li",{children:["Email",Object(l.jsx)("a",{href:"mailto:apoorva210907@gmail.com",target:"_blank",rel:"noreferrer",children:" apoorva210907@gmail.com"})]})]})]})]})]}),Object(l.jsxs)("div",{className:"d-flex mt-5",children:[null!==s?Object(l.jsxs)(i.b,{to:c,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},children:["Previous - ",s]}):Object(l.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},disabled:!0,children:"Previous"}),null!==t?Object(l.jsxs)(i.b,{to:n,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},children:["Next - ",t]}):Object(l.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},disabled:!0,children:"Next"})]})]})}var k=s(23);function w(e){var t=k[e.index].next,s=k[e.index].prev,n=k[e.index].nextRoute,c=k[e.index].prevRoute;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"text-decoration-underline",children:"Satellite Visualization"})}),Object(l.jsxs)("div",{className:"d-flex mt-5",children:[null!==s?Object(l.jsxs)(i.b,{to:c,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},children:["Previous - ",s]}):Object(l.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},disabled:!0,children:"Previous"}),null!==t?Object(l.jsxs)(i.b,{to:n,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},children:["Next - ",t]}):Object(l.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},disabled:!0,children:"Next"})]})]})}var R=s(23);function S(e){var t=R[e.index].next,s=R[e.index].prev,n=R[e.index].nextRoute,c=R[e.index].prevRoute;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"text-decoration-underline",children:"Near Earth Asteroids"})}),Object(l.jsxs)("div",{className:"d-flex mt-5",children:[null!==s?Object(l.jsxs)(i.b,{to:c,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},children:["Previous - ",s]}):Object(l.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},disabled:!0,children:"Previous"}),null!==t?Object(l.jsxs)(i.b,{to:n,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},children:["Next - ",t]}):Object(l.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},disabled:!0,children:"Next"})]})]})}function E(e){return Object(l.jsx)(l.Fragment,{children:!0===e.highlight?Object(l.jsxs)(i.b,{className:"d-flex text-decoration-none text-dark sidebar__link sidebar__link_highlight",to:e.route,children:[Object(l.jsx)("div",{style:{width:"50px"},children:e.icon}),Object(l.jsx)("div",{children:Object(l.jsx)("span",{style:{flex:1,width:"100%",display:"block",textOverflow:"ellipsis"},children:e.label})})]}):Object(l.jsxs)(i.b,{className:"d-flex text-decoration-none text-dark sidebar__link",to:e.route,children:[Object(l.jsx)("div",{style:{width:"50px"},children:e.icon}),Object(l.jsx)("div",{children:Object(l.jsx)("span",{style:{flex:1,width:"100%",display:"block",textOverflow:"ellipsis"},children:e.label})})]})})}var L=s(29),A=s.n(L),F=s(30),I=s.n(F),M=s(28),D=s.n(M);function C(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("aside",{id:"aside",children:Object(l.jsxs)("div",{id:"aside__fluid",className:"border px-2 py-2",style:{borderRadius:"7px"},children:[Object(l.jsx)("span",{className:"sidebar__link mb-2 d-block bg-white",children:"Index"}),1===e.index?Object(l.jsx)(E,{label:"Introduction",route:"/introduction",icon:Object(l.jsx)(D.a,{}),highlight:!0}):Object(l.jsx)(E,{label:"Introduction",route:"/introduction",icon:Object(l.jsx)(D.a,{})}),2===e.index?Object(l.jsx)(E,{label:"Satellite Visualization",route:"/sv",icon:Object(l.jsx)(A.a,{}),highlight:!0}):Object(l.jsx)(E,{label:"Satellite Visualization",route:"/sv",icon:Object(l.jsx)(A.a,{})}),3===e.index?Object(l.jsx)(E,{label:"Near Earth Asteroids",route:"/neo",icon:Object(l.jsx)(I.a,{}),highlight:!0}):Object(l.jsx)(E,{label:"Near Earth Asteroids",route:"/neo",icon:Object(l.jsx)(I.a,{})})]})})})}var U=s(4);var T=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"container mt-3",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(U.c,{children:[Object(l.jsx)(U.a,{path:"/",exact:!0,component:v}),Object(l.jsx)(U.a,{path:"/near-earth-asteroids",exact:!0,component:h}),Object(l.jsx)(U.a,{path:"/introduction",children:Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)(C,{index:1}),Object(l.jsx)("div",{style:{marginLeft:"20px",flex:1},children:Object(l.jsx)(_,{sidebar:!0,index:1})})]})}),Object(l.jsx)(U.a,{path:"/sv",children:Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)(C,{index:2}),Object(l.jsx)("div",{style:{marginLeft:"20px",flex:1},children:Object(l.jsx)(w,{sidebar:!0,index:2})})]})}),Object(l.jsx)(U.a,{path:"/neo",children:Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)(C,{index:3}),Object(l.jsx)("div",{style:{marginLeft:"20px",flex:1},children:Object(l.jsx)(S,{sidebar:!0,index:3})})]})}),Object(l.jsx)(U.a,{path:"/search",component:N})]})]})]})})};s(57);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.093a93ad.chunk.js.map
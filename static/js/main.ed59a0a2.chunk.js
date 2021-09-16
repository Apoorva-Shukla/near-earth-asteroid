(this["webpackJsonpnear-earth-asteroid"]=this["webpackJsonpnear-earth-asteroid"]||[]).push([[0],{54:function(e){e.exports=JSON.parse('{"1":{"prev":null,"next":"Satellite Visualization","prevRoute":null,"nextRoute":"/sv"},"2":{"prev":"Introduction","next":"Near Earth Asteroids","prevRoute":"/introduction","nextRoute":"/neo"},"3":{"prev":"Near Earth Asteroids","next":null,"prevRoute":"/sv","nextRoute":null}}')},73:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(6),r=s.n(a),i=(s(73),s(7)),l=s(34),o=s(126),d=s(128),j=s(133),b=s(61),h=s.n(b),x=s(134),u=s(132),m=s(124),O=s(26),p=s(63),g=s.n(p),f=s(12),v=s(1),N=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"20ch","&:focus":{width:"50ch"}})}}));function y(){var e=N(),t=n.a.useState(null),s=Object(i.a)(t,2),c=s[0],a=s[1],r=function(){a(null)};return Object(v.jsx)("div",{className:e.root,children:Object(v.jsx)(o.a,{position:"static",className:"bg-success",children:Object(v.jsxs)(d.a,{className:"d-flex",style:{justifyContent:"space-between"},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(j.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},children:Object(v.jsx)(h.a,{})}),Object(v.jsxs)(u.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:r,children:[Object(v.jsx)(f.b,{className:"text-dark py-2 d-block px-3",to:"/",onClick:r,children:"Satellite Visualization"}),Object(v.jsx)(f.b,{className:"text-dark py-2 d-block px-3",to:"/near-earth-asteroids",onClick:r,children:"Near Earth Asteroids"}),Object(v.jsx)(f.b,{className:"text-dark py-2 d-block px-3",to:"/introduction",onClick:r,children:"Documentation"})]})]}),Object(v.jsxs)("div",{className:e.search,children:[Object(v.jsx)("div",{className:e.searchIcon,children:Object(v.jsx)(g.a,{})}),Object(v.jsx)(x.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})},"left")}function k(e){var t=Object(c.useState)(null),s=Object(i.a)(t,2),n=s[0],a=s[1];function r(){var e=(new Date).getHours();a(e>=0&&e<12?"Morning":e>=12&&e<16?"Afternoon":"Evening")}return Object(c.useEffect)((function(){var e=setInterval((function(){r()}),6e4);return function(){return clearInterval(e)}}),[n]),null!==n?Object(v.jsxs)("h4",{className:"user-select-none",children:["Good ",n,"!"]}):(r(),Object(v.jsx)(v.Fragment,{}))}function _(e){var t=Object(c.useState)(null),s=Object(i.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(c.useState)([]),b=Object(i.a)(j,2),h=b[0],x=b[1],u=Object(c.useState)(!1),m=Object(i.a)(u,2),O=m[0],p=m[1],g=Object(c.useState)(null),f=Object(i.a)(g,2),N=f[0],y=f[1],k=new Date,_="https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(k.getFullYear(),"-").concat(k.getMonth()+1,"-").concat(k.getUTCDate(),"&end_date=").concat(k.getFullYear(),"-").concat(k.getMonth()+1,"-").concat(k.getUTCDate(),"&api_key=wDSucYIL2UXgbDlD0Yn8dvhgREVWn5DbqrbI6JbZ");function w(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(v.jsxs)(v.Fragment,{children:[h.map((function(e,t){return Object(v.jsxs)("div",{className:"asteroid_box",children:[Object(v.jsxs)("h5",{className:"mb-2",children:[Object(v.jsx)("span",{className:"user-select-none text-success fw-bold",children:"Name "}),e.name]}),Object(v.jsxs)("h5",{className:"mb-2",children:[Object(v.jsx)("span",{className:"user-select-none text-success fw-bold",children:"Close approach to earth "}),e.close_approach_data[0].close_approach_date_full.split(" ")[1]]}),Object(v.jsxs)("h5",{className:"mb-2",children:[Object(v.jsx)("span",{className:"user-select-none text-success fw-bold",children:"Miss distance "}),e.close_approach_data[0].miss_distance.kilometers," KM"]}),Object(v.jsxs)("h5",{className:"mb-2",children:[Object(v.jsx)("span",{className:"user-select-none text-success fw-bold",children:"Orbiting body "}),e.close_approach_data[0].orbiting_body]}),Object(v.jsxs)("div",{className:"mb-2",children:[Object(v.jsx)("h5",{className:"user-select-none text-success fw-bold mb-0",children:"Relative velocity"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("span",{className:"d-block",children:[e.close_approach_data[0].relative_velocity.kilometers_per_hour," KM/HOUR"]}),Object(v.jsx)("span",{className:"d-block"})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("span",{className:"d-block",children:[e.close_approach_data[0].relative_velocity.kilometers_per_second," KM/SECOND"]}),Object(v.jsx)("span",{className:"d-block"})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("span",{className:"d-block",children:[e.close_approach_data[0].relative_velocity.miles_per_hour," MILES/HOUR"]}),Object(v.jsx)("span",{className:"d-block"})]})]}),Object(v.jsxs)("h5",{className:"mb-2",children:[Object(v.jsx)("span",{className:"user-select-none text-success fw-bold",children:"Is potential threat "}),!0===e.is_potentially_hazardous_asteroid?"Yes":"No"]}),Object(v.jsxs)("h5",{className:"mb-2",children:[Object(v.jsx)("span",{className:"user-select-none text-success fw-bold",children:"Estimated diameter (max.) "}),e.estimated_diameter.kilometers.estimated_diameter_max," KM"]}),Object(v.jsxs)("h5",{className:"mb-0",children:[Object(v.jsx)("span",{className:"user-select-none text-success fw-bold",children:"Estimated diameter (min.) "}),e.estimated_diameter.kilometers.estimated_diameter_min," KM"]})]},t)})),!0===e&&Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("div",{className:"spinner-border my-auto",role:"status","aria-hidden":"true"})})]})}return Object(c.useEffect)((function(){if(null===N)fetch(_).then((function(e){return e.json()})).then((function(e){if(void 0!==e.near_earth_objects){var t=e.near_earth_objects["".concat(k.getFullYear(),"-").concat("0"+(k.getMonth()+1).toString(),"-").concat(k.getUTCDate())];h.length!==t.length?x(h.concat(t.slice(h.length,h.length+5))):p(!0),y(e),d(!0)}else a(e.error),d(!0)}),(function(e){a(e),d(!0)}));else{var e=N.near_earth_objects["".concat(k.getFullYear(),"-").concat("0"+(k.getMonth()+1).toString(),"-").concat(k.getUTCDate())];h.length!==e.length?x(h.concat(e.slice(h.length,h.length+5))):p(!0),d(!0)}}),[o]),Object(c.useEffect)((function(){function e(){var e=window.pageYOffset,t=window.innerHeight,s=document.body.offsetHeight;Math.max(s-(e+t),0)<300&&(O||d(!1))}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),n?Object(v.jsxs)("span",{children:["Error: ",n.message]}):o||O?void 0!==h?w():Object(v.jsx)(v.Fragment,{}):w(!0)}function w(e){Object(c.useEffect)((function(){document.title="Near Earth Asteroids"}),[]);var t=new Date,s="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getUTCDate());return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{className:"user-select-none",children:["Asteroids near Earth on ",s]}),Object(v.jsx)("div",{style:{marginTop:"20px"},children:Object(v.jsx)(_,{})})]})}var R=s(129),S=s(135),E=s(130),L=s(131),C=s(43),I=s(19),M=s.n(I),A=M.a.icon({iconUrl:"/near-earth-asteroid/logo192.png",iconRetinaUrl:"/near-earth-asteroid/logo192.png",iconAnchor:[5,55],popupAnchor:[10,-44],iconSize:[35,35]});function F(e){Object(c.useEffect)((function(){document.title="Satellite Visualization"}),[]);var t=Object(c.useState)(null),s=Object(i.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(null),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(c.useState)(!1),b=Object(i.a)(j,2),h=b[0],x=b[1],u=Object(c.useState)("https://tle.ivanstanojevic.me/api/tle/"),m=Object(i.a)(u,2),O=m[0],p=m[1];return Object(c.useEffect)((function(){null!==o&&!1!==h||fetch(O).then((function(e){return e.json()})).then((function(e){d(null===o?e.member:o.concat(e.member)),p(e.view.next),x(!0)}),(function(e){a(e)}))}),[h]),n?Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsxs)("span",{children:["Error: ",n.message]})}):null===o?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("div",{className:"spinner-border my-auto",role:"status","aria-hidden":"true"})})}):null!==o?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"container mt-3",children:[Object(v.jsx)("button",{className:"my-btn",onClick:function(){x(!1)},children:"Load more satellite data"}),Object(v.jsxs)("small",{style:{fontSize:"0.83em"},className:"user-select-none mx-2",children:[Object(v.jsx)("i",{className:"fw-bold",children:"Pro tip"})," Click on a satellite to know about it"]})]}),Object(v.jsxs)(R.a,{center:[0,0],zoom:3,minZoom:3,doubleClickZoom:!1,scrollWheelZoom:!0,worldCopyJump:!0,className:"mt-3",maxBoundsViscosity:10,maxBounds:[M.a.latLng(-180,-180),M.a.latLng(180,180)],children:[Object(v.jsx)(S.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://api.mapbox.com/styles/v1/apoorva2107/cktmh18m1116m1arv4nyd92nj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXBvb3J2YTIxMDciLCJhIjoiY2t0bWg2aWY3MGJ4eTJuczhkM3RhNG9iMSJ9.BkZZ4x_Xy5ZBMb3a46uvHw"}),o.map((function(e,t){return Object(v.jsx)(E.a,{position:[Object(C.getLatLngObj)(e.line1+"\n"+o[0].line2).lat,Object(C.getLatLngObj)(o[0].line1+"\n"+e.line2).lng],icon:A,children:Object(v.jsxs)(L.a,{children:[Object(v.jsxs)("span",{className:"d-block",children:[Object(v.jsx)("span",{className:"text-primary",children:"Name "}),Object(v.jsx)("span",{children:e.name})]}),Object(v.jsxs)("span",{className:"d-block",children:[Object(v.jsxs)("span",{className:"text-primary",children:["Satellite ID"," "]}),Object(v.jsx)("span",{children:e.satelliteId})]}),Object(v.jsxs)("span",{className:"d-block",children:[Object(v.jsxs)("span",{className:"text-primary",children:["Latitude"," "]}),Object(v.jsx)("span",{children:Object(C.getLatLngObj)(e.line1+"\n"+e.line2).lat})]}),Object(v.jsxs)("span",{className:"d-block",children:[Object(v.jsxs)("span",{className:"text-primary",children:["Longitude"," "]}),Object(v.jsx)("span",{children:Object(C.getLatLngObj)(e.line1+"\n"+e.line2).lng})]})]})},t)}))]})]}):Object(v.jsx)(v.Fragment,{})}function D(e){var t=new URLSearchParams(window.location.search).get("query");Object(c.useEffect)((function(){document.title="Search results for ".concat(t)}),[]);var s=Object(c.useState)(null),n=Object(i.a)(s,2),a=n[0],r=n[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),d=o[0],j=o[1],b=Object(c.useState)([]),h=Object(i.a)(b,2),x=(h[0],h[1]),u=new Date,m="https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(u.getFullYear(),"-").concat(u.getMonth()+1,"-").concat(u.getUTCDate(),"&end_date=").concat(u.getFullYear(),"-").concat(u.getMonth()+1,"-").concat(u.getUTCDate(),"&api_key=UWFXJdagMZAFM1H2d2f8DYhFeKyX6dlGz5NfmUgP");return Object(c.useEffect)((function(){fetch(m).then((function(e){return e.json()})).then((function(e){j(!0),x(e)}),(function(e){j(!0),r(e)}))}),[m]),a?Object(v.jsxs)("span",{children:["Error: ",a.message]}):d?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("h5",{children:["Search results for ",Object(v.jsx)("span",{className:"fw-bold",children:t})]})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("div",{className:"spinner-border my-auto",role:"status","aria-hidden":"true"})})})}var T=s(54);function U(e){var t=T[e.index].next,s=T[e.index].prev,c=T[e.index].nextRoute,n=T[e.index].prevRoute;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("h4",{className:"text-decoration-underline",children:["ATL SPACE CHALLENGE PROJECT UNDER ",Object(v.jsx)("a",{href:"http://aimapp2.aim.gov.in/atlspace/",rel:"noreferrer",target:"_blank",children:"EXPLORATION"})," CRITERION"]}),Object(v.jsx)("small",{className:"d-block mt-4 mb-4",children:"This is the documentation of this website with all the resources present as links. Click on the links to go to its wikipedia page whenever necessary to you. There is also an index with the list of all the documentation pages."}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"There are two pages in this website"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(f.b,{to:"/",children:"Satellites Visualization"})}),Object(v.jsx)("li",{children:Object(v.jsx)(f.b,{to:"/near-earth-asteroids",children:"Near Earth Asteroids"})})]})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("span",{children:"The website uses NASA's APIs to gather data. "}),Object(v.jsx)("a",{href:"https://en.wikipedia.org/wiki/API",target:"_blank",rel:"noreferrer",children:"Learn about APIs here"})]}),Object(v.jsx)("div",{className:"mt-4",children:Object(v.jsxs)("span",{children:["This is a static website with no server side, instead, it uses a",Object(v.jsx)("a",{href:"https://en.wikipedia.org/wiki/User_interface",target:"_blank",rel:"noreferrer",children:" UI (User Interface)"})," library called",Object(v.jsx)("a",{href:"https://en.wikipedia.org/wiki/React_(JavaScript_library)",target:"_blank",rel:"noreferrer",children:" React.js"})]})}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("h4",{children:"Contributors"}),Object(v.jsxs)("div",{children:["Apoorva Kumar Shukla",Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/Apoorva-Shukla",target:"_blank",rel:"noreferrer",children:" Github Profile"})}),Object(v.jsxs)("li",{children:["Email",Object(v.jsx)("a",{href:"mailto:apoorva210907@gmail.com",target:"_blank",rel:"noreferrer",children:" apoorva210907@gmail.com"})]})]})]})]})]}),Object(v.jsxs)("div",{className:"d-flex mt-5",children:[null!==s?Object(v.jsxs)(f.b,{to:n,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},children:["Previous - ",s]}):Object(v.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},disabled:!0,children:"Previous"}),null!==t?Object(v.jsxs)(f.b,{to:c,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},children:["Next - ",t]}):Object(v.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},disabled:!0,children:"Next"})]})]})}var J=s(54);function P(e){var t=J[e.index].next,s=J[e.index].prev,c=J[e.index].nextRoute,n=J[e.index].prevRoute;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{children:Object(v.jsx)("h4",{className:"text-decoration-underline",children:"Satellite Visualization"})}),Object(v.jsxs)("div",{className:"d-flex mt-5",children:[null!==s?Object(v.jsxs)(f.b,{to:n,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},children:["Previous - ",s]}):Object(v.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},disabled:!0,children:"Previous"}),null!==t?Object(v.jsxs)(f.b,{to:c,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},children:["Next - ",t]}):Object(v.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},disabled:!0,children:"Next"})]})]})}var Y=s(54);function z(e){var t=Y[e.index].next,s=Y[e.index].prev,c=Y[e.index].nextRoute,n=Y[e.index].prevRoute;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{children:Object(v.jsx)("h4",{className:"text-decoration-underline",children:"Near Earth Asteroids"})}),Object(v.jsxs)("div",{className:"d-flex mt-5",children:[null!==s?Object(v.jsxs)(f.b,{to:n,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},children:["Previous - ",s]}):Object(v.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginRight:"10px"},disabled:!0,children:"Previous"}),null!==t?Object(v.jsxs)(f.b,{to:c,className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},children:["Next - ",t]}):Object(v.jsx)("button",{className:"border py-2 btn btn-success",style:{borderRadius:"5px",flex:1,marginLeft:"10px"},disabled:!0,children:"Next"})]})]})}function B(e){return Object(v.jsx)(v.Fragment,{children:!0===e.highlight?Object(v.jsxs)(f.b,{className:"d-flex text-decoration-none text-dark sidebar__link sidebar__link_highlight",to:e.route,children:[Object(v.jsx)("div",{style:{width:"50px"},children:e.icon}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{style:{flex:1,width:"100%",display:"block",textOverflow:"ellipsis"},children:e.label})})]}):Object(v.jsxs)(f.b,{className:"d-flex text-decoration-none text-dark sidebar__link",to:e.route,children:[Object(v.jsx)("div",{style:{width:"50px"},children:e.icon}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{style:{flex:1,width:"100%",display:"block",textOverflow:"ellipsis"},children:e.label})})]})})}var V=s(57),G=s.n(V),H=s(58),Z=s.n(H),K=s(56),X=s.n(K);function W(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("aside",{id:"aside",children:Object(v.jsxs)("div",{id:"aside__fluid",className:"border px-2 py-2",style:{borderRadius:"7px"},children:[Object(v.jsx)("span",{className:"sidebar__link mb-2 d-block bg-white",children:"Index"}),1===e.index?Object(v.jsx)(B,{label:"Introduction",route:"/introduction",icon:Object(v.jsx)(X.a,{}),highlight:!0}):Object(v.jsx)(B,{label:"Introduction",route:"/introduction",icon:Object(v.jsx)(X.a,{})}),2===e.index?Object(v.jsx)(B,{label:"Satellite Visualization",route:"/sv",icon:Object(v.jsx)(G.a,{}),highlight:!0}):Object(v.jsx)(B,{label:"Satellite Visualization",route:"/sv",icon:Object(v.jsx)(G.a,{})}),3===e.index?Object(v.jsx)(B,{label:"Near Earth Asteroids",route:"/neo",icon:Object(v.jsx)(Z.a,{}),highlight:!0}):Object(v.jsx)(B,{label:"Near Earth Asteroids",route:"/neo",icon:Object(v.jsx)(Z.a,{})})]})})})}var q=s(11);var Q=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(y,{}),Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsx)(k,{})}),Object(v.jsxs)(q.c,{children:[Object(v.jsx)(q.a,{path:"/",exact:!0,children:Object(v.jsx)(F,{})}),Object(v.jsx)(q.a,{path:"/near-earth-asteroids",exact:!0,children:Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsx)(w,{})})}),Object(v.jsx)(q.a,{path:"/introduction",children:Object(v.jsxs)("div",{className:"d-flex container mt-3",children:[Object(v.jsx)(W,{index:1}),Object(v.jsx)("div",{style:{marginLeft:"20px",flex:1},children:Object(v.jsx)(U,{sidebar:!0,index:1})})]})}),Object(v.jsx)(q.a,{path:"/sv",children:Object(v.jsxs)("div",{className:"d-flex container mt-3",children:[Object(v.jsx)(W,{index:2}),Object(v.jsx)("div",{style:{marginLeft:"20px",flex:1},children:Object(v.jsx)(P,{sidebar:!0,index:2})})]})}),Object(v.jsx)(q.a,{path:"/neo",children:Object(v.jsxs)("div",{className:"d-flex container mt-3",children:[Object(v.jsx)(W,{index:3}),Object(v.jsx)("div",{style:{marginLeft:"20px",flex:1},children:Object(v.jsx)(z,{sidebar:!0,index:3})})]})}),Object(v.jsx)(q.a,{path:"/search",children:Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsx)(D,{})})})]})]})})};s(92);r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.ed59a0a2.chunk.js.map
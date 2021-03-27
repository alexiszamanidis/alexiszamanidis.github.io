(this["webpackJsonpalexiszamanidis.github.io"]=this["webpackJsonpalexiszamanidis.github.io"]||[]).push([[0],{270:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a(13),r=a.n(c),s=a(213),o=a(45),l=a(303),j=a(306),u=[{label:"ABOUT ME",icon:Object(n.jsx)(l.a,{})},{label:"PORTFOLIO",icon:Object(n.jsx)(j.a,{})}],b=a(307),d=a(230),h=a(308),x=a(335),m=function(e){var t=new Date,a=t.getDate(),n=t.getMonth(),i=t.getFullYear(),c=new Date(e),r=c.getDate(),s=c.getMonth(),o=i-c.getFullYear();return n>s||n===s&&a>=r?o:o-1},O=a(217),p=a(218),f=a(86),g=a.n(f),v=function(e,t,a){return{url:"".concat(e).concat(t,"?")+new URLSearchParams(a).toString(),method:"GET",headers:{Accept:"application/vnd.github.v3+json"}}},k=new(function(){function e(){Object(O.a)(this,e),this.basePath=void 0,this.basePath="https://api.github.com"}return Object(p.a)(e,[{key:"getUserData",value:function(e){return g()(v("".concat(this.basePath),"/users/".concat(e)))}},{key:"getUserRepositories",value:function(e){return g()(v("".concat(this.basePath),"/users/".concat(e,"/repos")))}},{key:"getRepositoryTopics",value:function(e,t){return g()(v("".concat(this.basePath),"/users/".concat(e,"/").concat(t,"/topics")))}}]),e}()),y=a(331),N=a(309),w=a(333),S=Object(b.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"100%"},avatar:{margin:"auto",width:e.spacing(20),height:e.spacing(20)},title:{color:e.palette.text.primary},item:{margin:"15px"}}})),C=function(){var e=S(),t=Object(w.a)("userData",(function(){return k.getUserData("alexiszamanidis").then((function(e){return e.data}))})),a=t.isLoading,i=t.isError,c=t.data;return Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(d.a,{className:e.paper,children:a?Object(n.jsx)(N.a,{}):i?Object(n.jsx)(y.a,{severity:"error",children:"Something happened"}):Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{alt:"Alexis Zamanidis",src:c.avatar_url,className:e.avatar}),Object(n.jsxs)("div",{className:e.item+" personal",children:[Object(n.jsx)("i",{className:e.title+" fa fa-user"}),c.name," ",Object(n.jsx)("i",{className:e.title+" fa fa-map-marker"}),c.location," ",Object(n.jsx)("i",{className:e.title+" fa fa-birthday-cake"}),m("1998-01-20")]}),Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Summary"})," ",Object(n.jsx)("br",{}),c.bio]})]})})})},z=a(220),D=a.n(z),L=a(221),P=a.n(L),R=a(222),_=a.n(R),F=[{name:"Full Stack Development mainly with React.js, Spring Boot and MySQL"},{name:"Machine Learning - Data Mining"},{name:"Parallel Programming"}],T=[{name:"Playing Football and Basketball"},{name:"Calisthenics Workout"}],B=[{icon:"fa fa-phone",name:"+30 698-044-3908",link:"tel:+30698-044-3908"},{icon:"fa fa-envelope",name:"alexiszamanidis@outlook.com",link:"mailto:alexiszamanidis@outlook.com"}],A=[{text:"CV",icon:Object(n.jsx)(D.a,{}),link:"https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG"},{text:"LinkedIn",icon:Object(n.jsx)(P.a,{}),link:"http://linkedin.com/in/alexiszamanidis"},{text:"GitHub",icon:Object(n.jsx)(_.a,{}),link:"https://github.com/alexiszamanidis"}],E=a(311),M=Object(b.a)({button:{margin:"5px 5px 5px 5px",color:"white",outline:"0px solid white",transition:"outline-offset 250ms ease",borderRadius:"0","&:hover, &:focus":{outline:"2px solid white",outlineOffset:"-5px"}}});var I=function(e){var t=e.link,a=e.size,i=e.icon,c=e.text,r=M();return Object(n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(E.a,{size:a,variant:"contained",color:"primary",className:r.button,startIcon:i,children:c})})},U=Object(b.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"100%"},title:{color:e.palette.text.primary},item:{margin:"15px"}}})),G=function(){var e=U();return Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)(d.a,{className:e.paper,children:[Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Passionate about"}),F.map((function(e,t){return Object(n.jsxs)("div",{children:[e.name," ",Object(n.jsx)("br",{})]},t)}))]}),Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Hobbies"}),T.map((function(e,t){return Object(n.jsxs)("div",{children:[e.name," ",Object(n.jsx)("br",{})]},t)}))]}),Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Contact"}),B.map((function(t,a){return Object(n.jsx)("a",{href:t.link,className:"underline",target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("i",{className:e.title+" "+t.icon}),t.name]})},a)}))]}),Object(n.jsx)("div",{className:e.item,children:A.map((function(e,t){return Object(n.jsx)(I,{link:e.link,size:"medium",icon:e.icon,text:e.text},t)}))})]})})},H=a(313),V=a(314),W=a(316),Y=a(318),J=a(319),Q=a(315),Z=a(317),q=a(223),X=a.n(q),K=a(312),$=[{from:"Oct 2020",to:"Present (Ends in April 2021)",jobTitle:"Full Stack Developer",company:"ITML",location:"Athens, Greece",description:"I am building a subscription Web App for Doctors that will help them to automate their Visits, Referrals and Prescriptions for their Patients.",details:["Stack: React.js, Spring Boot, MySQL","Security: JSON Web Tokens"],link:null}],ee=a(329),te=function(){return Object(n.jsxs)(ee.a,{mt:3,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(n.jsx)(K.a,{variant:"h4",gutterBottom:!0,children:"EXPERIENCE"}),Object(n.jsx)(H.a,{align:"left",children:$.map((function(e,t){return Object(n.jsxs)(V.a,{children:[Object(n.jsx)(Q.a,{children:Object(n.jsx)(K.a,{variant:"body2",color:"textSecondary",children:"".concat(e.from," - ").concat(e.to)})}),Object(n.jsxs)(W.a,{children:[Object(n.jsx)(Z.a,{children:Object(n.jsx)(X.a,{})}),t+1!==$.length&&Object(n.jsx)(Y.a,{})]}),Object(n.jsx)(J.a,{children:Object(n.jsx)(d.a,{children:Object(n.jsxs)(ee.a,{p:2,children:[Object(n.jsx)(K.a,{variant:"h6",children:e.jobTitle}),Object(n.jsx)(K.a,{variant:"body2",color:"textSecondary",children:"".concat(e.company," - ").concat(e.location)}),Object(n.jsx)(K.a,{children:e.description}),Object(n.jsx)("ul",{children:e.details.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))}),e.link&&Object(n.jsx)(ee.a,{mt:1,children:Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(n.jsxs)(E.a,{size:"small",children:[Object(n.jsx)("i",{style:{marginRight:"5px"},className:"fa fa-link"}),"Check out"]})})})]})})})]},t)}))})]})},ae=a(320),ne=function(){return Object(n.jsx)(ee.a,{mt:3,children:Object(n.jsxs)(ae.a,{children:[Object(n.jsxs)(h.a,{container:!0,spacing:3,children:[Object(n.jsx)(C,{}),Object(n.jsx)(G,{})]}),Object(n.jsx)(te,{})]})})},ie=a(321),ce=a(323),re=a(322),se=Object(b.a)({root:{display:"flex",flexDirection:"column",justifyContent:"space-between"}});var oe=function(e){var t=e.name,a=e.description,i=e.language,c=e.stargazers_count,r=e.forks_count,s=e.html_url,o=se();return Object(n.jsxs)(ie.a,{className:o.root,style:{height:"100%"},children:[Object(n.jsxs)(re.a,{children:[Object(n.jsx)(K.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)(K.a,{children:a}),Object(n.jsxs)(K.a,{children:[Object(n.jsx)("b",{children:"language"}),": ",i," ",Object(n.jsx)("i",{className:"fa fa-star"})," ".concat(c," "),Object(n.jsx)("i",{className:"fa fa-code-fork"})," ".concat(r," ")]})]}),Object(n.jsx)(ce.a,{children:Object(n.jsx)(I,{link:s,size:"small",icon:Object(n.jsx)("i",{style:{marginRight:"5px"},className:"fa fa-github"}),text:"View on GitHub"})})]})},le=a(324),je=a(325),ue=a(276),be=a(277),de=a(285);var he=function(e,t){var a=Object(i.useState)(e),n=Object(o.a)(a,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){var a=setTimeout((function(){r(e)}),t);return function(){clearTimeout(a)}}),[e,t]),c},xe=a(57),me=Object(b.a)({root:{width:"300px",margin:"30px"},grid:{marginTop:"10px",marginBottom:"10px"},icon:{textAlign:"center",marginTop:"10px"},searchFields:Object(xe.a)({display:"flex",flexDirection:"column",justifyContent:"center"},"@media (min-width:600px)",{flexDirection:"row"}),search:Object(xe.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"30%"}),select:Object(xe.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"30%"})}),Oe=function(){var e=me(),t=Object(w.a)("gitHubRepositories",(function(){return k.getUserRepositories("alexiszamanidis").then((function(e){return e.data}))})),a=t.isLoading,c=t.isError,r=t.data,s=Object(n.jsx)("div",{className:"".concat(e.icon," fa-3x"),children:Object(n.jsx)("i",{className:"fa fa-github"+(!0===a?" fa-spin":"")})}),l=Object(i.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],d=he(u,500),x=Object(i.useState)(""),m=Object(o.a)(x,2),O=m[0],p=m[1],f=Object(i.useMemo)((function(){if(void 0===r)return[];var e=new Set(r.filter((function(e){var t=e.language;return null!==t&&""!==t})).map((function(e){return e.language})));return Array.from(e)}),[r]),g=Object(i.useMemo)((function(){if(void 0===r)return[];var e=r;return d.length>0&&(e=e.filter((function(e){var t=e.name,a=e.description;return t.toString().toLowerCase().includes(d.toLowerCase())||a.toString().toLowerCase().includes(d.toLowerCase())}))),O.length>0&&(e=e.filter((function(e){return e.language===O}))),e}),[r,d,O]);return Object(n.jsx)("div",{children:a?s:c?Object(n.jsx)(y.a,{severity:"error",children:"Something happened"}):Object(n.jsxs)("div",{children:[s,Object(n.jsxs)("div",{className:e.searchFields,children:[Object(n.jsx)(le.a,{title:"Filter by Repository Name, Description",placement:"top",children:Object(n.jsx)(je.a,{label:"Search",variant:"outlined",className:e.search,onChange:function(e){b(e.target.value)}})}),Object(n.jsxs)(ue.a,{variant:"outlined",className:e.select,children:[Object(n.jsx)(be.a,{children:"Language"}),Object(n.jsxs)(de.a,{native:!0,label:"Language",value:O,onChange:function(e){p(e.target.value)},children:[Object(n.jsx)("option",{value:""}),f.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(n.jsx)(h.a,{container:!0,spacing:3,className:e.grid,children:g.map((function(e){return Object(n.jsx)(h.a,{item:!0,xs:12,sm:4,md:4,children:Object(n.jsx)(oe,{name:e.name,description:e.description,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count,html_url:e.html_url})},e.id)}))})]})})},pe=function(){return Object(n.jsx)(ae.a,{children:Object(n.jsx)(Oe,{})})},fe=Object(b.a)((function(e){return{root:{padding:e.spacing(1,1),backgroundColor:"#3F51B5",color:"white",display:"flex",alignItems:"center",justifyContent:"center"},a:{color:"white",fontSize:"15px"}}})),ge=function(){var e=fe();return Object(n.jsxs)("h5",{className:"copyright",children:["\xa9 ",(new Date).getFullYear()," Copyright:",Object(n.jsx)("a",{className:"underline",rel:"noopener noreferrer",href:"https://github.com/alexiszamanidis",target:"_blank",children:Object(n.jsx)("b",{className:e.a,children:" Alexis Zamanidis"})})]})},ve=function(){var e=fe();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(ge,{})})},ke=a(332),ye=a(328),Ne=a(330),we=a(219),Se=a(336),Ce=Object(b.a)((function(){return Object(Se.a)({"@global":{"*":{boxSizing:"border-box"},html:{height:"100%",width:"100%"},body:{backgroundColor:"#f4f6f8",height:"100%",width:"100%"},a:{textDecoration:"none"}}})})),ze=function(){return Ce(),null},De=a(227),Le=a(21),Pe=Object(De.a)({palette:{background:{default:Le.a.common.white,paper:Le.a.common.white},primary:{main:"#3F51B5"},secondary:{main:"#fff"}}}),Re=a(327),_e=new Ne.a,Fe=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginBottom:e.spacing(3)},footer:{marginTop:"auto"},tabs:{backgroundColor:"#3F51B5",color:"white"}}})),Te=function(){var e=Fe(),t=Object(i.useState)(0),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(n.jsx)(we.a,{client:_e,children:Object(n.jsxs)(Re.a,{theme:Pe,children:[Object(n.jsx)(ze,{}),Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)("div",{className:e.main,children:[Object(n.jsx)(ke.a,{value:c,onChange:function(e,t){return r(t)},variant:"fullWidth",className:e.tabs,children:u.map((function(e,t){return Object(n.jsx)(ye.a,Object(s.a)({},e),t)}))}),0===c?Object(n.jsx)(ne,{}):1===c?Object(n.jsx)(pe,{}):null]}),Object(n.jsx)("div",{className:e.footer,children:Object(n.jsx)(ve,{})})]})]})})};a(270);r.a.render(Object(n.jsx)(Te,{}),document.getElementById("root"))}},[[271,1,2]]]);
//# sourceMappingURL=main.acbb832b.chunk.js.map
(this["webpackJsonpalexiszamanidis.github.io"]=this["webpackJsonpalexiszamanidis.github.io"]||[]).push([[0],{269:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a(12),r=a.n(c),o=a(212),s=a(296),l=a(299),j=[{label:"ABOUT ME",icon:Object(n.jsx)(s.a,{})},{label:"PORTFOLIO",icon:Object(n.jsx)(l.a,{})}],u=a(300),d=a(316),m=Object(u.a)((function(e){return{root:{padding:e.spacing(1,1),color:"white",display:"flex",alignItems:"center",justifyContent:"center"},a:{color:"white",fontSize:"15px"}}})),x=function(){var e=m();return Object(n.jsxs)("h5",{"data-test-id":"copyright",className:"copyright",children:["\xa9 ",(new Date).getFullYear()," Copyright:",Object(n.jsx)("a",{className:"underline",rel:"noopener noreferrer",href:"https://github.com/alexiszamanidis",target:"_blank",children:Object(n.jsx)("b",{className:e.a,"data-test-id":"copyright-name",children:" Alexis Zamanidis"})})]})},b=function(){var e=m();return Object(n.jsx)(d.a,{"data-test-id":"footer",className:e.root,bgcolor:"primary.main",children:Object(n.jsx)(x,{"data-test-id":"copyright-inside-footer"})})},p=a(319),h=a(315),f=a(317),g=a(218),O=a(322),v=Object(u.a)((function(){return Object(O.a)({"@global":{"*":{boxSizing:"border-box"},html:{height:"100%",width:"100%"},body:{backgroundColor:"#f4f6f8",height:"100%",width:"100%"},a:{textDecoration:"none"}}})})),y=function(){return v(),null},N=a(226),w=a(14),k=Object(N.a)({palette:{background:{default:w.a.common.white,paper:w.a.common.white},primary:{main:"#3F51B5"},secondary:{main:"#fff"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),S=a(314),D=a(44),C=[{icon:"fa fa-phone",name:"+30 698-044-3908",link:"tel:+30698-044-3908"},{icon:"fa fa-envelope",name:"alexiszamanidis@outlook.com",link:"mailto:alexiszamanidis@outlook.com"}],L=a(271),z=a(272),B=a(301),R=a(302),T=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary},link:{color:e.palette.text.primary}}})),W=function(){var e=T();return Object(n.jsxs)(d.a,{mb:5,children:[Object(n.jsx)(d.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(L.a,{variant:"h6",children:"Contact"})}),Object(n.jsx)(z.a,{className:e.list,children:C.map((function(t,a){return Object(n.jsx)(B.a,{className:e.item,children:Object(n.jsx)(R.a,{href:t.link,className:e.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(L.a,{component:"span",children:Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("i",{className:e.title+" "+t.icon}),t.name]})})})},a)}))})]})},A=[{name:"Playing Football and Basketball"},{name:"Calisthenics Workout"}],P=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary}}})),_=function(){var e=P();return Object(n.jsxs)(d.a,{mb:5,children:[Object(n.jsx)(d.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(L.a,{variant:"h6",children:"Hobbies"})}),Object(n.jsx)(z.a,{className:e.list,children:A.map((function(t,a){return Object(n.jsx)(B.a,{className:e.item,children:Object(n.jsx)(L.a,{children:"".concat(a+1,". ").concat(t.name)})},a)}))})]})},M=a(320),F=a(318),E=a(323),I=function(e){var t=new Date,a=t.getDate(),n=t.getMonth(),i=t.getFullYear(),c=new Date(e),r=c.getDate(),o=c.getMonth(),s=i-c.getFullYear();return n>o||n===o&&a>=r?s:s-1},U=a(216),G=a(217),H=a(83),V=a.n(H),Y=function(e,t,a){return{url:"".concat(e).concat(t,"?")+new URLSearchParams(a).toString(),method:"GET",headers:{Accept:"application/vnd.github.v3+json"}}},J=new(function(){function e(){Object(U.a)(this,e),this.basePath=void 0,this.basePath="https://api.github.com"}return Object(G.a)(e,[{key:"getUserData",value:function(e){return V()(Y("".concat(this.basePath),"/users/".concat(e)))}},{key:"getUserRepositories",value:function(e){return V()(Y("".concat(this.basePath),"/users/".concat(e,"/repos")))}},{key:"getRepositoryTopics",value:function(e,t){return V()(Y("".concat(this.basePath),"/users/".concat(e,"/").concat(t,"/topics")))}}]),e}()),K=a(303),Q=Object(u.a)((function(e){return{avatar:{margin:"auto",width:e.spacing(25),height:e.spacing(25),marginBottom:"15px"},personal:{textAlign:"center",marginBottom:"15px"},title:{color:e.palette.text.primary},item:{color:e.palette.text.primary},bio:{color:e.palette.text.primary}}})),Z=function(){var e=Q(),t=Object(M.a)("userData",(function(){return J.getUserData("alexiszamanidis").then((function(e){return e.data}))})),a=t.isLoading,i=t.isError,c=t.data;return Object(n.jsx)(d.a,{mb:5,children:a?Object(n.jsx)(d.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(K.a,{})}):i?Object(n.jsx)(F.a,{severity:"error",children:"Something happened"}):Object(n.jsxs)("div",{children:[Object(n.jsx)(E.a,{alt:"Alexis Zamanidis",src:c.avatar_url,className:e.avatar}),Object(n.jsx)("div",{className:e.personal,children:Object(n.jsx)("div",{className:e.item+" personal",children:Object(n.jsxs)(L.a,{children:[Object(n.jsx)("i",{className:e.title+" fa fa-user"}),c.name," ",Object(n.jsx)("i",{className:e.title+" fa fa-map-marker"}),c.location," ",Object(n.jsx)("i",{className:e.title+" fa fa-birthday-cake"}),I("1998-01-20")]})})}),Object(n.jsx)(d.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(L.a,{variant:"h6",children:"Summary"})}),Object(n.jsx)(L.a,{className:e.bio,children:c.bio})]})})},q=[{university:"National & Kapodistrian University of Athens",duration:"Oct 2016 - Present",description:"B.Sc. in Computer Science - Specializations: Software, Data & Knowledge Management",location:"Athens, Greece",link:"https://www.di.uoa.gr/"}],X=a(219),$=a.n(X),ee=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},item:{marginRight:"5px"},itemName:{marginRight:"5px"},itemDescription:{color:e.palette.text.primary},itemLocation:{marginRight:"5px"},itemDuration:{color:e.palette.text.primary}}})),te=function(){var e=ee();return Object(n.jsxs)(d.a,{mb:5,children:[Object(n.jsx)(d.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(L.a,{variant:"h6",children:"Education"})}),q.map((function(t,a){return Object(n.jsxs)(d.a,{display:"flex",flexDirection:"column",children:[Object(n.jsxs)(d.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[Object(n.jsxs)(d.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(L.a,{color:"primary",className:e.itemName,children:t.university}),Object(n.jsx)(L.a,{className:e.itemLocation,children:" | ".concat(t.location)}),Object(n.jsx)(R.a,{href:t.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)($.a,{})})]}),Object(n.jsx)(L.a,{className:e.itemDuration,children:t.duration})]}),Object(n.jsx)(L.a,{className:e.itemDescription,children:t.description})]},a)}))]})},ae=[{from:"Oct 2020",to:"Present (Ends in April 2021)",jobTitle:"Full Stack Developer",company:"ITML",location:"Athens, Greece",description:"I am building a subscription Web App for Doctors that will help them to automate their Visits, Referrals and Prescriptions for their Patients.",details:["Stack: React.js, Spring Boot, MySQL","Security: JSON Web Tokens"],link:null}],ne=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},item:{marginRight:"5px"},itemDescription:{color:e.palette.text.primary},itemDuration:{color:e.palette.text.primary}}})),ie=function(){var e=ne();return Object(n.jsxs)(d.a,{mb:5,children:[Object(n.jsx)(d.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(L.a,{variant:"h6",children:"Experience"})}),ae.map((function(t,a){return Object(n.jsxs)(d.a,{display:"flex",flexDirection:"column",children:[Object(n.jsxs)(d.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[Object(n.jsxs)(d.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(L.a,{color:"primary",className:e.item,children:"".concat(t.jobTitle," ")}),Object(n.jsx)(L.a,{children:" | ".concat(t.company," - ").concat(t.location)})]}),Object(n.jsxs)(L.a,{className:e.itemDuration,children:[t.from," - ",t.to]})]}),Object(n.jsx)(L.a,{className:e.itemDescription,children:t.description})]},a)}))]})},ce=a(220),re=a.n(ce),oe=a(221),se=a.n(oe),le=a(222),je=a.n(le),ue=[{text:"CV",icon:Object(n.jsx)(re.a,{}),link:"https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG"},{text:"LinkedIn",icon:Object(n.jsx)(se.a,{}),link:"http://linkedin.com/in/alexiszamanidis"},{text:"GitHub",icon:Object(n.jsx)(je.a,{}),link:"https://github.com/alexiszamanidis"}],de=a(305),me=Object(u.a)({button:{margin:"5px 5px 5px 5px",color:"white",outline:"0px solid white",transition:"outline-offset 250ms ease",borderRadius:"0","&:hover, &:focus":{outline:"2px solid white",outlineOffset:"-5px",boxShadow:"2px 2px gray"}}}),xe=function(e){var t=e.link,a=e.size,i=e.icon,c=e.text,r=me();return Object(n.jsx)("a",{"data-test-id":"custom-button-link-a",href:t,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(de.a,{"data-test-id":"custom-button-link-button",color:"primary",variant:"contained",size:a,startIcon:i,className:r.button,children:c})})},be=Object(u.a)((function(e){return{root:{textAlign:"center"}}})),pe=function(){var e=be();return Object(n.jsx)(d.a,{mb:3,className:e.root,children:ue.map((function(e,t){return Object(n.jsx)(xe,{link:e.link,size:"medium",icon:e.icon,text:e.text},t)}))})},he=[{name:"Full Stack Development mainly with React.js, Spring Boot and MySQL"},{name:"Machine Learning - Data Mining"},{name:"Parallel Programming"}],fe=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary}}})),ge=function(){var e=fe();return Object(n.jsxs)(d.a,{mb:5,children:[Object(n.jsx)(d.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(L.a,{variant:"h6",children:"Passionate About"})}),Object(n.jsx)(z.a,{className:e.list,children:he.map((function(t,a){return Object(n.jsx)(B.a,{className:e.item,children:Object(n.jsx)(L.a,{children:"".concat(a+1,". ").concat(t.name)})},a)}))})]})},Oe=a(306),ve=a(229),ye=Object(u.a)((function(e){return{root:{marginTop:"25px"},paper:{padding:e.spacing(3),color:e.palette.text.secondary,height:"100%"}}})),Ne=function(){var e=ye();return Object(n.jsx)(Oe.a,{maxWidth:"md",className:e.root,children:Object(n.jsxs)(ve.a,{className:e.paper,children:[Object(n.jsx)(Z,{}),Object(n.jsx)(te,{}),Object(n.jsx)(ie,{}),Object(n.jsx)(ge,{}),Object(n.jsx)(_,{}),Object(n.jsx)(W,{}),Object(n.jsx)(pe,{})]})})},we=a(53),ke=a(310),Se=a(307),De=a(309),Ce=a(308),Le=Object(u.a)({root:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}),ze=function(e){var t=e.name,a=e.description,i=e.language,c=e.stargazers_count,r=e.forks_count,o=e.html_url,s=Le();return Object(n.jsxs)(Se.a,{"data-test-id":"card-component",className:s.root,children:[Object(n.jsxs)(Ce.a,{children:[Object(n.jsx)(L.a,{"data-test-id":"card-component-name",color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)(L.a,{"data-test-id":"card-component-description",children:a}),Object(n.jsxs)(L.a,{"data-test-id":"card-component-language-star-fork",children:[Object(n.jsx)("b",{children:"language"}),": ",i," ",Object(n.jsx)("i",{className:"fa fa-star"})," ".concat(c," "),Object(n.jsx)("i",{className:"fa fa-code-fork"})," ".concat(r," ")]})]}),Object(n.jsx)(De.a,{children:Object(n.jsx)(xe,{"data-test-id":"card-component-custom-button-link",link:o,size:"small",icon:Object(n.jsx)("i",{style:{marginRight:"5px"},className:"fa fa-github"}),text:"View on GitHub"})})]})},Be=Object(u.a)({grid:{marginTop:"10px",marginBottom:"10px"}}),Re=function(e){var t=e.repositories,a=Be();return Object(n.jsx)(ke.a,{container:!0,spacing:3,className:a.grid,children:t.map((function(e){return Object(n.jsx)(ke.a,{item:!0,xs:12,sm:4,md:4,children:Object(n.jsx)(ze,{name:e.name,description:e.description,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count,html_url:e.html_url})},e.id)}))})};var Te=function(e,t){var a=Object(i.useState)(e),n=Object(D.a)(a,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){var a=setTimeout((function(){r(e)}),t);return function(){clearTimeout(a)}}),[e,t]),c},We=Object(u.a)({root:{textAlign:"center",marginTop:"10px"}}),Ae=a(311),Pe=a(312),_e=a(277),Me=a(278),Fe=a(286),Ee=Object(u.a)({root:{width:"300px",margin:"30px"},searchFields:Object(we.a)({display:"flex",flexDirection:"column",justifyContent:"center"},"@media (min-width:600px)",{flexDirection:"row"}),search:Object(we.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"30%"}),select:Object(we.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"30%"})}),Ie=function(){var e=Ee(),t=Object(M.a)("gitHubRepositories",(function(){return J.getUserRepositories("alexiszamanidis").then((function(e){return e.data}))})),a=t.isLoading,c=t.isError,r=t.data,o=function(){var e=Object(i.useState)(""),t=Object(D.a)(e,2),a=t[0],n=t[1];return{search:a,setSearch:n,handleSearch:function(e){n(e.target.value)}}}(),s=o.search,l=o.handleSearch,j=Te(s,500),u=function(e){var t=Object(i.useState)(""),a=Object(D.a)(t,2),n=a[0],c=a[1],r=Object(i.useMemo)((function(){if(void 0===e)return[];var t=new Set(e.filter((function(e){var t=e.language;return null!==t&&""!==t})).map((function(e){return e.language})));return Array.from(t)}),[e]);return{selectedLanguage:n,setSelectedLanguage:c,handleLanguage:function(e){c(e.target.value)},languages:r}}(r),d=u.selectedLanguage,m=u.handleLanguage,x=u.languages,b=function(e,t,a){return{computedData:Object(i.useMemo)((function(){if(void 0===e)return[];var n=e;return t.length>0&&(n=n.filter((function(e){var a=e.name,n=e.description;return a.toString().toLowerCase().includes(t.toLowerCase())||n.toString().toLowerCase().includes(t.toLowerCase())}))),a.length>0&&(n=n.filter((function(e){return e.language===a}))),n}),[e,t,a])}}(r,j,d).computedData,p=function(e){var t=We();return Object(i.useMemo)((function(){return Object(n.jsx)("div",{className:"".concat(t.root," fa-3x"),children:Object(n.jsx)("i",{className:"fa fa-github"+(!0===e?" fa-spin":"")})})}),[e,t.root])}(a);return Object(n.jsx)("div",{children:a?p:c?Object(n.jsx)(F.a,{severity:"error",children:"Something happened"}):Object(n.jsxs)("div",{children:[p,Object(n.jsxs)("div",{className:e.searchFields,children:[Object(n.jsx)(Ae.a,{title:"Filter by Repository Name, Description",placement:"top",children:Object(n.jsx)(Pe.a,{label:"Search",variant:"outlined",className:e.search,onChange:l,value:s})}),Object(n.jsxs)(_e.a,{variant:"outlined",className:e.select,children:[Object(n.jsx)(Me.a,{children:"Language"}),Object(n.jsxs)(Fe.a,{native:!0,label:"Language",value:d,onChange:m,children:[Object(n.jsx)("option",{value:""}),x.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(n.jsx)(Re,{repositories:b})]})})},Ue=function(){return Object(n.jsx)(Oe.a,{children:Object(n.jsx)(Ie,{})})},Ge=new f.a,He=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{paddingBottom:e.spacing(3)},footer:{marginTop:"auto"},tabs:{color:"white"}}})),Ve=function(){var e=He(),t=function(){var e=Object(i.useState)(0),t=Object(D.a)(e,2),a=t[0],c=t[1],r=Object(i.useMemo)((function(){return 0===a?Object(n.jsx)(Ne,{}):1===a?Object(n.jsx)(Ue,{}):null}),[a]);return{value:a,setValue:c,showTabContent:r}}(),a=t.value,c=t.setValue,r=t.showTabContent;return Object(n.jsx)(g.a,{client:Ge,children:Object(n.jsxs)(S.a,{theme:k,children:[Object(n.jsx)(y,{}),Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)("div",{className:e.main,children:[Object(n.jsx)(d.a,{bgcolor:"primary.main",children:Object(n.jsx)(p.a,{value:a,onChange:function(e,t){return c(t)},variant:"fullWidth",className:e.tabs,TabIndicatorProps:{style:{height:"5px"}},children:j.map((function(e,t){return Object(n.jsx)(h.a,Object(o.a)({},e),t)}))})}),r]}),Object(n.jsx)("div",{className:e.footer,children:Object(n.jsx)(b,{})})]})]})})};a(269);r.a.render(Object(n.jsx)(Ve,{}),document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.0d9833b9.chunk.js.map
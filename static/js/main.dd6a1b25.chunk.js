(this["webpackJsonpalexiszamanidis.github.io"]=this["webpackJsonpalexiszamanidis.github.io"]||[]).push([[0],{252:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(2),i=(a(252),a(215)),c=a(0),r=a.n(c),s=a(308),o=a(310),l=[{label:"ABOUT ME",icon:Object(n.jsx)(s.a,{})},{label:"PORTFOLIO",icon:Object(n.jsx)(o.a,{})}],j=a(49),d=a(219),m=a.n(d),b=a(220),x=a.n(b),h=[{icon:Object(n.jsx)(m.a,{}),name:"+30 698-044-3908",link:"tel:+30698-044-3908"},{icon:Object(n.jsx)(x.a,{}),name:"alexiszamanidis@outlook.com",link:"mailto:alexiszamanidis@outlook.com"}],u=a(311),p=a(328),O=a(283),f=a(284),g=a(312),y=a(313),v=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary},link:{color:e.palette.text.primary}}})),w=function(){var e=v();return Object(n.jsxs)(p.a,{mb:5,children:[Object(n.jsx)(p.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(O.a,{variant:"h6",children:"Contact"})}),Object(n.jsx)(f.a,{className:e.list,children:h.map((function(t,a){return Object(n.jsx)(g.a,{className:e.item,children:Object(n.jsx)(y.a,{href:t.link,className:e.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(O.a,{component:"span",children:Object(n.jsxs)(p.a,{display:"flex",children:[t.icon,t.name]})})})},a)}))})]})},N=[{name:"Playing Football and Basketball"},{name:"Calisthenics Workout"}],k=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary}}})),S=function(){var e=k();return Object(n.jsxs)(p.a,{mb:5,children:[Object(n.jsx)(p.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(O.a,{variant:"h6",children:"Hobbies"})}),Object(n.jsx)(f.a,{className:e.list,children:N.map((function(t,a){return Object(n.jsx)(g.a,{className:e.item,children:Object(n.jsx)(O.a,{children:"".concat(a+1,". ").concat(t.name)})},a)}))})]})},D=a(20),I=a(332),C=a(330),T=a(334),_=function(e){var t=new Date,a=t.getDate(),n=t.getMonth(),i=t.getFullYear(),c=new Date(e),r=c.getDate(),s=c.getMonth(),o=i-c.getFullYear();return n>s||n===s&&a>=r?o:o-1},L=a(314),A=Object(u.a)((function(e){return{avatar:{margin:"auto",width:e.spacing(25),height:e.spacing(25),marginBottom:"15px"},personal:{textAlign:"center",marginBottom:"15px"},title:{color:e.palette.text.primary},item:{color:e.palette.text.primary},bio:{color:e.palette.text.primary},skeletonItem:{marginRight:"2px"}}})),B=function(){var e=A();return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(L.a,{className:e.avatar,variant:"circle",width:250,height:250}),Object(n.jsx)("div",{className:e.personal,children:Object(n.jsx)("div",{className:e.item+" personal",children:Object(n.jsx)(O.a,{component:"span",children:Object(n.jsxs)(p.a,{display:"flex",alignItems:"center",justifyContent:"center",children:[Object(n.jsx)(L.a,{className:e.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(L.a,{className:e.skeletonItem,width:"10%"}),Object(n.jsx)(L.a,{className:e.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(L.a,{className:e.skeletonItem,width:"10%"}),Object(n.jsx)(L.a,{className:e.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(L.a,{className:e.skeletonItem,width:"10%"})]})})})}),Object(n.jsx)(p.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsxs)(O.a,{variant:"h6",children:[Object(n.jsx)(L.a,{className:e.skeletonItem,width:"20%"}),Object(n.jsx)(L.a,{}),Object(n.jsx)(L.a,{}),Object(n.jsx)(L.a,{width:"50%"})]})}),Object(n.jsx)(O.a,{className:e.bio})]})},R=a(221),E=a(222),P=a(91),z=a.n(P),W=function(e,t,a){return{url:"".concat(e).concat(t,"?")+new URLSearchParams(a).toString(),method:"GET",headers:{Accept:"application/vnd.github.v3+json",Authorization:"Token ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)}}},F=new(function(){function e(){Object(R.a)(this,e),this.basePath=void 0,this.basePath="https://api.github.com"}return Object(E.a)(e,[{key:"getUserData",value:function(e){return z()(W("".concat(this.basePath),"/users/".concat(e)))}},{key:"getUserRepositories",value:function(e){return z()(W("".concat(this.basePath),"/users/".concat(e,"/repos")))}},{key:"getRepositoryTopics",value:function(e,t){return z()(W("".concat(this.basePath),"/users/".concat(e,"/").concat(t,"/topics")))}}]),e}()),M=a(224),U=a.n(M),H=a(225),G=a.n(H),K=a(226),V=a.n(K),Y=Object(u.a)((function(e){return{avatar:{margin:"auto",width:e.spacing(25),height:e.spacing(25),marginBottom:"15px"},title:{color:e.palette.text.primary},bio:{color:e.palette.text.primary},personal:Object(D.a)({marginBottom:"30px",color:e.palette.text.primary,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},"@media (min-width:450px)",{flexDirection:"row"}),info:{display:"flex",flexDirection:"row"}}})),J=function(){var e=Y(),t=Object(I.a)("gitHubUserData",(function(){return F.getUserData("alexiszamanidis").then((function(e){return e.data}))}),{refetchOnMount:!1,cacheTime:1/0}),a=t.isLoading,i=t.isError,c=t.data;return Object(n.jsx)(p.a,{mb:5,children:a?Object(n.jsx)(B,{}):i?Object(n.jsx)(C.a,{severity:"error",children:"Something happened"}):Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(T.a,{alt:"Alexis Zamanidis",src:c.avatar_url,className:e.avatar}),Object(n.jsxs)("div",{className:e.personal,children:[Object(n.jsxs)("div",{className:e.info,children:[Object(n.jsx)(U.a,{}),Object(n.jsx)(O.a,{children:c.name})]}),Object(n.jsxs)("div",{className:e.info,children:[Object(n.jsx)(G.a,{}),Object(n.jsx)(O.a,{children:c.location})]}),Object(n.jsxs)("div",{className:e.info,children:[Object(n.jsx)(V.a,{}),Object(n.jsx)(O.a,{children:_("1998-01-20")})]})]}),Object(n.jsx)(p.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(O.a,{variant:"h6",children:"Summary"})}),Object(n.jsx)(O.a,{className:e.bio,children:c.bio})]})})},Z=[{university:"National & Kapodistrian University of Athens",duration:"Oct 2016 - Feb 2021",description:"B.Sc. in Computer Science - Specializations: Software, Data & Knowledge Management.",location:"Athens, Greece",link:"https://www.di.uoa.gr/"}],q=a(227),Q=a.n(q),X=a(30),$=a(316),ee=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},item:{marginRight:"5px"},itemName:{marginRight:"5px"},itemDescription:{color:e.palette.text.primary},itemLocation:{marginRight:"5px"},itemDuration:{color:e.palette.text.primary},itemLinkIcon:{color:"black"},itemSlash:Object(D.a)({display:"none"},"@media (min-width:960px)",{display:"block",marginRight:"5px"})}})),te=function(){var e=ee(),t=Object(X.a)(),a=Object($.a)(t.breakpoints.up("md"));return Object(n.jsxs)(p.a,{mb:5,children:[Object(n.jsx)(p.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(O.a,{variant:"h6",children:"Education"})}),Z.map((function(t,i){return Object(n.jsxs)(p.a,{display:"flex",flexDirection:"column",children:[Object(n.jsxs)(p.a,{display:"flex",flexDirection:a?"row":"column",justifyContent:"space-between",children:[Object(n.jsxs)(p.a,{display:"flex",flexDirection:a?"row":"column",children:[Object(n.jsx)(O.a,{color:"primary",className:e.itemName,children:t.university}),Object(n.jsxs)(p.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(O.a,{className:e.itemSlash,children:" | "}),Object(n.jsx)(O.a,{className:e.itemLocation,children:t.location}),Object(n.jsx)(y.a,{href:t.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(Q.a,{className:e.itemLinkIcon})})]})]}),Object(n.jsx)(O.a,{className:e.itemDuration,children:t.duration})]}),Object(n.jsx)(O.a,{className:e.itemDescription,children:t.description})]},i)}))]})},ae=[{from:"Oct 2020",to:"April 2021",jobTitle:"Full Stack Developer, Intern",company:"ITML",location:"Athens, Greece",typeOfEmployee:"Remote Full-Time",description:"I built a Web Application which will be used by Doctors in their daily life  with main functionalities of automating Visits, Prescriptions and Referrals. But also it has other very useful functionalities such as Calendar, Pdf Generator for handwritten Prescriptions, Medicines Statistics. Its basic functionality is based on the API provided by IDIKA which is the official provider of e-Prescription in Greece.",link:null}],ne=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},item:{marginRight:"5px"},itemDescription:{color:e.palette.text.primary},itemDuration:{color:e.palette.text.primary},itemSlash:Object(D.a)({display:"none"},"@media (min-width:960px)",{display:"block",marginRight:"5px"})}})),ie=function(){var e=ne(),t=Object(X.a)(),a=Object($.a)(t.breakpoints.up("md"));return Object(n.jsxs)(p.a,{mb:5,children:[Object(n.jsx)(p.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(O.a,{variant:"h6",children:"Experience"})}),ae.map((function(t,i){return Object(n.jsxs)(p.a,{display:"flex",flexDirection:"column",children:[Object(n.jsxs)(p.a,{display:"flex",flexDirection:a?"row":"column",justifyContent:"space-between",children:[Object(n.jsxs)(p.a,{display:"flex",flexDirection:a?"row":"column",children:[Object(n.jsx)(O.a,{color:"primary",className:e.item,children:"".concat(t.jobTitle," ")}),Object(n.jsx)(O.a,{className:e.itemSlash,children:" | "}),Object(n.jsx)(O.a,{children:"".concat(t.company," - ").concat(t.location," (").concat(t.typeOfEmployee,")")})]}),Object(n.jsxs)(O.a,{className:e.itemDuration,children:[t.from," - ",t.to]})]}),Object(n.jsx)(O.a,{className:e.itemDescription,children:t.description})]},i)}))]})},ce=a(58),re=a.n(ce),se=a(228),oe=a.n(se),le=a(229),je=a.n(le),de=[{text:"CV",icon:Object(n.jsx)(oe.a,{}),link:"https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG"},{text:"LinkedIn",icon:Object(n.jsx)(je.a,{}),link:"http://linkedin.com/in/alexiszamanidis"},{text:"GitHub",icon:Object(n.jsx)(re.a,{}),link:"https://github.com/alexiszamanidis"}],me=a(317),be=Object(u.a)({button:{margin:"5px 5px 5px 5px"}}),xe=function(e){var t=e.link,a=e.size,i=e.icon,c=e.text,r=be();return Object(n.jsx)("a",{"data-test-id":"custom-button-link-a",href:t,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(me.a,{"data-test-id":"custom-button-link-button",color:"primary",variant:"contained",size:a,startIcon:i,className:r.button,children:c})})},he=Object(u.a)({root:{textAlign:"center"}}),ue=function(){var e=he();return Object(n.jsx)(p.a,{mb:3,className:e.root,children:de.map((function(e,t){return Object(n.jsx)(xe,{link:e.link,size:"medium",icon:e.icon,text:e.text},t)}))})},pe=[{name:"Full Stack Development mainly with React.js, Spring Boot and MySQL"},{name:"Machine Learning - Data Mining"},{name:"Parallel Programming"}],Oe=Object(u.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary}}})),fe=function(){var e=Oe();return Object(n.jsxs)(p.a,{mb:5,children:[Object(n.jsx)(p.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(O.a,{variant:"h6",children:"Passionate About"})}),Object(n.jsx)(f.a,{className:e.list,children:pe.map((function(t,a){return Object(n.jsx)(g.a,{className:e.item,children:Object(n.jsx)(O.a,{children:"".concat(a+1,". ").concat(t.name)})},a)}))})]})},ge=a(318),ye=a(239),ve=Object(u.a)((function(e){return{root:{marginTop:"25px"},paper:{padding:e.spacing(3),color:e.palette.text.secondary,height:"100%"}}})),we=function(){var e=ve();return Object(n.jsx)(ge.a,{"data-test-id":"about-me",maxWidth:"md",className:e.root,children:Object(n.jsxs)(ye.a,{className:e.paper,children:[Object(n.jsx)(J,{"data-test-id":"personal"}),Object(n.jsx)(te,{"data-test-id":"education"}),Object(n.jsx)(ie,{"data-test-id":"experience"}),Object(n.jsx)(fe,{"data-test-id":"passionate-about"}),Object(n.jsx)(S,{"data-test-id":"hobbies"}),Object(n.jsx)(w,{"data-test-id":"contact"}),Object(n.jsx)(ue,{"data-test-id":"button-links"})]})})},Ne=a(236),ke=a(322),Se=a(319),De=a(242),Ie=a(321),Ce=a(320),Te=Object(u.a)({skeleton:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},skeletonItem:{marginRight:"2px"}}),_e=function(e){var t=e.timeout,a=Te();return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)(De.a,{in:!0,timeout:t,children:Object(n.jsxs)(Se.a,{className:a.skeleton,children:[Object(n.jsxs)(Ce.a,{children:[Object(n.jsx)(O.a,{component:"span",color:"textSecondary",gutterBottom:!0,children:Object(n.jsx)(L.a,{width:"70%"})}),Object(n.jsxs)(O.a,{component:"span",children:[Object(n.jsx)(L.a,{}),Object(n.jsx)(L.a,{}),Object(n.jsx)(L.a,{}),Object(n.jsx)(L.a,{})]}),Object(n.jsx)(O.a,{component:"span",children:Object(n.jsxs)(p.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(L.a,{className:a.skeletonItem,width:"40%"}),Object(n.jsx)(L.a,{className:a.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(L.a,{className:a.skeletonItem,width:"10%"}),Object(n.jsx)(L.a,{className:a.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(L.a,{className:a.skeletonItem,width:"10%"})]})})]}),Object(n.jsx)(Ie.a,{children:Object(n.jsx)(L.a,{width:"70%",height:40,style:{marginLeft:"5px"}})})]})})})},Le=a(230),Ae=a.n(Le),Be=a(231),Re=a.n(Be),Ee=Object(u.a)({root:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},details:Object(D.a)({display:"flex",flexDirection:"column",justifyContent:"flex-start"},"@media (min-width:1100px)",{flexDirection:"row"}),info:{display:"flex",flexDirection:"row"}}),Pe=function(e){var t=e.name,a=e.description,i=e.language,c=e.stargazers_count,r=e.forks_count,s=e.html_url,o=Ee();return Object(n.jsxs)(Se.a,{"data-test-id":"card-component",className:o.root,children:[Object(n.jsxs)(Ce.a,{children:[Object(n.jsx)(O.a,{component:"span","data-test-id":"card-component-name",color:"textSecondary",gutterBottom:!0,children:Object(n.jsx)(p.a,{fontWeight:500,children:t})}),Object(n.jsx)(O.a,{component:"span","data-test-id":"card-component-description",children:a}),Object(n.jsxs)(O.a,{component:"span","data-test-id":"card-component-language-star-fork",className:o.details,children:[Object(n.jsxs)("div",{className:o.info,children:[Object(n.jsx)("b",{children:"language"}),": ",i]}),Object(n.jsxs)("div",{className:o.info,children:[Object(n.jsx)(Ae.a,{})," ".concat(c," ")]}),Object(n.jsxs)("div",{className:o.info,children:[Object(n.jsx)(Re.a,{})," ".concat(r," ")]})]})]}),Object(n.jsx)(Ie.a,{children:Object(n.jsx)(xe,{"data-test-id":"card-component-custom-button-link",link:s,size:"small",icon:Object(n.jsx)(re.a,{}),text:"View on GitHub"})})]})},ze=Object(u.a)({grid:{marginTop:"10px",marginBottom:"10px"}}),We=function(e){var t=e.repositories,a=e.loading,i=ze();return Object(n.jsx)(ke.a,{"data-test-id":"repositories",container:!0,spacing:3,className:i.grid,children:a?Object(Ne.a)(Array(4)).map((function(e,t){return Object(n.jsx)(ke.a,{item:!0,sm:12,md:6,lg:4,children:Object(n.jsx)(_e,{timeout:500*t})},t)})):t.map((function(e){return Object(n.jsx)(ke.a,{"data-test-id":"repository",item:!0,sm:12,md:6,lg:4,children:Object(n.jsx)(Pe,{"data-test-id":"repository-card-component",name:e.name,description:e.description,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count,html_url:e.html_url})},e.id)}))})};var Fe=function(e,t){var a=Object(c.useState)(e),n=Object(j.a)(a,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){r(e)}),t);return function(){clearTimeout(a)}}),[e,t]),i},Me=Object(u.a)({root:{textAlign:"center",marginTop:"20px",marginBottom:"10px"},icon:{fontSize:"50px"}}),Ue=a(323),He=a(324),Ge=a(289),Ke=a(290),Ve=a(298),Ye=Object(u.a)({root:{width:"300px",margin:"30px"},searchFields:Object(D.a)({display:"flex",flexDirection:"column",justifyContent:"center"},"@media (min-width:600px)",{flexDirection:"row"}),search:Object(D.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"50%"}),select:Object(D.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"50%"}),error:{marginTop:"10px"}}),Je=function(){var e=Ye(),t=Object(I.a)("gitHubRepositories",(function(){return F.getUserRepositories("alexiszamanidis").then((function(e){return e.data}))}),{refetchOnMount:!1,cacheTime:1/0}),a=t.isLoading,i=t.isError,s=t.data,o=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1];return{search:a,setSearch:n,handleSearch:function(e){n(e.target.value)}}}(),l=o.search,d=o.handleSearch,m=Fe(l,500),b=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],i=a[1],r=Object(c.useMemo)((function(){if(void 0===e)return[];var t=new Set(e.filter((function(e){var t=e.language;return null!==t&&""!==t})).map((function(e){return e.language})));return Array.from(t)}),[e]);return{selectedLanguage:n,setSelectedLanguage:i,handleLanguage:function(e){i(e.target.value)},languages:r}}(s),x=b.selectedLanguage,h=b.handleLanguage,u=b.languages,p=function(e,t,a){return{computedData:Object(c.useMemo)((function(){if(void 0===e)return[];var n=e;return t.length>0&&(n=n.filter((function(e){var a=e.name,n=e.description;return a.toString().toLowerCase().includes(t.toLowerCase())||n.toString().toLowerCase().includes(t.toLowerCase())}))),a.length>0&&(n=n.filter((function(e){return e.language===a}))),n}),[e,t,a])}}(s,m,x).computedData,O=function(e){var t=Me();return Object(c.useMemo)((function(){return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(re.a,{className:"".concat(t.icon," ").concat(e?"spin":"")})})}),[e,t])}(a);return Object(n.jsxs)(r.a.Fragment,{children:[O,Object(n.jsxs)("div",{className:e.searchFields,children:[Object(n.jsx)(Ue.a,{"data-test-id":"tooltip-search-text-field",title:"filter by repository name and description",placement:"top",children:Object(n.jsx)(He.a,{"data-test-id":"search-text-field",label:"Search",variant:"outlined",className:e.search,onChange:d,value:l})}),Object(n.jsxs)(Ge.a,{"data-test-id":"select-form-control",variant:"outlined",className:e.select,children:[Object(n.jsx)(Ke.a,{"data-test-id":"select-input-label",children:"Language"}),Object(n.jsxs)(Ve.a,{"data-test-id":"select",native:!0,label:"Language",value:x,onChange:h,children:[Object(n.jsx)("option",{value:""}),u.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})]})]}),i?Object(n.jsx)(C.a,{className:e.error,severity:"error",children:"Something happened"}):Object(n.jsx)(We,{"data-test-id":"repositories",repositories:p,loading:a})]})},Ze=function(){return Object(n.jsx)(ge.a,{"data-test-id":"card-portfolio",children:Object(n.jsx)(Je,{"data-test-id":"github"})})},qe=a(326),Qe=a(331),Xe=Object(u.a)({tabs:{color:"white"}}),$e=function(){var e=Xe(),t=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],i=t[1],r=Object(c.useMemo)((function(){return 0===a?Object(n.jsx)(we,{}):1===a?Object(n.jsx)(Ze,{}):null}),[a]);return{value:a,setValue:i,handleTabs:function(e,t){i(t)},showTabContent:r}}(),a=t.value,s=t.handleTabs,o=t.showTabContent;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(p.a,{"data-test-id":"tabs",bgcolor:"primary.main",children:Object(n.jsx)(Qe.a,{value:a,onChange:s,variant:"fullWidth",className:e.tabs,TabIndicatorProps:{style:{height:"5px"}},children:l.map((function(e,t){return Object(n.jsx)(qe.a,Object(i.a)({},e),t)}))})}),o]})},et=Object(u.a)((function(e){return{root:{padding:e.spacing(1,1),color:"white",display:"flex",alignItems:"center",justifyContent:"center"},a:{color:"white",fontSize:"15px"}}})),tt=function(){var e=et();return Object(n.jsxs)("h5",{"data-test-id":"copyright",className:"copyright",children:["\xa9 ",(new Date).getFullYear()," Copyright:",Object(n.jsx)("a",{className:"underline",rel:"noopener noreferrer",href:"https://github.com/alexiszamanidis",target:"_blank",children:Object(n.jsx)("b",{className:e.a,"data-test-id":"copyright-name",children:" Alexis Zamanidis"})})]})},at=function(){var e=et();return Object(n.jsx)(p.a,{"data-test-id":"footer",className:e.root,bgcolor:"primary.main",children:Object(n.jsx)(tt,{"data-test-id":"copyright-inside-footer"})})},nt=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{paddingBottom:e.spacing(3)},footer:{marginTop:"auto"},tabs:{color:"white"}}})),it=function(e){var t=e.children,a=nt();return Object(n.jsxs)("div",{"data-test-id":"layout",className:a.root,children:[Object(n.jsx)("div",{"data-test-id":"children",className:a.main,children:t}),Object(n.jsx)("div",{"data-test-id":"footer",className:a.footer,children:Object(n.jsx)(at,{})})]})},ct=function(){return Object(n.jsx)(it,{"data-test-id":"layout",children:Object(n.jsx)($e,{"data-test-id":"tabs"})})},rt=a(12),st=a.n(rt),ot=a(235),lt=a(14),jt=Object(ot.a)({palette:{background:{default:lt.a.common.white,paper:lt.a.common.white},primary:{main:"#3F51B5"},secondary:{main:"#fff"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontSize:15}}),dt=a(335),mt=Object(u.a)((function(){return Object(dt.a)({"@global":{"*":{boxSizing:"border-box"},html:{height:"100%",width:"100%"},body:{backgroundColor:"#f4f6f8",height:"100%",width:"100%"},a:{textDecoration:"none"}}})})),bt=function(){return mt(),null},xt=a(327),ht=a(329),ut=a(223),pt=new ht.a,Ot=function(e){var t=e.children;return Object(n.jsx)(ut.a,{client:pt,children:Object(n.jsxs)(xt.a,{theme:jt,children:[Object(n.jsx)(bt,{}),t]})})};st.a.render(Object(n.jsx)(Ot,{children:Object(n.jsx)(ct,{})}),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.dd6a1b25.chunk.js.map
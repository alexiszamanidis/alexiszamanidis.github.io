(this["webpackJsonpalexiszamanidis.github.io"]=this["webpackJsonpalexiszamanidis.github.io"]||[]).push([[0],{253:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(2),i=(a(253),a(216)),c=a(0),s=a.n(c),r=a(309),o=a(311),l=[{label:"ABOUT ME",icon:Object(n.jsx)(r.a,{})},{label:"PORTFOLIO",icon:Object(n.jsx)(o.a,{})}],d=a(49),j=a(220),m=a.n(j),p=a(221),x=a.n(p),b=[{icon:Object(n.jsx)(m.a,{}),name:"+30 698-044-3908",link:"tel:+30698-044-3908"},{icon:Object(n.jsx)(x.a,{}),name:"alexiszamanidis@outlook.com",link:"mailto:alexiszamanidis@outlook.com"}],h=a(312),u=a(329),g=a(284),O=a(285),f=a(313),y=a(314),v=Object(h.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary},link:{color:e.palette.text.primary},icon:{marginRight:"3px"}}})),w=function(){var e=v();return Object(n.jsxs)(u.a,{mb:5,children:[Object(n.jsx)(u.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(g.a,{variant:"h6",children:"Contact"})}),Object(n.jsx)(O.a,{className:e.list,children:b.map((function(t,a){return Object(n.jsx)(f.a,{className:e.item,children:Object(n.jsx)(y.a,{href:t.link,className:e.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(g.a,{component:"span",children:Object(n.jsxs)(u.a,{display:"flex",children:[Object(n.jsx)("div",{className:e.icon,children:t.icon}),t.name]})})})},a)}))})]})},k=a(222),N=a.n(k),I=a(223),D=a.n(I),S=[{name:"Playing Football and Basketball",icon:Object(n.jsx)(N.a,{})},{name:"Calisthenics Workout",icon:Object(n.jsx)(D.a,{})}],L=Object(h.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{marginBottom:"5px",padding:"0px 0px 0px 0px",color:e.palette.text.primary,display:"flex",flexDirection:"row"},icon:{marginRight:"3px"}}})),T=function(){var e=L();return Object(n.jsxs)(u.a,{mb:5,children:[Object(n.jsx)(u.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(g.a,{variant:"h6",children:"Hobbies"})}),Object(n.jsx)(O.a,{className:e.list,children:S.map((function(t,a){return Object(n.jsxs)(f.a,{className:e.item,children:[Object(n.jsx)("div",{className:e.icon,children:t.icon}),Object(n.jsx)(g.a,{children:t.name})]},a)}))})]})},C=a(20),P=a(333),A=a(331),z=a(335),B=function(e){var t=new Date,a=t.getDate(),n=t.getMonth(),i=t.getFullYear(),c=new Date(e),s=c.getDate(),r=c.getMonth(),o=i-c.getFullYear();return n>r||n===r&&a>=s?o:o-1},R=a(316),F=a(315),M=Object(h.a)((function(e){return{avatar:{margin:"auto",width:e.spacing(25),height:e.spacing(25),marginBottom:"15px"},personal:{textAlign:"center",marginBottom:"15px"},title:{color:e.palette.text.primary},item:{color:e.palette.text.primary},bio:{color:e.palette.text.primary},skeletonItem:{marginRight:"2px"}}})),W=function(){var e=M(),t=Object(F.a)((function(e){return e.breakpoints.up("sm")}));return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(R.a,{className:e.avatar,variant:"circle",width:250,height:250}),Object(n.jsx)("div",{className:e.personal,children:Object(n.jsx)("div",{className:e.item+" personal",children:Object(n.jsx)(g.a,{component:"span",children:Object(n.jsxs)(u.a,{display:"flex",flexDirection:t?"row":"column",alignItems:"center",justifyContent:"center",children:[Object(n.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(R.a,{className:e.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(R.a,{className:e.skeletonItem,width:"80px"})]}),Object(n.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(R.a,{className:e.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(R.a,{className:e.skeletonItem,width:"80px"})]}),Object(n.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(R.a,{className:e.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(R.a,{className:e.skeletonItem,width:"30px"})]})]})})})}),Object(n.jsx)(u.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsxs)(g.a,{variant:"h6",children:[Object(n.jsx)(R.a,{className:e.skeletonItem,width:"20%"}),Object(n.jsx)(R.a,{}),Object(n.jsx)(R.a,{}),Object(n.jsx)(R.a,{width:"50%"})]})}),Object(n.jsx)(g.a,{className:e.bio})]})},_=a(224),E=a(225),G=a(92),U=a.n(G),H=function(e,t,a){return{url:"".concat(e).concat(t,"?")+new URLSearchParams(a).toString(),method:"GET",headers:{Accept:"application/vnd.github.v3+json"}}},V=new(function(){function e(){Object(_.a)(this,e),this.basePath=void 0,this.basePath="https://api.github.com"}return Object(E.a)(e,[{key:"getUserData",value:function(e){return U()(H("".concat(this.basePath),"/users/".concat(e)))}},{key:"getUserRepositories",value:function(e){return U()(H("".concat(this.basePath),"/users/".concat(e,"/repos")))}},{key:"getRepositoryTopics",value:function(e,t){return U()(H("".concat(this.basePath),"/users/".concat(e,"/").concat(t,"/topics")))}}]),e}()),J=a(227),Y=a.n(J),K=a(228),Z=a.n(K),q=a(229),Q=a.n(q),X=Object(h.a)((function(e){return{avatar:{margin:"auto",width:e.spacing(25),height:e.spacing(25),marginBottom:"15px"},title:{color:e.palette.text.primary},bio:{color:e.palette.text.primary},personal:Object(C.a)({marginBottom:"30px",color:e.palette.text.primary,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},"@media (min-width:450px)",{flexDirection:"row"}),info:{display:"flex",flexDirection:"row"}}})),$=function(){var e=X(),t=Object(P.a)("gitHubUserData",(function(){return V.getUserData("alexiszamanidis").then((function(e){return e.data}))}),{refetchOnMount:!1,cacheTime:1/0}),a=t.isLoading,i=t.isError,c=t.data;return Object(n.jsx)(u.a,{mb:5,children:a?Object(n.jsx)(W,{}):i?Object(n.jsx)(A.a,{severity:"error",children:"Something happened"}):Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(z.a,{alt:"Alexis Zamanidis",src:c.avatar_url,className:e.avatar}),Object(n.jsxs)("div",{className:e.personal,children:[Object(n.jsxs)("div",{className:e.info,children:[Object(n.jsx)(Y.a,{}),Object(n.jsx)(g.a,{children:c.name})]}),Object(n.jsxs)("div",{className:e.info,children:[Object(n.jsx)(Z.a,{}),Object(n.jsx)(g.a,{children:c.location})]}),Object(n.jsxs)("div",{className:e.info,children:[Object(n.jsx)(Q.a,{}),Object(n.jsx)(g.a,{children:B("1998-01-20")})]})]}),Object(n.jsx)(u.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(g.a,{variant:"h6",children:"Summary"})}),Object(n.jsx)(g.a,{className:e.bio,children:"Hey, my name is Alex and I am a Software Engineer. I have experience as a Full Stack Web App Developer and I enjoy working with all layers of the stack."})]})})},ee=[{university:"National & Kapodistrian University of Athens",duration:"Oct 2016 - Feb 2021",description:"B.Sc. in Computer Science - Specializations: Software, Data & Knowledge Management.",location:"Athens, Greece",link:"https://www.di.uoa.gr/"}],te=a(87),ae=a.n(te),ne=a(30),ie=Object(h.a)((function(e){return{title:{color:e.palette.text.primary},item:{marginRight:"5px"},itemName:{marginRight:"5px"},itemDescription:{color:e.palette.text.primary},itemLocation:{marginRight:"5px"},itemDuration:{color:e.palette.text.primary},itemLinkIcon:{color:"black"},itemSlash:Object(C.a)({display:"none"},"@media (min-width:960px)",{display:"block",marginRight:"5px"})}})),ce=function(){var e=ie(),t=Object(ne.a)(),a=Object(F.a)(t.breakpoints.up("md"));return Object(n.jsxs)(u.a,{mb:5,children:[Object(n.jsx)(u.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(g.a,{variant:"h6",children:"Education"})}),ee.map((function(t,i){return Object(n.jsxs)(u.a,{display:"flex",flexDirection:"column",mb:3,children:[Object(n.jsxs)(u.a,{display:"flex",flexDirection:a?"row":"column",justifyContent:"space-between",children:[Object(n.jsxs)(u.a,{display:"flex",flexDirection:a?"row":"column",children:[Object(n.jsx)(g.a,{color:"primary",className:e.itemName,children:t.university}),Object(n.jsxs)(u.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(g.a,{className:e.itemSlash,children:" | "}),Object(n.jsx)(g.a,{className:e.itemLocation,children:t.location}),Object(n.jsx)(y.a,{href:t.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(ae.a,{className:e.itemLinkIcon})})]})]}),Object(n.jsx)(g.a,{className:e.itemDuration,children:t.duration})]}),Object(n.jsx)(g.a,{className:e.itemDescription,children:t.description})]},i)}))]})},se=[{from:"Jul 2021",to:"Jul 2022",jobTitle:"Software Engineer",company:"Upstream",location:"Athens, Greece",typeOfEmployee:"Remote Full-Time",description:"I was responsible for developing and maintaining the Plan Migration, Grow Measure and Track services",details:["<span class='light-bold'>Investigated the architectural design</span> of Plan Migration <span class='light-bold'>using Lerna, yarn workspaces and Monorepos</span>, so that it can be scalable and maintainable as the number of MNOs increases","Participated in the total <span class='light-bold'>overhaul of the TIM website</span>","<span class='light-bold'>Set up the new Grow Track service</span>","<span class='light-bold'>Implemented reusable components</span> for the <span class='light-bold'>company\u2019s core component library</span>","<span class='light-bold'>Paired programming with an intern</span> and taught them the apps-domains, Git workflow, use of Memcached and Docker","<span class='light-bold'>Presented application features to colleagues and recorded them for the future team members</span>"],link:"https://www.upstreamsystems.com/"},{from:"Oct 2020",to:"Apr 2021",jobTitle:"Software Engineer",company:"ITML",location:"Athens, Greece",typeOfEmployee:"Remote Full-Time",description:"I was given to implement a RESTful Web App that will help Doctors in their daily work",details:["<span class='light-bold'>Fully integrated System with IDIKA</span>, which is the <span class='light-bold'>Provider of e-Prescription in Greece</span>","<span class='light-bold'>Automated</span> Visits, Referrals and Prescriptions for their Patients","<span class='light-bold'>Calendar</span> to keep their appointments"],link:"https://itml.gr/"}],re=Object(h.a)((function(e){return{title:{color:e.palette.text.primary},item:{marginRight:"5px"},itemDescription:{color:e.palette.text.primary},itemDuration:{color:e.palette.text.primary},itemSlash:Object(C.a)({display:"none"},"@media (min-width:960px)",{display:"block",marginRight:"5px"}),companyAndLocation:{marginRight:"5px"},itemLinkIcon:{color:"black"},details:{padding:"0px 0px 0px 0px"},detail:{margin:"2px 0px",padding:"0px 0px 0px 0px",color:e.palette.text.primary,display:"flex",flexDirection:"row",alignItems:"baseline"},bulletPoint:{margin:"0px 5px",fontSize:"15px"}}})),oe=function(){var e=re(),t=Object(ne.a)(),a=Object(F.a)(t.breakpoints.up("md"));return Object(n.jsxs)(u.a,{mb:5,children:[Object(n.jsx)(u.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(g.a,{variant:"h6",children:"Experience"})}),se.map((function(t,i){return Object(n.jsxs)(u.a,{display:"flex",flexDirection:"column",mb:3,children:[Object(n.jsxs)(u.a,{display:"flex",flexDirection:a?"row":"column",justifyContent:"space-between",children:[Object(n.jsxs)(u.a,{display:"flex",flexDirection:a?"row":"column",children:[Object(n.jsx)(g.a,{color:"primary",className:e.item,children:"".concat(t.jobTitle," ")}),Object(n.jsx)(g.a,{className:e.itemSlash,children:" | "}),Object(n.jsx)(g.a,{className:e.companyAndLocation,children:"".concat(t.company," - ").concat(t.location," (").concat(t.typeOfEmployee,")")}),t.link&&Object(n.jsx)(y.a,{href:t.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(ae.a,{className:e.itemLinkIcon})})]}),Object(n.jsxs)(g.a,{className:e.itemDuration,children:[t.from," - ",t.to]})]}),Object(n.jsx)(g.a,{className:e.itemDescription,children:t.description}),Object(n.jsx)(O.a,{children:t.details.map((function(t,a){return Object(n.jsxs)(f.a,{className:e.detail,children:[Object(n.jsx)("div",{className:e.bulletPoint,children:"\u25cb"}),Object(n.jsx)(g.a,{children:Object(n.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:t}})})]},a)}))})]},i)}))]})},le=a(58),de=a.n(le),je=a(230),me=a.n(je),pe=a(231),xe=a.n(pe),be=[{text:"CV",icon:Object(n.jsx)(me.a,{}),link:"https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG"},{text:"LinkedIn",icon:Object(n.jsx)(xe.a,{}),link:"http://linkedin.com/in/alexiszamanidis"},{text:"GitHub",icon:Object(n.jsx)(de.a,{}),link:"https://github.com/alexiszamanidis"}],he=a(318),ue=Object(h.a)({button:{margin:"5px 5px 5px 5px"}}),ge=function(e){var t=e.link,a=e.size,i=e.icon,c=e.text,s=ue();return Object(n.jsx)("a",{"data-test-id":"custom-button-link-a",href:t,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(he.a,{"data-test-id":"custom-button-link-button",color:"primary",variant:"contained",size:a,startIcon:i,className:s.button,children:c})})},Oe=Object(h.a)({root:{textAlign:"center"}}),fe=function(){var e=Oe();return Object(n.jsx)(u.a,{mb:3,className:e.root,children:be.map((function(e,t){return Object(n.jsx)(ge,{link:e.link,size:"medium",icon:e.icon,text:e.text},t)}))})},ye=[{name:"Web Development"},{name:"Machine Learning - Data Mining"},{name:"Parallel Programming"}],ve=Object(h.a)((function(e){return{title:{color:e.palette.text.primary},list:{padding:"0px 0px 0px 0px"},item:{padding:"0px 0px 0px 0px",color:e.palette.text.primary,display:"flex",flexDirection:"row",alignItems:"baseline"},bulletPoint:{margin:"0px 5px",fontSize:"15px"}}})),we=function(){var e=ve();return Object(n.jsxs)(u.a,{mb:5,children:[Object(n.jsx)(u.a,{mb:1,fontWeight:"fontWeightBold",className:e.title,children:Object(n.jsx)(g.a,{variant:"h6",children:"Passionate About"})}),Object(n.jsx)(O.a,{className:e.list,children:ye.map((function(t,a){return Object(n.jsxs)(f.a,{className:e.item,children:[Object(n.jsx)("div",{className:e.bulletPoint,children:"\u25cb"}),Object(n.jsx)(g.a,{children:t.name})]},a)}))})]})},ke=a(319),Ne=a(240),Ie=Object(h.a)((function(e){return{root:{marginTop:"25px"},paper:{padding:e.spacing(3),color:e.palette.text.secondary,height:"100%",overflow:"hidden"}}})),De=function(){var e=Ie();return Object(n.jsx)(ke.a,{"data-test-id":"about-me",maxWidth:"md",className:e.root,children:Object(n.jsxs)(Ne.a,{className:e.paper,children:[Object(n.jsx)($,{"data-test-id":"personal"}),Object(n.jsx)(ce,{"data-test-id":"education"}),Object(n.jsx)(oe,{"data-test-id":"experience"}),Object(n.jsx)(we,{"data-test-id":"passionate-about"}),Object(n.jsx)(T,{"data-test-id":"hobbies"}),Object(n.jsx)(w,{"data-test-id":"contact"}),Object(n.jsx)(fe,{"data-test-id":"button-links"})]})})},Se=a(237),Le=a(323),Te=a(320),Ce=a(243),Pe=a(322),Ae=a(321),ze=Object(h.a)({skeleton:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},skeletonItem:{marginRight:"2px"}}),Be=function(e){var t=e.timeout,a=ze();return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)(Ce.a,{in:!0,timeout:t,children:Object(n.jsxs)(Te.a,{className:a.skeleton,children:[Object(n.jsxs)(Ae.a,{children:[Object(n.jsx)(g.a,{component:"span",color:"textSecondary",gutterBottom:!0,children:Object(n.jsx)(R.a,{width:"70%"})}),Object(n.jsxs)(g.a,{component:"span",children:[Object(n.jsx)(R.a,{}),Object(n.jsx)(R.a,{}),Object(n.jsx)(R.a,{}),Object(n.jsx)(R.a,{})]}),Object(n.jsx)(g.a,{component:"span",children:Object(n.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(R.a,{className:a.skeletonItem,width:"40%"}),Object(n.jsx)(R.a,{className:a.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(R.a,{className:a.skeletonItem,width:"10%"}),Object(n.jsx)(R.a,{className:a.skeletonItem,variant:"circle",width:20,height:20}),Object(n.jsx)(R.a,{className:a.skeletonItem,width:"10%"})]})})]}),Object(n.jsx)(Pe.a,{children:Object(n.jsx)(R.a,{width:"70%",height:40,style:{marginLeft:"5px"}})})]})})})},Re=a(232),Fe=a.n(Re),Me=Object(h.a)({root:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},details:Object(C.a)({display:"flex",flexDirection:"column",justifyContent:"flex-start"},"@media (min-width:1100px)",{flexDirection:"row"}),info:{display:"flex",flexDirection:"row",alignItems:"center"},icon:{height:"25px",margin:"0 2px 0 2px",color:"black"}}),We=function(e){var t=e.name,a=e.description,i=e.language,c=e.stargazers_count,s=e.forks_count,r=e.html_url,o=Me();return Object(n.jsxs)(Te.a,{"data-test-id":"card-component",className:o.root,children:[Object(n.jsxs)(Ae.a,{children:[Object(n.jsx)(g.a,{component:"span","data-test-id":"card-component-name",color:"textSecondary",gutterBottom:!0,children:Object(n.jsx)(u.a,{fontWeight:500,children:t})}),Object(n.jsx)(g.a,{component:"span","data-test-id":"card-component-description",children:a}),Object(n.jsxs)(g.a,{component:"span","data-test-id":"card-component-language-star-fork",className:o.details,children:[Object(n.jsxs)("div",{className:o.info,children:[Object(n.jsx)("b",{children:"language"}),": ",i]}),Object(n.jsxs)("div",{className:o.info,children:[Object(n.jsx)(Fe.a,{className:o.icon})," ".concat(c," ")]}),Object(n.jsxs)("div",{className:o.info,children:[Object(n.jsx)("img",{src:"/images/ForkIcon.png",alt:"GitHub Fork Icon",className:o.icon})," ".concat(s," ")]})]})]}),Object(n.jsx)(Pe.a,{children:Object(n.jsx)(ge,{"data-test-id":"card-component-custom-button-link",link:r,size:"small",icon:Object(n.jsx)(de.a,{}),text:"View on GitHub"})})]})},_e=Object(h.a)({grid:{marginTop:"10px",marginBottom:"10px"}}),Ee=function(e){var t=e.repositories,a=e.loading,i=_e();return Object(n.jsx)(Le.a,{"data-test-id":"repositories",container:!0,spacing:3,className:i.grid,children:a?Object(Se.a)(Array(4)).map((function(e,t){return Object(n.jsx)(Le.a,{item:!0,xs:12,sm:12,md:6,lg:4,children:Object(n.jsx)(Be,{timeout:500*t})},t)})):t.map((function(e){return Object(n.jsx)(Le.a,{"data-test-id":"repository",item:!0,xs:12,sm:12,md:6,lg:4,children:Object(n.jsx)(We,{"data-test-id":"repository-card-component",name:e.name,description:e.description,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count,html_url:e.html_url})},e.id)}))})};var Ge=function(e,t){var a=Object(c.useState)(e),n=Object(d.a)(a,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[e,t]),i},Ue=Object(h.a)({root:{textAlign:"center",marginTop:"20px",marginBottom:"10px"},icon:{fontSize:"50px"}}),He=a(324),Ve=a(325),Je=a(290),Ye=a(291),Ke=a(299),Ze=Object(h.a)({root:{width:"300px",margin:"30px"},searchFields:Object(C.a)({display:"flex",flexDirection:"column",justifyContent:"center"},"@media (min-width:600px)",{flexDirection:"row"}),search:Object(C.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"50%"}),select:Object(C.a)({width:"100%",margin:"5px 5px 5px 0px"},"@media (min-width:600px)",{width:"50%"}),error:{marginTop:"10px"}}),qe=function(){var e=Ze(),t=Object(P.a)("gitHubRepositories",(function(){return V.getUserRepositories("alexiszamanidis").then((function(e){return e.data}))}),{refetchOnMount:!1,cacheTime:1/0}),a=t.isLoading,i=t.isError,r=t.data,o=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1];return{search:a,setSearch:n,handleSearch:function(e){n(e.target.value)}}}(),l=o.search,j=o.handleSearch,m=Ge(l,500),p=function(e){var t=Object(c.useState)(""),a=Object(d.a)(t,2),n=a[0],i=a[1],s=Object(c.useMemo)((function(){if(void 0===e)return[];var t=new Set(e.filter((function(e){var t=e.language;return null!==t&&""!==t})).map((function(e){return e.language})));return Array.from(t)}),[e]);return{selectedLanguage:n,setSelectedLanguage:i,handleLanguage:function(e){i(e.target.value)},languages:s}}(r),x=p.selectedLanguage,b=p.handleLanguage,h=p.languages,u=function(e,t,a){return{computedData:Object(c.useMemo)((function(){if(void 0===e)return[];var n=e;return t.length>0&&(n=n.filter((function(e){var a=e.name,n=e.description;return a.toString().toLowerCase().includes(t.toLowerCase())||n.toString().toLowerCase().includes(t.toLowerCase())}))),a.length>0&&(n=n.filter((function(e){return e.language===a}))),n}),[e,t,a])}}(r,m,x).computedData,g=function(e){var t=Ue();return Object(c.useMemo)((function(){return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(de.a,{className:"".concat(t.icon," ").concat(e?"spin":"")})})}),[e,t])}(a);return Object(n.jsxs)(s.a.Fragment,{children:[g,Object(n.jsxs)("div",{className:e.searchFields,children:[Object(n.jsx)(He.a,{"data-test-id":"tooltip-search-text-field",title:"filter by repository name and description",placement:"top",children:Object(n.jsx)(Ve.a,{"data-test-id":"search-text-field",label:"Search",variant:"outlined",className:e.search,onChange:j,value:l})}),Object(n.jsxs)(Je.a,{"data-test-id":"select-form-control",variant:"outlined",className:e.select,children:[Object(n.jsx)(Ye.a,{"data-test-id":"select-input-label",children:"Language"}),Object(n.jsxs)(Ke.a,{"data-test-id":"select",native:!0,label:"Language",value:x,onChange:b,children:[Object(n.jsx)("option",{value:""}),h.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})]})]}),i?Object(n.jsx)(A.a,{className:e.error,severity:"error",children:"Something happened"}):Object(n.jsx)(Ee,{"data-test-id":"repositories",repositories:u,loading:a})]})},Qe=function(){return Object(n.jsx)(ke.a,{"data-test-id":"card-portfolio",children:Object(n.jsx)(qe,{"data-test-id":"github"})})},Xe=a(327),$e=a(332),et=Object(h.a)({tabs:{color:"white"}}),tt=function(){var e=et(),t=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),a=t[0],i=t[1],s=Object(c.useMemo)((function(){return 0===a?Object(n.jsx)(De,{}):1===a?Object(n.jsx)(Qe,{}):null}),[a]);return{value:a,setValue:i,handleTabs:function(e,t){i(t)},showTabContent:s}}(),a=t.value,r=t.handleTabs,o=t.showTabContent;return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(u.a,{"data-test-id":"tabs",bgcolor:"primary.main",children:Object(n.jsx)($e.a,{value:a,onChange:r,variant:"fullWidth",className:e.tabs,TabIndicatorProps:{style:{height:"5px"}},children:l.map((function(e,t){return Object(n.jsx)(Xe.a,Object(i.a)({},e),t)}))})}),o]})},at=Object(h.a)((function(e){return{root:{padding:e.spacing(1,1),color:"white",display:"flex",alignItems:"center",justifyContent:"center"},a:{color:"white",fontSize:"15px"}}})),nt=function(){var e=at();return Object(n.jsxs)("h5",{"data-test-id":"copyright",className:"copyright",children:["\xa9 ",(new Date).getFullYear()," Copyright:",Object(n.jsx)("a",{className:"underline",rel:"noopener noreferrer",href:"https://github.com/alexiszamanidis",target:"_blank",children:Object(n.jsx)("b",{className:e.a,"data-test-id":"copyright-name",children:" Alexis Zamanidis"})})]})},it=function(){var e=at();return Object(n.jsx)(u.a,{"data-test-id":"footer",className:e.root,bgcolor:"primary.main",children:Object(n.jsx)(nt,{"data-test-id":"copyright-inside-footer"})})},ct=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{paddingBottom:e.spacing(3)},footer:{marginTop:"auto"},tabs:{color:"white"}}})),st=function(e){var t=e.children,a=ct();return Object(n.jsxs)("div",{"data-test-id":"layout",className:a.root,children:[Object(n.jsx)("div",{"data-test-id":"children",className:a.main,children:t}),Object(n.jsx)("div",{"data-test-id":"footer",className:a.footer,children:Object(n.jsx)(it,{})})]})},rt=function(){return Object(n.jsx)(st,{"data-test-id":"layout",children:Object(n.jsx)(tt,{"data-test-id":"tabs"})})},ot=a(12),lt=a.n(ot),dt=a(236),jt=a(14),mt=Object(dt.a)({palette:{background:{default:jt.a.common.white,paper:jt.a.common.white},primary:{main:"#3F51B5"},secondary:{main:"#fff"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontSize:15}}),pt=a(336),xt=Object(h.a)((function(){return Object(pt.a)({"@global":{"*":{boxSizing:"border-box"},html:{height:"100%",width:"100%"},body:{backgroundColor:"#f4f6f8",height:"100%",width:"100%"},a:{textDecoration:"none"}}})})),bt=function(){return xt(),null},ht=a(328),ut=a(330),gt=a(226),Ot=new ut.a,ft=function(e){var t=e.children;return Object(n.jsx)(gt.a,{client:Ot,children:Object(n.jsxs)(ht.a,{theme:mt,children:[Object(n.jsx)(bt,{}),t]})})};lt.a.render(Object(n.jsx)(ft,{children:Object(n.jsx)(rt,{})}),document.getElementById("root"))}},[[282,1,2]]]);
//# sourceMappingURL=main.b77ee81e.chunk.js.map
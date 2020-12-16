(this["webpackJsonpalexiszamanidis.github.io"]=this["webpackJsonpalexiszamanidis.github.io"]||[]).push([[0],{81:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(0),c=t(16),s=t.n(c),r=t(45),l=t(13),o=t(115),j=t(117),m=[{label:"ABOUT ME",icon:Object(n.jsx)(o.a,{})},{label:"PORTFOLIO",icon:Object(n.jsx)(j.a,{})}],b=t(119),h=t(123),d=t(122),u=t(118),x=t(120),g=t(121),O=t(47),p=[{name:"Languages"},{name:"Data Science"},{name:"Frontend"},{name:"Backend"},{name:"Databases"},{name:"IDE"},{name:"Other Tools"}],f=[{name:"language"},{name:"dataScience"},{name:"frontend"},{name:"backend"},{name:"databases"},{name:"ide"},{name:"otherTools"}],k=[{name:"C",link:"https://github.com/alexiszamanidis/conway_game_of_life"},{name:"C++",link:"https://github.com/alexiszamanidis/sql_query_executor"},{name:"Java",link:"https://gitlab.com/alexiszamanidis/spring_boot"}],v=[{name:"Python",link:"https://github.com/alexiszamanidis/airbnb_data_analysis"}],N=[{name:"JavaScript",link:"#/"},{name:"HTML",link:"#/"},{name:"CSS",link:"#/"},{name:"React JS",link:"https://github.com/alexiszamanidis/alexiszamanidis.github.io"}],S=[{name:"Spring Boot",link:"https://gitlab.com/alexiszamanidis/spring_boot"}],_=[{name:"MySQL",link:""}],y=[{name:"VS Code",link:"#/"},{name:"Eclipse",link:"#/"}],z=[{name:"Git",link:"https://github.com/alexiszamanidis"},{name:"Bash",link:"https://github.com/alexiszamanidis/.ubuntu_bootstrap"},{name:"Docker",link:"#/"},{name:"Lucidchart",link:"#/"},{name:"Balsamiq",link:"#/"}],D=function(){for(var e=[],a={name:"",link:"#/"},t=k,n=v,i=N,c=S,s=_,r=y,l=z,o=0;;o++){if(!(t.length>o||n.length>o||i.length>o||c.length>o||s.length>o||r.length>o||l.length>o))return e;var j={language:t.length>o?t[o]:a,dataScience:n.length>o?n[o]:a,frontend:i.length>o?i[o]:a,backend:c.length>o?c[o]:a,databases:s.length>o?s[o]:a,ide:r.length>o?r[o]:a,otherTools:l.length>o?l[o]:a};e.push(j)}}(),w=function(){return Object(n.jsx)(u.a,{component:O.a,children:Object(n.jsxs)(b.a,{"aria-label":"simple table",children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{children:p.map((function(e,a){return Object(n.jsx)(d.a,{align:"center",children:Object(n.jsx)("b",{children:e.name.toUpperCase()})},a)}))})}),Object(n.jsx)(h.a,{children:D.map((function(e,a){return Object(n.jsx)(g.a,{children:f.map((function(a,t){return Object(n.jsx)(d.a,{align:"center",children:"#/"!==e[a.name].link?Object(n.jsx)("a",{href:e[a.name].link,rel:"noreferrer",target:"_blank",children:e[a.name].name}):e[a.name].name},t)}))},a)}))})]})})},C=t(124),B=t(125),P=t(136),T=function(e){var a=new Date,t=a.getDate(),n=a.getMonth(),i=a.getFullYear(),c=new Date(e),s=c.getDate(),r=c.getMonth(),l=i-c.getFullYear();return n>r||n===r&&t>=s?l:l-1},L=t(43),M=t(44),F=t(32),R=t.n(F),E=new(function(){function e(){Object(L.a)(this,e),this.basePath=void 0,this.basePath="https://api.github.com"}return Object(M.a)(e,[{key:"getUserData",value:function(e){return R.a.get(this.basePath+"/users/"+e)}},{key:"getUserRepositories",value:function(e){return R.a.get(this.basePath+"/users/"+e+"/repos")}}]),e}()),J=t(135),U=Object(C.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"90%"},avatar:{margin:"auto",width:e.spacing(20),height:e.spacing(20)},title:{color:e.palette.text.primary},item:{margin:"15px"}}})),A=function(){var e=U(),a=Object(i.useState)({name:"",avatar_url:"",location:"",bio:""}),t=Object(l.a)(a,2),c=t[0],s=t[1],r=Object(i.useState)(!1),o=Object(l.a)(r,2),j=o[0],m=o[1];return Object(i.useEffect)((function(){E.getUserData("alexiszamanidis").then((function(e){var a=e.data;s({name:a.name,avatar_url:a.avatar_url,location:a.location,bio:a.bio})})).catch((function(e){m(e)}))}),[]),Object(n.jsx)(B.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(O.a,{className:e.paper,children:!0===j?Object(n.jsx)(J.a,{severity:"error",children:"Something happened"}):Object(n.jsxs)("div",{children:[Object(n.jsx)(P.a,{alt:"Alexis Zamanidis",src:c.avatar_url,className:e.avatar}),Object(n.jsxs)("div",{className:e.item+" personal",children:[Object(n.jsx)("i",{className:e.title+" fa fa-user"}),c.name," ",Object(n.jsx)("i",{className:e.title+" fa fa-map-marker"}),c.location," ",Object(n.jsx)("i",{className:e.title+" fa fa-birthday-cake"}),T("1998-01-20")]}),Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Summary"})," ",Object(n.jsx)("br",{}),c.bio]})]})})})},q=[{name:"Full Stack Development mainly with React JS, Spring Boot and MySQL"},{name:"Machine Learning - Data Mining"},{name:"Parallel Programming"}],G=[{name:"Playing Football and Basketball"},{name:"Calisthenics Workout"}],H=[{icon:"fa fa-phone",name:"+30 698-044-3908",link:"tel:+30698-044-3908"},{icon:"fa fa-envelope",name:"alexiszamanidis@outlook.com",link:"mailto:alexiszamanidis@outlook.com"}],I=[{icon:"fa fa-file",name:"CV",link:"https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG"},{icon:"fa fa-linkedin",name:"LinkedIn",link:"http://linkedin.com/in/alexiszamanidis"},{icon:"fa fa-github",name:"GitHub",link:"https://github.com/alexiszamanidis"}],V=Object(C.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"90%"},title:{color:e.palette.text.primary},item:{margin:"15px"}}})),Y=function(){var e=V();return Object(n.jsx)(B.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)(O.a,{className:e.paper,children:[Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Passionate about"}),q.map((function(e,a){return Object(n.jsxs)("div",{children:[e.name," ",Object(n.jsx)("br",{})]},a)}))]}),Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Hobbies"}),G.map((function(e,a){return Object(n.jsxs)("div",{children:[e.name," ",Object(n.jsx)("br",{})]},a)}))]}),Object(n.jsxs)("div",{className:e.item,children:[Object(n.jsx)("b",{className:e.title,children:"Contact"}),H.map((function(a,t){return Object(n.jsx)("a",{href:a.link,target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("i",{className:e.title+" "+a.icon}),a.name]})},t)}))]}),Object(n.jsx)("div",{className:e.item,children:I.map((function(e,a){return Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("button",{className:"button",children:[Object(n.jsx)("i",{className:e.icon}),e.name]})},a)}))})]})})},W=t(126),Q=function(){return Object(n.jsxs)(W.a,{maxWidth:"md",children:[Object(n.jsxs)(B.a,{container:!0,spacing:3,style:{marginTop:"10px",marginBottom:"10px"},children:[Object(n.jsx)(A,{}),Object(n.jsx)(Y,{})]}),Object(n.jsx)(w,{})]})},Z=t(127),K=t(130),X=t(128),$=t(131),ee=t(129);var ae=function(e){var a=e.name,t=e.description,i=e.language,c=e.stargazers_count,s=e.forks_count;return Object(n.jsxs)(Z.a,{style:{height:"100%"},children:[Object(n.jsxs)(X.a,{children:[Object(n.jsx)(ee.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(n.jsx)(ee.a,{children:t}),Object(n.jsxs)(ee.a,{children:[Object(n.jsx)("b",{children:"language"}),": ",i," ",Object(n.jsx)("i",{className:"fa fa-star"})," ".concat(c," "),Object(n.jsx)("i",{className:"fa fa-code-fork"})," ".concat(s," ")]})]}),Object(n.jsx)(K.a,{children:Object(n.jsxs)($.a,{size:"small",children:[Object(n.jsx)("i",{style:{marginRight:"5px"},className:"fa fa-github"}),"View on GitHub"]})})]})},te=Object(C.a)({root:{width:"300px",margin:"30px"},grid:{marginTop:"10px",marginBottom:"10px"},icon:{textAlign:"center",marginTop:"10px"}}),ne=function(){var e=Object(i.useState)([]),a=Object(l.a)(e,2),t=a[0],c=a[1],s=Object(i.useState)(!0),r=Object(l.a)(s,2),o=r[0],j=r[1],m=Object(i.useState)(!1),b=Object(l.a)(m,2),h=b[0],d=b[1],u=te();return Object(i.useEffect)((function(){E.getUserRepositories("alexiszamanidis").then((function(e){var a=e.data;c(a),j(!1)})).catch((function(e){d(e),j(!1)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"".concat(u.icon," fa-3x"),children:Object(n.jsx)("i",{className:"fa fa-github"+(!0===o?" fa-spin":"")})}),h&&Object(n.jsx)(J.a,{severity:"error",children:"Something happened"}),Object(n.jsx)(B.a,{container:!0,spacing:3,className:u.grid,children:t.map((function(e){return Object(n.jsx)(B.a,{item:!0,xs:12,sm:4,md:4,children:Object(n.jsx)(ae,{name:e.name,description:e.description,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count})},e.id)}))})]})},ie=function(){return Object(n.jsx)(W.a,{children:Object(n.jsx)(ne,{})})},ce=t(132),se=t(134),re=t(133),le=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Copyright:"," ",Object(n.jsx)("a",{rel:"noopener noreferrer",href:"https://github.com/alexiszamanidis",target:"_blank",children:Object(n.jsx)("b",{children:" alexiszamanidis"})})]})})},oe=function(){var e=Object(i.useState)(0),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(ce.a,{position:"static",color:"default",children:Object(n.jsx)(se.a,{value:t,onChange:function(e,a){return c(a)},variant:"fullWidth",children:m.map((function(e,a){return Object(n.jsx)(re.a,Object(r.a)({},e),a)}))})}),0===t?Object(n.jsx)(Q,{}):1===t?Object(n.jsx)(ie,{}):null]}),Object(n.jsx)(le,{})]})};t(81);s.a.render(Object(n.jsx)(oe,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.cb2b1a08.chunk.js.map
(this["webpackJsonpwebpage-yaya-usman"]=this["webpackJsonpwebpage-yaya-usman"]||[]).push([[0],{13:function(e,t,c){e.exports={menu:"Menu_menu__a_cLO",active:"Menu_active__2eDQ8",icons:"Menu_icons__2IHXL"}},14:function(e,t,c){e.exports={navbar:"Navbar_navbar__Q3O6I",wrapper:"Navbar_wrapper__3Qrk0",logo:"Navbar_logo__1jCz3",hamburger:"Navbar_hamburger__1qfY8",darkModeToggle:"Navbar_darkModeToggle__1M3Fg",active:"Navbar_active__1Bjtm"}},17:function(e,t,c){e.exports={app:"App_app__8N7rs",active:"App_active__2qNtC",overlay:"App_overlay__PzSXu",modalContainer:"App_modalContainer__pfACS",modal:"App_modal__SeX7Y"}},18:function(e,t,c){e.exports={projectItem:"ProjectItem_projectItem__1-X6t",thumbnail:"ProjectItem_thumbnail__2BwmY",desc:"ProjectItem_desc__1J9Qa",reverse:"ProjectItem_reverse__1UdiB",icons:"ProjectItem_icons__16nbc",tech:"ProjectItem_tech__9JZ_G"}},20:function(e,t,c){e.exports={about:"About_about__28yv2",imgContainer:"About_imgContainer__3dsAw",aboutContainer:"About_aboutContainer__138cB",contentWrapper:"About_contentWrapper__1QCP5",content:"About_content__1wOGt"}},22:function(e,t,c){e.exports={projects:"Projects_projects__W9Url",projectsContainer:"Projects_projectsContainer__1-aM-",showMore:"Projects_showMore__3Ifmr"}},32:function(e,t,c){e.exports={ctaBtn:"Button_ctaBtn__6n-VE"}},33:function(e,t,c){e.exports={breadCrumb:"BreadCrumb_breadCrumb__5dY2r"}},4:function(e,t,c){e.exports={timelineItem:"TabContent_timelineItem__3-T9t",active:"TabContent_active__wBKiL",title:"TabContent_title__2Jlzs",date:"TabContent_date__361S_",responsibility:"TabContent_responsibility__1W1lS"}},49:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(24),n=c.n(a),r=c(17),o=c.n(r),l=c(12),j=c(5),d=c(0),m=Object(i.createContext)(),b=function(e){var t=e.children,c=Object(i.useState)(!1),s=Object(j.a)(c,2),a=s[0],n=s[1];return Object(d.jsx)(m.Provider,{value:{darkMode:a,setDarkMode:n},children:t})},u=m,x=c(14),h=c.n(x),p=Object(i.createContext)(),O=function(e){var t=e.children,c=Object(i.useState)(null),s=Object(j.a)(c,2),a=s[0],n=s[1];return Object(d.jsx)(p.Provider,{value:{activeLink:a,setActiveLink:n},children:t})},_=p,v=function(){var e=Object(i.useContext)(u),t=e.darkMode,c=e.setDarkMode,s=Object(i.useContext)(_).setActiveLink;return Object(d.jsx)("div",{className:"".concat(h.a.navbar," ").concat(t&&h.a.active),children:Object(d.jsxs)("div",{className:h.a.wrapper,children:[Object(d.jsx)("div",{className:h.a.left,children:Object(d.jsxs)(l.b,{to:"/",className:h.a.logo,onClick:function(){return s(1)},children:[Object(d.jsx)("span",{children:"<"}),Object(d.jsx)("span",{className:h.a.logoname,children:"\xa0Yaya Usman\xa0"}),Object(d.jsx)("span",{children:"/>"})]})}),Object(d.jsx)("div",{className:h.a.right,children:Object(d.jsx)("div",{className:h.a.darkModeToggle,onClick:function(){return c(!t)},children:t?Object(d.jsx)("i",{class:"fas fa-moon"}):Object(d.jsx)("i",{class:"fas fa-sun"})})})]})})},g=c(13),f=c.n(g),N=c(56),C=c(57),k=c(58),y=c(59),w=[{id:1,text:"Home",icon:Object(d.jsx)(N.a,{className:f.a.icons}),to:"/"},{id:2,text:"About",icon:Object(d.jsx)(C.a,{className:f.a.icons}),to:"/about"},{id:3,text:"Projects",icon:Object(d.jsx)(k.a,{className:f.a.icons}),to:"/projects"},{id:4,text:"Contact",icon:Object(d.jsx)(y.a,{className:f.a.icons}),to:"/contact"}],L=function(){var e=Object(i.useContext)(_),t=e.activeLink,c=e.setActiveLink,s=Object(i.useContext)(u).darkMode;Object(i.useEffect)((function(){c(JSON.parse(window.sessionStorage.getItem("activeLink")))}),[]),Object(i.useEffect)((function(){window.sessionStorage.setItem("activeLink",t)}),[t]);return Object(d.jsx)("div",{className:"".concat(f.a.menu," ").concat(s&&f.a.active),children:w.map((function(e,i){return Object(d.jsxs)(l.b,{to:e.to,className:"".concat(e.id===t&&f.a.active),onClick:function(){return t=e.id,c(t);var t},children:[e.icon,Object(d.jsx)("span",{children:e.text})]},i)}))})},S=c(32),A=c.n(S),M=function(e){var t=e.btnText;return Object(d.jsx)("button",{className:A.a.ctaBtn,children:t})},I=c(33),q=c.n(I),P=function(e){var t=e.title,c=Object(i.useContext)(_),s=(c._,c.setActiveLink);return Object(d.jsxs)("div",{className:q.a.breadCrumb,children:[Object(d.jsx)(l.b,{to:"/",onClick:function(){return s(1)},children:"Home"}),Object(d.jsx)("span",{style:{margin:"0 9px"},children:"/"}),Object(d.jsx)("span",{style:{color:"#11223a"},children:t})]})},E=c(4),T=c.n(E),B=function(e){var t=e.tabActive,c=e.setTabActive;return Object(i.useEffect)((function(){c(1)}),[]),Object(d.jsxs)("div",{className:T.a.timeline,children:[Object(d.jsxs)("div",{className:"".concat(T.a.timelineItem," ").concat(1===t&&T.a.active),children:[Object(d.jsxs)("span",{className:T.a.title,children:["Software Engineering Intern ",Object(d.jsx)("a",{href:"#work3",children:"@work3"})]}),Object(d.jsx)("span",{className:T.a.date,children:"March 2021 - present"}),Object(d.jsxs)("ul",{className:T.a.responsibility,children:[Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"})]})]}),Object(d.jsxs)("div",{className:"".concat(T.a.timelineItem," ").concat(2===t&&T.a.active),children:[Object(d.jsxs)("span",{className:T.a.title,children:["Frontend Developer Intern ",Object(d.jsx)("a",{href:"#work3",children:"@Microsoft"})]}),Object(d.jsx)("span",{className:T.a.date,children:"May 2021 - August 2021"}),Object(d.jsxs)("ul",{className:T.a.responsibility,children:[Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"})]})]}),Object(d.jsxs)("div",{className:"".concat(T.a.timelineItem," ").concat(3===t&&T.a.active),children:[Object(d.jsxs)("span",{className:T.a.title,children:["Backend Engineer ",Object(d.jsx)("a",{href:"#work3",children:"@Apple"})]}),Object(d.jsx)("span",{className:T.a.date,children:"September 2021 - December 2021"}),Object(d.jsxs)("ul",{className:T.a.responsibility,children:[Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"})]})]}),Object(d.jsxs)("div",{className:"".concat(T.a.timelineItem," ").concat(4===t&&T.a.active),children:[Object(d.jsxs)("span",{className:T.a.title,children:["Backend Engineer ",Object(d.jsx)("a",{href:"#work3",children:"@Google"})]}),Object(d.jsx)("span",{className:T.a.date,children:"September 2021 - December 2021"}),Object(d.jsxs)("ul",{className:T.a.responsibility,children:[Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"}),Object(d.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisi"})]})]})]})},Q=(c.p,c(7)),H=c.n(Q),R=function(){var e=Object(i.useState)(null),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(d.jsxs)("div",{className:H.a.experience,children:[Object(d.jsxs)("div",{className:H.a.leftBox,children:[Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{class:"fas fa-caret-right"})," Relevant Experience"]}),Object(d.jsxs)("div",{className:H.a.tabContainer,children:[Object(d.jsx)("div",{className:H.a.tablist,children:[{id:1,workplace:"work3"},{id:2,workplace:"Microsoft"},{id:3,workplace:"Apple"},{id:4,workplace:"Google"}].map((function(e,t){return Object(d.jsx)("button",{className:"".concat(e.id===c&&H.a.active),onClick:function(){return t=e.id,s(t);var t},children:e.workplace},t)}))}),Object(d.jsx)("div",{className:H.a.tabContent,children:Object(d.jsx)(B,{tabActive:c,setTabActive:s})})]})]}),Object(d.jsxs)("div",{className:H.a.rightBox,children:[Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{class:"fas fa-caret-right"})," Skills"]}),Object(d.jsxs)("div",{className:H.a.skills,children:[Object(d.jsxs)("div",{className:H.a.languages,children:[Object(d.jsx)("h4",{children:"languages"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Javascript(ES6+)"}),Object(d.jsx)("li",{children:"Typescript"}),Object(d.jsx)("li",{children:"Html5"}),Object(d.jsx)("li",{children:"(S)CSS"}),Object(d.jsx)("li",{children:"SQL"}),Object(d.jsx)("li",{children:"NoSQL"}),Object(d.jsx)("li",{children:"Python"})]})]}),Object(d.jsxs)("div",{className:H.a.frameworks,children:[Object(d.jsx)("h4",{children:"frameworks/libraries"}),Object(d.jsx)("li",{children:"React"}),Object(d.jsx)("li",{children:"Redux"}),Object(d.jsx)("li",{children:"NextJS"}),Object(d.jsx)("li",{children:"NodeJS"}),Object(d.jsx)("li",{children:"Express"}),Object(d.jsx)("li",{children:"Mongoose"})]}),Object(d.jsxs)("div",{className:H.a.tools,children:[Object(d.jsx)("h4",{children:"tools"}),Object(d.jsx)("li",{children:"Git/Github"}),Object(d.jsx)("li",{children:"npm"}),Object(d.jsx)("li",{children:"RestAPI"}),Object(d.jsx)("li",{children:"GraphQL"}),Object(d.jsx)("li",{children:"PostMan"}),Object(d.jsx)("li",{children:"Firebase"}),Object(d.jsx)("li",{children:"MongoDb(Atlas)"})]}),Object(d.jsxs)("div",{className:H.a.design,children:[Object(d.jsx)("h4",{children:"design"}),Object(d.jsx)("li",{children:"figma"}),Object(d.jsx)("li",{children:"balsamiq"})]})]})]})]})},G=c(18),F=c.n(G),D=Object(i.createContext)(),J=function(e){var t=e.children,c=Object(i.useState)(!1),s=Object(j.a)(c,2),a=s[0],n=s[1];return Object(d.jsx)(D.Provider,{value:{openModal:a,setOpenModal:n},children:t})},W=D,Y=Object(i.createContext)(),X=function(e){var t=e.children,c=Object(i.useState)({img:"",title:""}),s=Object(j.a)(c,2),a=s[0],n=s[1];return Object(d.jsx)(Y.Provider,{value:{modalProps:a,setModalProps:n},children:t})},z=Y,U=function(e){var t=e.id,c=e.img,s=e.title,a=e.desc,n=e.githubLink,r=e.livesite,o=e.list,l=Object(i.useContext)(W),j=l.openModal,m=l.setOpenModal,b=Object(i.useContext)(z).setModalProps;return Object(d.jsxs)("div",{className:"".concat(F.a.projectItem," ").concat(t%2===0&&F.a.reverse),children:[Object(d.jsxs)("div",{className:F.a.thumbnail,onClick:function(){m(!j),b({img:c,title:s})},children:[Object(d.jsx)("img",{src:c,alt:s}),Object(d.jsx)("button",{children:Object(d.jsx)("i",{className:"fas fa-search-plus"})})]}),Object(d.jsxs)("div",{className:F.a.desc,children:[Object(d.jsx)("a",{href:r,target:"_blank",children:Object(d.jsx)("h2",{children:s})}),Object(d.jsx)("p",{children:a}),Object(d.jsx)("ul",{className:F.a.tech,children:o.map((function(e,t){return Object(d.jsx)("li",{children:e})}))}),Object(d.jsxs)("div",{className:F.a.icons,target:"_blank",children:[Object(d.jsx)("a",{href:n,children:Object(d.jsx)("i",{className:"fab fa-github"})}),Object(d.jsx)("a",{href:r,target:"_blank",children:Object(d.jsx)("i",{className:"fas fa-external-link-alt"})})]})]})]})},K=function(e){var t=e.img,c=e.title;return Object(d.jsxs)("div",{className:o.a.modalContainer,children:[Object(d.jsx)("img",{className:o.a.modal,src:t,alt:c}),";"]})},V=c(8),Z=c.n(V),$=c.p+"static/media/manOnTable.3f82afce.svg",ee=c(34),te=c(60),ce=c(61),ie=c(62),se=c(63),ae=c(64),ne=function(){var e=Object(i.useRef)(),t=Object(i.useContext)(_),c=(t._,t.setActiveLink);return Object(i.useEffect)((function(){Object(ee.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Full stack developer","tech writer","freelancer"]})}),[]),Object(d.jsxs)("div",{className:Z.a.home,children:[Object(d.jsx)("div",{className:Z.a.left,children:Object(d.jsx)("div",{className:Z.a.imgContainer,children:Object(d.jsx)("img",{src:$,alt:"homepic"})})}),Object(d.jsx)("div",{className:Z.a.right,children:Object(d.jsxs)("div",{className:Z.a.wrapper,children:[Object(d.jsx)("h3",{children:"Hi there, I'm "}),Object(d.jsx)("h1",{children:"Yaya Usman"}),Object(d.jsxs)("h3",{children:["A ",Object(d.jsx)("span",{ref:e})]}),Object(d.jsxs)("div",{className:Z.a.socials,children:[Object(d.jsx)("a",{href:"#github",className:Z.a.socialIcon,children:Object(d.jsx)(te.a,{})}),Object(d.jsx)("a",{href:"#linkedin",className:Z.a.socialIcon,children:Object(d.jsx)(ce.a,{})}),Object(d.jsx)("a",{href:"#gmail",className:Z.a.socialIcon,children:Object(d.jsx)(ie.a,{})}),Object(d.jsx)("a",{href:"#twitter",className:Z.a.socialIcon,children:Object(d.jsx)(se.a,{})}),Object(d.jsx)("a",{href:"#instagram",className:Z.a.socialIcon,children:Object(d.jsx)(ae.a,{})})]}),Object(d.jsx)("a",{href:"#resume",style:{marginRight:"15px"},children:Object(d.jsx)(M,{btnText:"see resume"})}),Object(d.jsx)(l.b,{to:"/contact",onClick:function(){return c(4)},children:Object(d.jsx)(M,{btnText:"contact me"})})]})})]})},re=c(20),oe=c.n(re),le=c.p+"static/media/homepic.ce3fb9c9.jpg";var je=function(){return Object(d.jsxs)("div",{className:oe.a.about,children:[Object(d.jsx)(P,{title:"About"}),Object(d.jsxs)("div",{className:oe.a.aboutContainer,children:[Object(d.jsx)("div",{className:oe.a.imgContainer,children:Object(d.jsx)("img",{src:le,alt:"homepic"})}),Object(d.jsxs)("div",{className:oe.a.contentWrapper,children:[Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{class:"fas fa-caret-right"})," About Me"]}),Object(d.jsxs)("div",{className:oe.a.content,children:[Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellendus cum deleniti error eligendi similique, aliquam excepturi doloremque culpa aliquid amet quos accusamus delectus quas odio modi. Eum, obcaecati dolorem?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, corrupti tenetur quis quas vitae corporis dicta qui accusantium ipsam voluptatem, exercitationem voluptatum animi tempora sed veniam architecto voluptates? Odio,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti magni recusandae pariatur, quo nisi deserunt nulla eius iure atque maiores fugiat assumenda voluptates explicabo repudiandae sunt? Nesciunt, consequatur quaerat?"}),Object(d.jsx)(M,{btnText:"see resume"})]})]})]}),Object(d.jsx)(R,{})]})},de=c(9),me=c.n(de),be=c(35),ue=c(28);c(48);ue.a.configure();var xe=function(){var e=Object(i.useRef)();return Object(d.jsxs)("div",{className:me.a.contact,children:[Object(d.jsx)(P,{title:"Contact"}),Object(d.jsx)("div",{className:me.a.contactForm,children:Object(d.jsxs)("div",{className:me.a.formWrapper,children:[Object(d.jsx)("div",{className:me.a.left,children:Object(d.jsx)("div",{className:me.a.mapContainer,children:Object(d.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.908767078868!2d30.330542315299965!3d40.74203297932867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccadf2977958d7%3A0xc7996fa884f94c03!2sSakarya%20University!5e0!3m2!1sen!2str!4v1638547172912!5m2!1sen!2str",style:{width:"100%",height:"100%"},loading:"lazy"})})}),Object(d.jsxs)("div",{className:me.a.right,children:[Object(d.jsx)("h3",{children:"Get in touch! "}),Object(d.jsx)("p",{children:"If you have any project ideas,opportunities or want to collaborate,my inbox is open. kindly leave me a message, i'll try to get back as soon as possible."}),Object(d.jsxs)("form",{ref:e,onSubmit:function(t){t.preventDefault(),be.a.sendForm("service_apcv2ro","template_t8g4xa8",e.current,"user_E2i581JA81vY913Zv4M2u").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),ue.a.success("message sent successfully!",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.target.reset()},className:me.a.form,children:[Object(d.jsx)("input",{type:"text",placeholder:"Name",className:me.a.formTxt,name:"user_name"}),Object(d.jsx)("input",{type:"email",placeholder:"Email",className:me.a.formTxt,name:"user_email"}),Object(d.jsx)("input",{type:"text",placeholder:"Subject",className:me.a.formTxt,name:"user_subject"}),Object(d.jsx)("textarea",{placeholder:"Message",className:me.a.formTxtArea,name:"message"}),Object(d.jsx)(M,{btnText:"Send Message"})]})]})]})})]})},he=c(22),pe=c.n(he),Oe=c.p+"static/media/img1.b1b6a373.jpg",_e=c.p+"static/media/img2.3d0203c7.jpg",ve=c.p+"static/media/img3.212fca19.jpg",ge=c.p+"static/media/img4.10943de0.jpg",fe=[{id:1,img:c.p+"static/media/img5.7472f906.jpg",title:"portfolio website",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque alias illum libero a qui nobis adipisci, at, facilis eius,\n      molestias vitae beatae explicabo accusamus quos",githubLink:"https://github.com/yaya-usman",livesite:"localhost:3000",list:["React","CSS modules","ContextAPI","github pages"]},{id:2,img:Oe,title:"project2",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque alias illum libero a qui nobis adipisci, at, facilis eius,\n        molestias vitae beatae explicabo accusamus quos",githubLink:"https://github.com/yaya-usman",livesite:"localhost:3000",list:["React","CSS modules","Context API","github pages"]},{id:3,img:ve,title:"project3",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque alias illum libero a qui nobis adipisci, at, facilis eius,\n        molestias vitae beatae explicabo accusamus quos",githubLink:"https://github.com/yaya-usman",livesite:"localhost:3000",list:["React","CSS modules","Context API","github pages"]},{id:4,img:_e,title:"project4",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque alias illum libero a qui nobis adipisci, at, facilis eius,\n        molestias vitae beatae explicabo accusamus quos",githubLink:"https://github.com/yaya-usman",livesite:"localhost:3000",list:["React","CSS modules","Context API","github pages"]},{id:5,img:ge,title:"project5",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque alias illum libero a qui nobis adipisci, at, facilis eius,\n        molestias vitae beatae explicabo accusamus quos",githubLink:"https://github.com/yaya-usman",livesite:"localhost:3000",list:["React","CSS modules","Context API","github pages"]}],Ne=function(){return Object(d.jsxs)("div",{className:pe.a.projects,children:[Object(d.jsx)(P,{title:"Projects"}),Object(d.jsxs)("h2",{className:pe.a.heading,children:[Object(d.jsx)("i",{class:"fas fa-caret-right",style:{marginRight:"3px"}}),"some of my works"]}),Object(d.jsxs)("div",{className:pe.a.projectsContainer,children:[fe.map((function(e,t){return Object(d.jsx)(U,{id:e.id,img:e.img,title:e.title,desc:e.desc,githubLink:e.githubLink,livesite:e.livesite,list:e.list},t)})),Object(d.jsx)("a",{href:"http://github.com/yaya-usman",className:pe.a.showMore,target:"_blank",children:Object(d.jsx)(M,{btnText:"Show More"})})]})]})},Ce=c(3);var ke=function(){var e=Object(i.useContext)(W),t=e.openModal,c=e.setOpenModal,s=Object(i.useContext)(z).modalProps,a=Object(i.useContext)(u).darkMode;return Object(d.jsxs)(l.a,{children:[t&&Object(d.jsx)("div",{className:o.a.overlay,onClick:function(){return c(!1)},children:Object(d.jsx)(K,{img:s.img,title:s.title})}),Object(d.jsxs)("div",{className:"".concat(o.a.app," ").concat(a&&o.a.active," "),children:[Object(d.jsx)(v,{}),Object(d.jsxs)(Ce.c,{children:[Object(d.jsx)(Ce.a,{exact:!0,path:"/",element:Object(d.jsx)(ne,{})}),Object(d.jsx)(Ce.a,{exact:!0,path:"/about",element:Object(d.jsx)(je,{})}),Object(d.jsx)(Ce.a,{exact:!0,path:"/contact",element:Object(d.jsx)(xe,{})}),Object(d.jsx)(Ce.a,{exact:!0,path:"/projects",element:Object(d.jsx)(Ne,{})})]}),Object(d.jsx)(L,{})]})]})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(J,{children:Object(d.jsx)(X,{children:Object(d.jsx)(b,{children:Object(d.jsx)(ke,{})})})})})}),document.getElementById("root"))},7:function(e,t,c){e.exports={experience:"Experience_experience__Os0xl",leftBox:"Experience_leftBox__2GtaR",rightBox:"Experience_rightBox__1AHor",tabContainer:"Experience_tabContainer__100sQ",tablist:"Experience_tablist__qvkB3",active:"Experience_active__3m-cv",tabContent:"Experience_tabContent__pv3XM",skills:"Experience_skills__Qw2ym",frameworks:"Experience_frameworks__26810",languages:"Experience_languages__GDbjS",tools:"Experience_tools__1urQS",design:"Experience_design__tPveq"}},8:function(e,t,c){e.exports={home:"Home_home__1dKGu",right:"Home_right__36s1I",left:"Home_left__1arec",imgContainer:"Home_imgContainer__mr0FH",blink:"Home_blink__3V5BG",socials:"Home_socials__2Xn2z",socialIcon:"Home_socialIcon__3_X5m"}},9:function(e,t,c){e.exports={contact:"Contact_contact__3FPiE",contactContainer:"Contact_contactContainer__1CTXj",contactForm:"Contact_contactForm__Riz0w",formWrapper:"Contact_formWrapper__cYeBo",left:"Contact_left__3g-ey",mapContainer:"Contact_mapContainer___5nGY",right:"Contact_right__-oslW",form:"Contact_form__T4lPz",formTxt:"Contact_formTxt__2FwMK",formTxtArea:"Contact_formTxtArea__vQFLU"}}},[[49,1,2]]]);
//# sourceMappingURL=main.ffbb172a.chunk.js.map
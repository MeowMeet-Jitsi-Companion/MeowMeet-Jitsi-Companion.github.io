"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[714],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:2},l="Admin Area",u={unversionedId:"tutorial-admin/admin",id:"tutorial-admin/admin",title:"Admin Area",description:"After you login, go to /admin of the server.",source:"@site/docs/tutorial-admin/admin.md",sourceDirName:"tutorial-admin",slug:"/tutorial-admin/admin",permalink:"/docs/tutorial-admin/admin",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating Admin User",permalink:"/docs/tutorial-admin/create"},next:{title:"Move Servers",permalink:"/docs/category/move-servers"}},d={},s=[{value:"Add A Meeting",id:"add-a-meeting",level:2},{value:"Note",id:"note",level:3},{value:"Modify a meetings participants",id:"modify-a-meetings-participants",level:2},{value:"Delete a meeting",id:"delete-a-meeting",level:2}],p={toc:s};function m(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-area"},"Admin Area"),(0,a.kt)("p",null,"After you login, go to /admin of the server."),(0,a.kt)("h2",{id:"add-a-meeting"},"Add A Meeting"),(0,a.kt)("p",null,"In the last item of sheet, type in a new id, and make a participant and admin list seperated by ';' symbol(username)."),(0,a.kt)("p",null,"For Example:\n",(0,a.kt)("inlineCode",{parentName:"p"},"User1;User 2;User3;"),"\n",(0,a.kt)("img",{src:n(8511).Z,width:"1280",height:"875"})),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("p",null,"Admins cannot include users in Participant list"),(0,a.kt)("h2",{id:"modify-a-meetings-participants"},"Modify a meetings participants"),(0,a.kt)("p",null,'Select the meeting you want and change the participants and admins. After your change, click the "Save" button in that row.'),(0,a.kt)("h2",{id:"delete-a-meeting"},"Delete a meeting"),(0,a.kt)("p",null,'Select the meeting you want and click the "Delete" button in that row.'))}m.isMDXComponent=!0},8511:function(e,t,n){t.Z=n.p+"assets/images/add-7b3155bd8ec2c6ae101d367366fe024d.png"}}]);
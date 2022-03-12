(function(){"use strict";var e={3710:function(e,n,t){t(6992),t(8674),t(9601),t(7727),t(1539),t(4747),t(7941);var r=t(9963),o=t(2610),u=t(137),a=(t(4415),t(5954)),i=t(4239),c=t(6252);function s(e,n){var t=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(t)}var l=t(3744);const d={},f=(0,l.Z)(d,[["render",s]]);var m=f,p=t(1836),h=t(3577),g=["src"],v=["src"];function b(e,n,r,o,u,a){var i=(0,c.up)("el-tooltip");return"mysql"==r.databaseType.toLowerCase()?((0,c.wg)(),(0,c.j4)(i,{key:0,content:r.databaseType,placement:"left"},{default:(0,c.w5)((function(){return[(0,c._)("img",{src:t(2357),style:{"max-width":"33px","max-height":"33px"}},null,8,g)]})),_:1},8,["content"])):"postgresql"==r.databaseType.toLowerCase()?((0,c.wg)(),(0,c.j4)(i,{key:1,content:r.databaseType,placement:"left"},{default:(0,c.w5)((function(){return[(0,c._)("img",{src:t(3609),style:{"max-width":"33px","max-height":"33px"}},null,8,v)]})),_:1},8,["content"])):((0,c.wg)(),(0,c.iD)(c.HY,{key:2},[(0,c.Uk)((0,h.zw)(r.databaseType),1)],64))}var w={props:{databaseType:String}};const y=(0,l.Z)(w,[["render",b]]);var k=y,_=(0,r.ri)(m);Object.keys(u).forEach((function(e){_.component(e,u[e])})),_.component("database-icon",k),_.directive("require-roles",{mounted:function(e,n){var t=n.value;p.E.hasAnyRoles(t)||e.parentNode&&e.parentNode.removeChild(e)}}),_.directive("select-more",{updated:function(e,n){var t=e.querySelector(".select-trigger"),r=t.getAttribute("aria-describedby"),o=document.getElementById(r),u=o.querySelector(".el-scrollbar .el-select-dropdown__wrap");u.addEventListener("scroll",(function(){var e=this.scrollHeight-this.scrollTop-1<=this.clientHeight;e&&n.value()}))}}),_.use(i.Z),_.use(o.Z),_.use(a.Z),_.mount("#app")},5954:function(e,n,t){t.d(n,{Z:function(){return H}});t(1539),t(8783),t(3948);var r=t(2119),o=t(6252);function u(e,n,t,r,u,a){var i=(0,o.up)("AppNav"),c=(0,o.up)("el-aside"),s=(0,o.up)("Breadcrumb"),l=(0,o.up)("Avatar"),d=(0,o.up)("el-header"),f=(0,o.up)("router-view"),m=(0,o.up)("el-main"),p=(0,o.up)("el-container");return(0,o.wg)(),(0,o.j4)(p,{class:"databasir"},{default:(0,o.w5)((function(){return[(0,o.Wm)(c,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(i,{class:"databasir-nav"})]})),_:1}),(0,o.Wm)(d,{class:"databasir-main-header"},{default:(0,o.w5)((function(){return[(0,o.Wm)(s),(0,o.Wm)(l)]})),_:1}),(0,o.Wm)(m,{class:"databasir-main"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(m,{class:"databasir-main-content"},{default:(0,o.w5)((function(){return[(0,o.Wm)(f)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var a=t(3577),i=(0,o._)("span",null,"Databasir",-1);function c(e,n,t,r,u,c){var s=(0,o.up)("home-filled"),l=(0,o.up)("el-icon"),d=(0,o.up)("el-menu-item"),f=(0,o.up)("el-sub-menu"),m=(0,o.up)("el-menu");return(0,o.wg)(),(0,o.j4)(m,{router:"",collapse:r.isCollapse,mode:"vertical",class:"left-menu"},{default:(0,o.w5)((function(){return[(0,o.Wm)(d,{index:"/"},{title:(0,o.w5)((function(){return[i]})),default:(0,o.w5)((function(){return[(0,o.Wm)(l,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(s)]})),_:1})]})),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.routes,(function(e,n){return(0,o.wg)(),(0,o.iD)(o.HY,{key:n},[r.isShowMenu(e)&&e.children.length>0&&e.children.some((function(e){return!e.hidden}))?((0,o.wg)(),(0,o.j4)(f,{key:0,index:e.path},{title:(0,o.w5)((function(){return[(0,o.Wm)(l,null,{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.icon)))]})),_:2},1024),(0,o._)("span",null,(0,a.zw)(e.meta.nav),1)]})),default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.children,(function(t,r){return(0,o.wg)(),(0,o.iD)(o.HY,{key:n+"-"+r},[t.hidden?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,index:e.path+"/"+t.path},{title:(0,o.w5)((function(){return[(0,o._)("span",null,(0,a.zw)(t.meta.nav),1)]})),default:(0,o.w5)((function(){return[t.icon?((0,o.wg)(),(0,o.j4)(l,{key:0},{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.j4)((0,o.LL)(t.icon)))]})),_:2},1024)):(0,o.kq)("",!0)]})),_:2},1032,["index"]))],64)})),128))]})),_:2},1032,["index"])):r.isShowMenu(e)?((0,o.wg)(),(0,o.j4)(d,{key:1,index:e.path},{title:(0,o.w5)((function(){return[(0,o._)("span",null,(0,a.zw)(e.meta.nav),1)]})),default:(0,o.w5)((function(){return[(0,o.Wm)(l,null,{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.icon)))]})),_:2},1024)]})),_:2},1032,["index"])):(0,o.kq)("",!0)],64)})),128))]})),_:1},8,["collapse"])}var s=t(2262),l=t(1836),d=t(4239),f={setup:function(){var e=(0,s.Fl)((function(){return d.Z.state.menu.isCollapse})),n=(0,r.tv)(),t=n.options.routes,o=function(e){if(e.hidden)return!1;if(e.meta.requireAnyRoles&&e.meta.requireAnyRoles.length>0){var n=l.E.hasAnyRoles(e.meta.requireAnyRoles);if(!n)return!1}return!0},u=function(){d.Z.commit("expandMenu")};return{isCollapse:e,isShowMenu:o,expandMenu:u,routes:t}}},m=t(3744);const p=(0,m.Z)(f,[["render",c]]);var h=p;t(8309);function g(e,n,t,r,u,i){var c=(0,o.up)("fold"),s=(0,o.up)("el-icon"),l=(0,o.up)("el-link"),d=(0,o.up)("el-breadcrumb-item"),f=(0,o.up)("el-breadcrumb");return(0,o.wg)(),(0,o.j4)(f,{separator:"/"},{default:(0,o.w5)((function(){return[i.menuIsCollapse?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0},{default:(0,o.w5)((function(){return[(0,o.Wm)(l,{onClick:n[0]||(n[0]=function(e){return i.onFoldMenu()}),underline:!1},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(c)]})),_:1})]})),_:1})]})),_:1})),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.breadcrumbs,(function(e,n){return(0,o.wg)(),(0,o.j4)(d,{key:n,to:e.to},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.name),1)]})),_:2},1032,["to"])})),128))]})),_:1})}var v={data:function(){},computed:{breadcrumbs:function(){return"function"===typeof this.$route.meta.breadcrumb?this.$route.meta.breadcrumb(this.$route,this.$store.state):[]},menuIsCollapse:function(){return this.$store.state.menu.isCollapse}},methods:{onFoldMenu:function(){this.$store.commit("foldMenu")}}};const b=(0,m.Z)(v,[["render",g]]);var w=b,y=(0,o.Uk)("个人中心"),k=(0,o.Uk)("注销登陆");function _(e,n,t,r,u,i){var c=(0,o.up)("el-avatar"),s=(0,o.up)("el-dropdown-item"),l=(0,o.up)("el-dropdown-menu"),d=(0,o.up)("el-dropdown");return(0,o.wg)(),(0,o.j4)(d,null,{dropdown:(0,o.w5)((function(){return[(0,o.Wm)(l,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(i.userNickname),1)]})),_:1}),(0,o.Wm)(s,{icon:"user",divided:"",onClick:n[0]||(n[0]=function(e){return i.toProfilePage()})},{default:(0,o.w5)((function(){return[y]})),_:1}),(0,o.Wm)(s,{icon:"back",onClick:n[1]||(n[1]=function(e){return i.onLogout()})},{default:(0,o.w5)((function(){return[k]})),_:1})]})),_:1})]})),default:(0,o.w5)((function(){return[(0,o.Wm)(c,{size:36,src:i.avatarUrl,icon:"avatar"},null,8,["src"])]})),_:1})}var j={computed:{userNickname:function(){return this.$store.state.user.nickname},avatarUrl:function(){return this.$store.state.user.avatar}},methods:{onLogout:function(){l.E.removeUserLoginData(),this.$router.push({path:"/login"})},toProfilePage:function(){this.$router.push({path:"/profile"})}}};const S=(0,m.Z)(j,[["render",_]]);var T=S,A={components:{AppNav:h,Breadcrumb:w,Avatar:T}};const L=(0,m.Z)(A,[["render",u]]);var N=L;function q(){return{name:"首页",to:{path:"/"}}}function E(){return{name:"项目中心",to:{name:"groupListPage"}}}function P(e){var n="项目组";return e.query.groupName&&(n=e.query.groupName),{name:n,to:{path:"/groups/"+e.params.groupId}}}function x(e){var n="项目文档";e.query.projectName&&(n=e.query.projectName);var t=e.params.projectId,r=e.params.groupId;return{name:n,to:{path:"/groups/"+r+"/projects/"+t+"/documents",query:{projectName:n}}}}function C(){return{name:"用户列表",to:{path:"/users"}}}function I(){return{name:"个人中心",to:{path:"/profile"}}}function O(){return{name:"邮箱设置",to:{path:"/settings/sysEmail"}}}function D(){return{name:"操作日志",to:{path:"/settings/sysLog"}}}function W(){return{name:"登录设置",to:{path:"/settings/sysOauth2"}}}function M(){return{name:"数据库类型",to:{path:"/settings/sysDatabaseType"}}}var U={index:function(){return[q()]},groupList:function(){return[q(),E()]},groupDashboard:function(e,n){return[q(),E(),P(e,n)]},groupProjectDocument:function(e,n){return[q(),E(),P(e,n),x(e)]},userProfile:function(){return[q(),I()]},userList:function(){return[q(),C()]},sysEmailEdit:function(){return[q(),O()]},sysLog:function(){return[q(),D()]},sysOauth2:function(){return[q(),W()]},sysDatabaseType:function(){return[q(),M()]}},Z=U,R=[{path:"/login",component:function(){return Promise.all([t.e(269),t.e(139)]).then(t.bind(t,1139))},hidden:!0,meta:{requireAuth:!1}},{path:"/login/oauth2/:id",component:function(){return Promise.all([t.e(269),t.e(865)]).then(t.bind(t,8865))},hidden:!0,props:!0,meta:{requireAuth:!1}},{path:"/",hidden:!0,component:N,children:[{path:"",hidden:!0,component:function(){return Promise.all([t.e(269),t.e(924),t.e(355)]).then(t.bind(t,7596))},meta:{breadcrumb:Z.groupList}}]},{path:"/groups",icon:"Collection",component:N,meta:{nav:"项目中心"},children:[{path:"",name:"groupListPage",hidden:!0,component:function(){return Promise.all([t.e(269),t.e(924),t.e(355)]).then(t.bind(t,7596))},meta:{breadcrumb:Z.groupList}},{path:":groupId",hidden:!0,component:function(){return Promise.all([t.e(269),t.e(924),t.e(459)]).then(t.bind(t,9459))},meta:{breadcrumb:Z.groupDashboard}},{path:":groupId/projects/:projectId/documents",hidden:!0,component:function(){return Promise.all([t.e(269),t.e(395)]).then(t.bind(t,6395))},meta:{breadcrumb:Z.groupProjectDocument}}]},{path:"/users",icon:"List",component:N,meta:{nav:"用户中心",requireAnyRoles:["SYS_OWNER"]},children:[{path:"",hidden:!0,component:function(){return Promise.all([t.e(269),t.e(719)]).then(t.bind(t,9719))},meta:{breadcrumb:Z.userList}}]},{path:"/profile",icon:"User",component:N,meta:{nav:"个人中心",breadcrumb:Z.userProfile},children:[{path:"",hidden:!0,component:function(){return Promise.all([t.e(269),t.e(469)]).then(t.bind(t,6469))}}]},{path:"/settings",icon:"Setting",component:N,meta:{nav:"系统中心",requireAnyRoles:["SYS_OWNER"]},children:[{path:"sysEmail",icon:"Notification",component:function(){return Promise.all([t.e(269),t.e(596)]).then(t.bind(t,2631))},meta:{nav:"邮箱设置",breadcrumb:Z.sysEmailEdit}},{path:"sysLog",icon:"Document",component:function(){return Promise.all([t.e(269),t.e(99)]).then(t.bind(t,2099))},meta:{nav:"操作日志",breadcrumb:Z.sysLog}},{path:"sysOauth2",icon:"Connection",component:function(){return Promise.all([t.e(269),t.e(754)]).then(t.bind(t,7754))},meta:{nav:"登陆设置",breadcrumb:Z.sysOauth2}},{path:"sysDatabaseType",icon:"office-building",component:function(){return Promise.all([t.e(269),t.e(117)]).then(t.bind(t,1781))},meta:{nav:"数据库类型",breadcrumb:Z.sysDatabaseType}},{path:"sysKey",icon:"Key",hidden:"true",component:N,meta:{nav:"系统秘钥",breadcrumb:Z.sysKeyEdit}}]}],$=(0,r.p7)({history:(0,r.PO)(),routes:R});$.beforeEach((function(e,n,t){0==e.meta.requireAuth?"/login"==e.path&&l.r.hasAccessToken()?t(n):t():l.r.hasAccessToken()?t():t({path:"/login"})})),$.beforeEach((function(e,n,t){!e.query.groupName&&n.query.groupName&&(e.query.groupName=n.query.groupName),!e.query.projectName&&n.query.projectName&&(e.query.projectName=n.query.projectName),t()}));var H=$},4239:function(e,n,t){var r=t(8637),o=t(1836),u=(0,r.MT)({state:function(){var e={user:{nickname:null,usernmae:null,email:null,avatar:null},groupListActiveTab:null,menu:{isCollapse:!0}},n=o.E.loadUserLoginData();return n&&(e.user.nickname=n.nickname,e.user.usernmae=n.usernmae,e.user.email=n.email,e.user.avatar=n.avatar),e},mutations:{userUpdate:function(e,n){n.nickname&&(e.user.nickname=n.nickname),n.usernmae&&(e.user.usernmae=n.usernmae),n.email&&(e.user.email=n.email),n.avatar&&(e.user.avatar=n.avatar)},foldMenu:function(e){e.menu.isCollapse=!0},expandMenu:function(e){e.menu.isCollapse=!1},switchGroupListActiveTab:function(e,n){n&&(e.groupListActiveTab=n)}}});n["Z"]=u},1836:function(e,n,t){t.d(n,{r:function(){return a},E:function(){return i}});t(8862),t(1539),t(1249);var r="accessToken",o="accessTokenExpireAt",u="userLoginData",a={hasAccessToken:function(){var e=this.loadAccessToken();return e},hasValidAccessToken:function(){var e=this.loadAccessToken(),n=window.localStorage.getItem(o);return e&&n?n>(new Date).getTime()-1e4:(console.log("warn: not found accessToken and expireAt key"),!1)},saveAccessToken:function(e,n){window.localStorage.setItem(r,e),window.localStorage.setItem(o,n)},loadAccessToken:function(){var e=window.localStorage.getItem(r);return e||null}},i={saveUserLoginData:function(e){window.localStorage.setItem(r,e.accessToken),window.localStorage.setItem(o,e.accessTokenExpireAt),window.localStorage.setItem(u,JSON.stringify(e))},removeUserLoginData:function(){window.localStorage.removeItem(u),window.localStorage.removeItem(r),window.localStorage.removeItem(o)},loadUserLoginData:function(){if(!window.localStorage.getItem(u))return null;var e=window.localStorage.getItem(u);return JSON.parse(e)},hasAnyRoles:function(e){var n=window.localStorage.getItem(u);if(null==n)return!1;var t=JSON.parse(n);return t.roles.map((function(e){return e.groupId?e.role+"?groupId="+e.groupId:e.role})).some((function(n){return e.some((function(e){return e==n}))}))},getRefreshToken:function(){var e=window.localStorage.getItem(u);if(null==e)return null;var n=JSON.parse(e);return n.refreshToken}}},2357:function(e,n,t){e.exports=t.p+"img/MySQL.c8f47618.svg"},3609:function(e,n,t){e.exports=t.p+"img/PostgreSQL.6e3d3a5e.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],u=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{99:"6cfcb3aa",117:"72d604e3",139:"a43600d3",269:"1ed6e867",355:"023e4ab2",395:"e525ab53",459:"5a5a02e8",469:"3e02203b",596:"d1261d0e",719:"85eb5e28",754:"2b22ae65",865:"fc2fd7b3",924:"804cf0e0"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{139:"a7dec339",355:"b144be0e",395:"edb95c8a",459:"82a2f213",865:"7df1e56e"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="databasir-frontend:";t.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+u){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=r),e[r]=[o];var f=function(n,t){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)t();else{var a=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=u,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===n)return o}},r=function(r){return new Promise((function(o,u){var a=t.miniCssF(r),i=t.p+a;if(n(a,i))return o();e(r,i,o,u)}))},o={143:0};t.f.miniCss=function(e,n){var t={139:1,355:1,395:1,459:1,865:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var a=t.p+t.u(n),i=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,a=r[0],i=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var l=c(t)}for(n&&n(r);s<a.length;s++)u=a[s],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunkdatabasir_frontend"]=self["webpackChunkdatabasir_frontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3710)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.2527a373.js.map
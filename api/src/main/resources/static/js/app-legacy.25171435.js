(function(){"use strict";var e={40152:function(e,n,t){t.d(n,{x4:function(){return o},rd:function(){return a},jb:function(){return u}});var r=t(63872),o=function(e){var n=new FormData;return n.append("username",e.username),n.append("password",e.password),r.Z.post("/login",n)},a=function(e,n){return r.Z.get("/oauth2/login/"+e,{params:n})},u=function(e){return r.Z.post("/access_tokens",{refreshToken:e})}},21381:function(e,n,t){t(66992),t(88674),t(19601),t(17727),t(41539),t(54747),t(47941);var r=t(49963),o=t(90605),a=t(30137),u=(t(54689),t(30837)),i=t(99622),c=t(66246),s=(t(54415),t(71435)),l=t(24239),d=t(66252);function f(e,n){var t=(0,d.up)("router-view");return(0,d.wg)(),(0,d.j4)(t)}var p=t(83744);const m={},h=(0,p.Z)(m,[["render",f]]);var g=h,w=t(51836),y=t(3577),v=["src"],b=["src"],k=["src"],S=["src"],_=["src"],x=["src"];function j(e,n,r,o,a,u){var i=(0,d.up)("el-tooltip");return"mysql"==r.databaseType.toLowerCase()?((0,d.wg)(),(0,d.j4)(i,{key:0,content:r.databaseType,placement:"left"},{default:(0,d.w5)((function(){return[(0,d._)("img",{src:t(92357),style:{"max-width":"33px","max-height":"33px"}},null,8,v)]})),_:1},8,["content"])):"postgresql"==r.databaseType.toLowerCase()?((0,d.wg)(),(0,d.j4)(i,{key:1,content:r.databaseType,placement:"left"},{default:(0,d.w5)((function(){return[(0,d._)("img",{src:t(43609),style:{"max-width":"33px","max-height":"33px"}},null,8,b)]})),_:1},8,["content"])):"oracle"==r.databaseType.toLowerCase()?((0,d.wg)(),(0,d.j4)(i,{key:2,content:r.databaseType,placement:"left"},{default:(0,d.w5)((function(){return[(0,d._)("img",{src:t(22260),style:{"max-width":"33px","max-height":"33px"}},null,8,k)]})),_:1},8,["content"])):"mariadb"==r.databaseType.toLowerCase()?((0,d.wg)(),(0,d.j4)(i,{key:3,content:r.databaseType,placement:"left"},{default:(0,d.w5)((function(){return[(0,d._)("img",{src:t(36658),style:{"max-width":"33px","max-height":"33px"}},null,8,S)]})),_:1},8,["content"])):"sqlserver"==r.databaseType.toLowerCase()?((0,d.wg)(),(0,d.j4)(i,{key:4,content:r.databaseType,placement:"left"},{default:(0,d.w5)((function(){return[(0,d._)("img",{src:t(35641),style:{"max-width":"33px","max-height":"33px"}},null,8,_)]})),_:1},8,["content"])):r.icon?((0,d.wg)(),(0,d.j4)(i,{key:5,content:r.databaseType,placement:"left"},{default:(0,d.w5)((function(){return[(0,d._)("img",{src:r.icon,style:{"max-width":"33px","max-height":"33px"}},null,8,x)]})),_:1},8,["content"])):((0,d.wg)(),(0,d.iD)(d.HY,{key:6},[(0,d.Uk)((0,y.zw)(r.databaseType),1)],64))}var T={props:{databaseType:String,icon:String}};const A=(0,p.Z)(T,[["render",j]]);var D=A,L=t(94890),q=(t(38478),t(95707)),C=(0,r.ri)(g);Object.keys(a).forEach((function(e){C.component(e,a[e])})),C.component("database-icon",D),C.directive("require-roles",{mounted:function(e,n){var t=n.value;w.E.hasAnyRoles(t)||e.parentNode&&e.parentNode.removeChild(e)}}),C.directive("select-more",{updated:function(e,n){var t=e.querySelector(".select-trigger"),r=t.getAttribute("aria-describedby"),o=document.getElementById(r);if(null!=o){var a=o.parentElement.querySelector(".el-select-dropdown .el-scrollbar .el-select-dropdown__wrap");null!=a?a.addEventListener("scroll",(function(){var e=this.scrollHeight-this.scrollTop-1<=this.clientHeight;e&&n.value()})):console.log("load select component failed")}}}),u.Z.registerLanguage("javascript",i.Z),C.use(c.Z),C.use(l.Z),C.use(o.Z),C.use(s.Z),C.use(L._),C.use(q.ZP),C.mount("#app")},71435:function(e,n,t){t.d(n,{Z:function(){return oe}});t(41539),t(78783),t(33948);var r=t(42119),o=(t(74916),t(64765),t(68309),t(66252)),a=t(3577),u={style:{"margin-top":"16px"}},i={class:"search-container"},c=["onClick"],s=(0,o.Uk)("project"),l=(0,o.Uk)(),d={class:"jump"},f=["onClick"],p=(0,o.Uk)("group"),m=(0,o.Uk)(),h={class:"jump"};function g(e,n,t,r,g,w){var y=(0,o.up)("AppNav"),v=(0,o.up)("el-aside"),b=(0,o.up)("Breadcrumb"),k=(0,o.up)("Avatar"),S=(0,o.up)("el-header"),_=(0,o.up)("router-view"),x=(0,o.up)("el-main"),j=(0,o.up)("el-container"),T=(0,o.up)("el-button"),A=(0,o.up)("el-input"),D=(0,o.up)("el-tag"),L=(0,o.up)("el-link"),q=(0,o.up)("el-divider"),C=(0,o.up)("Right"),N=(0,o.up)("el-icon"),E=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.j4)(j,{class:"databasir"},{default:(0,o.w5)((function(){return[(0,o.Wm)(v,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(y,{class:"databasir-nav",onOnSearch:n[0]||(n[0]=function(e){return w.search()})})]})),_:1}),(0,o.Wm)(S,{class:"databasir-main-header"},{default:(0,o.w5)((function(){return[(0,o.Wm)(b),(0,o.Wm)(k)]})),_:1}),(0,o.Wm)(x,{class:"databasir-main"},{default:(0,o.w5)((function(){return[(0,o.Wm)(j,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{class:"databasir-main-content"},{default:(0,o.w5)((function(){return[(0,o.Wm)(_)]})),_:1})]})),_:1})]})),_:1}),(0,o.Wm)(E,{modelValue:g.showSearchDialog,"onUpdate:modelValue":n[2]||(n[2]=function(e){return g.showSearchDialog=e}),title:"搜索",width:w.dialogWidth()},{default:(0,o.w5)((function(){return[(0,o.Wm)(A,{modelValue:g.queryKeyword,"onUpdate:modelValue":n[1]||(n[1]=function(e){return g.queryKeyword=e}),placeholder:"分组、项目、database、schema 搜索",style:{width:"100%",border:"none"},onChange:w.onQuery},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(T,{loading:g.queryLoading,icon:"Search"},null,8,["loading"])]})),_:1},8,["modelValue","onChange"]),(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.searchSelectHistory,(function(e,n){return(0,o.wg)(),(0,o.j4)(L,{underline:!1,key:n,onClick:function(n){return w.jumpToPath(e.path)},style:{"margin-right":"12px","margin-bottom":"12px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(D,{closable:"",type:"group"==e.type?"primary":"success",onClose:function(n){return w.onRemoveSelectHistoryItem(e.label)}},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.label),1)]})),_:2},1032,["type","onClose"])]})),_:2},1032,["onClick"])})),128))]),g.queryData.projects.length>0||g.queryData.groups.length>0?((0,o.wg)(),(0,o.j4)(q,{key:0})):(0,o.kq)("",!0),(0,o._)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.queryData.projects,(function(e,n){return(0,o.wg)(),(0,o.iD)("div",{class:"search-item",key:n,onClick:function(n){return w.jumpToProject(e)}},[(0,o._)("span",null,[(0,o.Wm)(D,{type:"success"},{default:(0,o.w5)((function(){return[s]})),_:1}),l,(0,o.Wm)(L,{underline:!1},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.groupName)+" / "+(0,a.zw)(e.projectName),1)]})),_:2},1024)]),(0,o._)("span",d,[(0,o.Wm)(N,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(C)]})),_:1})])],8,c)})),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.queryData.groups,(function(e,n){return(0,o.wg)(),(0,o.iD)("div",{class:"search-item",key:n,onClick:function(n){return w.jumpToGroup(e)}},[(0,o._)("span",null,[(0,o.Wm)(D,null,{default:(0,o.w5)((function(){return[p]})),_:1}),m,(0,o.Wm)(L,{underline:!1},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.name),1)]})),_:2},1024)]),(0,o._)("span",h,[(0,o.Wm)(N,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(C)]})),_:1})])],8,f)})),128))])]})),_:1},8,["modelValue","width"])]})),_:1})}t(57327),t(40561),t(38862);var w=(0,o._)("span",null,"Databasir",-1),y=["src"];function v(e,n,t,r,u,i){var c=(0,o.up)("home-filled"),s=(0,o.up)("el-icon"),l=(0,o.up)("el-menu-item"),d=(0,o.up)("el-sub-menu"),f=(0,o.up)("Search"),p=(0,o.up)("el-menu");return(0,o.wg)(),(0,o.j4)(p,{router:"",collapse:e.isCollapse,mode:"vertical",class:"left-menu"},{default:(0,o.w5)((function(){return[(0,o.Wm)(l,{index:"/"},{title:(0,o.w5)((function(){return[w]})),default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(c)]})),_:1})]})),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.routes,(function(n,t){return(0,o.wg)(),(0,o.iD)(o.HY,{key:t},[e.isShowMenu(n)&&n.children.length>0&&n.children.some((function(e){return!e.hidden}))?((0,o.wg)(),(0,o.j4)(d,{key:0,index:n.path},{title:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.j4)((0,o.LL)(n.icon)))]})),_:2},1024),(0,o._)("span",null,(0,a.zw)(n.meta.nav),1)]})),default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.children,(function(e,r){return(0,o.wg)(),(0,o.iD)(o.HY,{key:t+"-"+r},[e.hidden?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(l,{key:0,index:n.path+"/"+e.path},{title:(0,o.w5)((function(){return[(0,o._)("span",null,(0,a.zw)(e.meta.nav),1)]})),default:(0,o.w5)((function(){return[e.icon?((0,o.wg)(),(0,o.j4)(s,{key:0},{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.icon)))]})),_:2},1024)):(0,o.kq)("",!0)]})),_:2},1032,["index"]))],64)})),128))]})),_:2},1032,["index"])):e.isShowMenu(n)?((0,o.wg)(),(0,o.j4)(l,{key:1,index:n.path},{title:(0,o.w5)((function(){return[(0,o._)("span",null,(0,a.zw)(n.meta.nav),1)]})),default:(0,o.w5)((function(){return[n.icon?((0,o.wg)(),(0,o.j4)(s,{key:0},{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.j4)((0,o.LL)(n.icon)))]})),_:2},1024)):(0,o.kq)("",!0),n.iconImage?((0,o.wg)(),(0,o.iD)("img",{key:1,src:n.iconImage,class:"icon-image"},null,8,y)):(0,o.kq)("",!0)]})),_:2},1032,["index"])):(0,o.kq)("",!0)],64)})),128)),(0,o.Wm)(l,{index:"",onClick:n[0]||(n[0]=function(n){return e.showSearchDialog()}),style:{color:"#303133"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,{style:{"vertical-align":"middle"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(f)]})),_:1})]})),_:1})]})),_:1},8,["collapse"])}var b=t(51836),k=t(24239),S=(0,o.aZ)({emits:["on-search"],setup:function(e,n){var t=(0,o.Fl)((function(){return k.Z.state.menu.isCollapse})),a=(0,r.tv)(),u=a.options.routes,i=function(e){if(e.hidden)return!1;if(e.meta.requireAnyRoles&&e.meta.requireAnyRoles.length>0){var n=b.E.hasAnyRoles(e.meta.requireAnyRoles);if(!n)return!1}return!0},c=function(){k.Z.commit("expandMenu")},s=function(){n.emit("on-search")};return{isCollapse:t,isShowMenu:i,expandMenu:c,routes:u,showSearchDialog:s}}}),_=t(83744);const x=(0,_.Z)(S,[["render",v]]);var j=x;function T(e,n,t,r,u,i){var c=(0,o.up)("fold"),s=(0,o.up)("el-icon"),l=(0,o.up)("el-link"),d=(0,o.up)("el-breadcrumb-item"),f=(0,o.up)("el-breadcrumb");return(0,o.wg)(),(0,o.j4)(f,{separator:"/"},{default:(0,o.w5)((function(){return[i.menuIsCollapse?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0},{default:(0,o.w5)((function(){return[(0,o.Wm)(l,{onClick:n[0]||(n[0]=function(e){return i.onFoldMenu()}),underline:!1},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(c)]})),_:1})]})),_:1})]})),_:1})),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.breadcrumbs,(function(e,n){return(0,o.wg)(),(0,o.j4)(d,{key:n,to:e.to},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.name),1)]})),_:2},1032,["to"])})),128))]})),_:1})}var A={computed:{breadcrumbs:function(){return"function"===typeof this.$route.meta.breadcrumb?this.$route.meta.breadcrumb(this.$route,this.$store.state):[]},menuIsCollapse:function(){return this.$store.state.menu.isCollapse}},methods:{onFoldMenu:function(){this.$store.commit("foldMenu")}}};const D=(0,_.Z)(A,[["render",T]]);var L=D,q=(0,o.Uk)("个人中心"),C=(0,o.Uk)("注销登陆");function N(e,n,t,r,u,i){var c=(0,o.up)("el-avatar"),s=(0,o.up)("el-dropdown-item"),l=(0,o.up)("el-dropdown-menu"),d=(0,o.up)("el-dropdown");return(0,o.wg)(),(0,o.j4)(d,null,{dropdown:(0,o.w5)((function(){return[(0,o.Wm)(l,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(i.userNickname),1)]})),_:1}),(0,o.Wm)(s,{icon:"user",divided:"",onClick:n[0]||(n[0]=function(e){return i.toProfilePage()})},{default:(0,o.w5)((function(){return[q]})),_:1}),(0,o.Wm)(s,{icon:"back",onClick:n[1]||(n[1]=function(e){return i.onLogout()})},{default:(0,o.w5)((function(){return[C]})),_:1})]})),_:1})]})),default:(0,o.w5)((function(){return[(0,o.Wm)(c,{size:36,src:i.avatarUrl,icon:"avatar"},null,8,["src"])]})),_:1})}var E={computed:{userNickname:function(){return this.$store.state.user.nickname},avatarUrl:function(){return this.$store.state.user.avatar}},methods:{onLogout:function(){b.E.removeUserLoginData(),this.$router.push({path:"/login"})},toProfilePage:function(){this.$router.push({path:"/profile"})}}};const W=(0,_.Z)(E,[["render",N]]);var I=W,O=t(63872),P="/api/v1.0/search",H=function(e){return O.Z.get(P,{params:e})},U=t(98968),Z={components:{AppNav:j,Breadcrumb:L,Avatar:I},data:function(){return{showSearchDialog:!1,queryKeyword:"",queryData:{projects:[],groups:[]},queryLoading:!1,searchSelectHistory:[],searchSelectHistoryKey:"globalSearchSelectHistory"}},mounted:function(){this.loadSearchSelectHistory()},methods:{search:function(){this.showSearchDialog=!0},onQuery:function(e){var n=this;this.queryLoading=!0,H({query:e}).then((function(e){e.errCode||(n.queryData=e.data)})).finally((function(){return n.queryLoading=!1}))},jumpToGroup:function(e){this.showSearchDialog=!1;var n="/groups/"+e.id+"?groupName="+e.name,t={label:e.name,path:n,type:"group"},r=this.searchSelectHistory.filter((function(e){return e.label!=t.label}));r.unshift(t),r.splice(15),this.searchSelectHistory=r,window.localStorage.setItem(this.searchSelectHistoryKey,JSON.stringify(this.searchSelectHistory)),window.location=n},jumpToProject:function(e){this.showSearchDialog=!1;var n="/groups/"+e.groupId+"/projects/"+e.projectId+"/documents?groupName="+e.groupName+"&projectName="+e.projectName,t={label:e.groupName+" / "+e.projectName,path:n,type:"project"},r=this.searchSelectHistory.filter((function(e){return e.label!=t.label}));r.unshift(t),r.splice(15),this.searchSelectHistory=r,window.localStorage.setItem(this.searchSelectHistoryKey,JSON.stringify(this.searchSelectHistory)),window.location=n},jumpToPath:function(e){window.location=e},loadSearchSelectHistory:function(){var e=this.searchSelectHistoryKey;if(null!=window.localStorage.getItem(e)){var n=JSON.parse(window.localStorage.getItem(e));this.searchSelectHistory=n}},onRemoveSelectHistoryItem:function(e){var n=this.searchSelectHistory.filter((function(n){return n.label!=e}));this.searchSelectHistory=n,window.localStorage.setItem(this.searchSelectHistoryKey,JSON.stringify(this.searchSelectHistory))},dialogWidth:function(){return(0,U.c)()}}};const R=(0,_.Z)(Z,[["render",g]]);var K=R;function M(){return{name:"首页",to:{path:"/"}}}function z(){return{name:"项目中心",to:{name:"groupListPage"}}}function B(e){var n="项目组";return e.query.groupName&&(n=e.query.groupName),{name:n,to:{path:"/groups/"+e.params.groupId}}}function Y(e){var n="项目文档";e.query.projectName&&(n=e.query.projectName);var t=e.params.projectId,r=e.params.groupId;return{name:n,to:{path:"/groups/"+r+"/projects/"+t+"/documents",query:{projectName:n}}}}function V(){return{name:"用户列表",to:{path:"/users"}}}function $(){return{name:"个人中心",to:{path:"/profile"}}}function F(){return{name:"邮箱设置",to:{path:"/settings/sysEmail"}}}function J(){return{name:"操作日志",to:{path:"/settings/sysLog"}}}function Q(){return{name:"登录设置",to:{path:"/settings/sysOauth2"}}}function G(){return{name:"数据库扩展",to:{path:"/settings/sysDatabaseType"}}}function X(){return{name:"文档模板",to:{path:"/settings/sysDocumentTemplate"}}}var ee={index:function(){return[M()]},groupList:function(){return[M(),z()]},groupDashboard:function(e,n){return[M(),z(),B(e,n)]},groupProjectDocument:function(e,n){return[M(),z(),B(e,n),Y(e)]},userProfile:function(){return[M(),$()]},userList:function(){return[M(),V()]},sysEmailEdit:function(){return[M(),F()]},sysLog:function(){return[M(),J()]},sysOauth2:function(){return[M(),Q()]},sysDatabaseType:function(){return[M(),G()]},sysDocumentTemplate:function(){return[M(),X()]}},ne=ee,te=[{path:"/login",component:function(){return t.e(770).then(t.bind(t,57770))},hidden:!0,meta:{requireAuth:!1}},{path:"/login/oauth2/:id",component:function(){return t.e(865).then(t.bind(t,68865))},hidden:!0,props:!0,meta:{requireAuth:!1}},{path:"/",hidden:!0,component:K,children:[{path:"",hidden:!0,component:function(){return Promise.all([t.e(465),t.e(314)]).then(t.bind(t,36314))},meta:{breadcrumb:ne.groupList}}]},{path:"/groups",icon:"Collection",hidden:!0,component:K,meta:{nav:"项目中心"},children:[{path:"",name:"groupListPage",hidden:!0,component:function(){return Promise.all([t.e(465),t.e(314)]).then(t.bind(t,36314))},meta:{breadcrumb:ne.groupList}},{path:":groupId",hidden:!0,component:function(){return Promise.all([t.e(465),t.e(443)]).then(t.bind(t,41443))},meta:{breadcrumb:ne.groupDashboard}},{path:":groupId/projects/:projectId/documents",hidden:!0,component:function(){return Promise.all([t.e(465),t.e(951)]).then(t.bind(t,48951))},meta:{breadcrumb:ne.groupProjectDocument}}]},{path:"/users",icon:"List",component:K,meta:{nav:"用户中心",requireAnyRoles:["SYS_OWNER"]},children:[{path:"",hidden:!0,component:function(){return t.e(538).then(t.bind(t,40538))},meta:{breadcrumb:ne.userList}}]},{path:"/profile",icon:"User",component:K,meta:{nav:"个人中心",breadcrumb:ne.userProfile},children:[{path:"",hidden:!0,component:function(){return t.e(469).then(t.bind(t,26469))}}]},{path:"/settings",icon:"Setting",component:K,meta:{nav:"系统中心",requireAnyRoles:["SYS_OWNER"]},children:[{path:"sysEmail",icon:"Notification",component:function(){return t.e(243).then(t.bind(t,51243))},meta:{nav:"邮箱设置",breadcrumb:ne.sysEmailEdit}},{path:"sysLog",icon:"Document",component:function(){return t.e(17).then(t.bind(t,16017))},meta:{nav:"操作日志",breadcrumb:ne.sysLog}},{path:"sysOauth2",icon:"Connection",component:function(){return t.e(834).then(t.bind(t,86834))},meta:{nav:"登陆设置",breadcrumb:ne.sysOauth2}},{path:"sysDatabaseType",icon:"office-building",component:function(){return t.e(718).then(t.bind(t,21718))},meta:{nav:"数据库扩展",breadcrumb:ne.sysDatabaseType}},{path:"sysDocumentTemplate",icon:"document-add",component:function(){return t.e(227).then(t.bind(t,93227))},meta:{nav:"文档模板",breadcrumb:ne.sysDocumentTemplate}},{path:"sysKey",icon:"Key",hidden:"true",component:K,meta:{nav:"系统秘钥",breadcrumb:ne.sysKeyEdit}}]}],re=(0,r.p7)({history:(0,r.PO)(),routes:te});re.beforeEach((function(e,n,t){0==e.meta.requireAuth?"/login"==e.path&&b.r.hasAccessToken()?t(n):t():b.r.hasAccessToken()?t():t({path:"/login"})})),re.beforeEach((function(e,n,t){!e.query.groupName&&n.query.groupName&&(e.query.groupName=n.query.groupName),!e.query.projectName&&n.query.projectName&&(e.query.projectName=n.query.projectName),t()}));var oe=re},24239:function(e,n,t){var r=t(88637),o=t(51836),a=(0,r.MT)({state:function(){var e={user:{nickname:null,usernmae:null,email:null,avatar:null},groupListActiveTab:null,menu:{isCollapse:!0}},n=o.E.loadUserLoginData();return n&&(e.user.nickname=n.nickname,e.user.usernmae=n.usernmae,e.user.email=n.email,e.user.avatar=n.avatar),e},mutations:{userUpdate:function(e,n){n.nickname&&(e.user.nickname=n.nickname),n.usernmae&&(e.user.usernmae=n.usernmae),n.email&&(e.user.email=n.email),n.avatar&&(e.user.avatar=n.avatar)},foldMenu:function(e){e.menu.isCollapse=!0},expandMenu:function(e){e.menu.isCollapse=!1},switchGroupListActiveTab:function(e,n){n&&(e.groupListActiveTab=n)}}});n["Z"]=a},98968:function(e,n,t){t.d(n,{c:function(){return o}});var r=function(e){var n=window.innerWidth;return n>=1920?e.xl?e.xl:null:n>=1200?e.lg?e.lg:e.xl?e.xl:null:n>=992?e.md?e.md:e.lg?e.lg:e.xl?e.xl:null:n>=768?e.sm?e.sm:e.md?e.md:e.lg?e.lg:e.xl?e.xl:null:e.xs?e.xs:e.sm?e.sm:e.md?e.md:e.lg?e.lg:e.xl?e.xl:null},o=function(){return r({xl:"36%",lg:"42%",md:"60%",sm:"80%",xs:"90%"})}},51836:function(e,n,t){t.d(n,{r:function(){return u},E:function(){return i}});t(38862),t(41539),t(21249);var r="accessToken",o="accessTokenExpireAt",a="userLoginData",u={hasAccessToken:function(){var e=this.loadAccessToken();return e},hasValidAccessToken:function(){var e=this.loadAccessToken(),n=window.localStorage.getItem(o);return e&&n?n>(new Date).getTime()-1e4:(console.log("warn: not found accessToken and expireAt key"),!1)},saveAccessToken:function(e,n){window.localStorage.setItem(r,e),window.localStorage.setItem(o,n)},loadAccessToken:function(){var e=window.localStorage.getItem(r);return e||null}},i={saveUserLoginData:function(e){window.localStorage.setItem(r,e.accessToken),window.localStorage.setItem(o,e.accessTokenExpireAt),window.localStorage.setItem(a,JSON.stringify(e))},removeUserLoginData:function(){window.localStorage.removeItem(a),window.localStorage.removeItem(r),window.localStorage.removeItem(o)},loadUserLoginData:function(){if(!window.localStorage.getItem(a))return null;var e=window.localStorage.getItem(a);return JSON.parse(e)},hasAnyRoles:function(e){var n=window.localStorage.getItem(a);if(null==n)return!1;var t=JSON.parse(n);return t.roles.map((function(e){return e.groupId?e.role+"?groupId="+e.groupId:e.role})).some((function(n){return e.some((function(e){return e==n}))}))},getRefreshToken:function(){var e=window.localStorage.getItem(a);if(null==e)return null;var n=JSON.parse(e);return n.refreshToken}}},63872:function(e,n,t){var r=t(48534),o=(t(35666),t(41539),t(54747),t(23157),t(74916),t(15306),t(9669)),a=t.n(o),u=t(45244),i=t(71435),c=t(51836),s=t(40152),l={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL;a().defaults.baseURL=l,a().defaults.timeout=15e3,a().defaults.withCredentials=!1,a().defaults.headers.post["Content-Type"]="application/json",a().defaults.headers.post["Access-Control-Allow-Origin-Type"]="*";var d=!1;function f(){d=!0}function p(){d=!1}var m=[];function h(e){m.push(e)}function g(e){m.forEach((function(n){n(e)})),m=[]}function w(e){return y.apply(this,arguments)}function y(){return y=(0,r.Z)(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=c.E.getRefreshToken(),t||k(),!d){e.next=4;break}return e.abrupt("return",new Promise((function(e){h((function(){n&&(n.headers.Authorization="Bearer "+c.r.loadAccessToken()),e(n)}))})));case 4:return f(),e.next=7,(0,s.jb)(t).then((function(e){e.errCode?k():(c.r.saveAccessToken(e.data.accessToken,e.data.accessTokenExpireAt),p())})).finally((function(){return p()}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a()({method:n.method,data:n.data,url:n.url,baseURL:n.baseURL,headers:{Authorization:"Bearer "+c.r.loadAccessToken()}});case 3:return t=e.sent,g(n),e.abrupt("return",t);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),S("网络异常，请稍后再试");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),b.apply(this,arguments)}function k(){c.E.removeUserLoginData(),i.Z.replace("/login")}function S(e){(0,u.z8)({message:e,type:"error",duration:5e3,grouping:!0})}a().interceptors.request.use(function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("/access_tokens"!=n.url&&!n.url.startsWith("/oauth2")&&"/login"!=n.url){e.next=2;break}return e.abrupt("return",n);case 2:if(!c.r.hasValidAccessToken()){e.next=5;break}return n.headers.Authorization="Bearer "+c.r.loadAccessToken(),e.abrupt("return",n);case 5:if(!d){e.next=8;break}return t=new Promise((function(e){h((function(){n&&(n.headers.Authorization="Bearer "+c.r.loadAccessToken()),e(n)}))})),e.abrupt("return",t);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),(function(e){return p(),Promise.reject(e)})),a().interceptors.response.use((function(e){var n=e.data;return n.errCode&&S(n.errMessage),n}),(function(e){if(e.response)if(401==e.response.status){if("X_0002"==e.response.data.errCode)c.E.removeUserLoginData(),S("登陆状态失效，请重新登陆"),k();else if("X_0004"==e.response.data.errCode)return w(e.config).then((function(){return v(e.config)}))}else 403==e.response.status?S("无执行该操作的权限"):S(e.message);else console.log(e),S("网络异常，请稍后再试");return Promise.reject(e)})),n["Z"]=a()},36658:function(e,n,t){e.exports=t.p+"img/MariaDB.9e6854cc.svg"},92357:function(e,n,t){e.exports=t.p+"img/MySQL.c8f47618.svg"},22260:function(e,n,t){e.exports=t.p+"img/Oracle.c9ed26e0.svg"},43609:function(e,n,t){e.exports=t.p+"img/PostgreSQL.6e3d3a5e.svg"},35641:function(e,n,t){e.exports=t.p+"img/Sqlserver.deff7c4c.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<u&&(u=a));if(i){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{17:"c4feb2b1",227:"95054385",243:"100824ae",314:"d653a5cf",443:"ea02842e",465:"ece07ef6",469:"b79cbe02",538:"6e0291cc",718:"dbe5112b",770:"a937c163",834:"daf78d65",865:"21062095",951:"3c324293"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{227:"90d5c1b0",314:"6b48a93a",443:"b8c2d37b",718:"67c86358",770:"80f6e2e0",834:"f2905e33",865:"7df1e56e",951:"e14b4ae3"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="databasir:";t.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=r),e[r]=[o];var f=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var u=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=i,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var u=t.miniCssF(r),i=t.p+u;if(n(u,i))return o();e(r,i,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={227:1,314:1,443:1,718:1,770:1,834:1,865:1,951:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var u=t.p+t.u(n),i=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],i=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var l=c(t)}for(n&&n(r);s<u.length;s++)a=u[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkdatabasir"]=self["webpackChunkdatabasir"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(21381)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.25171435.js.map
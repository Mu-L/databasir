"use strict";(self["webpackChunkdatabasir"]=self["webpackChunkdatabasir"]||[]).push([[865],{68865:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var i=e(66252),a=e(49963),r=(0,i.Uk)("立即跳转");function o(t,n,e,o,u,l){var s=(0,i.up)("el-button"),c=(0,i.up)("el-result"),d=(0,i.up)("el-main"),f=(0,i.up)("el-container"),g=(0,i.Q2)("loading");return(0,i.wg)(),(0,i.j4)(f,null,{default:(0,i.w5)((function(){return[(0,i.wy)(((0,i.wg)(),(0,i.j4)(d,{class:"login-main"},{default:(0,i.w5)((function(){return[(0,i.wy)((0,i.Wm)(c,{icon:u.icon,title:u.title,"sub-title":u.subTitle},{extra:(0,i.w5)((function(){return[(0,i.Wm)(s,{type:"primary",onClick:n[0]||(n[0]=function(t){return l.toIndexPage()})},{default:(0,i.w5)((function(){return[r]})),_:1})]})),_:1},8,["icon","title","sub-title"]),[[a.F8,!u.loading]])]})),_:1})),[[g,u.loading]])]})),_:1})}var u=e(40152),l=e(51836),s={data:function(){return{registrationId:null,icon:"",title:"",subTitle:"",loading:!0}},created:function(){this.registrationId=this.$route.params.id,this.login()},methods:{login:function(){var t=this,n=window.location.href,e=this.$route.query;e.redirect_uri=n,(0,u.rd)(this.registrationId,e).then((function(n){n.errCode?(t.title=n.errMessage,t.icon="error"):(l.E.saveUserLoginData(n.data),t.$store.commit("userUpdate",{nickname:n.data.nickname,username:n.data.username,email:n.data.email,avatar:n.data.avatar}),t.icon="success",t.$router.push({path:"/groups"})),t.loading=!1})).catch((function(n){console.log("login failed: "+n),t.icon="error",t.title="登陆失败，请重试",t.loading=!1}))},toIndexPage:function(){this.$router.push({path:"/"})}}},c=e(83744);const d=(0,c.Z)(s,[["render",o]]);var f=d}}]);
//# sourceMappingURL=865-legacy.7a994ea2.js.map
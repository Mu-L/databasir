(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abb10c56"],{"9fb8":function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return b})),n.d(t,"j",(function(){return O})),n.d(t,"i",(function(){return f}));var r=n("1c1e"),a="/api/v1.0/users",o=function(e){return r["a"].get(a,{params:e})},c=function(e){return r["a"].post(a+"/"+e+"/enable")},u=function(e){return r["a"].post(a+"/"+e+"/disable")},l=function(e){return r["a"].get(a+"/"+e)},i=function(e){return r["a"].post(a,e)},d=function(e){return r["a"].post(a+"/"+e+"/renew_password")},s=function(e){return r["a"].post(a+"/"+e+"/sys_owners")},b=function(e){return r["a"].delete(a+"/"+e+"/sys_owners")},O=function(e,t){return r["a"].post(a+"/"+e+"/password",t)},f=function(e,t){return r["a"].post(a+"/"+e+"/nickname",t)}},ab3a:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["createTextVNode"])("重置密码"),o=Object(r["createElementVNode"])("br",null,null,-1),c=Object(r["createElementVNode"])("h3",null,"角色信息",-1),u=Object(r["createTextVNode"])("保存"),l=Object(r["createTextVNode"])("取消");function i(e,t,n,i,d,s){var b=Object(r["resolveComponent"])("el-button"),O=Object(r["resolveComponent"])("el-tooltip"),f=Object(r["resolveComponent"])("el-col"),j=Object(r["resolveComponent"])("el-option"),p=Object(r["resolveComponent"])("el-select"),m=Object(r["resolveComponent"])("el-input"),h=Object(r["resolveComponent"])("el-row"),g=Object(r["resolveComponent"])("el-header"),w=Object(r["resolveComponent"])("el-table-column"),V=Object(r["resolveComponent"])("el-link"),C=Object(r["resolveComponent"])("el-switch"),N=Object(r["resolveComponent"])("el-table"),D=Object(r["resolveComponent"])("el-main"),x=Object(r["resolveComponent"])("el-pagination"),y=Object(r["resolveComponent"])("el-footer"),_=Object(r["resolveComponent"])("el-descriptions-item"),v=Object(r["resolveComponent"])("el-descriptions"),U=Object(r["resolveComponent"])("List"),S=Object(r["resolveComponent"])("el-icon"),P=Object(r["resolveComponent"])("el-drawer"),k=Object(r["resolveComponent"])("el-form-item"),E=Object(r["resolveComponent"])("el-form"),z=Object(r["resolveComponent"])("el-dialog"),R=Object(r["resolveComponent"])("el-container");return Object(r["openBlock"])(),Object(r["createBlock"])(R,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{gutter:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{span:2},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{content:"创建新用户",placement:"top"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{type:"primary",icon:"plus",style:{width:"100%"},onClick:t[0]||(t[0]=function(e){return s.toCreatePage()})})]})),_:1})]})),_:1}),Object(r["createVNode"])(f,{span:3},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{modelValue:d.userPageQuery.enabled,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.userPageQuery.enabled=e}),placeholder:"启用状态",onChange:s.onQuery,clearable:""},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])([!0,!1],(function(e){return Object(r["createVNode"])(j,{key:e,label:e?"启用":"禁用",value:e},null,8,["label","value"])})),64))]})),_:1},8,["modelValue","onChange"])]})),_:1}),Object(r["createVNode"])(f,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{onChange:s.onQuery,modelValue:d.userPageQuery.nicknameOrUsernameOrEmailContains,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.userPageQuery.nicknameOrUsernameOrEmailContains=e}),label:"用户名",placeholder:"昵称、用户名或邮箱搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(N,{data:d.userPageData.content,border:"",width:"80%"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{prop:"id",label:"ID","min-width":"60",fixed:"left"}),Object(r["createVNode"])(w,{prop:"nickname",label:"昵称","min-width":"120",fixed:"left",resizable:""}),Object(r["createVNode"])(w,{prop:"username",label:"用户名","min-width":"120",resizable:""}),Object(r["createVNode"])(w,{label:"邮箱",width:"200",resizable:""},{default:Object(r["withCtx"])((function(e){return[Object(r["createVNode"])(V,{underline:!0,onClick:function(t){return s.onGetUserDetail(e.row)}},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.row.email),1)]})),_:2},1032,["onClick"])]})),_:1}),Object(r["createVNode"])(w,{label:"启用状态",resizable:""},{default:Object(r["withCtx"])((function(e){return[Object(r["createVNode"])(C,{modelValue:e.row.enabled,"onUpdate:modelValue":function(t){return e.row.enabled=t},loading:d.loading.userEnableLoading,onChange:function(t){return s.onSwitchEnabled(e.row.id,e.row.enabled)}},null,8,["modelValue","onUpdate:modelValue","loading","onChange"])]})),_:1}),Object(r["createVNode"])(w,{label:"系统管理员"},{default:Object(r["withCtx"])((function(e){return[Object(r["createVNode"])(C,{modelValue:e.row.isSysOwner,"onUpdate:modelValue":function(t){return e.row.isSysOwner=t},loading:d.loading.sysOwnerLoading,onChange:function(t){return s.onChangeSysOwner(e.row)}},null,8,["modelValue","onUpdate:modelValue","loading","onChange"])]})),_:1}),Object(r["createVNode"])(w,{prop:"createAt",label:"创建时间","min-width":"140"}),Object(r["createVNode"])(w,{label:"操作","min-width":"120",resizable:""},{default:Object(r["withCtx"])((function(e){return[Object(r["createVNode"])(b,{type:"danger",size:"small",onClick:Object(r["withModifiers"])((function(t){return s.onRenewPassword(e.row.id)}),["stop"])},{default:Object(r["withCtx"])((function(){return[a]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]})),_:1}),Object(r["createVNode"])(y,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{layout:"sizes, prev, pager, next","hide-on-single-page":!1,currentPage:d.userPageData.number,"page-size":d.userPageQuery.size,"page-sizes":[10,15,20,30],"page-count":d.userPageData.totalPages,onSizeChange:s.onPageSizeChange,onCurrentChange:s.onPageChange},null,8,["currentPage","page-size","page-count","onSizeChange","onCurrentChange"])]})),_:1}),Object(r["createVNode"])(P,{modelValue:d.isShowUserDetailDrawer,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.isShowUserDetailDrawer=e}),title:"用户详情",direction:"rtl",size:"50%"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{title:"基础信息",column:1,border:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"ID"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(d.userDetailData.id),1)]})),_:1}),Object(r["createVNode"])(_,{label:"昵称"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(d.userDetailData.nickname),1)]})),_:1}),Object(r["createVNode"])(_,{label:"用户名"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(d.userDetailData.username),1)]})),_:1}),Object(r["createVNode"])(_,{label:"邮箱",span:2},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(d.userDetailData.email),1)]})),_:1}),Object(r["createVNode"])(_,{label:"启用状态",span:2},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(d.userDetailData.enabled?"启用中":"已禁用"),1)]})),_:1}),Object(r["createVNode"])(_,{label:"注册时间",span:2},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(d.userDetailData.createAt),1)]})),_:1})]})),_:1}),o,c,Object(r["createVNode"])(N,{data:d.userDetailData.roles,stripe:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{label:"角色",prop:"role",formatter:d.roleNameFormatter},null,8,["formatter"]),Object(r["createVNode"])(w,{label:"所属分组"},{default:Object(r["withCtx"])((function(e){return[e.row.groupId?(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:0,onClick:function(t){return s.toGroupPage(e.row.groupId,e.row.groupName)}},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.row.groupName)+" ",1),Object(r["createVNode"])(S,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(U)]})),_:1})]})),_:2},1032,["onClick"])):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(w,{prop:"groupId",label:"分组 ID"}),Object(r["createVNode"])(w,{prop:"createAt",label:"角色分配时间"})]})),_:1},8,["data"])]})),_:1},8,["modelValue"]),Object(r["createVNode"])(z,{modelValue:d.isShowEditUserDialog,"onUpdate:modelValue":t[11]||(t[11]=function(e){return d.isShowEditUserDialog=e}),width:"38%",center:"","destroy-on-close":"",title:"创建用户"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{model:d.userData,"label-position":"top",rules:d.userFormRule,ref:"userFormRef"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{label:"昵称",prop:"nickname"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{modelValue:d.userData.nickname,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.userData.nickname=e})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(k,{label:"用户名",prop:"username"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{modelValue:d.userData.username,"onUpdate:modelValue":t[5]||(t[5]=function(e){return d.userData.username=e})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(k,{label:"邮箱",prop:"email"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{modelValue:d.userData.email,"onUpdate:modelValue":t[6]||(t[6]=function(e){return d.userData.email=e})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(k,{label:"密码",prop:"password"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{modelValue:d.userData.password,"onUpdate:modelValue":t[7]||(t[7]=function(e){return d.userData.password=e}),type:"password",placeholder:"请输入密码","show-password":""},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(k,{label:"启用状态"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{modelValue:d.userData.enabled,"onUpdate:modelValue":t[8]||(t[8]=function(e){return d.userData.enabled=e})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(k,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{type:"primary",plain:"",onClick:t[9]||(t[9]=function(e){return s.onSaveUserData("userFormRef")})},{default:Object(r["withCtx"])((function(){return[u]})),_:1}),Object(r["createVNode"])(b,{plain:"",onClick:t[10]||(t[10]=function(e){return d.isShowEditUserDialog=!1})},{default:Object(r["withCtx"])((function(){return[l]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])]})),_:1})}var d=n("9fb8"),s=n("3ef4"),b={data:function(){return{loading:{sysOwnerLoading:!1,userEnableLoading:!1},userData:{enabled:!1},userFormRule:{nickname:[this.requiredInputValidRule("昵称不能为空")],username:[this.requiredInputValidRule("用户名不能为空")],email:[this.requiredInputValidRule("邮箱不能为空"),{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[this.requiredInputValidRule("密码不能为空"),{min:6,max:18,message:"密码位数位数要求在 6~18 之间",trigger:"blur"}]},userPageData:{content:[]},userPageQuery:{nicknameOrUsernameOrEmailContains:null,enabled:null,page:0,size:10},userDetailData:{},isShowUserDetailDrawer:!1,isShowEditUserDialog:!1,roleNameFormatter:function(e,t,n){return"SYS_OWNER"==n?"系统管理员":"GROUP_OWNER"==n?"组长":"GROUP_MEMBER"==n?"组员":n}}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var e=this;Object(d["f"])(this.userPageQuery).then((function(t){t.errCode||(e.userPageData=t.data,e.userPageData.number=t.data.number+1)}))},requiredInputValidRule:function(e){return{required:!0,message:e,trigger:"blur"}},onSwitchEnabled:function(e,t){t?Object(d["d"])(e):Object(d["c"])(e)},onRenewPassword:function(e){this.$confirm("确认重置该用户密码？新密码将通过邮件下发","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(d["h"])(e).then((function(e){e.errCode||Object(s["a"])({showClose:!0,message:"密码重置成功",type:"success",duration:3e3})}))}))},onPageChange:function(e){e&&e-1!=this.userPageQuery.page&&(this.userPageQuery.page=e-1,this.fetchUsers())},onPageSizeChange:function(e){e&&(this.userPageQuery.size=e,this.fetchUsers())},onQuery:function(){this.userPageQuery.page=0,this.fetchUsers()},onGetUserDetail:function(e){var t=this;this.isShowUserDetailDrawer=!0,Object(d["e"])(e.id).then((function(e){e.errCode||(t.userDetailData=e.data)}))},onSaveUserData:function(){var e=this;this.$refs.userFormRef.validate((function(t){return!!t&&(Object(d["b"])(e.userData).then((function(t){t.errCode||(e.$message.success("保存用户成功"),e.isShowEditUserDialog=!1,e.userData={enabled:!1},e.fetchUsers())})),!0)}))},onChangeSysOwner:function(e){var t=this,n=e.id;return this.loading.sysOwnerLoading=!0,e.isSysOwner?Object(d["a"])(n).then((function(e){e.errCode||t.$message.success("启用系统管理员成功"),t.loading.sysOwnerLoading=!1})):Object(d["g"])(n).then((function(e){e.errCode||t.$message.warning("禁用系统管理员成功"),t.loading.sysOwnerLoading=!1}))},toCreatePage:function(){this.isShowEditUserDialog=!0},toGroupPage:function(e,t){e&&this.$router.push({path:"/groups/"+e,query:{groupName:t}})}}},O=n("6b0d"),f=n.n(O);const j=f()(b,[["render",i]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-abb10c56.2eac1d1a.js.map
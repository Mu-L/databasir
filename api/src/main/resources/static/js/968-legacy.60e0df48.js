"use strict";(self["webpackChunkdatabasir"]=self["webpackChunkdatabasir"]||[]).push([[968],{89968:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(66252),u=(0,r.Uk)(" 系统邮箱设置 "),l=(0,r.Uk)(" : "),o=(0,r.Uk)("保存"),a=(0,r.Uk)("重置");function m(e,t,n,m,i,s){var f=(0,r.up)("box"),d=(0,r.up)("el-icon"),p=(0,r.up)("el-divider"),c=(0,r.up)("el-input"),w=(0,r.up)("el-form-item"),h=(0,r.up)("el-col"),S=(0,r.up)("el-switch"),V=(0,r.up)("el-button"),W=(0,r.up)("el-form"),_=(0,r.up)("el-card"),g=(0,r.up)("el-main"),b=(0,r.up)("el-container");return(0,r.wg)(),(0,r.j4)(b,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(g,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{shadow:"hover",style:{"max-width":"600px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(d,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(f)]})),_:1}),u]})),_:1}),(0,r.Wm)(W,{model:i.form,"label-position":"top",rules:i.formRule,ref:"formRef",style:{"max-width":"900px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(w,{label:"SMTP 用户名",prop:"username"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{modelValue:i.form.username,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.username=e}),placeholder:"请输入 SMTP 服务用户名"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(w,{label:"SMTP 密码",prop:"password"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{modelValue:i.form.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.password=e}),type:"password",placeholder:"请输入密码","show-password":""},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(w,{label:"发送邮箱",prop:"mailFrom"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{modelValue:i.form.mailFrom,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.mailFrom=e}),placeholder:"请输入邮箱账号"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(w,{label:"SMTP",prop:"smtpHost"},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{span:12},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{modelValue:i.form.smtpHost,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.smtpHost=e}),placeholder:"SMTP Host"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(h,{span:1,style:{"text-align":"center"}},{default:(0,r.w5)((function(){return[l]})),_:1}),(0,r.Wm)(h,{span:6},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{modelValue:i.form.smtpPort,"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.form.smtpPort=e}),placeholder:"SMTP Port"},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)(w,{label:"启用 SSL",prop:"useSSL"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{modelValue:i.form.useSSL,"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.form.useSSL=e})},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(w,{style:{"margin-top":"38px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{type:"primary",onClick:t[6]||(t[6]=function(e){return s.onSubmit("formRef")})},{default:(0,r.w5)((function(){return[o]})),_:1}),(0,r.Wm)(V,{type:"danger",onClick:t[7]||(t[7]=function(e){return s.onReset()})},{default:(0,r.w5)((function(){return[a]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})]})),_:1})]})),_:1})}var i=n(48534),s=(n(35666),n(63872)),f="/api/v1.0/settings",d=function(){return s.Z.get(f+"/sys_email")},p=function(e){return s.Z.post(f+"/sys_email",e)},c=function(){return s.Z["delete"](f+"/sys_email")},w={data:function(){return{form:{smtpHost:null,smtpPort:null,username:null,mailFrom:null,password:null,useSSL:!1},formRule:{username:[this.requiredInputValidRule("请输入 SMTP 服务用户名")],password:[this.requiredInputValidRule("请输入 SMTP 服务密码")],smtpHost:[this.requiredInputValidRule("请输入 SMTP 地址")],smtpPort:[this.requiredInputValidRule("请输入 SMTP 端口"),{min:1,max:65535,message:"端口有效值为 1~65535",trigger:"blur"}]}}},mounted:function(){this.fetchSysMail()},methods:{requiredInputValidRule:function(e){return{required:!0,message:e,trigger:"blur"}},fetchSysMail:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d().then((function(e){return e.data}));case 2:n=t.sent,n&&(e.form=n);case 4:case"end":return t.stop()}}),t)})))()},onSubmit:function(){var e=this;this.$refs.formRef.validate((function(t){return t?(p(e.form).then((function(t){t.errCode||e.$message.success("更新成功")})),!0):(e.$message.error("请完善表单相关信息！"),!1)}))},onReset:function(){var e=this;this.$confirm("确认重置系统邮件吗？删除后数据将无法恢复","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c().then((function(t){t.errCode||(e.form={},e.$message.success("重置成功"))}))}))}}},h=n(83744);const S=(0,h.Z)(w,[["render",m]]);var V=S}}]);
//# sourceMappingURL=968-legacy.60e0df48.js.map
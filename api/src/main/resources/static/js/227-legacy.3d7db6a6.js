"use strict";(self["webpackChunkdatabasir"]=self["webpackChunkdatabasir"]||[]).push([[227],{64339:function(e,t,a){a.d(t,{b0:function(){return r},wg:function(){return l}});var r="document_template_properties",l=[{author:{},template:{databaseType:"mysql-8.0.28",jdbcDriverFileUrl:"https://maven.aliyun.com/repository/central/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar",icon:a(92357),description:"mysql-8.0.28",jdbcDriverClassName:"com.mysql.cj.jdbc.Driver",jdbcProtocol:"jdbc:mysql",urlPattern:"{{jdbc.protocol}}://{{db.url}}/{{db.name}}",isLocalUpload:!1}},{author:{},template:{databaseType:"mysql-5.1.49",jdbcDriverFileUrl:"https://maven.aliyun.com/repository/central/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar",icon:a(92357),description:"mysql-5.1.49",jdbcDriverClassName:"com.mysql.jdbc.Driver",jdbcProtocol:"jdbc:mysql",urlPattern:"{{jdbc.protocol}}://{{db.url}}/{{db.name}}",isLocalUpload:!1}},{author:{},template:{databaseType:"postgresql-42.3.4",jdbcDriverFileUrl:"https://maven.aliyun.com/repository/central/org/postgresql/postgresql/42.3.4/postgresql-42.3.4.jar",icon:a(43609),description:"postgresql jdbc version 42.3.4",jdbcDriverClassName:"org.postgresql.Driver",jdbcProtocol:"jdbc:postgresql",urlPattern:"{{jdbc.protocol}}://{{db.url}}/{{db.name}}",isLocalUpload:!1}},{author:{},template:{databaseType:"mariadb-3.0.3",jdbcDriverFileUrl:"https://maven.aliyun.com/repository/central/org/mariadb/jdbc/mariadb-java-client/3.0.3/mariadb-java-client-3.0.3.jar",icon:a(36658),description:"mariadb-3.0.3",jdbcDriverClassName:"org.mariadb.jdbc.Driver",jdbcProtocol:"jdbc:mariadb",urlPattern:"{{jdbc.protocol}}://{{db.url}}/{{db.name}}",isLocalUpload:!1}},{author:{},template:{databaseType:"oracle-thin-12.2.0.1",jdbcDriverFileUrl:"https://maven.aliyun.com/repository/central/com/oracle/database/jdbc/ojdbc8/12.2.0.1/ojdbc8-12.2.0.1.jar",icon:a(22260),description:"oracle-thin-12.2.0.1",jdbcDriverClassName:"oracle.jdbc.OracleDriver",jdbcProtocol:"jdbc:oracle:thin",urlPattern:"{{jdbc.protocol}}:@{{db.url}}:{{db.name}}",isLocalUpload:!1}},{author:{},template:{databaseType:"sqlServer-9.4.1.jre8",jdbcDriverFileUrl:"https://maven.aliyun.com/repository/central/com/microsoft/sqlserver/mssql-jdbc/9.4.1.jre8/mssql-jdbc-9.4.1.jre8.jar",icon:a(35641),description:"sqlServer-9.4.1.jre8",jdbcDriverClassName:"com.microsoft.sqlserver.jdbc.SQLServerDriver",jdbcProtocol:"jdbc:sqlserver",urlPattern:"{{jdbc.protocol}}://{{db.url}};databaseName={{db.name}}",isLocalUpload:!1}}]},76631:function(e,t,a){a.d(t,{D:function(){return n},z:function(){return o}});var r=a(63872),l="/api/v1.0",n=function(){return r.Z.get(l+"/document_template/properties")},o=function(e){return r.Z.patch(l+"/document_template/properties",e)}},93227:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var r=a(66252),l=a(49963),n=(0,r._)("div",{class:"h3"},"Tables",-1),o=["onUpdate:modelValue","placeholder"],i=(0,r._)("div",{class:"h3"},"Columns",-1),u=["onUpdate:modelValue","placeholder"],s=(0,r._)("div",{class:"h3"},"Indexes",-1),c=["onUpdate:modelValue","placeholder"],d=(0,r._)("div",{class:"h3"},"Foreign Keys",-1),m=["onUpdate:modelValue","placeholder"],p=(0,r._)("div",{class:"h3"},"Trigger",-1),f=["onUpdate:modelValue","placeholder"];function b(e,t,a,b,h,y){var g=(0,r.up)("el-switch"),v=(0,r.up)("el-col"),_=(0,r.up)("el-row"),j=(0,r.up)("el-table-column"),D=(0,r.up)("el-table");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(_,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(g,{modelValue:h.showSampleData,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.showSampleData=e}),size:"large","active-text":"展示示例数据","inactive-text":"隐藏示例数据",onChange:y.onSwitchShowSampleData},null,8,["modelValue","onChange"])]})),_:1})]})),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[n]})),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(D,{border:"",data:h.sampleData.tables,"highlight-current-row":""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.template.tableFieldNameProperties,(function(e){return(0,r.wg)(),(0,r.j4)(j,{label:e.key,key:e.key,prop:e.key},{header:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":function(t){return e.value=t},placeholder:e.defaultValue,onChange:t[1]||(t[1]=function(e){return y.saveTableProperties()}),class:"cell"},null,40,o),[[l.nr,e.value]])]})),_:2},1032,["label","prop"])})),128))]})),_:1},8,["data"])]})),_:1})]})),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[i]})),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(D,{border:"",data:h.sampleData.columns,"highlight-current-row":""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.template.columnFieldNameProperties,(function(e){return(0,r.wg)(),(0,r.j4)(j,{label:e.key,key:e.key,prop:e.key},{header:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":function(t){return e.value=t},placeholder:e.defaultValue,onChange:t[2]||(t[2]=function(e){return y.saveColumnProperties()}),class:"cell"},null,40,u),[[l.nr,e.value]])]})),_:2},1032,["label","prop"])})),128))]})),_:1},8,["data"])]})),_:1})]})),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[s]})),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(D,{border:"",data:h.sampleData.indexes},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.template.indexFieldNameProperties,(function(e){return(0,r.wg)(),(0,r.j4)(j,{label:e.key,key:e.key,prop:e.key},{header:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":function(t){return e.value=t},placeholder:e.defaultValue,onChange:t[3]||(t[3]=function(e){return y.saveIndexProperties()}),class:"cell"},null,40,c),[[l.nr,e.value]])]})),_:2},1032,["label","prop"])})),128))]})),_:1},8,["data"])]})),_:1})]})),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[d]})),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(D,{border:"",data:h.sampleData.foreignKeys},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.template.foreignKeyFieldNameProperties,(function(e){return(0,r.wg)(),(0,r.j4)(j,{label:e.key,key:e.key,prop:e.key},{header:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":function(t){return e.value=t},placeholder:e.defaultValue,onChange:t[4]||(t[4]=function(e){return y.saveForeignKeyProperties()}),class:"cell"},null,40,m),[[l.nr,e.value]])]})),_:2},1032,["label","prop"])})),128))]})),_:1},8,["data"])]})),_:1})]})),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[p]})),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(D,{border:"",data:h.sampleData.triggers},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.template.triggerFieldNameProperties,(function(e){return(0,r.wg)(),(0,r.j4)(j,{label:e.key,key:e.key,prop:e.key},{header:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":function(t){return e.value=t},placeholder:e.defaultValue,onChange:t[5]||(t[5]=function(e){return y.saveTriggerProperties()}),class:"cell"},null,40,f),[[l.nr,e.value]])]})),_:2},1032,["label","prop"])})),128))]})),_:1},8,["data"])]})),_:1})]})),_:1})],64)}var h=a(76631),y=a(64339),g={data:function(){return{template:{tableFieldNameProperties:[],columnFieldNameProperties:[],foreignKeyFieldNameProperties:[],indexFieldNameProperties:[],triggerFieldNameProperties:[]},sampleData:{tables:[],columns:[],indexes:[],foreignKeys:[],triggers:[]},showSampleData:!1,inputStyle:{border:"none"}}},watch:{},created:function(){this.fetchDocumentTemplateProperties()},methods:{fetchDocumentTemplateProperties:function(){var e=this;(0,h.D)().then((function(t){t.errCode||(e.template=t.data)}))},clearPropertyCache:function(){sessionStorage.removeItem(y.b0)},saveTableProperties:function(){var e=this,t={type:"TABLE_FIELD_NAME",properties:this.template.tableFieldNameProperties};(0,h.z)(t).then((function(t){t.errCode||(e.$message.success("保存成功"),e.clearPropertyCache())}))},saveColumnProperties:function(){var e=this,t={type:"COLUMN_FIELD_NAME",properties:this.template.columnFieldNameProperties};(0,h.z)(t).then((function(t){t.errCode||(e.$message.success("保存成功"),e.clearPropertyCache())}))},saveIndexProperties:function(){var e=this,t={type:"INDEX_FIELD_NAME",properties:this.template.indexFieldNameProperties};(0,h.z)(t).then((function(t){t.errCode||(e.$message.success("保存成功"),e.clearPropertyCache())}))},saveTriggerProperties:function(){var e=this,t={type:"TRIGGER_FIELD_NAME",properties:this.template.triggerFieldNameProperties};(0,h.z)(t).then((function(t){t.errCode||(e.$message.success("保存成功"),e.clearPropertyCache())}))},saveForeignKeyProperties:function(){var e=this,t={type:"FOREIGN_KEY_FIELD_NAME",properties:this.template.foreignKeyFieldNameProperties};(0,h.z)(t).then((function(t){t.errCode||(e.$message.success("保存成功"),e.clearPropertyCache())}))},onSwitchShowSampleData:function(e){if(e){this.sampleData.tables=[{name:"demo",type:"TABLE",comment:"demo",description:"this is a demo"},{name:"user",type:"TABLE",comment:"user",description:"this is a user"}];var t='[{"id":409,"name":"id","type":"INT","size":10,"decimalDigits":1,"comment":"id comment","description":"this is id","isPrimaryKey":true,"nullable":"NO","autoIncrement":"YES","defaultValue":"1","discussionCount":null,"createAt":"2022-04-10 13:45:06"},{"id":410,"name":"email","type":"VARCHAR","size":512,"decimalDigits":null,"comment":"","description":null,"isPrimaryKey":false,"nullable":"NO","autoIncrement":"NO","defaultValue":null,"discussionCount":null,"createAt":"2022-04-10 13:45:06"},{"id":411,"name":"username","type":"VARCHAR","size":128,"decimalDigits":null,"comment":"","description":null,"isPrimaryKey":false,"nullable":"NO","autoIncrement":"NO","defaultValue":null,"discussionCount":null,"createAt":"2022-04-10 13:45:06"},{"id":412,"name":"password","type":"TEXT","size":65535,"decimalDigits":null,"comment":"","description":null,"isPrimaryKey":false,"nullable":"NO","autoIncrement":"NO","defaultValue":null,"discussionCount":null,"createAt":"2022-04-10 13:45:06"}]';this.sampleData.columns=JSON.parse(t);var a='[{"id":96,"name":"uk_email","isUnique":true,"columnNames":["email","deleted_token"],"createAt":"2022-04-10 13:45:06"},{"id":97,"name":"uk_username","isUnique":true,"columnNames":["username","deleted_token"],"createAt":"2022-04-10 13:45:06"},{"id":98,"name":"PRIMARY","isUnique":true,"columnNames":["id"],"createAt":"2022-04-10 13:45:06"}]';this.sampleData.indexes=JSON.parse(a);var r='[{"fkName":"dept_manager_ibfk_2","fkTableName":"dept_manager","fkColumnName":"dept_no","pkName":"PRIMARY","pkTableName":"departments","pkColumnName":"dept_no","updateRule":"CASCADE","deleteRule":"CASCADE"},{"fkName":"dept_manager_ibfk_1","fkTableName":"dept_manager","fkColumnName":"emp_no","pkName":"PRIMARY","pkTableName":"employees","pkColumnName":"emp_no","updateRule":"CASCADE","deleteRule":"CASCADE"}]';this.sampleData.foreignKeys=JSON.parse(r);var l='[{"id":1,"name":"custom trigger","timing":"before","manipulation":"insert","statement":"sql","triggerCreateAt":"1970-01-01 00:00:00"}]';this.sampleData.triggers=JSON.parse(l)}else this.sampleData.tables=[],this.sampleData.columns=[],this.sampleData.indexes=[],this.sampleData.foreignKeys=[],this.triggers=[]}}},v=a(83744);const _=(0,v.Z)(g,[["render",b]]);var j=_}}]);
//# sourceMappingURL=227-legacy.3d7db6a6.js.map
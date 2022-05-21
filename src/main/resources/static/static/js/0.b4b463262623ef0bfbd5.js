webpackJsonp([0],{"32Xo":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),n=a.n(i),l={name:"SysHr",data:function(){return{keywords:"",hrs:[],selectedRoles:[],allroles:[]}},mounted:function(){this.initHrs()},methods:{deleteHr:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRequest("/system/hr/"+e.id).then(function(e){e&&t.initHrs()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},doSearch:function(){this.initHrs()},hidePop:function(e){var t=this,a=[];n()(a,e.roles);var i=!1;if(a.length!=this.selectedRoles.length)i=!0;else{for(var l=0;l<a.length;l++)for(var s=a[l],o=0;o<this.selectedRoles.length;o++){var r=this.selectedRoles[o];if(s.id==r){a.splice(l,1),l--;break}}0!=a.length&&(i=!0)}if(i){var c="/system/hr/role?hrid="+e.id;this.selectedRoles.forEach(function(e){c+="&rids="+e}),this.putRequest(c).then(function(e){e&&t.initHrs()})}},showPop:function(e){var t=this;this.initAllRoles();var a=e.roles;this.selectedRoles=[],a.forEach(function(e){t.selectedRoles.push(e.id)})},enabledChange:function(e){var t=this;delete e.roles,this.putRequest("/system/hr/",e).then(function(e){e&&t.initHrs()})},initAllRoles:function(){var e=this;this.getRequest("/system/hr/roles").then(function(t){t&&(e.allroles=t)})},initHrs:function(){var e=this;this.getRequest("/system/hr/?keywords="+this.keywords).then(function(t){t&&(e.hrs=t)})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{"margin-top":"10px",display:"flex","justify-content":"left"}},[a("el-input",{staticStyle:{width:"400px","margin-right":"10px"},attrs:{placeholder:"通过用户名搜索用户...","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch.apply(null,arguments)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.doSearch}},[e._v("搜索")])],1),e._v(" "),a("div",{staticClass:"hr-container"},e._l(e.hrs,function(t,i){return a("el-card",{key:i,staticClass:"hr-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(t.name))]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"#e30007"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.deleteHr(t)}}})],1),e._v(" "),a("div",[a("div",{staticClass:"img-container"},[a("img",{staticClass:"userface-img",attrs:{src:t.userface,alt:t.name,title:t.name}})]),e._v(" "),a("div",{staticClass:"userinfo-container"},[a("div",[e._v("用户名："+e._s(t.username))]),e._v(" "),a("div",[e._v("手机号码："+e._s(t.phone))]),e._v(" "),a("div",[e._v("电话号码："+e._s(t.telephone))]),e._v(" "),a("div",[e._v("地址："+e._s(t.address))]),e._v(" "),a("div",[e._v("用户状态：\n                        "),a("el-switch",{attrs:{"active-text":"启用","active-color":"#13ce66","inactive-color":"#ff4949","inactive-text":"禁用"},on:{change:function(a){return e.enabledChange(t)}},model:{value:t.enabled,callback:function(a){e.$set(t,"enabled",a)},expression:"hr.enabled"}})],1),e._v(" "),a("div",[e._v("用户角色：\n                        "),e._l(t.roles,function(t,i){return a("el-tag",{key:i,staticStyle:{"margin-right":"4px"},attrs:{type:"success"}},[e._v(e._s(t.nameZh)+"\n                        ")])}),e._v(" "),a("el-popover",{attrs:{placement:"right",title:"角色列表",width:"200",trigger:"click"},on:{show:function(a){return e.showPop(t)},hide:function(a){return e.hidePop(t)}}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}},e._l(e.allroles,function(e,t){return a("el-option",{key:t,attrs:{label:e.nameZh,value:e.id}})}),1),e._v(" "),a("el-button",{attrs:{slot:"reference",icon:"el-icon-more",type:"text"},slot:"reference"})],1)],2),e._v(" "),a("div",[e._v("备注："+e._s(t.remark))])])])])}),1)])},staticRenderFns:[]};var o=a("VU/8")(l,s,!1,function(e){a("OOKQ")},null,null);t.default=o.exports},"4KNq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"STBasic",data:function(){return{searchValue:{orderNo:null,patIndexNo:null,name:null,telephone:null,reportLink:null,status:null,createDT:null,updateDT:null},title:"",importDataBtnText:"导入数据",importDataBtnIcon:"el-icon-upload2",importDataDisabled:!1,showAdvanceSearchView:!1,sts:[],loading:!1,popVisible:!1,popVisible2:!1,dialogVisible:!1,total:0,page:1,keyword:"",size:10,statusoptions:[{value:"reject",label:"拒绝服务或者爽约"},{value:"reschedule",label:"改约"},{value:"unreachable",label:"电话不通"},{value:"incorrectinfo",label:"信息不一致"},{value:"completed",label:"服务完成"}],st:{orderNo:"",patIndexNo:"",name:"",telephone:"",reportLink:"",status:"",createDT:"",updateDT:""},defaultProps:{children:"children",label:"name"},rules:{orderNo:[{required:!0,message:"请输入预定单号",trigger:"blur"}],patIndexNo:[{required:!0,message:"请输入人员ID",trigger:"blur"}],name:[{required:!0,message:"请输入人员名称",trigger:"blur"}],telephone:[{required:!0,message:"请输入手机号",trigger:"blur"}],reportLink:[{required:!1,message:"请输入体检报告地址",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]}}},mounted:function(){this.initSTs()},methods:{onError:function(e,t,a){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1},onSuccess:function(e,t,a){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1,this.initSTs()},beforeUpload:function(){this.importDataBtnText="正在导入",this.importDataBtnIcon="el-icon-loading",this.importDataDisabled=!0},exportData:function(){window.open("/st/basic/export","_parent")},emptyST:function(){this.st={patindexNo:"",name:"",telephone:"",reportLink:"",status:"",createDT:null,updateDT:null}},emptySearch:function(){this.searchValue={patindexNo:"",name:"",telephone:"",reportLink:"",status:"",createDT:null,updateDT:null}},showEditSTView:function(e){this.title="编辑状态跟踪信息",this.st=e,this.dialogVisible=!0},deleteST:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRequest("/st/basic/"+e.id).then(function(e){e&&t.initSTs()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},interfaceST:function(e){var t=this;this.$confirm("此操作将【"+e.name+"】的数据同步给药联, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.getRequest("/st/basic/"+e.id).then(function(e){e&&t.$message({type:"info",message:"同步成功"})})}).catch(function(){t.$message({type:"info",message:"已取消同步"})})},sizeChange:function(e){this.size=e,this.initSTs()},doAddST:function(){var e=this;this.st.id?this.$refs.stForm.validate(function(t){t&&e.putRequest("/st/basic/",e.st).then(function(t){t&&(e.dialogVisible=!1,e.initSTs())})}):this.$refs.stForm.validate(function(t){t&&e.postRequest("/st/basic/",e.st).then(function(t){t&&(e.dialogVisible=!1,e.initSTs())})})},currentChange:function(e){this.page=e,this.initSTs("advanced")},showAddSTView:function(){this.emptyST(),this.title="添加记录",this.dialogVisible=!0},tableRowClassName:function(e){e.row;return 0===e.rowIndex?"warning-row":""},initSTs:function(e){var t=this;this.loading=!0;var a="/st/basic/?page="+this.page+"&size="+this.size;e&&"advanced"==e?(console.log(this.searchValue.orderNo),this.searchValue.orderNo&&(a+="&orderNo="+this.searchValue.orderNo),this.searchValue.patIndexNo&&(a+="&patIndexNo="+this.searchValue.patIndexNo),this.searchValue.name&&(a+="&name="+this.searchValue.name),this.searchValue.telephone&&(a+="&telephone="+this.searchValue.telephone),this.searchValue.status&&(a+="&status="+this.searchValue.status),this.searchValue.createDTScope&&(a+="&createDTScope="+this.searchValue.createDTScope),this.searchValue.updateDTScope&&(a+="&updateDTScope="+this.searchValue.updateDTScope)):a+="&name="+this.keyword,this.getRequest(a).then(function(e){t.loading=!1,e&&(t.sts=e.data,t.total=e.total)})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",[a("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入人员姓名进行搜索，可以直接回车搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.initSTs},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initSTs.apply(null,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.initSTs}},[e._v("\n                      搜索\n                  ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showAdvanceSearchView=!e.showAdvanceSearchView}}},[a("i",{class:e.showAdvanceSearchView?"fa fa-angle-double-up":"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),e._v("\n                      高级搜索\n                  ")])],1),e._v(" "),a("div",[a("el-upload",{staticStyle:{display:"inline-flex","margin-right":"8px"},attrs:{"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"on-error":e.onError,disabled:e.importDataDisabled,action:"/st/basic/import"}},[a("el-button",{attrs:{disabled:e.importDataDisabled,type:"success",icon:e.importDataBtnIcon}},[e._v("\n                          "+e._s(e.importDataBtnText)+"\n                      ")])],1),e._v(" "),a("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:e.exportData}},[e._v("\n                      导出数据\n                  ")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showAddSTView}},[e._v("\n                      添加用户\n                  ")])],1)]),e._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanceSearchView,expression:"showAdvanceSearchView"}],staticStyle:{border:"1px solid #409eff","border-radius":"5px","box-sizing":"border-box",padding:"5px",margin:"10px 0px","font-size":"12px"}},[a("el-row",[a("el-col",{attrs:{span:8,align:"left"}},[e._v("\n                      订单编号:"),a("el-input",{staticStyle:{width:"150px","margin-left":"14px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入预订单号"},model:{value:e.searchValue.orderNo,callback:function(t){e.$set(e.searchValue,"orderNo",t)},expression:"searchValue.orderNo"}})],1),e._v(" "),a("el-col",{attrs:{span:8,align:"left"}},[e._v("\n                          人员编号:"),a("el-input",{staticStyle:{width:"150px","margin-left":"14px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入人员编号"},model:{value:e.searchValue.patIndexNo,callback:function(t){e.$set(e.searchValue,"patIndexNo",t)},expression:"searchValue.patIndexNo"}})],1),e._v(" "),a("el-col",{attrs:{span:8,align:"left"}},[e._v("\n                      订单状态:\n                      "),a("el-select",{staticStyle:{width:"150px","margin-left":"14px"},attrs:{placeholder:"请输入状态",size:"mini"},model:{value:e.searchValue.status,callback:function(t){e.$set(e.searchValue,"status",t)},expression:"searchValue.status"}},e._l(e.statusoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:8,align:"left"}},[e._v("\n                          手机号码:"),a("el-input",{staticStyle:{width:"150px","margin-left":"14px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入员工手机号"},model:{value:e.searchValue.telephone,callback:function(t){e.$set(e.searchValue,"telephone",t)},expression:"searchValue.telephone"}})],1),e._v(" "),a("el-col",{attrs:{span:8,align:"left"}},[e._v("\n                          人员姓名:"),a("el-input",{staticStyle:{width:"150px","margin-left":"14px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入人员姓名"},model:{value:e.searchValue.name,callback:function(t){e.$set(e.searchValue,"name",t)},expression:"searchValue.name"}})],1),e._v(" "),a("el-col",{attrs:{span:8,align:"left"}},[e._v("\n                      创建日期:\n                      "),a("el-date-picker",{staticStyle:{"margin-left":"14px"},attrs:{type:"daterange",size:"mini","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchValue.createDTScope,callback:function(t){e.$set(e.searchValue,"createDTScope",t)},expression:"searchValue.createDTScope"}})],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{size:"mini"},on:{click:e.emptySearch}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.initSTs("advanced")}}},[e._v("搜索")])],1)],1)],1)])],1),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.sts,stripe:"",border:"","element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)","header-row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",fixed:"",align:"left",label:"记录编号",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo",align:"left",label:"预约单号",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"patIndexNo",label:"人员编号",align:"left",width:"85"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"left",width:"85"}}),e._v(" "),a("el-table-column",{attrs:{prop:"telephone",width:"100",align:"left",label:"电话号码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"left",width:"85"}}),e._v(" "),a("el-table-column",{attrs:{prop:"reportLink",width:"600",align:"left",label:"体检报告下载地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createDT",width:"95",align:"left",label:"创建日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDT",width:"95",align:"left",label:"最后更新日期"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini"},on:{click:function(a){return e.showEditSTView(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.interfaceST(t.row)}}},[e._v("发送药联接口")]),e._v(" "),a("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.deleteST(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-form",{ref:"stForm",attrs:{model:e.st,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"记录编号:",prop:"orderNo"}},[a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入记录编号"},model:{value:e.st.orderNo,callback:function(t){e.$set(e.st,"orderNo",t)},expression:"st.orderNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"人员编号:",prop:"patIndexNo"}},[a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入人员编号"},model:{value:e.st.patIndexNo,callback:function(t){e.$set(e.st,"patIndexNo",t)},expression:"st.patIndexNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-message",placeholder:"请输入人员姓名"},model:{value:e.st.name,callback:function(t){e.$set(e.st,"name",t)},expression:"st.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"电话号码:",prop:"telephone"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入电话号码"},model:{value:e.st.telephone,callback:function(t){e.$set(e.st,"telephone",t)},expression:"st.telephone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请输入状态",size:"mini"},model:{value:e.st.status,callback:function(t){e.$set(e.st,"status",t)},expression:"st.status"}},e._l(e.statusoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"体检报告下载地址:",prop:"reportLink"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入体检报告下载地址"},model:{value:e.st.reportLink,callback:function(t){e.$set(e.st,"reportLink",t)},expression:"st.reportLink"}})],1)],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.doAddST}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var l=a("VU/8")(i,n,!1,function(e){a("pz2k")},null,null);t.default=l.exports},CRlF:function(e,t){},EtAD:function(e,t,a){var i={"./Home.vue":"j7e0","./HrInfo.vue":"MR9+","./Login.vue":"lmfZ","./rp/RegPlan.vue":"eeoQ","./st/STBasic.vue":"4KNq","./sys/SysHr.vue":"32Xo"};function n(e){return a(l(e))}function l(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(i)},n.resolve=l,e.exports=n,n.id="EtAD"},OOKQ:function(e,t){},eeoQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"RegPlan",data:function(){return{searchValue:{id:null,method:null,status:null,createDT:null},title:"",showAdvanceSearchView:!1,showpaser:!1,rps:[],loading:!1,popVisible:!1,popVisible2:!1,dialogVisible:!1,total:0,page:1,keyword:"",size:10,statusoptions:[{value:1,label:"请求完成"},{value:2,label:"排队中"}],methodoptions:[{value:"getPatientInfo",label:"花名册接口"},{value:"getRegisterPlan",label:"预约计划接口"},{value:"trackingStatus",label:"状态跟踪"}],rp:{id:"",method:"",status:"",request:"",response:"",createDT:"",updateDT:""},defaultProps:{children:"children",label:"name"},rules:{method:[{required:!0,message:"请输入接口名称",trigger:"blur"}],request:[{required:!0,message:"请输入请求参数",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]}}},mounted:function(){this.initRPs()},methods:{exportData:function(){window.open("/rp/basic/export","_parent")},dataParse:function(e){"getRegisterPlan"==e.method?window.open("/rp/basic/parse/"+e.id,"_parent"):"getPatientInfo"==e.method?window.open("/rp/basic/parsepi/"+e.id,"_parent"):this.$alert("无法解析！仅支持解析花名册和预约计划接口！")},emptyRP:function(){this.rp={id:"",method:"",status:"",request:"",response:"",createDT:null,updateDT:null}},emptySearch:function(){this.searchValue={id:"",method:"",status:"",request:"",response:"",createDT:null,updateDT:null}},showEditRPView:function(e){this.title="编辑接口请求信息",this.rp=e,this.dialogVisible=!0},deleteRP:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.method+"】接口的编号"+e.id+"的请求数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRequest("/rp/basic/"+e.id).then(function(e){e&&t.initRPs()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},interfaceRP:function(e){var t=this;this.$confirm("此操作将向药联请求【"+e.method+"】接口, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.getRequest("/rp/basic/"+e.id).then(function(e){e&&t.$message({type:"info",message:"同步成功"})})}).catch(function(){t.$message({type:"info",message:"已取消同步"})})},sizeChange:function(e){this.size=e,this.initRPs()},doAddRP:function(){var e=this;this.rp.id?this.$refs.rpForm.validate(function(t){t&&e.putRequest("/rp/basic/",e.rp).then(function(t){t&&(e.dialogVisible=!1,e.initRPs())})}):this.$refs.rpForm.validate(function(t){t&&e.postRequest("/rp/basic/",e.rp).then(function(t){t&&(e.dialogVisible=!1,e.initRPs())})})},currentChange:function(e){this.page=e,this.initRPs("advanced")},showAddRPView:function(){this.emptyRP(),this.title="添加记录",this.dialogVisible=!0},tableRowClassName:function(e){e.row;return 0===e.rowIndex?"warning-row":""},initRPs:function(e){var t=this;this.loading=!0;var a="/rp/basic/?page="+this.page+"&size="+this.size;e&&"advanced"==e?(this.searchValue.id&&(a+="&id="+this.searchValue.id),this.searchValue.method&&(a+="&method="+this.searchValue.method),this.searchValue.status&&(a+="&status="+this.searchValue.status),this.searchValue.createDTScope&&(a+="&createDTScope="+this.searchValue.createDTScope)):a+="&method="+this.keyword,this.getRequest(a).then(function(e){t.loading=!1,e&&(t.rps=e.data,t.total=e.total)})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",[a("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入接口名称进行搜索，可以直接回车搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.initRPs},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initRPs.apply(null,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.initRPs}},[e._v("\n                        搜索\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showAdvanceSearchView=!e.showAdvanceSearchView}}},[a("i",{class:e.showAdvanceSearchView?"fa fa-angle-double-up":"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),e._v("\n                        高级搜索\n                    ")])],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:e.exportData}},[e._v("\n                        导出数据\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showAddRPView}},[e._v("\n                        新建请求\n                    ")])],1)]),e._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanceSearchView,expression:"showAdvanceSearchView"}],staticStyle:{border:"1px solid #409eff","border-radius":"5px","box-sizing":"border-box",padding:"5px",margin:"10px 0px","font-size":"12px"}},[a("el-row",[a("el-col",{attrs:{span:5}},[e._v("\n                        请求id:"),a("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入接口请求ID"},model:{value:e.searchValue.id,callback:function(t){e.$set(e.searchValue,"id",t)},expression:"searchValue.id"}})],1),e._v(" "),a("el-col",{attrs:{span:5}},[e._v("\n                          接口名称:\n                          "),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择接口",size:"mini"},model:{value:e.searchValue.method,callback:function(t){e.$set(e.searchValue,"method",t)},expression:"searchValue.method"}},e._l(e.methodoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[e._v("\n                          状态:\n                          "),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择状态",size:"mini"},model:{value:e.searchValue.status,callback:function(t){e.$set(e.searchValue,"status",t)},expression:"searchValue.status"}},e._l(e.statusoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:9}},[e._v("\n                            创建日期:\n                            "),a("el-date-picker",{attrs:{type:"daterange",size:"mini","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchValue.createDTScope,callback:function(t){e.$set(e.searchValue,"createDTScope",t)},expression:"searchValue.createDTScope"}})],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:14}})],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{size:"mini"},on:{click:e.emptySearch}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.initRPs("advanced")}}},[e._v("搜索")])],1)],1)],1)])],1),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.rps,stripe:"",border:"","element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)","header-row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",fixed:"",align:"left",label:"请求ID",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"method",label:"接口名称",align:"left",width:"85"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"left",width:"85"}}),e._v(" "),a("el-table-column",{attrs:{prop:"request",width:"600",align:"left",label:"请求参数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"response",width:"600",align:"left",label:"返回值"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createDT",width:"95",align:"left",label:"创建日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDT",width:"95",align:"left",label:"最后更新日期"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"1px"},attrs:{size:"mini"},on:{click:function(a){return e.showEditRPView(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticStyle:{padding:"1px"},attrs:{size:"mini",disabled:e.showpaser},on:{click:function(a){return e.dataParse(t.row)}}},[e._v("解析")]),e._v(" "),a("el-button",{staticStyle:{padding:"1px"},attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.interfaceRP(t.row)}}},[e._v("发送药联")]),e._v(" "),a("el-button",{staticStyle:{padding:"1px"},attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.deleteRP(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-form",{ref:"rpForm",attrs:{model:e.rp,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"接口:",prop:"method"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择接口",size:"mini"},model:{value:e.rp.method,callback:function(t){e.$set(e.rp,"method",t)},expression:"rp.method"}},e._l(e.methodoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择状态",size:"mini"},model:{value:e.rp.status,callback:function(t){e.$set(e.rp,"status",t)},expression:"rp.status"}},e._l(e.statusoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"请求参数:",prop:"request"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入请求参数"},model:{value:e.rp.request,callback:function(t){e.$set(e.rp,"request",t)},expression:"rp.request"}})],1)],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.doAddRP}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var l=a("VU/8")(i,n,!1,function(e){a("CRlF")},null,null);t.default=l.exports},pz2k:function(e,t){}});
//# sourceMappingURL=0.b4b463262623ef0bfbd5.js.map
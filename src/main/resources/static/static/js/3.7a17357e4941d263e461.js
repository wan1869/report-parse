webpackJsonp([3],{"32Xo":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("woOf"),i=n.n(s),r={name:"SysHr",data:function(){return{keywords:"",hrs:[],selectedRoles:[],allroles:[]}},mounted:function(){this.initHrs()},methods:{deleteHr:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRequest("/system/hr/"+e.id).then(function(e){e&&t.initHrs()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},doSearch:function(){this.initHrs()},hidePop:function(e){var t=this,n=[];i()(n,e.roles);var s=!1;if(n.length!=this.selectedRoles.length)s=!0;else{for(var r=0;r<n.length;r++)for(var o=n[r],l=0;l<this.selectedRoles.length;l++){var a=this.selectedRoles[l];if(o.id==a){n.splice(r,1),r--;break}}0!=n.length&&(s=!0)}if(s){var c="/system/hr/role?hrid="+e.id;this.selectedRoles.forEach(function(e){c+="&rids="+e}),this.putRequest(c).then(function(e){e&&t.initHrs()})}},showPop:function(e){var t=this;this.initAllRoles();var n=e.roles;this.selectedRoles=[],n.forEach(function(e){t.selectedRoles.push(e.id)})},enabledChange:function(e){var t=this;delete e.roles,this.putRequest("/system/hr/",e).then(function(e){e&&t.initHrs()})},initAllRoles:function(){var e=this;this.getRequest("/system/hr/roles").then(function(t){t&&(e.allroles=t)})},initHrs:function(){var e=this;this.getRequest("/system/hr/?keywords="+this.keywords).then(function(t){t&&(e.hrs=t)})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"margin-top":"10px",display:"flex","justify-content":"left"}},[n("el-input",{staticStyle:{width:"400px","margin-right":"10px"},attrs:{placeholder:"通过用户名搜索用户...","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch.apply(null,arguments)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.doSearch}},[e._v("搜索")])],1),e._v(" "),n("div",{staticClass:"hr-container"},e._l(e.hrs,function(t,s){return n("el-card",{key:s,staticClass:"hr-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"#e30007"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.deleteHr(t)}}})],1),e._v(" "),n("div",[n("div",{staticClass:"img-container"},[n("img",{staticClass:"userface-img",attrs:{src:t.userface,alt:t.name,title:t.name}})]),e._v(" "),n("div",{staticClass:"userinfo-container"},[n("div",[e._v("用户名："+e._s(t.username))]),e._v(" "),n("div",[e._v("手机号码："+e._s(t.phone))]),e._v(" "),n("div",[e._v("电话号码："+e._s(t.telephone))]),e._v(" "),n("div",[e._v("地址："+e._s(t.address))]),e._v(" "),n("div",[e._v("用户状态：\n                        "),n("el-switch",{attrs:{"active-text":"启用","active-color":"#13ce66","inactive-color":"#ff4949","inactive-text":"禁用"},on:{change:function(n){return e.enabledChange(t)}},model:{value:t.enabled,callback:function(n){e.$set(t,"enabled",n)},expression:"hr.enabled"}})],1),e._v(" "),n("div",[e._v("用户角色：\n                        "),e._l(t.roles,function(t,s){return n("el-tag",{key:s,staticStyle:{"margin-right":"4px"},attrs:{type:"success"}},[e._v(e._s(t.nameZh)+"\n                        ")])}),e._v(" "),n("el-popover",{attrs:{placement:"right",title:"角色列表",width:"200",trigger:"click"},on:{show:function(n){return e.showPop(t)},hide:function(n){return e.hidePop(t)}}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}},e._l(e.allroles,function(e,t){return n("el-option",{key:t,attrs:{label:e.nameZh,value:e.id}})}),1),e._v(" "),n("el-button",{attrs:{slot:"reference",icon:"el-icon-more",type:"text"},slot:"reference"})],1)],2),e._v(" "),n("div",[e._v("备注："+e._s(t.remark))])])])])}),1)])},staticRenderFns:[]};var l=n("VU/8")(r,o,!1,function(e){n("OOKQ")},null,null);t.default=l.exports},Gop0:function(e,t,n){var s={"./SysHr.vue":"32Xo"};function i(e){return n(r(e))}function r(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id="Gop0"},OOKQ:function(e,t){}});
//# sourceMappingURL=3.7a17357e4941d263e461.js.map
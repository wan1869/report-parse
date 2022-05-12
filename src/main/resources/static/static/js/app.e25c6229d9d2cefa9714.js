webpackJsonp([4],{"4ZNV":function(e,t){},GHJi:function(e,t){(function(){var e,n,r,s,o={}.hasOwnProperty,i=[].slice;e={LF:"\n",NULL:"\0"},r=function(){var t;function n(e,t,n){this.command=e,this.headers=null!=t?t:{},this.body=null!=n?n:""}return n.prototype.toString=function(){var t,r,s,i,a;for(r in t=[this.command],(s=!1===this.headers["content-length"])&&delete this.headers["content-length"],a=this.headers)o.call(a,r)&&(i=a[r],t.push(r+":"+i));return this.body&&!s&&t.push("content-length:"+n.sizeOfUTF8(this.body)),t.push(e.LF+this.body),t.join(e.LF)},n.sizeOfUTF8=function(e){return e?encodeURI(e).match(/%..|./g).length:0},t=function(t){var r,s,o,i,a,u,l,c,d,f,p,h,m,g,v,b,_;for(i=t.search(RegExp(""+e.LF+e.LF)),o=(a=t.substring(0,i).split(e.LF)).shift(),u={},h=function(e){return e.replace(/^\s+|\s+$/g,"")},m=0,v=(b=a.reverse()).length;m<v;m++)c=(f=b[m]).indexOf(":"),u[h(f.substring(0,c))]=h(f.substring(c+1));if(r="",p=i+2,u["content-length"])d=parseInt(u["content-length"]),r=(""+t).substring(p,p+d);else for(s=null,l=g=p,_=t.length;(p<=_?g<_:g>_)&&(s=t.charAt(l))!==e.NULL;l=p<=_?++g:--g)r+=s;return new n(o,u,r)},n.unmarshall=function(n){var r,s,o,i;return s=n.split(RegExp(""+e.NULL+e.LF+"*")),(i={frames:[],partial:""}).frames=function(){var e,n,o,i;for(i=[],e=0,n=(o=s.slice(0,-1)).length;e<n;e++)r=o[e],i.push(t(r));return i}(),(o=s.slice(-1)[0])===e.LF||-1!==o.search(RegExp(""+e.NULL+e.LF+"*$"))?i.frames.push(t(o)):i.partial=o,i},n.marshall=function(t,r,s){return new n(t,r,s).toString()+e.NULL},n}(),n=function(){var t;function n(e){this.ws=e,this.ws.binaryType="arraybuffer",this.counter=0,this.connected=!1,this.heartbeat={outgoing:1e4,incoming:1e4},this.maxWebSocketFrameSize=16384,this.subscriptions={},this.partialData=""}return n.prototype.debug=function(e){var t;return"undefined"!=typeof window&&null!==window&&null!=(t=window.console)?t.log(e):void 0},t=function(){return Date.now?Date.now():(new Date).valueOf},n.prototype._transmit=function(e,t,n){var s;for(s=r.marshall(e,t,n),"function"==typeof this.debug&&this.debug(">>> "+s);;){if(!(s.length>this.maxWebSocketFrameSize))return this.ws.send(s);this.ws.send(s.substring(0,this.maxWebSocketFrameSize)),s=s.substring(this.maxWebSocketFrameSize),"function"==typeof this.debug&&this.debug("remaining = "+s.length)}},n.prototype._setupHeartbeat=function(n){var r,o,i,a,u,l,c;if((u=n.version)===s.VERSIONS.V1_1||u===s.VERSIONS.V1_2)return o=(l=function(){var e,t,r,s;for(s=[],e=0,t=(r=n["heart-beat"].split(",")).length;e<t;e++)a=r[e],s.push(parseInt(a));return s}())[0],r=l[1],0!==this.heartbeat.outgoing&&0!==r&&(i=Math.max(this.heartbeat.outgoing,r),"function"==typeof this.debug&&this.debug("send PING every "+i+"ms"),this.pinger=s.setInterval(i,(c=this,function(){return c.ws.send(e.LF),"function"==typeof c.debug?c.debug(">>> PING"):void 0}))),0!==this.heartbeat.incoming&&0!==o?(i=Math.max(this.heartbeat.incoming,o),"function"==typeof this.debug&&this.debug("check PONG every "+i+"ms"),this.ponger=s.setInterval(i,function(e){return function(){var n;if((n=t()-e.serverActivity)>2*i)return"function"==typeof e.debug&&e.debug("did not receive server activity for the last "+n+"ms"),e.ws.close()}}(this))):void 0},n.prototype._parseConnect=function(){var e,t,n,r;switch(r={},(e=1<=arguments.length?i.call(arguments,0):[]).length){case 2:r=e[0],t=e[1];break;case 3:e[1]instanceof Function?(r=e[0],t=e[1],n=e[2]):(r.login=e[0],r.passcode=e[1],t=e[2]);break;case 4:r.login=e[0],r.passcode=e[1],t=e[2],n=e[3];break;default:r.login=e[0],r.passcode=e[1],t=e[2],n=e[3],r.host=e[4]}return[r,t,n]},n.prototype.connect=function(){var n,o,a,u,l;return n=1<=arguments.length?i.call(arguments,0):[],u=this._parseConnect.apply(this,n),a=u[0],this.connectCallback=u[1],o=u[2],"function"==typeof this.debug&&this.debug("Opening Web Socket..."),this.ws.onmessage=(l=this,function(n){var s,i,a,u,c,d,f,p,h,m,g,v,b;if(u="undefined"!=typeof ArrayBuffer&&n.data instanceof ArrayBuffer?(s=new Uint8Array(n.data),"function"==typeof l.debug&&l.debug("--- got data length: "+s.length),function(){var e,t,n;for(n=[],e=0,t=s.length;e<t;e++)i=s[e],n.push(String.fromCharCode(i));return n}().join("")):n.data,l.serverActivity=t(),u!==e.LF){for("function"==typeof l.debug&&l.debug("<<< "+u),h=r.unmarshall(l.partialData+u),l.partialData=h.partial,b=[],m=0,g=(v=h.frames).length;m<g;m++)switch((c=v[m]).command){case"CONNECTED":"function"==typeof l.debug&&l.debug("connected to server "+c.headers.server),l.connected=!0,l._setupHeartbeat(c.headers),b.push("function"==typeof l.connectCallback?l.connectCallback(c):void 0);break;case"MESSAGE":p=c.headers.subscription,(f=l.subscriptions[p]||l.onreceive)?(a=l,d=c.headers["message-id"],c.ack=function(e){return null==e&&(e={}),a.ack(d,p,e)},c.nack=function(e){return null==e&&(e={}),a.nack(d,p,e)},b.push(f(c))):b.push("function"==typeof l.debug?l.debug("Unhandled received MESSAGE: "+c):void 0);break;case"RECEIPT":b.push("function"==typeof l.onreceipt?l.onreceipt(c):void 0);break;case"ERROR":b.push("function"==typeof o?o(c):void 0);break;default:b.push("function"==typeof l.debug?l.debug("Unhandled frame: "+c):void 0)}return b}"function"==typeof l.debug&&l.debug("<<< PONG")}),this.ws.onclose=function(e){return function(){var t;return t="Whoops! Lost connection to "+e.ws.url,"function"==typeof e.debug&&e.debug(t),e._cleanUp(),"function"==typeof o?o(t):void 0}}(this),this.ws.onopen=function(e){return function(){return"function"==typeof e.debug&&e.debug("Web Socket Opened..."),a["accept-version"]=s.VERSIONS.supportedVersions(),a["heart-beat"]=[e.heartbeat.outgoing,e.heartbeat.incoming].join(","),e._transmit("CONNECT",a)}}(this)},n.prototype.disconnect=function(e,t){return null==t&&(t={}),this._transmit("DISCONNECT",t),this.ws.onclose=null,this.ws.close(),this._cleanUp(),"function"==typeof e?e():void 0},n.prototype._cleanUp=function(){if(this.connected=!1,this.pinger&&s.clearInterval(this.pinger),this.ponger)return s.clearInterval(this.ponger)},n.prototype.send=function(e,t,n){return null==t&&(t={}),null==n&&(n=""),t.destination=e,this._transmit("SEND",t,n)},n.prototype.subscribe=function(e,t,n){var r;return null==n&&(n={}),n.id||(n.id="sub-"+this.counter++),n.destination=e,this.subscriptions[n.id]=t,this._transmit("SUBSCRIBE",n),r=this,{id:n.id,unsubscribe:function(){return r.unsubscribe(n.id)}}},n.prototype.unsubscribe=function(e){return delete this.subscriptions[e],this._transmit("UNSUBSCRIBE",{id:e})},n.prototype.begin=function(e){var t,n;return n=e||"tx-"+this.counter++,this._transmit("BEGIN",{transaction:n}),t=this,{id:n,commit:function(){return t.commit(n)},abort:function(){return t.abort(n)}}},n.prototype.commit=function(e){return this._transmit("COMMIT",{transaction:e})},n.prototype.abort=function(e){return this._transmit("ABORT",{transaction:e})},n.prototype.ack=function(e,t,n){return null==n&&(n={}),n["message-id"]=e,n.subscription=t,this._transmit("ACK",n)},n.prototype.nack=function(e,t,n){return null==n&&(n={}),n["message-id"]=e,n.subscription=t,this._transmit("NACK",n)},n}(),s={VERSIONS:{V1_0:"1.0",V1_1:"1.1",V1_2:"1.2",supportedVersions:function(){return"1.1,1.0"}},client:function(e,t){var r;return null==t&&(t=["v10.stomp","v11.stomp"]),r=new(s.WebSocketClass||WebSocket)(e,t),new n(r)},over:function(e){return new n(e)},Frame:r},void 0!==t&&null!==t&&(t.Stomp=s),"undefined"!=typeof window&&null!==window?(s.setInterval=function(e,t){return window.setInterval(t,e)},s.clearInterval=function(e){return window.clearInterval(e)},window.Stomp=s):t||(self.Stomp=s)}).call(this)},"MR9+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mvHQ"),s=n.n(r),o=n("woOf"),i=n.n(o),a={name:"HrInfo",data:function(){var e=this,t=function(t,n,r){""===n?r(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),r())};return{ruleForm:{oldpass:"",pass:"",checkPass:""},rules:{oldpass:[{validator:t,trigger:"blur"}],pass:[{validator:t,trigger:"blur"}],checkPass:[{validator:function(t,n,r){""===n?r(new Error("请再次输入密码")):n!==e.ruleForm.pass?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]},hr:null,hr2:null,dialogVisible:!1,passwdDialogVisible:!1}},mounted:function(){this.initHr()},methods:{onSuccess:function(){this.initHr()},updateHrInfo:function(){var e=this;this.putRequest("/hr/info",this.hr2).then(function(t){t&&(e.dialogVisible=!1,e.initHr())})},showUpdateHrInfoView:function(){this.dialogVisible=!0},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.ruleForm.hrid=t.hr.id,t.putRequest("/hr/pass",t.ruleForm).then(function(e){e&&(t.getRequest("/logout"),window.sessionStorage.removeItem("user"),t.$store.commit("initRoutes",[]),t.$router.replace("/"))})})},resetForm:function(e){this.$refs[e].resetFields()},showUpdatePasswdView:function(){this.passwdDialogVisible=!0},initHr:function(){var e=this;this.getRequest("/hr/info").then(function(t){t&&(e.hr=t,e.hr2=i()({},e.hr),window.sessionStorage.setItem("user",s()(t)),e.$store.commit("INIT_CURRENTHR",t))})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hr?n("div",[n("el-card",{staticClass:"box-card",staticStyle:{width:"400px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.hr.name))])]),e._v(" "),n("div",[n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("el-upload",{attrs:{"show-file-list":!1,"on-success":e.onSuccess,data:e.hr,action:"/hr/userface"}},[n("img",{staticStyle:{width:"100px",height:"100px","border-radius":"50px"},attrs:{title:"点击修改用户图像",src:e.hr.userface,alt:""}})])],1),e._v(" "),n("div",[e._v("电话号码：\n                  "),n("el-tag",[e._v(e._s(e.hr.telephone))])],1),e._v(" "),n("div",[e._v("手机号码：\n                  "),n("el-tag",[e._v(e._s(e.hr.phone))])],1),e._v(" "),n("div",[e._v("居住地址：\n                  "),n("el-tag",[e._v(e._s(e.hr.address))])],1),e._v(" "),n("div",[e._v("用户标签：\n                  "),e._l(e.hr.roles,function(t,r){return n("el-tag",{key:r,staticStyle:{"margin-right":"5px"},attrs:{type:"success"}},[e._v("\n                      "+e._s(t.nameZh)+"\n                  ")])})],2),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-around","margin-top":"10px"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.showUpdateHrInfoView}},[e._v("修改信息")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:e.showUpdatePasswdView}},[e._v("修改密码")])],1)])]),e._v(" "),n("el-dialog",{attrs:{title:"修改用户信息",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("table",[n("tr",[n("td",[n("el-tag",[e._v("用户昵称：")])],1),e._v(" "),n("td",[n("el-input",{model:{value:e.hr2.name,callback:function(t){e.$set(e.hr2,"name",t)},expression:"hr2.name"}})],1)]),e._v(" "),n("tr",[n("td",[n("el-tag",[e._v("电话号码：")])],1),e._v(" "),n("td",[n("el-input",{model:{value:e.hr2.telephone,callback:function(t){e.$set(e.hr2,"telephone",t)},expression:"hr2.telephone"}})],1)]),e._v(" "),n("tr",[n("td",[n("el-tag",[e._v("手机号码：")])],1),e._v(" "),n("td",[n("el-input",{model:{value:e.hr2.phone,callback:function(t){e.$set(e.hr2,"phone",t)},expression:"hr2.phone"}})],1)]),e._v(" "),n("tr",[n("td",[n("el-tag",[e._v("用户地址：")])],1),e._v(" "),n("td",[n("el-input",{model:{value:e.hr2.address,callback:function(t){e.$set(e.hr2,"address",t)},expression:"hr2.address"}})],1)])])]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.updateHrInfo}},[e._v("确 定")])],1)]),e._v(" "),n("el-dialog",{attrs:{title:"修改密码",visible:e.passwdDialogVisible,width:"30%"},on:{"update:visible":function(t){e.passwdDialogVisible=t}}},[n("div",[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"请输入旧密码",prop:"oldpass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.oldpass,callback:function(t){e.$set(e.ruleForm,"oldpass",t)},expression:"ruleForm.oldpass"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"请输入新密码",prop:"pass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"新确认密码",prop:"checkPass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])],1):e._e()},staticRenderFns:[]};var l=n("VU/8")(a,u,!1,function(e){n("O6to")},"data-v-477e2013",null);t.default=l.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},s,!1,function(e){n("gsu9")},null,null).exports,i=n("/ocq"),a=n("lmfZ"),u=n("j7e0"),l=n("MR9+");r.default.use(i.a);var c=new i.a({routes:[{path:"/",name:"Login",component:a.default,hidden:!0},{path:"/home",name:"Home",component:u.default,hidden:!0,meta:{roles:["admin","user"]},children:[{path:"/hrinfo",name:"个人中心",component:l.default,hidden:!0}]},{path:"*",redirect:"/home"}]}),d=n("NYxO"),f=n("zL8q"),p=n("mtWM"),h=n.n(p),m=n("Zrlr"),g=n.n(m),v=n("wxAW"),b=n.n(v),_=n("5QVw"),y=n.n(_)()("showMessage"),w=new(function(){function e(){g()(this,e)}return b()(e,[{key:y,value:function(e,t,n){n?0===document.getElementsByClassName("el-message").length&&f.Message[e](t):f.Message[e](t)}},{key:"info",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("info",e,t)}},{key:"warning",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("warning",e,t)}},{key:"error",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("error",e,t)}},{key:"success",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("success",e,t)}}]),e}());h.a.interceptors.response.use(function(e){if(!e.status||200!=e.status||500!=e.data.status)return e.data.msg&&f.Message.success({message:e.data.msg}),e.data;f.Message.error({message:e.data.msg})},function(e){504==e.response.status||404==e.response.status?f.Message.error({message:"服务器错误( ╯□╰ )"}):403==e.response.status?f.Message.error({message:"权限不足，请联系管理员"}):401==e.response.status?(w.error({message:e.response.data.msg?e.response.data.msg:"尚未登录，请登录"}),c.replace("/")):e.response.data.msg?f.Message.error({message:e.response.data.msg}):f.Message.error({message:"未知错误!"})});var k=function(e,t){return h()({method:"get",url:""+e,params:t})};n("GHJi");r.default.use(d.a);new Date;var S=new d.a.Store({state:{routes:[],sessions:{},hrs:[],currentSession:null,currentHr:JSON.parse(window.sessionStorage.getItem("user")),filterKey:"",stomp:null,isDot:{}},mutations:{INIT_CURRENTHR:function(e,t){e.currentHr=t},initRoutes:function(e,t){e.routes=t},changeCurrentSession:function(e,t){r.default.set(e.isDot,e.currentHr.username+"#"+t.username,!1),e.currentSession=t},addMessage:function(e,t){e.sessions[e.currentHr.username+"#"+t.to]||r.default.set(e.sessions,e.currentHr.username+"#"+t.to,[]),e.sessions[e.currentHr.username+"#"+t.to].push({content:t.content,date:new Date,self:!t.notSelf})},INIT_DATA:function(e){data&&(e.sessions=JSON.parse(data))},INIT_HR:function(e,t){e.hrs=t}},actions:{initData:function(e){e.commit("INIT_DATA")}}}),F=(n("tvR6"),function e(t){var r=[];return t.forEach(function(t){var s=t.path,o=t.component,i=t.name,a=t.meta,u=t.iconCls,l=t.children;l&&l instanceof Array&&(l=e(l));var c={path:s,name:i,iconCls:u,meta:a,children:l,component:function(e){o.startsWith("Home")?n.e(0).then(function(){var t=[n("EtAD")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe):o.startsWith("Reg")?n.e(2).then(function(){var t=[n("gW73")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe):o.startsWith("ST")&&n.e(1).then(function(){var t=[n("vXVL")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe)}};r.push(c)}),r});r.default.prototype.$ELEMENT={size:"small",zIndex:3e3},r.default.use(f.Switch),r.default.use(f.CollapseItem),r.default.use(f.Radio),r.default.use(f.RadioGroup),r.default.use(f.DatePicker),r.default.use(f.Upload),r.default.use(f.Row),r.default.use(f.Col),r.default.use(f.Option),r.default.use(f.Submenu),r.default.use(f.MenuItem),r.default.use(f.Header),r.default.use(f.DropdownMenu),r.default.use(f.DropdownItem),r.default.use(f.Aside),r.default.use(f.Main),r.default.use(f.Checkbox),r.default.use(f.FormItem),r.default.use(f.Collapse),r.default.use(f.Popover),r.default.use(f.Menu),r.default.use(f.Tabs),r.default.use(f.TabPane),r.default.use(f.Breadcrumb),r.default.use(f.BreadcrumbItem),r.default.use(f.Dropdown),r.default.use(f.Steps),r.default.use(f.Step),r.default.use(f.Tooltip),r.default.use(f.Tree),r.default.use(f.Pagination),r.default.use(f.Badge),r.default.use(f.Loading),r.default.use(f.Button),r.default.use(f.Input),r.default.use(f.Table),r.default.use(f.TableColumn),r.default.use(f.Dialog),r.default.use(f.Card),r.default.use(f.Container),r.default.use(f.Icon),r.default.use(f.Select),r.default.use(f.Form),r.default.use(f.Tag),r.default.prototype.$alert=f.MessageBox.alert,r.default.prototype.$confirm=f.MessageBox.confirm,r.default.prototype.postRequest=function(e,t){return h()({method:"post",url:""+e,data:t})},r.default.prototype.postKeyValueRequest=function(e,t){return h()({method:"post",url:""+e,data:t,transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},r.default.prototype.putRequest=function(e,t){return h()({method:"put",url:""+e,data:t})},r.default.prototype.deleteRequest=function(e,t){return h()({method:"delete",url:""+e,params:t})},r.default.prototype.getRequest=k,r.default.config.productionTip=!1,c.beforeEach(function(e,t,n){var r,s;"/"==e.path?n():window.sessionStorage.getItem("user")?(r=c,(s=S).state.routes.length>0||k("/system/config/menu").then(function(e){if(e){var t=F(e);r.addRoutes(t),s.commit("initRoutes",t)}}),n()):n("/?redirect="+e.path)}),new r.default({el:"#app",router:c,store:S,components:{App:o},template:"<App/>"})},O6to:function(e,t){},gsu9:function(e,t){},j7e0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"Home",data:function(){return{}},computed:{routes:function(){return this.$store.state.routes},user:function(){return this.$store.state.currentHr}},methods:{commandHandler:function(e){var t=this;"logout"==e?this.$confirm("此操作将注销登录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.getRequest("/logout"),window.sessionStorage.removeItem("user"),t.$store.commit("initRoutes",[]),t.$router.replace("/")}).catch(function(){t.$message({type:"info",message:"已取消操作"})}):"userinfo"==e&&this.$router.push("/hrinfo")}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",[n("el-header",{staticClass:"homeHeader"},[n("div",{staticClass:"title"},[e._v("敦复渠道管理")]),e._v(" "),n("div",[n("el-dropdown",{staticClass:"userInfo",on:{command:e.commandHandler}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n    "+e._s(e.user.name)),n("i",[n("img",{attrs:{src:e.user.userface,alt:""}})])]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"userinfo"}},[e._v("个人中心")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v("注销登录")])],1)],1)],1)]),e._v(" "),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",{attrs:{router:"","unique-opened":""}},e._l(e.routes,function(t,r){return t.hidden?e._e():n("el-submenu",{key:r,attrs:{index:r+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls,staticStyle:{color:"#409eff","margin-right":"5px"}}),e._v(" "),n("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.children,function(t,r){return n("el-menu-item",{key:r,attrs:{index:t.path}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})],2)}),1)],1),e._v(" "),n("el-main",["/home"!=this.$router.currentRoute.path?n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),n("el-breadcrumb-item",[e._v(e._s(this.$router.currentRoute.name))])],1):e._e(),e._v(" "),"/home"==this.$router.currentRoute.path?n("div",{staticClass:"homeWelcome"},[e._v("\n                        欢迎来到敦复渠道管理系统！\n                    ")]):e._e(),e._v(" "),n("router-view",{staticClass:"homeRouterView"})],1)],1)],1)],1)},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(e){n("q7o+")},null,null);t.default=o.exports},lmfZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mvHQ"),s=n.n(r),o={name:"Login",data:function(){return{loading:!1,vcUrl:"/verifyCode?time="+new Date,loginForm:{username:"admin",password:"123",code:""},checked:!0,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},methods:{updateVerifyCode:function(){this.vcUrl="/verifyCode?time="+new Date},submitLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;e.loading=!0,e.postRequest("/doLogin",e.loginForm).then(function(t){if(e.loading=!1,t){e.$store.commit("INIT_CURRENTHR",t.obj),window.sessionStorage.setItem("user",s()(t.obj));var n=e.$route.query.redirect;e.$router.replace("/"==n||void 0==n?"/home":n)}else e.vcUrl="/verifyCode?time="+new Date})})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"loginForm",staticClass:"loginContainer",attrs:{rules:e.rules,"element-loading-text":"正在登录...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",model:e.loginForm}},[n("h3",{staticClass:"loginTitle"},[e._v("系统登录")]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{size:"normal",type:"text","auto-complete":"off",placeholder:"请输入用户名"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{size:"normal",type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"code"}},[n("el-input",{staticStyle:{width:"250px"},attrs:{size:"normal",type:"text","auto-complete":"off",placeholder:"点击图片更换验证码"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin.apply(null,arguments)}},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}}),e._v(" "),n("img",{staticStyle:{cursor:"pointer"},attrs:{src:e.vcUrl,alt:""},on:{click:e.updateVerifyCode}})],1),e._v(" "),n("el-button",{staticStyle:{width:"100%"},attrs:{size:"normal",type:"primary"},on:{click:e.submitLogin}},[e._v("登录")])],1)],1)},staticRenderFns:[]};var a=n("VU/8")(o,i,!1,function(e){n("4ZNV")},null,null);t.default=a.exports},"q7o+":function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e25c6229d9d2cefa9714.js.map
webpackJsonp([7],{Q5rI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.goodTime=function(e){var t=(new Date).getTime(),n=new Date(e).getTime(),r=t-n,o="",a=r/31104e6,u=r/2592e6,i=r/6048e5,c=r/864e5,l=r/36e5,s=r/6e4;o=a>=1?"发表于 "+~~a+" 年前":u>=1?"发表于 "+~~u+" 个月前":i>=1?"发表于 "+~~i+" 周前":c>=1?"发表于 "+~~c+" 天前":l>=1?"发表于 "+~~l+" 个小时前":s>=1?"发表于 "+~~s+" 分钟前":"刚刚";return o},n.d(t,"getJS",function(){return f}),t.filterNull=function e(t){for(var n in t)null===t[n]&&delete t[n],"string"===p(t[n])?t[n]=t[n].trim():"object"===p(t[n])?t[n]=e(t[n]):"array"===p(t[n])&&(t[n]=e(t[n]));return t};var r=n("Xxa5"),o=n.n(r),a=n("exGp"),u=n.n(a),i=n("//Fk"),c=n.n(i);function l(e){return console.log("get js file:"+e),new c.a(function(t,n){var r=document.createElement("script");r.type="text/javascript",r.defer=!0,r.readyState?r.onreadystatechange=function(){"loaded"!=r.readyState&&"complete"!=r.readyState||(r.onreadystatechange=null,t(this))}:(r.onload=function(){t(this)},r.onerror=function(){n(new Error("getjs error"))}),r.src=e,document.body.appendChild(r)})}var s,f=(s=u()(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=o.a.keys(t);case 1:if((e.t1=e.t0()).done){e.next=9;break}return n=e.t1.value,e.next=5,l(t[n]);case 5:e.sent,console.log("get js file success"),e.next=1;break;case 9:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)});function p(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}},gVb3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app"},o,!1,function(e){n("r3ks")},null,null).exports,u=n("/ocq"),i=n("mvHQ"),c=n.n(i),l=n("NYxO"),s=(n("sax8"),n("yPgl"));r.a.use(l.a);var f=new l.a.Store({state:{login:!1,user:{}},getters:{user:function(e){return e.user},login:function(e){return e.login}},mutations:{updateUser:function(e,t){(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&(localStorage.login_time=Date.now(),localStorage.user=c()(t)),e.login=!0,e.user=t},removeUser:function(e){localStorage.removeItem("login_time"),localStorage.removeItem("user"),e.login=!1,e.user={}}},actions:{getUser:function(e){var t=e.commit;localStorage.login_time&&localStorage.login_time>Date.now()-18e5?localStorage.user&&t("updateUser",JSON.parse(localStorage.user),!1):s.a.get("/user/get_user_info",null,function(e){0===e.result?t("updateUser",e.info):localStorage.login_time=Date.now()})}},stricr:!1,plugins:[]});r.a.use(u.a);var p=new u.a({routes:[{path:"/",meta:{requireAuth:!0},component:function(e){return n.e(0).then(function(){var t=[n("yly7")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/register",component:function(e){return n.e(2).then(function(){var t=[n("Mheu")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/login",component:function(e){return n.e(1).then(function(){var t=[n("COct")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});f.dispatch("getUser"),p.beforeEach(function(e,t,n){console.log("tiao"),console.log(e,t),e.matched.some(function(e){return e.meta.requireAuth})?f.state.login?n():(alert("未登录！"),n({path:"/login",query:{redirect:e.fullPath}})):n()});var g=p;r.a.prototype.$axios=s.a,r.a.config.productionTip=!1,new r.a({el:"#app",router:g,store:f,template:"<App/>",components:{App:a}})},r3ks:function(e,t){},yPgl:function(e,t,n){"use strict";var r=n("mtWM"),o=n.n(r),a=n("Q5rI");function u(e,t,n,r){n&&(n=Object(a.filterNull)(n)),o()({method:e,url:t,data:"POST"===e||"PUT"===e?n:null,params:"GET"===e||"DELETE"===e?n:null,withCredentials:!1}).then(function(e){console.log(e.data),r&&r(e.data)}).catch(function(e){var t=e.response;e&&window.alert("api error,HTTP CODE:"+t.status)})}o.a.defaults.timeout=5e3,o.a.defaults.baseURL="",t.a={get:function(e,t,n){return u("GET",e,t,n)},post:function(e,t,n){return u("POST",e,t,n)},put:function(e,t,n){return u("PUT",e,t,n)},delete:function(e,t,n){return u("DELETE",e,t,n)}}}},["gVb3"]);
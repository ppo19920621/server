webpackJsonp([8],{Fqtw:function(t,e){},U67u:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"app"},a,!1,function(t){n("Fqtw")},null,null).exports,c=n("/ocq");r.a.use(c.a);var u,i=new c.a({routes:[{path:"/",component:function(t){return n.e(3).then(function(){var e=[n("k6cl")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/content/:id",component:function(t){return n.e(4).then(function(){var e=[n("rtIF")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/ue",component:function(t){return n.e(5).then(function(){var e=[n("rUOJ")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),s=n("gyMJ"),p=n("Xxa5"),l=n.n(p),f=n("exGp"),d=n.n(f),h=n("//Fk"),m=n.n(h);function v(t){return console.log("get js file:"+t),new m.a(function(e,n){var r=document.createElement("script");r.type="text/javascript",r.defer=!0,r.readyState?r.onreadystatechange=function(){"loaded"!=r.readyState&&"complete"!=r.readyState||(r.onreadystatechange=null,e(this))}:(r.onload=function(){e(this)},r.onerror=function(){n(new Error("getjs error"))}),r.src=t,document.body.appendChild(r)})}var g={goodTime:function(t){var e=(new Date).getTime()-new Date(t).getTime(),n=e/31104e6,r=e/2592e6,a=e/6048e5,o=e/864e5,c=e/36e5,u=e/6e4;return n>=1?"发表于 "+~~n+" 年前":r>=1?"发表于 "+~~r+" 个月前":a>=1?"发表于 "+~~a+" 周前":o>=1?"发表于 "+~~o+" 天前":c>=1?"发表于 "+~~c+" 个小时前":u>=1?"发表于 "+~~u+" 分钟前":"刚刚"},getJS:(u=d()(l.a.mark(function t(e){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=l.a.keys(e);case 1:if((t.t1=t.t0()).done){t.next=9;break}return n=t.t1.value,t.next=5,v(e[n]);case 5:t.sent,console.log("get js file success"),t.next=1;break;case 9:case"end":return t.stop()}},t,this)})),function(t){return u.apply(this,arguments)})};console.log(i),r.a.prototype.$api=s.a,r.a.prototype.$utils=g,r.a.config.productionTip=!1,new r.a({el:"#app",router:i,template:"<App/>",components:{App:o}})},gyMJ:function(t,e,n){"use strict";var r="",a=n("mtWM");function o(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function c(t,e,n,c){n&&(n=function t(e){for(var n in e)null===e[n]&&delete e[n],"string"===o(e[n])?e[n]=e[n].trim():"object"===o(e[n])?e[n]=t(e[n]):"array"===o(e[n])&&(e[n]=t(e[n]));return e}(n)),a({method:t,url:e,data:"POST"===t||"PUT"===t?n:null,params:"GET"===t||"DELETE"===t?n:null,baseURL:r,withCredentials:!1}).then(function(t){c&&c(t.data)}).catch(function(t){var e=t.response;t&&window.alert("api error,HTTP CODE:"+e.status)})}e.a={get:function(t,e,n){return c("GET",t,e,n)},post:function(t,e,n){return c("POST",t,e,n)},put:function(t,e,n){return c("PUT",t,e,n)},delete:function(t,e,n){return c("DELETE",t,e,n)}}}},["U67u"]);
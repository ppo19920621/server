webpackJsonp([0],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},Cz8s:function(t,e,n){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",{staticClass:"logo"},[this._v("Vue Demo by Fungleo")])])}]},o=n("VU/8")(null,r,!1,null,null,null);e.a=o.exports},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("woOf"),s=(r=o)&&r.__esModule?r:{default:r};e.default=s.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},To3L:function(t,e,n){"use strict";var r=n("lktj"),o=n("1kS7"),s=n("NpIQ"),l=n("sB3e"),u=n("MU5D"),a=Object.assign;t.exports=!a||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=l(t),a=arguments.length,c=1,i=o.f,f=s.f;a>c;)for(var d,v=u(arguments[c++]),h=i?r(v).concat(i(v)):r(v),_=h.length,p=0;_>p;)f.call(v,d=h[p++])&&(n[d]=v[d]);return n}:a},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},mzkE:function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"copy"},[this._v("\n\tCopy © Fungleo\n")])},staticRenderFns:[]},o=n("VU/8")(null,r,!1,null,null,null);e.a=o.exports},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},yly7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),s=n("Cz8s"),l=n("mzkE"),u=n("NYxO"),a={components:{Header:s.a,Footer:l.a},data:function(){return{}},computed:o()({},Object(u.b)(["user","login"])),created:function(){this.getUser()},methods:{getUser:function(){var t=this;console.log("getUser"),this.$store.dispatch("updateUser").then(function(e){t.login||(alert("未登录"),t.$router.push("/login"))}).catch(function(t){return console.error(t)})},layout:function(){var t=this;console.log("layout"),this.$api.get("/user/layout",null,function(e){0===e.result?(localStorage.removeItem("change_time"),localStorage.removeItem("user"),t.$store.commit("removeUser"),alert("登出成功！"),t.$router.go(0)):alert(e.searon)})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("img",{attrs:{src:"/static/image/dota.jpg",alt:"dota"}}),t._v(" "),n("h3",[t._v("个人资料")]),t._v(" "),t._l(t.user,function(e,r){return n("div",[t._v(t._s(r)+":"+t._s(e))])}),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.layout}},[t._v("登出")]),t._v(" "),n("Footer")],2)},staticRenderFns:[]},i=n("VU/8")(a,c,!1,null,null,null);e.default=i.exports}});
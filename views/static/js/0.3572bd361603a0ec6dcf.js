webpackJsonp([0],{COct:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Cz8s"),a=n("mzkE"),o={components:{Header:r.a,Footer:a.a},data:function(){return{}},created:function(){},methods:{login:function(){var t=this,e=document.querySelector("#login_form"),n=e.account.value,r=e.pwd.value;this.$api.post("/user/login",{account:n,pwd:r},function(e){console.log(e),0===e.result?t.$router.push("/"):alert(e.reason)})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"login_box"},[n("form",{attrs:{id:"login_form",novalidate:"novalidate"}},[n("h3",[t._v("用户登录")]),t._v(" "),n("label",[t._v("用户名：")]),t._v(" "),n("input",{attrs:{type:"text",name:"account",value:""}}),t._v(" "),n("br"),t._v(" "),n("label",[t._v("密  码：")]),t._v(" "),n("input",{attrs:{type:"password",name:"pwd",value:""}}),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.login}},[t._v("登录")])])]),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var l=n("VU/8")(o,s,!1,function(t){n("aNSO")},"data-v-75befbf6",null);e.default=l.exports},Cz8s:function(t,e,n){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",{staticClass:"logo"},[this._v("Vue Demo by Fungleo")])])}]},a=n("VU/8")(null,r,!1,null,null,null);e.a=a.exports},aNSO:function(t,e){},mzkE:function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"copy"},[this._v("\n\tCopy © Fungleo\n")])},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.a=a.exports}});
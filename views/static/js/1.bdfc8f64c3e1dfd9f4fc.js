webpackJsonp([1],{Cz8s:function(t,e,n){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",{staticClass:"logo"},[this._v("Vue Demo by Fungleo")])])}]},r=n("VU/8")(null,s,!1,null,null,null);e.a=r.exports},mzkE:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"copy"},[this._v("\n\tCopy © Fungleo\n")])},staticRenderFns:[]},r=n("VU/8")(null,s,!1,null,null,null);e.a=r.exports},sNol:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Cz8s"),r=n("mzkE"),a={components:{myHeader:s.a,myFooter:r.a},data:function(){return{id:this.$route.params.id,dat:{}}},created:function(){this.getData(),console.log(this.$route)},methods:{getData:function(){var t=this;this.$api.get("topic/"+this.id,null,function(e){t.dat=e.data})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("myHeader"),t._v(" "),n("h2",{domProps:{textContent:t._s(t.dat.title)}}),t._v(" "),n("p",[t._v("作者:"+t._s(t.dat.author.loginname)+"    发布于:"+t._s(t.$utils.goodTime(t.dat.create_at)))]),t._v(" "),n("hr"),t._v(" "),n("article",{domProps:{innerHTML:t._s(t.dat.content)}}),t._v(" "),n("h3",[t._v("网友回复:")]),t._v(" "),n("ul",t._l(t.dat.replies,function(e){return n("li",[n("p",[t._v("评论者:"+t._s(e.author.loginname)+"    评论于:"+t._s(t.$utils.goodTime(e.create_at)))]),t._v(" "),n("article",{domProps:{innerHTML:t._s(e.content)}})])})),t._v(" "),n("myFooter")],1)},staticRenderFns:[]},i=n("VU/8")(a,o,!1,null,null,null);e.default=i.exports}});
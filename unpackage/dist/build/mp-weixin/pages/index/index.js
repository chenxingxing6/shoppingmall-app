(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0252":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content",staticStyle:{"padding-top":"0rpx"}},[a("jshop",{attrs:{data:t.pageData,mpcomid:"8cdfbac0-0"}}),a("jihaiCopyright",{attrs:{mpcomid:"8cdfbac0-1"}}),t.redBagShow?a("red-bag",{attrs:{eventid:"8cdfbac0-0",mpcomid:"8cdfbac0-2"},on:{click:t.handleGet}}):t._e()],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"1d10":function(t,e,a){"use strict";a.r(e);var n=a("0252"),i=a("725c");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("ba6a");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"5a0d":function(t,e,a){"use strict";a.r(e);var n=a("f272"),i=a("68dd");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("c930");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"4d3cbec9",null);e["default"]=s.exports},"68dd":function(t,e,a){"use strict";a.r(e);var n=a("e4ea"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"725c":function(t,e,a){"use strict";a.r(e);var n=a("a2d3"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},a2d3:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(a("ca8d")),i=c(a("4c3a")),o=c(a("0812")),r=c(a("5a0d")),s=a("1fc7");function c(t){return t&&t.__esModule?t:{default:t}}var u={mixins:[s.goods],components:{jihaiCopyright:i.default,jshop:n.default,uniCountdown:o.default,redBag:r.default},data:function(){return{myShareCode:"",imageUrl:"/static/image/share_image.png",pageData:[],pageCode:"mobile_home",pintuan:[],redBagShow:!1}},computed:{appTitle:function(){return this.$store.state.config.shop_name}},onLoad:function(e){this.initData(),this.$store.state.config.shop_name&&t.setNavigationBarTitle({title:this.$store.state.config.shop_name||""})},methods:{handleGet:function(){},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},goSearch:function(){t.navigateTo({url:"./search"})},initData:function(){var t=this;this.$api.getPageConfig({code:this.pageCode},function(e){1==e.status&&(t.pageData=e.data.items,setTimeout(function(){t.showLoad=!1},600))}),this.getMyShareCode()},getMyShareCode:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.shareCode({},function(e){e.status&&(t.myShareCode=e.data?e.data:"")})}},onPullDownRefresh:function(){this.initData(),t.stopPullDownRefresh()},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.$common.shareParameterDecode("type=1&invite="+t),a="/pages/share/jump?scene="+e;return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:a}}};e.default=u}).call(this,a("543d")["default"])},ba6a:function(t,e,a){"use strict";var n=a("c3ec"),i=a.n(n);i.a},bc82:function(t,e,a){"use strict";a("faac");var n=o(a("b0ce")),i=o(a("1d10"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},c3ec:function(t,e,a){},c930:function(t,e,a){"use strict";var n=a("feab"),i=a.n(n);i.a},e4ea:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"redBag",components:{},props:{},data:function(){return{redBagShow:!0}},watch:{},computed:{},methods:{handleClose:function(){this.redBagShow=!1},handleBtn:function(){this.$emit("click"),this.redBagShow=!1}},created:function(){},mounted:function(){}};e.default=n},f272:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{directives:[{name:"show",rawName:"v-show",value:t.redBagShow,expression:"redBagShow"}],staticClass:"wrapper"},[a("view",{staticClass:"modal-bg"}),a("view",{staticClass:"rb-wrapper"},[a("view",{staticClass:"rb-content",attrs:{eventid:"420d56c0-0"},on:{click:t.handleBtn}}),a("view",{staticClass:"close",attrs:{eventid:"420d56c0-1"},on:{click:t.handleClose}},[a("image",{staticClass:"img",attrs:{src:"../../static/image/close.png"}})])])])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},feab:function(t,e,a){}},[["bc82","common/runtime","common/vendor"]]]);
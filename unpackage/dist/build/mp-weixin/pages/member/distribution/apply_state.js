(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/distribution/apply_state"],{"0314":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"content"},[s("view",{staticClass:"apply-c"},[2==t.info.verify?s("view",{staticClass:"apply-top fsz36 color-o"},[t._v("恭喜，您的申请已提交！")]):t._e(),3==t.info.verify?s("view",{staticClass:"apply-top-refuse fsz36 color-o"},[t._v("抱歉，您的申请被驳回！")]):t._e(),1==t.info.verify?s("view",{staticClass:"apply-top fsz36 color-o"},[t._v("恭喜，您的申请已通过！")]):t._e(),2==t.info.verify?s("view",{staticClass:"apply-bot"},[t._m(0),s("view",{staticClass:"apply-bot-text"},[s("view",{staticClass:"abt-c"},[s("view",{staticClass:"color-6 fsz30"},[t._v("申请提交成功")]),s("view",{staticClass:"color-9 fsz24"},[t._v(t._s(t.info.ctime))])]),s("view",{staticClass:"abt-c"},[2==t.info.verify?s("view",{staticClass:"color-6 fsz30"},[t._v("等待审核")]):t._e(),3==t.info.verify?s("view",{staticClass:"color-6 fsz30"},[t._v("审核驳回")]):t._e(),1==t.info.verify?s("view",{staticClass:"color-6 fsz30"},[t._v("审核通过")]):t._e()])])]):t._e()])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"apply-bot-sop"},[s("view",{staticClass:"abs-img"},[s("image",{staticClass:"icon",attrs:{src:"/static/image/del.png",mode:""}})]),s("view",{staticClass:"color-9 abs-mid"},[s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),s("image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}})]),s("view",{staticClass:"abs-img"},[s("image",{staticClass:"icon",attrs:{src:"/static/image/close.png",mode:""}})])])}];s.d(a,"a",function(){return i}),s.d(a,"b",function(){return e})},"0cd7":function(t,a,s){"use strict";s.r(a);var i=s("0314"),e=s("fc10");for(var o in e)"default"!==o&&function(t){s.d(a,t,function(){return e[t]})}(o);s("6bc8");var c=s("2877"),r=Object(c["a"])(e["default"],i["a"],i["b"],!1,null,null,null);a["default"]=r.exports},1671:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{info:{}}},onLoad:function(){var t=this;t.$api.getDistributioninfo({check_condition:!0},function(a){a.status?(a.data.need_apply&&0==a.data.condition_status&&t.$common.redirectTo("/pages/member/distribution/index"),1==a.data.verify&&t.$common.redirectTo("/pages/member/distribution/user"),t.info=a.data):t.$common.errorToShow(a.msg)})},methods:{}};a.default=i},"6bc8":function(t,a,s){"use strict";var i=s("cd6a"),e=s.n(i);e.a},cd6a:function(t,a,s){},dd73:function(t,a,s){"use strict";s("faac");var i=o(s("b0ce")),e=o(s("0cd7"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},fc10:function(t,a,s){"use strict";s.r(a);var i=s("1671"),e=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(a,t,function(){return i[t]})}(o);a["default"]=e.a}},[["dd73","common/runtime","common/vendor"]]]);
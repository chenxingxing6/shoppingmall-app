(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classify/pintuan_list"],{4115:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(s("0812"));function n(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniCountdown:i.default},data:function(){return{goodsList:{},pintuanPrice:0,lasttime:{day:0,hour:!1,minute:0,second:0}}},onLoad:function(){this.getGoods()},methods:{goodsDetail:function(t){var e="/pages/goods/index/pintuan?id="+t;this.$common.navigateTo(e)},getGoods:function(){var t=this,e=this,s={};e.$api.pintuanList(s,function(s){s.status&&(e.goodsList=s.data,e.goodsList.forEach(function(s){s.pintuan_price<=0?s.pintuan_price="0.00":s.pintuanPrice=t.$common.moneySub(s.price,s.pintuan_rule.discount_amount);var i=Date.parse(new Date)/1e3,n=s.pintuan_rule.etime-i;s.lasttime=e.$common.timeToDateObj(n)}))})}}};e.default=a},"59d2":function(t,e,s){"use strict";var i=s("8688"),n=s.n(i);n.a},"5e08":function(t,e,s){"use strict";s.r(e);var i=s("4115"),n=s.n(i);for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);e["default"]=n.a},8688:function(t,e,s){},dd4a:function(t,e,s){"use strict";s.r(e);var i=s("fd1b"),n=s("5e08");for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);s("59d2");var o=s("2877"),u=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},de2fe:function(t,e,s){"use strict";s("faac");var i=a(s("b0ce")),n=a(s("dd4a"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},fd1b:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"img-list"},[t.goodsList.length>0?s("view",t._l(t.goodsList,function(e,i){return s("view",{key:i,staticClass:"img-list-item",attrs:{eventid:"f3f7b9e0-0-"+i},on:{click:function(s){t.goodsDetail(e.id)}}},[s("image",{staticClass:"img-list-item-l",attrs:{src:e.image_url,mode:"aspectFill"}}),s("view",{staticClass:"img-list-item-r"},[s("view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(e.name))]),s("view",{staticClass:"goods-item-c"},[s("view",{staticClass:"pintuan_time"},[s("text",{staticClass:"fsz24 color-9"},[t._v("剩余：")]),s("uni-countdown",{attrs:{textColor:"#999",color:"#999",day:e.lasttime.day,hour:e.lasttime.hour,minute:e.lasttime.minute,second:e.lasttime.second,mpcomid:"f3f7b9e0-0-"+i}})],1),s("view",{staticClass:"goods-price red-price"},[t._v("￥"+t._s(e.pintuanPrice)),s("text",{staticClass:"people-num color-9 fsz24"},[t._v(t._s(e.pintuan_rule.people_number)+"人成团")])]),s("view",{staticClass:"goods-buy"},[e.comments_count>0?s("view",{staticClass:"goods-salesvolume"},[t._v(t._s(e.comments_count)+"条评论")]):e.comments_count<=0?s("view",{staticClass:"goods-salesvolume"},[t._v("暂无评论")]):t._e(),s("image",{staticClass:"goods-cart",attrs:{src:"/static/image/more.png"}})])])])])})):s("view",{staticClass:"order-none"},[s("image",{staticClass:"order-none-img",attrs:{src:"/static/image/order.png",mode:""}})])])])},n=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n})}},[["de2fe","common/runtime","common/vendor"]]]);
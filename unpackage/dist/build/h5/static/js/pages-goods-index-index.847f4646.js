(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-index-index"],{"4e1a":function(t,e,i){"use strict";var a=i("9388"),o=i.n(a);o.a},"726a":function(t,e,i){"use strict";i.r(e);var a=i("da5c"),o=i("b0d5");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("4e1a");var n=i("2877"),d=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"0e73a1df",null);e["default"]=d.exports},"8b6a":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f"),i("28a5");var o=a(i("f499")),s=a(i("75fc"));i("ac6a");var n=a(i("a4bb")),d=a(i("0efe")),c=a(i("f557")),l=a(i("dd9c")),r=a(i("df8c")),u=a(i("d92d")),v=a(i("8a33")),m=(i("6f5d"),i("6740")),f=a(i("321c")),g=a(i("e133")),p=a(i("e835")),h={components:{uniSegmentedControl:d.default,lvvPopup:c.default,uniNumberBox:l.default,uniRate:r.default,uniLoadMore:u.default,uniFab:v.default,spec:f.default,jshopContent:p.default,shareByH5:g.default},data:function(){return{myShareCode:"",swiper:{indicatorDots:!0,autoplay:!0,interval:3e3,duration:800},items:["图文详情","商品参数","买家评论"],current:0,goodsId:0,goodsInfo:{},cartNums:0,product:{},goodsParams:[],goodsComments:{loadStatus:"more",page:1,limit:5,list:[]},buyNum:1,minBuyNum:1,type:2,isfav:!1,favLogo:["/static/image/ic-me-collect.png","/static/image/ic-me-collect2.png"],horizontal:"right",vertical:"bottom",direction:"vertical",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#FF7159"},content:[{iconPath:"/static/image/tab-ic-hom-selected.png",selectedIconPath:"/static/image/tab-ic-hom-unselected.png",active:!1,url:"/pages/index/index"},{iconPath:"/static/image/tab-ic-me-selected.png",selectedIconPath:"/static/image/tab-ic-me-unselected.png",active:!1,url:"/pages/member/index/index"}],submitStatus:!1}},onLoad:function(t){""!=t.id&&(this.goodsId=t.id),this.goodsId?(this.getGoodsDetail(),this.getGoodsParams(),this.getGoodsComments()):this.$common.errorToShow("获取失败",function(){uni.navigateBack({delta:1})}),this.getCartNums(),this.getMyShareCode()},onShow:function(){this.submitStatus=!1},computed:{minNums:function(){return this.product.stock>this.minBuyNum?this.minBuyNum:this.product.stock},isSpes:function(){return!(!this.product.hasOwnProperty("default_spes_desc")||!(0,n.default)(this.product.default_spes_desc).length)},promotion:function(){var t=[];if(this.product.promotion_list)for(var e in this.product.promotion_list)t.push(this.product.promotion_list[e]);return t},shareHref:function(){var t=getCurrentPages(),e=t[t.length-1];return m.apiBaseUrl+"wap/"+e.route+"?id="+this.goodsId}},onReachBottom:function(){2===this.current&&"more"===this.goodsComments.loadStatus&&this.getGoodsComments()},methods:{backBtn:function(){uni.navigateBack({delta:1})},getGoodsDetail:function(){var t=this,e={id:this.goodsId},i=this.$db.get("userToken");i&&(e["token"]=i),this.$api.goodsDetail(e,function(e){if(1==e.status){var a=e.data,o=e.data.product;t.goodsInfo=a,t.isfav="true"===t.goodsInfo.isfav,t.product=t.spesClassHandle(o),i&&t.goodsBrowsing()}else t.$common.errorToShow(e.msg,function(){uni.navigateBack({delta:1})})})},getCartNums:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.getCartNum({},function(e){e.status&&(t.cartNums=e.data)})},toshow:function(t){this.type=t,this.$refs.lvvpopref.show()},toclose:function(){this.$refs.lvvpopref.close()},changeSpes:function(t){var e=this,i=t.v,a=t.k;if(this.product.default_spes_desc[i][a].hasOwnProperty("product_id")&&this.product.default_spes_desc[i][a].product_id){var o={id:this.product.default_spes_desc[i][a].product_id},s=this.$db.get("userToken");s&&(o["token"]=s),this.$api.getProductInfo(o,function(t){1==t.status&&(e.buyNum=t.data.stock>e.minBuyNum?e.minBuyNum:t.data.stock,e.product=e.spesClassHandle(t.data))}),uni.showLoading({title:"加载中"}),setTimeout(function(){uni.hideLoading()},1e3)}},spesClassHandle:function(t){if(t.hasOwnProperty("default_spes_desc")){var e=t.default_spes_desc;for(var i in e)for(var a in e[i])e[i][a].hasOwnProperty("is_default")&&!0===e[i][a].is_default?this.$set(e[i][a],"cla","pop-m-item selected"):e[i][a].hasOwnProperty("product_id")&&e[i][a].product_id?this.$set(e[i][a],"cla","pop-m-item not-selected"):this.$set(e[i][a],"cla","pop-m-item none");t.default_spes_desc=e}return t},bindChange:function(t){this.buyNum=t},collection:function(){var t=this,e={goods_id:this.goodsInfo.id};this.$api.goodsCollection(e,function(e){e.status?(t.isfav=!t.isfav,t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg)})},onClickItem:function(t){this.current!==t&&(this.current=t)},getGoodsParams:function(){var t=this;this.$api.goodsParams({id:this.goodsId},function(e){1==e.status&&(t.goodsParams=e.data)})},getGoodsComments:function(){var t=this,e={page:this.goodsComments.page,limit:this.goodsComments.limit,goods_id:this.goodsId};this.goodsComments.loadStatus="loading",this.$api.goodsComment(e,function(e){if(1==e.status){var i=e.data.list,a=e.data.count;t.items=["图文详情","商品参数","买家评论("+a+")"],i.forEach(function(e){e.ctime=t.$common.timeToDate(e.ctime,!0),e.hasOwnProperty("images_url")||t.$set(e,"images_url",[])}),t.goodsComments.list=[].concat((0,s.default)(t.goodsComments.list),(0,s.default)(i)),e.data.count>t.goodsComments.list.length?(t.goodsComments.loadStatus="more",t.goodsComments.page++):t.goodsComments.loadStatus="noMore"}else t.$common.errorToShow(e.msg)})},goodsBrowsing:function(){var t={goods_id:this.goodsInfo.id};this.$api.addGoodsBrowsing(t,function(t){})},addToCart:function(){var t=this;if(this.buyNum>0){var e={product_id:this.product.id,nums:this.buyNum};this.$api.addCart(e,function(e){e.status?(t.toclose(),t.getCartNums(),t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg),t.submitStatus=!1})}else this.submitStatus=!1},buyNow:function(){var t=this;if(this.buyNum>0){var e={product_id:this.product.id,nums:this.buyNum,type:2};this.$api.addCart(e,function(e){if(e.status){t.toclose();var i=e.data;t.$common.navigateTo("/pages/goods/place-order/index?cart_ids="+(0,o.default)(i))}t.submitStatus=!1})}else this.submitStatus=!1},redirectCart:function(){uni.switchTab({url:"/pages/cart/index/index"})},clickHandle:function(){this.submitStatus=!0,1===this.type?this.addToCart():this.buyNow()},trigger:function(t){this.content[t.index].active=!t.item.active,uni.switchTab({url:t.item.url})},goShare:function(){this.$refs.share.show()},closeShare:function(){this.$refs.share.close()},clickImg:function(t){uni.previewImage({urls:t.split()})},getMyShareCode:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.shareCode({},function(e){e.status&&(t.myShareCode=e.data?e.data:"")})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.$common.shareParameterDecode("type=2&id="+this.goodsInfo.id+"&invite="+t),i="/pages/share/jump?scene="+e;return{title:this.goodsInfo.name,imageUrl:this.goodsInfo.album[0],path:i}}};e.default=h},"8c69":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".swiper[data-v-0e73a1df]{height:%?750?%}.goods-top[data-v-0e73a1df]{border-bottom:0}.goods-top .goods-price[data-v-0e73a1df]{font-size:%?38?%}.cost-price[data-v-0e73a1df]{font-size:%?28?%!important;bottom:%?-10?%;color:#999;text-decoration:line-through}.goods-top .cell-item-ft[data-v-0e73a1df]{font-size:%?20?%;color:#666}.goods-details[data-v-0e73a1df]{padding-top:0}.goods-details .cell-hd-title[data-v-0e73a1df]{width:%?620?%}.goods-details .cell-hd-title .cell-hd-title-view[data-v-0e73a1df]{width:100%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.goods-details .cell-hd-title .cell-hd-title-view[data-v-0e73a1df]:last-child{margin-top:%?10?%}.goods-details .cell-item-ft[data-v-0e73a1df]{top:%?24?%}.goods-title-item .cell-item-hd[data-v-0e73a1df]{min-width:%?60?%;color:#666;font-size:%?24?%}.goods-title-item .cell-item-bd[data-v-0e73a1df]{color:#333;font-size:%?24?%}.goods-title-item .cell-bd-text[data-v-0e73a1df]{bottom:0}.cell-bd-view[data-v-0e73a1df]{position:relative;overflow:hidden}.cell-bd-view[data-v-0e73a1df]:first-child{margin-bottom:%?8?%}.goods-title-item-ic[data-v-0e73a1df]{width:%?22?%;height:%?22?%;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);\n\t}.cell-bd-view .cell-bd-text[data-v-0e73a1df]{margin-left:%?30?%}.goods-content[data-v-0e73a1df]{margin-top:%?26?%;background-color:#fff;padding:%?26?% 0}.goods-content-c[data-v-0e73a1df]{margin-top:%?20?%}.goods-parameter[data-v-0e73a1df]{padding:%?10?% %?26?%}.goods-bottom[data-v-0e73a1df],.pop-b[data-v-0e73a1df]{background-color:#fff;position:fixed;bottom:0;height:%?90?%;width:100%;overflow:hidden;-webkit-box-shadow:0 0 %?20?% #ccc;box-shadow:0 0 %?20?% #ccc}.goods-bottom uni-button[data-v-0e73a1df]{height:100%;width:35%}.goods-bottom-ic[data-v-0e73a1df]{display:inline-block;position:relative;text-align:center;height:100%;width:15%;float:left;font-size:%?22?%;color:#666}.goods-bottom-ic .icon[data-v-0e73a1df]{position:relative;top:%?6?%;\n\t/* left: -6upx; */\n\t}.goods-bottom .btn-g[data-v-0e73a1df]{color:#333;background-color:#d9d9d9}.goods-parameter .cell-item[data-v-0e73a1df]{border-bottom:none;margin-left:0}.goods-parameter .cell-item-hd[data-v-0e73a1df]{color:#333;font-size:%?24?%}.goods-parameter .cell-item-bd[data-v-0e73a1df]{color:#999}.goods-parameter .cell-item-bd .cell-bd-text[data-v-0e73a1df]{bottom:0}.goods-parameter .cell-bd-text[data-v-0e73a1df]{margin-left:0}.pop-t[data-v-0e73a1df]{position:relative;padding:%?30?% %?26?%;border-bottom:%?2?% solid #f3f3f3\n\t/* box-shadow: 0 0 20upx #ccc; */}.goods-img[data-v-0e73a1df]{width:%?160?%;height:%?160?%;position:absolute;top:%?-20?%;background-color:#fff;border-radius:%?6?%;border:%?2?% solid #fff}.goods-img uni-image[data-v-0e73a1df]{height:100%;width:100%}.goods-information[data-v-0e73a1df]{width:%?420?%;display:inline-block;margin-left:%?180?%}.pop-goods-name[data-v-0e73a1df]{width:100%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:block;font-size:%?24?%;margin-bottom:%?20?%}.pop-goods-price[data-v-0e73a1df]{font-size:%?30?%}.close-btn[data-v-0e73a1df]{width:%?40?%;height:%?40?%;border-radius:50%;display:inline-block;position:absolute;right:%?30?%}.close-btn uni-image[data-v-0e73a1df]{width:100%;height:100%}.pop-m[data-v-0e73a1df]{font-size:%?28?%;margin-bottom:%?90?%}.goods-number[data-v-0e73a1df],.goods-specs[data-v-0e73a1df]{padding:%?26?%;border-top:1px solid #f3f3f3}.goods-specs[data-v-0e73a1df]:first-child{border:none}.pop-m-title[data-v-0e73a1df]{margin-right:%?10?%;color:#666}.pop-m-bd[data-v-0e73a1df]{overflow:hidden;margin-top:%?10?%}.pop-m-item[data-v-0e73a1df]{display:inline-block;float:left;padding:%?6?% %?16?%;background-color:#fff;color:#333;margin-right:%?16?%;margin-bottom:%?10?%}.selected[data-v-0e73a1df]{border:%?2?% solid #333;background-color:#333;color:#fff}.not-selected[data-v-0e73a1df]{border:%?2?% solid #ccc}.none[data-v-0e73a1df]{border:%?2?% dashed #ccc;color:#888}.pop-m-bd-in[data-v-0e73a1df]{display:inline-block}.badge[data-v-0e73a1df]{top:%?2?%;left:%?62?%}.goods-assess .user-head-img[data-v-0e73a1df]{width:%?80?%;height:%?80?%;border-radius:50%}.goods-assess .cell-item-bd[data-v-0e73a1df]{padding-right:0}.goods-assess .cell-bd-text[data-v-0e73a1df]{margin:0}.goods-assess .cell-bd-text.color-9[data-v-0e73a1df]{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;max-width:%?440?%}.gai-body-text[data-v-0e73a1df]{font-size:%?26?%;color:#333;padding:0 %?26?%;word-wrap:break-word}.gai-body-img[data-v-0e73a1df]{overflow:hidden;padding:%?20?% %?26?%}.gai-body-img uni-image[data-v-0e73a1df]{width:%?220?%;height:%?220?%;float:left;margin-right:%?19?%;margin-bottom:%?18?%}.gai-body-img uni-image[data-v-0e73a1df]:nth-child(3n){margin-right:0}.redstar[data-v-0e73a1df]{width:%?24?%;height:%?24?%;padding:%?2?%}.mask-share-wechat[data-v-0e73a1df]{display:inline-block;background-color:#fff;padding:0}.mask-share-wechat[data-v-0e73a1df]:after{border:none}.right-ball[data-v-0e73a1df]{position:fixed;right:%?30?%;bottom:%?300?%;z-index:999;text-align:center;padding:%?14?% 0;\n\t/* line-height: 80upx; */width:%?80?%;height:%?80?%;font-size:%?24?%;color:#fff;background-color:rgba(0,0,0,.5);border-radius:50%}.comment-none[data-v-0e73a1df]{text-align:center;padding:%?200?% 0}.comment-none-img[data-v-0e73a1df]{width:%?274?%;height:%?274?%}.price-salesvolume[data-v-0e73a1df]{width:100%;padding:0 0 0 %?26?%;overflow:hidden;color:#a5a5a5;background-color:#fce250;position:relative}.commodity-price[data-v-0e73a1df]{width:%?224?%;display:inline-block;float:left}.current-price[data-v-0e73a1df]{font-size:%?40?%;color:#ff7159;display:block;line-height:1.5}.cost-price[data-v-0e73a1df]{font-size:%?26?%;text-decoration:line-through;\n\t/* margin-left: 8rpx; */display:block}.commodity-salesvolume[data-v-0e73a1df]{width:%?240?%;display:inline-block;font-size:%?22?%;float:left;padding:%?16?% 0}.commodity-salesvolume>uni-text[data-v-0e73a1df]{display:block}.commodity-time-img[data-v-0e73a1df]{display:block;width:0;height:0;border-width:%?48?% %?28?% %?50?% 0;border-style:solid;border-color:rgba(0,0,0,0) #ff7159 rgba(0,0,0,0) rgba(0,0,0,0);\n\t/*透明 黄 透明 透明 */position:absolute;top:0;left:%?462?%}.commodity-time[data-v-0e73a1df]{display:inline-block;width:%?260?%;text-align:center;font-size:%?24?%;background-color:#ff7159;padding:%?16?% 0 %?18?%;color:#fae900}.commodity-time>uni-text[data-v-0e73a1df]{display:block}.commodity-day[data-v-0e73a1df]{font-size:%?22?%}.commodity-day>uni-text[data-v-0e73a1df]{display:inline-block;background-color:#ffd4b0;color:#ff7300;padding:0 %?6?%;border-radius:%?6?%}.nav-back[data-v-0e73a1df]{width:100%;height:44px;\n\tpadding:12px 12px 0;\n\t\n\tposition:fixed;top:0;background-color:hsla(0,0%,100%,0);z-index:98}.back-btn[data-v-0e73a1df]{height:32px;width:32px;border-radius:50%;background-color:hsla(0,0%,100%,.8)}.back-btn .icon[data-v-0e73a1df]{height:20px;width:20px;position:relative;top:50%;left:46%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.seller-content[data-v-0e73a1df]{background-color:#f8f8f8;margin:0 13px 15px;padding:10px;color:#6e6e6e;border-radius:4px}.seller-content-top[data-v-0e73a1df]{font-weight:700;margin-bottom:6px}.seller-content-img[data-v-0e73a1df]{width:20px;height:20px;vertical-align:middle;margin-right:4px}",""])},9388:function(t,e,i){var a=i("8c69");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("76da9da3",a,!0,{sourceMap:!1,shadowMode:!1})},b0d5:function(t,e,i){"use strict";i.r(e);var a=i("8b6a"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},da5c:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"nav-back"},[i("v-uni-view",{staticClass:"back-btn",on:{click:function(e){e=t.$handleEvent(e),t.backBtn()}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/back-black.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"swiper"},[i("v-uni-swiper",{staticClass:"swiper-c",attrs:{"indicator-dots":t.swiper.indicatorDots,autoplay:t.swiper.autoplay,interval:t.swiper.interval,duration:t.swiper.duration}},t._l(t.goodsInfo.album,function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"have-none",on:{click:function(i){i=t.$handleEvent(i),t.clickImg(e)}}},[i("v-uni-image",{attrs:{src:e,mode:"aspectFill"}})],1)}),1)],1),i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item goods-top"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title goods-price red-price"},[t._v("￥"+t._s(t.product.price))]),parseFloat(t.product.mktprice)>0?i("v-uni-view",{staticClass:"cell-hd-title goods-price cost-price"},[t._v("￥"+t._s(t.product.mktprice))]):t._e()],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",[t._v(t._s(t.goodsInfo.buy_count)+" 人已购买")])],1)],1),i("v-uni-view",{staticClass:"cell-item goods-details"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[i("v-uni-view",{staticClass:"color-3 fsz28 cell-hd-title-view"},[t._v(t._s(t.product.name))]),t.goodsInfo.brief?i("v-uni-text",{staticClass:"color-9 fsz24 "},[t._v(t._s(t.goodsInfo.brief))]):t._e()],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/share.png"},on:{click:function(e){e=t.$handleEvent(e),t.goShare()}}})],1)],1),t.promotion.length?i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("促销")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"romotion-tip"},t._l(t.promotion,function(e,a){return i("v-uni-view",{key:a,staticClass:"romotion-tip-item",class:2!==e.type?"bg-gray":""},[t._v(t._s(e.name))])}),1)],1)],1):t._e(),t.isSpes?i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("规格")])],1),i("v-uni-view",{staticClass:"cell-item-bd",on:{click:function(e){e=t.$handleEvent(e),t.toshow()}}},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(t.product.spes_desc))])],1)],1):t._e(),i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("说明")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-image",{staticClass:"goods-title-item-ic",attrs:{src:"/static/image/ic-dui.png",mode:""}}),i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("24小时内发货")])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-image",{staticClass:"goods-title-item-ic",attrs:{src:"/static/image/ic-dui.png",mode:""}}),i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("7天拆封无条件退货")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"goods-content"},[i("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#333"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}}),i("v-uni-view",{staticClass:"goods-content-c"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],staticClass:"goods-detail"},[t.goodsInfo.intro?i("jshopContent",{attrs:{content:t.goodsInfo.intro}}):t._e()],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],staticClass:"goods-parameter"},[t.goodsParams.length?i("v-uni-view",{staticClass:"cell-group"},t._l(t.goodsParams,function(e,a){return i("v-uni-view",{key:a,staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(e.value))])],1)],1)}),1):t._e()],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.current,expression:"current === 2"}],staticClass:"goods-assess"},[t.goodsComments.list.length?i("v-uni-view",[t._l(t.goodsComments.list,function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-assess-item"},[i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"user-head-img",attrs:{src:e.user.avatar,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(e.user.nickname&&""!=e.user.nickname?e.user.nickname:e.user.mobile))]),i("v-uni-view",{staticClass:"cell-bd-text-right"},[i("uni-rate",{attrs:{size:"16",disabled:"true",value:e.score}})],1)],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text color-9",staticStyle:{"margin-right":"16upx"}},[t._v(t._s(e.ctime))]),i("v-uni-text",{staticClass:"cell-bd-text color-9"},[t._v(t._s(e.addon))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"gai-body"},[i("v-uni-view",{staticClass:"gai-body-text"},[t._v(t._s(e.content))]),e.images_url.length?i("v-uni-view",{staticClass:"gai-body-img"},t._l(e.images_url,function(e,a){return i("v-uni-image",{key:a,attrs:{src:e,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.clickImg(e)}}})}),1):t._e(),e.seller_content?i("v-uni-view",{staticClass:"seller-content"},[i("v-uni-view",{staticClass:"seller-content-top"},[i("v-uni-image",{staticClass:"seller-content-img",attrs:{src:"/static/image/seller-content.png"}}),t._v("掌柜回复")],1),t._v(t._s(e.seller_content))],1):t._e()],1)],1)}),i("uni-load-more",{attrs:{status:t.goodsComments.loadStatus}})],2):i("v-uni-view",{staticClass:"comment-none"},[i("v-uni-image",{staticClass:"comment-none-img",attrs:{src:"/static/image/order.png",mode:""}})],1)],1)],1)],1)],1),i("lvv-popup",{ref:"share",attrs:{position:"bottom"}},[i("shareByH5",{attrs:{goodsId:t.goodsInfo.id,shareImg:t.goodsInfo.image_url,shareTitle:t.goodsInfo.name,shareContent:t.goodsInfo.brief,shareHref:t.shareHref},on:{close:function(e){e=t.$handleEvent(e),t.closeShare()}}})],1),i("lvv-popup",{ref:"lvvpopref",attrs:{position:"bottom"}},[i("v-uni-view",{staticStyle:{width:"100%","max-height":"804upx",background:"#FFFFFF",position:"absolute",left:"0",bottom:"0"}},[i("v-uni-view",{staticClass:"pop-c"},[i("v-uni-view",{staticClass:"pop-t"},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{attrs:{src:t.product.image_path,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"goods-information"},[i("v-uni-view",{staticClass:"pop-goods-name"},[t._v(t._s(t.product.name))]),i("v-uni-view",{staticClass:"pop-goods-price red-price"},[t._v("￥ "+t._s(t.product.price))])],1),i("v-uni-view",{staticClass:"close-btn",on:{click:function(e){e=t.$handleEvent(e),t.toclose()}}},[i("v-uni-image",{attrs:{src:"/static/image/close.png"}})],1)],1),i("v-uni-scroll-view",{staticClass:"pop-m",staticStyle:{"max-height":"560upx"},attrs:{"scroll-y":"true"}},[i("spec",{ref:"spec",attrs:{spesData:t.product.default_spes_desc},on:{changeSpes:function(e){e=t.$handleEvent(e),t.changeSpes(e)}}}),i("v-uni-view",{staticClass:"goods-number"},[i("v-uni-text",{staticClass:"pop-m-title"},[t._v("数量")]),i("v-uni-view",{staticClass:"pop-m-bd-in"},[i("uni-number-box",{attrs:{min:t.minNums,max:t.product.stock,value:t.buyNum},on:{change:function(e){e=t.$handleEvent(e),t.bindChange(e)}}})],1)],1)],1),i("v-uni-view",{staticClass:"pop-b"},[t.product.stock?i("v-uni-button",{staticClass:"btn btn-square btn-b btn-all",attrs:{"hover-class":"btn-hover2",disabled:t.submitStatus,loading:t.submitStatus},on:{click:function(e){e=t.$handleEvent(e),t.clickHandle()}}},[t._v("确定")]):i("v-uni-button",{staticClass:"btn btn-square btn-g btn-all"},[t._v("已售罄")])],1)],1)],1)],1),i("div",{ref:"qrCodeDiv",attrs:{id:"qrCode"}}),i("v-uni-view",{staticClass:"goods-bottom"},[i("v-uni-view",{staticClass:"goods-bottom-ic",on:{click:function(e){e=t.$handleEvent(e),t.collection(e)}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:t.isfav?t.favLogo[1]:t.favLogo[0],mode:""}}),t.isfav?t._e():i("v-uni-view",[t._v("收藏")]),t.isfav?i("v-uni-view",[t._v("已收藏")]):t._e()],1),i("v-uni-view",{staticClass:"goods-bottom-ic",on:{click:function(e){e=t.$handleEvent(e),t.redirectCart(e)}}},[t.cartNums?i("v-uni-view",{staticClass:"badge color-f"},[t._v(t._s(t.cartNums))]):t._e(),i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/ic-me-car.png",mode:""}}),i("v-uni-view",[t._v("购物车")])],1),i("v-uni-button",{staticClass:"btn btn-square btn-g",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){e=t.$handleEvent(e),t.toshow(1)}}},[t._v("加入购物车")]),i("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){e=t.$handleEvent(e),t.toshow(2)}}},[t._v("立即购买")])],1),i("uni-fab",{attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:function(e){e=t.$handleEvent(e),t.trigger(e)}}})],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})}}]);
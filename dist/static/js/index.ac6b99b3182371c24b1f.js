webpackJsonp([3],{"01C5":function(t,e){},"035s":function(t,e){},"97Sy":function(t,e){},TFhR:function(t,e,a){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrremove:"/cart/mrremove",addressAdd:"/address/add",addressRemove:"/address/remove",addressList:"/address/list",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in s)s.hasOwnProperty(n)&&(s[n]="https://easy-mock.com/mock/5cdf9e46ca410e607a1193b3/youzan"+s[n]);e.a=s},U67u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("97Sy"),n=(a.n(s),a("bCKv")),i=a.n(n),r=a("035s"),o=(a.n(r),a("eChN")),c=(a.n(o),a("7+uW")),d=a("TFhR"),l=a("mtWM"),u=a.n(l),h=a("nq5D"),f=a("gN+L");c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,u.a.get(d.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=e.data.lists,t.loading=!1,t.pageNum++}))},getBanner:function(){var t=this;u.a.get(d.a.banner).then(function(e){t.bannerLists=e.data.lists})}},components:{Foot:h.a,Swipe:f.a}})},eChN:function(t,e){},"gN+L":function(t,e,a){"use strict";var s=a("DNVT"),n=(a("v2ns"),{name:"swipe",props:{lists:{type:Array,required:!0}},created:function(){},mounted:function(){new s.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0}})}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t,a){return e("div",{key:a,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})])},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(t){a("01C5")},"data-v-09e727d1",null);e.a=r.exports},nq5D:function(t,e,a){"use strict";var s=a("mw3O"),n=a.n(s).a.parse(location.search.substr(1)).index,i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],r={name:"Foot",data:function(){return{navConfig:i,curIndex:parseInt(n)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,s){return a("li",{key:s,class:{active:s===t.curIndex},on:{click:function(a){return t.changeNav(e,s)}}},[a("a",[a("i",{class:e.icon}),a("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(t){a("xwqh")},"data-v-50f97408",null);e.a=c.exports},v2ns:function(t,e){},xwqh:function(t,e){}},["U67u"]);
//# sourceMappingURL=index.ac6b99b3182371c24b1f.js.map
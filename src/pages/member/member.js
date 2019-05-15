
//1.使用vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [{
  path:'/',
  components: require('./components/member.vue')
},{
  path:'/address',
  components: require('./components/address.vue'),
  children:[{
    path: '',
    // components: require('./components/all.vue')
    redirect:'all'
  },{
    path: 'all',
    components: require('./components/all.vue')
  },{
    path: 'form',
    components: require('./components/form.vue')
  },]
}]

//创建router实例
let router = new Router({
  routes
})

//根组件注入
new Vue({
  el:'#app',
  router
})
import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import Swipe from 'components/Swipe.vue'

let {id} = qs.parse(location.search.substr(1))
let detailTab = ['商品详情','本店成交']

new Vue({
  el:'#app',
  data:{
    details:null,
    detailTab,
    tabIndex:0,
    dealLists:null,
    bannerLists:null
  },
  created(){
    this.getDetails()
  },
  methods: {
    getDetails(){
      axios.get(url.details,{id}).then(res=>{
        this.details = res.data.data
        this.bannerLists = []
        this.details.imgs.forEach(item=>{
          this.bannerLists.push({
            clickUrl:'',
            img:item
          })
        })
      })
    },
    getDeal(){
      axios.get(url.deal,{id}).then(res=>{
        this.dealLists = res.data.data.lists
      })
    },
    changeTab(index){
      this.tabIndex = index
      if(index){
        this.getDeal()
      }
    }
  },
  filters:{
    numFilter(price){
        return price.toFixed(2)
    }
  },
  components:{
    Swipe
  }
})


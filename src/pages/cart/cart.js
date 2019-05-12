import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

new Vue({
  el:'.container',
  data:{
    lists:null
  },
  computed:{
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      axios.get(url.cartLists).then(res=>{
        this.lists = res.data.cartList
      })
    }
  },
  filters:{
    numFilter(price){
      return price.toFixed(2)
    }
  }
})
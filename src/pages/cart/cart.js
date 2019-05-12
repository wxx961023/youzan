import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { list } from 'postcss';

new Vue({
  el:'.container',
  data:{
    lists:null
  },
  computed:{
    allSelected:{
      get(){
        if(this.lists&&this.lists.length){
          return this.lists.every(shop=>{
            return shop.checked
          })
        }
        return false
      },
      set(){

      }
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      axios.get(url.cartLists).then(res => {
        let lists = res.data.cartList
        lists.forEach(shop=>{
          shop.checked = true
          shop.goodsList.forEach(good=>{
            good.checked = true
          })
        })
        this.lists = lists
      })
    },
    selectGood(shop,good){
      good.checked = !good.checked
      shop.checked = shop.goodsList.every(good=>{
        return good.checked
      })
    },
    selectShop(shop){
      shop.checked = !shop.checked
    }
  },
  filters:{
    numFilter(price){
      return price.toFixed(2)
    }
  }
})
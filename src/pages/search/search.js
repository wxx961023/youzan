import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'  
import url from 'js/api.js'
import qs from 'qs'

let{keyword,id} = qs.parse(location.search.substr(1))
console.log(location.search)

new Vue({
    el:'.container',
    data:{
        searchList:null,
        keyword,
        isShow:false
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
            axios.get(url.searchList,{keyword,id}).then(res=>{
                this.searchList = res.data.lists
            })
        },
        move(){
            if(document.documentElement.scrollTop>100){
                this.isShow = true
            }else{
                this.isShow = false
            }

        },
        toTop(){

        }
    },
    filters:{
        numFilter(price){
            return price.toFixed(2)
        }
    }
})
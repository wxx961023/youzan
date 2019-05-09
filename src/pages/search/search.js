import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'  
import url from 'js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'

let{keyword,id} = qs.parse(location.search.substr(1))

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
                let curList = res.data.lists
                if(this.searchList){
                    this.searchList = this.searchList.concat(curList)
                }else{
                    this.searchList = curList
                }
            })
        },
        move(){
            if(document.documentElement.scrollTop > 50){
                this.isShow = true
                console.log(document.documentElement.scrollTop)
            }else{
                this.isShow = false
            }
        },
        toTop(){
            Velocity(document.body,'scroll',{duration:1000})
        }
    },
    filters:{
        numFilter(price){
            return price.toFixed(2)
        }
    }
})
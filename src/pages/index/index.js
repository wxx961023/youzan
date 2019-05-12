import 'css/common.css'
import './index.css'
import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'


var app = new Vue({
    el:'#app',
    data:{
        lists:null,
        pageNum:1,
        pageSize:6,
        loading: false,
        allLoaded: false,
        bannerLists:null,
    },
    created() {
        this.getLists();
        this.getBanner()
    },
    methods: {
        getLists(){
            if(this.allLoaded) return
            this.loading = true
            axios.get(url.hotLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize,
            }).then(res => {
                let curLists = res.data.lists
                //判断所有的数据是否加载完成
                if(curLists.length < this.pageSize){
                    this.allLoaded = true
                }
                //如果不这么写，数据只会在页面刷新，而不是增加刷新
                if(this.lists){
                    this.lists = this.lists.concat(curLists)
                }else{
                    //第一次请求数据
                    this.lists = res.data.lists
                }
                this.loading = false
                this.pageNum++
            })
        },
        getBanner(){
            axios.get(url.banner).then(res=>{
                this.bannerLists = res.data.lists
            })
        }
    },
    components:{
        Foot,
        Swipe,
    },  

})
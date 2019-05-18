<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swp-page swiper-slide" v-for="(list,key) in lists" :key="key">
            <a class="js-no-follow" :href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.img">
            </a>
        </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    </div>
</template>

<script>
//swiper对DOM节点进行操作，dom节点什么时候生成
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'swipe',
    props:{
        lists:{
            type: Array,
            required:true
        },
    },
    created(){
    },
    mounted() {
        new Swiper('.swiper-container',{
            loop:true,
            pagination:{
                el:'.swiper-pagination',
                clickable:true,
            }
        })
    },
}
</script>

<style scoped>
.swiper-slide img{
    height: 100%;
    width: 100%;
}
.swiper-container{
    text-align: center;
}
</style>

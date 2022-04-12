<template>
<div id="home">
  <!-- 头顶导航栏 -->
  <nav-bar class="home-nav">
    <template v-slot:center >
      <div>购物街</div>
    </template>
  </nav-bar>
  <!-- 轮播图 -->
    <home-swiper :banners="banners"> </home-swiper>
  <!--推荐-->
  <recommend-view :recommends='recommends' />
  <!-- FeatureView -->
  <feature/>
  <!-- Tabcontrol -->
  <tab-control :text="['流行','新款','精选']"></tab-control>
  <ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>

  </ul>
</div>
  
</template>

<script>
// 组件
import HomeSwiper from './clirdComps/HomeSwiper.vue' 
import RecommendView from './clirdComps/RecommendView.vue'
import Feature from './clirdComps/Feature'
//公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'
export default {
  name:'Home',
  components:{
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl

  },
  
  data(){
  
    return {
      // 服务器数据
      banners:[],
      recommends:[],
      //数据结构
      goods:{
        'pop':{'page':0,list:[]},
        'new':{'page':0,list:[]},
        'sell':{'page':0,list:[]},
      }
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')

  },
  methods:{
    // created0中的方法放入methods中更好
    getHomeMultidata(){
      getHomeMultidata().then(res=>{      
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;      
    })
    },
    getHomeGoods(type){
    
      getHomeGoods(type,1).then(res=>{
        console.log(res);
      })
    }
      
    
  }
}
</script>

<style>

.home-nav{
  background-color:var(--color-tint);
  color: var(--color-background);
}
</style>
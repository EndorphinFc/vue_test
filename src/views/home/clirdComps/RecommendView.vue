<template>
    <ul class="recommend">
      <li v-for="(item,i) in recommends" :key="i">
        <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
  }
  .recommend li{
    list-style: none;
   flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
  }
  .recommend li img{
    width: 70%;
    margin-bottom: 10px;
  }
</style>
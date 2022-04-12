<template>
  <div class="tabcontrol">
      <span v-for="(item,i) in text" :key="i" :class="{active:i===currentIndex}" @click="currentIndex=i">{{item}}</span>

  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    text:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0

    }
  }
  
}
// 注意name对象后面要加引号
// 绑定：@click="currentIndex=i"

</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  position: sticky;
  top: 44px;

}
 .tabcontrol span{
   flex: 1;
   text-align: center;
 }
 .active {
   color: var(--color-high-text);
   padding-bottom: 10px;
   border-bottom: 3px solid var(--color-tint);
 }
</style>
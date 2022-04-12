<template>
   <div class="tab-bar-item" @click="itemClick">
     <div>  
       <div  v-if="!isActive"> <slot name='item-icon'></slot></div> 
       <div v-else><slot name='item-icon-active'></slot></div>
       <div :style="activeStyle"><slot name='item-text'></slot></div> 
     </div>
   </div>
</template>

<script>

export default {
  name:'TabBarItem',
  props:{
    path:String,
    activecolor:{
      default:'red',
      type:String,
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      // router（全局）与route（跳转路由对象）区别
      // return this.$router.path
      return this.$route.path===this.path
    },
    activeStyle(){
      return this.isActive ? {color:this.activecolor}:{}
    }
  },
  data(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    return{
      // isActive:true
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
</style>
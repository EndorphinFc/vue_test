<template>
  <div class="nav-bar" >
    <div class="left"><slot name="left"/></div>
    <div class="center"><slot name="center"/></div>
    <div class="right"><slot name='right'/></div>

  </div>
</template>

<script>
export default {
  name:'NavBar'
  }
</script>

<style>

.nav-bar{
  height: 49px;
  line-height: 49px;
  display: flex;
  text-align: center;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .2);
  position: sticky;
  top: 0px;
  z-index: 999;
}
.left,.right{
  width: 60px;
}
.center{
  flex:1;
}
</style>
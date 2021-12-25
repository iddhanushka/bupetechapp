<template>
  <div  v-if="topLeft" :style="{top:topLeft}" class="leaf">
    <div class="leaf__top__left">
      <img  class="leaf__top__left-img" src="../assets/images/leaf-down.png" alt="" />
    </div>
  </div>

  <div  v-if="topRight" :style="{top:topRight,right:'0%'}" class="leaf">
    <div class="leaf__top__right">
      <img
        class="leaf__top__right-img"
        src="../assets/images/leaf-right.png"
        alt=""
        
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopLeaf',
   props:{
   topLeft:String,
   topRight:String

  }

}
</script>
<template>
     <div v-if="bottomLeft" :style="{top:bottomLeft}" class="leaf">
       <div  class="leaf__bottom__left">
         <img   class="leaf__bottom__left-img" src="../assets/images/leaf-up.png" alt="">
       </div>
     </div>
 
     <div v-if="bottomRight" :style="{top:bottomRight,right:'0%'}" class="leaf">
       <div class="leaf__bottom__right">
         <img  class="leaf__bottom__right-img" src="../assets/images/leaf-down-right.png" alt="">
       </div>
     </div>  
</template>
<script>
export default {
  name: 'BottomLeaf',
  props:{
   bottomLeft:String,
   bottomRight:String

  }
}
</script>
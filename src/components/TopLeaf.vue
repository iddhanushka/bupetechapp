<template>
  <div class="leaf">
    <div class="leaf__left">
      <img  :style="{top:'35%'}" class="leaf__left-img" src="../assets/images/leaf-down.png" alt="" />
    </div>
  </div>

  <div class="leaf">
    <div class="leaf__right">
      <img
        class="leaf__right-img"
        src="../assets/images/leaf-right.png"
        alt=""
        :style="{top:'121%'}"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopLeaf',

}
</script>
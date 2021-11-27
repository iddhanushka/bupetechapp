<template>
 <div class="welcome-to-bupe__partners">
        <ul class="list"  >
          <li class="logo" v-for="logo in logos" :key="logo">
          <img class="partner-img" :src="require(`@/assets/images/${logo}`)" alt="">
          </li>
               </ul>
</div>
</template>

<script>
export default {
  name: 'BupePartners',
  props: {
    logos: Array
  }
}
</script>
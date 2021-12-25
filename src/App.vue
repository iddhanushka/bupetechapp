<template>
  <SiteHeader button1="header.about.button1" button2="header.about.button2" />

  <router-view> </router-view>

  <SiteFooter />
</template>

<script>
import "normalize.css"
import SiteHeader from "@/components/SiteHeader.vue"
import SiteFooter from "@/components/SiteFooter.vue"

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
}
</script>

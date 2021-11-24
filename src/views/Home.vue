<template>
   <section class="welcome-to-bupe">
  <div class="container">
    <WelcomeBupe msg="Welcome to Your Vue.js App"/>
    <GetaQuote msg="Welcome to Your Vue.js App"/>
    <BupePartners msg="Welcome to Your Vue.js App"/>
    <KpiSolutions msg="Welcome to Your Vue.js App"/>
    </div>
  </section>
   <KpiDetailTabs msg="Welcome to Your Vue.js App"/>
   <ImpactEnterprise msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import WelcomeBupe from '@/components/WelcomeBupe.vue';
import GetaQuote from '@/components/GetaQuote.vue';
import BupePartners from '@/components/BupePartners.vue';
import KpiSolutions from '@/components/KpiSolutions.vue';
import KpiDetailTabs from '@/components/KpiDetailTabs.vue';
import ImpactEnterprise from '@/components/ImpactEnterprise.vue';
export default {
  name: 'Home',
  components: {
    WelcomeBupe, GetaQuote,BupePartners,KpiSolutions,KpiDetailTabs,ImpactEnterprise
  }
}
</script>

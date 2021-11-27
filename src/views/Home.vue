<template>
   <section class="welcome-to-bupe">
  <div class="container">
    <WelcomeBupe  tag="home.welcome_bupe.tag" title="home.welcome_bupe.title" imagename="welcome-lady.png" button1="home.welcome_bupe.button1" button2="home.welcome_bupe.button2"/>
    <GetaQuote tag="home.get_a_quote.tag" title="home.get_a_quote.title" imagename="organization-man.png" button1="home.get_a_quote.button1" button2="home.get_a_quote.button2"/>
    <BupePartners v-bind:logos="['ceylinco.png','dcs.png','kti.png','watersedge.png','limara.png','eguardian.png']"/>
    <KpiSolutions tag="home.kpi-solutions.tag" title="home.kpi-solutions.title"/>
    </div>
  </section>
   <KpiDetailTabs v-bind:tabs="['Overview','CEO','CFO','CTO','CPO']" msg="Welcome to Your Vue.js App"/>
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

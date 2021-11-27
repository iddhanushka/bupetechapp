  
<template>
  <div class="welcome-to-bupe__kpi-solutions">
        
          <h4 class="tag">{{$t(tag)}}</h4>
          <h1 class="title">{{$t(title)}}</h1>
        
 </div>
</template>

<script>
export default {
  name: 'KpiSolutions',
 props: {
    tag: String,
    title: String
  }
}
</script>
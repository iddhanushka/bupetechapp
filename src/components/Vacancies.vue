<template>
    <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
        <div 
            v-for="vacancy in axiosResult.data" 
            :key="vacancy.id"
        >
            <div class="job-role">
                <h1 class="job-role__title">{{vacancy.name}}</h1>
                <h4 class="job-role__location">{{vacancy.location}}</h4>
                <div class="description">
                    <p>{{vacancy.description}}</p>
                </div>
                <router-link to="/career-form" class="button button--blue job-role__apply-btn">Apply</router-link>
            </div>  
        </div>
    </section>
</template>
<script>
import axios from 'axios';

export default ({
    name: "vacancies",
    data() {
    return {
      axiosResult:null,
      loading: true,
      errored: false
      }
  },
   async created() {  
        await axios.get(`${process.env.VUE_APP_BASE_URL}/api/job/index`)
            .then((response) => {
                this.debugger;
                    //console.warn(response.data);
                    this.axiosResult = response;
                })
            .catch((error)=>{     
                this.errored = true            
                for (var key in error.response.data.errors) {                    
                    this.$toast.show(error.response.data.errors[key], {
                    type: 'error',
                    position: 'top-left',
                    pauseOnHover: true,
                });
                }
            })
            .finally(() => this.loading = false);        
    }
})
</script>

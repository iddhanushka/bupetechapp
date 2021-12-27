<template>
<section class="terms-service">
    <div class="container">
      <h1 class="main-title">Legal &amp; Privacy</h1>
      <h2 class="sec-title">Terms of Service</h2>
      <div class="terms">
       
       <div  v-for="item in this.bodyData.service" :key="item.id" class="terms-col">
          <div @click="go(item.slug)" class="term-block terms-service__video">
            <img
              class="term-block__icon"
              v-if="item.image_url.length > 0"
              v-bind:src="item.image_url"
              :alt="item.title"
            />
            <h4 class="term-block__title">{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
       </div>

      </div>
    </div>
  </section>

  <section  :style="{
      backgroundImage:
        'url(' + require(`@/assets/images/sec-clt-bg-img.jpg`) + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }" class="terms-service terms-service--sec-policies-bg-img shadow border-top-0 border-bottom-0">
    <div class="container">
      <h2 class="sec-title">Policies</h2>
     

        <div class="terms">
        <div  v-for="item in this.bodyData.polices" :key="item.id" class="terms-col">
          <div @click="go(item.slug)" class="term-block terms-service__video">
            <img
              class="term-block__icon"
              v-if="item.image_url.length > 0"
              v-bind:src="item.image_url"
              :alt="item.title"
            />
            <h4 class="term-block__title">{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>   

  </section>

  <section class="terms-service">
    <div class="container">
      <h2 class="sec-title">Miscellaneous</h2>
      <div class="terms">
            <div  v-for="item in this.bodyData.miscellaneous" :key="item.id" class="terms-col">
          <div @click="go(item.slug)" class="term-block terms-service__video">
            <img
              class="term-block__icon"
              v-if="item.image_url.length > 0"
              v-bind:src="item.image_url"
              :alt="item.title"
            />
            <h4 class="term-block__title">{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
       </div>

      </div>
    </div>
  </section>

</template>

<script>

import axios from 'axios';
import router from "../router";
export default ({
  name:'PrivarcyTerms',
  data(){
    return{
      bodyData:{privacy:[],policies:[],miscellaneous:[]},

      loading: true,
      errored: false,
    }
  },
  methods:{

    handleBlur(e){
      e.target.classList.remove('active');


    },
     go(slug) {

     if (slug)   
      router.push({
        path:'/privarcy-terms/'+slug,

      });
    },
  getDocument(type){

      axios.post(`${process.env.VUE_APP_BASE_URL}/api/articles/index`, {type})
            .then((response)=>{                            
              if(response.status === 200){
                  this.bodyData[type] = response.data.data ;
               console.log(this.bodyData);
              } else {
                  this.$toast.show('Unable to procceed, Please check your Given details. ', {
                      type: 'success',
                      position: 'top-left',
                      className:'toast-failed',
                  });
              }
            })
            .catch((error)=>{  
                           
                for (var key in error.response.data.errors) {                    
                  this.$toast.show(error.response.data.errors[key], {
                    type: 'error',
                    position: 'top-left',
                    pauseOnHover: true,
                    className:'toast-failed',
                  }
                  );
              }
            })
    }},
  mounted: function(){
  
    
      this.getDocument('service');
      this.getDocument('polices');
      this.getDocument('miscellaneous');
  }
  })
  </script>
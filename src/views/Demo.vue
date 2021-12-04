<template>
<div class="watch-demo-action">
    <div class="container">
      <h1 class="main-title">See BUPE in action</h1>
      <div class="row">
        <div class="col-xl-6">
          <div class="watch-demo-action__content">
            <div class="demo-video">
              <img class="demo-video__thumbnail" src="../assets/images/kpi-overview.png" alt="">
            </div>
            <h2 class="title">How to reach the true potential of your company</h2>
            <p>In this demo you can discover:</p>
            <ul class="list">
              <li class="list-item">How to provision the BUPE system</li>
              <li class="list-item">Walkthrough our Dashboard with all infographics and KPIs</li>
              <li class="list-item">How BUPE enables workflows to uplift the company</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="watch-demo-action__form">
            <h3 class="title">Register to watch the demo video</h3>
            <div class="form-block">
              <form class="row g-4" @submit="sendDemoRequest" method="post">
                <div class="col-xl-6 ">
                  <label for="email" class="form-label">*Email</label>
                  <input type="email" required v-model="posts.email" class="form-control input-field" id="email">
                </div>
                <div class="col-xl-12">
                  <label for="msg" class="form-label">*Request/Comments</label>
                  <textarea class="form-control custom-width" required v-model="posts.comment" id="msg"></textarea>
                </div>                
                <label class="privacy-term">We handle your data according to our <a class="data-privacy-link" href="">Privacy policy.</a></label>
                <div class="resume">
                  <div class="row">
                    <div class="col-xl-6">
                     
                             <Captcha/>
                     
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="button button--align-left button--submit form-submit-btn form-submit-btn--align-left">Watch the Demo</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import Captcha from "../components/Captcha";
 import axios from 'axios';

export default {
    name:'PostFormDemoRequest',
    components: {
	Captcha,
  },
    data(){
      return {
        posts:{
          email:null,
          comment:null,
        }
          
      }
    },
    methods:{
      sendDemoRequest(e){ 
        e.preventDefault();   
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/demo/add`, this.posts)
              .then((response)=>{                            
                if(response.status === 200){
                    e.target.reset();
                    this.$toast.show('Successfully submit your Demo request, Our customer service contact you soon. ', {
                        type: 'success',
                        position: 'top-left',
                        pauseOnHover: true,
                    });
                } else {
                   e.target.reset();
                   this.$toast.show('Unable to procceed your request, Please contact Sytem Administrator. ', {
                        type: 'success',
                        position: 'top-left',
                    });
                }
              })
              .catch((error)=>{                 
                  for (var key in error.response.data.errors) {                    
                    this.$toast.show(error.response.data.errors[key], {
                      type: 'error',
                      position: 'top-left',
                      pauseOnHover: true,
                    });
                }
              })
       
      }

    
    }


  }
</script>

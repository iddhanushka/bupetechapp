  <template>
  <div class="apply-developer">
      <div class="row">
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__form">
            <h1 class="title">Contact our solutions team </h1>
            <div class="form-block">
              <form class="row g-4" @submit="sendContacDetails" method="post">
                <div class="col-xl-6 ">
                  <label for="fname" class="form-label"><span class="asterisk">*</span>First Name</label>
                  <input maxlength="50" type="text" required  v-model="posts.fname" class="form-control input-field" id="fname">
                </div>
                <div class="col-xl-6">
                  <label for="sname" class="form-label"><span class="asterisk">*</span>Second Name</label>
                  <input maxlength="50" type="text"  required  v-model="posts.sname" class="form-control input-field" id="sname">
                </div>
                <div class="col-xl-6">
                  <label for="email" class="form-label"><span class="asterisk">*</span>E mail Address</label>
                  <input maxlength="50" type="email" required v-model="posts.email" class="form-control input-field" id="email">
                </div>
                <div class="col-xl-6">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input maxlength="16" type="tel"  pattern="[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*" required v-model="posts.phone" class="form-control input-field" id="phone">
                </div>
                <div class="col-xl-6">
                  <label for="title" class="form-label"><span class="asterisk">*</span>Job Title</label>
                  <input maxlength="50" type="text"  required v-model="posts.title" class="form-control input-field" id="title">
                </div>
                <div class="col-xl-6">
                  <label for="role" class="form-label"><span class="asterisk">*</span>Select Your Role</label>
                  <select id="role" v-model="posts.role" class="form-select selector-field">
                    <option selected value="">Select a job role..</option>
                    <option value="CTO">CTO</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
                <div class="col-xl-6">
                  <label for="company_size" class="form-label"><span class="asterisk">*</span>Company Size</label>
                  <select id="company_size" v-model="posts.company_size" class="form-select selector-field">
                    <option value="" selected>Select Company Size..</option>
                    <option value="Less than 50K USD" >Less than 50K USD</option>
                    <option value="50K - 125K USD">50K - 125K USD</option>
                    <option value="125K - 750K USD">126K - 375K USD</option>
                     <option value="376K - 750K USD">376K - 750K USD</option>
                      <option value="Above 750K USD">Above 750K USD</option>
                  </select>
                </div>
                <div class="col-xl-6">
                  <label for="company_name" class="form-label">Company Name</label>
                  <input maxlength="50" type="text" v-model="posts.company_name" class="form-control input-field" id="company_name">
                </div>
                <div class="col-xl-12">
                  <label for="comment" class="form-label">Request/Comments</label>
                  <textarea maxlength="100" class="form-control" v-model="posts.comment" id="comment"></textarea>
                    <label class="resume-title">We handle your data according to our <a class="data-privacy-link" href="">Privacy policy.</a></label>
                
                </div>
                <div class="resume">
                  <div class="row">
                    <div class="col-xl-6">
                     
                             <Captcha  @capture="getCapture" @verified="getVerified"  />
                     
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="button button--align-left button--submit form-submit-btn form-submit-btn--align-left">Send Request</button>
                  <scale-loader :loading="loading" :color="color" :size="size"></scale-loader>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div class="col-xl-6 col-same-height">
          <div v-if="target==2" class="apply-developer__details">
            <h1 class="title">Let's talk about how we can help your business.</h1>
            <div class="description">
              <p>Contact us to learn more about</p>
              <ul class="des-list">
                <li class="list-line">-Plans & Pricing</li>
                <li class="list-line">-Product Features & Benefits</li>
                <li class="list-line">-Training & Support Services</li>
                <li class="list-line">-Software Integrations</li>
                <li class="list-line">-Add-on features</li>
              </ul>
            </div>
          </div>
           <div v-if="target!=2" class="apply-developer__details">
            <h1 class="title">Got an issue related to our products?</h1>
            <div class="description">
              <p>Let us to know more about and contact us with bellow information to serve you better.</p>
              <ul class="des-list">
                <li class="list-line">-Is it a recrutment issue?</li>
                <li class="list-line">-How critical is it for your work flow?</li>
                <li class="list-line">-Is it common issue for you and your colleagues?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  </template>

  <script>
 import Captcha from "../components/Captcha";
 import axios from 'axios';
 import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

  export default {
    name:'PostFormContact',
    components: {
	Captcha,
  ScaleLoader
  },
    data(){

      return {
        posts:{
          fname:null,
          sname:null,
          phone:null,
          email:null,
          title:null,
          role:null,
          company_size:null,
          company_name:null,
          comment:null,
          g_recaptcha_response:null,
          captchaVeryfied:false
        },
        loading:false,
        target: this.$route.params.target?this.$route.params.target:1
          
      }
    },
    methods:{
      getCapture(value) {
      this.posts.g_recaptcha_response=value;
    },
    getVerified(value) {
      this.posts.captchaVeryfied=value;
    },
      sendContacDetails(e){ 
        e.preventDefault();

      if (!this.posts.captchaVeryfied){

          this.$toast.show(
              "Unable to procceed, Please check the capture code. ",
              {
                type: "error",
                position: "top-left",
                className: "toast-success",
              }
            );
        return false;
      }   
      let formData = new FormData();

      formData.append("fname", this.posts.fname);
      formData.append("sname", this.posts.sname);
      formData.append("email", this.posts.email);
      formData.append("phone", this.posts.phone);
      formData.append("comment", this.posts.comment);
      formData.append("title", this.posts.title);
      formData.append("role", this.posts.role);
      formData.append("company_size", this.posts.company_size);
      formData.append("company_name", this.posts.company_name);
      formData.append("g-recaptcha-response",this.posts.g_recaptcha_response);
      this.loading=true;

        axios.post(`${process.env.VUE_APP_BASE_URL}/api/contact/add`, formData)
              .then((response)=>{      
                this.loading=false;                      
                if(response.status === 200){
                    e.target.reset();
                    this.$toast.show('Successfully submit your query, Our customer service contact you soon. ', {
                        type: 'success',
                        position: 'top-left',
                        pauseOnHover: true,
                        className:'toast-success',
                    });
                } else {
                   e.target.reset();
                   this.$toast.show('Unable to procceed, Please contact Sytem Administrator. ', {
                        type: 'success',
                        position: 'top-left',
                        className:'toast-success',
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
                    });
                }
              })
       
      }

    
    }


  }



  </script>
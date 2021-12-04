  <template>
  <div class="apply-developer">
      <div class="row">
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__form">
            <h1 class="title">Contact our solutions team</h1>
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
                    <option value="small" >Small</option>
                    <option value="mideum">Mideum</option>
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
                     
                             <Captcha/>
                     
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="button button--align-left button--submit form-submit-btn form-submit-btn--align-left">Send Request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__details">
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
        </div>
      </div>
  </div>
  </template>

  <script>
 import Captcha from "../components/Captcha";
 import axios from 'axios';

  export default {
    name:'PostFormContact',
    components: {
	Captcha,
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
        }
          
      }
    },
    methods:{
      sendContacDetails(e){ 
        e.preventDefault();   
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/contact/add`, this.posts)
              .then((response)=>{                            
                if(response.status === 200){
                    e.target.reset();
                    this.$toast.show('Successfully submit your query, Our customer service contact you soon. ', {
                        type: 'success',
                        position: 'top-left',
                        pauseOnHover: true,
                    });
                } else {
                   e.target.reset();
                   this.$toast.show('Unable to procceed, Please contact Sytem Administrator. ', {
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
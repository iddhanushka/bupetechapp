<template>
 <div class="apply-developer">
      <div class="row">
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__form">
            <h1 class="title">Apply for Senior Backend Developer</h1>
            <div class="form-block">
              <form class="row g-4"  @submit="SubmitApplication" method="post">
                <div class="col-xl-6 ">
                  <label for="fName" class="form-label"><span class="asterisk">*</span>First Name</label>
                  <input type="text" class="form-control input-field" required v-model="posts.fname" id="fName">
                </div>
                <div class="col-xl-6">
                  <label for="sName" class="form-label"><span class="asterisk">*</span>Second Name</label>
                  <input type="text" class="form-control input-field" required v-model="posts.sname" id="sName">
                </div>
                <div class="col-xl-6">
                  <label for="email" class="form-label"><span class="asterisk">*</span>Email</label>
                  <input type="email" class="form-control input-field" required v-model="posts.email" id="email">
                </div>
                <div class="col-xl-6">
                  <label for="pNbr" class="form-label"><span class="asterisk">*</span>Phone Number</label>
                  <input type="text" class="form-control input-field" pattern="[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*" required v-model="posts.phone" id="pNbr">
                </div>
                <div class="col-xl-12">
                  <label for="msg" class="form-label"><span class="asterisk">*</span>Tell us more about you</label>
                  <textarea class="form-control" required v-model="posts.comment" id="msg"></textarea>
                </div>
                <div class="resume">
                  <label class="resume-title">Resume</label>
                  <div class="row">
                    <div class="col-xl-5">
                      <label class="upload-btn-title">Please upload a resume</label>
                      <div class="input-group">
                        <input type="file" class="form-control upload-input" id="inputGroupFile02" ref="file">
                        <label class="input-group-text upload-cv-btn" for="inputGroupFile02">Upload CV</label>
                      </div>
                      <span class="file-format-text" >.PDF, .DOC, .DOCX Max 5MB</span>
                    </div>
                    <div class="col-xl-6">
                      <div class="capture">
                        <Captcha/>    
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">                
                  <button type="submit" class="button button--submit form-submit-btn" v-on:Click="onFileChange()">Apply</button>
                </div>
              </form>
            </div>
          </div>
        </div>
 
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__details">
            <h1 class="title">{{jobDescription.name}}</h1>
            <div class="description">
              <p>Location: {{jobDescription.location}}</p>
              <p>Description: {{jobDescription.description}}</p>
              <p>Experience: {{jobDescription.experience}}</p>
              <p>Experience: {{jobDescription.experience}}</p>
              <p>Qualifications: {{jobDescription.qualifications}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import Captcha from "../components/Captcha";
import axios from 'axios';

export default({
  name:'jobDescription',
  components:{
    Captcha,
  },
  data(){
    return{
      posts:{
        fname:null,
        sname:null,
        email:null,
        phone:null,
        comment:null,
        upload:null,
        job_name:null,
        job_id:null,
      },
        jobDescription:null,
        loading: true,
        errored: false,
    }
  },
  created(){
    this.loadDescription();
  },
  methods:{ 
    loadDescription() {
          this.loading = true, 
          axios.get(`${process.env.VUE_APP_BASE_URL}/api/job/view/${this.$route.params.id}`)
              .then((response) => {
                      this.jobDescription = response.data.job;           
              })
              .catch((error)=>{     
                  this.errored = true            
                  for (var key in error.response.data.errors) {                    
                      this.$toast.show(error.response.data.errors[key], {
                          type: 'error',
                          position: 'top-left',
                          pauseOnHover: true,
                          className:'toast-failed',
                  });
                  }
              })
              .finally(() => this.loading = false);
    },
    SubmitApplication(e){
       e.preventDefault();   
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/career/add`, this.posts)
              .then((response)=>{                            
                if(response.status === 200){
                    e.target.reset();
                    this.$toast.show('Successfully submit your Job Application, Our HR will contact you soon. ', {
                        type: 'success',
                        position: 'top-left',
                        pauseOnHover: true,
                        className:'toast-success',
                    });
                } else {
                   e.target.reset();
                   this.$toast.show('Unable to procceed, Please check your Given details. ', {
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

    },
    onFileChange(){
      this.debugger;
      var uploadFileDetails = document.getElementById("inputGroupFile02").files[0];
      console.warn(uploadFileDetails);
    }
  }
})
</script>

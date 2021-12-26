<template>
  <div class="apply-developer">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-same-height">
        <div class="apply-developer__form">
          <h1 class="title">Apply for Senior Backend Developer</h1>
          <div class="form-block">
            <form
              class="row g-4"
              @submit="SubmitApplication"
              method="post"
              enctype="multipart/form-data"
            >
              <div class="col-xl-6 col-md-6 col-sm-6">
                <label for="fName" class="form-label"
                  ><span class="asterisk">*</span>First Name</label
                >
                <input
                  type="text"
                  class="form-control input-field"
                  required
                  v-model="posts.fname"
                  id="fName"
                />
              </div>
              <div class="col-xl-6 col-md-6 col-sm-6">
                <label for="sName" class="form-label"
                  ><span class="asterisk">*</span>Second Name</label
                >
                <input
                  type="text"
                  class="form-control input-field"
                  required
                  v-model="posts.sname"
                  id="sName"
                />
              </div>
              <div class="col-xl-6 col-md-6 col-sm-6">
                <label for="email" class="form-label"
                  ><span class="asterisk">*</span>Email</label
                >
                <input
                  type="email"
                  class="form-control input-field"
                  required
                  v-model="posts.email"
                  id="email"
                />
              </div>
              <div class="col-xl-6 col-md-6 col-sm-6">
                <label for="pNbr" class="form-label"
                  ><span class="asterisk">*</span>Phone Number</label
                >
                <input
                  type="text"
                  class="form-control input-field"
                  pattern="[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*"
                  required
                  v-model="posts.phone"
                  id="pNbr"
                />
              </div>
              <div class="col-xl-12">
                <label for="msg" class="form-label"
                  ><span class="asterisk">*</span>Tell us more about you</label
                >
                <textarea
                  class="form-control"
                  required
                  v-model="posts.comment"
                  id="msg"
                ></textarea>
              </div>
              <div class="resume">
                <label class="resume-title">Resume</label>
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                    <label class="upload-btn-title"
                      >Please upload a resume</label
                    >
                    <div class="input-group">
                      <input
                        type="file"
                        name="upload"
                        class="form-control upload-input"
                        id="upload"
                        ref="file"
                        @change="onSelect"
                      />
                      <label
                        class="input-group-text upload-cv-btn"
                        for="upload"
                        >Upload CV</label
                      >
                    </div>

                    <span class="file-format-text"
                      >.PDF, .DOC, .DOCX Max 5MB</span
                    >
                  </div>
                  <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                    <div class="capture">
                      <Captcha @capture="getCapture" @verified="getVerified" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <input type="hidden" v-model="job_name" id="job_name" />
                <input type="hidden" v-model="job_id" id="job_id" />
                <button
                  type="submit"
                  class="button button--submit form-submit-btn"
                >
                  Apply
                </button>
                  <scale-loader :loading="loading" :color="color" :size="size"></scale-loader>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-same-height">
        <div class="apply-developer__details">
          <h1 class="title">{{ jobDescription.name }}</h1>
          <div class="description">
            <p>Location: {{ jobDescription.location }}</p>
            <p>Description: {{ jobDescription.description }}</p>
            <p>Experience: {{ jobDescription.experience }}</p>
            <p>Experience: {{ jobDescription.experience }}</p>
            <p>Qualifications: {{ jobDescription.qualifications }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Captcha from "../components/Captcha.vue";
import axios from "axios";
 import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
export default {
  name: "jobDescription",
  components: {
    Captcha,ScaleLoader
  },
 
  data() {
    return {
      posts: {
        fname: null,
        sname: null,
        email: null,
        phone: null,
        comment: null,
        upload: null,
        job_name: null,
        job_id: null,
        g_recaptcha_response:null,
        captchaVeryfied:false
      },
      jobDescription: null,
      loading: false,
      errored: false,
    };
  },
  created() {
    this.loadDescription();
  },
  methods: {
    getCapture(value) {
      this.posts.g_recaptcha_response=value;
    },
    getVerified(value) {
      this.posts.captchaVeryfied=value;
    },
    onSelect() {
      return this.$refs.file.files[0];
    },
    loadDescription() {
      (this.loading = true),
        axios
          .get(
            `${process.env.VUE_APP_BASE_URL}/api/job/view/${this.$route.params.id}`
          )
          .then((response) => {
            this.jobDescription = response.data.job;
            this.posts.job_name = response.data.job.name;
            this.posts.job_id = response.data.job.id;
          })
          .catch((error) => {
            this.errored = true;
            for (var key in error.response.data.errors) {
              this.$toast.show(error.response.data.errors[key], {
                type: "error",
                position: "top-left",
                pauseOnHover: true,
                className: "toast-failed",
              });
            }
          })
          .finally(() => (this.loading = false));
    },
    SubmitApplication(e) {
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
      let file=this.onSelect();
      if (file)
        formData.append("upload", this.onSelect());
      formData.append("fname", this.posts.fname);
      formData.append("sname", this.posts.sname);
      formData.append("email", this.posts.email);
      formData.append("phone", this.posts.phone);
      formData.append("comment", this.posts.comment);
      formData.append("job_name", this.posts.job_name);
      formData.append("job_id", this.posts.job_id);
      formData.append("g-recaptcha-response",this.posts.g_recaptcha_response);
    
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/api/career/add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            e.target.reset();
            this.$toast.show(
              "Successfully submit your Job Application, Our HR will contact you soon. ",
              {
                type: "success",
                position: "top-left",
                pauseOnHover: true,
                className: "toast-success",
              }
            );
          } else {
            e.target.reset();
            this.$toast.show(
              "Unable to procceed, Please check your Given details. ",
              {
                type: "success",
                position: "top-left",
                className: "toast-success",
              }
            );
          }
        })
        .catch((error) => {
          for (var key in error.response.data.errors) {
            this.$toast.show(error.response.data.errors[key], {
              type: "error",
              position: "top-left",
              pauseOnHover: true,
              className: "toast-failed",
            });
          }
        });
    },
  },
};
</script>

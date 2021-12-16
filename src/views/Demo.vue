<template>
  <div class="watch-demo-action">
    <div class="container">
      <h1 class="main-title">See BUPE in action</h1>
      <div class="row">
        <div class="col-xl-6">
          <div class="watch-demo-action__content">
            <div class="demo-video">
              <img
                v-if="!show_video"
                class="demo-video__thumbnail"
                src="../assets/images/kpi-overview.png"
                alt=""
              />
              <video
                v-if="show_video"
                style="width: 100%"
                class="elementor-video"
                :src="demo_video_url"
                controls=""
                controlslist="nodownload"
              ></video>
            </div>
            <h2 class="title">
              How to reach the true potential of your company
            </h2>
            <p>In this demo you can discover:</p>
            <ul class="list">
              <li class="list-item">How to provision the BUPE system</li>
              <li class="list-item">
                Walkthrough our Dashboard with all infographics and KPIs
              </li>
              <li class="list-item">
                How BUPE enables workflows to uplift the company
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="watch-demo-action__form">
            <h3 class="title">Register to watch the demo video</h3>
            <div class="form-block">
              <form class="row g-4" @submit="sendDemoRequest" method="post">
                <div class="col-xl-6">
                  <label for="email" class="form-label">*Email</label>
                  <input
                    type="email"
                    required
                    v-model="posts.email"
                    class="form-control input-field"
                    id="email"
                  />
                </div>
                <div class="col-xl-12">
                  <label for="msg" class="form-label">*Request/Comments</label>
                  <textarea
                    class="form-control custom-width"
                    required
                    v-model="posts.comment"
                    id="msg"
                  ></textarea>
                </div>
                <label class="privacy-term"
                  >We handle your data according to our
                  <a class="data-privacy-link" href=""
                    >Privacy policy.</a
                  ></label
                >
                <div class="resume">
                  <div class="row">
                    <div class="col-xl-6">
                      <Captcha @capture="getCapture" @verified="getVerified" />
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <button
                    type="submit"
                    class="button button--align-left button--submit form-submit-btn form-submit-btn--align-left"
                  >
                    Watch the Demo
                  </button>
                  <scale-loader
                    :loading="loading"
                    :color="color"
                    :size="size"
                  ></scale-loader>
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
import axios from "axios";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
export default {
  name: "PostFormDemoRequest",
  components: {
    Captcha,
    ScaleLoader,
  },
  data() {
    return {
      posts: {
        email: null,
        comment: null,
        g_recaptcha_response: null,
        captchaVeryfied: false,
      },
      demo_video_url: process.env.VUE_APP_DEMO_VIDEO_URL,
      show_video: false,
      loading: false,
    };
  },
  methods: {
    getCapture(value) {
      this.posts.g_recaptcha_response = value;
    },
    getVerified(value) {
      this.posts.captchaVeryfied = value;
    },
    sendDemoRequest(e) {
      e.preventDefault();
      if (!this.posts.captchaVeryfied) {
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

      formData.append("email", this.posts.email);
      formData.append("comment", this.posts.comment);
      formData.append("g-recaptcha-response", this.posts.g_recaptcha_response);
      this.loading = true;

      axios
        .post(`${process.env.VUE_APP_BASE_URL}/api/demo/add`, formData)
        .then((response) => {
          this.loading = false;

          if (response.status === 200) {
            this.posts.email = null;
            this.posts.comment = null;
            this.show_video = true;
            e.target.reset();
            this.$toast.show(
              "Successfully submit your Demo request, Our customer service contact you soon. ",
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
              "Unable to procceed your request, Please contact Sytem Administrator. ",
              {
                type: "success",
                position: "top-left",
                className: "toast-failed",
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

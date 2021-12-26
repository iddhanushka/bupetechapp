<template>
  <section class="terms-service" >
    <div class="container">
      <h1 class="main-title">Help &amp; Training Center</h1>
      <h2 class="sec-title">BUPE Help Articles</h2>
      <div class="terms">
        <div  v-for="item in articles" :key="item.id" class="terms-col">
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
  <section
    :style="{
      backgroundImage:
        'url(' + require(`@/assets/images/sec-clt-bg-img.jpg`) + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
    class="terms-service"
  >
    <div class="wrapper">
      <h2 class="sec-title">Curated Learning Tracks</h2>
      <div class="terms">
        <div v-for="item in videos" :key="item.id" class="terms-col">
          <div data-bs-toggle="modal" @click="playVideo(item.video_id)" data-bs-target="#videoModal" class="term-block terms-service__video">
            <img
              class="term-block__icon"
              src="../assets/images/play-icon.png"
              :alt="item.title"
            />
            <h4 class="term-block__title">{{ item.title }}</h4>
            <p>{{ item.description }}</p>

          </div>
        </div>
      </div>
    </div>

  </section>




<div class="modal fade hide"  ref="vuemodal" @click="stopCurrentVideo" data-backdrop="static" data-keyboard="false" id="videoModal" tabindex="-1" >
  <div class="modal-dialog modal-ku"  >
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" @click="stopCurrentVideo" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" >
     <YoutubeVue3 v-if="viedo_id"  ref="youtube" :videoid="viedo_id"  :width="vWidth"  
      />
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import { YoutubeVue3 } from 'youtube-vue3'
import router from "../router";
import jQuery from "jquery";

const $ = jQuery;




export default {
  name: "Training",
  components: {
    YoutubeVue3
  },
  data() {
    return {
      articles: [],
      videos: [],
      media: [],
      viedo_id:null,
      vWidth:window.innerWidth<600?window.innerWidth:598,
      vHeight:window.innerWidth>600?'auto':window.innerWidth*0.36,


    };
  },
  methods: {
     go(slug) {

     if (slug)   
      router.push({
        path:'/help/'+slug,

      });
    },
    
     playVideo(id) {
    
     this.viedo_id=id;
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },

    getVideos() {
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/api/videos/index`)
        .then((response) => {
          if (response.status === 200) {
            this.videos = response.data.data;

          } else {
            this.$toast.show(
              "Unable to procceed, Please check your Given details. ",
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
    getArticls() {
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/api/articles/index`)
        .then((response) => {
          if (response.status === 200) {
            this.articles = response.data.data;
          } else {
            this.$toast.show(
              "Unable to procceed, Please check your Given details. ",
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
  mounted: function () {
    this.getVideos();
    this.getArticls();
     $(this.$refs.vuemodal).on("hidden.bs.modal", this.stopCurrentVideo)
    
  },
};
</script>
<style scoped>

  .modal-ku {
    max-width: 600px;
    
  }
  
    .modal-body{
     padding:0rem;

  }
</style>

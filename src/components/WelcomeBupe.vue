<template>
 <div class="welcome">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="welcome-video">
                <div class="welcome__bg-video">
                  <video autoplay loop muted>
        <source  :src="require(`@/assets/videos/welcome-bupe-bg.mp4`)" type="video/mp4" />
                  </video>
                </div>
                <div class="welcome__img">
      <img class="lady" :src="require(`@/assets/images/${imagename}`)" alt="" />
                </div>
              </div>
            </div>
    
            <div class="col-xl-6 col-lg-6 d-flex align-items-lg-center content-col">
              <div class="details">
 <h4 class="welcome__tag">{{ $t(tag) }}</h4>
      <h1 class="welcome__title">{{ $t(title) }}</h1>
  
                <ul class="welcome__action-btn">
                  <li class="get-quote">
                     <router-link to="/contact-form" class="button">{{
            $t(button1)
          }}</router-link>
                    
                    </li>
                 <li class="watch-demo">
          <router-link to="/demo" class="button button--blue">{{
            $t(button2)
          }}</router-link>
        </li>
                </ul>
              </div>
            </div>
          </div>
      </div>





</template>
<script>
export default {
  name: "WelcomeBupe",
  props: {
    tag: String,
    title: String,
    imagename: String,
    button1: String,
    button2: String,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/modules/_welcome-to-bupe.scss";
</style>

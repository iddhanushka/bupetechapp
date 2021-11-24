<template>
  <div class="welcome">
          <div class="row">
            <div class="col-xl-6">
              <div class="welcome__img">
                <img class="lady" src="../assets/images/welcome-lady.png" alt="">
              </div>
            </div>
    
            <div class="col-xl-6 d-flex align-items-center">
              <div class="details">
                <h4 class="welcome__tag">Welcome to bupe</h4>
                <h1 class="welcome__title">Performance measured right, continuosly exactly.</h1>
                <ul class="welcome__action-btn">
                  <li class="get-quote"><a href="" class="button">Get a Quote</a></li>
                  <li class="watch-demo"><a href="" class="button button--blue">Watch a Demo</a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
</template>

<script>
export default {
  name: 'WelcomeBupe',
 /* props: {
    msg: String
  }*/
}
</script>

<style lang="scss">
 @import "../assets/styles/modules/_welcome-to-bupe.scss";

</style>


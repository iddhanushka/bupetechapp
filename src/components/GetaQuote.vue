<template>
  <div class="welcome welcome--m-top">
          <div class="row">
            <div class="col-xl-7 col-lg-7 d-flex align-items-lg-center order-2 order-lg-1 content-col">
              <div class="details details--organization">
                <h4 class="welcome__tag">{{$t(tag)}}</h4>
                <h1 class="welcome__title welcome__title">{{$t(title)}}</h1>
                <ul class="welcome__action-btn">
                  <li class="get-quote"><router-link to="/product#learn_more" class="button button--blue">{{$t(button1)}}</router-link></li>
                  <li class="watch-demo"><router-link to="/contact-form" class="button button--no-background">{{$t(button2)}}</router-link></li>
                </ul>
              </div>
            </div>
  
            <div class="col-xl-5 col-lg-5 order-1 order-lg-2">
              <div class="welcome__img">
                <img class="man" :src="require(`@/assets/images/${imagename}`)" alt="">
              </div>
            </div>
          </div>
      </div>
  
</template>

<script>
export default {
  name: 'GetaQuote',
  props: {
    tag: String,
    title: String,
    imagename:String,
    button1:String,
    button2:String
  }
}
</script>

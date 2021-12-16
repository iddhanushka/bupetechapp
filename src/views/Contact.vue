<template>
  <section
    class="contact" :style="{backgroundImage:'url(' + require(`@/assets/images/call-center.png`) + ')',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
    <div class="container container--custom-height">
      <div class="row">
        <div class="col-xl-12">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <h1 class="contact__title">Contact us</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row row--a-bottom">
        <div class="col-xl-12">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="contact-cards">
                <div class="row gx-5">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="train-mothod">
                      <div class="term-block" v-on:click="contactSales">
                        <img
                          class="term-block__icon"
                          src="../assets/images/hand-icon.png"
                          alt=""
                        />
                        <h4 class="term-block__title">Contact Sales</h4>
                        <p>
                          Talk with our solutions team for find how we can add
                          value to your business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="train-mothod train-mothod--no-mb">
                      <div class="term-block" v-on:click="goTecSupport">
                        <img
                          class="term-block__icon"
                          src="../assets/images/head-phone.png"
                          alt=""
                        />
                        <h4 class="term-block__title">
                          Contact Technical Support
                        </h4>
                        <p>
                          Lets see what we can do with your support request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-info">
    <div class="container">
      <h1 class="main-title">Contact Information</h1>
      <div class="row">
        <div class="col-xl-12">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="asian">
                <h2 class="region-name">Asian Region</h2>
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="country">
                      <h3 class="country-name">Singapore</h3>
                      <h4 class="address">
                        <strong>Bupe Tech - Singapore</strong><br />
                        Level 8, 805/220, Collins Street, <br />
                        Melbourne <br />
                        NSW 3000
                      </h4>
                      <a href="tel:+61290558255" class="tel-nbr"
                        >+61 (2) 90558255</a
                      >
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="country country--align-right country--no-mb">
                      <h3 class="country-name">Sri Lanka</h3>
                      <h4 class="address">
                        <strong>Bupe Tech - Sri Lanka</strong><br />
                        Level 8, 805/220, Collins Street, <br />
                        Melbourne <br />
                        NSW 3000
                      </h4>
                      <a href="tel:+61290558255" class="tel-nbr"
                        >+61 (2) 90558255</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="asian">
                <h2 class="region-name">Oceania Region</h2>
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="country">
                      <h3 class="country-name">Austrailia</h3>
                      <h4 class="address">
                        <strong> Bupe Tech - Austrailia</strong><br />
                        Level 8, 805/220, Collins Street,<br />
                        Melbourne <br />
                        NSW 3000
                      </h4>
                      <a href="tel:+61290558255" class="tel-nbr"
                        >+61 (2) 90558255</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../router";

export default {
  name: "ContactPage",
  
  methods: {
    contactSales() {
      router.push({
        name: "ContactForm",
        params: {
          target: 1,
        },
      });
    },
    goTecSupport() {
       router.push({
        name: "ContactForm",
        params: {
         target: 2,
        },
      });
    },
  },
};
</script>

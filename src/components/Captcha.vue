<template>
  <div class="g-recaptcha">
    <vue-recaptcha
      :siteKey="siteKey"
      :show="show"
      size="normal"
      theme="light"
      :tabindex="1"
      @verify="recaptchaVerified"
      @expire="recaptchaExpired"
      @fail="recaptchaFailed"
      ref="vueRecaptcha"
    >
    </vue-recaptcha>
  </div>
</template>

<script>
import vueRecaptcha from "vue3-recaptcha2";

export default {
  name: "Captcha",
  components: {
    vueRecaptcha,
  },
  props: ['isVerifie'],
  data: function () {
    return {
      show: 1,
      isCaptchaVerifie: false,
      siteKey:process.env.VUE_APP_SITEKEY
    };
  },
  methods: {
    recaptchaVerified(response) {
   // console.log(response);
      this.$emit('verified', true);
      this.$emit('capture', response);
      
      this.isCaptchaVerifie = true;
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
      this.$emit('verified',false);
      this.isCaptchaVerifie = false;
    },
    recaptchaFailed() {
      alert("Somthing was wrong with captcha");
    },
  },
};
</script>
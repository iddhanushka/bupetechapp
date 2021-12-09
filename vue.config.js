module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "normalize.css";
          @import "@/assets/styles/styles.scss";
        `
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
};

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  devServer:{
    proxy: 'http://dummy.restapiexample.com'
  },

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}

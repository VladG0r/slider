import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import './styles/quasar.styl'
import 'quasar-framework/dist/quasar.ie.polyfills'
import 'quasar-extras/animate'
import 'quasar-extras/material-icons'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {
    framework: {
      components: [
        'QCarousel',
        'QCarouselSlide',
        'QCarouselControl'
      ],
    }
  }
 })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

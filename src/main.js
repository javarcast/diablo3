import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { formatNumber } from './filters/numeral'
import BootstrapVue from 'bootstrap-vue-3'

import { focus, diablo } from './directives/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'

import './assets/css/main.styl'

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet,
  faUserSecret
)

const app = createApp(App)

app.config.globalProperties.$filters = {
  formatNumber
}
app.use(store).use(focus).use(diablo).use(router).use(BootstrapVue).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import Vue from 'vue';
import Buefy from 'buefy';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

library.add(fab, fas);

dom.watch();
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fab',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

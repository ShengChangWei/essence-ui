import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
// import EVueTest from './../packages/index.js';
import essenceUI from './../packages/index.js';
import EVueEsrimap from 'e-vue-esrimap/lib/e-vue-esrimap.common.js'
import 'font-awesome/css/font-awesome.css';

Vue.use(EVueEsrimap);
// Vue.use(EVueTest);
Vue.use(essenceUI)
Vue.config.productionTip = false;


new Vue({
    render: (h) => h(App),
}).$mount('#app');

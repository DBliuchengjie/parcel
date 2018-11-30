console.log('parcel-vue practice ');
import Vue from 'vue'
import App from './view/app'
import router from './routes/routes'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
import axios from 'axios'
import store from './store/index'
import './lib/flexible'
Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
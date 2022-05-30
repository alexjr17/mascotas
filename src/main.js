import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import './index.css'
import store from "./store/index";


window.store;
window.state = store.state;

createApp(App).use(store).use(router).mount('#app')

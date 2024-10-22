import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/fontawesome/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style/global.css'
import '@/assets/js/forms'
import '@/assets/style/global.css'


createApp(App).use(router).mount('#app')

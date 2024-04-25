import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/scss/index.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const app = createApp(App);


app.mount('#app');

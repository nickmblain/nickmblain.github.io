import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/tailwind.scss'
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css"
import '@/assets/libs/@iconscout/unicons/css/line.css'
import '@/assets/libs/animate.css/animate.min.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

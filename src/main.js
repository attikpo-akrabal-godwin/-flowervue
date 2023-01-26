import { createApp } from 'vue'
import  piniaStore  from './stores/index.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(piniaStore)
app.use(router)

app.mount('#app')

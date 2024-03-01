import { createApp } from 'vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import './style.css'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia).use(router).mount('#app')

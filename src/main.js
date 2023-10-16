import { createApp } from 'vue'
import plugin from 'vue3-plugin'
import App from './App.vue'

const app = createApp(App)
app.use(plugin)
app.mount('#app')

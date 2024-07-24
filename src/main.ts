import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Home from './components/pages/Home.vue'
import './style.css'

const routes = [{ path: '/', component: Home }]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')

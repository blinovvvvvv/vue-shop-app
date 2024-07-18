import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import './style.css'

const routes = [{ path: '/', component: Home }]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

createApp(App).use(router).mount('#app')

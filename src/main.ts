import {createMemoryHistory, createRouter} from 'vue-router'
import App from "./App.vue";
import {createApp} from "vue";
import 'element-plus/dist/index.css'
import "./style.css"
import "animate.css"
import Home from './pages/home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/image', component: ()=>import('./pages/image.vue') },
    {path: '/detail',component: ()=>import('./pages/detailPage.vue')}
]
const router = createRouter({
    history:createMemoryHistory(),
    routes,
})
createApp(App).use(router).mount('#app')

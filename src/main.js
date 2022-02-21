import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import {createRouter, createWebHistory} from "vue-router"

import App from './App.vue'
import WallPage from "./pages/wall/WallPage.vue"
import LoginPage from "./pages/LoginPage.vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const routes = [
    {path: "/login", component: LoginPage},
    {path: "/home", component: WallPage}
]


const router = createRouter({history: createWebHistory(), routes})


const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')

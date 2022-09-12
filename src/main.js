import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory}from 'vue-router'

const routes = [
    {path:"/", component: App},
    // {path:"/searchPage",component:SearchMuti},
]
var Router = createRouter({
    history: createWebHistory(),
    routes
})
var app= createApp(App)
app.use(Router)
app.mount('#app')

import { createRouter , createWebHistory } from "vue-router";
import Home from '../components/Header.vue'

const routes:import('vue-router').RouterOptions['routes']= [
    {path:"/vuejs" , component:Home},

]

const router = createRouter({
    history:createWebHistory(),
    routes

})
export default router;

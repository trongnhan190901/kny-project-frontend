import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Manga from '@/views/Manga.vue'
import Character from '@/views/Character.vue'
import Author from '@/views/Author.vue'
import About from '@/views/About.vue'


const routes= [
    {
        path: '/', 
        name: 'Home', 
        component:Home
    },
    {
        path: '/manga', 
        name: 'Manga', 
        component:Manga
    },
    {
        path: '/character', 
        name: 'Character', 
        component:Character
    },
    {
        path: '/author', 
        name: 'Author', 
        component:Author
    },
    {
        path: '/about', 
        name: 'About', 
        component:About
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
export default router
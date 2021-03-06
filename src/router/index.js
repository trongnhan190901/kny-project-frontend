import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Author from '@/views/Author.vue'
import About from '@/views/About.vue'
import Anime from '@/views/Anime.vue'
import UserLogin from "@/views/UserLogin.vue";
import { useAuthStore } from "@/stores/auth.store";

const redirectIfLoggedIn = (_to, _from) => {
	if (useAuthStore().isUserLoggedIn) {
		return {
			name: "profile",
		};
	}
};

const routes= [
    {
		path: "/login",
		name: "Login",
		component: UserLogin,
		meta: {
			publicPage: true,
		},
		beforeEnter: redirectIfLoggedIn,
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("@/views/UserRegister.vue"),
		meta: {
			publicPage: true,
		},
		beforeEnter: redirectIfLoggedIn,
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("@/views/UserProfile.vue"),
	},
    {
        path: '/', 
        name: 'Home', 
        component:Home
    },
    {
        path: '/anime/:id', 
        name: 'Anime', 
        component:Anime,
        props: true,
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
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: () => import("@/views/NotFound.vue"),
	},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "vue-exact-active",
    linkActiveClass: "vue-active"
  })

  router.beforeEach((to, _from) => {
	const authRequired = !to.meta.publicPage;
	const auth = useAuthStore();

	if (authRequired && !auth.isUserLoggedIn) {
		const query = to.fullPath === "/" ? {} : { redirect: to.fullPath };
		return {
			name: "login",
			query,
		};
	}
});
  
export default router
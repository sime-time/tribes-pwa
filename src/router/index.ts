import { createRouter, createWebHistory } from "vue-router";
import Home from "~/views/Home.vue";
import SignUp from "~/views/(auth)/SignUp.vue";
import { useAuthStore } from "~/stores/auth-store";
import { storeToRefs } from "pinia";
import VerifyEmail from "~/views/(auth)/VerifyEmail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp,
    },
    {
      path: "/verify-email",
      name: "verify-email",
      component: VerifyEmail,
    },
  ],
});

// navigation guard for authentication
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   const { authenticated } = storeToRefs(authStore);

//   // routes that do NOT require authentication
//   const publicRoutes = ["/sign-in", "/sign-up", "/verify-email"];

//   // if the user is not authenticated
//   if (!authenticated.value && !publicRoutes.includes(to.path)) {
//     return next("/sign-in");
//   }

//   // if the route is an auth page AND user is authenticated
//   if (
//     (to.path === "/sign-in" || to.path === "/sign-up") &&
//     authenticated.value
//   ) {
//     return next("/");
//   }

//   // You can add more complex logic here, like role-based checks:
//   // if (to.meta.requiresAdmin && (!authStore.isAuthenticated || !authStore.user?.isAdmin)) {
//   //   return next('/'); // Or a specific forbidden page
//   // }
// });

export default router;

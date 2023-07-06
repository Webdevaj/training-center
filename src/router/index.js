import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "../views/Login.vue";
import klinika from "../views/Klinika.vue";
import dorixona from "../views/Dorixona.vue";
import shahsiydorixons from "../views/shahsiydorixona.vue";
import shahsiyklinika from "../views/shahsiyklinika.vue";
import auth from "../views/auth.vue";
import doctorauth from "../views/doctorauth.vue";
import doctorlogin from "../views/doctorlogin.vue";
import doctorinfo from "../views/doctorinfo.vue";
import speciality from "../views/speciality.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shahsiyklinika",
      name: "shahsiyklinika",
      component: () => import("../views/shahsiyklinika.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/auth.vue"),
    },

    {
      path: "/speciality",
      name: "speciality",
      component: () => import("../views/speciality.vue"),
    },
    {
      path: "/doctorinfo",
      name: "doctorinfo",
      component: () => import("../views/doctorinfo.vue"),
    },
    {
      path: "/shahsiydorixona",
      name: "shahsiydorixona",
      component: () => import("../views/shahsiydorixona.vue"),
    },
    {
      path: "/appoint",
      name: "appoint",
      component: () => import("../views/appoint.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/doctorlogin",
      name: "doctorlogin",
      component: () => import("../views/doctorlogin.vue"),
    },
    {
      path: "/doctorauth",
      name: "doctorauth",
      component: () => import("../views/doctorauth.vue"),
    },
    {
      path: "/dorixona",
      name: "dorixona",
      component: () => import("../views/Dorixona.vue"),
    },

    {
      path: "/klinika",
      name: "klinika",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Klinika.vue"),
    },
  ],
});

export default router;

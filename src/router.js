import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "users",
      component: () => import("@/views/users.vue")
    },
    {
      path: "/edit/:id",
      name: "edit-user",
      component: () => import("@/views/edit-user.vue")
    },
    {
      path: "/add",
      name: "add-user",
      component: () => import("@/views/add-user.vue")
    }
  ]
});

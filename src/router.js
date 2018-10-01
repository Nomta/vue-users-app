import Vue from "vue";
import Router from "vue-router";
import Users from "./views/users.vue";
import Edit from "@/views/edit-user.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "users",
      component: Users
    },
    {
      path: "/edit/:id",
      name: "edit-user",
      component: Edit
    },
    {
      path: "/add",
      name: "add-user",
      component: Edit
    }
  ]
});

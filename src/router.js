import Vue from "vue";
import Router from "vue-router";
import UserList from "./views/user-list.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "user-list",
      component: UserList
    },
    {
      path: "/user-form",
      name: "user-form",
      component: () =>
        import(/* webpackChunkName: "user-form" */ "./views/user-form.vue")
    }
  ]
});

<script>
export default {
  name: 'App'
}
</script>
<template>
  <div id="app" class="container">
    <div id="nav" class="my-3 text-uppercase d-flex align-items-baseline">
      <router-link to="/" class="navbar-brand text-info mr-auto">vue-users-app</router-link>
      <router-link to="/" class="text-info px-2" exact>Users</router-link> |
      <router-link to="/add" class="text-info pl-2" exact>Add profile</router-link>
    </div>
    <router-view/>
  </div>
</template>
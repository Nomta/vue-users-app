<script>
export default {
  name: 'App'
}
</script>
<template>
  <div id="app" class="container">
    <div id="nav" class="my-3 text-uppercase d-flex align-items-baseline">
      <a href="#" class="navbar-brand text-info mr-auto">vue-users-app</a>
      <router-link to="/" class="text-info px-2" exact active-class="active">Users</router-link> |
      <router-link to="/add" class="text-info pl-2" exact active-class="active">Add profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

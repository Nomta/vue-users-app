<template>
  <div id="app" class="container">
    <div id="nav" class="my-3 text-uppercase">
      <router-link to="/" class="text-info pr-1">Users</router-link> |
      <router-link to="/user-form" class="text-info p-1">Edit profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

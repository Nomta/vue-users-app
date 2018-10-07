<script>
import axios from '@/axios.js'

export default {
  name: "users-page",

  data() {
    return {
      users: [],
      props: ['id', 'firstName', 'lastName', 'phone', 'email', 'company']
    }
  },

  components: {
    'data-viewer': () => import('@/components/data-viewer')
  },

  mounted() {
    this.loadData()
  },

  methods: {
    loadData() {
      axios
        .get('/users')
        .then(response => this.users = response.data)
        .catch(error => console.error(error))
    }
  }
}
</script>

<template>
  <div class="users">
    <data-viewer 
      :title="'Пользователи'" 
      :keys="props" 
      :data="users">
    </data-viewer>
  </div>
</template>

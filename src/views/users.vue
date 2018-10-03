<script>
import axios from '@/axios.js'

export default {
  name: "users-page",

  data() {
    return {
      users: null
    }
  },

  components: {
    'user-list': () => import('@/components/user-list.vue')
  },

  mounted() {
    this.loadData()
  },

  methods: {
    remove(id) {
      
      if (!confirm('Удалить профиль?'))
        return

      axios       
        .delete('/users/' + id)
        .then(() => this.users = this.users.filter(user => user.id !== id))
    },

    loadData() {
      axios
        .get('/users')
        .then(response => this.users = response.data)
    }
  }
};
</script>

<template>
  <div class="users">    
    <keep-alive>
      <div v-if="!users" class="alert alert-info">Загрузка...</div>
      <user-list v-else :users="users" @delete="remove"></user-list>
    </keep-alive>
  </div>
</template>

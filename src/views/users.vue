<script>
import axios from '@/axios'

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
      if (confirm('Удалить профиль?'))
        axios       
          .delete('/users/' + id)
          .then(() => this.loadData())
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
    <div v-if="!users" class="alert alert-info">Загрузка...</div>
    <user-list v-else :users="users" @delete="remove"></user-list>
  </div>
</template>

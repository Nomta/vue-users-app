<script>
import axios from '@/axios.js'

export default {
  name: 'edit-user-page',

  components: {
    'user-form': () => import('@/components/user-form')
  },

  data() {
    return {
      user: null
    }
  },  

  computed: {
    id() {
      return parseInt(this.$route.params.id, 10)
    },
    url() {
      return '/users/' + this.id
    }
  },

  mounted() {
    this.loadData()
  },

  methods: {

    loadData() {
      axios
        .get(this.url)
        // загрузка данных пользователя
        .then(response => this.user = response.data)
        .catch(error => console.error(error))
    },

    saveUser(user) {
      axios
        .put(this.url, user)
        // перенаправление на главную
        .then(() => this.$router.push('/'))
        .catch(error => console.error(error))
    },

    remove(id) {
      
      if (!confirm('Удалить профиль?'))
        return

      axios       
        .delete('/users/' + id)
        // перенаправление на главную
        .then(() => this.$router.push('/'))
        .catch(error => console.error(error))
    }
  }
}
</script>
<template>
  <div class="user-form">
    <div v-if="!user" class="alert alert-info">Загрузка...</div>
    <user-form v-else :user="user" @submit="saveUser" @delete="remove"/>
  </div>
</template>
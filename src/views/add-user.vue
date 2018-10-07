<script>
import axios from '@/axios.js'

const newUser = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: '',
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'add-user-page',

  components: {
    'user-form': () => import('@/components/user-form')
  },

  data() {
    return {
      user: null
    }
  },  

  computed: {
    url() {
      return '/users/'
    }
  },

  mounted() {
    this.loadData()
  },

  methods: {

    loadData() {
      this.user = Object.assign({}, newUser)
    },

    saveUser(user) {
      // дата регистрации создается автоматически
      user.registered = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      
      axios
        .post(this.url, user)
        // перенаправление на редактирование пользователя
        .then(response => this.$router.push('/edit/' + response.data.id))
        .catch(error => console.error(error))
    }
  }
}
</script>
<template>
  <div class="user-form">
    <div v-if="!user" class="alert alert-info">Загрузка...</div>
    <user-form v-else :user="user" @submit="saveUser"/>
  </div>
</template>
<script>
import axios from '@/axios'
import UserForm from '@/components/user-form.vue'

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
    UserForm
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
      user.registered = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      
      axios
        .post(this.url, user)
      //.then(() => this.user = Object.assign({}, newUser))
      //.then(() => this.$router.push('/edit/' + user.id))
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
<template>
  <div class="user-form">
    <div v-if="!user" class="alert alert-info">Загрузка...</div>
    <user-form v-else :user="user" @submit="saveUser"/>
    <!-- <user-form v-else :user="user" @input="value => user = value"/> -->
  </div>
</template>
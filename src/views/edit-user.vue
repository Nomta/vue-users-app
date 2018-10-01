<script>
import axios from 'axios'
import UserForm from '@/components/user-form.vue'

const newUser = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
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
  name: 'edit-user-page',
  components: {
    UserForm
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
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      if (this.id) 
        axios
          .get('http://localhost:3000/users/')
          .then(response => this.user = response.data.find(user => user.id === this.id))
      else
        this.user = Object.assign({}, newUser)
    }
  }
}
</script>
<template>
  <div class="user-form">
    <div v-if="!user" class="alert alert-info">Загрузка...</div>
    <user-form v-else :user="user"/>
    <!-- <user-form v-else :user="user" @input="value => user = value"/> -->
  </div>
</template>
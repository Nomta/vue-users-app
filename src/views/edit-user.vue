<script>
import axios from '@/axios.js'
import UserForm from '@/components/user-form.vue'

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
        .then(response => this.user = response.data)
    },
    saveUser(user) {
      axios
        .put(this.url, user)
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
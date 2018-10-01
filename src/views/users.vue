<script>
import axios from 'axios'
import UserList from '@/components/user-list.vue'

export default {
  name: "users-page",
  data() {
    return {
      users: null
    }
  },
  components: {
    UserList
  },
  mounted() {
    this.loadData()
    // axios
    //   .get('http://localhost:3000/users/')
    //   .then(response => this.users = response.data)
  },
  methods: {
    linkTo(id) {
      console.log('link ' + id)
    },
    remove(id) {
      console.log('remove ' + id)

      //axios       
      // .delete('http://localhost:3000/users?id=' + id)
    },
    loadData() {
        //console.log('load');
        axios
            .get('http://localhost:3000/users')
            .then(response => this.users = response.data)
    }
  }
};
</script>

<template>
  <div class="users">    
    <div v-if="!users" class="alert alert-info">Загрузка...</div>
    <user-list v-else :users="users"></user-list>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: "users-page",

  // name: 'user-list',
  // props: {
  //   props: {
  //     type: Array,
  //     required: true
  //   }
  // },

  data() {
    return {
      users: [],
      props: ['id', 'firstName', 'lastName', 'age', 'phone', 'address']
    }
  },

  components: {
    'data-table': () => import('@/components/data-table.vue')
  },

  mounted() {
    this.loadData()
  },

  methods: {
    loadData(page) {
      axios
        .get('/users')
        .then(response => this.users = response.data)
    }
  }
};
</script>

<template>
  <div class="users">
    <data-table 
      :title="'Users'" 
      :head="props" 
      :data="users"
      @reload="loadData">
    </data-table>
  </div>
</template>

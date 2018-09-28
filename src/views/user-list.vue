<script>
import axios from 'axios'
import controlButton from '@/components/control-button.vue'

export default {
  name: "user-list",
  data() {
    return {
      users: null
    }
  },
  components: {
    controlButton
  },
  mounted() {
    axios
      .get('http://localhost:3000/users/')
      .then(response => this.users = response.data)
  }
};
</script>

<template>
  <div class="user-list">
    <div v-if="!users" class="alert alert-info">Загрузка...</div>
    <table v-else class="table table-hover bg-light">
      <thead class="bg-info">
        <tr>
          <th class="font-weight-normal">№</th>
          <th class="font-weight-normal">ФИО</th>
          <th class="font-weight-normal">Компания</th>
          <th class="font-weight-normal">Телефон</th>
          <th class="font-weight-normal">e-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th class="font-weight-normal"> {{ user.id + 1 }} </th>
          <th class="font-weight-normal"> {{ user.firstName }} {{ user.lastName }} </th>
          <th class="font-weight-normal"> {{ user.company }} </th>
          <th class="font-weight-normal"> {{ user.phone }} </th>
          <th class="font-weight-normal"> 
            {{ user.email }} 
            <div class="float-right">
              <control-button :id="user.id" title="перейти" class="mr-2">&rarr;</control-button>
              <control-button :id="user.id" title="удалить">&times;</control-button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

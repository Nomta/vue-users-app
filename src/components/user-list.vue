<script>
export default {
  name: "user-list",
  props: {
      users: {
          type: Array,
          required: true
      }
  },
  computed: {
      total() {
          return this.users.length
      }
  },
  methods: {
    remove(id) {
      this.$emit('delete', id)
    }
  }
};
</script>

<template>
    <table class="table table-hover table-striped table-borderless bg-info">
      <thead class="bg-dark text-info">
        <tr>
          <th class="font-weight-normal pl-4">№</th>
          <th class="font-weight-normal">ФИО</th>
          <th class="font-weight-normal">Компания</th>
          <th class="font-weight-normal">Телефон</th>
          <th class="font-weight-normal">e-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class=" pl-4"> {{ user.id }} </td>
          <td> {{ user.firstName }} {{ user.lastName }} </td>
          <td> {{ user.company }} </td>
          <td> {{ user.phone }} </td>
          <td class=" pr-4"> 
            {{ user.email }} 
            <div class="float-right">          
              <router-link :to="'/edit/' + user.id">
                <button class="btn btn-outline-dark btn-sm mr-2" title="редактировать">&rarr;</button>
              </router-link>
              <button class="btn btn-outline-dark btn-sm" @click="remove(user.id)" title="удалить">&times;</button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="font-weight-normal text-muted pb-3">
            Всего пользователей: {{ total }}
          </td>
        </tr>
      </tfoot>
    </table>
</template>

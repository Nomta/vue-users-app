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
    remove(id, index) {
      this.$emit('delete', id, index)
    }
  }
};
</script>

<template>
    <table class="table table-hover bg-light">
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
        <tr v-for="(user, index) in users" :key="user.id">
          <th class="font-weight-normal"> {{ user.id }} </th>
          <th class="font-weight-normal"> {{ user.firstName }} {{ user.lastName }} </th>
          <th class="font-weight-normal"> {{ user.company }} </th>
          <th class="font-weight-normal"> {{ user.phone }} </th>
          <th class="font-weight-normal"> 
            {{ user.email }} 
            <div class="float-right">          
              <router-link :to="'/edit/' + user.id">
                <button class="btn btn-outline-info btn-sm mr-2" title="редактировать">&rarr;</button>
              </router-link>
              <button class="btn btn-outline-info btn-sm" @click="remove(user.id, index)" title="удалить">&times;</button>
            </div>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="5" class="font-weight-normal text-muted pb-3">
            Всего пользователей: {{ total }}
          </th>
        </tr>
      </tfoot>
    </table>
</template>

<script>
import axios from 'axios'

export default {
  name: "user-form",
  props: {
    user: {
        type: Object,
        required: true
    }
  },
  data() {
      return {
          localUser: null
      }
  },
//   watch: {
//       localUser: {
//           deep: true,
//           handler() {
//               this.$emit('input', this.localUser)
//           }
//       }
//   },
  created() {
      this.localUser = Object.assign({}, this.user)
  },
  methods: {
      submit() {
        if (!this.localUser.registered) 
          this.localUser.registered = new Date().toLocaleString('ru', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });

        axios
          .post('http://localhost:3000/users/', this.localUser)
          .then(this.localUser = Object.assign({}, this.user))
      }
  }
}
</script>

<template>
  <div class="user-form">
    <h2 class="font-weight-normal h6 bg-info p-3 m-0 text-uppercase">Заполните профиль</h2>
    <form action="http://localhost:3000/users/" method="POST" class="jumbotron bg-light py-5">

      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="firstName" class="col-form-label col-md-2">Имя</label>
        <div class="col-md-10">
            <input type="text" v-model="localUser.firstName" class="form-control w-100">
        </div>
      </div>

      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="lastName" class="col-form-label col-md-2">Фамилия</label>
        <div class="col-md-10">
            <input type="text" v-model="localUser.lastName" class="form-control w-100">
        </div>
      </div>

      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Возраст</label>
        <div class="col-md-10">
            <input type="text" v-model="localUser.age" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Место работы</label>
        <div class="col-md-10">
            <input type="text" v-model="localUser.company" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Адрес</label>
        <div class="col-md-10">
            <input type="text" v-model="localUser.address" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Телефон</label>
        <div class="col-md-10">
            <input type="text" v-model="localUser.phone" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">e-mail</label>
        <div class="col-md-10">
            <input type="text" v-model="localUser.email" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Расскажите немного о себе:</label>
        <div class="col-md-10">
            <textarea rows="6" v-model="localUser.description" class="form-control w-100"></textarea>
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Фото</label>
        <!-- <div class="col"><input type="file" v-model="localUser.picture" class="form-control"></div> -->
        <button type="submit" @click.prevent="submit" class="btn btn-info float-right mx-3">Сохранить</button>
      </div>

    </form>
  </div>
</template>

<script>
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
          localUser: null,
          userId: this.$route.params.id,
          statusList: ['guest', 'user', 'admin']
      }
  },
  components: {
      'datepicker': () => import('@/components/datepicker.vue'),
      'avatar-uploader': () => import('@/components/avatar-uploader.vue'),
      'text-editor': () => import('@/components/text-editor.vue')

  },
  created() {
      this.localUser = Object.assign({}, this.user)
  },
  methods: {
      submit() {
        this.$emit('submit', this.localUser)
      },
      remove() {
        this.$emit('delete', this.localUser.id)
      }
  }
}
</script>

<template>
  <div class="user-form">
    <h2 class="font-weight-normal h6 bg-dark text-light p-3 m-0 text-uppercase">Заполните профиль</h2>
    <form action="http://localhost:3000/users/" method="POST" class="jumbotron bg-light py-5">

      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="firstName" class="col-form-label col-md-2">Имя</label>
        <div class="col-md-10">
            <input type="text" v-model.lazy="localUser.firstName" class="form-control w-100">
        </div>
      </div>

      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="lastName" class="col-form-label col-md-2">Фамилия</label>
        <div class="col-md-10">
            <input type="text" v-model.lazy="localUser.lastName" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Место работы</label>
        <div class="col-md-10 mb-4">
            <input type="text" v-model.lazy="localUser.company" class="form-control w-100">
        </div>
      </div>

      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Возраст</label>
        <div class="col-md-5">
            <input type="text" v-model.lazy="localUser.age" class="form-control w-25">
        </div>
        <label for="" class="col-form-label col-md-1">Статус</label>
        <select class="form-control col-md-3 mx-md-3 mb-md-4" v-model.lazy="localUser.accessLevel">
          <option v-for="status in statusList" :key="status">
            {{ status }}
          </option>
        </select>
    </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Телефон</label>
        <div class="col-md-10">
            <input type="text" v-model.lazy="localUser.phone" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">e-mail</label>
        <div class="col-md-10">
            <input type="email" v-model.lazy="localUser.email" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Адрес</label>
        <div class="col-md-10 mb-md-4">
            <input type="text" v-model.lazy="localUser.address" class="form-control w-100">
        </div>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Дата регистрации</label>
        <datepicker class="col-md-10 mb-md-4" v-model.lazy="localUser.registered">
        </datepicker>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Биография</label>
        <text-editor class="col-md-10 mb-4" v-model.lazy="localUser.about"></text-editor>
      </div>
      
      <div class="form-group row px-2 px-md-4 px-lg-5">
        <label for="" class="col-form-label col-md-2">Фото</label>
        <avatar-uploader v-model="localUser.picture" class="col-md-10"></avatar-uploader>
      </div> 

      <div class="form-group row mb-3 px-2 px-md-4 px-lg-5 d-flex justify-content-end"> 
        <button type="button" 
            v-if="userId"
            @click.prevent="remove" 
            class="btn btn-danger float-right ml-md-4 col-md-2">
            Удалить
        </button>
        <button type="submit" 
            @click.prevent="submit" 
            class="btn btn-dark float-right ml-md-4 col-md-2">
            Сохранить
        </button>
      </div>
    </form>
  </div>
</template>

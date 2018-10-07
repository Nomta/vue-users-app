<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, minLength, numeric, between, email } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)

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
          localUser: {},
          // определяет, что это форма на редактирование
          // уже существующего пользователя
          userId: this.$route.params.id,
          statusList: ['guest', 'user', 'admin'],
          // для валидации
          submitStatus: ''
      }
  },
  components: {
      'datepicker': () => import('@/components/datepicker.vue'),
      'avatar-uploader': () => import('@/components/avatar-uploader.vue'),
      'text-editor': () => import('@/components/text-editor.vue'),
      // относительные пути, т.к. эти компоненты относятся к 'user-form'
      // и используются только с ним
      'form-input': () => import('./form-input.vue'),
      'form-lead': () => import('./form-lead.vue')

  },  
  validations: {
      // валидируемые поля
      localUser: { 
        firstName: { required, minLength: minLength(2) },
        lastName: { required, minLength: minLength(2) },
        age: { numeric, between: between(18, 100) },
        email: { required, email }
      }
  },
  created() {
      // копирование объекта пользователя
      // для локальной работы с ним
      this.localUser = Object.assign({}, this.user)
  },
  methods: {
    
      submit() {
        if (this.$v.$invalid) {
            this.submitStatus = 'ERROR'
            return
        }
        
        this.submitStatus = 'OK'
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

    <div class="jumbotron bg-light py-5">

      <template v-if="userId">
        <form-lead
          :title="`${localUser.firstName} ${localUser.lastName}`"
          :picture="localUser.picture"
          :subInfo="localUser.phone">
        </form-lead>
        <hr class="my-5">
      </template>

      <form action="http://localhost:3000/users/" method="POST" class="">

        <p class="alert alert-danger" v-if="$v.$invalid && submitStatus === 'ERROR'">
          Пожалуйста, заполните форму. Возможно, не все поля заполнены правильно 
          или пропущены поля, обязательные для заполнения
        </p>

        <form-input 
          :label="'Имя *'" 
          v-model="localUser.firstName" 
          :errorStatus=" $v.localUser.firstName.$invalid && submitStatus === 'ERROR' ">
          <p class="error text-danger" 
            v-if="!$v.localUser.firstName.minLength && submitStatus === 'ERROR'">
            В имени должно быть не менее {{$v.localUser.firstName.$params.minLength.min}} символов.
          </p>
        </form-input>

        <form-input 
          :label="'Фамилия *'" 
          v-model="localUser.lastName" 
          :errorStatus=" $v.localUser.lastName.$invalid && submitStatus === 'ERROR' ">
          <p class="error text-danger" 
            v-if="!$v.localUser.lastName.minLength && submitStatus === 'ERROR'">
            В имени должно быть не менее {{$v.localUser.lastName.$params.minLength.min}} символов.
          </p>
        </form-input>

        <form-input 
          :label="'Место работы'" 
          v-model="localUser.company">
        </form-input>

        <div class="form-group row px-2 px-md-4 px-lg-5">
          <label for="" class="col-form-label col-md-2">Возраст</label>
          <div class="col-md-5">
              <input type="text" 
                v-model.lazy="localUser.age" 
                class="form-control w-25" 
                :class="{ 'border border-danger': $v.localUser.age.$invalid && submitStatus === 'ERROR' }">
          </div>
          <label for="" class="col-form-label col-md-1">Статус</label>
          <select class="form-control col-md-3 mx-md-3 mb-md-4" v-model.lazy="localUser.accessLevel">
            <option v-for="status in statusList" :key="status">
              {{ status }}
            </option>
          </select>
          <p class="error text-danger" v-if="$v.localUser.age.$invalid && submitStatus === 'ERROR'">
            Поле "Возраст" заполнено некорректно
          </p>
      </div>

        <form-input 
          :label="'Телефон'" 
          v-model="localUser.phone">
        </form-input>

        <form-input 
          :label="'e-mail *'" 
          v-model="localUser.email" 
          :errorStatus=" $v.localUser.email.$invalid && submitStatus === 'ERROR' ">
          <p class="error text-danger" 
            v-if="!$v.localUser.email.email && submitStatus === 'ERROR'">
            Невалидный e-mail адрес
          </p>
        </form-input>

        <form-input 
          :label="'Адрес'" 
          v-model="localUser.address">
        </form-input>

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

        <hr class="mt-5">
        <p v-if="!userId" class="pl-5 text-muted">
          * Поля, помеченные звездочкой, обязательны для заполнения
        </p>

        <div class="row mt-5 py-3 px-2 px-md-4 px-lg-5 d-flex justify-content-end"> 
          <button type="button" 
              v-if="userId"
              @click.prevent="remove" 
              class="btn btn-danger float-right ml-md-4 col-md-2">
              Удалить
          </button>
          <button type="submit" 
              @click.prevent="submit" 
              class="btn btn-dark float-right ml-md-4 col-md-2 mr-md-3">
              Сохранить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

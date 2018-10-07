<script>
export default {
    // аватар и отдельные данные пользователя вверху формы
    name: 'form-lead',
    props: {
        title: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        subInfo: {
            type: String,
            required: false
        }
    }
}
</script>
<template>
    <div class="user-form-header row px-2 px-md-4 px-lg-5 mb-5 align-items-end">
        <img 
          :src="picture" 
          :alt=" picture ? '' : 'Добавить фото' " 
          class="img-thumbnail col-md-2 ml-2" 
          height="auto">
        <h3 class="ml-md-5"> 
          {{ title }}
        </h3>
        <span v-if="subInfo" class="h4 px-3 ml-auto"> {{ subInfo }} </span> 
    </div>
</template>

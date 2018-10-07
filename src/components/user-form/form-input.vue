<script>
// повторяющийся элемент формы
export default {
    name: 'form-input',
    props: {
        value: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        // если true, будет передано предупреждение
        // (отображается через слот)
        errorStatus: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        change(value) {
            this.$emit('input', value)
        }
    }
}
</script>
<template>
    <div class="form-group row px-2 px-md-4 px-lg-5">
      <label for="" class="col-form-label col-md-2"> {{ label }} </label>
      <div class="col-md-10">
          <input type="text" 
            v-model.lazy="value" 
            class="form-control w-100"
            :class="{'border border-danger': errorStatus}"
            @input="change($event.target.value)">
      </div>
      <slot></slot>
    </div>
</template>

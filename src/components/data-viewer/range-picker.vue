<script>
export default {
    name: 'range-picker',
    props: {
        value: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            default: 5
        },
        max: {
            type: Number,
            default: 100
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
    <input type="range" 
        :min="min" :max="max" :value="value" 
        class="custom-range w-25 mb-4" 
        @input="change($event.target.value)">
</template>

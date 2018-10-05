<script>
import { VueEditor } from 'vue2-editor'
export default {
    name: 'text-editor',
    components: {
        VueEditor
    },
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            content: ''
        }
    },
    watch: {
        content() {
            this.$emit('input', this.content)
        }
    },
    created() {
        this.content = this.value
    }
}
</script>
<template>
    <div class="text-editor">
        <vue-editor v-model="content"></vue-editor>
    </div>
</template>

<style>
    .ql-editor {
        background-color: #fff;
    }
</style>


<script>
export default {
    name: 'create-table',
    components: {
        'table-form': () => import('@/components/table-form.vue')
    },
    data() {
        return {
            props: []
        }
    },
    methods: {
        setProps(props) {
            this.props = props
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <div class="create-table">
       <table-form @submit="setProps"></table-form>
    </div>
</template>

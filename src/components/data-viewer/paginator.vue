<script>
export default {
    name: 'paginator',
    model: {
        prop: 'page'
    },
    props: {
        page: {
            type: Number,
            required: true
        },
        rows: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.total / this.rows)
        }
    },
    methods: {
        prevPage() {
            if (this.page > 1)
                this.linkToPage(this.page - 1)
        },
        nextPage() {
            if (this.page < this.pages)
                this.linkToPage(this.page + 1)
        },
        linkToPage(page) {
            this.$emit('input', page)
        }
    }
}
</script>
<template>
    <nav>
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: page === 1 }">
                <a href="#" class="page-link" @click.prevent="prevPage">&laquo;</a>
            </li>
            <li class="page-item" 
                :class="{ active: page === pageNum }" 
                v-for="pageNum in pages" 
                :key="pageNum">
                <a href="#" class="page-link" @click.prevent="linkToPage(pageNum)"> 
                    {{ pageNum }} 
                </a>
            </li>
            <li class="page-item" :class="{ disabled: page === pages }">
                <a href="#" class="page-link" @click.prevent="nextPage">&raquo;</a>
            </li>
        </ul>
    </nav>
</template>

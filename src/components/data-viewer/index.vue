<script>
export default {
    name: 'data-viewer',

    components: {
        // относительные пути, т.к. все вместе это готовый переносимый виджет
        'range-picker': () => import('./range-picker.vue'), 
        'data-table': () => import('./data-table.vue'),
        'table-form': () => import('./table-form.vue'),
        'paginator': () => import('./paginator.vue')
    },

    model: {
        prop: 'keys'
    },
    
    props: {
        // заголовок таблицы
        title: {
            type: String,
            required: true
        },
        // поля, с которыми будет построена таблица
        keys: {
            type: Array,
            default: () => ['id']
        },
        // данные
        data: {
            type: Array,
            required: true
        },
        // ссылка-префикс для перехода на редактирование данных
        link: {
            type: String,
            required: false
        }
    },

    data() {
        return {
            rows: 10,
            page: 1,
            filteredKeys: [],
            tableForm: false
        }
    },

    computed: {
        total() {
            return this.data.length
        },

        filteredRows() {
            return this.data.filter((_, index) => {
                const startIndex = (this.page - 1) * this.rows
                const finalIndex = startIndex + this.rows
                return startIndex <= index && index < finalIndex
            })
        }
    },

    watch: {
        rows() {
            this.page = 1
        },

        filteredKeys: {
            deep: true,
            handler() {
                this.$emit('input', this.filteredKeys)
            }
        }
    },

    created() {
        this.filteredKeys = [...this.keys]
    },

    methods: {

        changeTable(props) {
            this.tableForm = false
            this.filteredKeys = props
        },
        
        showTableForm() {
            // переключает отображение компонентов основной таблицы и 'table-form'
            this.tableForm = true
        }
    }
}
</script>
<template>
    <div class="users">
        <table-form v-if="tableForm" @submit="changeTable"></table-form>
        <div v-else-if="!data.length" class="alert alert-light">Загрузка...</div>
            
        <main v-else class="card border-0">
            <header class="card-header bg-dark text-light pt-3">
                <button @click="showTableForm" 
                    class="btn btn-primary float-right mt-4">
                    Изменить набор данных
                </button>
                <h4 class="text-uppercase"> {{ title }} </h4>
                <p> Всего: {{ total }} </p>
            </header>
    
            <div class="card-body bg-light pb-2">
                <div class="form-group">
                    <range-picker v-model.number="rows"></range-picker>
                    <p class="form-control-static">Выбрано строк: {{ rows }} </p>
                </div>
            </div>

            <data-table :keys="filteredKeys" :rows="filteredRows" :link="link"></data-table>
    
            <footer class="card-footer px-4 pt-4">
                <paginator v-model.number="page" :rows="rows" :total="total"></paginator>
            </footer>
        </main>
            
    </div>
</template>

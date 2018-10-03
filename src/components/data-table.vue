<script>
import rangePicker from '@/components/range-picker.vue'
import paginator from '@/components/paginator.vue'

export default {
    name: 'data-table',
    components: {
        rangePicker, 
        paginator
    },
    props: {
        title: {
            type: String,
            required: true
        },
        head: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            rows: 10,
            page: 1
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
        }
    },
    methods: {
        updateData() {
            this.$emit('reload')
        }
    }
}
</script>
<template>
    <div class="users">
        <div v-if="!data.length" class="alert alert-light">Загрузка...</div>

        <div v-else class="card border-0">
            <header class="card-header bg-dark text-light">
                <button @click="updateData" 
                    class="btn btn-sm btn-primary text-uppercase float-right mt-4">
                    Обновить
                </button>
                <h4 class="text-uppercase"> {{ title }} </h4>
                <p> Всего: {{ total }} </p>
            </header>

            <div class="card-body bg-light">
                <div class="form-group">
                    <range-picker v-model.number="rows"></range-picker>
                    <p class="form-control-static">Выбрано строк: {{ rows }} </p>
                </div>
            </div>

            <table class="table table-striped table-borderless bg-light">
                <thead class="bg-dark text-light">
                    <tr>
                        <th v-for="item in head" :key="item"> {{ item }} </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in filteredRows" :key="row.id">
                        <td v-for="item in head" :key="item"> {{ row[item] }} </td>
                        <td>
                            <router-link :to="'/edit/' + row.id">
                                <button class="btn btn-outline-dark btn-sm mr-2" title="редактировать">
                                    &rarr;
                                </button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="form-group px-4 pt-4">
                <paginator v-model.number="page" :rows="rows" :total="total"></paginator>
            </div>

        </div>
    </div>
</template>

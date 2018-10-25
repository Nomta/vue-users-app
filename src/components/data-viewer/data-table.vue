<script>
export default {
    name: 'data-table',
    props: {
        keys: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        link: {
            type: String,
            required: false
        }
    }

}
</script>
<template>
    
    <table class="table table-striped table-borderless bg-light">
        <thead class="bg-dark text-light">
            <tr>
                <th class="pl-md-4" v-for="key in keys" :key="key"> {{ key }} </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row.id">
                <td class="pl-md-4" v-for="key in keys" :key="key"> {{ row[key] }} </td>
                <td>
                    <router-link v-if="link" :to="`${link}${row.id}`">
                        <button class="btn btn-outline-dark btn-sm mr-2" title="редактировать">
                            &rarr;
                        </button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    
</template>

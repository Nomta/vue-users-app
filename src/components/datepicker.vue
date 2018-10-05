<script>
import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru.js'
import 'flatpickr/dist/flatpickr.css'

export default {
    name: 'datepicker',
    props: {
        value: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: 'Выберите дату'
        }
    },
    data() {
        return {
            datepicker: null
        }
    },
    watch: {
        //value: 'updateDatepicker'
        value() { 
            this.updateDatepicker() 
        }
    },
    mounted() {
        this.initCalendar()
    },
    methods: {
        updateDatepicker() {
            if (this.datepicker) {
                this.datepicker.setDate(this.value)
            }
        },
        initCalendar() {
            this.datapicker = flatpickr(this.$refs.datepicker, {
                locale: Russian,
                dateFormat: 'd.m.Y',
                onChange: (_, dateString) => this.$emit('input', dateString)
            })
        }
    }
}
</script>
<template>
    <div class="datepicker">
        <input type="text" 
            class="form-control" 
            ref="datepicker" 
            :value="value" 
            :placeholder="placeholder">
    </div>
</template>

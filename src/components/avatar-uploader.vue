<script>
import axios from 'axios'

export default {
    name: 'avatar-uploader',

    model: {
        prop: 'picture'
    },

    props: {
        picture: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            url: 'https://api.imgur.com/3/image',
            auth: 'Client-ID 3bef0b8892d4b04'
        }
    },

    methods: {

        selectImage() {
            this.$refs.fileUploader.click()
        },

        setAvatar(picture) {
            this.$emit('input', picture)
        },

        uploadImage() {
            const data = new FormData()
            data.append('image', this.$refs.fileUploader.files[0])

            const config = {
                headers: {
                    Authorization: this.auth
                }
            }

            axios
                .post(this.url, data, config)        
                .then(response => response.data)
                .then(response => {
                    this.setAvatar(response.data.link)
                    this.$refs.fileUploader.value = ''
                })
                .catch(error => console.error(error))
        }
    }
}
</script>
<template>
    <div class="avatar-uploader">
        <div class="row">
            <div class="col-md-4">
                <input type="file" hidden class="hidden" ref="fileUploader" @change="uploadImage">
                <button type="button" class="btn btn-dark btn-block" @click="selectImage">Выбрать файл</button>
            </div>
            <div class="col-md-8">
                <input type="text" class="form-control" v-model="picture" readonly>
            </div>
        </div>
    </div>
</template>

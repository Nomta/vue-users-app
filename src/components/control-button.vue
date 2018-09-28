<script>
import axios from 'axios'

export default {
  props: [
    'id'
  ],
  methods: {
    remove() {
      axios       
       .delete('http://localhost:3000/users?id=' + this.id)

    }
  }
}
</script>
<template>
  <button class="btn btn-outline-info btn-sm" @click="remove(id)">
    <slot></slot>
        <!-- <span aria-hidden="true">&times;</span> -->
  </button>
</template>
<style scoped>

</style>

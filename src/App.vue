<template>
  <div id="app">
    <div class="dell" @click="handleClick">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        message: 'hello world'
      }
    },
    methods: {
      handleClick () {
        this.message = 'bye world'
      }
    }
  }
</script>

<style scoped>
  .dell {
    color: red;
  }
</style>

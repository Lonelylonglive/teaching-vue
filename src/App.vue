<template>
  <div id="app">
    <div class="dell" @click="handleClick">
<<<<<<< HEAD
      {{message}}
=======
        {{message}}
>>>>>>> 20171214-yjm-project
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        message: "hello"
      }
    },
    methods: {
      handleClick () {
        this.message = "bye"
      }
    }
  }
</script>

<style scoped>
  .dell {
    color: red;
  }
</style>

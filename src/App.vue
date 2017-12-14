<template>
  <div id="app">
    <div class="dell" @click="handleClick">
      {{message}}
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

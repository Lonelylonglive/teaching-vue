<template>
  <div id="app">
    <div class="dell">
      <button @click="handleClick">点击加1</button>
      {{count}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        count: 1
      }
    },
    methods: {
      handleClick () {
        this.count ++
      }
    }
  }
</script>

<style scoped>
  .dell {
    color: red;
  }
</style>

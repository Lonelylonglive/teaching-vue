<template>
  <div id="app">
    <div class="dell" @click="handleClick">
        <button @click="handleClick">点我+1</button>
        {{count}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        count: 0
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

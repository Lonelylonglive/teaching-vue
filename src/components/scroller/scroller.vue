<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: ["data"],
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      data () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  }
</script>

<style>

</style>

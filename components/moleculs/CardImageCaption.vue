<template>
  <div>
    <img
      :src="src"
      class="img-fluid w-100 mb-2 main-radius"
    >
    <h5 class="mt-2 mb-0"><b>{{title}}</b></h5>
    <p>{{caption}}</p>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default() {
        return ''
      },
    },
    title: {
      type: String,
      default() {
        return ''
      },
    },
    caption: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>

<style>
</style>
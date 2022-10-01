<template>
  <span class="px-3 py-2 full-radius bg-secondary small fw-medium text-secondary bg-opacity-10">{{text}}</span>
</template>

<script>
export default {
  name: 'KLabel',
  props: {
    text: {
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
<template>
  <button
    class="btn py-2 px-4 fw-medium"
    :class="[getRounded, getVariant]"
  >
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'KButton',
  props: {
    variant: {
      validator(value) {
        return [
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
          'info',
          'white',
        ].includes(value)
      },
      type: String,
      default() {
        return 'primary'
      },
    },
    title: {
      type: String,
      default() {
        return 'button'
      },
    },
    isRounded: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    getVariant() {
      return {
        'btn-primary': this.variant === 'primary',
        'btn-secondary': this.variant === 'secondary',
        'btn-success': this.variant === 'success',
        'btn-info': this.variant === 'info',
        'btn-warning': this.variant === 'warning',
        'btn-danger': this.variant === 'danger',
        'btn-light': this.variant === 'white',
      }
    },
    getRounded() {
      return {
        'full-radius': this.isRounded,
      }
    },
  },
}
</script>
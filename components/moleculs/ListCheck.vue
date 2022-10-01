<template>
  <ul
    class="mt-3 mb-4 me-lg-5"
    :class="getVariant"
  >
    <li
      v-for="(item, index) in data"
      :key="index"
      :class="{'border-primary bg-primary-light bg-opacity-25': withBorderPrimary}"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListCheck',
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    withBorderPrimary: {
      type: Boolean,
      default() {
        return false
      },
    },
    variant: {
      type: String,
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      },
      default() {
        return 'primary'
      },
    },
  },
  computed: {
    getVariant() {
      return {
        'list-check-2': this.variant === 'primary',
        'list-check': this.variant === 'secondary',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list-check {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding-left: 40px;
    position: relative;
    margin-bottom: 12px;
    font-weight: 500;

    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background-image: url(https://kiriminaja.com/assets/home-2/shape.svg);
      background-size: 20px;
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 10px);
      left: 0.75rem;
    }
  }
}
.list-check-2 {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background: #fff;
    padding: 0.75rem 0.75rem 0.75rem 2.75rem;
    border-radius: 0.5rem;
    border: 2px solid rgba(0, 0, 0, 0.125);
    position: relative;
    margin-bottom: 12px;
    font-weight: 500;

    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background-image: url(https://kiriminaja.com/assets/home-2/shape.svg);
      background-size: 20px;
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 10px);
      left: 0.75rem;
    }
  }
}
</style>
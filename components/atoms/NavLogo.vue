<template>
  <NuxtLink
    :to="href"
    aria-current="page"
    class="navbar-brand nuxt-link-exact-active nuxt-link-active"
    :class="customClass"
  >
    <img
      :src="src"
      :alt="alt"
      width="145px"
    />
  </NuxtLink>
</template>

<script>
export default {
  name: 'NavLogo',
  props: {
    src: {
      type: String,
      default() {
        return ''
      },
    },
    alt: {
      type: String,
      default() {
        return 'Company Logo'
      },
    },
    href: {
      type: String,
      default() {
        return ''
      },
    },
    customClass: {
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
<template>
  <div>
    <KNavbar />
    <main class="bg-light">
      <Nuxt />
    </main>
    <KFooter />
  </div>
</template>

<script>
import KNavbar from '../components/organisms/Navbar.vue'
import KFooter from '../components/organisms/Footer.vue'

export default {
  name: 'LandingLayout',
  components: {
    KNavbar,
    KFooter,
  },
}
</script>
<template>
  <nav
    id="main-navbar"
    class="navbar navbar-expand-lg navbar-fixed navbar-light bg-light"
    style="z-index: 99999"
  >
    <div class="container px-mobile-fix">
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <NavLogo
        :src="image"
        alt="Company Logo"
        href="/"
      />
      <div></div>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse mt-4 mt-lg-0"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

          <li
            v-for="route in routes"
            :key="route.title"
            class="nav-item px-md-3"
          >
            <NuxtLink
              :to="route.link"
              class="nav-link fw-medium nuxt-link-exact-active nuxt-link-active text-dark"
            >

              {{route.title}}
            </NuxtLink>
          </li>

          <li class="nav-item">
            <div class="vertical-spacer"></div>
          </li>

          <li class="nav-item me-lg-3">
            <KButton
              :is-rounded="true"
              variant="white"
              title="Daftar"
            />
          </li>
          <li
            id="try-now"
            class="nav-item d-lg-flex align-items-center"
          >
            <KButton
              :is-rounded="true"
              variant="primary"
              title="Masuk"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
import KButton from '../atoms/Button.vue'
import NavLogo from '../atoms/NavLogo.vue'
import { LogoPrimary } from '../../assets/img'

export default {
  name: 'NavbarComp',
  components: {
    KButton,
    NavLogo,
  },
  data() {
    return {
      image: LogoPrimary,
      routes: [
        {
          title: 'Beranda',
          link: '/',
        },
        {
          title: 'Tentang Kami',
          link: '/about',
        },
        {
          title: 'Integrasi API',
          link: '/api-integration',
        },
      ],
      isOpen: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-collapse.show {
}
</style>
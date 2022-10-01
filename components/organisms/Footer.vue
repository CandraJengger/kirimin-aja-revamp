<template>
  <footer
    class="main-footer py-5 pt-lg-6 text-muted"
    style="z-index:998;"
  >
    <div class="container my-lg-4 px-mobile-fix">
      <NavLogo
        :src="image"
        alt="Company Logo"
        href="/"
      />
      <div class="row justify-content-between mt-3">
        <div class="col-lg-6 pe-lg-5">
          <div class="row mb-4 mb-lg-0">
            <div class="col-lg-8">
              <h4 class="h6 mb-4">{{ footerData.companyProfile.title }}</h4>

              <div
                v-for="item in footerData.companyProfile.data"
                :key="item.text"
                class="row g-0"
              >
                <div
                  class="col-auto"
                  v-html="item.icon"
                >

                </div>
                <div class="col ps-3">
                  <p
                    v-if="!item.hasOwnProperty('type')"
                    v-text="item.text"
                  ></p>
                  <p v-if="item.type">
                    <a
                      class="text-muted"
                      :href="item.type == 'mail' ? `mailto:${item.text}`:`tel:${item.text}`"
                      v-text="item.text"
                    ></a>
                  </p>
                </div>
              </div>

              <div class="mt-3">
                <span class="h6 d-block">Terdaftar di</span>
                <a href="https://pse.kominfo.go.id/tdpse-detail/938">
                  <img
                    class="please-contrast"
                    src="https://kiriminaja.com/assets/home-2/logo-kominfo.svg"
                    height="30px"
                    alt="Penyelenggara Sertifikasi Elektronik"
                  >
                </a>
              </div>

            </div>
          </div>
        </div>
        <div class="col-lg ps-lg-5">
          <div class="row">
            <div class="col-6 col-md mb-5 mb-lg-0"><span class="h6 mb-4 d-block">{{ footerData.tautan.title }}</span>
              <ul class="footer-links mt-2">
                <li
                  v-for="item in footerData.tautan.links"
                  :key="item.text"
                  class="fw-medium"
                >
                  <NuxtLink
                    :to="item.link"
                    class=""
                    v-text="item.text"
                  >
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md mb-5 mb-lg-0"><span class="h6 mb-4 d-block">{{ footerData.kirim.title }}</span>
              <ul class="footer-links mt-2">
                <li
                  v-for="item in footerData.kirim.links"
                  :key="item.text"
                  class="fw-medium"
                >
                  <NuxtLink
                    :to="item.link"
                    class=""
                    v-text="item.text"
                  ></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-2 pt-lg-5 rowx">
        <div class="col-lg text-lg-end order-lg-1">
          <div class="mb-4 mb-lg-0">
            <a
              v-for="item in footerData.socialMedia"
              :key="item.link"
              :href="item.link"
              target="_blank"
              class="text-muted me-3"
              v-html="item.icon"
            >
            </a>

            <button
              class="ms-2 color-toggle"
              type="button"
            >
              <span>Dark</span>
              <span>Light</span>
            </button>
          </div>
        </div>
        <div class="col mb-md-0 order-lg-0">
          <p class="font-weight-normal font-small mb-0">Copyright © <span class="current-year">2022</span> <a
              href="https://kiriminaja.com"
              aria-current="page"
              class="fw-medium nuxt-link-exact-active nuxt-link-active"
            >KiriminAja.com</a>. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NavLogo from '../atoms/NavLogo.vue'
import { LogoPrimary } from '../../assets/img'
import footer from '../../constants/footer'

export default {
  name: 'FooterComp',
  components: {
    NavLogo,
  },
  data() {
    return {
      image: LogoPrimary,
      routes: [
        {
          title: 'Beranda',
          link: '/home',
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
      footerData: footer,
    }
  },
}
</script>

<style>
</style>
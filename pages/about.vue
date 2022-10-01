<template>
  <div>
    <KSectionWrapper custom-class-wrapper="pb-0 pb-lg-0">
      <div class="container mt-2 mb-lg-5 px-mobile-fix">
        <div class="me-lg-8">
          <div>
            <div class="section-header py-lg-5 text-lg-center">
              <div class="mx-lg-5">
                <div class="mx-lg-5">
                  <h1 class="h1 mb-3"><span class="text-primary">Memberi solusi teknologi</span> untuk kebutuhan supply chain yang mempermudah ekosistem bisnis Indonesia berkembang.</h1>
                  <div
                    class="lead font-weight-medium"
                    style="font-weight: 400;"
                  >Pengiriman untuk UMKM,
                    Pebisnis Online, dan seluruh masyarakat Indonesia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://storage.googleapis.com/tprt0ezsggqjornc7nf1wwluvgulhr/team-image.jpg"
          alt=""
          class="mt-3 img-fluid w-100 main-radius"
        >
        <div class="mt-5 row g-0">
          <div class="col-lg-6">
            <h4 class="h2 mb-lg-4">Our Mission</h4>
            <div class="me-lg-8">
              <ListCheck
                :data="mission"
                :with-border-primary="true"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <p class="lead"><span class="text-primary-light fw-medium">KiriminAja</span>
              sebuah platform yang memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai
              kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang dikembangkan oleh PT Selalu
              Siap Solusi.</p>
            <p class="lead"><span class="fw-medium">KiriminAja</span> memberikan solusi untuk UMKM, pebisnis
              online, serta seluruh masyarakat Indonesia yang ingin melakukan pengiriman paket.</p>
            <p class="lead"><span class="fw-medium">KiriminAja</span> menawarkan:</p>
            <ul class="lead">
              <li>Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.</li>
              <li>Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan dana harian dan sistem
                pengambilan paket dirumah oleh ekspedisi.
              </li>
              <li>Layanan pengiriman paket non-cod dengan sistem pengambilan paket dirumah oleh ekspedisi.
              </li>
              <li>Platform yang dapat membantu pebisnis online mengendalikan dan mengelola bisnisnya dengan
                lebih baik.
              </li>
            </ul>
            <p class="lead">Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen untuk
              berkontribusi pada perekonomian Indonesia, dengan cara memberikan solusi serta kemudahan bagi
              para pebisnis online supaya bisnisnya terus berkembang.</p>
          </div>
        </div>
      </div>
    </KSectionWrapper>
    <KSectionWrapper
      title="Our Teams"
      title-size="h2"
      custom-class-title-wrapper="pt-lg-0"
      custom-class-wrapper="py-0 py-lg-0"
    >
      <div class="row">
        <div
          v-for="item in data.data"
          :key="item.name"
          class="col-6 col-md-4 mb-4 col-centered"
        >
          <CardImageCaption
            :src="item.img"
            :title="item.name"
            :caption="item.position"
          />

        </div>
      </div>
    </KSectionWrapper>
    <CtaCareers />
    <CtaSection />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import KSectionWrapper from '../components/templates/SectionWrapper.vue'
import CtaSection from '../components/templates/CtaSection.vue'
import CtaCareers from '../components/templates/CtaCareers.vue'
import ListCheck from '../components/moleculs/ListCheck.vue'
import CardImageCaption from '../components/moleculs/CardImageCaption.vue'

export default {
  name: 'AboutPage',
  components: {
    CtaSection,
    KSectionWrapper,
    ListCheck,
    CtaCareers,
    CardImageCaption,
  },
  layout: 'landing',
  data() {
    return {
      mission: [
        'Meningkatkan penjualan produk UMKM secara online.',
        'Memberikan inovasi-inovasi terbaru dan terbaik.',
        'Memberikan pelayanan yang maksimal dan optimal untuk pelanggan.',
        'Mengenalkan KiriminAja seluas-luasnya ke seluruh Indonesia.',
      ],
    }
  },
  computed: {
    data() {
      return this.$store.state.landing.about.data
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    ...mapActions({
      fetchData: 'landing/about/fetchLanding',
    }),
  },
}
</script>

<style>
</style>
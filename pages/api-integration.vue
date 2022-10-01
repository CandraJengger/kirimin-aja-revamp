<template>
  <div>
    <PraktisinSection />

    <KSectionWrapper
      title="Dipercayai oleh"
      title-size="h2"
      sub-title="KirimiAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan UMKM di seluruh Indonesia"
      custom-class-title-wrapper="pb-lg-0"
    >
      <div v-if="!!data.clients">

        <MultiplePreviewSlider :data="clients" />
      </div>

    </KSectionWrapper>

    <KSectionWrapper
      title="Kurir Terhubung"
      title-size="h2"
      sub-title="KiriminAJA selalu terhubung dengan expedisi yang terbaik di Indonesia, dan akan terus bertambah lagi "
      custom-class-title-wrapper="pb-lg-0"
    >
      <div v-if="!!data.expedition">

        <MultiplePreviewSlider :data="data.expedition" />
      </div>

    </KSectionWrapper>

    <KSectionWrapper
      title="Tanpa Biaya Apapun"
      title-size="h2"
      sub-title="Sebuah solusi optimal sehingga Anda tidak perlu pusing lagi memikirkan biaya berlangganan API"
      custom-class-title-wrapper="pb-lg-0"
    >
      <div class="row mt-3 justify-content-center">
        <div class="col-lg-4">

          <CardPricing />
        </div>
      </div>

    </KSectionWrapper>
    <CtaSection />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CtaSection from '../components/templates/CtaSection.vue'
import PraktisinSection from '../components/organisms/Section/PraktisinSection.vue'
import KSectionWrapper from '../components/templates/SectionWrapper.vue'
import MultiplePreviewSlider from '../components/organisms/Slider/MultiplePreviewSlider'
import CardPricing from '../components/moleculs/CardPricing.vue'

export default {
  name: 'IntegrationApiPage',
  components: {
    CtaSection,
    PraktisinSection,
    KSectionWrapper,
    MultiplePreviewSlider,
    CardPricing,
  },
  layout: 'landing',
  computed: {
    data() {
      return this.$store.state.landing.home.data
    },
    clients() {
      return this.$store.state.landing.home.data.clients?.map(
        (client, index) => ({
          image: client,
          name: `client ${index}`,
        })
      )
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    ...mapActions({
      fetchData: 'landing/home/fetchLanding',
    }),
  },
}
</script>

<style>
</style>
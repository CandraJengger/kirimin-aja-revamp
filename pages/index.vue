<template>
  <div>
    <KSectionWrapper
      custom-class-title-wrapper="pb-lg-0"
      custom-class-wrapper="py-0 py-lg-0 with-gradient pt-lg-5 my-lg-4"
    >
      <HeroSlider :data="data.hero" />
    </KSectionWrapper>

    <div v-if="!!data.expedition">
      <MultiplePreviewSlider :data="data.expedition" />
    </div>

    <KSectionWrapper
      title="Untuk Semua Kebutuhan Pengiriman Paketmu"
      custom-class-title-wrapper="pb-lg-0"
    >
      <div class="row g-3 g-lg-4 mt-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="col-lg-4"
        >
          <CardFeature
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>
    </KSectionWrapper>

    <KSectionWrapper
      title="Kirim Paket Makin Singkat"
      sub-title="Masih kurang? Yuk explore sekarang biar ngga penasaran"
    >
      <div
        v-if="!!data.advantages"
        class="row"
      >
        <div class="col-lg-7">
          <img
            :src="data.advantages.banner"
            alt="Banner"
            class="img-fluid"
          >
        </div>
        <div class="col-lg">
          <ListCheck :data="data.advantages.solutions" />
        </div>
      </div>
    </KSectionWrapper>
    <CtaSection />

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import featuresData from '../constants/features'

import KSectionWrapper from '../components/templates/SectionWrapper.vue'
import CtaSection from '../components/templates/CtaSection.vue'
import CardFeature from '../components/moleculs/CardFeature.vue'
import ListCheck from '../components/moleculs/ListCheck.vue'
import HeroSlider from '../components/organisms/Slider/HeroSlider.vue'
import MultiplePreviewSlider from '../components/organisms/Slider/MultiplePreviewSlider'

export default {
  name: 'IndexPage',
  components: {
    KSectionWrapper,
    CardFeature,
    ListCheck,
    CtaSection,
    HeroSlider,
    MultiplePreviewSlider,
  },
  layout: 'landing',
  data() {
    return {
      features: featuresData,
    }
  },
  computed: {
    data() {
      return this.$store.state.landing.home.data
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

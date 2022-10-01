<template>
  <div class="row align-items-center">
    <div class="col-lg-5 order-lg-0">
      <div class="product-hero-margin ms-lg-4">
        <div class="mx-lg-4">
          <div class="slider-exodus text-center">
            <img
              :alt="title"
              width="437px"
              :src="image"
              class="img-fluid"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7 order-lg-1">
      <div class="wrapper me-lg-8 mt-4 mt-lg-5 mb-lg-5">
        <KLabel :text="`#${index} ${category}`" />
        <h2 class="h2 me-lg-7 mt-2 mt-lg-3">{{ title }}</h2>
        <p class="lead">{{ description }}</p>
        <ListCheck
          v-if="facilities.length !== 0"
          variant="secondary"
          :data="facilities"
        />

        <div class="divider mt-4"></div>
        <div class="mt-3 mt-lg-4">
          <div class="row">
            <div class="col-lg-auto pb-3">
              <NuxtLink
                :to="link"
                class="btn btn-primary w-100 full-radius"
              >Selengkapnya</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListCheck from '../../moleculs/ListCheck.vue'
import KLabel from '../../atoms/Label.vue'
export default {
  components: {
    ListCheck,
    KLabel,
  },
  props: {
    image: {
      type: String,
      default() {
        return ''
      },
    },
    title: {
      type: String,
      default() {
        return ''
      },
    },
    category: {
      type: String,
      default() {
        return ''
      },
    },
    link: {
      type: String,
      default() {
        return ''
      },
    },
    description: {
      type: String,
      default() {
        return ''
      },
    },
    facilities: {
      type: Array,
      default() {
        return []
      },
    },
    index: {
      type: String || Number,
      default() {
        return ''
      },
    },
  },
}
</script>

<style>
</style>
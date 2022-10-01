<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(item, index) in data"
        :key="item.title"
        class="carousel-item"
        :class="{active: index === 0}"
      >
        <HeroItem
          :image="item.img"
          :title="item.title"
          :description="item.description"
          :link="item.link"
          :category="item.category"
          :facilities="item?.facilities"
        />
      </div>

    </div>
  </div>
</template>

<script>
import HeroItem from './HeroSliderItem.vue'
export default {
  components: {
    HeroItem,
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style>
</style>
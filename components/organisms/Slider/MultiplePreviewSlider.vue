<template>
  <no-ssr>
    <!-- important to add no-ssr-->
    <div class="container">

      <carousel
        :loop="true"
        :autoplay="true"
        :dots="false"
        :nav="false"
        :responsive="{0:{items:2},600:{items:3}, 800: {items:4}, 1024: {items:6}}"
      >
        <div
          v-for="item in data"
          :key="item.name"
          class="p-4 mb-3 mb-lg-0 col-lg text-center"
        >
          <img
            :src="item.image"
            height="40px"
            :alt="item.name"
            class="img-fluid"
            style="max-height: 40px; width: auto"
          />
        </div>

      </carousel>
    </div>
  </no-ssr>
</template>
<script>
export default {
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
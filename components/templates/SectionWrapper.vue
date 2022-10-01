<template>
  <section
    class="main-wrapper bg-accent-primary bg-opacity-25 py-5 py-lg-7 mb-6"
    :class="customClassWrapper"
  >
    <div class="container px-mobile-fix">
      <div v-show="!!subTitle || !!title">
        <div
          class="section-header py-lg-5 text-lg-center"
          :class="customClassTitleWrapper"
        >
          <div class="mx-lg-8">
            <div class="mx-lg-8">
              <h3
                v-show="!!title"
                class="mb-3"
                :class="getTitleSize"
              >{{title}}</h3>
              <div
                v-show="!!subTitle"
                class="lead font-weight-medium col-lg-7 mx-auto"
                style="font-weight: 400;"
              >{{subTitle}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-4">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionWrapper',
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },
    subTitle: {
      type: String,
      default() {
        return ''
      },
    },
    customClassTitleWrapper: {
      type: String,
      default() {
        return ''
      },
    },
    customClassWrapper: {
      type: String,
      default() {
        return ''
      },
    },
    titleSize: {
      validator(value) {
        return ['h1', 'h2', 'h3'].includes(value)
      },
      type: String,
      default() {
        return 'h3'
      },
    },
  },
  computed: {
    getTitleSize() {
      return {
        h1: this.titleSize === 'h1',
        h2: this.titleSize === 'h2',
        h3: this.titleSize === 'h3',
      }
    },
  },
}
</script>

<style>
</style>
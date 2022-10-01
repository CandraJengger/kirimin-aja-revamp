<template>
  <div class="card with-accent-parent border-0 h-100 elevation-super accent-primary">
    <div class="col-auto d-inline-flex col-lg-12 d-lg-block">
      <div class="with-accent px-4 py-2 mt-3">
        <div
          class="d-inline-flex p-2 p-lg-3 full-radius bg-primary text-primary bg-opacity-10"
          v-html="icon"
        >
        </div>
      </div>
    </div>
    <div class="col col-lg-12">
      <div class="card-body px-lg-4 pb-lg-4">
        <h4 class="card-title">{{ title }}</h4>
        <p class="m-0 text-dark text-opacity-50 fw-medium">{{ description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFeature',
  props: {
    icon: {
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
    description: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: rgb(50 50 105 / 15%) 0 2px 5px 0, rgb(0 0 0 / 5%) 0 1px 1px 0;

  .with-accent {
    position: relative;

    &::before {
      position: absolute;
      left: -1px;
      width: 4px;
      border-radius: 0 20px 20px 0;
      top: 0;
      height: 100%;
      background: #6f2fab;
      content: '';
    }
  }
}
</style>
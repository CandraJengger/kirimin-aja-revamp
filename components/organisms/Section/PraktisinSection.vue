<template>
  <section class="praktisin-session pt-5 pb-3 pt-lg-8 pb-lg-5">
    <div class="container my-lg-5 px-mobile-fix">
      <div class="row">
        <div class="col-lg-5 order-lg-1"><img
            src="https://kiriminaja.com/assets/cuate/memory-cuate.svg"
            alt=""
            class="img-fluid"
          ></div>
        <div class="col-lg pe-lg-8">
          <div class="me-lg-7">
            <h1>Partner Ecosystem &amp; Integrations</h1>
            <p class="lead">Kami bermitra dengan banyak ekspedisi terkemuka untuk membantu mengembangkan
              bisnis Anda lebih cerdas, lebih cepat, dan lebih kuat dari sebelumnya.</p>
            <ListCheck
              :data="list"
              variant="secondary"
            />
            <div class="
              divider
              mt-4">
            </div>
            <div class="mt-3 mt-lg-4">
              <KButton
                variant="primary"
                title="Daftar Gratis!"
                :is-rounded="true"
              />
              <a
                href="//developer.kiriminaja.com"
                class="btn btn-link btn-lg no-shadow text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  ></path>
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                  <line
                    x1="3"
                    y1="6"
                    x2="3"
                    y2="19"
                  ></line>
                  <line
                    x1="12"
                    y1="6"
                    x2="12"
                    y2="19"
                  ></line>
                  <line
                    x1="21"
                    y1="6"
                    x2="21"
                    y2="19"
                  ></line>
                </svg>
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KButton from '../../atoms/Button.vue'
import ListCheck from '../../moleculs/ListCheck.vue'
export default {
  components: {
    KButton,
    ListCheck,
  },
  data() {
    return {
      list: [
        'Beragam pilihan expedisi & Layanan',
        'Support Cash On Delivery',
        'Dashboard Monitoring',
        'Diskon ongkir dan Cashback ongkir',
        'Customer Support Senin - Minggu',
      ],
    }
  },
}
</script>

<style>
</style>
<template>
  <div class="card selected">
    <div class="card-header border-0 bg-transparent text-center position-relative">
      <div class="mb-4 text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-flame"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="currentColor"
          fill-opacity="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
        </svg>
        <h4 class="h4">Freemium</h4>
      </div>
      <a
        class="btn btn-secondary text-white border-2 full-radius"
        href="https://wa.me/6285975255552"
        target="_blank"
      >Hubungi Kami</a>
      <div class="position-absolute mt-4 annualy pb-4 px-4 pt-4">
        <div>Solusi tepat untuk pertumbuhan bisnis yang signifikan</div>
      </div>
    </div>
    <div class="card-body border-top border-2 border-light-2 m-2 p-lg-4">
      <small>Integration includes</small>
      <ul class="my-2 p-0">
        <li>Cashback Ongkir Up 25%</li>
        <li>Unlimited API call per harinya</li>
        <li>Pengiriman cod, reguler, next day, dan instant</li>
        <li>Dukungan penuh via email dan sosial media</li>
        <li>Pembuatan label pengiriman otomatis</li>
        <li>Laporan order pengiriman</li>
      </ul>
      <a
        class="btn btn-secondary text-white border-2 w-100 mt-2 full-radius"
        href="https://wa.me/6285975255552"
        target="_blank"
      >Ajukan Sekarang</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card.selected {
  background: linear-gradient(to bottom, #f76707, rgba(247, 103, 7, 0.25));
  border: none;
  padding: 2px;

  * {
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    margin: 4px 4px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 0.6rem;
    background: #fff;
  }

  .card-header {
    overflow: hidden;
    padding-top: 3.5rem;
    padding-bottom: 6.5rem;

    &:first-child {
      border-radius: calc(0.75rem - 2px) calc(0.75rem - 2px) 0 0;
    }

    &::before {
      content: '';
      height: 400px;
      top: -205px;
      border-radius: 0 0 100% 100%;
      position: absolute;
      left: -140px;
      right: -140px;
      border-bottom: 4px solid #f76707;
    }

    .annualy {
      left: 0;
      bottom: 0;
      right: 0;
    }
  }

  .card-body {
    z-index: 1;

    ul {
      list-style: none;

      li {
        padding-left: 1.75rem;

        &:not(:last-child) {
          margin-bottom: 2px;
        }

        &::before {
          content: '';
          width: 0.7rem;
          height: 0.7rem;
          border: 2px solid #f76707;
          border-radius: 100%;
          position: absolute;
          left: 0;
          top: calc(50% - 0.35rem);
        }
      }
    }
  }
}
</style>
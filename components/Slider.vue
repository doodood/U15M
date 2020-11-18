<template>
  <div class="slider">
    <p></p>
  </div>
</template>

<script>


export default {
  components: {
    /* Hooper,
    Slide,
    HooperPagination, */
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.hooper {
  height: 80vh;
  @media only screen and (max-width: 40em) {
    height: 55vh;
  }
}
</style>
<template>
  <figure class="map" v-editable="blok">
    <iframe
      :src="blok.data"
      width="100%"
      height="100%"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </figure>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>
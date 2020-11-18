<template>
  <figure class="test" v-editable="blok">
    <img :src="blok.img.filename" alt="" class="test__img" />
    <div class="test__overlay">
      <h4 class="test__overlay-title">{{ blok.title }}</h4>
      <template v-if="blok.action">
        <button class="btn test__btn">{{ blok.action }}</button>
      </template>
    </div>
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
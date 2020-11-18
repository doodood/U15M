<template>
  <div class="card" v-editable="blok">
    <img :src="blok.img.filename" alt="" class="card__img" />
    <h5 class="card__title">{{ blok.title }}</h5>
    <div class="card__location">Bob Denver</div>
    <div class="card__date">D3</div>
    <div class="card__event">06/07</div>
    <div class="card__test">test</div>
    <a class="btn card__btn" :href="blok.link">{{
      blok.action
    }}</a>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
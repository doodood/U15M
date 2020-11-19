<template>
  <div class="card" v-editable="blok">
    <img :src="blok.img.filename" alt="" class="card__img" />
    <h5 class="card__title">{{ blok.title }}</h5>
    <div class="card__location">{{blok.first_item}}</div>
    <div class="card__date">{{blok.second_item}}</div>
    <div class="card__event">{{blok.third_item}}</div>
    <div class="card__test">{{blok.fourth_item}}</div>
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
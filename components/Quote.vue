<template>
  <section class="quotes">
    <h2 class="heading-2 mb-md" :class="blok.heading_style">
      &ldquo;{{blok.content}}&rdquo;
    </h2>
    <p class="quotes__text mb-sm" :class="blok.text_style">{{blok.author}}</p>
    <button class="btn">D'autres citations basket</button>
  </section>
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
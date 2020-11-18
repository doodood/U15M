<template>
  <section class="events">
    <div class="event">
      <h4 class="event__name">{{ blok.name }}</h4>
      <span class="event__description">{{ blok.description }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Event',
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
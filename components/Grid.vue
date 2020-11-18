<template>
  <div v-editable="blok" :class="blok.section">
    <template v-for="blok in blok.columns">
      <component :blok="blok" :is="blok.component" :key="blok._uid" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  }
}
</script>
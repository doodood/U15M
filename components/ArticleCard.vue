<template>
  <!--   <div>
    <header>
      <nuxt-link :to="`/${slug}`">{{ title }}</nuxt-link>
    </header>
    <p>{{ description }}</p>
    <footer>
      <img :src="author.image" :alt="author.name" />
      <span>{{ author.name }}</span>
    </footer>
  </div> -->
  <nuxt-link
    class="block text-gray-800 rounded-lg shadow-lg p-6"
    :to="`${slug}`"
  >
  <h2>{{slug}} hello</h2>
    <header class="text-2xl font-bold">{{ title }}</header>
    <p class="mt-4">{{ description }}</p>
    <footer class="flex items-center mt-6">
      <img
        class="w-20 rounded-full border-4 border-main"
        :src="author.content.avatar.filename"
        :alt="author.content.name"
      />
      <div class="ml-6">
        <p class="text-xl font-bold">{{ author.name }}</p>
        <p class="text-sm mt-1">{{ date }}</p>
      </div>
    </footer>
  </nuxt-link>
</template>

<script>
export default {
  name: 'article-card',
  props: {
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String,
  },
}
</script>

<style>
</style>

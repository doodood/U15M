<template>
  <div class="feature" v-editable="blok">
    <template v-if="blok.img.filename">
      <img :src="blok.img.filename" alt="" class="feature__img" />
    </template>
    <template v-else>
      <h3 class="feature__title" :class="blok.style">
        {{ blok.name }}
      </h3>
      <p class="feature__text">{{ blok.description }}</p>
      
      <template v-if="blok.link">
        <router-link to="/articles" class="btn feature__btn"
          >{{ blok.link_description }}
        </router-link>
      </template>
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
  },
}
</script>
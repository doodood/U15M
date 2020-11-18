<template>
 <div>
     {{blok}}
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

<style>
.hooper {
  height: 80vh;
}

.slide {
  font-size: 100px;
  color: white;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: min-content;
}

.is-1 {
  background: red;
}

.is-2 {
  background: purple;
}

.is-3 {
  background: blue;
}

.is-4 {
  background: green;
}

.is-5 {
  background: gray;
}
</style>
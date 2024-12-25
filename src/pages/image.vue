<script setup lang="ts">
import {onMounted, ref} from "vue";
const images = ref()
onMounted(async () => {
  let response = await fetch('./image.json')
  images.value = await response.json()
})

</script>
<template>
  <h1>jeanhua's gallery</h1>
  <router-link to="/">
  <div id="return">
      <img src="../assets/icons/return.svg" alt="return">
  </div>
  </router-link>
  <br>
  <div class="gallery">
    <img v-for="image in images" :src="image" alt="gallery image" class="gallery-image">
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.gallery-image {
  width: auto;
  height: 200px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
#return{
  background-color: #747bff;
  border-radius: 25px;
}
#return img{
  width: 50px;
  height: 50px;
}
</style>

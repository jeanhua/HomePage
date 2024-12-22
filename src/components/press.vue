<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps({text:String})
const typingText = ref('');
const typingSpeed = 100;
const bunerline = ref("normal")
const typeWriter = (text: string) => {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < text.length) {
      typingText.value += text.charAt(index);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, typingSpeed);
};
onMounted(() => {
  if (props.text) {
    typeWriter(props.text);
  }
});
</script>

<template>
  <h1 v-on:mouseenter="bunerline='underline'" v-on:mouseleave="bunerline='normal'">{{typingText}}</h1>
</template>

<style scoped>
  h1{
    text-decoration: v-bind(bunerline);
  }
</style>

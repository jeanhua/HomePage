<script setup lang="ts">
import press from '../components/press.vue';
import {ref} from "vue";
const preview_href = ref(false)
</script>

<template>
  <img id="head" src="https://q1.qlogo.cn/g?b=qq&nk=2207739460&src_uin=www.jlwz.cn&s=0" alt="head">
  <press text="Welcome to jeanhua's page!"></press>
  <div class="contact">
    <a href="https://github.com/jeanhua">
      <img src="../assets/icons/github-fill.svg" alt="github">
    </a>
    <a href="https://blog.jeanhua.cn">
      <img src="../assets/icons/blog.svg" alt="blog">
    </a>
    <a href="#" v-on:click="preview_href=!preview_href">
      <img src="../assets/icons/music.svg" alt="music">
    </a>
    <a href="mailto:jeanhua_official@outlook.com">
      <img src="../assets/icons/email.svg" alt="email">
    </a>
    <RouterLink to="/image">
      <img src="../assets/icons/image.svg" alt="image">
    </RouterLink>
  </div>
  <br>
  <div class="preview" v-if="preview_href">
    <iframe width=330 height=450 src="//music.163.com/outchain/player?type=0&id=9570454473&auto=1&height=430"></iframe>
  </div>
  <div class="saying" v-if="!preview_href">
    <h2>追风赶月莫停留，平芜尽处是春山</h2>
  </div>
  <div id="foot">
    <span>Copyright ©2024 by jeanhua. All rights reserved.</span>
  </div>
</template>

<style scoped>
#head{
  width: 100px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 10px 5px 5px black;
}
.contact{
  background: #747bff;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 10px 5px 5px gray;
}
.contact img{
  border-radius: 5px;
  width: 35px;
  height: 35px;
  padding: 15px 15px 5px 5px;
}
.preview{
  border-radius: 20px;
  background: rgba(255,255,255,150);
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.preview iframe{
  border-radius: 20px;
  width: 100%;
}
#foot{
  bottom: 0;
}
</style>

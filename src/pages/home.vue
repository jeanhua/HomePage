<script lang="ts" setup>
import press from '../components/press.vue';
import {ref} from "vue";
import {ElButton, ElIcon,ElTooltip} from "element-plus";
import {Medal} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

const preview_href = ref(false)
const router = useRouter()
</script>

<template>
  <div class="container" style="padding: 2rem">
    <img id="head" alt="head" src="https://q1.qlogo.cn/g?b=qq&nk=2207739460&src_uin=www.jlwz.cn&s=0">
    <press text="Welcome to jeanhua's page!"></press>
    <div class="contact">
      <el-tooltip content="Github">
        <a href="https://github.com/jeanhua">
          <img alt="github" src="../assets/icons/github-fill.svg">
        </a>
      </el-tooltip>
      <el-tooltip content="我的博客">
        <a href="https://www.blog.jeanhua.cn">
          <img alt="blog" src="../assets/icons/blog.svg">
        </a>
      </el-tooltip>
      <el-tooltip content="Music">
        <a href="#" v-on:click="preview_href=!preview_href">
          <img alt="music" src="../assets/icons/music.svg">
        </a>
      </el-tooltip>
      <el-tooltip content="Email">
        <a href="mailto:jeanhua_official@outlook.com">
          <img alt="email" src="../assets/icons/email.svg">
        </a>
      </el-tooltip>
      <el-tooltip content="我的画廊">
        <RouterLink to="/image">
          <img alt="image" src="../assets/icons/image.svg">
        </RouterLink>
      </el-tooltip>
      <el-tooltip content="我的备忘录">
        <a href="https://memos.jeanhua.cn/u/jeanhua">
          <img alt="res" src="../assets/icons/notes.svg">
        </a>
      </el-tooltip>
    </div>
    <br>
    <div v-if="preview_href" class="preview">
      <iframe height=450 src="https://music.163.com/outchain/player?type=0&id=9570454473&auto=1&height=430"
              width=330></iframe>
    </div>
    <div v-if="!preview_href" class="saying">
      <h2>追风赶月莫停留，平芜尽处是春山</h2>
    </div>
    <div id="foot">
      <span>Vue3 & vite & typescript<br>Copyright ©2024 by jeanhua. All rights reserved.</span>
    </div>
    <el-button round style="margin: 20px" type="primary" @click="router.push('/detail')">
      <el-icon>
        <Medal/>
      </el-icon>
      my projects
    </el-button>
  </div>
</template>

<style scoped>
#head {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 10px 5px 5px black;
}

.contact {
  background: #747bff;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 10px 5px 5px gray;
}

.contact img {
  border-radius: 5px;
  width: 35px;
  height: 35px;
  padding: 15px 15px 5px 5px;
}

.contact img:hover {
  transition-property: width, height;
}

.preview {
  border-radius: 20px;
  background: rgba(255, 255, 255, 150);
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.preview iframe {
  border-radius: 20px;
  width: 100%;
}

#foot {
  bottom: 0;
}
</style>

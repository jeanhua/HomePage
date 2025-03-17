<script setup lang="ts">
import { ref } from 'vue'
import {ElRow,ElTag,ElCol,ElCard,ElButton} from "element-plus";
import projects from './projects.json'

interface Project {
  name: string
  description: string
  github: string
  demo?: string
  tags: string[]
  image?: string
}

const projectsList = ref<Project[]>(projects)
const jumpTo = (url:string)=>window.open(url)
</script>

<template>
  <div class="projects-container">
    <!-- 标题部分 -->
    <div class="header">
      <h1>我参与的开源项目</h1>
      <p class="subtitle">我的技术探索与实践</p>
    </div>

    <!-- 项目展示 -->
    <el-row :gutter="20" class="project-list">
      <el-col
          v-for="(project, index) in projectsList"
          :key="index"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          :xl="6"
      >
        <el-card class="project-card">
          <template #header>
            <div class="card-header">
              <img
                  v-if="project.image"
                  :src="project.image"
                  class="project-image"
                  alt="项目封面"
                  @error="e => (e.target as HTMLElement).style.display = 'none'"
              />
              <h3 class="project-title">{{ project.name }}</h3>
            </div>
          </template>

          <div class="project-content">
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tags">
              <el-tag
                  v-for="(tag, tagIndex) in project.tags"
                  :key="tagIndex"
                  :type="['', 'success', 'info', 'warning'][tagIndex % 4] as ('primary' | 'success' | 'info' | 'warning' | 'danger')"
                  class="tag"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>

          <template #footer>
            <div class="card-footer">
              <el-button
                  type="primary"
                  target="_blank"
                  class="github-button"
               @click="jumpTo(project.github)">
                GitHub
              </el-button>
              <el-button
                  v-if="project.demo"
                  target="_blank"
                  class="demo-button"
                  @click="jumpTo(project.demo)"
              >
                在线演示
              </el-button>
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.project-list {
  margin: 0 -10px;
}

.project-card {
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.project-title {
  margin: 0;
  font-size: 1.4rem;
  color: #333;
}

.project-description {
  color: #666;
  line-height: 1.6;
  min-height: 60px;
}

.project-tags {
  margin: 1rem 0;
}

.tag {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-button {
  background-color: #67c23a;
  border-color: #67c23a;
  color: white;
}

.demo-button:hover {
  background-color: #5daf34;
  border-color: #5daf34;
}
</style>

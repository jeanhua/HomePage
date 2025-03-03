<script setup lang="ts">
import { onMounted, ref, type Directive } from "vue";

interface Image {
  id: number;
  url: string;
  title?: string;
}

const images = ref<Image[]>([]);
const activeImage = ref<Image | null>(null);

const vLazyload: Directive = {
  mounted(el: HTMLImageElement) {
    const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

    const realSrc = el.dataset.src;
    el.src = placeholder;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && realSrc) {
          const img = new Image();
          img.src = realSrc;
          img.onload = () => {
            el.src = realSrc;
            observer.unobserve(el);
          };
          img.onerror = () => {
            console.error('图片加载失败:', realSrc);
          };
        }
      });
    }, {
      rootMargin: '200px',
      threshold: 0.01,
    });

    observer.observe(el);

    (el as any)._observer = observer;
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect();
    }
  }
};

onMounted(async () => {
  try {
    const response = await fetch('./image.json');
    const data = await response.json();
    images.value = data.map((url: string, index: number) => ({
      id: index,
      url,
      title: `作品 ${index + 1}`
    }));
  } catch (error) {
    console.error('加载图片数据失败:', error);
  }
});

const openLightbox = (image: Image) => {
  activeImage.value = image;
};

const closeLightbox = () => {
  activeImage.value = null;
};
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="header-content">
        <h1 class="title">JEANHUA'S GALLERY</h1>
        <router-link to="/" class="return-button">
          <div class="return-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
            </svg>
          </div>
          <span class="return-text">返回首页</span>
        </router-link>
      </div>
    </header>

    <div class="gallery-container">
      <div class="gallery">
        <div
            v-for="image in images"
            :key="image.id"
            class="gallery-item"
            @click="openLightbox(image)"
        >
          <div class="image-container">
            <img
                :data-src="image.url"
                :alt="image.title"
                class="gallery-image"
                v-lazyload
                loading="lazy"
            />
          </div>
          <div class="image-overlay">
            <h3 class="image-title">{{ image.title }}</h3>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="activeImage" class="lightbox" @click.self="closeLightbox">
        <div class="lightbox-content">
          <img :src="activeImage.url" :alt="activeImage.title" class="lightbox-image"/>
          <button class="close-button" @click="closeLightbox">×</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  position: relative;
  margin-bottom: 3rem;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #2c3e50;
  letter-spacing: 2px;
  position: relative;
  flex-grow: 1;
  text-align: center;
  padding: 0 120px;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #747bff;
}

.return-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 30px;
  background: linear-gradient(135deg, #747bff 0%, #a259ff 100%);
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
}

.return-button:hover {
  transform: translateY(-50%) scale(1.05);
}

.return-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
}

.return-text {
  font-size: 0.9rem;
}

.gallery-container {
  padding: 20px 0;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 15px;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.image-container {
  position: relative;
  padding-top: 100%;
  background: #f8f9fa;
}

.gallery-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 20px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.image-title {
  margin: 0;
  font-size: 1.1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.close-button {
  position: absolute;
  top: -40px;
  right: -20px;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #747bff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
  }

  .title {
    font-size: 2rem;
    padding: 0 80px;
  }

  .return-button {
    right: 1rem;
    padding: 6px 12px;
  }

  .return-text {
    display: none;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.75rem;
    padding: 0 60px;
  }

  .return-button {
    padding: 4px 8px;
  }

  .return-icon svg {
    width: 20px;
    height: 20px;
  }
}
</style>

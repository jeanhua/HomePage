<script setup lang="ts">
let images = ["https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181825.jpg?sign=59BQTwOxxZvJ-B1EN4AbkRy_X6iC1yOwrRqRkTw5BhE=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181842.jpg?sign=dDk6sq6iunAvSpwMz__X2obhvZsFOGTeSjZAPBDaDtU=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181846.jpg?sign=iJayVtsT5IeeaGJyIl1CPeMjjzCCyCKIeL9caHWFTbc=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181850.jpg?sign=ZVqJDwX7BLPc6A4VpUEZIdWjo7eVWM5u7uKOZkEO4Yk=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181855.jpg?sign=0VTE7J5XYAHgKn9VieZSm_yzRaJlb_foxUKO9qQj1YY=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181858.jpg?sign=3gNM_KRxHYySqWOb9wn9eQ_XDI_4N3Tkf1OyCgaudzo=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181900.jpg?sign=1heAwyl-WASQX9XRWr5sLYMQyzToPz9MsMRUmm5V8Qg=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/20241129_181902.jpg?sign=7tV4wzcHMbT_qjcIB1Hex5_APGdYVnDfVtu5-y7kIrg=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20230928_205857.jpg?sign=SCTicuYDItxu5iyrWDE71NpRJJrZtOd2xJyPX2055VQ=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20230928_210159.jpg?sign=hDo6v1Xw_w8pyGmd62V41T3VPwscPXvhCGlxz1PHe0g=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20231101_160034.jpg?sign=pRBSI0YcWfNefKqMrOO_JPxjWScs2OONOZ8ieO8BR_E=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20231101_160055.jpg?sign=6UrSZ04CQFWO6DQDkiS6o1piT8iVe-40RWnrAmmHynA=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20240812_200702.jpg?sign=9ZoDGzF6FYLoGzWDBNBC78Uh3w6vvw-09H0P_EUposU=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20240812_202223.jpg?sign=K0aE6xwGr1GwOaJBnhVJWgIarG7BITd-O8pFCe0mSBo=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20240917_211004.jpg?sign=rI79VRJUIKxHb1NKX3TggboPs8vINAJ0FD_kKNFORUY=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20240917_211014.jpg?sign=UVyUOMobvnXx-D_clfnNteV3aXCH-MzIIZWem39Z1AA=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20240919_194048.jpg?sign=rYnvhLS3ctJ-nEgqjk1v-06_YRih65nrgclXLOjjOs4=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20240919_194115.jpg?sign=UQGTezIPqNnQGzyakJRAxOwg37Q-dqhOoyNs-TWe9xo=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20241008_223245.jpg?sign=dnAgxJKnwuDBTNKi14TknnYBGCQOKg1_N0ndD-CGo9Y=:0","https://www.gallery.jeanhua.cn/d/天翼网盘客户端/相册/jeanhua/IMG_20241008_223424.jpg?sign=ZLvkUAQD2ODsQiT1TWYlp0e883RclNTxQqVJ7_pVIuE=:0"]

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
  background-color: #84fab0;
  border-radius: 25px;
}
#return img{
  width: 50px;
  height: 50px;
}
</style>

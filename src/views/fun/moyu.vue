<template>
  <div class="moyu">
    <img :src="imgSrc" alt="" srcset="" />
  </div>
</template>

<script setup>
import { getHistoryApi } from "@/api/test";
import { getMoyu } from "@/api/fun";
import { onMounted, ref } from "vue";

const imgSrc = ref("");
const historyApi = async () => {
  try {
    const response = await getHistoryApi();
    console.log("🚀 ~ historyApi ~ response:", response);
  } catch (error) {
  } finally {
  }
};

// 摸鱼人日历API接口
const Moyu = async () => {
  try {
    const response = await getMoyu();
    console.log("🚀 ~ Moyu ~ response:", response);
    imgSrc.value = response.url;
  } catch (error) {
    console.log("🚀 ~ Moyu ~ error:", error);
  } finally {
  }
};

onMounted(() => {
  historyApi();
  Moyu();
});
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>

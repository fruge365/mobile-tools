<template>
  <div></div>
</template>
<script lang="ts" setup>
import { useMessage } from "naive-ui";
window.$message = useMessage();
console.log("🚀 ~ window.$message:", window.$message);
</script>

<template>
  <n-config-provider class="app">
    <n-modal-provider>
      <n-message-provider>
        <router-view />
        <TheMessage></TheMessage>
      </n-message-provider>
    </n-modal-provider>
  </n-config-provider>
</template>
 
<script setup>
import { NConfigProvider } from "naive-ui";
</script>
 
<style scoped>

</style>
<template>
  <!-- <AppLoader :loading="loading" /> -->
  <NuxtPage />
</template>


<script setup>
    const nuxtApp = useNuxtApp();
    const loading = ref(true);

    // const delay = (ms) => {
    //   return new Promise(resolve => setTimeout(resolve, ms));
    // }
    
    nuxtApp.hook("page:start", () => {
      loading.value = true;
    });
    nuxtApp.hook("page:finish", async () => {
      // await delay(3000);
      loading.value = false;
    });
</script>
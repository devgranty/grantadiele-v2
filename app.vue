<template>
  <AppLoader :loading="loading" />
  <NuxtPage />
</template>


<script setup>
    const nuxtApp = useNuxtApp();
    const loading = ref(true);

    nuxtApp.hook("page:start", () => {
      loading.value = true;
    });
    nuxtApp.hook("page:finish", async () => {
      loading.value = false;
    });
</script>
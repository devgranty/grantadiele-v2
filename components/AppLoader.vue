<template>
    <div class="fixed z-50 inset-0 bg-diesel-900 grid place-items-center transition-all duration-300 will-change-transform" :class="[loading ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-150 invisible']">
        <!-- <div class="absolute bottom-10">
          <div class="border-2 border-t-purple-600 border-r-purple-600 border-b-purple-950 border-l-purple-950 size-4 rounded-full rotate"></div>
        </div> -->
    </div>
</template>


<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotate {
  animation: rotate .5s infinite linear;
}
</style>
<template>
  <div class="main-wrapper">
    <SiteHeader />
    <slot />
  </div>
</template>

<style lang="css" scoped>
.main-wrapper {
  @apply min-h-screen max-w-7xl mx-auto p-8 md:p-10 lg:p-12;
}
</style>

<script setup lang="ts">
import SiteHeader from "@/components/SiteHeader.vue";
import { useAnalytics } from "@/composables/useAnalytics";

useAnalytics();
</script>


<style lang="css">
main {
  @apply mt-24;
}
</style>

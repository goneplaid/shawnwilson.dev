<script setup>
import SiteHeader from "@/components/layout/SiteHeader.vue";
</script>

<template>
  <div class="site-wrapper">
    <SiteHeader />
    <main class="site-main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.site-wrapper {
  @apply min-h-screen bg-background max-w-7xl mx-auto p-12;
}

.site-main {
  @apply flex-1;
}
</style>

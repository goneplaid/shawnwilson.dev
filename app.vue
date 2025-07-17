<!-- layouts/default.vue -->
<template>
  <div class="site-wrapper">
    <SiteHeader />
    <main class="site-main">
      <slot />
    </main>
  </div>
</template>

<script setup>
import SiteHeader from "@/components/layout/SiteHeader.vue";
</script>

<style scoped>
.site-wrapper {
  @apply min-h-screen bg-background;
}

.site-main {
  @apply flex-1;
}
</style>

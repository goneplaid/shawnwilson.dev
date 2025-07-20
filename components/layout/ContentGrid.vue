<template>
  <div class="content-grid">
    <slot />
  </div>
</template>

<style scoped>
.content-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16;
}
</style>

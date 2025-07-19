<template>
  <div class="content-grid-layout">
    <slot />
  </div>
</template>

<style scoped>
.content-grid-layout {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12;
}
</style>

<template>
  <div class="main-wrapper">
    <SiteHeader />
    <slot />
  </div>
</template>

<style lang="css" scoped>
.main-wrapper {
  @apply min-h-screen bg-background max-w-7xl mx-auto p-12;
}
</style>

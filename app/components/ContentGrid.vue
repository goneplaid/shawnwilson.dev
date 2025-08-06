<template>
  <section>
    <slot />
  </section>
</template>

<style lang="css" scoped>
section {
  @apply text-primary text-sm;
  @apply grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16;
}
</style>

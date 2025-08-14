<template>
  <section :class="class">
    <slot />
  </section>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}

defineProps<Props>();
</script>

<style lang="css" scoped>
section {
  @apply text-primary text-sm;
  @apply grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10;
}
</style>

<template>
  <section>
    <h4>{{ title }}</h4>
    <ul>
      <slot />
    </ul>
  </section>
</template>

<script setup lang="ts">
type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>

<style scoped>
section {
  @apply flex flex-col mb-4 md:mb-0;
}

h4 {
  @apply pb-4 border-b-2 border-muted-foreground;
}

ul {
  @apply flex flex-col gap-8 pt-8;
}
</style>

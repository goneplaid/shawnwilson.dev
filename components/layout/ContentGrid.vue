<!-- components/layout/ContentGrid.vue -->
<template>
  <div class="content-grid" :class="gridClasses">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "site-layout", // Default to the 3-column site layout
    validator: (value) =>
      ["site-layout", "two-column", "single", "three-column"].includes(value),
  },
  gap: {
    type: String,
    default: "large",
  },
});

const gridClasses = computed(() => {
  const variants = {
    "site-layout": "content-grid--site-layout", // Matches header grid
    single: "content-grid--single",
    "two-column": "content-grid--two-column",
    "three-column": "content-grid--three-column",
  };

  const gaps = {
    small: "content-grid--gap-small",
    medium: "content-grid--gap-medium",
    large: "content-grid--gap-large",
  };

  return [variants[props.variant], gaps[props.gap]];
});
</script>

<style scoped>
.content-grid {
  @apply max-w-7xl mx-auto px-8 py-12;
}

.content-grid--site-layout {
  @apply grid grid-cols-3;
  /* Matches the 3-column header grid */
}

.content-grid--single {
  @apply grid grid-cols-1;
}

.content-grid--two-column {
  @apply grid grid-cols-1 lg:grid-cols-2;
}

.content-grid--three-column {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}

.content-grid--gap-small {
  @apply gap-6;
}

.content-grid--gap-medium {
  @apply gap-8;
}

.content-grid--gap-large {
  @apply gap-12;
}
</style>

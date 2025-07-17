<!-- components/content/ContentSection.vue -->
<template>
  <section class="content-section">
    <header v-if="title" class="content-section__header">
      <h3 class="content-section__title">{{ title }}</h3>
      <p v-if="description" class="content-section__description">
        {{ description }}
      </p>
    </header>
    <div class="content-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  title?: string;
  description?: string;
};

defineProps<Props>();
</script>

<style scoped>
.content-section__header {
  @apply mb-8;
}

.content-section__title {
  @apply text-lg font-semibold text-gray-900 mb-2 pb-2 border-b border-gray-200;
}

.content-section__description {
  @apply text-gray-600 text-sm;
}

.content-section__body {
  @apply space-y-8;
}
</style>

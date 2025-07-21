<template>
  <section class="content-section">
    <header v-if="title" class="content-section__header">
      <h3 class="content-section__title">{{ title }}</h3>
      <span v-if="aside" class="content-section__aside">
        {{ aside }}
      </span>
    </header>
    <p v-if="description" class="content-section__description">
      {{ description }}
    </p>
    <p class="content-section__summary">
      <slot />
    </p>
    <p v-if="footer" class="content-section__footer">
      {{ footer }}
    </p>
  </section>
</template>

<script setup lang="ts">
type Props = {
  title?: string;
  aside?: string;
  description?: string;
  footer?: string;
};

defineProps<Props>();
</script>

<style scoped>
.content-section {
  @apply py-10 border-b flex flex-col gap-2 hover:cursor-pointer transition-all duration-500;
  box-shadow: inset 0 -1px 0 theme("colors.border");
}

.content-section:hover {
  @apply bg-primary-foreground;
  box-shadow: inset 0 -2px 0 theme("colors.muted.foreground");
}

.content-section__header {
  @apply flex flex-row items-start;
}

.content-section__title {
  @apply text-lg font-bold tracking-wide text-foreground font-display;
}

.content-section__aside {
  @apply text-muted-foreground text-base font-sans whitespace-nowrap leading-loose pl-2 ml-auto;
}

.content-section__description {
  @apply text-muted-foreground text-lg font-sans italic;
}

.content-section__footer {
  @apply text-muted-foreground font-sans;
}
</style>

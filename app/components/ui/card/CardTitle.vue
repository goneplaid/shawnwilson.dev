<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

const props = withDefaults(defineProps<Props>(), {
  headingLevel: 3,
});

const headingTag = computed(() => `h${props.headingLevel}` as const);
</script>

<template>
  <component
    :is="headingTag"
    :class="cn('font-semibold leading-none tracking-tight', props.class)"
  >
    <slot />
  </component>
</template>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply mb-0;
}
</style>

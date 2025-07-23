<template>
  <div class="work__column">
    <h3>{{ title }}</h3>

    <div class="work__items">
      <WorkContentSection
        v-for="item in props.content"
        :key="item.path"
        :path="item.path"
        :title="item.title"
        :aside="item.aside"
        :footer="item.footer"
      >
        <ContentRenderer :value="item" />
      </WorkContentSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WorkContentSection } from "~/types/content";

type Props = {
  title: string;
  content: WorkContentSection[];
};
const props = defineProps<Props>();
</script>

<style scoped>
.work__column {
  @apply flex flex-col mb-4 md:mb-0;
}

.work__items {
  @apply flex flex-col;
}

h3 {
  @apply pb-4 border-b-2 border-muted-foreground;
}
</style>

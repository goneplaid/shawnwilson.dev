<template>
  <div class="work__column">
    <h4>{{ title }}</h4>

    <div class="work__items">
      <WorkContentSection
        v-for="item in content"
        :key="item.path"
        :path="item.path"
        :title="item.title"
        :description="item.description"
        :aside="item.aside"
        :footer="item.footer"
        :drawer-id="drawerId"
        @close="onClose"
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
  drawerId: string;
  content: WorkContentSection[];
  onClose: () => void;
};

defineProps<Props>();
</script>

<style scoped>
.work__column {
  @apply flex flex-col mb-4 md:mb-0;

  h4 {
    @apply pb-4 border-b-2 border-muted-foreground;
  }
}

.work__items {
  @apply flex flex-col;
}
</style>

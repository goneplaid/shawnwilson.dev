<template>
  <Drawer
    v-if="selectedItem"
    direction="right"
    :modal="false"
    :open="!!selectedItem"
    @close="onClose"
  >
    <DrawerContent :id>
      <div class="drawer-content">
        <DrawerHeader>
          <DrawerTitle @close="onClose">{{
            selectedItem?.title || "Details"
          }}</DrawerTitle>
        </DrawerHeader>
        <div class="drawer-content__body">
          <div class="drawer-content__subtitle">
            <h4>{{ selectedItem?.description || selectedItem?.footer }}</h4>
            <span v-if="selectedItem">
              {{ selectedItem?.aside }}
            </span>
          </div>
          <ContentRenderer v-if="selectedItem" :value="selectedItem" />
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { WorkContentSection } from "~/types/content";

defineProps<{
  id: string;
  selectedItem: WorkContentSection;
  onClose: () => void;
}>();
</script>

<style scoped>
.drawer-content {
  @apply mx-auto w-full;
}

.drawer-content__body {
  @apply p-16 pt-0;
}

.drawer-content__subtitle {
  @apply flex flex-row justify-between pb-4 mb-10  border-b-2 border-muted-foreground;

  span {
    @apply text-muted-foreground text-base font-sans whitespace-nowrap leading-loose;
  }
}
</style>

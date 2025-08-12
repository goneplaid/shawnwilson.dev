<template>
  <Drawer direction="right" :modal="false" :open="true" @close="onClose">
    <DrawerContent :id>
      <div class="drawer-content">
        <DrawerHeader>
          <DrawerTitle @close="onClose">{{ "Details" }}</DrawerTitle>
        </DrawerHeader>
        <div class="drawer-content__body">
          <div class="drawer-content__subtitle">Oh hello there.</div>
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

defineProps<{
  id: string;
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

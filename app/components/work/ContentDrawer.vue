<template>
  <Drawer direction="right" :modal="false" :open="true" @close="onClose">
    <DrawerContent :id class="content">
      <DrawerHeader>
        <DrawerTitle @close="onClose">
          <Transition name="content-fade" mode="out-in">
            <div :key="contentKey" class="content-wrapper">
              {{ title }}
            </div>
          </Transition>
        </DrawerTitle>
      </DrawerHeader>
      <article>
        <Transition name="content-fade" mode="out-in">
          <div :key="contentKey" class="content-wrapper">
            <section>
              <h4>{{ subtitle }}</h4>
              <span>{{ supplemental }}</span>
            </section>
            <slot />
          </div>
        </Transition>
      </article>
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
  title: string;
  subtitle: string;
  supplemental: string;
  contentKey?: string; // Key to trigger content transitions
  onClose: () => void;
}>();
</script>

<style lang="css" scoped>
.content {
  @apply mx-auto w-full;
}

article {
  @apply p-16 pt-0;
}

section {
  @apply flex flex-row justify-between pb-4 mb-10  border-b-2 border-muted-foreground;

  span {
    @apply text-muted-foreground text-base font-sans whitespace-nowrap leading-loose;
  }
}

.content-wrapper {
  @apply w-full;
}

.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 200ms ease-in-out;
}

.content-fade-enter-from,
.content-fade-leave-to {
  opacity: 0;
}
</style>

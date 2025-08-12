<template>
  <article
    :id="`toggle-${sectionId}`"
    :aria-expanded="isSelected"
    :aria-controls="isSelected ? drawerId : undefined"
    class="content-section"
    role="button"
    tabindex="0"
    @click="handleToggle"
    @keydown.enter="handleToggle"
    @keydown.space.prevent="handleToggle"
  >
    <slot />
  </article>
</template>

<script setup lang="ts">
import { useHashNav } from "@/composables/useHashNav";

interface Props {
  drawerId: string;
  contentId: string;
}

const props = defineProps<Props>();

const route = useRoute();
const { setHashLocation } = useHashNav();

const sectionId = props.contentId.replace(/^\//, "");
const isSelected = computed(() => route.hash === `#${sectionId}`);

const handleToggle = async () => {
  try {
    setHashLocation(sectionId);
  } catch (error) {
    console.error(`Failed to toggle section ${sectionId}:`, error);
  }
};

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  // Let the button handle Enter and Space naturally
  if (event.key === "Escape" && isSelected.value) {
    handleToggle();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

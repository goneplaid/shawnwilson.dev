<!-- ContentSection.vue component -->

<template>
  <article class="content-section">
    <button
      :id="`toggle-${sectionId}`"
      :aria-label="accessibleLabel"
      :aria-expanded="isSelected"
      :aria-controls="isSelected ? drawerId : undefined"
      :class="['content-section__trigger', { 'is-selected': isSelected }]"
      type="button"
      @click="handleToggle"
    >
      <Icon
        v-if="isSelected"
        name="lucide:arrow-right"
        class="content-section__icon"
        aria-hidden="true"
      />

      <header v-if="title" class="content-section__header">
        <component :is="headingTag" class="content-section__title">
          {{ title }}
        </component>
        <span v-if="aside" class="content-section__date">
          {{ aside }}
        </span>
      </header>

      <p v-if="description" class="content-section__description">
        {{ description }}
      </p>

      <div class="content-section__summary">
        <slot />
      </div>

      <p v-if="footer" class="content-section__footer">
        {{ footer }}
      </p>
    </button>
  </article>
</template>

<script setup lang="ts">
import type { WorkContentSection } from "~/types/content";

interface Props extends WorkContentSection {
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  drawerId: string;
  onClose: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  headingLevel: 3,
});

const route = useRoute();
const router = useRouter();

const sectionId = computed(() => props.path.replace(/^\//, ""));
const headingTag = computed(() => `h${props.headingLevel}` as const);
const isSelected = computed(() => route.hash === `#${sectionId.value}`);

const accessibleLabel = computed(() => {
  const action = isSelected.value ? "Close" : "Open";
  const context = props.title || "content section";
  return `${action} ${context} details`;
});

const handleToggle = async () => {
  try {
    const targetHash = isSelected.value ? "" : `#${sectionId.value}`;

    // Update route
    await router.push({
      path: route.path,
      hash: targetHash,
    });

    // Announce state change to screen readers
    announceStateChange();
  } catch (error) {
    console.error(`Failed to toggle section ${sectionId.value}:`, error);
  }
};

const announceStateChange = () => {
  // This creates a live region to announce state changes for screen readers
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = `${props.title || "Section"} ${
    isSelected.value ? "expanded" : "collapsed"
  }`;

  document.body.appendChild(announcement);

  // Clean up after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  // Let the button handle Enter and Space naturally
  if (event.key === "Escape" && isSelected.value) {
    handleToggle();
    props.onClose();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.content-section {
  @apply border-b;
  box-shadow: inset 0 -1px 0 theme("colors.border");
}

.content-section__trigger {
  @apply w-full py-10 flex flex-col gap-2 text-left transition-all duration-300 relative;
  @apply hover:bg-primary-foreground focus-visible:bg-primary-foreground;
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
}

.content-section__trigger.is-selected {
  @apply bg-primary-foreground text-primary-foreground;
}

.content-section__trigger:hover,
.content-section__trigger.is-selected,
.content-section__trigger:focus-visible {
  box-shadow: inset 0 -2px 0 theme("colors.muted.foreground");
}

.content-section__header {
  @apply flex flex-row items-start gap-2;
}

.content-section__title {
  @apply text-lg font-bold tracking-wide text-foreground font-display flex-1;
}

.content-section__date {
  @apply text-muted-foreground text-base font-sans whitespace-nowrap leading-loose flex-shrink-0;
}

.content-section__description {
  @apply text-muted-foreground text-lg font-sans italic;
}

.content-section__summary {
  @apply text-foreground;
}

.content-section__footer {
  @apply text-muted-foreground font-sans text-sm;
}

.content-section__icon {
  @apply absolute right-0 top-4 w-5 h-5 text-muted-foreground transition-transform duration-200;
}

.content-section__trigger[aria-expanded="true"] .content-section__icon {
  @apply visible;
}

/* For screen readers */
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
  clip: rect(0, 0, 0, 0);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .content-section__trigger,
  .content-section__icon {
    @apply transition-none;
  }
}
</style>

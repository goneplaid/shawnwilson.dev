<template>
  <div class="work">
    <h1>Work</h1>
    <LayoutContentGrid>
      <WorkContentColumn
        title="Relevant Experience"
        :content="experience"
        :drawer-id="DRAWER_ID"
        @close="handleClose"
      />
      <WorkContentColumn
        title="Selected Projects"
        :content="projects"
        :drawer-id="DRAWER_ID"
        @close="handleClose"
      />
    </LayoutContentGrid>

    <WorkContentDrawer
      v-if="selectedItem"
      :id="DRAWER_ID"
      :selected-item="selectedItem"
      @close="handleClose"
    />
  </div>
</template>

<script setup lang="ts">
import type { WorkContentSection } from "~/types/content";
import { useHashNav } from "@/composables/useHashNav";

const experienceData = ref<WorkContentSection[]>([]);
const projectData = ref<WorkContentSection[]>([]);
const selectedItem = ref<WorkContentSection | null>(null);

const DRAWER_ID = "work-content-drawer";

onMounted(async () => {
  try {
    const [expResponse, projResponse] = await Promise.all([
      queryCollection("experience").all(),
      queryCollection("projects").all(),
    ]);

    experienceData.value = expResponse;
    projectData.value = projResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const experience = computed(
  () =>
    experienceData.value?.map((item) => ({
      ...item,
      path: item.path?.replace("experience/", ""),
    })) || []
);

const projects = computed(
  () =>
    projectData.value?.map((item) => ({
      ...item,
      path: item.path?.replace("projects/", ""),
    })) || []
);

const route = useRoute();
const { setHashLocation } = useHashNav();

const handleClose = async () => {
  setHashLocation(undefined);
};

// `selectedItem` is based purely on the route hash as a source of truth.
// This ensures that the drawer state is always in sync with the URL and a part
// of the browser history and reduces complexity by avoiding cumbersome
// state management (e.g., prop-drilling, etc.)
watch(
  [() => route.hash, experience, projects],
  ([hash, experience, projects]) => {
    if (hash && hash.length > 1) {
      const itemId = hash.substring(1);

      const allItems = [...experience, ...projects];
      const foundItem = allItems.find(
        (item) => item.path?.replace(/\//, "") === itemId
      );

      selectedItem.value = foundItem || null;
    } else {
      selectedItem.value = null;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.work {
  @apply mt-32;
}

.work__column {
  @apply flex flex-col mb-4 md:mb-0;
}
</style>

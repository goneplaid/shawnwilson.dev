<template>
  <div class="work">
    <h1>Work</h1>
    <LayoutContentGrid>
      <WorkContentColumn title="Relevant Experience" :content="experience" />
      <WorkContentColumn title="Selected Projects" :content="projects" />
    </LayoutContentGrid>

    <WorkContentDrawer
      v-if="selectedItem"
      id="work-content-drawer"
      :selected-item="selectedItem"
      @close="selectedItem = null"
    />
  </div>
</template>

<script setup lang="ts">
import type { WorkContentSection } from "~/types/content";

const experienceData = ref<WorkContentSection[]>([]);
const projectData = ref<WorkContentSection[]>([]);
const selectedItem = ref<WorkContentSection | null>(null);

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

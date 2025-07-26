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

const allItems = computed(() => [...experience.value, ...projects.value]);
const { selectedItem, setHashLocation } = useHashNav(allItems);

const handleClose = async () => {
  setHashLocation(undefined);
};
</script>

<style scoped>
.work {
  @apply mt-32;
}

.work__column {
  @apply flex flex-col mb-4 md:mb-0;
}
</style>

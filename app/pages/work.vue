<template>
  <main>
    <h1>Work</h1>
    <ContentGrid>
      <ContentList title="Relevant Experience">
        <ContentListItem
          v-for="experience in relevantExperiences"
          :drawer-id="DRAWER_ID"
          :content-id="experience.id"
        >
          <WorkExperienceContent
            :company="experience.company"
            :job-title="experience.jobTitle"
            :duration="experience.duration"
            :description="experience.description"
          />
        </ContentListItem>
      </ContentList>
      <ContentList title="Selected Projects">
        <ContentListItem
          v-for="project in selectedProjects"
          :drawer-id="DRAWER_ID"
          :content-id="project.id"
        >
          <WorkProjectContent
            :project="project.project"
            :year="project.year"
            :description="project.description"
            :tools="project.tools"
          />
        </ContentListItem>
      </ContentList>
    </ContentGrid>

    <ContentDrawer
      v-if="selectedItem && selectedContent"
      :id="DRAWER_ID"
      :title="selectedContent.title"
      :subtitle="selectedContent.subtitle"
      :supplemental="selectedContent.supplemental"
      :content-key="selectedItem"
      @close="handleClose"
    >
      <ContentRenderer :value="selectedContent.content" />
    </ContentDrawer>
  </main>
</template>

<script setup lang="ts">
import ContentGrid from "~/components/ContentGrid.vue";
import ContentList from "~/components/work/ContentList.vue";
import ContentListItem from "~/components/work/ContentListItem.vue";
import ContentDrawer from "~/components/work/ContentDrawer.vue";
import { useHashNav } from "@/composables/useHashNav";
import type { ExperienceContent, ProjectContent } from "~/lib/types";

definePageMeta({
  layout: "default-layout",
});

const DRAWER_ID = "work-content-drawer";

const relevantExperiences = ref<ExperienceContent[]>([]);
const selectedProjects = ref<ProjectContent[]>([]);

const allItems = computed(() => [
  ...relevantExperiences.value.map((i) => i.id),
  ...selectedProjects.value.map((i) => i.id),
]);

const { selectedItem, setHashLocation } = useHashNav(allItems);

const handleClose = async () => {
  setHashLocation(undefined);
};

const selectedContent = computed(() => {
  if (!selectedItem.value) return null;

  // First check relevantExperiences
  const experience = relevantExperiences.value.find(
    (item) => item.id === selectedItem.value
  );
  if (experience) {
    return {
      title: experience.company,
      subtitle: experience.jobTitle,
      supplemental: experience.duration,
      content: experience,
    };
  }

  // Then check selectedProjects
  const project = selectedProjects.value.find(
    (item) => item.id === selectedItem.value
  );
  if (project) {
    return {
      title: project.project,
      subtitle: project.tools,
      supplemental: project.year,
      content: project,
    };
  }

  return null;
});

onMounted(async () => {
  try {
    const [expResponse, projResponse] = await Promise.all([
      queryCollection("experience").all(),
      queryCollection("projects").all(),
    ]);

    relevantExperiences.value = expResponse.map((item) => ({
      ...item,
      id: item.path.replace(/\/experience\//, ""),
    }));

    selectedProjects.value = projResponse.map((item) => ({
      ...item,
      id: item.path.replace(/\/projects\//, ""),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

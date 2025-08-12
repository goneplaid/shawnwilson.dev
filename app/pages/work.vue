<template>
  <main>
    <h1>Work</h1>
    <ContentGrid>
      <ContentList title="Relevant Experience">
        <ContentListItem
          v-for="experience in relevantExperiences"
          :drawer-id="DRAWER_ID"
          :content-id="experience.path"
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
          :content-id="project.path"
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
      v-if="selectedItem"
      :id="DRAWER_ID"
      :title="selectedContent.title"
      :subtitle="selectedContent.subtitle"
      :supplemental="selectedContent.supplemental"
      @close="handleClose"
    >
      Drawer content
    </ContentDrawer>
  </main>
</template>

<script setup lang="ts">
import ContentGrid from "~/components/ContentGrid.vue";
import ContentList from "~/components/work/ContentList.vue";
import ContentListItem from "~/components/work/ContentListItem.vue";
import ContentDrawer from "~/components/work/ContentDrawer.vue";
import type { ExperienceContent, ProjectContent } from "~/lib/types";

definePageMeta({
  layout: "default-layout",
});

const DRAWER_ID = "work-content-drawer";

const relevantExperiences = ref<ExperienceContent[]>([]);
const selectedProjects = ref<ProjectContent[]>([]);

const allItems = computed(() => [
  ...relevantExperiences.value,
  ...selectedProjects.value,
]);

const { selectedItem, setHashLocation } = useHashNav(allItems);

const handleClose = async () => {
  setHashLocation(undefined);
};

const selectedContent = computed(() => ({
  title: "Here's a thing",
  subtitle: "A subtitle",
  supplemental: "1979",
}));

onMounted(async () => {
  try {
    const [expResponse, projResponse] = await Promise.all([
      queryCollection("experience").all(),
      queryCollection("projects").all(),
    ]);

    relevantExperiences.value = expResponse.map((item) => ({
      ...item,
      path: item.path.replace("experience/", ""),
    }));

    selectedProjects.value = projResponse.map((item) => ({
      ...item,
      path: item.path.replace("projects/", ""),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

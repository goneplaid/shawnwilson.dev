<template>
  <main>
    <h1>Work</h1>
    <ContentGrid>
      <ContentColumn title="Relevant Experience">
        <li v-for="experience in relevantExperiences">
          <WorkExperienceContent
            :company="experience.company"
            :job-title="experience.jobTitle"
            :duration="experience.duration"
            :description="experience.description"
          />
        </li>
      </ContentColumn>
      <ContentColumn title="Selected Projects">
        <li v-for="project in selectedProjects">
          <WorkProjectContent
            :project="project.project"
            :year="project.year"
            :description="project.description"
            :tools="project.tools"
          />
        </li>
      </ContentColumn>
    </ContentGrid>
  </main>
</template>

<script setup lang="ts">
import ContentGrid from "~/components/ContentGrid.vue";
import ContentColumn from "~/components/work/ContentColumn.vue";
import type {
  ExperienceCollectionItem,
  ProjectsCollectionItem,
} from "@nuxt/content";
import type { ExperienceContent, ProjectContent } from "~/lib/types";

const relevantExperiences = ref<ExperienceContent[]>([]);
const selectedProjects = ref<ProjectContent[]>([]);

definePageMeta({
  layout: "default-layout",
});

onMounted(async () => {
  try {
    const [expResponse, projResponse] = await Promise.all([
      queryCollection("experience").all(),
      queryCollection("projects").all(),
    ]);

    relevantExperiences.value = expResponse.map(
      (item: ExperienceCollectionItem) => ({
        ...item,
        path: item.path?.replace("experience/", ""),
      })
    );

    selectedProjects.value = projResponse.map(
      (item: ProjectsCollectionItem) => ({
        ...item,
        path: item.path?.replace("project/", ""),
      })
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

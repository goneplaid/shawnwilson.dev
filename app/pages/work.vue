<template>
  <div class="work">
    <h1>Work</h1>
    <LayoutContentGrid>
      <WorkContentColumn title="Relevant Experience" :content="experience" />
      <WorkContentColumn title="Selected Projects" :content="projects" />
    </LayoutContentGrid>
  </div>
</template>

<script setup lang="ts">
const { data: experienceData } = await useAsyncData("experience", () =>
  queryCollection("experience").all()
);

const experience = computed(
  () =>
    experienceData.value?.map((item) => ({
      ...item,
      path: item.path.replace("experience/", ""),
    })) || []
);

const { data: projectData } = await useAsyncData("projects", () =>
  queryCollection("projects").all()
);

const projects = computed(
  () =>
    projectData.value?.map((item) => ({
      ...item,
      path: item.path.replace("projects/", ""),
    })) || []
);
</script>

<style scoped>
.work {
  @apply mt-32;
}

.work__column {
  @apply flex flex-col mb-4 md:mb-0;
}

h3 {
  @apply pb-4 border-b-2 border-muted-foreground;
}
</style>

<template>
  <div class="work">
    <h1>Work</h1>

    <LayoutContentGrid>
      <div class="work__column">
        <h3 class="work__experience-title">Relevant Experience</h3>
        <WorkRelevantExperience />
      </div>
      <div class="work__column">
        <h3 class="work__projects-title">Selected Projects</h3>
        <WorkSelectedProjects />
      </div>
    </LayoutContentGrid>
  </div>
</template>

<style scoped>
.work {
  @apply mt-32;
}

.work__column {
  @apply flex flex-col mb-4 md:mb-0;
}

h3 {
  @apply pb-4 border-b-2 border-zinc-500;
}
</style>

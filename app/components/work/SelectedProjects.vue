<template>
  <div class="relevant-experience">
    <WorkContentSection
      v-for="item in projects"
      :key="item.path"
      :title="item.title"
      :aside="item.aside"
      :footer="item.footer"
    >
      <ContentRenderer :value="item" />
    </WorkContentSection>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").all()
);
</script>

<style scoped>
.relevant-experience {
  @apply flex flex-col;
}
</style>

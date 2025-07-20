<template>
  <div class="relevant-experience">
    <WorkContentSection
      v-for="item in experience"
      :key="item.path"
      :title="item.title"
      :description="item.description"
      :aside="item.aside"
    >
      <ContentRenderer :value="item" />
    </WorkContentSection>
  </div>
</template>

<script setup lang="ts">
const { data: experience } = await useAsyncData("experience", () =>
  queryCollection("experience").all()
);
</script>

<style scoped>
.relevant-experience {
  @apply flex flex-col;
}
</style>

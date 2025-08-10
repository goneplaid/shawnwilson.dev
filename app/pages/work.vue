<template>
  <main>
    <h1>Work</h1>
    <ContentGrid>
      <ContentColumn title="Relevant Experience" />
      <ContentColumn title="Selected Projects" />
    </ContentGrid>
  </main>
</template>

<script setup lang="ts">
import ContentGrid from "~/components/ContentGrid.vue";
import ContentColumn from "~/components/work/ContentColumn.vue";

definePageMeta({
  layout: "default-layout",
});
</script>

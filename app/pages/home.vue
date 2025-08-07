<template>
  <main>
    <ContentGrid>
      <Card class="intro-card" shadow-level="xl">
        <CardHeader>
          <CardTitle :heading-level="1">Hello 👋</CardTitle>
        </CardHeader>
        <CardContent>
          <article>
            <p>
              I'm a full stack product engineer based in Fresno, California.
            </p>
          </article>
        </CardContent>
      </Card>
    </ContentGrid>
  </main>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContentGrid from "@/components/ContentGrid.vue";

definePageMeta({
  layout: "default-layout",
});
</script>

<style lang="css" scoped>
main {
  @apply mt-24;
}

.intro-card {
  @apply col-span-1 md:col-span-2;
}
</style>

<template>
  <Card>
    <CardHeader class="header">
      <CardTitle class="project">
        {{ project }}
      </CardTitle>
      <span class="year">
        {{ year }}
      </span>
    </CardHeader>
    <CardContent class="content">
      <p class="description">
        {{ description }}
      </p>
      <p class="tools">
        {{ tools }}
      </p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import type { ProjectContent } from "~/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props extends ProjectContent {}

const props = defineProps<Props>();
</script>

<style lang="css" scoped>
.header {
  @apply gap-0 pb-4;
}

.project {
  @apply text-lg font-bold tracking-wide text-foreground font-display flex-1;
}

.year {
  @apply text-muted-foreground text-sm font-sans whitespace-nowrap leading-loose flex-shrink-0 italic;
}

.content {
  @apply space-y-2;
}

.description {
  @apply text-foreground text-sm mb-4;
}

.tools {
  @apply text-muted-foreground text-sm font-sans font-medium;
}
</style>

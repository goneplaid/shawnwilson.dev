<template>
  <Card>
    <CardHeader class="header">
      <CardTitle class="company">
        {{ company }}
      </CardTitle>
      <span class="duration">
        {{ duration }}
      </span>
    </CardHeader>
    <CardContent class="content">
      <p class="job-title">
        {{ jobTitle }}
      </p>
      <p class="description">
        {{ description }}
      </p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import type { ExperienceContent } from "~/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props extends Omit<ExperienceContent, "path"> {}

const props = defineProps<Props>();
</script>

<style lang="css" scoped>
.header {
  @apply gap-0 pb-4;
}

.company {
  @apply text-lg font-bold tracking-wide text-foreground font-display flex-1;
}

.duration {
  @apply text-muted-foreground text-sm font-sans whitespace-nowrap leading-loose flex-shrink-0 italic;
}

.content {
  @apply space-y-2;
}

.job-title {
  @apply text-muted-foreground font-sans font-medium mb-4;
}

.description {
  @apply text-foreground text-sm;
}
</style>

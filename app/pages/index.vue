<template>
  <main id="main-content" role="main" aria-label="Portfolio homepage">
    <header class="hero">
      <h1>ShawnWilson.dev</h1>
      <p role="doc-subtitle">Portfolio site coming soon</p>
    </header>

    <figure role="img" aria-labelledby="portrait-caption">
      <Avatar class="avatar">
        <AvatarImage
          src="/images/portrait.png"
          alt="Professional headshot of Shawn Wilson"
          loading="eager"
        />
        <AvatarFallback class="avatar__fallback"> SW </AvatarFallback>
      </Avatar>
      <figcaption id="portrait-caption" class="sr-only">
        Portrait of Shawn Wilson
      </figcaption>
    </figure>
  </main>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

definePageMeta({
  layout: "default-layout",
});
</script>

<style lang="css" scoped>
#main-content {
  @apply min-h-screen flex flex-col gap-6 items-center justify-center px-4;
}

header {
  @apply text-center space-y-4;
}

p {
  @apply text-muted-foreground;
}

figure[role="img"] {
  @apply mt-6;
}

.avatar {
  @apply w-32 h-32 ring-2 ring-border ring-offset-2 ring-offset-background;
}

.avatar__fallback {
  @apply text-2xl font-semibold bg-muted text-muted-foreground;
}
</style>

<template>
  <header class="site-header">
    <ContentGridLayout class="mb-8">
      <div>
        <h1 class="site-header__title">Shawn Wilson</h1>
      </div>

      <div
        class="site-header__avatar"
        role="img"
        aria-label="Profile photo of Shawn Wilson"
      >
        <Avatar class="w-24 h-24">
          <AvatarImage
            src="/images/portrait.png"
            alt="Shawn Wilson casual headshot"
          />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>
      </div>
    </ContentGridLayout>

    <ContentGridLayout>
      <div>
        <p class="site-header__subtitle" role="doc-subtitle">
          Full Stack Product Engineer
        </p>
        <p class="site-header__tagline" aria-label="Professional tagline">
          Problem → Design → Code → Ship 🚀
        </p>
      </div>
    </ContentGridLayout>
  </header>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContentGridLayout from "~/components/layout/ContentGridLayout.vue";
</script>

<style scoped>
.site-header {
  @apply bg-background;
}

.site-header__title {
  @apply text-4xl lg:text-5xl text-foreground font-display font-bold;
}

.site-header__subtitle {
  @apply text-xl lg:text-2xl font-sans font-medium text-muted-foreground mb-2;
}

.site-header__avatar {
  @apply flex justify-end;
}

.site-header__tagline {
  @apply text-muted-foreground text-lg font-sans;
}
</style>

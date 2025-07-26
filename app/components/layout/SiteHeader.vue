<template>
  <header class="site-header">
    <LayoutContentGrid>
      <div>
        <h3>Shawn Wilson</h3>
      </div>

      <div
        class="site-header__avatar"
        role="img"
        aria-label="Profile photo of Shawn Wilson"
      >
        <Avatar class="w-20 h-20">
          <AvatarImage
            src="/images/portrait.png"
            alt="Shawn Wilson casual headshot"
          />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>
      </div>
    </LayoutContentGrid>

    <LayoutContentGrid class="items-end">
      <div>
        <p class="site-header__title" role="doc-subtitle">
          Full Stack Product Engineer
        </p>
        <p class="site-header__tagline" aria-label="Professional tagline">
          Problem → Design → Code → Ship 🚀
        </p>
      </div>
      <LayoutSiteNav />
    </LayoutContentGrid>
  </header>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<style scoped>
.site-header {
  @apply bg-background mb-2;
}

.site-header__title {
  @apply text-lg lg:text-xl font-sans font-medium text-muted-foreground mb-2;
}

.site-header__avatar {
  @apply flex justify-end rounded-full justify-self-end;
}

.site-header__tagline {
  @apply lg:text-lg text-muted-foreground font-sans;
}
</style>

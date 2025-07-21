<template>
  <header class="site-header">
    <LayoutContentGrid>
      <div>
        <h2>Shawn Wilson</h2>
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
    </LayoutContentGrid>

    <LayoutContentGrid class="items-end">
      <div>
        <p class="site-header__subtitle" role="doc-subtitle">
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
  @apply bg-background mb-4;
}

.site-header__subtitle {
  @apply text-xl lg:text-2xl font-sans font-medium text-muted-foreground mb-2;
}

.site-header__avatar {
  @apply flex justify-end rounded-full justify-self-end;
}

.site-header__tagline {
  @apply text-muted-foreground text-lg font-sans;
}
</style>

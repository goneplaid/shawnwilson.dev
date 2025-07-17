<!-- components/layout/SiteHeader.vue -->
<template>
  <header class="site-header">
    <div class="site-header__container">
      <div class="site-header__grid">
        <div class="site-header__content">
          <h1 class="site-header__name">Shawn Wilson</h1>
          <p class="site-header__title">Full Stack Product Engineer</p>
          <p class="site-header__tagline">Problem → Design → Code → Ship</p>
        </div>

        <div class="site-header__avatar">
          <Avatar class="w-20 h-20">
            <AvatarImage src="/images/portrait.png" alt="Shawn Wilson" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
        </div>

        <!-- Third column reserved for future drawer -->
        <div class="site-header__drawer-space">
          <!-- Intentionally empty for future drawer -->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<style scoped>
.site-header {
  @apply bg-background;
}

.site-header__container {
  @apply max-w-7xl mx-auto px-8 py-12;
}

.site-header__grid {
  @apply grid grid-cols-3 gap-12;
}

.site-header__content {
  /* Content spans first column */
}

.site-header__avatar {
  @apply flex justify-end;
  /* Avatar positioned at the end of second column */
}

.site-header__drawer-space {
  /* Third column reserved for drawer - intentionally empty */
}

.site-header__name {
  @apply text-4xl text-foreground font-display font-extrabold mb-2;
}

.site-header__title {
  @apply text-xl text-muted-foreground font-semibold font-sans mb-4;
}

.site-header__tagline {
  @apply text-muted-foreground font-sans;
}
</style>

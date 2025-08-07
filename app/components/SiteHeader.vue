<template>
  <header role="banner">
    <ContentGrid class="author-section">
      <p class="site-author">Shawn Wilson</p>

      <div class="avatar-wrapper">
        <Avatar class="avatar">
          <AvatarImage
            src="/images/portrait.png"
            alt="Casual headshot of Shawn Wilson"
          />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>
      </div>
    </ContentGrid>

    <ContentGrid class="banner-sub">
      <div>
        <p class="job-title">Full Stack Product Engineer</p>
        <p class="tagline">Problem → Design → Code → Ship 🚀</p>
      </div>
      <SiteNav />
    </ContentGrid>
  </header>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContentGrid from "@/components/ContentGrid.vue";
import SiteNav from "@/components/SiteNav.vue";
</script>

<style lang="css" scoped>
header {
  @apply mb-2;
}

.author-section {
  @apply flex flex-row items-center justify-between mb-8 md:mb-0 md:grid;
}

p.site-author {
  @apply text-5xl font-display font-semibold;
}

.avatar-wrapper {
  @apply flex justify-end rounded-full justify-self-end;
}

.avatar {
  @apply w-20 h-20;
}

.banner-sub {
  @apply items-end;
}

p.job-title {
  @apply text-lg lg:text-xl font-sans font-medium text-muted-foreground mb-2;
}

p.tagline {
  @apply lg:text-lg text-muted-foreground font-sans whitespace-nowrap;
}
</style>

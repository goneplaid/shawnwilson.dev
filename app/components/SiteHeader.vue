<template>
  <header role="banner">
    <ContentGrid>
      <div>
        <h3>Shawn Wilson</h3>
      </div>

      <div
        class="avatar-wrapper"
        role="img"
        aria-label="Profile photo of Shawn Wilson"
      >
        <Avatar class="avatar">
          <AvatarImage
            src="/images/portrait.png"
            alt="Shawn Wilson casual headshot"
          />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>
      </div>
    </ContentGrid>

    <ContentGrid>
      <div>
        <p role="doc-subtitle">Full Stack Product Engineer</p>
        <p aria-label="Professional tagline">
          Problem → Design → Code → Ship 🚀
        </p>
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
  @apply bg-background mb-2;
}

.avatar-wrapper {
  @apply flex justify-end rounded-full justify-self-end;
}

.avatar {
  @apply w-20 h-20;
}

p[role="doc-subtitle"] {
  @apply text-lg lg:text-xl font-sans font-medium text-muted-foreground mb-2;
}

p[aria-label="Professional tagline"] {
  @apply lg:text-lg text-muted-foreground font-sans;
}
</style>

<template>
  <main
    id="main-content"
    class="min-h-screen flex flex-col gap-6 items-center justify-center px-4"
    role="main"
    aria-label="Portfolio homepage"
  >
    <header class="text-center space-y-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
        ShawnWilson.dev
      </h1>
      <p
        class="text-2xl md:text-3xl lg:text-4xl text-muted-foreground"
        role="doc-subtitle"
      >
        In development 🏗️
      </p>
    </header>

    <figure class="mt-6" role="img" aria-labelledby="portrait-caption">
      <Avatar
        class="w-32 h-32 ring-2 ring-border ring-offset-2 ring-offset-background"
      >
        <AvatarImage
          src="/images/portrait.png"
          alt="Professional headshot of Shawn Wilson"
          loading="eager"
        />
        <AvatarFallback
          class="text-2xl font-semibold bg-muted text-muted-foreground"
        >
          SW
        </AvatarFallback>
      </Avatar>
      <figcaption id="portrait-caption" class="sr-only">
        Portrait of Shawn Wilson
      </figcaption>
    </figure>
  </main>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

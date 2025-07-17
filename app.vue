<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div class="min-h-screen bg-background flex items-center justify-center">
    <div class="text-center">
      <Avatar class="w-32 h-32 mx-auto">
        <AvatarImage src="/images/portrait.png" alt="Shawn Wilson" />
        <AvatarFallback>SW</AvatarFallback>
      </Avatar>
      <h1 class="mt-6 text-4xl font-extrabold text-foreground font-display">
        Shawn Wilson
      </h1>
      <p class="mt-2 text-lg text-muted-foreground font-medium font-sans">
        Full-Stack Product Engineer
      </p>
    </div>
  </div>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div class="min-h-screen bg-zinc-50 flex items-center justify-center">
    <div class="text-center">
      <Avatar class="w-32 h-32 mx-auto">
        <AvatarImage src="/images/portrait.png" alt="Shawn Wilson" />
        <AvatarFallback>SW</AvatarFallback>
      </Avatar>
      <h1 class="mt-6 text-4xl font-extrabold text-zinc-900 font-display">
        Shawn Wilson
      </h1>
      <p class="mt-2 text-lg text-zinc-600 font-medium font-sans">
        Full-Stack Product Engineer
      </p>
    </div>
  </div>
</template>

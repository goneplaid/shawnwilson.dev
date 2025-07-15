<template>
  <div class="min-h-screen bg-zinc-100 flex items-center justify-center">
    <Avatar class="w-32 h-32">
      <AvatarImage src="/images/portrait.png" alt="Shawn Wilson" />
      <AvatarFallback>SW</AvatarFallback>
    </Avatar>
  </div>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

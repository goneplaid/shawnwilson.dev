<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div class="min-h-screen bg-zinc-50 flex items-center justify-center">
    <Avatar class="w-32 h-32">
      <AvatarImage src="/images/portrait.png" alt="Shawn Wilson" />
      <AvatarFallback>SW</AvatarFallback>
    </Avatar>
  </div>
</template>

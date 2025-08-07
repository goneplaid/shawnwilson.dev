<template>
  <slot />
</template>

<script setup lang="ts">
import { useAnalytics } from "@/composables/useAnalytics";

useAnalytics();
</script>

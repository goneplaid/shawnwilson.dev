<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

interface Props {
  class?: HTMLAttributes["class"]
  shadowLevel?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
}

const props = withDefaults(defineProps<Props>(), {
  shadowLevel: "md",
})

const shadowClass = computed(() => {
  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl"
  }
  return shadows[props.shadowLevel]
})
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border bg-card text-card-foreground',
        shadowClass,
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

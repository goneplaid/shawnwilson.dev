<script lang="ts" setup>
import type { DrawerTitleProps } from "vaul-vue";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DrawerTitle } from "vaul-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  DrawerTitleProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <DrawerTitle
    data-slot="drawer-title"
    v-bind="delegatedProps"
    :class="
      cn(
        'text-3xl lg:text-4xl text-foreground font-semibold leading-5',
        props.class
      )
    "
  >
    <slot />
  </DrawerTitle>
</template>

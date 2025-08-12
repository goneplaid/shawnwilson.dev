<script lang="ts" setup>
import type { DrawerTitleProps } from "vaul-vue";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DrawerTitle } from "vaul-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  DrawerTitleProps & {
    class?: HTMLAttributes["class"];
    onClose?: (() => void) | (() => Promise<void>);
  }
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
        props.onClose && 'flex flex-row items-center justify-between',
        props.class
      )
    "
    @close="props.onClose"
  >
    <slot />
    <button
      v-if="props.onClose"
      type="button"
      aria-label="Close drawer"
      class="-mr-2 inline-flex items-center justify-center rounded-md p-2 min-h-[44px] min-w-[44px] text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
      @click="props.onClose"
      @keydown.escape="props.onClose"
    >
      <Icon
        name="lucide:x"
        class="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
        aria-hidden="true"
      />
      <span class="sr-only">Close</span>
    </button>
  </DrawerTitle>
</template>

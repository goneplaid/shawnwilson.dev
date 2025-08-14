<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { useForwardPropsEmits } from "reka-ui";
import { DrawerContent, DrawerPortal } from "vaul-vue";
import { cn } from "@/lib/utils";
import DrawerOverlay from "./DrawerOverlay.vue";

const props = withDefaults(
  defineProps<
    DialogContentProps & { id?: string; class?: HTMLAttributes["class"] }
  >(),
  {
    id: "drawer",
    class: undefined,
  }
);
const emits = defineEmits<DialogContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      data-slot="drawer-content"
      v-bind="forwarded"
      :class="
        cn(
          `vaul-drawer group/drawer-content bg-background fixed z-50 flex h-auto flex-col`,
          `data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:border-l-2 data-[vaul-drawer-direction=right]:border-l-muted-foreground`,
          `data-[vaul-drawer-direction=right]:right-0`,
          props.class
        )
      "
    >
      <div
        class="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
      />
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>

<style lang="css">
:root {
  --main-width: calc(80rem - theme("spacing.24"));
  --gutter-width: calc((100% - var(--main-width)) / 2);
  --column-width: calc((var(--main-width) - theme("spacing.24")) / 3);
}

.vaul-drawer {
  @apply w-full;
}

@media (min-width: theme("screens.sm")) {
  .vaul-drawer {
    @apply w-1/2;
  }
}

@media (min-width: theme("screens.md")) {
  .vaul-drawer {
    @apply w-1/2;
  }
}

@media (min-width: theme("screens.xl")) {
  :root {
    --main-width: calc(80rem - theme("spacing.24"));
    --gutter-width: calc((100% - var(--main-width)) / 2);
    --column-width: calc((var(--main-width) - theme("spacing.24")) / 3);
  }

  .vaul-drawer {
    width: calc((var(--gutter-width)) + var(--column-width));
  }
}
</style>

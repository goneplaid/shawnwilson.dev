<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { useForwardPropsEmits } from "reka-ui";
import { DrawerContent, DrawerPortal } from "vaul-vue";
import { cn } from "@/lib/utils";
import { computed, onMounted, nextTick } from "vue";
import DrawerOverlay from "./DrawerOverlay.vue";
import { useDrawerPositioning } from "@/composables/useDrawerPositioning";

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

const { drawerLeftPosition, drawerWidth, calculateDrawerPosition } =
  useDrawerPositioning();

onMounted(() => {
  nextTick(() => {
    calculateDrawerPosition();
  });
});

const rightDrawerStyles = computed(() => {
  return {
    left: `${drawerLeftPosition.value}px`,
    width: `${drawerWidth.value}px`,
    right: "auto",
  };
});
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      data-slot="drawer-content"
      v-bind="forwarded"
      :style="rightDrawerStyles"
      :class="
        cn(
          `group/drawer-content bg-background fixed z-50 flex h-auto flex-col`,
          // Modified right drawer styles - removed width classes since we're using dynamic positioning
          // for this use case.
          `data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:border-l-2 data-[vaul-drawer-direction=right]:border-l-muted-foreground`,
          // TODO: Handle these other directions, if needed (we probably won't even use them tbh)
          `data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg`,
          `data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg`,
          `data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm`,
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

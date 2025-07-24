<template>
  <div class="work">
    <h1>Work</h1>
    <LayoutContentGrid>
      <WorkContentColumn title="Relevant Experience" :content="experience" />
      <WorkContentColumn title="Selected Projects" :content="projects" />
    </LayoutContentGrid>

    <Drawer
      v-if="selectedItem"
      direction="right"
      :modal="false"
      :open="!!selectedItem"
      @close="selectedItem = null"
    >
      <DrawerContent>
        <div class="work__aside">
          <DrawerHeader>
            <DrawerTitle>{{ selectedItem?.title || "Details" }}</DrawerTitle>
          </DrawerHeader>
          <div class="work__aside-content">
            <div class="work__aside-subtitle">
              <h4>{{ selectedItem?.description || selectedItem?.footer }}</h4>
              <span v-if="selectedItem">
                {{ selectedItem?.aside }}
              </span>
            </div>
            <ContentRenderer v-if="selectedItem" :value="selectedItem" />
          </div>
          <DrawerFooter>
            <DrawerClose as-child>
              <button @click="selectedItem = null">Close</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { WorkContentSection } from "~/types/content";

const experienceData = ref<WorkContentSection[]>([]);
const projectData = ref<WorkContentSection[]>([]);
const selectedItem = ref<WorkContentSection | null>(null);

onMounted(async () => {
  try {
    const [expResponse, projResponse] = await Promise.all([
      queryCollection("experience").all(),
      queryCollection("projects").all(),
    ]);

    experienceData.value = expResponse;
    projectData.value = projResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const experience = computed(
  () =>
    experienceData.value?.map((item) => ({
      ...item,
      path: item.path?.replace("experience/", ""),
    })) || []
);

const projects = computed(
  () =>
    projectData.value?.map((item) => ({
      ...item,
      path: item.path?.replace("projects/", ""),
    })) || []
);

const route = useRoute();

watch(
  [() => route.hash, experience, projects],
  ([hash, experience, projects]) => {
    if (hash && hash.length > 1) {
      const itemId = hash.substring(1);

      const allItems = [...experience, ...projects];
      const foundItem = allItems.find(
        (item) => item.path?.replace(/\//, "") === itemId
      );

      selectedItem.value = foundItem || null;
    } else {
      selectedItem.value = null;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.work {
  @apply mt-32;
}

.work__column {
  @apply flex flex-col mb-4 md:mb-0;
}

.work__aside {
  @apply mx-auto w-full;
}

.work__aside-content {
  @apply p-16 pt-0;
}

.work__aside-subtitle {
  @apply flex flex-row justify-between pb-4 mb-10  border-b-2 border-muted-foreground;

  span {
    @apply text-muted-foreground text-base font-sans whitespace-nowrap leading-loose;
  }
}
</style>

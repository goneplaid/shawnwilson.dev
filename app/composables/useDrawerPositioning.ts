// composables/useDrawerPositioning.ts
import { ref, onMounted, onUnmounted } from "vue";

export const useDrawerPositioning = () => {
  const drawerLeftPosition = ref(0);
  const drawerWidth = ref(0);

  const calculateDrawerPosition = () => {
    const siteWrapper = document.querySelector(".site-wrapper");
    if (!siteWrapper) return;

    const wrapperRect = siteWrapper.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    const contentRightEdge = wrapperRect.right;

    // TODO: we still need to handle responsive cases where only one or two columns
    // are shown.

    // Based on TW breakpoint config and spacing specs:
    const LARGE_BREAKPOINT = 1280;
    const TOTAL_COLUMNS = 3;
    const GAPS_BETWEEN_COLUMNS = 2;
    const WRAPPER_PADDING_REM = 3; // p-12 = 3rem on each side
    const GRID_GAP_REM = 4; // gap-16 = 4rem
    const REM_TO_PX = 16; // 1rem = 16px

    const isLargeScreen = window.innerWidth >= LARGE_BREAKPOINT;

    if (isLargeScreen) {
      // Calculate padding and gap values in pixels
      const horizontalPaddingTotal = WRAPPER_PADDING_REM * REM_TO_PX * 2; // both sides
      const gapWidthPx = GRID_GAP_REM * REM_TO_PX;
      const totalGapWidth = gapWidthPx * GAPS_BETWEEN_COLUMNS;
      const leftPadding = WRAPPER_PADDING_REM * REM_TO_PX;

      // Calculate the width of each column in the 3-column grid
      const contentWidth = wrapperRect.width - horizontalPaddingTotal;
      const columnWidth = (contentWidth - totalGapWidth) / TOTAL_COLUMNS;

      // Position for start of 3rd column (index 2)
      const columnsBeforeThird = 2;
      const thirdColumnStart =
        wrapperRect.left +
        leftPadding +
        columnWidth * columnsBeforeThird +
        totalGapWidth;

      drawerLeftPosition.value = thirdColumnStart;
      drawerWidth.value = viewportWidth - thirdColumnStart;
    } else {
      // For smaller screens, position at right edge of content
      drawerLeftPosition.value = contentRightEdge;
      drawerWidth.value = viewportWidth - contentRightEdge;
    }
  };

  onMounted(() => {
    calculateDrawerPosition();
    window.addEventListener("resize", calculateDrawerPosition);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", calculateDrawerPosition);
  });

  return {
    drawerLeftPosition,
    drawerWidth,
    calculateDrawerPosition,
  };
};

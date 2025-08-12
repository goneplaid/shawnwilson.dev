/**
 * Composable for managing hash-based navigation with optional item selection.
 *
 * Provides hash navigation functionality and optionally tracks selected items
 * based on the current route hash. When items are provided, automatically
 * manages selectedItem state by matching the hash to items with a path property.
 */
type NavLocation = string | undefined;
export type SelectedLocation = {
  path: String;
  name: String;
};

export const useHashNav = <T extends { path?: string }>(items?: Ref<T[]>) => {
  const route = useRoute();
  const router = useRouter();

  const selectedItem = ref<T | null>(null);

  const pushHash = async (itemName: NavLocation) => {
    await router.push({
      path: route.path,
      hash: itemName,
    });
  };

  const setHashLocation = (itemName: NavLocation) => {
    let targetHash: string | undefined;
    const { hash } = route;
    const currentHash = hash.substring(1); // Remove the leading '#'

    if (itemName && itemName !== currentHash) {
      targetHash = `#${itemName}`;
    } else {
      targetHash = undefined;
    }

    pushHash(targetHash);
  };

  // Only add watcher if items are provided. This is used for setting the
  // selected item based on the current route hash and protects against
  // items being set that aren't whitelisted in the items array.
  if (items) {
    watch(
      [() => route.hash, items],
      ([hash, itemsValue]) => {
        if (hash && hash.length > 1) {
          const itemId = hash.substring(1);

          const foundItem = itemsValue.find(
            (item) => item.path?.replace(/\//, "") === itemId
          );

          selectedItem.value = foundItem || null;
        } else {
          selectedItem.value = null;
        }
      },
      { immediate: true }
    );
  }

  return {
    selectedItem: readonly(selectedItem),
    setHashLocation,
  };
};

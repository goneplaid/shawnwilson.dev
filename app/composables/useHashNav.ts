type NavLocation = string | undefined;

export const useHashNav = () => {
  const route = useRoute();
  const router = useRouter();

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

  return {
    setHashLocation,
  };
};

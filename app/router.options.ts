import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else if (from.hash && to.hash === "") {
      // If navigating from a hash to an empty hash (clearing the hash),
      // return an empty object or a falsy value to prevent scrolling. We
      // needed this for the dynamic content drawer so it doesn't jump back
      // to the top when the hash gets cleared.
      return {};
    } else {
      return { top: 0 };
    }
  },
};

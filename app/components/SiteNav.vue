<template>
  <nav role="navigation" aria-label="Main navigation">
    <ul role="list">
      <li>
        <NuxtLink
          to="/home"
          :aria-current="$route.path === '/home' ? 'page' : undefined"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/work"
          :aria-current="$route.path === '/work' ? 'page' : undefined"
        >
          Work
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
nav[role="navigation"] {
  @apply flex md:justify-end;
}

ul[role="list"] {
  @apply flex space-x-6 list-none m-0 p-0;
}

li {
  @apply flex items-center;
}

a {
  @apply px-1 py-2 inline-flex items-center transition-colors duration-200;
  @apply text-lg font-sans underline underline-offset-8 text-primary hover:text-muted-foreground focus:text-muted-foreground;
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm;
  @apply min-h-[44px];
}

a[aria-current="page"] {
  @apply text-foreground font-medium;
  @apply decoration-2;
}

/* Come back to this and make site-wide styles after all stylistic and typographic concerns have been settled */
@media (prefers-contrast: high) {
  a {
    @apply decoration-2;
  }

  a[aria-current="page"] {
    @apply decoration-[3px];
  }
}
</style>

<template>
  <nav class="nav">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/work">Work</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/writing">Writing</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  @apply flex justify-end;

  ul {
    @apply flex space-x-6;
  }

  a {
    @apply lg:text-lg font-sans underline underline-offset-8 text-primary hover:text-muted-foreground transition-colors duration-200;
  }
}
</style>

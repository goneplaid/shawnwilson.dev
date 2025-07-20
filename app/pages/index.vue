<template>
  <div class="home">
    <h1>Hello 👋</h1>
    <LayoutContentGrid>
      <article>
        <p>
          I'm Shawn Wilson, a full stack product engineer based in Fresno,
          California.
        </p>
        <p>I enjoy making and reading things.</p>
      </article>
    </LayoutContentGrid>
  </div>
</template>

<style scoped>
.home {
  @apply mt-32;
}

article {
  @apply flex flex-col gap-4;
}
</style>

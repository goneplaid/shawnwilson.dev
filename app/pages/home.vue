<template>
  <main>
    <h1>Hello 👋</h1>
    <article>
      <p>I'm a full stack product engineer based in Fresno, California.</p>
      <p>I really like building things.</p>
    </article>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main-layout",
});
</script>

<style lang="css" scoped>
main {
  @apply mt-24;
}
</style>

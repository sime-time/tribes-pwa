<script setup lang="ts">
import SignOutButton from "~/components/SignOutButton.vue";
</script>

<template>
  <main class="container flex flex-col items-center justify-center gap-10 h-[50vh]">
    <h1 class="text-4xl font-bold">Welcome</h1>
    <div>
      <SignOutButton />
    </div>
  </main>
</template>

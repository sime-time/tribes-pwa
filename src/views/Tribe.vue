<script setup lang="ts">
import TabDock from "~/components/TabDock.vue";
</script>

<template>
  <main class="container flex flex-col items-center justify-center gap-8 h-screen">
    <h1 class="text-2xl font-semibold text-neutral-content">Join a Tribe</h1>
    <p class="opacity-80">Tap "+" to add your first tribe</p>

    <TabDock tab="tribe" />
  </main>
</template>

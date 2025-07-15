<script setup lang="ts">
import TabDock from "~/components/TabDock.vue";
import NavHome from "~/components/NavHome.vue";
import HabitCircle from "~/components/HabitCircle.vue";
</script>

<template>
  <NavHome />
  <main class="container flex flex-col items-center justify-center gap-8 my-16">
    <h1 class="text-2xl font-semibold text-neutral-content"> No Habits yet</h1>
    <p class="opacity-80">Tap "+" to add your first habit</p>
    <HabitCircle />
  </main>
  <TabDock tab="habits" />
</template>

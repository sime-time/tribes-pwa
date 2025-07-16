<script setup lang="ts">
import TabDock from "~/components/TabDock.vue";
import NavHome from "~/components/NavHome.vue";
import HabitCard from "~/components/habit/HabitCard.vue";
import TotalHabitProgress from "~/components/habit/TotalHabitProgress.vue";
</script>

<template>
  <NavHome />
  <main class="flex flex-col items-center gap-8 mt-16 px-[1rem]">
    <TotalHabitProgress :percent="62" />
    <div class="grid grid-cols-1 gap-4 w-full">
      <HabitCard />
      <HabitCard />
      <HabitCard />
    </div>
  </main>
  <TabDock tab="habits" />
</template>

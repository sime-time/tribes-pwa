<script setup lang="ts">
import TabDock from "~/components/TabDock.vue";
import HabitNavBar from "~/components/habit/HabitNavBar.vue";
import HabitCard from "~/components/habit/HabitCard.vue";
import HabitProgressTotal from "~/components/habit/HabitProgressTotal.vue";
</script>

<template>
  <HabitNavBar />
  <main class="flex flex-col items-center gap-8 mt-12 px-[1rem] mb-dock">
    <HabitProgressTotal :percent="62" />
    <div class="grid grid-cols-1 gap-4 w-full">
      <HabitCard name="meditate" :value="20" unit="min" />
      <HabitCard name="workout" :value="1" unit="count" />
      <HabitCard name="reduce screentime" :value="30" unit="min" />
    </div>
  </main>
  <TabDock tab="habits" />
</template>

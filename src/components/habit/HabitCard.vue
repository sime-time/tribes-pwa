<script setup lang="ts">
import HabitProgress from "./HabitProgress.vue";
</script>

<template>
  <div class="card bg-base-100 flex flex-row justify-between items-center">
    <div class="card-body p-4">
      <h2 class="card-title">Meditate</h2>
      <p>20 min</p>
    </div>
    <div class="card-actions p-2">
      <HabitProgress :progress="45" />
    </div>
  </div>
</template>

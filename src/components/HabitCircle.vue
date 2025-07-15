<script setup lang="ts">
import { ref } from 'vue';
import type { ChartData, ChartOptions } from 'chart.js';
import DoughnutChart from '~/components/charts/DoughnutChart.vue';

// --- Chart Data ---
// This is the data that will be displayed in the chart.
// It's reactive, so if you change this data, the chart will update.
const data = ref<ChartData<'doughnut'>>({
  labels: ['Completed', 'Remaining'],
  datasets: [
    {
      backgroundColor: ['#4ade80', '#374151'], // Green for completed, gray for remaining
      data: [75, 25], // Example: 75% progress
      borderWidth: 0, // No border for a cleaner look
    },
  ],
});

// --- Chart Options ---
// This object allows you to customize the chart's appearance and behavior.
const options = ref<ChartOptions<'doughnut'>>({
  responsive: true, // Make the chart responsive
  maintainAspectRatio: false, // Allow the chart to fill its container
  cutout: '80%', // The size of the hole in the middle, creating the "donut" effect
  plugins: {
    legend: {
      display: false, // Hide the default legend
    },
  },
});
</script>

<template>
  <div class="w-64 h-64">
    <DoughnutChart :chart-data="data" :chart-options="options" />
  </div>
</template>

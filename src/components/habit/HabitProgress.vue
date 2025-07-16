<script setup lang="ts">
import { ref, computed } from "vue";
import type { ChartData, ChartOptions } from "chart.js";
import DoughnutChart from "~/components/charts/DoughnutChart.vue";

const props = defineProps<{
  progress: number;
}>();

const backgroundColor = computed(() =>
  props.progress === 100 ? ["#4ade80", "#242424"] : ["#ff4641", "#242424"],
);
const percentComplete = computed(() => [props.progress, 100 - props.progress]);
const borderRadius = computed(() =>
  props.progress === 100 || props.progress === 0 ? 0 : 6,
);

// This is the data that will be displayed in the chart.
// It's reactive, so if you change this data, the chart will update.
const data = ref<ChartData<"doughnut">>({
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      label: "Progress",
      backgroundColor: backgroundColor.value,
      data: percentComplete.value,
      borderWidth: 0,
      borderRadius: borderRadius.value,
    },
  ],
});

// Customize the chart's appearance and behavior.
const options = ref<ChartOptions<"doughnut">>({
  responsive: true,
  maintainAspectRatio: true, // Allow the chart to fill its container
  cutout: "75%", // The size of the hole in the middle, creating the "donut" effect
  circumference: 360,
  plugins: {
    legend: {
      display: false, // Hide the default legend
    },
  },
});
</script>

<template>
  <div class="relative size-14">
    <DoughnutChart :chart-data="data" :chart-options="options" />
    <div class="absolute inset-0 flex gap-1 items-center justify-center pointer-events-none">
      <span class="text-md font-bold">{{ progress }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconMeditation from "~icons/solar/meditation-outline";
import IconBook from "~icons/solar/book-2-linear";
import IconDumbbell from "~icons/solar/dumbbell-large-outline";
import IconTreadmill from "~icons/solar/treadmill-bold";
import IconAlarm from "~icons/solar/alarm-outline";
import IconPlus from "~icons/tabler/plus";
</script>

<template>
  <div class="grid grid-cols-6 gap-2">
    <button type="button" class="btn btn-circle btn-lg size-13 bg-primary text-neutral-content text-xl">
      <icon-meditation />
    </button>
    <button type="button" class="btn btn-circle btn-lg size-13 bg-base-100 text-neutral-content text-xl">
      <icon-dumbbell />
    </button>
    <button type="button" class="btn btn-circle btn-lg size-13 bg-base-100 text-neutral-content text-xl">
      <icon-book />
    </button>
    <button type="button" class="btn btn-circle btn-lg size-13 bg-base-100 text-neutral-content text-xl">
      <icon-treadmill />
    </button>
    <button type="button" class="btn btn-circle btn-lg size-13 bg-base-100 text-neutral-content text-xl">
      <icon-alarm />
    </button>
    <button type="button" class="btn btn-circle btn-lg size-13 bg-base-100 text-neutral-content text-xl">
      <icon-plus />
    </button>
  </div>
</template>

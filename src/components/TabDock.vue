<script setup lang="ts">
import IconChecklist from "~icons/solar/checklist-minimalistic-outline"
import IconGroup from "~icons/solar/users-group-rounded-linear"
import IconAddCircle from "~icons/solar/add-circle-bold"
</script>

<template>
  <div class="dock bg-neutral text-neutral-content">
    <button class="dock-active">
      <icon-checklist style="font-size: 1.2rem" />
      <span class="dock-label">Habits</span>
    </button>

    <button>
      <div class="bg-neutral-content rounded-full p-0">
        <icon-add-circle style="font-size: 3rem; color: var(--color-primary);" />
      </div>
    </button>

    <button>
      <icon-group style="font-size: 1.2rem" />
      <span class="dock-label">Tribe</span>
    </button>
  </div>
</template>

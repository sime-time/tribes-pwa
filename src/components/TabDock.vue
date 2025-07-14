<script setup lang="ts">
import { RouterLink } from "vue-router";
import IconChecklist from "~icons/solar/checklist-minimalistic-outline"
import IconGroup from "~icons/solar/users-group-rounded-linear"
import IconAddCircle from "~icons/solar/add-circle-bold"

defineProps<{
  tab: string;
}>();
</script>

<template>
  <div class="dock bg-neutral text-neutral-content">
    <router-link to="/" :class="tab === 'habits' ? 'dock-active' : ''">
      <icon-checklist style="font-size: 1.2rem" />
      <span class="dock-label">Habits</span>
    </router-link>

    <button>
      <icon-add-circle style="font-size: 3rem; color: var(--color-primary);" />
    </button>

    <router-link to="/tribe" :class="tab === 'tribe' ? 'dock-active' : ''">
      <icon-group style="font-size: 1.2rem" />
      <span class="dock-label">Tribe</span>
    </router-link>
  </div>
</template>

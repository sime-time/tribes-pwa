<script setup lang="ts">
import SignOutButton from "~/components/SignOutButton.vue";
import TabDock from "~/components/TabDock.vue";
</script>

<template>
  <main class="container flex flex-col items-center justify-center gap-8 h-screen">
    <h1 class="text-2xl font-semibold text-neutral-content"> No Habits yet</h1>
    <p class="opacity-80">Tap "+" to add your first habit</p>

    <div>
      <SignOutButton />
    </div>
    <TabDock tab="habits" />
  </main>
</template>

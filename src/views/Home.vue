<script setup lang="ts">
import SignOutButton from "~/components/SignOutButton.vue";
import TabDock from "~/components/TabDock.vue";
import { useAuthStore } from "~/stores/auth-store";

const authStore = useAuthStore();
const { user } = authStore;
</script>

<template>
  <main class="container flex flex-col items-center justify-center gap-10 h-[50vh]">
    <h1 class="text-4xl font-bold">Welcome, <span class="text-primary">{{ user?.name }}</span></h1>

    <div>
      <SignOutButton />
    </div>
    <TabDock />
  </main>
</template>

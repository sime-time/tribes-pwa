<script setup lang="ts">
import { useAuthStore } from "~/stores/auth-store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { loading } = storeToRefs(authStore);

async function handleSignOut() {
  await authStore.signOut();
}
</script>

<template>
  <button class="btn btn-accent btn-lg" @click="handleSignOut">
    <span v-if="loading">Signing Out...</span>
    <span v-else>Sign Out</span>
  </button>
</template>

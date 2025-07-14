<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth-store";
import { useRoute } from "vue-router";

const authStore = useAuthStore();
const { loading } = storeToRefs(authStore);
const { verifyEmailCode, sendCodeToEmail } = authStore;

const route = useRoute();
const email = route.query.address as string;
const code = ref();

async function handleVerification() {
  verifyEmailCode(email, code.value);
}

onMounted(async () => await sendCodeToEmail(email));
</script>

<template>
  <main class="container flex flex-col items-center justify-center h-screen px-5">

    <h1 class="text-primary-content text-4xl font-semibold">Verify Your Email</h1>
    <p class="text-center mb-6 mt-2 text-primary-content">
      We've sent a verification code to
      <span class="text-accent">{{ email }}</span>
    </p>

    <!-- FORM CONTAINER -->
    <form class="fieldset space-y-3" @submit.prevent="handleVerification">

      <!-- VERIFICATION CODE INPUT -->
      <input v-model="code" type="number" class="input input-lg text-center" placeholder="XXXXXX" inputmode="numeric" />

      <!-- VERIFY BUTTON -->
      <button type="submit" class="btn btn-lg btn-primary" :disabled="loading">
        <span v-if="loading">Verifying...</span>
        <span v-else>Verify Email</span>
      </button>

      <!-- RESEND EMAIL -->
      <button type="button" class="text-primary-content text-center text-sm"
        @click="() => sendCodeToEmail(email, true)">
        <p>Didn't get an email? <span class="link link-accent">Resend code to email</span></p>
      </button>
    </form>
  </main>
</template>

<style lang="css" scoped>
/* remove arrows from number input */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

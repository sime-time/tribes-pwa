<script setup lang="ts">
import { haptic } from "~/plugins/haptic";
import { ref } from "vue";
import IconPlus from "~icons/tabler/plus";
import IconX from "~icons/tabler/x";

const habitModal = ref<HTMLDialogElement | null>(null);

function openHabitModal() {
  haptic();
  if (habitModal.value) {
    habitModal.value.showModal();
  }
}
</script>

<template>
  <button class="btn bg-base-100 btn-circle text-primary" @click="openHabitModal">
    <icon-plus style="font-size: 1.4em" />
  </button>
  <dialog ref="habitModal" class="modal">
    <div class="modal-box">
      <!-- Close Modal Button -->
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          <icon-x />
        </button>
      </form>

      <!-- Create New Habit Form -->

      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click on x button to close</p>
    </div>
  </dialog>
</template>

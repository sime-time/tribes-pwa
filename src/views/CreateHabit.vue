<script setup lang="ts">
import CreateHabitNavBar from "~/components/create/CreateHabitNavBar.vue";
import CreateHabitIcons from "~/components/create/CreateHabitIcons.vue";
</script>

<template>
  <create-habit-nav-bar />
  <main class="container mx-auto px-4 py-6">
    <form class="space-y-6">
      <fieldset class="card bg-base-200 p-4 space-y-1">
        <label class="text-sm opacity-50">Habit Name</label>
        <input class="input input-sm input-ghost text-lg px-0" placeholder="e.g. Meditate" />
      </fieldset>

      <fieldset class="card bg-base-200 p-4 space-y-2">
        <label class="text-sm opacity-50">Icon</label>
        <create-habit-icons />
      </fieldset>

      <fieldset class="card bg-base-200 p-4 space-y-2">
        <label class="text-sm opacity-50">Goal</label>
        <div class="grid grid-cols-2 items-center justify-between">
          <input type="number" placeholder="Amount" class="input border-none" />

          <div class="tabs tabs-box justify-end">
            <input type="radio" name="goal-unit" class="tab [--tab-bg:var(--color-primary)]" aria-label="Minutes"
              :checked="true" />
            <input type="radio" name="goal-unit" class="tab [--tab-bg:var(--color-primary)]" aria-label="Count" />
          </div>
        </div>
      </fieldset>

      <fieldset class="card bg-base-200 p-4 space-y-2">
        <div class="flex justify-between items-center">
          <label class="text-lg">Reminders</label>
          <input type="checkbox" :checked="false" class="toggle toggle-xl toggle-primary" />
        </div>
      </fieldset>

      <fieldset class="card bg-base-200 p-4 space-y-2">
        <div class="flex justify-between items-center text-lg">
          <label>Schedule</label>
          <p class="opacity-50">Daily</p>
        </div>
        <div class="divider my-1"></div>
        <div class="grid grid-cols-7">
          <button type="button" class="btn btn-circle bg-primary text-neutral-content text-xl">S</button>
          <button type="button" class="btn btn-circle bg-primary text-neutral-content text-xl">M</button>
          <button type="button" class="btn btn-circle bg-primary text-neutral-content text-xl">T</button>
          <button type="button" class="btn btn-circle bg-primary text-neutral-content text-xl">W</button>
          <button type="button" class="btn btn-circle bg-primary text-neutral-content text-xl">T</button>
          <button type="button" class="btn btn-circle bg-primary text-neutral-content text-xl">F</button>
          <button type="button" class="btn btn-circle bg-primary text-neutral-content text-xl">S</button>
        </div>
      </fieldset>

      <button type="submit" class="btn btn-primary btn-xl text-lg btn-block text-neutral-content">Create
        Habit</button>


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

.toggle {
  border-radius: 9999px;
}

.toggle:before {
  border-radius: 9999px;
}
</style>

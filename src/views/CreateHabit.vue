<script setup lang="ts">
import { reactive, computed } from "vue";
import CreateHabitNavBar from "~/components/create/CreateHabitNavBar.vue";
import CreateHabitIcons from "~/components/create/CreateHabitIcons.vue";

const habit = reactive({
  name: "",
  icon: "",
  goalValue: 0,
  goalUnit: "",
  reminderEnabled: false,
  reminderTime: "",
});

const week = reactive({
  sunday: { value: 0, enabled: true, label: "S" },
  monday: { value: 1, enabled: true, label: "M" },
  tuesday: { value: 2, enabled: true, label: "T" },
  wednesday: { value: 3, enabled: true, label: "W" },
  thursday: { value: 4, enabled: true, label: "T" },
  friday: { value: 5, enabled: true, label: "F" },
  saturday: { value: 6, enabled: true, label: "S" },
});
// returns true if all days in the week are enabled
const isEveryday = computed(() =>
  Object.values(week).every((day) => day.enabled),
);

function changeHabitIcon(icon: string) {
  habit.icon = icon;
}

function onSubmit() {
  console.table(habit);
}
</script>

<template>
  <create-habit-nav-bar />
  <main class="container mx-auto px-4 mt-3 mb-6">
    <form class="space-y-6" @submit.prevent="onSubmit">
      <!-- Habit Name -->
      <fieldset class="card bg-base-200 p-4 space-y-1">
        <label class="text-sm opacity-50">Habit Name</label>
        <input v-model="habit.name" class="input input-sm input-ghost text-lg px-0" placeholder="e.g. Meditate" />
      </fieldset>

      <!-- Icon Select -->
      <fieldset class="card bg-base-200 p-4 space-y-2">
        <label class="text-sm opacity-50">Icon</label>
        <create-habit-icons @habit-icon-selected="changeHabitIcon" />
      </fieldset>

      <!-- Goal Value/Units -->
      <fieldset class="card bg-base-200 p-4 space-y-2">
        <label class="text-sm opacity-50">Goal</label>
        <div class="grid grid-cols-2 items-center justify-between">

          <input type="number" v-model="habit.goalValue" placeholder="0" class="input border-none text-lg" />

          <div class="tabs tabs-sm tabs-box justify-around">
            <input type="radio" name="goal-unit" class="tab [--tab-bg:var(--color-primary)]" aria-label="Minutes"
              value="minutes" v-model="habit.goalUnit" />
            <input type="radio" name="goal-unit" class="tab [--tab-bg:var(--color-primary)]" aria-label="Count"
              value="count" v-model="habit.goalUnit" />
          </div>
        </div>
      </fieldset>

      <!-- Set Reminder -->
      <fieldset class="card bg-base-200 p-4 space-y-2">
        <div class="flex justify-between items-center">
          <label class="text-lg">Reminders</label>
          <input type="checkbox" v-model="habit.reminderEnabled" class="toggle toggle-xl toggle-primary" />
        </div>

        <div v-if="habit.reminderEnabled" class="grid grid-cols-2 items-center">
          <label class="text-lg">Time</label>
          <input type="time" class="input" v-model="habit.reminderTime" />
        </div>
      </fieldset>

      <!-- Set Schedule -->
      <fieldset class="card bg-base-200 p-4 space-y-2">
        <div class="flex justify-between items-center">
          <label class="text-lg">Schedule</label>
          <p class="opacity-50">{{ isEveryday ? "Everyday" : "Weekly" }}</p>
        </div>
        <div class="grid grid-cols-7 gap-2 mt-1">
          <template v-for="day in week" :key="day.value">
            <input type="checkbox" :aria-label="day.label" v-model="day.enabled"
              :class="day.enabled ? 'bg-primary' : 'bg-base-100'" class="btn btn-circle text-neutral-content text-xl" />
          </template>
        </div>
      </fieldset>


      <button type="submit" class="btn btn-primary btn-xl text-lg btn-block text-neutral-content">
        Create Habit
      </button>


    </form>
  </main>
</template>

<style lang="css" scoped>
.toggle {
  border-radius: 9999px;
}

.toggle:before {
  border-radius: 9999px;
}
</style>

<template>
  <div class="form-container w-full max-w-md p-12 mb-8 rounded-lg shadow">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:pr-2">
          <div class="mb-4">
            <input
              v-model="form.email"
              type="email"
              required
              :class="inputClass"
              placeholder="Email"
            />
          </div>

          <div class="mb-4">
            <input
              v-model="form.first_name"
              type="text"
              required
              :class="inputClass"
              placeholder="First Name"
            />
          </div>

          <div class="mb-6">
            <input
              v-model="form.company"
              type="text"
              :class="inputClass"
              placeholder="Company"
            />
          </div>
        </div>
        <div class="w-full md:pl-2">
          <div class="mb-4">
            <input
              v-model="form.phone"
              type="text"
              required
              :class="inputClass"
              placeholder="Phone"
            />
          </div>

          <div class="mb-4">
            <input
              v-model="form.last_name"
              type="text"
              required
              :class="inputClass"
              placeholder="Last Name"
            />
          </div>

          <div class="mb-4">
            <select id="countries" :class="selectClass">
                <option selected disabled>Type of Interest</option>
                <option value="Client">Client</option>
                <option value="Broker">Broker</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="main-btn w-full text-white font-semibold py-3 rounded transition cursor-pointer"
      >
        Submit
      </button>

      <p
        v-if="message"
        :class="success ? 'text-green-600' : 'text-red-600'"
        class="mt-4"
      >
        {{ message }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  company: "",
  interest: "",
});

const message = ref<string | null>(null);
const success = ref(false);
const inputClass = 'placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
const selectClass = 'w-full bg-gray-50 p-3 border border-gray-300 text-black-primary focus:outline-none text-sm'

const onSubmit = async () => {
  message.value = null;
  try {
    const { error } = await useFetch("/api/form", {
      method: "POST",
      body: form.value,
    });
    if (error.value) throw error.value;
    success.value = true;
    message.value = "Thank you for your interest 🎉";
  } catch (err) {
    success.value = false;
    message.value = "An error has occurred. Please try again later.";
  }
};
</script>

<style scoped>
.form-container {
  width: 100%;
  max-width: 900px;
  background: rgba(0, 0, 0, 0.313);
  
}
:invalid {
  color: oklch(55.1% 0.027 264.364);
}

.main-btn {
    background: #0A4B5C;
}

.main-btn:hover {
    background: #053440;
}
</style>

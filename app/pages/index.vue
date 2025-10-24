<template>
  <div class="landing-index">
    <section
      id="top"
      class="mx-auto max-w-5xl flex flex-col items-center text-center py-20 px-4"
    >
      <div class="logo mb-20">
        <img src="../assets/img/logo.svg" alt="" />
      </div>

      <div class="text-1">
        <h1 class="text-white mb-14">
          Unveiling the essence of Riviera living
          <br />
          <span class="text-accent">in the heart of Abu Dhabi</span> 
        </h1>
      </div>

      <div class="text-2">
        <p class="text-white mb-8 text-xl max-w-lg">
          A new chapter is about to unfold on Al Reem Island, where city energy
          meets coastal calm. Shaped by water, your home becomes your private
          resort.
        </p>
      </div>

      <div class="text-2">
        <p class="text-white mb-8 text-xl max-w-lg">
          Discover Riviera Residences by MERED, blending Mediterranean charm
          with the luxury of the Emirates.
        </p>
      </div>

      <div class="text-2">
        <p class="text-white text-xl mb-8 max-w-lg">
          <span class="font-grotesk">Get ready for something extraordinary — </span>
          <br>
          <span class="font-sans-italic text-3xl">launching in November</span>.
        </p>
      </div>

      <div class="text-2">
        <p class="text-white text-xl mb-8 max-w-lg">Register your interest today </p>
      </div>
      
      <Form></Form>
    
      <div class="text-2">
        <p class="text-white text-m max-w-xl mb-8">Attendance is by invitation only — spaces are limited, and QR-coded invites will be sent one week before the event. </p>
      </div>

    <div class="logo mb-1">
        <img class="max-w-30" src="../assets/img/mered.svg" alt="" />
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped>
.landing-index {
  min-height: 100vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("~/assets/img/background.jpg");
  background-position: center center;
  background-size: cover;
}

.landing-index {
}
</style>
<script setup lang="ts">
// Lite rundt foredragsholderbilde oppe til høyre på innholdsslides.
// Rammen deler view-transition-name med bildet på seksjonssliden, så den glir dit ved slidebytte.
// Bildet ligger fast 25 % innzoomet i rammen, så zoomen skjer som en del av selve overgangen
// (view transition krysstoner fra det uzoomede bildet på seksjonssliden til dette), ikke etterpå.
defineProps<{ src: string; alt?: string }>();
</script>

<template>
  <div class="speaker-photo view-transition-speaker-photo">
    <img :src="src" :alt="alt ?? ''" class="speaker-photo-img" />
  </div>
</template>

<style scoped>
.speaker-photo {
  position: absolute;
  top: 1.6rem;
  right: 3.2rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ffe600;
  box-shadow:
    0 0 0 3px #0e0e0e,
    0 0 0 4px #ff3fa4;
}
.speaker-photo-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.5);
  transform-origin: 50% 40%; /* zoom mot ansiktet, ikke midt i bildet */
}
</style>

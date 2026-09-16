<script setup lang="ts">
// Stort rundt foredragsholderbilde til høyre for tittelen på seksjonsslides.
// Samme view-transition-name som SpeakerPhoto, så det krymper inn i hjørnet på neste slide.
defineProps<{ src: string; alt?: string }>()
</script>

<template>
  <img :src="src" :alt="alt ?? ''" class="rr-section-photo view-transition-speaker-photo" />
</template>

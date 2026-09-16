<script setup lang="ts">
// Seksjonsskille: rosa kicker, gul tittel, hvit undertittel, grå foredragsholder.
// `photo`/`photoAlt` settes i slide-frontmatter (photo: /speakers/navn.jpg).
defineProps<{ photo?: string; photoAlt?: string }>()
</script>

<template>
  <div class="slidev-layout rock-section">
    <div class="rock-section-row">
      <div class="rock-section-body">
        <slot />
      </div>
      <SectionPhoto v-if="photo" :src="photo" :alt="photoAlt ?? ''" />
    </div>
  </div>
</template>

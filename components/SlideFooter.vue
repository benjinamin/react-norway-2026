<script setup lang="ts">
// Footer på alle slides: tittel, sidetall, «Presentert av» og Capgemini-logo.
// Monteres fra global-top.vue. Stilene ligger i style.css (.rr-footer*).
withDefaults(defineProps<{ page: number; total: number; title?: string }>(), {
  title: "React Norway 2026 · mine favoritter",
});
</script>

<template>
  <footer class="rr-footer">
    <span class="rr-footer-title">{{ title }}</span>
    <span class="rr-footer-right">
      <img src="/capgemini-logo.svg" alt="Capgemini" class="rr-footer-logo" />
    </span>
  </footer>
</template>

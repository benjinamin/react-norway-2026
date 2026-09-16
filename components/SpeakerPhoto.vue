<script setup lang="ts">
// Lite rundt foredragsholderbilde oppe til høyre på innholdsslides.
// Rammen deler view-transition-name med SectionPhoto, så den glir dit ved slidebytte.
// Bildet ligger fast 25 % innzoomet i rammen, så zoomen skjer som en del av overgangen.
//
// Størrelsen følger tittelen: hvis tittelen (h1.has-speaker rett før denne komponenten
// i markdown) brekker om til to linjer, vokser sirkelen til å matche høyden på de to
// linjene i stedet for å stå fast på én-linjes-størrelsen. Målt med ResizeObserver (ikke
// bare ved mount) fordi Bebas Neue lastes async — fallback-fonten kan vise seg på én
// linje før webfonten swapper inn og tittelen brekker om.
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps<{ src: string; alt?: string }>()

const root = ref<HTMLElement | null>(null)
const sizePx = ref<number | null>(null)
let observer: ResizeObserver | null = null

function measure() {
  const el = root.value
  const titleEl = el?.previousElementSibling as HTMLElement | null
  if (!titleEl) return

  const cs = getComputedStyle(titleEl)
  const fontSize = Number.parseFloat(cs.fontSize) || 16
  const lineHeightRaw = cs.lineHeight
  const lineHeight = lineHeightRaw === 'normal' ? fontSize * 1.2 : Number.parseFloat(lineHeightRaw) || fontSize
  const paddingBottom = Number.parseFloat(cs.paddingBottom) || 0
  // clientHeight inkluderer padding, men ikke border — trekk fra paddingen for å få
  // høyden på selve tekstlinjene.
  const textHeight = titleEl.clientHeight - paddingBottom
  const lines = Math.max(1, Math.round(textHeight / lineHeight))

  // Bare voks forbi standardstørrelsen (satt i CSS) når tittelen faktisk går over
  // flere linjer — for én linje beholder vi den vante, faste sirkelen.
  sizePx.value = lines > 1 ? Math.round(lines * lineHeight) : null
}

onMounted(() => {
  measure()
  const titleEl = root.value?.previousElementSibling as HTMLElement | null
  if (titleEl && 'ResizeObserver' in window) {
    observer = new ResizeObserver(() => measure())
    observer.observe(titleEl)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="root"
    class="rr-speaker-photo view-transition-speaker-photo"
    :style="sizePx ? { width: `${sizePx}px`, height: `${sizePx}px` } : undefined"
  >
    <img :src="src" :alt="alt ?? ''" class="rr-speaker-photo-img" />
  </div>
</template>

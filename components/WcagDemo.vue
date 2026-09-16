<script setup lang="ts">
/**
 * Live WCAG-demo for slide 5 — i Elises ånd: bryt regelen, la salen kjenne det, vis fiksen.
 *
 * Avsløringen går BAKLENGS (punkt 5 først, så 4, 3, 2, 1). Det er i seg selv demoen av
 * «visuell rekkefølge ≠ lesrekkefølge»: nummereringen står 1–5, men de tennes nedenfra.
 *
 * Hvert klikk gjør to ting: fikser forrige punkt og bryter det neste.
 *   klikk 5  punkt 5 brytes (teksting mangler)
 *   klikk 6  punkt 5 fikses · punkt 4 brytes (label mangler)
 *   klikk 7  punkt 4 fikses · punkt 3 brytes (bevegelse)
 *   klikk 8  punkt 3 fikses · punkt 2 brytes (ingen synlig fokus)
 *   klikk 9  punkt 2 fikses · punkt 1 brytes (for lav kontrast)
 *   klikk 10 punkt 1 fikses — alt er på plass, i riktig rekkefølge
 *
 * Fokusringen er ikke pynt på punkt 2: fra og med klikk 9 — der «synlig fokus» blir
 * fikset — følger den punktet som nettopp ble fikset. På klikk 10 flytter den seg
 * derfor til punkt 1, slik at man ser at fokus faktisk er synlig og beveger seg.
 *
 * Sliden må derfor ha `clicks: 10` i frontmatter.
 */
const props = defineProps<{ clicks: number }>()

const items = [
  {
    kind: 'kontrast',
    title: 'Syn',
    text: 'bilder/ikoner uten alt-tekst, div-suppe i stedet for semantikk, kontrast',
    fix: 'kontrast hevet',
  },
  {
    kind: 'fokus',
    title: 'Motorikk',
    text: 'knapper man ikke når, row-reverse som ødelegger tab-rekkefølgen, tastaturfeller',
    fix: 'synlig fokus',
  },
  {
    kind: 'bevegelse',
    title: 'Oppmerksomhet',
    text: 'tidsbegrensninger, autoavspilt bevegelse, blinkende innhold',
    fix: 'bevegelse stoppet',
  },
  {
    kind: 'label',
    title: 'Hukommelse og skjemaer',
    text: 'felt uten label, «godta»-avkrysning man ikke forstår',
    fix: 'label på plass',
  },
  {
    kind: 'teksting',
    title: 'Hørsel',
    text: 'video med informasjon bare i lyd; teksting med <track>',
    fix: 'teksting på',
  },
]

const revealedAt = (i: number) => 9 - i
const fixedAt = (i: number) => 10 - i

function state(i: number): 'hidden' | 'broken' | 'fixed' {
  if (props.clicks < revealedAt(i)) return 'hidden'
  if (props.clicks < fixedAt(i)) return 'broken'
  return 'fixed'
}

// Fra og med klikket der «synlig fokus» fikses, tegnes fokusringen rundt punktet
// som nettopp ble fikset — så den flytter seg videre til punkt 1 på siste klikk.
const focusFixedFrom = fixedAt(items.findIndex((it) => it.kind === 'fokus'))
const lastClick = fixedAt(0)

function hasFocusRing(i: number) {
  return props.clicks >= focusFixedFrom && i === lastClick - props.clicks
}
</script>

<template>
  <ol class="wcag-demo">
    <li
      v-for="(it, i) in items"
      :key="it.title"
      class="wcag-item"
      :class="[`is-${state(i)}`, `kind-${it.kind}`, { 'has-focus': hasFocusRing(i) }]"
    >
      <span class="wcag-num">{{ i + 1 }}</span>

      <span class="wcag-body">
        <!-- Brutt: label mangler — bare et bart inputfelt uten noe som forklarer det -->
        <template v-if="state(i) === 'broken' && it.kind === 'label'">
          <span class="wcag-input" />
          <span class="wcag-whisper">Godtar du?</span>
        </template>

        <!-- Brutt: informasjonen finnes bare i lyd -->
        <template v-else-if="state(i) === 'broken' && it.kind === 'teksting'">
          <span class="wcag-silence">lyd uten teksting</span>
        </template>

        <template v-else>
          <strong>{{ it.title }}</strong> — {{ it.text }}
        </template>
      </span>

      <span v-if="state(i) === 'fixed'" class="wcag-fix">{{ it.fix }}</span>
    </li>
  </ol>
</template>

<script setup lang="ts">
/**
 * QR-kode for en URL, generert lokalt (ingen nettverkskall) med `qrcode`.
 * Fungerer derfor også når salen eller maskinen er offline.
 *
 * Bruk i slides:
 *   <QrCode url="https://reactnorway.com/" label="Program" :size="180" />
 *   <QrCode url="https://reactnorway.com/" align="right" />
 *
 * `align` plasserer HELE kortet (bilde + label) i bredden: venstre, midtstilt
 * (standard) eller høyre. Selve kortet er alltid sentrert i seg selv — labelen
 * står alltid midt under bildet, uansett `align`. Virker både når komponenten
 * står alene på en slide og når den ligger i en flex-rad.
 *
 * Merk fargene: mørke moduler på hvit bakgrunn. Invertert (lyst på svart) leses
 * ikke pålitelig av alle telefoner, så kortet er bevisst hvitt med gul ramme.
 */
import { ref, watchEffect } from "vue";
import QRCode from "qrcode";

const props = withDefaults(
  defineProps<{
    /** URL-en som kodes inn i QR-koden */
    url: string;
    /** Valgfri tekst over URL-en, f.eks. «Hele streamen» */
    label?: string;
    /** Bredde/høyde på kortet i piksler */
    size?: number;
    /** Plassering i bredden */
    align?: "left" | "center" | "right";
  }>(),
  { size: 180, align: "center" },
);

const svg = ref("");
const error = ref("");

watchEffect(async () => {
  error.value = "";
  if (!props.url) {
    svg.value = "";
    error.value = "Mangler url";
    return;
  }
  try {
    svg.value = await QRCode.toString(props.url, {
      type: "svg",
      margin: 2, // stillesone rundt koden
      errorCorrectionLevel: "M",
      color: { dark: "#0e0e0e", light: "#ffffff" },
    });
  } catch (e: unknown) {
    svg.value = "";
    error.value = e instanceof Error ? e.message : String(e);
  }
});
</script>

<template>
  <figure class="rr-qr" :class="`rr-qr--${align}`" :style="{ '--rr-qr-size': `${size}px` }">
    <div v-if="svg" class="rr-qr-frame" v-html="svg" />
    <div v-else class="rr-qr-frame rr-qr-frame--error">{{ error || "…" }}</div>
    <figcaption class="rr-qr-caption">
      <span v-if="label" class="rr-qr-label">{{ label }}</span>
    </figcaption>
  </figure>
</template>

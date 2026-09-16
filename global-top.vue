<script setup lang="ts">
// NB: må hete global-TOP: global-bottom rendres UNDER sliden, og temaet vårt gir
// .slidev-layout en ugjennomsiktig bakgrunn som ville dekket footeren helt.
// NB: `$slidev` finnes bare i <template>; i <script setup> må vi bruke useNav().
import { useNav } from '@slidev/client'

const nav = useNav()
</script>

<template>
  <div class="rr-footer-layer">
    <SlideFooter :page="nav.currentPage.value" :total="nav.total.value" />
  </div>
</template>

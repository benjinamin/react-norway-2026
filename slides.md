---
theme: default
colorSchema: dark
fonts:
  sans: JetBrains Mono
  mono: JetBrains Mono
  serif: Bebas Neue
  weights: 400,700
title: React Norway 2026 — mine favoritter
info: |
  ## React Norway 2026 — mine favoritter
  En 15-minutters oppsummering av foredragene jeg likte best på
  Rock & React Festival 2026, Rockefeller, Oslo — 5. juni 2026.

  Livestream: https://www.youtube.com/watch?v=Ge0DbLf-2R0
layout: rock-cover
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 15min
---

<div class="rr-kicker">Rockefeller, Oslo · 5. juni 2026</div>

# React Norway 2026

## Mine favoritter fra Rock & React Festival

<p class="mt-6 flex items-center gap-3"><span class="rr-diamond"></span> Benjamin · september 2026 · ett spor, ti foredrag, tre band</p>

<!--
OUTLINE: ~15 min oppsummering for kolleger. Struktur:
1. Konferansen på 60 sekunder (2 slides)
2. Fire favoritter, ~2 slides + notater hver (8 slides)
3. Én hederlig omtale (1 slide)
4. Oppsummering / hva jeg tar med meg (2 slides)

Hele streamen med kapittelmarkører: https://www.youtube.com/watch?v=Ge0DbLf-2R0
Tidsstempler i notatene under refererer til den videoen.

-->

---
layout: two-cols
layoutClass: gap-16
---

# Konferansen på 60 sekunder

**Rock & React Festival 2026** — «Where code meets chords»

- Én dag, ett spor, ti foredrag à 30 minutter
- Rockefeller (Torggata Bad), Oslo
- Arrangert av Crystallize, konferansier Pedro Miranda
- Takterrasse-BBQ kl. 17, konserter kl. 19:
  God Bedring → Iversen → DATAROCK
- Hele dagen ble streamet på YouTube (ligger fortsatt ute)

::right::

# Gjennomgående temaer

- **Tilgjengelighet og sikkerhet som håndverk** — hack det, knekk det, fiks det
- **Async React er her** — Suspense, transitions, optimistisk UI, view transitions
- **Slanke kodebaser** i en tid med generert kode
- **AI utover chatboksen** — agenter i nettleseren, orkestrerte agenter, agenter som rendrer UI

<!--
Sett scenen raskt — kollegene trenger bare å vite at det var en éndags konferanse med ett spor og et tydelig praktisk preg i år.

«Gjennomgående temaer» er min egen innramming; omtrent halve programmet var AI-preget (Nico Martin, Robert Balicki, Sébastien Morel), den andre halvparten var grunnleggende håndverk (a11y, sikkerhet, død kode, async UX, UX-research).
-->

---
layout: two-cols
layoutClass: gap-10
clicks: 2
---

# Hele programmet

<div class="text-sm leading-tight rr-program" :class="{ 'rr-dim': $clicks >= 1, 'rr-hm': $clicks >= 2 }">

| | Kl. | Foredrag | Hvem |
|:-:|---|---|---|
|  | 08:00 | *Registrering + kaffe* | |
|  | 09:00 | Long live the terminal (velkomst) | Pedro Miranda, Crystallize |
|  | 09:30 | React with Caution: How to Hack Your React App (And Fix It Too) | Ramona Schwering, Mittwald |
| <span class="rr-fav">⭐</span> | 10:00 | Let's break some WCAG rules | Elise Kristiansen, Variant |
|  | 10:30 | *Kaffepause* | |
| <span class="rr-fav">⭐</span> | 11:00 | So, You Want to Build a Pair-programming App with JavaScript, Good luck | Costa Alexoglou, Grafana Labs |
|  | 11:30 | No Researchers Were Harmed in the Making of This Test Suite | Dora Makszy, Element Logic |
| <span class="rr-fav">⭐</span> | 12:00 | Dead Code Shouldn't Exist: How We Removed 28k Lines of Code, One Knip at a Time | Dominik Dorfmeister, Sentry |
|  | 12:30 | *Lunsj* | |

</div>

::right::

<div class="text-sm leading-tight mt-16 rr-program" :class="{ 'rr-dim': $clicks >= 1, 'rr-hm': $clicks >= 2 }">

| | Kl. | Foredrag | Hvem |
|:-:|---|---|---|
| <span class="rr-fav">⭐</span> | 13:30 | Designing the In-Between States with Async React | Aurora Scharff, Vercel |
|  | 14:00 | Look ma, No Hands! Multimodal AI-Agents in the Browser | Nico Martin, Hugging Face |
|  | 14:30 | *Kaffepause* | |
|  | 15:00 | Barnum: A Programming Language for Orchestrating Agents | Robert Balicki, Pinterest |
| <span class="rr-hm-mark">☆</span> | 15:30 | Beyond Chat: When AI streams React components! Your cart has ideas! | Sébastien Morel, Crystallize |
|  | 17:00 | *Takterrasse-BBQ* | |
|  | 19:00 | *Rock n Roll: God Bedring → Iversen → DATAROCK* | |

</div>

<div class="text-xs opacity-70 mt-4"><span class="rr-fav">⭐</span> = mine favoritter &nbsp;·&nbsp; <span class="rr-hm-mark">☆</span> = hederlig omtale</div>

<!--
Ikke les tabellen — pek på de fire stjernene og den hederlige omtalen, og gå videre.

Én linje om hvert av de andre foredragene, i tilfelle noen spør:
- Ramona Schwering: hacker en React-app live (XSS, injection), viser hvor React beskytter som standard og hvor den ikke gjør det.
- Dora Makszy: selvbetjent UX-testrammeverk bygget med Figma Make — kvantitativ innsikt «på dager, ikke uker».
- Nico Martin: stemme- og bildeagenter som kjører helt i nettleseren via WebGPU/WebAssembly, ingen server.
- Robert Balicki: Barnum, et typet språk for å orkestrere LLM-agenter i isolerte subprosesser.

DESIGN-TODO: Tabellen er tettpakket — vurder v-click, mindre skrift eller en egen Vue-komponent i designfasen.
-->

---
layout: rock-section
transition: view-transition
photo: /speakers/elise-kristiansen.jpg
photoAlt: Elise Kristiansen
---

# ★ Favoritt
## Let's break some WCAG rules {.view-transition-talk-title}
### Elise Kristiansen · Frontend developer @ Variant

<!--
Stream: 46:14 – 1:25:33 (kapittel 3).
Andre gang på React Norway-scenen. Interaktivt foredrag — hun ødelegger sine egne slides med vilje så salen *kjenner* hver barriere.
-->

---
clicks: 10
---

# Let's break some WCAG rules {.has-speaker.view-transition-talk-title}

<SpeakerPhoto src="/speakers/elise-kristiansen.jpg" alt="Elise Kristiansen" />

<div class="grid grid-cols-2 gap-8">
<div>

<h3 v-click="1">Utgangspunktet</h3>

<v-clicks at="1">

- ~25 % trenger en eller annen tilgjengelighetsfunksjon;
- **94,8 % av nettsteder** har minst ett WCAG-brudd
- WCAG AA er *lovkravet* (EAA + norsk lov) — så de fleste nettsteder bryter strengt tatt loven
- «Jeg vil ikke at dere skal huske hver regel. Jeg vil at dere skal huske følelsen.»

</v-clicks>

<h3 v-click="4">Formatet</h3>

<p v-click="4">Hvert segment: bryt en regel live på slidene → la salen streve → vis fiksen.</p>

</div>
<div>

<h3 v-click="5">Segmentene (hva hun ødela)</h3>

<WcagDemo :clicks="$clicks" />

</div>
</div>

<!--
DEMO — denne sliden gjør WCAG-bruddene i stedet for å liste dem.
Segmentlista tennes BAKLENGS (5 → 1): nummereringen står 1–5, men de dukker opp nedenfra.
Det er selve poenget om at visuell rekkefølge ikke er lesrekkefølge. Hvert klikk fikser
forrige punkt og bryter det neste, så du kan snakke over det brutte så lenge du vil:

  klikk 5   punkt 5 «Hørsel» — bare «lyd uten teksting», informasjonen mangler
  klikk 6   5 fikses · punkt 4 «Skjemaer» — bart inputfelt uten label, «Godtar du?»
  klikk 7   4 fikses · punkt 3 «Oppmerksomhet» — teksten rister og blinker
  klikk 8   3 fikses · punkt 2 «Motorikk» — ingen synlig fokusmarkering
  klikk 9   2 fikses · punkt 1 «Syn» — kontrasten er langt under kravet
  klikk 10  1 fikses — alt lesbart, i riktig rekkefølge

Fra klikk 9 følger den gule fokusringen punktet som nettopp ble fikset: den står rundt
«Motorikk» på klikk 9 og flytter seg til «Syn» på klikk 10 — poenget er at når fokus
først er synlig, ser man også at det beveger seg.

Tidsstempler (stream):
- 51:30 Åpner med historien om Mats «Ibelin» Steen — WoW var tilgjengelig for ham, det meste av weben var det ikke. Setter tonen: ekskludering er et valg utviklere tar.
- 55:00 WCAG A / AA / AAA forklart «som batteristørrelser». Hun skrur opp kontrasten på egne slides fra 6,27:1 til 9,47:1 midt i foredraget.
- 58:38 Syn — blank slide-gag; alt-tekst på kattebildet; ikonet som viser seg å være en bjørn.
- 1:02:24 «Hver gang du vil bruke enda en div, tenk på hvilken tag du kan bruke i stedet.» Og: AI har lært div-suppe av oss og gjentar det.
- 1:05:45 Motorikk — row-reverse-fella, tabindex-«hack» vs. å bruke <button>.
- 1:10:05 Oppmerksomhet — «les dette på 3 sekunder»-gag, deretter bevegelig/blinkende innhold mens hun snakker.
- 1:12:03 Skjemaer — «Godtar du?»-avkrysningen som selger sjelen din.
- 1:15:34 Hørsel — stum «informativ video», så med <track kind="captions">.
- 1:20:30 Q&A: anbefaler pa11y / pa11y-ci i pipelinen.
-->

---

# Hvorfor var dette foredraget en Favoritt

<SpeakerPhoto src="/speakers/elise-kristiansen.jpg" alt="Elise Kristiansen" />

<div class="grid grid-cols-2 gap-8">
<div>

<h3 v-click="1">Det jeg tar med meg</h3>

<v-clicks at="1">

- **Semantisk HTML først.** De fleste fiksene var «bruk riktig tag» <br>`<button>`, `<nav>`, `<label for>`, `<table>`.
<br>Ikke ARIA, ikke tabindex-hack.
- **Visuell rekkefølge ≠ DOM-rekkefølge.** CSS-omstokking (`row-reverse`, `order`) ødelegger navigasjon med tastatur. <span class="rr-emoji">⌨️</span>
- **Sikt mot AAA-kontrast** der det gir mening (7:1 for brødtekst). Bra for alle som bruker nettsiden i solen <span class="rr-emoji">☀️</span>
- **Automatiser det kjedelige**: pa11y / pa11y-ci i CI fanger manglende alt-tekst og kontrastfeil. <span class="rr-emoji">⚙️</span>

</v-clicks>

</div>
<div>

<h3 v-click="5">Hvorfor det fungerte som foredrag</h3>

<p v-click="5"><em>Oppleve</em> barrieren <em>vs</em> å lese en sjekkliste.</p>

<h3 v-click="6">For oss</h3>

<v-clicks at="6">

- [ ] TODO: velg én av appene våre og kjør pa11y på den
- [ ] TODO: gå gjennom CSS-omstokkede layouter for tab-rekkefølge
- [ ] TODO: prompt for AI-agenter UI: <br>«bruk semantiske elementer»

</v-clicks>

<div v-click="8">

<br>

<QrCode url="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements" label="Semantiske Elementer" :size="100" align="left" />

</div>

</div>
</div>

<!--
Personlig vinkling — juster etter smak. Det sterkeste poenget for meg var hvor *billige* de fleste fiksene var; nesten ingen krevde en tilgjengelighetsspesialist, bare disiplin på hvilket element man griper til.

AI-vinkelen er verdt et lite stopp: hun påpekte at modellene har lært div-for-alt-vanene våre, så generert frontend-kode trenger samme gjennomgang.
-->

---
layout: rock-section
transition: view-transition
photo: /speakers/dominik-dorfmeister.jpg
photoAlt: Dominik Dorfmeister
---

# ★ Favoritt
## Dead Code Shouldn't Exist {.view-transition-talk-title}
### How We Removed 28k Lines of Code, One Knip at a Time
### Dominik Dorfmeister (TkDodo) · Frontend Engineer @ Sentry

<!--
Stream: 3:01:51 – 3:35:37 (kapittel 7).
TkDodo = vedlikeholder av TanStack Query, nå på Sentrys design engineering-team («make ship happen»).
-->

---

# Dead Code Shouldn't Exist {.has-speaker.view-transition-talk-title}

<SpeakerPhoto src="/speakers/dominik-dorfmeister.jpg" alt="Dominik Dorfmeister" />

<div class="grid grid-cols-2 gap-8">
<div>

<h3 v-click="1">Problemet</h3>

<v-clicks at="1">

- TypeScript sier fra om ubrukte *lokale* variabler (TS6133) — men **aldri om ubrukte exports**. Ingen analyse på tvers av moduler.
- Sett `export` foran en hjelpefunksjon og den er usynlig for alltid. Koden driver til `utils.ts`, får brukere, mister dem, blir liggende.
- Død kode koster: lesetid, refaktoreringer, lint/oppgraderingsstøy, bundle-størrelse **og kontekst-tokens for agenter**.
- «Hvis ingen ber oss fjerne det, gjør vi det ikke.»

</v-clicks>

<h3 v-click="5">Verktøyet: Knip</h3>

<p v-click="5">Statisk analyse av ubrukte <strong>filer, exports og avhengigheter</strong>. Trenger to ting: <em>prosjektfiler</em> og <em>entry points</em>, bygger en graf fra entry points og rapporterer alt som ikke nås. 150+ plugins oppdager rammeverk automatisk (Next, Vitest, Astro …).</p>

</div>
<div>

<h3 v-click="6">Resultatene hos Sentry</h3>

<div v-click="6" class="flex gap-6 mb-3">
  <div class="rr-stat"><span class="n">28k</span><span class="l">linjer fjernet</span></div>
  <div class="rr-stat"><span class="n alt">6</span><span class="l">uker</span></div>
  <div class="rr-stat"><span class="n alt">50+</span><span class="l">PR-er</span></div>
</div>

<v-clicks at="7">

- ~1M linjer frontend, ~6 sekunder per Knip-kjøring, ~3 % av frontenden fjernet
- Over ⅔ funnet av **production mode** (kode som bare nås fra tester)
- Største gevinst: Knip kjører nå i CI, så død kode kan ikke komme tilbake

</v-clicks>

<h3 v-click="10">Live-demo</h3>

<p v-click="10">Én fil: 565 → 190 linjer. Kjør Knip igjen, mer dukker opp. Fjern en graf-komponent → fjern hele mappen → fjern to npm-avhengigheter. «It's a gift that keeps on giving.»</p>

</div>
</div>

<!--
Tidsstempler (stream):
- 3:05:07 Hvem han er; Sentry design engineering = designsystem + rammer (lint, TS, struktur, AI-skills).
- 3:07:14 Opprinnelsen: første Sentry-PR rørte 900 filer (skru på noImplicitAny); fant en custom hook ingen brukte.
- 3:10:41 Hvorfor TypeScript ikke fanger det — `export`-eksempelet.
- 3:13:10 Knip-intro (ts-prune / unimported er arkivert og peker til Knip).
- 3:16:09 Live-demo i Sentry-repoet — løkka fjern → kjør igjen → flere funn.
- 3:21:26 Production mode: `!`-suffiks markerer prod-entries/filer; fanger kode bare tester bruker. Eksempel: getIncidentDiscoverUrl hadde test, men ingen prod-bruk.
- 3:24:02 Sosial friksjon: en PR ble lukket fordi den slettet 6 måneder gammel kode noen fortsatt «planla å bruke». Svar: skriv kode som brukes nå, gjem bak feature flags.
- 3:25:54 «export alt»-vanen (også fra AI) → treg CI-loop; løst med valgfri pre-push-hook og Knips nye language server / IDE-integrasjon.
- 3:26:59 Exports bare for tester: bruk `@internal`, eller bedre `ignoreExportsUsedInFile` i production mode.
- 3:29:01 Begrensninger: dynamiske imports (fikset siden), `require.context` — han slettet skjemaer som faktisk ble lastet dynamisk.
- 3:32:26 Q&A: `--fix` finnes og er stabil siden v6, men han foretrekker å gå gjennom manuelt.
-->

---

# Hvorfor dette ble en favoritt

<SpeakerPhoto src="/speakers/dominik-dorfmeister.jpg" alt="Dominik Dorfmeister" />

<div class="grid grid-cols-2 gap-12">
<div>

<h3 v-click="1">Det jeg tar med meg</h3>

<v-clicks at="1">

- **Kjør `npx knip` én gang** på repoene våre — null konfig, sekunder, sannsynligvis funn med én gang.
- **Production mode er der verdien ligger**: kode som bare finnes for å bli testet er fortsatt død.
- **Legg det i CI**, ikke bare som en engangsopprydding — ellers vokser det tilbake.
- **Slutt å eksportere alt.** Generert kode elsker `export`.
- Skriv kode som brukes *nå*; gjem uferdig arbeid bak flags i stedet for å la det ligge til en fremtidig PR.

</v-clicks>

</div>
<div>

<h3 v-click="6">De ærlige delene</h3>

<p v-click="6">Han slettet ting han ikke burde (<code>require.context</code>-magi), fikk en opprydnings-PR lukket, og innrømmet at pre-push/CI-loopen irriterte folk. Det gjorde foredraget troverdig i stedet for et salgspitch.</p>

<h3 v-click="7">For oss</h3>

<v-clicks at="7">

- [ ] TODO: kjør Knip på `<hovedrepoet vårt>` og noter tallet
- [ ] TODO: bestem: CI-gate eller planlagt rapport?

</v-clicks>

<div v-click="8">

<br>
<QrCode url="https://knip.dev/" label="knip.dev" :size="100" align="left" />

</div>

</div>
</div>

<!--
Fyll inn det faktiske tallet etter å ha kjørt Knip — et ekte «vi har N ubrukte exports»-tall får denne sliden til å lande.

AI-innrammingen traff salen: generert kode er billig å lage og dyr å beholde, og hver ubrukte linje er også støy i kontekstvinduet for agentene vi i økende grad kjører mot kodebasen.
-->

---
layout: rock-section
transition: view-transition
photo: /speakers/aurora-scharff.jpg
photoAlt: Aurora Scharff
---

# Favoritt #3
## Designing the In-Between States with Async React {.view-transition-talk-title}
### Aurora Scharff · DX Engineer @ Vercel (Next.js-teamet)

<!--
Stream: 4:29:44 – 4:58:34 (kapittel 9).
Norsk, men første gang hun snakker på React Norway. Alt live-kodet i en Next.js App Router «conference companion»-demoapp. Demo-repo + en agent-skill ble delt til slutt.
-->

---

# Designing the In-Between States {.has-speaker.view-transition-talk-title}

<SpeakerPhoto src="/speakers/aurora-scharff.jpg" alt="Aurora Scharff" />

<div class="grid grid-cols-2 gap-8">
<div>

<h3 v-click="1">Omrammingen</h3>

<p v-click="1">Demoappen <em>føltes</em> ødelagt — 2 sekunder døde klikk, layout som hoppet. Interaksjonene var ikke trege; <strong>øyeblikkene mellom handling og ferdig UI var aldri designet.</strong> Et UX-problem vi overser fordi det ser ut som et DX-problem.</p>

<h3 v-click="2">Modellen</h3>

<div v-click="2">

Synkron React: event → update → render → commit.
Legg til async og det oppstår hull:

| Hull | Tilstand | Primitiv |
|---|---|---|
| event → update | opptatt | `useOptimistic` |
| update → render | laster | `<Suspense>` |
| render → commit | ferdig | `<ViewTransition>` |

Alt koordinert av en **transition** («action») slik at alt committes samtidig — ingen flimring.

</div>

</div>
<div>

<h3 v-click="3">Live-fiksene</h3>

<v-clicks at="3">

1. **Async datalasting** — `<Suspense>` med en fallback med *samme form* (dreper layout shift); nøst boundaries så innhold med ukjent høyde ligger inne i den du kontrollerer. Nytt Suspense-panel i React DevTools for å steppe gjennom tilstander.
2. **Async navigasjon** — filtre via search params frøs UI-et. Fiks: **action-props-mønsteret** — designsystem-komponenten tar `onChangeAction`, pakker det i `startTransition` og eier sin egen optimistiske tilstand. Konsumenten gjør ingenting.
3. **Sideoverganger** — `<ViewTransition>` med transition types for frem/tilbake-glidning.
4. **Async mutasjoner** — `useOptimistic` for favoritter og upvotes, en optimistisk «pending»-liste som lander i serverlista, animert omsortering ved å gi elementene en `key` inne i en transition.

</v-clicks>

</div>
</div>

<!--
Tidsstempler (stream):
- 4:33:03 Den ødelagte appen: døde klikk, sesjonsside som hopper.
- 4:33:56 Render-syklus → hull → primitiver. «Design for tregt nett; på raskt nett forsvinner alt sammen.»
- 4:37:05 Suspense + fallback med samme form; cross-fade med <ViewTransition>; egendefinert slide-opp/ned-CSS fra React-dokumentasjonen.
- 4:40:52 React DevTools Suspense-panel for å steppe mellom tilstander; nøsting av boundaries for å fjerne CLS.
- 4:43:43 Action-props-mønsteret — én prop endret, «det er bare startTransition inne i komponenten». Konvensjon: `xxxAction`-navngiving. Transitions kan avbrytes (siste interaksjon vinner).
- 4:46:25 Sideoverganger med transition types; Next.js Link støtter det, manuell variant vist også.
- 4:49:08 useOptimistic på favorittknappen, med formens innebygde transition.
- 4:51:44 Optimistisk spørsmålsliste; upvote med reducer-stil useOptimistic; animert omsortering med keyed <ViewTransition>; polling-refresh for å animere andre brukeres endringer.
- 4:55:23 Tilbake-til-før-sammenligning. Samme hastighet, føles helt annerledes. Bedre LCP/INP/CLS som bieffekt.
- 4:56:47 Hun publiserte en Claude/agent-skill for disse mønstrene i demo-repoet.
- 4:57:56 Q&A: <ViewTransition> er ikke lenger flagget som ustabil; Next.js shipper den.
-->

---

# Hvorfor dette ble en favoritt

<SpeakerPhoto src="/speakers/aurora-scharff.jpg" alt="Aurora Scharff" />

<div class="grid grid-cols-2 gap-12">
<div>

<h3 v-click="1">Det jeg tar med meg</h3>

<v-clicks at="1">

- **«Mellomtilstander» er en designleveranse.** Be om laster/opptatt/ferdig-design på samme måte som vi ber om tomme tilstander og feiltilstander.
- **Fallbacks må matche formen** på innholdet, ellers bytter du en spinner mot layout shift.
- **Action props** flytter async-koordineringen inn i designsystem-komponenten. Hvis UI-kittet vårt eksponerte `xxxAction`-props, ville produktkoden få optimistisk UI gratis.
- `useOptimistic` + transitions erstatter mye håndskrevet `useState`/`useEffect`-race-condition-kode.
- Samme latens, helt annen opplevd hastighet — og bedre Core Web Vitals.

</v-clicks>

</div>
<div>

<h3 v-click="6">Hvorfor det fungerte som foredrag</h3>

<p v-click="6">Ren live-koding, små diffs, umiddelbart synlige resultater. Å avslutte med å reverte til den ødelagte versjonen var et flott grep.</p>

<h3 v-click="7">For oss</h3>

<v-clicks at="7">

- [ ] TODO: eksponerer de delte komponentene våre action props?
- [ ] TODO: prøv agent-skillen hennes på ett av skjermbildene våre
- [ ] TODO: gå gjennom fallbacks for form-mismatch (CLS)

</v-clicks>

</div>
</div>

<!--
Dette er det mest direkte anvendbare foredraget for daglig React-arbeid. Forslag til vinkel for teamet: velg én treg interaksjon i appen vår og kjør den gjennom opptatt/laster/ferdig-sjekklista.
-->

---
layout: rock-section
transition: view-transition
photo: /speakers/costa-alexoglou.jpg
photoAlt: Costa Alexoglou
---

# Favoritt #4
## So, You Want to Build a Pair-programming App with JavaScript, Good luck {.view-transition-talk-title}
### Costa Alexoglou · Software Engineer @ Grafana Labs · vedlikeholder av Hopp

<!--
Stream: 2:00:27 – 2:29:07 (kapittel 5).
Hopp = den eneste open source-appen for remote parprogrammering, bygget for superlav latens. Spoiler: mye av den er ikke lenger JavaScript.
-->

---

# So, You Want to Build a Pair-programming App with JavaScript, Good luck {.has-speaker.view-transition-talk-title}

<SpeakerPhoto src="/speakers/costa-alexoglou.jpg" alt="Costa Alexoglou" />

<div class="grid grid-cols-2 gap-8">
<div>

<h3 v-click="1">Kravene</h3>

<v-clicks at="1">

- 4K-skarp skjermdeling (ingen «kan du zoome inn?»)
- **< 100 ms ende-til-ende-latens** — tastetrykk → nett → OS → fang frame → enkod → send → dekod → render
- Ett-klikks samtaler, tegning, fjernstyring med snarveier, krystallklar lyd med støyreduksjon

</v-clicks>

<h3 v-click="4">Tauri, ikke Electron</h3>

<p v-click="4">Tauri bruker OS-ets webview: WebView2 (Chromium) på Windows, <strong>WKWebView (WebKit) på macOS</strong>, WebKitGTK på Linux. Rust-backend. Den WebKit-avhengigheten er skurken i foredraget.</p>

</div>
<div>

<h3 v-click="5">Tre problemer</h3>

<v-clicks at="5">

1. **Måle latency** — ingen enkel metode. Hack: send «tick»-events, bruke vannmerke på den fangede framen med en svart stripe, detekter den etter dekoding <span class="rr-emoji">→</span> full-loop-latency.
2. **Nettleserens WebRTC-standarder er for videomøter**, ikke paring. Fiksene krevde codec-kvantisering, et udokumentert `is_screencast`-flagg, mindre buffere — ingenting nåbart fra nettleseren. Flyttet til Rust: **153 ms → under 100 ms, i 4K.**
3. **Lyden «sugde»** — WebKit tvang mono i WebRTC, autoplay-policy-glitcher. Flyttet lyd til native; støyreduksjon via DTLN (et CNN) som kjører i `tract`.

</v-clicks>

<h3 v-click="8">Bonus: spøkelsessamtaler</h3>

<p v-click="8">Lukket MacBook → TCP-socket lever videre, JS-event-loopen fryser → pakker levert, aldri kjørt → 8 timer senere «mottar» du en samtale fra fortiden. Claude fant det ikke; en bruker-repro gjorde det.</p>

</div>
</div>

<!--
Tidsstempler (stream):
- 2:02:24 Hvem han er; Hopp-intro.
- 2:03:08 Parprogrammering er ikke bare koding — debugging av hendelser, dashboards, AWS-konsollen, Excalidraw med designere. Umiddelbar code review, samkjørt arkitektur, Hawthorne-effekten vs. «prompt, så scroll Reddit»-agentisk virkelighet.
- 2:06:42 De seks kravene; skjermbilde: Hopp vs. Slack huddle-skarphet.
- 2:09:14 Hvorfor 100 ms (Apple HIG sier 50–100 ms; 50 var umulig over nett); definisjon av hele pipelinen.
- 2:11:12 Tauri vs Electron; v1 flyttet skjermdeling- og kameravinduer til native Rust, hovedvinduet ble i Tauri.
- 2:13:22 Vannmerke-hacket for latens.
- 2:14:43 Nettleserens WebRTC-begrensninger: codec-støtte (AV1 krever M3+), ingen codec-knotter, ingen screencast-flagg, ingen lavnivå buffertilgang. Kvantisering → skarphet; screencast-flagg → sekunder spart; buffere → hastighet.
- 2:18:58 Lydklager fra v0; LiveKits StartAudio-komponent; WebKit mono; DTLN + tract i Rust.
- 2:21:49 Spøkelsessamtale-historien; «Jeg ba Claude om å ikke gjøre feil — den hallusinerte fullstendig.»
- 2:25:18 Fremtid: GPU-oppskalering 1440p → 4K på ~0 ms i Rust; kontrast til Twitchs in-browser WebGPU super-resolution (2 frames bak).
- 2:27:56 Q&A: klokkesynk mellom maskiner — i praksis «send et UTC-tidsstempel og be en bønn».
-->

---

# Hvorfor dette ble en favoritt

<div class="grid grid-cols-2 gap-12">
<div>

<h3 v-click="1">Det jeg tar med meg</h3>

<v-clicks at="1">

- **Webplattformen har et tak for sanntidsmedia.** Standardene er tunet for 20-personers møter, ikke to personer som stirrer på en IDE. Når du må skru på codec-knottene, forlater du nettleseren.
- **Mål hele loopen**, ikke bare nettverkshoppet. Vannmerke-trikset er et nydelig eksempel på å instrumentere noe plattformen ikke eksponerer.
- **«How much they hate WebKit»** — hver desktop-web-beslutning på macOS arver Safaris tidslinje.
- **Frossen event loop ≠ død socket.** En god påminnelse om at «tilkoblet» ikke er «i live» — heartbeat på applikasjonsnivå.

</v-clicks>

</div>
<div>

<h3 v-click="5">Hvorfor det fungerte som foredrag</h3>

<p v-click="5">Det er en krigshistorie med tall (153 → &lt;100 ms), et ordentlig mysterium (spøkelsessamtaler) og ærlige konklusjoner («vi måtte migrere bort fra JS»). Null hype.</p>

<h3 v-click="6">For oss</h3>

<v-clicks at="6">

- [ ] TODO: har vi «tilkoblet men frossen»-antakelser i websocket-koden vår?
- [ ] TODO: prøv Hopp på en remote paringsøkt

</v-clicks>

</div>
</div>

<!--
Den morsomme innrammingen for kolleger: dette var det ene foredraget der svaret på «kan vi gjøre det i JavaScript?» stort sett var «nei, og her er nøyaktig hvorfor» — som gjør det mer nyttig enn foredragene der alt fungerer.
-->

---
layout: rock-section
transition: view-transition
photo: /speakers/sebastien-morel.jpg
photoAlt: Sébastien Morel
---

# Hederlig omtale
## Beyond Chat: When AI streams React components! Your cart has ideas! {.view-transition-talk-title}
### Sébastien Morel · CTO @ Crystallize

<!--
Stream: 6:33:06 – 6:59:23 (kapittel 13). Dagens siste foredrag.
-->

---

# Beyond Chat: When AI streams React components! Your cart has ideas! {.has-speaker.view-transition-talk-title}

<SpeakerPhoto src="/speakers/sebastien-morel.jpg" alt="Sébastien Morel" />

<div class="grid grid-cols-2 gap-8">
<div>

<h3 v-click="1">Påstand</h3>

<p v-click="1">Chat er ikke det endelige UI-et for AI. Tekst inn, tekst (eller statiske artefakter) ut er en blindvei for live interaksjon. <strong>Hva om modellen streamet ekte React-komponenter — databundet, interaktive, begrenset til designsystemet ditt?</strong></p>

<h3 v-click="2">Stack</h3>

<p v-click="2">Next.js på Bun · <strong>Vercel AI SDK</strong> (leverandøruavhengig, streamer tekst <em>og</em> JSON) · <strong>json-render</strong> (JSON → React) · Crystallize som backend + <strong>MCP-server</strong> så agenten henter ekte produkter i stedet for å hallusinere</p>

</div>
<div>

<h3 v-click="3">Slik fungerer det</h3>

<v-clicks at="3">

- **Catalog**: beskriv hver komponent (props, når den skal brukes, eksempeldata) — som å beskrive MCP-verktøy
- **Registry**: hvordan hver faktisk skal rendres — vanlig React, `useOptimistic`, context osv.
- En `ToolLoopAgent` får persona + handlekurv som prompt, kaller MCP-verktøy og returnerer et JSON-komponenttre som streames inn i siden

</v-clicks>

</div>
</div>

<!--
Tidsstempler (stream):
- 6:34:02 «Jeg tror ikke chat er måten å rendre det AI-en gir tilbake.»
- 6:37:55 Vercel AI SDK-pitch (bytt leverandør, stream objekter); 6:39:04 json-render.
- 6:40:11 Lab-demo: begrenset katalog; cachet resultat, deretter live generering med MCP-kall; legg-i-kurv virker fra streamet UI.
- 6:43:22 Kodegjennomgang: klientkomponent + registry, katalogbeskrivelser, ToolLoopAgent med Crystallize MCP-verktøy (~10 linjer).
- 6:51:06 Smart handlekurv-demo.
- 6:53:04 Snudd: nettbutikk som MCP-server, MCP UI/MCP Apps-spesifikasjonen, verktøy returnerer React-apper rendret i Claude Code / VS Code.
- 6:56:14 «Er det klart?» — brukbart for statiske/build-time-sider, for tregt for handlekurven i dag.
- 6:57:11 Trenger agenter UI i det hele tatt? Dagligvarekjøp = agent-til-agent; merkevareopplevelser = personalisert UI.

Hvorfor bare hederlig omtale: fascinerende retning og en god demo, men den ærlige konklusjonen er «ikke raskt nok ennå», så det er mindre umiddelbart anvendbart enn de fire favorittene.
-->

---

# Beyond Chat: When AI streams React components! Your cart has ideas! {.has-speaker.view-transition-talk-title}

<SpeakerPhoto src="/speakers/sebastien-morel.jpg" alt="Sébastien Morel" />

<div class="grid grid-cols-2 gap-8">
<div>

<h3 v-click="1">Demoene</h3>

<v-clicks at="1">

- «Lab»-side: persona (svaksynt leser, «React rocker») → generert side med ekte «legg i kurv»-knapper som virker
- **Smart handlekurv**: LLM-en genererer anbefalinger, tillegg, garantiblokker — halve kurven rendret normalt, halve streamet
- **Snudd på hodet**: nettbutikken *er* en MCP-server (MCP UI / MCP Apps) — be Claude Code om «vinyl-artwork» og den rendrer butikkens React-komponent inne i klienten

</v-clicks>

</div>
<div>

<h3 v-click="4">Dommen</h3>

<div v-click="4">

Mulig: ja.
<br>Klart for handlekurven: **nei**:
<br> 4 sekunder er for tregt for e-handel. Bra for å generere statiske sider ved build og for hyperpersonaliserte merkevareopplevelser. Dagligvarekjøp blir agent-til-agent; merkevarer du elsker trenger fortsatt UI.

  <QrCode url="https://crystallize.com/" label="Crystallize" :size="100" align="left" />

</div>

</div>
</div>

<!--
Tidsstempler (stream):
- 6:34:02 «Jeg tror ikke chat er måten å rendre det AI-en gir tilbake.»
- 6:37:55 Vercel AI SDK-pitch (bytt leverandør, stream objekter); 6:39:04 json-render.
- 6:40:11 Lab-demo: begrenset katalog; cachet resultat, deretter live generering med MCP-kall; legg-i-kurv virker fra streamet UI.
- 6:43:22 Kodegjennomgang: klientkomponent + registry, katalogbeskrivelser, ToolLoopAgent med Crystallize MCP-verktøy (~10 linjer).
- 6:51:06 Smart handlekurv-demo.
- 6:53:04 Snudd: nettbutikk som MCP-server, MCP UI/MCP Apps-spesifikasjonen, verktøy returnerer React-apper rendret i Claude Code / VS Code.
- 6:56:14 «Er det klart?» — brukbart for statiske/build-time-sider, for tregt for handlekurven i dag.
- 6:57:11 Trenger agenter UI i det hele tatt? Dagligvarekjøp = agent-til-agent; merkevareopplevelser = personalisert UI.

Hvorfor bare hederlig omtale: fascinerende retning og en god demo, men den ærlige konklusjonen er «ikke raskt nok ennå», så det er mindre umiddelbart anvendbart enn de fire favorittene.
-->

---

# Takeaways
<div class="grid grid-cols-2 gap-12">
<div>

<h3 v-click="1">Gjør denne uka</h3>

<v-clicks at="1">

- Kjør `npx knip` i repoet ditt
- Kjør pa11y mot en app
- Implementer busy / loading / done - tilstandene

</v-clicks>

<h3 v-click="4">Tenk på</h3>

<v-clicks at="4">

- Action props (`xxxAction`) i en delt komponentbibliotek
- «Tilkoblet ≠ i live»-antakelser i sanntidskoden vår
- Semantisk-HTML-rekkverk for AI-generert UI

</v-clicks>

</div>
<div>

<h3 v-click="7">Én linje per foredrag</h3>

<v-clicks at="7">

- **WCAG** — ekskludering er et valg; bruk riktig tag.
- **Knip** — TypeScript sier ikke fra om ubrukte exports; det gjør Knip.
- **Async React** — mellomtilstandene er en designleveranse.
- **Parprogrammerings-app** — nettleseren har et sanntidstak; mål hele loopen.
- **Beyond Chat** — LLM-en kan rendre UI; den kan bare ikke gjøre det raskt nok ennå.

</v-clicks>

</div>
</div>

<!--
Avslutt med konkrete neste steg i stedet for et sammendrag — kolleger husker en handling bedre enn en oppsummering. La «én linje per foredrag»-kolonnen stå oppe under spørsmål.
-->

---
layout: center
class: text-center
---

# Takk

<div class="flex justify-center gap-16 mt-10">
  <QrCode url="https://www.youtube.com/watch?v=Ge0DbLf-2R0" label="Hele streamen" :size="180" />
  <QrCode url="https://reactnorway.com/" label="Program og sammendrag" :size="180" />
</div>

<!--
Reservemateriale hvis det er tid: de andre foredragene har hver sin énlinjer i notatene på program-sliden.
-->

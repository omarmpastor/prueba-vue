<template>
  <div id="app">
    <PruHeader />
    <div class="grid-x grid-margin-x">
      <article class="grid-container cell small-3">
        <h2>Favoritos</h2>
        <PruBookmarks />
      </article>
      <article class="grid-container cell small-9">
      <h2>Jugadores</h2>
      <PruPlayers />
    </article>
    </div>
  </div>
</template>

<script>
import PruPlayers from './components/PruPlayers.vue'
import PruBookmarks from './components/PruBookmarks.vue'
import PruHeader from './components/PruHeader.vue'

export default {
  name: 'app',
  components: {
    PruPlayers,
    PruBookmarks,
    PruHeader
  }
}
</script>

<style lang="css">
  :root {
    --color-primary: #2483b1;
    --color-primary-rgb: 36,131,177;
    --color-primary-contrast: #ffffff;
    --color-primary-contrast-rgb: 255,255,255;
    --color-primary-shade: #20739c;
    --color-primary-tint: #3a8fb9;
  }

  .grid-container h2 {
    text-align: center;
  }
</style>

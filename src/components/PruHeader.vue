<template>
    <div class="top-bar">
      <div class="top-bar-left">
        <h2 class="menu-text">Prueba Vuex</h2>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li><input type="search" placeholder="Search"></li>
          <li><button type="button" class="button">Search</button></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PruHeader',
}
</script>

<style>
  .top-bar, li {
    background-color: var(--color-primary);
    color: var(--color-primary-contrast);
  }
</style>

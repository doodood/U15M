<template>
  <footer class="footer">
    <ul class="nav">
      <li class="nav__item">
        <router-link to="/" class="nav__link"
          ><span class="nav__text">Accueil</span></router-link
        >
      </li>
      <li class="nav__item">
        <router-link to="#" class="nav__link"
          ><span class="nav__text">Infos pratiques</span></router-link
        >
      </li>
      <li class="nav__item">
        <router-link to="#" class="nav__link"
          ><span class="nav__text">Formations</span></router-link
        >
      </li>
      <li class="nav__item">
        <router-link to="/teams" class="nav__link"
          ><span class="nav__text">Equipes</span></router-link
        >
      </li>
      <li class="nav__item">
        <router-link to="#" class="nav__link"
          ><span class="nav__text">Club</span></router-link
        >
      </li>
      <li class="nav__item">
        <router-link to="/news" class="nav__link"
          ><span class="nav__text">Contact</span></router-link
        >
      </li>
    </ul>
    <p class="copyright">2020 by don dood</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
</style>
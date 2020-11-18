<template>
  <header class="main-header">
    <router-link to="/"
      ><img
        :src="require('../assets/img/logo-bgx.png')"
        alt=""
        class="main-header__logo"
      />
    </router-link>

    <nav class="">
      <ul class="header__nav">
        <li class="header__nav__item">
          <router-link to="/" class="header__nav__link"
            ><span class="nav__text">Accueil</span></router-link
          >
        </li>
        
        <li class="header__nav__item">
          <router-link to="#" class="header__nav__link"
            ><span class="nav__text">les actualités</span></router-link
          >
        </li>
        <li class="header__nav__item">
          <router-link to="#" class="header__nav__link"
            ><span class="nav__text">le club</span></router-link
          >
        </li>
        <li class="header__nav__item">
          <router-link to="/teams" class="header__nav__link"
            ><span class="nav__text">l'équipe</span></router-link
          >
        </li>

        <li class="header__nav__item">
          <router-link to="#" class="header__nav__link"
            ><span class="nav__text">Informations pratiques</span></router-link
          >
        </li>

        <li class="header__nav__item">
          <router-link to="/news" class="header__nav__link"
            ><span class="nav__text">Contact</span></router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
@media screen and (min-width: 30em) {
  .pv5-ns {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .f4-ns {
    font-size: 1.25rem;
  }
}
.main-header {
  text-align: center;
  /* display:grid;
  grid-template: repeat(2,minmax(14rem,max-content)); */

  &__logo {
    align-self: center;
    justify-self: center;
    width: 15%;
    @media only screen and (max-width: 51.25em){
        width: 50%;
    }
    margin-top: 3rem;
  }
}
header {
  //background-color: transparent;
  background-color: black;
  //background-color: rgba(transparent, $alpha: .75);
  font-size: 1.5rem;
}
.header__nav {
  display: flex;
  color: black;
  //padding: 1.3rem;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  text-decoration: none;
  justify-content: space-between;
  text-align: center;
  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    text-decoration: none;
    //padding: 2.5rem;
    list-style: none;
    flex: auto;
    margin: 0.5rem;
    padding: 1.5rem;
  }
  .nav__text {
    text-transform: uppercase;
    color: #FFF;
    &:hover {
      color: #E56020;
    }
  }
}
</style>
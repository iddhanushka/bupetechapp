<template>
  <header class="site-header">
    <div class="wrapper wrapper--header">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div class="site-header__menubar">
            <div class="site-logo">
              <a class="navbar-brand" href="#"><img class="logo" :src="require(`@/assets/images/${imagename}`)" alt=""></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item menu-list">
                  <a class="nav-link active menu-name" aria-current="page" href="#">Why BUPE</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">Product</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">Modules</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">About</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">Pricing</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">Contact</a>
                  <div class="underline"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="site-header__options">
            <router-link class="get-quote button button--header" to="/contact">Get a Quote</router-link>
            <a href="" class="search"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></a>
            <a href="" class="login">Login</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {
   // tag: String,
   // title: String,
      imagename: String,
   // button1: String,
   // button2: String

  }
}
</script>

<style lang="scss">
 @import "../assets/styles/modules/_site-header.scss";

</style>


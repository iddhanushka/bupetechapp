<template>
  <header class="site-header">
    <div class="wrapper wrapper--header">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div class="site-header__menubar">
            <div class="site-logo">
              <a class="navbar-brand" href="#"><img class="logo" src="../assets/images/bupetech-logo.png" alt=""></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item menu-list">
                  <a class="nav-link active menu-name" aria-current="page" href="#" active-class="active">Why BUPE</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">Product</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item dropdown menu-list">
                  <a class="nav-link menu-name dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Modules
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item menu-name" href="#">Action</a></li>
                    <li><a class="dropdown-item menu-name" href="#">Another action</a></li>
                  </ul>
                </li>
                <!-- <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">Modules</a>
                  <div class="underline"></div>
                </li> -->
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
          
             <router-link class="get-quote button button--header" to="/demo" >Get a Quote</router-link>

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


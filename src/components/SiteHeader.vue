<template>
  <header class="site-header">
    <div class="wrapper wrapper--header">
      <nav class="navbar navbar-expand-lg navbar-light bg-faded navbar-toggleable-md">

        <div class="container-fluid">
          <div class="site-header__menubar">
            <div class="site-logo">
                 <router-link class="navbar-brand" to="/"><img class="logo"  :src="require(`@/assets/images/bupetech-logo.png`)" alt=""></router-link>
            </div>
            <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="my-1 mx-2 close">X</span>
       <span class="navbar-toggler-icon"></span>
            </button>
         
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item menu-list">
                   <router-link to="/why-bupe" class="nav-link menu-name" aria-current="page" active-class="active">Why BUPE</router-link>
                    <div class="underline"></div>
               
               
               
                </li>
                <li class="nav-item menu-list">
                   <router-link to="/product" class="nav-link menu-name"  active-class="active">Product</router-link>
                         <div class="underline"></div>
                </li>
                <li class="nav-item dropdown menu-list">
                    <router-link class="nav-link menu-name dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"  active-class="active">
                    Resources
                  </router-link>
                  <ul class="dropdown-menu modules-submenu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
<div class="dropdown-content">
      <div class="header">
        <h6>PHILOSOPHY</h6>
         <h4>BUPE Solution</h4>
      </div>
      <div class="row">
        <div class="coloum hline">
        <p>Several studies confirm that practitioners are generally dissatisfied with the performance measurement systems and performance measures in use today. Learn more about our philosophy behind BUPE Solution.</p>
        </div>
      </div>
      <div class="row hline">
           <div class="service-block ">
             <ul>
               <li class="image"> <img class="service-block__logo"  :src="require(`@/assets/images/training-logo.png`)" alt="" /></li>
               <li class="text">
                  <h4 class="service-block__title">Features</h4>
            <p>Learn more about ever expanding set of features we offer while learning from customers about their requirements.</p>
   
               </li>
            </ul>
            </div>
             <div class="service-block">
            <ul>
              <li class="image">
            <img class="service-block__logo"  :src="require(`@/assets/images/training-logo.png`)" alt="" />
              </li>
              <li class="text">
            <h4 class="service-block__title">Benefits</h4>
            <p>From Planning to measuring and management. See all the benefits.</p>
            </li>
            </ul>
            </div>
    </div>
        
      
       <div class="row">
           <div class="column">
           <router-link to="/product#learn_more" class="button button--blue">Watch a Demo</router-link>{{" "}}

           <router-link to="/contact-form" class="button button--no-background">Talk to us</router-link>
              
  </div>
         </div>
    </div>



                    </li>

                  </ul>
                </li>
                <!-- <li class="nav-item menu-list">
                  <a class="nav-link menu-name" href="#">Modules</a>
                  <div class="underline"></div>
                </li> -->
                <li class="nav-item menu-list">
                  <router-link class="nav-link menu-name" to="/about"  active-class="active">About</router-link>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <router-link class="nav-link menu-name" to="/pricing"  active-class="active">Pricing</router-link>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list">
                  <router-link class="nav-link menu-name" to="/contact"  active-class="active">Contact</router-link>
                  <div class="underline"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="site-header__options">
            <router-link class="get-quote button button--header" :to="{name:'ContactForm',params:{target:1} }" >Get a Quote</router-link>
       
            <router-link to="" class="login">Login</router-link>
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
    //  imagename: String,
   // button1: String,
   // button2: String

  }
}
</script>


<template>
  <header class="site-header">
    <div class="wrapper wrapper--header">
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          bg-faded
          navbar-toggleable-md
        "
      >
        <div class="container-fluid">
          <div class="site-header__menubar">
            <div class="site-logo">
              <router-link class="navbar-brand" to="/"
                ><img
                  class="logo"
                  :src="require(`@/assets/images/bupetech-logo.png`)"
                  alt=""
              /></router-link>
            </div>
            <button
              class="navbar-toggler navbar-toggler-right collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              ref="breadmenu"
            >
              <span @click="destroyed" class="close">x</span>
              <span @click="mounted" class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse"  ref="navbarNavDropdown" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item menu-list">
                  <a
                     href="#"
                    @click="go('/why-bupe')"
                    class="nav-link menu-name"
                    aria-current="page"
                    active-class="active"
                    >Why BUPE</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item dropdown menu-list">
                  <router-link
                    class="nav-link menu-name dropdown-toggle"
                    to="#"
                    id="productMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    active-class="active"
                  >
                    Product
                  </router-link>
                  <ul
                    class="dropdown-menu modules-submenu"
                    aria-labelledby="productMenuLink"
                  >
                    <li>
                      <MenuPopup
                        button1="header.product.button1"
                        button2="header.product.button2"
                        teaser1_src="resources_2nd.png"
                        teaser2_src="product_2nd.png"
                        title="header.product.title"
                        sub_title="header.product.sub_title"
                        desc="header.product.desc"
                        teaser2_title="header.product.teaser1_title"
                        teaser1_title="header.product.teaser2_title"
                        teaser2_desc="header.product.teaser1_desc"
                        teaser1_desc="header.product.teaser2_desc"
                        sub_link="/product"
                        teaser1_link="/product"
                        teaser2_link="/product"
                        teaser1_target="#learn_more"
                        teaser2_target="#features"
                        @close="closeWindow"
                      />
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown menu-list">
                  <router-link
                    class="nav-link menu-name dropdown-toggle"
                    to="#"
                    id="resoursesMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    active-class="active"
                  >
                    Resources
                  </router-link>
                  <ul
                    class="dropdown-menu modules-submenu"
                    aria-labelledby="resoursesMenuLink"
                  >
                    <li>
                      <MenuPopup
                        button1="header.resources.button1"
                        button2="header.resources.button2"
                        title="header.resources.title"
                        sub_title="header.resources.sub_title"
                        teaser1_src="product_1st.png"
                        teaser2_src="product_2nd.png"
                        desc="header.resources.desc"
                        teaser1_title="header.resources.teaser1_title"
                        teaser2_title="header.resources.teaser2_title"
                        teaser1_desc="header.resources.teaser1_desc"
                        teaser2_desc="header.resources.teaser2_desc"
                        teaser1_link="/training"
                        teaser2_link="/legal"
                         @close="closeWindow"
                      />
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown menu-list">
                  <router-link
                    class="nav-link menu-name dropdown-toggle"
                    to="#"
                    id="aboutMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    active-class="active"
                  >
                    About
                  </router-link>
                  <ul
                    class="dropdown-menu modules-submenu"
                    aria-labelledby="aboutMenuLink"
                  >
                    <li>
                      <MenuPopup
                        button1="header.about.button1"
                        button2="header.about.button2"
                        title="header.about.title"
                        sub_title="header.about.sub_title"
                        desc="header.about.desc"
                        teaser1_title="header.about.teaser1_title"
                        teaser1_src="resources_1st.png"
                        teaser2_src="resources_3rd.png"
                        teaser2_title="header.about.teaser2_title"
                        teaser1_desc="header.about.teaser1_desc"
                        teaser2_desc="header.about.teaser2_desc"
                        sub_link="/about"
                        teaser1_link="/about"
                        teaser2_link="/about"
                        teaser1_target="#aboutus"
                        teaser2_target="#leadership"
                         @close="closeWindow"
                      />
                    </li>
                  </ul>
                </li>
                <li class="nav-item menu-list">
                  <a
                    href="#"
                    class="nav-link menu-name"
                    @click="go('/pricing')"
                    active-class="active"
                    >Pricing</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item menu-list bottom-border">
                  <a
                    href="#"
                    class="nav-link menu-name"
                    @click="go('/contact')"
                    active-class="active"
                    >Contact</a>
                  <div class="underline"></div>
                </li>
                 <li class="nav-item menu-list nav-item__mobile-only">
                   
           <div class="column-m">
           <button @click="go('/demo')" class="button button--blue">{{$t(button1)}}</button>{{" "}}

           <button @click="go('/contact-form')" class="button button--no-background">{{$t(button2)}}</button>
              
  
         </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="site-header__options">
            <router-link
              class="get-quote button button--header"
              :to="{ name: 'ContactForm', params: { target: 1 } }"
              >Get a Quote</router-link
            >

            <router-link to="" class="login">Login</router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import router from "../router";
import MenuPopup from "@/components/MenuPopup.vue";
export default {
  name: "SiteHeader",
  components: { MenuPopup },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    mounted() {
      this.toggleBodyClass("addClass", "vu-fixed");
    },
    destroyed() {
      this.toggleBodyClass("removeClass", "vu-fixed");
    },
    closeWindow() {
      const el =this.$refs.navbarNavDropdown;
      const fl =this.$refs.breadmenu;
      el.classList.remove('show');
      fl.classList.add('collapsed');
      this. destroyed();

    },
    go(rname) {
   
     this.closeWindow();
     this. destroyed();
     if (rname)   
      router.push({
        path:rname,

      });
    },

  },
  props: {

    button1: String,
    button2: String
  },
};
</script>


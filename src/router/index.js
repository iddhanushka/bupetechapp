import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{topLeft:(window.innerWidth*0.25)+"px",
    topRight:(window.innerWidth*0.25+500)+"px",
    bottomLeft:(window.innerWidth*0.25+2450)+"px",
    bottomRight:(window.innerWidth*0.25+1600)+"px"}
  },
  {
    path: "/about",
    name: "About",
    meta:{topLeft:(window.innerWidth*0.25)+"px",
    topRight:(window.innerWidth*0.25+500)+"px",
    bottomLeft:(window.innerWidth*0.25+2450)+"px",
    bottomRight:(window.innerWidth*0.25+1600)+"px"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/contact-form",
    name: "ContactForm",
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactForm.vue"),
  },
  {
    path: "/careers",
    name: "Careers",
    meta:{topLeft:(window.innerWidth*0.25)+"px",
    topRight:(window.innerWidth*0.25+500)+"px",
  },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Careers.vue"),
  },
  {
    path: "/career-form/:id",
    name: "CareersForm",
    meta:{topLeft:"50%",topRight:"50%",bottomLeft:"100%",bototmLeft:"100%"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CareersForm.vue"),
  },
  {
    path: "/training",
    name: "Training",
    meta:{topLeft:(window.innerWidth*0.25)+"px",
    topRight:(window.innerWidth*0.25+500)+"px",
  },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Training.vue"),
  },
  {
    path: "/legal",
    name: "Privacy",
    meta:{topLeft:(window.innerWidth*0.25)+"px",
    topRight:(window.innerWidth*0.25+500)+"px",
   }, // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Privacy.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo.vue"),
  },
  {
    path: "/why-bupe",
    name: "WhyBupe",
    meta:{topLeft:(window.innerWidth*0.25)+"px",
    topRight:(window.innerWidth*0.25+500)+"px",
    bottomLeft:(window.innerWidth*0.25+2450)+"px",
    bottomRight:(window.innerWidth*0.25+1600)+"px"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WhyBupe.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pricing.vue"),
  },
  {
    path: "/product",
    name: "Product",
    meta:{topLeft:(window.innerWidth*0.25)+"px",
    topRight:(window.innerWidth*0.25+500)+"px",
    bottomLeft:(window.innerWidth*0.25+2450)+"px",
    bottomRight:(window.innerWidth*0.25+1600)+"px"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Product.vue"),
  },
  {
    path: "/Modules",
    name: "Modules",
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Modules.vue"),
  },
  {
    path: "/privarcy-terms",
    name: "PrivarcyTerms",
    children: [
      {
        path:':slug',
        component: () =>
        import(/* webpackChunkName: "about" */ "../views/PrivarcyTerms.vue"),
       }

   ],
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PrivarcyTerms.vue"),
  },
 
  {
    path: "/help",
    name: "Help",
    children: [
       {
         path:':slug',
         component: () =>
         import(/* webpackChunkName: "about" */ "../views/HelpContent.vue"),
        }

    ],
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HelpContent.vue"),
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, savedPosition) {
   
   
    if (to.hash) {
    console.log(to.hash);
     return {
      el: to.hash,
      behavior: 'smooth',
    }

    } else if (savedPosition) {
      window.scrollTo(0,0)
      return savedPosition;
    } else {
     
      window.scrollTo(0,0)
    }
  
    //window.scrollTo(0,0);
  },
});

export default router;

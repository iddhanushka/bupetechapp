<template>
  <section class="impact-enterprise">
    <div class="container container--custom">
      <div class="impact">
        <div class="row">
          <div class="col-xl-5 col-lg-5">
            <div class="impact__learnmore">
              <h4 class="tag">The imapct to the enterprise</h4>
              <h1 class="title">Unlock the full potential of your enterprise with increased work dynamics.</h1>
              <router-link class="button button--no-background" to="product#learn_more">Learn More</router-link>
              <img class="impact-threehuman" :src="require(`@/assets/images/impact-three-humans.png`)" alt="" />
            </div>
          </div>

          <div class="col-xl-7 col-lg-7">
            <div class="impact__partners">
              <div class="partner-block">
                <ul class="main-list">
                  <li class="left"><h1 class="partner-block__count">3000+</h1></li>
                  <li>
                    <ul class="sub-list">
                      <li>
                        <div class="partner-block__logo">
                          <img :src="require(`@/assets/images/ceylinco.png`)" alt="" />
                        </div>
                      </li>
                      <li>
                        <div class="partner-block__content">
                          <p>At every level, Ceylinco Insurance
                            workforce always aware how their 
                            work today, taking the company
                            to new heights tommorow.
                            </p>
                        </div>
                    </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="partner-block">
                <ul class="main-list">
                  <li class="left"><h1 class="partner-block__count">300+</h1></li>
                  <li>
                    <ul class="sub-list">
                      <li>
                        <div class="partner-block__logo">
                          <img  :src="require(`@/assets/images/watersedge.png`)" alt="" />
                        </div>
                      </li>
                      <li>
                        <div class="partner-block__content">
                          <p>At every level, Ceylinco Insurance
                            workforce always aware how their 
                            work today, taking the company
                            to new heights tommorow.
                            </p>
                        </div>
                    </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="partner-block">
                <ul class="main-list">
                  <li class="left"><h1 class="partner-block__count">200+</h1></li>
                  <li>
                    <ul class="sub-list">
                      <li>
                        <div class="partner-block__logo">
                          <img  :src="require(`@/assets/images/limara.png`)"  alt="" />
                        </div>
                      </li>
                      <li>
                        <div class="partner-block__content">
                          <p>At every level, Ceylinco Insurance
                            workforce always aware how their 
                            work today, taking the company
                            to new heights tommorow.
                            </p>
                        </div>
                    </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="impact-enterprise__together">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="partners">
              <img class="partner-logos" :src="require(`@/assets/images/partners.png`)" alt="" />
            </div>
          </div>

          <div class="col-xl-6 col-lg-6">
            <div class="content">
              <h4 class="tag">Together, for the better</h4>
              <h1 class="title">We belive in right partners for the right task.</h1>
            </div>
          </div>
        </div>

  
          <router-link class="get-quote button" to="/contact-form" >Get a Quote</router-link>
      </div>

      <div class="impact-enterprise__services">
        
          <div class="service-block">
            <img class="service-block__logo"  :src="require(`@/assets/images/proffessional-logo.png`)" alt="" />
            <h4 class="service-block__title">Professional Services</h4>
            <p>Give it a boost with expert support, 
              leveraging years and years of our 
              exposure in impact creation.</p>
            <router-link class="visit-more" to="/pricing#contact-info">Services by our distributors ></router-link>
          </div>
          <div class="service-block">
            <img class="service-block__logo"  :src="require(`@/assets/images/training-logo.png`)" alt="" />
            <h4 class="service-block__title">Training &amp; Certification</h4>
            <p>To get most out of the product, key is to aquire the right skill set from the expert team at Bupe tech.</p>
            <router-link class="visit-more" to="/training">Explore our training catalogue ></router-link>
          </div>
          <div class="service-block">
            <img class="service-block__logo"  :src="require(`@/assets/images/help-logo.png`)" alt="" />
            <h4 class="service-block__title">Help &amp; Documentation</h4>
            <p>Start right here for operation of the solution and to deep dive with the philosophy behind.
</p>
            <a class="visit-more" href="">How to guides ></a> <br/>
             <router-link class="visit-more" to="/help">Full documentation ></router-link>
          </div>
        
      </div>
    </div>
   <FooterLeaf />
  </section>
</template>

<script>

import FooterLeaf from '@/components/FooterLeaf.vue';

export default {
  name: 'ImpactEnterprise',
  components: {
    FooterLeaf
  }

}
</script>

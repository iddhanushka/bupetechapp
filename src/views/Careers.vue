<template>
<section class="careers">
   <div class="container">
     <div class="row">
       <div class="col-xl-12">
         <div class="row justify-content-center">
           <div class="col-xl-11">
            <h1 class="careers__main-title">Careers</h1>
            <div class="row">
              <div class="col-xl-7">
                <img class="careers__img" src="../assets/images/careers-man.png" alt="">
              </div>
              <div class="col-xl-5">
                <div class="details">
                  <h4 class="careers__subtitle">Careers at bupe tech</h4>
                  <h3 class="careers__title">Step in to explore the wealth of career opportunities and take your career to the next level</h3>
                  <p>We have job openings available in the Singapore and Australia, including remote options. Perhaps you're looking for a more flexible way of working, a company that cares about your well-being, or a chance to really progress your career. We value s inclusion and diversity across our oraganization and that makes our view broader and equip us better to deliver the best.</p>
                  <router-link to="/careers" class="button careers__ap-btn">See Available Positions</router-link>
                </div>
              </div>
            </div>
            <h2 class="careers__bottom-title">At BUPE Tech, you’ll be empowered to work on things that you’re passionate about. Your ideas will matter</h2>
           </div>
         </div>
       </div>
     </div> 
   </div>
  </section>
<section class="job-listing">
  <vacancies></vacancies>
</section>
</template>

<script>
import vacancies from "../components/Vacancies";

export default ({
  name:'CareersPage',
  components: { vacancies }
})
</script>

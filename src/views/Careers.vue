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
                  <router-link to="/career-form" class="button careers__ap-btn">See Available Positions</router-link>
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
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="row justify-content-center">
            <div class="col-xl-11">
              <h1 class="job-listing__title">Job Listings</h1>
              <div class="job-listing__location">
                <div class="form-block">
                  <form action="">
                    <div class="col-xl-2">
                      <label for="comSize" class="form-label location">Location</label>
                      <select id="inputState" class="form-select selector-field">
                        <option selected>Any</option>
                        <option>...</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    
      <div class="job-listing__roles">
        <h3 class="title">We have 6 openings</h3>
        <div class="job-role-carousel">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><span class="number-indicator">1</span></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"><span class="number-indicator">2</span></button>
              <!-- <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">3</button> -->
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="jobs">
                  <div class="job-role">
                    <h1 class="job-role__title">Senior Backend Developer</h1>
                    <h4 class="job-role__location">Location: Singapore</h4>
                    <div class="description">
                      <p>Description: Development & Maintenace of PHP/MySQL based backend system.</p>
                      <p>Experience: Minimum 3 years with PHP/MySQL in a similar role.</p>
                      <p>Qualifications: A degree in Computer Science</p>
                    </div>
                   <router-link to="/career-form" class="button button--blue job-role__apply-btn">Apply</router-link>
                  </div>
                  <div class="job-role">
                    <h1 class="job-role__title">Business Development Manager</h1>
                    <h4 class="job-role__location">Location: Singapore</h4>
                    <div class="description">
                      <p>Description: You will be handling customer requests and develop new markets.</p>
                      <p>Experience: Minimum 4 years in a similar role with a Saas product is preferable.</p>
                      <p>Qualifications: A Degree/Diploma in Business Mangement.</p>
                    </div>
                    <router-link to="/career-form" class="button button--blue job-role__apply-btn">Apply</router-link>
                  </div>
                  <div class="job-role">
                    <h1 class="job-role__title">Mobile App Developer - iOS</h1>
                    <h4 class="job-role__location">Location: Singapore</h4>
                    <div class="description">
                      <p>Description: Development & Maintenace of iOS Mobile Applications.</p>
                      <p>Experience: Minimum 2 years with SwiftUI/ObjectiveC.</p>
                      <p>Qualifications: A degree in Computer Science</p>
                    </div>
                    <router-link to="/career-form" class="button button--blue job-role__apply-btn">Apply</router-link>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="jobs">
                  <div class="job-role">
                    <h1 class="job-role__title">Senior Backend Developer</h1>
                    <h4 class="job-role__location">Location: Singapore</h4>
                    <div class="description">
                      <p>Description: Development & Maintenace of PHP/MySQL based backend system.</p>
                      <p>Experience: Minimum 3 years with PHP/MySQL in a similar role.</p>
                      <p>Qualifications: A degree in Computer Science</p>
                    </div>
                  <router-link to="/career-form" class="button button--blue job-role__apply-btn">Apply</router-link>
                  </div>
                  <div class="job-role">
                    <h1 class="job-role__title">Business Development Manager</h1>
                    <h4 class="job-role__location">Location: Singapore</h4>
                    <div class="description">
                      <p>Description: You will be handling customer requests and develop new markets.</p>
                      <p>Experience: Minimum 4 years in a similar role with a Saas product is preferable.</p>
                      <p>Qualifications: A Degree/Diploma in Business Mangement.</p>
                    </div>
                 <router-link to="/career-form" class="button button--blue job-role__apply-btn">Apply</router-link>
                  </div>
                  <div class="job-role">
                    <h1 class="job-role__title">Mobile App Developer - iOS</h1>
                    <h4 class="job-role__location">Location: Singapore</h4>
                    <div class="description">
                      <p>Description: Development & Maintenace of iOS Mobile Applications.</p>
                      <p>Experience: Minimum 2 years with SwiftUI/ObjectiveC.</p>
                      <p>Qualifications: A degree in Computer Science</p>
                    </div>
                   <router-link to="/career-form" class="button button--blue job-role__apply-btn">Apply</router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>


</template>
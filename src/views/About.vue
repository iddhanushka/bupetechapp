<template>
 <div class="about-us">
    <div class="container">
      <h1 class="title">Companies do better with BUPE. Reaching their full potential.</h1>
      <p>Continuous performance optimization across the organization, at all level with better visibility, measurability with enough transparency in the performance domain.
        It is our mission to take you to reach your full potential.</p>
      <div class="vision">
        <h2 class="title">Our Vision</h2>
        <p>Be the forerunner in Plug and Play System Solutions on Essential Business and Peoples Performance Management Sphere Heading the industry domain that we operate in all the time</p>
      </div>
       <div class="vision">
        <h2 class="title">Mission Statement</h2>
        <p>Empower the Enterprises and SMEs in over 190 countries around the globe despite the industry that they operate in with the best Plug and Play (PnP) system solution which includes all the essential elements on Business and People’s Performance Management with ease of use making every individual focused and committed on the business objectives all the time keeping your business on track</p>
      </div>
      <div class="vision">
        <h2 class="title">Our Core Values</h2>
        <ol>
        <li>Primary focus of our system solution is to solve key pain pints with regard to Performance Management in Enterprises</li>
<li>Value of the system solution we offer always exceeds the price</li>
<li>We believe in simplicity with ease of use of our solution and hence not to add more problems on the top of what you have</li>
<li>The point you subscribe to our solution, is the time you go live and start benefiting from it, so we call it Plug and Play</li>
<li>We continuously innovate and reinvent ourselves to offer you the best and the latest solutions in the space we operate in</li>
<li>We believe in each one in our team has the equal opportunity make a difference</li>
<li>The impact we create in your work place and in your workforce is one of the criteria that we use to measure our success</li>
<li>We want to create an environment where everyone has the equal opportunity to spell-out their thoughts loud and constantly challenge the way we do things</li>
<li>We do not confine ourselves to silos its all about "US”, "We" and "Together as a one Team” not "You”, "Me” and "Individual Brilliance"</li>
<li>We are passionate about what we do, so we don’t take any stress</li>
</ol>
      </div>
      <div class="row">
        <div class="col-xl-4">
          <div class="corevalue-block">
            <ul class="list">
              <li class="left-list"><img class="corevalue-block__icon" src="../assets/images/innovation-icon.png" alt=""></li>
              <li class="right-list">
                <h4 class="corevalue-block__title">Innovation</h4>
                <p>We innovate constantly by reframing problems, extending paradigms through breakthrough thinking. We deliver unique solutions to business problems, which is the key to our framework of business performance management.</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="corevalue-block">
            <ul class="list">
              <li class="left-list"><img class="corevalue-block__icon" src="../assets/images/hand-icon.png" alt=""></li>
              <li class="right-list">
                <h4 class="corevalue-block__title">Together we grow</h4>
                <p>The key focus of our solution is to enable and empower our clients, managing business performance to achieve desired strategic objectives, maximizing shareholder wealth. All our solutions are centred on creating this value, which is the measure of our success.</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="corevalue-block">
            <ul class="list">
              <li class="left-list"><img class="corevalue-block__icon" src="../assets/images/hand-icon.png" alt=""></li>
              <li class="right-list">
                <h4 class="corevalue-block__title">Partners with your journey</h4>
                <p>We are true partners, who spent the time to thoroughly understand your requirements, developing insights and going that extra mile to create value for our clients.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="about-us__apex" id="leadership">
        <h1 class="title">Our APEX</h1>
        <div class="row">
          <div class="col-xl-4 col-md-4 col-sm-6">
            <div class="management-crew">
              <div class="card management-crew__card" style="width: 100%;">
                <img src="../assets/images/someone.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="management-crew__title">Someone</h4>
                  <h5 class="card-title management-crew__subtitle">CEO</h5>
                  <b-button variant="outline-info" data-bs-toggle="modal" @click="readBio(1)" data-bs-target="#readModal">Read Bio ></b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-6">
            <div class="management-crew">
              <div class="card management-crew__card" style="width: 100%;">
                <img src="../assets/images/someone.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="management-crew__title">Someone</h4>
                  <h5 class="card-title management-crew__subtitle">CTO</h5>
                 <b-button variant="outline-info" data-bs-toggle="modal" @click="readBio(2)" data-bs-target="#readModal">Read Bio ></b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-6">
            <div class="management-crew">
              <div class="card management-crew__card" style="width: 100%;">
                <img src="../assets/images/someone.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="management-crew__title">Someone</h4>
                  <h5 class="card-title management-crew__subtitle">CFO</h5>
                 <b-button variant="outline-info" data-bs-toggle="modal" @click="readBio(3)" data-bs-target="#readModal">Read Bio ></b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-6">
            <div class="management-crew management-crew--no-mb">
              <div class="card management-crew__card" style="width: 100%;">
                <img src="../assets/images/someone.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="management-crew__title">Someone</h4>
                  <h5 class="card-title management-crew__subtitle">CIO</h5>
                  <b-button variant="outline-info" data-bs-toggle="modal" @click="readBio(4)" data-bs-target="#readModal">Read Bio ></b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-6">
            <div class="management-crew management-crew--no-mb">
              <div class="card management-crew__card" style="width: 100%;">
                <img src="../assets/images/someone.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="management-crew__title">Someone</h4>
                  <h5 class="card-title management-crew__subtitle">CPO</h5>
   
                    <b-button variant="outline-info" data-bs-toggle="modal" @click="readBio(5)" data-bs-target="#readModal">Read Bio ></b-button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
     
  </div>

<div class="modal fade" id="readModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       {{bio}}
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>


</template>
<script>
export default {
  name: "About",
   data(){
   return {
        bio:null,
    }
   },
  methods: {
    readBio(id) {
    
     this.bio=id;
    },
  }
}
</script>
<template>
  <div class="container container--custom">
    <div class="row">
      <div class="col-xl-12">
        <div class="row justify-content-center">
          <div class="col-xl-11">
            <h1 class="job-listing__title">Job Listings</h1>
            <div class="job-listing__location">
              <div class="form-block">
                <form action="">
                  <div class="col-xl-2 col-lg-3">
                    <label for="comSize" class="form-label location"
                      >Location</label>
                    <select
                      placeholder="Any"
                      id="inputState"
                      class="form-select selector-field"
                      v-model="location"
                      v-on:change="onChangeLocation($event)"
                    >
                      <option value="Any" :selected="true">Any</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="job-listing__roles" id="careers">
      <h3 class="title">We have {{ numberOfJobs }} openings</h3>
      <div class="job-role-carousel">
        <div
          id="carouselVecancies"
          class="carousel slide"
          data-interval="false">
        
          <div class="carousel-indicators">
           
  <button
              class=""
              type="button"
              data-bs-target="#carouselVecancies"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
                :style="{backgroundImage:'url(' + require(`@/assets/images/prev-arrow.png`) + ')',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}"
           
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
   <button
              type="button"
               data-bs-target="#carouselVecancies"
               :data-bs-slide-to="index"
               :aria-label="(index+1)"
               :class="[index == 0 ? 'active' : '']"
              v-for="(job, index) in this.axiosResult"
              :key="job.id"
            >
            <span class="number-indicator">{{index+1}}</span>
            </button>


            <button
              class=""
              type="button"
              data-bs-target="#carouselVecancies"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                :style="{backgroundImage:'url(' + require(`@/assets/images/next-arrow.png`) + ')',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="carousel-inner">
            <div
              :class="[index == 0 ? 'carousel-item  active' : 'carousel-item']"
              v-for="(job, index) in this.axiosResult"
              :key="job.id"
            >
              <div class="jobs">
                <div class="job-role" v-for="items in job" :key="items.id">
                  <h1 class="job-role__title">{{ items.name }}</h1>
                  <h4 class="job-role__location">
                    Locations:{{ items.location }}
                  </h4>
                  <div class="description">
                    <p>Description:{{ items.description }}</p>
                    <p>Experience:{{ items.experience }}</p>
                    <p>Qualifications:{{ items.qualifications }}</p>
                  </div>
                  <router-link
                    :to="`/career-form/${items.id}`"
                    class="button button--blue job-role__apply-btn"
                    >Apply</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "vacancies",

  data() {
    return {
      axiosResult: null,
      numberOfPages: null,
      axiosRowResult:null,
      numberOfJobs: 0,
      loading: true,
      location: "Any",
      carouselSize:3,
      errored: false,
    };
  },
  created() {
    (this.loading = true),
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/job/index`)
        .then((response) => {
          // this.debugger;
          //console.warn(response.data);

          this.axiosRowResult = response.data.data;
          this.numberOfJobs = response.data.data.length;
          const chunk = (arr, size) =>
            Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
              arr.slice(i * size, i * size + size)
            );
          this.axiosResult = chunk(response.data.data, this.carouselSize);
         
        })
        .catch((error) => {
          this.errored = true;
          for (var key in error.response.data.errors) {
            this.$toast.show(error.response.data.errors[key], {
              type: "error",
              position: "top-left",
              pauseOnHover: true,
              className: "toast-failed",
            });
          }
        })
        .finally(() => (this.loading = false));
  },
  methods: {
    onChangeLocation() {
      let tempitems= this.axiosRowResult.filter(item => {
        if (this.location.toLowerCase()=='any')
            return item;
        else
            return item.location.toLowerCase().indexOf(this.location.toLowerCase()) > -1;
      })
    this.numberOfJobs = tempitems.length; 
       const chunk = (arr, size) =>
          Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
          );
        this.axiosResult = chunk(tempitems, this.carouselSize);
         console.log( this.axiosResult);
    },
  },
  computed: {
    pageCount() {
      return Object.keys(this.axiosResult).length / this.carouselSize;
    }
  },
  mounted: function () {
    const screenSize=window.innerWidth;
    if (screenSize<420){
        this.carouselSize=1;
    } else if (screenSize<800){
      this.carouselSize=2;

    }
    
  }
};
</script>

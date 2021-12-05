<template>      
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
							<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
						<div class="carousel-inner">
						<div class="carousel-item active">							
								<div class="jobs">  								
									<div class="job-role"  v-for="job in this.axiosResult" :key="job.id">
										<h1 class="job-role__title">{{job.name}}</h1>
										<h4 class="job-role__location">{{job.location}}</h4>
										<div class="description">
											<p>{{job.description}}</p>
										</div>
										<router-link :to="`/career-form/${job.id}`" class="button button--blue job-role__apply-btn">Apply</router-link>
									</div>
								</div>                                						
						</div>
                        <div class="carousel-item">							
								<div class="jobs">  								
									<div class="job-role"  v-for="job in this.axiosResult" :key="job.id">
										<h1 class="job-role__title">{{job.name}}</h1>
										<h4 class="job-role__location">{{job.location}}</h4>
										<div class="description">
											<p>{{job.description}}</p>
										</div>
										<router-link :to="`/career-form/${job.id}`" class="button button--blue job-role__apply-btn">Apply</router-link>
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
import axios from 'axios';

export default ({
    name: "vacancies",
    data() {
    return {
        axiosResult:null,
        numberOfPages:null,
        loading: true,
        errored: false
      }
  },
   created() { 
        this.loading = true, 
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/job/index`)
            .then((response) => {
                // this.debugger;
                    //console.warn(response.data);
                    this.axiosResult = response.data.data;                    
                })
            .catch((error)=>{     
                this.errored = true            
                for (var key in error.response.data.errors) {                    
                    this.$toast.show(error.response.data.errors[key], {
                    type: 'error',
                    position: 'top-left',
                    pauseOnHover: true,
                });
                }
            })
            .finally(() => this.loading = false);        
    },
    computed: {
      pageCount() {
         return Object.keys(this.axiosResult).length / 3;
     }
    },
})
</script>

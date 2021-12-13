<template>
<section class="pricing">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="pricing-details">
                <h1 class="title">Pricing</h1>
                <p class="description">Take your oraganization to the next level with  amazing capabilities of our solution. We stronlgy belive  our solution will help your organization thrive.</p>
                <p class="description">To make your decision easy as possible, we priced our solution starting with minimum 1pax and with 25pax pricing breakpoints to expand license as you grow.</p>
                <div class="pricing-cal">
                  <h2 class="title">Price Calculator</h2>
                  <div class="form-block">
                    <form class="row g-4" @submit="loadCalculation" method="post">
                      <div class="col-xl-6 ">
                        <label for="bUsers" class="form-label form-label--dark-green">No of BUPE Users</label>
                        <input type="number"  id="user_count"  class="form-control input-field" required v-model="posts.user_count" v-on:change="changedUserCount()">                         
                      </div>
                      <div class="col-xl-6">
                        <label for="bill" class="form-label form-label--dark-green">Select Annual or Monthly billing</label>
                        <select id="inputState" class="form-select selector-field selector-field--dark-green selector-field--bold"  required v-model="posts.plan" v-on:change="onChangePlan($event)">
                          <option value="Monthly" selected>Monthly</option>
                          <option value="Annually" >Annually</option>
                        </select>
                        <span class="save-percentage">Save 15% with annual commitment</span>
                      </div>
                      <div class="col-xl-12">
                        <h5 class="total-cost">Total Estimated Cost</h5>
                        <h3 class="amount">{{this.Pricing}} <span class="month">/{{posts.plan}}</span></h3>
                      </div>
                      
                      <div class="col-xl-12">
                        <button type="submit" class="button button--submit form-submit-btn">Get a Quote</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <contactDetails/>
</template>

<script>
import contactDetails from "../components/ContactDetails";
import axios from 'axios';

export default ({
  name:'ContactInf',
  components:{contactDetails},
  data(){
    return{
      posts:{
        user_count:null,
        plan:null,
      },
      Pricing:null,
      loading: true,
      errored: false,
    }
  },
  methods:{ 
    onChangePlan(){
      this.calculateRates();
    },
    changedUserCount(){
      this.calculateRates();
    },
    calculateRates(){
      if(!this.posts.user_count){
        this.posts.user_count = 40;
      }
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/price/view`, this.posts)
            .then((response)=>{                            
              if(response.status === 200){
                  this.Pricing = response.data.price;
              } else {
                  this.$toast.show('Unable to procceed, Please check your Given details. ', {
                      type: 'success',
                      position: 'top-left',
                      className:'toast-failed',
                  });
              }
            })
            .catch((error)=>{                 
                for (var key in error.response.data.errors) {                    
                  this.$toast.show(error.response.data.errors[key], {
                    type: 'error',
                    position: 'top-left',
                    pauseOnHover: true,
                    className:'toast-failed',
                  });
              }
            })
    }
  },
  mounted: function(){
      this.posts.plan = "Monthly";
      console.warn(this.user_count);
      this.calculateRates();
  }
  
})
</script>
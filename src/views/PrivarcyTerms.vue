<template>
<div class="privacy-content">
    <div class="wrapper wrapper--header">
      <h1 class="privacy-content__title">Privacy Notice</h1>
      <div class="privacy-content__notices">
        <div class="privacy-navtab">
          <div class="d-grid align-items-start privacy-navtab-container">
            <div class="privacy-navtab__menu">
              <div v-for="(items,pdx) in menuData"  :key="items.id" class="privacy-navtab__links">
                <h3 class="privacy-navtab__title">{{items.main_title}}</h3>
                <div class="nav flex-column nav-pills me-3" :id="'v-pills-'+items.id+'-tab'" role="tablist" aria-orientation="vertical">
                  <button  v-on:blur="handleBlur" v-for="(item,index) in items.sub_menu"  :key="item.id" :class="index==0 && pdx==0?'nav-link active':'nav-link'" :id="'v-pills-tab-'+item.id" data-bs-toggle="pill" :data-bs-target="'#v-pills-'+item.id" type="button" role="tab" :aria-controls="'#v-pills-'+item.id" :aria-selected="index==0">{{item.sub_title}}</button>
                </div>
              </div>

            </div>

            <div class="privacy-navtab__content">
              <div class="tab-content" id="v-pills-tabContent">
                <div v-for="(item,idx) in bodyData"  :key="item.id" :class="idx==0?'tab-pane fade show active':'tab-pane fade show'" :id="'v-pills-'+item.id" role="tabpanel" :aria-labelledby="'v-pills-'+item.id+'-tab'" v-html="item.content"></div>
                 
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
  name:'PrivarcyTerms',
  data(){
    return{
      menuData:[],
      bodyData:[],
      Pricing:null,
      loading: true,
      errored: false,
    }
  },
  methods:{

    handleBlur(e){
      e.target.classList.remove('active');


    },
  getDocument(type){

      axios.post(`${process.env.VUE_APP_BASE_URL}/api/document/index`, {type})
            .then((response)=>{                            
              if(response.status === 200){
                  this.menuData = response.data.menu ;
                  this.bodyData = response.data.body ;
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
                  }
                  );
              }
            })
    }},
  mounted: function(){
  
    
      this.getDocument('privacy');
  }
  })
  </script>
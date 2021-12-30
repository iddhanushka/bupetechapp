<template>
      <div class="help-content">
    <div class="wrapper wrapper--header">
      <div class="container-fluid">
        <h1 class="help-content__title">Documentation</h1>
      <div class="help-content__accordion">
        <div class="accordion" id="accordionDocument">
          <div v-for="(items,pdx) in menuData"  :key="items.id"  class="accordion-item">
            <h2 class="accordion-header" :id="'heading'+items.id">
              <button  @click="onChangeLocation($event)" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+items.id" :aria-expanded="pdx==0" :aria-controls="'collapse'+items.id">
                {{items.main_title}}
              </button>
            </h2>
            <div :id="'collapse'+items.id" :class="items.slug==slug?'accordion-collapse collapse show':'accordion-collapse collapse' " :aria-labelledby="'heading'+pdx" data-bs-parent="#accordionDocument">
              <div class="accordion-body">
                <div class="privacy-navtab">
                  <div class="d-grid align-items-start privacy-navtab-container">
                    <div class="privacy-navtab__menu">
                      <div class="privacy-navtab__links">
                        <div class="nav flex-column nav-pills me-3" :id="'v-pills-'+items.id+'-tab'" role="tablist" aria-orientation="vertical">
                          
                          <button   v-for="(item,index) in items.sub_menu"  :key="item.id" :class="index==0 ?'nav-link active':'nav-link'" :id="'v-pills-tab-'+item.id" data-bs-toggle="pill" :data-bs-target="'#v-pills-'+item.id" type="button" role="tab" :aria-controls="'#v-pills-'+item.id" :aria-selected="index==0">{{item.sub_title}}</button>
                              </div>
                      </div>
                    </div>
        
                    <div :style="{top:(-85-pdx*60)+'px'}" class="privacy-navtab__content privacy-navtab__content--position-top">
                      <div class="tab-content" id="v-pills-tabContent">

                          <div v-for="(item,idx) in items.body"  :key="item.id" :class="idx==0?'tab-pane fade show active':'tab-pane fade show'" :id="'v-pills-'+item.id" role="tabpanel" :aria-labelledby="'v-pills-'+item.id+'-tab'" v-html="item.content"></div>
                 
                                      </div>
                    </div>
                  </div>
                </div>
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
  name:'PrivarcyTerms',
  data(){
    return{
      menuData:[],
      bodyData:[],
      Pricing:null,
      loading: true,
      errored: false,
      slug:null
    }
  },
  methods:{


   
  getDocument(type){

      axios.post(`${process.env.VUE_APP_BASE_URL}/api/document-ex/index`, {type})
            .then((response)=>{                            
              if(response.status === 200){
                  this.menuData = response.data.body;
               
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
  
      if (this.$route.params.slug){
        this.slug=this.$route.params.slug;
      }else
        this.slug='key-performance-indicators';

      this.getDocument('help');
  }
  })
  </script>
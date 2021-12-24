<template>
<div class="dropdown-content">
      <div class="header">
        <h6>{{$t(title)}}</h6>
         <h4>{{$t(sub_title)}}</h4>
      </div>
      <div class="row">
        <div   @click="go(sub_link)" class="coloum hline">
        <p>{{$t(desc)}}</p>
        </div>
      </div>
      <div class="row hline">
           <div @click="goX(teaser1_link,teaser1_target)" class="service-block ">
             <ul>
               <li class="image"> <img class="service-block__logo"  :src="require(`@/assets/images/${teaser1_src}`)" alt="" /></li>
               <li class="text">
                  <h4 class="service-block__title">{{$t(teaser1_title)}}</h4>
            <p>{{$t(teaser1_desc)}}</p>
   
               </li>
            </ul>
            </div>
             <div  @click="goX(teaser2_link,teaser2_target)" class="service-block">
            <ul>
              <li class="image">
            <img class="service-block__logo"  :src="require(`@/assets/images/${teaser2_src}`)" alt="" />
              </li>
              <li class="text">
            <h4 class="service-block__title">{{$t(teaser2_title)}}</h4>
            <p>{{$t(teaser2_desc)}}</p>
            </li>
            </ul>
            </div>
    </div>
        
      
       <div class="row">
           <div class="column">
           <button @click="go('/demo')"  class="button button--blue">{{$t(button1)}}</button>{{" "}}

           <button @click="go('/contact-form')"  class="button button--no-background">{{$t(button2)}}</button>
              
  </div>
         </div>
    </div>

</template>

<script>

import router from "../router";

export default {
  name: 'MenuPopup',
  methods: {
    go(rname) {
 
   this.$emit('close', true);
     if (rname)   
      router.push({
        path:rname,

      });
    },
    goX(rname,hash) {
      this.$emit('close', true);
     if (rname)   
      router.push({
        path:rname,
        hash:hash

      });
    }
  },
  props: {
      button1:String,
      button2:String,
      title:String,
      desc:String,
      sub_title:String,
      teaser1_title:String,
      teaser2_title:String,
      teaser1_desc:String,
      teaser2_desc:String,
      teaser1_src:String,
      teaser2_src:String,
      sub_link:String,
      teaser1_link:String,
      teaser2_link:String,
      teaser1_target:String,
      teaser2_target:String


  }

}
</script>
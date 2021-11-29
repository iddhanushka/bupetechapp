<template>
<section class="kpi-detail-tabs">
    <div class="wrapper">
      <div class="kpi-detail-tabs__menu">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Overview</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="ceo-tab" data-bs-toggle="tab" data-bs-target="#ceo" type="button" role="tab" aria-controls="ceo" aria-selected="false">CEO</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="cfo-tab" data-bs-toggle="tab" data-bs-target="#cfo" type="button" role="tab" aria-controls="cfo" aria-selected="false">CFO</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="cto-tab" data-bs-toggle="tab" data-bs-target="#cto" type="button" role="tab" aria-controls="cto" aria-selected="false">CTO</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="cpo-tab" data-bs-toggle="tab" data-bs-target="#cpo" type="button" role="tab" aria-controls="cpo" aria-selected="false">CPO</button>
          </li>
        </ul>
      </div>
      
      <div class="kpi-detail-tabs__content">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <video style="width:100%" class="elementor-video" src="https://www.bupetech.com/wp-content/uploads/2021/01/BUPE-1080p-210127.mp4" controls="" controlslist="nodownload" poster="https://www.bupetech.com/wp-content/uploads/2021/02/Introduction_to_bupe.jpg"></video>
                  </div>
                </div>
    
                <div class="col-xl-7">
                  <div class="kpi-solution__content">
                    <h1 class="title">Brings buisness & people together, connecting every individual with strategic objectives.</h1>
                    <p>A single solution to Plan, Measure and Manage business performance.</p>
                    <p>At top level, organization layout the buisness strategy. Our solution will make sure aligning and empowering every individual within oraganization to achieve desired goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="ceo" role="tabpanel" aria-labelledby="ceo-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <img class="image-thumbnail" src="../assets/images/ceo.png" alt="">
                  </div>
                </div>
    
                <div class="col-xl-7">
                  <div class="kpi-solution__content">
                    <h1 class="title">CEO</h1>
                    <p>Use of multidimensional set-of performance measures for planning, budgeting and management of a business. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="cfo" role="tabpanel" aria-labelledby="cfo-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <img class="image-thumbnail" src="../assets/images/cfo.png" alt="">
                  </div>
                </div>
    
                <div class="col-xl-7">
                  <div class="kpi-solution__content">
                    <h1 class="title">CFO</h1>
                    <p>Translates business strategies in to deliverable results, combining financial, strategic and operational measures to gauge how well a company meets its targets. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="cto" role="tabpanel" aria-labelledby="cto-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <img class="image-thumbnail" src="../assets/images/cto.png" alt="">
                  </div>
                </div>
    
                <div class="col-xl-7">
                  <div class="kpi-solution__content">
                    <h1 class="title">CTO</h1>
                    <p>Integrated set of planning and review procedures which cascades down through the organisation to provide a link between each individual and the overall strategy of the organisation. 	</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="cpo" role="tabpanel" aria-labelledby="cpo-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <img class="image-thumbnail" src="../assets/images/cpo.png" alt="">
                  </div>
                </div>
    
                <div class="col-xl-7">
                  <div class="kpi-solution__content">
                    <h1 class="title">CPO</h1>
                    <p>Using Technology to standardise and speed processors, being humane. </p>
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

<script>
export default {
  name: 'KpiDetailTabs',
 /* props: {
    msg: String
  }*/
}
</script>
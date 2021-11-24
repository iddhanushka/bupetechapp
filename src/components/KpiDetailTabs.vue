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
                    <img class="video-thumbnail" src="../assets/images/kpi-overview.png" alt="">
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
                    <img class="video-thumbnail" src="../assets/images/kpi-overview.png" alt="">
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
          <div class="tab-pane fade" id="cfo" role="tabpanel" aria-labelledby="cfo-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <img class="video-thumbnail" src="../assets/images/kpi-overview.png" alt="">
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
          <div class="tab-pane fade" id="cto" role="tabpanel" aria-labelledby="cto-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <img class="video-thumbnail" src="../assets/images/kpi-overview.png" alt="">
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
          <div class="tab-pane fade" id="cpo" role="tabpanel" aria-labelledby="cpo-tab">
            <div class="kpi-solution">
              <div class="row">
                <div class="col-xl-5 d-flex align-items-center">
                  <div class="kpi-solution__img">
                    <img class="video-thumbnail" src="../assets/images/kpi-overview.png" alt="">
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
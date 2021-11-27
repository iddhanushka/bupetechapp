  <template>
  <div class="apply-developer">
      <div class="row">
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__form">
            <h1 class="title">Contact our solutions team</h1>
            <div class="form-block">
              <form class="row g-4">
                <div class="col-xl-6 ">
                  <label for="fName" class="form-label">*First Name</label>
                  <input type="text" class="form-control input-field" id="fName">
                </div>
                <div class="col-xl-6">
                  <label for="sName" class="form-label">*Second Name</label>
                  <input type="text" class="form-control input-field" id="sName">
                </div>
                <div class="col-xl-6">
                  <label for="email" class="form-label">*Email</label>
                  <input type="email" class="form-control input-field" id="email">
                </div>
                <div class="col-xl-6">
                  <label for="pNbr" class="form-label">*Phone Number</label>
                  <input type="text" class="form-control input-field" id="pNbr">
                </div>
                <div class="col-xl-6">
                  <label for="jobTitle" class="form-label">*Job Title</label>
                  <input type="text" class="form-control input-field" id="jobTitle">
                </div>
                <div class="col-xl-6">
                  <label for="pNbr" class="form-label">*Select Your Role</label>
                  <select id="inputState" class="form-select selector-field">
                    <option selected>Select a job role..</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-xl-6">
                  <label for="comSize" class="form-label">*Company Size</label>
                  <select id="inputState" class="form-select selector-field">
                    <option selected>Select Company Size..</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-xl-6">
                  <label for="jobTitle" class="form-label">*Job Title</label>
                  <input type="text" class="form-control input-field" id="jobTitle">
                </div>
                <div class="col-xl-12">
                  <label for="msg" class="form-label">*Request/Comments</label>
                  <textarea class="form-control" id="msg"></textarea>
                </div>
                <div class="resume">
                  <label class="resume-title">We handle your data according to our <a class="data-privacy-link" href="">Privacy policy.</a></label>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="capture">
    
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="button button--align-left button--submit form-submit-btn form-submit-btn--align-left">Send Request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__details">
            <h1 class="title">Let's talk about how we can help your business.</h1>
            <div class="description">
              <p>Contact us to learn more about</p>
              <ul class="des-list">
                <li class="list-line">-Plans & Pricing</li>
                <li class="list-line">-Product Features & Benefits</li>
                <li class="list-line">-Training & Support Services</li>
                <li class="list-line">-Software Integrations</li>
                <li class="list-line">-Add-on features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  </template>
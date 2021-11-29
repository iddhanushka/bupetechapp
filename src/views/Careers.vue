<template>
 <div class="apply-developer">
      <div class="row">
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__form">
            <h1 class="title">Apply for Senior Backend Developer</h1>
            <div class="form-block">
              <form class="row g-4">
                <div class="col-xl-6 ">
                  <label for="fName" class="form-label"><span class="asterisk">*</span>First Name</label>
                  <input type="text" class="form-control input-field" id="fName">
                </div>
                <div class="col-xl-6">
                  <label for="sName" class="form-label"><span class="asterisk">*</span>Second Name</label>
                  <input type="text" class="form-control input-field" id="sName">
                </div>
                <div class="col-xl-6">
                  <label for="email" class="form-label"><span class="asterisk">*</span>Email</label>
                  <input type="email" class="form-control input-field" id="email">
                </div>
                <div class="col-xl-6">
                  <label for="pNbr" class="form-label"><span class="asterisk">*</span>Phone Number</label>
                  <input type="text" class="form-control input-field" id="pNbr">
                </div>
                <div class="col-xl-12">
                  <label for="msg" class="form-label"><span class="asterisk">*</span>Tell us more about you</label>
                  <textarea class="form-control" id="msg"></textarea>
                </div>
                <div class="resume">
                  <label class="resume-title">Resume</label>
                  <div class="row">
                    <div class="col-xl-5">
                      <label class="upload-btn-title">Please upload a resume</label>
                      <div class="input-group">
                        <input type="file" class="form-control upload-input" id="inputGroupFile02">
                        <label class="input-group-text upload-cv-btn" for="inputGroupFile02">Upload CV</label>
                      </div>
                      <span class="file-format-text">.PDF, .DOC, .DOCX Max 5MB</span>
                    </div>
                    <div class="col-xl-7">
                      <div class="capture">
    
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="button button--submit form-submit-btn">Apply</button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div class="col-xl-6 col-same-height">
          <div class="apply-developer__details">
            <h1 class="title">Details about this position</h1>
            <div class="description">
              <p>Location: Singapore</p>
              <p>Description: Development & Maintenace of PHP/MySQL based backend system.</p>
              <p>Experience: Minimum 3 years with PHP/MySQL in a similar role.</p>
              <p>Qualifications: A degree in Computer Science.</p>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>
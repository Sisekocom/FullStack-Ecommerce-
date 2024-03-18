<template>
    <NavbaAbout />
    <div class="container py-5">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="contact-form">
            <h1 class="text-center mb-4">Contact Us</h1>
            <p class="text-center">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            <form action="https://formspree.io/f/xaygrooz" method="POST">
              <div class="form-group row">
                <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="firstName" name="first_name" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="lastName" name="surname" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="email" name="email" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="message" class="col-sm-2 col-form-label">Message</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbaAbout from '../components/NavbaAbout'
  
  export default {
    components: {
      NavbaAbout
    },
  };
  </script>
  
  <style scoped>
    .contact-form {
      background-color: #f9f9f9;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.15);
      opacity: 75%;
    }
    .contact-form h1 {
      font-size: 30px;
      color: #333;
    }
    .contact-form p {
      font-size: 16px;
      color: #666;
      margin-bottom: 30px;
    }
    label{
       color: black;
    }
  </style>
  
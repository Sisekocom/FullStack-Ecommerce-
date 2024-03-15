<template>
    <NavbaAbout />
    <div>
      <nav class="navbar fixed-top">
        <!-- Navbar content -->
      </nav>
      <main id="oi">
        <section class="mb-5">
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
          </p>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form action="https://formspree.io/f/mwkdzevr" method="POST" class="container" id="form">
                <div class="mb-3">
                  <label for="InputFirstName" class="form-label">First Name</label>
                  <input type="text" name="first_name" class="form-control" id="InputFirstName" required>
                </div>
                <div class="mb-3">
                  <label for="InputLastName" class="form-label">Last Name</label>
                  <input type="text" name="surname" class="form-control" id="InputLastName" required>
                </div>
                <div class="mb-3">
                  <label for="InputEmail" class="form-label oo">Email address</label>
                  <input type="email" name="email" class="form-control" id="InputEmail" required>
                  <div id="emailHelp" class="form-text">Comments / Questions</div>
                </div>
                <div class="">
                  <!-- <label for="InputMessage" class="form-label" id="comments">Comments / Questions</label> -->
                  <textarea name="message" class="form-control" id="InputMessage" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import NavbaAbout from '../components/NavbaAbout'
  
  export default {
    components: {
      NavbaAbout
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        // You can use external libraries like axios for form submission
        // or send an HTTP request to your server endpoint
        // Example: axios.post('your-api-endpoint', formData)
      },
    },
  };
  </script>
  
  <style scoped>
  h2, p {
    color: #fff;
    text-align: center;
  }
  
  h2 {
    font-size: 36px;
    margin-bottom: 30px;
  }
  
  p {
    font-size: 22px;
  }
  
  form {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .oo {
    font-weight: bold;
    margin: 2%;
  }
  
  label {
    font-weight: bold;
    margin: 1%;
  }
  
  input,
  textarea {
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-bottom: 2px solid #fff;
    border-radius: 0;
    color: #fff;
    font-family: 'Rubik Bubbles', sans-serif;
    font-size: 16px;
  }
  
  #InputEmail {
    margin-right: 4.2%;
  }
  
  .btn {
    width: 100%;
    margin-left: 0;
    background-color: #ff4f00;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  #InputMessage{
    margin-right: -9%;
   
  }
  
  
  .btn:hover {
    background-color: #e63900;
  }
  
  .form-text {
    color: #fff;
  }
  
  @media (max-width: 576px) {
    form {
      margin: 0 15px;
    }
  }
  #emailHelp{
    margin-right: -8%;
    
  }
  h2{
    margin-right: -5%;
  }
  </style>
  
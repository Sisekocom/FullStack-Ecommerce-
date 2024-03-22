<template>
  <NavbaAbout />
  <div class="container-fluid py-5 contact-container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="contact-form">
          <h1 class="text-center mb-4">Contact Us</h1>
          <p class="text-center">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
          <form action="https://formspree.io/f/xaygrooz" method="POST">
            <div class="form-group">
              <input type="text" class="form-control" id="firstName" name="first_name" placeholder="First Name" required>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="lastName" name="surname" placeholder="Last Name" required>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <textarea class="form-control" id="message" name="message" rows="4" placeholder="Message" required></textarea>
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-techy">Send Message</button>
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
/* Base styles */
.contact-container {
  background-image: url('');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.contact-form {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.contact-form h1,
.contact-form p {
  color: #007bff;
}
.form-control {
  background: none;
  border: 2px solid #007bff;
  border-radius: 10px;
  color: #040404;
  padding: 10px 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.form-control::placeholder {
  color: #007bff;
}

.form-control:focus {
  border-color: #0056b3;
  box-shadow: none;
}
.btn-techy {
  background-image: linear-gradient(to right, #0062E6, #33AEFF);
  border: none;
  color: white;
  padding: 10px 30px;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-techy:hover {
  transform: scale(1.05);
}

.text-center {
  color: #007bff;
}
</style>
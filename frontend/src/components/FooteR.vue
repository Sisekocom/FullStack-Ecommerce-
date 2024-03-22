<template>
  <footer class=" footer bg-primary text-white text-center py-3">
    <div class="container-fluid">
      <div class="footer-content">
        <div class="footer-column">
          <h6>
            <i class="fas fa-store"></i> Our Store
          </h6>
          <p>Address: 88 Long Street Drive, Route 21 Corporate Park, CBD, 8001</p>
        </div>
        <div class="footer-column">
          <h6>
            <i class="fas fa-compass"></i> EXPLORE
          </h6>
          <p>
            Laptops, Desktops, Monitors, Printers, Ink & Toner, Accessories, Drives & Storage, Parts & Components, Networking, Software
          </p>
        </div>
        <div class="footer-column">
          <h6>
            <i class="fas fa-hands-helping"></i> SUPPORT
          </h6>
          <p>
            Contact us, Payment options, When will I get my order? How exchange & returns work? First Shop Partner Network, Terms of Service, Privacy Policy, Refund policy
          </p>
        </div>
        <div class="footer-column">
          <h6>
            <i class="fas fa-headset"></i> WE ARE HERE TO HELP!
          </h6>
          <p>
            We’re available by phone, email, and chat <br>
            Monday - Friday: 08h00–17h00 <br>
            Email us: enquiries@DataCoreInnovations.co.za <br>
            Call us: 021 400 0800
          </p>
        </div>
      </div>
      <div class="row">
        
        <div class="col-md-6">
          <ul class="social-links">
            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>&copy; 2024 DataCore Innovations. All rights reserved.</p>
        </div>
      </div>
    </div>
     
    
  </footer>
</template>

<script>

</script>

<style scoped>


.social-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.social-links li {
  display: inline-block;
  margin-right: 10px;
}

.social-links li a {
  color: #fff;
  font-size: 20px;
}

.social-links li a:hover {
  color: #ffd700;
}
.footer {
  background: linear-gradient(145deg, #0a0a0a, #323232);
  color: rgba(255, 255, 255, 0.9) !important;
  padding: 2% !important;
  font-size: large !important;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.footer-column {
  flex: 1;
  margin: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: inset 0 4px 5px rgba(255, 255, 255, 0.1), 0 4px 5px rgba(0, 0, 0, 0.5);
}

h6 {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}

p {
  font-size: 0.9rem !important;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.footer-column i {
  margin-right: 8px;
  color: #ffffff; 
}

.footer-column i:hover {
  color: #ffd700; 
  transition: all 0.40s ease;
  transform: scale(3.1);

}

@media (max-width: 768px) {
  .footer {
    padding: 4% !important;
    font-size: medium !important;
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-column {
    margin: 10px 0;
  }

  h6 {
    font-size: 1rem !important;
  }

  p {
    font-size: 0.9rem !important;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 5% !important;
    font-size: small !important;
  }

  h6, p {
    font-size: 0.8rem !important;
  }
}

</style>

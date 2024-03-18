<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img height="80px" width="80px" src="https://i.postimg.cc/d0bpKTM7/R-removebg-preview-1.png" alt="Logo">
      </router-link>
      <div class="collapse navbar-collapse " id="navbarNav">
        <div class="navbar-nav ">
          <router-link class="nav-item nav-link" to="/contact">CONTACT</router-link>
          <router-link class="nav-item nav-link" to="/checkout">CHECKOUT</router-link>
          <router-link class="nav-item nav-link" to="/admin">ADMIN</router-link>
          <router-link class="nav-item nav-link" to="/products">PRODUCTS</router-link>
          <router-link class="nav-item nav-link" to="/about">ABOUT</router-link>
          <router-link class="nav-item nav-link" to="/">HOME</router-link>
        
        </div>
      </div>
    </div>
  </nav>
  <!-- <h6 class="animate__animated animate__backInLeft " >RESTRICTED TO ADMINS ONLY </h6>
  <h5 class="animate__animated animate__backInRight">ADMINS ONLY</h5> -->
</template>

<script>
export default {
name: 'NavBar',
};
</script>

<style scoped>
h5{
  color: red;
}
h6{
  color: red;
}
.navbar {
background: linear-gradient(145deg, #212529, #414345);
box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
font-family: 'Orbitron', sans-serif;

}

.navbar-brand img {
transition: transform 0.5s ease;
}

.navbar-brand img:hover {
transform: scale(1.1);
}

.nav-item.nav-link {
font-size: 1.05rem;
font-weight: bold;
margin-right: 20px;
transition: color 0.4s ease-in-out, transform 0.3s ease;
color: rgba(255, 255, 255, 0.75) !important; /* Subtle color */
text-transform: uppercase;
letter-spacing: 1px;
}

.nav-item.nav-link:hover, .nav-item.nav-link:focus {
color: #ffffff !important; /* Brighter on hover */
background-color: transparent;
transform: scale(1.05);
}

@media (max-width: 768px) {
.navbar-nav {
  margin-top: 10px;
}

.nav-item.nav-link {
  margin-right: 0;
  margin-bottom: 8px;
}
}
</style>

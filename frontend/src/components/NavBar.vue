<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
       
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div class="navbar-nav ml-auto">
            <!-- <router-link class="nav-item nav-link KK" to="/Faq"> FAQ</router-link> -->
            <!-- <router-link class="nav-item nav-link KK" to="/checkout">Orders </router-link> -->
            <!-- <router-link class="nav-item nav-link KK" to="/registration">Register</router-link> -->
            <!-- <router-link class="nav-item nav-link KK" to="/about">ABOUT</router-link> -->
            <!-- <router-link class="nav-item nav-link KK" to="/"> HOME </router-link> -->
            <!-- <router-link class="nav-item nav-link yK v-show=products" to="/Login"> LOG</router-link> -->
           
       <router-link to="/" > <img height="180px" width="180px" src="https://i.postimg.cc/s2ynVcsy/3-D-metallic-Logo-mockup-on-Black-Wall-Surface.jpg" alt="Logo"></router-link>
      
        
        
 
          </div>
        </div>
      </div>
    </nav>
    
    <!-- <router-link class="dropdown-item" to="/registration">REGISTER</router-link> -->
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
  background: linear-gradient(145deg, #0a0a0a, #323232);
  box-shadow: 0 10px 15px rgba(99, 97, 97, 0.5);
  padding: 2%;

}

body{
  background-color: aliceblue !important;
}
a:hover, .navbar-brand:hover {
  background: linear-gradient(145deg, #0a0a0a, #323232);
  border-radius: 5px;
  color: white !important;
  transform: translateY(-2px);
  transition: all 0.40s ease;
  transform: scale(1.5);
}

img {
  margin-top: 1% !important;
  transform: translateY(-8px);
  transition: all 0.40s ease;
 transform: scale(1.3);
   margin-right: 590px;
   border-radius: 60%;
}

img:hover {
  transform: scale(1.1);
}

.KK {
  font-size: large !important;
  font-weight: bold !important;
  margin-left: 8% !important;
  color: rgba(255, 255, 255, 0.818) !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
}

@media (max-width: 768px) {
  img {
    margin-top: 0;
  }

  .navbar-nav {
    text-align: center;
  }

  .KK {
    margin-left: 0 !important;
  }
}

.yK {
  margin-right: 30%;
}

.dropdown-item {
  float: left;
  font-size: x-large;
  font-weight: 800;
  color: rgba(255, 255, 0, 0.658);
  margin: 1%;
  text-decoration: none;
  margin: 3%;
}

</style>

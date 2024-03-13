<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
       
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div class="navbar-nav ml-auto">
            <router-link class="nav-item nav-link KK" to="/contact"> CONTACT</router-link>
            <router-link class="nav-item nav-link KK" to="/checkout">CHECKOUT </router-link>
            <router-link class="nav-item nav-link KK" to="/admin">ADMIN </router-link>
            <router-link class="nav-item nav-link KK" to="/products">PRODUCTS</router-link>
            <router-link class="nav-item nav-link KK" to="/about">ABOUT</router-link>
            <router-link class="nav-item nav-link KK" to="/"> HOME </router-link>
    
        
            <div>    <router-link class="navbar-brand" to="/">
        <img href="/" height="80px" width="80px" src="https://i.postimg.cc/d0bpKTM7/R-removebg-preview-1.png" alt="">
      </router-link></div>
          </div>
        </div>
      </div>
    </nav>
   
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
.navbar {
  background: linear-gradient(145deg, #0a0a0a, #323232);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
}

a:hover, .navbar-brand:hover {
  background: linear-gradient(145deg, #0a0a0a, #323232);
  border-radius: 5px;
  color: white !important;
  /* transform: translateY(-2px); */
  /* transition: all 0.40s ease;
  transform: scale(1.5); */
}

img {
  margin-top: -3.5% !important;
  /* transform: translateY(-8px); */
  /* transition: all 0.40s ease; */
 /* transform: scale(1.3); */
   margin-right:100%;
   
}

img:hover {
  /* transform: scale(1.1); */
}

.KK {
  font-size: large !important;
  font-weight: bold !important;
  margin-left: 4% !important;
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

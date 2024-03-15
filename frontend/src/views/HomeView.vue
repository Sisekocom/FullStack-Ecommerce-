<template>
  <NavbarHome />
  <main class="" id="fo" >
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" -->
  />
    <div class="container text-center mt-5 animate__animated animate__swing animate__backInDown">
      <div class="text ">
        <span id="landingP" class="landingP rotate-3d bold p " data-char="#">WELCOME</span>
        <span id="landingP" class="landingP rotate-3d bold " data-char="#">TO</span>
        <span id="landingP" class="landingP rotate-3d bold " data-char="#"> DataCore</span>
        <span id="landingP" class="landingP rotate-3d bold " data-char="#">Innovations. </span>
         <router-link to="/products">
          <img height="170px" width="170px" id="B"
            src="https://www.bing.com/th/id/OGC.eec74a195dc966cafb9052d2ebe4fb7f?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f0f%2fe6%2f62%2f0fe66229dd01d34b5d89f681d97ded29.gif&ehk=X8vJHvsITL6Q5aGj%2boDhQRUENLQQhHGn9MDWtQuQp3Y%3d"
            loading="lazy" alt="takesmeproductpage">
        </router-link> 
      </div>
    </div>  
  </main>

</template>

<script>

import NavbarHome from '../components/NavbarHome'

export default {
  name: 'LandingPage',
  
  components :{
    NavbarHome
  }
};
</script>

<style scoped>

/* .text {
  color: aliceblue !important;
  padding: 80px !important;
  font-size: xx-large !important;
}

#B {
  border-radius: 50% !important;
  margin-left: 65px !important; 
} */

/* #landingP {
  font-family: "Honk", system-ui !important;  
  font-weight: 400 !important;
  font-style: normal !important;
  background-color: rgb(23, 70, 29) !important;
  font-weight: bold !important;
  font-size: 8.1rem !important; 
  margin-bottom: 3% !important;
  border-radius: 10% !important;
  box-shadow: 0 0 50px rgba(2, 255, 65, 0.301) !important;
}

.rotate-3d {
  display: inline-block !important;
  transform-style: preserve-3d !important;
  transform: perspective(1000px) rotateY(20deg) !important;
  transition: transform 0.5s !important;
}

.rotate-3d:hover {
  transform: perspective(1000px) rotateY(360deg) !important;
} */


@media (max-width: 768px) {
  .text {
    padding: 40px !important; 
    font-size: x-large !important; 
  }

  #landingP {
    font-size: 4.5rem !important; 
  }

  #B {
    margin-left: 0 !important; 
    height: 120px; 
    width: 120px;
  }
}

@media (max-width: 480px) {
  .text {
    padding: 20px !important;
    font-size: large !important; 
  }

  #landingP {
    font-size: 2.5rem !important; 
  }

  #B {
    height: 100px; 
    width: 100px;
  }
}
</style>
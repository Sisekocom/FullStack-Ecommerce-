<template>
  <NavBar />
  <main class="container text-center mt-5">
    <div class="text animate__animated animate__zoomInRight animate__jackInTheBox"> 
      <span class="landingP bold">WELCOME</span>
      <span class="space"></span>
      <span class="landingP bold">TO</span>
      <span class="space"></span>
      <span class="landingP bold">DataCore</span>
      <span class="space"></span>
      <span class="landingP bold animate__animated animate__bounceInRight">Innovations.</span>
    </div>
    <FaqView />
  </main>
</template>

<script>
import NavBar from '../components/NavbaAbout'
import FaqView from '../views/FaqView'

export default {
  components: {
    NavBar,
    FaqView
  },
  name: 'LandingPage',
};
</script>

<style scoped>
.text {
  color: aliceblue;
  padding: 80px;
  font-size: x-large;
  perspective: 1000px; 
}

.landingP {
  font-family: "Orbitron", sans-serif;  
  font-weight: bold;
  font-size: 4.8rem;
  margin-bottom: 3%;
  border-radius: 10%;
  box-shadow: 0 0 50px rgba(255, 2, 2, 0.301);
  margin: 1%;
  display: inline-block;
  transform-style: preserve-3d;
  animation: float 300s infinite, colorChange 50s infinite alternate; 
}

@keyframes float {
  0%, 100% { transform: rotateY(0deg) translateZ(0); }
  50% { transform: rotateY(360deg) translateZ(50px); }
}

@keyframes colorChange {
  0%, 100% { color: rgb(43, 0, 255); }
  50% { color: rgb(255, 0, 0); }
}

@media (max-width: 768px) {
  .text {
    padding: 20px;
    overflow-x: hidden;
  }

  .landingP {
    font-size: 2rem;
  }
}

@keyframes float {
  0%, 100% { transform: rotateY(0deg) translateZ(0); }
  50% { transform: rotateY(360deg) translateZ(50px); }
}

@media (max-width: 768px) {
  .text {
    padding: 20px;
    overflow-x: hidden;
  }

  .landingP {
    font-size: 2rem;
  }
}


</style>
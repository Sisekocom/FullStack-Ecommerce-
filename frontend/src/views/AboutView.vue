<template>
  <NavBBar />
  <div class="container-fluid">
    <h1>Welcome to DataCore Innovations</h1>
    <p>{{ aboutView }}</p>
  </div>
</template>

<script>
import NavBBar from '../components/NavBBar.vue'

export default {
  components :{
    NavBBar
  },
  data() {
    return {
      aboutView: `At DataCore Innovations, we are driven by the belief in the transformative power of technology to enhance lives. Our commitment is to provide an extensive range of high-quality and competitively priced tech products. From cutting-edge laptops to immersive gaming devices, we strive to fulfill every tech need.

      What sets us apart is our dedication to sourcing any product not currently in our selection. We want to ensure that you have access to the best technology available. Join us in embracing the future and start your tech journey with DataCore Innovations today.`,
    };
  }
};
</script>

<style scoped>
.container-fluid {
  max-width: 800px;
  height: 300px;
  margin: 80px auto;
  padding: 60px;
  box-shadow: 0 0 30px rgb(222, 111, 111);
  background-color: #121212; 
  border-radius: 15px;
  color: #76ff03; 
  font-family: 'Roboto', sans-serif; 
  background: linear-gradient(145deg, #0f0f0f, #242424), ;
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px solid #76ff03; 
}

h1 {
  font-family: "Orbitron", sans-serif; 
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00e676;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  text-shadow: 0 0 8px #00e676;
}

@media (max-width: 768px) {
  .container-fluid {
    margin: 20px auto;
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>

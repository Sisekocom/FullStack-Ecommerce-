<template>
     <NavbaAbout />
    <link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
<div class="justify-content-center" v-if="product">
<img class="card-img-top animate__animated animate__bounceInUp" :src="product.prodUrl" alt="Product Image">
<h1 class="text-white">{{ product.prodName }}</h1>
<div class="card-text text-light bg-secondary subtle p-5 w-100 animate__animated animate__backInLeft">
  <p >Amount: R{{ product.prodAmount }}</p>
  <button class="btn btn-danger mx-5 w-50 text-black bg-white-subtle p-1 " @click="goBack">Back</button>
</div>
</div>
</template>

<script>

import NavbaAbout from '../components/NavbaAbout.vue';
export default {
name: 'ProductView',
computed: {
product() {
  return this.$store.state.product;
}

},
components: {
     
      NavbaAbout
    },
methods: {
goBack() {
  this.$router.go(-1); 
}
},
mounted() {
this.$store.dispatch('fetchProduct', this.$route.params);
}
}
</script>

<style scoped>
img {
max-width: 20%; 
height: auto;
border-radius: 50%;
display: block; 
margin: 1rem auto;
}

@media (max-width: 768px) {
.card-text {
padding: 2rem 1rem; 
}

h1 {
font-size: 1.5rem; 
}

.btn {
padding: 0.1rem;
width: auto;
font-size: 0.1rem; 
}
}

.justify-content-center {
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
}
</style>
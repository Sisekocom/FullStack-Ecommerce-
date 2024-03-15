<template>
    <div class="slider-container">
      <button v-if="currentIndex > 0" @click="prevProduct">&lt;</button>
      <transition-group name="slide" tag="div" class="slider">
        <div class="product" v-for="(product, index) in visibleProducts" :key="product.id">
          <img :src="product.image" :alt="product.name" class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">${{ product.price }}</p>
        </div>
      </transition-group>
      <button v-if="currentIndex < products.length - visibleCount" @click="nextProduct">&gt;</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: "Product 1", price: 100, image: "link-to-image-1.jpg" },
          { id: 2, name: "Product 2", price: 200, image: "link-to-image-2.jpg" },
          // Add more products as needed
        ],
        currentIndex: 0,
        visibleCount: 3, // Number of products to show at once
      };
    },
    computed: {
      visibleProducts() {
        return this.products.slice(this.currentIndex, this.currentIndex + this.visibleCount);
      },
    },
    methods: {
      nextProduct() {
        if (this.currentIndex < this.products.length - this.visibleCount) {
          this.currentIndex++;
        }
      },
      prevProduct() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
    transform: translateX(100%);
  }
  
  .product {
    min-width: 100px; /* Adjust based on your needs */
    margin: 0 15px; /* Space between products */
    text-align: center;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
  }
  
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
    font-size: 24px;
  }
  </style>
  
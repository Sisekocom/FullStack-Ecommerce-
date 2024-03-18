<template>
  <NavbaAbout />
  <div class="container" v-if="product">
    <div class="product-info">
      <div class="product-image">
        <img :src="product.prodUrl" alt="Product Image">
      </div>
      <div class="product-details">
        <h1 class="product-title">{{ product.prodName }}</h1>
        <p class="product-amount">Price: R{{ product.prodAmount }}</p>
        <p class="product-description">{{ product.description }}</p>
        <div class="button-group">
          <button class="btn btn-danger" @click="goBack">Back</button>
          <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbaAbout from '../components/NavbaAbout.vue';

export default {
  name: 'ProductView',
  components: { NavbaAbout },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); 
    },
    addToCart() {
      console.log('Product added to cart');
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
}


.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-details {
  max-width: 100%;
  padding: 1rem;
}

.product-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.product-amount {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background-color: #6a846bea;
  padding: 0.5rem;
  border-radius: 8px;
}

.product-description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.button-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.btn {
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-danger {
  background-color: #DC3545;
}

.btn-primary {
  background-color: #007BFF;
}

@media (min-width: 768px) {
  .product-info {
    flex-direction: row;
    align-items: flex-start;
  }

  .product-image img {
    max-width: 50%;
  }

  .product-details {
    max-width: 50%;
    text-align: left;
    padding: 0 1rem;
  }

  .button-group {
    flex-direction: row;
    justify-content: center;
  }

  .product-title {
    font-size: 2.5rem;
  }

  .product-amount {
    font-size: 1.5rem;
  }

  .product-description {
    font-size: 1.1rem;
  }

  .btn {
    padding: 1.2rem 2.5rem;
    font-size: 1.2rem;
  }
}
</style>

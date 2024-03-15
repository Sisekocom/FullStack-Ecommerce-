<template>
    <NavbaAbout />
  
    <div class="container">
      <div class="search-container ">
        <input v-model="searchInput" placeholder="Search Product" class="search-input bg-light" />
        <button @click="search" class="search-button border-0 bg-primary">Search</button>
      </div>
  
      <!-- <div v-if="isLoading" class="row">
        <p class="lead col">Loading...</p>
      </div> -->
  
      <div class="col justify-content-center" >
        <div class="row  d-grid d-md-flex  " v-if="filteredProducts">

          <Card v-for="product in filteredProducts" :key="product.prodID" class="" >
            <template #imgTop>
              <img class="card-img-top" :src="product.prodUrl" alt="Product Image" />
            </template>
    
            <template #cardHeader>
              <h4 class="card-title">{{ product.prodName }}</h4>
            </template>
    
            <template #cardBody>
              <p class="card-text text-light bg-gradient bg-white-subtle p-2"> Quantity: {{ product.prodQuantity }} </p>
              <p class="card-text text-light bg-gradient bg-white-subtle p-2"> Amount: R{{ product.prodAmount }} </p>
              <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                <button class="btn btn-primary mx-1 w-100 text-black">View Product</button>
              </router-link>
            </template>
          </Card>
        </div>
        <div v-else class="row">
          <p class="lead col">No products found.</p>
        </div>
      </div>
  
    </div>
   
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  import NavbaAbout from '../components/NavbaAbout.vue';
  
  export default {
    name: 'ProductsView',
    components: {
      Card,
      NavbaAbout,
    },
    data() {
      return {
        searchInput: '',
        isLoading: true,
      };
    },
    computed: {
      filteredProducts() {
        return this.$store.state.products
        
      },
    },
    methods: {
      search() {
        
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts')
    },
  };
  </script>
  
  <style scoped>
  .card-img-top {
    width: 150px;
    height: 150px;
  }
  
  #router {
    color: rgb(34, 0, 255) !important;
    font-weight: bold !important;
  }
  
  #Input {
    margin: 1%;
  }
  </style>
  
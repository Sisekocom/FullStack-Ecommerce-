<template>
  <NavbaAbout />
  <div class="container">
    <div class="search-container ml-auto">
      <input v-model="searchInput" placeholder="Search Product" class="search-input bg-light" />
      <button @click="search" class="search-button border-0 bg-primary">Search</button>
      <button @click="sortProducts" class="sort-button ml-2 border-0 bg-secondary">Sort</button>
    </div>
    <div class="product-container row" v-if="filteredProducts.length">
      <Card v-for="product in filteredProducts" :key="product.prodID" class="product-card col-md-6 col-lg-4">
        <template #imgTop>
          <img class="card-img-top" :src="product.prodUrl" alt="Product Image" />
        </template>
        <template #cardHeader>
          <h4 class="card-title">{{ product.prodName }}</h4>
        </template>
        <template #cardBody>
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <p class="card-text text-light bg-gradient bg-white-subtle p-2">
                Quantity: {{ product.prodQuantity }}
              </p>
              <p class="card-text text-light bg-gradient bg-white-subtle p-2">
                Amount: R{{ product.prodAmount }}
              </p>
            </div>
            <router-link :to="{ name: 'product', params: { id: product.prodID }}" class="mt-2">
              <button class="btn btn-primary mx-1 w-100 text-black">View Product</button>
            </router-link>
          </div>
        </template>
      </Card>
    </div>
    <div class="row" v-else>
      <p class="lead col">No products found.</p>
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
      sortAscending: true,
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.$store.state.products || [];
      if (this.searchInput) {
        filtered = filtered.filter((product) =>
          product.prodName.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      }
      if (!this.sortAscending) {
        return filtered.sort((a, b) => (a.prodName < b.prodName ? 1 : -1));
      }
      return filtered.sort((a, b) => (a.prodName > b.prodName ? 1 : -1));
    },
  },
  methods: {
    search() {
      // Implement search functionality
    },
    sortProducts() {
      this.sortAscending = !this.sortAscending;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
.card-img-top {
  width: 40%;
  height: auto;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  margin-bottom: 20px; 
  background-color: rgba(140, 135, 135, 0.771);
}

@media (min-width: 576px) {
  .product-card {
    flex: 0 0 48%;
  }
}

@media (min-width: 768px) {
  .product-card {
    flex: 0 0 32%;
  }
}

@media (min-width: 992px) {
  .product-card {
    flex: 0 0 24%;
  }
}

@media (min-width: 1200px) {
  .product-card {
    flex: 0 0 20%;
  }
}

#router {
  color: rgb(34, 0, 255) !important;
  font-weight: bold !important;
}

#Input {
  margin: 1%;
}
</style>

<template>
    <div>
        <NavbaAbout />

        <div class="container">
            <div class="search-container ml-auto">
                <input v-model="searchInput" placeholder="Search Product" class="search-input bg-light">
                <button @click="search" class="search-button border-0 bg-primary">Search</button>
            </div>

            <div class="row d-flex justify-content-center" v-if="products">
                <Card v-for="product in products" :key="product.prodID" class="col-4">
                    <template #imgTop>
                        <img class="card-img-top" :src="product.prodUrl" alt="Product Image">
                    </template>

                    <template #cardHeader>
                        <h4 class="card-title">{{ product.prodName }}</h4>
                    </template>

                    <template #cardBody>
                        <p class="card-text text-light bg-gradient bg-white-subtle p-2">
                            Quantity: {{ product.quantity }}
                        </p>
                        <p class="card-text text-light bg-gradient bg-white-subtle p-2">
                            Amount: R{{ product.amount }}
                        </p>
                        <router-link :to="{name: 'product', params: {id:product.prodID }}">
                            <button class="btn btn-primary mx-1 w-100 text-black">View Product</button>
                        </router-link>
                    </template>
                </Card>
            </div>

            <div class="row" v-else>
                <p class="lead col">Loading ... </p>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import NavbaAbout from '../components/NavbaAbout.vue';

export default {
    components: {
        NavbaAbout,
        Card
    },
    data() {
        return {
            searchInput: ''
        };
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    methods: {
        search() {
            // Define your search logic here
            console.log('Searching for:', this.searchInput);
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    }
};
</script>

<style scoped>
.card-img-top {
    width: 130px;
    height: 130px;
}

.search-container {
    margin-bottom: 20px;
}

.search-input {
    margin-right: 10px;
}

#router {
    color: rgb(34, 0, 255) !important;
    font-weight: bold !important;
}

#Input {
    margin: 1%;
}
</style>

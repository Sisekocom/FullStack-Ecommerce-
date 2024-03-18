<template>
    <div>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</p>
      <p><strong>Email:</strong> {{ user.emailAdd }}</p>
      <p><strong>Age:</strong> {{ user.userAge }}</p>
      <p><strong>Role:</strong> {{ user.userRole }}</p>
      
      <h2>Products</h2>
      <div v-for="product in products" :key="product.prodID">
        <h3>{{ product.prodName }}</h3>
        <p>Amount: {{ product.prodAmount }}</p>
        <img :src="product.prodUrl" :alt="product.prodName" style="width: 100px; height: auto;">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    props: ['user', 'products'],
  }
  </script>
  
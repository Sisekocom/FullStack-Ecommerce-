<template>
  <NavbarHome />
  <div class="container mt-5">
    <div class="row">
      <h2 class="display-4 text-center mb-4">Users</h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-techy" data-bs-toggle="modal" data-bs-target="">Add User</button>
      </div>
    </div>
    <div class="row">
      <table class="table table-bordered table-hover table-striped mt-4">
        <thead class="table-primary">
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Age</th>
            <th>Gender</th>
            <th>Email Address</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td class="d-flex justify-content-between">
              <button class="btn btn-success btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <h2 class="display-4 text-center mt-5 mb-4">Products </h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-techy">Add Product</button>
      </div>
    </div>
    <div class="row">
      <table class="table table-bordered table-hover table-striped mt-4">
        <thead class="table-primary">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.prodQuantity }}</td>
            <td>R {{ product.prodAmount }}</td>
            <td class="d-flex justify-content-between">
              <button class="btn btn-success btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome'
export default {
  components: {
    NavbarHome
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    products() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #f8f9fa; 
  padding: 20px;
  border-radius: 5px; 
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); 
  margin-top: 20px; 
}

.btn-techy {
  background-color: #0056b3; 
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: 500; 
  letter-spacing: 0.5px; 
  transition: background-color 0.3s, box-shadow 0.3s;
}

.btn-techy:hover {
  background-color: #003d82; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
}

.table {
  border-collapse: separate;
  border-spacing: 0 15px; 
}

.table th {
  background-color: #007bff; 
  color: #ffffff;
  padding: 15px;
  border-radius: 5px 5px 0 0; 
}

.table td {
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #dee2e6; 
  color: #333;
}

.table-primary thead th {
  background-color: #0069d9; 
}

.table-primary tbody tr:hover {
  background-color: #e9ecef; 
}

.display-4 {
  font-size: 2.5rem; 
  color: #333; 
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: center;
}

</style>


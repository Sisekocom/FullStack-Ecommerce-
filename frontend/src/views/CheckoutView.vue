<template>
      <NavbaAbout />
   
      <main id="Hoo">
        <div class="container">
          <table class="table table-bordered table-striped">
            <h3>Orders</h3>
            <thead class="table-dark">
              <tr>
                <th>OrderID</th>
                <th>User</th>
                <th>Product</th>
                <th>DATE</th>
                <th>Actions</th> 
              </tr>
            </thead>
            <tbody class="displayItems">
              <tr v-for="order in orders" :key="order.orderID">
                <td>{{ order.orderID }}</td>
                <td>{{ order.userID }}</td>
                <td>{{ order.prodID }}</td>
                <td>{{ order.orderDate }}</td>
                <td>
                  <button class="btn btn-primary" @click="editOrder(order)">Edit</button>
                  <button class="btn btn-danger" @click="deleteOrder(order.orderID)">Delete</button>
                </td>
              </tr>
            </tbody>
  
            <tfoot>
              <tr>
                <td colspan="4" class="text-end">
                  <!-- Button to trigger modal -->
                  <button type="button" class="btn btn-primary" @click="showModal = true">Purchase</button>
                  <!-- Button to clear -->
                  <button id="clear" class="btn btn-danger">Clear</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
      <!-- Modal structure -->
      <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Thank You for Your Purchase</h5>
              <button type="button" class="close" @click="showModal = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Your purchase has been successfully completed.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
            </div>
          </div>
        </div>
      </div>
    
  </template>
  
  <script>
  import NavbaAbout from '../components/NavbaAbout'
export default {
  
  name: 'OrdersComponent',
  components: {
    NavbaAbout,
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  mounted() {
    this.$store.dispatch('fetchAllOrders');
  },
  
};

  </script>
  
  
  
  <style scoped>
h3{
  color: rgb(85, 8, 8);
}
.table{
  background-color: #f2f2f278;
  font-weight: bold;
}
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 8px;
    border: 1px solid #ddd;
    color: black;
  }
  
  .table th {
    text-align: left;
    background-color: #f2f2f2;
  }
  
  .table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .table-hover tbody tr:hover {
    background-color: #ddd;
  }
  
  .btn-primary,
  .btn-danger {
    padding: 8px 16px;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border: none;
  }
  </style>
  
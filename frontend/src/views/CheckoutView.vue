<template>
  <NavbaAbout />

  <main id="Hoo">
    <div class="container">
      <h3 class="text-center mb-4">Orders</h3>
      <div class="table-responsive">
        <table class="table">
          <thead class="table-head">
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
                <button class="btn btn-edit" @click="editOrder(order)">Update</button>
                <button class="btn btn-delete" @click="deleteOrder(order.orderID)">Delete</button>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="5" class="text-end">
                <button type="button" class="btn btn-purchase" @click="showModal = true">Purchase</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
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
  computed: {
orders() {
  return this.$store.state.orders;
}
}
},
mounted() {
  this.$store.dispatch('fetchAllOrders');
},

};

</script>
<style scoped>
  .container {
    max-width: 100%;
    padding: 0 15px;
    margin: auto;
    overflow-x: auto;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .table th,
  .table td {
    padding: 10px;
    text-align: left; 
    border-bottom: 1px solid #ddd;
  }

  .table th {
    background-color: #f2f2f2; 
    font-weight: bold; 
  }

  @media only screen and (max-width: 600px) {
    .container {
      padding: 0; 
    }
    .table th,
    .table td {
      padding: 8px; 
    }
  }
  @media only screen and (max-width: 400px) {
    .table th,
    .table td {
      font-size: 12px; 
    }
  }
  h3 {
    color: #555;
    text-transform: uppercase;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .container {
    max-width: 960px;
    margin: auto;
    padding: 20px;
    background: #cfcfcff9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    color: #555;
  }
  
  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .table-head th {
    background-color: #007bff;
    color: #ffffff;
    font-weight: normal;
    text-transform: uppercase;
  }
  
  .table td, .table th {
    padding: 12px 15px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .displayItems tr:nth-last-child(2) td {
    border-bottom: none;
  }
  
  .btn {
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 20px;
    transition: background-color 0.3s ease;
  }
  
  .btn-edit {
    background-color: #4CAF50; 
    color: white;
  }
  
  .btn-delete {
    background-color: #f44336; 
    color: white;
  }
  
  .btn-purchase, .btn-clear {
    border: none;
    color: white;
  }
  
  .btn-purchase {
    background: linear-gradient(45deg, #007bff, #6610f2);
  }
  
  .btn-clear {
    background: linear-gradient(45deg, #dc3545, #ffc107);
  }
  
  .modal-content {
    border-radius: 10px;
  }
  
  .close {
    cursor: pointer;
  }
  
  .modal-header, .modal-footer {
    border-bottom: none;
    border-top: none;
  }
  
  .modal-title {
    font-size: 20px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
</style>
  
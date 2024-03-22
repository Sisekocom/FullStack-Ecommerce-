User
use a difference bootstrap table , make it responsive for all divices , <template>
  <NavbaAbout />
  <div class="container mt-5">
    <div class="row">
      <h2 class="display-4 text-center mb-4">Users</h2>
    </div>
    <div class="row">
      <div class="col">
       <router-link to="/registration"> <button  class="btn btn-primary btn-techy" data-bs-toggle="modal" data-bs-target="">Add User</button></router-link>
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
              <button class="btn btn-success btn-sm" @click="editUser(user)">Update</button>
              <button class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <h2 class="display-4 text-center mt-5 mb-4">Products</h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-techy" @click="showAddProductModal = true">Add Product</button>
      </div>
    </div>
    <div class="row">
      <table class="table table-bordered table-hover table-striped mt-4 f">
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
              <button class="btn btn-success btn-sm">Update</button>
              <button class="btn btn-danger btn-sm" @click="delette(product.prodID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal" tabindex="-1" role="dialog" v-if="showAddProductModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Product</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showAddProductModal = false">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="form-group">
                <label for="prodName">Product Name</label>
                <input type="text" class="form-control" id="prodName" v-model="newProduct.prodName" required>
              </div>
              <div class="form-group">
                <label for="prodQuantity">Product Quantity</label>
                <input type="number" class="form-control" id="prodQuantity" v-model="newProduct.prodQuantity" required>
              </div>
              <div class="form-group">
                <label for="prodAmount">Product Amount</label>
                <input type="number" class="form-control" id="prodAmount" v-model="newProduct.prodAmount" required>
              </div>
              <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbaAbout from '../components/NavbaAbout.vue'

export default {
  components: {
    NavbaAbout
  },
  data() {
    return {
      showAddProductModal: false,
      newProduct: {
        prodName: '',
        prodQuantity: 0,
        prodAmount: 0
      }
    };
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    addProduct() {
      this.$store.dispatch('addProduct', this.newProduct)
        .then(() => {
          this.newProduct = {
            prodName: '',
            prodQuantity: 0,
            prodAmount: 0
          };
          this.showAddProductModal = false;
        })
        .catch(error => {
          console.error('Error adding product:', error);
        });
    },
    delette(id){
      console.log(id);
      return this.$store.dispatch("delete", id)
    },
    editUser(userID){
      this.$store.dispatch(" updateUser", userID)
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  }
}
</script>


<style scoped>
@media screen and (max-width: 600px) {
  .table-responsive {
    overflow-x: auto;
  }

  .table thead {
    display: none; /* Hide the table headers on small screens */
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15); /* Add some shadow to each "card" */
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
    text-align: left; /* Adjust text alignment */
    border: none; /* Remove borders for a cleaner look */
    padding: 10px 20px; /* Adjust padding for readability */
    white-space: normal; /* Ensure text wraps */
    word-wrap: break-word; /* Ensure long words do not overflow */
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 20px;
    font-weight: bold;
    text-transform: uppercase; /* Make labels stand out */
  }

  /* Adjust button sizes for easier interaction on touch devices */
  .table .btn-sm {
    padding: 5px 10px;
    font-size: 0.875rem;
  }
}

:root {
  --primary-color: #007bff; /* Primary color for your theme */
  --secondary-color: #6c757d; /* Secondary color */
  --hover-color: #0056b3; /* Hover state color */
  --border-color: #dee2e6; /* Border color */
  --background-light: #f8f9fa; /* Light background */
  --text-color: #212529; /* Primary text color */
}

.container {
  padding: 1rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table thead {
  background-color: var(--primary-color);
  color: white;
}

.table thead th {
  padding: 12px 10px;
  text-align: left;
  color: black;
}

.table tbody tr:nth-child(odd) {
  background-color: var(--background-light);
}

.table tbody tr:hover {
  background-color: var(--hover-color);
  color: #ffffff;
}

.table td,
.table th {
  padding: 8px 10px;
  border: 1px solid var(--border-color);
}

.table .btn {
  margin-right: 5px;
  border-radius: 5px; /* Rounded buttons for a modern look */
  transition: background-color 0.3s ease;
}

.table .btn-success {
  background-color: #28a745;
}

.table .btn-success:hover {
  background-color: #218838;
}

.table .btn-danger {
  background-color: #dc3545;
}

.table .btn-danger:hover {
  background-color: #c82333;
}

.btn-primary {
  background-color: var(--primary-color);
  border: none;
}

.btn-primary:hover {
  background-color: var(--hover-color);
}

/* Responsive design */
@media (max-width: 768px) {
  .table-responsive {
    border: 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: bold;
    text-align: left;
  }
}
.table {
  background: linear-gradient(145deg, #d5daeb, #a877e38a);
  color: #fff; /* Ensure text color contrasts well against the background */
  border-radius: 8px; /* Optional: Adds rounded corners for a softer look */
  overflow: hidden; /* Keeps the child elements within the table's rounded corners */
  color: black
}

.table thead {
  background: rgba(255, 255, 255, 0.2); /* Slightly lighter shade for the header */
}

.table th, .table td {
  border-color: rgba(255, 255, 255, 0.1); /* Subtle borders for differentiation */
}

/* Hover Effect for Rows - Optional */
.table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media screen and (max-width: 600px) {
  .table td::before {
    color: #fff; /* Ensure the pseudo-elements are also visible */
  }
}

</style>


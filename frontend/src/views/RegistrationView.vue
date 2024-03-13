<template>
  <NavbarAbout />
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card registration-card">
          <div class="card-header">Registration Form</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" v-model="payload.firstname" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" v-model="payload.lastname" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="age">gender</label>
                <select id="gender" v-model="payload.gender" class="form-control" required>
                  <option disabled value="">Please select one</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option>Yho haike voetsek <br>
                    iyaxoxisa into yakho ..</option>
                </select>
              </div>
              <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" v-model="payload.age" class="form-control" required min="0">
              </div>
              <div class="form-group">
                <label for="userrole">User Role</label>
                <select id="userrole" v-model="payload.userrole" class="form-control" required>
                  <option disabled value="">Please select one</option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="payload.email" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="userpass">Password</label>
                <input type="password" id="userpass" v-model="payload.userpass" class="form-control" required>
              </div>
              <button @click.prevent="register" type="submit" class="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAbout from '../components/NavbaAbout.vue';

export default {
  data() {
    return {
      payload: {
        firstname: '',
        lastname: '',
        gender: '',
        age: null,
        userrole: '',
        email: '',
        userpass: ''
      }
    }
  },
  components: {
    NavbarAbout
  },

  methods: {
    register() {
      this.$store.dispatch("register", this.payload)
    }
  }
};
</script>

<style scoped>
.container.mt-5 {
  max-width: 600px;
  margin-top: 0%;

}


.card {
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: black;
}

.card-header {
  font-size: 24px;
  background: #2c3e50;
  color: #fff;
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 20px;
}


.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}

.form-control {
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #190cda;
  padding: 12px;
}

.form-control:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
}


.btn-primary {
  background-color: #3498db;
  border-color: #3498db;
  padding: 12px 30px;
  font-size: 18px;
  border-radius: 5px;
  color: #fff;
}

.btn-primary:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}


@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .form-control {
    padding: 10px;
  }

  .btn-primary {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.card {

  border-radius: 10%;
}
</style>

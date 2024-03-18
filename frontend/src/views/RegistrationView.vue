<template>
  <NavBar />
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card registration-card">
          <div class="card-header">
            <h2>Registration Form</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="registrations">


              <div class="form-group">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" v-model="payload.firstName" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" v-model="payload.lastName" class="form-control" required>
              </div>
              <div class="form-group o">
                <label for="gender">Gender</label>
                <select id="gender" v-model="payload.gender" class="form-control" required>
                  <option disabled value="">Please select one</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-group p">
                <label for="age">Age</label>
                <input type="number" id="age" v-model="payload.userAge" class="form-control" required min="0">
              </div>
              <div class="form-group l">
                <label for="userrole ">User Role</label>
                <select id="userrole" v-model="payload.userRole" class="form-control" required>
                  <option disabled value="">Please select one</option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>
              <div class="form-group m">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="payload.emailAdd" class="form-control" required>
              </div>
              <div class="form-group h">
                <label for="userpass">Password</label>
                <input type="password" id="userpass" v-model="payload.userPass" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary btn-techy">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';


export default {
  data() {
    return {
      payload: {
        // userID: '',
        firstName: '',
        lastName: '',
        gender: '',
        userAge: null,
        userRole: '',
        emailAdd: '',
        userPass: ''
      }
    };
  },
  components: {
    NavBar
  },
  methods: {
    registrations() {
      return this.$store.dispatch('register', this.payload)
    }
  },
  

};
</script>





<style scoped>
.container.mt-5 {
  max-width: 600px;
  margin-left: 33%;
}
.h{
  margin-left: 2%;
}
.l{
  margin-left: -5%;
}
.p{
  margin-bottom: 20px;
  margin-left: 8%;
}
.o{
  margin-bottom: 20px;
  margin-left: -2%;
}

.card.registration-card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(145deg, #282a36, #44475a);
  color: #fff;
}

.card-header {
  padding: 20px;
  border-bottom: 1px solid #6c71c4;
}
.m{
  margin-left: 8%;
}
.card-header h2 {
  margin: 0;
  font-size: 24px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: 600;
}

.form-control {
  background-color: #6272a4;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 12px;
}

.form-control:focus {
  box-shadow: 0 0 0 2px #6c71c4;
}

.btn-primary.btn-techy {
  background-color: #ff79c6;
  border: none;
  border-radius: 10px;
  padding: 12px 30px;
  font-size: 18px;
  color: #fff;
  margin-left: 15%;
  
}

.btn-primary.btn-techy:hover {
  background-color: #bd93f9;
}
label{
  margin: 3%;
}
</style>

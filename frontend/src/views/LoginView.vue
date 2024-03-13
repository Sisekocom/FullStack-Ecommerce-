<template>
  <NavBar />
  <div>
    <div class="container mt-2">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card login-card">
            <div class="card-header text-center">Login to Your Account</div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="username">Email Address</label>
                  <input type="text" id="username" v-model="info.emailAdd" class="form-control form-control-lg"
                    placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" v-model="info.UserPass" class="form-control form-control-lg"
                    placeholder="Enter your password" required>
                </div>
                <button @click.prevent="login()" type="submit" class="btn btn-primary btn-block btn-lg">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'LoginForm',
  components: {
    NavBar
  },
  data() {
    return {
      info: {
        emailAdd: null,
        UserPass: null,
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.info)
    },
  },
};
</script>

<style scoped>
.login-card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 7%;
}

.login-card .card-header {
  font-size: 1.9rem;
  font-weight: 300;
  background: #007bff;
  color: white;
  border-bottom: none;
  border-radius: 10px 10px 0 0;

}

.form-control,
.btn-primary {
  border-radius: 20px;
}

.form-control {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  font-size: 1.9rem;
  background: #007bff;
  border: none;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background: #0056b3;
}

.form-control-lg {
  font-size: 1rem;
  padding: .75rem 1.25rem;
}

.btn-block {
  width: 100%;
}

.card-body {
  padding: 4rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

#password {
  margin-left: 4%;
}

label {
  margin-left: -3%;
}

</style>

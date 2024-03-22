<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-link KK ll" to="/login">
            <i class="fas fa-sign-in-alt icon-green"></i> LOGOUT
          </router-link>
          <router-link class="nav-item nav-link KK" to="/profile">
            <i class="fas fa-home icon-green"></i> Profile
          </router-link>
          <router-link class="nav-item nav-link KK" to="/contact">
            <i class="fas fa-envelope icon-green"></i> CONTACT
          </router-link>
          <router-link class="nav-item nav-link KK" to="/checkout">
            <i class="fas fa-shopping-cart icon-green"></i> CHECKOUT
          </router-link>
          <router-link   class="nav-item nav-link KK animate__animated " to="/admin">
            <i class="fas fa-user icon-green"></i> ADMIN
          </router-link>
          <router-link class="nav-item nav-link KK" to="/products">
            <i class="fas fa-box icon-green"></i> PRODUCTS
          </router-link>
          <router-link class="nav-item nav-link KK" to="/about">
            <i class="fas fa-info-circle icon-green"></i> ABOUT
          </router-link>
           <router-link class="nav-item nav-link KK" to="/">
            <i class="fas fa-home icon-green"></i> HOME
          </router-link>
          <div>
            <router-link class="navbar-brand" to="/">
              <img class="animate__animated animate__flash" href="/" height="90px" width="90px"
                src="https://www.zilliondesigns.com/blog/wp-content/uploads/loading-the-truck.gif" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  computed: {
    isAdmin() {
      return this.user?.result?.userRole === "Admin";
    }
  }
};
</script>
  <style scoped>
.navbar {
  background: linear-gradient(145deg, #0a0a0a, #323232);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  padding: 2%;
}
a:hover, .navbar-brand:hover {
  background: linear-gradient(145deg, #0a0a0a, #323232);
  border-radius: 5px;
  color: white !important;
}
img {
  margin-top: -1.5% !important;
   margin-right:100%;
   border-radius: 50%; 
}
.KK {
  font-size: small !important;
  font-weight: bold !important;
  margin-left: 4% !important;
  color: rgba(255, 255, 255, 0.818) !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

}
@media (max-width: 768px) {
  img {
    margin-top: 0;
  }
  .navbar-nav {
    text-align: center;
  }
}
.icon-green {
  color: green;
}
.dropdown-item {
  float: left;
  font-size: x-large;
  font-weight: 800;
  color: rgba(255, 255, 0, 0.658);
  margin: 1%;
  text-decoration: none;
  margin: 3%;
}
.ll{
  text-decoration: none;
}

</style>

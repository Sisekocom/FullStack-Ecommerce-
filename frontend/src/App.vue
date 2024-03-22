<template>
  <main class="container-fluid">
    <router-view />
  </main>
  <FooteR />
</template>

<script>
import FooteR from './components/FooteR.vue';

export default {
  components: {
    FooteR
  }
}
</script>

<style>
html, body {
  height: 100%; 
  margin: 0;
  padding: 0;
  overflow-x: hidden; 
}
body {
  margin: 0;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
  background-color: rgba(2, 2, 2, 0.916);
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  color: #fafafa;
  background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d863b251633935.58f521c2e013a.gif);
  /* max-width: 100%;
  height: auto; */
}

#app {
  text-align: center;
}

.container-fluid {
  margin: 0 auto;
  padding: 0 15px; 
  max-width: 100%;
}

nav {
  background: rgba(52, 44, 44, 0.402) !important;
  text-align: right;
  padding: 20px;
  margin-bottom: 20px; 
}

nav a {
  font-weight: bold !important;
  color: white !important;
}

nav a.router-link-exact-active {
  color: rgb(228, 255, 53) !important;
  font-family: "Rubik", sans-serif;
}

.nav-item {
  font-size: large;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.818);
  font-family: "Rubik Bubbles", system-ui;
  float: right;
  display: block;
  text-transform: capitalize;
  text-decoration: none;
}

@media (max-width: 768px) {
  .container-fluid {
    padding: 0 10px; 
  }

  nav {
    padding: 10px;
    margin-bottom: 10px; 
  }

  .nav-item {
    font-size: medium;
  }

  nav, .nav-item {
    text-align: center;
    float: none;
  }
}
</style>
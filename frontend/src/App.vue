<template class="container-fluid">

  <!-- <NavBar /> -->
<main>
  <router-view />
</main>
<FooteR /> 

</template>

<script>
import FooteR from './components/FooteR.vue';
// import NavBar from './components/NavBar.vue'
export default {
components:   {
  // NavBar,
 FooteR
}
}

</script>

<style>

/* #pic{ */
/* background-size: cover;
background-repeat: no-repeat;
background-image: url("https://i.ibb.co/JzjB5rk/giphy-1.gif"); */
/* padding-top: 11%;} */

body{


background-size: cover;
background-repeat: no-repeat;


}


#app {
font-family:  Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #fafafa;
font-family: "Rubik", sans-serif;
  /* font-optical-sizing: auto; */
 
}


nav {
padding: 40px;
a {
font-weight: bold;
color: #2c3e50 !important;}}



 nav  { 
background: rgba(52, 44, 44, 0.402) !important;
text-align: right !important; 


 }  

nav a {
font-weight: bold !important;
color: white !important ; 




 } *

nav a.router-link-exact-active {
color: rgb(228, 255, 53) !important;
/* margin-left: -80%; */
font-family: "Rubik", sans-serif;

} 

/* img[alt='logo'] {
width: 5rem !important;
margin-top: -50% !important;
aspect-ratio: 1/1 !important;
} */



.nav-item {
font-size: large !important;
font-weight: bold !important;
/* margin-left: 4% !important; */
/* color: rgb(5, 5, 5); */
color: rgba(255, 255, 255, 0.818) !important;
font-family: "Rubik Bubbles", system-ui !important;
/* font-weight: 400 !important; */
font-style: normal !important;
/* background-color: #b95842 !important; */


}
 .container {
max-width: 1200px;
margin: 0 auto;
padding:  15px;
} 
/* 
main {
padding: 20px;
}  */

/* nav {
padding: 20px;
} */

/* img[alt='logo'] {
width: 5rem;
margin-top: -50%;
aspect-ratio: 1/1;
} */

.nav-item {
/* font-size: large; */
/* font-weight: bold; */
/* color: rgba(255, 255, 255, 0.818); */
/* font-family: "Rubik Bubbles", system-ui; */
}

/* Responsive Styles */
@media (max-width: 768px) {
img[alt='logo'] {
width: 4rem;
margin-top: -30%;
}

/* nav {
padding: 10px;
} */

.nav-item {
font-size: medium;
}
}


body{
/* overflow-x: hidden;    */
/* background-image: url(); */
             background-color: rgba(2, 2, 2, 0.916);
background-image: url(https://www.bing.com/th/id/OGC.0e5bd0ac099a214e98426eead080f4c4?pid=1.7&rurl=https%3a%2f%2fi.gifer.com%2f7S7F.gif&ehk=cTu90sfWNB6uPC8xsjj0n12YmX4YaBicSN0WYwWTrdc%3d);
/* background-image: url() !important; */
}
.nav-item{

float: right !important;
display: block !important;
text-align: right !important;

text-transform: capitalize !important;
text-decoration: none !important;

}


</style>
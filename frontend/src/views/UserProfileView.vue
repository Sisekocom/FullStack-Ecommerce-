<template>
  <NavbaAbout />
  <div class="profile-page">
    <button @click="goBack" class="back-button">Back</button>
    <div class="profile-header">
      <img src="https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain" alt="Profile Image" class="profile-image">
      <h1>My Profile</h1>
    </div>


    <div v-if="userProfile" class="profile-section personal-info">
      <h2><i class="fas fa-user"></i> Personal Information</h2>
      <!-- <p><strong>userID:</strong> {{ userProfile.userID }} {{ user.userID }}</p> -->
      <p><strong>Surname:</strong> {{ userProfile.lastName }}</p>
      <p><strong>Name:</strong> {{ userProfile.firstName }}</p>
      <p><strong>Age:</strong> {{ userProfile.userAge }}</p>
      <p><strong>Email:</strong> {{ userProfile.emailAdd }}</p>
      <p><strong>Role:</strong> {{ userProfile.userRole }}</p>
      <button @click="editPersonalInfo">Edit</button>
    </div>
    


  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
import NavbaAbout from '../components/NavbaAbout.vue'

export default {
  components: {
    NavbaAbout
  },
  data() {
    return {
    }
  },
  methods: {

    goBack() {
      this.$router.go(-1);
    },

    user(){
      let {cookies} = useCookies()
      let loggedInUser = cookies.get('LoggedUser')
     return loggedInUser.result.userID;
    }
  },

  computed : {
    userProfile(){
      return this.$store.state.user
    },

  },

  mounted (){
     this.$store.dispatch('fetchUser', this.user() )
  }
}
</script>

<style scoped>
.profile-page {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-size: cover;
  min-height: 100vh; 
  color: #000000;
}
.back-button {
  margin-bottom: 1px;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-header h1 {
  font-size: 24px;
  color: #fff; 
}

.profile-section {
  background-color: rgba(255, 255, 255, 0.8); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.profile-section h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
}

.profile-section p {
  margin-bottom: 10px;
}

.profile-section button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.profile-section button:hover {
  background-color: #0056b3;
}

.profile-section ul {
  list-style-type: none;
  padding: 0;
}

.profile-section ul li {
  margin-bottom: 10px;
}

.profile-section ul li button {
  margin-left: 10px;
}

.profile-section input[type="checkbox"] {
  margin-right: 10px;
}
</style>
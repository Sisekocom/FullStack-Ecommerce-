<template>
  <NavbaAbout />
  <div class="container-fluid">
    <h1>DataCore Innovations</h1>
    <p>{{ aboutView }}</p>
    <hr>
    <h2>Our Mission</h2>
    <p>To empower individuals and organizations by providing innovative and reliable tech solutions that enhance productivity and creativity.</p>
    <hr>
    <h2>Our Vision</h2>
    <p>To be a global leader in the tech industry, recognized for our contributions to technology, community, and sustainable practices.</p>
    <hr>
    <h2>Meet the Team</h2>
    <transition-group name="slide" tag="div" class="row text-center">
      <div class="col-md-12 mb-4" v-for="(member, ) in visibleMember" :key="member.id">
        <img :src="member.image" class="rounded-circle mb-3 team-member-img" :alt="member.name">
        <h4>{{ member.name }}</h4>
        <p>{{ member.role }}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
import NavbaAbout from '../components/NavbaAbout.vue';

export default {
  components: {
    NavbaAbout,
  },
  data() {
    return {
      aboutView: `At DataCore Innovations, we are driven by the belief in the transformative power of technology to enhance lives. Our commitment is to provide an extensive range of high-quality and competitively priced tech products. From cutting-edge laptops to immersive gaming devices, we strive to fulfill every tech need.

What sets us apart is our dedication to sourcing any product not currently in our selection. We want to ensure that you have access to the best technology available. Join us in embracing the future and start your tech journey with DataCore Innovations today.`,
      team: [
        { id: 1, name: 'Siseko Nonyongo', role: 'CEO & Founder', image: 'https://media.licdn.com/dms/image/D4D03AQFoMGxTLLKqUw/profile-displayphoto-shrink_800_800/0/1673528254702?e=2147483647&v=beta&t=DBU-9WLEGCSj7QVND7ISSTsX8FKocO_GWTuUgEhlPOY' },
        { id: 2, name: 'John Smith', role: 'Chief Technology Officer', image: 'https://media.istockphoto.com/id/1132792394/photo/headshot-of-a-young-adult.webp?b=1&s=170667a&w=0&k=20&c=KfJg-kHVWlAt-2AmgpX7dA04z9sXt1ikcIW2u601Pig=' },
        { id: 3, name: 'Alex Johnson', role: 'Lead Developer', image: 'https://th.bing.com/th/id/OIP._kB9Pj-x7GJmWXG1OC9dXgHaEK?pid=ImgDet&w=60&h=60&c=7&dpr=1,6&rs=1' },
      ],
      currentMemberIndex: 0,
    };
  },
  computed: {
    visibleMember() {
      return [this.team[this.currentMemberIndex]];
    }
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentMemberIndex = (this.currentMemberIndex + 1) % this.team.length;
      }, 3000); // Change slides every 3 seconds
    }
  }
};
</script>

<style scoped>
.container-fluid {
  max-width: 800px;
  margin: 120px auto;
  padding: 20px;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
  background-color: #121212;
  border-radius: 15px;
  color: #76ff03;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(145deg, #0f0f0f, #242424);
  border: 5px solid #76ff03;
}

h1, h2 {
  font-family: "Orbitron", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00e676;
}

p, .card-text {
  font-size: 1rem;
  line-height: 1.6;
  text-shadow: 0 0 8px #00e676;
}

.team-member-img {
  width: 250px; /* Adjust as needed */
  height: 250px; /* Adjust as needed */
  border-radius: 60%;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}
</style>
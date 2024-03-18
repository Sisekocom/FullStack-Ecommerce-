<template>
  
    <div class=" container  faq-page">
      <span >👇 </span>
      <h1 class="faq-header">Frequently Asked Questions</h1>
      <p class="about-summary">{{ aboutView }}</p>
      <div class="faq-container">
        <div class="faq" v-for="(faq, index) in faqs" :key="index">
          <h2 class="faq-question" @click="toggleAnswer(index)">{{ faq.question }}</h2>
          <div :class="{ 'faq-answer': true, 'expanded': expandedIndex === index }">{{ faq.answer }}</div>
        </div>
      </div>
    </div>
 
</template>

<script>
// import NavBar from '../components/NavBar.vue';

export default {
  // components: {
  //   NavBar,
  // },
  data() {
    return {
      // aboutView: `At DataCore Innovations, we are driven by the belief in the transformative power of technology to enhance lives. Our commitment is to provide an extensive range of high-quality and competitively priced tech products. From cutting-edge laptops to immersive gaming devices, we strive to fulfill every tech need.

      // What sets us apart is our dedication to sourcing any product not currently in our selection. We want to ensure that you have access to the best technology available. Join us in embracing the future and start your tech journey with DataCore Innovations today.`,

      faqs: [
        {
          question: "What products does DataCore Innovations offer?",
          answer: "We offer a wide range of tech products including cutting-edge laptops, immersive gaming devices, and much more. If you're looking for something specific, don't hesitate to ask!"
        },
        {
          question: "Can DataCore source products not listed in the inventory?",
          answer: "Absolutely! Our commitment extends to sourcing any tech product not currently in our selection to ensure you have access to the best technology available."
        },
        {
          question: "How can I place an order?",
          answer: "Placing an order is easy! Simply visit our website, choose your products, and follow the checkout process. For any specific queries or assistance, feel free to contact us."
        },
        {
          question: "What is DataCore Innovations' return policy?",
          answer: "We accept returns within 30 days of purchase, provided the product is in its original condition. Please refer to our return policy on our website for more details."
        },
        {
          question: "How can I contact DataCore Innovations for support?",
          answer: "Our support team is always ready to help you. Contact us via email, phone, or through our website's contact form for any assistance."
        },
      ],
      expandedIndex: null,
    };
  },
  methods: {
    toggleAnswer(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>

.faq-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  color: #333;
}

.faq-header {
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
  color: #ffffff; 
  background-color: #0056b3;
}

.about-summary {
  margin-bottom: 50px;
  text-align: justify;
  color: #ffffff; 
  line-height: 1.6; 
}

.faq-container {
  margin-bottom: 20px;
}

.faq {
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px; 
  border-bottom: 2px solid #eee; 
}

/* .faq:hover {
  background-color: #f9f9f9; /* Very light grey, for hover effect */


.faq-question {
  font-weight: 600;
  font-size: 20px;
  margin: 15px 0; 
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-color: #ffffff;
 
}

.faq-answer {
  display: none;
  margin-bottom: 20px; 
  padding: 0 10px 10px; 
  color: #ffffff;
  border-left: 3px solid #007bff; 
  animation: fadeIn 0.3s ease-out;
  background-color: #333;
}

.expanded {
  display: block;
}

.faq-question::after {
  content: '▼';
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.expanded + .faq-answer {
  display: block;
}

.expanded .faq-question::after {
  transform: rotate(-180deg); 
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .faq-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .faq {
    width: 100%; 
  }
}
@keyframes spin3d {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.container .faq-page > span {
  display: inline-block; 
  animation: spin3d 200s infinite linear; 
  font-size: 38px;
}
</style>

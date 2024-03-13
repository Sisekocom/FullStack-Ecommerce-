+<template>
   
    <div class="card w-25">
        <div class="card-img-top" >
            <slot name="imgTop" ></slot>
        </div>
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardView'
    }
</script>

<style scoped>
    .card {
        width:18rem !important;
        margin: 4rem !important;
        display: flex;
        display: block;
  flex-wrap: wrap;
  gap: 900px; 
  padding: 20px; 

  border: 5px solid #ccc !important;
  /* padding: 30px !important; */
  /* text-align: center; */
  background-color: #111010b0 !important;
  color: aliceblue;

  

    }
</style>
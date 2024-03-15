+<template>
   
    <div class="card w-25 ">
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
        width:18rem ;
        margin: 4rem ;
  border: 5px solid #ccc !important;

  background-color: #111010b0 !important;
  color: aliceblue;

  

    }
</style>
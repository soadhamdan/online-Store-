<template>
    <div class="row  bg-light bg-gradint   text-center w-100  " >
        
         <clothes-Card class="col-sm-12 col-md-6 col-lg-4 col-xl-3  col-mb-2 m-end-1 " v-for="product in $store.getters.filterclothes" :key="product" :name="product.name" :price="product.price" :descr="product.descr" :img="product.img"></clothes-Card>
       
    </div>
</template>
<script>
import clothesCard from './clothesCard.vue';
    export default{
    components: { clothesCard 
    
    }}

</script>
<style>
    
    
</style>
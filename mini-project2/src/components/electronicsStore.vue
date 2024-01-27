<template>
    <div class="row">
        
         <ProductCard class="col-sm-12 col-md-6 col-lg-4 col-xl-3  col-mb-3" v-for="product in $store.getters.filterdElectronics" :key="product" :name="product.name" :price="product.price" :descr="product.descr" :img="product.img"></ProductCard>
       
    </div>
</template>
<script>
import ProductCard from './productCard.vue';
    export default{
    components: { ProductCard }
}
</script>
<style></style>
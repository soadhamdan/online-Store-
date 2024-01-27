
<template>
    <div class="row">
        <Food-Cart class="col-sm-12 col-md-6 col-lg-4 col-xl-3  col-mb-3" v-for="products in $store.getters.filteredProducts" :key="products" :name="products.name" :price="products.price" :descr="products.descr" :img="products.img"></Food-Cart>

        
    </div>
</template>
<script>
        import FoodCart from './FoodCart.vue'

export default {
   components:{
    FoodCart
   } 
}
</script>

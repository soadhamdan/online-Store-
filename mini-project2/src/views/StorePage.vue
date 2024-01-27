
<template>
    <section section div class="container bg-light  text-center" id="app">

        <ul class="nav nav-tabs">
            <li class="nav-item"><a href="#" class="nav-link bg-light" :class="{active:($store.state.selectedTab=='elect')}" @click="$store.state.selectedTab='elect'" style="color:#ff725e !important;background-color:white ;border: 1px 1px 1px  white  solid !important;">Electronics</a></li>
            <li class="nav-item"><a href="#" class="nav-link bg-light" :class="{active:($store.state.selectedTab=='cloth')}" @click="$store.state.selectedTab='cloth'" style="color:#ff725e !important;background-color:white ;border: 1px 1px 1px  white  solid !important;">Clothes</a></li>
            <li class="nav-item"><a href="#" class="nav-link bg-light " :class="{active:($store.state.selectedTab=='food')}" @click="$store.state.selectedTab='food'" style="color:#ff725e !important;background-color:white ;border: 1px 1px 1px  white  solid !important;">Food</a></li>
        </ul>
    <div class="row"><div class="col-2">         <products-Cart class="float-start"></products-Cart>
    </div></div>
        <div v-show="$store.state.selectedTab=='elect'">

            <div class="row">
                <div class="col-2">
                    
                    <electronics-Filter ></electronics-Filter>
        
                </div>
                <div class="col-10"> 
                        <electronics-Store> </electronics-Store>
                </div>
            </div>
        </div>
    
        <div v-show="$store.state.selectedTab=='cloth'" >
            <div class="row">
                <div class="col-2">
                    <Clothes-Filter ></Clothes-Filter>
        
                </div>
                <div class="col-10">  
                    <Clotes-Store class="w-75"></Clotes-Store>
                                        
                </div>
            </div>
        </div>
        
        <div v-show="$store.state.selectedTab=='food'">
            <div class="row">
                <div class="col-2">
        
                    <Food-Filter></Food-Filter>
        
                </div>
                <div class="col-10">  
                  <Food-Store></Food-Store>    
                     
                </div>
            </div>
           
        </div>
    </section>
    
</template>
<script>

    import electronicsStore from '@/components/electronicsStore';
    import electronicsFilter from'@/components/electronicsFilter';
    import productsCart from '@/components/productsCart';
    import FoodFilter from '@/components/FoodFilter';
    import FoodStore from '@/components/FoodStore';
    import ClothesFilter from '@/components/ClothesFilter'
    import ClotesStore from '@/components/ClotesStore'

    export default{
        components:{
        electronicsStore,
        electronicsFilter,
        productsCart,
        FoodFilter,
        FoodStore,
        ClothesFilter,
        ClotesStore, 
    
     }   
    }
</script>
<style>
    .nav-tabs{ 
        color: #ff725e !important;
        

    }
    .nav-tabs li a{ 
        color:#ff725e !important;

    }
    
</style>

<template>
    <div class="accordion" id="y">
  <div class="accordion-item">
     <div class="accordion-header">
       <button class="w-100" data-bs-toggle="collapse" data-bs-target="#pc">Prices</button>
     </div>
     <div id="pc" class="collapse accordion-collapse" data-bs-parent="#y">
       <div class="list-group">
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.minc==0 && $store.state.maxc==99999 ? '':''" @click="$store.state.minc=0;$store.state.maxc=99999">All</a>
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.minc==0 && $store.state.maxc==10000 ? '0 - 2,000':''" @click="$store.state.minc=0;$store.state.maxc=2000">0 - 2,000</a>
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.minc==10000 ? '2,000 - 5,000':''" @click="$store.state.minc=2000;$store.state.maxc=5000">2,000 - 5,000</a>
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.minc==20000 ? 'Above 5,000':''" @click="$store.state.minc=5000;$store.state.maxc=99999">Above 5,000</a>
       </div>
     </div>
   </div>
   <div class="accordion-item">
     <div class="accordion-header">
       <button class="w-100" data-bs-toggle="collapse" data-bs-target="#Brand">Brand</button>
     </div>
     <div id="Brand" class="collapse accordion-collapse" data-bs-parent="#y">
       <div class="list-group">
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedBrand=='' ? '':''" @click="$store.state.selectedBrand=''">All</a>
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedBrand=='Luxury' ? 'Luxury':''" @click="$store.state.selectedBrand='Luxury'">Luxury</a>
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedBrand=='Max' ? 'Max':''" @click="$store.state.selectedBrand='Max'">Maxe</a>
         <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedBrand=='Part Antonto' ? 'Part Antonto':''" @click="$store.state.selectedBrand='Part Antonto'">Part Antonto</a>
       </div>
     </div>
   </div>
   
 </div>
</template>
<script>

   export default{

   }
</script>
<style></style>
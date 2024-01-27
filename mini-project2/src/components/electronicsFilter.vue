<template>
     <div class="accordion" id="f">
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="w-100" data-bs-toggle="collapse" data-bs-target="#pr">Prices</button>
      </div>
      <div id="pr" class="collapse accordion-collapse" data-bs-parent="#f">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.min==0 && $store.state.max==99999 ? '':''" @click="$store.state.min=0;$store.state.max=99999">All</a>
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.min==0 && $store.state.max==10000 ? '0 - 10,000':''" @click="$store.state.min=0;$store.state.max=10000">0 - 10,000</a>
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.min==10000 ? '10,000 - 20,000':''" @click="$store.state.min=10000;$store.state.max=20000">10,000 - 20,000</a>
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.min==20000 ? 'Above 20,000':''" @click="$store.state.min=20000;$store.state.max=99999">Above 20,000</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="w-100" data-bs-toggle="collapse" data-bs-target="#co">Type</button>
      </div>
      <div id="co" class="collapse accordion-collapse" data-bs-parent="#f">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedType=='' ? '':''" @click="$store.state.selectedType=''">All</a>
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedType=='laptop' ? 'laptop':''" @click="$store.state.selectedType='laptop'">Laptop</a>
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedType=='phone' ? 'phone':''" @click="$store.state.selectedType='phone'">Smart Phone</a>
          <a href="#" class="list-group-item list-group-item-action" :class="$store.state.selectedType=='accessories' ? 'accessories':''" @click="$store.state.selectedType='accessories'">Accessories</a>
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
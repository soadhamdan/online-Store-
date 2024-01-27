<template>

    <div class="accordion" id="o" >
      <div class="accordion-item">
        <div class="accordion-header">
          <button class="w-100" data-bs-toggle="collapse" data-bs-target="#pf">Prices</button>
        </div>
        <div id="pf" class="collapse accordion-collapse" data-bs-parent="#o">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action  " :class="$store.state.minf==0 && $store.state.maxf==9999999 ? '':''" @click="$store.state.minf=0;$store.state.maxf=9999999">All</a>
            <a href="#" class="list-group-item list-group-item-action " :class="$store.state.minf==0 && $store.state.maxf==30000 ? '0 - 1000':''" @click="$store.state.minf=0;$store.state.maxf=1000">0 - 1000</a>
            <a href="#" class="list-group-item list-group-item-action " :class="$store.state.minf==30000 ? '1000 - 2000':''" @click="$store.state.minf=1000;$store.state.maxf=3000">1000 - 2000</a>
            <a href="#" class="list-group-item list-group-item-action " :class="$store.state.minf==60000 ? '1000 - 2000':''" @click="$store.state.minf=3000;$store.state.maxf=6000">3000 - 6000</a>
            <a href="#" class="list-group-item list-group-item-action " :class="$store.state.minf==90000 ? 'Above 10,000':''" @click="$store.state.minf=6000;$store.state.maxf=9999999">Above 10,000</a>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header">
          <button class="w-100" data-bs-toggle="collapse" data-bs-target="#Menu">Menu</button>
        </div>
        <div id="Menu" class="collapse accordion-collapse" data-bs-parent="#o">
          <div class="list-group ">
            <a href="#" class="list-group-item list-group-item-action " :class="$store.state.selectedMenu=='' ? '':''" @click="$store.state.selectedMenu=''">All</a>
            <a href="#" class="list-group-item list-group-item-action " :class="$store.state.selectedMenu=='Dishes' ? 'Dishes':''" @click="$store.state.selectedMenu='Dishes'">Dishes</a>
            <a href="#" class="list-group-item list-group-item-action " :class="$store.state.selectedMenu=='Desserts' ? 'Desserts':''" @click="$store.state.selectedMenu='Desserts'">Desserts</a>
          </div>
        </div>
      </div>
     
    </div>
  
  </template>
  <script>
   export default{

}
  </script>
  <style>
   
  </style>
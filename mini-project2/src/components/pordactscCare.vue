
<template>
    <button class="border-light  w-100 float-end w-100 mb-1 mt-1" data-bs-toggle="modal" data-bs-target="#cartModal" style="color: white !important;background-color: #ff725e !important;" >
              <span class="bi bi-cart"></span>
              {{$store.state.cart.length}}
    </button>
     <div id="cartModal" class="modal fade">
       <div class="modal-dialog modal-lg">
           <div class="modal-content">
               <div class="modal-header bg-warning ">
                   My Cart
               </div>
               <div class="modal-body">
                   <table class="table table-borderless table-hover">
                       <tr>
                           <th>No</th>
                           <th></th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Subtotal</th>
                           <th></th>
                       </tr>
                       <tr v-for="(item,index) in $store.state.cart" :key="item">
                           <td>{{index+1}}</td>
                           <td>
                               <img :src="item.img" style="width:96px;height:56px">
                           </td>
                           <td>{{item.name}}</td>
                           <td>{{item.price}}</td>
                           <td>
                               <button class="btn btn-danger bg-danger" @click="item.qty--">-</button>
                               <input type="number" class="form-control" v-model="item.qty">
                               <button class="btn btn-success bg-success" @click="item.qty++">+</button>
                           </td>
                           <td>{{item.qty*item.price}}</td>
                           <td>
                               <button class="btn-close" @click="$store.state.cart.splice(index,1)"></button>
                           </td>
                       </tr>
                   </table>

                   <div class="card">
                       <div class="card-body">Total Bill: {{$store.getters.totalBill}}</div>
                   </div>
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
   .modal-header{
       color: white !important;
           background-color: #ff725e !important;
           color: white !important;
           border-bottom: white !important;
           border:#ff725e solid 1px !important;

           box-shadow: #ff725e 0 0 5px !important ;
           padding:8px !important;
           margin: 2px !important;
           margin-bottom:5px !important;
           outline: #ff725e 2px !important;
           border-bottom: white solid 2px !important;
           border: white solid 2px !important;

       }
   </style>
<template>
    <div class="card " >
               <div class="card-body    ">
                   <h4> {{name}}</h4>
                   <img :src="img" class="card-img-top  
                   " style="width:100%;height:240px">
                   <h4 class="display-9 fw-bold  ">${{price}}</h4>
                   <p class="text-secondary justify-content-end">{{descr}} </p>
                   <button class="p-2 rounded-3"  @click="addToCart()">Buy Now</button>
               </div>
           </div>
   
  
  
  </template>
  <script>
   
  export default{
    
      props:["name","price","descr","img"],
      methods:{
          addToCart(){
              var qty = prompt("Enter the quantity")
              if(this.$store.state.cart.length==0)
                {this.$store.state.cart.push({name:this.name,price:this.price,img:this.img,qty:parseFloat(qty)})}
              else 
                {
                  var found=false
                  this.$store.state.cart.forEach(item => {
                  if(item.name==this.name){
                      item.qty+=parseFloat(qty)
                      found=true
                  }
                   })
                   if(!found){
                      this.$store.state.cart.push({name:this.name,price:this.price,img:this.img,qty:parseFloat(qty)})
                  }
                } 
       
  
          }
      }
  }
  
  </script>
  <style>
   .card:hover{
       border-top: #ff725e solid 2px;
       border-left: #ff725e solid 1px;
  
  
       
   }
   .display-9{ 
       color: #ff725e !important;
  
   }
   .card button{
       background-color: white !important;
       border: #ff725e 1px solid !important;
       color:black !important
  
   }
   .card button:hover{
       background-color: #ff725e !important;
       border: #ff725e 1px solid !important;
       color:white !important
  
   }
   .accordion-button:focus{
       box-shadow: #ff725e 0 0 5px !important ;
     }
     button.accordion-button.collapsed:focus::after:hover{
       color: #ff725e !important;
       background-image:black;
     }
     .accordion-header button{ 
       background-color: white !important;
       color:black !important;
       box-shadow: #ff725e 0 0 5px !important ;
       padding:5px !important;
       margin: 2px !important;
       margin-bottom:5px !important;
       outline: #ff725e 2px !important;
       border-bottom: white solid 2px !important;
       border: white solid 2px !important;
  
     }
     
     .accordion-header button:hover{ 
       box-shadow: #ff725e 0 0 5px !important ;
       color:black !important;
       border: white !important;
  
     }
     .accordion a :active{
       color: white !important;
           background-color: #ff725e !important;
           color: white !important;
           border-bottom: white !important;
       }
       .accordion a:hover{
           color: white !important;
           background-color: #ff725e !important;
           color: white !important;
           border-bottom: white !important;   
       }
       .accordion a :after{ 
           color: white !important;
           background-color: #ff725e !important;
           color: white !important;
           border-bottom: white !important;  
       }
  </style>
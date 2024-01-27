<template>   
    <div class="list-group-item list-group-item-action" style="border: none;">
            <div class="card shadow">
               <div class="row">
                   <div class="col-4 col-md-3 col-lg-2">
                     <img src="136-1366211_group-of-10-guys-login-user-icon-png.png" class="card-img-top">
                     <div class="card-body">
                        <h5 class="card-title">{{name}}</h5>
                        <h6 class="card-title">{{age}}</h6>                    
                     </div>
                   </div>

                   <div class="col-8 col-md-9 col-lg-10 p-3 ">
                     <h4 class="card-text mt-2">{{title}}</h4>
                     <p class="card-text">{{body}}</p>
                     <button class="btn text-light mt-5" style="background:#FF725E;box-shadow:0 0 8px #b35042">Details</button>
                     <span class="badge rounded-pill float-end me-5 px-3 py-2" style="background:#FF725E;box-shadow:0 0 5px #b35042">0</span>
                   </div>
               </div>           
            </div> 
    </div>            
</template>
<script>
    export default{
        props:["name","age","title","body"]
    }
</script>
<style></style>
<template>
   <nav class="navbar navbar-expand-lg navbar-light text-warning sticky-top bg-light  text-center" style=" background-color: #f8f9fa !important; margin-right: 0px !important "  >
    <div class="container-fluid">
      <a href="#" class="navbar-brand" style="color:  #ff725e">Mega Store</a>
   
      <div class="collapse navbar-collapse float-start" id="my-collapse">
        <ul class="navbar-nav me-auto text-start m-1" style="  margin-left: 450px !important" >
          <li class="nav-item  text-warning text-start"><router-link to="/" class="nav-link text-start"><b>Home</b></router-link></li>
          <li class="nav-item text-warning  text-start"><router-link to="/store" class="nav-link text-start"><b>Store</b></router-link></li>
          <li class="nav-item text-warning text-start"><router-link to="/forum" class="nav-link text-start"><b>Forum</b></router-link></li>
          <li class="nav-item text-warning text-start"><router-link to="/contact" class="nav-link text-start"><b>Contact</b></router-link></li>
        </ul>
        <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#mySidenav">
          <span class="navbar-toggler-icon"></span>
        </button>`
        <ul class="navbar-nav ms-auto">

          <button class=" rounded-pill  " style="border: #ff725e 1px solid !important; background-color: #ff725e;  !important;color: white; width:100%;height:100%"> Get Star </button>        </ul>
      
      </div>
    </div>
    </nav>
  <section class="container text-start">
    <router-view></router-view>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
li a::after:hover {
  background-color: #ffc107 !important;
}
</style>

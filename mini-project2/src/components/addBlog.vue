<template>
      <form class=" p-4 mt-5 mb-5 shadow " style="background:white;" @submit.prevent="add()">
        <input type="text" class="form-control" placeholder="Name" id="n" style="box-shadow: 0 0 2px #FF725E;" v-model="name"> <br>
        <input type="number" class="form-control" placeholder="Age" id="a" style="box-shadow: 0 0 2px #FF725E;" v-model="age"> <br>
        <input type="text" class="form-control" placeholder="Title" id="t" style="box-shadow: 0 0 2px #FF725E;" v-model="title"> <br>
        <textarea class="form-control" placeholder="Body" id="b" style="height:100px; box-shadow: 0 0 2px #FF725E;" v-model="body"></textarea> <br>
        <button class="btn text-light" style="background: #FF725E;box-shadow:0 0 8px #b35042 ;">Add Post</button>
       </form>
</template>
<script>
    export default{
      data(){
        return{
          name:"",
          age:"",
          title:"",
          body:"",
        }
      },
      methods:{
        add(){
          this.$store.state.posts.push({name:this.name,age:this.age,title:this.title,body:this.body})
          this.name=''
          this.age=''
          this.title=''
          this.body=''
        }
      }
        
    }
</script>
<style></style>
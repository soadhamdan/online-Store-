<template>
      <form @submit.prevent="send()" class=" p-4 mt-5 shadow" style="background:white;width:50%;margin:auto;" v-show='$store.state.shownItem=="form"'>
        <label class="form-label" style="font-family:'Segoe UI Semibold';font-size:x-large;color:#556269">Name</label>
        <input type="text" class="form-control"  style="box-shadow: 0 0 2px #FF725E;" v-model="name"> <br>
        <label class="form-label" style="font-family:'Segoe UI Semibold';font-size:x-large;color:#556269">Email</label>
        <input type="email" class="form-control" style="box-shadow: 0 0 2px #FF725E;" v-model="email"> <br>
        <label class="form-label" style="font-family:'Segoe UI Semibold';font-size:x-large;color:#556269">Subject</label>
        <input type="text" class="form-control"   style="box-shadow: 0 0 2px #FF725E;" v-model="subject"> <br>
        <label class="form-label" style="font-family:'Segoe UI Semibold';font-size:x-large;color:#556269">Message</label>
        <textarea class="form-control"  style="height:100px; box-shadow: 0 0 2px #FF725E;" v-model="message"></textarea> <br>
        <button class="btn text-light" style="background:#FF725E;box-shadow:0 0 8px #b35042;display:block;margin:auto;width:30%" >send</button>
      </form>
</template>
<script>
    export default{
      data(){
        return{
            name:" ",
            email:" ",
            subject:" ",
            message:" "
        }
      },
     methods:{
        send(){
            this.$store.state.shownItem="alert"
            setTimeout(()=>{
              this.$store.state.shownItem="form"  
              this.name=" "
              this.email=" "
              this.subject=" "
              this.message=" "
            },3000)
        }

     } 
    }
</script>
<style></style>
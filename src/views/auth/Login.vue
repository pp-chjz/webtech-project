<template>
  <div>
    <form @submit.prevent="login">
      <div>
              
        <label for="email">email</label>
        <input v-model="form.email" for="text" placeholder="email" autocomplete="off">
     
      </div>
      

      <div>
              
        <label for="password">Password</label>
        <input v-model="form.password" for="password" placeholder="password" autocomplete="off">
     
      </div>

      <div>
              
        <button>Login</button>
     
      </div>
    </form>


  </div>

  
</template>

<script>

import AuthService from "@/services/AuthService"

export default {
  data(){
    return{
      form:{
        email: '',
        password:'',
      }
    }
  },
  methods:{
    async  login(){
      let res = await AuthService.login(this.form)
        if(res.success && res.roles === "admin"){
          console.log("testtest")
          this.$swal("Login Success,You are ADMIN!!")
          this.$router.push('/about')
        }
        else if(res.success && res.roles === "common"){
          console.log("testtest")
          this.$swal("Login Success,You are USER!!")
          this.$router.push('/about')

        }else {
          this.$swal("Login Failed",res.message, "error")
        }
    }
  }
}

</script>

<style>

</style>
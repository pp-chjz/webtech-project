<template>
  <div class="frame">

    <h2 id="h2-post">เข้าสู่ระบบ</h2>

    <form @submit.prevent="login">

      <div class="box-all">

        <div class="line" >
          <b-row>
            <b-col sm="2">
              <label for="email">อีเมล:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.email" 
              placeholder="กรอกอีเมล"
              autocomplete="off"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="line"> 
          <b-row>
            <b-col sm="2">
              <label for="password">รหัสผ่าน:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input type ="password" v-model="form.password" 
              placeholder="กรอกรหัสผ่าน"
              autocomplete="off"></b-form-input>
            </b-col>
          </b-row>               
        </div>

        <button id="mp-add" class="button is-danger">เข้าสู่ระบบ</button>

      </div>


      <!-- <div>
              
        <label for="email">email</label>
        <input  v-model="form.email" for="text" placeholder="email" autocomplete="off">
     
      </div>
      

      <div>
              
        <label for="password">Password</label>
        <input v-model="form.password" for="password" placeholder="password" autocomplete="off">
     
      </div>

      <div>
              
        <button>Login</button>
     
      </div> -->
   
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
        password:''
      }
    }
  },
  methods:{
    async  login(){
      let res = await AuthService.login(this.form)
      if(res.success && res.roles === "admin"){
          this.$swal("Login Success,You are ADMIN!!" ,`Welcome, ${res.user.username}`, "success")
          this.$router.push('/about')
        }
      else if(res.success && res.roles === "common"){
        this.$swal("Login Success,You are USER!!" ,`Welcome, ${res.user.username}`, "success")
        this.$router.push('/about')
        }
      else 
      {
        this.$swal("Login Failed",res.message, "error")
        this.clearForm()
        }
    },
    clearForm(){
      this.form ={
        email:'',
        password:''
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&display=swap');
h2, label, button{
  font-family: 'Chakra Petch', sans-serif;
}
.line {
  padding-left: 25%;
}

.box-all, .line {
  margin-top: 20px;
  margin-bottom: 20px;
}

label {
  font-size: 18px;
}
</style>
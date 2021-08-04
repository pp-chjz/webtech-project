<template>
  <div>
        <form @submit.prevent="register">
      <div>
              
        <label for="username">Username</label>
        <input v-model="form.username" for="text" placeholder="username" autocomplete="off">
     
      </div>

      <div>
              
        <label for="email">Email</label>
        <input v-model="form.email" for="text" placeholder="Email" autocomplete="off">
     
      </div>
    
      <div>
              
        <label for="password">Password</label>
        <input v-model="form.password" for="text" placeholder="password" autocomplete="off">
     
      </div>

      <div>
              
        <label for="C-password">Confirm Password</label>
        <input v-model="form.c_password" for="text" placeholder="password" autocomplete="off">
     
      </div>

      <div>
              
        <label for="Phone">Phone number</label>
        <input v-model="form.phone" for="text" placeholder="Phone Number" autocomplete="off">
     
      </div>

      <div>
              
        <label for="Line">Line ID</label>
        <input v-model="form.line" for="text" placeholder="Line ID" autocomplete="off">
     
      </div>

      <div>
              
        <label for="Facebook">Facebook</label>
        <input v-model="form.face" for="text" placeholder="Facebook" autocomplete="off">
     
      </div>

      <div>
              
        <label for="Add">Your Address</label>
        <textarea v-model="form.add" for="text" rows="5" cols="30" placeholder="Address" autocomplete="off"></textarea>
     
      </div>




      <div>
              
        <button type="submit">Register</button>
     
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return{
      form:{
        username:'',
        email:'',
        password:'',
        c_password:'',
        phone:'',
        line:'',
        face:'',
        add:''
      }
    }
  },
  methods:{
    register(){
      console.log(this.form)

    }
  }
}
</script>

<template>

  <div class="frame">
      <h2 id="h2-post">สมัครสมาชิก</h2>

      <form @submit.prevent="register">
      
      <div class="box-all">
        
        <div class="line" >
          <b-row>
            <b-col sm="2">
              <label for="name">ชื่อ-สกุล:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.name" placeholder="กรอกชื่อ-สกุล"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="line">
          <b-row>
            <b-col sm="2">
              <label for="username">ชื่อผู้ใช้:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.username" placeholder="กรอกชื่อผู้ใช้"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="line"> 
          <b-row>
            <b-col sm="2">
              <label for="email">อีเมล:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.email" placeholder="กรอกอีเมล"></b-form-input>
            </b-col>
          </b-row>
        </div>
    
        <div class="line"> 
          <b-row>
            <b-col sm="2">
              <label for="password">รหัสผ่าน:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.password" placeholder="กรอกรหัสผ่าน"></b-form-input>
            </b-col>
          </b-row>               
        </div>

        <div class="line">  
          <b-row>
            <b-col sm="2">
              <label for="C-password">ยืนยันรหัสผ่าน:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.c_password" placeholder="กรอกยืนยันรหัสผ่าน" type="password"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="line">
          <b-row>
            <b-col sm="2">
              <label for="Phone">เบอร์โทรศัพท์:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.phone" placeholder="กรอกเบอร์โทรศัพท์"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="line">  
          <b-row>
            <b-col sm="2">
              <label for="Line">ไลน์:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.line" placeholder="กรอกไลน์"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="line"> 
          <b-row>
            <b-col sm="2">
              <label for="Facebook">เฟซบุ๊ก:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.face" placeholder="กรอกเฟซบุ๊ก"></b-form-input>
            </b-col>
          </b-row> 
        </div>

        <div class="line">   
          <b-row>
            <b-col sm="2">
              <label for="Address">ที่อยู่:</label>
            </b-col>
            <b-col sm="5">
              <b-form-textarea
                id="textarea-small"
                size="sm"
                placeholder="กรอกที่อยู่"
                v-model="form.add"
              ></b-form-textarea>
            </b-col>
          </b-row>
        </div>

        <button id="mp-add" class="button is-danger" type="submit">สมัครสมาชิก</button>
    </div>
    </form>
    
    <button @click="clearForm()"  id="mp-re" class="button is-danger">รีเซ็ต</button>

  </div>
</template>

<script>
import AuthService from "@/services/AuthService"

export default {
  data(){
    return{
      form: {
        username:'',
        email:'',
        name: '',
        password:'',
        c_password:'',
        phone:'',
        line:'',
        face:'',
        add:''
      },
      check:0
    }
  },
  methods:{
    clearForm() {
            this.form = {
                    username:'',
                    email:'',
                    name: '',
                    password:'',
                    c_password:'',
                    phone:'',
                    line:'',
                    face:'',
                    add:''
                }
    },
    async register() {
      console.log(this.check)
      let res = await AuthService.register(this.form)
      
      if(this.form.password != this.form.c_password){
        this.$swal("Register Failed password doesn't match")
      }
      else if(res.success){
        this.$swal("Register Success")
        this.$router.push("/about")
      }
      else {
        this.$swal("Register Failed",res.message,"error")
      }

    }
  }
}
</script>

<style lang="scss" scoped>

.box-all, .line {
  margin-top: 20px;
  margin-bottom: 20px;
}

.line {
  padding-left: 25%;
}

#mp-re, #mp-add {
    margin: 2px;
}

label {
  font-size: 18px;
}

</style>

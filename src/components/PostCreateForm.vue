<template>

  <div class="frame">
    <b-button @click="backThread" id="back" variant="outline-danger" href="">Back</b-button>

    <h2 id="h2-post">โพสต์กระทู้ข้อความช่วยเหลือ</h2>

    <div class="box-all">

      <div class="line">  
          <b-row>
            <b-col sm="2">
              <label for="topic">เรื่อง:</label>
            </b-col>
            <b-col sm="5">
              <b-form-input v-model="form.topic" placeholder="กรอกเรื่อง"></b-form-input>
            </b-col>
          </b-row>
        </div>

      <div class="line">   
          <b-row>
            <b-col sm="2">
              <label for="text">รายละเอียด:</label>
            </b-col>
            <b-col sm="5">
              <b-form-textarea
                id="textarea-small"
                size="sm"
                placeholder="ใส่รายละเอียดเพื่อขอความช่วยเหลือ"
                v-model="form.text"
              ></b-form-textarea>
            </b-col>
          </b-row>
        </div>

        <div class="line">  
          <b-row>
            <b-col sm="2">
              <label for="Line">ระดับความสำคัญ:</label>
            </b-col>
            <b-col sm="1">
               <select v-model="form.priority" id="sel">
                <option> ปกติ</option>
                <option> ปานกลาง</option>
                <option> ด่วนมาก</option>
              </select>            
            </b-col>
          </b-row>
        </div>

          <button @click="clearForm" id="mp" class="button is-danger">รีเซ็ต</button>
          <button @click="post" id="mp" class="button is-danger">สร้างกระทู้</button>
       
    </div>

  </div>
</template>

<script>

import AuthService from "@/services/AuthService"

export default {
    data() {
      return {
          form: {
                  user: '',
                  topic: '',
                  text: '',
                  priority: 'ปกติ',
                  time: new Date(),
                  status: 'false',
                  point: 0
              }
      }
    },

    methods: {
        clearForm() {
          console.log('clear');
            this.form = {
                    user: '',
                    topic: '',
                    text: '',
                    priority: 'ปกติ',
                    time: new Date(),
                    status: 'false',
                    point:0
                    
            }
        },

        add() {
            // let payload = this.form
    
            console.log(this.form)

            this.clearForm()
        },
        
        async post(){
          if(this.form.priority === "ปกติ"){
            this.form.point = 10
          } 

          else if(this.form.priority === "ปานกลาง"){
            this.form.point = 50
          }
          else{
            this.form.point = 100
          }
          // console.log(new Date())
          let res = await AuthService.post(this.form)
          
          if(this.form.topic === '' || this.form.text === ''){
            this.$swal("post Failed fill in the blank")
          }
          else if(res.success){
            this.$swal("post Success")
            this.$router.push("/Thread")
          }
          else {
            this.$swal("post Failed",res.message,"error")
          }

        },

        backThread() {
          this.$router.push("/Thread")
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

#back {
  float: right;
}

#sel {
  border: 1px solid rgb(207, 206, 206);
  width: 2cm;
}

#h2-post {
  margin-left: 60px;
}

label {
  font-size: 18px;
}

</style>

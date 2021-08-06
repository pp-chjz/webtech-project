<template>

  <div class="frame">
    <b-button id="back" variant="outline-danger" href="">Back</b-button>

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
              <option> ด่วน</option>
              <option> ด่วนมาก</option>
              </select>            
            </b-col>
          </b-row>
        </div>

          <button @click="clearForm()" id="mp" class="button is-danger">รีเซ็ต</button>
          <button id="mp" class="button is-danger">สร้างกระทู้</button>
       
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                    user: '',
                    topic: '',
                    text: '',
                    priority: 'ปกติ',
                    status: false
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
                    status: false
                    
            }
        },
        add() {
            // let payload = this.form
    
            console.log(this.form)

            this.clearForm()
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
  border: 1px solid gray;
  width: 2cm;
}

#h2-post {
  margin-left: 60px;
}

label {
  font-size: 18px;
}

</style>

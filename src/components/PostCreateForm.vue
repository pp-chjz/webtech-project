<template>

  <div class="frame">
    <b-button id="back" variant="outline-danger" href="">Back</b-button>

    <h2 id="h2-post">โพสต์กระทู้ข้อความช่วยเหลือ</h2>

    <div class="box">
        <div class="line">
            <p>เรื่อง: </p>
            <b-input id="text-size" type="text" v-model="form.topic"></b-input>
        </div> 

        <div class="line" >
            <p>ใส่ข้อความเพื่อขอความช่วยเหลือ: </p>
            <textarea id="area-size" v-model="form.text"></textarea>
        </div> 

        <div class="line">
          <a>โปรดเลือกระดับความสำคัญ: </a>
          <select v-model="form.priority" id="sel">
            <option> ปกติ</option>
            <option> ด่วน</option>
            <option> ด่วนมาก</option>
          </select>
        </div>

          <button id="mp" class="button is-danger">รีเซ็ต</button>
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

.box , .line{
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
}

#area-size {
  width: 7cm;
  height: 7cm;
  border: 1px solid gray;
}

#text-size {
  border: 1px solid gray;
  width: 7cm;
  display: inline-flex;
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

</style>

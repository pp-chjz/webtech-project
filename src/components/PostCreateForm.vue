<template>

  <div class="frame">
    กระทู้ข้อความช่วยเหลือ
    <div>
         <div class="mb-15">
            <label>หัวเรื่อง</label>
            <input type="text" v-model="form.topic">
        </div> 

        <div class="mb-15">
            <label>ใส่ข้อความเพื่อขอความช่วยเหลือ </label>
            <br>
            <textarea v-model="form.text"></textarea>
        </div> 

        <div class="fmb-15">
          <label>โปรดเลือกระดับความสำคัญ </label>
          <select v-model="form.priority">
            <option>ปกติ</option>
            <option>ด่วน</option>
            <option>ด่วนมาก</option>
          </select>
        </div>

        <div class="mb-15">
            <button @click="clearForm()">รีเซ็ต</button>
        </div>

        <div class="mb-15">
          <button @click="add()">สร้างกระทู้</button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                    topic: '',
                    text: '',
                    priority: 'ปกติ'
                }
        }
    },
    methods: {
        clearForm() {
          console.log('clear');
            this.form = {
                    topic: '',
                    text: '',
                    priority: 'ปกติ',
                    
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
.mb-15{
  padding: 15px;
  margin: 15px;
}
.frame{
  border: 1px solid #eee;
  padding: 20px;
}
</style>>

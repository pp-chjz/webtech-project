<template>
    <div class="frame">
        
    <b-button id="log-out" variant="outline-danger" href="">Log Out</b-button>
    <b-button id="post" variant="outline-danger" href="">Post</b-button>
    <h2>กระทู้ข้อความช่วยเหลือ</h2>

        <div class="all-thread" > 
            <span class="card"  v-for="index in form" :key="index.id">
                <form class="color-p">
                    <p>ชื่อเจ้าของกระทู้: {{ index.user_post_name }}</p>
                    <p>เรื่อง: {{ index.topic}}</p>
                    <p>รายละเอียด: {{ index.info }}</p>
                    <p>ระดับความสำคัญ: {{ index.priority }}</p>
                </form>

                <button @click="danger()" id="bt" class="button is-danger">ช่วยเหลือ</button>
                
            </span>
        </div>

    <h2>กระทู้ของฉัน</h2>
        <div class="my-thread"> 
            <span class="card" v-for="(card, index) in form" :key="index">
                <form class="color-p">
                    <p>ชื่อเจ้าของกระทู้: {{ card.user_post_name }}</p>
                    

                    <p >เรื่อง: </p>
                    <p v-if="index != editIndex">{{ card.topic }}</p>
                    <p v-if="index === editIndex">
                        <input type="text" v-model="form.topic">
                    </p>

                    <p>รายละเอียด: </p>
                    <p v-if="index != editIndex">{{ card.info }}</p>
                    <p v-if="index === editIndex">
                        <input type="text" v-model="form.info">
                    </p>

                    <p>ระดับความสำคัญ: </p>
                    <p v-if="index != editIndex">{{ card.priority }}</p>
                    <p v-if="index === editIndex">
                        <input type="text" v-model="form.priority">
                    </p>

                    <p v-if="index != editIndex">
                        <button  @click="openForm(index, card)" id="mp" class="button is-danger">แก้ไข</button>
                        <button id="mp" class="button is-danger">ลบ</button>
                    </p>

                    <p v-if="index === editIndex">
                        <button id="mp" @click="editCard" class="button is-danger">บันทึก</button>
                        <!-- <button id="mp" @click="closeForm" class="button is-danger">ยกเลิก</button> -->
                    </p>

                </form>

                <!-- <button  @click="openForm(index, card)" id="mp" class="button is-danger">แก้ไข</button> -->
                <!-- <button id="mp" class="button is-danger">ลบ</button> -->
            </span>
        </div>

    </div>
</template>

<script>

import PostApiStore from "@/store/Post"

  export default {
    data() {
        return {
            editIndex: -1,
            form :{
                user_post_name:"",
                topic: "",
                info: "",
                priority:"",
                status:"",
                user_post_id:""
            }
        }
    },

    async created() {
            // ใช้ this เรียก methods ใน component ตัวเอง
           await this.fetchPost()
            console.log(this.form)
            console.log("test")
        },
    methods: {
        async fetchPost(){

            await PostApiStore.dispatch("fetchPost")

            this.form = PostApiStore.getters.posts
            console.log("kala"  + this.form)

        },

        danger() {
                const notif = this.$buefy.notification.open({
                    duration: 5000,
                    message: `ขอบคุณมากค่ะที่ช่วยเหลือกัน`,
                    position: 'is-top-right',
                    type: 'is-danger',
                })   
        },

        openForm(index, card) {
            this.editIndex = index
            let cloned = JSON.parse(JSON.stringify(card))
            this.form.topic = cloned.topic
            this.form.text = cloned.text
            this.form.priority = cloned.priority
        },

        closeForm() {
            this.editIndex = -1
            this.form = {
                user: '',
                topic: '',
                text: '',
                priority: ''
            }
        },
        
        editCard() {
            let payload = {
                index: this.editIndex,
                topic: this.form.topic,
                text: this.form.text,
                priority: this.form.priority
            }
            this.closeForm
        }
    }
  }
</script>

<style >
.frame{
    padding-right: 20px;
    padding-left: 20px;
}

h2 {
   color: #f5365c
}

.color-p {
    font-size: 17px;
    color: #f5365c
}

span.card {
    width: 350px;
    height: auto;
    display: inline-flex;
    margin: 20px;
    padding-top: 25px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: black 2px 2px;
}

.all-thread , .my-thread {
    padding: 35px 40px;
    margin: 10px;
}

.all-thread .card, .my-thread .card {
    background : hsl(347, 90%, 96%);
}

#mp {
    margin-bottom: 10px;
    margin: 10px;
}

#log-out {
    float: right;
}

#post {
    float: left;
}

#bt {
    margin-bottom: 10px;
}



</style>
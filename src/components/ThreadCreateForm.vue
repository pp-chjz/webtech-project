<template>
    <div class="frame">
        <!-- {{form}}
        <br>----------------------------------------<br>
        {{user_form}}         -->
    <b-button @click="backLogIn" id="log-out" variant="outline-danger" href="">ออกจากระบบ</b-button>
    <b-button @click="toPost" id="post" variant="outline-danger" href="">โพสต์</b-button>
    <b-button @click="toReward" id="reward" variant="outline-danger" href="">รางวัล</b-button>
    <!-- <router-link v-if="isAuthen()" to="/About">Leader board</router-link> -->
    <h2>กระทู้ขอความช่วยเหลือ</h2>

    <p id="my-point" class="color-p">คะแนนของคุณ : {{user.point}}</p>

        <div class="all-thread" > 
            <span class="card"  v-for="index in form" :key="index.id">
                <form class="color-p">
                    <p>ชื่อเจ้าของกระทู้: {{ index.user_post_name }}</p>
                    <p>เรื่อง: {{ index.topic}}</p>
                    <p>รายละเอียด: {{ index.info }}</p>
                    <p>ระดับความสำคัญ: {{ index.priority }}</p>
                    <p>Line: {{ index.line_user }}</p>
                    <p>Facebook: {{ index.face_user }}</p>
                    <p>Phone: {{ index.phone_user }}</p>
                    <p>Address: {{ index.add_user }}</p>
                </form>

                <button @click="danger(index)" id="bt" class="button is-danger">ช่วยเหลือ</button>
                
            </span>
        </div>

    <h2>กระทู้ของฉัน</h2>
        <div class="my-thread"> 
            <span class="card" v-for="(card, index) in user_form" :key="index">
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

                    <p v-if="index === editIndex">
                        <button id="mp" @click="editCard" class="button is-danger">บันทึก</button>
                        <!-- <button id="mp" @click="closeForm" class="button is-danger">ยกเลิก</button> -->
                    </p>

                </form>
            </span>
        </div>

    </div>
</template>

<script>

const auth_key = "auth"
const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

import PostApiStore from "@/store/Post"
import AuthService from "@/services/AuthService"
import AuthUser from "@/store/AuthUser"

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
                user_post_id:"",
                line_user:"",
                face_user:"",
                add_user:"",
                phone_user:""
            },
            user_form: {
                user_post_name:"",
                topic: "",
                info: "",
                priority:"",
                status:"",
            },
            user: "",
            point_update: 0
        }
    },

    async created() {
            // ใช้ this เรียก methods ใน component ตัวเอง
           await this.fetchPost()
           await this.fetchFilterPost()
           this.fetchCurrentUser()
            console.log("===========")
           console.log(this.user)
            console.log("===========")
        },

    methods: {
        fetchCurrentUser(){
            this.user = AuthUser.getters.user
        },

        isAuthen(){
            return AuthUser.getters.isAuthen
        },

        async fetchPost(){

            await PostApiStore.dispatch("fetchPost")
            // await PostApiStore.dispatch("fetchFilteredPost")

            this.form = PostApiStore.getters.posts
            // this.user_form = PostApiStore.getters.filterPost
            console.log("------form--------")
            console.log(this.form)
            console.log("--------------")
            // console.log(this.user_form)

        },

        async fetchFilterPost(){
            console.log("--------------")

            // await PostApiStore.dispatch("fetchPost")
            await PostApiStore.dispatch("fetchFilteredPost")
             console.log("--------------")

            // this.form = PostApiStore.getters.posts
            this.user_form = PostApiStore.getters.posts

            // console.log(this.form)
            
            console.log(this.user_form)
            console.log("this.user_form")

        },

        async plus_point(point,id){
            await AuthUser.dispatch( "plus_point" , {point,id} ) 
        }, 

        async danger(index) {

                this.point_update = this.user.point + index.get_point 

                console.log( "user id =" + this.point_update )                     
                await this.plus_point(  this.point_update,this.user.id  ) 
                this.fetchCurrentUser()
                console.log(this.user)

                const notif = this.$buefy.notification.open({
                    duration: 5000, 
                    message: `ขอบคุณมากค่ะที่ช่วยเหลือกัน`, 
                    position: 'is-top-right', 
                    type: 'is-danger', 
                }) 
                
                // console.log(this.user)

                // location.reload()
                
                // console.log(auth)




                // let res = await AuthService.help(100)

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
        },

        backLogIn() {
            this.$router.push('/')
        },

        toPost() {
            this.$router.push('/Post')
        },

        toReward() {
            this.$router.push('/reward')
        },
    }
  }
</script>

<style >
.frame{
    padding-right: 20px;
    padding-left: 20px;
}

h2 {
   color: #f5365c;
   text-decoration-line: underline overline;
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
span.card:hover {
  box-shadow: 0 0 61px rgba(33,33,33,.2); 
  border-color: #f5365c; 
}

#my-point:hover, #my-point:active {
    font-size: 150%;
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

#reward {
    margin-bottom: 30px;
}

#bt {
    margin-bottom: 10px;
}

#my-point {
    margin-top: 40px;
    margin-bottom: -20px;
    font-size: 20px;
}

</style>
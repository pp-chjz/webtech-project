<template>
  <div class="frame-re">

    <b-button @click="goHistory()" squared variant="outline-success">
        <b-icon icon="clock-history" aria-hidden="true"></b-icon>
      History</b-button>
    <b-button @click="goLeaderBoard()" squared variant="outline-primary">LeardBoard</b-button>
    <b-button @click="back" squared variant="outline-info">Beck</b-button>
    <b-button @click="logout()" squared variant="outline-danger">Logout</b-button>
        
    <h2>รางวัล</h2>

    <div>
      <div id="bt-inline">
          <b-button v-if="isAuthen()" v-b-toggle.sidebar-1 class="button is-danger">
          <b-icon icon="plus-circle" 
            aria-hidden="true"
            ></b-icon> 
            เพิ่มรางวัลใหม่
          </b-button>
      </div>
          
      <b-sidebar id="sidebar-1" bg-variant="dark" text-variant="danger" shadow>
          <div class="px-3 py-2">

            <div id="color-label">
              <b-row>
                <b-col sm="4">
                  <label for="">ชื่อรางวัล:</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input type="text" v-model="form.name" placeholder="กรอกชื่อรางวัล"></b-form-input>
                </b-col>
              </b-row>
            </div>

            <div id="color-label">
              <b-row>
                <b-col sm="4">
                  <label for="">จำนวนแต้ม:</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input type="text" v-model="form.point" placeholder="กรอกจำนวนแต้ม"></b-form-input>
                </b-col>
              </b-row>
            </div>

            <div id="color-label">
              <b-row>
                <b-col sm="4">
                  <label for="">จำนวน:</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input type="text" v-model="form.quantity" placeholder="กรอกจำนวน"></b-form-input>
                </b-col>
              </b-row>
            </div>

          </div>
          
          <button @click="addReward" class="button is-danger" id="size-button">เพิ่ม</button>

      </b-sidebar>

    </div>

  </div>
</template>

<script>

import RewardApiStore from "@/store/rewardApi"
import AuthUser from "@/store/AuthUser"
export default {
  data() {
    return {
      form: {
        name: "",
        point: "",
        quantity: ""
      },
      user:"",
    }
  },
  
  created() {
    this.fetchUser()
  },

  methods: {
    isAuthen(){
      return AuthUser.getters.isAuthen
    },

    clearForm() {
      this.form = {
        name: "",
        point: "",
        quantity: ""
      }
    },

    async fetchUser(){
      this.user = AuthUser.getters.user
    },

    addReward() {
      if(this.user.roles === "admin")
      {
        let payload = {
          name: this.form.name,
          point: this.form.point,
          quantity: this.form.quantity
        }
        console.log(payload)
        RewardApiStore.dispatch("addReward", payload)
        this.clearForm()
        location.reload()
      }
      else{
        this.$swal("only Admin can do this")
      }

    },

    goLeaderBoard(){
      this.$router.push('/leader')
    },

    logout(){
      this.$router.push('/')
    },
    
    goHistory(){
      this.$router.push('/History')
    },

    Back(){
        this.$router.push('/reward')
    }
  }
}
</script>

<style lang="scss" scoped>

#bt-inline {
  margin-bottom: 15px;
  margin-top: 35px;
}

.frame-re {
  margin-top: 10px;
}

#color-label {
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}

#size-button {
  font-size: 19px;
  margin-top: 20px;
}

h2 {
  margin-top: 30px;
  color: #f5365c;
  text-decoration-line: underline overline;
}
</style>
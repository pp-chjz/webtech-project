<template>
  <div>

    <p id="my-point" class="color-p"> คะแนนคงเหลือ: {{ user.point }}</p>

    <div>
      <v-simple-table 
        id="color-th" 
        dark 
        class="border"
        fixed-header
        height="850px">

        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">ชื่อรางวัล</th>
            <th id="color-th">จำนวนแต้มในการแลก</th>
            <th id="color-th">จำนวน</th>
            <th> </th>
            <th></th>
          </tr>
        </thead>

        <tbody >

          <tr v-for="(reward, index) in rewards" :key="index" >
            <td id="td-font">{{ index + 1 }}</td>
            <td id="td-font" v-if="index !== editIndex">{{ reward.name }}</td>
           
            <td id="td-font" v-if="index === editIndex">
                  <b-col sm="12">
                    <b-form-input type="text" 
                    v-model="form.name" 
                    placeholder="กรอกชื่อรางวัล"></b-form-input>
                  </b-col>
            </td>

            <td id="td-font" v-if="index !== editIndex">{{ reward.point }}</td>
            <td id="td-font" v-if="index === editIndex">
              <b-col sm="12">
                <b-form-input type="text" 
                v-model="form.point" 
                placeholder="กรอกจำนวนแต้ม"></b-form-input>
              </b-col>
            </td>

            <td id="td-font" v-if="index !== editIndex">{{ reward.quantity }}</td>
            <td id="td-font" v-if="index === editIndex">
              <b-col sm="12">
                <b-form-input type="text" 
                v-model="form.quantity" 
                placeholder="กรอกจำนวน"></b-form-input>
              </b-col>
            </td>

            <td id="td-font" v-if="index !== editIndex">
              <b-button id="bt-margin" 
              pill variant="outline-danger" 
              v-if="isAuthen()" @click="openForm(index, reward)">
              แก้ไข</b-button>
            </td>

            <td id="td-font" v-if="index === editIndex">
              <b-button id="bt-margin" 
              pill variant="outline-danger" 
              @click="editReward">
              อัพเดต</b-button>

              <b-button id="bt-margin" 
              pill variant="outline-danger" 
              @click="closeForm">
              ยกเลิก</b-button>
            </td>

            <!-- <button @click="deleteReward">ลบ</button> -->
            
            <b-button id="bt-margin" 
            pill variant="outline-danger"
            @click="exchangeReward(reward)">
            Exchange</b-button>

            <b-button id="bt-margin" 
            pill variant="outline-danger"
            v-if="isAuthen()" @click="decressReward(reward)">
            ลบ 1 ชิ้น</b-button>

            <b-button id="bt-margin" 
            pill variant="outline-danger"
            v-if="isAuthen()" @click="DeleteReward(reward)">
            ลบทั้งหมด</b-button>
            
          </tr>

        </tbody>
        
      </v-simple-table>
    </div>

  </div>
</template>

<script>
import RewardApiStore from "@/store/rewardApi"
import AuthUser from "@/store/AuthUser"
import HistoryApiStore from "@/store/historyApi"
export default {
  data() {
    return {
      rewards: [], 
      user:"",
      editIndex: -1,
      form: {
        id: "",
        name: "",
        point: "",
        quantity:""
      },
      q_reward: 0,
      remaining_point:0
    }
  },

  created() {
    this.fetchReward()
    this.fetchUser()
  },

  methods: {
    isAuthen(){
      return AuthUser.getters.isAuthen
    },

    async fetchReward() {
      await RewardApiStore.dispatch("fetchReward")
      this.rewards = RewardApiStore.getters.rewards
    },

    async fetchUser(){
      this.user = AuthUser.getters.user
    },

    lookPoint(){
      this.fetchUser
      this.$swal("คะแนนของคุณคือ = " + this.user.point)
    },

    async realMinusPoint(id,point){
        await AuthUser.dispatch("plus_point", {id,point})
    },
    async updateHis(point,id,help,name,username){
            await HistoryApiStore.dispatch( "updateHistoryReward" ,{point,id,help,name,username} )
    },

    async exchangeReward(reward){
        console.log(reward.point)
        this.remaining_point = this.user.point - reward.point
        console.log(this.remaining_point)
        if(this.remaining_point < 0 )
        {
          this.$swal("คะแนนของคุณไม่พอ!!")
        }
        else if(reward.quantity === 0){
          await this.realMinusPoint( this.user.id , this.remaining_point )
          this.fetchUser()
          await this.realDeleteReward(reward.id)
          await this.updateHis( reward.point,this.user.id,reward.name ,this.user.name, this.user.username )
          this.fetchReward()
          console.log("else if")
        }
        else{
           await this.realMinusPoint( this.user.id , this.remaining_point )
           console.log("else")
           this.fetchUser()
           await this.decressReward2(reward)
           await this.updateHis( reward.point,this.user.id,reward.name  ,this.user.name, this.user.username )
           this.fetchReward()
           console.log(this.user.point)
          //  location.reload()
        }
    },
    async decressReward2(reward){
          this.q_reward = reward.quantity - 1
        // console.log("reward")
        // console.log(reward.quantity)
        // console.log(this.q_reward)
        // if(reward.quantity > 1){
          if(this.q_reward === 0){
            await this.realDeleteReward(reward.id)
            this.fetchReward()
          }
          else{
            await this.realDecressReward(reward.id , this.q_reward)
            this.fetchReward()
          }
        // }
        // else
        //   await RewardApiStore.dispatch("deleteReward",reward.id )
        // location.reload()
      
    },


    openForm(index, reward) {
      if(this.user.roles === "admin")
      {
        console.log("index", index)
        console.log("reward", reward)
        this.editIndex = index
        let cloned = JSON.parse(JSON.stringify(reward))
        this.form.id = cloned.id
        this.form.name = cloned.name
        this.form.point = cloned.point
        this.form.quantity = cloned.quantity
      }
      else{
        this.$swal("only Admin can do this")
      }
      
    },

    closeForm() {
      this.editIndex = -1
      this.form = {
        id: "",
        name: "",
        point: "",
        quantity:""
      }
    },

    async realDecressReward(id,quantity){
      await RewardApiStore.dispatch("decressReward",{id , quantity})
    },

    async decressReward(reward){
      if(this.user.roles === "admin"){
          this.q_reward = reward.quantity - 1
        // console.log("reward")
        // console.log(reward.quantity)
        // console.log(this.q_reward)
        // if(reward.quantity > 1){
          if(this.q_reward === 0){
            await this.realDeleteReward(reward.id)
            this.fetchReward()
          }
          else{
            await this.realDecressReward(reward.id , this.q_reward)
            this.fetchReward()
          }
        // }
        // else
        //   await RewardApiStore.dispatch("deleteReward",reward.id )
        // location.reload()
      }
      else{
        this.$swal("only Admin can do this")
      }
      

    },

    async realDeleteReward(id){
      await RewardApiStore.dispatch("deleteReward",id)
    },

    async DeleteReward(reward){
      if(this.user.roles === "admin"){
          // console.log("reward")
        // console.log(reward.quantity)
        // console.log(this.q_reward)
        // if(reward.quantity > 1){
          await this.realDeleteReward(reward.id)
          this.fetchReward()
        // }
        // else
          // await RewardApiStore.dispatch("deleteReward",reward.id )
        // location.reload()
      }
      else{
        this.$swal("only Admin can do this")
      }
    

    },

    async editReward() {
      let payload = {
        index: this.editIndex,
        id:this.form.id,
        name: this.form.name,
        point: this.form.point,
        quantity: this.form.quantity
      }
      console.log(payload)
      await RewardApiStore.dispatch("editReward", payload)
      this.closeForm()
      this.fetchReward()
      // location.reload()
    },
    // async deleteReward(reward) {
    // await RewardApiStore.dispatch("deleteReward",reward);
    // location.reload()
    // },
  },
}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

// h1,.totalpoint{
//     font-family: 'Sriracha', cursive;
// }

#color-th {
  font-size: 17px;
  margin: 40px;
  text-align: center;
  padding: 35px;
  color: #f5365c ;
  padding-left: 10px;
  padding-right: 10px;
}

#color-th:hover {
  text-shadow: 0 0 51px white; 
}

#td-font {
  font-size: 20px;
}

#td-font:hover, #td-font:active {
    font-size: 150%;
}

#bt-margin {
  margin: 5px;
  text-align: center;
}


</style>
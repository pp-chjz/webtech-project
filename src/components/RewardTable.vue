<template>
  <div>

    <div>
      <v-simple-table id="color-th" dark class="border">

        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">ชื่อรางวัล</th>
            <th id="color-th">จำนวนแต้มในการแลก</th>
            <th id="color-th">จำนวน</th>
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
              @click="openForm(index, reward)">
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
            pill variant="outline-danger">
            Exchange</b-button>

            <b-button id="bt-margin" 
            pill variant="outline-danger">
            ลบ</b-button>
            
          </tr>

        </tbody>
        
      </v-simple-table>
    </div>

  </div>
</template>

<script>
import RewardApiStore from "@/store/rewardApi"
export default {
  data() {
    return {
      rewards: [], 
      editIndex: -1,
      form: {
        id: "",
        name: "",
        point: "",
        quantity:""
      },
    }
  },

  created() {
    this.fetchReward()
  },

  methods: {
    async fetchReward() {
      await RewardApiStore.dispatch("fetchReward")
      this.rewards = RewardApiStore.getters.rewards
    },

    openForm(index, reward) {
      console.log("index", index)
      console.log("reward", reward)
      this.editIndex = index
      let cloned = JSON.parse(JSON.stringify(reward))
      this.form.id = cloned.id
      this.form.name = cloned.name
      this.form.point = cloned.point
      this.form.quantity = cloned.quantity
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
      location.reload()
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

h1,.totalpoint{
    font-family: 'Sriracha', cursive;
}

// .totalpoint{
//     margin-left: 60%;
// }

// .addnewreward{
//     margin-left: 60%;
//     margin-top: 5%;
// }

#color-th {
  font-size: 20px;
  margin: 40px;
  text-align: center;
  padding: 35px;
  color: #f5365c
}

#td-font {
  font-size: 20px;
}

#bt-margin {
  margin: 5px;
  text-align: center;
}


</style>
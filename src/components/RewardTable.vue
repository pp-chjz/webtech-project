<template>
    <div>
      <div>
    <table>
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>ชื่อรางวัล</th>
          <th>จำนวนแต้มในการแลก</th>
          <th>จำนวน</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reward, index) in rewards" :key="index">
          <td>{{ index + 1 }}</td>
          <td v-if="index !== editIndex">{{ reward.name }}</td>
          <td v-if="index === editIndex">
            <input type="text" v-model="form.name" />
          </td>

          <td v-if="index !== editIndex">{{ reward.point }}</td>
          <td v-if="index === editIndex">
            <input type="text" v-model="form.point" />
          </td>
          <td v-if="index !== editIndex">{{ reward.quantity }}</td>
          <td v-if="index === editIndex">
            <input type="text" v-model="form.quantity" />
          </td>

          <td v-if="index !== editIndex">
            <button @click="openForm(index, reward)">แก้ไข</button>
          </td>
          <td v-if="index === editIndex">
            <button @click="editReward">อัพเดต</button>
            <button @click="closeForm">ยกเลิก</button>
          </td>
          <!-- <button @click="deleteReward">ลบ</button> -->
         <button>ลบ</button>
        </tr>
      </tbody>
    </table>
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
    .totalpoint{
        margin-left: 60%;
    }
    .addnewreward{
        margin-left: 60%;
        margin-top: 5%;
    }
</style>
<template>
  <div>
    <div>
        <h1>รางวัล</h1>
        <h2 class="totalpoint"> คะแนนคงเหลือ</h2>
        </div>
        <div>
        <b-button v-b-toggle.sidebar-1>
        <b-icon icon="plus-circle" aria-hidden="true"></b-icon> เพิ่มรางวัลใหม่
        </b-button>
        <b-sidebar id="sidebar-1" title="เพิ่มรางวัล">
        <div class="px-3 py-2">

        <label>ชื่อรางวัล</label>
        <input type="text" v-model="form.name">
        <div>
        <label>จำนวนแต้ม</label>
        <input type="text" v-model="form.point">
        </div>
        <div>
        <label>จำนวน</label>
        <input type="text" v-model="form.quantity">
        </div>
        <b-form-file class="mt-3" plain></b-form-file>
        </div>
        <button @click="addReward">เพิ่ม</button>
        </b-sidebar>
        </div>
        <div>
        <b-button v-b-toggle.sidebar-right>
        <b-icon icon="clock-history" aria-hidden="true"></b-icon> ประวัติ
        </b-button>
        <b-sidebar id="sidebar-right" title="ประวัติ" right shadow>
        <div class="px-3 py-2">
        </div>
        </b-sidebar>
  </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/rewardApi"
export default {
  data() {
    return {
      form: {
        name: "",
        point: "",
        quantity: ""
      }
    }
  },
  methods: {
    clearForm() {
      this.form = {
        name: "",
        point: "",
        quantity: ""
      }
    },
    addReward() {
      let payload = {
        name: this.form.name,
        point: this.form.point,
        quantity: this.form.quantity
      }
      console.log(payload)
      RewardApiStore.dispatch("addReward", payload)
      this.clearForm()
    }
  }
}
</script>

<style></style>
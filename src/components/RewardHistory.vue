<template>
  <div>

    <div>
         <b-button v-b-toggle.sidebar-right class="button is-danger">
        <b-icon icon="clock-history" 
          aria-hidden="true"
          ></b-icon> 
          ประวัติ
      </b-button>
      <b-sidebar id="sidebar-right" bg-variant="dark" text-variant="danger" right shadow>
          <div class="px-3 py-2" id="color-label">
            // ใส่ id="color-label" ใน label ด้วย 
        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">แต้มที่ได้รับ</th>
            <th id="color-th">แต้มที่ใช้</th>
          </tr>
        </thead>

        <tbody >
          <tr v-for="(history, index) in histories" :key="index" >
            <td id="td-font">{{ index + 1 }}</td>
            <td id="td-font">{{ history.receive_point }}</td>
            <td id="td-font">{{ history.use_point }}</td>
        </tr>
        </tbody>
          </div>
      </b-sidebar>
    </div>

  </div>
</template>

<script>
import HistoryApiStore from "@/store/historyApi"
export default {
  data() {
    return {
      histories: [], 
      editIndex: -1,
      form: {
        id: "",
        receive_point: "",
        use_point: "",
      },
    }
  },

  created() {
    this.fetchHistory()
  },

  methods: {
    async fetchHistory() {
      await HistoryApiStore.dispatch("fetchHistory")
      this.histories = HistoryApiStore.getters.histories
    },
  
  },
}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

h1,.totalpoint{
    font-family: 'Sriracha', cursive;
}

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
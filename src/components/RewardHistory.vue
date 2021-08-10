<template>
  <div>

    <div>
        <b-button @click="goBack()" id="back" variant="outline-danger" href="">Back</b-button>

        <!-- <b-button v-b-toggle.sidebar-right class="button is-danger">
          <b-icon icon="clock-history" 
            aria-hidden="true"
            ></b-icon> 
          ประวัติ
        </b-button> -->

        <!-- <b-sidebar id="sidebar-right" bg-variant="dark" text-variant="danger" right shadow width="500px"> -->
          <div class="px-3 py-2" id="color-label">
            <v-simple-table 
              id="table-his"
              fixed-header
              height="720px">
              <thead >
                <tr>
                  <th id="color-th">ลำดับ</th>
                  <th id="color-th">แต้มที่ได้รับ</th>
                  <th id="color-th">แต้มที่ใช้</th>
                  <th id="color-th">รายการ</th>
                </tr>
              </thead>

              <tbody >
                <tr v-for="(history, index) in histories" :key="index" >
                  <td id="td-font">{{ index + 1 }}</td>
                  <td id="td-font">{{ history.receive_point }}</td>
                  <td id="td-font">{{ history.use_point }}</td>
                  <td id="td-font"> {{ history.help }} </td>
                </tr>
              </tbody>

            </v-simple-table>
          </div>
        <!-- </b-sidebar> -->

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

    goBack(){
        this.$router.push('/reward')
    }
  
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
  text-shadow: 0 0 61px black; 
}

#td-font {
  font-size: 17px;
  color: #f5365c ;
}

#table-his:hover {
  box-shadow: 0 0 21px #f5365c; 
}

#td-font:hover, #td-font:active {
    font-size: 150%;
}

#bt-margin {
  margin: 5px;
  text-align: center;
}


</style>
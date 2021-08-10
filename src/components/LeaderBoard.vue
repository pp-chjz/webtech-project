<template>
  <div class="frame">
    <b-button @click="goReward()" id="Reward" variant="outline-danger" href="">รางวัล</b-button>
    <b-button @click="logout()" id="logout" variant="outline-danger" href="">ออกจากระบบ</b-button>

    
        <!-- <div class="receive"> -->

      <!-- <h3 id="margin-10px">เลือก</h3> -->
      
      <!-- <div>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">More Receive</label>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">Less Receive</label>
      </div> -->

      <!-- <div>
        <label id="margin-10px">startsearch:</label>
        <input type="date" id="datestartreceive" name="date">
        <label id="margin-10px">endsearch:</label>
        <input type="date" id="dateendrecieve" name="date">
      </div> -->

      <!-- <button @click="searchR()">Search</button> -->

      <!-- <b-button variant="outline-primary">
      <b-icon icon="search"></b-icon> Search
      </b-button> -->

    <!-- </div> -->

    <h2>บอร์ดคะแนน</h2>

    <!-- <b-button @click="goReward()" squared variant="outline-primary">Reward</b-button>
    <b-button @click="logout()" squared variant="outline-danger">Logout</b-button> -->
    <h3>ตารางการใช้แต้ม</h3>

      <v-simple-table 
        id="table-board" 
        class="border"
        dark
        fixed-header
        height="700px">
        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">ชื่อ</th>
            <th id="color-th">username</th>
            <th id="color-th">Point ที่ใช้</th>
            <th id="color-th">Point ที่รับ</th>
            <th id="color-th">รายการ</th>
            <th id="color-th">ของรางวัล</th>
            <th id="color-th">เวลา</th>
          </tr>
        </thead>

        <tbody>
      
          <tr v-for="(history, index) in use_histories" :key="index" >
            <td id="td-font">{{ index+1 }}</td>
            <td id="td-font">{{ history.user_name }}</td>
            <td id="td-font">{{ history.username }}</td>
            <td id="td-font">{{ history.use_point }}</td>
            <td id="td-font">{{ history.receive_point }}</td>
            <td id="td-font">{{ history.reward }}</td>
            <td id="td-font">{{ history.help }}</td>
            <td id="td-font">{{ history.time_text }}</td>
          </tr>
          <!-- <tr v-for="(user, index)in users" :key="index" >
            <td id="td-font">{{ index+1 }}</td>
            <td id="td-font">{{ user.name }}</td>
            <td id="td-font">{{ user.point }}</td>
          </tr> -->
        </tbody>
      </v-simple-table>


    <h3>ตารางการได้แต้ม</h3>
      <v-simple-table 
        id="table-board" 
        dark
        class="border"
        fixed-header
        height="700px">
        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">ชื่อ</th>
            <th id="color-th">username</th>
            <th id="color-th">Point ที่ใช้</th>
            <th id="color-th">Point ที่รับ</th>
            <th id="color-th">รายการ</th>
            <th id="color-th">ของรางวัล</th>
            <th id="color-th">เวลา</th>
          </tr>
        </thead>

        <tbody>
      
          <tr v-for="(history, index) in get_histories" :key="index" >
            <td id="td-font">{{ index+1 }}</td>
            <td id="td-font">{{ history.user_name }}</td>
            <td id="td-font">{{ history.username }}</td>
            <td id="td-font">{{ history.use_point }}</td>
            <td id="td-font">{{ history.receive_point }}</td>
            <td id="td-font">{{ history.help }}</td>
            <td id="td-font">{{ history.reward }}</td>
            <td id="td-font">{{ history.time_text }}</td>
          </tr>

          <!-- <tr v-for="(user, index)in users" :key="index" >
            <td id="td-font">{{ index+1 }}</td>
            <td id="td-font">{{ user.name }}</td>
            <td id="td-font">{{ user.point }}</td>
          </tr> -->
        <!-- </tbody>
      </v-simple-table> -->


<!-- 
    <div class="use">
    
      <h3 id="margin-10px">Use Point</h3> -->

      <!-- <div>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">More Use</label>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">Less Use</label>
      </div> -->

      <!-- <div>
        <label id="margin-10px">startsearch:</label>
        <input type="date" id="datestartuse" name="date">
        <label id="margin-10px">endsearch:</label>
        <input type="date" id="dateenduse" name="date">
      </div>

      <button @click="searchU()">Search</button>

      <b-button variant="outline-primary">
        <b-icon @click="searchU()" icon="search"></b-icon> Search
      </b-button>

    </div> -->

    <!-- <v-simple-table 
        id="table-board" 
        class="border"
        fixed-header
        height="750px">
        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">ชื่อ</th>
            <th id="color-th">คะแนน</th>
          </tr>
        </thead> -->

        <!-- <tbody>
      
          <tr v-for="(user, index)in users" :key="index" >
            <td id="td-font"></td>
            <td id="td-font"></td>
            <td id="td-font"></td> -->
          <!-- </tr> -->
          <!-- <tr v-for="(user, index)in users" :key="index" >
            <td id="td-font">{{ index+1 }}</td>
            <td id="td-font">{{ user.name }}</td>
            <td id="td-font">{{ user.point }}</td>
          </tr> -->
        
        </tbody>
      </v-simple-table>

  </div>
</template>
<script>
import HistoryApiStore from "@/store/historyApi"
export default {
  data(){
    return{
      histories:[],
      use_histories:[],
      get_histories:[]
    }
  },
  async created() {
    await this.fetchHistory()
    await this.fetchUseHistory()
    await this.fetchGetHistory()
    console.log(this.get_histories)
  },
  methods:{
    async fetchHistory() {
      await HistoryApiStore.dispatch("fetchHistory")
      this.histories = HistoryApiStore.getters.histories
    },
    async fetchUseHistory() {
      await HistoryApiStore.dispatch("fetchUseHistory")
      this.use_histories = HistoryApiStore.getters.use_histories
    },
    async fetchGetHistory() {
      await HistoryApiStore.dispatch("fetchGetHistory")
      this.get_histories = HistoryApiStore.getters.get_histories
    },
    searchR(){
      console.log("test")
      console.log(document.getElementById("datestartreceive").value)
      console.log(document.getElementById("dateendrecieve").value)
    },
    goReward(){
      this.$router.push('/reward')
    },

    logout(){
      this.$router.push('/')
    },

    search(){
      console.log(1111111);
    }
  }
}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

.frame{
  margin: 5px;
}

#Reward {
  float: left;
}

#logout{
  float: right;
}

.receive, .use{
  margin-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
}

#td-font:hover, #td-font:active {
    font-size: 150%;
}

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
  text-shadow: 0 0 51px black; 
}

h3 {
  color: #f5365c ;
  margin-top: 40px;
  margin-bottom: 40px;
  text-decoration-line: underline;
}

#td-font {
  font-size: 17px;
  color: #f5365c ;
}

#margin-10px {
  margin: 10px;
  color: #f5365c;

}

h2 {
   color: #f5365c;
   text-decoration-line: underline overline;
}

#table-board {
  margin-bottom: 25px;
}

#table-board:hover {
  box-shadow: 0 0 21px #f5365c; 
}
</style>
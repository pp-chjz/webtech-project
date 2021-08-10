<template>
  <div class="frame">
    <b-button @click="goReward()" id="Reward" variant="outline-danger" href="">รางวัล</b-button>
    <b-button @click="logout()" id="logout" variant="outline-danger" href="">ออกจากระบบ</b-button>

    <h2>บอร์ดคะแนน</h2>

    <div class="receive">

      <h3 id="margin-10px">Receive Point</h3>
      
      <div>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">More Receive</label>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">Less Receive</label>
      </div>

      <div>
        <label id="margin-10px">startsearch:</label>
        <input type="date" id="datestartreceive" name="date">
        <label id="margin-10px">endsearch:</label>
        <input type="date" id="dateendrecieve" name="date">
      </div>

      <button @click="search()" class="button is-danger">search</button>

    </div>

    <div class="use">
    
      <h3 id="margin-10px">Use Point</h3>

      <div>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">More Use</label>
      <input id="margin-10px" type="radio" name="category">
      <label id="margin-10px">Less Use</label>
      </div>

      <div>
        <label id="margin-10px">startsearch:</label>
        <input type="date" id="datestartuse" name="date">
        <label id="margin-10px">endsearch:</label>
        <input type="date" id="dateenduse" name="date">
      </div>

      <button @click="search()" class="button is-danger">search</button>

    </div>

    <v-simple-table 
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
        </thead>

        <tbody>
      
          <!-- <tr v-for="(user, index)in users" :key="index" > -->
            <td id="td-font"></td>
            <td id="td-font"></td>
            <td id="td-font"></td>
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
// import AuthService from "@/services/AuthService"
export default {
  // data(){
  //   return{
  //     form:{
  //       name: '',
  //       point:''
  //     }
  //   }
  // },
  // created() {
  //   this.fetchUser()
  // },

  // methods:{
  //   async fetchUser() {
  //     await HistoryApiStore.dispatch("fetchUser")
  //     this.users= AuthService.getters.users
  //   },
  // },
  methods:{
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
  padding-left: 8%;
  margin-bottom: 30px;
}

#table-board {
  margin-bottom: 25px;
}

#table-board:hover {
  box-shadow: 0 0 21px #f5365c; 
}
</style>
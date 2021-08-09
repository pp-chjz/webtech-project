<template>
  <div>

    <h1>Point</h1>
    <b-button @click="goReward()" squared variant="outline-primary">Reward</b-button>
    <b-button @click="logout()" squared variant="outline-danger">Logout</b-button>
      <v-simple-table 
        id="color-th" 
        class="border"
        fixed-header
        height="700px">
        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">ชื่อ</th>
            <th id="color-th">Point</th>
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

      <b-button variant="outline-primary">
      <b-icon icon="search"></b-icon> Search
      </b-button>

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

      <b-button variant="outline-primary">
        <b-icon icon="search"></b-icon> Search
      </b-button>

    </div>

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
    }
  }
}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

      
.receive, .use{
  margin-left: 70%;
  margin-bottom: 5%;
  margin-top: -25%;
}

#color-th {
  font-size: 25px;
  margin: 30px;
  margin-right: 30%;
  text-align: center;
  padding: 30px;
  color: #f5365c;
}

#td-font {
  font-size: 20px;
}

#margin-10px {
  margin: 10px;
  color: #f5365c;

}

h1 {
  color: #f5365c;
}
</style>
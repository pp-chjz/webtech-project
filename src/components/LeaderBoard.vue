<template>
  <div>

    <h1>Point</h1>

      <v-simple-table 
        id="color-th" 
        class="border"
        fixed-header
        height="700px">
        <thead>
          <tr>
            <th id="color-th">ลำดับ</th>
            <th id="color-th">ชื่อ</th>
            <th id="color-th">นามสกุล</th>
            <th id="color-th">Point</th>
            <th id="color-th">Reward</th>
            <th id="color-th">History</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="index in 0" :key="index" >
            <td id="td-font">{{ index }}</td>
            <td id="td-font">ชื่อ</td>
            <td id="td-font">สกุล</td>
            <td id="td-font">Point</td>
            <td id="td-font">Reward</td>
            <td id="td-font">History</td>
          </tr>
        </tbody>
      </v-simple-table>

    <div class="receive">

      <h3 id="margin-10px">Receive Point</h3>
      
      <div>
      <input id="margin-10px" type="radio" name="category" v-model="form.morereceive" >
      <label id="margin-10px">More Receive</label>
      <input id="margin-10px" type="radio" name="category" v-model="form.lessreceive" >
      <label id="margin-10px">Less Receive</label>
      </div>

      <div>
        <label id="margin-10px">startsearch:</label>
        <input type="date" id="datestartreceive" name="date" v-model="form.datestartreceive">
        <label id="margin-10px">endsearch:</label>
        <input type="date" id="dateendrecieve" name="date" v-model="form.dateendreceive">
      </div>

      <b-button @click="searchForm" variant="outline-primary">
      <b-icon icon="search"></b-icon> Search
      </b-button>

    </div>

    <div class="use">
    
      <h3 id="margin-10px">Use Point</h3>

      <div>
      <input id="margin-10px" type="radio" name="category" v-model="form.moreuse">
      <label id="margin-10px">More Use</label>
      <input id="margin-10px" type="radio" name="category" v-model="form.lessuse">
      <label id="margin-10px">Less Use</label>
      </div>

      <div>
        <label id="margin-10px">startsearch:</label>
        <input type="date" id="datestartuse" name="date" v-model="form.datestartuse">
        <label id="margin-10px">endsearch:</label>
        <input type="date" id="dateenduse" name="date" v-model="form.dareenduse">
      </div>

      <b-button @click="searchForm" variant="outline-primary">
        <b-icon icon="search"></b-icon> Search
      </b-button>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
      morereceive:"",
      lessreceive:"",
      datestartreceive:"",
      dateendreceive:"",
      morereceive:"",
      lessreceive:"",
      datestartreceive:"",
      dateendreceive:"",
      }
    }
  },
  
    methods:{
      clearForm(){
        this.form={
        morereceive:"",
        lessreceive:"",
        datestartreceive:"",
        dateendreceive:"",
        moreuse:"",
        lessuse:"",
        datestartuse:"",
        dareenduse:""
       }
      },
      searchForm(){
        this.clearForm()
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
<template>
  <div>
    <h1>Point</h1>
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Point</th>
          <th>Reward</th>
          <th>History</th>
        </tr>
      </thead>
        </table>
    <div class="receive">
      <h3>Receive Point</h3>
      <input type="radio" name="category" v-model="form.morereceive" >
      <label>More Receive</label>
      <input type="radio" name="category" v-model="form.lessreceive" >
      <label>Less Receive</label>
      <div>
        <label>startsearch</label>
        <input type="date" id="datestartreceive" name="date" v-model="form.datestartreceive">
        <label>endsearch</label>
        <input type="date" id="dateendrecieve" name="date" v-model="form.dateendreceive">
      </div>
        <b-button @click="searchForm" variant="outline-primary">
        <b-icon icon="search"></b-icon> Search
        </b-button>
    </div>
    <div class="use">
        <h3>Use Point</h3>
        <input type="radio" name="category" v-model="form.moreuse">
        <label>More Use</label>
        <input type="radio" name="category" v-model="form.lessuse">
        <label>Less Use</label>
      <div>
        <label>startsearch</label>
        <input type="date" id="datestartuse" name="date" v-model="form.datestartuse">
        <label> endsearch</label>
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
    h1{
        font-family: 'Sriracha', cursive;
    }
    table{
        margin-left: 35%;
        background-color: aquamarine;
    }
    th{
        font-family: 'Sriracha', cursive;
    }
    .receive,.use{
        margin-left: 60%;
        margin-bottom: 5%;
    }

</style>
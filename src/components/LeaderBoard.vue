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
        <input type="radio" name="category" >
        <label>More Receive</label>
        <input type="radio" name="category" >
        <label>Less Receive</label>

        <div>
        <label for="date">startsearch</label>
        <input type="date" id="datestartreceive" name="date">
        <label for="date">endsearch</label>
        <input type="date" id="dateendrecieve" name="date">
        </div>
    </div>
    <div class="use">
        <h3>Use Point</h3>
        <input type="radio" name="category" >
        <label>More Use</label>
        <input type="radio" name="category" >
        <label>Less Use</label>
    <div>
        <label for="date">startsearch</label>
        <input type="date" id="datestartuse" name="date">
        <label for="date">endsearch</label>
        <input type="date" id="dateenduse" name="date">
    </div>
    </div>
  </div>
</template>
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
<template>
    <div class="frame">
    <b-button id="log-out" variant="outline-danger" href="">Log Out</b-button>
    <b-button id="post" variant="outline-danger" href="">Post</b-button>
    <h2>กระทู้ข้อความช่วยเหลือ</h2>

        <div class="all-thread" > 
            <span class="card"  v-for="index in form" :key="index.id">
                <form>
                    <p>ชื่อเจ้าของกระทู้: {{ index.user }}</p>
                    <p>เรื่อง: {{ index.topic}}</p>
                    <p>รายละเอียด: {{ index.text }}</p>
                    <p>ระดับความสำคัญ: {{ index.priority }}</p>
                </form>

                <button id="mp" class="button is-danger">ช่วยเหลือ</button>

            </span>
        </div>

    <h2>กระทู้ของฉัน</h2>
        <div class="my-thread"> 
            <span class="card" v-for="index in 1" :key="index.id">
                <form>
                    <p>ชื่อเจ้าของกระทู้: </p>
                    <p >เรื่อง: </p>
                    <p>รายละเอียด: </p>
                    <p>ระดับความสำคัญ: </p>
                </form>

                <button id="mp" class="button is-danger">แก้ไข</button>
                <button id="mp" class="button is-danger">ลบ</button>
            </span>
        </div>

    </div>
</template>

<script>
  export default {
    data() {
        return {
            form: [
                // แก้การ show data ของ กระทู้ทั้งหมด และ กระทู้ของ user
                {
                    user: 'Dew',
                    topic: 'เหงา',
                    text: 'หาแฟนให้ที',
                    priority: 'ด่วน',
                    status: false
                },
                {
                    user: 'PP',
                    topic: 'สอบ os',
                    text: 'มาติว os ก่อนสอบวันนึงหน่อย',
                    priority: 'ปกติ',
                    status: false
                },
                {
                    user: 'Lin',
                    topic: 'โปรเจค web',
                    text: 'ทำไม่ทันแล้วเว้ยยยยยยยย',
                    priority: 'ด่วนมาก',
                    status: false
                }
            ]
        }
    }
  }
</script>

<style >
.frame{
    padding-right: 20px;
    padding-left: 20px;
}

h2 {
   color: hsl(348, 86%, 43%);
}

p {
    font-size: 17px;
}

span.card {
    color: hsl(348, 86%, 43%);
    width: 350px;
    height: auto;
    display: inline-flex;
    margin: 20px;
    padding-top: 25px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: black 2px 2px;
}

.all-thread , .my-thread {
    padding: 35px 40px;
    margin: 10px;
}

.all-thread .card, .my-thread .card {
    background : hsl(347, 90%, 96%);
}

#mp {
    margin-bottom: 10px;
    margin: 10px;
}

#log-out {
    float: right;
}

#post {
    float: left;
}

</style>
<template>
    <div>
        <div>
        <h1>Reward</h1>
        <h2 class="totalpoint"> Total Point : </h2>
        <b-button @click="addreward" variant="outline-info" class="addnewreward">
        <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
        <b-link href="/newreward"> Add new reward</b-link>
        </b-button>
        </div>
        <div>
            <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
            <b-card-text>
            Gold
            </b-card-text>

            <b-button variant="primary">
            <b-icon icon="cart-plus" aria-hidden="true"></b-icon> Buy
            </b-button>

            <b-button variant="primary">
            <b-icon icon="cart-plus" aria-hidden="true"></b-icon> Edit
            </b-button>
            </b-card>
    </div>
        </div>
</template>
<script>
export default {
    methods:{
        
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');
    h1,.totalpoint{
        font-family: 'Sriracha', cursive;
    }
    .totalpoint{
        margin-left: 60%;
    }
    .addnewreward{
        margin-left: 60%;
        margin-top: 5%;
    }
</style>
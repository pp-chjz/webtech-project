<template>
  <div>
      Sign Up Form
        <b-container fluid>
            <b-row class="my-1" v-for="type in types" :key="type">
            <b-col sm="3">
                <label :for="`type-${type}`"><code>{{ type }}</code>:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input :id="`type-${type}`" :type="type" ></b-form-input>
            </b-col>
            </b-row>
        </b-container>
        <b-button variant="info">Create an Account</b-button>


  </div>
</template>

<script>
export default {
    data() {
      return {
        types: [
          'Username',
          'password',
          'Email',
          'Line',
          'Facebook',
          'Tel'
        ]
      }
    }
}
</script>

<style>
.lb-ip-20{
    margin-block: 20px;
}
</style>
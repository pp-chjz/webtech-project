<template>
  <div>
    <div class = "addnewreward">
    <label>Discription </label>
    <input type="text">
    </div>
    <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file2: null
      }
    }
  }
</script>
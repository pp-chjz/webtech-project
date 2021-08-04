<template>
  
</template>

<script>

import AuthService from "@/services/AuthService"

export default {
    mounted(){
        AuthService.logout()
            this.$router.push('/')
        }
}

</script>

<style>

</style>
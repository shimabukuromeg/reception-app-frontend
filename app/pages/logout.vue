<template>
  <div class="app flex-row align-items-center">
    <div class="container">
    </div>
  </div>
</template>

<script>
  import Cookies from 'universal-cookie'
  export default {
    mounted () {
      this.$store.dispatch('user/logout')
      const cookies = new Cookies()
      cookies.remove('currentUser')
      cookies.remove('accessToken')
      this.$router.replace('/login')
    },
  }
</script>

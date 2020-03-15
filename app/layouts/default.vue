<template>
  <div>
    <TheHeader />
    <div class="wrapper" style="padding-top: 20px">
      <nuxt class="container" />
    </div>
  </div>
</template>

<script>
  import TheHeader from '~/components/TheHeader.vue'

  export default {
    components: {
      TheHeader
    }
  }
</script>

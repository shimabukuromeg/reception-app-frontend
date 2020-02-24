<template>
  <section class="container">
    <div style="text-align: center;">
      <div class="block" style="padding: 50px">
        <el-image src="/1yRhwqQy7.png" style="width: 30%"></el-image>
      </div>
      <h1 class="check-in">チェックインする</h1>
      <el-button>キャンセル</el-button>
      <el-button type="primary">チェックイン</el-button>
      <p class="check-in">{{ time }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        body: '',
        time: null,
      }
    },
    async mounted() {
      console.log(process.env.API_BASE_URL)
      const response = await this.$axios.$get('/api/sample');
      this.body = response.body;
      this.time = response.time;
      console.log(response.time)
    }
  }
</script>

<style scoped>
  .check-in {
    color: #909399;
  }
</style>

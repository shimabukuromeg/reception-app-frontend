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
  import axios from '~/plugins/axios'

  export default {
    data() {
      return {
        body: '',
        time: null,
      }
    },
    async mounted() {
      console.log('-----------------')
      console.log(process.env.API_URL);
      const response = await axios.get('/api/sample');
      console.log(response.data)
      this.body = response.data.body;
      this.time = response.data.time;
      console.log(response.data.time)
    }
  }
</script>

<style scoped>
  .check-in {
    color: #909399;
  }
</style>

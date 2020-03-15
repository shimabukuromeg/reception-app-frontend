<template>
  <section class="container">
    <div style="text-align: center;">
      <div class="block" style="padding: 50px">
        <el-image src="/1yRhwqQy7.png" style="width: 30%"></el-image>
      </div>
      <h1 class="check-in">チェックインする</h1>

      <el-button type="primary" @click="centerDialogVisible = true">チェックイン</el-button>

      <el-dialog
        title="チェックイン"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="何をしていますか？"
          v-model="textarea">
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">キャンセル</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">チェックイン</el-button>
        </span>
      </el-dialog>

      <p class="check-in">{{ time }}</p>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data() {
      return {
        centerDialogVisible: false,
        textarea: '',
        body: '',
        time: null,
      }
    },
    async mounted() {
      const response = await axios.get('/api/sample');
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

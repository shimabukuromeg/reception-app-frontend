<template>
  <section class="container">
    <div style="text-align: center;">
      <div class="block" style="padding: 50px">
        <el-image src="/1yRhwqQy7.png" style="width: 30%"></el-image>
      </div>
      <h1 class="check-in">チェックインする</h1>

      <el-button type="primary" @click="centerDialogVisible = true">チェックイン</el-button>

      <el-dialog
        title="何をしていますか？"
        :visible.sync="centerDialogVisible"
        width="80%"
        center>

        <div style="padding-top: 10px">
          <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false" style="margin-bottom: 5px">キャンセル</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">チェックイン</el-button>
        </span>
      </el-dialog>

      <p class="check-in">{{ time }}</p>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  const cityOptions = ['イベント', '勉強', '仕事', 'そのほか'];

  export default {
    data() {
      return {
        centerDialogVisible: false,
        textarea: '',
        body: '',
        time: null,
        checkboxGroup1: ['Shanghai'],
        cities: cityOptions
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

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
          <el-checkbox-group v-model="checkedCheckInCategories">
            <el-checkbox-button v-for="checkInCategory in checkInCategories" :label="checkInCategory" :key="checkInCategory.id">{{checkInCategory.name}}</el-checkbox-button>
          </el-checkbox-group>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false" style="margin-bottom: 5px">キャンセル</el-button>
          <el-button type="primary" @click="checkIn">チェックイン</el-button>
        </span>
      </el-dialog>

      <p class="check-in">{{ time }}</p>
    </div>
  </section>
</template>

<script>
  import { mapActions } from "vuex";

  const checkInCategories = [
    {
      "id": 1,
      "name": "イベント"
    },
    {
      "id": 2,
      "name": "勉強"
    },
    {
      "id": 3,
      "name": "仕事"
    },
    {
      "id": 4,
      "name": "そのほか"
    },
  ];

  export default {
    data() {
      return {
        centerDialogVisible: false,
        textarea: '',
        body: '',
        time: null,
        checkedCheckInCategories: [],
        checkInCategories: checkInCategories,
      }
    },
    methods: {
      async checkIn() {
        try {
          const checkedCheckInCategoryIds = {
            "checkin_category_ids": this.checkedCheckInCategories.map((value) => value.id)
          }
          await this.checkInPost(checkedCheckInCategoryIds)
          this.$notify({
            type: 'success',
            title: 'チェックイン完了',
            message: 'チェックインしました',
            position: 'bottom-right',
            duration: 1000,
          })
          this.$router.push('/entries')

        } catch (e) {
          this.$notify.error({
            title: 'チェックイン失敗',
            message: 'チェックインに失敗しました',
            position: 'botom-right',
            duration: 1000
          })
        }
      },
      ...mapActions('checkins', ['checkInPost']),
    },
    async mounted() {
      const response = await this.$axios.get('/api/sample');
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

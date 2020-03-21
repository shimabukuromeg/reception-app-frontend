<template>
  <section class="container posts-page">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <span>新着チェックイン</span>
      </div>

      <el-table
        :data="showCheckIns"
        style="width: 100%"
        class="table"
      >
        <el-table-column
          prop="created_at"
          label="チェックイン日時"
          width="240">
        </el-table-column>
        <el-table-column
          prop="user.name"
          label="利用者">
        </el-table-column>
      </el-table>

    </el-card>
  </section>
</template>

<script>
  import moment from '~/plugins/moment'
  export default {
    data (){
      return {
        checkIns: [],
      }
    },
    computed: {
      showCheckIns(){
        return this.checkIns.map(checkIn => {
          checkIn.created_at = moment(checkIn.created_at).format('YYYY/MM/DD HH:mm:ss')
          return checkIn
        })
      },
    },
    methods: {
      handleClick(post){
        this.$router.push(`/entries/${checkIn.id}`)
      }
    },
    async mounted() {
      this.$nextTick(() => this.$nuxt.$loading.start())
      try {
        this.checkIns = await this.$axios.$get(`/api/v1/checkins`)
      } catch (e) {
        console.log(e.message)
      } finally {
        this.$nuxt.$loading.finish()
      }
    }
  }
</script>

<style>
  .posts-page .el-table__row {
    cursor: pointer;
  }
</style>

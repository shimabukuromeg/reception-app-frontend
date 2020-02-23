<template>
  <section class="container posts-page">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <span>新着チェックイン</span>
      </div>

      <el-table
        :data="showEntries"
        style="width: 100%"
        class="table"
      >
        <el-table-column
          prop="created_at"
          label="チェックイン日時"
          width="240">
        </el-table-column>
        <el-table-column
          prop="user"
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
        entries: [
          {
            user: "太郎A",
            created_at: "2019/07/28 16:02:28"
          },
          {
            user: "太郎B",
            created_at: "2019/08/28 16:02:28"
          },
          {
            user: "太郎C",
            created_at: "2019/09/28 16:02:28"
          },
          {
            user: "太郎D",
            created_at: "2019/10/28 16:02:28"
          },

        ],
      }
    },
    computed: {
      showEntries(){
        return this.entries.map(entry => {
          entry.created_at = moment(entry.created_at).format('YYYY/MM/DD HH:mm:ss')
          return entry
        })
      },
    },
    methods: {
      handleClick(post){
        this.$router.push(`/entries/${entry.id}`)
      }
    }
  }
</script>

<style>
  .posts-page .el-table__row {
    cursor: pointer;
  }
</style>

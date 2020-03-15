<template>
  <div>
    <el-row v-if="true">
      <el-col :span="6">
        <el-card class="text-center" style="margin-right: 16px;">
          <div>
            <img src='/img/150x150.png'
                 style="width: 100%;margin-bottom: 16px;border-radius: 2px;"
                 alt=""
            />
          </div>
          <h2>
            <b>
              {{ currentUser.name }}
            </b>
          </h2>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <div slot="header" class="clearfix">
            <span>{{ currentUser.name }} さんのチェックイン</span>
          </div>
          <el-table
            :data="userPosts"
            style="width: 100%"
            class="table"
          >
            <el-table-column
              prop="created_at"
              label="チェックイン日時"
            />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import moment from '~/plugins/moment'
  import {mapGetters} from "vuex";
  export default {
    data (){
      return {
        userPosts: [
          {
            created_at: "2019/07/28 16:02:28"
          },
          {
            created_at: "2019/08/28 16:02:28"
          },
          {
            created_at: "2019/09/28 16:02:28"
          },
          {
            created_at: "2019/10/28 16:02:28"
          },

        ],
      }
    },
    computed: {
      ...mapGetters('user', ['currentUser']),
    },
    methods: {
    }
  }
</script>

<style>
  .posts-page .el-table__row {
    cursor: pointer;
  }
</style>

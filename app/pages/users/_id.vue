<template>
  <div>
    <el-row v-if="user">
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
              {{ user.name }}
            </b>
          </h2>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <div slot="header" class="clearfix">
            <span>{{ user.name }} さんのチェックイン</span>
          </div>
          <el-table
            :data="showUserCheckIns"
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
  import { mapGetters } from "vuex";
  export default {
    async asyncData({store, route, error}) {
      if (!store.getters['user/isAuthenticated']) {
        this.$router.push('/login');
      }
      const {id} = route.params
      try {
        await store.dispatch('user/fetchUser', {id})
      } catch (e) {
        error({statusCode: 404})
      }
      return {
        userCheckIns: [],
      }
    },
    computed: {
      showUserCheckIns(){
        return this.userCheckIns.map(userCheckIn => {
          userCheckIn.created_at = moment(userCheckIn.created_at).format('YYYY/MM/DD HH:mm:ss')
          return userCheckIn
        })
      },
      user(){
        const user = this.users.find(({ id }) => id == this.$route.params.id)
        if(!user) return null
        return user
      },
      ...mapGetters('user', ['currentUser', 'isAuthenticated', 'users']),
    },
    methods: {
    },
    async mounted() {
      this.userCheckIns = await this.$axios.$get('/api/v1/checkins', {
        params: {
          user_id: this.$route.params.id
        }
      });
    }
  }
</script>

<style>
  .posts-page .el-table__row {
    cursor: pointer;
  }
</style>

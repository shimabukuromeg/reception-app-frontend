<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" :route="{ path: '/' }">
      受付アプリ
    </el-menu-item>
    <el-menu-item index="2" :route="{ path: '/entries' }">
      新着チェックイン
    </el-menu-item>

    <no-ssr>
      <el-menu-item index="4" style="float: right;" :route="{ path: `/users/${currentUser.id}` }" v-if="currentUser">
        <span>{{ currentUser.name }}</span>
      </el-menu-item>
      <el-menu-item index="4" style="float: right;" :route="{ path: '/login' }" v-else>
        <span>ログイン</span>
      </el-menu-item>
    </no-ssr>

  </el-menu>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    methods: {
      logout () {
        this.$router.replace('/logout')
      },
    },
    computed: {
      ...mapGetters('user', ['currentUser']),
    }

  }
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

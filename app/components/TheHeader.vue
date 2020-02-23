<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" :route="{ path: '/' }">
      受付アプリ
    </el-menu-item>
    <el-menu-item index="2" :route="{ path: '/entries' }">
      新着チェックイン
    </el-menu-item>

    <no-ssr>
      <el-menu-item index="4" style="float: right;" :route="{ path: '/login' }">
        <span>ログイン</span>
      </el-menu-item>
    </no-ssr>
  </el-menu>
</template>


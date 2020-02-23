<template>
  <section class="container">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <span>ログイン</span>
      </div>
      <form>
        <div class="form-content" v-show="isCreateMode">
          <span>名前</span>
          <el-input placeholder="" v-model="formData.name"/>
        </div>
        <div class="form-content">
          <span>メールアドレス</span>
          <el-input placeholder="" v-model="formData.email"/>
        </div>
        <div class="form-content">
          <span>パスワード</span>
          <el-input placeholder="" v-model="formData.password"/>
        </div>
        <div class="form-content">
          <el-checkbox v-model="isCreateMode">アカウントを作成する</el-checkbox>
        </div>
        <div class="text-right">
          <el-button type="primary" @click="handleClickSubmit">{{buttonText}}</el-button>
        </div>
      </form>
    </el-card>
  </section>
</template>

<script>

  export default {
    data (){
      return {
        isCreateMode: false,
        formData: {
          name: '',
          email: '',
          password: '',
        }
      }
    },
    computed: {
      buttonText() {
        return this.isCreateMode ? '新規登録' : 'ログイン'
      },
    },
    methods: {
      async handleClickSubmit() {

      }
    }
  }
</script>

<style scoped>
  .form-content {
    margin: 16px 0;
  }
</style>

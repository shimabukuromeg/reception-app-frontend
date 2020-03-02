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
          <el-button type="primary" @click="handleClickSubmit">{{ buttonText}}</el-button>
        </div>
      </form>
    </el-card>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Cookies from 'universal-cookie'

  export default {
    data() {
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
      ...mapGetters('user', ['currentUser'])
    },
    methods: {
      ...mapActions('user', ['signUp', 'login']),
      async handleClickSubmit() {
        const cookies = new Cookies()
        if (this.isCreateMode) {
          try {
            await this.signUp(this.formData)
            this.$notify({
              type: 'success',
              title: 'アカウント作成完了',
              message: `${this.formData.name} として登録しました`,
              position: 'bottom-right',
              duration: 1000,
            })
            cookies.set('currentUser', JSON.stringify(this.currentUser))
            await this.$router.push('/')
          } catch (e) {
            console.log(e)
            this.$notify({
              title: 'アカウント作成失敗',
              message: 'すでに登録されてるか、不正なユーザーです',
              position: 'bottom-right',
              duration: 1000,
            })
          }
        } else {
          try {
            await this.login(this.formData)
            this.$notify({
              type: 'success',
              title: 'ログイン成功',
              message: `${this.formData.name} としてログインしました`,
              position: 'bottom-right',
              duration: 1000,
            })
            cookies.set('currentUser', JSON.stringify(this.currentUser))
            await this.$router.push('/')
          } catch (e) {
            this.$notify({
              title: 'ログイン失敗',
              message: '不正なユーザーです',
              position: 'bottom-right',
              duration: 1000,
            })
          }
        }
      },
    }
  }
</script>

<style scoped>
  .form-content {
    margin: 16px 0;
  }
</style>

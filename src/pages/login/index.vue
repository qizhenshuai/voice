<template>
  <div class="login-page">
    <div class="login-wrap">
      <div class="login-title">后台管理</div>
      <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item>
          <a-input
            v-model:value="form.username"
            class="login-input"
            placeholder="用户名"
          />
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-model:value="form.password"
            class="login-input"
            type="password"
            placeholder="密码"
          />
        </a-form-item>
        <a-form-item :wrapper-col="wrapperCol">
          <a-button type="primary" @click="onSubmit" class="login-btn">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { loginType } from '@/types/login'

export default class Login extends Vue {
  form: loginType = {
    username: '',
    password: ''
  }

  labelCol = {}
  wrapperCol = {}
  onSubmit = () => {
    console.log('on submit...', this.form)
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  padding: 160px;
  background: cornflowerblue;
  .login-wrap {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 4px;
    background: #ffffff;
    .login-title {
      font-size: 22px;
      margin-bottom: 20px;
    }
    .login-input {
      width: 200px;
    }
    .login-btn {
      width: 200px;
    }
  }
}
</style>
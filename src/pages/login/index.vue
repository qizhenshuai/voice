<template>
  <div class="login-page">
    <div class="login-wrap">
      <div class="login-title">后台管理</div>
      <el-form :model="form">
        <el-form-item label="账户">
          <el-input v-model="form.username" aria-placeholder="账户信息" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" aria-placeholder="密码" />
        </el-form-item>
        <el-button type="primary" @click="handleSubmitLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'Login',
  setup() {
    const state = reactive({
      form: {
        username: '',
        password: ''
      },
      labelCol: {},
      wrapperCol: {}
    })
    const handleSubmitLogin = () => {
      console.log('on submit...', state.form)
    }
    return {
      ...state,
      handleSubmitLogin
    }
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

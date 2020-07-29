<template>
  <div id="login">
    <h3>系统登录</h3>
    <el-form id="form" ref="form" label-width="80px">
      <el-form-item label="姓名:">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="password" placeholder="请输入用户名" show-password></el-input>
      </el-form-item>
      <div class="button">
        <el-row>
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button type="primary">重置</el-button>
        </el-row>
      </div>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        var that = this;
         if (that.username == '' || that.password == '') {
            that.$alert('用户名或密码为空');
            return;
          } 
        this.$axios.get('api/login', {
            params: {
              username: that.username,
              password: that.password
            }
          })
          .then(function(response) {
            if (response.data.success == false) {
              that.$alert(response.data.message);
            } else {
              that.$router.push({
                path: '/main'
              });
            }
          })
          .catch(function(error) {
            that.$alert('服务器内部异常');
          });
      }
    }
  }
</script>
<style>
  #login {
    margin: 200px auto;
    padding: 5px 5px 40px 10px;
    width: 500px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: #ccc 0px 0px 10px;
    -moz-box-shadow: #ccc 0px 0px 10px;
    box-shadow: #ccc 0px 0px 10px;
  }

  #form {
    margin-top: 5px;
    width: 480px;
  }
</style>

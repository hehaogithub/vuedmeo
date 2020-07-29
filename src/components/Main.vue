<template>
  <el-container>
    <el-header>xx管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 左侧菜单开始-->
         <el-menu
              default-active="1"
              class="el-menu-vertical-demo">
              <!-- 子菜单一开始-->
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-check"></i>
                  <span>公共功能</span>
                </template>
                  <el-menu-item index="1-1">用户信息管理</el-menu-item>
              </el-submenu>
              <!-- 子菜单一结束-->
               <el-submenu index="2">
                 <template slot="title">
                   <i class="el-icon-document-copy"></i>
                   <span>基础信息管理</span>
                 </template>
                 <el-menu-item index="2-1">基础参数管理</el-menu-item>
                 <el-menu-item index="2-2">基础参数地区配置</el-menu-item>
               </el-submenu>
               <el-submenu index="3">
                 <template slot="title">
                   <i class="el-icon-menu"></i>
                   <span>管理功能</span>
                 </template>
                 <el-menu-item index="3-1"><router-link id="FirstPart" to="/main/blog">用户信息管理</router-link></el-menu-item>
                 <el-menu-item index="3-2">位置信息管理</el-menu-item>
                 <el-menu-item index="3-3">轮播配置管理</el-menu-item>

               </el-submenu>

            </el-menu>
            <!-- 左侧菜单结束-->
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'MenuTree',
    methods: {
      handleRoute (url) {
        // 通过菜单URL跳转至指定路由
        this.$router.push("/main/" + url)
      }
    }
  }



</script>

<style>
    .el-header{
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: left;
      line-height: 200px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      height: 850px;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
</style>

// components/AppComponents/Navbar.vue
<template>
  <el-menu theme="dark" :default-active="activeIndex"
  class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Article</el-menu-item>
    <el-submenu index="3">
      <template slot="title">Projects</template>
      <el-menu-item index="3-1">Shiny</el-menu-item>
      <el-menu-item index="3-2">LearnVue</el-menu-item>
      <el-menu-item index="3-3">OtherProject</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">Login</el-menu-item>
    <el-menu-item index="5">Resume</el-menu-item>
    <el-menu-item index="5">About</el-menu-item>
  </el-menu>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        axios.get('api/getPerson')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

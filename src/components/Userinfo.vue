<template>
  <div>
    <div>
     <el-dialog :visible.sync="isShown" width="40%" center="true">

          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="right">
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content">
              <el-input type="textarea" v-model="ruleForm.content"></el-input>
            </el-form-item>
             <div style="text-align: left;width:100%">
            <el-form-item label="栏目" prop="category">
              <el-select v-model="ruleForm.category"  placeholder="请选择栏目">
                <el-option label="JAVA" value="0"></el-option>
                <el-option label="数据库" value="1"></el-option>
              </el-select>
            </el-form-item>
            </div>
            <el-form-item label="封面图路径" prop="cover_url">
              <el-input type="textarea" v-model="ruleForm.cover_url"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
     </el-dialog>
    </div>
    <div class="formsearch">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="btnsearch">查询</el-button>
          <el-button type="primary" @click="add()">新增</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table :data="blogData" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180">
      </el-table-column>
      <el-table-column prop="cover_url" label="封面图片路径" width="180">
      </el-table-column>
      <el-table-column prop="content" label="内容">
      </el-table-column>
      <el-table-column prop="creator" label="创建人">
      </el-table-column>
      <el-table-column prop="creatime" label="创建时间">
      </el-table-column>
      <el-table-column prop="category" label="所属分类">
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="100">
        　　　　<template slot-scope="scope">
          　　　　　　<el-button type="primary" icon="el-icon-edit" @click="checkDetail(scope.row.id)">修改</el-button>
          　　　　　　<el-button type="danger" icon="el-icon-delete" @click="deleteBlog(scope.row.id)">删除</el-button>
          　　　　</template>
        　　</el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange"  @current-change="handleCurrentChange"  :current-page="currentPage"
      :page-sizes="pageSizes" :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
    </el-pagination>
  </div>
  </div>

</template>

<script>
  import {
    a
  } from "../test/a.js";
  /* import uploadImg  from '@/components/uploadimg.vue' */
  export default {
    data() {
      return {

        // 默认显示第几页
        currentPage:1,
         // 总条数，根据接口获取数据长度(注意：这里不能为空)
        totalCount:0,
         // 个数选择器（可修改）
        pageSizes:[3,10],
         // 默认每页显示的条数（可修改）
        PageSize:10,
        blogData: [


        ],
        title: '',
        creator: '',
        isShown: false,
        ruleForm: {
          title: '',
          content: '',
          category: '',
          cover_url: ''
        },
        rules: {
          title: [{
              required: true,
              message: '请输入标题',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          category: [{
            required: true,
            message: '请选择栏目',
            trigger: 'change'
          }],
          content: [{
            required: true,
            message: '请输入内容',
            trigger: 'blur'
          }],
          cover_url: [{
              required: true,
              message: '请输入图片路径',
              trigger: 'blur'
            }

          ]
        }

      }
    },
    methods: {
      search(a,b) {
        var that = this;
        this.$axios.post('api/getBlogList', {
            title: that.title,
            pageNum:a,
            pageSize:b

          })
          .then(function(response) {
            that.blogData = response.data.list;
            that.totalCount=response.data.total;
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      add() {
        if (this.isShown) {
          this.isShown = false
        } else {
          this.isShown = true
        }
      },
      checkDetail(val) {
        console.log(val)
      },
      deleteBlog(id) {
        var that = this;
        this.$axios.post('api/deleteBlog', {
            id: id
          })
          .then(function(response) {
            that.$alert(response.data.msg);
            if (response.data.success == true) {
              that.search(1,that.PageSize);
            } else {

            }

          })
          .catch(function(error) {
            console.log(error);
          });

      },
      submitForm(formName) {
        var that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.$axios.post('api/saveBlog', that.ruleForm)
              .then(function(response) {
                that.$alert(response.data.msg);
              })
              .catch(function(error) {
                console.log(error);
              });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleSizeChange(val) {
        this.PageSize=val;
        this.search(1,val);
        },
      handleCurrentChange(val) {

        this.search(val,this.PageSize);
      },
      btnsearch(){
        this.search(this.currentPage,this.PageSize);
      }

    },
    /*  components: {
          uploadImg
        } */



  }
</script>

<style>
  .formsearch {
    text-align: left;
  }
/*
  keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }

    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    100% {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
  } */

  .el-select {
       position: relative;
  }
</style>

<template>
  <div style="background-color:rgba(91,92,110);height:100%;width:100%">
    <div id="chinamap" :style="{width: '600px', height: '500px'}">




    </div>
    <div id="myChart" :style="{width: '400px', height: '300px'}">
    </div>


    <div id="pip" :style="{width: '400px', height: '300px'}">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let that = this;


        let chinamap = that.$echarts.init(document.getElementById('chinamap'));
        chinamap.setOption({
          backgroundColor: '#00557f',
          globe: {
            baseTexture: 'https://echarts.apache.org/examples/data-gl/asset/earth.jpg',
            heightTexture: 'https://echarts.apache.org/examples/data-gl/asset/bathymetry_bw_composite_4k.jpg',

            displacementScale: 0.1,

            shading: 'lambert',

            environment: 'https://echarts.apache.org/examples/data-gl/asset/starfield.jpg',

            light: {
              ambient: {
                intensity: 0.1
              },
              main: {
                intensity: 1.5
              }
            },

            layers: [{
              type: 'blend',
              blendTo: 'emission',
              texture: 'https://echarts.apache.org/examples/data-gl/asset/night.jpg',


            }, {
              type: 'overlay',
              texture: 'https://echarts.apache.org/examples/data-gl/asset/clouds.png',
              shading: 'lambert',
              distance: 5
            }]
          },
          series: []
        });


        // 基于准备好的dom，初始化echarts实例
        let myChart = that.$echarts.init(document.getElementById('myChart'), "hh");
        // 绘制图表
        myChart.setOption({
          title: {
            text: '柱状图'
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });

        let pip = that.$echarts.init(document.getElementById('pip'), "hh");
        pip.setOption({
          title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        })
      }
    }
  }
</script>

<style>
  #chinamap {
    float: left;
  }

  #myChart {
    float: left;

  }

  #pip {
    float: left;
    margin-left: 10px;
  }
</style>

<template>
  <section class="skills  page2">
    <h2>技能</h2>
    <div class="wrapper">
      <div id="skills"></div>
      <p v-html="renderSkills"></p>
    </div>
  </section>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Skills",
  computed: {
    renderSkills() {
      return ' <ul>\n' +
          '        <li>熟悉页面制作技巧，能将设计稿<strong>完美还原</strong></li>\n' +
          '        <li>熟悉<strong>前后端分离</strong>技术，包括 AJAX、跨域、前端路由、Cookie、Session 等</li>\n' +
          '        <li>熟练掌握 <strong>Vue全家桶</strong>的使用，包括 VueCli、VueRouter、Vuex 等</li>\n' +
          '        <li>熟练掌握 React全家桶的使用，包括 create-react-app、ReactRouter、Redux 等</li>\n' +
          '        <li>熟悉 ES6，包括 let / Promise / await 析构赋值</li>\n' +
          '        <li>了解 <strong>TypeScript</strong> 的使用，项目已经采用TS实现</li>\n' +
          '        <li>了解 <strong>Webpack 的配置和优化</strong></li>\n' +
          '      </ul>'
    }
  },
  mounted() {

    const div = this.$refs.chartContainer
    const myChart = echarts.init(document.getElementById('skills'));
    myChart.setOption({
      tooltip: {},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          {name: '静态页面', max: 100},
          {name: '编程基础', max: 100},
          {name: 'Vue', max: 100},
          {name: 'React', max: 100},
          {name: '项目开发', max: 100},
          {name: '沟通能力', max: 100}
        ]
      },
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [100, 70, 90, 80, 85, 70],
            name: '能力雷达'
          }
        ]
      }]
    });
  }
}
</script>

<style scoped>

</style>
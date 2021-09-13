<template>
  <!--  <section class="openSource">-->
  <!--    <h2>开源项目</h2>-->
  <!--    <ul>-->
  <!--      <li>-->
  <!--        <header>-->
  <!--          <h3>自己写的 DOM 库</h3>-->
  <!--          <a href="#">源码链接</a>-->
  <!--        </header>-->
  <!--        <p>实现了元素选择、元素创建、<strong>事件委托</strong>、滑动手势等常见功能</p>-->
  <!--      </li>-->
  <!--      <li class="page2">-->
  <!--        <header>-->
  <!--          <h3>会动的哆啦A梦</h3>-->
  <!--          <span>-->
  <!--              <a href="#">源码链接</a>-->
  <!--              <a href="https://fangyinghang.com/make-a-pikachu/">项目预览</a>-->
  <!--            </span>-->
  <!--        </header>-->
  <!--        <p>这是我在学习 <strong>CSS3和动画</strong> 时制作的一个可爱作品</p>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <header>-->
  <!--          <h3>简易画板</h3>-->
  <!--          <span>-->
  <!--              <a href="#">源码链接</a>-->
  <!--              <a href="#">项目预览</a>-->
  <!--            </span>-->
  <!--        </header>-->
  <!--        <p>我在学习 <strong>Canvas</strong> 时做的一个小作品</p>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </section>-->
  <section class="projects">
    <h2>开源项目</h2>
    <ol v-for="item in projects" :key=item.id>
      <li>
        <header>
          <h3>{{ item.projectName }}</h3>
          <span>
              <a v-if="!item.private" :href="item.projectLink" style="margin-right: 5px">项目地址</a>
              <a v-else style="margin-right: 5px;">源码私有</a>
              <a :href="item.projectsPreview" style="margin-left: 5px">预览链接</a>
            </span>
        </header>
        <p v-html="item.rawHtml"></p>
      </li>
    </ol>
  </section>
</template>

<script>
import store from '../store/index'

export default {
  name: "OpenSource",
  data() {
    return {
      projects: store.state.openSource
    }
  }
}
</script>

<style scoped>

</style>
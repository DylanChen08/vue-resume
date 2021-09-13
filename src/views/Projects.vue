<template>
  <section class="projects">
    <h2>项目经历</h2>
    <ol v-for="item in projects" :key=item.id>
      <li>
        <header>
          <h3>{{ item.projectName }}</h3>
          <span>
              <a v-if="!item.private" :href="item.projectLink" style="margin-right: 5px">项目地址</a>
              <a v-if="!item.private" :href="item.projectsPreview" style="margin-left: 5px">预览链接</a>
              <a v-else style="margin-right: 5px;">源码私有</a>
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
  name: "Projects",
  data() {
    return {
      projects: store.state.projects
    }
  }
}
</script>

<style scoped>

</style>
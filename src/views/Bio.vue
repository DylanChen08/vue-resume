<template>
  <section class="bio">
    <h1>{{ info.nameTitle }}</h1>
    <img src="../assets/avatar/avatar.png" alt="" width="100" height="100">
    <p>
      {{ info.sub1 }}
    </p>
    <p>
      {{ info.sub2 }}
    </p>
  </section>
</template>

<script>
import store from '../store/index'

export default {
  name: "Bio",
  data() {
    return {
      info: store.state.bio
    }
  }
}
</script>

<style scoped>

</style>
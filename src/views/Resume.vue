<template>
  <article>
    <CommonStyle></CommonStyle>
    <Bio></Bio>
    <Education></Education>
    <Projects></Projects>
    <Skills></Skills>
    <OpenSource></OpenSource>
    <Jobs></Jobs>
    <Others></Others>

  </article>
</template>

<script>
import CommonStyle from "../components/CommonStyle";
import Bio from "./Bio";
import Education from "./Education";
import Jobs from "./Jobs";
import OpenSource from "./OpenSource";
import Others from "./Others";
import Projects from "./Projects";
import Skills from "./Skills";

export default {
  name: "Resume",
  components: {CommonStyle, Bio, Education, Jobs, OpenSource, Others, Projects, Skills}
}
</script>

<style>

</style>
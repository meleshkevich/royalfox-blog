<template>
  <div>
    <!-- <navbar-bootstrap />
    <button-bootstrap /> -->
    <blog-bootstrap />
  </div>
</template>

<script>
import ButtonBootstrap from "../components/button-bootstrap.vue";
import navbarBootstrap from "../components/navbar-bootstrap.vue";
import blogBootstrap from "../components/blog-bootstrap.vue";

export default {
  components: { blogBootstrap }
};
</script>

<style lang="scss" scoped></style>

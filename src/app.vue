<template>
  <div id="app">
    <headerPixelPerfect />
    <heroes />
    <center/>
  </div>
</template>

<script>
import headerPixelPerfect from "@/cmps/header-pixel-perfect.vue";
import heroes from "@/cmps/heroes.vue";
import center from "@/cmps/center.vue";

export default {
  name: "App",
  components: {
    headerPixelPerfect,
    heroes,
    center
  },
};
</script>
<style lang="scss">
</style>

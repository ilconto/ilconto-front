<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./router";
export default {
  name: "app",
  router
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
#app {
  text-align: center;
  color: white;
  margin-top: 60px;
  padding: 1em;
  border-style: solid;
  border-width: 0.5em;
  border-radius: 0.5em;
  background-image: url("~@/assets/dark-paths.png");
  background-size: 30vh;
  height: 100vh;
  margin-top: 0;

  .marker {
    font-family: "Permanent Marker", cursive;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .title {
    @extend .marker;
  }
}
</style>

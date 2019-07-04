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
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em;
  button {
    margin: 1em;
  }
  .title {
    font-family: "Permanent Marker", cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>

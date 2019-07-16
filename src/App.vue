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
  border-style: solid;
  border-width: 0.5em;
  border-radius: 0.5em;
  // background-color: rgba(91, 158, 155, 0.534);
  background-image: url("~@/assets/dark-paths.png");
  background-size: 30vh;
  height: 100vh;
  margin-top: 0;
  b button {
    margin: 1em;
  }
  .marker {
    font-family: "Permanent Marker", cursive;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .title {
    @extend .marker;
  }
  .centered-constrained {
    max-width: 15cm;
    margin: 0 auto;
    margin-top: 15%;
  }
  button {
    width: 100%;
  }
}
</style>

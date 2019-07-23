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
  padding: 1em;
  border-style: solid;
  border-width: 0.5em;
  border-radius: 0.5em;
  background-image: url("~@/assets/dark-paths.png");
  background-size: 30vh;
  // height: 90vh;
  // @media (max-width: 1000px) {
  //   height: 100vh;
  // }
  // @media (min-width: 1000px) {
  //   height: 100vh;
  // }
  height: 100vh;
  margin-top: 0;
  overflow: hidden;

  .marker,
  label {
    font-family: "Permanent Marker", cursive;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .title {
    @extend .marker;
  }

  button {
    margin-top: 1em;
    margin-bottom: 1em;
    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (min-width: 1000px) {
      width: 40%;
    }
  }
  .btn-group {
    width: 100%;

    @media (min-width: 1000px) {
      // margin-top: 7em;
      position: absolute;
      bottom: 40%;
    }
    @media (max-width: 1000px) {
      position: absolute;
      bottom: 10%;
    }
  }
  .page-header {
    @media (min-width: 1000px) {
      margin-top: 5em;
      margin-bottom: 2em;
    }
    @media (max-width: 1000px) {
      margin-top: 2em;
    }
  }
}
</style>

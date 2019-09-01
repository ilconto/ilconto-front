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
@import url("https://fonts.googleapis.com/css?family=Comfortaa:700&display=swap");
@import url("./assets/variables.css");

#app {
  color: var(--primary-light);
  background: url("assets/background-2.svg");
  min-height: 100vh;
  box-sizing: border-box;
  width: 100vw;
  font-family: "Comfortaa", cursive;
  overflow: hidden;

  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  .button:hover {
    color: var(--primary-light);
    border-color: var(--primary-light) !important;
  }
}
</style>

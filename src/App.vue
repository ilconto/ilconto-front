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

<<<<<<< HEAD
  .button:hover {
    color: var(--primary-light);
    border-color: var(--primary-light) !important;
=======
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
>>>>>>> origin/develop
  }
}
</style>

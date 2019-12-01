<template>
  <v-app>
    <div id="app">
      <router-view></router-view>
    </div>
  </v-app>
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
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  .button:hover {
    color: var(--primary-light);
    border-color: var(--primary-light) !important;
  }

  .form {
    width: 100%;
    margin: 1em 0;
    padding: 1em;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
    }
  }
  .form-field {
    width: 100%;
    background: transparent;
    padding: 0.5em 0;
    border: 0px solid transparent;
    border-bottom: 2px solid white;
    box-sizing: border-box;
    font-size: 1.2em;
    color: var(--primary-light);
  }
}
</style>

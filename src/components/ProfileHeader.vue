<template>
  <div class="header">
    <p class="page-message" v-if="subtitle">Your boards</p>
  </div>
</template>
<script>
export default {
  name: "app-header",
  props: {
    subtitle: {
      type: Boolean,
      default: true
    },
    isDark: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
}

@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");

.application-title {
  margin: 1em auto 0.5em auto;
  font-size: 4em;
  font-weight: bold;
  font-family: "Lobster", cursive;
  color: white;
}

.page-message {
  width: 90%;
  text-align: center;
  font-size: 1.3em;
  font-weight: bold;
  margin: 0 auto 1em auto;
}
</style>
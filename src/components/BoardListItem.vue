<template>
  <div class="container item">
    <p>
      <span>Board title</span> -
      <span>Score</span> -
      <span>
        <b-button @click="showDetails">View</b-button>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showDetails() {
      this.$router.push("/board");
    }
  }
};
</script>

<style lang="scss">
.item {
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  margin: 1em auto;
  padding: 3em;
  border-radius: 1cm;
}
</style>
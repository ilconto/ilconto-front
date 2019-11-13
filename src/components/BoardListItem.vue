<template>
  <div class="container item">
    <p>
      <span>{{title}}</span> -
      <span>Score</span> -
      <span>
        <b-button @click="showDetails">View</b-button>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["title","boardId"],
  data() {
    return {};
  },
  methods: {
    showDetails() {
      this.$router.push({path:`/board/${this.boardId}`} );
    }
  }
};
</script>

<style lang="scss">
.item {
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  margin: 1em auto;
  padding: 2em;
  border-radius: 1cm;
  font-size: 2em;
}
</style>
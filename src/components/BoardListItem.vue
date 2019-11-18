<template>
  <div class="level item">
      <div class="level-left">{{title}}</div>

      <div class="level-right">
        <v-btn @click="showDetails" color="primary" x-large>View</v-btn>
      </div>
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
<template>
  <v-card shaped class="level item elevation-6" color="transparent">
    <v-card-title class="level-left primary--text">{{title}}</v-card-title>

    <div class="level-right">
      <v-btn @click="showDetails" color="secondary" x-large>View</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["title", "boardId"],
  data() {
    return {};
  },
  methods: {
    showDetails() {
      this.$router.push({ path: `/board/${this.boardId}` });
    }
  }
};
</script>

<style lang="scss">
.item {
  // background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  margin: 1em auto;
  padding: 1em;
  border-style: solid;
  border-radius: 10px;
  font-size: 2em;
}
</style>
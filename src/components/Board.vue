<template>
  <div>
    <div class="container boardHeader">
      <h1 class="title">{{boardName}}</h1>
    </div>

    <div v-bind:key="member.id" v-for="member in members">
      <BoardMember v-bind:member="member"></BoardMember>
    </div>
  </div>
</template>

<script>
import BoardMember from "./BoardMember";

export default {
  name: "Board",
  components: { BoardMember },
  props: ["boardName", "members"]
};
</script>


<style lang="scss" scoped>
.boardHeader {
  margin-bottom: 3em;
}
</style>

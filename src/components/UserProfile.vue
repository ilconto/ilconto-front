<template>
  <div class="container" id="profile-page">
    <Header :subtitle="false" />
    <div id="board-list">
      <BoardListItem />
      <BoardListItem />
      <BoardListItem />
      <BoardListItem />
      <BoardListItem />
      <BoardListItem />
      <BoardListItem />
    </div>
  </div>
</template>



<script>
import Header from "./Header";
import BoardListItem from "./BoardListItem";

export default {
  components: { Header, BoardListItem },
  data() {
    return {
      username: "",
      boards: []
    };
  },
  created() {
    // this.boards = this.$session.get("user").boards;
    // this.username = this.$session.get("user").email;
  }
};
</script>

<style lang="scss" scoped>
#profile-page {
  margin: 0 auto;
  text-align: center;
}
#board-list {
  margin: 3em;
  height: 80vh;
  overflow: auto;
}
</style>
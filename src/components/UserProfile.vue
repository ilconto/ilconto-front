<template>
  <div class="container" id="profile-page">
    <ProfileHeader />
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
import ProfileHeader from "./ProfileHeader";
import BoardListItem from "./BoardListItem";

export default {
  components: { ProfileHeader, BoardListItem },
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
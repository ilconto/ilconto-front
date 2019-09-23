<template>
  <div class="container" id="profile-page">
    <Header :subtitle="false" />
    <div class="is-title">Welcome, {{this.$session.get("username")}}</div>
    <div id="board-list">
      <BoardListItem
        v-for="(item, id) in this.$session.get('boards')"
        v-bind:title="item.board.title"
        v-bind:key="id"
      />
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
  beforeCreate() {
    axios({
      method: "get",
      baseURL: process.env.VUE_APP_ROOT_API,
      url: "/profile/",
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.$session.get("token")}`
      }
    })
      .then(response => {
        this.$session.set("username", response.data.username);
        this.$session.set("email", response.data.email);

        this.$session.set("boards", response.data.memberships);
      })
      .catch(e => {
        this.$snackbar.open({
          message: "Could not log you in. Please try again",
          type: "is-warning",
          position: "is-bottom",
          actionText: "create an account",
          queue: false,
          duration: 5000,
          onAction: () => {
            this.$router.push("/signin");
          }
        });

        this.email = "";
        this.password = "";
      });
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
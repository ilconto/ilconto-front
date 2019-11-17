<template>
  <div class="container" id="profile-page">
    <Header :subtitle="false" />
    <div class="is-title">Welcome, {{this.$session.get("username")}}</div>
    <div id="board-list">
      <BoardListItem
        v-for="(item, id) in this.boards"
        v-bind:title="item.board.title"
        v-bind:boardId="item.board.id"
        v-bind:key="id"
      />
      <button class="submit-button button is-size-4" @click="goToCreateBoardForm">Create a new board</button>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import Header from "./Header";
import BoardListItem from "./BoardListItem";


export default {
  components: { Header, BoardListItem },
  data() {
    return {
      username: "",
      boards: [],
    };
  },
  methods: {
    goToCreateBoardForm() {
      this.$router.push("/createboard");
    },
    getBoardList() {
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
        this.boards = response.data.memberships; 
      })
      .catch(e => {
        console.log(e);
      });
    }
  },
  beforeMount() {
    this.getBoardList();
  },
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
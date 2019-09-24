<template>
  <div class="container" id="profile-page">
    <Header :subtitle="false" />
    <div class="is-title">Welcome, {{this.$session.get("username")}}</div>
    <div id="board-list">
      <BoardListItem
        v-for="(item, id) in this.$session.get('boards')"
        v-bind:title="item.board.title"
        v-bind:key="id"
        v-on:boardCreated
      />
      <button class="submit-button button is-size-4" @click="goToCreateBoardForm">Create a new board</button>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import Header from "./Header";
import BoardListItem from "./BoardListItem";

function getBoardList(window) {
  axios({
    method: "get",
    baseURL: process.env.VUE_APP_ROOT_API,
    url: "/profile/",
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${window.$session.get("token")}`
    }
  })
    .then(response => {
      window.$session.set("username", response.data.username);
      window.$session.set("email", response.data.email);

      window.$session.set("boards", response.data.memberships);
      console.log(window.$session.get("boards"));
    })
    .catch(e => {
      console.log(e);
    });
}

export default {
  components: { Header, BoardListItem },
  data() {
    return {
      username: "",
      boards: [],
      justCreatedNewBoard: { default: "false" }
    };
  },
  beforeCreate() {
    getBoardList(this);
  },
  methods: {
    goToCreateBoardForm() {
      this.$router.push("/createboard");
    }
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
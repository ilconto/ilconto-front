<template>
  <div class="container" id="profile-page">
    <Header :subtitle="false" />
    <div class="is-title">Welcome, {{this.$session.get("username")}}<br>Here are your boards :</div>
    <div id="board-list">
      <BoardListItem
        v-for="(item, id) in this.boards"
        v-bind:title="item.board.title"
        v-bind:boardId="item.board.id"
        v-bind:key="id"
      />
     
    </div>
     <v-btn @click="goToCreateBoardForm" color="secondary" id="create-btn">Create a new board</v-btn>
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
  height: 60vh;
  overflow: auto;
  // border-style: solid;
  // border-color: var(--primary-light);
  // border-radius: 20px;
  // border-width: 1px;
  padding: 0.5em;
  @media (min-width: 1000px) {
    margin-top: 1em;
    margin-left: 3em;
    margin-right: 3em; 
    margin-bottom: 2em;
    
  }
  @media (max-width: 1000px) {
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 2em;
  }
}

#create-btn {
  margin-left: 3em;
  margin-right: 3em;
}
</style>
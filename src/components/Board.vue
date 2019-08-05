<template>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>
  <div v-else-if="error">Could not load board</div>
  <div v-else class="centered-constrained">
    <div class="board-header">
      <h1 class="title is-1">{{this.board.title}}</h1>
    </div>
    <ul>
      <li v-for="member in members" v-bind:key="member.id">
        <div>
          <BoardMember :member="member" :boardID="boardID"></BoardMember>
        </div>
      </li>
    </ul>

    <p id="back">
      <router-link :to="{name:'user'}">
        <b-button type="is-info">Back to my boards</b-button>
      </router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import BoardMember from "./BoardMember";

function compare(a, b) {
  if (a.last_time < b.last_time) {
    return 1;
  }
  if (a.last_time > b.last_time) {
    return -1;
  }
  return 0;
}

export default {
  data() {
    return {
      members: undefined,
      boardID: null,
      loading: true,
      board: null,
      boardName: "",
      error: false
    };
  },
  components: {
    BoardMember
  },
  created() {
    this.fetchBoardData();
  },
  methods: {
    fetchBoardData() {
      var boardId = this.$route.params.id;
      axios({
        method: "get",
        baseURL: process.env.VUE_APP_ROOT_API,

        url: `/boards/${boardId}`,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          this.board = response.data;
          this.members = [...response.data.members];
          this.members.sort(compare);
          this.boardName = this.board.title;
          this.boardID = this.board.id;
          this.loading = false;
          console.log(response);
        })
        .catch(e => (this.error = true));
    }
  }
};
</script>


<style lang="scss" scoped>
.board-header {
  margin-bottom: 3em;
}
</style>

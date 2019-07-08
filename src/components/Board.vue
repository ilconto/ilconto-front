<template>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>
  <div v-else class="centered-constrained">
    <div class="board-header">
      <h1 class="title is-1">{{this.board.title}}</h1>
    </div>

    <ul>
      <li v-for="member in board.members" v-bind:key="member.id">
        <div>
          <BoardMember :member="member"></BoardMember>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import BoardMember from "./BoardMember";

export default {
  data() {
    return {
      loading: true,
      board: null,
      boardName: "",
      error: null
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
      var body = { id: this.$route.params.id };
      axios({
        method: "get",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: "/board",
        body: body,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          this.board = response.data;
          this.boardName = this.board.title;
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.board-header {
  margin-bottom: 3em;
}
</style>

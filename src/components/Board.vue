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
      <li v-for="member in formatted_members" v-bind:key="member.id">
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

function compare(user_a, user_b) {
  if (user_a.score < user_b.score) {
    return 1;
  }
  if (user_a.score > user_b.score) {
    return -1;
  }
  return 0;
}

export default {
  data() {
    return {
      members: undefined,
      boardID: undefined,
      formatted_members: [],
      loading: true,
      board: null,
      error: false
    };
  },
  components: {
    BoardMember
  },
  mounted() {
    this.fetchBoardData();
  },
  methods: {
    compare: compare,
    fetchBoardData() {
      var boardId = this.$route.params.id;
      axios({
        method: "get",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: `/boards/${boardId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.$session.get("token")}`
        }
      })
        .then(response => {
          this.board = response.data;

          for (const [key, value] of Object.entries(response.data.scores)) {
            this.formatted_members.push({
              username: key,
              score: Date.parse(value)
            });
          }
          this.formatted_members.sort(compare);
          this.loading = false;
        })
        .catch(e => {
          this.error = true;
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

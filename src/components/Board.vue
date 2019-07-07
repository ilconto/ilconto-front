<template>
  <div>
    <div class="container boardHeader">
      <h1 class="title">{{boardName}}</h1>
    </div>

    <div>{{board}}</div>
  </div>
</template>

<script>
import { board } from "../mock";
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      board: null,
      boardName: "",
      error: null
    };
  },
  created() {
    this.fetchBoardData();
  },
  methods: {
    fetchBoardData() {
      var body = { id: this.$route.params.id };
      axios
        .get(process.env.VUE_APP_ROOT_API + "/board")
        .then(response => {
          console.log(response);
          this.board = response.data;
          this.boardName = this.board.title;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.boardHeader {
  margin-bottom: 3em;
}
</style>

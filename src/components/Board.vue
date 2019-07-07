<template>
  <div>
    <div class="container boardHeader">
      <!-- <h1 class="title">{{boardName}}</h1> -->
    </div>

    <div>{{board}}</div>
  </div>
</template>

<script>
import BoardMember from "./BoardMember";
import { board } from "../mock";

export default {
  data() {
    return {
      loading: false,
      board: null,
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      this.board = board;
    }
  }
};
</script>


<style lang="scss" scoped>
.boardHeader {
  margin-bottom: 3em;
}
</style>

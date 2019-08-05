<template>
  <span>
    <div class="main level has-background-primary">
      <span class="level-item">{{member.username}}</span>
      <span v-if="isOwner">
        <b-button @click="confirmReset" type="is-danger">reset my score</b-button>
      </span>
      <span class="level-item score">{{score}} days</span>
    </div>
  </span>
</template>

<script>
import axios from "axios";

function computeScore(inputDate) {
  var now = Date.now();
  var deltaSeconds = now - inputDate;
  return Math.round(deltaSeconds / (1000 * 60 * 60 * 24));
}

export default {
  name: "BoardMember",
  props: ["member", "boardID"],
  data() {
    return {
      username: "",
      isOwner: false,
      boards: [],
      score: 0
    };
  },
  methods: {
    computeScore: computeScore,
    created() {},
    confirmReset() {
      var boardID = this.boardID;
      this.$dialog.confirm({
        title: "Resetting your score",
        message:
          "Are you sure you want to <b>reset</b> your score? This action cannot be undone.",
        confirmText: "Reset score",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.score = computeScore(Date.now() / 1000);
          axios({
            method: "patch",
            baseURL: process.env.MOCK_APP_ROOT_API,
            url: `/boards/${boardID}/reset/${this.$session.get("user").id}`
          })
            .then(response => {})
            .catch(error => {
              this.score = computeScore(this.member.last_time); // abort modification if request failed
              console.log(error);
            });
        }
      });
    }
  },
  mounted() {
    if (this.member.username == this.$session.get("username")) {
      this.isOwner = true;
    }
    this.score = computeScore(this.member.score);
  }
};
</script>

<style >
.main {
  font-size: 2em;
  color: white;
  margin: 1em;
  border-radius: 0.5em;
}
.score {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>

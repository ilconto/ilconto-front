<template>
  <span>
    <div class="main level has-background-primary">
      <span class="level-item">{{member.name}}</span>
      <span v-if="isOwner">
        <b-button @click="confirmReset" type="is-danger">reset my score</b-button>
      </span>
      <span class="level-item score">{{score}} days</span>
    </div>
  </span>
</template>

<script>
import axios from "axios";

function computeScore(utcEpochTime) {
  var now = Math.floor(Date.now() / 1000); //seconds
  var deltaSeconds = now - utcEpochTime;
  return secondsToHumanReadable(deltaSeconds);
}

function secondsToHumanReadable(seconds) {
  var days = Math.floor(seconds / (3600 * 24)) + 1; //days
  return days;
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
            baseURL: process.env.VUE_APP_ROOT_API,
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
    if (this.member.name == this.$session.get("user").username) {
      this.isOwner = true;
    }
    this.score = computeScore(this.member.last_time);
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

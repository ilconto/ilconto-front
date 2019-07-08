<template>
  <div class="main level has-background-primary">
    <span class="level-item">{{member.name}}</span>
    <span class="level-item score">{{computeScore(member.last_time)}} days</span>
  </div>
</template>

<script>
function computeScore(utcEpochTime) {
  var now = Math.floor(Date.now() / 1000); //seconds
  var deltaSeconds = now - utcEpochTime;
  return secondsToHumanReadable(deltaSeconds);
}

function secondsToHumanReadable(seconds) {
  var days = Math.floor(seconds / (3600 * 24)); //days
  return days;
}

export default {
  name: "BoardMember",
  props: ["member"],
  methods: {
    computeScore: computeScore
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

<template>
  <div class="memberItem container is-widescreen is-centered">
    <div class="columns">
      <div class="column"></div>
      <div class="column level-item has-text-centered">
        <div>
          <p class="heading score">{{computeScore(member.lastReset)}}</p>
          <p class="title">{{member.name}}</p>
        </div>
      </div>
      <div class="column">
        <b-button v-if="member.isMyself" type="is-danger">Reset</b-button>
      </div>
    </div>
  </div>
</template>

<script>
function computeScore(date) {
  //   return "test";
  return secondsToDhms(Math.abs((date - Date.now()) / 1000));
}

function secondsToDhms(seconds) {
  return seconds;
}

export default {
  name: "BoardMember",
  props: ["member"],
  methods: {
    computeScore: computeScore
  }
};
</script>

<style scoped>
.memberItem {
  border-style: solid;
  border-radius: 25px;
  margin-bottom: 1em;
  /* height: 6em; */
  padding: 1em;
}

.score {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1em;
}
</style>

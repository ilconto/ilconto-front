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
  console.log(seconds);
  //   seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day" : " days") : null;
  var hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : null;
  var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : null;
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : null;

  if (Boolean(dDisplay)) {
    return dDisplay;
  } else if (Boolean(hDisplay)) {
    return hDisplay;
  } else if (Boolean(mDisplay)) {
    return mDisplay;
  } else {
    return Boolean(sDisplay);
  }
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

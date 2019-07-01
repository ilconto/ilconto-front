<template>
  <div id="app">
    <Board v-bind:members="members" v-bind:boardName="boardName"></Board>
  </div>
</template>

<script>
import Board from "./components/Board";

export default {
  name: "app",
  components: {
    Board
  },
  data() {
    return {
      members: [
        {
          id: 3,
          name: "Hugo",
          lastReset: new Date("December 18, 2018 03:24:00"),
          isMyself: false
        },
        {
          id: 1,
          name: "Paul",
          lastReset: new Date("March 17, 2019 03:24:00"),
          isMyself: true
        },
        {
          id: 2,
          name: "Max",
          lastReset: new Date("July 3, 2019 03:24:00"),
          isMyself: false
        },
        {
          id: 4,
          name: "Alina",
          lastReset: new Date("May 18, 2019 03:24:00"),
          isMyself: false
        }
      ].sort(function(a, b) {
        return b.score - a.score;
      }),
      boardName: "My awesome board"
    };
  }
};

// function renderDate() {
//   return secondsToDhms();
// }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
#app {
  font-family: "Permanent Marker", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em;
}
</style>

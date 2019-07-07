<template>
  <div>
    <h1 class="title is-1">Welcome {{this.$session.get("user").name}}</h1>
    <h2 class="title is-3">Your boards:</h2>
    <ul>
      <li v-for="board in boards" v-bind:key="board.id">
        <div class="level">
          <span class="level-item">{{ board.name }}</span>
          <span class="level-item">
            <router-link :to="{name: 'board', params: {id: 5}}">
              <b-button type="is-primary">View</b-button>
            </router-link>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { userBoards } from "../mock.js";

export default {
  data() {
    return {
      boards: null
    };
  },
  created() {
    this.boards = this.$session.get("user").boards;
  },
  methods: {
    // getUserBoards: getUserBoards
  }
};
</script>

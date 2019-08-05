<template>
  <div class="container" style="height: 100%">
    <div class="page-header">
      <h1 class="title is-1">Welcome {{username}}</h1>
    </div>

    <h2 class="title is-3">Your boards:</h2>
    <div style="overflow: auto; height: 300px">
      <ul>
        <li v-for="board in boards" v-bind:key="board.id">
          <div class="level">
            <span class="level-item">{{ board.title }}</span>
            <span class="level-item">
              <router-link :to="{name: 'board', params: {id: board.id}}">
                <b-button type="is-primary" style>View</b-button>
              </router-link>
            </span>
          </div>
        </li>
      </ul>
    </div>

    <div class="btn-group">
      <p id="back">
        <router-link :to="{name:'root'}">
          <b-button class="is-primary">Back</b-button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.level {
  a {
    width: 100%;
  }
}
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      boards: []
    };
  },
  created() {
    axios({
      method: "get",
      baseURL: process.env.VUE_APP_ROOT_API,
      url: "/profile",
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.$session.get("token")}`
      }
    })
      .then(response => {
        this.boards = response.data.boards;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

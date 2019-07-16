<template>
  <div>
    <div class="page-header">
      <h1 class="title is-1">Welcome {{username}}</h1>
    </div>

    <h2 class="title is-3">Your boards:</h2>
    <ul>
      <li v-for="board in boards" v-bind:key="board.id">
        <div class="level">
          <span class="level-item">{{ board.title }}</span>
          <span class="level-item">
            <router-link :to="{name: 'board', params: {id: board.id}}">
              <b-button type="is-primary">View</b-button>
            </router-link>
          </span>
        </div>
      </li>
    </ul>
    <div class="btn-group container">
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
  button {
    width: 2cm;
  }
}
</style>


<script>
export default {
  data() {
    return {
      username: "",
      boards: []
    };
  },
  created() {
    this.boards = this.$session.get("user").boards;
    this.username = this.$session.get("user").username;
  }
};
</script>

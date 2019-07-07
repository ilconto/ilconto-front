<template>
  <div class="container">
    <div class="centered-constrained">
      <h1 class="title is-1">Create a new board here</h1>

      <div class="inputs">
        <b-field label="Board Name">
          <b-input v-model="boardName" placeholder="you board name"></b-input>
        </b-field>

        <b-field label="Members">
          <b-input v-model="emailToAdd" placeholder="example@domain.com" type="email"></b-input>
        </b-field>
        <ul>
          <li v-for="member in members" v-bind:key="member">
            <div class="level">
              <span class="level-item">{{ member }}</span>
              <b-button class="is-danger level-item">delete</b-button>
            </div>
          </li>
        </ul>
        <p>
          <b-button v-on:click="addToMemberList" type="is-light">Add member</b-button>
        </p>
      </div>

      <p>
        <b-button type="is-primary">Create Board</b-button>
      </p>
      <p id="back">
        <router-link :to="{name:'root'}">
          <b-button type="is-info">Back</b-button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateBoard",
  data() {
    return {
      boardName: null,
      members: [],
      boardPassword: null,
      emailToAdd: null
    };
  },
  methods: {
    addToMemberList: function() {
      this.members.push(this.emailToAdd);
      this.emailToAdd = "";
    }
  }
};
</script>


<style lang="scss" scoped>
.boardHeader {
  margin-bottom: 3em;
}
.title.is-6 {
  font-family: default;
}
b-button.is-danger {
  width: 1cm;
}
</style>
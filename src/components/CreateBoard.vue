<template>
  <div>
    <h1 class="title is-1">Create a new board here</h1>

    <div class="inputs">
      <b-field label="Board Name">
        <b-input v-model="boadId" placeholder="you board name"></b-input>
      </b-field>
      <b-field label="Board Password">
        <b-input v-model="boardPassword" placeholder="superSafePass" type="password"></b-input>
      </b-field>

      <b-field label="Members">
        <b-input v-model="emailToAdd" placeholder="example@domain.com" type="email"></b-input>
      </b-field>
      <p>
        <b-button type="is-light">Add member</b-button>
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
</template>

<script>
export default {
  name: "CreateBoard",
  data() {
    return {
      boardName: null
    };
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
</style>
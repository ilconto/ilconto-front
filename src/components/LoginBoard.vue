<template>
  <div>
    <h1 class="title is-1">Login to an existing board here</h1>

    <b-field label="Board ID">
      <b-input v-model="boadId" placeholder="you board unique id"></b-input>
    </b-field>
    <b-field label="Board Password">
      <b-input v-model="boardPassword" placeholder="superSafePass" type="password"></b-input>
    </b-field>
    <p>
      <b-button type="is-primary">Login</b-button>
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
  data() {
    return {
      boadId: "",
      boardPassword: ""
    };
  }
};
</script>

<style lang="scss" >
</style>



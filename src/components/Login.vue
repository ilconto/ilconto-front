<template>
  <div class="container">
    <div class="centered-constrained">
      <h1 class="title is-1">Login</h1>

      <b-field label="Email">
        <b-input v-model="email" placeholder="johndoe@example.com"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input v-model="password" placeholder="password" type="password"></b-input>
      </b-field>
      <p>
        <b-button @click="login" class="is-primary">Login</b-button>
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
import { userBoards } from "../mock";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$session.start();
      this.$session.set("userId", this.email);
      this.$session.set("user", { name: "Paul", boards: userBoards });
      this.$router.push("/profile");
    }
  }
};
</script>

<style lang="scss" >
</style>



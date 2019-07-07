<template>
  <div class="container">
    <div class="centered-constrained">
      <h1 class="title is-1">Login</h1>

      <b-field label="Email">
        <b-input v-model="username" placeholder="johndoe"></b-input>
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
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      var body = {
        username: this.username,
        password: this.password
      };
      axios
        .post(process.env.VUE_APP_ROOT_API + "/login", { body: body })
        .then(response => {
          console.log(response.data);
          this.$session.set("user", response.data.user);
          this.$router.push("/profile");
        })
        .catch(e => {
          console.log(e);
          this.$router.push("/");
        });
    }
  }
};
</script>

<style lang="scss" >
</style>



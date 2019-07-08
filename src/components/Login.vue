<template>
  <div class="container">
    <div class="centered-constrained">
      <h1 class="title is-1">Login</h1>

      <b-field label="Username">
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
      axios({
        method: "post",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: "/login",
        body: body,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          this.$session.set("user", response.data.user);
          this.$router.push("/profile");
        })
        .catch(e => {
          console.log(e);
          this.$snackbar.open({
            message: "Could not log you in. Please try again",
            type: "is-warning",
            position: "is-bottom",
            actionText: "create an account",
            queue: false,
            duration: 5000,
            onAction: () => {
              this.$router.push("/signin");
            }
          });

          this.username = "";
          this.password = "";
        });
    }
  }
};
</script>

<style lang="scss" >
</style>



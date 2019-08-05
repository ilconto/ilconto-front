<template>
  <div class="container login-page">
    <div>
      <div class="page-header">
        <h1 class="title is-1">Login</h1>
      </div>

      <b-field label="Username">
        <b-input v-model="username" placeholder="johndoe"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input v-model="password" placeholder="password" type="password"></b-input>
      </b-field>
    </div>
    <div class="btn-group container">
      <p>
        <b-button @click="login" class="is-primary">Login</b-button>
      </p>
      <p id="or" class="marker">Or</p>
      <p id="back">
        <router-link :to="{name:'root'}">
          <b-button type="is-info">Back</b-button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100%;
}
</style>

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
      var bodyFormData = new FormData();
      bodyFormData.set("username", this.username);
      bodyFormData.set("password", this.password);
      console.log(process.env.VUE_MOCK_APP_ROOT_API);
      axios({
        method: "post",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: "/rest-auth/login/",
        data: bodyFormData,
        json: true,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          console.log(response.data);
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





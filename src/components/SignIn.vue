<template>
  <div class="container signin-page">
    <div class="page-header">
      <h1 class="title is-1">Create an account</h1>

      <b-field label="Username">
        <b-input v-model="username" placeholder="johndoe"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input v-model="password" placeholder="password" type="password"></b-input>
      </b-field>
    </div>
    <div class="btn-group">
      <p>
        <b-button type="is-primary">Sign in</b-button>
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

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" >
.signin-page {
  height: 100%;
}
</style>



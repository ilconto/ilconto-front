<template>
  <div class="container landing-page">
    <div class="page-header">
      <h1 class="title is-1">Welcome to Ilconto</h1>
    </div>

    <div class="btn-group">
      <p>
        <router-link :to="{name: 'login'}">
          <b-button type="is-primary">Login</b-button>
        </router-link>
      </p>
      <p id="or" class="marker">Or</p>
      <p>
        <router-link :to="{name: 'signin'}">
          <b-button type="is-primary">Sign In</b-button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
.landing-page {
  height: 100%;
}
</style>

<template>
  <div class="centered-constrained">
    <h1 class="title is-1">Welcome to Ilconto</h1>

    <p>
      <router-link :to="{name: 'login'}">
        <b-button type="is-primary">Login</b-button>
      </router-link>
    </p>
    <p id="or">Or</p>
    <p>
      <router-link :to="{name: 'signin'}">
        <b-button type="is-primary">Sign In</b-button>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
</style>

<template>
  <div>
    <h1 class="title is-1">Welcome to Ilconto</h1>

    <p>
      <router-link :to="{name: 'login'}">
        <b-button type="is-primary">Login a board</b-button>
      </router-link>
    </p>
    <p id="or">Or</p>
    <p>
      <router-link :to="{name: 'create'}">
        <b-button type="is-primary">Create a new board</b-button>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
</style>

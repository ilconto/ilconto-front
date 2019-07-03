<template>
  <div>
    <router-link to="login">Login to existing board</router-link>
    <p># implement board creation form here</p>
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


<style lang="sass" scoped>
.boardHeader 
    margin-bottom: 3em; 

    
</style>
<template>
  <div>
    <router-link :to="{name:'root'}">Back</router-link>
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


<style lang="scss" scoped>
.boardHeader {
  margin-bottom: 3em;
}
.title.is-6 {
  font-family: default;
}
</style>
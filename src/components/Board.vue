<template>
  <div class="container">
    <p>
      <span class="is-size-1">{{title}}</span>
    </p>

    <BoardMemberItem v-for="(item,id) in this.members" v-bind:user="item" v-bind:key="id"></BoardMemberItem>

    <v-btn class="btns" @click=";" color="secondary">Invite new member</v-btn>
    
    <v-btn class="btns" @click="go_back_to_profile" color="primary">Back to my boards</v-btn>


  </div>
</template>

<style lang="scss" scoped>


.btns {
  margin-top: 2em;
}
.board {
  background: url("../assets/background-3.svg");
  font-size: 2em;

}
.tab-header {
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
}

.tab-content {
}
</style>


<script>
import axios from "axios";
import BoardMemberItem from "./BoardMemberItem";


export default {
  components: { BoardMemberItem },
  data() {
    return {
      tab:null,
      tabs: 2,
      title: "",
      members: [],
    };
  },
  methods: {
    get_board_details() {
      axios({
        method: "get",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: `/boards/${this.$route.params.boardId}`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${this.$session.get("token")}`
        }
      })
      .then(response => {
        this.title = response.data.title;
        this.members = response.data.members;
      })
      .catch(e => {
        console.log(e)
      })
    },
    go_back_to_profile() {
      this.$router.go(-1);
    }
    
  },
  beforeMount() {
    this.get_board_details();
  }
};
</script>


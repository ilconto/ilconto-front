<template>
  <div class="container">
    <p>
      <span class="is-size-1">{{title}}</span>
    </p>

    <BoardMemberItem v-for="(item,id) in this.members" v-bind:user="item" v-bind:key="id"></BoardMemberItem>


    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="btns" v-on="on" color="secondary">Invite new member</v-btn>
      </template>
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Invite a new member
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
    
    
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
</style>


<script>
import axios from "axios";
import BoardMemberItem from "./BoardMemberItem";


export default {
  components: { BoardMemberItem },
  data() {
    return {
      dialog: false,
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


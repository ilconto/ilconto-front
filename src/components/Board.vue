<template>
  <div class="container">
    <p>
      <span class="is-size-1">{{title}}</span>
    </p>

    <BoardMemberItem
      v-for="(item,id) in this.members"
      v-bind:user="item"
      v-bind:key="id"
      :parentBoardId="boardId"
    ></BoardMemberItem>

    <div class="container" id="btn-group">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn class="btns" v-on="on" color="secondary">Invite new member</v-btn>
        </template>
        <AddMemberModal v-on:confirmationSent="togglePopUp"></AddMemberModal>
      </v-dialog>

      <v-btn class="btns" @click="go_back_to_profile" color="primary">Back to my boards</v-btn>

      <v-btn class="btns error" @click="deleteBoard">Delete board</v-btn>
    </div>
    <v-alert :value="popUpVisible" transition="scale-transition" type="info">
      <p>Invitation just sent!</p>
    </v-alert>
  </div>
</template>

<style lang="scss" scoped>
#btn-group {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.btns {
  margin-left: 1em;
  margin-right: 1em;
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
import AddMemberModal from "./modals/AddMemberModal";

export default {
  components: { BoardMemberItem, AddMemberModal },
  data() {
    return {
      dialog: false,
      deleteDialog: false,
      title: "",
      boardId: "",
      members: [],
      boardId: String,
      popUpVisible: false
    };
  },
  props: {},
  methods: {
    get_board_details() {
      axios({
        method: "get",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: `/boards/${this.$route.params.boardId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.$session.get("token")}`
        }
      })
        .then(response => {
          this.title = response.data.title;
          this.members = response.data.members;
          this.boardId = String(response.data.id);
          console.log(this.boardId);
        })
        .catch(e => {
          console.log(e);
        });
    },
    go_back_to_profile() {
      this.$router.go(-1);
    },
    deleteBoard() {
      this.deleteDialog = true;
    },
    togglePopUp() {
      console.log("event caught");
      this.popUpVisible = true;
      setTimeout(() => {
        this.popUpVisible = false;
      }, 5000);
    }
  },
  created() {
    this.get_board_details();
  }
};
</script>


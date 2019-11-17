<template>
  <div class="container item">
    <p>
      <span class="is-size-1">{{title}}</span>
    </p>
    <b-tabs v-model="activeTab" class="is-primary">
      <b-tab-item label="View board">


        <BoardMemberItem
        v-for="(item, id) in this.members"
        v-bind:user="item"
        v-bind:key="id"
      />
      </b-tab-item>
      <b-tab-item label="Settings">
      </b-tab-item>

    </b-tabs>


    
  </div>
</template>

<script>
import axios from "axios";
import BoardMemberItem from "./BoardMemberItem";


export default {
  components: { BoardMemberItem },
  data() {
    return {
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
    
  },
  beforeMount() {
    this.get_board_details();
  }
};
</script>

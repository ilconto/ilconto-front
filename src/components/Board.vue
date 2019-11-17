<template>
  <div class="container item">
    <p>
      <span class="is-size-1">{{title}}</span>
    </p>
    
  </div>
</template>

<script>
import axios from "axios";



export default {

  data() {
    return {
      title: ""
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
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  beforeMount() {
    this.get_board_details();
  }
};
</script>

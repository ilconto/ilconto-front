<template>
  <div class="member">
    <p class="member-username">
      {{username}}
    </p>
    <p class="member-delay">
      {{readableDelay}}
    </p>
    <p class="member-rank">
      {{rank}}
    </p>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  name: "BoardMember",
  props: {
    username: {
      type: String,
      required: true,
    },
    delay: {
      type: Number,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    }
  },

  computed: {
    readableDelay: function() {
      return moment.duration(this.delay).humanize()
    }
  },

  methods: {

    // confirmReset() {
    //   var boardID = this.boardID;
    //   this.$dialog.confirm({
    //     title: "Resetting your score",
    //     message:
    //       "Are you sure you want to <b>reset</b> your score? This action cannot be undone.",
    //     confirmText: "Reset score",
    //     type: "is-danger",
    //     hasIcon: true,
    //     onConfirm: () => {
    //       this.score = computeScore(Date.now() / 1000);
    //       axios({
    //         method: "patch",
    //         baseURL: process.env.VUE_APP_ROOT_API,
    //         url: `/boards/${boardID}/reset/${this.$session.get("user").id}`
    //       })
    //         .then(response => {})
    //         .catch(error => {
    //           this.score = computeScore(this.member.last_time); // abort modification if request failed
    //           console.log(error);
    //         });
    //     }
    //   });
    // }
  },
  mounted() {
    
  }
};
</script>

<style >
.member {
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  width: 80%;
  margin: 1.2em auto;
  background-color: var(--primary-light);
  color: var(--primary);
  justify-content: space-between;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>

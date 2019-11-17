<template>
  <div class="member level">
    <div class="member-username level-item">
      {{user.username}}
    </div>
    <div class="member-delay level-item has-text-primary-light has-background-primary-light">
      {{formatTime(user.score)}}
    </div>
  </div>
</template>

<script>

import moment from 'moment'
import {utcTimeToRelativeDays, utcTimeToRelativeSeconds, secondsToDays} from "../utils"

export default {
  name: "BoardMember",
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  computed: {
    readableDelay: function() {
      return moment.duration(this.delay).humanize()
    }
  },

  methods: {
      formatTime(seconds) {
      return secondsToDays(utcTimeToRelativeSeconds(seconds))
    }
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
  opacity: 0.7;
}
.member-delay {
  /* color: var(--primary) */
}
</style>

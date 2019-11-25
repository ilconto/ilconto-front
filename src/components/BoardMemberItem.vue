<template>
<v-container>
    <v-layout row class="member">
    <v-flex md6 class="member-username">
      {{user.username}}
    </v-flex>
    <v-flex md6 class="member-delay" color="secondary">
      {{formatTime(user.score)}}
    </v-flex>
    <!-- <v-if> -->
      <v-btn id="reset-btn" @click=";" color="warning">Reset</v-btn>
    <!-- </v-if> -->
    
  </v-layout>
  
</v-container>

</template>

<style scoped>
.member {
  display: flex;
  font-size: 1.5em;
  position: relative;
  width: 100%;
  justify-content: space-between;
  padding: 0.5em;
  box-sizing: border-box;
  border-style: solid;
  border-radius: 10px;
}
.member-delay {
  color: var(--v-secondary-base)
}
#reset-btn {
  width: 2em;
}
</style>



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
    },
  //   confirmReset() {
  //     var boardID = this.boardID;
  //     this.$dialog.confirm({
  //       title: "Resetting your score",
  //       message:
  //         "Are you sure you want to <b>reset</b> your score? This action cannot be undone.",
  //       confirmText: "Reset score",
  //       type: "is-danger",
  //       hasIcon: true,
  //       onConfirm: () => {
  //         this.score = computeScore(Date.now() / 1000);
  //         axios({
  //           method: "patch",
  //           baseURL: process.env.VUE_APP_ROOT_API,
  //           url: `/boards/${boardID}/reset/${this.$session.get("user").id}`
  //         })
  //           .then(response => {})
  //           .catch(error => {
  //             this.score = computeScore(this.member.last_time); // abort modification if request failed
  //             console.log(error);
  //           });
  //       }
  //     });
  //   }
  // },
  // mounted() {
    
  }
};
</script>


